"use client"

import Link from "next/link"

type ThankYouProps = {
  lotAddress?: string
  modelName?: string
  email?: string
}

export function ThankYou({ lotAddress, modelName, email }: ThankYouProps) {
  return (
    <section className="py-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="rounded-lg border border-border bg-card p-8">
          <h2 className="font-serif text-4xl mb-3">You're on your way.</h2>
          <p className="text-muted-foreground mb-5">
            We have received your build inquiry for: <strong>{lotAddress}</strong> + <strong>{modelName}</strong>.
          </p>
          <div className="space-y-4 text-sm">
            <p><strong>[1] Within 1 business day</strong> — We review your lot and home selections</p>
            <p><strong>[2] We run a zoning check</strong> — On your selected lot before your first call</p>
            <p><strong>[3] We contact you</strong> — To schedule your free on-site evaluation</p>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Check your inbox{email ? ` at ${email}` : ""} for your build summary.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            This is an inquiry only, not a purchase agreement or contract of any kind.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/build?step=1" className="px-4 py-2 rounded border border-border text-sm font-semibold">
              Browse More Land
            </Link>
            <Link href="/" className="px-4 py-2 rounded bg-primary text-primary-foreground text-sm font-semibold">
              Go Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
