import type { Metadata } from "next"
import Link from "next/link"
import {
  Calculator,
  CheckCircle2,
  Compass,
  DollarSign,
  FileCheck,
  Home,
  Leaf,
  MapPinned,
  ShieldCheck,
  Sprout,
  Users,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { StarterKitDownloadForm } from "@/components/starter-kit-download-form"
import { SiteFooter } from "@/components/site-footer"
import { breadcrumbSchema } from "@/lib/seo"
import { ogImageMeta } from "@/lib/og"

const courseOg = ogImageMeta({
  variant: "resource",
  title: "Free Florida ADU course",
  subtitle: "Eligibility, costs, permitting & eco upgrades",
})

export const metadata: Metadata = {
  title: "Free Florida ADU Course | Prefab Backyard Homes & Tiny Living",
  description:
    "A free Florida ADU course from Prefabricated.co covering property eligibility, costs, design, permitting, rental income, prefab backyard homes, and EarthNest-style sustainable upgrades.",
  alternates: { canonical: "/free-adu-course" },
  openGraph: {
    title: "Free Florida ADU Course | Prefab Backyard Homes & Tiny Living",
    description:
      "Learn how to evaluate, plan, finance, and build a legal Florida ADU or prefab backyard home with practical, code-aware guidance.",
    url: "/free-adu-course",
    images: [courseOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Florida ADU Course | Prefab Backyard Homes & Tiny Living",
    description:
      "Learn how to evaluate, plan, finance, and build a legal Florida ADU or prefab backyard home with practical, code-aware guidance.",
    images: [courseOg.url],
  },
}

const modules = [
  {
    icon: Home,
    title: "1. ADUs, prefab homes, and tiny living in Florida",
    goal: "Understand the landscape before choosing a model.",
    topics: [
      "What an ADU is and how it differs from a tiny home on wheels",
      "Foundation-built ADUs, prefab backyard homes, modular units, and RV-style structures",
      "Why Florida rules vary by county, city, HOA, utilities, septic, and flood zone",
      "How EarthNest Living Systems fit into a smaller, smarter living strategy",
    ],
    cta: "Check Local ADU Rules",
    href: "/adu-rules",
  },
  {
    icon: MapPinned,
    title: "2. Can your property support an ADU?",
    goal: "Learn what makes a property worth evaluating.",
    topics: [
      "Zoning, setbacks, lot coverage, access, and buildable area",
      "Orange County homestead and special exception realities",
      "City of Orlando versus unincorporated county differences",
      "HOA, flood zone, wetlands, drainage, utilities, and site constraints",
    ],
    cta: "See If My Property Qualifies",
    href: "/qualify",
  },
  {
    icon: Calculator,
    title: "3. The money side: income, equity, and risk",
    goal: "Run numbers without treating estimates like guarantees.",
    topics: [
      "Rental income potential and long-term lease considerations",
      "Build cost ranges, cash flow, and appraisal logic",
      "HELOCs, cash, private capital, and refinancing concepts to discuss with lenders",
      "How to use the ADU calculator responsibly before a site-specific quote",
    ],
    cta: "Use the ADU Calculator",
    href: "/adu-calculator",
  },
  {
    icon: Leaf,
    title: "4. Design decisions that shape the project",
    goal: "Connect layout, comfort, code, maintenance, and sustainability.",
    topics: [
      "Studio, 1-bedroom, 2-bedroom, and custom backyard home tradeoffs",
      "EarthNest 20, EarthNest 40, and Traditional Site-Built ADU product lanes",
      "Kitchen, bath, storage, privacy, entries, parking, and outdoor space",
      "Florida climate design: shade, humidity, ventilation, mold prevention, and stormwater",
    ],
    cta: "Explore EarthNest",
    href: "/earthnest-living-systems",
  },
  {
    icon: FileCheck,
    title: "5. Permitting, team, and build process",
    goal: "See the path from idea to final inspection.",
    topics: [
      "Site evaluation, zoning review, and feasibility checks",
      "Special exception requirements where they apply",
      "Design documents, engineered plans, permit packages, and inspections",
      "Timeline risks, coordination points, and why shortcuts create expensive problems",
    ],
    cta: "Start With a Free Evaluation",
    href: "/qualify",
  },
  {
    icon: Sprout,
    title: "6. Use, rent, hold, or scale",
    goal: "Choose a strategy that fits your property and goals.",
    topics: [
      "Family housing, long-term rental income, guest space, and home office use",
      "Holding, refinancing conversations, and scaling carefully across properties",
      "Why selling ADUs separately is not a universal Florida assumption",
      "How backyard homes connect to future eco-community and agrihood concepts",
    ],
    cta: "Talk To Us About Your Property",
    href: "/contact",
  },
]

const audiences = [
  {
    icon: Users,
    title: "Homeowners",
    text: "Learn whether your property can support family housing, rental income, guest space, or a future downsizing option.",
  },
  {
    icon: DollarSign,
    title: "Investors and landowners",
    text: "Understand cash flow, appraisal, financing, and scale without ignoring zoning, build cost, or permitting risk.",
  },
  {
    icon: Leaf,
    title: "Eco-conscious buyers",
    text: "See how a backyard home can become part of a healthier, smaller, more resilient Florida lifestyle.",
  },
]

const differences = [
  "Free and no-pressure, with no payment form or urgency timer.",
  "Built around Florida code, climate, zoning, humidity, stormwater, and utilities.",
  "Connected to real next steps: rules, calculator, EarthNest systems, eco upgrades, and property evaluation.",
  "Careful with income, equity, financing, and permitting claims so you can make grounded decisions.",
]

export default function FreeAduCoursePage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Free ADU Course", path: "/free-adu-course" },
  ])

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Free Florida ADU & Backyard Living Course",
    description:
      "A free course from Prefabricated.co teaching Florida ADU planning, property eligibility, costs, design, permitting, prefab backyard homes, and EarthNest-style sustainable upgrades.",
    provider: {
      "@type": "Organization",
      name: "Prefabricated.co",
      sameAs: "https://www.prefabricated.co",
    },
    url: "https://www.prefabricated.co/free-adu-course",
    educationalLevel: "Beginner",
    isAccessibleForFree: true,
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <Navigation />

      <section className="pt-36 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              Free Course
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground text-balance leading-tight mb-6">
              Free Florida ADU & Backyard Living Course
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl">
              Learn how to evaluate, plan, finance, and build a legal Florida ADU or prefab
              backyard home while understanding the EarthNest systems that can make smaller living
              healthier, more resilient, and more sustainable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#modules"
                className="inline-flex items-center px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
              >
                Start the Free Course
              </Link>
              <Link
                href="#starter-kit"
                className="inline-flex items-center px-7 py-3.5 border border-border text-foreground text-sm font-semibold rounded transition-colors hover:border-primary/40"
              >
                Download Starter Kit
              </Link>
              <Link
                href="/qualify"
                className="inline-flex items-center px-7 py-3.5 border border-border text-foreground text-sm font-semibold rounded transition-colors hover:border-primary/40"
              >
                See If My Property Qualifies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="starter-kit" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
                Printable Workbook
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-5">
                Get the Florida ADU & Backyard Income Starter Kit.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Use the printable starter kit while you take the course. It includes feasibility
                prompts, cost categories, model comparison notes, a city/county call script, builder
                questions, and an eco upgrade planner.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  "Property Feasibility Checklist",
                  "ADU Budget Worksheet",
                  "County / City Call Script",
                  "Backyard Income Planner",
                  "Builder Questions Checklist",
                  "Eco Upgrade Planner",
                ].map((item) => (
                  <div key={item} className="rounded border border-border bg-secondary px-4 py-3 text-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <StarterKitDownloadForm />
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div>
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
                Who This Is For
              </p>
              <h2 className="font-serif text-4xl text-foreground text-balance leading-tight mb-5">
                One course, three practical paths.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether you want income, family flexibility, or a smaller sustainable living
                system, the first step is understanding what your property can legally and
                practically support.
              </p>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-3 gap-5">
              {audiences.map((audience) => {
                const Icon = audience.icon
                return (
                  <article key={audience.title} className="bg-background border border-border rounded-lg p-6">
                    <Icon className="w-6 h-6 text-primary mb-4" />
                    <h3 className="font-serif text-2xl text-foreground mb-3">{audience.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{audience.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="modules" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              Course Modules
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-5">
              From backyard idea to buildable plan.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Work through the modules in order, or jump to the question that matters most right
              now. Each module points you to the next useful Prefabricated.co resource.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {modules.map((module) => {
              const Icon = module.icon
              return (
                <article key={module.title} className="rounded-lg border border-border bg-secondary p-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-foreground mb-2">{module.title}</h3>
                      <p className="text-sm font-medium text-foreground mb-4">{module.goal}</p>
                      <ul className="space-y-2.5 mb-5">
                        {module.topics.map((topic) => (
                          <li key={topic} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                      <Link href={module.href} className="text-sm font-semibold text-primary hover:underline">
                        {module.cta}
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
                Practical By Design
              </p>
              <h2 className="font-serif text-4xl text-foreground text-balance leading-tight mb-5">
                Free education, grounded in site evaluation.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This course is designed to help you ask better questions before you spend money on
                plans, land, or construction. It is educational, not legal, financial, or tax
                advice. Your actual path depends on your parcel, jurisdiction, budget, utility
                setup, lender, and long-term goals.
              </p>
            </div>
            <div className="space-y-3">
              {differences.map((difference) => (
                <div key={difference} className="flex gap-3 rounded-lg border border-border bg-background p-5">
                  <ShieldCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-foreground leading-relaxed">{difference}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.11_0_0)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Ready For The Property-Specific Step?
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white text-balance leading-tight mb-5">
            Learn the basics, then verify your actual lot.
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            When you are ready, we can review your property for zoning, setbacks, utilities, access,
            flood considerations, model fit, and the right next step.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/qualify"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
            >
              Request Free Property Evaluation
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center px-8 py-4 border border-white/30 text-white text-sm font-semibold rounded transition-colors hover:bg-white/10"
            >
              Browse More Resources
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
