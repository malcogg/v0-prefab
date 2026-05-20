export type RequirementStatus = "active" | "coming_soon"

export type AduTypeRequirement = {
  id: string
  title: string
  subtitle: string
  requirements: string[]
}

export type EligibilityBlock = {
  title: string
  body: string | string[]
}

export type JurisdictionContact = {
  label: string
  phone?: string
  email?: string
  note?: string
}

export type JurisdictionRequirements = {
  id: string
  name: string
  status: RequirementStatus
  sourceUrl: string
  sourceLabel: string
  intro: string
  eligibilityTitle: string
  eligibilityIntro: string
  eligibilityBlocks: EligibilityBlock[]
  eligibilityNote: string
  eligibilitySource: string
  aduTypes: AduTypeRequirement[]
  permitProcessSteps: string[]
  contacts: JurisdictionContact[]
  disclaimer: string
}

export type StateRequirementsBlueprint = {
  id: string
  name: string
  abbr: string
  status: RequirementStatus
  /** Primary jurisdiction shown on homepage (Florida only today) */
  featuredJurisdictionId?: string
  jurisdictions: Array<{
    id: string
    name: string
    status: RequirementStatus
    hubPath?: string
  }>
  comingSoonMessage?: string
}
