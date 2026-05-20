import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Map, PlayCircle } from "lucide-react"

import { ExternalSiteLink } from "@/components/tiny-home-communities/external-site-link"
import { Separator } from "@/components/ui/separator"
import {
  getCommunityLocalCta,
  isTbdValue,
  resolveProfileField,
  TBD_RESEARCH,
} from "@/lib/tiny-home-communities/directory-profile"
import type { TinyHomeCommunity } from "@/lib/tiny-home-communities/schema"

type CommunityDirectoryProfileProps = {
  community: TinyHomeCommunity
}

function ProfileValue({ value }: { value: string }) {
  if (isTbdValue(value)) {
    return <span className="text-amber-800/90 italic font-medium">{value}</span>
  }
  return <span className="text-foreground">{value}</span>
}

function SpecTable({
  rows,
}: {
  rows: { label: string; value: string }[]
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-background">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/40">
            <th className="text-left p-4 font-semibold text-foreground w-[38%]">Technical Parameter</th>
            <th className="text-left p-4 font-semibold text-foreground">Requirement / Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-border last:border-b-0">
              <td className="p-4 font-medium text-foreground align-top">{row.label}</td>
              <td className="p-4 text-muted-foreground align-top leading-relaxed">
                <ProfileValue value={row.value} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ProseBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        <ProfileValue value={body} />
      </p>
    </div>
  )
}

function youtubeEmbedId(url: string): string | null {
  try {
    const u = new URL(url)
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1) || null
    if (u.hostname.includes("youtube.com")) return u.searchParams.get("v")
  } catch {
    return null
  }
  return null
}

