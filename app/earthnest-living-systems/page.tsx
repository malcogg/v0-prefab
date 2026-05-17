import type { Metadata } from "next"
import Link from "next/link"
import {
  BatteryCharging,
  Droplets,
  Home,
  Leaf,
  RadioTower,
  ShieldCheck,
  Sprout,
  ThermometerSun,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { breadcrumbSchema } from "@/lib/seo"
import { ogImageMeta } from "@/lib/og"

const earthnestOg = ogImageMeta({
  variant: "default",
  title: "EarthNest Living Systems",
  subtitle: "Shelter, energy, water, food & Florida resilience",
})

export const metadata: Metadata = {
  title: "EarthNest Living Systems | Florida Eco-Friendly Prefab Homes",
  description:
    "Explore EarthNest Living Systems by Prefabricated.co: Florida-ready prefab homes and ADUs that integrate shelter, energy, water, food, wellness, and smart automation.",
  alternates: { canonical: "/earthnest-living-systems" },
  openGraph: {
    title: "EarthNest Living Systems | Florida Eco-Friendly Prefab Homes",
    description:
      "A Florida-adapted small home ecosystem for prefab ADUs, backyard homes, energy, water, food, wellness, and automation.",
    url: "/earthnest-living-systems",
    images: [earthnestOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "EarthNest Living Systems | Florida Eco-Friendly Prefab Homes",
    description:
      "Prefab ADUs and backyard homes with integrated energy, water, food, and resilience layers.",
    images: [earthnestOg.url],
  },
}

const layers = [
  {
    icon: Home,
    title: "Shelter Layer",
    text: "Prefab or site-built shells, permanent foundations where required, efficient footprints, durable materials, shading, roof design, and Florida Building Code awareness.",
  },
  {
    icon: ThermometerSun,
    title: "Florida Climate Layer",
    text: "Design decisions that account for heat, humidity, wind-driven rain, drainage, flood zones, storm season, air sealing, ventilation, and mold prevention.",
  },
  {
    icon: BatteryCharging,
    title: "Energy Layer",
    text: "Efficiency first: right-sized HVAC, LED lighting, efficient appliances, solar-ready design, battery-ready planning, critical loads, and energy monitoring.",
  },
  {
    icon: Droplets,
    title: "Water Layer",
    text: "Code-aware water strategies including rainwater capture potential, filtration, irrigation use, overflow routing, drainage planning, and water-use monitoring.",
  },
  {
    icon: Sprout,
    title: "Food + Landscape Layer",
    text: "Edible landscaping, herbs, raised beds, citrus, native plants, pollinator gardens, shade trees, composting, soil building, and smart irrigation.",
  },
  {
    icon: Leaf,
    title: "Health + Materials Layer",
    text: "Low-VOC finishes, healthier insulation options, air filtration, humidity monitoring, daylight, acoustic comfort, natural textures, and mold-aware assemblies.",
  },
  {
    icon: RadioTower,
    title: "Automation Layer",
    text: "Energy, humidity, leak, water tank, air quality, soil moisture, irrigation, storm-mode, and maintenance alerts that make sustainable living easier to manage.",
  },
]

const realism = [
  "Florida moisture is a design constraint, not a footnote. EarthNest planning prioritizes humidity control, ventilation, drying potential, and dehumidification.",
  "Rainwater systems need overflow logic. Tanks, swales, rain gardens, grading, and foundation protection must work together when storms arrive.",
  "Eco-living should not become a maintenance burden. We prioritize simple systems first, standardized packages, accessible mechanical zones, and clear owner instructions.",
  "EarthNest is designed for staged resilience: connected where practical, more independent over time, and realistic about local rules and utilities.",
]

export default function EarthNestLivingSystemsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "EarthNest Living Systems", path: "/earthnest-living-systems" },
  ])

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "EarthNest Living Systems",
    brand: { "@type": "Brand", name: "Prefabricated.co" },
    description:
      "Florida-adapted eco-conscious prefab home and ADU living systems integrating shelter, energy, water, food, wellness, and smart automation.",
    url: "https://www.prefabricated.co/earthnest-living-systems",
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navigation />

      <section className="pt-36 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              EarthNest Living Systems
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground text-balance leading-tight mb-6">
              A Florida-ready small home ecosystem.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl">
              EarthNest is the signature living system concept by Prefabricated.co. It is designed
              for people who want more than a tiny home: a healthier, smarter, more resilient way
              to live through shelter, energy, water, food, wellness, and practical automation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/qualify"
                className="inline-flex items-center px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
              >
                Start With a Property Evaluation
              </Link>
              <Link
                href="/eco-upgrades"
                className="inline-flex items-center px-7 py-3.5 border border-border text-foreground text-sm font-semibold rounded transition-colors hover:border-primary/40"
              >
                Explore Eco Upgrades
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
                System Layers
              </p>
              <h2 className="font-serif text-4xl text-foreground text-balance leading-tight mb-5">
                The whole structure works together.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Most tiny homes are just small structures. EarthNest is planned as a system where
                the home, land, sun, water cycle, food system, air quality, automation, and owner
                lifestyle support each other.
              </p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
              {layers.map((layer) => {
                const Icon = layer.icon
                return (
                  <article key={layer.title} className="bg-background border border-border rounded-lg p-6">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{layer.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{layer.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
                Florida-Specific Realism
              </p>
              <h2 className="font-serif text-4xl text-foreground text-balance leading-tight mb-5">
                Sustainable living has to survive Florida.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                EarthNest should feel inspiring, but it cannot ignore the real conditions of the
                state: humidity, stormwater, permitting, utilities, flood zones, HOAs, and ongoing
                maintenance. The goal is not a complicated off-grid fantasy. The goal is staged,
                practical resilience.
              </p>
            </div>
            <div className="space-y-4">
              {realism.map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-border bg-secondary p-5">
                  <ShieldCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.11_0_0)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Start Practical, Grow Over Time
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white text-balance leading-tight mb-5">
            EarthNest begins with ADUs and backyard homes.
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            The first step is still practical: verify what your property can legally support. From
            there, we can explore the right structure, upgrade path, and long-term living system for
            your site.
          </p>
          <Link
            href="/qualify"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
          >
            See If Your Property Qualifies
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
