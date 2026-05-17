import type { Metadata } from "next"
import Link from "next/link"
import { AlertTriangle, CheckCircle2, Home, Map, Wind } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { breadcrumbSchema } from "@/lib/seo"
import { ogImageMeta } from "@/lib/og"

const tinyGuideOg = ogImageMeta({
  variant: "tiny",
  title: "Florida tiny living guide",
  subtitle: "ADUs, prefab, THOW & storm-aware rules",
})

export const metadata: Metadata = {
  title: "Florida Tiny Living Guide | ADUs, Prefab Homes & Tiny Home Rules",
  description:
    "A practical Florida tiny living guide covering ADUs, prefab homes, tiny homes on wheels, permitting, utilities, land buying, flood zones, and storm realities.",
  alternates: { canonical: "/florida-tiny-living-guide" },
  openGraph: {
    title: "Florida Tiny Living Guide | ADUs, Prefab Homes & Tiny Home Rules",
    description:
      "ADUs vs prefab vs THOW, permitting, utilities, land, flood zones, and storm realities—plain language for Florida.",
    url: "/florida-tiny-living-guide",
    images: [tinyGuideOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Florida Tiny Living Guide | ADUs, Prefab Homes & Tiny Home Rules",
    description:
      "ADUs vs prefab vs THOW, permitting, utilities, and storm-aware Florida context.",
    images: [tinyGuideOg.url],
  },
}

const comparisons = [
  {
    title: "Foundation-Built ADUs",
    text: "A legal second dwelling on a residential property. These can support rental income and long-term value when zoning, size, setbacks, utilities, and permits line up.",
  },
  {
    title: "Prefab or Modular Homes",
    text: "Factory-assisted or modular construction methods that still need the right foundation, code path, inspections, utility plan, and local approval.",
  },
  {
    title: "Tiny Homes on Wheels",
    text: "Often treated differently from dwelling units. Many jurisdictions classify them closer to RVs, which can limit permanent residential use.",
  },
]

const checklist = [
  "Confirm county, city, and parcel jurisdiction before relying on general rules.",
  "Check zoning, setbacks, lot coverage, flood zone, wetlands, septic, utilities, and HOA restrictions.",
  "Verify whether the structure must be foundation-built to qualify as a dwelling or ADU.",
  "Plan for Florida wind, rain, humidity, drainage, and mold prevention from the beginning.",
  "Use a property-specific evaluation before buying land or ordering a prefab unit.",
]

export default function FloridaTinyLivingGuidePage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Florida Tiny Living Guide", path: "/florida-tiny-living-guide" },
  ])

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navigation />

      <section className="pt-36 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              Florida Tiny Living Guide
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground text-balance leading-tight mb-6">
              Tiny living in Florida starts with rules, climate, and land.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Tiny homes, prefab homes, modular ADUs, and backyard units can all be part of a
              smaller, smarter lifestyle. In Florida, the first question is not only what you want
              to build. It is where it can legally go, how it will handle the climate, and what
              systems it needs to operate safely.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-5">
            {comparisons.map((item) => (
              <article key={item.title} className="bg-background border border-border rounded-lg p-6">
                <Home className="w-6 h-6 text-primary mb-4" />
                <h2 className="font-serif text-2xl text-foreground mb-3">{item.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
                What To Verify
              </p>
              <h2 className="font-serif text-4xl text-foreground text-balance leading-tight mb-5">
                A Florida-ready checklist before you build or buy.
              </h2>
              <div className="space-y-4">
                {checklist.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-border bg-secondary p-8">
              <div className="flex gap-4 items-start mb-6">
                <AlertTriangle className="w-7 h-7 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-3xl text-foreground mb-3">
                    Avoid one-size-fits-all tiny home advice.
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A design that works in a dry western climate may fail in Florida humidity. A
                    unit that is popular online may not qualify as a legal dwelling on your parcel.
                    A site that looks buildable may have flood, wetland, septic, or access limits.
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <Map className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <p className="text-sm text-foreground">Rules vary by county, city, parcel, and HOA.</p>
                </div>
                <div className="flex gap-3">
                  <Wind className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <p className="text-sm text-foreground">Wind, rain, heat, and humidity shape the design.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background border-y border-border">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Florida directory</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance mb-3">
              Browse steward-led tiny dwelling campuses.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Prefabricated.co maps lakefront homesteads, Space Coast cottages, Tampa Bay escapes, Sarasota micro campuses, leasehold cottages, and more—filtered by region cluster
              and tenancy style, with outbound links you can vet yourself.
            </p>
          </div>
          <div className="shrink-0 flex flex-wrap gap-3">
            <Link
              href="/tiny-home-communities"
              className="inline-flex items-center px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded hover:bg-[oklch(0.58_0.13_192)]"
            >
              National hub · Florida spotlight
            </Link>
            <Link
              href="/tiny-home-communities/florida"
              className="inline-flex items-center px-7 py-3.5 border border-border text-foreground text-sm font-semibold rounded hover:border-primary/40"
            >
              Florida roster
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.11_0_0)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-white text-balance mb-5">
            Want to know what your property can support?
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Start with the legal and site-specific path. We review zoning, setbacks, utilities,
            and feasibility before recommending a model or upgrade package.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/adu-rules"
              className="inline-flex items-center px-7 py-3.5 border border-white/30 text-white text-sm font-semibold rounded transition-colors hover:bg-white/10"
            >
              Check Florida ADU Rules
            </Link>
            <Link
              href="/qualify"
              className="inline-flex items-center px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
            >
              Get Free Evaluation
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
