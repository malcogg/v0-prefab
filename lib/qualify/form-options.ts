export type UiProjectType = "tiny_escape" | "earthnest" | "adu_backyard" | "village_rental" | "other"

export const PROJECT_TYPE_OPTIONS: { id: UiProjectType; label: string; hint: string }[] = [
  { id: "tiny_escape", label: "Tiny home (Escape Homes)", hint: "RVIA factory-built tiny homes" },
  { id: "earthnest", label: "EarthNest / prefab cabin", hint: "Systems-forward prefab + living systems" },
  { id: "adu_backyard", label: "ADU / backyard home", hint: "Foundation-aware backyard dwelling" },
  { id: "village_rental", label: "Village / rental property", hint: "Park model, hospitality, or community" },
  { id: "other", label: "Other / exploring", hint: "Tell us more in the notes" },
]

export const BUDGET_OPTIONS = [
  { id: "under_50k", label: "Under $50k" },
  { id: "50_80k", label: "$50k – $80k" },
  { id: "80_120k", label: "$80k – $120k" },
  { id: "120_160k", label: "$120k – $160k" },
  { id: "160k_plus", label: "$160k+" },
] as const

export const MODEL_TAG_OPTIONS = [
  "Traveler",
  "Traveler XL",
  "Vista",
  "Vista Boho",
  "ONE",
  "eVISTA",
  "eBOHO GO",
  "Ultimate",
  "Not sure yet",
] as const
