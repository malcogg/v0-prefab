import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ogImageMeta } from "@/lib/og"

const notFoundOg = ogImageMeta({
  variant: "default",
  title: "Page not found",
  subtitle: "Prefabricated.co — Florida prefab & tiny living",
})

export const metadata: Metadata = {
  title: "Page Not Found | EarthNest Florida",
  description: "This page does not exist.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/404",
  },
  openGraph: {
    title: "Page not found | Prefabricated.co",
    description: "This page does not exist. Head home or check your property for ADU eligibility.",
    images: [notFoundOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Page not found | Prefabricated.co",
    images: [notFoundOg.url],
  },
}

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-36 pb-24 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            This page doesn&apos;t exist — but your ADU can.
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            The page you&apos;re looking for has moved or doesn&apos;t exist. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/qualify"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
            >
              Check My Property
            </Link>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border border-border text-foreground text-sm font-semibold rounded transition-colors hover:border-primary/40"
            >
              Go Home
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
