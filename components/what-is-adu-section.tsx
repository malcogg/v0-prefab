import { CheckCircle, XCircle } from "lucide-react"

export function WhatIsAduSection() {
  const included = [
    "Foundation-built permanent structure",
    "Fully permitted by the county",
    "Florida Building Code compliant",
    "Custom-designed for your lot",
    "Site-evaluated and zoning verified",
  ]

  const notIncluded = [
    "Tiny homes on wheels",
    "RV-style or temporary units",
    "Non-permitted structures",
    "One-size-fits-all solutions",
  ]

  return (
    <section id="what-is-adu" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
          What We Build
        </p>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-6">
              What Is an ADU?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              An ADU — Accessory Dwelling Unit — is a legal second home built on your existing
              residential property. Think of it as a fully independent living unit: its own entrance,
              kitchen, bathroom, and everything a renter needs to call it home.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Every ADU we build is a{" "}
              <strong className="text-foreground">permanent, foundation-built structure</strong>{" "}
              that goes through the full county permitting process. No shortcuts. No gray areas.
            </p>
          </div>

          {/* Right: Do / Don't */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Included */}
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                What We Build
              </h3>
              <ul className="flex flex-col gap-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Included */}
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                What We Don't Do
              </h3>
              <ul className="flex flex-col gap-3">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom note */}
            <div className="sm:col-span-2 border border-border rounded-lg p-5 bg-background">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Every property is different.</strong> Before any
                work begins, we conduct a full site evaluation covering zoning, setbacks, utility
                access, and feasibility — at no cost to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
