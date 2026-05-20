import Link from "next/link"
import type { BlogCtaVariant } from "@/lib/blog/cta-types"

type CtaConfig = {
  title: string
  body: string
  href: string
  button: string
}

const CTA_CONFIG: Record<BlogCtaVariant, CtaConfig> = {
  "starter-kit": {
    title: "Download the Florida ADU Starter Kit",
    body: "Municipal checklists, feasibility prompts, and next-step framing—free before you talk to a builder.",
    href: "/free-adu-course#starter-kit",
    button: "Get the starter kit",
  },
  qualify: {
    title: "Get a free property evaluation",
    body: "We map jurisdiction, setbacks, and your best lane—permanent ADU, modular, or community path.",
    href: "/qualify",
    button: "Start evaluation",
  },
  communities: {
    title: "Browse Florida tiny home communities",
    body: "Stewardship-led villages and long-term-lease communities—curated directory with primary-source links.",
    href: "/tiny-home-communities/florida",
    button: "Explore communities",
  },
  "rainwater-guide": {
    title: "Get the Florida Rainwater Resilience guide",
    body: "Catchment math, first-flush staging, filtration tiers, and overflow routing for small-footprint lots.",
    href: "/blog/rainwater-harvesting-low-footprint-resilience#rainwater-guide-download",
    button: "Unlock PDF guide",
  },
  calculator: {
    title: "Run your ADU numbers",
    body: "Stress-test rent, costs, and timeline on your lot before you commit to a build path.",
    href: "/adu-calculator",
    button: "Open ADU calculator",
  },
  "zones-tool": {
    title: "Florida growing zones tool",
    body: "Zone lookup, seasonal notes, and homestead planning context for your parcel.",
    href: "/florida-growing-zones-homestead-planning",
    button: "Use the zones tool",
  },
}

export function BlogInlineCta({ variant }: { variant: BlogCtaVariant }) {
  const c = CTA_CONFIG[variant]
  return (
    <aside
      className="my-10 rounded-xl border border-primary/25 bg-gradient-to-br from-primary/5 to-secondary/40 p-6 md:p-8 not-prose"
      aria-label="Recommended next step"
    >
      <h2 className="font-serif text-xl md:text-2xl text-foreground mb-2">{c.title}</h2>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">{c.body}</p>
      <Link
        href={c.href}
        className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
      >
        {c.button}
      </Link>
    </aside>
  )
}

export function BlogEndCta({ variant }: { variant: BlogCtaVariant }) {
  const c = CTA_CONFIG[variant]
  return (
    <section className="mt-14 rounded-xl border border-primary/25 bg-gradient-to-br from-primary/5 to-secondary/40 p-6 md:p-8 text-center">
      <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">{c.title}</h2>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6">{c.body}</p>
      <Link
        href={c.href}
        className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
      >
        {c.button}
      </Link>
    </section>
  )
}
