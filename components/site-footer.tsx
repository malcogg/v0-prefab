import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

import { LOCAL_SEO_PAGES } from "@/lib/local-pages-data"
import { ESCAPE_CATALOG_PATH } from "@/lib/escape-tiny-homes-data"

type FooterLink = { label: string; href: string }

const EXPLORE_ADU_LINKS: FooterLink[] = [
  { label: "Choose your path (home)", href: "/#choose-path" },
  { label: "What is an ADU?", href: "/blog/what-is-an-adu-florida" },
  { label: "EarthNest & site-built ADUs", href: "/earthnest-living-systems" },
  { label: "Escape tiny homes (shop)", href: ESCAPE_CATALOG_PATH },
  { label: "Escape featured on home", href: "/#escape-product-lanes" },
  { label: "ADU calculator", href: "/adu-calculator" },
]

const RESOURCES_LINKS: FooterLink[] = [
  { label: "Free ADU course", href: "/free-adu-course" },
  { label: "Florida tiny living guide", href: "/florida-tiny-living-guide" },
  { label: "Florida growing zones tool", href: "/florida-growing-zones-homestead-planning" },
  { label: "Tiny home communities", href: "/tiny-home-communities" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
]

const COMPANY_LINKS: FooterLink[] = [
  { label: "About us", href: "/about" },
  { label: "Our process", href: "/#process" },
  { label: "The EarthNest model", href: "/#earthnest" },
  { label: "Our team", href: "/#team" },
  { label: "Builder partners", href: "/#partners" },
  { label: "Contact us", href: "/contact" },
]

const COUNTY_HUB_ORDER = [
  "adu-orange-county",
  "adu-seminole-county",
  "adu-lake-county",
  "adu-osceola-county",
  "adu-polk-county",
]

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold text-white/40 tracking-widest uppercase mb-5">{title}</h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteFooter() {
  const countyHubs = COUNTY_HUB_ORDER.map((slug) => LOCAL_SEO_PAGES.find((p) => p.slug === slug)).filter(
    (page): page is (typeof LOCAL_SEO_PAGES)[number] => page != null,
  )

  const countyLinks: FooterLink[] = countyHubs.map((page) => ({
    label: `${page.locationName} ADU specialists`,
    href: `/${page.slug}`,
  }))

  return (
    <footer className="bg-foreground text-background">
      {/* CTA strip */}
      <div className="border-b border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-white text-balance">
              Ready to unlock your property&apos;s potential?
            </h2>
            <p className="text-white/60 text-sm mt-1">
              Free evaluation. No obligation. Florida prefab, ADU, and tiny living guidance.
            </p>
          </div>
          <Link
            href="/qualify"
            className="inline-flex items-center shrink-0 px-8 py-4 bg-primary text-white text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)] whitespace-nowrap"
          >
            Get free evaluation
          </Link>
        </div>
      </div>

      {/* Brand + four columns */}
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="mb-12 max-w-2xl">
          <p className="font-serif text-xl text-white mb-1">Prefabricated.co</p>
          <p className="text-[10px] tracking-widest uppercase text-white/40 mb-3">
            Prefab homes · ADUs · EarthNest systems
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            Florida prefab, tiny living, and ADU specialists—legal backyard units, communities, and optional
            regenerative upgrades.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <FooterColumn title="Explore ADUs" links={EXPLORE_ADU_LINKS} />
          <FooterColumn title="Resources & learning" links={RESOURCES_LINKS} />
          <div>
            <FooterColumn title="Our company" links={COMPANY_LINKS} />
            <Link
              href="/qualify"
              className="mt-6 inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
            >
              Get free evaluation
            </Link>
          </div>
          <FooterColumn title="Central Florida hubs" links={countyLinks} />
        </div>

        {/* Master local directory */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <p className="text-sm text-white/70 leading-relaxed max-w-3xl">
            <span className="text-white font-medium">Looking for a specific neighborhood?</span> Browse all Central
            Florida municipalities and neighborhoods on our master directory page.
          </p>
          <Link
            href="/adu-rules#local-directory"
            className="inline-flex mt-4 text-sm font-semibold text-primary hover:underline underline-offset-4"
          >
            Open full local directory →
          </Link>
        </div>
      </div>

      {/* Contact + legal */}
      <div className="border-t border-white/10 px-6 py-10">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
          <div>
            <h3 className="text-xs font-semibold text-white/40 tracking-widest uppercase mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:prefabflorida@gmail.com"
                className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" aria-hidden />
                prefabflorida@gmail.com
              </a>
              <a
                href="tel:+13217473778"
                className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" aria-hidden />
                (321) 747-3778
              </a>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden />
                <span>Serving Greater Central Florida · Based in Orlando</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white/40 tracking-widest uppercase mb-4">
              Legal & compliance
            </h3>
            <p className="text-sm text-white/60 mb-3">
              <Link href="/privacy" className="hover:text-white underline-offset-4 hover:underline">
                Privacy policy
              </Link>
              {" · "}
              <Link href="/affiliate-disclosure" className="hover:text-white underline-offset-4 hover:underline">
                Affiliate disclosure
              </Link>
            </p>
            <p className="text-xs text-white/40 leading-relaxed">
              All ADU projects require individual site evaluation, special exception zoning approval (where applicable),
              and county permitting. Following early 2026 state legislative tracking, statewide &apos;by-right&apos;
              mandates like SB 48 passed the Senate unanimously but stalled on the House floor over short-term rental
              rules; therefore, municipal and county codes remain the absolute governing authority on backyard builds.
              PreFabricated.co does not provide guaranteed legal, financial, or tax advice. Costs and rental estimates
              vary by property and are not guaranteed. Eco upgrades depend on local code, utilities, site conditions, and
              owner maintenance capacity. PreFabricated.co is a registered business in the State of Florida.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Prefabricated.co · Prefab homes, tiny living &amp; ADUs in Florida. All
            rights reserved.
          </p>
          <p>Permitted · Foundation-built · Florida-ready · Eco-conscious</p>
        </div>
      </div>
    </footer>
  )
}
