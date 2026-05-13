/**
 * Educational content for the closed-loop homestead guide (Florida-oriented, tiny-footprint framing).
 */

export type ClosedLoopCard = {
  id: string
  emoji: string
  label: string
  /** Short line under label in modal */
  role: string
  summary: string
  /** Practical “what you can do” bullets */
  practices: string[]
  /** One-line caption for the simple visual strip in the modal */
  flowCaption: string
}

/** Flow steps shown above cards (kitchen → soil → kitchen) */
export const CLOSED_LOOP_CYCLE_STEPS = [
  "Kitchen trimmings",
  "Birds / worms",
  "Manure & litter",
  "Compost & castings",
  "Soil & beds",
  "Food & mulch",
  "Back to kitchen",
] as const

export const CLOSED_LOOP_INTRO = {
  title: "Closed-loop homestead & backyard food",
  dek: "Every part of a small home can plug into nutrient loops, energy choices, and water-smart design. Below is the same food “card strip” you see in the zone tool—plus a full house-to-land checklist you can explore card by card.",
  foodSectionTitle: "Food & fertility — showcase crops",
  foodSectionBlurb:
    "These ten crops mirror the warm-climate strip from the growing-zone report (ideal for tight sites with sun). Hover a card for emphasis; click for loops, guild ideas, and zero-waste habits.",
  systemsSectionTitle: "House & site as one system",
  systemsSectionBlurb:
    "Map how the building itself supports resilience—energy, water, comfort, and waste streams—so your dwelling is not separate from the yard.",
}

