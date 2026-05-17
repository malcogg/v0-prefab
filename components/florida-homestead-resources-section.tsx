import Link from "next/link"
import { Sprout, ThermometerSun } from "lucide-react"

export function FloridaHomesteadResourcesSection() {
  return (
    <section id="florida-homestead" className="py-20 bg-secondary/80 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-10 md:mb-12">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Florida permaculture &amp; homestead planning
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-5">
            Plan year-round food systems for your tiny home or regenerative cluster.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The regenerative layer pairs with housing choices—whether you park an Escape unit,
            lease in a village, or build an ADU—so food, water, and soil decisions stay tied to your
            site reality and county constraints.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-background p-6 md:p-8 flex flex-col shadow-sm">
            <div className="h-11 w-11 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mb-4">
              <ThermometerSun className="h-5 w-5 text-primary" aria-hidden />
            </div>
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">Zone-aware calendars</h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
              Frost windows, heat-management cues, and succession planting prompts tuned to each Florida
              band—from Panhandle 8b through Keys 11b.
            </p>
            <Link
              href="/florida-growing-zones-homestead-planning"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)] w-full sm:w-auto"
            >
              Open the planning tool
            </Link>
          </div>

          <div className="rounded-xl border border-border bg-background p-6 md:p-8 flex flex-col shadow-sm">
            <div className="h-11 w-11 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mb-4">
              <Sprout className="h-5 w-5 text-primary" aria-hidden />
            </div>
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">Closed-loop inspiration</h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
              Practical loops that fit small footprints: compost, poultry tractoring, vertical climbers,
              and calorie-dense tubers for resilient communities.
            </p>
            <Link
              href="/closed-loop-homestead"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-border text-foreground text-sm font-semibold rounded transition-colors hover:border-primary/40 w-full sm:w-auto"
            >
              Open the full closed-loop guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
