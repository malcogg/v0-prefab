import type { Metadata } from "next"
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
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { AffiliateDisclosureBanner } from "@/components/blog/affiliate-disclosure-banner"
import { absoluteSiteUrl, breadcrumbSchema, SITE_URL } from "@/lib/seo"
import { ogImageMeta } from "@/lib/og"

const path = "/blog/small-space-food-florida-backyard"
const title = "Small-Space Food in a Florida Backyard (or ADU Pad)"
const description =
  "Practical guide to sun, soil, water, and vertical growing on tight lots, ADUs, and rental-friendly setups in Florida."
const published = "2026-05-17"

const postOg = ogImageMeta({
  variant: "resource",
  title,
  subtitle: "Maximize food production on micro-lots with containers, raised beds, vertical systems, and smart irrigation.",
})

export const metadata: Metadata = {
  title: `${title} | Prefabricated.co`,
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description: "Maximize food production on micro-lots with containers, raised beds, vertical systems, and smart irrigation.",
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

export default function SmallSpaceGardeningBlogPage() {
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
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <Navigation />

      <div className="pt-44 pb-20 bg-background">
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
            <div className="text-xs font-bold text-teal-800 tracking-wider uppercase mb-2">Regenerative IQ</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 mb-3">{title}</h1>
            <div className="text-sm text-neutral-500">
              Published: {format(parseISO(published), "MMMM d, yyyy")} · 8 min read
            </div>
          </header>

          <article className="text-neutral-800 font-sans leading-relaxed space-y-8 text-base">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">Why Small-Space Food Fits Florida ADU & Tiny-Home Contexts</h2>
            <p>
              Backyard ADUs, cottage rentals, and tiny-home pads share one core constraint: usable outdoor space is measured in
              narrow strips and corners. Food production remains highly realistic when you treat the yard as a{" "}
              <strong>stacked, vertical system</strong> rather than a traditional farm.
            </p>

            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">Reading Sun, Heat, and Wind on a Tight Lot</h2>
            <p>
              Track morning vs afternoon sun along fences and ADU walls. Reflected heat from paving and metal roofing can scorch
              leaves quickly. In Central/South Florida, afternoon shade often outperforms full sun for leafy greens during summer.
            </p>
            <p>Airflow is critical in humid conditions — avoid tight dead-air pockets against siding.</p>

            <div className="my-8 p-6 border border-neutral-200 rounded-xl bg-neutral-50">
              <span className="uppercase text-xs tracking-widest text-teal-700 font-bold">Recommended</span>
              <h4 className="font-bold mt-2">winemana 40% Shade Cloth (10x20 ft)</h4>
              <a
                href="https://amzn.to/3RwlPKZ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 hover:underline font-medium"
              >
                → Shop Shade Cloth
              </a>
            </div>

            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">Soil, Containers & Raised Beds</h2>
            <p>
              Use modular raised beds to bypass poor native soil and compaction. Match depth to crop: 6–12&quot; for greens,
              17–24&quot;+ for tomatoes/peppers.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-5 border rounded-xl border-neutral-200">
                <h4 className="font-bold">Vego Garden 17&quot; Tall Metal Raised Bed (8x2 ft)</h4>
                <a href="https://amzn.to/4uoLiEY" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">
                  → View Bed
                </a>
              </div>
              <div className="p-5 border rounded-xl border-neutral-200">
                <h4 className="font-bold">Vegepod Self-Watering Kit</h4>
                <a href="https://amzn.to/4dfBneH" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">
                  → View Vegepod
                </a>
              </div>
            </div>

            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">Water: Consistency Beats Heroics</h2>
            <p>Mulch first. Then add timers + drip. Ollas provide excellent low-tech backup.</p>

            <div className="my-8 p-6 border border-neutral-200 rounded-xl bg-neutral-50">
              <h4 className="font-bold">Essential Water Tools</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm mt-3">
                <li>
                  <a href="https://amzn.to/43evIj2" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">
                    Orbit Digital Hose Timer
                  </a>
                </li>
                <li>
                  <a href="https://amzn.to/4wF1Z0o" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">
                    Raindrip Automatic Kit
                  </a>
                </li>
                <li>
                  <a href="https://amzn.to/4tHh92j" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">
                    Ceramic Olla Spikes
                  </a>
                </li>
              </ul>
            </div>

            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">Vertical Growing & Rules/HOA Sanity Checks</h2>
            <p>
              Use sturdy cages and trellises. Always check HOA covenants and lease terms before permanent installations. Favor
              portable systems if renting.
            </p>

            <footer className="mt-16 pt-8 border-t border-neutral-200">
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Related reads</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <Link
                  href="/florida-growing-zones-homestead-planning"
                  className="block p-4 border border-neutral-200 rounded-xl hover:bg-neutral-50"
                >
                  → Florida growing zones & homestead planning
                </Link>
                <Link href="/closed-loop-homestead" className="block p-4 border border-neutral-200 rounded-xl hover:bg-neutral-50">
                  → Closed-loop homestead guide
                </Link>
                <Link href="/eco-upgrades" className="block p-4 border border-neutral-200 rounded-xl hover:bg-neutral-50">
                  → Eco upgrades for ADUs
                </Link>
              </div>
            </footer>
          </article>

          <AffiliateDisclosureBanner className="mt-12" />

          <p className="mt-10 text-sm text-muted-foreground">
            <Link href="/blog" className="font-medium text-primary underline underline-offset-4 hover:no-underline">
              ← Back to blog
            </Link>
          </p>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
