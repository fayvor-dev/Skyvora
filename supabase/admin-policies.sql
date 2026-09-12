-- SKYVORA — Admin read-access policies
-- Run this AFTER schema.sql (Supabase Dashboard → SQL Editor → New query).
-- This does NOT change anything about the public site — visitors can still only
-- insert rows, never read them. It adds a second rule: anyone who is logged in
-- via Supabase Auth (i.e. you, once you create an admin user) can read all rows.
-- No one else — not even someone with your public anon key — can read this data
-- without logging in first.

create policy "Allow authenticated read on charter_requests"
  on charter_requests for select
  to authenticated
  using (true);

create policy "Allow authenticated read on contact_messages"
  on contact_messages for select
  to authenticated
  using (true);

create policy "Allow authenticated read on membership_signups"
  on membership_signups for select
  to authenticated
  using (true);
