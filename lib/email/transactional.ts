import type { z } from "zod"
import type { BuildSession } from "@/lib/build/session"
import { getSelectedModel } from "@/lib/build/session"
import { emailLayout } from "@/lib/email/layout"
import {
  buildInquirySubmissionSchema,
  escapePurchaseIntentSchema,
  homesteadZoneReportDownloadSchema,
  leadSubmissionSchema,
  progressionSubmissionSchema,
  starterKitDownloadSchema,
} from "@/lib/submission-schemas"
import type { QualifyFullSubmission, HomeInterestSubmission } from "@/lib/qualify/schema"
import type { QualifyReport } from "@/lib/qualify/types"

type EscapePurchaseIntent = z.infer<typeof escapePurchaseIntentSchema>
type LeadPayload = z.infer<typeof leadSubmissionSchema>
type BuildPayload = z.infer<typeof buildInquirySubmissionSchema>
type ProgressionPayload = z.infer<typeof progressionSubmissionSchema>
type StarterKitDownloadPayload = z.infer<typeof starterKitDownloadSchema>
type HomesteadZoneDl = z.infer<typeof homesteadZoneReportDownloadSchema>

function telHref(phone: string): string {
  const digits = phone.replace(/\D/g, "")
  if (digits.length === 10) return `tel:+1${digits}`
  if (digits.length === 11 && digits.startsWith("1")) return `tel:+${digits}`
  return digits ? `tel:+${digits}` : "tel:"
}

