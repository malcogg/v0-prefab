/**
 * Escape Tiny Homes — 2026 collection (Prefabricated.co partner lineup).
 * Image paths: add matching files under public/images/escape/ or rely on placeholders until assets ship.
 */

export type EscapeTinyHomeModel = {
  slug: string
  /** Display line e.g. "TRAVELER XL" */
  shortLabel: string
  fullName: string
  description: string
  basePriceUsd: number
  sellingPriceUsd: number
  /** Stripe Checkout (USD cents) */
  sellingPriceCents: number
  highlights: string[]
  /** Hero + gallery; extra paths can repeat hero until real galleries exist */
  heroImage: string
  gallery: string[]
  featuredOnHomepage: boolean
}

function cents(usd: number) {
  return Math.round(usd * 100)
}

/** Rotate placeholders per slug until per-model photography is uploaded */
const PLACEHOLDERS = [
  "/images/hero-adu.jpg",
  "/images/earthnest-model.jpg",
  "/images/income-property.jpg",
  "/images/container-adu.jpg",
  "/images/traditional-adu.jpg",
] as const

export function escapePlaceholderImages(slug: string): { hero: string; gallery: string[] } {
  let h = 0
  for (let i = 0; i < slug.length; i++) h = (h + slug.charCodeAt(i) * (i + 1)) % PLACEHOLDERS.length
  const hero = PLACEHOLDERS[h]!
  const g = [hero, PLACEHOLDERS[(h + 1) % PLACEHOLDERS.length]!, PLACEHOLDERS[(h + 2) % PLACEHOLDERS.length]!]
  return { hero, gallery: g }
}

const RAW: Omit<
  EscapeTinyHomeModel,
  "heroImage" | "gallery" | "sellingPriceCents" | "highlights" | "featuredOnHomepage"
