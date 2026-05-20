import Link from "next/link"
import { Calculator, CheckCircle2 } from "lucide-react"

export function PlanningToolsSection() {
  return (
    <section id="planning-tools" className="py-20 bg-background scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-lg border border-border bg-secondary p-8 md:p-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <div>
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
                Planning Tools
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-5">
                Run the numbers before you build.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Use our ADU investment calculator to stress-test rent, monthly cash flow, financing,
                and a conservative 10-year outlook for your Central Florida neighborhood—not a quote,
                but a grounded starting point.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/adu-calculator"
                  className="inline-flex items-center px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
                >
                  Open ADU Calculator
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center px-7 py-3.5 border border-border text-foreground text-sm font-semibold rounded transition-colors hover:border-primary/40"
                >
                  Browse All Resources
                </Link>
              </div>
            </div>

            <div className="bg-background border border-border rounded-lg p-6">
              <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                <Calculator className="w-5 h-5 text-primary" aria-hidden />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">What the calculator covers</h3>
              <ul className="space-y-3">
                {[
                  "County-specific rent bands for studio, 1-bed, and 2-bed ADUs",
                  "Monthly cash flow with vacancy, taxes, insurance, and loan scenarios",
                  "Cap rate, cash-on-cash return, and conservative equity estimates",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