const MODEL_INTEREST_LABELS: Record<string, string> = {
  "20ft-studio": "20ft Studio (~$50K–$100K)",
  "40ft-1bed": "40ft 1-Bedroom (~$100K–$155K)",
  traditional: "Traditional site-built ($200K+)",
  "not-sure": "Not sure yet",
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function p(text: string) {
  return `<p style="margin:0 0 14px;">${text}</p>`
}

function h2(text: string) {
  return `<h2 style="margin:0 0 16px;font-size:20px;font-weight:700;color:#111;font-family:Georgia,serif;">${text}</h2>`
}

function button(href: string, label: string) {
  return `<p style="margin:20px 0 0;">
    <a href="${href}" style="display:inline-block;background-color:#0F6E56;color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:6px;font-weight:600;font-size:14px;">${label}</a>
  </p>`
}

/** --- Lead form (homepage / local pages) --- */

export function leadUserConfirmationEmail(lead: LeadPayload) {
  const model =
    MODEL_INTEREST_LABELS[lead.model_interest] ?? esc(lead.model_interest)
  const inner = `
 ${h2(`Thanks, ${esc(lead.name.split(" ")[0] || lead.name)}`)}
    ${p("We received your request for a <strong>free property evaluation</strong>. Our team will review your details and reach out within <strong>one business day</strong>.")}
    ${p(`<strong>Property:</strong> ${esc(lead.address)}<br/>
 <strong>Owns property:</strong> ${esc(lead.owns_property)}<br/>
        <strong>Model interest:</strong> ${esc(model)}`)}
    ${p("If anything about your lot or goals changed, just reply to this email or call us at <a href=\"tel:+13217473778\" style=\"color:#0F6E56;\">(321) 747-3778</a>.")}
    ${button("https://www.prefabricated.co", "Visit PreFabricated.co")}
  `
  return emailLayout({
    title: "We received your evaluation request",
    preheader: "We’ll review your property and follow up within one business day.",
    innerHtml: inner,
  })
}

export function leadTeamNotificationEmail(lead: LeadPayload, meta: { ip: string | null }) {
  const model =
    MODEL_INTEREST_LABELS[lead.model_interest] ?? esc(lead.model_interest)
  const inner = `
    ${h2("New lead — free property evaluation")}
    ${p(`<strong>Name:</strong> ${esc(lead.name)}<br/>
        <strong>Email:</strong> <a href="mailto:${esc(lead.email)}" style="color:#0F6E56;">${esc(lead.email)}</a><br/>
        <strong>Phone:</strong> <a href="${telHref(lead.phone)}" style="color:#0F6E56;">${esc(lead.phone)}</a><br/>
        <strong>Address:</strong> ${esc(lead.address)}<br/>
        <strong>Owns property:</strong> ${esc(lead.owns_property)}<br/>
        <strong>Model interest:</strong> ${esc(model)}`)}
    ${p(`<strong>IP:</strong> ${esc(meta.ip ?? "—")}`)}
 `
  return emailLayout({
    title: "New lead",
    preheader: `New evaluation request from ${lead.name}`,
    innerHtml: inner,
  })
}

/** --- Build configurator --- */

export function buildInquiryUserConfirmationEmail(payload: BuildPayload) {
  const lot = payload.session.selectedLot
  const model = getSelectedModel(
    payload.session.selectedModelId as BuildSession["selectedModelId"],
  )
  const lotLine = lot ? `${esc(lot.address)}, ${esc(lot.city)}` : "—"
  const modelLine = model ? esc(model.name) : esc(payload.session.selectedModelId ?? "—")

  const inner = `
    ${h2(`Hi ${esc(payload.name.split(" ")[0] || payload.name)}, your build summary`)}
    ${p("Thanks for submitting your <strong>home configuration</strong>. Here’s what we have on file:")}
    ${p(`${lot ? `<strong>Lot:</strong> ${lotLine}<br/>` : ""}<strong>Home model:</strong> ${modelLine}<br/>
        <strong>How you heard about us:</strong> ${esc(payload.hearAbout || "—")}`)}
    ${p("<strong>Your message:</strong><br/>" + esc(payload.message || "—").replace(/\n/g, "<br/>"))}
    ${p("We’ll review your selections" + (lot ? ", run a zoning check on the lot where applicable," : "") + " and contact you within <strong>one business day</strong>.")}
    ${p("<em>This is an inquiry only — not a purchase agreement or contract.</em>")}
    ${button("https://www.prefabricated.co/build?step=1", "Return to build configurator")}
  `
  return emailLayout({
    title: "Your build inquiry",
    preheader: "We received your home configuration.",
    innerHtml: inner,
  })
}

export function buildInquiryTeamNotificationEmail(
  payload: BuildPayload,
  meta: { ip: string | null; userAgent: string | null },
) {
  const lot = payload.session.selectedLot
  const model = getSelectedModel(
    payload.session.selectedModelId as BuildSession["selectedModelId"],
  )
  const lotJson = JSON.stringify(payload.session.selectedLot, null, 2)
  const customJson = JSON.stringify(payload.session.customizations, null, 2)

  const inner = `
    ${h2("New build inquiry")}
    ${p(`<strong>Name:</strong> ${esc(payload.name)}<br/>
        <strong>Email:</strong> <a href="mailto:${esc(payload.email)}">${esc(payload.email)}</a><br/>
        <strong>Phone:</strong> ${esc(payload.phone)}<br/>
        <strong>Hear about:</strong> ${esc(payload.hearAbout || "—")}`)}
    ${p(`<strong>Lot / site:</strong> ${lot ? esc(`${lot.address}, ${lot.city}`) : "Not specified — to be discussed at evaluation"}<br/>
        <strong>Model:</strong> ${model ? esc(model.name) : esc(payload.session.selectedModelId ?? "—")}`)}
    ${p(`<strong>Message:</strong><br/>${esc(payload.message || "—").replace(/\n/g, "<br/>")}`)}
    ${p(`<strong>IP:</strong> ${esc(meta.ip ?? "—")}<br/><strong>User-Agent:</strong> ${esc(meta.userAgent ?? "—")}`)}
    <p style="margin:16px 0 8px;font-size:13px;font-weight:600;color:#333;">Lot JSON</p>
    <pre style="margin:0 0 16px;padding:12px;background:#f6f6f6;border-radius:6px;font-size:11px;overflow:auto;white-space:pre-wrap;">${esc(lotJson)}</pre>
    <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#333;">Customizations JSON</p>
    <pre style="margin:0;padding:12px;background:#f6f6f6;border-radius:6px;font-size:11px;overflow:auto;white-space:pre-wrap;">${esc(customJson)}</pre>
  `
  return emailLayout({
    title: "Build inquiry",
    preheader: `Build inquiry from ${payload.name}`,
    innerHtml: inner,
  })
}

/** --- Quiz / progression --- */

export function progressionUserConfirmationEmail(data: ProgressionPayload) {
  const inner = `
    ${h2(`Thanks, ${esc(data.name.split(" ")[0] || data.name)}`)}
    ${p("We received your <strong>ADU readiness</strong> answers. A team member will follow up within <strong>one business day</strong> with next steps for your property.")}
    ${p("Here’s a quick recap of what you told us:")}
    ${p(`<strong>County:</strong> ${esc(data.county)}<br/>
        <strong>Property type:</strong> ${esc(data.propertyType)}<br/>
        <strong>Lot size:</strong> ${esc(data.lotSize)}<br/>
        <strong>HOA:</strong> ${esc(data.hoa)}<br/>
        <strong>Flood zone:</strong> ${esc(data.floodZone)}<br/>
        <strong>Goal:</strong> ${esc(data.goal)}<br/>
        <strong>Model interest:</strong> ${esc(data.modelInterest)}`)}
    ${button("https://www.prefabricated.co/adu-calculator", "Try the ADU calculator")}
  `
  return emailLayout({
    title: "We received your ADU quiz",
    preheader: "We’ll follow up within one business day.",
    innerHtml: inner,
  })
}

export function progressionTeamNotificationEmail(
  data: ProgressionPayload,
  meta: { ip: string | null },
) {
  const inner = `
    ${h2("New progression / quiz submission")}
    ${p(`<strong>Name:</strong> ${esc(data.name)}<br/>
        <strong>Email:</strong> <a href="mailto:${esc(data.email)}">${esc(data.email)}</a><br/>
        <strong>Phone:</strong> ${esc(data.phone)}`)}
    ${p(`<strong>County:</strong> ${esc(data.county)}<br/>
        <strong>Property type:</strong> ${esc(data.propertyType)}<br/>
        <strong>Lot size:</strong> ${esc(data.lotSize)}<br/>
        <strong>HOA:</strong> ${esc(data.hoa)}<br/>
        <strong>Flood zone:</strong> ${esc(data.floodZone)}<br/>
        <strong>Goal:</strong> ${esc(data.goal)}<br/>
        <strong>Model interest:</strong> ${esc(data.modelInterest)}`)}
    ${p(`<strong>IP:</strong> ${esc(meta.ip ?? "—")}`)}
  `
  return emailLayout({
    title: "Quiz submission",
    preheader: `Quiz lead: ${data.name}`,
    innerHtml: inner,
  })
}

/** --- Starter kit download --- */

export function starterKitDownloadUserEmail(data: StarterKitDownloadPayload) {
  const inner = `
    ${h2(`Thanks, ${esc(data.name.split(" ")[0] || data.name)}`)}
    ${p("Here is your <strong>Florida ADU & Backyard Income Starter Kit</strong>. Open the printable page, then use your browser's print dialog to save it as a PDF.")}
    ${button("https://www.prefabricated.co/free-adu-course/starter-kit", "Open the Starter Kit")}
    ${p("When you are ready for a property-specific next step, you can request a free property evaluation from Prefabricated.co.")}
  `
  return emailLayout({
    title: "Your ADU starter kit",
    preheader: "Open your printable Florida ADU & Backyard Income Starter Kit.",
    innerHtml: inner,
  })
}

export function starterKitDownloadTeamEmail(
  data: StarterKitDownloadPayload,
  meta: { ip: string | null; userAgent: string | null },
) {
  const inner = `
    ${h2("New starter kit download")}
    ${p(`<strong>Name:</strong> ${esc(data.name)}<br/>
        <strong>Email:</strong> <a href="mailto:${esc(data.email)}" style="color:#0F6E56;">${esc(data.email)}</a><br/>
        <strong>Source:</strong> ${esc(data.source)}`)}
    ${p(`<strong>IP:</strong> ${esc(meta.ip ?? "—")}<br/><strong>User-Agent:</strong> ${esc(meta.userAgent ?? "—")}`)}
  `
  return emailLayout({
    title: "Starter kit download",
    preheader: `Starter kit download: ${data.name}`,
    innerHtml: inner,
  })
}

/** --- Homestead zone tool PDF --- */

export function homesteadZoneReportUserEmail(data: HomesteadZoneDl) {
  const inner = `
    ${h2(`Your Zone ${esc(data.zone)} homestead report`)}
    ${p("Attached is your personalized PDF with recommended crops, closed-loop ideas, frost context, seasonal highlights, and the lunar snapshot from when you ran the tool.")}
    ${p("Hardiness zones here are estimates—please confirm your half-zone on the <a href=\"https://planthardiness.ars.usda.gov/\" style=\"color:#0F6E56;\">USDA ARS interactive map</a>. Moon rhythm is almanac-style pacing, not a substitute for local Extension advice.")}
    ${p(`<strong>Lookup:</strong> ${esc(data.matchedLabel)}<br/>
        <strong>Search:</strong> ${esc(data.addressQuery || "—")}`)}
    ${p("Questions? Reply to this email or call us at <a href=\"tel:+13217473778\" style=\"color:#0F6E56;\">(321) 747-3778</a>.")}
    ${button("https://www.prefabricated.co/florida-growing-zones-homestead-planning", "Return to the zone tool")}
  `
  return emailLayout({
    title: `Zone ${data.zone} report`,
    preheader: `Your Florida homestead PDF for Zone ${data.zone}`,
    innerHtml: inner,
  })
}

export function homesteadZoneReportTeamEmail(
  data: HomesteadZoneDl,
  meta: { ip: string | null; userAgent: string | null },
) {
  const inner = `
    ${h2(`Homestead zone PDF — ${esc(data.name)}`)}
    ${p(`<strong>Email:</strong> <a href="mailto:${esc(data.email)}" style="color:#0F6E56;">${esc(data.email)}</a><br/>
        <strong>Phone:</strong> <a href="${telHref(data.phone)}" style="color:#0F6E56;">${esc(data.phone)}</a><br/>
        <strong>Zone:</strong> ${esc(data.zone)} (${esc(data.lookupSource)})<br/>
        <strong>Matched:</strong> ${esc(data.matchedLabel)}<br/>
        <strong>Florida ZIP:</strong> ${data.isFloridaZip ? "yes" : "no"}<br/>
        <strong>Lunar ISO:</strong> ${esc(data.lunarSnapshotIso)}`)}
    ${p(`<strong>IP:</strong> ${esc(meta.ip ?? "—")}<br/><strong>User-Agent:</strong> ${esc(meta.userAgent ?? "—")}`)}
  `
  return emailLayout({
    title: "Homestead zone PDF download",
    preheader: `${data.name} · Zone ${data.zone}`,
    innerHtml: inner,
  })
}

/** --- Escape model “coming soon” purchase intent --- */

export function escapeIntentUserConfirmationEmail(data: EscapePurchaseIntent) {
  const inner = `
    ${h2("You're on the list")}
    ${p(`Thanks — we saved your interest in <strong>${esc(data.modelLabel)}</strong>. Checkout isn’t open yet; we’ll email you when purchases go live for your area.`)}
    ${p(`<strong>State:</strong> ${esc(data.stateCode)}<br/><strong>Site notes:</strong><br/>${esc(data.landSituation).replace(/\n/g, "<br/>")}`)}
    ${p("Our team reviews every submission to confirm what’s realistic for your state and site before we take payment.")}
    ${p("Questions? Reply to this email or call us at <a href=\"tel:+13217473778\" style=\"color:#0F6E56;\">(321) 747-3778</a>.")}
    ${button("https://www.prefabricated.co/escape-tiny-homes", "Browse all Escape models")}
  `
  return emailLayout({
    title: "Escape model — we’ll follow up",
    preheader: `${data.modelLabel} · ${data.stateCode}`,
    innerHtml: inner,
  })
}

export function escapeIntentTeamNotificationEmail(data: EscapePurchaseIntent, meta: { ip: string | null }) {
  const inner = `
    ${h2("Escape purchase intent (checkout coming soon)")}
    ${p(`<strong>Model:</strong> ${esc(data.modelLabel)} <small>(${esc(data.modelSlug)})</small><br/>
        <strong>Email:</strong> <a href="mailto:${esc(data.email)}" style="color:#0F6E56;">${esc(data.email)}</a><br/>
        ${data.name ? `<strong>Name:</strong> ${esc(data.name)}<br/>` : ""}
        ${data.phone ? `<strong>Phone:</strong> ${esc(data.phone)}<br/>` : ""}
        <strong>State:</strong> ${esc(data.stateCode)}<br/>
        <strong>Land / placement:</strong><br/>${esc(data.landSituation).replace(/\n/g, "<br/>")}`)}
    ${p(`<strong>IP:</strong> ${esc(meta.ip ?? "—")}`)}
  `
  return emailLayout({
    title: "Escape intent lead",
    preheader: `${data.modelLabel} · ${data.email}`,
    innerHtml: inner,
  })
}

function qualifyReportInnerHtml(data: QualifyFullSubmission, report: QualifyReport) {
  const first = esc(data.fullName.split(" ")[0] || data.fullName)
  const summaryList = `<ul style="margin:0 0 18px;padding-left:20px;">${report.summaryBullets
    .map((b) => `<li style="margin:0 0 8px;line-height:1.5;">${esc(b)}</li>`)
    .join("")}</ul>`
  const modelsBlock =
    report.models.length > 0
      ? `${h2("Models to explore")}
    <ul style="margin:0 0 18px;padding-left:20px;">
      ${report.models
        .map(
          (m) =>
            `<li style="margin:0 0 12px;line-height:1.5;"><strong>${esc(m.label)}</strong><br/>${esc(m.reason)}<br/><a href="${m.href}" style="color:#0F6E56;">View details →</a></li>`,
        )
        .join("")}
    </ul>`
      : ""
  const flBlock =
    report.floridaNotes && report.floridaNotes.length
      ? `${h2("Florida & site considerations")}
    ${report.floridaNotes.map((n) => p(`• ${esc(n)}`)).join("")}`
      : ""
  const next = report.nextSteps
    .map(
      (s) =>
        `<p style="margin:8px 0;"><a href="${s.href}" style="color:#0F6E56;font-weight:600;">${esc(s.label)} →</a></p>`,
    )
    .join("")
  return `
    ${h2(`Hi ${first}, your personalized snapshot`)}
    ${p("Thanks for completing the qualification path. Here is a concise summary our team will use — and you can keep this email for reference.")}
    ${summaryList}
    ${modelsBlock}
    ${flBlock}
    ${h2("Timeline")}
    ${p(esc(report.timelineSummary))}
    ${h2("Helpful links")}
    ${next}
    ${p('Questions? Reply to this message or call <a href="tel:+13217473778" style="color:#0F6E56;">(321) 747-3778</a>.')}
    ${p("<em>We respect your privacy — your details are used only to prepare recommendations and follow up.</em>")}
  `
}

export function qualifyUserReportEmail(data: QualifyFullSubmission, report: QualifyReport) {
  return emailLayout({
    title: "Your project snapshot",
    preheader: "Models, Florida notes, and next steps based on what you shared.",
    innerHtml: qualifyReportInnerHtml(data, report),
  })
}

export function qualifyTeamFullEmail(
  data: QualifyFullSubmission,
  report: QualifyReport,
  meta: { ip: string | null },
) {
  const raw = JSON.stringify(data, null, 2)
  const reportRaw = JSON.stringify(report, null, 2)
  const inner = `
    ${h2("New full qualification lead")}
    ${p(`<strong>Name:</strong> ${esc(data.fullName)}<br/>
        <strong>Email:</strong> <a href="mailto:${esc(data.email)}">${esc(data.email)}</a><br/>
        <strong>Phone:</strong> <a href="${telHref(data.phone)}">${esc(data.phone)}</a><br/>
        <strong>ZIP:</strong> ${esc(data.zip)} ${data.city ? `· ${esc(data.city)}` : ""} ${data.state ? esc(data.state) : ""}`)}
    ${p(`<strong>IP:</strong> ${esc(meta.ip ?? "—")}`)}
    <p style="margin:16px 0 8px;font-size:13px;font-weight:600;color:#333;">Form payload</p>
    <pre style="margin:0 0 16px;padding:12px;background:#f6f6f6;border-radius:6px;font-size:11px;overflow:auto;white-space:pre-wrap;">${esc(raw)}</pre>
    <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#333;">Generated report JSON</p>
    <pre style="margin:0;padding:12px;background:#f6f6f6;border-radius:6px;font-size:11px;overflow:auto;white-space:pre-wrap;">${esc(reportRaw)}</pre>
  `
  return emailLayout({
    title: "Qualify lead",
    preheader: `${data.fullName} · ${data.email}`,
    innerHtml: inner,
  })
}

const INTEREST_LABELS: Record<string, string> = {
  tiny_homes: "Tiny homes (Escape)",
  adu: "ADU / backyard home",
  earthnest: "EarthNest / prefab cabin",
  village: "Village / rental",
  not_sure: "Still exploring",
}

export function homeInterestUserEmail(data: HomeInterestSubmission) {
  const labels = data.interests.map((i) => INTEREST_LABELS[i] ?? i).join(", ")
  const first = esc(data.name.split(" ")[0] || data.name)
  const inner = `
    ${h2(`Hi ${first}, we got your note`)}
    ${p("Thanks for reaching out from the homepage. We’ll review what you shared and follow up within <strong>one business day</strong>.")}
    ${p(`<strong>Interests:</strong> ${esc(labels)}<br/><strong>ZIP:</strong> ${esc(data.zip)}`)}
    ${data.message ? p("<strong>Your message:</strong><br/>" + esc(data.message).replace(/\n/g, "<br/>")) : ""}
    ${p("Want a deeper, property-specific pass? Complete the full qualification — it helps us prep zoning-aware recommendations.")}
    ${button("https://www.prefabricated.co/qualify", "Open full qualification")}
    ${button("https://www.prefabricated.co", "Visit Prefabricated.co")}
  `
  return emailLayout({
    title: "We received your message",
    preheader: "A team member will follow up shortly.",
    innerHtml: inner,
  })
}

export function homeInterestTeamEmail(data: HomeInterestSubmission, meta: { ip: string | null }) {
  const labels = data.interests.map((i) => INTEREST_LABELS[i] ?? i).join(", ")
  const inner = `
    ${h2("Homepage interest")}
    ${p(`<strong>Name:</strong> ${esc(data.name)}<br/>
        <strong>Email:</strong> <a href="mailto:${esc(data.email)}">${esc(data.email)}</a><br/>
        ${data.phone ? `<strong>Phone:</strong> ${esc(data.phone)}<br/>` : ""}
        <strong>ZIP:</strong> ${esc(data.zip)}<br/>
        <strong>Interests:</strong> ${esc(labels)}`)}
    ${data.message ? p("<strong>Message:</strong><br/>" + esc(data.message).replace(/\n/g, "<br/>")) : ""}
    ${p(`<strong>IP:</strong> ${esc(meta.ip ?? "—")}`)}
  `
  return emailLayout({
    title: "Homepage lead",
    preheader: `${data.name} · ${data.email}`,
    innerHtml: inner,
  })
}

/** Subjects */

export const emailSubjects = {
  leadUser: "We received your property evaluation request",
  leadTeam: (name: string) => `New lead: ${name}`,
  buildUser: (city?: string) =>
    `Your PreFabricated.co build summary${city ? ` — ${city}, FL` : ""}`,
  buildTeam: (name: string, lot?: string) =>
    `New build inquiry — ${name}${lot ? ` | ${lot}` : ""}`,
  progressionUser: "We received your ADU quiz",
  progressionTeam: (name: string) => `New ADU quiz — ${name}`,
  starterKitUser: "Your Florida ADU starter kit",
  starterKitTeam: (name: string) => `New starter kit download — ${name}`,
  homesteadZoneUser: (zone: string) => `Your Zone ${zone} Florida homestead PDF | Prefabricated.co`,
  homesteadZoneTeam: (name: string, zone: string) => `Homestead PDF — ${name} · Zone ${zone}`,
  escapeIntentUser: "We received your Escape model request",
  escapeIntentTeam: (model: string) => `Escape intent — ${model}`,
  qualifyUserReport: "Your Prefabricated.co project snapshot",
  qualifyTeamFull: (name: string) => `Full qualify lead — ${name}`,
  homeInterestUser: "We received your message",
  homeInterestTeam: (name: string) => `Homepage interest — ${name}`,
} as const

/** --- Marketing / follow-up (drafts for Resend broadcasts or automations) --- */

export function marketingNurtureDraftHtml() {
  const inner = `
    ${h2("Still exploring an ADU or tiny home?")}
    ${p("Here are three quick wins most Florida homeowners ask us about first:")}
    ${p(
      "• <strong>Zoning first</strong> — rules change by city and county; we verify your parcel before design.<br/>" +
        "• <strong>Budget bands</strong> — container-style units often start lower; traditional site-built ADUs typically start around <strong>$200K+</strong> installed.<br/>" +
        "• <strong>Timeline</strong> — permitting and utility coordination usually drive the calendar more than construction.",
    )}
    ${p('Reply to this email or call <a href="tel:+13217473778" style="color:#0F6E56;">(321) 747-3778</a> when you’re ready for a no-pressure review.')}
    ${button("https://www.prefabricated.co/qualify", "Request a free evaluation")}
  `
  return emailLayout({
    title: "ADU tips",
    preheader: "Zoning, budget, and timeline — a quick checklist.",
    innerHtml: inner,
  })
}

export const marketingDrafts = {
  nurtureFollowUp: {
    subject: "Quick ADU checklist (Florida)",
    html: marketingNurtureDraftHtml,
  },
} as const
