/** States with curated directory data (URL slug → display label). */
export const DIRECTORY_STATES = [
  { slug: "florida", label: "Florida", code: "FL" },
  { slug: "north-carolina", label: "North Carolina", code: "NC" },
  { slug: "texas", label: "Texas", code: "TX" },
  { slug: "california", label: "California", code: "CA" },
  { slug: "colorado", label: "Colorado", code: "CO" },
  { slug: "georgia", label: "Georgia", code: "GA" },
  { slug: "oregon", label: "Oregon", code: "OR" },
  { slug: "arizona", label: "Arizona", code: "AZ" },
  { slug: "south-carolina", label: "South Carolina", code: "SC" },
  { slug: "tennessee", label: "Tennessee", code: "TN" },
  { slug: "ohio", label: "Ohio", code: "OH" },
  { slug: "virginia", label: "Virginia", code: "VA" },
  { slug: "alabama", label: "Alabama", code: "AL" },
  { slug: "kentucky", label: "Kentucky", code: "KY" },
  { slug: "michigan", label: "Michigan", code: "MI" },
] as const

export type DirectoryStateSlug = (typeof DIRECTORY_STATES)[number]["slug"]

export function directoryStateLabel(slug: string): string {
  const row = DIRECTORY_STATES.find((s) => s.slug === slug)
  return row?.label ?? slug
}

export function isDirectoryStateSlug(slug: string): slug is DirectoryStateSlug {
  return DIRECTORY_STATES.some((s) => s.slug === slug)
}
