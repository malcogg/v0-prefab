/**
 * Florida USDA plant hardiness reference data for educational / planning use.
 * Lookup by ZIP is approximate (demo). Always verify with USDA ARS for site-specific planning.
 */

export type FloridaZoneCode = "8b" | "9a" | "9b" | "10a" | "10b" | "11a" | "11b"

export type ZoneLookupSource = "zip" | "city" | "demo"

export interface FloridaZoneMeta {
  code: FloridaZoneCode
  /** Annual extreme minimum temperature range (°F) per USDA definitions */
  tempRangeF: string
  region: string
  advantages: string
}

export const FLORIDA_ZONES_OVERVIEW: FloridaZoneMeta[] = [
  {
    code: "8b",
    tempRangeF: "15°F to 20°F",
    region: "North Florida / Panhandle (e.g., Tallahassee area, parts of Jefferson County)",
    advantages:
      "Best statewide cool-season window for brassicas and roots; stone fruit and apple selections possible with careful cultivar choice; fewer tropical pests than farther south.",
  },
  {
    code: "9a",
    tempRangeF: "20°F to 25°F",
    region: "North Florida & Upper Peninsula (Jacksonville to Gainesville belt, much of the Panhandle coast)",
    advantages:
      "Long warm season with a real fall and spring; reliable tomatoes and peppers with frost awareness; citrus may need protection on the coldest nights in microclimates.",
  },
  {
    code: "9b",
    tempRangeF: "25°F to 30°F",
    region: "North-Central Florida (Ocala northward fringe, parts of St. Johns, transitioning zones)",
    advantages:
      "Near-year-round annual production with short frost windows; great for extended spring and fall crops; mangos and tropicals need careful siting.",
  },
  {
    code: "10a",
    tempRangeF: "30°F to 35°F",
    region: "Central Florida heartland (Greater Orlando, much of the I-4 corridor, inland Tampa Bay)",
    advantages:
      "Excellent diversity: subtropicals + strong winter annuals; two peak tomato seasons; citrus and avocado more reliable with microclimate support.",
  },
  {
    code: "10b",
    tempRangeF: "35°F to 40°F",
    region: "South Florida & warm coastal bands (Miami–Fort Lauderdale, Collier, Broward, Palm Beach coast)",
    advantages:
      "Mangos, moringa, and many perennial greens shine; winter is prime annual vegetable season; manage salt wind on the oceanfront.",
  },
  {
    code: "11a",
    tempRangeF: "40°F to 45°F",
    region: "Warmest mainland south and near-Keys transition (protected South Florida pockets)",
    advantages:
      "True tropical edge production; focus shifts to heat management, soil life, and hurricane-season resilience rather than freeze protection.",
  },
  {
    code: "11b",
    tempRangeF: "45°F to 50°F",
    region: "Florida Keys and a few ultra-warm microclimates",
    advantages:
      "Virtually frost-free; ideal for tropical fruit systems where freshwater, soil depth, and storm protection can be engineered.",
  },
]

/** First 3 digits of ZIP → zone heuristic for Florida (320–349). */
const FL_ZIP3_TO_ZONE: Record<string, FloridaZoneCode> = {
  "320": "9a",
  "321": "9b",
  "322": "9a",
  "323": "8b",
  "324": "9a",
  "325": "9a",
  "326": "9a",
  "327": "9b",
  "328": "10a",
  "329": "10a",
  "330": "10b",
  "331": "10b",
  "332": "10b",
  "333": "10b",
  "334": "10b",
  "335": "10a",
  "336": "10a",
  "337": "10a",
  "338": "9b",
  "339": "10a",
  "341": "10b",
  "342": "10a",
  "344": "9a",
  "346": "9b",
  "347": "10a",
  "349": "10a",
}

const CITY_HINTS: Array<{ match: RegExp; zone: FloridaZoneCode }> = [
  { match: /key\s*vest|keywest|marathon|islamorada|big\s*pine|tavernier/i, zone: "11b" },
  { match: /key\s*largo|florida\s*keys|\bkeys\b/i, zone: "11a" },
  { match: /miami|hialeah|fort\s*lauderdale|broward|palm\s*beach|boca\s*raton|west\s*palm/i, zone: "10b" },
  { match: /naples|fort\s*myers|cape\s*coral|collier|homestead\b/i, zone: "10b" },
  { match: /orlando|kissimmee|lakeland|winter\s*park|sanford|deltona/i, zone: "10a" },
  { match: /tampa|st\.?\s*petersburg|st\.?\s*pete|clearwater|sarasota|bradenton/i, zone: "10a" },
  { match: /gainesville|jacksonville|pensacola|tallahassee|destin|panama\s*city/i, zone: "9a" },
  { match: /ocala|deland|palatka|st\.?\s*augustine/i, zone: "9b" },
]

