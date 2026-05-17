import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { breadcrumbSchema } from "@/lib/seo"
import { ogImageMeta } from "@/lib/og"

const aboutOg = ogImageMeta({ variant: "about" })

export const metadata: Metadata = {
  title:
    "About Us | Florida ADUs & Orlando Backyard Homes, Tiny Communities, Homestead Guides",
  description:
    "Prefabricated.co connects three journeys in one place: Central Florida and Orlando-area ADUs & prefab backyard homes, Florida tiny home community discovery, and educational permaculture / homestead planning. Start where you landed—then follow the next logical step.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Prefabricated.co | ADUs, Tiny Communities & Homestead Guides",
    description:
      "How we help Florida homeowners with ADUs and prefab backyard homes, tiny-home community discovery, and educational regenerative living resources—linked so each audience finds the right next step.",
    url: "/about",
    images: [aboutOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Prefabricated.co | ADUs, Tiny Communities & Homestead Guides",
    description:
      "Florida ADU & prefab path, tiny community directory context, and educational homestead tools—organized for clear next steps.",
    images: [aboutOg.url],
  },
}

type PathCardProps = {
  id: string
  kicker: string
  kickerClass: string
  title: string
  children: ReactNode
  links: { href: string; label: string; note?: string }[]
}

function AudiencePathCard({ id, kicker, kickerClass, title, children, links }: PathCardProps) {
  return (
    <section
      id={id}
      className="scroll-mt-32 border-l-4 border-border pl-6 sm:pl-8 py-2"
      aria-labelledby={`${id}-heading`}
    >
      <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${kickerClass}`}>
        {kicker}
      </p>
      <h2 id={`${id}-heading`} className="font-serif text-2xl md:text-3xl text-foreground mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-3">
          Next steps on the site
        </p>
        <ul className="flex flex-col gap-2.5">
          {links.map((link) => (
            <li key={link.href + link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium text-primary hover:underline underline-offset-4"
              >
                {link.label}
              </Link>
              {link.note && (
                <span className="block text-xs text-muted-foreground mt-0.5">{link.note}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function AboutPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ])

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Navigation />
      <article className="pt-36 pb-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <header className="mb-14">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              About Us
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
              Prefabricated.co
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              One parent brand, three kinds of searches Florida visitors actually run:{" "}
              <strong className="text-foreground font-medium">
                ADUs and prefab backyard homes
              </strong>{" "}
              (often city- or county-specific),{" "}
              <strong className="text-foreground font-medium">tiny home communities</strong>, and{" "}
              <strong className="text-foreground font-medium">
                homestead / permaculture planning
              </strong>
              . This page is the map—pick your cluster, then use the links under it as your hub.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-3xl">
              Prefabricated.co began with a practical question: how can Florida homeowners use
              their property more intelligently? The first answer is ADUs—legal, foundation-built
              backyard homes that can create rental income, family flexibility, and long-term
              value. The larger vision is EarthNest Living Systems: shelter, energy, water, food,
              and resilience designed for Florida reality. We keep those threads linked so you
              never land on “prefab only” and wonder where tiny villages or growing-zone tools went.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#choose-path"
                className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
              >
                Choose your path (home)
              </Link>
              <Link
                href="/qualify"
                className="inline-flex items-center px-5 py-2.5 border border-border text-foreground text-sm font-semibold rounded transition-colors hover:border-primary/40"
              >
                Get free evaluation
              </Link>
            </div>
          </header>

          <nav
            aria-label="On this page"
            className="mb-16 rounded-lg border border-border bg-card/50 px-5 py-4"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              Jump to audience
            </p>
            <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-x-6 sm:gap-y-2 text-sm">
              <li>
                <a href="#adus-prefab-orlando-florida" className="text-primary hover:underline">
                  ADUs &amp; prefab (Central Florida)
                </a>
              </li>
              <li>
                <a href="#tiny-home-communities-florida" className="text-primary hover:underline">
                  Tiny home communities (Florida)
                </a>
              </li>
              <li>
                <a
                  href="#homestead-permaculture-education"
                  className="text-primary hover:underline"
                >
                  Homestead &amp; permaculture (guides)
                </a>
              </li>
              <li>
                <a href="#team-video" className="text-primary hover:underline">
                  Team video (coming)
                </a>
              </li>
            </ul>
          </nav>

          <div className="space-y-16 md:space-y-20">
            <AudiencePathCard
              id="adus-prefab-orlando-florida"
              kicker="Cluster · ADUs & backyard homes"
              kickerClass="text-primary"
              title="Central Florida & Orlando-area ADUs and prefab backyard homes"
              links={[
                { href: "/qualify", label: "See if my property qualifies" },
                { href: "/adu-calculator", label: "ADU calculator" },
                { href: "/adu-rules", label: "ADU rules by county" },
                {
                  href: "/adu-orlando",
                  label: "Orlando ADU specialists (local hub)",
                  note: "Example city hub—use county hubs from the footer for your parcel.",
                },
                { href: "/free-adu-course", label: "Free ADU course" },
                { href: "/build", label: "Build / configure" },
              ]}
            >
              <p>
                The ADU path stays our practical entry point: compliant design, permitting realism,
                construction you can plan for, and parcel-specific feasibility before you sink time
                into drawings. That is the lane people mean when they search{" "}
                <span className="whitespace-nowrap">“ADU Orlando,”</span> Orange County accessory
                dwellings, or backyard rental units in Central Florida.
              </p>
              <p>
                Internal linking from locality pages back to rules, the calculator, and evaluation
                keeps that cluster crawlable as a unit—so Google can match intent to the right hub,
                not a generic national prefab page.
              </p>
            </AudiencePathCard>

            <AudiencePathCard
              id="tiny-home-communities-florida"
              kicker="Cluster · Tiny home communities"
              kickerClass="text-[oklch(0.42_0.12_265)]"
              title="Florida tiny home communities: discovery, not ownership"
              links={[
                {
                  href: "/tiny-home-communities/florida",
                  label: "Florida tiny home communities roster",
                },
                { href: "/tiny-home-communities", label: "National tiny communities hub" },
                {
                  href: "/florida-tiny-living-guide",
                  label: "Florida tiny living guide",
                  note: "Rules, models, and vocabulary before you visit a village.",
                },
                { href: "/resources", label: "Resources hub (downloads & tools)" },
              ]}
            >
              <p>
                Visitors looking for{" "}
                <span className="whitespace-nowrap">“tiny home community Florida,”</span> lakefront
                villages, or intentional communities need a different story than ADU shoppers. We
                curate listings, explain tenancy and governance in plain language, and point serious
                shoppers to operator sources—they run the community; we help you compare and ask
                better questions.
              </p>
              <p>
                From this cluster, the logical sequence is: guide → Florida roster → individual
                community profiles → your own verification with the operator.
              </p>
            </AudiencePathCard>

            <AudiencePathCard
              id="homestead-permaculture-education"
              kicker="Cluster · Regenerative homestead (educational)"
              kickerClass="text-[oklch(0.35_0.09_155)]"
              title="Homestead planning, growing zones & permaculture-style education"
              links={[
                { href: "/earthnest-living-systems", label: "EarthNest Living Systems overview" },
                {
                  href: "/florida-growing-zones-homestead-planning",
                  label: "Florida growing zones & homestead planning tool",
                },
                { href: "/eco-upgrades", label: "Eco upgrades (home systems)" },
                { href: "/resources", label: "All guides & resources" },
              ]}
            >
              <p>
                Permaculture and closed-loop homestead content here is{" "}
                <strong className="text-foreground font-medium">educational</strong>: planning
                tools, climate context, and systems thinking you can pair with an ADU, a tiny lot,
                or a full homestead. When we offer a scoped build or design service in the future,
                we will label it explicitly—so this cluster stays trustworthy as “learn and plan,”
                not a hidden upsell.
              </p>
              <p>
                That supports searches around Florida hardiness zones, storm-season resilience,
                edible landscapes, and water-aware living—while linking sideways into ADU and tiny
                paths when shelter is part of the same plan.
              </p>
            </AudiencePathCard>
          </div>

          <section
            id="team-video"
            className="scroll-mt-32 mt-20 md:mt-24 rounded-xl border border-dashed border-border bg-muted/20 px-6 py-8 md:px-10 md:py-10"
            aria-labelledby="team-video-heading"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
              Media · Coming soon
            </p>
            <h2 id="team-video-heading" className="font-serif text-2xl text-foreground mb-3">
              Video introduction with the team
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              We are recording a short on-camera introduction—with Tiffany and the broader
              team—so you can see how{" "}
              <Link href="/#choose-path" className="text-primary hover:underline">
                ADU and prefab work
              </Link>
              ,{" "}
              <Link href="/tiny-home-communities/florida" className="text-primary hover:underline">
                tiny-community discovery
              </Link>
              , and{" "}
              <Link
                href="/florida-growing-zones-homestead-planning"
                className="text-primary hover:underline"
              >
                homestead education
              </Link>{" "}
              fit together before you dive into evaluations or listings. Embed and publish date TBD;
              this block is a ready anchor for that launch and for social/YouTube descriptions.
            </p>
          </section>

          <aside className="mt-14 rounded-lg border border-border bg-secondary/40 px-5 py-5 text-sm text-muted-foreground leading-relaxed">
            <p className="font-semibold text-foreground mb-2">Roles &amp; disclosures (expanding)</p>
            <p>
              When real estate, construction-adjacent guidance, directory listings, and educational
              permaculture content share one site, expectations matter. A fuller page will spell
              out what Prefabricated.co does directly, what licensed partners handle, what
              community operators control, and where content is educational only. If something here
              feels ambiguous,{" "}
              <Link href="/contact" className="text-primary font-medium hover:underline">
                contact us
              </Link>{" "}
              and we will point you to the right lane.
            </p>
          </aside>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/qualify"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
            >
              Get free evaluation
            </Link>
            <Link
              href="/earthnest-living-systems"
              className="inline-flex items-center px-6 py-3 border border-border text-foreground text-sm font-semibold rounded transition-colors hover:border-primary/40"
            >
              Explore EarthNest Living Systems
            </Link>
            <Link
              href="/adu-rules"
              className="inline-flex items-center px-6 py-3 border border-border text-foreground text-sm font-semibold rounded transition-colors hover:border-primary/40"
            >
              View ADU rules by county
            </Link>
          </div>

          <p className="mt-10 text-sm text-muted-foreground max-w-2xl">
            Service areas include Orange County, City of Orlando, Osceola County, Seminole County,
            Lake County, Polk County, and the surrounding Central Florida region, with parcel-level
            rules verified for each property.
          </p>
        </div>
      </article>
      <SiteFooter />
    </main>
  )
}
