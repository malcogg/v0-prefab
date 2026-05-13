import type { Metadata } from "next"
import Link from "next/link"
import {
  Battery,
  CloudRain,
  Droplets,
  Gauge,
  Leaf,
  PlugZap,
  Sprout,
  Sun,
  Thermometer,
  Wind,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { breadcrumbSchema } from "@/lib/seo"
import { ogImageMeta } from "@/lib/og"

const ecoOg = ogImageMeta({
  variant: "homestead",
  title: "Eco upgrades for Florida ADUs & prefab homes",
  subtitle: "Solar, water, landscape, materials & resilience",
})

export const metadata: Metadata = {
  title: "Eco Upgrades for Florida ADUs & Prefab Homes | Prefabricated.co",
  description:
    "Explore solar-ready, battery-ready, water, landscape, healthy material, passive cooling, stormwater, and automation upgrades for Florida ADUs and prefab homes.",
  alternates: { canonical: "/eco-upgrades" },
  openGraph: {
    title: "Eco Upgrades for Florida ADUs & Prefab Homes | Prefabricated.co",
    description:
      "Solar-ready, battery-ready, water, landscape, healthy materials, passive cooling, stormwater, and automation upgrades.",
    url: "/eco-upgrades",
    images: [ecoOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eco Upgrades for Florida ADUs & Prefab Homes | Prefabricated.co",
    description:
      "Solar-ready, battery-ready, water, landscape, and resilience upgrades for Florida homes.",
    images: [ecoOg.url],
  },
}

const upgrades = [
  {
    icon: Sun,
    title: "Solar-Ready Design",
    items: ["Solar orientation review", "Conduit planning", "Roof and equipment zone awareness", "Future panel readiness"],
  },
  {
    icon: Battery,
    title: "Battery + Backup Planning",
    items: ["Battery-ready layout", "Critical load planning", "Backup power options", "Outage resilience strategy"],
  },
  {
    icon: Droplets,
    title: "Water Systems",
    items: ["Rainwater capture potential", "Cistern planning", "Filtration options", "Water-use monitoring"],
  },
  {
    icon: CloudRain,
    title: "Stormwater + Drainage",
    items: ["Overflow routing", "Swales and rain gardens", "Erosion prevention", "Foundation protection"],
  },
  {
    icon: Sprout,
    title: "Food + Landscape",
    items: ["Herbs and raised beds", "Citrus and edible plants", "Native pollinator gardens", "Smart irrigation"],
  },
  {
    icon: Leaf,
    title: "Healthy Materials",
    items: ["Low-VOC finishes", "Moisture-aware assemblies", "Natural textures", "Mold prevention priorities"],
  },
  {
    icon: Wind,
    title: "Passive Cooling",
    items: ["Shade planning", "Window placement", "Ventilation strategy", "Heat and humidity control"],
  },
  {
    icon: Gauge,
    title: "Smart Monitoring",
    items: ["Humidity sensors", "Leak detection", "Air quality monitoring", "Maintenance reminders"],
  },
  {
    icon: PlugZap,
    title: "Automation Dashboard",
    items: ["Energy monitoring", "Water alerts", "Irrigation controls", "Storm mode readiness"],
  },
]

export default function EcoUpgradesPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Eco Upgrades", path: "/eco-upgrades" },
  ])

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navigation />

      <section className="pt-36 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              Eco Upgrades
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground text-balance leading-tight mb-6">
              Optional system layers for Florida ADUs and prefab homes.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Eco-conscious living works best when upgrades are practical, code-aware, and phased.
              These layers can be considered for ADUs, backyard homes, and future EarthNest models
              depending on your jurisdiction, property conditions, utility setup, budget, and
              maintenance capacity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {upgrades.map((upgrade) => {
              const Icon = upgrade.icon
              return (
                <article key={upgrade.title} className="bg-background border border-border rounded-lg p-6">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-serif text-2xl text-foreground mb-4">{upgrade.title}</h2>
                  <ul className="space-y-2.5">
                    {upgrade.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-lg border border-border bg-secondary p-8 md:p-10">
            <div className="flex gap-4 items-start">
              <Thermometer className="w-7 h-7 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="font-serif text-3xl text-foreground mb-4">
                  The upgrade path should stay simple.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  A home with too many systems can become overwhelming. We recommend starting with
                  passive design, moisture control, drainage, and energy efficiency before adding
                  more independence. Solar, water, food, and automation systems should be selected
                  because they solve a real site problem, not because they sound futuristic.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/earthnest-living-systems"
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
                  >
                    Learn About EarthNest
                  </Link>
                  <Link
                    href="/#qualify"
                    className="inline-flex items-center px-6 py-3 border border-border text-foreground text-sm font-semibold rounded transition-colors hover:border-primary/40"
                  >
                    Request Property Evaluation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
