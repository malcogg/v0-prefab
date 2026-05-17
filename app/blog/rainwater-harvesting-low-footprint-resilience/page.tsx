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

const path = "/blog/rainwater-harvesting-low-footprint-resilience"
const title = "Rainwater Harvesting & Low-Footprint Water Resilience"
const description =
  "Practical systems for collecting, filtering, and using rainwater on small lots, ADUs, and tiny homes in Florida."
const published = "2026-05-17"

const postOg = ogImageMeta({
  variant: "resource",
  title,
  subtitle: description.slice(0, 80),
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
            <div className="text-xs font-bold text-teal-800 tracking-wider uppercase mb-2">Off-grid infrastructure</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 mb-3">{title}</h1>
            <div className="text-sm text-neutral-500">
              Published: {format(parseISO(published), "MMMM d, yyyy")} · 7 min read
            </div>
          </header>

          <AffiliateDisclosureBanner className="mb-8" />

          <article className="text-neutral-800 font-sans leading-relaxed space-y-8 text-base">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">Designing a Small-Footprint Water Catchment System</h2>
            <p>A 1,000 sq ft roof can yield ~600 gallons per inch of rain. This is a major resource in Florida’s wet season.</p>

            <div className="my-8 p-6 border border-neutral-200 rounded-xl bg-neutral-50">
              <h4 className="font-bold">Rain Wizard 50-Gallon Rain Barrel</h4>
              <a href="https://amzn.to/3R5ySDb" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">
                → Shop Rain Barrel + Diverter Kit
              </a>
            </div>

            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">First-Flush Diversion & Clean Collection</h2>
            <p>Divert the initial dirty runoff before storing water.</p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-5 border rounded-xl border-neutral-200">
                <h4 className="font-bold">Rain Harvesting First Flush Kit</h4>
                <a href="https://amzn.to/499lcwV" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">
                  → View Kit
                </a>
              </div>
              <div className="p-5 border rounded-xl border-neutral-200">
                <h4 className="font-bold">Anivia Downspout Diverter</h4>
                <a href="https://amzn.to/4wApfwg" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">
                  → View Diverter
                </a>
              </div>
            </div>

            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">Filtration & Safe Use</h2>
            <p>Use inline filters and RO systems for higher-quality needs.</p>

            <div className="my-8 p-6 border border-neutral-200 rounded-xl bg-neutral-50">
              <h4 className="font-bold">Express Water 11-Stage RO System + Camco RV Inline Filter</h4>
              <a href="https://amzn.to/4ukEwQq" target="_blank" rel="noopener noreferrer" className="block text-teal-700 hover:underline">
                → RO System
              </a>
              <a href="https://amzn.to/4eRtPQz" target="_blank" rel="noopener noreferrer" className="block text-teal-700 hover:underline mt-1">
                → Camco RV Filter
              </a>
            </div>

            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">Storm Overflow & Backup Planning</h2>
            <p>Always include overflow routing and a submersible pump for heavy rain events.</p>
          </article>

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
