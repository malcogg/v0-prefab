import { getSql } from "@/lib/db"
import { buildQualifyReport } from "@/lib/qualify/recommendations"
import { qualifyFullSubmissionSchema } from "@/lib/qualify/schema"
import { getClientIp, jsonError, readRequestBody, zodErrorToJson } from "@/app/api/_utils"
import { getTeamInbox } from "@/lib/email/config"
import {
  emailSubjects,
  qualifyTeamFullEmail,
  qualifyUserReportEmail,
} from "@/lib/email/transactional"
import { notifyTeam, sendEmail } from "@/lib/email/send"

export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    if (!process.env.NEON_DATABASE_URL) {
      return jsonError(503, "Qualification is temporarily unavailable (database not configured).")
    }

    const raw = await readRequestBody(req)
    const parsed = qualifyFullSubmissionSchema.safeParse(raw)
    if (!parsed.success) {
      return jsonError(400, "Invalid submission", zodErrorToJson(parsed.error))
    }

    const data = parsed.data
    const report = buildQualifyReport(data)
    const userAgent = req.headers.get("user-agent")
    const ip = getClientIp(req)

    const sql = getSql()
    await sql`
      insert into qualify_submissions (
        submission_kind,
        name,
        email,
        phone,
        zip,
        city,
        state_code,
        payload,
        report_json,
        user_agent,
        ip
      ) values (
        ${"full"},
        ${data.fullName},
        ${data.email},
        ${data.phone},
        ${data.zip},
        ${data.city.trim() || null},
        ${data.state.trim().toUpperCase() || null},
        ${JSON.stringify(data)},
        ${JSON.stringify(report)},
        ${userAgent},
        ${ip}
      )
    `

    void Promise.all([
      sendEmail({
        to: data.email,
        subject: emailSubjects.qualifyUserReport,
        html: qualifyUserReportEmail(data, report),
        replyTo: getTeamInbox(),
      }).then((r) => {
        if (!r.ok && !("skipped" in r && r.skipped)) {
          console.error("[email] qualify user copy failed:", "error" in r ? r.error : r)
        }
      }),
      notifyTeam({
        subject: emailSubjects.qualifyTeamFull(data.fullName),
        html: qualifyTeamFullEmail(data, report, { ip }),
        replyTo: data.email,
      }).then((r) => {
        if (!r.ok && !("skipped" in r && r.skipped)) {
          console.error("[email] qualify team copy failed:", "error" in r ? r.error : r)
        }
      }),
    ]).catch((err) => console.error("[email] qualify pipeline:", err))

    return Response.json({ ok: true, report })
  } catch (err) {
    console.error(err)
    const msg = err instanceof Error ? err.message : String(err)
    if (/qualify_submissions|relation .* does not exist/i.test(msg)) {
      return jsonError(
        503,
        "Database needs the qualify_submissions table. Run the latest section of db/schema.sql in Neon.",
      )
    }
    return jsonError(500, "Server error")
  }
}
