/**
 * Escape Tiny Homes — 2026 collection (Prefabricated.co partner lineup).
 * Image paths: default `public/images/escape/{slug}.png`, or richer sets via `ESCAPE_MEDIA_OVERRIDES` (e.g. Traveler subfolder).
 *
 * fullDescription: marketing narrative for PDPs — replace with verbatim Escape PDF copy when available.
 */

export const ESCAPE_CATALOG_PATH = "/escape-tiny-homes" as const

/** Shown under grids / near prices site-wide for Escape SKUs */
export const ESCAPE_PRICE_SHIPPING_NOTE =
  "All prices do not include shipping or delivery. Delivery cost depends on your location and will be quoted separately."

/** Trust line for headers / product strips */
export const ESCAPE_FACTORY_LINE =
  "Units are factory-built in the USA, RVIA-certified, and delivered fully finished (per factory specifications for each model)."

export type EscapeTinyHomeFaqItem = {
  q: string
  a: string
}

export const ESCAPE_TINY_HOMES_FAQ: EscapeTinyHomeFaqItem[] = [
  {
    q: "What does the listed price include?",
    a: "Pricing shown is for the base model configuration in this catalog. Factory options, site-specific engineering, freight, and installation services are quoted separately so you see a clear baseline before adding logistics.",
  },
  {
    q: "Does the price include shipping or delivery?",
    a: "No. Shipping and delivery depend on distance, route, permits for oversize transport, and site access. After you check out or reach out, we quote delivery to your location as its own line item.",
  },
  {
    q: "Are these units RVIA-certified?",
    a: "Yes. Models in this lineup are built to RVIA certification standards as represented by the factory partner, which supports financing, insurance, and park placement in many jurisdictions (always verify local rules).",
  },
  {
    q: "Where are they built?",
    a: "Units are factory-built in the United States under controlled conditions, then transported to your site. That process typically improves quality consistency compared with stick-built structures exposed to weather during framing.",
  },
  {
    q: "How does Stripe checkout work?",
    a: "“Buy now” opens a secure Stripe-hosted checkout page. You complete payment there; we follow up to confirm details, timeline, and next steps for delivery and siting. If you prefer an invoice or deposit structure, contact us before paying online.",
  },
  {
    q: "Can I customize finishes or layout on an Escape model?",
    a: "Not through this catalog. Escape models here are offered as fixed base configurations for a straightforward path to purchase. For deep customization (finishes, systems, layouts), explore EarthNest and site-built ADU lanes on the main site.",
  },
  {
    q: "What about zoning, permits, and utilities?",
    a: "Buyers are responsible for confirming that a model is allowed by location and for obtaining permits where required. We can advise at a general level, but local codes and AHJs vary. Utility connections are planned per site after purchase.",
  },
  {
    q: "How long does production and delivery take?",
    a: "Lead times move with factory capacity, model, and season. After checkout we provide a realistic range and milestones. Rush requests may be possible but are not guaranteed; your confirmation email kicks off scheduling.",
  },
]

export type EscapeSpecSheetBlock = {
  title: string
  body: string
}

export type EscapeTinyHomeModel = {
  slug: string
  /** Display line e.g. "TRAVELER XL" */
  shortLabel: string
  fullName: string
  /** Short copy for cards and meta */
  description: string
  /** Long copy for product detail pages */
  fullDescription: string
  basePriceUsd: number
  sellingPriceUsd: number
  /** Stripe Checkout (USD cents) */
  sellingPriceCents: number
  highlights: string[]
  /** Hero + gallery; extra paths can repeat hero until real galleries exist */
  heroImage: string
  gallery: string[]
  featuredOnHomepage: boolean
  /** Optional factory fact sheet (dimensions, trailer, weight, etc.) */
  specSheet?: EscapeSpecSheetBlock[]
}

function cents(usd: number) {
  return Math.round(usd * 100)
}

