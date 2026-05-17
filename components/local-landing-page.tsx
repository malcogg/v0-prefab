import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { HomeInterestSection } from "@/components/home-interest-section"
import { ADUCalculatorSection } from "@/components/adu-calculator-section"
import { ADUPermittingTimeline } from "@/components/adu-permitting-timeline"
import { ADUPreflightChecklist } from "@/components/adu-preflight-checklist"
import type { LocalSeoPage } from "@/lib/local-pages-data"
import {
  getDisplayIntroParagraphs,
  getRegulatoryFootnoteForPage,
  getRegulatoryQuickRules,
  ORLANDO_OVERLAY_CITATION,
  ORLANDO_TRADITIONAL_CITY_OVERLAY,
  shouldShowOrlandoOverlay,
} from "@/lib/local-adu-regulatory"
import { breadcrumbSchema, SITE_URL } from "@/lib/seo"

type LocalLandingPageProps = { page: LocalSeoPage }

export function LocalLandingPage({ page }: LocalLandingPageProps) {
  const countyGeo: Record<string, { lat: number; lng: number }> = {
    "Orange County": { lat: 28.5383, lng: -81.3792 },
    "Seminole County": { lat: 28.7117, lng: -81.2081 },
    "Osceola County": { lat: 28.0633, lng: -81.1467 },
    "Lake County": { lat: 28.7617, lng: -81.7129 },
    "Polk County": { lat: 28.0395, lng: -81.9498 },
  }
  const breadcrumb = page.isHub
    ? breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: `ADU in ${page.locationName}`, path: `/${page.slug}` },
      ])
    : breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: `ADU in ${page.county}`, path: `/${page.hubSlug}` },
        { name: `ADU Specialists in ${page.locationName}`, path: `/${page.slug}` },
      ])

  const localServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `ADU Construction and Permitting in ${page.locationName}, FL`,
    description: `PreFabricated.co provides ADU design, permitting, and construction services in ${page.locationName}, ${page.county}, Florida. We handle zoning verification, special exception filing, and full build management.`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: {
      "@type": "City",
      name: page.locationName,
      addressRegion: "FL",
      addressCountry: "US",
    },
    url: `${SITE_URL}/${page.slug}`,
  }
  const geo = countyGeo[page.county] ?? countyGeo["Orange County"]
  const localPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `ADU Specialists in ${page.locationName}, FL`,
    url: `${SITE_URL}/${page.slug}`,
    description: page.metaDescription,
    about: {
      "@type": "Service",
      name: "Accessory Dwelling Unit Design, Permitting and Construction",
      areaServed: {
        "@type": "City",
        name: page.locationName,
        addressRegion: "FL",
      },
    },
    spatialCoverage: {
      "@type": "Place",
      name: `${page.locationName}, Florida`,
      geo: {
        "@type": "GeoCoordinates",
        latitude: geo.lat,
        longitude: geo.lng,
      },
    },
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localPageSchema) }}
      />
      <Navigation />

      <section className="pt-36 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-4">
            ADU Specialists in {page.locationName}
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed mb-8">
            Permitted, foundation-built ADUs for {page.locationName} homeowners and investors. We handle
            zoning, design, permitting, and build.
          </p>
          <Link
            href="/qualify"
            className="inline-flex items-center px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
          >
            Get a Free {page.locationName} Property Evaluation
          </Link>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-lg border border-primary/30 bg-primary/10 p-5 mb-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
              Jurisdiction Callout
            </p>
            <p className="text-sm text-foreground leading-relaxed">
              Properties in {page.locationName} are governed by {page.jurisdiction}
            </p>
          </div>
          {page.isFlagged && page.warning && (
            <div className="rounded-lg border border-amber-300 bg-amber-50 p-5 mb-8">
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>WARNING:</strong> {page.warning}
              </p>
            </div>
          )}
          <h2 className="font-serif text-3xl text-foreground mb-6">Local Market Context</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {getDisplayIntroParagraphs(page).map((paragraph, i) => (
              <p key={`${page.slug}-ctx-${i}`} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-foreground mb-4">Quick Rules Summary</h2>
          <p className="text-muted-foreground mb-6">
            Properties in {page.locationName} are governed by{" "}
            <strong className="text-foreground">{page.county}</strong>. See full details on{" "}
            <Link href="/adu-rules" className="text-primary hover:underline">
              ADU Rules by County
            </Link>
            .
          </p>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
            {getRegulatoryQuickRules(page).map((rule) => (
              <li key={rule} className="rounded border border-border bg-secondary px-4 py-3 text-sm text-foreground">
                {rule}
              </li>
            ))}
          </ul>
          {(() => {
            const foot = getRegulatoryFootnoteForPage(page)
            if (!foot) return null
            return (
              <div
                className="mb-8 rounded-xl border border-border/90 bg-secondary/40 px-4 py-4 text-xs text-muted-foreground leading-relaxed"
                role="note"
                aria-label="Regulatory summary and compliance reference"
              >
                <p className="text-sm text-foreground/90 mb-3">{foot.summaryLine}</p>
                <p>
                  <span className="font-semibold text-foreground/80">Reference:</span> {foot.citation}
                </p>
                <p className="mt-1.5">
                  <span className="font-semibold text-foreground/80">Last reviewed (site copy):</span>{" "}
                  {foot.lastVerifiedDisplay}{" "}
                  <span className="text-muted-foreground/80">({foot.lastVerifiedRaw})</span>
                  <span className="text-muted-foreground/60 mx-1.5">·</span>
                  <span className="font-semibold text-foreground/80">Status:</span> {foot.statusLabel}
                </p>
              </div>
            )
          })()}
          {shouldShowOrlandoOverlay(page) ? (
            <div className="rounded-xl border border-primary/25 bg-primary/5 px-4 py-4 text-sm text-foreground/90 leading-relaxed mb-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">City of Orlando overlay</p>
              <p>{ORLANDO_TRADITIONAL_CITY_OVERLAY}</p>
              <p className="text-[11px] text-muted-foreground mt-3 pt-3 border-t border-primary/15 leading-relaxed">
                <span className="font-semibold text-foreground/75">Reference:</span> {ORLANDO_OVERLAY_CITATION}
              </p>
            </div>
          ) : null}
          <ADUPreflightChecklist />
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/adu-rules" className="text-primary font-medium hover:underline">
              View full county directory
            </Link>
            {page.hubSlug !== page.slug && (
              <Link href={`/${page.hubSlug}`} className="text-primary font-medium hover:underline">
                View {page.county} hub page
              </Link>
            )}
            <Link href="/qualify" className="text-primary font-medium hover:underline">
              Go to homepage evaluation form
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-foreground mb-6">ADU Model Recommendation</h2>
          <div className="max-w-xl rounded-lg border border-primary/30 bg-background p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Traditional Site-Built ADU
            </p>
            <h3 className="font-serif text-2xl text-foreground mb-3">Primary Permitted ADU Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground mb-5">
              <li>Size range: Studio, 1BR, or 2BR (up to local code limits)</li>
              <li>Installed cost: $200K+ (traditional site-built; container models from $50K–$155K+)</li>
              <li>Estimated monthly rent: $1,400 – $2,500/mo</li>
            </ul>
            <Link
              href="/qualify"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
            >
              Check My Property
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <ADUPermittingTimeline />
        </div>
      </section>

      <ADUCalculatorSection />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-foreground mb-4">
            See If Your {page.locationName} Property Qualifies
          </h2>
        </div>
        <HomeInterestSection />
      </section>

      <SiteFooter />
    </main>
  )
}
