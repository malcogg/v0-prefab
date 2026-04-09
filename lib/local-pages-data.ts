export type LocalSeoPage = {
  slug: string
  locationName: string
  tier: 1 | 2 | 3
  county: string
  group: string
  isHub: boolean
  hubSlug: string
  jurisdiction: string
  isFlagged: boolean
  warning: string
  introParagraphs: string[]
  quickRules: string[]
  metaTitle: string
  metaDescription: string
  wordBand: { minWords: number; maxWords: number }
}

export const LOCAL_SEO_PAGES: LocalSeoPage[] = [
  {
    "slug": "adu-alafaya",
    "locationName": "Alafaya",
    "tier": 1,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Alafaya are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Alafaya | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Alafaya, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-altamonte-springs",
    "locationName": "Altamonte Springs",
    "tier": 1,
    "county": "Seminole County",
    "group": "Seminole County Municipalities",
    "isHub": false,
    "hubSlug": "adu-seminole-county",
    "jurisdiction": "Municipal zoning standards apply by city in Seminole County. Requirements vary and must be confirmed before planning.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Altamonte Springs are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning standards apply by city in Seminole County. Requirements vary and must be confirmed before planning..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Seminole County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Altamonte Springs | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Altamonte Springs, Seminole County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-altoona",
    "locationName": "Altoona",
    "tier": 3,
    "county": "Lake County",
    "group": "Lake County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Lake County zoning applies in unincorporated communities. Lot size, setbacks, and placement requirements vary by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Altoona are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Lake County zoning applies in unincorporated communities. Lot size, setbacks, and placement requirements vary by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Lake County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Altoona | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Altoona, Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-apopka",
    "locationName": "Apopka",
    "tier": 1,
    "county": "Orange County",
    "group": "Orange County Municipalities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Apopka are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Apopka | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Apopka, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-astatula",
    "locationName": "Astatula",
    "tier": 3,
    "county": "Lake County",
    "group": "Lake County Municipalities",
    "isHub": false,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Astatula are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Lake County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Astatula | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Astatula, Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-astor",
    "locationName": "Astor",
    "tier": 3,
    "county": "Lake County",
    "group": "Lake County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Lake County zoning applies in unincorporated communities. Lot size, setbacks, and placement requirements vary by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Astor are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Lake County zoning applies in unincorporated communities. Lot size, setbacks, and placement requirements vary by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Lake County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Astor | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Astor, Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-auburndale",
    "locationName": "Auburndale",
    "tier": 3,
    "county": "Polk County",
    "group": "Polk County Extended Service Area",
    "isHub": false,
    "hubSlug": "adu-polk-county",
    "jurisdiction": "Polk County or municipal zoning standards apply depending on parcel location. Verification is required before planning.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Auburndale are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Polk County or municipal zoning standards apply depending on parcel location. Verification is required before planning..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Polk County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Auburndale | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Auburndale, Polk County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-audubon-park",
    "locationName": "Audubon Park",
    "tier": 1,
    "county": "Orange County",
    "group": "City of Orlando Neighborhoods",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Audubon Park are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "City of Orlando ADU pathways generally do not require owner-occupancy.",
      "Detached ADUs are commonly placed at the side or rear of the primary dwelling.",
      "Setbacks, height, and design compatibility depend on district-specific standards.",
      "Short-term rental rules differ from county policy and must be verified separately."
    ],
    "metaTitle": "ADU Specialists in Audubon Park | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Audubon Park, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-azalea-park",
    "locationName": "Azalea Park",
    "tier": 2,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Azalea Park are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Azalea Park | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Azalea Park, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-baldwin-park",
    "locationName": "Baldwin Park",
    "tier": 1,
    "county": "Orange County",
    "group": "City of Orlando Neighborhoods",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Baldwin Park are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "City of Orlando ADU pathways generally do not require owner-occupancy.",
      "Detached ADUs are commonly placed at the side or rear of the primary dwelling.",
      "Setbacks, height, and design compatibility depend on district-specific standards.",
      "Short-term rental rules differ from county policy and must be verified separately."
    ],
    "metaTitle": "ADU Specialists in Baldwin Park | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Baldwin Park, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-bartow",
    "locationName": "Bartow",
    "tier": 3,
    "county": "Polk County",
    "group": "Polk County Extended Service Area",
    "isHub": false,
    "hubSlug": "adu-polk-county",
    "jurisdiction": "Polk County or municipal zoning standards apply depending on parcel location. Verification is required before planning.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Bartow are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Polk County or municipal zoning standards apply depending on parcel location. Verification is required before planning..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Polk County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Bartow | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Bartow, Polk County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-bay-hill",
    "locationName": "Bay Hill",
    "tier": 2,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Bay Hill are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Bay Hill | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Bay Hill, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-bay-lake",
    "locationName": "Bay Lake",
    "tier": 3,
    "county": "Orange County",
    "group": "Orange County Municipalities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Bay Lake are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Bay Lake | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Bay Lake, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-belle-isle",
    "locationName": "Belle Isle",
    "tier": 2,
    "county": "Orange County",
    "group": "Orange County Municipalities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Belle Isle are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Belle Isle | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Belle Isle, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-bithlo",
    "locationName": "Bithlo",
    "tier": 3,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Bithlo are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Bithlo | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Bithlo, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-buenaventura-lakes",
    "locationName": "Buenaventura Lakes",
    "tier": 1,
    "county": "Osceola County",
    "group": "Osceola County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-osceola-county",
    "jurisdiction": "Osceola County zoning applies in unincorporated communities unless a specific municipal overlay governs the parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Buenaventura Lakes are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Osceola County zoning applies in unincorporated communities unless a specific municipal overlay governs the parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Osceola County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Buenaventura Lakes | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Buenaventura Lakes, Osceola County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-campbell",
    "locationName": "Campbell",
    "tier": 3,
    "county": "Osceola County",
    "group": "Osceola County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-osceola-county",
    "jurisdiction": "Osceola County zoning applies in unincorporated communities unless a specific municipal overlay governs the parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Campbell are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Osceola County zoning applies in unincorporated communities unless a specific municipal overlay governs the parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Osceola County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Campbell | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Campbell, Osceola County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-casselberry",
    "locationName": "Casselberry",
    "tier": 1,
    "county": "Seminole County",
    "group": "Seminole County Municipalities",
    "isHub": false,
    "hubSlug": "adu-seminole-county",
    "jurisdiction": "Municipal zoning standards apply by city in Seminole County. Requirements vary and must be confirmed before planning.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Casselberry are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning standards apply by city in Seminole County. Requirements vary and must be confirmed before planning..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Seminole County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Casselberry | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Casselberry, Seminole County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-celebration",
    "locationName": "Celebration",
    "tier": 1,
    "county": "Osceola County",
    "group": "Osceola County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-osceola-county",
    "jurisdiction": "Osceola County zoning applies in unincorporated communities unless a specific municipal overlay governs the parcel.",
    "isFlagged": true,
    "warning": "Celebration spans multiple jurisdictions. The zoning rules that apply to your property depend on your exact parcel location. EarthNest Florida runs a zoning check as the first step of every free evaluation — before any other work begins.",
    "introParagraphs": [
      "Homeowners and investors in Celebration are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Osceola County zoning applies in unincorporated communities unless a specific municipal overlay governs the parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Osceola County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Celebration | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Celebration, Osceola County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-christmas",
    "locationName": "Christmas",
    "tier": 3,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Christmas are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Christmas | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Christmas, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-clarcona",
    "locationName": "Clarcona",
    "tier": 2,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Clarcona are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Clarcona | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Clarcona, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-clermont",
    "locationName": "Clermont",
    "tier": 1,
    "county": "Lake County",
    "group": "Lake County Municipalities",
    "isHub": false,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Clermont are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Lake County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Clermont | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Clermont, Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-college-park-orlando",
    "locationName": "College Park Orlando",
    "tier": 1,
    "county": "Orange County",
    "group": "City of Orlando Neighborhoods",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in College Park Orlando are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "City of Orlando ADU pathways generally do not require owner-occupancy.",
      "Detached ADUs are commonly placed at the side or rear of the primary dwelling.",
      "Setbacks, height, and design compatibility depend on district-specific standards.",
      "Short-term rental rules differ from county policy and must be verified separately."
    ],
    "metaTitle": "ADU Specialists in College Park Orlando | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in College Park Orlando, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-conway",
    "locationName": "Conway",
    "tier": 2,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Conway are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Conway | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Conway, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-davenport",
    "locationName": "Davenport",
    "tier": 2,
    "county": "Polk County",
    "group": "Polk County Extended Service Area",
    "isHub": false,
    "hubSlug": "adu-polk-county",
    "jurisdiction": "Polk County or municipal zoning standards apply depending on parcel location. Verification is required before planning.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Davenport are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Polk County or municipal zoning standards apply depending on parcel location. Verification is required before planning..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Polk County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Davenport | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Davenport, Polk County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-delaney-park",
    "locationName": "Delaney Park",
    "tier": 2,
    "county": "Orange County",
    "group": "City of Orlando Neighborhoods",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Delaney Park are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "City of Orlando ADU pathways generally do not require owner-occupancy.",
      "Detached ADUs are commonly placed at the side or rear of the primary dwelling.",
      "Setbacks, height, and design compatibility depend on district-specific standards.",
      "Short-term rental rules differ from county policy and must be verified separately."
    ],
    "metaTitle": "ADU Specialists in Delaney Park | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Delaney Park, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-downtown-orlando",
    "locationName": "Downtown Orlando",
    "tier": 2,
    "county": "Orange County",
    "group": "City of Orlando Neighborhoods",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Downtown Orlando are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "City of Orlando ADU pathways generally do not require owner-occupancy.",
      "Detached ADUs are commonly placed at the side or rear of the primary dwelling.",
      "Setbacks, height, and design compatibility depend on district-specific standards.",
      "Short-term rental rules differ from county policy and must be verified separately."
    ],
    "metaTitle": "ADU Specialists in Downtown Orlando | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Downtown Orlando, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-dr-phillips",
    "locationName": "Dr. Phillips",
    "tier": 1,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Dr. Phillips are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Dr. Phillips | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Dr. Phillips, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-dundee",
    "locationName": "Dundee",
    "tier": 2,
    "county": "Polk County",
    "group": "Polk County Extended Service Area",
    "isHub": false,
    "hubSlug": "adu-polk-county",
    "jurisdiction": "Polk County or municipal zoning standards apply depending on parcel location. Verification is required before planning.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Dundee are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Polk County or municipal zoning standards apply depending on parcel location. Verification is required before planning..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Polk County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Dundee | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Dundee, Polk County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-eatonville",
    "locationName": "Eatonville",
    "tier": 2,
    "county": "Orange County",
    "group": "Orange County Municipalities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Eatonville are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Eatonville | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Eatonville, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-edgewood",
    "locationName": "Edgewood",
    "tier": 3,
    "county": "Orange County",
    "group": "Orange County Municipalities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Edgewood are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Edgewood | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Edgewood, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-eustis",
    "locationName": "Eustis",
    "tier": 2,
    "county": "Lake County",
    "group": "Lake County Municipalities",
    "isHub": false,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Eustis are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Lake County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Eustis | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Eustis, Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-fairview-shores",
    "locationName": "Fairview Shores",
    "tier": 2,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Fairview Shores are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Fairview Shores | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Fairview Shores, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-fern-park",
    "locationName": "Fern Park",
    "tier": 2,
    "county": "Seminole County",
    "group": "Seminole County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-seminole-county",
    "jurisdiction": "Seminole County zoning applies in unincorporated communities. Parcel-specific standards should be verified before design.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Fern Park are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Seminole County zoning applies in unincorporated communities. Parcel-specific standards should be verified before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Seminole County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Fern Park | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Fern Park, Seminole County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-ferndale",
    "locationName": "Ferndale",
    "tier": 3,
    "county": "Lake County",
    "group": "Lake County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Lake County zoning applies in unincorporated communities. Lot size, setbacks, and placement requirements vary by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Ferndale are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Lake County zoning applies in unincorporated communities. Lot size, setbacks, and placement requirements vary by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Lake County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Ferndale | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Ferndale, Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-forest-city",
    "locationName": "Forest City",
    "tier": 2,
    "county": "Seminole County",
    "group": "Seminole County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-seminole-county",
    "jurisdiction": "Seminole County zoning applies in unincorporated communities. Parcel-specific standards should be verified before design.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Forest City are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Seminole County zoning applies in unincorporated communities. Parcel-specific standards should be verified before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Seminole County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Forest City | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Forest City, Seminole County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-four-corners",
    "locationName": "Four Corners",
    "tier": 2,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": true,
    "warning": "Four Corners spans multiple jurisdictions. The zoning rules that apply to your property depend on your exact parcel location. EarthNest Florida runs a zoning check as the first step of every free evaluation — before any other work begins.",
    "introParagraphs": [
      "Homeowners and investors in Four Corners are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Four Corners | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Four Corners, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-fruitland-park",
    "locationName": "Fruitland Park",
    "tier": 2,
    "county": "Lake County",
    "group": "Lake County Municipalities",
    "isHub": false,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Fruitland Park are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Lake County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Fruitland Park | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Fruitland Park, Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-geneva",
    "locationName": "Geneva",
    "tier": 3,
    "county": "Seminole County",
    "group": "Seminole County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-seminole-county",
    "jurisdiction": "Seminole County zoning applies in unincorporated communities. Parcel-specific standards should be verified before design.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Geneva are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Seminole County zoning applies in unincorporated communities. Parcel-specific standards should be verified before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Seminole County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Geneva | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Geneva, Seminole County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-goldenrod",
    "locationName": "Goldenrod",
    "tier": 1,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": true,
    "warning": "Goldenrod spans multiple jurisdictions. The zoning rules that apply to your property depend on your exact parcel location. EarthNest Florida runs a zoning check as the first step of every free evaluation — before any other work begins.",
    "introParagraphs": [
      "Homeowners and investors in Goldenrod are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Goldenrod | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Goldenrod, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-gotha",
    "locationName": "Gotha",
    "tier": 2,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Gotha are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Gotha | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Gotha, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-groveland",
    "locationName": "Groveland",
    "tier": 1,
    "county": "Lake County",
    "group": "Lake County Municipalities",
    "isHub": false,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Groveland are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Lake County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Groveland | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Groveland, Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-haines-city",
    "locationName": "Haines City",
    "tier": 2,
    "county": "Polk County",
    "group": "Polk County Extended Service Area",
    "isHub": false,
    "hubSlug": "adu-polk-county",
    "jurisdiction": "Polk County or municipal zoning standards apply depending on parcel location. Verification is required before planning.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Haines City are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Polk County or municipal zoning standards apply depending on parcel location. Verification is required before planning..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Polk County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Haines City | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Haines City, Polk County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-harmony",
    "locationName": "Harmony",
    "tier": 2,
    "county": "Osceola County",
    "group": "Osceola County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-osceola-county",
    "jurisdiction": "Osceola County zoning applies in unincorporated communities unless a specific municipal overlay governs the parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Harmony are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Osceola County zoning applies in unincorporated communities unless a specific municipal overlay governs the parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Osceola County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Harmony | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Harmony, Osceola County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-heathrow",
    "locationName": "Heathrow",
    "tier": 1,
    "county": "Seminole County",
    "group": "Seminole County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-seminole-county",
    "jurisdiction": "Seminole County zoning applies in unincorporated communities. Parcel-specific standards should be verified before design.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Heathrow are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Seminole County zoning applies in unincorporated communities. Parcel-specific standards should be verified before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Seminole County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Heathrow | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Heathrow, Seminole County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-holden-heights",
    "locationName": "Holden Heights",
    "tier": 3,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Holden Heights are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Holden Heights | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Holden Heights, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-horizon-west",
    "locationName": "Horizon West",
    "tier": 1,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Horizon West are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Horizon West | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Horizon West, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-howey-in-the-hills",
    "locationName": "Howey-in-the-Hills",
    "tier": 3,
    "county": "Lake County",
    "group": "Lake County Municipalities",
    "isHub": false,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Howey-in-the-Hills are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Lake County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Howey-in-the-Hills | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Howey-in-the-Hills, Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-hunters-creek",
    "locationName": "Hunter's Creek",
    "tier": 1,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": true,
    "warning": "Hunter's Creek spans multiple jurisdictions. The zoning rules that apply to your property depend on your exact parcel location. EarthNest Florida runs a zoning check as the first step of every free evaluation — before any other work begins.",
    "introParagraphs": [
      "Homeowners and investors in Hunter's Creek are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Hunter's Creek | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Hunter's Creek, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-intercession-city",
    "locationName": "Intercession City",
    "tier": 3,
    "county": "Osceola County",
    "group": "Osceola County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-osceola-county",
    "jurisdiction": "Osceola County zoning applies in unincorporated communities unless a specific municipal overlay governs the parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Intercession City are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Osceola County zoning applies in unincorporated communities unless a specific municipal overlay governs the parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Osceola County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Intercession City | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Intercession City, Osceola County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-kissimmee",
    "locationName": "Kissimmee",
    "tier": 1,
    "county": "Osceola County",
    "group": "Osceola County Municipalities",
    "isHub": false,
    "hubSlug": "adu-osceola-county",
    "jurisdiction": "Municipal zoning applies in incorporated Osceola cities, with county overlays in some contexts.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Kissimmee are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning applies in incorporated Osceola cities, with county overlays in some contexts..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Osceola County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Kissimmee | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Kissimmee, Osceola County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-lady-lake",
    "locationName": "Lady Lake",
    "tier": 2,
    "county": "Lake County",
    "group": "Lake County Municipalities",
    "isHub": false,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Lady Lake are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Lake County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Lady Lake | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Lady Lake, Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-lake-alfred",
    "locationName": "Lake Alfred",
    "tier": 3,
    "county": "Polk County",
    "group": "Polk County Extended Service Area",
    "isHub": false,
    "hubSlug": "adu-polk-county",
    "jurisdiction": "Polk County or municipal zoning standards apply depending on parcel location. Verification is required before planning.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Lake Alfred are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Polk County or municipal zoning standards apply depending on parcel location. Verification is required before planning..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Polk County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Lake Alfred | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Lake Alfred, Polk County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-lake-buena-vista",
    "locationName": "Lake Buena Vista",
    "tier": 3,
    "county": "Orange County",
    "group": "Orange County Municipalities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Lake Buena Vista are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Lake Buena Vista | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Lake Buena Vista, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-lake-butler",
    "locationName": "Lake Butler",
    "tier": 3,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Lake Butler are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Lake Butler | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Lake Butler, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-lake-county",
    "locationName": "Lake County",
    "tier": 1,
    "county": "Lake County",
    "group": "County Hub",
    "isHub": true,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Lake County includes both incorporated municipalities and unincorporated areas. Applicable rules vary by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Lake County is one of EarthNest Florida's primary ADU service hubs, with meaningful demand across homeowners and investors looking for permitted, long-term value-add housing options.",
      "Because parcels in Lake County may fall under municipal standards or unincorporated county code, a zoning-first process is essential before any design or cost assumptions are made.",
      "This county hub connects you to local city and neighborhood pages so you can review location-specific context, then confirm your exact parcel requirements through a free EarthNest evaluation.",
      "Projects in this county typically perform best when feasibility is validated up front, utility and setback conditions are mapped early, and the build strategy is selected based on long-term compliance and rental durability."
    ],
    "quickRules": [
      "County hub pages summarize local markets; final zoning authority still depends on parcel jurisdiction.",
      "Municipal pages may differ significantly from unincorporated county standards.",
      "Setback, owner-occupancy, and special-exception expectations vary across the county map.",
      "Use the county directory and parcel-level review before selecting a final ADU plan."
    ],
    "metaTitle": "ADU Specialists in Lake County | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-lake-eola-heights",
    "locationName": "Lake Eola Heights",
    "tier": 2,
    "county": "Orange County",
    "group": "City of Orlando Neighborhoods",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Lake Eola Heights are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "City of Orlando ADU pathways generally do not require owner-occupancy.",
      "Detached ADUs are commonly placed at the side or rear of the primary dwelling.",
      "Setbacks, height, and design compatibility depend on district-specific standards.",
      "Short-term rental rules differ from county policy and must be verified separately."
    ],
    "metaTitle": "ADU Specialists in Lake Eola Heights | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Lake Eola Heights, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-lake-hart",
    "locationName": "Lake Hart",
    "tier": 3,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Lake Hart are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Lake Hart | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Lake Hart, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-lake-mary",
    "locationName": "Lake Mary",
    "tier": 1,
    "county": "Seminole County",
    "group": "Seminole County Municipalities",
    "isHub": false,
    "hubSlug": "adu-seminole-county",
    "jurisdiction": "Municipal zoning standards apply by city in Seminole County. Requirements vary and must be confirmed before planning.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Lake Mary are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning standards apply by city in Seminole County. Requirements vary and must be confirmed before planning..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Seminole County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Lake Mary | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Lake Mary, Seminole County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-lake-mary-jane",
    "locationName": "Lake Mary Jane",
    "tier": 3,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Lake Mary Jane are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Lake Mary Jane | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Lake Mary Jane, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-lake-monroe",
    "locationName": "Lake Monroe",
    "tier": 3,
    "county": "Seminole County",
    "group": "Seminole County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-seminole-county",
    "jurisdiction": "Seminole County zoning applies in unincorporated communities. Parcel-specific standards should be verified before design.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Lake Monroe are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Seminole County zoning applies in unincorporated communities. Parcel-specific standards should be verified before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Seminole County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Lake Monroe | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Lake Monroe, Seminole County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-lake-nona",
    "locationName": "Lake Nona",
    "tier": 1,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Lake Nona are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Lake Nona | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Lake Nona, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-lake-nona-orlando",
    "locationName": "Lake Nona Orlando",
    "tier": 1,
    "county": "Orange County",
    "group": "City of Orlando Neighborhoods",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Lake Nona Orlando are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "City of Orlando ADU pathways generally do not require owner-occupancy.",
      "Detached ADUs are commonly placed at the side or rear of the primary dwelling.",
      "Setbacks, height, and design compatibility depend on district-specific standards.",
      "Short-term rental rules differ from county policy and must be verified separately."
    ],
    "metaTitle": "ADU Specialists in Lake Nona Orlando | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Lake Nona Orlando, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-lake-wales",
    "locationName": "Lake Wales",
    "tier": 3,
    "county": "Polk County",
    "group": "Polk County Extended Service Area",
    "isHub": false,
    "hubSlug": "adu-polk-county",
    "jurisdiction": "Polk County or municipal zoning standards apply depending on parcel location. Verification is required before planning.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Lake Wales are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Polk County or municipal zoning standards apply depending on parcel location. Verification is required before planning..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Polk County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Lake Wales | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Lake Wales, Polk County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-lakeland",
    "locationName": "Lakeland",
    "tier": 3,
    "county": "Polk County",
    "group": "Polk County Extended Service Area",
    "isHub": false,
    "hubSlug": "adu-polk-county",
    "jurisdiction": "Polk County or municipal zoning standards apply depending on parcel location. Verification is required before planning.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Lakeland are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Polk County or municipal zoning standards apply depending on parcel location. Verification is required before planning..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Polk County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Lakeland | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Lakeland, Polk County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-leesburg",
    "locationName": "Leesburg",
    "tier": 2,
    "county": "Lake County",
    "group": "Lake County Municipalities",
    "isHub": false,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Leesburg are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Lake County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Leesburg | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Leesburg, Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-lockhart",
    "locationName": "Lockhart",
    "tier": 1,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Lockhart are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Lockhart | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Lockhart, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-longwood",
    "locationName": "Longwood",
    "tier": 1,
    "county": "Seminole County",
    "group": "Seminole County Municipalities",
    "isHub": false,
    "hubSlug": "adu-seminole-county",
    "jurisdiction": "Municipal zoning standards apply by city in Seminole County. Requirements vary and must be confirmed before planning.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Longwood are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning standards apply by city in Seminole County. Requirements vary and must be confirmed before planning..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Seminole County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Longwood | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Longwood, Seminole County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-loughman",
    "locationName": "Loughman",
    "tier": 3,
    "county": "Osceola County",
    "group": "Osceola County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-osceola-county",
    "jurisdiction": "Osceola County zoning applies in unincorporated communities unless a specific municipal overlay governs the parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Loughman are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Osceola County zoning applies in unincorporated communities unless a specific municipal overlay governs the parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Osceola County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Loughman | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Loughman, Osceola County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-maitland",
    "locationName": "Maitland",
    "tier": 1,
    "county": "Orange County",
    "group": "Orange County Municipalities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Maitland are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Maitland | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Maitland, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-mascotte",
    "locationName": "Mascotte",
    "tier": 2,
    "county": "Lake County",
    "group": "Lake County Municipalities",
    "isHub": false,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Mascotte are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Lake County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Mascotte | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Mascotte, Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-meadow-woods",
    "locationName": "Meadow Woods",
    "tier": 1,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Meadow Woods are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Meadow Woods | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Meadow Woods, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-metrowest",
    "locationName": "MetroWest",
    "tier": 1,
    "county": "Orange County",
    "group": "City of Orlando Neighborhoods",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in MetroWest are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "City of Orlando ADU pathways generally do not require owner-occupancy.",
      "Detached ADUs are commonly placed at the side or rear of the primary dwelling.",
      "Setbacks, height, and design compatibility depend on district-specific standards.",
      "Short-term rental rules differ from county policy and must be verified separately."
    ],
    "metaTitle": "ADU Specialists in MetroWest | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in MetroWest, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-midway-seminole",
    "locationName": "Midway (Seminole)",
    "tier": 3,
    "county": "Seminole County",
    "group": "Seminole County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-seminole-county",
    "jurisdiction": "Seminole County zoning applies in unincorporated communities. Parcel-specific standards should be verified before design.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Midway (Seminole) are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Seminole County zoning applies in unincorporated communities. Parcel-specific standards should be verified before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Seminole County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Midway (Seminole) | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Midway (Seminole), Seminole County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-mills-50",
    "locationName": "Mills 50",
    "tier": 2,
    "county": "Orange County",
    "group": "City of Orlando Neighborhoods",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Mills 50 are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "City of Orlando ADU pathways generally do not require owner-occupancy.",
      "Detached ADUs are commonly placed at the side or rear of the primary dwelling.",
      "Setbacks, height, and design compatibility depend on district-specific standards.",
      "Short-term rental rules differ from county policy and must be verified separately."
    ],
    "metaTitle": "ADU Specialists in Mills 50 | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Mills 50, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-minneola",
    "locationName": "Minneola",
    "tier": 1,
    "county": "Lake County",
    "group": "Lake County Municipalities",
    "isHub": false,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Minneola are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Lake County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Minneola | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Minneola, Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-montverde",
    "locationName": "Montverde",
    "tier": 2,
    "county": "Lake County",
    "group": "Lake County Municipalities",
    "isHub": false,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Montverde are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Lake County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Montverde | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Montverde, Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-mount-dora",
    "locationName": "Mount Dora",
    "tier": 2,
    "county": "Lake County",
    "group": "Lake County Municipalities",
    "isHub": false,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Mount Dora are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Lake County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Mount Dora | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Mount Dora, Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-mount-plymouth",
    "locationName": "Mount Plymouth",
    "tier": 2,
    "county": "Lake County",
    "group": "Lake County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Lake County zoning applies in unincorporated communities. Lot size, setbacks, and placement requirements vary by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Mount Plymouth are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Lake County zoning applies in unincorporated communities. Lot size, setbacks, and placement requirements vary by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Lake County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Mount Plymouth | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Mount Plymouth, Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-narcoossee",
    "locationName": "Narcoossee",
    "tier": 2,
    "county": "Osceola County",
    "group": "Osceola County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-osceola-county",
    "jurisdiction": "Osceola County zoning applies in unincorporated communities unless a specific municipal overlay governs the parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Narcoossee are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Osceola County zoning applies in unincorporated communities unless a specific municipal overlay governs the parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Osceola County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Narcoossee | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Narcoossee, Osceola County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-oak-ridge",
    "locationName": "Oak Ridge",
    "tier": 1,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Oak Ridge are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Oak Ridge | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Oak Ridge, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-oakland",
    "locationName": "Oakland",
    "tier": 2,
    "county": "Orange County",
    "group": "Orange County Municipalities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Oakland are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Oakland | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Oakland, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-ocoee",
    "locationName": "Ocoee",
    "tier": 1,
    "county": "Orange County",
    "group": "Orange County Municipalities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Ocoee are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Ocoee | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Ocoee, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-okahumpka",
    "locationName": "Okahumpka",
    "tier": 3,
    "county": "Lake County",
    "group": "Lake County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Lake County zoning applies in unincorporated communities. Lot size, setbacks, and placement requirements vary by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Okahumpka are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Lake County zoning applies in unincorporated communities. Lot size, setbacks, and placement requirements vary by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Lake County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Okahumpka | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Okahumpka, Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-orange-county",
    "locationName": "Orange County",
    "tier": 1,
    "county": "Orange County",
    "group": "County Hub",
    "isHub": true,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County includes both incorporated municipalities and unincorporated areas. Applicable rules vary by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Orange County is one of EarthNest Florida's primary ADU service hubs, with meaningful demand across homeowners and investors looking for permitted, long-term value-add housing options.",
      "Because parcels in Orange County may fall under municipal standards or unincorporated county code, a zoning-first process is essential before any design or cost assumptions are made.",
      "This county hub connects you to local city and neighborhood pages so you can review location-specific context, then confirm your exact parcel requirements through a free EarthNest evaluation.",
      "Projects in this county typically perform best when feasibility is validated up front, utility and setback conditions are mapped early, and the build strategy is selected based on long-term compliance and rental durability."
    ],
    "quickRules": [
      "County hub pages summarize local markets; final zoning authority still depends on parcel jurisdiction.",
      "Municipal pages may differ significantly from unincorporated county standards.",
      "Setback, owner-occupancy, and special-exception expectations vary across the county map.",
      "Use the county directory and parcel-level review before selecting a final ADU plan."
    ],
    "metaTitle": "ADU Specialists in Orange County | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-orlando",
    "locationName": "Orlando",
    "tier": 1,
    "county": "Orange County",
    "group": "Orange County Municipalities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Orlando are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "City of Orlando ADU pathways generally do not require owner-occupancy.",
      "Detached ADUs are commonly placed at the side or rear of the primary dwelling.",
      "Setbacks, height, and design compatibility depend on district-specific standards.",
      "Short-term rental rules differ from county policy and must be verified separately."
    ],
    "metaTitle": "ADU Specialists in Orlando | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Orlando, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-orlo-vista",
    "locationName": "Orlo Vista",
    "tier": 3,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Orlo Vista are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Orlo Vista | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Orlo Vista, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-osceola-county",
    "locationName": "Osceola County",
    "tier": 1,
    "county": "Osceola County",
    "group": "County Hub",
    "isHub": true,
    "hubSlug": "adu-osceola-county",
    "jurisdiction": "Osceola County includes both incorporated municipalities and unincorporated areas. Applicable rules vary by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Osceola County is one of EarthNest Florida's primary ADU service hubs, with meaningful demand across homeowners and investors looking for permitted, long-term value-add housing options.",
      "Because parcels in Osceola County may fall under municipal standards or unincorporated county code, a zoning-first process is essential before any design or cost assumptions are made.",
      "This county hub connects you to local city and neighborhood pages so you can review location-specific context, then confirm your exact parcel requirements through a free EarthNest evaluation.",
      "Projects in this county typically perform best when feasibility is validated up front, utility and setback conditions are mapped early, and the build strategy is selected based on long-term compliance and rental durability."
    ],
    "quickRules": [
      "County hub pages summarize local markets; final zoning authority still depends on parcel jurisdiction.",
      "Municipal pages may differ significantly from unincorporated county standards.",
      "Setback, owner-occupancy, and special-exception expectations vary across the county map.",
      "Use the county directory and parcel-level review before selecting a final ADU plan."
    ],
    "metaTitle": "ADU Specialists in Osceola County | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Osceola County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-oviedo",
    "locationName": "Oviedo",
    "tier": 1,
    "county": "Seminole County",
    "group": "Seminole County Municipalities",
    "isHub": false,
    "hubSlug": "adu-seminole-county",
    "jurisdiction": "Municipal zoning standards apply by city in Seminole County. Requirements vary and must be confirmed before planning.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Oviedo are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning standards apply by city in Seminole County. Requirements vary and must be confirmed before planning..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Seminole County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Oviedo | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Oviedo, Seminole County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-paisley",
    "locationName": "Paisley",
    "tier": 3,
    "county": "Lake County",
    "group": "Lake County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Lake County zoning applies in unincorporated communities. Lot size, setbacks, and placement requirements vary by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Paisley are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Lake County zoning applies in unincorporated communities. Lot size, setbacks, and placement requirements vary by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Lake County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Paisley | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Paisley, Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-pine-castle",
    "locationName": "Pine Castle",
    "tier": 2,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Pine Castle are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Pine Castle | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Pine Castle, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-pine-hills",
    "locationName": "Pine Hills",
    "tier": 1,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Pine Hills are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Pine Hills | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Pine Hills, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-poinciana",
    "locationName": "Poinciana",
    "tier": 1,
    "county": "Osceola County",
    "group": "Osceola County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-osceola-county",
    "jurisdiction": "Osceola County zoning applies in unincorporated communities unless a specific municipal overlay governs the parcel.",
    "isFlagged": true,
    "warning": "Poinciana spans multiple jurisdictions. The zoning rules that apply to your property depend on your exact parcel location. EarthNest Florida runs a zoning check as the first step of every free evaluation — before any other work begins.",
    "introParagraphs": [
      "Homeowners and investors in Poinciana are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Osceola County zoning applies in unincorporated communities unless a specific municipal overlay governs the parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Osceola County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Poinciana | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Poinciana, Osceola County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-polk-city",
    "locationName": "Polk City",
    "tier": 3,
    "county": "Polk County",
    "group": "Polk County Extended Service Area",
    "isHub": false,
    "hubSlug": "adu-polk-county",
    "jurisdiction": "Polk County or municipal zoning standards apply depending on parcel location. Verification is required before planning.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Polk City are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Polk County or municipal zoning standards apply depending on parcel location. Verification is required before planning..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Polk County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Polk City | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Polk City, Polk County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-polk-county",
    "locationName": "Polk County",
    "tier": 1,
    "county": "Polk County",
    "group": "County Hub",
    "isHub": true,
    "hubSlug": "adu-polk-county",
    "jurisdiction": "Polk County includes both incorporated municipalities and unincorporated areas. Applicable rules vary by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Polk County is one of EarthNest Florida's primary ADU service hubs, with meaningful demand across homeowners and investors looking for permitted, long-term value-add housing options.",
      "Because parcels in Polk County may fall under municipal standards or unincorporated county code, a zoning-first process is essential before any design or cost assumptions are made.",
      "This county hub connects you to local city and neighborhood pages so you can review location-specific context, then confirm your exact parcel requirements through a free EarthNest evaluation.",
      "Projects in this county typically perform best when feasibility is validated up front, utility and setback conditions are mapped early, and the build strategy is selected based on long-term compliance and rental durability."
    ],
    "quickRules": [
      "County hub pages summarize local markets; final zoning authority still depends on parcel jurisdiction.",
      "Municipal pages may differ significantly from unincorporated county standards.",
      "Setback, owner-occupancy, and special-exception expectations vary across the county map.",
      "Use the county directory and parcel-level review before selecting a final ADU plan."
    ],
    "metaTitle": "ADU Specialists in Polk County | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Polk County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-rio-pinar",
    "locationName": "Rio Pinar",
    "tier": 3,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Rio Pinar are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Rio Pinar | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Rio Pinar, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-sanford",
    "locationName": "Sanford",
    "tier": 1,
    "county": "Seminole County",
    "group": "Seminole County Municipalities",
    "isHub": false,
    "hubSlug": "adu-seminole-county",
    "jurisdiction": "Municipal zoning standards apply by city in Seminole County. Requirements vary and must be confirmed before planning.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Sanford are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning standards apply by city in Seminole County. Requirements vary and must be confirmed before planning..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Seminole County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Sanford | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Sanford, Seminole County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-sanlando-springs",
    "locationName": "Sanlando Springs",
    "tier": 2,
    "county": "Seminole County",
    "group": "Seminole County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-seminole-county",
    "jurisdiction": "Seminole County zoning applies in unincorporated communities. Parcel-specific standards should be verified before design.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Sanlando Springs are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Seminole County zoning applies in unincorporated communities. Parcel-specific standards should be verified before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Seminole County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Sanlando Springs | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Sanlando Springs, Seminole County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-seminole-county",
    "locationName": "Seminole County",
    "tier": 1,
    "county": "Seminole County",
    "group": "County Hub",
    "isHub": true,
    "hubSlug": "adu-seminole-county",
    "jurisdiction": "Seminole County includes both incorporated municipalities and unincorporated areas. Applicable rules vary by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Seminole County is one of EarthNest Florida's primary ADU service hubs, with meaningful demand across homeowners and investors looking for permitted, long-term value-add housing options.",
      "Because parcels in Seminole County may fall under municipal standards or unincorporated county code, a zoning-first process is essential before any design or cost assumptions are made.",
      "This county hub connects you to local city and neighborhood pages so you can review location-specific context, then confirm your exact parcel requirements through a free EarthNest evaluation.",
      "Projects in this county typically perform best when feasibility is validated up front, utility and setback conditions are mapped early, and the build strategy is selected based on long-term compliance and rental durability."
    ],
    "quickRules": [
      "County hub pages summarize local markets; final zoning authority still depends on parcel jurisdiction.",
      "Municipal pages may differ significantly from unincorporated county standards.",
      "Setback, owner-occupancy, and special-exception expectations vary across the county map.",
      "Use the county directory and parcel-level review before selecting a final ADU plan."
    ],
    "metaTitle": "ADU Specialists in Seminole County | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Seminole County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-sky-lake",
    "locationName": "Sky Lake",
    "tier": 2,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Sky Lake are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Sky Lake | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Sky Lake, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-slavia",
    "locationName": "Slavia",
    "tier": 3,
    "county": "Seminole County",
    "group": "Seminole County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-seminole-county",
    "jurisdiction": "Seminole County zoning applies in unincorporated communities. Parcel-specific standards should be verified before design.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Slavia are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Seminole County zoning applies in unincorporated communities. Parcel-specific standards should be verified before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Seminole County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Slavia | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Slavia, Seminole County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-sodo-orlando",
    "locationName": "SoDo Orlando",
    "tier": 2,
    "county": "Orange County",
    "group": "City of Orlando Neighborhoods",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in SoDo Orlando are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "City of Orlando ADU pathways generally do not require owner-occupancy.",
      "Detached ADUs are commonly placed at the side or rear of the primary dwelling.",
      "Setbacks, height, and design compatibility depend on district-specific standards.",
      "Short-term rental rules differ from county policy and must be verified separately."
    ],
    "metaTitle": "ADU Specialists in SoDo Orlando | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in SoDo Orlando, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-sorrento",
    "locationName": "Sorrento",
    "tier": 2,
    "county": "Lake County",
    "group": "Lake County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Lake County zoning applies in unincorporated communities. Lot size, setbacks, and placement requirements vary by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Sorrento are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Lake County zoning applies in unincorporated communities. Lot size, setbacks, and placement requirements vary by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Lake County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Sorrento | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Sorrento, Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-south-apopka",
    "locationName": "South Apopka",
    "tier": 2,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in South Apopka are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in South Apopka | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in South Apopka, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-southchase",
    "locationName": "Southchase",
    "tier": 2,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Southchase are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Southchase | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Southchase, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-st-cloud",
    "locationName": "St. Cloud",
    "tier": 1,
    "county": "Osceola County",
    "group": "Osceola County Municipalities",
    "isHub": false,
    "hubSlug": "adu-osceola-county",
    "jurisdiction": "Municipal zoning applies in incorporated Osceola cities, with county overlays in some contexts.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in St. Cloud are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning applies in incorporated Osceola cities, with county overlays in some contexts..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Osceola County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in St. Cloud | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in St. Cloud, Osceola County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-taft",
    "locationName": "Taft",
    "tier": 3,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Taft are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Taft | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Taft, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-tangelo-park",
    "locationName": "Tangelo Park",
    "tier": 3,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Tangelo Park are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Tangelo Park | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Tangelo Park, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-tangerine",
    "locationName": "Tangerine",
    "tier": 3,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Tangerine are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Tangerine | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Tangerine, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-tavares",
    "locationName": "Tavares",
    "tier": 2,
    "county": "Lake County",
    "group": "Lake County Municipalities",
    "isHub": false,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Tavares are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Lake County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Tavares | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Tavares, Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-thornton-park",
    "locationName": "Thornton Park",
    "tier": 2,
    "county": "Orange County",
    "group": "City of Orlando Neighborhoods",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Thornton Park are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City of Orlando zoning applies. Owner-occupancy is generally not required under City of Orlando ADU pathways..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "City of Orlando ADU pathways generally do not require owner-occupancy.",
      "Detached ADUs are commonly placed at the side or rear of the primary dwelling.",
      "Setbacks, height, and design compatibility depend on district-specific standards.",
      "Short-term rental rules differ from county policy and must be verified separately."
    ],
    "metaTitle": "ADU Specialists in Thornton Park | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Thornton Park, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-tildenville",
    "locationName": "Tildenville",
    "tier": 3,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Tildenville are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Tildenville | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Tildenville, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-tuskawilla",
    "locationName": "Tuskawilla",
    "tier": 2,
    "county": "Seminole County",
    "group": "Seminole County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-seminole-county",
    "jurisdiction": "Seminole County zoning applies in unincorporated communities. Parcel-specific standards should be verified before design.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Tuskawilla are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Seminole County zoning applies in unincorporated communities. Parcel-specific standards should be verified before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Seminole County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Tuskawilla | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Tuskawilla, Seminole County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-umatilla",
    "locationName": "Umatilla",
    "tier": 3,
    "county": "Lake County",
    "group": "Lake County Municipalities",
    "isHub": false,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Umatilla are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning standards apply across Lake County cities. Confirm parcel-level standards before committing to design assumptions..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Lake County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Umatilla | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Umatilla, Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-union-park",
    "locationName": "Union Park",
    "tier": 2,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Union Park are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Union Park | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Union Park, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-university-orlando",
    "locationName": "University (UCF area)",
    "tier": 2,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in University (UCF area) are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in University (UCF area) | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in University (UCF area), Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-wedgefield",
    "locationName": "Wedgefield",
    "tier": 3,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Wedgefield are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Wedgefield | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Wedgefield, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-wekiva-springs",
    "locationName": "Wekiva Springs",
    "tier": 2,
    "county": "Seminole County",
    "group": "Seminole County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-seminole-county",
    "jurisdiction": "Seminole County zoning applies in unincorporated communities. Parcel-specific standards should be verified before design.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Wekiva Springs are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Seminole County zoning applies in unincorporated communities. Parcel-specific standards should be verified before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Seminole County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Wekiva Springs | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Wekiva Springs, Seminole County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-williamsburg-orlando",
    "locationName": "Williamsburg",
    "tier": 2,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Williamsburg are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Williamsburg | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Williamsburg, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 100,
      "maxWords": 150
    }
  },
  {
    "slug": "adu-windermere",
    "locationName": "Windermere",
    "tier": 1,
    "county": "Orange County",
    "group": "Orange County Municipalities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design.",
    "isFlagged": true,
    "warning": "Windermere spans multiple jurisdictions. The zoning rules that apply to your property depend on your exact parcel location. EarthNest Florida runs a zoning check as the first step of every free evaluation — before any other work begins.",
    "introParagraphs": [
      "Homeowners and investors in Windermere are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Windermere | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Windermere, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-winter-garden",
    "locationName": "Winter Garden",
    "tier": 1,
    "county": "Orange County",
    "group": "Orange County Municipalities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Winter Garden are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Winter Garden | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Winter Garden, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-winter-haven",
    "locationName": "Winter Haven",
    "tier": 3,
    "county": "Polk County",
    "group": "Polk County Extended Service Area",
    "isHub": false,
    "hubSlug": "adu-polk-county",
    "jurisdiction": "Polk County or municipal zoning standards apply depending on parcel location. Verification is required before planning.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Winter Haven are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Polk County or municipal zoning standards apply depending on parcel location. Verification is required before planning..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Polk County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Winter Haven | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Winter Haven, Polk County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-winter-park",
    "locationName": "Winter Park",
    "tier": 1,
    "county": "Orange County",
    "group": "Orange County Municipalities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Winter Park are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: City/town zoning standards apply for incorporated municipalities. Parcel-level verification is still required before design..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Winter Park | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Winter Park, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-winter-springs",
    "locationName": "Winter Springs",
    "tier": 1,
    "county": "Seminole County",
    "group": "Seminole County Municipalities",
    "isHub": false,
    "hubSlug": "adu-seminole-county",
    "jurisdiction": "Municipal zoning standards apply by city in Seminole County. Requirements vary and must be confirmed before planning.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Winter Springs are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Municipal zoning standards apply by city in Seminole County. Requirements vary and must be confirmed before planning..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot.",
      "In this submarket, traditional site-built ADUs are often the strongest strategy when owners want compliant permitting pathways, predictable appraised value impact, and quality long-term tenant outcomes.",
      "Before plans are finalized, we align setback constraints, utility paths, lot conditions, and neighborhood context so your ADU recommendation is practical for your property rather than generic.",
      "Whether your goal is multigenerational housing, a private guest suite, or stable long-term rental income, the fastest path is confirming rules first and choosing the right build approach from there."
    ],
    "quickRules": [
      "Seminole County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Winter Springs | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Winter Springs, Seminole County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 200,
      "maxWords": 300
    }
  },
  {
    "slug": "adu-yalaha",
    "locationName": "Yalaha",
    "tier": 3,
    "county": "Lake County",
    "group": "Lake County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-lake-county",
    "jurisdiction": "Lake County zoning applies in unincorporated communities. Lot size, setbacks, and placement requirements vary by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Yalaha are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Lake County zoning applies in unincorporated communities. Lot size, setbacks, and placement requirements vary by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Lake County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Yalaha | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Yalaha, Lake County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-yeehaw-junction",
    "locationName": "Yeehaw Junction",
    "tier": 3,
    "county": "Osceola County",
    "group": "Osceola County Unincorporated",
    "isHub": false,
    "hubSlug": "adu-osceola-county",
    "jurisdiction": "Osceola County zoning applies in unincorporated communities unless a specific municipal overlay governs the parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Yeehaw Junction are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Osceola County zoning applies in unincorporated communities unless a specific municipal overlay governs the parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Osceola County requirements vary by municipality, zoning district, and parcel conditions.",
      "Owner-occupancy, ADU size caps, and setback rules must be confirmed before design assumptions.",
      "Detached placement, utility constraints, and lot dimensions affect feasibility and timeline.",
      "Use the county directory and parcel review to confirm exact standards before permitting."
    ],
    "metaTitle": "ADU Specialists in Yeehaw Junction | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Yeehaw Junction, Osceola County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  },
  {
    "slug": "adu-zellwood",
    "locationName": "Zellwood",
    "tier": 3,
    "county": "Orange County",
    "group": "Orange County Unincorporated Communities",
    "isHub": false,
    "hubSlug": "adu-orange-county",
    "jurisdiction": "Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel.",
    "isFlagged": false,
    "warning": "",
    "introParagraphs": [
      "Homeowners and investors in Zellwood are using ADUs to increase property utility, long-term flexibility, and durable rental performance in the Central Florida market.",
      "For properties in this area, jurisdiction matters first: Orange County (unincorporated) zoning applies in most of these communities. Owner-occupancy and special exception requirements may apply by parcel..",
      "EarthNest Florida starts every project with parcel-level zoning verification so design, permitting, and construction decisions are based on what is actually allowed for your lot."
    ],
    "quickRules": [
      "Orange County contexts commonly require owner occupancy and homestead alignment.",
      "Special Exception review may be required before building permit application.",
      "Maximum ADU size is often governed by both fixed cap and primary-home percentage rules.",
      "Parcel-level zoning and setback review is required before choosing final layout."
    ],
    "metaTitle": "ADU Specialists in Zellwood | EarthNest Florida",
    "metaDescription": "Build a legal, permitted ADU in Zellwood, Orange County. EarthNest Florida handles zoning, permitting, design & construction. Free property evaluation.",
    "wordBand": {
      "minWords": 50,
      "maxWords": 75
    }
  }
] as LocalSeoPage[]

export const LOCAL_SEO_PAGES_BY_SLUG = new Map(LOCAL_SEO_PAGES.map((page) => [page.slug, page]))

export function getLocalPageBySlug(slug: string) {
  return LOCAL_SEO_PAGES_BY_SLUG.get(slug)
}

export const LOCAL_SEO_PAGES_BY_COUNTY = LOCAL_SEO_PAGES.reduce<Record<string, LocalSeoPage[]>>(
  (acc, page) => {
    if (!acc[page.county]) acc[page.county] = []
    acc[page.county].push(page)
    return acc
  },
  {}
)
