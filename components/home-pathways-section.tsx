import Link from "next/link"
import { ArrowRight, Home, Leaf, MapPin } from "lucide-react"

import { SiteSearchForm } from "@/components/site-search-form"

const pathways = [
  {
    icon: Home,
    title: "ADU, prefab & backyard home",
    description:
      "Foundation-built ADUs and backyard units for income, family, or flexible living—with Florida rules, estimating tools, and optional EarthNest-style permaculture when you want more than housing.",
    cta: { label: "See if my property qualifies", href: "/qualify?source=home_hero_adu" },
  },
  {
    icon: MapPin,
    title: "Tiny home communities",
    description:
      "Curated Florida villages and parks—regions, tenancy models, and official links so you can research operators on your terms before you commit.",
    cta: { label: "Browse Florida communities", href: "/tiny-home-communities/florida" },
  },
  {
    icon: Leaf,
    title: "Regenerative homestead & food systems",
    description:
      "Zone-aware planning, lunar rhythm prompts, and closed-loop fertility—optional for dabblers, central if you are stacking food, water, and soil on a small footprint.",
    cta: { label: "Florida zones & homestead tool", href: "/florida-growing-zones-homestead-planning" },
  },
]

export function HomePathwaysSection() {
  return (
    <section
      id="choose-path"
      className="scroll-mt-28 border-b border-border bg-secondary/60 py-16 md:py-20"
      aria-labelledby="choose-path-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-10 md:mb-12">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
            Start here
          </p>
          <h2
            id="choose-path-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance leading-tight mb-4"
          >
            What brought you here today?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Tiny homes and communities lead our discovery layer—then we route you to{" "}
            <span className="text-foreground font-medium">ADUs, rules, calculators,</span> and{" "}
            <span className="text-foreground font-medium">regenerative tools</span> so you can go as
            deep as you want without losing the thread.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pathways.map((p) => {
            const Icon = p.icon
            return (
              <article
                key={p.title}
                className="flex flex-col rounded-xl border border-border bg-background p-6 md:p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 mb-4">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">{p.description}</p>
                <Link
                  href={p.cta.href}
                  className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {p.cta.label}
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
              </article>
            )
          })}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Prefer to read first?{" "}
          <Link href="/free-adu-course" className="text-primary font-medium underline-offset-4 hover:underline">
            Free ADU course
          </Link>
          {" · "}
          <Link href="/resources" className="text-primary font-medium underline-offset-4 hover:underline">
            Resources hub
          </Link>
          {" · "}
          <Link href="/contact" className="text-primary font-medium underline-offset-4 hover:underline">
            Contact
          </Link>
        </p>

        <div className="mt-10 pt-10 border-t border-border/80">
          <p className="text-center text-sm font-medium text-foreground mb-4">
            Or search the whole site
          </p>
          <SiteSearchForm idPrefix="home-pathways" centered />
          <p className="mt-3 text-center text-xs text-muted-foreground">
            ADUs, communities, Escape models, guides, and blog articles
          </p>
        </div>
      </div>
    </section>
  )
}
