import Link from "next/link"

const steps = [
  {
    number: "01",
    title: "Property Evaluation",
    description:
      "We visit your property and assess lot size, access, drainage, utility hookups, and overall build viability — free of charge.",
  },
  {
    number: "02",
    title: "Zoning & Feasibility",
    description:
      "We review your property's zoning classification, confirm homestead eligibility, verify the special exception approval requirement, check setbacks and lot size minimums, confirm ADU size limits based on your primary home's square footage, and verify HOA restrictions if applicable — before any design work begins.",
  },
  {
    number: "03",
    title: "Special Exception Filing",
    description:
      "For most Orange County residential properties, we prepare and submit the Special Exception application to Orange County's Planning Division on your behalf. This is the required zoning approval step before a building permit can be applied for. We manage the timeline and follow-up so you don't have to.",
  },
  {
    number: "04",
    title: "Design",
    description:
      "You choose your layout and style. We work with our design team to produce engineered plans tailored to your property and preferences.",
  },
  {
    number: "05",
    title: "Permitting",
    description:
      "We submit all required documents to Orange County and manage the full permit process. No surprises. No shortcuts.",
  },
  {
    number: "06",
    title: "Build",
    description:
      "Our vetted construction team builds your ADU to Florida Building Code standards with quality materials and clear timelines.",
  },
  {
    number: "07",
    title: "Rent or Sell",
    description:
      "Once your ADU passes final inspection, you're ready to rent it out — or use it to increase your property's market value.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Sticky left header */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              Our Process
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-6">
              From Concept to Keys — 7 Steps
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every project follows the same structured approach. You always know where you are in
              the process and what comes next.
            </p>
            <Link
              href="/qualify"
              className="inline-flex items-center px-7 py-3.5 bg-primary text-white text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
            >
              Start Step 1 — Free Evaluation
            </Link>
          </div>

          {/* Steps grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative p-7 border border-border rounded-lg bg-background hover:border-primary/40 hover:shadow-sm transition-all group"
              >
                {/* Step number */}
                <span className="font-serif text-5xl font-bold text-border group-hover:text-primary/20 transition-colors absolute top-5 right-5 leading-none select-none">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <div className="w-8 h-px bg-primary mb-5" />
                  <h3 className="font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
