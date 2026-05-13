/**
 * Official USDA ARS Plant Hardiness Zone Map references for copy, citations, and trust signals.
 * Map edition: 2023 (successor to the 2012 edition). See ARS for the authoritative product.
 */

export const USDA_PLANT_HARDINESS = {
  /** Interactive map & ZIP search (USDA ARS) */
  mapHomeUrl: "https://planthardiness.ars.usda.gov/",
  /** Notes on how the 2023 map was produced vs. the 2012 edition */
  mapCreationUrl: "https://phzm-prod.ars.usda.gov/pages/map-creation",
  /** Public inbox listed on the official map site for PHZM questions */
  contactEmail: "phzminfo@usda.gov",
  editionLabel: "2023 USDA Plant Hardiness Zone Map",
  publisher: "USDA Agricultural Research Service (ARS)",
} as const

/** One-line definition aligned with USDA’s public description (for UI + FAQ). */
export const USDA_ZONE_DEFINITION_SHORT =
  "USDA plant hardiness zones are based on the average annual extreme minimum winter temperature, shown as 10°F zones and 5°F half zones (2023 ARS map)."
