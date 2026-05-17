import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft } from "lucide-react"

import { EscapeCheckoutButton } from "@/components/escape-checkout-button"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import {
  ESCAPE_CATALOG_PATH,
  ESCAPE_FACTORY_LINE,
  ESCAPE_PRICE_SHIPPING_NOTE,
  escapeModelSlugs,
  formatUsd,
  getEscapeModelBySlug,
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
  const path = `${ESCAPE_CATALOG_PATH}/${slug}`
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

  const path = `${ESCAPE_CATALOG_PATH}/${slug}`

  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Escape tiny homes", path: ESCAPE_CATALOG_PATH },
    { name: model.shortLabel, path },
  ])

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Escape ${model.shortLabel}`,
    description: model.fullDescription.slice(0, 500),
    brand: { "@type": "Brand", name: "Escape Homes" },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}${path}`,
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
        <div className="relative h-[min(78vh,620px)] w-full bg-foreground">
          <Image
            src={model.heroImage}
            alt=""
            fill
            className="object-cover object-center opacity-[0.92]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-foreground/15" />
          <div className="absolute inset-0 flex flex-col justify-end pb-10 md:pb-14 pt-24 px-6">
            <div className="max-w-4xl">
              <Link
                href={ESCAPE_CATALOG_PATH}
                className="inline-flex items-center gap-1 text-white/85 text-sm font-medium mb-6 hover:text-white transition-colors"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden />
                All Escape models
              </Link>
              <p className="text-white/72 text-xs font-semibold tracking-[0.28em] uppercase mb-3">
                Escape Homes · {model.fullName}
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-balance leading-[1.05] mb-6">
                {model.shortLabel}
              </h1>
              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 text-white mb-4">
                <span className="text-3xl md:text-[2.15rem] font-semibold tabular-nums tracking-tight">
                  {formatUsd(model.sellingPriceUsd)}
                </span>
                <span className="text-white/65 text-base md:text-lg line-through tabular-nums">
                  MSRP {formatUsd(model.basePriceUsd)}
                </span>
              </div>
              <p className="text-white/80 text-sm max-w-xl leading-relaxed border-l-2 border-white/35 pl-4">
                {ESCAPE_PRICE_SHIPPING_NOTE}
              </p>
            </div>
          </div>
        </div>

        <div className="border-b border-border/80 bg-[oklch(0.982_0.01_88)]">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap gap-x-8 gap-y-2 justify-center md:justify-start text-xs md:text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
            <span className="text-foreground/80">USA factory-built</span>
            <span className="hidden md:inline text-border" aria-hidden>
              ·
            </span>
            <span className="text-foreground/80">RVIA-certified</span>
            <span className="hidden md:inline text-border" aria-hidden>
              ·
            </span>
            <span className="text-foreground/80">Delivered fully finished</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
          <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed text-pretty mb-10">{model.description}</p>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-base md:text-lg text-muted-foreground leading-[1.75] text-pretty whitespace-pre-line">
              {model.fullDescription}
            </p>
          </div>
          <p className="mt-10 text-sm text-muted-foreground leading-relaxed border border-border rounded-xl p-4 bg-card/50">
            {ESCAPE_FACTORY_LINE}
          </p>
        </div>

        <section className="border-y border-border bg-[oklch(0.985_0.012_85)] px-6 py-14 md:py-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-6">Highlights</h2>
              <ul className="space-y-3.5">
                {model.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border/90 bg-background p-8 shadow-sm ring-1 ring-foreground/[0.04]">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Purchase</p>
              <p className="font-serif text-3xl text-foreground tabular-nums mb-1">{formatUsd(model.sellingPriceUsd)}</p>
              <p className="text-sm text-muted-foreground line-through tabular-nums mb-1">
                MSRP {formatUsd(model.basePriceUsd)}
              </p>
              <p className="text-sm text-foreground/85 font-medium mb-6">{ESCAPE_PRICE_SHIPPING_NOTE}</p>
              <p className="text-sm text-muted-foreground mb-8">
                Fixed base model — no online configurator on Escape units. Custom finishes and layouts stay on EarthNest /
                custom ADU lanes.
              </p>
              <EscapeCheckoutButton slug={model.slug} modelLabel={model.fullName} />
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
                <div
                  key={`${src}-${i}`}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted border border-border/60"
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-8 max-w-xl mx-auto">
              Photography may show similar finishes; hero and gallery use placeholders until Escape-specific assets are in{" "}
              <code className="text-foreground/80">/public/images/escape/</code>.
            </p>
          </div>
        </section>
      </article>

      <SiteFooter />
    </main>
  )
}
