import type { Metadata } from "next"
import Link from "next/link"
import type { ReactNode } from "react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { breadcrumbSchema } from "@/lib/seo"
import { ogImageMeta } from "@/lib/og"

const faqOg = ogImageMeta({ variant: "faq" })

type FaqItem = {
  q: string
  a: ReactNode
}

const faqs: { category: string; items: FaqItem[] }[] = [
  {
    category: "Eligibility",
    items: [
      {
        q: "Does my property qualify for an ADU in Orange County?",
        a: (
          <>
            Your property must meet several conditions to be eligible in Orange County
            (unincorporated): it must be your primary homesteaded residence, it must be zoned for
            single-family residential use, the lot must be at least 1.5 times the minimum required
            lot size for a detached ADU, and you must obtain a Special Exception from the county
            before a building permit can be applied for. The fastest way to know for sure is to
            submit your address for a free evaluation — we run the zoning check before your first
            call. See county-specific rules on <Link href="/adu-rules" className="text-primary hover:underline">ADU Rules by County</Link>.
          </>
        ),
      },
      {
        q: "Do I have to live on the property to build an ADU?",
        a: (
          <>
            In Orange County (unincorporated), yes. The county requires you to occupy either the
            primary home or the ADU as your principal homesteaded residence at all times. The
            Certificate of Occupancy will not be issued until homestead status is confirmed. The
            City of Orlando does not have this requirement — investors can rent both units.
            Requirements vary by jurisdiction, which is why we verify your specific parcel before
            anything else.
          </>
        ),
      },
      {
        q: "Can I build an ADU if I have an HOA?",
        a: (
          <>
            Possibly, but HOA rules are separate from county zoning. An HOA can restrict or prohibit
            ADUs even if the county permits them. We review HOA documentation as part of your free
            site evaluation. If your HOA prohibits ADUs, we'll tell you upfront — no wasted time.
          </>
        ),
      },
      {
        q: "What is a Special Exception and do I need one?",
        a: (
          <>
            In Orange County (unincorporated), a Special Exception is a separate zoning approval
            required before a building permit can be applied for. It's submitted to the Orange
            County Planning Division and confirms your property and proposed ADU meet all zoning
            standards. EarthNest Florida prepares and submits this on your behalf as part of our
            7-step process. It is not optional in most Orange County residential zones.
          </>
        ),
      },
    ],
  },
  {
    category: "Size & Design",
    items: [
      {
        q: "How big can my ADU be in Orange County?",
        a: (
          <>
            The maximum living area is 45% of your primary home's square footage OR 1,000 square
            feet — whichever is less. If your lot is 2 acres or larger, the maximum increases to
            1,500 square feet. The minimum living area is 400 square feet. The ADU may not have
            more than 2 bedrooms.
          </>
        ),
      },
      {
        q: "Can I use a shipping container as an ADU?",
        a: (
          <>
            Yes, in many cases — but it requires careful permitting. Container-based units must meet
            the Florida Building Code, be placed on a permanent foundation, and may require
            state-level DBPR review for modular/manufactured structures. Note: at approximately 160
            sq ft (20ft unit) and 320 sq ft (40ft unit), container units fall below Orange County's
            400 sq ft ADU minimum and are generally best for flex uses there.
          </>
        ),
      },
      {
        q: "Can the ADU match my existing home's style?",
        a: (
          <>
            Yes — and in Orange County, it's encouraged. The county requires the ADU to be designed
            to be similar and compatible with the primary dwelling. Our Traditional Site-Built ADU
            is fully custom and designed to match your home's exterior finish and architectural
            details.
          </>
        ),
      },
    ],
  },
  {
    category: "Rental Income & Returns",
    items: [
      {
        q: "How much rent can I charge for an ADU?",
        a: (
          <>
            In the current Orlando-area market, permitted 1-bedroom ADUs typically rent for
            $1,400–$2,000 per month for long-term leases. Studios range from $1,200–$1,600. Exact
            rent depends on size, finish level, location, and amenities.
          </>
        ),
      },
      {
        q: "Can I use my ADU for Airbnb or short-term rentals?",
        a: (
          <>
            In Orange County (unincorporated), short-term rentals under 30 days are prohibited for
            ADUs in most residential zones. The City of Orlando has different rules. Always verify
            with your specific jurisdiction before planning a short-term rental strategy.
          </>
        ),
      },
      {
        q: "Does an ADU increase my property value?",
        a: (
          <>
            A fully permitted, foundation-built ADU adds permanent appraised value to your property.
            In the current Central Florida market, permitted ADUs typically add meaningful equity at
            completion depending on size and finish.
          </>
        ),
      },
    ],
  },
]

