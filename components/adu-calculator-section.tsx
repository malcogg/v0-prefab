"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

type AduType = "studio" | "one-bedroom" | "two-bedroom"

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value)
}

export function ADUCalculatorSection() {
  const [aduType, setAduType] = useState<AduType>("one-bedroom")
  const [buildCost, setBuildCost] = useState(165000)
  const [monthlyRent, setMonthlyRent] = useState(1800)
  const [homeValue, setHomeValue] = useState(350000)

  const results = useMemo(() => {
    const annualIncome = monthlyRent * 12
    const tenYearGross = annualIncome * 10
    const equityGain = buildCost * 0.65
    const newPropertyValue = homeValue + equityGain
    const paybackYears = buildCost / annualIncome

    return {
      annualIncome,
      tenYearGross,
      equityGain,
      newPropertyValue,
      paybackYears,
    }
  }, [buildCost, monthlyRent, homeValue])

  const aduLabels: Record<AduType, string> = {
    studio: "Traditional Site-Built Studio",
    "one-bedroom": "Traditional Site-Built 1-Bedroom",
    "two-bedroom": "Traditional Site-Built 2-Bedroom",
  }

  return (
    <section className="py-24 bg-background" id="adu-calculator">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            ADU Calculator
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-4">
            Estimate Rental Income and Property Impact
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Build a quick financial snapshot in under 60 seconds with realistic assumptions for
            Central Florida ADUs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-secondary rounded-lg p-6 border border-border">
            <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              ADU Type
            </label>
            <div className="grid sm:grid-cols-3 gap-2 mt-2 mb-6">
              {(Object.keys(aduLabels) as AduType[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setAduType(key)}
                  className={`px-3 py-2.5 rounded border text-sm font-medium text-left transition-colors ${
                    aduType === key
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-foreground hover:border-primary/50"
                  }`}
                >
                  {aduLabels[key]}
                </button>
              ))}
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-foreground">Estimated Build Cost</label>
                  <span className="text-sm font-semibold text-primary">{formatCurrency(buildCost)}</span>
                </div>
                <input
                  type="range"
                  min={130000}
                  max={220000}
                  step={1000}
                  value={buildCost}
                  onChange={(e) => setBuildCost(Number(e.target.value))}
                  className="w-full"
                  aria-label="Estimated Build Cost"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-foreground">
                    Estimated Monthly Rent
                  </label>
                  <span className="text-sm font-semibold text-primary">
                    {formatCurrency(monthlyRent)}
                  </span>
                </div>
                <input
                  type="range"
                  min={1200}
                  max={2500}
                  step={50}
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(Number(e.target.value))}
                  className="w-full"
                  aria-label="Estimated Monthly Rent"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-foreground">
                    Your Primary Home's Estimated Value
                  </label>
                  <span className="text-sm font-semibold text-primary">{formatCurrency(homeValue)}</span>
                </div>
                <input
                  type="range"
                  min={200000}
                  max={800000}
                  step={5000}
                  value={homeValue}
                  onChange={(e) => setHomeValue(Number(e.target.value))}
                  className="w-full"
                  aria-label="Primary Home Value"
                />
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-6 border border-border">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-background rounded-lg border border-border p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  Estimated Annual Rental Income
                </p>
                <p className="font-serif text-2xl text-foreground mt-2">
                  {formatCurrency(results.annualIncome)}
                </p>
              </div>
              <div className="bg-background rounded-lg border border-border p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">10-Year Gross Income</p>
                <p className="font-serif text-2xl text-foreground mt-2">
                  {formatCurrency(results.tenYearGross)}
                </p>
              </div>
              <div className="bg-background rounded-lg border border-border p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  Estimated Equity Gain at Completion
                </p>
                <p className="font-serif text-2xl text-foreground mt-2">
                  {formatCurrency(results.equityGain)}
                </p>
              </div>
              <div className="bg-background rounded-lg border border-border p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  Estimated New Property Value
                </p>
                <p className="font-serif text-2xl text-foreground mt-2">
                  {formatCurrency(results.newPropertyValue)}
                </p>
              </div>
            </div>

            <div className="mt-4 bg-background rounded-lg border border-border p-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Simple Payback Period</p>
              <p className="font-serif text-2xl text-foreground mt-2">
                {results.paybackYears.toFixed(1)} years
              </p>
            </div>

            <p className="text-xs text-muted-foreground mt-5 leading-relaxed">
              All figures are illustrative estimates only and are not guaranteed. Rental income
              varies based on market conditions, unit size, finish level, and location. Equity gain
              is not guaranteed and depends on appraisal methodology and market conditions. EarthNest
              Florida does not provide financial or investment advice.
            </p>

            <div className="mt-6 border-t border-border pt-6">
              <h3 className="font-serif text-2xl text-foreground mb-3">
                Ready to see what your specific property can support?
              </h3>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#qualify"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
                >
                  Get My Free Property Evaluation
                </Link>
                <Link
                  href="/adu-rules"
                  className="inline-flex items-center px-6 py-3 border border-border text-foreground text-sm font-semibold rounded transition-colors hover:border-primary/40"
                >
                  Compare County Rules
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
