import Image from "next/image"
import Link from "next/link"
import { TrendingUp, Home, DollarSign } from "lucide-react"

export function OpportunitySection() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Rental Income",
      value: "$1,200–$2,500/mo",
      description:
        "Generate consistent monthly income from your existing property without selling or refinancing.",
    },
    {
      icon: TrendingUp,
      title: "Property Value",
      value: "+15–30% Typical Increase",
      description:
        "A permitted ADU is a permanent asset that increases appraised value and marketability.",
    },
    {
      icon: Home,
      title: "Dual-Income Model",
      value: "2 Rentals, 1 Lot",
      description:
        "Live in one unit, rent the other — or rent both. Build long-term wealth on the property you already own.",
    },
  ]

  return (
    <section id="opportunity" className="py-24 bg-[oklch(0.11_0_0)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              The Opportunity
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white text-balance leading-tight mb-6">
              Your Property Can Work Harder for You
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-12">
              Central Florida's rental market is strong. If you own property in Orange County or the
              greater Orlando area, you likely have an untapped asset sitting in your backyard. We
              help you unlock it — legally, efficiently, and profitably.
            </p>

            <div className="flex flex-col gap-8">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div key={benefit.title} className="flex gap-5 items-start">
                    <div className="w-10 h-10 rounded-md bg-primary/15 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-3 mb-1">
                        <h3 className="font-semibold text-white">{benefit.title}</h3>
                        <span className="text-primary text-sm font-semibold">{benefit.value}</span>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Link
              href="#qualify"
              className="inline-flex items-center px-7 py-3.5 bg-primary text-white text-sm font-semibold rounded mt-10 transition-all hover:bg-[oklch(0.58_0.13_192)]"
            >
              Check If Your Property Qualifies
            </Link>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden aspect-[4/5]">
              <Image
                src="/images/income-property.jpg"
                alt="Florida property with main house and ADU generating dual income"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-lg p-5 shadow-xl border border-border max-w-[200px]">
              <p className="text-2xl font-serif font-bold text-foreground">$2,500</p>
              <p className="text-xs text-muted-foreground mt-1">Potential monthly rental — ADU alone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
