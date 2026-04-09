"use client"

import { useState } from "react"
import { TrendingUp, Home, DollarSign } from "lucide-react"

type Scenario = "model2" | "model3"

export function DealBreakdownSection() {
  const [activeScenario, setActiveScenario] = useState<Scenario>("model3")

  const scenarios = {
    model2: {
      title: "Model 2 — 40ft 1-Bedroom",
      badge: "Qualifying Jurisdictions Only",
      lines: [
        { label: "Property Purchase", value: "$260,000" },
        { label: "Container Unit (40ft)", value: "$45,000" },
        { label: "Installation + Permits + Utilities + Finishing", value: "$75,000 – $130,000" },
      ],
      totals: [
        { label: "Total Project Cost", value: "$380,000 – $435,000", highlight: false },
        { label: "Estimated After Value", value: "$460,000 – $500,000", highlight: false },
        { label: "Estimated Equity Gain", value: "$80,000 – $120,000+", highlight: true },
      ],
      rent: {
        adu: "$1,200 – $1,800/mo",
        combined: "$2,400 – $4,000/mo",
      },
    },
    model3: {
      title: "Model — Traditional Site-Built ADU (1BR)",
      badge: "Most Popular Permitted Option",
      lines: [
        { label: "Property Purchase", value: "$260,000" },
        { label: "ADU Construction (installed, permitted)", value: "$130,000 – $200,000" },
      ],
      totals: [
        { label: "Total Project Cost", value: "$390,000 – $460,000", highlight: false },
        { label: "Estimated After Value", value: "$460,000 – $530,000", highlight: false },
        { label: "Estimated Equity Gain", value: "$70,000 – $130,000+", highlight: true },
      ],
      rent: {
        adu: "$1,400 – $2,500/mo",
        combined: "$2,600 – $4,500/mo",
      },
    },
  }

  const active = scenarios[activeScenario]

  return (
    <section id="deal-breakdown" className="py-24 bg-[oklch(0.11_0_0)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Investor Deal Breakdown
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white text-balance leading-tight mb-4">
            See the Full Picture Before You Build
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Real numbers. Real scenarios. Understand exactly what an ADU investment looks like in
            Central Florida.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white/5 rounded-lg p-1">
            {(["model3", "model2"] as Scenario[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveScenario(key)}
                className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all ${
                  activeScenario === key
                    ? "bg-primary text-primary-foreground"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {key === "model3" ? "Traditional Site-Built ADU" : "40ft 1-Bedroom"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Deal Stack */}
          <div className="bg-white/5 backdrop-blur rounded-lg p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="font-serif text-2xl text-white">{active.title}</h3>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/20 text-primary">
                {active.badge}
              </span>
            </div>

            {/* Line items */}
            <div className="flex flex-col gap-3 mb-6">
              {active.lines.map((line) => (
                <div
                  key={line.label}
                  className="flex justify-between items-center py-3 border-b border-white/10"
                >
                  <span className="text-white/70 text-sm">{line.label}</span>
                  <span className="font-semibold text-white">{line.value}</span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/20">
              {active.totals.map((total) => (
                <div
                  key={total.label}
                  className={`flex justify-between items-center py-2 ${
                    total.highlight ? "bg-primary/10 -mx-4 px-4 rounded" : ""
                  }`}
                >
                  <span className={`text-sm ${total.highlight ? "text-primary font-semibold" : "text-white/70"}`}>
                    {total.label}
                  </span>
                  <span className={`font-bold ${total.highlight ? "text-primary text-lg" : "text-white"}`}>
                    {total.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Rental Income Cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-white/5 backdrop-blur rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary/15 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wide">ADU Monthly Rent</p>
                  <p className="font-serif text-2xl text-white">{active.rent.adu}</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 backdrop-blur rounded-lg p-6 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary/20 flex items-center justify-center">
                  <Home className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-primary/80 text-xs uppercase tracking-wide">Combined Rental Potential</p>
                  <p className="font-serif text-2xl text-primary">{active.rent.combined}</p>
                </div>
              </div>
              <p className="text-white/60 text-sm">
                Rent both units — the main house plus the ADU — for maximum monthly cash flow.
              </p>
            </div>

            {activeScenario === "model2" && (
              <div className="bg-amber-400/10 border border-amber-300/30 rounded-lg p-4">
                <p className="text-amber-100 text-sm leading-relaxed">
                  The 40ft unit does not qualify as a permitted ADU in Orange County
                  (unincorporated). This breakdown reflects potential use in qualifying
                  jurisdictions only. Confirm eligibility during your free site evaluation.
                </p>
              </div>
            )}

            <div className="bg-white/5 backdrop-blur rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-primary/15 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wide">Forced Appreciation</p>
                  <p className="font-serif text-xl text-white">Instant Equity on Completion</p>
                </div>
              </div>
              <p className="text-white/60 text-sm mt-3">
                A permitted ADU adds permanent value. You build equity the day the project completes.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 p-5 bg-white/5 rounded-lg border border-white/10">
          <p className="text-white/50 text-xs leading-relaxed">
            <strong className="text-white/70">Disclaimer:</strong> All figures are illustrative estimates only
            and are not guaranteed. Container unit price reflects unfinished unit cost only. Total installed
            cost includes site preparation, foundation, permitting, utility connections, insulation, HVAC, and
            interior finishing. Final project costs vary based on site conditions, local jurisdiction
            requirements, and design selections. Rental income projections reflect current Orlando-area market
            conditions and are not guaranteed. EarthNest Florida does not provide legal, financial, or tax advice.
          </p>
        </div>
      </div>
    </section>
  )
}
