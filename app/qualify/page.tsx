import type { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { CheckCircle2 } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { QualifyMultiStepForm } from "@/components/qualify/qualify-multi-step-form"
import { breadcrumbSchema } from "@/lib/seo"
import { ogImageMeta } from "@/lib/og"

const qualifyOg = ogImageMeta({
  variant: "default",
  title: "Qualify your project",
  subtitle: "Tiny homes, ADUs, EarthNest — personalized next steps",
})

export const metadata: Metadata = {
  title: "Qualify Your Project | Prefabricated.co",
  description:
    "Multi-step qualification for Florida and nationwide buyers: tiny homes (Escape), ADUs, EarthNest cabins, and village placements — with personalized recommendations.",
  alternates: { canonical: "/qualify" },
  openGraph: {
    title: "Qualify Your Project | Prefabricated.co",
    description:
      "Tell us about your property, budget, and goals. We will send a tailored snapshot and follow up with zoning-aware guidance.",
    url: "/qualify",
    images: [qualifyOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qualify Your Project | Prefabricated.co",
    description: "Tiny homes, ADUs, EarthNest — get a personalized project snapshot.",
    images: [qualifyOg.url],
  },
}

export default function QualifyPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Qualify", path: "/qualify" },
  ])

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navigation />
      <section className="relative border-b border-border bg-[oklch(0.985_0.012_88)] pt-28 pb-14 md:pt-32 md:pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Project qualification</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground text-balance max-w-3xl leading-tight mb-5">
            Find the right path — tiny home, ADU, or EarthNest
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-8">
            Answer a few guided questions. We combine your location, budget, and site context with our Escape 2026 lineup
            and Florida-siting experience, then email you a concise snapshot you can keep.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-foreground/85">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
              Escape · EarthNest · ADU pathways
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
              Florida zoning & flood-aware prompts
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
              Works for out-of-state explorers too
            </span>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Prefer something shorter first?{" "}
            <Link href="/#get-in-touch" className="text-primary font-medium hover:underline">
              Use the homepage quick form
            </Link>
            .
          </p>
        </div>
      </section>
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-2xl mx-auto px-6">
          <Suspense
            fallback={
              <div className="rounded-2xl border border-border bg-card p-8 text-sm text-muted-foreground text-center">
                Loading qualification form…
              </div>
            }
          >
            <QualifyMultiStepForm />
          </Suspense>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
