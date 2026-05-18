import { getClientIp, jsonError, readRequestBody, zodErrorToJson } from "@/app/api/_utils"
import { getSql } from "@/lib/db"
import { logApiError } from "@/lib/server/api-error-log"
import { getTeamInbox } from "@/lib/email/config"
import { notifyTeam, sendEmail } from "@/lib/email/send"
import {
  emailSubjects,
  starterKitDownloadTeamEmail,
  starterKitDownloadUserEmail,
} from "@/lib/email/transactional"
import { starterKitDownloadSchema } from "@/lib/submission-schemas"

export async function POST(req: Request) {
  try {
    const raw = await readRequestBody(req)
    const parsed = starterKitDownloadSchema.safeParse(raw)
    if (!parsed.success) {
      return jsonError(400, "Invalid starter kit download", zodErrorToJson(parsed.error))
    }

    const userAgent = req.headers.get("user-agent")
    const ip = getClientIp(req)
    const v = parsed.data

    try {
      const sql = getSql()
      await sql`
        insert into starter_kit_downloads (
          name, email, source, user_agent, ip
        ) values (
          ${v.name}, ${v.email}, ${v.source}, ${userAgent}, ${ip}
        )
      `
    } catch (err) {
      logApiError("starter-kit:db-insert", err)
    }

    void Promise.all([
      sendEmail({
        to: v.email,
        subject: emailSubjects.starterKitUser,
        html: starterKitDownloadUserEmail(v),
        replyTo: getTeamInbox(),
      }).then((r) => {
        if (!r.ok && !("skipped" in r && r.skipped)) {
          logApiError("email:starter-kit-user", "error" in r ? r.error : r)
        }
      }),
      notifyTeam({
        subject: emailSubjects.starterKitTeam(v.name),
        html: starterKitDownloadTeamEmail(v, { ip, userAgent }),
        replyTo: v.email,
      }).then((r) => {
        if (!r.ok && !("skipped" in r && r.skipped)) {
          logApiError("email:starter-kit-team", "error" in r ? r.error : r)
        }
      }),
    ]).catch((err) => logApiError("email:starter-kit-pipeline", err))

    return Response.json({ ok: true, url: "/free-adu-course/starter-kit" })
  } catch (err) {
    logApiError("starter-kit-downloads", err)
    return jsonError(500, "Server error")
  }
}
