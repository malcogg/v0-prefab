"use client"

import Image from "next/image"
import Link from "next/link"

export function DesignOptionsSection() {
  const models = [
    {
      title: "EarthNest 20ft Studio",
      badge: "Flexible Use Unit — Guesthouse or Home Office",
      image: "/images/container-adu.jpg",
      alt: "20ft container studio ADU on permanent foundation",
      size: "~160 sq ft",
      layout: "Studio / Flex Space",
      unitCost: "$25,000",
      installed: "$80K – $120K+",
      rent: null,
      timeline: "Fastest",
      bestFor:
        "Private guesthouse for family, home office, detached studio, or hobby space — not intended as a rentable ADU in Orange County (unincorporated).",
      disclaimer:
        "At ~160 sq ft, this unit does not meet Orange County's 400 sq ft minimum for a permitted ADU. It is best suited for non-rental uses such as a guesthouse, office, or studio. Eligible uses vary by jurisdiction — we'll confirm during your free site evaluation.",
      features: [
        "20ft container hybrid / modular",
        "Concrete slab foundation",
        "Engineered to Florida Building Code wind load requirements for Central Florida",
        "Closed-cell spray foam insulation",
        "Full kitchen & bath included",
      ],
    },
    {
      title: "EarthNest 40ft 1-Bedroom",
      badge: "EarthNest 40ft Expanded Studio",
      image: "/images/earthnest-model.jpg",
      alt: "40ft container one-bedroom ADU in Florida",
      size: "~320 sq ft",
      layout: "Studio + Sleeping Area",
      unitCost: "$45,000",
      installed: "$120K – $175K+",
      rent: null,
      timeline: "Fast",
      bestFor:
        "Guesthouse, extended family suite, home office with sleeping quarters — may qualify as a permitted ADU in select jurisdictions outside Orange County unincorporated (verified during free site evaluation).",
      disclaimer:
        "At ~320 sq ft, this unit falls below Orange County's 400 sq ft ADU minimum. Eligible as a permitted ADU in some surrounding jurisdictions. Your free site evaluation will confirm what's possible on your specific property.",
      features: [
        "40ft container hybrid / modular",
        "Concrete slab foundation",
        "Engineered to Florida Building Code wind load requirements for Central Florida",
        "Closed-cell spray foam insulation",
        "Separate bedroom + living area",
      ],
    },
    {
      title: "Traditional Site-Built ADU",
      badge: "Fully Custom",
      image: "/images/traditional-adu.jpg",
      alt: "Traditional site-built ADU matching primary home",
      size: "Custom",
      layout: "Studio, 1BR, or 2BR",
      unitCost: "N/A",
      installed: "$130K – $200K+",
      rent: "$1,400 – $2,500/mo",
      timeline: "Longest",
      bestFor:
        "Permitted rentable ADU in Orange County and surrounding jurisdictions, seamless aesthetic match, larger units, maximum appraisal value.",
      features: [
        "Traditional stick-built or CMU block",
        "Concrete slab foundation",
        "Engineered to Florida Building Code wind load requirements for Central Florida",
        "Matches primary home style",
        "Fully custom design & layout",
      ],
      highlight: true,
    },
  ]

  return (
    <section id="design-options" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Our ADU Models
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-4">
            Three Models. Clear Pricing. Your Choice.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We don't do vague quotes. Here are our three defined ADU models with transparent pricing
            so you can make informed decisions before we even speak.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {models.map((model) => (
            <div
              key={model.title}
              className={`group bg-background rounded-lg overflow-hidden border transition-colors flex flex-col ${
                model.highlight
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={model.image}
                  alt={model.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                      model.highlight
                        ? "bg-primary text-primary-foreground"
                        : "bg-foreground/90 text-background"
                    }`}
                  >
                    {model.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-xl text-foreground mb-4">{model.title}</h3>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 mb-5 text-sm">
                  <div>
                    <span className="text-muted-foreground text-xs uppercase tracking-wide">Size</span>
                    <p className="font-semibold text-foreground">{model.size}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-xs uppercase tracking-wide">Layout</span>
                    <p className="font-semibold text-foreground">{model.layout}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-xs uppercase tracking-wide">Installed</span>
                    <p className="font-semibold text-primary">{model.installed}</p>
                  </div>
                  {model.rent ? (
                    <div>
                      <span className="text-muted-foreground text-xs uppercase tracking-wide">Rent</span>
                      <p className="font-semibold text-foreground">{model.rent}</p>
                    </div>
                  ) : (
                    <div>
                      <span className="text-muted-foreground text-xs uppercase tracking-wide">
                        Rent
                      </span>
                      <p className="font-semibold text-foreground">Not listed for this model</p>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2 mb-5 flex-1">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Best For */}
                <div className="pt-4 border-t border-border">
                  <span className="text-muted-foreground text-xs uppercase tracking-wide">Best For</span>
                  <p className="text-sm text-foreground mt-1">{model.bestFor}</p>
                </div>
                {model.disclaimer && (
                  <div className="mt-4 rounded-md border border-amber-300/70 bg-amber-50 p-3">
                    <p className="text-xs text-amber-900 leading-relaxed">
                      <strong>WARNING:</strong> {model.disclaimer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground text-sm mb-4">
            Not sure which model fits your property? We'll help you decide.
          </p>
          <Link
            href="#qualify"
            className="inline-flex items-center px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
          >
            Start With a Free Evaluation
          </Link>
        </div>
      </div>
    </section>
  )
}