/** Per-model hero + gallery when more than a single {slug}.png exists */
const ESCAPE_MEDIA_OVERRIDES: Partial<Record<string, { heroImage: string; gallery: string[] }>> = {
  traveler: {
    heroImage: "/images/escape/traveler/traveler-front.png",
    gallery: [
      "/images/escape/traveler/traveler-front.png",
      "/images/escape/traveler/traveler-on-the-road.png",
      "/images/escape/traveler/interior-full.png",
      "/images/escape/traveler/interior-kitchen-bath.png",
      "/images/escape/traveler/kitchen-galley.png",
      "/images/escape/traveler/kitchen-sink.png",
      "/images/escape/traveler/bathroom.png",
      "/images/escape/traveler/loft.png",
      "/images/escape/traveler/living-area.png",
      "/images/escape/traveler/storage.png",
      "/images/escape/traveler/closet.png",
    ],
  },
  "traveler-xl": {
    heroImage: "/images/escape/traveler-xl/front-sunset.png",
    gallery: [
      "/images/escape/traveler-xl/front-sunset.png",
      "/images/escape/traveler-xl/exterior-wooded.png",
      "/images/escape/traveler-xl/interior-main.png",
      "/images/escape/traveler-xl/dining-long-view.png",
      "/images/escape/traveler-xl/kitchen.png",
      "/images/escape/traveler-xl/living-area.png",
      "/images/escape/traveler-xl/clerestory-living.png",
      "/images/escape/traveler-xl/living-fireplace.png",
      "/images/escape/traveler-xl/bedroom.png",
    ],
  },
  "traveler-xls": {
    heroImage: "/images/escape/traveler-xl/front-sunset.png",
    gallery: [
      "/images/escape/traveler-xl/front-sunset.png",
      "/images/escape/traveler-xl/exterior-wooded.png",
      "/images/escape/traveler-xl/interior-main.png",
      "/images/escape/traveler-xl/dining-long-view.png",
      "/images/escape/traveler-xl/kitchen.png",
      "/images/escape/traveler-xl/living-area.png",
      "/images/escape/traveler-xl/clerestory-living.png",
      "/images/escape/traveler-xl/living-fireplace.png",
      "/images/escape/traveler-xl/bedroom.png",
    ],
  },
}

function escapeHeroAndGallery(slug: string): { heroImage: string; gallery: string[] } {
  const override = ESCAPE_MEDIA_OVERRIDES[slug]
  if (override) return override
  const heroImage = `/images/escape/${slug}.png`
  return { heroImage, gallery: [heroImage] }
}

type RawRow = Omit<
  EscapeTinyHomeModel,
  "heroImage" | "gallery" | "sellingPriceCents" | "highlights" | "featuredOnHomepage"
>

