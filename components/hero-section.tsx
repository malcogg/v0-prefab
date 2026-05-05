import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-adu.jpg"
          alt="Eco-conscious ADU in Central Florida backyard"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-16 w-full">
        <div className="max-w-3xl">
          <span className="inline-block text-primary text-xs font-semibold tracking-widest uppercase mb-6 bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-full text-white border-white/30">
            Florida Prefab Living Systems
          </span>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight text-balance mb-6">
            Florida Prefab ADUs, Backyard Homes & Eco-Conscious Living Systems
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl">
            We help Central Florida homeowners and investors explore legal, foundation-built ADUs
            and prefab backyard homes designed for income potential, flexible living, and
            Florida-ready sustainability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#qualify"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-base font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              See If My Property Qualifies
            </Link>
            <Link
              href="/earthnest-living-systems"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white text-base font-semibold rounded transition-all hover:bg-white/10"
            >
              Explore EarthNest Living Systems
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 flex flex-col sm:flex-row gap-6 sm:gap-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          <div className="flex-1 px-6 py-5 text-center sm:text-left">
            <p className="text-2xl font-serif font-bold text-white">$1,400–$2,500</p>
            <p className="text-sm text-white/70 mt-1">Est. ADU Monthly Rental Income</p>
          </div>
          <div className="flex-1 px-6 py-5 text-center sm:text-left">
            <p className="text-2xl font-serif font-bold text-white">Prefab + Site-Built</p>
            <p className="text-sm text-white/70 mt-1">ADUs, Backyard Homes & Flex Units</p>
          </div>
          <div className="flex-1 px-6 py-5 text-center sm:text-left">
            <p className="text-2xl font-serif font-bold text-white">Florida-Ready</p>
            <p className="text-sm text-white/70 mt-1">Code, Climate, Water & Energy Aware</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/40 animate-pulse" />
      </div>
    </section>
  )
}
