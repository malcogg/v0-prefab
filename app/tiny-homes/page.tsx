import type { Metadata } from "next"
import Link from "next/link"

import { EscapeModelCard } from "@/components/escape-model-card"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ESCAPE_TINY_HOME_MODELS } from "@/lib/escape-tiny-homes-data"
import { ogImageMeta } from "@/lib/og"
import { breadcrumbSchema, SITE_URL } from "@/lib/seo"

const PATH = "/tiny-homes"
const PAGE_URL = `${SITE_URL}${PATH}`

const pageOg = ogImageMeta({
  variant: "default",
  title: "Escape Tiny Homes — 2026 collection",
  subtitle: "Partner lineup · Secure checkout · Prefabricated.co",
})

export const metadata: Metadata = {
  title: "Escape Tiny Homes (2026) | Prefabricated.co",
  description:
    "Shop the full Escape Homes 2026 tiny house lineup with transparent pricing, model details, and Stripe checkout. Partnered with Prefabricated.co for Florida delivery and siting support.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Escape Tiny Homes — 2026 Collection",
    description:
      "Sixteen curated Escape models: Traveler, Vista, ONE, e-series, Ultimate, and more. Your selling price shown on every card.",
    url: PATH,
    type: "website",
    images: [pageOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Escape Tiny Homes (2026) | Prefabricated.co",
    images: [pageOg.url],
  },
}

export default function TinyHomesCatalogPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Escape tiny homes", path: PATH },
  ])

  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navigation />

      <header className="pt-28 sm:pt-32 pb-14 md:pb-20 px-6 border-b border-border bg-[oklch(0.99_0.01_85)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase mb-5">Escape Homes · Partner</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground text-balance leading-tight mb-6">
            2026 tiny home collection
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Every model below includes MSRP reference and <strong className="text-foreground">your Prefabricated.co
            price</strong>. Open any card for a full product page, gallery, and one-click Stripe checkout — fixed base
            configurations (no online customizer on Escape builds).
          </p>
          <p className="mt-8 text-sm text-muted-foreground">
            Need EarthNest container customization or a site-built ADU?{" "}
            <Link href="/#earthnest-adu-lanes" className="text-primary font-medium underline-offset-4 hover:underline">
              View those lanes on the homepage
            </Link>
            {" · "}
            <Link href="/#qualify" className="text-primary font-medium underline-offset-4 hover:underline">
              Book an evaluation
            </Link>
          </p>
        </div>
      </header>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ESCAPE_TINY_HOME_MODELS.map((model, i) => (
            <EscapeModelCard key={model.slug} model={model} priorityImage={i < 3} />
          ))}
        </div>
      </section>

      <section className="py-14 px-6 border-t border-border bg-secondary/40">
        <div className="max-w-3xl mx-auto text-center text-sm text-muted-foreground leading-relaxed">
          <p className="mb-4">
            Prices reflect base model bands at publication; factory options and freight may adjust final agreements.
            Always confirm availability and lead time before checkout. Siting, permits, and utilities are quoted
            separately for your parcel.
          </p>
          <p>
            Canonical URL:{" "}
            <a href={PAGE_URL} className="text-primary underline-offset-4 hover:underline">
              {PAGE_URL.replace(/^https?:\/\//, "")}
            </a>
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
