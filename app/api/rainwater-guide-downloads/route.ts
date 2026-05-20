import { getClientIp, jsonError, readRequestBody, zodErrorToJson } from "@/app/api/_utils"
import { getSql } from "@/lib/db"
import { getTeamInbox } from "@/lib/email/config"
import {
  emailSubjects,
  rainwaterGuideDownloadTeamEmail,
  rainwaterGuideDownloadUserEmail,
} from "@/lib/email/transactional"
import { notifyTeam, sendEmail } from "@/lib/email/send"
import { logApiError } from "@/lib/server/api-error-log"
import { rainwaterGuideDownloadSchema } from "@/lib/submission-schemas"

export const runtime = "nodejs"

const PDF_DOWNLOAD_PATH = "/downloads/florida-rainwater-resilience-guide.pdf"

export async function POST(req: Request) {
  try {
    const raw = await readRequestBody(req)
    const parsed = rainwaterGuideDownloadSchema.safeParse(raw)
    if (!parsed.success) {
      return jsonError(400, "Invalid download request", zodErrorToJson(parsed.error))
    }

    const userAgent = req.headers.get("user-agent")
    const ip = getClientIp(req)
    const v = parsed.data

    try {
      const sql = getSql()
      await sql`
        insert into rainwater_guide_downloads (
          name, email, source, user_agent, ip
        ) values (
          ${v.name}, ${v.email}, ${v.source}, ${userAgent}, ${ip}
        )
      `
    } catch (err) {
      logApiError("rainwater-guide:db-insert", err)
    }

    void Promise.all([
      sendEmail({
        to: v.email,
        subject: emailSubjects.rainwaterGuideUser,
        html: rainwaterGuideDownloadUserEmail(v),
        replyTo: getTeamInbox(),
      }).then((r) => {
        if (!r.ok && !("skipped" in r && r.skipped)) {
          logApiError("email:rainwater-guide-user", "error" in r ? r.error : r)
        }
      }),
      notifyTeam({
        subject: emailSubjects.rainwaterGuideTeam(v.name),
        html: rainwaterGuideDownloadTeamEmail(v, { ip, userAgent }),
        replyTo: v.email,
      }).then((r) => {
        if (!r.ok && !("skipped" in r && r.skipped)) {
          logApiError("email:rainwater-guide-team", "error" in r ? r.error : r)
        }
      }),
    ]).catch((err) => logApiError("email:rainwater-guide-pipeline", err))

    return Response.json({ ok: true, url: PDF_DOWNLOAD_PATH })
  } catch (err) {
    logApiError("rainwater-guide-downloads", err)
    return jsonError(500, "Server error")
  }
}
