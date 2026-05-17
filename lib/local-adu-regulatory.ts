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

/** Compliance / provenance for the regulatory sandbox (Layer 2). Typed for handoff to counsel or planners. */
export type CountyRegulatoryComplianceStatus = "provisional_pending_review" | "verified"

export type CountyRegulatoryBlock = {
  /** Bullet lines shown in Quick Rules */
  quickRules: string[]
  /** YYYY-MM — when summaries were last aligned for site copy */
  lastVerified: string
  /** Reference pointer for legal review (not a guarantee of completeness) */
  citation: string
  /** Machine-readable compliance gate */
  status: CountyRegulatoryComplianceStatus
  /** Same as status, readable in UI */
  statusLabel: string
}

/**
 * Single source of truth for county rule bullets + verification metadata.
 * Keys must match `LocalSeoPage.county` (e.g. "Orange County").
 */
export const COUNTY_REGULATORY_BLOCKS: Record<string, CountyRegulatoryBlock> = {
  "Orange County": {
    quickRules: [
      "Max size: 50% of the primary dwelling’s living area or 1,000 sq ft, whichever is less. Minimum size is 400 sq ft.",
      "Owner occupancy: The primary structure and ADU must remain under single ownership; standard unincorporated parcels require homestead alignment.",
      "Infrastructure: Detached structures require a mandatory 10 ft separation from the primary home.",
      "Semi-rural contexts (e.g. Zellwood, Apopka, Christmas): Site plans must verify septic tank capacity or secondary drain-field clearances with the health department.",
    ],
    lastVerified: "2026-05",
    citation: "Orange County, Fla. Code of Ordinances — accessory dwelling / land development articles (verify current division & section with county)",
    status: "provisional_pending_review",
    statusLabel: "Provisional — pending final legal review",
  },
  "Lake County": {
    quickRules: [
      "Max size: Up to 1,200 sq ft or 70% of the air-conditioned area of the principal home, whichever is greater.",
      "Architectural mandate: For lots under 1 acre, the ADU must match the exterior style, wall materials, and roof colors of the primary residence. Lots 1 acre or larger are free from style-matching restrictions.",
      "2026 ordinance: Lake County requires a notarized HOA Compliance Affidavit submitted with your initial zoning permit. If HOA covenants ban detached secondary structures, private deed restrictions override county zoning allowances.",
    ],
    lastVerified: "2026-05",
    citation: "Lake County, Fla. Land Development Regulations — accessory dwelling / zoning divisions (verify with county planning)",
    status: "provisional_pending_review",
    statusLabel: "Provisional — pending final legal review",
  },
  "Seminole County": {
    quickRules: [
      "Max size: 35% of the primary residence’s living area or 750 sq ft, whichever is less.",
      "Permitting: Detached structures often trigger Conditional Use Permit (CUP) or Special Exception review with public notifications. Processing can extend up to roughly 250 days.",
      "Ownership: Single ownership must be locked via a recorded Declaration of Restrictions before building permits issue.",
    ],
    lastVerified: "2026-05",
    citation: "Seminole County, Fla. Land Development Code — accessory dwelling / special exception provisions (verify with county)",
    status: "provisional_pending_review",
    statusLabel: "Provisional — pending final legal review",
  },
  "Osceola County": {
    quickRules: [
      "Max size: 50% of the main home’s living area or 1,000 sq ft, whichever is less.",
      "Incentives: Osceola has eliminated single-family rate impact fees for ADUs and dropped mandatory off-street parking minimums for ADUs.",
      "Lot coverage: In St. Cloud or near the Lake Nona boundary, total lot development cannot exceed a 50% floor area ratio (FAR). Pools, patios, and detached garages reduce remaining ADU footprint.",
    ],
    lastVerified: "2026-05",
    citation: "Osceola County, Fla. Unified Development Ordinance / zoning — accessory dwelling & development standards (verify with county)",
    status: "provisional_pending_review",
    statusLabel: "Provisional — pending final legal review",
  },
  "Polk County": {
    quickRules: [
      "Max size: Up to 1,000 sq ft of heated floor area. If the primary home is a mobile home, the ADU cannot exceed 50% of that home’s heated square footage.",
      "Rental: Under Ordinance 25-0415, short-term rentals (Airbnb / VRBO under 30 days) are prohibited for ADUs. Long-term leasing is permitted.",
      "Setbacks & code: Side and rear setbacks are 5 ft, with 10 ft separation between structures. Designs must meet Florida Building Code wind-load and hurricane-strap engineering.",
    ],
    lastVerified: "2026-05",
    citation: "Polk County, Fla. Code — land development and applicable ADU / rental ordinances (e.g. Ord. 25-0415; verify text)",
    status: "provisional_pending_review",
    statusLabel: "Provisional — pending final legal review",
  },
}

