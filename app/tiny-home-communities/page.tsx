import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { getFloridaCommunities } from "@/lib/tiny-home-communities/repo"
import { CommunityCard } from "@/components/tiny-home-communities/community-card"
import { breadcrumbSchema, SITE_URL } from "@/lib/seo"
import { ArrowRight } from "lucide-react"
import { directoryHubUrl, floridaHubUrl, itemListSchemaFromCommunities } from "@/lib/tiny-home-communities/jsonld"
import { ogImageMeta } from "@/lib/og"

const tinyHubOg = ogImageMeta({ variant: "tiny" })

export const metadata: Metadata = {
  title: "Tiny Home Communities Directory | Prefabricated.co",
  description:
    "Explore curated Florida tiny home communities, villages, and THOW-forward campuses. Filter by region and ownership models—national expansion launches next.",
  alternates: { canonical: "/tiny-home-communities" },
  openGraph: {
    title: "Tiny Home Communities Directory | Prefabricated.co",
    description:
      "Curated directories of intentional tiny dwelling clusters across Florida (national expansion roadmap). Transparent amenity summaries without pricing fluff.",
    url: `${SITE_URL}/tiny-home-communities`,
    type: "website",
    images: [tinyHubOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiny Home Communities Directory | Prefabricated.co",
    description:
      "Discover Florida-first tiny dwelling campuses with stewardship details, tenancy models, and official outbound links—all mobile friendly.",
    images: [tinyHubOg.url],
  },
}

export default function TinyHomeDirectoryHubPage() {
  const floridaCommunities = getFloridaCommunities()
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Tiny Home Communities", path: "/tiny-home-communities" },
  ])
  const itemList = itemListSchemaFromCommunities(
    floridaCommunities,
    "Featured Florida Tiny Home Communities"
  )

  const spotlight = floridaCommunities.slice(0, 3)

  const hubWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${directoryHubUrl()}#hub`,
    url: directoryHubUrl(),
    name: "Tiny Home Communities Directory · Prefabricated.co",
    isPartOf: { "@type": "WebSite", url: SITE_URL, name: "Prefabricated.co" },
    about: floridaHubUrl(),
    description:
      "Editorial introductions to lawful tiny dwellings, leasehold cottages, THOW homesteads, and resort-style footprints across Florida—with verified outbound sources.",
    mainEntity: { "@type": "ItemList", "@id": `${directoryHubUrl()}#itemlist` },
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <Navigation />

      <section className="pt-36 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Directory</p>
          <h1 className="font-serif text-5xl md:text-6xl text-foreground text-balance leading-tight mb-6">
            Tiny home communities built for explorers—not generic RV spam.
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Prefabricated.co curates stewardship-focused villages, Appendix Q-aligned pads, cottage leasehold campuses, and waterfront homestead collectives sourced from
            public operator materials. Pricing stays off this resource—verification stays on you and your advisors.
          </p>
        </div>
      </section>

      <section className="pb-24 bg-secondary/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-[1.1fr_minmax(0,0.9fr)] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3">Featured state</p>
            <h2 className="font-serif text-4xl text-foreground mb-4">Florida is live today.</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From Orlando’s lakefront cluster to Tampa Bay escapes, Sarasota micro hospitality, Space Coast homesteads, and Central Florida stewardship parks—browse the
              Sunshine State anchors now. Additional states inherit the exact same typography, schema, and filter UX.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tiny-home-communities/florida"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
              >
                Open Florida listings
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
              <Link
                href="/florida-tiny-living-guide"
                className="inline-flex items-center px-6 py-3 border border-border text-foreground text-sm font-semibold rounded transition-colors hover:border-primary/35"
              >
                Florida tiny living primer
              </Link>
            </div>
          </div>
          <aside className="rounded-2xl bg-background border border-border p-6 shadow-sm space-y-4">
            <h3 className="font-serif text-2xl text-foreground">What we publish</h3>
            <ul className="text-sm text-muted-foreground space-y-3 leading-relaxed list-disc pl-4">
              <li>Structured amenities, tenancy labels, stewardship notes—no rate tables.</li>
              <li>Official outbound links opening in guarded new tabs (`noopener noreferrer`).</li>
              <li>Schema.org Lodging RV Park and Campground types when footprints warrant it.</li>
              <li>Future contributor workflow ready for Supabase/Sanity swaps without URL churn.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Preview grid</p>
              <h2 className="font-serif text-4xl text-foreground">Highlighted Florida campuses</h2>
              <p className="text-muted-foreground max-w-xl mt-3">
                A rotating spotlight from the authoritative Florida dataset—jump into the searchable directory for filtering by region cluster and tenancy model.
              </p>
            </div>
            <Link
              href="/tiny-home-communities/florida"
              className="inline-flex shrink-0 items-center justify-center px-6 py-3 border border-border text-sm font-semibold rounded-md hover:border-primary/40 transition-colors self-start lg:self-auto"
            >
              View entire Florida roster
            </Link>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">{spotlight.map((community) => <CommunityCard key={community.slug} community={community} />)}</div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
