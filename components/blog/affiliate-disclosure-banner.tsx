import Link from "next/link"

export function AffiliateDisclosureBanner({ className = "" }: { className?: string }) {
  return (
    <aside
      className={`rounded-xl border border-border bg-secondary/70 px-4 py-3 text-sm text-muted-foreground leading-relaxed ${className}`}
      role="note"
    >
      <strong className="text-foreground font-semibold">Affiliate disclosure.</strong> Prefabricated.co may earn a
      commission on qualifying purchases from links on this page. It does not change your price. We only suggest
      categories or items when they fit the educational topic—verify specs, codes, and warranties yourself.{" "}
      <Link href="/affiliate-disclosure" className="font-medium text-primary underline underline-offset-4 hover:no-underline">
        Full policy
      </Link>
      .
    </aside>
  )
}
