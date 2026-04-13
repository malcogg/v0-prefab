import { getSql } from "@/lib/db"
import { buildInquirySubmissionSchema } from "@/lib/submission-schemas"
import { getClientIp, jsonError, readRequestBody, zodErrorToJson } from "@/app/api/_utils"
import {
  buildInquiryTeamNotificationEmail,
  buildInquiryUserConfirmationEmail,
  emailSubjects,
} from "@/lib/email/transactional"
import { getTeamInbox } from "@/lib/email/config"
import { notifyTeam, sendEmail } from "@/lib/email/send"

export async function POST(req: Request) {
  try {
    const raw = await readRequestBody(req)
    const parsed = buildInquirySubmissionSchema.safeParse(raw)
    if (!parsed.success) {
      return jsonError(400, "Invalid form submission", zodErrorToJson(parsed.error))
    }

    const userAgent = req.headers.get("user-agent")
    const ip = getClientIp(req)
    const v = parsed.data
    const sql = getSql()
    await sql`
      insert into build_inquiries (
        name,
        phone,
        email,
        hear_about,
        message,
        lot_json,
        model_id,
        customizations_json,
        user_agent,
        ip
      ) values (
        ${v.name},
        ${v.phone},
        ${v.email},
        ${v.hearAbout},
        ${v.message},
        ${JSON.stringify(v.session.selectedLot)},
        ${v.session.selectedModelId},
        ${JSON.stringify(v.session.customizations)},
        ${userAgent},
        ${ip}
      )
    `

    const lotCity = v.session.selectedLot?.city
    const lotAddress = v.session.selectedLot?.address

    void Promise.all([
      sendEmail({
        to: v.email,
        subject: emailSubjects.buildUser(lotCity),
        html: buildInquiryUserConfirmationEmail(v),
        replyTo: getTeamInbox(),
      }).then((r) => {
        if (!r.ok && !("skipped" in r && r.skipped)) {
          console.error("[email] build inquiry user copy failed:", "error" in r ? r.error : r)
        }
      }),
      notifyTeam({
        subject: emailSubjects.buildTeam(v.name, lotAddress ?? undefined),
        html: buildInquiryTeamNotificationEmail(v, { ip, userAgent }),
        replyTo: v.email,
      }).then((r) => {
        if (!r.ok && !("skipped" in r && r.skipped)) {
          console.error("[email] build inquiry team copy failed:", "error" in r ? r.error : r)
        }
      }),
    ]).catch((err) => console.error("[email] build inquiry pipeline:", err))

    return Response.json({ ok: true })
  } catch (err) {
    console.error(err)
    return jsonError(500, "Server error")
  }
}
