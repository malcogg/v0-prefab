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

