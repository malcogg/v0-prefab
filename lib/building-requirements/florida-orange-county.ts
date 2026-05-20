import type { JurisdictionRequirements } from "./types"
import {
  formatLastVerifiedDisplay,
  getRegulatoryBlock,
} from "@/lib/local-adu-regulatory"

const orange = getRegulatoryBlock("orange-county")

if (!orange) {
  throw new Error("Missing orange-county regulatory block for homepage building requirements")
}

const verifiedDisplay = formatLastVerifiedDisplay(orange.lastVerified)

export const FLORIDA_ORANGE_COUNTY_REQUIREMENTS: JurisdictionRequirements = {
  id: "orange-county",
  name: "Orange County",
  status: "active",
  sourceUrl: orange.citation.startsWith("http") ? orange.citation : "https://www.ocfl.net/PlanningDevelopment/ReadySetOrange.aspx",
  sourceLabel: "ocfl.net Ready Set Orange",
  intro:
    "We align site copy with Orange County's current ADU pathway under SB 48. Here's what the county requires for each ADU type, sourced directly from ",
  eligibilityTitle: "Orange County eligibility requirements — know before you build",
  eligibilityIntro:
    "Before any building permit can be issued, Orange County ADU projects must meet baseline eligibility standards summarized below. Prefabricated.co verifies parcel-specific constraints during your free site evaluation.",
  eligibilityBlocks: [
    {
      title: "Permitting path (SB 48)",
      body: orange.quickRules[0],
    },
    {
      title: "ADU size limits",
      body: [
        `Maximum: ${orange.maxSizeRule}`,
        "Minimum: 400 sq ft of living area (verify district standards)",
        "Maximum: 2 bedrooms",
      ],
    },
    {
      title: "Owner-occupancy",
      body: orange.quickRules.find((r) => r.toLowerCase().includes("owner-occupancy")) ?? orange.quickRules[2],
    },
    {
      title: "Parking",
      body: orange.quickRules.find((r) => r.toLowerCase().includes("parking")) ?? orange.quickRules[3],
    },
    {
      title: "Lot size requirement",
      body:
        "A detached ADU may only be built on a lot that is at least 1.5x the minimum lot area required for a single-family dwelling in that zoning district.",
    },
    {
      title: "Setbacks — detached ADU",
      body: [
        "1-story: Minimum 5 ft from rear property line",
        "2-story: Minimum 15 ft from rear property line",
        "Minimum 10 ft separation between the ADU and primary dwelling",
        "Side setbacks: Must meet principal structure minimums for the zoning district",
      ],
    },
    {
      title: "Short-term rental restriction",
      body:
        "Verify current STR rules for your zoning district. Many residential contexts restrict short-term rentals under 30 days — confirm with county planning before planning Airbnb income.",
    },
  ],
  eligibilityNote:
    "Requirements vary by municipality. The City of Orlando, Osceola County, Seminole County, Lake County, and Polk County each operate under their own ADU rules. We review the specific requirements for your parcel as part of the free evaluation.",
  eligibilitySource: `Orange County Ready Set Orange — last verified ${verifiedDisplay}. Florida SB 48 requires counties to allow ADUs; local size and development standards still apply.`,
  aduTypes: [
    {
      id: "type-1",
      title: "Type 1 — Attached ADU",
      subtitle: "Addition to primary residential unit",
      requirements: [
        "Site plan or survey showing location",
        "Lot Grading/Drainage Plan + finished floor elevation",
        "Construction Plans by FL Licensed PE or Architect",
        "Existing AND proposed floor plans (all rooms labeled)",
        "Emergency Escape & Rescue Opening (EERO) in every sleeping room",
        "Fire separation between units per FL Building Code",
        "Construction Documents",
        "Energy Calculations + ACCA Manuals J, S, D + EPL card (if HVAC)",
        "Mechanical duct layout (if installing/modifying)",
        "Truss engineering by FL Licensed PE (if applicable)",
        "Orange County Product Approval Specification Sheet",
      ],
    },
    {
      id: "type-2",
      title: "Type 2 — ADU Alteration",
      subtitle: "Convert existing space in primary unit",
      requirements: [
        "Construction Plans by FL Licensed PE or Architect",
        "Existing + proposed floor plans (all rooms labeled)",
        "Emergency Escape & Rescue Opening (EERO) in sleeping rooms",
        "Fire separation between units per FL Building Code",
        "Construction Documents",
        "Energy Calculations + ACCA Manuals + EPL card (if HVAC)",
        "Mechanical duct layout (if modifying ductwork)",
        "Truss engineering (if applicable) — signed & sealed",
        "Orange County Product Approval Specification Sheet",
      ],
    },
    {
      id: "type-3",
      title: "Type 3 — Detached ADU",
      subtitle: "Separate structure (EarthNest Model)",
      requirements: [
        "Site plan or survey showing location",
        "Lot Grading/Drainage Plan + finished floor elevation",
        "Construction Plans by FL Licensed PE or Architect",
        "Fire separation (when applicable) per FL Building Code",
        "Construction Documents",
        "Energy Calculations + ACCA Manuals + EPL card (if HVAC)",
        "Mechanical duct layout (if modifying ductwork)",
        "Truss engineering (if applicable) — signed & sealed",
        "Truss layout from manufacturer",
        "Orange County Product Approval Specification Sheet",
      ],
    },
  ],
  permitProcessSteps: [
    "All applications submitted via Orange County Fast Track Online Services portal",
    "A licensed contractor MUST accept permit issuance",
    "Owner-builder exemption available under F.S. 489.103(7)(a)",
    "All permits require inspections, including mandatory final inspection",
    "Inspections scheduled & managed via Fast Track portal",
  ],
  contacts: [
    { label: "Zoning & site plan questions", phone: "(407) 836-3111", email: "Zoning@ocfl.net" },
    {
      label: "Building inspections & permit status",
      phone: "(407) 836-5550",
      note: "Building Safety Division",
    },
  ],
  disclaimer:
    `ADU permitting requirements are sourced from Orange County Ready Set Orange (${orange.citation}) and Florida SB 48 context as of ${verifiedDisplay}. Requirements vary by project type, zoning, site conditions, and local amendments. Always verify current requirements directly with Orange County at ocfl.net or by calling Zoning at (407) 836-3111 before beginning any project. Prefabricated.co handles zoning verification and permitting coordination as part of your free property evaluation. This is not legal advice.`,
}
