"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { EscapeModelCard } from "@/components/escape-model-card"
import { featuredEscapeModels } from "@/lib/escape-tiny-homes-data"

export function EscapeProductLanesSection() {
  const models = featuredEscapeModels()

  return (
    <section id="escape-product-lanes" className="py-20 md:py-28 bg-[oklch(0.985_0.012_85)] border-y border-border/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 md:mb-14">
          <div className="max-w-2xl">
            <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-4">Product lanes · Escape Homes</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-foreground text-balance leading-[1.08] mb-5">
              2026 Escape Tiny Homes — our primary build partner.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Factory-built, design-forward units from one of the most recognized names in tiny living. Featured below:
              eight flagship models; the full 16-model lineup lives on our dedicated tiny homes page with pricing,
              galleries, and secure Stripe checkout.
            </p>
          </div>
          <Link
            href="/tiny-homes"
            className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[oklch(0.58_0.13_192)] hover:border-[oklch(0.58_0.13_192)]"
          >
            See all Escape tiny homes
            <ChevronRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="md:hidden -mx-2 px-2">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth scrollbar-thin">
            {models.map((m) => (
              <div key={m.slug} className="min-w-[min(100%,320px)] snap-center shrink-0">
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

        <div className="mt-12 text-center">
          <Link
            href="/tiny-homes"
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
