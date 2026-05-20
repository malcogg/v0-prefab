import type { LocalSeoPage } from "@/lib/local-pages-data"

/** Replaces duplicate jurisdiction-echo paragraph in Local Market Context */
export const LOCAL_MARKET_CONVERSION_PARAGRAPH =
  "With Central Florida experiencing unprecedented demand for single-level, eco-conscious rental alternatives and flexible multigenerational layouts, a permitted backyard home acts as both an immediate passive income engine and a long-term equity anchor for your property."

const ORLANDO_OVERLAY_SLUGS = new Set([
  "adu-orlando",
  "adu-college-park-orlando",
  "adu-thornton-park",
  "adu-sodo-orlando",
])

export const ORLANDO_TRADITIONAL_CITY_OVERLAY =
  "Properties inside the City of Orlando Traditional City (/T) overlay must comply with specific architectural harmony guidelines (porch depths and matching roof pitches), but enjoy a total waiver on additional off-street parking requirements for units under 500 sq ft."

/** Single source of truth for county/municipal ADU rule summaries. Keys are URL slugs. */
export type CountyRegulatory = {
  countySlug: string
  displayName: string
  maxAduSizeSqFt: number | null
  maxPercentOfPrimary: number | null
  maxSizeRule: string
  quickRules: string[]
  /** YYYY-MM-DD */
  lastVerified: string
  citation: string
  status: "live" | "provisional"
  statusLabel: string
}

export const COUNTY_REGULATORY_BLOCKS: Record<string, CountyRegulatory> = {
  "orange-county": {
    countySlug: "orange-county",
    displayName: "Orange County",
    maxAduSizeSqFt: 1000,
    maxPercentOfPrimary: 50,
    maxSizeRule: "50% of primary dwelling living area OR 1,000 sq ft, whichever is less",
    quickRules: [
      "Allowed by-right in all single-family zones (post SB 48)",
      "Maximum 50% of primary or 1,000 sq ft",
      "No owner-occupancy requirement",
      "No extra parking if driveway space exists",
    ],
    lastVerified: "2026-05-20",
    citation: "https://www.ocfl.net/PlanningDevelopment/ReadySetOrange.aspx",
    status: "live",
    statusLabel: "Current ordinance",
  },
  "polk-county": {
    countySlug: "polk-county",
    displayName: "Polk County",
    maxAduSizeSqFt: 1000,
    maxPercentOfPrimary: null,
    maxSizeRule: "1,000 sq ft of heated floor space (variance possible for larger)",
    quickRules: [
      "One ADU per residential lot",
      "Maximum 1,000 sq ft heated floor space",
      "50% of primary for mobile-home primaries",
      "Meets Florida Building Code",
    ],
    lastVerified: "2026-05-20",
    citation: "Polk County Ordinance 25-0415",
    status: "live",
    statusLabel: "Current ordinance",
  },
  "lake-county": {
    countySlug: "lake-county",
    displayName: "Lake County",
    maxAduSizeSqFt: 1200,
    maxPercentOfPrimary: 70,
    maxSizeRule: "Up to 1,200 sq ft or 70% of air-conditioned primary area, whichever is greater",
    quickRules: [
      "Max size: Up to 1,200 sq ft or 70% of the air-conditioned area of the principal home, whichever is greater.",
      "Architectural mandate: For lots under 1 acre, the ADU must match the exterior style, wall materials, and roof colors of the primary residence. Lots 1 acre or larger are free from style-matching restrictions.",
      "2026 ordinance: Lake County requires a notarized HOA Compliance Affidavit submitted with your initial zoning permit. If HOA covenants ban detached secondary structures, private deed restrictions override county zoning allowances.",
    ],
    lastVerified: "2026-05-20",
    citation:
      "Lake County, Fla. Land Development Regulations — accessory dwelling / zoning divisions (verify with county planning)",
    status: "provisional",
    statusLabel: "Provisional — pending final legal review",
  },
  "seminole-county": {
    countySlug: "seminole-county",
    displayName: "Seminole County",
    maxAduSizeSqFt: 750,
    maxPercentOfPrimary: 35,
    maxSizeRule: "35% of primary living area OR 750 sq ft, whichever is less",
    quickRules: [
      "Max size: 35% of the primary residence's living area or 750 sq ft, whichever is less.",
      "Permitting: Detached structures often trigger Conditional Use Permit (CUP) or Special Exception review with public notifications. Processing can extend up to roughly 250 days.",
      "Ownership: Single ownership must be locked via a recorded Declaration of Restrictions before building permits issue.",
    ],
    lastVerified: "2026-05-20",
    citation:
      "Seminole County, Fla. Land Development Code — accessory dwelling / special exception provisions (verify with county)",
    status: "provisional",
    statusLabel: "Provisional — pending final legal review",
  },
  "osceola-county": {
    countySlug: "osceola-county",
    displayName: "Osceola County",
    maxAduSizeSqFt: 1000,
    maxPercentOfPrimary: 50,
    maxSizeRule: "50% of main home living area OR 1,000 sq ft, whichever is less",
    quickRules: [
      "Max size: 50% of the main home's living area or 1,000 sq ft, whichever is less.",
      "Incentives: Osceola has eliminated single-family rate impact fees for ADUs and dropped mandatory off-street parking minimums for ADUs.",
      "Lot coverage: In St. Cloud or near the Lake Nona boundary, total lot development cannot exceed a 50% floor area ratio (FAR). Pools, patios, and detached garages reduce remaining ADU footprint.",
    ],
    lastVerified: "2026-05-20",
    citation:
      "Osceola County, Fla. Unified Development Ordinance / zoning — accessory dwelling & development standards (verify with county)",
    status: "provisional",
    statusLabel: "Provisional — pending final legal review",
  },
  "city-orlando": {
    countySlug: "city-orlando",
    displayName: "City of Orlando",
    maxAduSizeSqFt: 1000,
    maxPercentOfPrimary: null,
    maxSizeRule: "500–1,000 sq ft (depends on lot size and zoning)",
    quickRules: [
      "ADUs permitted by right in most residential (R) zoning districts",
      "No owner-occupancy requirement — investors can rent both units",
      "Detached ADUs allowed at side or rear of primary dwelling",
      "Design compatibility with primary home or approved distinct identity",
    ],
    lastVerified: "2026-05-20",
    citation: "City of Orlando Code Ch. 58 Part 3A | orlando.gov",
    status: "live",
    statusLabel: "Current ordinance",
  },
}

