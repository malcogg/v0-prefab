"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { EscapeModelCard } from "@/components/escape-model-card"
import { ESCAPE_CATALOG_PATH, ESCAPE_PRICE_SHIPPING_NOTE, featuredEscapeModels } from "@/lib/escape-tiny-homes-data"

export function EscapeProductLanesSection() {
  const models = featuredEscapeModels()

  return (
    <section
      id="escape-product-lanes"
      className="relative py-20 md:py-28 overflow-hidden border-y border-border/50"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-5%,oklch(0.72_0.12_192/0.09),transparent_58%),linear-gradient(180deg,oklch(0.992_0.009_85)_0%,oklch(0.985_0.011_88)_45%,oklch(0.98_0.012_90)_100%)]"
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-12 mb-12 md:mb-14">
          <div className="max-w-2xl">
            <p className="text-primary text-xs font-semibold tracking-[0.26em] uppercase mb-4">Escape Homes · Product lanes</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.2rem] text-foreground text-balance leading-[1.06] mb-5">
              2026 Escape Tiny Homes — our primary build partner.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Factory-built, RVIA-certified units from a recognized leader in tiny living. Eight flagship models below; the
              complete sixteen-model lineup — pricing, galleries, FAQs, and how to get on the notify list — lives on our
              dedicated catalog page.
            </p>
          </div>
          <Link
            href={ESCAPE_CATALOG_PATH}
            className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary bg-primary px-8 py-4 text-sm font-semibold tracking-wide text-primary-foreground shadow-[0_4px_20px_oklch(0.55_0.13_192/0.25)] transition-all hover:bg-[oklch(0.58_0.13_192)] hover:border-[oklch(0.58_0.13_192)] hover:shadow-[0_6px_24px_oklch(0.55_0.13_192/0.3)]"
          >
            See all Escape tiny homes
            <ChevronRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="md:hidden -mx-2 px-2">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [scrollbar-width:thin] [-webkit-overflow-scrolling:touch]">
            {models.map((m) => (
              <div key={m.slug} className="min-w-[min(100%,300px)] max-w-[300px] snap-center shrink-0">
                <EscapeModelCard model={m} />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {models.map((m, i) => (
            <EscapeModelCard key={m.slug} model={m} priorityImage={i < 2} />
          ))}
        </div>

        <p className="mt-10 md:mt-12 text-center text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto px-1">
          {ESCAPE_PRICE_SHIPPING_NOTE}
        </p>

        <div className="mt-8 text-center">
          <Link
            href={ESCAPE_CATALOG_PATH}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Browse the complete Escape 2026 collection
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