>[] = [
  {
    slug: "traveler",
    shortLabel: "TRAVELER",
    fullName: "5/ TRAVELER",
    description:
      "First ESCAPE design with full-size appliances, large bathroom, and double lofts. Beautiful natural light and outdoor connection.",
    basePriceUsd: 95474,
    sellingPriceUsd: 100000,
  },
  {
    slug: "traveler-xl",
    shortLabel: "TRAVELER XL",
    fullName: "5/ TRAVELER XL",
    description:
      "Frank Lloyd Wright inspired with soaring ceilings, vaulted spaces, large kitchen, and one or two lofts. One of the most loved models.",
    basePriceUsd: 103020,
    sellingPriceUsd: 108000,
  },
  {
    slug: "traveler-xls",
    shortLabel: "TRAVELER XLS",
    fullName: "6/ TRAVELER XLS",
    description:
      "Extended version of Traveler XL with walk-around bed, more storage, and extra windows. Bigger and more spacious.",
    basePriceUsd: 112235,
    sellingPriceUsd: 118000,
  },
  {
    slug: "vista",
    shortLabel: "VISTA",
    fullName: "6/ VISTA",
    description:
      "Open design connecting you to nature. Perfect for guest house, office, or personal escape. Clean and quiet.",
    basePriceUsd: 69800,
    sellingPriceUsd: 73000,
  },
  {
    slug: "vista-boho",
    shortLabel: "VISTA BOHO",
    fullName: "7/ VISTA BOHO",
    description:
      "Cozy, modern, and functional with built-in bed, flip tables, and fold-flat couch. Great for Airbnb or personal use.",
    basePriceUsd: 57640,
    sellingPriceUsd: 61000,
  },
  {
    slug: "vista-boho-xl",
    shortLabel: "VISTA BOHO XL",
    fullName: "7/ VISTA BOHO XL",
    description:
      "Larger 213 sq ft version with flexible open or closed layout and separate bedroom option. Highly versatile.",
    basePriceUsd: 62710,
    sellingPriceUsd: 66000,
  },
  {
    slug: "one",
    shortLabel: "ONE",
    fullName: "8/ ONE",
    description:
      "Organic, Zen-inspired design with Japanese Shoji-style sliding exterior and soaring interior. Timeless and flexible.",
    basePriceUsd: 74500,
    sellingPriceUsd: 78000,
  },
  {
    slug: "one-xl",
    shortLabel: "ONE XL",
    fullName: "8/ ONE XL",
    description:
      "Larger version with bigger bathroom, kitchen, upper decks, and living/sleeping areas. Maximum usefulness.",
    basePriceUsd: 93540,
    sellingPriceUsd: 98000,
  },
  {
    slug: "one-xl-wide",
    shortLabel: "ONE XL WIDE",
    fullName: "9/ ONE XL WIDE",
    description:
      "Extra-wide version of ONE XL offering additional horizontal space and even more room.",
    basePriceUsd: 109460,
    sellingPriceUsd: 115000,
  },
  {
    slug: "eone",
    shortLabel: "eONE",
    fullName: "9/ eONE",
    description:
      "All-electric version of the popular ONE with huge back loft, larger kitchen, and excellent livability.",
    basePriceUsd: 73944,
    sellingPriceUsd: 78000,
  },
  {
    slug: "eone-xl",
    shortLabel: "eONE XL",
    fullName: "10/ eONE XL",
    description: "All-electric XL model with larger bathroom, kitchen, and living areas.",
    basePriceUsd: 92946,
    sellingPriceUsd: 98000,
  },
  {
    slug: "eone-xl-wide",
    shortLabel: "eONE XL WIDE",
    fullName: "10/ eONE XL WIDE",
    description: "Extra-wide all-electric model with maximum space and versatility.",
    basePriceUsd: 108920,
    sellingPriceUsd: 114000,
  },
  {
    slug: "ultimate",
    shortLabel: "ULTIMATE",
    fullName: "10/ ULTIMATE",
    description:
      "Massive 720+ sq ft two-story home with 3-4 bedrooms, premium appliances, and built-in laundry.",
    basePriceUsd: 148720,
    sellingPriceUsd: 156000,
  },
  {
    slug: "evista",
    shortLabel: "eVISTA",
    fullName: "11/ eVISTA",
    description:
      "All-electric modern Vista with dramatic end window wall and excellent natural light. Perfect for multiple uses.",
    basePriceUsd: 53785,
    sellingPriceUsd: 56000,
  },
  {
    slug: "evista-xl",
    shortLabel: "eVISTA XL",
    fullName: "11/ eVISTA XL",
    description:
      "All-electric with separate bedroom and walk-around queen bed. Clean and bright.",
    basePriceUsd: 60175,
    sellingPriceUsd: 63000,
  },
  {
    slug: "eboho-go",
    shortLabel: "eBOHO GO",
    fullName: "12/ eBOHO GO",
    description:
      "Compact all-electric minimalist unit with built-in features and great natural light.",
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

function buildHighlights(m: (typeof RAW)[number]): string[] {
  const d = m.description
  const out: string[] = []
  if (/loft/i.test(d)) out.push("Loft-forward living and sleeping flexibility")
  if (/electric|eONE|eVISTA|eBOHO/i.test(m.fullName)) out.push("All-electric build path for modern utility hookups")
  if (/Frank|Wright|inspired/i.test(d)) out.push("Architectural volume — vaulted ceilings and dramatic space")
  if (/nature|window|light/i.test(d)) out.push("Glazing and daylight designed for connection to place")
  if (/kitchen|appliance/i.test(d)) out.push("Full residential kitchen workflows")
  if (/guest|Airbnb|office/i.test(d)) out.push("Ideal for guest suites, studios, or hospitality use where allowed")
  if (/two-story|bedroom|laundry|720/i.test(d)) out.push("Full-time home scale — multi-bed and laundry capable")
  if (/wide/i.test(m.shortLabel)) out.push("Extra width for walk-around layouts and storage")
  if (out.length < 3) {
    out.push("Escape Homes factory precision and 2026 trim package")
    out.push("Delivery and siting coordinated through Prefabricated.co")
    out.push("Fixed base configuration — customization available on EarthNest & custom ADU lanes")
  }
  return [...new Set(out)].slice(0, 5)
}

export const ESCAPE_TINY_HOME_MODELS: EscapeTinyHomeModel[] = RAW.map((row) => {
  const { hero, gallery } = escapePlaceholderImages(row.slug)
  return {
    ...row,
    sellingPriceCents: cents(row.sellingPriceUsd),
    highlights: buildHighlights(row),
    heroImage: hero,
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