export interface FrostGuidance {
  lastFrostLabel: string
  firstFrostLabel: string
  narrative: string
}

export function frostGuidanceForZone(zone: FloridaZoneCode): FrostGuidance {
  switch (zone) {
    case "8b":
      return {
        lastFrostLabel: "Late March typical (watch microclimates near water)",
        firstFrostLabel: "Mid to late November possible",
        narrative:
          "Treat frost dates as a neighborhood conversation: low spots and open fields cool faster. Start summer staples after soil warms; use row cover for early spring.",
      }
    case "9a":
      return {
        lastFrostLabel: "Early to mid March common",
        firstFrostLabel: "Late November to early December in cooler years",
        narrative:
          "You get a strong shoulder season. Plan spring warm crops after the last reliable freeze window and shift heavy planting toward fall for brassicas and roots.",
      }
    case "9b":
      return {
        lastFrostLabel: "Late February typical",
        firstFrostLabel: "Early to mid December light freezes possible",
        narrative:
          "Year-round production is realistic with short breaks for heat or cold snaps. Microclimates beside south walls and overhangs extend tender plants.",
      }
    case "10a":
      return {
        lastFrostLabel: "Late January to mid February (light, not every year)",
        firstFrostLabel: "Mid December occasional radiational frost",
        narrative:
          "Central Florida behaves like “two summers with a mild winter vegetable season.” Heat management and soil organic matter matter as much as freeze protection.",
      }
    case "10b":
      return {
        lastFrostLabel: "Rare; tender annuals mostly limited by heat, not cold",
        firstFrostLabel: "Light chill possible in radiational pockets",
        narrative:
          "Your planning calendar tilts toward cool-season annuals in winter and heat-tolerant perennials in summer. Hurricanes and salt air become bigger design drivers than freeze.",
      }
    case "11a":
      return {
        lastFrostLabel: "Virtually frost-free",
        firstFrostLabel: "Virtually frost-free",
        narrative:
          "Think tropical systems: canopy shade, mulch, storm-hardened structures, and excellent drainage beat “frost dates” for success.",
      }
    case "11b":
      return {
        lastFrostLabel: "Virtually frost-free (Keys-style climate)",
        firstFrostLabel: "Virtually frost-free",
        narrative:
          "Salt, freshwater lens, thin soil, and storm exposure are the main constraints—design closed-loop fertility and windbreaks before picking exotic fruit.",
      }
    default:
      return {
        lastFrostLabel: "Verify locally",
        firstFrostLabel: "Verify locally",
        narrative: "Use NOAA and nearby weather stations to localize dates.",
      }
  }
}

export interface ZoneHomesteadReport {
  recommendedCrops: string[]
  closedLoop: string
  exteriorClimbing: string[]
  tubers: string[]
  seasonalHighlights: string[]
  regenerative: string[]
}

