import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { LeadFormSection } from "@/components/lead-form-section"

type LocalLandingPageProps = {
  locationName: string
  marketContext: string[]
  governingJurisdiction: string
  quickRules: string[]
}

export function LocalLandingPage({
  locationName,
  marketContext,
  governingJurisdiction,
  quickRules,
}: LocalLandingPageProps) {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-36 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-4">
            ADU Specialists in {locationName}
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed mb-8">
            Permitted, foundation-built ADUs for {locationName} homeowners and investors. We handle
            zoning, design, permitting, and build.
          </p>
          <Link
            href="/#qualify"
            className="inline-flex items-center px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
          >
            Get a Free {locationName} Property Evaluation
          </Link>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-foreground mb-6">Local Market Context</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {marketContext.map((paragraph) => (
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
            Properties in {locationName} are governed by <strong className="text-foreground">{governingJurisdiction}</strong>.
          </p>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
            {quickRules.map((rule) => (
              <li key={rule} className="rounded border border-border bg-secondary px-4 py-3 text-sm text-foreground">
                {rule}
              </li>
            ))}
          </ul>
          <Link href="/adu-rules" className="text-primary font-medium hover:underline">
            View full county directory
          </Link>
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

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-foreground mb-4">
            See If Your {locationName} Property Qualifies
          </h2>
        </div>
        <LeadFormSection />
      </section>

      <SiteFooter />
    </main>
  )
}
