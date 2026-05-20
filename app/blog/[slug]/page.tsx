import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
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
import { BlogEndCta } from "@/components/blog/blog-inline-cta"
import { BlogMarkdownBody } from "@/components/blog/markdown-body"
import { BlogRelatedReads } from "@/components/blog/blog-related-reads"
import { RainwaterGuideDownloadForm } from "@/components/blog/rainwater-guide-download-form"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { StarterKitDownloadForm } from "@/components/starter-kit-download-form"
import { parseCtaVariant, parseLeadMagnet } from "@/lib/blog/cta-types"
import { getAllPosts, getMarkdownBlogSlugs, getPostBySlug } from "@/lib/blog/load-posts"
import { resolveRelatedPosts } from "@/lib/blog/related-posts"
import { absoluteSiteUrl, breadcrumbSchema, SITE_URL } from "@/lib/seo"
import { ogImageMeta } from "@/lib/og"

type PageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getMarkdownBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const path = `/blog/${slug}`
  const postOg = ogImageMeta({ variant: "resource", title: post.title, subtitle: post.description.slice(0, 80) })

  return {
    title: `${post.title} | Prefabricated.co Blog`,
    description: post.description,
    alternates: { canonical: path },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}${path}`,
      type: "article",
      publishedTime: post.date,
      images: [postOg],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [postOg.url],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const related = resolveRelatedPosts(post, allPosts)
  const ctaVariant = parseCtaVariant(post.cta)
  const endCtaVariant = parseCtaVariant(post.endCta) ?? ctaVariant
  const leadMagnet = parseLeadMagnet(post.leadMagnet)

  const path = `/blog/${slug}`
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path },
  ])

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
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
          <Breadcrumb className="text-sm mb-8">
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
                <BreadcrumbPage className="line-clamp-1">{post.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <header className="mb-8 border-b border-neutral-200 pb-6">
            {post.category ? (
              <div className="text-xs font-bold text-teal-800 tracking-wider uppercase mb-2">{post.category}</div>
            ) : null}
            <time dateTime={post.date} className="text-xs font-mono uppercase tracking-wide text-muted-foreground">
              {format(parseISO(post.date), "MMMM d, yyyy")}
              {post.readTime ? ` · ${post.readTime}` : null}
            </time>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mt-2 mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{post.description}</p>
          </header>

          <AffiliateDisclosureBanner className="mb-10" />

          <BlogMarkdownBody source={post.body} ctaVariant={ctaVariant} />

          {endCtaVariant ? <BlogEndCta variant={endCtaVariant} /> : null}

          {leadMagnet === "starter-kit" ? (
            <section className="mt-14">
              <StarterKitDownloadForm />
            </section>
          ) : null}

          {leadMagnet === "rainwater-guide" ? (
            <section className="mt-14">
              <RainwaterGuideDownloadForm />
            </section>
          ) : null}

          <BlogRelatedReads posts={related} />

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
