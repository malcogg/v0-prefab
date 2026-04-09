import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { breadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Contact EarthNest Florida | ADU Specialists",
  description:
    "Contact EarthNest Florida for ADU zoning, permitting, design, and build support in Central Florida.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ])

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Navigation />
      <section className="pt-36 pb-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Contact</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Get in Touch</h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Have questions about ADU eligibility, timeline, or cost? Reach out and we&apos;ll help you
            map out the right next step for your property.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-border bg-secondary p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-primary" />
                <h2 className="font-semibold text-foreground">Email</h2>
              </div>
              <a
                href="mailto:info@earthnestflorida.com"
                className="text-primary hover:underline break-all"
              >
                info@earthnestflorida.com
              </a>
            </div>

            <div className="rounded-lg border border-border bg-secondary p-6">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-5 h-5 text-primary" />
                <h2 className="font-semibold text-foreground">Phone</h2>
              </div>
              <a href="tel:+14075550100" className="text-primary hover:underline">
                (407) 555-0100
              </a>
            </div>

            <div className="rounded-lg border border-border bg-secondary p-6 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h2 className="font-semibold text-foreground">Service Area</h2>
              </div>
              <p className="text-muted-foreground">
                Orlando and Greater Central Florida: Orange, Osceola, Seminole, and Lake counties.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/#qualify"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
            >
              Start Free Property Evaluation
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
