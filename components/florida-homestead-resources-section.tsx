import Link from "next/link"
import { MapPin, Sprout, ThermometerSun } from "lucide-react"

export function FloridaHomesteadResourcesSection() {
  return (
    <section id="florida-homestead" className="py-20 bg-secondary/80 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              Florida permaculture &amp; homestead planning
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-5">
              Plan year-round food systems for your tiny home or regenerative cluster.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Use our interactive USDA zone finder, frost-date primer, current Moon rhythm prompts,
              Florida-wide hardiness table, and zone-aware homestead report tailored to humidity, heat,
              and storm-season realities—ideal if you are co-developing edible landscaping around compact
              dwellings.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/florida-growing-zones-homestead-planning"
                className="inline-flex items-center px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
              >
                Open the planning tool
              </Link>
              <Link
                href="/earthnest-living-systems"
                className="inline-flex items-center px-7 py-3.5 border border-border text-foreground text-sm font-semibold rounded transition-colors hover:border-primary/40"
              >
                Explore EarthNest food layers
              </Link>
            </div>
          </div>

          <div className="bg-background border border-border rounded-lg p-6 md:p-8 space-y-5">
            <div className="flex gap-4">
              <div className="h-11 w-11 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <ThermometerSun className="h-5 w-5 text-primary" aria-hidden />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-1">Zone-aware calendars</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Frost windows, heat-management cues, and succession planting prompts tuned to each
                  Florida band—from Panhandle 8b through Keys 11b.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-11 w-11 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <Sprout className="h-5 w-5 text-primary" aria-hidden />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-1">Closed-loop inspiration</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Practical loops that fit small footprints: compost, poultry tractoring, vertical
                  climbers, and calorie-dense tubers for resilient communities.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-11 w-11 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" aria-hidden />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-1">ZIP &amp; celestial rhythm</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Estimate hardiness by ZIP or city cue, then layer waxing/waning planting notes and
                  sign traditions between frost math and compost loops—always verify USDA ARS maps for
                  perennials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
