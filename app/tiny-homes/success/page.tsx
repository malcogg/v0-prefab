import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

type SearchParams = Promise<{ session_id?: string }>

export default async function TinyHomesCheckoutSuccessPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const sp = await searchParams
  const sessionId = sp.session_id

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-xl mx-auto px-6 py-28 md:py-36 text-center">
        <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Stripe checkout</p>
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4 text-balance">Thank you</h1>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Your payment session was completed. We&apos;ll email a confirmation shortly and reach out within one business
          day to coordinate delivery, siting, and any open items for your Escape tiny home.
        </p>
        {sessionId ? (
          <p className="text-xs text-muted-foreground font-mono mb-8 break-all">Reference: {sessionId}</p>
        ) : null}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/tiny-homes"
            className="inline-flex justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-[oklch(0.58_0.13_192)]"
          >
            Back to catalog
          </Link>
          <Link href="/contact" className="inline-flex justify-center px-6 py-3 rounded-lg border border-border text-sm font-semibold hover:border-primary/40">
            Contact support
          </Link>
        </div>
      </div>
      <SiteFooter />
    </main>
  )
}
