import Image from "next/image"
import Link from "next/link"

import { CONTAINER_HOME_MODELS } from "@/lib/sales-catalog"

/**
 * EarthNest container hybrids + traditional ADU — secondary to Escape on the homepage.
 * Customization and detailed permitting notes remain on these lanes.
 */
export function EarthNestSecondarySection() {
  return (
    <section id="earthnest-adu-lanes" className="py-20 bg-secondary/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
            Also available — custom EarthNest &amp; site-built ADUs
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance mb-4">
            Foundation-first container hybrids and fully custom backyard ADUs
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            These lanes include <strong className="text-foreground">layout and finish customization</strong> after your
            evaluation. Escape 2026 models above ship as curated base configurations; earthworks, utilities, and code
            packages are scoped per property.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CONTAINER_HOME_MODELS.map((model) => (
            <div
              key={model.title}
              className={`rounded-xl border bg-background overflow-hidden flex flex-col ${
                model.highlight ? "border-primary ring-1 ring-primary/20" : "border-border"
              }`}
            >
              <div className="relative aspect-[16/10]">
                <Image src={model.image} alt={model.alt} fill className="object-cover" />
                <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wide bg-background/90 px-2 py-1 rounded">
                  {model.badge}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif text-lg mb-2">{model.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">{model.bestFor}</p>
                <p className="text-sm font-semibold text-primary mb-3">{model.installed} installed band</p>
                <Link
                  href="/qualify"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Request evaluation →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-10 max-w-2xl mx-auto">
          Escape tiny home checkout is available on each model page. EarthNest and traditional ADU projects typically
          begin with a site evaluation and custom proposal.
        </p>
      </div>
    </section>
  )
}
