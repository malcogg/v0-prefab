import type { CountyRegulatory } from "@/lib/local-adu-regulatory"
import {
  COUNTY_REGULATORY_BLOCKS,
  formatLastVerifiedDisplay,
  getRegulatoryBlock,
  RULES_PAGE_TAB_SLUGS,
} from "@/lib/local-adu-regulatory"

export type RuleIcon = "check" | "x" | "warning"

export type RulesPageCountyData = {
  key: string
  label: string
  status: "live" | "provisional"
  statusLabel: string
  lastVerified: string
  lastVerifiedDisplay: string
  citation: string
  stats: {
    minSize: string
    maxSize: string
    ownerOccupancy: string
    specialException: string
  }
  rules: { icon: RuleIcon; title: string; note: string }[]
  setbacks: { type: string; measurement: string }[]
  contact: string[]
  source: string
}

type RulesPageExtras = Pick<RulesPageCountyData, "stats" | "rules" | "setbacks" | "contact" | "source"> & {
  label: string
}

const RULES_PAGE_EXTRAS: Record<string, RulesPageExtras> = {
  "orange-county": {
    label: "Orange County (unincorporated)",
    stats: {
      minSize: "400 sq ft",
      maxSize: "",
      ownerOccupancy: "NO — no owner-occupancy requirement (post SB 48)",
      specialException: "No — ADUs permitted by-right in single-family zones (post SB 48)",
    },
    rules: [
      {
        icon: "check",
        title: "By-right ADUs",
        note: "Allowed by-right in all single-family zones under current SB 48 alignment",
      },
      {
        icon: "check",
        title: "Owner Occupancy",
        note: "No owner-occupancy requirement",
      },
      {
        icon: "check",
        title: "Parking",
        note: "No extra parking required when driveway space exists",
      },
      {
        icon: "check",
        title: "Detached ADUs",
        note: "Detached ADUs permitted — subject to lot size and setback requirements",
      },
      {
        icon: "check",
        title: "Container/Modular",
        note: "Foundation-built container/modular units allowed — DBPR state review may apply",
      },
      { icon: "x", title: "Bedroom Limit", note: "Max 2 bedrooms per ADU" },
      {
        icon: "check",
        title: "Appraisal Impact",
        note: "ADU adds to property value — permitted and inspected units are appraised",
      },
      {
        icon: "warning",
        title: "Lot Size Threshold",
        note: "Lot must be 1.5x minimum zoning lot size for a detached ADU",
      },
    ],
    setbacks: [
      { type: "Rear property line (1-story)", measurement: "5 ft minimum" },
      { type: "Rear property line (2-story)", measurement: "15 ft minimum" },
      { type: "From primary dwelling", measurement: "10 ft minimum" },
      { type: "Side yard", measurement: "Matches principal structure minimums for zoning district" },
    ],
    contact: [
      "Zoning questions: (407) 836-3111 | Zoning@ocfl.net",
      "Building inspections / permit status: (407) 836-5550",
      "Fast Track portal: orangecountyfl.net",
    ],
    source: "Orange County Ready Set Orange | ocfl.net/PlanningDevelopment/ReadySetOrange.aspx",
  },
  "city-orlando": {
    label: "City of Orlando",
    stats: {
      minSize: "Varies by zoning district",
      maxSize: "",
      ownerOccupancy: "NO — city does not require owner to live on property",
      specialException: "No — ADUs permitted by right in most R-zoned districts",
    },
    rules: [
      {
        icon: "check",
        title: "Owner Occupancy",
        note: "No owner-occupancy requirement — investors can rent both units",
      },
      {
        icon: "check",
        title: "Permitting Path",
        note: "ADUs permitted by right in most residential (R) zoning districts",
      },
      {
        icon: "check",
        title: "Detached Placement",
        note: "Detached ADUs allowed — must be at side or rear of primary dwelling",
      },
      {
        icon: "warning",
        title: "Short-Term Rentals",
        note: "Short-term rentals restricted — visit orlando.gov/homeshare for full rules",
      },
      {
        icon: "warning",
        title: "Design Compatibility",
        note: "Design compatibility required — ADU must match primary home or have approved distinct identity",
      },
      {
        icon: "warning",
        title: "Container Guidance",
        note: "Container/shipping container ADUs — contact Planning Division for specific requirements",
      },
      {
        icon: "x",
        title: "Front Yard Placement",
        note: "ADU cannot be placed in front of primary dwelling",
      },
      {
        icon: "x",
        title: "Size Relationship",
        note: "ADU cannot be larger than the main house (including garage, porch, balconies)",
      },
    ],
    setbacks: [
      { type: "Front yard", measurement: "Not permitted" },
      { type: "Side and rear", measurement: "Varies by zoning district" },
      { type: "Common (R-1A)", measurement: "Side 7.5 ft, Street side 15 ft, Rear 25 ft" },
      { type: "Max height", measurement: "Typically 30–35 ft depending on district" },
    ],
    contact: [
      "Planning / zoning: cityplanning@orlando.gov",
      "Permitting: permittingservices@orlando.gov",
    ],
    source: "City of Orlando Code Ch. 58 Part 3A | orlando.gov",
  },
  "polk-county": {
    label: "Polk County",
    stats: {
      minSize: "Verify with county",
      maxSize: "",
      ownerOccupancy: "Verify with county",
      specialException: "Verify with county",
    },
    rules: [
      {
        icon: "check",
        title: "One ADU per lot",
        note: "One ADU permitted per residential lot under Ordinance 25-0415",
      },
      {
        icon: "check",
        title: "Size cap",
        note: "Maximum 1,000 sq ft heated floor space (variance possible for larger)",
      },
      {
        icon: "warning",
        title: "Mobile-home primaries",
        note: "When primary is a mobile home, ADU cannot exceed 50% of primary heated sq ft",
      },
      {
        icon: "x",
        title: "Short-Term Rental",
        note: "Short-term rentals under 30 days prohibited for ADUs — long-term leases permitted",
      },
      {
        icon: "check",
        title: "Florida Building Code",
        note: "Designs must meet FBC wind-load and hurricane-strap engineering",
      },
      {
        icon: "warning",
        title: "Setbacks",
        note: "Side and rear setbacks 5 ft; 10 ft separation between structures",
      },
    ],
    setbacks: [
      { type: "Side yard", measurement: "5 ft minimum" },
      { type: "Rear property line", measurement: "5 ft minimum" },
      { type: "From primary dwelling", measurement: "10 ft minimum" },
      { type: "Height", measurement: "Verify with Polk County Building Division" },
    ],
    contact: [
      "Phone: (863) 534-6082",
      "Email: building@polk-county.net",
      "Website: polk-county.net",
    ],
    source: "Polk County Ordinance 25-0415 — verify current text with county planning",
  },
  "osceola-county": {
    label: "Osceola County",
    stats: {
      minSize: "Verify with county",
      maxSize: "",
      ownerOccupancy: "Verify with county",
      specialException: "Verify with county",
    },
    rules: [],
    setbacks: [
      { type: "Rear property line", measurement: "Verify with Osceola Zoning" },
      { type: "From primary dwelling", measurement: "Verify with Osceola Zoning" },
      { type: "Side yard", measurement: "Verify with Osceola Zoning" },
      { type: "Height", measurement: "Verify with Osceola Zoning" },
    ],
    contact: [
      "Phone: (407) 742-0200",
      "Email: planninginfo@osceolafl.org",
      "Website: osceola.org",
    ],
    source: "Verify directly with Osceola County Planning & Zoning before making any project decisions.",
  },
  "seminole-county": {
    label: "Seminole County",
    stats: {
      minSize: "Verify with county",
      maxSize: "",
      ownerOccupancy: "Verify with county",
      specialException: "Verify with county",
    },
    rules: [],
    setbacks: [
      { type: "Rear property line", measurement: "Verify with Seminole Zoning" },
      { type: "From primary dwelling", measurement: "Verify with Seminole Zoning" },
      { type: "Side yard", measurement: "Verify with Seminole Zoning" },
      { type: "Height", measurement: "Verify with Seminole Zoning" },
    ],
    contact: [
      "Phone: (407) 665-7444",
      "Email: zoning@seminolecountyfl.gov",
      "Website: seminolecountyfl.gov",
    ],
    source: "Verify directly with Seminole County Zoning before making any project decisions.",
  },
  "lake-county": {
    label: "Lake County",
    stats: {
      minSize: "Verify with county",
      maxSize: "",
      ownerOccupancy: "Verify with county",
      specialException: "Verify with county",
    },
    rules: [],
    setbacks: [
      { type: "Rear property line", measurement: "Verify with Lake County Zoning" },
      { type: "From primary dwelling", measurement: "Verify with Lake County Zoning" },
      { type: "Side yard", measurement: "Verify with Lake County Zoning" },
      { type: "Height", measurement: "Verify with Lake County Zoning" },
    ],
    contact: [
      "Phone: (352) 343-9801",
      "Email: building@mylakelnd.com",
      "Website: lakecountyfl.gov",
    ],
    source: "Verify directly with Lake County Growth Management before making any project decisions.",
  },
}

