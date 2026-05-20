import type { JurisdictionRequirements } from "./types"

export const FLORIDA_ORANGE_COUNTY_REQUIREMENTS: JurisdictionRequirements = {
  id: "orange-county",
  name: "Orange County",
  status: "active",
  sourceUrl:
    "https://www.orangecountyfl.net/PermitsLicenses/Permits/ResidentialAccessoryDwellingUnit.aspx",
  sourceLabel: "orangecountyfl.net",
  intro:
    "We follow every Orange County regulation exactly. Here's what the county requires for each ADU type, sourced directly from ",
  eligibilityTitle: "Orange County eligibility requirements — know before you build",
  eligibilityIntro:
    "Before any building permit can be issued, Orange County requires ADU projects to meet the following baseline eligibility standards. EarthNest Florida verifies all of these during your free site evaluation.",
  eligibilityBlocks: [
    {
      title: "Owner-occupancy / homestead requirement",
      body:
        "Orange County (unincorporated) requires the primary single-family dwelling and the ADU to remain under single ownership at all times. The owner must occupy either the primary home or the ADU as their principal residence, with homestead alignment consistent with county review. A Certificate of Occupancy will not be issued until homestead status is confirmed.",
    },
    {
      title: "Special exception approval",
      body:
        "In most Orange County residential and agricultural zoning districts, an ADU requires approval as a Special Exception — a separate zoning review process — before a building permit can be applied for. EarthNest Florida coordinates this step as part of your project process.",
    },
    {
      title: "ADU size limits",
      body: [
        "Minimum: 400 sq ft of living area",
        "Maximum: 50% of the primary home's living area OR 1,000 sq ft — whichever is less",
        "Exception: Lots 2 acres or larger allow up to 1,500 sq ft",
        "Maximum: 2 bedrooms",
      ],
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
        "Orange County prohibits short-term rentals (under 30 days) in most residential zones. ADUs may only be rented under standard long-term residential leases. Short-term rental platforms (Airbnb, VRBO, etc.) are not a permitted income strategy for ADUs in Orange County (unincorporated).",
    },
  ],
  eligibilityNote:
    "Requirements vary by municipality. The City of Orlando, Osceola County, Seminole County, and Lake County each operate under their own ADU rules. EarthNest Florida reviews the specific requirements for your parcel as part of the free evaluation.",
  eligibilitySource: "Orange County Zoning Code Section 38-1426 and official county safety portals.",
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
    "ADU permitting requirements are sourced from Orange County's official permit information page and are subject to change. Requirements vary by project type, zoning, site conditions, and local amendments. Always verify current requirements directly with Orange County at orangecountyfl.net or by calling Orange County Zoning at (407) 836-3111 or Building Inspections at (407) 836-5550 before beginning any project. EarthNest Florida handles all zoning verification and permitting coordination as part of your free property evaluation.",
}
