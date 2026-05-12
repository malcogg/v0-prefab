import { floridaCommunitiesSchema } from "@/lib/tiny-home-communities/schema"

const RAW = [
  {
    slug: "tiny-town-orlando",
    name: "Tiny Town Orlando (Orlando Lakefront)",
    regionLabel: "Central Florida · Orlando Metro",
    city: "Orlando",
    county: "Orange County",
    state: "FL" as const,
    streetAddress: "3405 N Orange Blossom Trl",
    postalCode: "32804",
    latitude: 28.5794,
    longitude: -81.3956,
    contact: {
      website: "https://tinytownorlando.com/",
      email: "orlandolakefrontth@gmail.com",
      phone: "+14079364094",
    },
    description:
      "Tiny Town Orlando revitalized a mid-century waterfront park into a curated tiny home village on Lake Fairview. Residents and guests enjoy a walkable waterfront setting with docks, paddling access, mature trees, and a strong sense of intentional community. The project is among Florida’s highest-profile legally permitted tiny dwelling clusters and has attracted national recognition.",
    status: "mixed",
    statusDetail: "Offers long-term placements and leasing options; waits can occur for coveted lakefront spacing.",
    lotDetailsSummary:
      "Mix of long-term leased pads and turnkey tiny units. Sizes span compact THOW footprints through small cottages. Ownership and tenancy models vary—confirm allowable unit standards, setbacks, hooks, and term lengths directly with operators.",
    tenancyModes: ["rent_home_or_lot", "lease_land_own_home", "purchase_or_rent_mix"] as const,
    amenities: [
      "Lake Fairview waterfront",
      "Docks · paddling-friendly access",
      "Community clubhouse & clubhouse-style gathering areas",
      "Coin laundry facilities",
      "Community gardening",
      "Pet policies differ by placement—confirm on tour",
      "Ultra-fast wired internet emphasized on site messaging",
    ],
    tags: ["lakefront", "walkable docks", "established hub", "permitted cluster", "Orlando Metro"],
    yearEstablished: 2010,
    legalNotes:
      "Operate as legally permitted dwellings within the revived park—not a generic unmanaged RV campground. Buyers should still independently verify HOA or municipal amendments if lots change hands.",
    image: {
      url: "https://images.unsplash.com/photo-1518780664699-7e3d4ae7ef32?auto=format&fit=crop&w=1400&q=75",
      alt: "Tiny home with warm siding and windows among trees.",
    },
    schemaKind: "LodgingBusiness" as const,
  },
  {
    slug: "peacewind-cocoa",
    name: "Peacewind by Braveheart Properties",
    regionLabel: "Space Coast · Brevard County",
    city: "Cocoa",
    county: "Brevard County",
    state: "FL" as const,
    latitude: 28.3896,
    longitude: -80.7615,
    contact: {
      website: "https://braveheartproperties.org/",
    },
    description:
      "Peacewind is a Braveheart Properties nonprofit woodland village purpose-built around tiny footprints, intentional agriculture, and community programming minutes from Cocoa’s aerospace corridor.",
    status: "active",
    statusDetail: "Rolling availability for builds, turnkey rentals, and raw pads—coordinate tours with stewardship staff.",
    lotDetailsSummary:
      "Generously proportioned parcels host THOW-certified builds and stick-built cottages. Equity and rental mixes evolve—Braveheart catalogs options public-facing with mission-first vetting.",
    tenancyModes: ["lease_land_own_home", "purchase_home_on_site", "rent_home_or_lot"] as const,
    amenities: [
      "Private stocked lake · dock infrastructure",
      "Community gardens & orchard rows",
      "Dog park · kids splash zone analogs",
      "Wooded walking corridors",
      "Future clubhouse roadmap per operator communications",
      "Rocket-launch vantage opportunities",
    ],
    tags: ["nonprofit stewardship", "wooded parcels", "Space Coast proximity", "permitted cluster"],
    yearEstablished: 2018,
    legalNotes:
      "Braveheart advocated for ordinance updates enabling permanent tiny footprints in Brevard—still independently confirm recorded covenants with title counsel.",
    image: {
      url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1400&q=75",
      alt: "Sunrise over calm lake bordered by shoreline trees.",
    },
    schemaKind: "LodgingBusiness" as const,
  },
  {
    slug: "escape-tampa-bay-village",
    name: "Escape Tampa Bay Village",
    regionLabel: "Tampa Bay · Hillsborough County",
    city: "Thonotosassa",
    county: "Hillsborough County",
    state: "FL" as const,
    streetAddress: "11008 US-301",
    postalCode: "33592",
    latitude: 28.0668,
    longitude: -82.3024,
    contact: {
      website: "https://www.escapetampabay.com/",
      email: "sales@escapetampabay.com",
    },
    description:
      "Escape Tampa Bay Village is Escape’s gated Thonotosassa neighborhood marrying factory-built efficiencies with landscaped courts, pooled amenities, and THOW-era-friendly utilities.",
    status: "expanding",
    statusDetail:
      "Phases continue to onboard homes; leases favor long horizons while short nightly stays remain restricted per published policies.",
    lotDetailsSummary:
      "Residents bring certified tiny units or acquire factory inventory staged on-site pads. HOA-style upkeep covers shared corridors while owners maintain interiors.",
    tenancyModes: ["purchase_home_on_site", "rent_home_or_lot"] as const,
    amenities: [
      "Gated podium entry",
      "Resort-inspired pool pavilion",
      "Fiber-ready utility spine",
      "Shared cowork nooks · mail nodes",
      "Pet-friendly corridors with deed restrictions",
      "Live oak sheltered courts",
    ],
    tags: ["gated campus", "Tampa commute", "factory tiny builds", "long-term tenancy"],
    yearEstablished: 2020,
    legalNotes:
      "Confirm minimum age, pet limits, Airbnb prohibitions, and pad certification details with HOA docs before escrow.",
    image: {
      url: "https://images.unsplash.com/photo-1600596542815-e32c5c27d7c4?auto=format&fit=crop&w=1400&q=75",
      alt: "Compact modern dwelling with cedar siding beside patio.",
    },
    schemaKind: "Campground" as const,
  },
  {
    slug: "circle-pond-ruskin",
    name: "Circle Pond Tiny Community",
    regionLabel: "Tampa Bay South · Hillsborough County",
    city: "Ruskin",
    county: "Hillsborough County",
    state: "FL" as const,
    latitude: 27.7165,
    longitude: -82.434,
    contact: {
      website: "https://circlepondtinycommunity.com/",
      email: "circlepondcommunity@gmail.com",
      phone: "+18137867300",
    },
    description:
      "Circle Pond is a sustainably minded micro-village clustered around private water with orchard rows, pollinator corridors, and a hands-on homestead culture minutes from Tampa Bay corridors.",
    status: "waitlist",
    statusDetail: "Rolling waitlist communicated publicly—coordinate visits by appointment.",
    lotDetailsSummary:
      "Compact pads prioritize certified THOW footprints with organic planting buffers. Stewardship publishes utility bundling philosophies without publishing rates here.",
    tenancyModes: ["lease_land_own_home", "purchase_or_rent_mix"] as const,
    amenities: [
      "Interior pond vistas",
      "Food forest corridors",
      "Bee collective infrastructure",
      "Shared fire amphitheater",
      "Organic soil remediation programming",
      "Pet-friendly stewardship with behavioral expectations",
    ],
    tags: ["permaculture", "waitlist-managed", "waterfront commons", "sustainability award history"],
    yearEstablished: 2017,
    legalNotes:
      "Certified dwellings only—verify HUD labels, Appendix Q alignment, or Florida modular equivalency paperwork before transport.",
    image: {
      url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1400&q=75",
      alt: "Wooden boardwalk edging a calm wooded pond.",
    },
    schemaKind: "LodgingBusiness" as const,
  },
  {
    slug: "gracious-tiny-house-park",
    name: "Gracious Tiny House Park",
    regionLabel: "Lake Region · Northern Glades Corridor",
    city: "Okeechobee area",
    county: "Okeechobee County area",
    state: "FL" as const,
    latitude: 27.4396,
    longitude: -80.8765,
    contact: {
      website: "http://www.gracioustinyhousepark.com/",
      phone: "+15618662804",
      email: "info@gracioustinyhousepark.com",
    },
    description:
      "Gracious Tiny House Park is family-run lakeside hospitality stressing full-time THOW homesteading amid Okeechobee’s prairie-light breezes.",
    status: "waitlist",
    statusDetail: "Pad rotation prioritizes contiguous stays—operator confirms hookup inventory verbally.",
    lotDetailsSummary:
      "Twenty-one full-hookup patios split between shoreline and courtyard orientations—leases emphasize six-month stewardship minimums per published FAQs.",
    tenancyModes: ["lease_land_own_home", "rent_home_or_lot"] as const,
    amenities: [
      "Lake O proximity boating culture",
      "Shared gazebos & fishing decks",
      "Pet allowances with deposits",
      "Lawn-maintenance-inclusive pads",
      "Walking loops around interior wetlands",
      "Regional retail within short drives",
    ],
    tags: ["lake access", "THOW-forward", "long-term pads", "family-operated"],
    legalNotes:
      "THOW classifications still differ from IRC Appendix Q dwellings—coordinate Florida DBPR or county inspection expectations before relocation.",
    image: {
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=75",
      alt: "Palm-lined path toward still water reflecting clouds.",
    },
    schemaKind: "RVPark" as const,
  },
  {
    slug: "simple-life-lakeshore",
    name: "Simple Life · Lakeshore (Lake Andrew)",
    regionLabel: "Nature Coast · Sumter County",
    city: "Oxford",
    county: "Sumter County",
    state: "FL" as const,
    streetAddress: "3362 E County Rd 466",
    postalCode: "34484",
    latitude: 28.9425,
    longitude: -82.0386,
    contact: {
      website: "https://www.lakeshoreatlakeandrew.com/",
    },
    description:
      "Lakeshore is Simple Life’s Florida flagship showcasing cottage footprints, leased land stewardship, wellness programming, and social infrastructure minutes from The Villages.",
    status: "active",
    statusDetail: "Rolling inventory rotations between turnkey cottages and customizable pads.",
    lotDetailsSummary:
      "Residents typically own cottages while leasing pads—utilities bundle beneath operator billing dashboards per marketing collateral.",
    tenancyModes: ["lease_land_own_home", "purchase_home_on_site"] as const,
    amenities: [
      "Clubhouse anchored amenity corridor",
      "Resort-caliber aquatic court",
      "Pickleball stacks",
      "Dog recreation loops",
      "Lake Andrew vistas",
      "Walking spine connectivity",
    ],
    tags: ["cottage footprints", "The Villages adjacency", "wellness-forward", "leasehold model"],
    yearEstablished: 2018,
    legalNotes:
      "Leasehold regimes differ materially from fee-simple homesteads—validate lot rent escalators with counsel prior to underwriting.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=75",
      alt: "Cottage-style neighborhood homes along a leafy street.",
    },
    schemaKind: "LodgingBusiness" as const,
  },
  {
    slug: "tiny-house-siesta",
    name: "Tiny House Siesta",
    regionLabel: "Gulf Coast · Sarasota County",
    city: "Sarasota",
    county: "Sarasota County",
    state: "FL" as const,
    latitude: 27.2678,
    longitude: -82.5463,
    contact: {
      website: "https://www.tinyhousesiesta.com/",
      phone: "+19414743782",
    },
    description:
      "Tiny House Siesta nests colorful micro dwellings near Sarasota’s coveted barrier islands offering hospitality-caliber micro stays with resort adjacency messaging.",
    status: "mixed",
    statusDetail:
      "Portfolio skews nightly hospitality bookings—discuss transitional residency timelines before assuming homestead permanence.",
    lotDetailsSummary:
      "Ultra-compact lots host individually themed dwellings; confirm whether long-term homesteading aligns with Sarasota County zoning outcomes.",
    tenancyModes: ["rent_home_or_lot", "unspecified"] as const,
    amenities: [
      "Siesta proximity marketing",
      "Outdoor showers on select footprints",
      "Pet-accommodating units called out digitally",
      "Wi-Fi & curated interior kits",
      "Bikeable village connectors",
      "Regional arts & dining corridors",
    ],
    tags: ["beach commuter", "hospitality skew", "themed dwellings", "Gulf sunsets"],
    yearEstablished: 2015,
    legalNotes:
      "Verify whether placements align with Sarasota’s transient occupancy rules versus year-round dwellings before relocating full-time.",
    image: {
      url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=75",
      alt: "Cozy seating area inside a compact modern tiny house.",
    },
    schemaKind: "LodgingBusiness" as const,
  },
  {
    slug: "canoe-creek-st-cloud",
    name: "Canoe Creek (Garber Communities)",
    regionLabel: "Greater Orlando · Osceola County",
    city: "St Cloud",
    county: "Osceola County",
    state: "FL" as const,
    streetAddress: "4101 Canoe Creek Rd",
    postalCode: "34772",
    latitude: 28.2045,
    longitude: -81.3395,
    contact: {
      website: "https://www.canoecreekrvresort.com/",
    },
    description:
      "Canoe Creek is a landscaped 55+ Garber-managed campus pairing park-model inventory with clubhouse programming near East Lake Tohopekaliga’s recreation economy.",
    status: "contact_for_availability",
    statusDetail:
      "Operator markets park-model footprints alongside seasonal RV corridors—coordinate tours for homestead versus snowbird classifications.",
    lotDetailsSummary:
      "Residents often purchase depreciation-friendly park models while leasing footprint rights—confirm warranty paths and HOA capital plans before closing.",
    tenancyModes: ["lease_land_own_home", "purchase_home_on_site", "unspecified"] as const,
    amenities: [
      "Clubhouse anchored programming",
      "Pickleball & shuffle corridors",
      "Exercise studio",
      "Planned aquatic amenity roadmap per marketing",
      "Lake Toho recreation adjacency",
      "Regional golf density",
    ],
    tags: ["55+ stewardship", "park models", "Osceola County", "resort-lite programming"],
    yearEstablished: 2015,
    legalNotes:
      "Manufactured-home regimes differ materially from Appendix Q dwellings—verify wind zone anchorage, HOA rental caps, and DBPR disclosures.",
    image: {
      url: "https://images.unsplash.com/photo-1600047509358-31dc98208ef7?auto=format&fit=crop&w=1400&q=75",
      alt: "Rows of cottages and greenery in a community setting.",
    },
    schemaKind: "RVPark" as const,
  },
]

export function floridaRawCommunities() {
  return floridaCommunitiesSchema.parse(RAW)
}
