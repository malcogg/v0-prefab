import Link from "next/link"
import { BookOpen, CheckCircle2 } from "lucide-react"

export function FreeCourseSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-lg border border-border bg-secondary p-8 md:p-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <div>
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
                Free Course
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-5">
                Learn how to plan your first Florida ADU.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A practical, no-pressure guide to property eligibility, cost, design, permitting,
                rental income, and EarthNest-style sustainable upgrades.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/free-adu-course#starter-kit"
                  className="inline-flex items-center px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
                >
                  Download the Starter Kit
                </Link>
                <Link
                  href="/#qualify"
                  className="inline-flex items-center px-7 py-3.5 border border-border text-foreground text-sm font-semibold rounded transition-colors hover:border-primary/40"
                >
                  See If My Property Qualifies
                </Link>
              </div>
            </div>

            <div className="bg-background border border-border rounded-lg p-6">
              <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">What you&apos;ll learn</h3>
              <ul className="space-y-3">
                {[
                  "How Florida ADUs differ from tiny homes and RVs",
                  "What makes a property worth evaluating",
                  "How to think about rent, cost, financing, and risk",
                  "How design choices affect code, comfort, and sustainability",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
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
