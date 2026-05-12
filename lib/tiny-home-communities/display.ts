import type { CommunityStatus, TenancyMode } from "./schema"

export const STATUS_LABELS: Record<CommunityStatus, string> = {
  active: "Active",
  waitlist: "Waitlist",
  contact_for_availability: "Contact for availability",
  expanding: "Expanding",
  mixed: "Mixed availability",
}

export const TENANCY_LABELS: Record<TenancyMode, string> = {
  lease_land_own_home: "Own home · lease land",
  rent_home_or_lot: "Rent home or pad",
  purchase_home_on_site: "Purchase home on site",
  purchase_or_rent_mix: "Purchase or rent mix",
  unspecified: "Varies · confirm with community",
}
