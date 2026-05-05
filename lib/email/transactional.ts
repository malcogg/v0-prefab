import type { z } from "zod"
import type { BuildSession } from "@/lib/build/session"
import { getSelectedModel } from "@/lib/build/session"
import { emailLayout } from "@/lib/email/layout"
import {
  buildInquirySubmissionSchema,
  leadSubmissionSchema,
  progressionSubmissionSchema,
  starterKitDownloadSchema,
} from "@/lib/submission-schemas"

type LeadPayload = z.infer<typeof leadSubmissionSchema>
type BuildPayload = z.infer<typeof buildInquirySubmissionSchema>
type ProgressionPayload = z.infer<typeof progressionSubmissionSchema>
type StarterKitDownloadPayload = z.infer<typeof starterKitDownloadSchema>

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
    ${p("Thanks for submitting your <strong>land + home</strong> inquiry. Here’s what we have on file:")}
    ${p(`<strong>Lot:</strong> ${lotLine}<br/>
        <strong>Home model:</strong> ${modelLine}<br/>
        <strong>How you heard about us:</strong> ${esc(payload.hearAbout || "—")}`)}
    ${p("<strong>Your message:</strong><br/>" + esc(payload.message || "—").replace(/\n/g, "<br/>"))}
    ${p("We’ll review your selections, run a zoning check on the lot where applicable, and contact you within <strong>one business day</strong>.")}
    ${p("<em>This is an inquiry only — not a purchase agreement or contract.</em>")}
    ${button("https://www.prefabricated.co/build?step=1", "Return to build configurator")}
  `
  return emailLayout({
    title: "Your build inquiry",
    preheader: "We received your land + home configuration.",
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
    ${p(`<strong>Lot:</strong> ${lot ? esc(`${lot.address}, ${lot.city}`) : "—"}<br/>
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
    ${button("https://www.prefabricated.co/#qualify", "Request a free evaluation")}
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
