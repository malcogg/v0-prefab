import type { Metadata } from "next"
import Link from "next/link"

import { EscapeModelCard } from "@/components/escape-model-card"
import { EscapeTinyHomesFaq } from "@/components/escape-tiny-homes-faq"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import {
  ESCAPE_CATALOG_PATH,
  ESCAPE_FACTORY_LINE,
  ESCAPE_PRICE_SHIPPING_NOTE,
  ESCAPE_TINY_HOME_MODELS,
  ESCAPE_TINY_HOMES_FAQ,
} from "@/lib/escape-tiny-homes-data"
import { ogImageMeta } from "@/lib/og"
import { breadcrumbSchema, SITE_URL } from "@/lib/seo"

const PAGE_URL = `${SITE_URL}${ESCAPE_CATALOG_PATH}`

const pageOg = ogImageMeta({
  variant: "default",
  title: "Escape Tiny Homes — 2026 collection",
  subtitle: "Partner lineup · Secure checkout · Prefabricated.co",
})

export const metadata: Metadata = {
  title: "Escape Tiny Homes (2026) | Prefabricated.co",
  description:
    "Shop the full Escape Homes 2026 tiny house lineup: sixteen models with MSRP, your price, RVIA-certified U.S. factory builds, and Stripe checkout. Shipping quoted separately.",
  alternates: { canonical: ESCAPE_CATALOG_PATH },
  openGraph: {
    title: "Escape Tiny Homes — 2026 Collection",
    description:
      "Sixteen Escape models: Traveler, Vista, ONE, e-series, Ultimate, and more. Transparent pricing; delivery quoted to your location.",
    url: ESCAPE_CATALOG_PATH,
    type: "website",
    images: [pageOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Escape Tiny Homes (2026) | Prefabricated.co",
    images: [pageOg.url],
  },
}

export default function EscapeTinyHomesCatalogPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Escape tiny homes", path: ESCAPE_CATALOG_PATH },
  ])

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ESCAPE_TINY_HOMES_FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  }

  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />

      <header className="relative pt-28 sm:pt-32 pb-16 md:pb-24 px-6 overflow-hidden border-b border-border/80">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_60%_at_50%_-15%,oklch(0.72_0.14_192/0.14),transparent_55%),linear-gradient(to_bottom,oklch(0.99_0.008_85),oklch(0.985_0.012_88))]"
          aria-hidden
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase mb-5">Escape Homes · 2026</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.35rem] text-foreground text-balance leading-[1.06] mb-6">
            Tiny home collection
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-5">
            Every model lists <strong className="text-foreground font-medium">MSRP</strong> and{" "}
            <strong className="text-foreground font-medium">your Prefabricated.co price</strong>. Open a model for a full
            product page, gallery, and one-click Stripe checkout — fixed base configurations only (no online customizer on
            Escape builds).
          </p>
          <p className="text-sm text-foreground/85 leading-relaxed max-w-2xl mx-auto border border-border/70 rounded-xl bg-card/60 px-5 py-3.5 backdrop-blur-sm">
            {ESCAPE_FACTORY_LINE} {ESCAPE_PRICE_SHIPPING_NOTE}
          </p>
          <p className="mt-8 text-sm text-muted-foreground">
            Need EarthNest customization or a site-built ADU?{" "}
            <Link href="/#earthnest-adu-lanes" className="text-primary font-medium underline-offset-4 hover:underline">
              View those lanes
            </Link>
            {" · "}
            <Link href="/#qualify" className="text-primary font-medium underline-offset-4 hover:underline">
              Book an evaluation
            </Link>
          </p>
        </div>
      </header>

      <section className="py-14 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-8">
          {ESCAPE_TINY_HOME_MODELS.map((model, i) => (
            <EscapeModelCard key={model.slug} model={model} priorityImage={i < 3} />
          ))}
        </div>
        <p className="max-w-3xl mx-auto mt-12 md:mt-14 text-center text-sm text-muted-foreground leading-relaxed px-2">
          {ESCAPE_PRICE_SHIPPING_NOTE}
        </p>
      </section>

      <EscapeTinyHomesFaq />

      <section className="py-12 px-6 border-t border-border bg-secondary/35">
        <div className="max-w-3xl mx-auto text-center text-sm text-muted-foreground leading-relaxed">
          <p className="mb-2">
            Lead times and factory options can change; confirm availability before checkout. Permitting and utilities are
            your responsibility with local guidance from our team.
          </p>
          <p>
            Catalog:{" "}
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
