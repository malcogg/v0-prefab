/** Serialized qualify report returned from API and shown on thank-you step */

export type QualifyReportModel = {
  label: string
  slug?: string
  href: string
  reason: string
}

export type QualifyReportNextStep = {
  label: string
  href: string
}

export type QualifyReport = {
  headline: string
  summaryBullets: string[]
  models: QualifyReportModel[]
  floridaNotes: string[] | null
  timelineSummary: string
  nextSteps: QualifyReportNextStep[]
}
