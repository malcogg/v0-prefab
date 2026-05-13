import { Resend } from "resend"
import { getEmailFrom, getTeamInbox } from "@/lib/email/config"

let resendClient: Resend | null | undefined

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY?.trim()
  if (!key) return null
  if (resendClient === undefined) {
    resendClient = new Resend(key)
  }
  return resendClient
}

export type SendResult =
  | { ok: true; id?: string }
  | { ok: false; skipped: true }
  | { ok: false; error: string }

export async function sendEmail(options: {
  to: string | string[]
  subject: string
  html: string
  replyTo?: string
  from?: string
}): Promise<SendResult> {
  const resend = getResend()
  if (!resend) {
    console.warn("[email] RESEND_API_KEY is not set; skipping send")
    return { ok: false, skipped: true }
  }

  const from = options.from ?? getEmailFrom()

  try {
    const { data, error } = await resend.emails.send({
      from,
      to: options.to,
      subject: options.subject,
      html: options.html,
      ...(options.replyTo ? { replyTo: options.replyTo } : {}),
    })

    if (error) {
      console.error("[email] Resend API error:", error.message)
      return { ok: false, error: error.message }
    }

    return { ok: true, id: data?.id }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    console.error("[email] send failed:", err)
    return { ok: false, error: message }
  }
}

export async function sendEmailWithAttachments(options: {
  to: string
  subject: string
  html: string
  replyTo?: string
  from?: string
  attachments: Array<{ filename: string; content: Uint8Array }>
}): Promise<SendResult> {
  const resend = getResend()
  if (!resend) {
    console.warn("[email] RESEND_API_KEY is not set; skipping send")
    return { ok: false, skipped: true }
  }

  const from = options.from ?? getEmailFrom()

  try {
    const { data, error } = await resend.emails.send({
      from,
      to: options.to,
      subject: options.subject,
      html: options.html,
      ...(options.replyTo ? { replyTo: options.replyTo } : {}),
      attachments: options.attachments.map((a) => ({
        filename: a.filename,
        content: Buffer.from(a.content).toString("base64"),
      })),
    })

    if (error) {
      console.error("[email] Resend API error:", error.message)
      return { ok: false, error: error.message }
    }

    return { ok: true, id: data?.id }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    console.error("[email] send with attachments failed:", err)
    return { ok: false, error: message }
  }
}

export async function notifyTeam(options: {
  subject: string
  html: string
  replyTo?: string
}): Promise<SendResult> {
  return sendEmail({
    to: getTeamInbox(),
    subject: options.subject,
    html: options.html,
    replyTo: options.replyTo,
  })
}
