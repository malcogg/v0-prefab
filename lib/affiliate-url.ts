import { AFFILIATE_LINKS } from "@/lib/affiliate-links"

const AFFILIATE_HOST_PATTERNS = [/amzn\.to/i, /amazon\.com/i, /amazon\.co\./i]

export function isAffiliateUrl(href: string): boolean {
  if (AFFILIATE_LINKS.some((r) => r.href === href)) return true
  try {
    const url = new URL(href)
    return AFFILIATE_HOST_PATTERNS.some((re) => re.test(url.hostname))
  } catch {
    return AFFILIATE_HOST_PATTERNS.some((re) => re.test(href))
  }
}

export function externalLinkRel(href: string): string {
  return isAffiliateUrl(href) ? "noopener noreferrer sponsored" : "noopener noreferrer"
}
