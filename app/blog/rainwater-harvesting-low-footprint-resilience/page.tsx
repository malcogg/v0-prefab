import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { format, parseISO } from "date-fns"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { AffiliateDisclosureBanner } from "@/components/blog/affiliate-disclosure-banner"
import { RainwaterGuideDownloadForm } from "@/components/blog/rainwater-guide-download-form"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { absoluteSiteUrl, breadcrumbSchema, SITE_URL } from "@/lib/seo"
import { ogImageMeta } from "@/lib/og"

const path = "/blog/rainwater-harvesting-low-footprint-resilience"
const title = "Rainwater Harvesting & Low-Footprint Water Resilience"
const description =
  "A 7-minute deep dive into staged rainwater catchment for Florida EarthNest, ADU, and Escape tiny home sites—first-flush, filtration, overflow, and permitted integration."
const published = "2026-05-17"

const postOg = ogImageMeta({
  variant: "resource",
  title,
  subtitle: "Florida catchment · first-flush · filtration · overflow",
})

export const metadata: Metadata = {
  title: `${title} | Prefabricated.co`,
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}${path}`,
    type: "article",
    publishedTime: published,
    images: [postOg],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [postOg.url],
  },
}

export default function RainwaterResilienceBlogPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: title, path },
  ])

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: published,
    dateModified: published,
    author: { "@type": "Organization", name: "Prefabricated.co", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Prefabricated.co",
      logo: { "@type": "ImageObject", url: absoluteSiteUrl("/images/logo.png") },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${path}` },
    image: absoluteSiteUrl("/images/blog/florida-rainwater-harvesting-system.png"),
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <Navigation />

      <div className="pt-36 pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <Breadcrumb className="text-sm mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/blog">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="line-clamp-1">{title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <header className="mb-8 border-b border-neutral-200 pb-6">
            <div className="text-xs font-bold text-teal-800 tracking-wider uppercase mb-2">
              Guides &amp; tools · Off-grid infrastructure
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 mb-3">{title}</h1>
            <div className="text-sm text-neutral-500">
              Published: {format(parseISO(published), "MMMM d, yyyy")} · 7 min read
            </div>
          </header>

          <AffiliateDisclosureBanner className="mb-8" />

          <figure className="mb-10 rounded-xl overflow-hidden border border-neutral-200 bg-neutral-50">
            <Image
              src="/images/blog/florida-rainwater-harvesting-system.png"
              alt="Rainwater harvesting system diagram for Prefabricated.co tiny homes: rain on roof, gutters, filter, storage tank, pump, household use, and irrigation in a Florida setting."
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
            <figcaption className="px-4 py-3 text-xs text-neutral-600 leading-relaxed border-t border-neutral-200">
              Staged catchment for small-footprint Florida living: roof → gutters → first-flush filter → storage → pump →
              household and irrigation use.
            </figcaption>
          </figure>

          <article className="text-neutral-800 font-sans leading-relaxed space-y-6 text-base">
            <p>
              In the context of <strong className="text-neutral-950">regenerative living in Florida</strong>, water is
              your most abundant yet often most mismanaged resource. Whether you are living in an{" "}
              <Link href="/earthnest-living-systems" className="text-teal-700 underline-offset-4 hover:underline">
                EarthNest hybrid
              </Link>
              , a custom site-built ADU, or an{" "}
              <Link href="/escape-tiny-homes" className="text-teal-700 underline-offset-4 hover:underline">
                Escape tiny home
              </Link>
              , integrating a water catchment system is about more than just &ldquo;going off-grid&rdquo;—it&apos;s about
              creating <strong className="text-neutral-950">staged resilience</strong> that harnesses local weather
              patterns to reduce your footprint.
            </p>

            <h2 className="text-xl font-bold text-neutral-900 tracking-tight pt-2">
              1. Designing a small-footprint water catchment system
            </h2>
            <p>
              The scale of opportunity in a Florida backyard is massive. A standard{" "}
              <strong className="text-neutral-950">1,000 sq ft roof can yield approximately 600 gallons of water for every
              single inch of rain</strong>
              . During the Florida wet season, this can quickly overwhelm standard storage if you aren&apos;t prepared.
            </p>
            <p>
              For small-footprint living, the goal is to maximize every square inch of roofline. A reliable collection base
              is the starting point for this{" "}
              <Link href="/closed-loop-homestead" className="text-teal-700 underline-offset-4 hover:underline">
                closed-loop
              </Link>{" "}
              homesteading approach.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-neutral-950">Essential starter gear:</strong> Rain Wizard 50-Gallon Rain Barrel
              </li>
              <li>
                <strong className="text-neutral-950">Why it works:</strong> Compact enough for tight setbacks but provides
                an immediate source for local irrigation.
              </li>
            </ul>

            <div className="my-8 p-6 border border-neutral-200 rounded-xl bg-neutral-50">
              <h4 className="font-bold text-neutral-900">Rain Wizard 50-Gallon Rain Barrel</h4>
              <a
                href="https://amzn.to/3R5ySDb"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="text-teal-700 hover:underline"
              >
                → Shop Rain Barrel + Diverter Kit
              </a>
            </div>

            <h2 className="text-xl font-bold text-neutral-900 tracking-tight pt-2">
              2. The critical &ldquo;first-flush&rdquo;: clean collection
            </h2>
            <p>
              In Florida, your roof isn&apos;t just a water collector; it&apos;s a landing pad for pollen, dust, bird
              debris, and salt spray. You must{" "}
              <strong className="text-neutral-950">divert the initial dirty runoff</strong> before it ever enters your
              main storage tank.
            </p>
            <p>
              A <strong className="text-neutral-950">first-flush diverter</strong> captures the first few gallons of a
              storm—the &ldquo;wash&rdquo;—in a separate chamber. Once that chamber is full, a ball float seals the intake,
              allowing only the clean, subsequent rain to flow into your barrels or cistern.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-neutral-950">Recommended gear:</strong> Rain Harvesting First Flush Kit &amp;
                Anivia Downspout Diverter
              </li>
              <li>
                <strong className="text-neutral-950">Why it works:</strong> Keeps storage tanks sediment-free and extends
                the life of downstream filters.
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-5 border rounded-xl border-neutral-200 bg-white">
                <h4 className="font-bold text-neutral-900">Rain Harvesting First Flush Kit</h4>
                <a
                  href="https://amzn.to/499lcwV"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-teal-700 hover:underline"
                >
                  → View First Flush Kit
                </a>
              </div>
              <div className="p-5 border rounded-xl border-neutral-200 bg-white">
                <h4 className="font-bold text-neutral-900">Anivia Downspout Diverter</h4>
                <a
                  href="https://amzn.to/4wApfwg"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-teal-700 hover:underline"
                >
                  → View Downspout Diverter
                </a>
              </div>
            </div>

            <h2 className="text-xl font-bold text-neutral-900 tracking-tight pt-2">
              3. Filtration &amp; safe use: from garden to glass
            </h2>
            <p>
              Not all harvested water is created equal. While raw rainwater is perfect for fruiting guilds and{" "}
              <Link href="/blog/small-space-food-florida-backyard" className="text-teal-700 underline-offset-4 hover:underline">
                small-space gardening
              </Link>
              , <strong className="text-neutral-950">higher-quality needs</strong> (like outdoor showers or emergency
              potable backup) require multi-stage treatment.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-neutral-950">For general use:</strong> Use an inline filter to catch fine sediment
                and particulates.
              </li>
              <li>
                <strong className="text-neutral-950">For potability (emergency / laboratory):</strong> An 11-stage reverse
                osmosis (RO) system strips microscopic contaminants.
              </li>
              <li>
                <strong className="text-neutral-950">Recommended gear:</strong> Express Water 11-Stage RO System + Camco
                RV Inline Filter
              </li>
            </ul>

            <div className="my-8 p-6 border border-neutral-200 rounded-xl bg-neutral-50">
              <h4 className="font-bold text-neutral-900">Express Water 11-Stage RO System + Camco RV Inline Filter</h4>
              <a
                href="https://amzn.to/4ukEwQq"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="block text-teal-700 hover:underline"
              >
                → View RO System
              </a>
              <a
                href="https://amzn.to/4eRtPQz"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="block text-teal-700 hover:underline mt-1"
              >
                → View Camco RV Filter
              </a>
            </div>

            <h2 className="text-xl font-bold text-neutral-900 tracking-tight pt-2">
              4. Storm overflow &amp; backup planning: managing the deluge
            </h2>
            <p>
              Florida storm seasons are defined by sudden, massive influxes of water. If your 50-gallon barrel fills in
              the first ten minutes of a summer thunderstorm, where does the remaining 550 gallons go?
            </p>
            <p>
              Without <strong className="text-neutral-950">overflow routing</strong>, that water pools at your
              foundation—structural damage and mold risks we design against in our{" "}
              <Link href="/earthnest-living-systems" className="text-teal-700 underline-offset-4 hover:underline">
                EarthNest systems
              </Link>
              .
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-neutral-950">The strategy:</strong> Route overflow at least 10 feet from your
                foundation or into a dedicated rain garden.
              </li>
              <li>
                <strong className="text-neutral-950">Pro tip:</strong> Include a submersible pump for heavy rain events to
                move water to secondary storage or away from the site quickly.
              </li>
            </ul>

            <h2 className="text-xl font-bold text-neutral-900 tracking-tight pt-2">
              5. Integration: the legal and permitted path
            </h2>
            <p>
              In Florida, water systems should be integrated into a{" "}
              <strong className="text-neutral-950">permitted, foundation-built structure</strong>. Rainwater harvesting is
              a powerful resilience tool, but it must be balanced with municipal and county codes—the governing authority
              on backyard builds.
            </p>
            <p>
              At Prefabricated.co, we focus on <strong className="text-neutral-950">systems over structures</strong>. We
              help you navigate individual site evaluations and zoning approvals to make these{" "}
              <Link href="/eco-upgrades" className="text-teal-700 underline-offset-4 hover:underline">
                eco-upgrades
              </Link>{" "}
              a legal reality on your property.
            </p>
          </article>

          <section className="mt-14 rounded-xl border border-primary/25 bg-gradient-to-br from-primary/5 to-secondary/40 p-6 md:p-8 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">Ready to unlock your property&apos;s potential?</h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6">
              See how catchment, storage, and permitted structures fit your lot. We specialize in Florida-ready,
              eco-conscious living that builds long-term resilience and flexibility.
            </p>
            <Link
              href="/qualify"
              className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
            >
              Get your free property evaluation
            </Link>
          </section>

          <section className="mt-14">
            <RainwaterGuideDownloadForm />
          </section>

          <footer className="mt-16 pt-8 border-t border-neutral-200">
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Related reads</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <Link href="/closed-loop-homestead" className="block p-4 border border-neutral-200 rounded-xl hover:bg-neutral-50">
                → Closed-loop homestead
              </Link>
              <Link href="/eco-upgrades" className="block p-4 border border-neutral-200 rounded-xl hover:bg-neutral-50">
                → Eco upgrades
              </Link>
              <Link
                href="/blog/small-space-food-florida-backyard"
                className="block p-4 border border-neutral-200 rounded-xl hover:bg-neutral-50"
              >
                → Small-space gardening
              </Link>
            </div>
          </footer>

          <AffiliateDisclosureBanner className="mt-12" />

          <p className="mt-10 text-sm text-muted-foreground">
            <Link href="/blog" className="font-medium text-primary underline-offset-4 hover:no-underline">
              ← Back to blog
            </Link>
          </p>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
