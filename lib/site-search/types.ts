export type SiteSearchKind = "blog" | "guide" | "tool" | "community" | "catalog"

export type SiteSearchHit = {
  title: string
  description: string
  href: string
  kind: SiteSearchKind
  kindLabel: string
}
