import type { Metadata } from "next"
import Link from "next/link"
import { format, parseISO } from "date-fns"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { getAllPosts } from "@/lib/blog/load-posts"
import { breadcrumbSchema, SITE_URL } from "@/lib/seo"
import { ogImageMeta } from "@/lib/og"

const blogIndexOg = ogImageMeta({
  variant: "resource",
  title: "Blog · guides & gear",
  subtitle: "Florida small-space living, ADUs, homestead",
})

export const metadata: Metadata = {
  title: "Blog | Prefabricated.co — Florida ADUs, Tiny Living & Homestead",
  description:
    "Educational articles on Florida backyard food, water-smart yards, ADU context, and tiny living—with clear affiliate disclosure when product links appear.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Prefabricated.co",
    description: "Practical guides for small-space Florida living and homestead-minded upgrades.",
    url: `${SITE_URL}/blog`,
    type: "website",
    images: [blogIndexOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Prefabricated.co",
    description: "Practical guides for small-space Florida living and homestead-minded upgrades.",
    images: [blogIndexOg.url],
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ])

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navigation />

      <section className="pt-36 pb-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Blog</p>
          <h1 className="font-serif text-5xl md:text-6xl text-foreground text-balance leading-tight mb-6">
            Guides for Florida small-space living.
          </h1>
          <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Longer reads that pair with our tools and directory—food, water, heat, and tenancy context. Product links, when
            present, are clearly disclosed.
          </p>
          <p className="mt-6 text-sm">
            <Link href="/affiliate-disclosure" className="font-medium text-primary underline underline-offset-4 hover:no-underline">
              Affiliate disclosure
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">Posts are loading soon.</p>
          ) : (
            <ul className="flex flex-col gap-6 max-w-3xl">
              {posts.map((post) => (
                <li key={post.slug}>
                  <article className="rounded-xl border border-border bg-background p-6 md:p-8 shadow-sm transition-colors hover:border-primary/30">
                    <time dateTime={post.date} className="text-xs font-mono uppercase tracking-wide text-muted-foreground">
                      {format(parseISO(post.date), "MMMM d, yyyy")}
                    </time>
                    <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-2 mb-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{post.description}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex mt-4 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      Read article →
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
