"use client";

import { useEffect, useState } from "react";
import { LogOut, RefreshCw } from "lucide-react";
import { clsx } from "clsx";
import { supabase } from "@/lib/supabase";

interface CharterRequestRow {
  id: string;
  created_at: string;
  from_location: string | null;
  to_location: string | null;
  departure_date: string | null;
  trip_type: string | null;
  adults: number | null;
  children: number | null;
  aircraft_mode: string | null;
  aircraft_choice: string | null;
  category: string | null;
  name: string | null;
  email: string | null;
  phone: string | null;
}

interface ContactMessageRow {
  id: string;
  created_at: string;
  name: string | null;
  email: string | null;
  subject: string | null;
  message: string | null;
}

interface MembershipSignupRow {
  id: string;
  created_at: string;
  tier: string | null;
  billing_cycle: string | null;
  email: string | null;
}

type TabKey = "charter" | "contact" | "membership";

const tabs: { key: TabKey; label: string }[] = [
  { key: "charter", label: "Charter Requests" },
  { key: "contact", label: "Contact Messages" },
  { key: "membership", label: "Membership Sign-ups" },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<TabKey>("charter");
  const [charterRequests, setCharterRequests] = useState<CharterRequestRow[]>([]);
  const [contactMessages, setContactMessages] = useState<ContactMessageRow[]>([]);
  const [membershipSignups, setMembershipSignups] = useState<MembershipSignupRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function loadData() {
    setLoading(true);
    setError(null);

    const [charterRes, contactRes, membershipRes] = await Promise.all([
      supabase.from("charter_requests").select("*").order("created_at", { ascending: false }),
      supabase.from("contact_messages").select("*").order("created_at", { ascending: false }),
      supabase.from("membership_signups").select("*").order("created_at", { ascending: false }),
    ]);

    if (charterRes.error || contactRes.error || membershipRes.error) {
      setError("Could not load submissions. Your account may not have read access yet.");
      setLoading(false);
      return;
    }

    setCharterRequests(charterRes.data ?? []);
    setContactMessages(contactRes.data ?? []);
    setMembershipSignups(membershipRes.data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pt-28 pb-24">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="eyebrow text-gold mb-2">Admin</p>
          <h1 className="font-display text-3xl text-pearl">Submissions</h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={loadData}
            className="inline-flex items-center gap-2 glass-1 rounded-full px-4 py-2 text-xs text-silver-light/75 hover:text-pearl transition-colors"
          >
            <RefreshCw size={13} strokeWidth={1.5} />
            Refresh
          </button>
          <button
            onClick={handleSignOut}
            className="inline-flex items-center gap-2 glass-1 rounded-full px-4 py-2 text-xs text-silver-light/75 hover:text-pearl transition-colors"
          >
            <LogOut size={13} strokeWidth={1.5} />
            Sign Out
          </button>
        </div>
      </div>

      {/* Summary counts */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="glass-1 glass-edge rounded-2xl px-5 py-4">
          <p className="text-[11px] text-silver/60">Charter Requests</p>
          <p className="text-2xl text-gold mt-1">{charterRequests.length}</p>
        </div>
        <div className="glass-1 glass-edge rounded-2xl px-5 py-4">
          <p className="text-[11px] text-silver/60">Contact Messages</p>
          <p className="text-2xl text-gold mt-1">{contactMessages.length}</p>
        </div>
        <div className="glass-1 glass-edge rounded-2xl px-5 py-4">
          <p className="text-[11px] text-silver/60">Membership Sign-ups</p>
          <p className="text-2xl text-gold mt-1">{membershipSignups.length}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mt-10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={clsx(
              "rounded-full px-4 py-2 text-xs tracking-wide transition-colors",
              activeTab === tab.key ? "bg-gold text-obsidian" : "glass-1 text-silver-light/75 hover:text-pearl"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {loading ? (
          <p className="text-sm text-silver/60">Loading...</p>
        ) : error ? (
          <div className="glass-1 rounded-2xl p-8 text-center">
            <p className="text-sm text-red-400">{error}</p>
            <p className="text-xs text-silver/50 mt-2">
              Make sure you've run supabase/admin-policies.sql and are signed in with an authorized account.
            </p>
          </div>
        ) : (
          <>
            {activeTab === "charter" && (
              <TableWrap>
                <thead>
                  <Row header>
                    <Cell header>Received</Cell>
                    <Cell header>Client</Cell>
                    <Cell header>Route</Cell>
                    <Cell header>Departure</Cell>
                    <Cell header>Pax</Cell>
                    <Cell header>Aircraft</Cell>
                    <Cell header>Contact</Cell>
                  </Row>
                </thead>
                <tbody>
                  {charterRequests.length === 0 ? (
                    <EmptyRow colSpan={7} />
                  ) : (
                    charterRequests.map((r) => (
                      <Row key={r.id}>
                        <Cell>{formatDate(r.created_at)}</Cell>
                        <Cell>{r.name || "—"}</Cell>
                        <Cell>
                          {r.from_location || "—"} → {r.to_location || "—"}
                        </Cell>
                        <Cell>{r.departure_date || "—"}</Cell>
                        <Cell>
                          {(r.adults ?? 0) + (r.children ?? 0)} ({r.trip_type || "—"})
                        </Cell>
                        <Cell>{r.aircraft_choice || r.category || r.aircraft_mode || "—"}</Cell>
                        <Cell>
                          {r.email || "—"}
                          {r.phone ? ` · ${r.phone}` : ""}
                        </Cell>
                      </Row>
                    ))
                  )}
                </tbody>
              </TableWrap>
            )}

            {activeTab === "contact" && (
              <TableWrap>
                <thead>
                  <Row header>
                    <Cell header>Received</Cell>
                    <Cell header>Name</Cell>
                    <Cell header>Email</Cell>
                    <Cell header>Subject</Cell>
                    <Cell header>Message</Cell>
                  </Row>
                </thead>
                <tbody>
                  {contactMessages.length === 0 ? (
                    <EmptyRow colSpan={5} />
                  ) : (
                    contactMessages.map((m) => (
                      <Row key={m.id}>
                        <Cell>{formatDate(m.created_at)}</Cell>
                        <Cell>{m.name || "—"}</Cell>
                        <Cell>{m.email || "—"}</Cell>
                        <Cell>{m.subject || "—"}</Cell>
                        <Cell className="max-w-xs truncate">{m.message || "—"}</Cell>
                      </Row>
                    ))
                  )}
                </tbody>
              </TableWrap>
            )}

            {activeTab === "membership" && (
              <TableWrap>
                <thead>
                  <Row header>
                    <Cell header>Received</Cell>
                    <Cell header>Tier</Cell>
                    <Cell header>Billing</Cell>
                    <Cell header>Email</Cell>
                  </Row>
                </thead>
                <tbody>
                  {membershipSignups.length === 0 ? (
                    <EmptyRow colSpan={4} />
                  ) : (
                    membershipSignups.map((s) => (
                      <Row key={s.id}>
                        <Cell>{formatDate(s.created_at)}</Cell>
                        <Cell>{s.tier || "—"}</Cell>
                        <Cell>{s.billing_cycle || "—"}</Cell>
                        <Cell>{s.email || "—"}</Cell>
                      </Row>
                    ))
                  )}
                </tbody>
              </TableWrap>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function TableWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass-1 glass-edge rounded-2xl overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[720px]">{children}</table>
    </div>
  );
}

function Row({ children, header }: { children: React.ReactNode; header?: boolean }) {
  return <tr className={header ? "border-b border-white/10" : "border-b border-white/5"}>{children}</tr>;
}

function Cell({
  children,
  header,
  className,
}: {
  children: React.ReactNode;
  header?: boolean;
  className?: string;
}) {
  return header ? (
    <th className={clsx("px-4 py-3 text-[11px] text-silver/60 font-medium whitespace-nowrap", className)}>
      {children}
    </th>
  ) : (
    <td className={clsx("px-4 py-3 text-xs text-silver-light/80 whitespace-nowrap", className)}>{children}</td>
  );
}

function EmptyRow({ colSpan }: { colSpan: number }) {
  return (
    <tr>
      <td colSpan={colSpan} className="px-4 py-10 text-center text-xs text-silver/50">
        No submissions yet.
      </td>
    </tr>
  );
}
