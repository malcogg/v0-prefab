import { ZodError } from "zod"

export function getClientIp(req: Request): string | null {
  const xff = req.headers.get("x-forwarded-for")
  if (!xff) return null
  return xff.split(",")[0]?.trim() || null
}

export async function readRequestBody(req: Request): Promise<Record<string, unknown>> {
  const contentType = req.headers.get("content-type") ?? ""

  if (contentType.includes("application/json")) {
    const json = (await req.json()) as unknown
    if (json && typeof json === "object" && !Array.isArray(json)) {
      return json as Record<string, unknown>
    }
    return {}
  }

  if (
    contentType.includes("application/x-www-form-urlencoded") ||
    contentType.includes("multipart/form-data")
  ) {
    const form = await req.formData()
    const obj: Record<string, unknown> = {}
    for (const [key, value] of form.entries()) {
      obj[key] = typeof value === "string" ? value : value.name
    }
    return obj
  }

  return {}
}

export function jsonError(status: number, message: string, details?: unknown) {
  return Response.json(
    { ok: false, error: message, details: details ?? null },
    { status, headers: { "content-type": "application/json" } }
  )
}

export function zodErrorToJson(err: ZodError) {
  const fieldErrors: Record<string, string[]> = {}
  for (const issue of err.issues) {
    const key = issue.path.join(".") || "root"
    fieldErrors[key] ||= []
    fieldErrors[key].push(issue.message)
  }
  return fieldErrors
}

