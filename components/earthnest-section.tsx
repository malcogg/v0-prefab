import Image from "next/image"
import Link from "next/link"
import { Wind, Thermometer, Shield, Leaf } from "lucide-react"

const features = [
  {
    icon: Thermometer,
    title: "Florida Climate Adaptation",
    description:
      "Designed specifically for Central Florida's heat and humidity with passive cooling strategies, deep overhangs, and optimized ventilation.",
  },
  {
    icon: Shield,
    title: "Spray Foam Insulation",
    description:
      "Closed-cell spray foam provides superior thermal resistance, moisture resistance, and structural integrity in the Florida climate.",
  },
  {
    icon: Wind,
    title: "Energy-Efficient Systems",
    description:
      "Mini-split HVAC systems, LED lighting, and energy-conscious appliances keep operating costs low without sacrificing comfort.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious Materials",
    description:
      "Moisture and pest-resistant materials selected for durability and sustainability in Florida's demanding environment.",
  },
]

export function EarthNestSection() {
  return (
    <section id="earthnest" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden aspect-[4/5]">
              <Image
                src="/images/earthnest-model.jpg"
                alt="EarthNest eco-conscious hybrid container ADU model"
                fill
                className="object-cover"
              />
            </div>
            {/* Label badge */}
            <div className="absolute top-5 left-5 bg-background border border-border rounded-md px-4 py-2">
              <p className="text-xs font-semibold text-primary tracking-widest uppercase">
                EarthNest Florida
              </p>
              <p className="text-xs text-muted-foreground">20ft Container + Hybrid Modular</p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              The EarthNest Model
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-4">
              Eco-Conscious Design Built for Florida
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              The EarthNest line includes two container-based flex units and a fully custom
              site-built ADU — each engineered specifically for Central Florida's climate. Our
              Traditional Site-Built ADU is our primary permitted rental product. Our 20ft and 40ft
              container units serve as guesthouses, home offices, and flex-use spaces, or as
              permitted ADUs in qualifying jurisdictions outside Orange County unincorporated. Your
              free site evaluation determines exactly what's permittable on your property.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Every EarthNest unit is mounted on a permanent foundation, fully permitted, and built
              to Florida Building Code. Units are engineered to Florida Building Code wind load
              requirements for Central Florida. We emphasize{" "}
              <strong className="text-foreground">efficiency, sustainability, and cost-conscious design</strong>{" "}
              — not exaggerated claims.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Link
              href="#qualify"
              className="inline-flex items-center px-7 py-3.5 bg-primary text-white text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
            >
              Explore the EarthNest for Your Property
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
