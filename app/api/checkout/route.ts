import { NextResponse } from "next/server"
import Stripe from "stripe"
import { z } from "zod"

import { getEscapeModelBySlug, ESCAPE_CATALOG_PATH } from "@/lib/escape-tiny-homes-data"
import { SITE_URL, absoluteSiteUrl } from "@/lib/seo"

export const runtime = "nodejs"

const bodySchema = z.object({
  slug: z.string().min(1).max(80),
})

export async function POST(req: Request) {
  const secret = process.env.STRIPE_SECRET_KEY
  if (!secret) {
    return NextResponse.json(
      {
        error:
          "Stripe is not configured. Set STRIPE_SECRET_KEY in the environment. For local testing, use a test key from the Stripe dashboard.",
      },
      { status: 503 },
    )
  }

  let json: unknown
  try {
    json = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const parsed = bodySchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: "Missing or invalid slug" }, { status: 400 })
  }

  const model = getEscapeModelBySlug(parsed.data.slug)
  if (!model) {
    return NextResponse.json({ error: "Unknown model" }, { status: 404 })
  }

  const stripe = new Stripe(secret)

  const imageUrl = absoluteSiteUrl(model.heroImage)
  const successUrl = `${SITE_URL}${ESCAPE_CATALOG_PATH}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${SITE_URL}${ESCAPE_CATALOG_PATH}/${model.slug}`

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: model.sellingPriceCents,
            product_data: {
              name: `Escape — ${model.shortLabel} (${model.fullName})`,
              description: model.fullDescription.slice(0, 450),
              images: [imageUrl],
              metadata: {
                escape_slug: model.slug,
                escape_full_name: model.fullName,
              },
            },
          },
        },
      ],
      metadata: {
        escape_model_slug: model.slug,
        escape_model_name: model.fullName,
        selling_price_usd: String(model.sellingPriceUsd),
      },
      phone_number_collection: { enabled: true },
      billing_address_collection: "required",
      customer_creation: "always",
    })

    if (!session.url) {
      return NextResponse.json({ error: "Checkout session missing URL" }, { status: 500 })
    }

    return NextResponse.json({ url: session.url })
  } catch (e) {
    console.error("[checkout]", e)
    return NextResponse.json({ error: "Stripe could not create a checkout session." }, { status: 502 })
  }
}
