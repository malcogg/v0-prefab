import { getClientIp, jsonError, readRequestBody, zodErrorToJson } from "@/app/api/_utils"
import { getSql } from "@/lib/db"
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
      console.error("[starter-kit] database insert failed:", err)
    }

    void Promise.all([
      sendEmail({
        to: v.email,
        subject: emailSubjects.starterKitUser,
        html: starterKitDownloadUserEmail(v),
        replyTo: getTeamInbox(),
      }).then((r) => {
        if (!r.ok && !("skipped" in r && r.skipped)) {
          console.error("[email] starter kit user copy failed:", "error" in r ? r.error : r)
        }
      }),
      notifyTeam({
        subject: emailSubjects.starterKitTeam(v.name),
        html: starterKitDownloadTeamEmail(v, { ip, userAgent }),
        replyTo: v.email,
      }).then((r) => {
        if (!r.ok && !("skipped" in r && r.skipped)) {
          console.error("[email] starter kit team copy failed:", "error" in r ? r.error : r)
        }
      }),
    ]).catch((err) => console.error("[email] starter kit pipeline:", err))

    return Response.json({ ok: true, url: "/free-adu-course/starter-kit" })
  } catch (err) {
    console.error(err)
    return jsonError(500, "Server error")
  }
}
