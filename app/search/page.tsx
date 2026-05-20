import type { Metadata } from "next"
import Link from "next/link"

import { SiteSearchForm } from "@/components/site-search-form"
import { SiteSearchResults } from "@/components/site-search-results"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { searchSiteIndex } from "@/lib/site-search/search"
import { breadcrumbSchema, SITE_URL } from "@/lib/seo"

type PageProps = {
  searchParams: Promise<{ q?: string }>
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { q } = await searchParams
  const query = q?.trim() ?? ""
  const title = query ? `Search: ${query}` : "Search"
  return {
    title: `${title} | Prefabricated.co`,
    description:
      "Search Florida ADUs, tiny home communities, Escape catalog models, guides, tools, and blog articles on Prefabricated.co.",
    alternates: { canonical: "/search" },
    robots: query ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      url: `${SITE_URL}/search`,
      type: "website",
    },
  }
}

export default async function SiteSearchPage({ searchParams }: PageProps) {
  const { q } = await searchParams
  const query = q?.trim() ?? ""
  const results = query ? searchSiteIndex(query) : []

  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Search", path: "/search" },
  ])

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navigation />

      <section className="pt-44 pb-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Site search</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-4">
            {query ? `Results for “${query}”` : "Search Prefabricated.co"}
          </h1>
          <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed mb-8">
            {query
              ? `${results.length} ${results.length === 1 ? "result" : "results"} across guides, tools, communities, catalog, and blog.`
              : "Find ADU rules, calculators, communities, Escape models, and blog guides."}
          </p>
          <SiteSearchForm initialQuery={query} idPrefix="search-page" />
        </div>
      </section>

      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          {query ? (
            <SiteSearchResults results={results} />
          ) : (
            <p className="text-muted-foreground max-w-2xl">
              Enter a keyword above—try{" "}
              <Link href="/search?q=adu" className="text-primary font-medium underline-offset-4 hover:underline">
                ADU
              </Link>
              ,{" "}
              <Link href="/search?q=communities" className="text-primary font-medium underline-offset-4 hover:underline">
                communities
              </Link>
              , or{" "}
              <Link href="/search?q=rainwater" className="text-primary font-medium underline-offset-4 hover:underline">
                rainwater
              </Link>
              .
            </p>
          )}
          <p className="mt-10 text-sm text-muted-foreground">
            <Link href="/" className="font-medium text-primary underline-offset-4 hover:no-underline">
              ← Back to home
            </Link>
            {" · "}
            <Link href="/blog" className="font-medium text-primary underline-offset-4 hover:no-underline">
              Browse blog
            </Link>
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
