const PHASES = [
  {
    badge: "Phase 1",
    title: "Zoning & site feasibility (weeks 1–2)",
    body: "Parcel-level ISR mapping, setback analysis, utility location verification, and local code alignment.",
  },
  {
    badge: "Phase 2",
    title: "Architectural engineering & approvals (weeks 3–6)",
    body: "HOA architectural review (where applicable), Florida Building Code structural engineering, and site development planning.",
  },
  {
    badge: "Phase 3",
    title: "County permit intake & build (weeks 7–16+)",
    body: "County plan review, structural permits, foundation, plumbing rough-ins, and turnkey installation.",
  },
] as const

export function ADUPermittingTimeline() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">The path to permitting</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-3xl">
        We underwrite and manage your project through a structured execution pipeline to keep the build code-compliant and on budget.
      </p>
      <div className="grid md:grid-cols-3 gap-5">
        {PHASES.map((phase) => (
          <div
            key={phase.badge}
            className="flex flex-col h-full rounded-xl border border-border/90 bg-secondary/40 p-5"
          >
            <span className="inline-flex w-fit rounded-full bg-primary/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3">
              {phase.badge}
            </span>
            <h4 className="font-semibold text-foreground text-sm leading-snug mb-2">{phase.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed flex-1">{phase.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
