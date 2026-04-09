import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-36 pb-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">About Us</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            EarthNest Florida
          </h1>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              EarthNest Florida helps Central Florida homeowners and investors add legal, permitted,
              foundation-built ADUs with a clear process from zoning through final inspection.
            </p>
            <p>
              We focus on practical outcomes: compliant design, reliable permitting, predictable
              construction, and long-term value. Every project starts with a free site evaluation so
              we can confirm feasibility before you spend time or money on plans.
            </p>
            <p>
              Service areas include Orange County, City of Orlando, Osceola County, Seminole County,
              and Lake County, with parcel-level rules verified for each property.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/#qualify"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
            >
              Get Free Evaluation
            </Link>
            <Link
              href="/adu-rules"
              className="inline-flex items-center px-6 py-3 border border-border text-foreground text-sm font-semibold rounded transition-colors hover:border-primary/40"
            >
              View ADU Rules by County
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
