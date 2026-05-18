# Data handling inventory (internal)

Short operational map: what the site stores, which secrets exist, and who should have access. Update when you add forms, tables, or third parties.

## Environment variables (secrets and config)

| Variable | Role |
| --- | --- |
| `NEON_DATABASE_URL` | Postgres (Neon) connection; all lead/report rows |
| `RESEND_API_KEY` | Outbound email (transactional + team notifications) |
| `STRIPE_SECRET_KEY` | Stripe Checkout session creation (`/api/checkout`) |
| `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` | Optional: distributed rate limit for `POST /api/*` in middleware |
| `NEXT_PUBLIC_*` | Client-visible config only; never put secrets here |

Document in your password manager / Vercel project which envs exist in **production** vs **preview** vs **local**.

## Database tables (PII-bearing)

Source of truth: `db/schema.sql`.

| Table | Typical contents |
| --- | --- |
| `leads` | Name, phone, email, address, form answers, UA, IP |
| `escape_purchase_intent_leads` | Email, model, state, land situation, optional name/phone, UA, IP |
| `progression_submissions` | Quiz/progression answers, contact, UA, IP |
| `build_inquiries` | Contact, message, lot/model JSON, UA, IP |
| `starter_kit_downloads` | Name, email, source, UA, IP |
| `homestead_zone_report_downloads` | Contact, zone metadata, full `snapshot_json`, UA, IP |
| `qualify_submissions` | Express + full qualify flows; `payload` / `report_json`, UA, IP |

## Third-party processors

- **Neon**: database host.
- **Resend**: email delivery.
- **Stripe**: payment sessions; card data stays with Stripe.
- **Vercel**: hosting, request logs (may include IPs, paths).
- **Google Analytics** (if enabled): usage metrics; see public privacy policy.
- **Upstash** (optional): IP + rate-limit counters only for throttling.

## Access checklist (who has keys)

- [ ] Neon: production DB role restricted to people who need read/write for support and migrations.
- [ ] Vercel: team members limited to required roles; environment variables not exported into chat or tickets.
- [ ] Resend: account access for bounce/suppression and domain alignment only as needed.
- [ ] Stripe: separate test vs live keys; minimal dashboard access.
- [ ] Domain/DNS: who can change SPF/DKIM for Resend.

## Security testing (OWASP-oriented)

- **Dependency audit**: run `pnpm audit` regularly (see `package.json` script). Fix or document accepted risks.
- **DAST**: run an approved scanner against **staging** (not production) on a schedule or before major releases; track findings in your issue tracker.

## Retention and deletion

Define internally how long rows are kept and how a user can request deletion or export (align with `/privacy`).
