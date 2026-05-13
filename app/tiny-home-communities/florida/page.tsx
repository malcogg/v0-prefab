import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { getFloridaCommunities } from "@/lib/tiny-home-communities/repo"
import { FloridaDirectoryClient } from "@/components/tiny-home-communities/florida-directory-client"
import { breadcrumbSchema, SITE_URL } from "@/lib/seo"
import {
  floridaHubUrl,
  itemListSchemaFromCommunities,
} from "@/lib/tiny-home-communities/jsonld"
import { ogImageMeta } from "@/lib/og"

const floridaTinyOg = ogImageMeta({
  variant: "tiny",
  title: "Florida tiny home communities",
  subtitle: "Curated villages, campuses & lakefront collectives",
})

export const metadata: Metadata = {
  title: "Florida Tiny Home Communities | Directory · Prefabricated.co",
  description:
    "Search curated Florida tiny home villages, Appendix Q homesteads, resort cottages, leasehold campuses, and waterfront collectives—with filters for region and tenancy style.",
  alternates: { canonical: "/tiny-home-communities/florida" },
  keywords: [
    "Florida tiny home communities",
    "tiny house village Florida",
    "THOW friendly Florida parks",
    "Orlando lakefront tiny homes",
    "Tampa Bay tiny home village",
    "Ruskin Circle Pond tiny community",
  ],
  openGraph: {
    title: "Florida Tiny Home Communities | Prefabricated.co",
    description:
      "Prefabricated.co’s stewardship-first roster covers Orlando, Tampa Bay, Sarasota, Cocoa, Oxford, Osceola County, and the Lake Region—always link-out friendly.",
    url: `${SITE_URL}/tiny-home-communities/florida`,
    type: "article",
    images: [floridaTinyOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Florida Tiny Home Communities | Prefabricated.co",
    description:
      "Filter Florida’s curated tiny footprints by region clusters and tenancy models. Zero pricing sensationalism.",
    images: [floridaTinyOg.url],
  },
}

export default function FloridaTinyHomeDirectoryPage() {
  const communities = getFloridaCommunities()

  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Tiny Home Communities", path: "/tiny-home-communities" },
    { name: "Florida", path: "/tiny-home-communities/florida" },
  ])

  const itemList = itemListSchemaFromCommunities(
    communities,
    "Florida Tiny Home Community Listings · Prefabricated.co"
  )

  const floridaArticleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Florida Tiny Home Communities — Curated Stewardship Atlas",
    author: {
      "@type": "Organization",
      name: "Prefabricated.co",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Prefabricated.co",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    datePublished: "2026-05-01",
    dateModified: new Date().toISOString().slice(0, 10),
    mainEntityOfPage: floridaHubUrl(),
    abstract:
      "A mobile-first searchable directory celebrating lawful tiny footprints across Florida—with schema-rich detail pages tied to authoritative external sources.",
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does Prefabricated.co publish pricing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Pricing changes daily; we summarize stewardship models without dollar amounts.",
        },
      },
      {
        "@type": "Question",
        name: "How should I verify tenancy legality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use our listings as introductory research, cross-check recorded covenants, consult Florida attorneys, county zoning, HOA packets, and insurance partners before relocating.",
        },
      },
      {
        "@type": "Question",
        name: "Will other states publish here?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Additional states reuse the identical component library—Florida launched first.",
        },
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(floridaArticleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />

      <section className="pt-36 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Florida · Stewardship atlas</p>
          <div className="max-w-4xl space-y-5">
            <h1 className="font-serif text-5xl md:text-6xl text-foreground text-balance leading-tight">
              Florida tiny home communities anchored in daylight data.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Each card links to Prefabricated.co detail pages enriched with tenancy labels, stewardship notes, and outbound references to operators. Flood insurance, HOA
              covenants, wind zones, Appendix Q conformance, leasehold regimes, or hospitality skews deserve your own diligence—never a tweet thread.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 pt-10">
          <FloridaDirectoryClient communities={communities} />
          <aside className="mt-14 rounded-xl border border-dashed border-border bg-background/85 p-6 text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground font-semibold">Editorial posture.</strong> We emphasize communities that consciously welcome diminutive dwellings or cottages—not
            every anonymous campground. Inclusion is not endorsement; escalate unknowns directly with municipalities and underwriting partners.
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
