import Link from "next/link"
import { MapPin, Rows3 } from "lucide-react"

export function TinyHomeDirectorySection() {
  return (
    <section id="tiny-home-directory" className="py-20 bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-lg border border-border bg-background p-8 md:p-10 shadow-sm">
          <div className="grid lg:grid-cols-[1fr_minmax(0,320px)] gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
                New resource
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-5">
                Looking for Florida tiny home communities?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-2">
                We curate stewardship-led villages and parks—from lakefront clusters to Tampa Bay escapes—with
                region filters and official links so you can research on your own terms. No pricing tables; just
                transparent summaries.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nationwide coverage is expanding; Florida is live today.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/tiny-home-communities/florida"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <MapPin className="w-4 h-4" aria-hidden />
                  Browse Florida listings
                </Link>
                <Link
                  href="/tiny-home-communities"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground text-sm font-semibold rounded transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Rows3 className="w-4 h-4" aria-hidden />
                  Tiny home directory hub
                </Link>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-secondary p-6">
              <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                <MapPin className="w-5 h-5 text-primary" aria-hidden />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">Inside the directory</h3>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <li className="flex gap-2.5">
                  <span className="font-semibold text-foreground shrink-0">Regions</span>
                  Orlando, Tampa Bay, Space Coast, Sarasota, Oxford, Osceola, and more—filterable clusters.
                </li>
                <li className="flex gap-2.5">
                  <span className="font-semibold text-foreground shrink-0">Tenancy</span>
                  Lease land, pads, cottages, rentals—labeled so rules feel less mysterious.
                </li>
                <li className="flex gap-2.5">
                  <span className="font-semibold text-foreground shrink-0">Official links</span>
                  Community sites open in a new tab; always verify zoning and occupancy with advisors before you
                  commit.
                </li>
              </ul>
              <Link
                href="/florida-tiny-living-guide"
                className="inline-flex mt-6 text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                Pair with our Florida tiny living guide →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
