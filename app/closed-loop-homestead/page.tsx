import type { Metadata } from "next"
import Link from "next/link"
import { Recycle, Sprout } from "lucide-react"

import { ClosedLoopCardExplorer } from "@/components/closed-loop-card-explorer"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import {
  CLOSED_LOOP_CYCLE_STEPS,
  CLOSED_LOOP_FOOD_CARDS,
  CLOSED_LOOP_HOME_SYSTEM_CARDS,
  CLOSED_LOOP_INTRO,
  CLOSED_LOOP_MASTER_CHECKLIST,
} from "@/lib/closed-loop-guide-data"
import { ogImageMeta } from "@/lib/og"
import { breadcrumbSchema, SITE_URL } from "@/lib/seo"

const PAGE_PATH = "/closed-loop-homestead"
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

const closedLoopOg = ogImageMeta({
  variant: "homestead",
  title: "Closed-loop homestead guide",
  subtitle: "Food loops, energy & water cards",
})

export const metadata: Metadata = {
  title: "Closed-Loop Homestead Guide — Food, Energy & Water | Prefabricated.co",
  description:
    "Explore closed-loop homesteading for small Florida sites: interactive food cards, house-to-land systems (solar, water, compost, poultry), and a printable-style checklist—educational, code-aware framing.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Closed-Loop Homestead Guide",
    description:
      "Kitchen-to-soil nutrient loops plus every major home system—solar, batteries, rain, greywater, HVAC, and vertical food—explained with simple cards.",
    url: PAGE_PATH,
    type: "article",
    images: [closedLoopOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Closed-Loop Homestead Guide | Prefabricated.co",
    description:
      "Food fertility strip + house systems map: click any card for loops and practical next steps.",
    images: [closedLoopOg.url],
  },
}

export default function ClosedLoopHomesteadPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Closed-loop homestead guide", path: PAGE_PATH },
  ])

  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navigation />

      <article className="pt-32 sm:pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
            Regenerative planning
          </p>
          <h1 className="mb-5 max-w-3xl font-serif text-4xl leading-tight text-foreground text-balance md:text-5xl">
            {CLOSED_LOOP_INTRO.title}
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{CLOSED_LOOP_INTRO.dek}</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs font-medium text-muted-foreground sm:text-sm">
            {CLOSED_LOOP_CYCLE_STEPS.flatMap((step, i) => (
              <span key={step} className="flex items-center gap-2">
                {i > 0 ? (
                  <span className="text-primary/70" aria-hidden>
                    →
                  </span>
                ) : null}
                <span className="rounded-full border border-border/90 bg-secondary/50 px-2.5 py-1 text-foreground/90">
                  {step}
                </span>
              </span>
            ))}
          </div>
          <p className="mt-4 max-w-2xl text-xs text-muted-foreground">
            This is a planning rhythm, not a guarantee—always match birds, greywater, and storage to local codes,
            setbacks, and neighbor context.
          </p>

          <section className="mt-14 rounded-xl border border-border bg-[oklch(0.99_0.01_85)] p-5 shadow-sm md:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[oklch(0.9_0.07_155)] text-[oklch(0.42_0.11_155)]"
                aria-hidden
              >
                <Sprout className="h-7 w-7" strokeWidth={1.75} />
              </div>
              <div className="min-w-0 flex-1 space-y-3">
                <h2 className="font-serif text-xl text-foreground md:text-2xl">{CLOSED_LOOP_INTRO.foodSectionTitle}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{CLOSED_LOOP_INTRO.foodSectionBlurb}</p>
              </div>
            </div>
            <div className="mt-6">
              <ClosedLoopCardExplorer cards={CLOSED_LOOP_FOOD_CARDS} ariaLabel="Food and fertility showcase crops" />
            </div>
            <p className="mt-6 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
              Kitchen scraps and veggie trimmings feed chickens and ducks. Manure and litter go to compost. Compost feeds
              your beds. Leaves become mulch or duck forage. Overripe fruit routes to birds or worms. Castings return to
              the soil. Weeds become chop-and-drop or animal feed—nothing has to leave the edge of your plan.
            </p>
          </section>

          <section className="mt-12 rounded-xl border border-border bg-[oklch(0.99_0.01_85)] p-5 shadow-sm md:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary"
                aria-hidden
              >
                <Recycle className="h-7 w-7" strokeWidth={1.75} />
              </div>
              <div className="min-w-0 flex-1 space-y-3">
                <h2 className="font-serif text-xl text-foreground md:text-2xl">{CLOSED_LOOP_INTRO.systemsSectionTitle}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{CLOSED_LOOP_INTRO.systemsSectionBlurb}</p>
              </div>
            </div>
            <div className="mt-6">
              <ClosedLoopCardExplorer
                cards={CLOSED_LOOP_HOME_SYSTEM_CARDS}
                ariaLabel="House and site closed-loop systems"
              />
            </div>
          </section>

          <section className="mt-12 rounded-lg border border-border bg-secondary/30 p-6 md:p-8">
            <h2 className="font-serif text-2xl text-foreground">Master checklist (quick scan)</h2>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              Use this as a conversation starter for your design team, homestead partner, or co-op cluster—adapt to your
              parcel and budget.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {CLOSED_LOOP_MASTER_CHECKLIST.map((block) => (
                <div key={block.title} className="rounded-lg border border-border/80 bg-background/90 p-5">
                  <h3 className="font-serif text-lg text-foreground">{block.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {block.items.map((line) => (
                      <li key={line} className="flex gap-2 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/florida-growing-zones-homestead-planning"
              className="inline-flex items-center px-7 py-3.5 bg-primary text-sm font-semibold text-primary-foreground rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
            >
              Run the Florida zone &amp; lunar tool
            </Link>
            <Link
              href="/earthnest-living-systems"
              className="inline-flex items-center px-7 py-3.5 border border-border text-sm font-semibold text-foreground rounded transition-colors hover:border-primary/40"
            >
              Explore EarthNest layers
            </Link>
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            Canonical URL for sharing:{" "}
            <a href={PAGE_URL} className="text-primary underline-offset-4 hover:underline">
              {PAGE_URL.replace(/^https?:\/\//, "")}
            </a>
          </p>
        </div>
      </article>

      <SiteFooter />
    </main>
  )
}
