import { ESCAPE_CATALOG_PATH, ESCAPE_TINY_HOME_MODELS, formatUsd } from "@/lib/escape-tiny-homes-data"
import type { QualifyFullSubmission } from "@/lib/qualify/schema"
import type { QualifyReport, QualifyReportModel, QualifyReportNextStep } from "@/lib/qualify/types"

const SITE = "https://www.prefabricated.co"

function budgetCap(range: QualifyFullSubmission["budgetRange"]): number {
  switch (range) {
    case "under_50k":
      return 50_000
    case "50_80k":
      return 80_000
    case "80_120k":
      return 120_000
    case "120_160k":
      return 160_000
    case "160k_plus":
      return Number.POSITIVE_INFINITY
    default:
      return Number.POSITIVE_INFINITY
  }
}

function wantsTiny(data: QualifyFullSubmission): boolean {
  return data.projectTypes.includes("tiny_escape") || data.projectTypes.includes("village_rental")
}

function pickEscapeModels(data: QualifyFullSubmission): QualifyReportModel[] {
  const cap = budgetCap(data.budgetRange)
  let pool = ESCAPE_TINY_HOME_MODELS.filter((m) => m.sellingPriceUsd <= cap)
  if (pool.length === 0) {
    pool = [...ESCAPE_TINY_HOME_MODELS].sort((a, b) => a.sellingPriceUsd - b.sellingPriceUsd).slice(0, 4)
  } else {
    pool = pool.sort((a, b) => b.sellingPriceUsd - a.sellingPriceUsd)
  }

  if (data.bedrooms === "4plus" || data.bedrooms === "3") {
    const u = ESCAPE_TINY_HOME_MODELS.find((m) => m.slug === "ultimate")
    if (u) pool = [u, ...pool.filter((m) => m.slug !== "ultimate")]
  }

  const specific = data.modelInterest.trim().toLowerCase()
  if (specific) {
    const hit = ESCAPE_TINY_HOME_MODELS.find(
      (m) =>
        m.slug.includes(specific) ||
        m.shortLabel.toLowerCase().includes(specific) ||
        m.fullName.toLowerCase().includes(specific),
    )
    if (hit && !pool.find((p) => p.slug === hit.slug)) {
      pool = [hit, ...pool]
    }
  }

  return pool.slice(0, 3).map((m) => ({
    label: m.fullName,
    slug: m.slug,
    href: `${SITE}${ESCAPE_CATALOG_PATH}/${m.slug}`,
    reason: `Around ${formatUsd(m.sellingPriceUsd)} in our catalog — a good match for your budget band while we confirm local placement rules.`,
  }))
}

export function buildQualifyReport(data: QualifyFullSubmission): QualifyReport {
  const bullets: string[] = []
  const wants = [...new Set(data.projectTypes)]
    .map((p) => {
      switch (p) {
        case "tiny_escape":
          return "Escape tiny homes (factory RVIA units)"
        case "earthnest":
          return "EarthNest / prefab cabin + living systems"
        case "adu_backyard":
          return "ADU / backyard home"
        case "village_rental":
          return "Tiny home village or rental placement"
        case "other":
          return "Other / exploring options"
        default:
          return p
      }
    })
    .join(" · ")

  bullets.push(`Project focus: ${wants}.`)
  bullets.push(
    `Site context: ${data.landStatus === "yes" ? "you own property" : data.landStatus === "looking" ? "you are looking for land" : "no land yet — we can still outline paths"}.`,
  )
  if (data.desiredUse) {
    const useMap: Record<string, string> = {
      primary: "primary residence",
      guest_adu: "guest house / ADU",
      airbnb: "short-term rental / Airbnb (where allowed)",
      retreat_office: "retreat / office studio",
      other: "mixed or other use",
    }
    bullets.push(`Primary goal: ${useMap[data.desiredUse] ?? data.desiredUse}.`)
  }

  let models: QualifyReportModel[] = []
  if (wantsTiny(data)) {
    models = pickEscapeModels(data)
    if (models.length) {
      bullets.push("Based on your budget and interests, these Escape models are strong starting points — your specialist will confirm siting and local rules.")
    }
  }

  if (data.projectTypes.includes("adu_backyard") && !wantsTiny(data)) {
    bullets.push(
      "For permitted ADUs and backyard homes, the next step is usually a parcel-specific zoning review and a realistic installed budget — many Florida projects land in a higher installed range than factory tiny units alone.",
    )
  }

  if (data.projectTypes.includes("earthnest")) {
    bullets.push(
      "EarthNest-style systems layer food, water, and soil resilience onto your dwelling — we’ll map what makes sense after we understand your lot and goals.",
    )
  }

  const isFloridaLead =
    data.floridaResidence === "yes" ||
    data.floridaResidence === "not_sure" ||
    data.propertyInFlorida === "yes" ||
    data.propertyInFlorida === "not_sure"

  let floridaNotes: string[] | null = null
  if (isFloridaLead) {
    floridaNotes = [
      "Florida rules change by city and county — your AHJ (Authority Having Jurisdiction) controls ADU dimensions, parking, and whether a THOW can be lived in full-time.",
      "Flood zones and HOA restrictions can affect placement, elevation, and insurance — bring any survey or association docs to your call so we can short-circuit surprises.",
      "If you are coastal or in a designated flood zone, expect additional elevation or venting requirements that shape foundation choice and timeline.",
    ]
    if (data.floodZone === "yes") {
      floridaNotes.unshift("You indicated flood zone exposure — we will prioritize elevation, foundation type, and insurance-friendly detailing in our recommendations.")
    }
    if (data.hoa === "yes") {
      floridaNotes.push("With HOA governance, architectural review and covenant compliance often add a parallel approval track — budget a few extra weeks for ARC review.")
    }
  }

  const timelineSummary =
    data.timeline.length < 220
      ? `You told us: “${data.timeline}”. Most full-factory or ADU paths take months, not weeks, once permitting and utility coordination begin — your advisor will align milestones to your target.`
      : "Timeline depends most on permitting, HOA or ARC reviews, and utility readiness — your advisor will translate your goals into a realistic schedule."

  const nextSteps: QualifyReportNextStep[] = [
    { label: "Browse Escape 2026 models", href: `${SITE}${ESCAPE_CATALOG_PATH}` },
    { label: "ADU calculator (Florida)", href: `${SITE}/adu-calculator` },
    { label: "EarthNest living systems", href: `${SITE}/earthnest-living-systems` },
    { label: "Florida tiny home communities", href: `${SITE}/tiny-home-communities/florida` },
  ]

  const first = data.fullName.trim().split(/\s+/)[0] || "there"
  const headline = `Thanks, ${first} — here is your quick matching summary`

  return {
    headline,
    summaryBullets: bullets,
    models,
    floridaNotes,
    timelineSummary,
    nextSteps,
  }
}
