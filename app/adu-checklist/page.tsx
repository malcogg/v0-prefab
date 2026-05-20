import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ADUFeasibilityChecklist } from "@/components/adu-feasibility-checklist"
import { ADUPermittingTimeline } from "@/components/adu-permitting-timeline"
import { breadcrumbSchema } from "@/lib/seo"
import { ogImageMeta } from "@/lib/og"

const checklistOg = ogImageMeta({
  variant: "default",
  title: "Free ADU feasibility checklist",
  subtitle: "10-point parcel verification for Central Florida",
})

export const metadata: Metadata = {
  title: "Free ADU Feasibility Checklist — Central Florida | Prefabricated.co",
  description:
    "Interactive 10-point checklist: verify zoning, HOA, ISR, setbacks, septic, flood, easements, trees, parking, and rental rules before you build an ADU in Central Florida.",
  alternates: { canonical: "/adu-checklist" },
  openGraph: {
    title: "Free ADU Feasibility Checklist — Central Florida | Prefabricated.co",
    description:
      "Interactive 10-point checklist for Florida ADU parcels — zoning, HOA, ISR, utilities, flood, and more.",
    images: [checklistOg],
    url: "/adu-checklist",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free ADU Feasibility Checklist — Central Florida | Prefabricated.co",
    description:
      "Interactive 10-point checklist for Florida ADU parcels — zoning, HOA, ISR, utilities, flood, and more.",
    images: [checklistOg.url],
  },
}

export default function AduChecklistPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "ADU Checklist", path: "/adu-checklist" },
  ])

  return (
    <main className="min-h-screen">
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <section className="pt-44 pb-12 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4 text-balance">
            ADU feasibility checklist
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Use this page as a working reference before you commit to a floor plan. Check each item below (progress
            saves in this browser), then walk the permitting timeline. Pair with the{" "}
            <Link href="/adu-rules" className="text-primary font-medium hover:underline">
              county rules directory
            </Link>{" "}
            and a parcel-level review — setbacks, ISR, and HOAs change outcomes fast.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/qualify"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded hover:opacity-95"
            >
              Full project qualification
            </Link>
            <Link
              href="/free-adu-course/starter-kit"
              className="inline-flex items-center px-6 py-3 border border-border text-sm font-semibold rounded hover:bg-secondary"
            >
              Printable starter kit
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <ADUFeasibilityChecklist />
          <ADUPermittingTimeline />
          <div className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground leading-relaxed">
            <p className="font-semibold text-foreground mb-2">Disclaimer</p>
            <p>
              All ADU projects require individual site evaluation, special exception zoning approval (where
              applicable), and county permitting. Following early 2026 state legislative tracking, statewide
              &quot;by-right&quot; mandates like SB 48 passed the Senate unanimously but stalled on the House floor over
              short-term rental rules; therefore, municipal and county codes remain the absolute governing authority on
              backyard builds. PreFabricated.co does not provide guaranteed legal, financial, or tax advice.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
