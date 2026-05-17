import Link from "next/link"
import { ArrowRight, Home, Leaf, MapPin, Sprout } from "lucide-react"

const pathways = [
  {
    icon: Home,
    title: "ADU, prefab & backyard home",
    description:
      "Foundation-built ADUs and backyard units for income, family, or flexible living—with Florida rules, estimating tools, and (when you want them) EarthNest-style permaculture upgrades.",
    primary: { label: "See if my property qualifies", href: "/qualify" },
    secondary: { label: "ADU calculator", href: "/adu-calculator" },
  },
  {
    icon: MapPin,
    title: "Tiny home communities",
    description:
      "Curated Florida villages and intentional clusters—lease models, amenities, and outbound links so you can vet operators. Same permaculture resources apply when you’re ready to grow food on your pad.",
    primary: { label: "Browse Florida communities", href: "/tiny-home-communities/florida" },
    secondary: { label: "Directory hub", href: "/tiny-home-communities" },
  },
  {
    icon: Leaf,
    title: "Regenerative homestead & food systems",
    description:
      "Zones, lunar rhythm prompts, closed-loop fertility, and EarthNest layers—optional for dabblers, central if you’re going all-in. Pick what fits; we don’t force a one-size path.",
    primary: { label: "Florida zones & homestead tool", href: "/florida-growing-zones-homestead-planning" },
    secondary: { label: "EarthNest living systems", href: "/earthnest-living-systems" },
  },
  {
    icon: Sprout,
    title: "Learn first (free)",
    description:
      "Course, rules pages, tiny-living guide, and resources hub—build context before you commit. Permaculture and ADU threads cross-link so you can deepen over time.",
    primary: { label: "Free ADU course & starter kit", href: "/free-adu-course" },
    secondary: { label: "All resources", href: "/resources" },
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
            Pick the lane that matches your goal—ADU income, a tiny community pad, or full regenerative
            homestead planning. Every path includes <span className="text-foreground font-medium">optional</span>{" "}
            permaculture education (food, water, soil, stacking functions) so you can dabble or go all-in without
            losing the thread.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
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
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 mt-auto">
                  <Link
                    href={p.primary.href}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {p.primary.label}
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                  </Link>
                  <Link
                    href={p.secondary.href}
                    className="inline-flex items-center justify-center px-5 py-3 border border-border text-foreground text-sm font-semibold rounded transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {p.secondary.label}
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Working with our team on a build or evaluation? You’ll still get curated links to rules, climate
          tools, and regenerative ideas—<Link href="/contact" className="text-primary font-medium underline-offset-4 hover:underline">contact us</Link> if you’re unsure where to start.
        </p>
      </div>
    </section>
  )
}
