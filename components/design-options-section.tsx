import Image from "next/image"
import Link from "next/link"

export function DesignOptionsSection() {
  const options = [
    {
      title: "Traditional ADU",
      subtitle: "Classic Residential Architecture",
      image: "/images/traditional-adu.jpg",
      alt: "Traditional permanent foundation ADU in Florida",
      features: [
        "Stucco or frame construction",
        "Matches primary home style",
        "Studio to 2-bedroom layouts",
        "Full kitchen & bath",
        "Standard Florida finishes",
      ],
      badge: "Most Popular",
    },
    {
      title: "Container-Inspired ADU",
      subtitle: "EarthNest Hybrid Modular Design",
      image: "/images/container-adu.jpg",
      alt: "Modern shipping container ADU on permanent foundation",
      features: [
        "20ft container or hybrid modular",
        "Spray foam insulation system",
        "Passive cooling + overhangs",
        "Indoor-outdoor integration",
        "Eco-conscious material choices",
      ],
      badge: "EarthNest Model",
    },
  ]

  return (
    <section id="design-options" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Design Options
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-4">
            Two Styles. One Standard.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you prefer a traditional residential look or an eco-forward container design,
            both are permanent, foundation-built, and fully permitted.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {options.map((option) => (
            <div
              key={option.title}
              className="group bg-background rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={option.image}
                  alt={option.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {option.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="font-serif text-2xl text-foreground mb-1">{option.title}</h3>
                <p className="text-muted-foreground text-sm mb-5">{option.subtitle}</p>
                <ul className="flex flex-col gap-2.5">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground text-sm mb-4">
            Not sure which is right for your property? We'll guide you through it.
          </p>
          <Link
            href="#qualify"
            className="inline-flex items-center px-7 py-3.5 bg-primary text-white text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
          >
            Start With a Free Evaluation
          </Link>
        </div>
      </div>
    </section>
  )
}
