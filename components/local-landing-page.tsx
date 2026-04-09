import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { LeadFormSection } from "@/components/lead-form-section"
import { ADUCalculatorSection } from "@/components/adu-calculator-section"
import type { LocalSeoPage } from "@/lib/local-pages-data"

type LocalLandingPageProps = { page: LocalSeoPage }

export function LocalLandingPage({ page }: LocalLandingPageProps) {
  return (
    <main className="min-h-screen">
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
            href="/#qualify"
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
            {page.introParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-muted-foreground leading-relaxed">
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
            {page.quickRules.map((rule) => (
              <li key={rule} className="rounded border border-border bg-secondary px-4 py-3 text-sm text-foreground">
                {rule}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/adu-rules" className="text-primary font-medium hover:underline">
              View full county directory
            </Link>
            {page.hubSlug !== page.slug && (
              <Link href={`/${page.hubSlug}`} className="text-primary font-medium hover:underline">
                View {page.county} hub page
              </Link>
            )}
            <Link href="/#qualify" className="text-primary font-medium hover:underline">
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
              <li>Installed cost: $130K – $200K+</li>
              <li>Estimated monthly rent: $1,400 – $2,500/mo</li>
            </ul>
            <Link
              href="/#qualify"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
            >
              Check My Property
            </Link>
          </div>
        </div>
      </section>

      <ADUCalculatorSection />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-foreground mb-4">
            See If Your {page.locationName} Property Qualifies
          </h2>
        </div>
        <LeadFormSection />
      </section>

      <SiteFooter />
    </main>
  )
}
