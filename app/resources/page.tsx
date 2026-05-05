import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Calculator, FileCheck, Leaf, MapPinned, Sprout } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { breadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Resources | Florida ADUs, Prefab Homes & Eco Tiny Living",
  description:
    "Explore Prefabricated.co resources for Florida ADU rules, prefab backyard homes, tiny living, sustainable upgrades, investment calculators, and property feasibility.",
  alternates: { canonical: "/resources" },
}

const resources = [
  {
    icon: MapPinned,
    title: "ADU Rules by County",
    href: "/adu-rules",
    text: "Central Florida ADU rules, size limits, setbacks, owner-occupancy requirements, and jurisdiction notes.",
  },
  {
    icon: Calculator,
    title: "ADU Investment Calculator",
    href: "/adu-calculator",
    text: "Estimate monthly rent, cash flow, financing impact, cap rate, and 10-year return for Central Florida ADUs.",
  },
  {
    icon: FileCheck,
    title: "ADU Feasibility Checklist",
    href: "/adu-checklist",
    text: "Review the practical property questions that matter before starting plans, pricing, or permitting.",
  },
  {
    icon: BookOpen,
    title: "Florida Tiny Living Guide",
    href: "/florida-tiny-living-guide",
    text: "Learn the differences between ADUs, prefab homes, modular structures, and tiny homes on wheels in Florida.",
  },
  {
    icon: Leaf,
    title: "EarthNest Living Systems",
    href: "/earthnest-living-systems",
    text: "Explore the broader concept for eco-conscious homes that integrate shelter, energy, water, food, wellness, and automation.",
  },
  {
    icon: Sprout,
    title: "Eco Upgrades",
    href: "/eco-upgrades",
    text: "Review solar-ready, water, landscape, healthy material, passive cooling, and smart monitoring upgrade layers.",
  },
]

const learningTopics = [
  "Tiny homes vs ADUs vs RVs in Florida",
  "Foundation-built vs tiny homes on wheels",
  "Container home considerations in humid climates",
  "Rainwater harvesting and code-aware overflow planning",
  "Edible landscaping for small homes",
  "Non-toxic materials and mold prevention",
  "Backyard rental income and long-term value",
  "Future agrihood and eco-community concepts",
]

export default function ResourcesPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
  ])

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navigation />

      <section className="pt-36 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              Learning Center
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground text-balance leading-tight mb-6">
              Florida ADU, prefab home, and eco tiny living resources.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Start here if you are comparing ADUs, tiny homes, prefab backyard units, income
              potential, Florida rules, or EarthNest-style sustainable living systems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="group bg-background border border-border rounded-lg p-6 transition-all hover:border-primary/50 hover:shadow-sm"
                >
                  <Icon className="w-6 h-6 text-primary mb-4" />
                  <h2 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors mb-3">
                    {resource.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{resource.text}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
                Coming Learning Tracks
              </p>
              <h2 className="font-serif text-4xl text-foreground text-balance leading-tight mb-5">
                Education that keeps the vision practical.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These topics can become deeper guides over time. For now, the resources hub keeps
                the site organized while the brand expands beyond ADU-only lead generation.
              </p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
              {learningTopics.map((topic) => (
                <div key={topic} className="rounded border border-border bg-secondary px-4 py-3 text-sm text-foreground">
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
