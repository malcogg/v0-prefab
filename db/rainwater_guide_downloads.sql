-- Rainwater resilience guide (blog lead magnet). Run in Neon when upgrading an existing project.

create table if not exists rainwater_guide_downloads (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),

  name text not null,
  email text not null,
  source text not null default 'blog-rainwater-harvesting',

  user_agent text null,
  ip text null
);

create index if not exists rainwater_guide_downloads_created_at_idx
  on rainwater_guide_downloads (created_at desc);
create index if not exists rainwater_guide_downloads_email_idx
  on rainwater_guide_downloads (email);