export const metadata: Metadata = {
  title: "ADU FAQ — Central Florida | EarthNest Florida",
  description:
    "Answers to the most common ADU questions in Orange County and Central Florida. Zoning, costs, permitting, rental rules, and more.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "ADU FAQ — Central Florida | EarthNest Florida",
    description:
      "Answers to the most common ADU questions in Orange County and Central Florida. Zoning, costs, permitting, rental rules, and more.",
    url: "/faq",
    images: [faqOg],
  },
  twitter: {
    card: "summary_large_image",
    site: "@earthnestfl",
    title: "ADU FAQ — Central Florida | EarthNest Florida",
    description:
      "Answers to the most common ADU questions in Orange County and Central Florida. Zoning, costs, permitting, rental rules, and more.",
    images: [faqOg.url],
  },
}

export default function FaqPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
  ])
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does my property qualify for an ADU in Orange County?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your property must meet several conditions to be eligible in Orange County (unincorporated): it must be your primary homesteaded residence, it must be zoned for single-family residential use, the lot must be at least 1.5 times the minimum required lot size for a detached ADU, and you must obtain a Special Exception from the county before a building permit can be applied for.",
        },
      },
      {
        "@type": "Question",
        name: "Do I have to live on the property to build an ADU?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In Orange County (unincorporated), yes. The county requires you to occupy either the primary home or the ADU as your principal homesteaded residence. The City of Orlando does not have this requirement — investors can rent both units.",
        },
      },
      {
        "@type": "Question",
        name: "How big can my ADU be in Orange County?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The maximum living area is 45% of your primary home's square footage OR 1,000 square feet — whichever is less. The minimum living area is 400 square feet. The ADU may not have more than 2 bedrooms.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use my ADU for Airbnb or short-term rentals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In Orange County (unincorporated), short-term rentals under 30 days are prohibited for ADUs in most residential zones. You must rent to long-term tenants. The City of Orlando has different rules — visit orlando.gov/homeshare for current policy.",
        },
      },
      {
        "@type": "Question",
        name: "How long does the ADU process take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "From initial evaluation to Certificate of Occupancy, most projects take 6–12 months. The Special Exception zoning process adds 4–8 weeks upfront. Building permit review takes an additional 4–8 weeks. Construction takes 3–6 months depending on the model.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a free evaluation cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nothing. No obligation. The evaluation includes a zoning check, setback review, lot size confirmation, feasibility assessment, and model recommendation.",
        },
      },
      {
        "@type": "Question",
        name: "Does an ADU increase my property value?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A fully permitted, foundation-built ADU adds permanent appraised value. In the current Central Florida market, permitted ADUs typically add $60,000–$130,000+ in equity at completion depending on size and finish level.",
        },
      },
      {
        "@type": "Question",
        name: "What is a Special Exception and do I need one?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In Orange County (unincorporated), a Special Exception is a separate zoning approval required before a building permit can be applied for. It is submitted to the Orange County Planning Division. EarthNest Florida prepares and submits this on your behalf.",
        },
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />
      <section className="pt-36 pb-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            Answers to the most common ADU questions from Central Florida homeowners and investors.
          </p>

          <div className="space-y-10">
            {faqs.map((group) => (
              <section key={group.category}>
                <h2 className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
                  {group.category}
                </h2>
                <div className="divide-y divide-border border-y border-border">
                  {group.items.map((item) => (
                    <details key={item.q} className="group py-4">
                      <summary className="list-none cursor-pointer font-semibold text-foreground flex items-start justify-between gap-4">
                        <span>{item.q}</span>
                        <span className="text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                      </summary>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-3">{item.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14 p-6 rounded-lg border border-border bg-secondary">
            <h3 className="font-serif text-2xl text-foreground mb-3">
              Still have questions? Let&apos;s talk through your specific property.
            </h3>
            <Link
              href="/#qualify"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
            >
              Schedule a Free Evaluation
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
