import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PrintButton } from "@/components/print-button"
import { SiteFooter } from "@/components/site-footer"
import {
  starterKitLinks,
  starterKitMeta,
  starterKitSections,
  starterKitWorksheets,
} from "@/lib/free-course/starter-kit-content"
import { breadcrumbSchema } from "@/lib/seo"
import { ogImageMeta } from "@/lib/og"

const starterOg = ogImageMeta({
  variant: "resource",
  title: "Florida ADU starter kit PDF",
  subtitle: "Feasibility prompts, budgets & eco planner",
})

export const metadata: Metadata = {
  title: "Florida ADU Starter Kit PDF | Backyard Income Worksheet",
  description:
    "Print or save the Florida ADU & Backyard Income Starter Kit, with feasibility checklists, budget worksheets, call scripts, and eco upgrade planning tools.",
  alternates: { canonical: "/free-adu-course/starter-kit" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Florida ADU Starter Kit PDF | Backyard Income Worksheet",
    description:
      "Printable workbook with feasibility checklists, budget worksheets, call scripts, and eco upgrade planning tools.",
    url: "/free-adu-course/starter-kit",
    images: [starterOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Florida ADU Starter Kit PDF | Backyard Income Worksheet",
    description:
      "Printable workbook with feasibility checklists, budget worksheets, and eco upgrade planning tools.",
    images: [starterOg.url],
  },
}

export default function StarterKitPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Free ADU Course", path: "/free-adu-course" },
    { name: "Starter Kit", path: "/free-adu-course/starter-kit" },
  ])

  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="print:hidden">
        <Navigation />
      </div>

      <section className="pt-44 pb-10 bg-secondary print:hidden">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Printable Starter Kit
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-4">
            Save this guide as a PDF.
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Use your browser&apos;s print dialog and choose "Save as PDF". The printed version hides
            navigation and keeps the workbook content focused.
          </p>
          <div className="flex flex-wrap gap-3">
            <PrintButton />
            <Link
              href="/free-adu-course"
              className="inline-flex items-center px-6 py-3 border border-border text-foreground text-sm font-semibold rounded transition-colors hover:border-primary/40"
            >
              Back to Free Course
            </Link>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 py-12 print:max-w-none print:px-10 print:py-0">
        <section className="min-h-[80vh] flex flex-col justify-center border-b border-border pb-12 print:min-h-screen print:break-after-page">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-5">
            Prefabricated.co
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-foreground text-balance leading-tight mb-5">
            {starterKitMeta.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
            {starterKitMeta.subtitle}
          </p>
          <div className="text-sm text-foreground space-y-1">
            <p>{starterKitMeta.byline}</p>
            <p className="text-muted-foreground">{starterKitMeta.featureLine}</p>
          </div>
        </section>

        <section className="py-10 print:break-after-page">
          <h2 className="font-serif text-3xl text-foreground mb-4">How to use this starter kit</h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Read the guide sections first, then fill out the worksheets with what you know today.
            Leave blanks where you need county, city, lender, builder, or site-specific input.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed border border-border rounded-lg p-4 bg-secondary">
            {starterKitMeta.disclaimer}
          </p>
        </section>

        <div className="space-y-10">
          {starterKitSections.map((section, index) => (
            <section key={section.title} className="border-b border-border pb-8 print:break-inside-avoid">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
                Section {index + 1}
              </p>
              <h2 className="font-serif text-3xl text-foreground mb-4">{section.title}</h2>
              {section.body ? (
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
              {section.checklist ? (
                <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                  {section.checklist.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-foreground leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0 print:hidden" />
                      <span className="hidden print:inline">□</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <section className="py-10 print:break-before-page">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
            Worksheets
          </p>
          <h2 className="font-serif text-4xl text-foreground mb-6">Fill this out before your evaluation.</h2>
          <div className="space-y-8">
            {starterKitWorksheets.map((worksheet) => (
              <div key={worksheet.title} className="print:break-inside-avoid">
                <h3 className="font-serif text-2xl text-foreground mb-4">{worksheet.title}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {worksheet.prompts.map((prompt) => (
                    <label key={prompt} className="block">
                      <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                        {prompt}
                      </span>
                      <span className="block h-12 border border-border rounded bg-background" />
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10 border-t border-border print:break-before-page">
          <h2 className="font-serif text-4xl text-foreground mb-4">Next steps</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Once you have filled out what you can, move from general research to property-specific
            feasibility. Prefabricated.co can help review zoning, setbacks, utilities, access,
            flood considerations, model fit, and the right next step for your parcel.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 print:hidden">
            {starterKitLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded border border-border bg-secondary px-4 py-3 text-sm font-semibold text-foreground hover:border-primary/40 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden print:block text-sm text-muted-foreground space-y-2">
            <p>Website: https://www.prefabricated.co</p>
            <p>Email: prefabflorida@gmail.com</p>
            <p>Phone: (321) 747-3778</p>
          </div>
        </section>
      </article>

      <div className="print:hidden">
        <SiteFooter />
      </div>
    </main>
  )
}
