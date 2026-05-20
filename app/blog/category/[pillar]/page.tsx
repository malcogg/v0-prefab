import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { BlogIndexToolbar } from "@/components/blog/blog-index-toolbar"
import { BlogPostList } from "@/components/blog/blog-post-list"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import type { BlogPillar } from "@/lib/blog/cta-types"
import { parsePillar } from "@/lib/blog/cta-types"
import { getAllPosts } from "@/lib/blog/load-posts"
import { BLOG_PILLARS, getPillarMeta } from "@/lib/blog/pillars"
import { filterPostsByPillar } from "@/lib/blog/search-posts"
import { breadcrumbSchema, SITE_URL } from "@/lib/seo"

type PageProps = { params: Promise<{ pillar: string }> }

export function generateStaticParams() {
  return BLOG_PILLARS.map((pillar) => ({ pillar: pillar.id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { pillar: raw } = await params
  const pillar = parsePillar(raw)
  if (!pillar) return {}
  const meta = getPillarMeta(pillar)
  return {
    title: `${meta.label} · Blog | Prefabricated.co`,
    description: meta.description,
    alternates: { canonical: `/blog/category/${pillar}` },
    openGraph: {
      title: `${meta.label} · Blog`,
      description: meta.description,
      url: `${SITE_URL}/blog/category/${pillar}`,
      type: "website",
    },
  }
}

export default async function BlogCategoryPage({ params }: PageProps) {
  const { pillar: raw } = await params
  const pillar = parsePillar(raw) as BlogPillar | undefined
  if (!pillar) notFound()

  const meta = getPillarMeta(pillar)
  const posts = filterPostsByPillar(getAllPosts(), pillar)

  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: meta.label, path: `/blog/category/${pillar}` },
  ])

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navigation />

      <section className="pt-36 pb-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">{meta.shortLabel}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-4">{meta.label}</h1>
          <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">{meta.description}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            {posts.length} {posts.length === 1 ? "article" : "articles"} in this category
          </p>
        </div>
      </section>

      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <BlogIndexToolbar activePillar={pillar} />
          <BlogPostList
            posts={posts}
            emptyMessage={`No published articles in ${meta.label} yet. Check back soon—or browse another category above.`}
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
