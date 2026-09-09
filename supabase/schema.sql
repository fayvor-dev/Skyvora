-- SKYVORA — Supabase schema
-- Run this once in your Supabase project's SQL Editor (Dashboard → SQL Editor → New query).
-- Creates the three tables the site writes to, plus row-level security policies
-- that allow the public site to INSERT rows but never READ, UPDATE, or DELETE them.
-- (You'll read submissions from the Supabase Table Editor, or your own authenticated
-- tooling — never from the public site itself.)

-- ============================================================
-- Charter requests (from /charter)
-- ============================================================
create table if not exists charter_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  from_location text,
  to_location text,
  departure_date date,
  return_date date,
  trip_type text,

  adults int,
  children int,
  special_requirements text,

  aircraft_mode text,
  aircraft_choice text,
  category text,

  selected_services text[],

  name text,
  email text,
  phone text,
  contact_method text
);

alter table charter_requests enable row level security;

create policy "Allow public insert on charter_requests"
  on charter_requests for insert
  to anon
  with check (true);

-- ============================================================
-- Contact form submissions (from /contact)
-- ============================================================
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  name text,
  email text,
  subject text,
  message text
);

alter table contact_messages enable row level security;

create policy "Allow public insert on contact_messages"
  on contact_messages for insert
  to anon
  with check (true);

-- ============================================================
-- Membership sign-ups (from /membership)
-- ============================================================
create table if not exists membership_signups (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  tier text,
  billing_cycle text,
  email text
);

alter table membership_signups enable row level security;

create policy "Allow public insert on membership_signups"
  on membership_signups for insert
  to anon
  with check (true);
