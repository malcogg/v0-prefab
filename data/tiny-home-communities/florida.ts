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
  {
    slug: "outpost-the-preserve-winter-haven",
    name: "The Preserve · The Outpost Resort",
    regionLabel: "Central Florida · Polk County (Winter Haven / Lake Mariana)",
    city: "Winter Haven",
    county: "Polk County",
    state: "FL" as const,
    latitude: 28.037,
    longitude: -81.718,
    contact: {
      website: "https://theoutpostresort.com/the-preserve-tiny-house-community/",
      phone: "+18632890104",
    },
    description:
      "The Outpost is a large lakefront resort on Lake Mariana with a dedicated “Preserve” enclave marketing oversized tiny-style pads, full hookups, and resort amenities (docks, beach areas, outdoor gathering spaces). It is often cited alongside Central Florida tiny-living roundups—geographically in Polk County rather than St. Cloud, but within the same broad Orlando–Tampa corridor.",
    status: "contact_for_availability",
    statusDetail: "Pad mix includes annual lease language for THOW-friendly lots within a broader RV resort—confirm pet rules, length limits, and insurance class with the park office.",
    lotDetailsSummary:
      "Dedicated micro-home loop with concrete patio pads and utility pedestals inside a master resort. Outside THOWs may be allowed on select annual sites while inventory sells through—validate certification, skirt, and anchorage expectations before haul-in.",
    tenancyModes: ["lease_land_own_home", "rent_home_or_lot", "unspecified"] as const,
    amenities: [
      "Lake Mariana access · resort docks",
      "White-sand beach & outdoor games per marketing",
      "Full hookups (power, water, sewer)",
      "High-speed data options called out on preserve page",
      "Proximity to Legoland & Polk outdoor recreation",
      "Pool, clubhouse, and resort programming (shared with larger park)",
    ],
    tags: ["THOW loop", "resort bundle", "Polk County", "lakefront"],
    legalNotes:
      "Operates under RV resort DNA—verify whether Florida DBPR/licensing treats your occupancy as tenancy vs. campground stay, especially for homestead mail or voter registration storytelling.",
    image: {
      url: "https://images.unsplash.com/photo-1504280390267-ab81deacd0bf?auto=format&fit=crop&w=1400&q=75",
      alt: "RV and tiny dwelling sites near trees and sunset light.",
    },
    schemaKind: "RVPark" as const,
    lastVerified: "2026-05-12",
  },
  {
    slug: "matlacha-tiny-village",
    name: "Matlacha Tiny Village",
    regionLabel: "Southwest Gulf · Pine Island / Lee County",
    city: "Matlacha",
    county: "Lee County",
    state: "FL" as const,
    streetAddress: "4661 Pine Island Rd",
    postalCode: "33922",
    latitude: 26.616,
    longitude: -82.069,
    contact: {
      website: "https://www.matlachatinyvillage.com/",
    },
    description:
      "Colorful waterfront micro units anchored in Matlacha’s artistic fishing-village vibe, positioned as boutique hospitality with dock space and kayak-friendly access to Charlotte Harbor passes. National roundups cite it alongside experiential tiny-home travel even when long-term homesteading pathways need extra verification.",
    status: "mixed",
    statusDetail:
      "Primary positioning is nightly / weekly hospitality with group events noted—coordinate directly if you investigate seasonal or extended stays.",
    lotDetailsSummary:
      "Clustered footprints along Pine Island Road with shared waterfront infrastructure. Confirm whether your occupancy goal matches transient vs. residential enforcement in unincorporated Lee County.",
    tenancyModes: ["rent_home_or_lot", "unspecified"] as const,
    amenities: [
      "Waterfront dockage (size limits apply)",
      "Pet-friendly marketing on operator pages",
      "Kitchenettes & induction setups per listings",
      "Walkable art galleries, seafood shacks, paddle launches",
      "Charlotte Harbor boating culture",
      "Micro-wedding / retreat hosting per marketing",
    ],
    tags: ["waterfront", "hospitality-led", "Pine Island", "art village"],
    yearEstablished: 2018,
    legalNotes:
      "Treat as commercial lodging first; extended residency may implicate different rules than deed-restricted cottage communities.",
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1400&q=75",
      alt: "Colorful cottages along coastal water.",
    },
    schemaKind: "LodgingBusiness" as const,
    lastVerified: "2026-05-12",
  },
  {
    slug: "sunshine-key-tiny-house-village",
    name: "Sunshine Key Tiny House Village (Ohio Key)",
    regionLabel: "Florida Keys · Lower Keys / Monroe County",
    city: "Big Pine Key area",
    county: "Monroe County",
    state: "FL" as const,
    streetAddress: "38801 Overseas Hwy",
    postalCode: "33043",
    latitude: 24.661,
    longitude: -81.058,
    contact: {
      website: "https://sunshinekeytinyhouse.com/",
      phone: "+13058722217",
    },
    description:
      "Five themed tiny dwellings on Encore RV’s Sunshine Key island campus, marketed for Keys getaways seconds from offshore recreation and Bahia Honda adjacency. The cluster helped legitimize turnkey tiny footprints inside a federally sensitive coastal permitting environment—even if homesteading differs from nightly hospitality.",
    status: "mixed",
    statusDetail: "Lodging marketed with resort amenities and marina privileges—consult operators if you aspire to hurricane-season footing beyond vacation stays.",
    lotDetailsSummary:
      "Professionally curated units rotated through hospitality cleaning programs; marina and resort facilities shared with seasonal RV clientele.",
    tenancyModes: ["rent_home_or_lot", "unspecified"] as const,
    amenities: [
      "Ocean / Gulf outlooks per marketing",
      "Shared resort pool, courts, and programming",
      "Marina, bait shop, charter access",
      "Kayak & paddle rentals",
      "Proximity to Bahia Honda State Park",
      "Petite Retreats-branded experiences",
    ],
    tags: ["Keys getaway", "marina campus", "themed tiny homes", "waterfront"],
    yearEstablished: 2020,
    legalNotes:
      "Monroe County enforces strict environmental, parking, and transient balance—never assume vacation inventory equals full-time residency rights.",
    image: {
      url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=75",
      alt: "Tropical shoreline with calm turquoise water.",
    },
    schemaKind: "Campground" as const,
    lastVerified: "2026-05-12",
  },
  {
    slug: "cross-creek-village-leesburg",
    name: "Cross Creek Village",
    regionLabel: "Central Florida · Lake County (Haines Creek)",
    city: "Leesburg",
    county: "Lake County",
    state: "FL" as const,
    streetAddress: "10402 County Road 44",
    postalCode: "34788",
    latitude: 28.762,
    longitude: -81.787,
    contact: {
      website: "https://crosscreekvillage.net/",
      phone: "+13526308207",
    },
    description:
      "Cross Creek Village markets compact waterfront living along Haines Creek with bass-fishing culture, boat-launch access, and community-scale outdoor lifestyle. Directory sources often group it with affordable tiny-rental ecosystems even when marketing materials skew mixed-use.",
    status: "mixed",
    statusDetail:
      "Public listings describe both longer-stay tiny rentals and classic RV resort programming—ask management for current pad certification requirements.",
    lotDetailsSummary:
      "Expect hybrid RV / micro-dwelling governance with emphasis on waterfront recreation; confirm whether your THOW requires third-party inspection or park approval letters.",
    tenancyModes: ["rent_home_or_lot", "lease_land_own_home", "unspecified"] as const,
    amenities: [
      "Haines Creek waterfront & boat launch",
      "Fishing documentation / tournament culture per marketing",
      "Pet-friendly listings appear on third-party channels",
      "Lake County trail & golf adjacency",
      "Pad-friendly hookup emphasis",
    ],
    tags: ["waterfront", "Lake County", "fishing culture", "hybrid RV–tiny"],
    legalNotes:
      "Always verify whether your unit is titled as RV, park model, or dwelling—Lake County environmental inspectors care about floodplain and shoreline buffers.",
    image: {
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=75",
      alt: "Calm river or creek view with trees along the bank.",
    },
    schemaKind: "RVPark" as const,
    lastVerified: "2026-05-12",
  },
  {
    slug: "story-box-brooksville",
    name: "Story Box (Tiny Purple / Brooksville co-op)",
    regionLabel: "Nature Coast · Hernando County",
    city: "Brooksville",
    county: "Hernando County",
    state: "FL" as const,
    latitude: 28.556,
    longitude: -82.379,
    contact: {
      website: "https://tinypurple.com/about",
      email: "contactus@storyboxtinyhomes.com",
      phone: "+13523409554",
    },
    description:
      "Story Box is a Hernando County affordable-housing oriented micro-campus combining cooperative ownership storytelling with capped square-foot footprints. Press coverage outlines rezoning milestones, PDP conditions, and a blend of homestead units versus hospitality inventory—ideal for renters researching co-op stewardship models.",
    status: "expanding",
    statusDetail:
      "Operational status evolves with county approvals—treat postings as directional until you read recorded covenants and cooperative bylaws firsthand.",
    lotDetailsSummary:
      "Marketing references cooperative share purchases, limited acreage, and capped dwelling sizes marketed toward attainable ownership; confirm HOA vs co-op securities with counsel.",
    tenancyModes: ["purchase_or_rent_mix", "lease_land_own_home", "unspecified"] as const,
    amenities: [
      "Nature-forward branding & community stewardship language",
      "Educational outreach component per founder interviews",
      "Utility tie-ins routed through municipal partners (press coverage)",
      "Blend of homestead + short-term rental inventory (planned)",
      "Brooksville trail networks & springs region within driving distance",
    ],
    tags: ["cooperative model", "affordable footprint", "Hernando County", "planned inventory"],
    yearEstablished: 2023,
    legalNotes:
      "Cooperative purchases differ from condominium law—engage Florida counsel familiar with PDP conditions and securities implications before exchanging funds.",
    image: {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=75",
      alt: "Sunlight through forest trees on a nature path.",
    },
    schemaKind: "LodgingBusiness" as const,
    lastVerified: "2026-05-12",
  },
  {
    slug: "simple-life-charlotte-harbour",
    name: "Simple Life · Charlotte Harbour area (Charlotte County)",
    regionLabel: "Southwest Florida · Charlotte County (Punta Gorda corridor)",
    city: "Punta Gorda area",
    county: "Charlotte County",
    state: "FL" as const,
    latitude: 26.888,
    longitude: -82.036,
    contact: {
      website: "https://simple-life.com/communities/",
    },
    description:
      "Simple Life’s corporate roadmap includes a sizeable Charlotte County phased community marketed near the Punta Gorda / Burnt Store workforce corridor—with resort-style clubhouse programming similar to Lakeshore Oxford. Until a dedicated subdivision micro-site stabilizes, use the developer’s community locator plus recorded plat filings for fidelity.",
    status: "expanding",
    statusDetail:
      "Regional business press documented hundreds of pads on long-cycle approvals—expect marketing updates as phases release.",
    lotDetailsSummary:
      "Leasehold cottages with bundled amenities dominate Simple Life economics; underwriting should mirror Lakeshore playbook with Charlotte County infrastructure surcharges researched independently.",
    tenancyModes: ["lease_land_own_home", "purchase_home_on_site", "unspecified"] as const,
    amenities: [
      "Simple Life playbook: clubhouse, aquatic court, pickleball-forward DNA",
      "Charlotte Harbour boating & wildlife proximity",
      "Burnt Store / Punta Gorda retail corridor commute",
      "Workforce-facing positioning in trade press narratives",
      "Regional hurricane exposure planning required",
    ],
    tags: ["Simple Life footprint", "Charlotte County", "planned phases", "cottage leases"],
    legalNotes:
      "Cross-check GIS plats before staking claims on social posts—Charlotte County still receives rapid infill proposals with shifting lot counts.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=75",
      alt: "Planned community street with modern cottage homes.",
    },
    schemaKind: "LodgingBusiness" as const,
    lastVerified: "2026-05-12",
  },
]

export function floridaRawCommunities() {
  return floridaCommunitiesSchema.parse(RAW)
}