/** Showcase foods (aligned with Zone 10a strip in zone-food-visuals). */
export const CLOSED_LOOP_FOOD_CARDS: ClosedLoopCard[] = [
  {
    id: "sweet-potato",
    emoji: "🍠",
    label: "Sweet potato",
    role: "Calorie bank & living mulch",
    summary:
      "Sweet potato smothers weeds, holds slopes, and delivers dense calories from a small footprint—ideal for Florida heat when trellised or berm-planted.",
    practices: [
      "Plant slips after soil warms; use berms or mounds if drainage is slow.",
      "Let vines run as ground cover under fruit shrubs or along fence lines.",
      "Harvest gently; cure in warm shade; return soft culls to compost or poultry.",
    ],
    flowCaption: "Vine biomass → chop-and-drop mulch → compost → next season’s slips",
  },
  {
    id: "okra",
    emoji: "🫛",
    label: "Okra",
    role: "Summer protein-friendly pods",
    summary:
      "Okra loves heat when other annuals pause—reliable pickings for stews and ferments with modest water once established.",
    practices: [
      "Succession-plant every few weeks for steady harvest windows.",
      "Pick young pods often; tough stems go straight to compost.",
      "Pair with basil or marigolds for visual guilds and insect diversity.",
    ],
    flowCaption: "Trimmings & stems → compost pile → feeds heavy feeders next bed rotation",
  },
  {
    id: "eggplant",
    emoji: "🍆",
    label: "Eggplant",
    role: "Nightshade calories in shoulder seasons",
    summary:
      "Compact varieties fit containers or raised beds; fruits stack well with peppers and herbs in a tiny kitchen garden.",
    practices: [
      "Stake or cage to save space and keep fruit clean.",
      "Solarize pest pressure with crop rotation and finished compost only.",
      "Roasted skins and scraps → chickens or hot compost (balance greens).",
    ],
    flowCaption: "Kitchen scraps → birds → manure → compost → fruiting bed",
  },
  {
    id: "peppers",
    emoji: "🌶️",
    label: "Peppers",
    role: "High-value flavor per square foot",
    summary:
      "From snacking bells to heat, peppers thrive with consistent moisture and afternoon shade cloth in peak summer.",
    practices: [
      "Mulch pots and beds to buffer root temperature.",
      "Harvest often; split the stem “waste” stream: woodier bits compost, soft bits to worms.",
      "Save seed from open-pollinated favorites to tighten the loop year to year.",
    ],
    flowCaption: "Seed saving → less input → more resilient local genetics",
  },
  {
    id: "tomatoes",
    emoji: "🍅",
    label: "Tomatoes",
    role: "Two-season fruiting with trellis discipline",
    summary:
      "Cherry and smaller types handle humidity better; vertical growth keeps air moving on tight lots.",
    practices: [
      "Prune for airflow; mulch to prevent soil splash on leaves.",
      "Overripe fruit → birds, worms, or BSF buckets where codes allow.",
      "End-of-season vines → chop-and-drop under woody mulch.",
    ],
    flowCaption: "Fallen fruit → poultry forage → eggs → shells → calcium for compost",
  },
  {
    id: "banana",
    emoji: "🍌",
    label: "Banana",
    role: "Shade circle & biomass pump",
    summary:
      "Banana circles can receive greywater (code-aware) and stack pit compost while producing steady carbohydrates.",
    practices: [
      "Siting first: wind, drainage, and utility setbacks before planting.",
      "Use pseudostems and leaves as coarse mulch around guild edges.",
      "Peels and stalk pith stay on-site: compost or dedicated worm lanes.",
    ],
    flowCaption: "Greywater + mulch pit → understory greens + biomass for fungi",
  },
  {
    id: "papaya",
    emoji: "🥭",
    label: "Papaya",
    role: "Fast fruit on mounds",
    summary:
      "Papaya softens the vertical edge of a tiny yard; needs frost-free microclimate and good drainage.",
    practices: [
      "Protect from wind until trunks lignify; mulch basin to hold moisture.",
      "Male flowers and thinners → compost; fruit flies managed with sanitation.",
      "Pair with legume groundcover for nitrogen without heavy tillage.",
    ],
    flowCaption: "Fallen fruit → duck/chicken rotation → litter → hot compost",
  },
  {
    id: "citrus",
    emoji: "🍊",
    label: "Citrus",
    role: "Microclimate anchor & vitamin C",
    summary:
      "Dwarf and container citrus fit ADU setbacks; leaves make fragrant mulch and windbreak filler.",
    practices: [
      "Track greening and regional guidance; source certified stock.",
      "Rind and pulp: vermicompost or trench beside heavy feeders.",
      "Prune for light penetration; chipped prunings become path mulch.",
    ],
    flowCaption: "Prunings → path mulch → slowly feeds soil fungi walkways",
  },
  {
    id: "spinach-greens",
    emoji: "🥬",
    label: "Spinach greens",
    role: "Summer tropical leaves",
    summary:
      "Malabar, Okinawa spinach, and longevity spinach fill salad gaps when temperate greens bolt.",
    practices: [
      "Grow in partial shade; harvest leaf tips to delay flowering.",
      "Soft tips → kitchen daily; tougher stems → worm bin.",
      "Perennial bases → chop-and-drop understory for fruit trees.",
    ],
    flowCaption: "Perennial greens → constant mulch supply for young fruiting shrubs",
  },
  {
    id: "eggs",
    emoji: "🥚",
    label: "Eggs",
    role: "Protein & manure from poultry",
    summary:
      "Chickens and ducks close small nutrient loops when rotation, litter balance, and neighbor rules are respected.",
    practices: [
      "Deep litter or tractoring: move birds before soil compacts.",
      "Shells dry-crushed → calcium for compost or dust baths.",
      "Kitchen scrap hierarchy: safe greens first; meat/dairy only if your system is proven.",
    ],
    flowCaption: "Scraps → birds → manure + litter → compost → vegetables → scraps",
  },
]

