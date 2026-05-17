export type NavSectionId = "adu" | "tiny" | "regenerative" | "platform"

export type NavSectionIdentity = {
  id: NavSectionId
  /** Second line under Prefabricated.co — keep to one line; long lines rely on truncate + title tooltip. */
  tagline: string
  /** Topic after “You’re in:” in the nav pill */
  pillTopic: string
  accentClass: string
  pillClass: string
  /** Thin strip under main nav: left border accent (Tailwind border-l-* utilities). */
  contextStripClass: string
}

function normalizePath(pathname: string): string {
  const raw = pathname?.split("?")[0] ?? "/"
  if (raw.length > 1 && raw.endsWith("/")) return raw.slice(0, -1)
  return raw
}

/**
 * Route-aware brand context for nav: tagline under logo, accent strip, and “You’re in” pill.
 */
export function getNavSectionIdentity(pathname: string): NavSectionIdentity {
  const path = normalizePath(pathname)

  if (path.startsWith("/escape-tiny-homes")) {
    return {
      id: "adu",
      tagline: "Escape tiny homes — 2026 lineup",
      pillTopic: "Escape · checkout ready",
      accentClass: "bg-primary",
      pillClass: "border-primary/35 text-foreground/90 bg-primary/08",
      contextStripClass: "border-l-[3px] border-l-primary",
    }
  }

  if (path.startsWith("/tiny-home-communities") || path === "/florida-tiny-living-guide") {
    return {
      id: "tiny",
      tagline: "Tiny home communities",
      pillTopic: "Tiny communities",
      accentClass: "bg-[oklch(0.52_0.14_265)]",
      pillClass:
        "border-[oklch(0.52_0.14_265)]/35 text-[oklch(0.38_0.1_265)] bg-[oklch(0.52_0.14_265)]/08",
      contextStripClass: "border-l-[3px] border-l-[oklch(0.52_0.14_265)]",
    }
  }

  if (
    path === "/earthnest-living-systems" ||
    path === "/florida-growing-zones-homestead-planning" ||
    path === "/closed-loop-homestead"
  ) {
    return {
      id: "regenerative",
      tagline: "Regenerative homestead & food systems",
      pillTopic: "Regenerative homestead",
      accentClass: "bg-[oklch(0.52_0.11_155)]",
      pillClass:
        "border-[oklch(0.52_0.11_155)]/40 text-[oklch(0.32_0.08_155)] bg-[oklch(0.52_0.11_155)]/10",
      contextStripClass: "border-l-[3px] border-l-[oklch(0.52_0.11_155)]",
    }
  }

  if (["/about", "/contact", "/faq", "/resources"].includes(path)) {
    return {
      id: "platform",
      tagline: "Prefab · tiny · homestead",
      pillTopic: "Guides & tools",
      accentClass: "bg-primary",
      pillClass: "border-primary/35 text-foreground/90 bg-primary/08",
      contextStripClass: "border-l-[3px] border-l-primary",
    }
  }

  return {
    id: "adu",
    tagline: "Tiny homes, ADUs & backyard builds",
    pillTopic: "Discovery hub",
    accentClass: "bg-primary",
    pillClass: "border-primary/35 text-foreground/90 bg-primary/08",
    contextStripClass: "border-l-[3px] border-l-primary",
  }
}

/** Show the section pill on desktop when it adds clarity (hide on home to avoid duplicate noise). */
export function showSectionPill(pathname: string, identity: NavSectionIdentity): boolean {
  const path = normalizePath(pathname)
  if (identity.id === "tiny" || identity.id === "regenerative" || identity.id === "platform") {
    return true
  }
  if (identity.id === "adu" && path !== "/") {
    return true
  }
  return false
}
