import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import {
  getCommunitiesByStateSlug,
  getDirectoryStateParams,
} from "@/lib/tiny-home-communities/repo"
import { FloridaDirectoryClient } from "@/components/tiny-home-communities/florida-directory-client"
import { breadcrumbSchema, SITE_URL } from "@/lib/seo"
import { directoryStateLabel } from "@/lib/tiny-home-communities/states-registry"
import { itemListSchemaFromCommunities, stateHubUrl } from "@/lib/tiny-home-communities/jsonld"
import { ogImageMeta } from "@/lib/og"

type PageProps = { params: Promise<{ state: string }> }

export function generateStaticParams() {
  return getDirectoryStateParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state } = await params
  const label = directoryStateLabel(state)
  const communities = getCommunitiesByStateSlug(state)
  if (communities.length === 0) return {}

  const path = `/tiny-home-communities/${state}`
  const stateOg = ogImageMeta({
    variant: "tiny",
    title: `${label} tiny home communities`,
    subtitle: `${communities.length} curated listings · stewardship atlas`,
  })

  return {
    title: `${label} Tiny Home Communities | Directory · Prefabricated.co`,
    description: `Search curated ${label} tiny home villages, leasehold campuses, and THOW-forward clusters—with filters for region clusters and tenancy style.`,
    alternates: { canonical: path },
    openGraph: {
      title: `${label} Tiny Home Communities | Prefabricated.co`,
      description: `Stewardship-first roster for ${label}—official outbound links, no pricing tables.`,
      url: `${SITE_URL}${path}`,
      type: "article",
      images: [stateOg],
    },
    twitter: {
      card: "summary_large_image",
      title: `${label} Tiny Home Communities | Prefabricated.co`,
      description: `Filter curated ${label} tiny footprints by region and ownership models.`,
      images: [stateOg.url],
    },
  }
}

export default async function StateTinyHomeDirectoryPage({ params }: PageProps) {
  const { state } = await params
  const communities = getCommunitiesByStateSlug(state)
  if (communities.length === 0) notFound()

  const label = directoryStateLabel(state)
  const path = `/tiny-home-communities/${state}`

  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Tiny Home Communities", path: "/tiny-home-communities" },
    { name: label, path },
  ])

  const itemList = itemListSchemaFromCommunities(
    communities,
    `${label} Tiny Home Community Listings · Prefabricated.co`
  )

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${label} Tiny Home Communities — Curated Stewardship Atlas`,
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
    mainEntityOfPage: stateHubUrl(state),
    abstract:
      "A mobile-first searchable directory celebrating lawful tiny footprints—with schema-rich detail pages tied to authoritative external sources.",
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
          text: "Use our listings as introductory research, cross-check recorded covenants, consult attorneys, county zoning, HOA packets, and insurance partners before relocating.",
        },
      },
      {
        "@type": "Question",
        name: "Which states are live in the directory?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Florida plus North Carolina, Texas, California, Colorado, Georgia, and Oregon—additional states reuse the same route and schema patterns as data expands.",
        },
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />

      <section className="pt-36 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            {label} · Stewardship atlas
          </p>
          <div className="max-w-4xl space-y-5">
            <h1 className="font-serif text-5xl md:text-6xl text-foreground text-balance leading-tight">
              {label} tiny home communities anchored in daylight data.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Each card links to Prefabricated.co detail pages enriched with tenancy labels, stewardship notes, and
              outbound references to operators. Flood insurance, HOA covenants, wind zones, leasehold regimes, or
              hospitality skews deserve your own diligence—never a tweet thread.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 pt-10">
          <FloridaDirectoryClient communities={communities} />
          <aside className="mt-14 rounded-xl border border-dashed border-border bg-background/85 p-6 text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground font-semibold">Editorial posture.</strong> We emphasize communities that
            consciously welcome diminutive dwellings or cottages—not every anonymous campground. Inclusion is not
            endorsement; escalate unknowns directly with municipalities and underwriting partners.
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
