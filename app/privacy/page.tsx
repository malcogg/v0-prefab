import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { breadcrumbSchema, SITE_URL } from "@/lib/seo"
import { ogImageMeta } from "@/lib/og"

const og = ogImageMeta({
  variant: "default",
  title: "Privacy policy",
  subtitle: "How we collect, use, and store information",
})

export const metadata: Metadata = {
  title: "Privacy Policy | Prefabricated.co",
  description:
    "How Prefabricated.co collects and uses personal information through forms, tools, email, analytics, and our database providers.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Prefabricated.co",
    description: "Transparency about data collection, storage, and your choices.",
    url: `${SITE_URL}/privacy`,
    images: [og],
  },
}

export default function PrivacyPolicyPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Privacy policy", path: "/privacy" },
  ])

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navigation />

      <section className="pt-36 pb-24 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-4">
            Privacy policy
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            Last updated: May 18, 2026 · Operator: Prefabricated.co (contact:{" "}
            <a href="mailto:prefabflorida@gmail.com" className="text-primary underline underline-offset-4">
              prefabflorida@gmail.com
            </a>
            )
          </p>

          <div className="space-y-8 text-muted-foreground leading-relaxed text-sm md:text-base">
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-foreground">Overview</h2>
              <p>
                This policy describes what information we may collect when you use prefabricated.co (the “Site”),
                including forms, downloads, quizzes, and checkout-related flows. We use it to respond to you, deliver
                resources you request, improve our guides and tools, and understand aggregate Site usage. We do not sell
                your personal information.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-foreground">What we collect</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-foreground">Contact and inquiry data</strong> you submit (for example name,
                  email, phone, ZIP or address where we ask for it, and message content) on lead forms, the qualify flow,
                  home interest, Escape purchase intent, build inquiries, starter kit downloads, homestead zone PDF
                  requests, and similar features.
                </li>
                <li>
                  <strong className="text-foreground">Technical metadata</strong> such as browser user-agent string and
                  IP address, stored with submissions where our API routes record them, to reduce abuse and diagnose
                  delivery issues.
                </li>
                <li>
                  <strong className="text-foreground">Tool and quiz context</strong> you provide (county, goals, zone
                  results, structured answers) so we can personalize PDFs, emails, or follow-up.
                </li>
                <li>
                  <strong className="text-foreground">Analytics</strong>: we use Google Analytics 4 (via Google Tag
                  Manager scripts loaded on the Site) to measure traffic, referral sources, and on-site behavior using
                  cookies or similar technologies. You can use browser controls or GA opt-out tools to limit this
                  category.
                </li>
                <li>
                  <strong className="text-foreground">UTM and campaign parameters</strong> may be present in URLs you
                  arrive with; if we persist them with a submission, it is to attribute interest to a campaign, not
                  for third-party advertising profiles on this Site.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-foreground">Where data is stored</h2>
              <p>
                <strong className="text-foreground">Database (Neon PostgreSQL).</strong> Many submissions are written to
                tables in a Postgres database hosted by{" "}
                <a
                  href="https://neon.tech/"
                  className="text-primary underline underline-offset-4"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Neon
                </a>
                , using a server-side connection string from our hosting environment. Rows typically include the fields
                needed for that product (see our internal schema definitions in the repo’s <code>db/schema.sql</code> for
                engineers).
              </p>
              <p>
                <strong className="text-foreground">Email (Resend).</strong> When you request confirmations or we notify
                our team, messages are sent through{" "}
                <a
                  href="https://resend.com/"
                  className="text-primary underline underline-offset-4"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Resend
                </a>
                , which processes recipient addresses and message content as a subprocesser.
              </p>
              <p>
                <strong className="text-foreground">Payments (Stripe).</strong> If you use “buy now” or similar flows,
                payment is handled on{" "}
                <a
                  href="https://stripe.com/"
                  className="text-primary underline underline-offset-4"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Stripe
                </a>
                -hosted checkout. We do not store full card numbers on our database; Stripe’s privacy policy govern card
                data.
              </p>
              <p>
                <strong className="text-foreground">Hosting and logs.</strong> Our hosting provider (e.g. Vercel) may
                retain HTTP logs, including IP and path, for security and operations—consistent with their documentation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-foreground">Retention</h2>
              <p>
                We retain submissions as long as needed to operate the Site, follow up on inquiries, and meet legal
                obligations. We do not promise indefinite storage; specific retention windows can be tightened as we mature
                our data practices. You may request deletion of contact records tied to your email (see below), subject
                to legitimate business and legal holds.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-foreground">Security</h2>
              <p>
                Secrets (database URL, email API key, Stripe secret) live only in server environment variables—not in
                browser-exposed <code>NEXT_PUBLIC_*</code> bundles. We apply HTTP security headers (including a
                Content-Security-Policy) and optional rate limiting on write-heavy API routes. No security practice is
                perfect; if you discover a vulnerability, email us at the address above.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-foreground">Your choices</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-foreground">Access / correction / deletion:</strong> email{" "}
                  <a href="mailto:prefabflorida@gmail.com" className="text-primary underline underline-offset-4">
                    prefabflorida@gmail.com
                  </a>{" "}
                  with the address you used on a form. We will verify reasonableness and respond within a practical
                  timeframe.
                </li>
                <li>
                  <strong className="text-foreground">Marketing:</strong> we aim to send only relevant follow-up tied to
                  your request. You can ask us to stop non-transactional messages.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-foreground">Children</h2>
              <p>The Site is not directed at children under 13. We do not knowingly collect their personal information.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-foreground">Changes</h2>
              <p>
                We may update this policy from time to time. The “Last updated” date at the top will change when we do.
                Continued use of the Site after updates constitutes acceptance of the revised policy to the extent
                permitted by law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-foreground">Related</h2>
              <p>
                <Link href="/affiliate-disclosure" className="text-primary underline underline-offset-4">
                  Affiliate disclosure
                </Link>{" "}
                ·{" "}
                <Link href="/contact" className="text-primary underline underline-offset-4">
                  Contact
                </Link>
              </p>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
