import { Check, X } from "lucide-react";

const rows = [
  { label: "Departure time", commercial: "Fixed schedule", skyvora: "Set by you" },
  { label: "Airport access", commercial: "Major hubs only", skyvora: "10,000+ airports worldwide" },
  { label: "Check-in", commercial: "1–2 hours before", skyvora: "Minutes before departure" },
  { label: "Routing", commercial: "Hub-and-spoke connections", skyvora: "Direct, point-to-point" },
  { label: "Cabin", commercial: "Shared with strangers", skyvora: "Private, yours alone" },
  { label: "Itinerary changes", commercial: "Rebooking fees", skyvora: "Adjusted on request" },
];

export default function CorporateComparison() {
  return (
    <div className="glass-1 glass-edge rounded-3xl overflow-hidden">
      <div className="grid grid-cols-[1.2fr_1fr_1fr] text-sm">
        <div className="px-5 sm:px-7 py-5 border-b border-white/10" />
        <div className="px-5 sm:px-7 py-5 border-b border-white/10 border-l border-white/10 text-center">
          <p className="text-silver-light/60 text-xs sm:text-sm">Commercial Travel</p>
        </div>
        <div className="px-5 sm:px-7 py-5 border-b border-white/10 border-l border-white/10 text-center bg-white/[0.02]">
          <p className="text-gold text-xs sm:text-sm">SKYVORA</p>
        </div>

        {rows.map((row) => (
          <RowFragment key={row.label} row={row} />
        ))}
      </div>
    </div>
  );
}

function RowFragment({ row }: { row: (typeof rows)[number] }) {
  return (
    <>
      <div className="px-5 sm:px-7 py-4 border-b border-white/5 text-silver-light/80 text-xs sm:text-sm flex items-center">
        {row.label}
      </div>
      <div className="px-5 sm:px-7 py-4 border-b border-white/5 border-l border-white/10 text-center flex items-center justify-center gap-2 text-silver/60 text-xs sm:text-sm">
        <X size={13} strokeWidth={1.5} className="text-silver/40 shrink-0" />
        <span>{row.commercial}</span>
      </div>
      <div className="px-5 sm:px-7 py-4 border-b border-white/5 border-l border-white/10 text-center flex items-center justify-center gap-2 text-pearl text-xs sm:text-sm bg-white/[0.02]">
        <Check size={13} strokeWidth={1.5} className="text-gold shrink-0" />
        <span>{row.skyvora}</span>
      </div>
    </>
  );
}