function provisionalRulesFromQuickRules(block: CountyRegulatory): RulesPageCountyData["rules"] {
  return block.quickRules.map((note, index) => ({
    icon: "warning" as const,
    title: index === 0 ? "Summary rule" : `Rule ${index + 1}`,
    note,
  }))
}

export function adaptRegulatoryToRulesPage(slug: string): RulesPageCountyData | undefined {
  const block = getRegulatoryBlock(slug)
  const extras = RULES_PAGE_EXTRAS[slug]
  if (!block || !extras) return undefined

  const maxSizeDisplay =
    extras.stats.maxSize ||
    (block.maxPercentOfPrimary
      ? `${block.maxAduSizeSqFt?.toLocaleString() ?? ""} sq ft (or ${block.maxPercentOfPrimary}% of primary, whichever is less)`
      : block.maxSizeRule)

  const rules =
    extras.rules.length > 0 ? extras.rules : provisionalRulesFromQuickRules(block)

  return {
    key: slug,
    label: extras.label,
    status: block.status,
    statusLabel: block.statusLabel,
    lastVerified: block.lastVerified,
    lastVerifiedDisplay: formatLastVerifiedDisplay(block.lastVerified),
    citation: block.citation,
    stats: {
      ...extras.stats,
      maxSize: maxSizeDisplay,
    },
    rules,
    setbacks: extras.setbacks,
    contact: extras.contact,
    source: extras.source,
  }
}

export function getAllRulesPageCounties(): RulesPageCountyData[] {
  return RULES_PAGE_TAB_SLUGS.map((slug) => adaptRegulatoryToRulesPage(slug)).filter(
    (row): row is RulesPageCountyData => row != null,
  )
}

export function getRulesPageCountySlugs(): readonly string[] {
  return RULES_PAGE_TAB_SLUGS
}

/** Ensure SSOT registry includes every rules tab slug */
export function assertRulesPageRegistry(): void {
  for (const slug of RULES_PAGE_TAB_SLUGS) {
    if (!COUNTY_REGULATORY_BLOCKS[slug]) {
      throw new Error(`Missing COUNTY_REGULATORY_BLOCKS entry for rules tab: ${slug}`)
    }
  }
}