const RAW: RawRow[] = [
  {
    slug: "traveler",
    shortLabel: "TRAVELER",
    fullName: "5/ TRAVELER",
    description:
      "Full-size appliances, large bathroom, double lofts. Beautiful connection to outdoors.",
    fullDescription:
      "The Traveler is where the Escape story starts: a confident layout with full-size appliances, a generous bathroom, and double lofts that make room for both living and sleeping. Daylight is treated as a material—generous glazing connects the interior to the landscape while keeping the envelope crisp and purposeful. This model suits owners who want a turnkey tiny home that feels residential, not improvised. As with every unit here, pricing is for the base configuration; delivery is quoted to your site after we confirm access and route.",
    basePriceUsd: 95474,
    sellingPriceUsd: 100000,
    specSheet: [
      {
        title: "Size",
        body: '25\' long (30\' including hitch) × 8.5\' W × 13\'6" H travel trailer with the RVIA seal.',
      },
      {
        title: "Square footage & weight",
        body: "269 sq ft — 180 sq ft first floor, 89 sq ft in lofts. 10,000–12,000 lbs depending on options. Class V hitch recommended.",
      },
      {
        title: "Trailer",
        body: "Custom ESCAPE steel trailer: 7,000 lb HD tandem axles, 10-ply radial tires, electric brakes, Hopkins break-away safety system, easy-use leveling jacks, steel rodent-resistant belly, 2 5/16\" ball hitch.",
      },
    ],
  },
  {
    slug: "traveler-xl",
    shortLabel: "TRAVELER XL/XLS",
    fullName: "5/ TRAVELER XL/XLS",
    description: "Frank Lloyd Wright inspired with soaring ceilings and excellent space.",
    fullDescription:
      "Traveler XL leans into architectural drama—vaulted spaces, strong horizontal lines, and volume you rarely get in a compact envelope. The kitchen and living sequence feels intentional, with room for one or two lofts depending on configuration, so the home scales with how you live rather than fighting the floor plan. It remains one of Escape’s most recognized silhouettes for good reason: it photographs like architecture and lives like a home. Base price excludes freight; we’ll quote transport once we understand your location and delivery conditions.",
    basePriceUsd: 103020,
    sellingPriceUsd: 108000,
  },
  {
    slug: "traveler-xls",
    shortLabel: "TRAVELER XLS",
    fullName: "6/ TRAVELER XLS",
    description: "Extended model with walk-around bed, more storage and windows.",
    fullDescription:
      "Traveler XLS extends the XL concept with additional length for a walk-around sleeping area, smarter storage, and more openings to the outdoors. If you’ve been comparing small-footprint homes that still feel like a primary residence, the XLS answers with circulation space you can feel every day—not just square footage on paper. Large windows balance privacy and outlook. Your quoted price reflects the catalog baseline; shipping and site services are broken out separately for transparency.",
    basePriceUsd: 112235,
    sellingPriceUsd: 118000,
  },
  {
    slug: "vista",
    shortLabel: "VISTA",
    fullName: "6/ VISTA",
    description: "Open design connecting you to nature. Perfect for guest house or office.",
    fullDescription:
      "Vista is the quiet minimalist—an open plan that prioritizes views, calm, and flexibility. It’s equally convincing as a guest suite, backyard studio, or remote office when local regulations allow. Finishes stay restrained so the space reads serene, while the envelope keeps conditioning efficient. Pair it with a thoughtful site and it feels larger than its footprint. Factory finish and certification apply per Escape specifications; delivery is not included in list pricing.",
    basePriceUsd: 69800,
    sellingPriceUsd: 73000,
  },
  {
    slug: "vista-boho",
    shortLabel: "VISTA BOHO",
    fullName: "7/ VISTA BOHO",
    description: "Cozy modern unit with built-in bed and smart space use.",
    fullDescription:
      "Vista Boho distills coziness into a modern, highly scripted plan—built-in sleeping, clever dining or work surfaces, and furniture that stows cleanly. It’s an excellent match for short-term hospitality or economical personal use where every inch carries weight. The aesthetic stays warm without clutter. As with all Escape builds, you’re buying a finished factory product; getting it to your property is scoped and priced based on mileage and placement.",
    basePriceUsd: 57640,
    sellingPriceUsd: 61000,
  },
  {
    slug: "vista-boho-xl",
    shortLabel: "VISTA BOHO XL",
    fullName: "7/ VISTA BOHO XL",
    description: "213 sq ft versatile layout with separate bedroom option.",
    fullDescription:
      "Boho XL expands the idea to roughly 213 square feet with flexibility between open living and a more enclosed sleep zone—ideal when hosts want separation or homeowners want multi-mode use. The plan can flex as needs change, which keeps the home relevant across seasons of life. This is still a catalog base configuration without an online customizer; personalization lives in EarthNest or ADU programs. Transport is quoted after checkout or consultation.",
    basePriceUsd: 62710,
    sellingPriceUsd: 66000,
  },
  {
    slug: "one",
    shortLabel: "ONE",
    fullName: "8/ ONE",
    description: "Zen-inspired with Shou Sugi Ban exterior and soaring interior.",
    fullDescription:
      "ONE is Escape’s zen-forward statement: a Shou Sugi Ban–inspired exterior that reads elemental, paired with an interior tuned for height, light, and calm. Sliding exterior elements reinforce the idea of rooms breathing with the landscape. Inside, the volume does the heavy lifting—small footprint, big sensation. If you respond to quiet materials and disciplined details, ONE delivers without theatrics. Base pricing is FOB factory logic in marketing terms—shipping to you is additional.",
    basePriceUsd: 74500,
    sellingPriceUsd: 78000,
  },
  {
    slug: "one-xl",
    shortLabel: "ONE XL",
    fullName: "8/ ONE XL",
    description: "Larger version with expanded kitchen, bathroom and living areas.",
    fullDescription:
      "ONE XL scales the concept for owners who need more kitchen length, bath comfort, and upper outdoor connections. Deck-ready thinking and expanded living zones make daily routines feel less like camping and more like a refined small home. It’s still unmistakably ONE—just with more room to execute. The price shown is the catalog figure; logistics are itemized separately once we model your route and crane or roll-off needs.",
    basePriceUsd: 93540,
    sellingPriceUsd: 98000,
  },
  {
    slug: "one-xl-wide",
    shortLabel: "ONE XL WIDE",
    fullName: "9/ ONE XL WIDE",
    description: "Extra-wide version with additional horizontal space.",
    fullDescription:
      "ONE XL Wide trades additional width for improved circulation, furniture options, and storage depth—particularly noticeable around the kitchen and bathroom cores. If you’ve been constrained by hallway-style tiny plans, the wide variant is the antidote. It retains ONE’s architectural language while giving you literal elbow room. Oversize transport can affect delivery pricing; we disclose that clearly when quoting freight.",
    basePriceUsd: 109460,
    sellingPriceUsd: 115000,
  },
  {
    slug: "eone",
    shortLabel: "eONE",
    fullName: "9/ eONE",
    description: "All-electric with huge back loft and excellent livability.",
    fullDescription:
      "eONE pairs the ONE aesthetic with an all-electric systems approach aimed at modern utilities and sustainability-minded sites. The rear loft amplifies usable area without bloating the foundation footprint, and the kitchen is sized for real cooking, not token appliances. Ideal when you want the ONE story with a future-forward MEP posture. Electric service sizing still depends on your utility provider—something we confirm during onboarding. Delivery remains a separate quote from list price.",
    basePriceUsd: 73944,
    sellingPriceUsd: 78000,
  },
  {
    slug: "eone-xl",
    shortLabel: "eONE XL",
    fullName: "10/ eONE XL",
    description: "All-electric XL with larger kitchen and living areas.",
    fullDescription:
      "eONE XL expands the electric platform into a more generous envelope—larger kitchen runs, a more comfortable bath, and living space that supports full-time use. It’s a strong candidate when you want efficient systems without trading away domestic comfort. Base model details follow factory standard; upgrades beyond that roll through sales, not a public configurator. Shipping is quoted based on your address and site complexity.",
    basePriceUsd: 92946,
    sellingPriceUsd: 98000,
  },
  {
    slug: "eone-xl-wide",
    shortLabel: "eONE XL WIDE",
    fullName: "10/ eONE XL WIDE",
    description: "Extra-wide all-electric model.",
    fullDescription:
      "The wide electric flagship adds horizontal breathing room to eONE XL—walk-around layouts feel natural, storage gets honest depth, and furnishing options multiply. It targets buyers who won’t compromise on aisle width but still want an all-electric story. Expect transport to reflect width and permitting for the move; we coordinate transparently. List pricing excludes those logistics by design.",
    basePriceUsd: 108920,
    sellingPriceUsd: 114000,
  },
  {
    slug: "ultimate",
    shortLabel: "ULTIMATE",
    fullName: "10/ ULTIMATE",
    description: "720+ sq ft two-story home with 3-4 bedrooms.",
    fullDescription:
      "Ultimate is the collection’s two-story answer for households that need real bedrooms—often three to four depending on configuration—plus premium appliance packages and built-in laundry at true residential scale. Above 720 square feet of thoughtfully arranged space, it blurs tiny/park-model expectations into something closer to a compact custom home. Because of size and weight, delivery engineering is always custom-quoted; the price you see is for the manufactured unit baseline.",
    basePriceUsd: 148720,
    sellingPriceUsd: 156000,
  },
  {
    slug: "evista",
    shortLabel: "eVISTA",
    fullName: "11/ eVISTA",
    description: "All-electric modern design with dramatic window wall.",
    fullDescription:
      "eVISTA updates Vista’s purity with all-electric systems and an end window wall that pulls the landscape into the plan. It excels as a bright studio, workspace, or compact guest environment. The glazing strategy makes the interior feel cinematic without resorting to busy trim. Confirming electric service capacity at your site is part of our post-purchase checklist. Delivery is quoted independently from the list price.",
    basePriceUsd: 53785,
    sellingPriceUsd: 56000,
  },
  {
    slug: "evista-xl",
    shortLabel: "eVISTA XL",
    fullName: "11/ eVISTA XL",
    description: "All-electric with private walk-around queen bedroom.",
    fullDescription:
      "eVISTA XL gives the electric Vista concept a separated sleep zone with walk-around queen clearance—privacy without losing the collection’s clean aesthetic. Morning light and efficient mechanicals make it a strong long-term ADU or guest unit where codes allow. Factory RVIA credentials apply per model year specifications. Freight varies by region and is not embedded in the list figure.",
    basePriceUsd: 60175,
    sellingPriceUsd: 63000,
  },
  {
    slug: "eboho-go",
    shortLabel: "eBOHO GO",
    fullName: "12/ eBOHO GO",
    description: "Compact all-electric minimalist unit with great light.",
    fullDescription:
      "eBOHO GO is the entry to Escape’s all-electric, minimalist language—compact, disciplined, and bright. Built-ins handle storage so the footprint stays serene; windows land where they matter for daylight. For economical housing experiments, accessory structures where allowed, or a disciplined rental unit, it’s a compelling value. Pricing is intentionally accessible relative to the lineup; shipping still depends on your distance from the factory network and site readiness.",
    basePriceUsd: 39440,
    sellingPriceUsd: 41000,
  },
]

