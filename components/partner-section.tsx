import Link from "next/link"
import { HardHat, Truck, Wrench } from "lucide-react"

const partnerTypes = [
  {
    icon: HardHat,
    title: "General Contractors",
    description:
      "We're looking for licensed GCs in Central Florida who want a steady pipeline of permitted ADU builds. If you build quality work, we want to talk.",
  },
  {
    icon: Wrench,
    title: "Specialty Subcontractors",
    description:
      "Plumbers, electricians, framers, HVAC — we need reliable subs who understand residential ADU work and Florida code.",
  },
  {
    icon: Truck,
    title: "Material Suppliers",
    description:
      "We source locally when possible. If you supply lumber, spray foam, insulation, or modular components, let's explore a preferred vendor relationship.",
  },
]

export function PartnerSection() {
  return (
    <section id="partners" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              Builder & Partner Program
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-6">
              Grow With a Reliable Project Pipeline
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We're building a network of trusted contractors, subcontractors, and suppliers to
              support our growing project volume in the Orlando / Orange County area.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              If you're a builder or trade professional who does quality work, values process, and
              wants consistent project flow — we want to hear from you.
            </p>

            <div className="bg-secondary border border-border rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-foreground mb-3">What We Offer Partners</h3>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Consistent ADU project pipeline",
                  "Pre-permitted plans & clear scopes",
                  "Organized project management",
                  "On-time payment schedules",
                  "Long-term relationship focus",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="mailto:info@earthnestflorida.com"
              className="inline-flex items-center px-7 py-3.5 bg-foreground text-background text-sm font-semibold rounded transition-all hover:bg-foreground/80"
            >
              Inquire About Partnership
            </Link>
          </div>

          {/* Right: Partner types */}
          <div className="flex flex-col gap-5">
            {partnerTypes.map((type) => {
              const Icon = type.icon
              return (
                <div
                  key={type.title}
                  className="flex gap-5 items-start p-6 border border-border rounded-lg hover:border-primary/40 hover:shadow-sm transition-all bg-background"
                >
                  <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{type.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{type.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
