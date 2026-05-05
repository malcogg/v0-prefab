import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { breadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "About Prefabricated.co | Florida ADUs, Prefab Homes & EarthNest",
  description:
    "Learn how Prefabricated.co is growing from Central Florida ADU development into EarthNest Living Systems for prefab homes, tiny living, and sustainable Florida property use.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ])

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Navigation />
      <section className="pt-36 pb-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">About Us</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Prefabricated.co
          </h1>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Prefabricated.co began with a practical question: how can Florida homeowners use
              their property more intelligently? The first answer is ADUs — legal,
              foundation-built backyard homes that can create rental income, family flexibility,
              and long-term value.
            </p>
            <p>
              That ADU path remains the practical entry point. We focus on compliant design,
              reliable permitting, predictable construction, and parcel-specific feasibility before
              you spend time or money on plans.
            </p>
            <p>
              The larger vision goes beyond ADUs. We are building toward EarthNest Living Systems:
              Florida-adapted prefab homes that integrate shelter, energy, water, food, wellness,
              and technology into a smarter way of living.
            </p>
            <p>
              Our mission is to help people build smaller, live healthier, reduce long-term costs,
              and create more resilient homes and communities. Service areas include Orange County,
              City of Orlando, Osceola County, Seminole County, Lake County, Polk County, and the
              surrounding Central Florida region, with parcel-level rules verified for each property.
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
              href="/earthnest-living-systems"
              className="inline-flex items-center px-6 py-3 border border-border text-foreground text-sm font-semibold rounded transition-colors hover:border-primary/40"
            >
              Explore EarthNest Living Systems
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
