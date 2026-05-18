/**
 * Avoid logging full Error objects or arbitrary payloads in production
 * (stack traces / nested data can include connection hints).
 */
function redactForProd(value: unknown): string {
  if (value instanceof Error) return value.message
  if (typeof value === "string") return value.length > 500 ? `${value.slice(0, 500)}…` : value
  if (value && typeof value === "object" && "message" in value) {
    const m = (value as { message: unknown }).message
    if (typeof m === "string") return m.length > 500 ? `${m.slice(0, 500)}…` : m
  }
  try {
    const s = JSON.stringify(value)
    return s.length > 500 ? `${s.slice(0, 500)}…` : s
  } catch {
    return "[unserializable]"
  }
}

export function logApiError(scope: string, err: unknown): void {
  if (process.env.NODE_ENV === "production") {
    console.error(`[${scope}]`, redactForProd(err))
  } else {
    console.error(`[${scope}]`, err)
  }
}