export function homesteadReportForZone(zone: FloridaZoneCode): ZoneHomesteadReport {
  const cropsByZone: Record<FloridaZoneCode, string[]> = {
    "8b": [
      "Kale, collards, broccoli, and carrots through cool months",
      "English peas and sugar snaps in spring",
      "Sweet potatoes as a heat-tolerant calorie anchor",
      "Spring/summer okra, Southern peas, and yardlong beans",
    ],
    "9a": [
      "Two tomato waves: spring and fall; cherry types for reliability",
      "Peppers, eggplant, and cucurbits after soil warms",
      "Citrus and figs in protected microclimates (verify cultivars and ordinances)",
      "Year-round salad greens with shade cloth in summer",
    ],
    "9b": [
      "Fall brassicas and beets with long cool seasons",
      "Summer malabar spinach, okra, and crowder peas",
      "Papaya and banana banks where winter lows allow (windbreak first)",
      "Herb hedges: rosemary, sage, thyme on berms with drainage",
    ],
    "10a": [
      "Sweet potatoes, okra, eggplant, peppers, and cherry tomatoes (two peak seasons with disease rotation)",
      "Malabar spinach, Okinawa spinach, and longevity spinach as humid summer greens",
      "Banana circles with papaya, citrus, and mulberry for structure + steady calories",
      "Avocado selections with good drainage and wind protection",
    ],
    "10b": [
      "Mango, moringa, and tropical spinach analogs as summer staples",
      "Winter sweet corn rotations where pests are managed",
      "Chaya, cranberry hibiscus, and perennial salad mix under canopy",
      "Microgreen and sprout systems for fast greens in storms",
    ],
    "11a": [
      "A wider tropical fruit palette with attention to freshwater and soil depth",
      "Leaf protein from perennial leafy systems plus fast annual gaps",
      "Support species: nitrogen fixers, ground covers, and windbreak palms",
      "Storm-ready trellising for lighter vines that shed wind",
    ],
    "11b": [
      "Salt-tolerant support species and container depth for fruit trees",
      "Coconuts and tropical staples where ordinance and wind allow",
      "Closed-loop fertility: compost, biochar, seaweed (know sourcing rules), and chop-and-drop",
      "Stacked shade for understory herbs and mushrooms (humidity-managed)",
    ],
  }

  const closedLoop =
    "Picture a waste-free Florida loop every tiny-home cluster can scale: kitchen scraps and fallen fruit → ducks or chickens on a rotating forage lane beneath banana, papaya, and citrus → manure + litter → hot compost plus worm castings → compost tea and mulch → feeder roots for sweet potato banks, veggie beds, and passionfruit trellises → surplus greens, fruit, and tubers back to the kitchen. Add fallen breadfruit/mango trimmings as coarse carbon, sweet potato vines as ground cover that heals bare sand, and a code-aware greywater planter strip so every rinse grows biomass instead of leaving the site."

  const exteriorClimbing = [
    "Sweet potato vine (edible leaves + tubers; living mulch for sand)",
    "Malabar spinach, Okinawa spinach, and longevity spinach on cattle-panel trellis",
    "Passionfruit on strong pergolas (refresh wood; use concrete footers in wind zones)",
    "Pole beans and yardlong beans on sun-facing tiny-home walls (afternoon shade helps paint longevity)",
    "Chayote on stout trellis where winter lows allow",
  ]

  const tubers = [
    "Sweet potato (primary calorie workhorse for Florida homesteads)",
    "Cassava/yuca where you want drought-tolerant staples (process safely; peel/cook properly)",
    "Taro/eddoe in wetter microclimates with good drainage cycles",
    "Yam (Dioscorea) on vertical systems where appropriate",
  ]

  const seasonalHighlights: Record<FloridaZoneCode, string[]> = {
    "8b": [
      "Jan–Feb: Start tomatoes/peppers indoors or cold frame; direct-sow peas as soil allows",
      "Mar–Apr: Transition to warm soil; transplant nightshades after risk window",
      "May–Aug: Heat crops, sweet potato slips, cover soil always",
      "Sep–Nov: Second tomato/pepper run; brassicas for winter harvest",
    ],
    "9a": [
      "Jan: Greens cleanup, compost, plan citrus wind protection",
      "Feb–Mar: Last frost watch; push spring warm crops on schedule",
      "Apr–Sep: Pest management rhythm; succession plant cowpeas and okra",
      "Oct–Dec: Prime annual cool-season window; heavy mulch before holidays",
    ],
    "9b": [
      "Jan: Plant potatoes and peas in warm pockets",
      "Feb–Apr: Spring explosion—don’t skip soil prep before heat hits",
      "May–Aug: Lean into perennial greens and heat lovers",
      "Sep–Dec: Rewind to “second spring” with brassicas and lettuce",
    ],
    "10a": [
      "Jan: Planting peak for tomatoes if frost risk is low in your microclimate",
      "Feb–Apr: Major warm-season installs; trellis before vines arrive",
      "May–Aug: Shade cloth, deep mulch, minimal bare soil",
      "Sep–Dec: Cool-season annuals shine; citrus nutrition and mulch refresh",
    ],
    "10b": [
      "Oct–Mar: Primary vegetable gardening season for classics like tomatoes and beans",
      "Apr–Sep: Shift to heat-hardy perennials and heavy mulch",
      "Year-round: Soil biology focus—compost, fungal foods, minimal tillage",
      "Storm season: Secure trellises; harvest ahead of named storms when possible",
    ],
    "11a": [
      "Plan around heat + storms more than frost",
      "Succession plant fast leafy crops in bright understory",
      "Build organic matter before expanding fruiting systems",
      "Use windbreaks as the first “crop” on exposed lots",
    ],
    "11b": [
      "Prioritize wind and salt in every planting decision",
      "Use containers or raised depth where natural soil is thin",
      "Invest in water buffering (tanks + overflow to landscape)",
      "Favor pruning cycles that reduce sail area before hurricane season",
    ],
  }

  const regenerativeByZone: Record<FloridaZoneCode, string[]> = {
    "8b": [
      "Swales on gentle grades slow rain long enough to infiltrate sandy ridges",
      "Heavy mulch buffers temperature swings that stress young trees",
      "Cover crops: rye, crimson clover, and brassica mixes for biofumigation cycles",
    ],
    "9a": [
      "Riparian buffers if you border wetlands—keep chemistry and sediment on-site",
      "Rain gardens for gutter overflow tied to edible polycultures",
      "Wood chip fungal pathways between rows for long-term drought resilience",
    ],
    "9b": [
      "Contour beds to reduce sheet flow during summer thunderstorms",
      "Biochar incorporation in sandy spots to lift CEC slowly",
      "Perennial peanut as living mulch under taller fruit",
    ],
    "10a": [
      "Focus on water harvesting: tanks, mulch, and shade to reduce evaporative loss",
      "Hügel-inspired berms with storm-safe slopes",
      "Rotate heavy feeders with legume covers each wet season",
      "Stack perennials in time: fast-support pigeon pea / gliricidia chop-and-drop feeding slower fruit trees",
    ],
    "10b": [
      "Salt management: freshwater rinse zones, dense windward hedges, species selection",
      "Heat-stress plantings: prioritize afternoon shade for sensitive young trees",
      "Compost tea and fungal mulches to accelerate soil life in sand",
    ],
    "11a": [
      "Storm-hardened infrastructure first: anchors, cable trellis, redundant tie-downs",
      "Closed canopy reduces understory weed pressure and soil drying",
      "Bio-intensive edges that block salt spray but allow light",
    ],
    "11b": [
      "Rain catchment paired with first-flush diverters",
      "Shade structures that can be de-sailed in high wind",
      "Species palettes that tolerate periodic salt aerosol",
    ],
  }

  return {
    recommendedCrops: cropsByZone[zone],
    closedLoop,
    exteriorClimbing,
    tubers,
    seasonalHighlights: seasonalHighlights[zone],
    regenerative: regenerativeByZone[zone],
  }
}

