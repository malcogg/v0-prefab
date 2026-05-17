import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 sm:pt-36">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-adu.jpg"
          alt="Florida tiny home and backyard living — prefab discovery"
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

          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6 max-w-xl">
            We help Central Florida homeowners and investors explore legal, foundation-built ADUs
            and prefab backyard homes—plus curated tiny home communities and optional EarthNest-style
            food, water, and soil systems. Dabble with one upgrade or stack the full loop.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#choose-path"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-foreground text-base font-semibold rounded transition-all hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Choose your path
            </Link>
            <Link
              href="/qualify?source=home_hero_adu"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-base font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              See if my property qualifies
            </Link>
            <Link
              href="/earthnest-living-systems"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white text-base font-semibold rounded transition-all hover:bg-white/10"
            >
              Explore EarthNest
            </Link>
          </div>

          <p className="mt-6 text-sm text-white/65 max-w-xl">
            <Link href="/tiny-home-communities/florida" className="text-white font-medium underline-offset-4 hover:underline">
              Tiny communities (Florida)
            </Link>
            {" · "}
            <Link href="/florida-growing-zones-homestead-planning" className="text-white font-medium underline-offset-4 hover:underline">
              Zones &amp; homestead tool
            </Link>
            {" · "}
            <Link href="/resources" className="text-white font-medium underline-offset-4 hover:underline">
              Resources
            </Link>
          </p>
        </div>

        {/* Metric cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur-sm text-center sm:text-left">
            <p className="text-2xl font-serif font-bold text-white tabular-nums">$1,400 – $2,500/mo</p>
            <p className="text-sm text-white/70 mt-1">Est. ADU Monthly Rental Income</p>
          </div>
          <div className="rounded-xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur-sm text-center sm:text-left">
            <p className="text-2xl font-serif font-bold text-white">Prefab + Site-Built</p>
            <p className="text-sm text-white/70 mt-1">ADUs, Backyard Homes &amp; Flex Units</p>
          </div>
          <div className="rounded-xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur-sm text-center sm:text-left">
            <p className="text-2xl font-serif font-bold text-white">Florida-Ready</p>
            <p className="text-sm text-white/70 mt-1">Code, Climate, Water &amp; Energy Aware</p>
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
