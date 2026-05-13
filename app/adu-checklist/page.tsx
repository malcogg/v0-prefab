import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { breadcrumbSchema } from "@/lib/seo"
import { ogImageMeta } from "@/lib/og"

const checklistOg = ogImageMeta({
  variant: "default",
  title: "Free ADU feasibility checklist",
  subtitle: "10 things to verify in Central Florida",
})

export const metadata: Metadata = {
  title: "Free ADU Feasibility Checklist — Central Florida | EarthNest Florida",
  description:
    "10 things to verify before you build an ADU in Central Florida. Download the free checklist and see if your property qualifies.",
  alternates: { canonical: "/adu-checklist" },
  openGraph: {
    title: "Free ADU Feasibility Checklist — Central Florida | EarthNest Florida",
    description:
      "10 things to verify before you build an ADU in Central Florida. Download the free checklist and see if your property qualifies.",
    images: [checklistOg],
    url: "/adu-checklist",
  },
  twitter: {
    card: "summary_large_image",
    site: "@earthnestfl",
    title: "Free ADU Feasibility Checklist — Central Florida | EarthNest Florida",
    description:
      "10 things to verify before you build an ADU in Central Florida. Download the free checklist and see if your property qualifies.",
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
      <section className="pt-36 pb-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-4xl text-foreground mb-4">ADU Feasibility Checklist</h1>
          <p className="text-muted-foreground mb-6">
            This page is reserved for the checklist lead magnet experience.
          </p>
          <Link href="/#qualify" className="text-primary hover:underline">
            Start free property evaluation
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
