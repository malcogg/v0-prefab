import { getSql } from "@/lib/db"
import { logApiError } from "@/lib/server/api-error-log"
import { progressionSubmissionSchema } from "@/lib/submission-schemas"
import { getClientIp, jsonError, readRequestBody, zodErrorToJson } from "@/app/api/_utils"
import { getTeamInbox } from "@/lib/email/config"
import {
  emailSubjects,
  progressionTeamNotificationEmail,
  progressionUserConfirmationEmail,
} from "@/lib/email/transactional"
import { notifyTeam, sendEmail } from "@/lib/email/send"

export async function POST(req: Request) {
  try {
    const raw = await readRequestBody(req)
    const parsed = progressionSubmissionSchema.safeParse(raw)
    if (!parsed.success) {
      return jsonError(400, "Invalid form submission", zodErrorToJson(parsed.error))
    }

    const userAgent = req.headers.get("user-agent")
    const ip = getClientIp(req)

    const v = parsed.data
    const sql = getSql()
    await sql`
      insert into progression_submissions (
        county,
        property_type,
        lot_size,
        hoa,
        flood_zone,
        goal,
        model_interest,
        name,
        email,
        phone,
        user_agent,
        ip
      ) values (
        ${v.county},
        ${v.propertyType},
        ${v.lotSize},
        ${v.hoa},
        ${v.floodZone},
        ${v.goal},
        ${v.modelInterest},
        ${v.name},
        ${v.email},
        ${v.phone},
        ${userAgent},
        ${ip}
      )
    `

    void Promise.all([
      sendEmail({
        to: v.email,
        subject: emailSubjects.progressionUser,
        html: progressionUserConfirmationEmail(v),
        replyTo: getTeamInbox(),
      }).then((r) => {
        if (!r.ok && !("skipped" in r && r.skipped)) {
          logApiError("email:progression-user", "error" in r ? r.error : r)
        }
      }),
      notifyTeam({
        subject: emailSubjects.progressionTeam(v.name),
        html: progressionTeamNotificationEmail(v, { ip }),
        replyTo: v.email,
      }).then((r) => {
        if (!r.ok && !("skipped" in r && r.skipped)) {
          logApiError("email:progression-team", "error" in r ? r.error : r)
        }
      }),
    ]).catch((err) => logApiError("email:progression-pipeline", err))

    return Response.json({ ok: true })
  } catch (err) {
    logApiError("progressions", err)
    return jsonError(500, "Server error")
  }
}