/** URL/API slug → `COUNTY_REGULATORY_BLOCKS` key (e.g. `orange-county`) */
export const COUNTY_REGULATORY_SLUG_TO_LABEL: Record<string, string> = {
  "orange-county": "Orange County",
  "lake-county": "Lake County",
  "seminole-county": "Seminole County",
  "osceola-county": "Osceola County",
  "polk-county": "Polk County",
}

export function getRegulatoryBlockByCountySlug(countySlug: string): CountyRegulatoryBlock | undefined {
  const label = COUNTY_REGULATORY_SLUG_TO_LABEL[countySlug]
  return label ? COUNTY_REGULATORY_BLOCKS[label] : undefined
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

/** Copy shown in the calculator jurisdiction alert capsule (Layer 2 awareness). */
export const ADU_CALCULATOR_REGULATORY_ALERTS: Record<string, CalculatorRegulatoryAlert> = {
  "Orange County": {
    variant: "info",
    message:
      "💡 Max ADU size in Orange County is capped at 1,000 sq ft or 50% of your primary home's living footprint. Minimum permitted living area is 400 sq ft.",
  },
  "Lake County": {
    variant: "info",
    message:
      "💡 Lake County allows generous footprints up to 1,200 sq ft or 70% of your primary home's size, whichever is greater. Note: Lots under 1 acre must architecturally match the main home exterior.",
  },
  "Seminole County": {
    variant: "warning",
    message:
      "⚠️ Seminole County strictly limits backyard units to 750 sq ft or 35% of your main structure's size. Expect a Conditional Use public hearing tracking pipeline.",
  },
  "Osceola County": {
    variant: "info",
    message:
      "💡 Osceola County has completely waived additional parking minimums and single-family impact fees for ADUs. Ensure total lot structures stay within a 50% Floor Area Ratio (FAR).",
  },
  "Polk County": {
    variant: "warning",
    message:
      "⚠️ Polk County (Ordinance 25-0415) caps heated space at 1,000 sq ft. Note: Short-term rentals / Airbnbs under 30 days are legally prohibited for ADUs here.",
  },
}

/** Rough max heated/living sq ft used for calculator validation & slider cap (not a legal opinion). */
export const ADU_CALCULATOR_MAX_SQFT: Record<string, number> = {
  "Orange County": 1000,
  "Lake County": 1200,
  "Seminole County": 750,
  "Osceola County": 1000,
  "Polk County": 1000,
}

/** Orlando /T overlay — reference line for overlay callout (optional display) */
export const ORLANDO_OVERLAY_CITATION =
  "City of Orlando, Fla. — Land Development Code / Traditional City (T) overlay standards (verify porch, roof, and parking provisions)"

export function formatLastVerifiedDisplay(yyyyMm: string): string {
  const [y, m] = yyyyMm.split("-").map(Number)
  if (!y || !m || m < 1 || m > 12) return yyyyMm
  return new Date(y, m - 1, 1).toLocaleString("en-US", { month: "long", year: "numeric" })
}

export type RegulatoryPageFootnote = {
  summaryLine: string
  citation: string
  lastVerifiedRaw: string
  lastVerifiedDisplay: string
  statusLabel: string
}

export function getCountyRegulatoryBlock(county: string): CountyRegulatoryBlock | undefined {
  return COUNTY_REGULATORY_BLOCKS[county]
}

/**
 * Footnote under Quick Rules when this county uses the structured regulatory sandbox.
 * Returns null when the page falls back to `page.quickRules` only (unknown county in map).
 */
export function getRegulatoryFootnoteForPage(page: LocalSeoPage): RegulatoryPageFootnote | null {
  const block = COUNTY_REGULATORY_BLOCKS[page.county]
  if (!block) return null

  const asOf = formatLastVerifiedDisplay(block.lastVerified)
  const summaryLine = `Regulations summarized as of ${asOf}. Local zoning maps, overlay districts, and private HOA covenants may alter these baseline constraints. Consult with our team or a land-use specialist before executing site plans.`

  return {
    summaryLine,
    citation: block.citation,
    lastVerifiedRaw: block.lastVerified,
    lastVerifiedDisplay: asOf,
    statusLabel: block.statusLabel,
  }
}

export function getDisplayIntroParagraphs(page: LocalSeoPage): string[] {
  const prefix = "For properties in this area, jurisdiction matters first:"
  return page.introParagraphs.map((p, i) =>
    i === 1 && p.trimStart().startsWith(prefix) ? LOCAL_MARKET_CONVERSION_PARAGRAPH : p,
  )
}

export function getRegulatoryQuickRules(page: LocalSeoPage): string[] {
  const block = COUNTY_REGULATORY_BLOCKS[page.county]
  return block?.quickRules ?? page.quickRules
}

export function shouldShowOrlandoOverlay(page: LocalSeoPage): boolean {
  return page.county === "Orange County" && !page.isHub && ORLANDO_OVERLAY_SLUGS.has(page.slug)
}