export const CLOSED_LOOP_HOME_SYSTEM_CARDS: ClosedLoopCard[] = [
  {
    id: "solar-pv",
    emoji: "☀️",
    label: "Solar panels",
    role: "On-site energy harvest",
    summary:
      "Photovoltaics turn roof or ground-mount area into kilowatt production—pair with load efficiency first, then right-sized storage if you need backup.",
    practices: [
      "Model shade from new trees before planting canopy north of arrays.",
      "Schedule heavy loads (water heating prep, EV) when the sun is generous.",
      "Keep a maintenance path; dirty panels and encroaching vines steal output.",
    ],
    flowCaption: "Sun → electrons → cold storage & lighting → less grid draw",
  },
  {
    id: "battery-storage",
    emoji: "🔋",
    label: "Battery storage",
    role: "Night & outage resilience",
    summary:
      "Batteries buffer solar production and can keep critical circuits alive in storm season—sizing is a safety and economics conversation.",
    practices: [
      "Prioritize efficient fridge, lights, comms, and small pumps first.",
      "Understand local interconnection and fire-code expectations for installs.",
      "Track state of charge; avoid chronic deep cycling without manufacturer margins.",
    ],
    flowCaption: "Solar peaks → stored DC → evening loads & outages",
  },
  {
    id: "roof-catchment",
    emoji: "🏠",
    label: "Roof & gutters",
    role: "Rain collection surface",
    summary:
      "The roof is the largest catchment on most lots; material choice and first-flush diversion affect water quality.",
    practices: [
      "Inspect gutters after storms; keep downspouts clear of oak tangles.",
      "First-flush or screened pre-filters reduce debris in cisterns.",
      "Plan overflow away from foundations and neighbor lines.",
    ],
    flowCaption: "Rain → roof → pre-filter → storage or mulch basin overflow",
  },
  {
    id: "rain-tanks",
    emoji: "🛢️",
    label: "Rain barrels / cistern",
    role: "Stored irrigation & resilience",
    summary:
      "Stored rain reduces potable demand for beds and sanitation-adjacent uses allowed locally—always check code for potable crossover.",
    practices: [
      "Opaque tanks limit algae; mosquito-proof all openings.",
      "Elevate for gravity drip where practical; add simple gauges.",
      "Winterize or drain lines if freeze risk appears on your ridge.",
    ],
    flowCaption: "Tank draw → drip lines → plants → transpiration → next rain",
  },
  {
    id: "greywater",
    emoji: "💧",
    label: "Greywater to landscape",
    role: "Reuse lightly soiled water",
    summary:
      "Laundry and shower flows can support mulched basins and established plantings where inspectors and soil conditions allow—never store greywater long without treatment.",
    practices: [
      "Switch to low-salt detergents; avoid bleach-heavy streams to soil.",
      "Mulch basins, not spray onto edibles with direct contact.",
      "Keep a three-way valve to sewer for maintenance and uncertainty.",
    ],
    flowCaption: "Shower → mulch basin → fruiting shrubs & windbreak roots",
  },
  {
    id: "hpwh",
    emoji: "🚿",
    label: "Heat-pump water heater",
    role: "Efficient domestic hot water",
    summary:
      "Heat-pump water heaters pull warmth from ambient air—great fit for ventilated Florida utility spaces when sized to household rhythm.",
    practices: [
      "Time heating with solar surplus if you add load controls later.",
      "Insulate long pipe runs in ADUs to cut wait water waste.",
      "Pair with low-flow fixtures to shrink daily thermal load.",
    ],
    flowCaption: "Warm air → heat pump → hot water → less resistance heat waste",
  },
  {
    id: "minisplit",
    emoji: "❄️",
    label: "Mini-split HVAC",
    role: "Targeted conditioning",
    summary:
      "Ductless splits match tiny envelopes; dehumidification strategy matters as much as temperature in humid months.",
    practices: [
      "Design overhangs and exterior shades before maxing compressor count.",
      "Service filters quarterly in pollen and storm dust periods.",
      "Keep condensate lines clear; consider routing tomulch (code-aware).",
    ],
    flowCaption: "Efficient cooling → less peak grid → more solar headroom",
  },
  {
    id: "envelope",
    emoji: "🧱",
    label: "Insulation & air seal",
    role: "Comfort shell",
    summary:
      "A tight, well-insulated envelope shrinks energy needs for any size dwelling—especially when roof color and vent paths are honest.",
    practices: [
      "Detail penetrations at panel joints, doors, and recessed lights.",
      "Use continuous insulation where dew-point risk allows.",
      "Pair with controlled ventilation—not random leaks—for moisture control.",
    ],
    flowCaption: "Less leakage → smaller HVAC → longer battery runtime",
  },
  {
    id: "compost",
    emoji: "♻️",
    label: "Compost & worm bins",
    role: "Organic waste → fertility",
    summary:
      "Centralize carbon and nitrogen balance; finished compost returns minerals and biology to beds and containers.",
    practices: [
      "Chop inputs; alternate greens and browns; turn or aerate on schedule.",
      "Separate perennial weeds with seed load unless you hot-compost.",
      "Worm bins handle soft kitchen streams; compost handles bulk biomass.",
    ],
    flowCaption: "Scraps + litter → humus → beds → food → scraps",
  },
  {
    id: "kitchen-stream",
    emoji: "🍽️",
    label: "Kitchen scrap stream",
    role: "Sort once, loop forever",
    summary:
      "A three-bucket rhythm—birds, worms, hot compost—keeps smells down and routes nutrients intentionally.",
    practices: [
      "Label what birds never get (avocado pits, chocolate, spoiled mystery).",
      "Drain liquids to mulch basins or bokashi if flies appear.",
      "Weigh outputs monthly to tune flock size or bin volume.",
    ],
    flowCaption: "Sort at counter → shortest path animal or microbe → soil",
  },
  {
    id: "poultry",
    emoji: "🐔",
    label: "Chickens & ducks",
    role: "Protein + manure engine",
    summary:
      "Poultry tractoring links mowing, pest patrol, and manure—rotate before bare soil and respect HOAs.",
    practices: [
      "Deep bedding absorbs moisture; turn into compost when spent.",
      "Offer grit and oyster; return shells to compost loop.",
      "Night security from predators preserves the investment.",
    ],
    flowCaption: "Weeds & grubs → eggs → shells → calcium in compost",
  },
  {
    id: "vertical-grow",
    emoji: "🪴",
    label: "Vertical trellis & espalier",
    role: "Food on walls and fences",
    summary:
      "Runners, beans, and espalier fruit save ground space while shading west walls in summer.",
    practices: [
      "Tie gently; prune for airflow in humid climates.",
      "Route dripline along top to avoid foliar splash.",
      "Use pollinator pockets at base for continuous bloom.",
    ],
    flowCaption: "Wall shade → cooler envelope → lower cooling load",
  },
  {
    id: "shade-passive",
    emoji: "🌳",
    label: "Shade & eaves",
    role: "Passive cooling",
    summary:
      "Deciduous edge planting and calculated eaves cut solar gain before it hits the mini-split.",
    practices: [
      "Plant for future canopy, not just day-one aesthetics.",
      "Keep solar access windows clear in winter if passive solar helps you.",
      "Use reflective roof when cooling dominates annual load.",
    ],
    flowCaption: "Canopy + roof color → less heat → lower electricity",
  },
  {
    id: "lighting",
    emoji: "💡",
    label: "LED & daylighting",
    role: "Smallest electrical load",
    summary:
      "High-CRI LED and thoughtful window placement reduce daily watt-hours so solar+battery covers more lifestyle.",
    practices: [
      "Task light instead of whole-room floods in small plans.",
      "Use exterior cutoff fixtures to protect night ecology.",
      "Daylight sensors in common areas catch forgotten switches.",
    ],
    flowCaption: "Lower lighting load → more solar budget for pumps & cooling",
  },
]

/** Checklist blocks for readers who want “everything in one scan”. */
export const CLOSED_LOOP_MASTER_CHECKLIST = [
  {
    title: "Energy",
    items: [
      "Right-size solar PV after efficiency passes (LED, HVAC, dhw).",
      "Add battery if outages or time-of-use economics justify it.",
      "Shade strategy + reflective roof before oversizing compressors.",
    ],
  },
  {
    title: "Water",
    items: [
      "Roof catchment with legal first-flush and overflow planning.",
      "Greywater to mulched plantings where permitted; three-way valve ready.",
      "Drip irrigation fed from rain first, utility second.",
    ],
  },
  {
    title: "Food & fertility",
    items: [
      "Compost + optional worm bin for soft streams.",
      "Poultry or rabbits only with rotation and neighbor harmony.",
      "Calorie banks (roots, fruit) plus daily greens for diet balance.",
    ],
  },
  {
    title: "Waste & materials",
    items: [
      "Chop-and-drop and path woodchip to bank carbon on-site.",
      "Cardboard and browns stockpiled for compost balance.",
      "Repair-first hardware mindset to keep embodied carbon lower.",
    ],
  },
] as const
