export type SelectOption = { id: string; label: string; price: number; swatch?: string }
export type MultiOption = { id: string; label: string; price: number }

export const EXTERIOR_OPTIONS = {
  siding: [
    { id: "weathered-cedar", label: "Weathered Cedar", price: 0 },
    { id: "hardie-board", label: "Hardie Board", price: 0 },
    { id: "metal-panel", label: "Metal Panel", price: 1500 },
    { id: "smooth-stucco", label: "Smooth Stucco", price: 0 },
  ] satisfies SelectOption[],
  roof: [
    { id: "standing-seam-dark", label: "Standing Seam Metal (dark)", price: 0 },
    { id: "shingle-charcoal", label: "Shingle (charcoal)", price: 0 },
    { id: "corrugated-metal", label: "Corrugated Metal", price: 0 },
  ] satisfies SelectOption[],
  colorPalette: [
    { id: "warm-white", label: "Warm White", price: 0, swatch: "#F3EFE8" },
    { id: "slate-gray", label: "Slate Gray", price: 0, swatch: "#626A72" },
    { id: "sage-green", label: "Sage Green", price: 0, swatch: "#8A9B86" },
    { id: "charcoal-black", label: "Charcoal Black", price: 0, swatch: "#2D3138" },
    { id: "sand-beige", label: "Sand Beige", price: 0, swatch: "#D9C8B0" },
    { id: "deep-navy", label: "Deep Navy", price: 0, swatch: "#24324A" },
  ] satisfies SelectOption[],
  door: [
    { id: "modern-pivot", label: "Modern Pivot", price: 800 },
    { id: "sliding-glass", label: "Sliding Glass", price: 1200 },
    { id: "traditional-panel", label: "Traditional Panel", price: 0 },
  ] satisfies SelectOption[],
  windowFrame: [
    { id: "black-aluminum", label: "Black Aluminum", price: 0 },
    { id: "bronze", label: "Bronze", price: 0 },
    { id: "white", label: "White", price: 0 },
  ] satisfies SelectOption[],
}

export const INTERIOR_OPTIONS = {
  flooring: [
    { id: "lvp-light-oak", label: "Luxury Vinyl Plank (light oak)", price: 0 },
    { id: "lvp-dark-walnut", label: "Luxury Vinyl Plank (dark walnut)", price: 0 },
    { id: "polished-concrete", label: "Polished Concrete", price: 1800 },
    { id: "ceramic-tile", label: "Ceramic Tile", price: 900 },
  ] satisfies SelectOption[],
  cabinets: [
    { id: "white-shaker", label: "White Shaker", price: 0 },
    { id: "natural-wood", label: "Natural Wood", price: 0 },
    { id: "charcoal-flat-panel", label: "Charcoal Flat Panel", price: 600 },
  ] satisfies SelectOption[],
  countertop: [
    { id: "white-quartz", label: "White Quartz", price: 0 },
    { id: "butcher-block", label: "Butcher Block", price: 0 },
    { id: "concrete-gray", label: "Concrete Gray", price: 400 },
  ] satisfies SelectOption[],
  fixtures: [
    { id: "matte-black", label: "Matte Black", price: 0 },
    { id: "brushed-nickel", label: "Brushed Nickel", price: 0 },
    { id: "brushed-gold", label: "Brushed Gold", price: 500 },
  ] satisfies SelectOption[],
  wallAccent: [
    { id: "smooth-drywall", label: "Smooth Drywall", price: 0 },
    { id: "shiplap-accent", label: "Shiplap Accent", price: 700 },
    { id: "exposed-cmu", label: "Exposed Concrete Block", price: 0 },
  ] satisfies SelectOption[],
}

export const SYSTEM_OPTIONS = {
  hvac: [
    { id: "standard-mini-split", label: "Standard Mini-Split", price: 0 },
    { id: "high-eff-mini-split", label: "High-Efficiency Mini-Split", price: 2000 },
  ] satisfies SelectOption[],
  addOns: [
    { id: "solar-ready", label: "Solar ready wiring", price: 1500 },
    { id: "ev-rough-in", label: "EV charger rough-in", price: 800 },
    { id: "water-filtration", label: "Whole-home water filtration", price: 1200 },
    { id: "smart-hub", label: "Smart home hub wiring", price: 600 },
  ] satisfies MultiOption[],
}

export const INCLUDED_BADGES = [
  "Closed-cell spray foam insulation",
  "Concrete slab foundation",
  "Mini-split HVAC",
  "LED lighting package",
  "Full kitchen and bath",
]