/** `LocalSeoPage.county` display label → regulatory slug */
export const COUNTY_LABEL_TO_SLUG: Record<string, string> = {
  "Orange County": "orange-county",
  "Lake County": "lake-county",
  "Seminole County": "seminole-county",
  "Osceola County": "osceola-county",
  "Polk County": "polk-county",
}

/** Slugs shown on `/adu-rules` tabs (order preserved) */
export const RULES_PAGE_TAB_SLUGS = [
  "orange-county",
  "city-orlando",
  "osceola-county",
  "seminole-county",
  "lake-county",
  "polk-county",
] as const

export type RulesPageTabSlug = (typeof RULES_PAGE_TAB_SLUGS)[number]

/** @deprecated Use COUNTY_LABEL_TO_SLUG — kept for API compatibility */
export const COUNTY_REGULATORY_SLUG_TO_LABEL: Record<string, string> = Object.fromEntries(
  Object.entries(COUNTY_LABEL_TO_SLUG).map(([label, slug]) => [slug, label]),
)

export function getRegulatoryBlock(slug: string): CountyRegulatory | undefined {
  return COUNTY_REGULATORY_BLOCKS[slug]
}

export function getRegulatoryBlockByCountyLabel(label: string): CountyRegulatory | undefined {
  const slug = COUNTY_LABEL_TO_SLUG[label]
  return slug ? COUNTY_REGULATORY_BLOCKS[slug] : undefined
}

export function getRegulatoryBlockByCountySlug(countySlug: string): CountyRegulatory | undefined {
  return getRegulatoryBlock(countySlug)
}

/** @deprecated Use getRegulatoryBlockByCountyLabel */
export function getCountyRegulatoryBlock(county: string): CountyRegulatory | undefined {
  return getRegulatoryBlockByCountyLabel(county)
}

