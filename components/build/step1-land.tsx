"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { CheckCircle2, MapPin } from "lucide-react"
import type { LandListing } from "@/lib/build/land-adapter"
import { formatCurrency } from "@/lib/build/pricing"
import { cn } from "@/lib/utils"

declare global {
  interface Window {
    L?: any
  }
}

type Step1LandProps = {
  listings: LandListing[]
  selectedLotId: string | null
  onSelectLot: (listing: LandListing) => void
}

export function Step1Land({ listings, selectedLotId, onSelectLot }: Step1LandProps) {
  const [county, setCounty] = useState("All")
  const [query, setQuery] = useState("")
  const [maxPrice, setMaxPrice] = useState(500000)
  const [minAcres, setMinAcres] = useState(0.25)
  const [showMapMobile, setShowMapMobile] = useState(false)

  const mapRef = useRef<HTMLDivElement | null>(null)
  const mapInstance = useRef<any>(null)
  const markersLayer = useRef<any>(null)

  const counties = useMemo(
    () => ["All", ...Array.from(new Set(listings.map((listing) => listing.county)))],
    [listings]
  )

  const filtered = useMemo(() => {
    return [...listings]
      .filter((listing) => county === "All" || listing.county === county)
      .filter((listing) => listing.askingPrice <= maxPrice)
      .filter((listing) => listing.lotSizeAcres >= minAcres)
      .filter((listing) =>
        query.trim().length === 0
          ? true
          : `${listing.address} ${listing.city} ${listing.county} ${listing.zoning}`
              .toLowerCase()
              .includes(query.toLowerCase())
      )
      .sort((a, b) => a.daysOnMarket - b.daysOnMarket)
  }, [listings, county, maxPrice, minAcres, query])

  useEffect(() => {
    if (!mapRef.current || typeof window === "undefined") return
    let mounted = true

    const ensureLeaflet = async () => {
      if (!document.querySelector("link[data-leaflet]")) {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
        link.setAttribute("data-leaflet", "true")
        document.head.appendChild(link)
      }
      if (!window.L) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script")
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"
          script.async = true
          script.onload = () => resolve()
          script.onerror = () => reject(new Error("Failed to load Leaflet"))
          document.body.appendChild(script)
        })
      }
      if (!mounted || !window.L || mapInstance.current) return
      const L = window.L
      mapInstance.current = L.map(mapRef.current).setView([28.5383, -81.3792], 10)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(mapInstance.current)
      markersLayer.current = L.layerGroup().addTo(mapInstance.current)
    }

    ensureLeaflet().catch(() => {})
    return () => {
      mounted = false
    }
  }, [])

  useEffect(() => {
    if (!window.L || !mapInstance.current || !markersLayer.current) return
    const L = window.L
    markersLayer.current.clearLayers()
    filtered.forEach((listing) => {
      const selected = listing.id === selectedLotId
      const marker = L.circleMarker([listing.lat, listing.lng], {
        radius: selected ? 9 : 7,
        color: selected ? "#0F6E56" : "#4B5563",
        fillColor: selected ? "#0F6E56" : "#6B7280",
        fillOpacity: 0.9,
      })
      marker
        .bindPopup(
          `<div style="font-family: system-ui; min-width: 180px;">
            <strong>${listing.address}</strong><br/>
            ${listing.city}, ${listing.county}<br/>
            ${formatCurrency(listing.askingPrice)} · ${listing.lotSizeAcres.toFixed(2)} acres
          </div>`
        )
        .on("click", () => onSelectLot(listing))
      marker.addTo(markersLayer.current)
    })
    const selectedListing = filtered.find((listing) => listing.id === selectedLotId)
    if (selectedListing) {
      mapInstance.current.setView([selectedListing.lat, selectedListing.lng], 12, { animate: true })
    }
  }, [filtered, selectedLotId, onSelectLot])

  return (
    <section className="py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-6">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-3">Pick your land.</h1>
          <p className="text-muted-foreground max-w-3xl">
            Search by county, price, and lot size. Select a lot to move directly into model selection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search city, address, zoning..."
            className="rounded border border-border px-3 py-2 text-sm"
          />
          <select value={county} onChange={(e) => setCounty(e.target.value)} className="rounded border border-border px-3 py-2 text-sm">
            {counties.map((entry) => (
              <option key={entry} value={entry}>
                {entry}
              </option>
            ))}
          </select>
          <div className="rounded border border-border px-3 py-2">
            <label className="text-xs text-muted-foreground">Max Price: {formatCurrency(maxPrice)}</label>
            <input type="range" min={50000} max={500000} step={5000} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full" />
          </div>
          <select
            value={String(minAcres)}
            onChange={(e) => setMinAcres(Number(e.target.value))}
            className="rounded border border-border px-3 py-2 text-sm"
          >
            {[0.1, 0.25, 0.5, 0.75, 1].map((value) => (
              <option key={value} value={value}>
                Min Acres: {value}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={() => setShowMapMobile((prev) => !prev)}
          className="md:hidden mb-3 px-4 py-2 border border-border rounded text-sm"
        >
          {showMapMobile ? "Hide Map" : "View Map"}
        </button>

        <div className="grid md:grid-cols-2 gap-5">
          <div className={cn("h-[460px] rounded-lg border border-border overflow-hidden", !showMapMobile && "hidden md:block")}>
            <div ref={mapRef} className="w-full h-full bg-secondary" />
          </div>

          <div className="h-[460px] overflow-y-auto border border-border rounded-lg p-3 bg-background">
            <div className="space-y-3">
              {filtered.map((listing) => {
                const selected = selectedLotId === listing.id
                return (
                  <article
                    key={listing.id}
                    className={cn(
                      "rounded-lg border bg-card p-3 transition-all",
                      selected ? "border-primary ring-1 ring-primary" : "border-border hover:shadow-sm"
                    )}
                  >
                    <div className="flex gap-3">
                      <img src={listing.photo} alt={`${listing.address} land listing`} className="w-24 h-24 object-cover rounded" loading="lazy" />
                      <div className="flex-1">
                        <div className="flex justify-between gap-2">
                          <p className="text-sm font-semibold text-foreground">
                            {listing.city}, {listing.county}
                          </p>
                          <p className="text-sm font-semibold text-foreground">{formatCurrency(listing.askingPrice)}</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {listing.lotSizeAcres.toFixed(2)} acres | Zoning: {listing.zoning}
                        </p>
                        <p className="text-xs mt-1">
                          {listing.aduEligible ? (
                            <span className="text-primary font-medium">ADU Eligible - verify during evaluation</span>
                          ) : (
                            <span className="text-amber-700 font-medium">Verify zoning for ADU pathway</span>
                          )}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          MLS# {listing.mlsNumber} · {listing.daysOnMarket} days on market
                        </p>
                        <button
                          type="button"
                          onClick={() => onSelectLot(listing)}
                          className={cn(
                            "mt-2 inline-flex items-center px-3 py-1.5 rounded text-xs font-semibold",
                            selected ? "bg-primary/15 text-primary" : "bg-primary text-primary-foreground"
                          )}
                        >
                          {selected ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Selected
                            </>
                          ) : (
                            <>
                              <MapPin className="w-3.5 h-3.5 mr-1" /> Select This Lot
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
              {filtered.length === 0 ? <p className="text-sm text-muted-foreground py-8">No listings match your filters.</p> : null}
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
          Land listings are sourced from Stellar MLS and are subject to change without notice. Information deemed reliable but not guaranteed. All real estate services provided by Simi Lakhani, licensed Florida REALTOR®, Keller Williams Classic Realty, Southwest Realtors. Equal Housing Opportunity.
        </p>
      </div>
    </section>
  )
}
