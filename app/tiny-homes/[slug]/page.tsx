import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft } from "lucide-react"

import { EscapeCheckoutButton } from "@/components/escape-checkout-button"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import {
  ESCAPE_TINY_HOME_MODELS,
  formatUsd,
  getEscapeModelBySlug,
  escapeModelSlugs,
} from "@/lib/escape-tiny-homes-data"
import { ogImageMeta } from "@/lib/og"
import { absoluteSiteUrl, breadcrumbSchema, SITE_URL } from "@/lib/seo"

type PageProps = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return escapeModelSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const model = getEscapeModelBySlug(slug)
  if (!model) {
    return { title: "Model | Prefabricated.co" }
  }
  const path = `/tiny-homes/${slug}`
  const og = ogImageMeta({
    variant: "default",
    title: `${model.shortLabel} — Escape Tiny Home`,
    subtitle: `${formatUsd(model.sellingPriceUsd)} · Prefabricated.co`,
  })
  return {
    title: `${model.shortLabel} — Escape Tiny Home (2026) | Prefabricated.co`,
    description: model.description,
    alternates: { canonical: path },
    openGraph: {
      title: `Escape ${model.shortLabel}`,
      description: model.description,
      url: path,
      type: "website",
      images: [og],
    },
    twitter: {
      card: "summary_large_image",
      title: `Escape ${model.shortLabel}`,
      images: [og.url],
    },
  }
}

export default async function EscapeModelPage({ params }: PageProps) {
  const { slug } = await params
  const model = getEscapeModelBySlug(slug)
  if (!model) notFound()

  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Escape tiny homes", path: "/tiny-homes" },
    { name: model.shortLabel, path: `/tiny-homes/${slug}` },
  ])

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Escape ${model.shortLabel}`,
    description: model.description,
    brand: { "@type": "Brand", name: "Escape Homes" },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/tiny-homes/${slug}`,
      priceCurrency: "USD",
      price: model.sellingPriceUsd,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Prefabricated.co", url: SITE_URL },
    },
    image: model.gallery.map((p) => absoluteSiteUrl(p)),
  }

  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Navigation />

      <article>
        <div className="relative h-[min(72vh,560px)] w-full bg-foreground">
          <Image
            src={model.heroImage}
            alt=""
            fill
            className="object-cover opacity-95"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/55 to-foreground/20" />
          <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-16 pt-24 px-6">
            <div className="max-w-4xl">
              <Link
                href="/tiny-homes"
                className="inline-flex items-center gap-1 text-white/85 text-sm font-medium mb-6 hover:text-white transition-colors"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden />
                All Escape models
              </Link>
              <p className="text-white/75 text-xs font-semibold tracking-[0.28em] uppercase mb-3">
                Escape Homes · {model.fullName}
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-balance leading-[1.05] mb-6">
                {model.shortLabel}
              </h1>
              <div className="flex flex-wrap items-baseline gap-4 text-white">
                <span className="text-3xl md:text-4xl font-semibold tabular-nums tracking-tight">
                  {formatUsd(model.sellingPriceUsd)}
                </span>
                <span className="text-white/70 text-lg line-through tabular-nums">
                  MSRP {formatUsd(model.basePriceUsd)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
          <p className="font-serif text-xl md:text-2xl text-foreground/95 leading-relaxed text-pretty">
            {model.description}
          </p>
        </div>

        <section className="border-y border-border bg-[oklch(0.985_0.012_85)] px-6 py-14 md:py-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-6">Highlights</h2>
              <ul className="space-y-3">
                {model.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Purchase</p>
              <p className="font-serif text-3xl text-foreground mb-1 tabular-nums">{formatUsd(model.sellingPriceUsd)}</p>
              <p className="text-sm text-muted-foreground mb-8">Fixed base model — no online configurator on Escape units.</p>
              <EscapeCheckoutButton slug={model.slug} />
              <p className="mt-8 text-xs text-muted-foreground leading-relaxed">
                Prefer to talk through siting first?{" "}
                <Link href="/contact" className="text-primary underline-offset-4 hover:underline">
                  Contact the team
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-10 text-center">Gallery</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {model.gallery.map((src, i) => (
                <div key={`${src}-${i}`} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted border border-border/60">
                  <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-8 max-w-xl mx-auto">
              Placeholder photography rotates from site stock until Escape-specific assets are uploaded to{" "}
              <code className="text-foreground/80">/public/images/escape/</code>.
            </p>
          </div>
        </section>
      </article>

      <SiteFooter />
    </main>
  )
}
