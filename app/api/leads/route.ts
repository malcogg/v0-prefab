import { getSql } from "@/lib/db"
import { logApiError } from "@/lib/server/api-error-log"
import { leadSubmissionSchema } from "@/lib/submission-schemas"
import { getClientIp, jsonError, readRequestBody, zodErrorToJson } from "@/app/api/_utils"
import { getTeamInbox } from "@/lib/email/config"
import {
  emailSubjects,
  leadTeamNotificationEmail,
  leadUserConfirmationEmail,
} from "@/lib/email/transactional"
import { notifyTeam, sendEmail } from "@/lib/email/send"

export async function POST(req: Request) {
  try {
    const raw = await readRequestBody(req)
    const parsed = leadSubmissionSchema.safeParse(raw)
    if (!parsed.success) {
      return jsonError(400, "Invalid form submission", zodErrorToJson(parsed.error))
    }

    const userAgent = req.headers.get("user-agent")
    const ip = getClientIp(req)

    const v = parsed.data
    const sql = getSql()
    await sql`
      insert into leads (
        name, phone, email, address, owns_property, model_interest, user_agent, ip
      ) values (
        ${v.name}, ${v.phone}, ${v.email}, ${v.address}, ${v.owns_property}, ${v.model_interest}, ${userAgent}, ${ip}
      )
    `

    void Promise.all([
      sendEmail({
        to: v.email,
        subject: emailSubjects.leadUser,
        html: leadUserConfirmationEmail(v),
        replyTo: getTeamInbox(),
      }).then((r) => {
        if (!r.ok && !("skipped" in r && r.skipped)) {
          logApiError("email:lead-user", "error" in r ? r.error : r)
        }
      }),
      notifyTeam({
        subject: emailSubjects.leadTeam(v.name),
        html: leadTeamNotificationEmail(v, { ip }),
        replyTo: v.email,
      }).then((r) => {
        if (!r.ok && !("skipped" in r && r.skipped)) {
          logApiError("email:lead-team", "error" in r ? r.error : r)
        }
      }),
    ]).catch((err) => logApiError("email:lead-pipeline", err))

    return Response.json({ ok: true })
  } catch (err) {
    logApiError("leads", err)
    return jsonError(500, "Server error")
  }
}
