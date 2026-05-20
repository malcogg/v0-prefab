import type { Metadata } from "next"
import Link from "next/link"

import { BlogIndexToolbar } from "@/components/blog/blog-index-toolbar"
import { BlogPostList } from "@/components/blog/blog-post-list"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { getAllPosts } from "@/lib/blog/load-posts"
import { parsePillarFromQuery } from "@/lib/blog/pillars"
import { searchBlogPosts } from "@/lib/blog/search-posts"
import { breadcrumbSchema, SITE_URL } from "@/lib/seo"

type PageProps = {
  searchParams: Promise<{ q?: string }>
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { q } = await searchParams
  const query = q?.trim() ?? ""
  const title = query ? `Search: ${query}` : "Search blog"
  return {
    title: `${title} | Prefabricated.co Blog`,
    description: "Search Florida ADU, tiny living, and homestead articles on Prefabricated.co.",
    alternates: { canonical: "/blog/search" },
    robots: query ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      url: `${SITE_URL}/blog/search`,
      type: "website",
    },
  }
}

export default async function BlogSearchPage({ searchParams }: PageProps) {
  const { q } = await searchParams
  const query = q?.trim() ?? ""
  const allPosts = getAllPosts()
  const results = searchBlogPosts(allPosts, query)
  const pillarHint = parsePillarFromQuery(query)

  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Search", path: "/blog/search" },
  ])

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navigation />

      <section className="pt-44 pb-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Blog search</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-4">
            {query ? `Results for “${query}”` : "Search articles"}
          </h1>
          <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
            {results.length} {results.length === 1 ? "article" : "articles"} found
            {pillarHint ? (
              <>
                {" "}
                ·{" "}
                <Link href={`/blog/category/${pillarHint}`} className="font-medium text-primary underline-offset-4 hover:underline">
                  Browse full category →
                </Link>
              </>
            ) : null}
          </p>
        </div>
      </section>

      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <BlogIndexToolbar initialQuery={query} />
          <BlogPostList
            posts={results}
            emptyMessage={
              query
                ? `No articles matched “${query}”. Try a pillar name like Legal, Investment, EarthNest, or Communities.`
                : "Enter a keyword to search titles, descriptions, and topics."
            }
          />
          <p className="mt-10 text-sm text-muted-foreground">
            <Link href="/blog" className="font-medium text-primary underline-offset-4 hover:no-underline">
              ← Back to all articles
            </Link>
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