export interface ZoneResolution {
  zone: FloridaZoneCode
  source: ZoneLookupSource
  matchedLabel: string
  isFloridaZip: boolean
}

function extractZip5(input: string): string | null {
  const normalized = input.trim()
  const m = normalized.match(/\b(\d{5})(?:-\d{4})?\b/)
  return m ? m[1] : null
}

export function resolveFloridaZoneFromInput(raw: string): ZoneResolution | null {
  const input = raw.trim()
  if (!input) return null

  const zip = extractZip5(input)
  if (zip) {
    const zip3 = zip.slice(0, 3)
    const n = Number(zip)
    const isFloridaZip = n >= 32000 && n <= 34999
    if (!isFloridaZip) {
      return {
        zone: "10a",
        source: "demo",
        matchedLabel: `${zip} (outside Florida ZIP range — showing Central Florida 10a as a demo pattern)`,
        isFloridaZip: false,
      }
    }
    const zone = FL_ZIP3_TO_ZONE[zip3] ?? "10a"
    return { zone, source: "zip", matchedLabel: zip, isFloridaZip: true }
  }

  const lower = input.toLowerCase()
  for (const hint of CITY_HINTS) {
    if (hint.match.test(lower)) {
      return { zone: hint.zone, source: "city", matchedLabel: input, isFloridaZip: true }
    }
  }

  if (/florida|\bfl\b/.test(lower)) {
    return {
      zone: "10a",
      source: "demo",
      matchedLabel: `${input} (Florida mention — defaulting to 10a; add a ZIP for a closer match)`,
      isFloridaZip: true,
    }
  }

  return null
}
