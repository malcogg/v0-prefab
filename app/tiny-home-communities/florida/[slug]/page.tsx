import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ExternalSiteLink } from "@/components/tiny-home-communities/external-site-link"
import { getFloridaCommunities, getFloridaCommunityBySlug, getFloridaSlugParams } from "@/lib/tiny-home-communities/repo"
import { breadcrumbSchema, SITE_URL } from "@/lib/seo"
import { STATUS_LABELS, TENANCY_LABELS } from "@/lib/tiny-home-communities/display"
import { communityLodgingSchema, floridaListingUrl } from "@/lib/tiny-home-communities/jsonld"
import { Mail, MapPin, Phone } from "lucide-react"

type PageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getFloridaSlugParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const community = getFloridaCommunityBySlug(slug)
  if (!community) return {}

  const canonicalPath = `/tiny-home-communities/florida/${slug}`

  return {
    title: `${community.name} | Florida Tiny Home Community`,
    description: community.description.slice(0, 155),
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: `${community.name} | Prefabricated.co`,
      description: community.description,
      url: `${SITE_URL}${canonicalPath}`,
      type: "article",
      images: [
        {
          url: community.image.url,
          width: 1400,
          height: 900,
          alt: community.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${community.name} · Prefabricated.co`,
      description: community.description,
      images: [community.image.url],
    },
  }
}

export default async function TinyHomeCommunityDetailPage({ params }: PageProps) {
  const { slug } = await params
  const community = getFloridaCommunityBySlug(slug)
  if (!community) notFound()

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Tiny Home Communities", path: "/tiny-home-communities" },
    { name: "Florida", path: "/tiny-home-communities/florida" },
    { name: community.name, path: `/tiny-home-communities/florida/${community.slug}` },
  ])

  const listingUrl = floridaListingUrl(community.slug)
  const lodging = communityLodgingSchema(community)

  const detailWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${listingUrl}#page`,
    url: listingUrl,
    name: `${community.name} · Florida Tiny Directory`,
    headline: community.name,
    description: community.description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Prefabricated.co",
      url: SITE_URL,
    },
    about: { "@id": `${listingUrl}#place` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: community.image.url,
    },
    mentions: { "@type": "AdministrativeArea", name: `${community.city}, FL` },
  }

  const siblingCommunities = getFloridaCommunities()
    .filter((c) => c.slug !== community.slug && (c.city === community.city || c.county === community.county))
    .slice(0, 3)

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodging) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(detailWebPageSchema) }} />
      <Navigation />

      <div className="pt-36 pb-10 bg-background">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          <Breadcrumb className="text-sm">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/tiny-home-communities">Tiny Home Communities</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/tiny-home-communities/florida">Florida</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{community.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid xl:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.42fr)] gap-10 xl:gap-14">
            <article className="space-y-6">
              <div className="relative aspect-[21/11] rounded-3xl overflow-hidden border border-border bg-secondary shadow-sm">
                <Image
                  src={community.image.url}
                  alt={community.image.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1280px) 95vw, 56vw"
                />
              </div>
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.25em] text-primary">{community.regionLabel}</p>
                <h1 className="font-serif text-4xl md:text-5xl text-foreground">{community.name}</h1>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge>{STATUS_LABELS[community.status]}</Badge>
                  {community.yearEstablished ? (
                    <Badge variant="secondary">Est. {community.yearEstablished}</Badge>
                  ) : null}
                  <Badge variant="outline">{community.schemaKind}</Badge>
                  {community.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-muted-foreground font-normal border-dashed">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">{community.description}</p>
              <div className="rounded-3xl bg-secondary/55 border border-border p-8 space-y-4">
                <div>
                  <h2 className="font-serif text-2xl text-foreground mb-2">Pads & tenancy snapshot</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{community.lotDetailsSummary}</p>
                </div>
                {community.statusDetail ? (
                  <p className="text-sm text-foreground bg-background/85 border border-border/80 rounded-xl p-4">{community.statusDetail}</p>
                ) : null}
                <Separator className="my-6" />
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Ownership models surfaced</p>
                  <div className="flex flex-wrap gap-2">
                    {community.tenancyModes.map((mode) => (
                      <Badge key={mode} variant="secondary" className="font-normal bg-background">
                        {TENANCY_LABELS[mode]}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <section className="space-y-3">
                <h2 className="font-serif text-3xl text-foreground">Infrastructure & stewardship amenities</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {community.amenities.map((amenity) => (
                    <li key={amenity} className="rounded-xl border border-border bg-background px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                      {amenity}
                    </li>
                  ))}
                </ul>
              </section>
              {community.legalNotes ? (
                <section className="rounded-3xl border border-dashed border-amber-200/70 bg-amber-50/60 p-6 text-sm text-amber-950 space-y-2">
                  <h2 className="font-semibold text-lg text-amber-950 flex items-center gap-2">
                    Stewardship disclosures
                  </h2>
                  <p>{community.legalNotes}</p>
                  <p>
                    Operators evolve rules—triple-check recorded covenants, county interpretations, HOA restrictions, occupancy certificates, and insurance binders aligned to
                    your exact structure classification.
                  </p>
                </section>
              ) : null}
            </article>

            <aside className="space-y-8">
              <div className="rounded-3xl border border-border bg-background p-6 shadow-sm sticky top-[120px]">
                <div className="flex items-start gap-3 pb-6">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" aria-hidden />
                  <div>
                    <p className="font-semibold text-foreground">{community.city}</p>
                    <p className="text-sm text-muted-foreground">{community.county}</p>
                  </div>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  {community.streetAddress ? <p>{community.streetAddress}</p> : null}
                  <p>{community.state}</p>
                  {community.postalCode ? <p>{community.postalCode}</p> : null}
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <h3 className="font-serif text-xl text-foreground">Official channels</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    {community.contact.website ? (
                      <div>
                        <p className="text-xs uppercase tracking-wide mb-1">Website</p>
                        <ExternalSiteLink href={community.contact.website} className="text-primary font-semibold break-all hover:underline">
                          {community.contact.website.replace(/^https?:\/\//, "")}
                        </ExternalSiteLink>
                      </div>
                    ) : (
                      <p>No public website surfaced—research via GIS, Sunbiz filings, county permits, or direct calls.</p>
                    )}
                    {community.contact.phone ? (
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" aria-hidden />
                        <a
                          className="hover:underline font-medium text-foreground"
                          href={`tel:${community.contact.phone.replace(/[^\d+]/g, "")}`}
                        >
                          {community.contact.phone}
                        </a>
                      </div>
                    ) : null}
                    {community.contact.email ? (
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" aria-hidden />
                        <a className="hover:underline font-medium text-foreground" href={`mailto:${community.contact.email}`}>
                          {community.contact.email}
                        </a>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-secondary border border-border p-6 text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Need on-site feasibility from Prefabricated.co?</strong> Backyard ADUs ≠ deed-restricted leasehold parcels. When you inherit
                an existing homestead, book a zoning-first evaluation—we map utilities, setbacks, wind exposure, foundations, EarthNest layering, but not HOA campground politics.
              </div>
              {siblingCommunities.length ? (
                <div className="rounded-3xl border border-border bg-background p-6 space-y-3">
                  <h3 className="font-serif text-2xl text-foreground">Related listings</h3>
                  <ul className="space-y-3 text-sm text-primary">
                    {siblingCommunities.map((neighbor) => (
                      <li key={neighbor.slug}>
                        <Link className="font-semibold hover:underline focus-visible:ring-2 focus-visible:ring-ring rounded" href={`/tiny-home-communities/florida/${neighbor.slug}`}>
                          {neighbor.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </aside>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