const FEATURED_SLUGS = new Set([
  "traveler-xl",
  "traveler-xls",
  "vista",
  "one-xl",
  "eone-xl",
  "ultimate",
  "evista",
  "eboho-go",
])

function buildHighlights(m: RawRow): string[] {
  const d = `${m.description} ${m.fullDescription}`
  const out: string[] = []
  if (/loft/i.test(d)) out.push("Loft-forward living and sleeping flexibility")
  if (/electric|eONE|eVISTA|eBOHO/i.test(m.fullName)) out.push("All-electric build path for modern utility hookups")
  if (/Frank|Wright|inspired/i.test(d)) out.push("Architectural volume — vaulted ceilings and dramatic space")
  if (/nature|window|light|glaz/i.test(d)) out.push("Glazing and daylight designed for connection to place")
  if (/kitchen|appliance/i.test(d)) out.push("Full residential kitchen workflows")
  if (/guest|Airbnb|office|studio/i.test(d)) out.push("Ideal for guest suites, studios, or hospitality use where allowed")
  if (/two-story|bedroom|laundry|720/i.test(d)) out.push("Full-time home scale — multi-bed and laundry capable")
  if (/wide/i.test(m.shortLabel)) out.push("Extra width for walk-around layouts and storage")
  if (/Shou Sugi|Zen/i.test(d)) out.push("Material-forward exterior with calm, zen-inspired interior volume")
  if (out.length < 3) {
    out.push("Escape Homes factory precision and 2026 trim package")
    out.push("RVIA-certified manufacturing in the USA (per factory specifications)")
    out.push("Fixed base configuration — customization available on EarthNest & custom ADU lanes")
  }
  return [...new Set(out)].slice(0, 5)
}

export const ESCAPE_TINY_HOME_MODELS: EscapeTinyHomeModel[] = RAW.map((row) => {
  const { heroImage, gallery } = escapeHeroAndGallery(row.slug)
  return {
    ...row,
    sellingPriceCents: cents(row.sellingPriceUsd),
    highlights: buildHighlights(row),
    heroImage,
    gallery,
    featuredOnHomepage: FEATURED_SLUGS.has(row.slug),
  }
})

export function getEscapeModelBySlug(slug: string): EscapeTinyHomeModel | undefined {
  return ESCAPE_TINY_HOME_MODELS.find((m) => m.slug === slug)
}

export function escapeModelSlugs(): string[] {
  return ESCAPE_TINY_HOME_MODELS.map((m) => m.slug)
}

export function featuredEscapeModels(): EscapeTinyHomeModel[] {
  return ESCAPE_TINY_HOME_MODELS.filter((m) => m.featuredOnHomepage)
}

export function formatUsd(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: n % 1 === 0 ? 0 : 0,
  }).format(n)
}
