"use client"

import Link from "next/link"

type ThankYouProps = {
  modelName?: string
  email?: string
}

export function ThankYou({ modelName, email }: ThankYouProps) {
  return (
    <section className="py-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="rounded-lg border border-border bg-card p-8">
          <h2 className="font-serif text-4xl mb-3">You&apos;re on your way.</h2>
          <p className="text-muted-foreground mb-5">
            We have received your build inquiry for the{" "}
            <strong>{modelName ?? "EarthNest model you selected"}</strong> and your customization selections.
          </p>
          <div className="space-y-4 text-sm">
            <p><strong>[1] Within one business day</strong> — We review your home and finish selections</p>
            <p><strong>[2] Property fit</strong> — We plan how to confirm zoning, setbacks, and utilities on your site</p>
            <p><strong>[3] We contact you</strong> — To schedule your free on-site evaluation when you&apos;re ready</p>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Check your inbox{email ? ` at ${email}` : ""} for your build summary.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            This is an inquiry only, not a purchase agreement or contract of any kind.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/build?step=1" className="px-4 py-2 rounded border border-border text-sm font-semibold">
              Configure Another Home
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
