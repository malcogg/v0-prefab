import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { FloridaHomesteadZoneTool } from "@/components/florida-homestead-zone-tool"
import { absoluteSiteUrl, breadcrumbSchema, SITE_URL } from "@/lib/seo"

const PAGE_PATH = "/florida-growing-zones-homestead-planning"
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

export const metadata: Metadata = {
  title: "Florida Growing Zones, Lunar Planting & Homestead Planning | Prefabricated.co",
  description:
    "Interactive Florida USDA hardiness zone finder with frost guidance, current moon phase & sign rhythm prompts (Old Farmer’s Almanac style), full 8b–11b reference, and regenerative homestead reports for tiny homes.",
  alternates: { canonical: PAGE_PATH },
  keywords: [
    "Florida USDA hardiness zone",
    "Florida growing zone map",
    "Florida last frost date",
    "lunar planting calendar Florida",
    "moon sign gardening",
    "tiny home homestead Florida",
    "permaculture Florida",
    "regenerative homestead planning",
    "vertical gardening tiny house",
  ],
  openGraph: {
    title: "Florida Growing Zones & Lunar Homestead Planning",
    description:
      "Find your Florida USDA zone, see current moon-phase rhythm prompts, and explore closed-loop permaculture planning for tiny home communities.",
    url: PAGE_PATH,
    type: "article",
    images: [
      {
        url: "/og/homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Florida permaculture and USDA growing zone educational tool by Prefabricated.co",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Florida Growing Zones & Lunar Homestead Planning",
    description:
      "USDA zone finder with moon-phase planting rhythm, frost guidance, and regenerative tiny-home homestead ideas.",
    images: ["/og/homepage.jpg"],
  },
}

export default function FloridaGrowingZonesHomesteadPlanningPage() {
  const breadcrumb = {
    ...breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Florida Growing Zones & Homestead Planning", path: PAGE_PATH },
    ]),
    "@id": `${PAGE_URL}#breadcrumb`,
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Florida Growing Zones & Lunar Homestead Planning Tool",
    description:
      "Educational resource for Florida USDA plant hardiness zones, frost timing, moon-phase planting rhythms, statewide growing advantages, and regenerative homestead planning.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: {
      "@type": "Thing",
      name: "USDA Plant Hardiness Zone Map",
      description:
        "Standard reference for extreme minimum temperatures used to guide perennial plant survival in North America.",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteSiteUrl("/og/homepage.jpg"),
    },
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${PAGE_URL}#article`,
    headline: "Florida Growing Zones & Lunar Homestead Planning Tool",
    description:
      "Hands-on Florida guide to USDA zones, frost-date awareness, moon rhythm prompts inspired by classic almanacs, edible landscaping for tiny homes, and permaculture-style closed-loop ideas.",
    author: {
      "@type": "Organization",
      name: "Prefabricated.co",
      url: SITE_URL,
    },
    publisher: { "@id": `${SITE_URL}/#business` },
    datePublished: "2026-05-01",
    dateModified: "2026-05-14",
    mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
    image: [absoluteSiteUrl("/og/homepage.jpg")],
    keywords: [
      "USDA hardiness zone",
      "Florida frost dates",
      "permaculture",
      "tiny home homestead",
      "Florida moon planting",
      "Old Farmer's Almanac gardening",
      "regenerative agriculture",
    ],
    articleSection: "Sustainable Living",
    inLanguage: "en-US",
  }

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Florida Growing Zones & Lunar Homestead Planning Tool",
    url: PAGE_URL,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript. Requires HTML5 support.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: { "@id": `${SITE_URL}/#business` },
    description:
      "Interactive estimator that translates Florida ZIP codes or city hints into USDA hardiness zones, current moon-phase rhythm prompts, and customized regenerative homestead planning.",
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Which USDA plant hardiness zones occur in Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Florida includes zones 8b through 11b, spanning from Panhandle pockets near 15°F extremes to virtually frost-free areas in the Keys above 45°F extremes, per USDA definitions.",
        },
      },
      {
        "@type": "Question",
        name: "How should I interpret last frost and first frost dates in Central Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Central Florida (often USDA zone 10a) may see only light, radiational frosts. Treat published dates as neighborhood guidance—track your microclimate beside water, pavement, and canopy cover, and use USDA + NOAA resources together.",
        },
      },
      {
        "@type": "Question",
        name: "Can a tiny home homestead stay productive through Florida summers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, by emphasizing heat-tolerant perennials, deep mulch, afternoon shade, vertical climbers on resilient trellises, and soil biology that survives intense rain-heat cycles. Hurricanes and drainage become core design inputs alongside temperature.",
        },
      },
      {
        "@type": "Question",
        name: "How can moon phases help time planting in Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many growers use waxing moons (new to full) for above-ground crops and transplanting, and waning moons (full to new) for root crops, pruning, compost work, and soil building—similar to Old Farmer’s Almanac rhythm prompts. In Florida, always balance moon timing with heat stress, irrigation, hurricane season tasks, and your USDA zone’s frost realities.",
        },
      },
      {
        "@type": "Question",
        name: "Is ZIP-code-based USDA zone lookup exact?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. ZIP-based lookups are educational approximations. Always validate with USDA Agricultural Research Service hardiness data, local extension notes, and on-site temperature history—especially near water and urban heat islands.",
        },
      },
    ],
  }

  const structuredData: Array<{ key: string; schema: Record<string, unknown> }> = [
    { key: "webpage", schema: webPageSchema },
    { key: "article", schema: articleSchema },
    { key: "webapp", schema: webAppSchema },
    { key: "faq", schema: faqSchema },
    { key: "breadcrumb", schema: breadcrumb },
  ]

  return (
    <main className="min-h-screen">
      {structuredData.map(({ key, schema }) => (
        <script key={key} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Navigation />

      <section className="pt-36 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              Florida permaculture resource
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground text-balance leading-tight mb-6">
              Florida growing zones, lunar timing &amp; homestead planning
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Anchor your tiny home village in USDA hardiness reality, frost-aware successions, and
              calming moon rhythm prompts (waxing/waning + sign traditions) while you design
              zero-waste loops—scraps to poultry to compost to fruiting guilds—that thrive in Florida
              humidity and storm seasons.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/resources"
                className="inline-flex items-center px-6 py-3 border border-border text-foreground text-sm font-semibold rounded hover:border-primary/40"
              >
                Back to resources hub
              </Link>
              <Link
                href="/#florida-homestead"
                className="inline-flex items-center px-6 py-3 text-primary text-sm font-semibold rounded hover:underline"
              >
                Homepage feature spotlight
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <FloridaHomesteadZoneTool />
        </div>
      </section>

      <section className="py-16 bg-[oklch(0.18_0.02_95)] text-white">
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          <h2 className="font-serif text-3xl text-balance">Planning notes &amp; accuracy</h2>
          <p className="text-white/75 leading-relaxed text-sm md:text-base">
            Moon-phase and sign guidance on this page are <strong className="text-white/90">educational approximations</strong>{" "}
            derived from a synodic model and simplified sky geometry—excellent for rhythm and
            community learning, but not a substitute for ephemeris-grade astrology or extension-office
            recommendations. USDA plant hardiness zones describe extreme winter lows—not summer heat,
            disease, or flood risk.
          </p>
          <p className="text-white/75 leading-relaxed text-sm md:text-base">
            Florida growers still pair hardiness bands with NOAA frost tools, extension guidance,
            parcel elevation, distance from water, canopy cover, and Arctic outbreak history.
            Prefabricated.co provides this experience for education; it does not replace
            property-specific agronomy, permitting, or environmental assessments.
          </p>
          <p className="text-white/75 leading-relaxed text-sm md:text-base">
            When you are ready to integrate food systems into a permitted backyard dwelling, start
            with code-aware water and structural plans, then layer edible landscaping that respects
            setbacks, utilities, and storm resilience.
          </p>
        </div>
      </section>

      <section className="py-16 bg-secondary border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance mb-4">
            Build shelter that supports your living landscape.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Explore EarthNest Living Systems to see how shelter, water, energy, and food layers stack
            together on Florida lots—and how a legal ADU or prefab backyard home can anchor the
            infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/earthnest-living-systems"
              className="inline-flex items-center px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded hover:bg-[oklch(0.58_0.13_192)]"
            >
              EarthNest overview
            </Link>
            <Link
              href="/#qualify"
              className="inline-flex items-center px-7 py-3.5 border border-border text-foreground text-sm font-semibold rounded hover:border-primary/40 bg-background"
            >
              Request a property evaluation
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
