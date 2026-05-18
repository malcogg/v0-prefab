import { NextRequest, NextResponse, type NextFetchEvent } from "next/server"
import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

/**
 * Optional: set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN (e.g. Upstash free tier)
 * to enable distributed rate limiting on POST /api/*. Without them, requests are not throttled here.
 */
function createLimiter(): Ratelimit | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null

  const redis = new Redis({ url, token })
  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(40, "60 s"),
    prefix: "prefab:api-post",
    analytics: false,
  })
}

const limiter = createLimiter()

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  if (request.method !== "POST" || !request.nextUrl.pathname.startsWith("/api")) {
    return NextResponse.next()
  }

  if (!limiter) {
    return NextResponse.next()
  }

  const forwarded = request.headers.get("x-forwarded-for")
  const ip =
    forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "127.0.0.1"

  const { success, reset, pending } = await limiter.limit(ip)
  event.waitUntil(pending)

  if (!success) {
    const retryAfterSec = Math.max(1, Math.ceil((reset - Date.now()) / 1000))
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again in a minute." },
      {
        status: 429,
        headers: { "Retry-After": String(retryAfterSec) },
      },
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/api/:path*",
}
