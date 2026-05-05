import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"
import { LOCAL_SEO_PAGES } from "@/lib/local-pages-data"

export function SiteFooter() {
  const navLinks = [
    { label: "What is an ADU?", href: "/#what-is-adu" },
    { label: "Free ADU Course", href: "/free-adu-course" },
    { label: "EarthNest Living Systems", href: "/earthnest-living-systems" },
    { label: "Eco Upgrades", href: "/eco-upgrades" },
    { label: "Florida Tiny Living Guide", href: "/florida-tiny-living-guide" },
    { label: "Resources", href: "/resources" },
    { label: "Design Options", href: "/#design-options" },
    { label: "Our Process", href: "/#process" },
    { label: "EarthNest Model", href: "/#earthnest" },
    { label: "Our Team", href: "/#team" },
    { label: "Builder Partners", href: "/#partners" },
    { label: "ADU Rules by County", href: "/adu-rules" },
    { label: "ADU Calculator", href: "/adu-calculator" },
    { label: "FAQ", href: "/faq" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Get Evaluation", href: "/#qualify" },
  ]
  const countyHubs = LOCAL_SEO_PAGES.filter((page) => page.isHub).sort((a, b) =>
    a.locationName.localeCompare(b.locationName)
  )

  return (
    <footer className="bg-foreground text-background">
      {/* CTA Strip */}
      <div className="border-b border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-white text-balance">
              Ready to unlock your property's potential?
            </h2>
            <p className="text-white/60 text-sm mt-1">
              Free evaluation. No obligation. Florida prefab, ADU, and tiny living guidance.
            </p>
          </div>
          <Link
            href="/#qualify"
            className="inline-flex items-center shrink-0 px-8 py-4 bg-primary text-white text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)] whitespace-nowrap"
          >
            Get Free Evaluation
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <p className="font-serif text-xl text-white">Prefabricated.co</p>
            <p className="text-[10px] tracking-widest uppercase text-white/40">
              Prefab Homes / ADUs / EarthNest Systems
            </p>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Florida prefab home, tiny living, and ADU specialists. We help homeowners and
            investors explore legal, permitted, foundation-built backyard units and eco-conscious
            living systems that create flexibility, income potential, and long-term resilience.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:prefabflorida@gmail.com"
              className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              prefabflorida@gmail.com
            </a>
            <a
              href="tel:+13217473778"
              className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              (321) 747-3778
            </a>
            <div className="flex items-start gap-2 text-white/60 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Serving Florida | Based in Orlando</span>
            </div>
          </div>
        </div>

        {/* Nav */}
        <div>
          <h3 className="text-xs font-semibold text-white/40 tracking-widest uppercase mb-5">
            Navigation
          </h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="text-xs font-semibold text-white/40 tracking-widest uppercase mt-8 mb-4">
            County Hubs
          </h3>
          <ul className="flex flex-col gap-2">
            {countyHubs.map((page) => (
              <li key={page.slug}>
                <Link
                  href={`/${page.slug}`}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  ADU Specialists in {page.locationName}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="text-xs font-semibold text-white/40 tracking-widest uppercase mt-8 mb-4">
            Local Pages
          </h3>
          <p className="text-sm text-white/60 leading-relaxed">
            Browse all municipalities and neighborhoods on the master directory page.
          </p>
          <Link href="/adu-rules#local-directory" className="inline-flex mt-3 text-sm text-primary hover:underline">
            Open Full Local Directory
          </Link>
        </div>

        {/* Service Area + Legal */}
        <div>
          <h3 className="text-xs font-semibold text-white/40 tracking-widest uppercase mb-5">
            Service Area
          </h3>
          <ul className="flex flex-col gap-2 mb-10">
            {[
              "Orlando",
              "Orange County",
              "Osceola County",
              "Seminole County",
              "Lake County",
              "Polk County",
              "Greater Central Florida",
            ].map((area) => (
              <li key={area} className="text-sm text-white/60">
                {area}
              </li>
            ))}
          </ul>

          <h3 className="text-xs font-semibold text-white/40 tracking-widest uppercase mb-3">
            Legal
          </h3>
          <p className="text-xs text-white/40 leading-relaxed">
            All ADU projects require individual site evaluation, special exception zoning approval
            (where applicable), and county permitting. Orange County (unincorporated) requires
            owner-occupancy/homestead status and a minimum ADU living area of 400 sq ft. Maximum
            ADU size is 45% of primary dwelling living area or 1,000 sq ft, whichever is less.
            Short-term rentals (under 30 days) are prohibited for ADUs in most Orange County
            residential zones. Costs vary by property. Rental income estimates are typical ranges
            and are not guaranteed. PreFabricated.co does not provide legal, financial, or tax
            advice. Eco upgrades, water systems, solar, food landscaping, and automation options
            depend on local code, utility requirements, site conditions, and owner maintenance
            capacity. Prefabricated.co is a registered business in the State of Florida.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Prefabricated.co Prefab Homes / Tiny Living / ADUs in Florida. All rights
            reserved.
          </p>
          <p>Permitted · Foundation-Built · Florida-Ready · Eco-Conscious</p>
        </div>
      </div>
    </footer>
  )
}
