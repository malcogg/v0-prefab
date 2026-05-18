import {
  getClientIp,
  jsonError,
  readRequestBody,
  zodErrorToJson,
} from "@/app/api/_utils"
import {
  frostGuidanceForZone,
  homesteadReportForZone,
} from "@/lib/florida-homestead-zones"
import { getSql } from "@/lib/db"
import { logApiError } from "@/lib/server/api-error-log"
import { getTeamInbox } from "@/lib/email/config"
import {
  emailSubjects,
  homesteadZoneReportTeamEmail,
  homesteadZoneReportUserEmail,
} from "@/lib/email/transactional"
import { notifyTeam, sendEmailWithAttachments } from "@/lib/email/send"
import { buildHomesteadZonePdfBytes } from "@/lib/homestead-zone-pdf"
import {
  getLunarPlantingContextForZone,
  lunarRhythmHighlightsForReport,
} from "@/lib/lunar-planting"
import { homesteadZoneReportDownloadSchema } from "@/lib/submission-schemas"

export async function POST(req: Request) {
  try {
    const raw = await readRequestBody(req)
    const parsed = homesteadZoneReportDownloadSchema.safeParse(raw)
    if (!parsed.success) {
      return jsonError(400, "Invalid request", zodErrorToJson(parsed.error))
    }

    const v = parsed.data
    const userAgent = req.headers.get("user-agent")
    const ip = getClientIp(req)

    const lunarAt = new Date(v.lunarSnapshotIso)
    const report = homesteadReportForZone(v.zone)
    const frost = frostGuidanceForZone(v.zone)
    const lunar = getLunarPlantingContextForZone(v.zone, lunarAt)
    const seasonalAndLunarLines = [
      ...report.seasonalHighlights,
      ...lunarRhythmHighlightsForReport(v.zone, lunar),
    ]

    const generatedAt = new Date()

    const pdfBytes = await buildHomesteadZonePdfBytes({
      zone: v.zone,
      matchedLabel: v.matchedLabel,
      addressQuery: v.addressQuery,
      frost,
      report,
      lunar,
      seasonalAndLunarLines,
      generatedAt,
    })

    const snapshotJson = {
      frost: {
        lastFrostLabel: frost.lastFrostLabel,
        firstFrostLabel: frost.firstFrostLabel,
        narrative: frost.narrative,
      },
      matchedLabel: v.matchedLabel,
      addressQuery: v.addressQuery,
      lookupSource: v.lookupSource,
      isFloridaZip: v.isFloridaZip,
      seasonalAndLunarLines,
      report: {
        recommendedCrops: report.recommendedCrops,
        closedLoop: report.closedLoop,
        exteriorClimbing: report.exteriorClimbing,
        tubers: report.tubers,
        seasonalHighlights: report.seasonalHighlights,
        regenerative: report.regenerative,
      },
      lunar: lunar
        ? {
            phaseLabel: lunar.phaseLabel,
            moonSign: lunar.moonSign,
            illuminationPercent: lunar.illuminationPercent,
            guidanceParagraph: lunar.guidanceParagraph,
          }
        : null,
      generatedAtIso: generatedAt.toISOString(),
    }

    const filename = `Prefabricated-Homestead-Zone-${v.zone}.pdf`

    try {
      const sql = getSql()
      await sql`
        insert into homestead_zone_report_downloads (
          name, phone, email, zone, lookup_source, matched_label, is_florida_zip,
          address_query, lunar_snapshot_iso, snapshot_json, user_agent, ip
        ) values (
          ${v.name},
          ${v.phone},
          ${v.email},
          ${v.zone},
          ${v.lookupSource},
          ${v.matchedLabel},
          ${v.isFloridaZip},
          ${v.addressQuery || ""},
          ${v.lunarSnapshotIso},
          ${JSON.stringify(snapshotJson)},
          ${userAgent},
          ${ip}
        )
      `
    } catch (err) {
      logApiError("homestead-zone-report:db-insert", err)
      return jsonError(503, "Could not save your request. Try again in a few minutes.")
    }

    const userHtml = homesteadZoneReportUserEmail(v)
    const userSend = await sendEmailWithAttachments({
      to: v.email,
      subject: emailSubjects.homesteadZoneUser(v.zone),
      html: userHtml,
      replyTo: getTeamInbox(),
      attachments: [{ filename, content: pdfBytes }],
    })

    if (!userSend.ok && !("skipped" in userSend && userSend.skipped)) {
      logApiError("homestead-zone-report:user-email", "error" in userSend ? userSend.error : userSend)
    }

    const emailSent = userSend.ok === true

    void notifyTeam({
      subject: emailSubjects.homesteadZoneTeam(v.name, v.zone),
      html: homesteadZoneReportTeamEmail(v, { ip, userAgent }),
      replyTo: v.email,
    }).then((r) => {
      if (!r.ok && !("skipped" in r && r.skipped)) {
        logApiError("homestead-zone-report:team-notify", "error" in r ? r.error : r)
      }
    })

    return Response.json({
      ok: true,
      emailSent,
    })
  } catch (err) {
    logApiError("homestead-zone-report", err)
    return jsonError(500, "Server error")
  }
}
