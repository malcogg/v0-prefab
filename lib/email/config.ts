/** Default Resend sandbox sender — replace with your verified domain in production. */
const DEFAULT_FROM = "PreFabricated.co <onboarding@resend.dev>"

export function getEmailFrom(): string {
  return process.env.RESEND_FROM_EMAIL?.trim() || DEFAULT_FROM
}

/** Inbox that receives lead / inquiry notifications. */
export function getTeamInbox(): string {
  return process.env.RESEND_TEAM_EMAIL?.trim() || "prefabflorida@gmail.com"
}
