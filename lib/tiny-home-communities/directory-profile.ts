/** Shown in UI when a profile field has not been researched yet. */
export const TBD_RESEARCH = "[TBD - Research Component Required]" as const

export type ParkSpecs = {
  powerInfrastructure?: string
  wasteSewerSystem?: string
  buildCertifications?: string
  petConstraints?: string
}

export type CommunityFinancials = {
  lotRentBenchmarks?: string
  utilityInclusions?: string
  leaseMechanics?: string
}

export type HomeSpecifications = {
  dimensionalThresholds?: string
  aestheticControls?: string
}

export type SustainabilityAllowances = {
  alternativeWasteSystems?: string
  offGridAdaptations?: string
  siteEdiblesGardens?: string
}

export type CommunityMediaAssets = {
  /** Root-relative or https site plan / park map image */
  sitePlanUrl?: string
  sitePlanAlt?: string
  /** YouTube or Vimeo watch URL */
  videoTourUrl?: string
  videoTourTitle?: string
}

export type CommunityLocalCta = {
  label: string
  href: string
  helperText?: string
}

export type CommunityDirectoryProfile = {
  parkSpecs?: ParkSpecs
  financials?: CommunityFinancials
  homeSpecifications?: HomeSpecifications
  sustainability?: SustainabilityAllowances
  media?: CommunityMediaAssets
  /** Override auto county routing when set */
  localCta?: CommunityLocalCta
}

export function resolveProfileField(value: string | undefined): string {
  const trimmed = value?.trim()
  return trimmed && trimmed.length > 0 ? trimmed : TBD_RESEARCH
}

export function isTbdValue(value: string): boolean {
  return value === TBD_RESEARCH
}

/** Florida county → ADU hub / qualify funnel (extend as hubs ship). */
const FLORIDA_COUNTY_CTA: Record<string, { label: string; href: string }> = {
  "Orange County": {
    label: "Orange County ADU rules & feasibility",
    href: "/adu-orange-county",
  },
  "Seminole County": {
    label: "Seminole County ADU rules & feasibility",
    href: "/adu-seminole-county",
  },
  "Lake County": {
    label: "Lake County ADU rules & feasibility",
    href: "/adu-lake-county",
  },
  "Osceola County": {
    label: "Osceola County ADU rules & feasibility",
    href: "/adu-osceola-county",
  },
  "Polk County": {
    label: "Polk County ADU rules & feasibility",
    href: "/adu-polk-county",
  },
  "Hillsborough County": {
    label: "Central Florida ADU rules directory",
    href: "/adu-rules",
  },
  "Brevard County": {
    label: "Central Florida ADU rules directory",
    href: "/adu-rules",
  },
}

export function getCommunityLocalCta(
  county: string,
  stateCode: string,
  override?: CommunityLocalCta,
): CommunityLocalCta {
  if (override) return override

  if (stateCode === "FL") {
    const mapped = FLORIDA_COUNTY_CTA[county]
    if (mapped) {
      return {
        ...mapped,
        helperText:
          "Leasehold village living differs from a permitted backyard ADU on land you own—use our county tools if you are also evaluating a homestead parcel.",
      }
    }
  }

  return {
    label: "Free property & pathway evaluation",
    href: "/qualify?source=community_listing",
    helperText:
      "Confirm zoning, utilities, and build lane (THOW park vs backyard ADU vs Escape unit) before you sign a pad lease or purchase a home on site.",
  }
}
