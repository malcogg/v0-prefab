import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { breadcrumbSchema, SITE_URL } from "@/lib/seo"
import { ogImageMeta } from "@/lib/og"

const og = ogImageMeta({
  variant: "default",
  title: "Affiliate disclosure",
  subtitle: "How Prefabricated.co uses product links",
})

export const metadata: Metadata = {
  title: "Affiliate Disclosure | Prefabricated.co",
  description:
    "How Prefabricated.co discloses Amazon Associates and other partner links. We may earn commissions on qualifying purchases.",
  alternates: { canonical: "/affiliate-disclosure" },
  openGraph: {
    title: "Affiliate Disclosure | Prefabricated.co",
    description: "Transparency about commissions and editorial independence.",
    url: `${SITE_URL}/affiliate-disclosure`,
    images: [og],
  },
}

export default function AffiliateDisclosurePage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Affiliate disclosure", path: "/affiliate-disclosure" },
  ])

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navigation />

      <section className="pt-44 pb-24 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Legal · Transparency</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-8">
            Affiliate disclosure
          </h1>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Prefabricated.co participates in the Amazon Services LLC Associates Program and may participate in other
              affiliate or referral programs. We may earn a commission when you click certain links and make a qualifying
              purchase. <strong className="text-foreground font-medium">This does not increase the price you pay.</strong>
            </p>
            <p>
              Editorial pages—including blog posts, resource modules, and tool adjacent guides—may include product or brand
              links for convenience. Inclusion is not an endorsement of every feature or suitability for your property; codes,
              insurance, HOA rules, and health or safety decisions are always yours with qualified professionals.
            </p>
            <p>
              We do not publish real-time pricing or guaranteed savings. Product availability, specifications, and URLs change;
              if you notice a broken or outdated link, please{" "}
              <Link href="/contact" className="text-primary font-medium underline underline-offset-4 hover:no-underline">
                contact us
              </Link>
              .
            </p>
            <p>
              For program-specific terms, refer to the{" "}
              <a
                href="https://affiliate-program.amazon.com/help/operating/agreement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium underline underline-offset-4 hover:no-underline"
              >
                Amazon Associates Operating Agreement
              </a>{" "}
              and the policies of any other network we join.
            </p>
            <p className="text-sm">
              <Link href="/blog" className="text-primary font-medium underline underline-offset-4 hover:no-underline">
                Blog
              </Link>
              {" · "}
              <Link href="/resources" className="text-primary font-medium underline underline-offset-4 hover:no-underline">
                Resources
              </Link>
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
