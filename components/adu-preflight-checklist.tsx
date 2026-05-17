const ITEMS = [
  {
    title: "HOA & deed covenants",
    body: "Ensure private subdivision bylaws do not explicitly prohibit secondary detached dwellings. (Private HOAs override municipal zoning allowances.)",
  },
  {
    title: "Impervious surface ratio (ISR)",
    body: "Confirm your lot’s current rooflines, driveways, patios, and pool decks leave enough uncovered land allowance to support your desired ADU footprint.",
  },
  {
    title: "Utility architecture & septic",
    body: "Verify municipal sewer main access, or whether your septic tank and drain field have capacity for additional structural plumbing.",
  },
  {
    title: "Canopy & engineering obstructions",
    body: "Map protected historic or specimen tree root zones so foundation clearing and crane or delivery pathways stay feasible.",
  },
] as const

export function ADUPreflightChecklist() {
  return (
    <div className="rounded-2xl border border-border bg-[oklch(0.992_0.006_88)] p-6 md:p-8">
      <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">Pre-flight property verification</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
        Before selecting an ADU model or blueprint size, every Central Florida parcel should pass four local filters.
        This is a planning guide, not a zoning determination.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {ITEMS.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-border/80 bg-card p-4 md:p-5 shadow-[0_1px_2px_oklch(0_0_0/0.03)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary mb-2">{item.title}</p>
            <p className="text-sm text-foreground/85 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
