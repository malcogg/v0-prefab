-- Run this in the Neon SQL Editor if your project already existed before homestead PDFs:
-- https://console.neon.tech → your project → SQL Editor → paste → Run

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
