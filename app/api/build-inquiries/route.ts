import { getSql } from "@/lib/db"
import { buildInquirySubmissionSchema } from "@/lib/submission-schemas"
import { getClientIp, jsonError, readRequestBody, zodErrorToJson } from "@/app/api/_utils"
import {
  buildSummaryEmailHtml,
  buildSummaryEmailSubject,
  internalLeadEmailSubject,
} from "@/lib/build/email-templates"

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
    const userEmailSubject = buildSummaryEmailSubject(lotCity)
    const userEmailHtml = buildSummaryEmailHtml({ recipientName: v.name, session: v.session })
    const teamEmailSubject = internalLeadEmailSubject(v.name, lotAddress)
    void userEmailSubject
    void userEmailHtml
    void teamEmailSubject
    // Phase 2 hook: send user/team notification emails via provider here.

    return Response.json({ ok: true })
  } catch (err) {
    console.error(err)
    return jsonError(500, "Server error")
  }
}
