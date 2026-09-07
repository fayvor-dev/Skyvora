"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Inbox,
  Star,
  Send,
  FileText,
  Archive,
  Trash2,
  Search,
  Reply,
  Forward,
  MoreHorizontal,
  Paperclip,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const navItems = [
  { icon: Inbox, label: "Requests", count: 5, active: true },
  { icon: Star, label: "Starred", count: 2 },
  { icon: Send, label: "Confirmed", count: 3 },
  { icon: FileText, label: "Itineraries", count: null },
  { icon: Archive, label: "Archive", count: null },
  { icon: Trash2, label: "Trash", count: null },
];

const labels = [
  { name: "VIP", color: "#c9a768" },
  { name: "Corporate", color: "#aeb4be" },
  { name: "Family", color: "#8fb7a8" },
  { name: "Urgent", color: "#c97b68" },
];

const requests = [
  {
    name: "A. Whitfield",
    subject: "Lagos → Dubai, 6 pax",
    preview: "Requesting the G650ER for Thursday morning, flexible on return...",
    time: "9:41 AM",
    unread: true,
    active: true,
  },
  {
    name: "M. Adeyemi",
    subject: "Re: Accra weekend charter",
    preview: "Thanks for the quick turnaround — confirming the Phenom for Friday.",
    time: "8:12 AM",
    unread: true,
  },
  {
    name: "Concierge Desk",
    subject: "Ground transport arranged — Cape Town",
    preview: "Vehicles confirmed for arrival, driver details attached.",
    time: "Yesterday",
  },
  {
    name: "S. Okoro",
    subject: "Family charter — Seychelles",
    preview: "Traveling with two children, requesting an early departure.",
    time: "Yesterday",
  },
  {
    name: "Falcon 8X Ops",
    subject: "Maintenance window confirmed",
    preview: "Aircraft cleared for Thursday's departure, no restrictions.",
    time: "Mon",
  },
  {
    name: "R. Bello",
    subject: "London leg — return date change",
    preview: "Would like to move the return to Sunday evening if possible.",
    time: "Mon",
  },
];

export default function ConciergeDashboard() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        eyebrow="AI Concierge"
        title="One dashboard, every charter in motion."
        description="SKYVORA's concierge desk triages every request, drafts the itinerary, and keeps your team a step ahead of departure."
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl mt-12"
      >
        {/* Title bar */}
        <div className="h-10 flex items-center px-4 border-b border-white/10 relative">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="absolute left-1/2 -translate-x-1/2 text-xs text-silver/50">
            SKYVORA — Concierge
          </span>
        </div>

        <div className="grid grid-cols-12 h-[520px]">
          {/* Sidebar */}
          <div className="hidden md:flex col-span-3 border-r border-white/10 bg-black/30 p-4 flex-col">
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold text-obsidian text-xs font-semibold px-3 py-2 mb-5">
              <Sparkles size={13} strokeWidth={2} />
              New Charter Request
            </button>

            <nav className="space-y-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between rounded-md px-2.5 py-1.5 text-xs cursor-default ${
                    item.active ? "bg-white/10 text-pearl" : "text-silver-light/60 hover:bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <item.icon size={13} strokeWidth={1.5} />
                    {item.label}
                  </span>
                  {item.count !== null && <span className="text-[10px] text-silver/50">{item.count}</span>}
                </div>
              ))}
            </nav>

            <p className="eyebrow text-silver/45 mt-6 mb-3">Labels</p>
            <div className="space-y-2">
              {labels.map((l) => (
                <div key={l.name} className="flex items-center gap-2 text-xs text-silver-light/60">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: l.color }} />
                  {l.name}
                </div>
              ))}
            </div>
          </div>

          {/* Request list */}
          <div className="col-span-12 sm:col-span-6 md:col-span-4 border-r border-white/10 overflow-y-auto">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 text-xs text-silver/50">
              <Search size={13} strokeWidth={1.5} />
              Search requests
            </div>
            {requests.map((r) => (
              <div
                key={r.subject}
                className={`px-4 py-3 border-b border-white/5 cursor-default ${
                  r.active ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${r.unread ? "text-pearl font-medium" : "text-silver-light/70"}`}>
                    {r.name}
                  </span>
                  <span className="text-[10px] text-silver/45">{r.time}</span>
                </div>
                <p className="text-xs text-silver-light/70 mt-1">{r.subject}</p>
                <p className="text-[11px] text-silver/45 mt-1 truncate">{r.preview}</p>
              </div>
            ))}
          </div>

          {/* Reader */}
          <div className="hidden sm:flex col-span-6 md:col-span-5 flex-col">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
              <div className="flex items-center gap-1">
                {[Reply, Forward, Archive, Trash2].map((Icon, i) => (
                  <span
                    key={i}
                    className="w-7 h-7 rounded-md flex items-center justify-center text-silver-light/60 hover:bg-white/5"
                  >
                    <Icon size={13} strokeWidth={1.5} />
                  </span>
                ))}
              </div>
              <MoreHorizontal size={15} strokeWidth={1.5} className="text-silver-light/60" />
            </div>

            <div className="p-5 overflow-y-auto flex-1">
              <h3 className="text-sm text-pearl">Lagos → Dubai, 6 pax</h3>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-7 h-7 rounded-full bg-gradient-to-br from-gold to-gold-dim flex items-center justify-center text-[11px] text-obsidian font-semibold">
                  A
                </span>
                <div>
                  <p className="text-xs text-pearl">A. Whitfield</p>
                  <p className="text-[10px] text-silver/50">to Concierge Desk · 9:41 AM</p>
                </div>
                <span className="ml-auto glass-1 rounded-full px-2.5 py-1 text-[10px] text-gold">VIP</span>
              </div>

              <div className="glass-1 glass-edge rounded-xl p-4 mt-5">
                <p className="flex items-center gap-2 text-xs text-gold mb-2">
                  <Sparkles size={13} strokeWidth={1.5} />
                  Summary by SKYVORA AI
                </p>
                <p className="text-xs text-silver-light/70 leading-relaxed">
                  Six passengers, one-way Thursday morning departure. G650ER is available and recommended
                  for the route. Return date still open — awaiting client confirmation.
                </p>
              </div>

              <div className="mt-5 space-y-3 text-xs text-silver-light/70 leading-relaxed">
                <p>Hi team,</p>
                <p>
                  We&rsquo;d like to request a charter from Lagos to Dubai for six passengers, departing
                  Thursday morning. Flexible on the exact time, but would prefer to land before early
                  afternoon local.
                </p>
                <p>Return date is still being finalized on our side — will confirm within the next day.</p>
                <p className="text-silver/50">— A. Whitfield</p>
              </div>

              <div className="inline-flex items-center gap-2 glass-1 rounded-full px-3 py-1.5 mt-5 text-[11px] text-silver-light/70">
                <Paperclip size={12} strokeWidth={1.5} />
                passenger-manifest.pdf
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
