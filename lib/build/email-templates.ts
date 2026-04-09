import type { BuildSession } from "@/lib/build/session"

type EmailTemplateInput = {
  recipientName: string
  session: BuildSession
}

export function buildSummaryEmailSubject(city?: string) {
  return `Your EarthNest Build Summary${city ? ` - ${city}, FL` : ""}`
}

export function buildSummaryEmailHtml({ recipientName, session }: EmailTemplateInput) {
  const lot = session.selectedLot
  const model = session.selectedModelId ?? "Not selected"
  return `
    <h2>Hi ${recipientName}, your EarthNest build summary</h2>
    <p>Lot: ${lot ? `${lot.address}, ${lot.city}` : "Not selected"}</p>
    <p>Model: ${model}</p>
    <p>This is an inquiry only, not a purchase agreement or contract of any kind.</p>
  `
}

export function internalLeadEmailSubject(name: string, lotAddress?: string) {
  return `New Build Inquiry - ${name}${lotAddress ? ` | ${lotAddress}` : ""}`
}
