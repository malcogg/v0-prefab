-- Run this in Neon SQL Editor to create tables.

create table if not exists leads (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),

  name text not null,
  phone text not null,
  email text not null,
  address text not null,
  owns_property text not null,
  model_interest text not null,

  user_agent text null,
  ip text null
);

create index if not exists leads_created_at_idx on leads (created_at desc);
create index if not exists leads_email_idx on leads (email);

-- Escape tiny home model pages: interest list while Stripe checkout is paused / partnership ramps.
create table if not exists escape_purchase_intent_leads (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),

  email text not null,
  escape_model_slug text not null,
  escape_model_label text not null,

  state_code text not null,
  land_situation text not null,

  name text null,
  phone text null,

  user_agent text null,
  ip text null
);

create index if not exists escape_purchase_intent_created_idx
  on escape_purchase_intent_leads (created_at desc);
create index if not exists escape_purchase_intent_email_idx
  on escape_purchase_intent_leads (email);
create index if not exists escape_purchase_intent_slug_idx
  on escape_purchase_intent_leads (escape_model_slug);

create table if not exists progression_submissions (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),

  county text not null,
  property_type text not null,
  lot_size text not null,
  hoa text not null,
  flood_zone text not null,
  goal text not null,
  model_interest text not null,

  name text not null,
  email text not null,
  phone text not null,

  user_agent text null,
  ip text null
);

create index if not exists progression_created_at_idx on progression_submissions (created_at desc);
create index if not exists progression_email_idx on progression_submissions (email);

create table if not exists build_inquiries (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),

  name text not null,
  phone text not null,
  email text not null,
  hear_about text null,
  message text null,

  lot_json jsonb null,
  model_id text null,
  customizations_json jsonb not null,

  user_agent text null,
  ip text null
);

create index if not exists build_inquiries_created_at_idx on build_inquiries (created_at desc);
create index if not exists build_inquiries_email_idx on build_inquiries (email);

create table if not exists starter_kit_downloads (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),

  name text not null,
  email text not null,
  source text not null,

  user_agent text null,
  ip text null
);

create index if not exists starter_kit_downloads_created_at_idx on starter_kit_downloads (created_at desc);
create index if not exists starter_kit_downloads_email_idx on starter_kit_downloads (email);

-- Homestead zone tool: PDF download leads + full snapshot (run in Neon if upgrading an existing project).
create table if not exists homestead_zone_report_downloads (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),

  name text not null,
  phone text not null,
  email text not null,

  zone text not null,
  lookup_source text not null,
  matched_label text not null,
  is_florida_zip boolean not null default true,

  address_query text not null default '',
  lunar_snapshot_iso text not null,

  snapshot_json jsonb not null,

  user_agent text null,
  ip text null
);

create index if not exists homestead_zone_report_dl_created_at_idx
  on homestead_zone_report_downloads (created_at desc);
create index if not exists homestead_zone_report_dl_email_idx
  on homestead_zone_report_downloads (email);
create index if not exists homestead_zone_report_dl_zone_idx
  on homestead_zone_report_downloads (zone);

