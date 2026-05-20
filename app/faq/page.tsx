import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFaqAnswer } from "@/components/site-faq-answer"
import { SiteFooter } from "@/components/site-footer"
import { buildSiteFaqPageSchema, SITE_FAQ_CATEGORIES } from "@/lib/site-faq-data"
import { breadcrumbSchema } from "@/lib/seo"
import { ogImageMeta } from "@/lib/og"

const faqOg = ogImageMeta({ variant: "faq" })

const PAGE_TITLE = "Florida ADU, Tiny Home & Homestead FAQ | Prefabricated.co"
const PAGE_DESCRIPTION =
  "Short answers on Florida ADUs, tiny homes, Escape units, zoning, permitting, returns, EarthNest systems, and communities—with links to tools, rules, and guides."

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/faq" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "/faq",
    images: [faqOg],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [faqOg.url],
  },
}

export default function FaqPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
  ])
  const faqSchema = buildSiteFaqPageSchema()

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />
      <section className="pt-44 pb-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            Quick answers for Central Florida homeowners—income, zoning, build types, EarthNest systems, and
            communities. Each answer links to the guide or tool with full depth.
          </p>

          <div className="space-y-10">
            {SITE_FAQ_CATEGORIES.map((group) => (
              <section key={group.category} aria-labelledby={`faq-${group.category.replace(/\s+/g, "-").toLowerCase()}`}>
                <h2
                  id={`faq-${group.category.replace(/\s+/g, "-").toLowerCase()}`}
                  className="text-xs font-semibold tracking-widest uppercase text-primary mb-4"
                >
                  {group.category}
                </h2>
                <div className="divide-y divide-border border-y border-border">
                  {group.items.map((item) => (
                    <details key={item.q} className="group py-4">
                      <summary className="list-none cursor-pointer font-semibold text-foreground flex items-start justify-between gap-4">
                        <span>{item.q}</span>
                        <span className="text-muted-foreground group-open:rotate-45 transition-transform shrink-0">
                          +
                        </span>
                      </summary>
                      <SiteFaqAnswer segments={item.a} />
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            <div className="p-6 rounded-lg border border-border bg-secondary">
              <h3 className="font-serif text-xl text-foreground mb-2">Property-specific questions</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Zoning, setbacks, and feasibility for your exact parcel.
              </p>
              <Link
                href="/qualify"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
              >
                Schedule a Free Evaluation
              </Link>
            </div>
            <div className="p-6 rounded-lg border border-border bg-secondary">
              <h3 className="font-serif text-xl text-foreground mb-2">Planning on your own timeline</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Starter Kit checklists, calculator, and county rules—no call required.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/free-adu-course#starter-kit"
                  className="inline-flex items-center px-4 py-2.5 border border-border text-sm font-semibold rounded hover:border-primary/40"
                >
                  Starter Kit
                </Link>
                <Link
                  href="/adu-calculator"
                  className="inline-flex items-center px-4 py-2.5 border border-border text-sm font-semibold rounded hover:border-primary/40"
                >
                  ADU Calculator
                </Link>
                <Link
                  href="/adu-rules"
                  className="inline-flex items-center px-4 py-2.5 border border-border text-sm font-semibold rounded hover:border-primary/40"
                >
                  ADU Rules
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
