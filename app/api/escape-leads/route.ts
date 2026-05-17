import { getSql } from "@/lib/db"
import {
  escapeIntentTeamNotificationEmail,
  escapeIntentUserConfirmationEmail,
  emailSubjects,
} from "@/lib/email/transactional"
import { getTeamInbox } from "@/lib/email/config"
import { notifyTeam, sendEmail } from "@/lib/email/send"
import { escapePurchaseIntentSchema } from "@/lib/submission-schemas"
import { getClientIp, jsonError, readRequestBody, zodErrorToJson } from "@/app/api/_utils"

export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    if (!process.env.NEON_DATABASE_URL) {
      return jsonError(503, "Lead capture is temporarily unavailable (database not configured).")
    }

    const raw = await readRequestBody(req)
    const parsed = escapePurchaseIntentSchema.safeParse(raw)
    if (!parsed.success) {
      return jsonError(400, "Invalid submission", zodErrorToJson(parsed.error))
    }

    const userAgent = req.headers.get("user-agent")
    const ip = getClientIp(req)
    const v = parsed.data

    const sql = getSql()
    await sql`
      insert into escape_purchase_intent_leads (
        email,
        escape_model_slug,
        escape_model_label,
        state_code,
        land_situation,
        name,
        phone,
        user_agent,
        ip
      ) values (
        ${v.email},
        ${v.modelSlug},
        ${v.modelLabel},
        ${v.stateCode},
        ${v.landSituation},
        ${v.name || null},
        ${v.phone || null},
        ${userAgent},
        ${ip}
      )
    `

    void Promise.all([
      sendEmail({
        to: v.email,
        subject: emailSubjects.escapeIntentUser,
        html: escapeIntentUserConfirmationEmail(v),
        replyTo: getTeamInbox(),
      }).then((r) => {
        if (!r.ok && !("skipped" in r && r.skipped)) {
          console.error("[email] escape intent user copy failed:", "error" in r ? r.error : r)
        }
      }),
      notifyTeam({
        subject: emailSubjects.escapeIntentTeam(v.modelLabel),
        html: escapeIntentTeamNotificationEmail(v, { ip }),
        replyTo: v.email,
      }).then((r) => {
        if (!r.ok && !("skipped" in r && r.skipped)) {
          console.error("[email] escape intent team copy failed:", "error" in r ? r.error : r)
        }
      }),
    ]).catch((err) => console.error("[email] escape intent pipeline:", err))

    return Response.json({ ok: true })
  } catch (err) {
    console.error(err)
    const msg = err instanceof Error ? err.message : String(err)
    if (/escape_purchase_intent|relation .* does not exist/i.test(msg)) {
      return jsonError(
        503,
        "Database needs the escape_purchase_intent_leads table. Run the latest section of db/schema.sql in Neon.",
      )
    }
    return jsonError(500, "Server error")
  }
}