/** `adu-calculator-section` county keys → regulatory county label */
export const CALCULATOR_COUNTY_KEY_TO_REGULATORY_LABEL: Record<string, string> = {
  orange_uninc: "Orange County",
  city_orlando: "Orange County",
  winterpark_apopka_ocoee: "Orange County",
  seminole: "Seminole County",
  osceola: "Osceola County",
  lake: "Lake County",
  polk: "Polk County",
}

export type CalculatorRegulatoryAlertVariant = "info" | "warning"

export type CalculatorRegulatoryAlert = {
  message: string
  variant: CalculatorRegulatoryAlertVariant
}

function buildCalculatorAlert(block: CountyRegulatory): CalculatorRegulatoryAlert {
  const variant: CalculatorRegulatoryAlertVariant = block.status === "provisional" ? "warning" : "info"
  const prefix = variant === "warning" ? "⚠️" : "💡"
  const headline = `${block.displayName}: ${block.maxSizeRule}.`
  const detail = block.quickRules[0] ?? ""
  return {
    variant,
    message: `${prefix} ${headline} ${detail}`.trim(),
  }
}

/** Copy shown in the calculator jurisdiction alert capsule */
export const ADU_CALCULATOR_REGULATORY_ALERTS: Record<string, CalculatorRegulatoryAlert> =
  Object.fromEntries(
    Object.values(COUNTY_REGULATORY_BLOCKS)
      .filter((block) => COUNTY_LABEL_TO_SLUG[block.displayName])
      .map((block) => [block.displayName, buildCalculatorAlert(block)]),
  )

/** Rough max heated/living sq ft used for calculator validation & slider cap (not a legal opinion). */
export const ADU_CALCULATOR_MAX_SQFT: Record<string, number> = Object.fromEntries(
  Object.values(COUNTY_REGULATORY_BLOCKS)
    .filter((block) => COUNTY_LABEL_TO_SLUG[block.displayName] && block.maxAduSizeSqFt != null)
    .map((block) => [block.displayName, block.maxAduSizeSqFt as number]),
)

/** Orlando /T overlay — reference line for overlay callout (optional display) */
export const ORLANDO_OVERLAY_CITATION =
  "City of Orlando, Fla. — Land Development Code / Traditional City (T) overlay standards (verify porch, roof, and parking provisions)"

export function formatLastVerifiedDisplay(isoDate: string): string {
  const [y, m, d] = isoDate.split("-").map(Number)
  if (!y || !m || m < 1 || m > 12) return isoDate
  const date = d ? new Date(y, m - 1, d) : new Date(y, m - 1, 1)
  return date.toLocaleString("en-US", {
    month: "long",
    ...(d ? { day: "numeric" as const } : {}),
    year: "numeric",
  })
}

export type RegulatoryPageFootnote = {
  summaryLine: string
  citation: string
  lastVerifiedRaw: string
  lastVerifiedDisplay: string
  statusLabel: string
  status: CountyRegulatory["status"]
}

export function getRegulatoryFootnoteForPage(page: LocalSeoPage): RegulatoryPageFootnote | null {
  const block = getRegulatoryBlockByCountyLabel(page.county)
  if (!block) return null

  const asOf = formatLastVerifiedDisplay(block.lastVerified)
  const summaryLine = `Regulations summarized as of ${asOf}. Local zoning maps, overlay districts, and private HOA covenants may alter these baseline constraints. Consult with our team or a land-use specialist before executing site plans.`

  return {
    summaryLine,
    citation: block.citation,
    lastVerifiedRaw: block.lastVerified,
    lastVerifiedDisplay: asOf,
    statusLabel: block.statusLabel,
    status: block.status,
  }
}

export function getDisplayIntroParagraphs(page: LocalSeoPage): string[] {
  const prefix = "For properties in this area, jurisdiction matters first:"
  return page.introParagraphs.map((p, i) =>
    i === 1 && p.trimStart().startsWith(prefix) ? LOCAL_MARKET_CONVERSION_PARAGRAPH : p,
  )
}

export function getRegulatoryQuickRules(page: LocalSeoPage): string[] {
  const block = getRegulatoryBlockByCountyLabel(page.county)
  return block?.quickRules ?? page.quickRules
}

export function shouldShowOrlandoOverlay(page: LocalSeoPage): boolean {
  return page.county === "Orange County" && !page.isHub && ORLANDO_OVERLAY_SLUGS.has(page.slug)
}