export function CommunityDirectoryProfile({ community }: CommunityDirectoryProfileProps) {
  const profile = community.directoryProfile ?? {}
  const park = profile.parkSpecs ?? {}
  const financials = profile.financials ?? {}
  const homeSpecs = profile.homeSpecifications ?? {}
  const sustainability = profile.sustainability ?? {}
  const media = profile.media ?? {}

  const localCta = getCommunityLocalCta(community.county, community.stateCode, profile.localCta)

  const parkRows = [
    { label: "Power Infrastructure", value: resolveProfileField(park.powerInfrastructure) },
    { label: "Waste & Sewer System", value: resolveProfileField(park.wasteSewerSystem) },
    { label: "Build Certifications", value: resolveProfileField(park.buildCertifications) },
    { label: "Pet Constraints", value: resolveProfileField(park.petConstraints) },
  ]

  const videoId = media.videoTourUrl ? youtubeEmbedId(media.videoTourUrl) : null
  const sitePlanUrl = media.sitePlanUrl?.trim()
  const hasSitePlan = Boolean(sitePlanUrl && sitePlanUrl.length > 0)

  return (
    <section className="space-y-10" aria-labelledby="directory-profile-heading">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">Placement intelligence</p>
        <h2 id="directory-profile-heading" className="font-serif text-3xl text-foreground">
          Park specs & operating terms
        </h2>
        <p className="text-sm text-muted-foreground mt-2 max-w-prose leading-relaxed">
          Structured pass/fail data for THOW and modular siting—sourced from operator materials and independent
          research. Fields marked {TBD_RESEARCH} are queued for verification.
        </p>
      </div>

      {/* 1. Park Specs */}
      <div className="space-y-4">
        <h3 className="font-serif text-2xl text-foreground">Quick-glance park specs</h3>
        <SpecTable rows={parkRows} />
      </div>

      <Separator className="my-8" />

      {/* 2. Financials */}
      <div className="space-y-5 rounded-3xl border border-border bg-secondary/40 p-8">
        <h3 className="font-serif text-2xl text-foreground">Financials & leasing terms</h3>
        <ProseBlock
          title="Lot rent benchmarks"
          body={resolveProfileField(financials.lotRentBenchmarks)}
        />
        <ProseBlock
          title="Utility inclusions"
          body={resolveProfileField(financials.utilityInclusions)}
        />
        <ProseBlock title="Lease mechanics" body={resolveProfileField(financials.leaseMechanics)} />
      </div>

      <Separator className="my-8" />

      {/* 3. Home specifications */}
      <div className="space-y-5">
        <h3 className="font-serif text-2xl text-foreground">Home specifications & placement rules</h3>
        <ProseBlock
          title="Dimensional thresholds"
          body={resolveProfileField(homeSpecs.dimensionalThresholds)}
        />
        <ProseBlock
          title="Aesthetic controls & covenants"
          body={resolveProfileField(homeSpecs.aestheticControls)}
        />
      </div>

      <Separator className="my-8" />

      {/* 4. Sustainability */}
      <div className="space-y-5 rounded-3xl border border-emerald-200/70 bg-emerald-50/50 p-8">
        <h3 className="font-serif text-2xl text-foreground">Sustainability & permaculture allowances</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          EarthNest-aligned buyers should confirm closed-loop systems against recorded park rules—not just municipal
          code.
        </p>
        <ProseBlock
          title="Alternative waste systems"
          body={resolveProfileField(sustainability.alternativeWasteSystems)}
        />
        <ProseBlock
          title="Off-grid adaptations"
          body={resolveProfileField(sustainability.offGridAdaptations)}
        />
        <ProseBlock
          title="Site edibles & gardens"
          body={resolveProfileField(sustainability.siteEdiblesGardens)}
        />
      </div>

      <Separator className="my-8" />

      {/* 5. Media & CTA */}
      <div className="space-y-6">
        <h3 className="font-serif text-2xl text-foreground">Media & site documentation</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-dashed border-border bg-muted/20 p-6 space-y-4">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Map className="h-5 w-5 text-primary" aria-hidden />
              Park map / site plan
            </div>
            {hasSitePlan ? (
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-background">
                <Image
                  src={sitePlanUrl!}
                  alt={media.sitePlanAlt?.trim() || `${community.name} site plan`}
                  fill
                  className="object-contain bg-white"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            ) : (
              <p className="text-sm text-muted-foreground leading-relaxed">
                <ProfileValue value={TBD_RESEARCH} />
              </p>
            )}
          </div>

          <div className="rounded-2xl border border-dashed border-border bg-muted/20 p-6 space-y-4">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <PlayCircle className="h-5 w-5 text-primary" aria-hidden />
              Video tour
            </div>
            {videoId ? (
              <div className="aspect-video rounded-xl overflow-hidden border border-border bg-black">
                <iframe
                  title={media.videoTourTitle || `${community.name} video tour`}
                  src={`https://www.youtube.com/embed/${videoId}`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : media.videoTourUrl ? (
              <ExternalSiteLink href={media.videoTourUrl} className="text-sm text-primary font-semibold hover:underline">
                {media.videoTourTitle || "Open video tour"}
              </ExternalSiteLink>
            ) : (
              <p className="text-sm text-muted-foreground leading-relaxed">
                <ProfileValue value={TBD_RESEARCH} />
              </p>
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 space-y-4">
          <h4 className="font-serif text-xl text-foreground">Planning land you own in {community.county}?</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {localCta.helperText ??
              "Village pad leases differ from owning a lot with a permitted backyard ADU—route into county-aware tools before you commit."}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={localCta.href}
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
            >
              {localCta.label}
            </Link>
            <Link
              href="/adu-rules"
              className="inline-flex items-center px-5 py-3 border border-border text-sm font-semibold rounded hover:border-primary/40"
            >
              ADU rules directory
            </Link>
            <Link
              href="/florida-growing-zones-homestead-planning"
              className="inline-flex items-center gap-1.5 px-5 py-3 border border-border text-sm font-semibold rounded hover:border-primary/40"
            >
              Homestead zones tool
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </Link>
            {community.stateSlug === "florida" ? (
              <Link
                href="/tiny-home-communities/florida"
                className="inline-flex items-center px-5 py-3 border border-border text-sm font-semibold rounded hover:border-primary/40"
              >
                Browse Florida communities
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
