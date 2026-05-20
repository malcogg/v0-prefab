import { FLORIDA_ORANGE_COUNTY_REQUIREMENTS } from "./florida-orange-county"
import type { JurisdictionRequirements, StateRequirementsBlueprint } from "./types"

/** Active jurisdiction content keyed by state + jurisdiction id */
export const JURISDICTION_REQUIREMENTS: Record<string, JurisdictionRequirements> = {
  "florida:orange-county": FLORIDA_ORANGE_COUNTY_REQUIREMENTS,
}

export function getJurisdictionRequirements(
  stateId: string,
  jurisdictionId: string,
): JurisdictionRequirements | undefined {
  return JURISDICTION_REQUIREMENTS[`${stateId}:${jurisdictionId}`]
}

/**
 * Multi-state blueprint — populate `JURISDICTION_REQUIREMENTS` and jurisdiction
 * entries as new states go live without changing homepage layout components.
 */
export const BUILDING_REQUIREMENTS_STATES: StateRequirementsBlueprint[] = [
  {
    id: "florida",
    name: "Florida",
    abbr: "FL",
    status: "active",
    featuredJurisdictionId: "orange-county",
    jurisdictions: [
      { id: "orange-county", name: "Orange County", status: "active", hubPath: "/adu-orange-county" },
      { id: "osceola-county", name: "Osceola County", status: "coming_soon", hubPath: "/adu-osceola-county" },
      { id: "seminole-county", name: "Seminole County", status: "coming_soon", hubPath: "/adu-seminole-county" },
      { id: "lake-county", name: "Lake County", status: "coming_soon", hubPath: "/adu-lake-county" },
      { id: "polk-county", name: "Polk County", status: "coming_soon", hubPath: "/adu-polk-county" },
      { id: "city-of-orlando", name: "City of Orlando", status: "coming_soon" },
    ],
  },
  {
    id: "texas",
    name: "Texas",
    abbr: "TX",
    status: "coming_soon",
    jurisdictions: [
      { id: "travis-county", name: "Travis County (Austin area)", status: "coming_soon" },
      { id: "harris-county", name: "Harris County (Houston area)", status: "coming_soon" },
    ],
    comingSoonMessage:
      "Texas ADU and backyard housing rules vary sharply by city and county. Structured requirement modules for Texas markets are queued for a future sprint.",
  },
  {
    id: "california",
    name: "California",
    abbr: "CA",
    status: "coming_soon",
    jurisdictions: [
      { id: "los-angeles-county", name: "Los Angeles County", status: "coming_soon" },
      { id: "san-diego-county", name: "San Diego County", status: "coming_soon" },
    ],
    comingSoonMessage:
      "California state ADU law sets a strong baseline, but local ordinances still govern setbacks and design. California requirement accordions will plug into this same layout.",
  },
  {
    id: "north-carolina",
    name: "North Carolina",
    abbr: "NC",
    status: "coming_soon",
    jurisdictions: [
      { id: "mecklenburg-county", name: "Mecklenburg County (Charlotte area)", status: "coming_soon" },
      { id: "wake-county", name: "Wake County (Raleigh area)", status: "coming_soon" },
    ],
    comingSoonMessage:
      "North Carolina ADU pathways are county- and city-specific. Placeholder nodes are ready for Mecklenburg, Wake, and additional hubs.",
  },
]

export const DEFAULT_BUILDING_REQUIREMENTS_STATE_ID = "florida"
