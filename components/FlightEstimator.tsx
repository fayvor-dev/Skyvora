"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { aircraftCategories } from "@/lib/aircraft";

// Deterministic mock estimator — not a live routing engine. Structured so a
// real aviation/charter API can replace this function later without changing
// the UI below.
function estimateFlight(from: string, to: string, passengers: number) {
  const seed = (from + to).split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const hours = 1.5 + (seed % 11) + passengers * 0.05;
  const category =
    hours > 8 ? "Ultra-Long-Range" : hours > 5 ? "Heavy Jet" : hours > 3 ? "Midsize Jet" : "Light Jet";
  const rateMap: Record<string, number> = {
    "Light Jet": 3200,
    "Midsize Jet": 4800,
    "Heavy Jet": 6800,
    "Ultra-Long-Range": 8800,
    "VIP Airliner": 15500,
  };
  const low = Math.round((hours * rateMap[category] * 0.92) / 100) * 100;
  const high = Math.round((hours * rateMap[category] * 1.12) / 100) * 100;
  return { hours, category, low, high };
}

export default function FlightEstimator() {
  const [from, setFrom] = useState("Lagos");
  const [to, setTo] = useState("Dubai");
  const [passengers, setPassengers] = useState(4);
  const [submitted, setSubmitted] = useState(true);

  const estimate = useMemo(() => estimateFlight(from, to, passengers), [from, to, passengers]);
  const wholeHours = Math.floor(estimate.hours);
  const minutes = Math.round((estimate.hours - wholeHours) * 60);

  return (
    <div className="glass-2 glass-edge rounded-3xl p-6 sm:p-8">
      <p className="eyebrow text-gold mb-6">Flight Estimator</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs text-silver/60">From</span>
          <input
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
              setSubmitted(true);
            }}
            className="glass-1 rounded-xl px-4 py-2.5 text-sm text-pearl outline-none focus:border-gold/40"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs text-silver/60">To</span>
          <input
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
              setSubmitted(true);
            }}
            className="glass-1 rounded-xl px-4 py-2.5 text-sm text-pearl outline-none focus:border-gold/40"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs text-silver/60">Passengers</span>
          <input
            type="number"
            min={1}
            max={40}
            value={passengers}
            onChange={(e) => {
              setPassengers(Number(e.target.value));
              setSubmitted(true);
            }}
            className="glass-1 rounded-xl px-4 py-2.5 text-sm text-pearl outline-none focus:border-gold/40"
          />
        </label>
      </div>

      {submitted && from && to && (
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <EstimateStat label="Flight time" value={`${wholeHours}h ${minutes.toString().padStart(2, "0")}m`} />
          <EstimateStat label="Recommended" value={estimate.category} />
          <EstimateStat
            label="Estimated charter"
            value={`$${estimate.low.toLocaleString()}–${estimate.high.toLocaleString()}`}
            gold
          />
          <div className="flex items-end">
            <Link
              href={`/charter?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&passengers=${passengers}`}
              className="inline-flex items-center gap-2 rounded-full bg-gold hover:bg-gold-light text-obsidian text-xs sm:text-sm font-medium px-4 sm:px-5 py-3 transition-colors w-full justify-center"
            >
              Request exact quote
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      )}

      <p className="text-[11px] text-silver/45 mt-6 leading-relaxed">
        Figures are estimates based on typical routing and rates for the {aircraftCategories.length}{" "}
        aircraft categories in the fleet. Final pricing is confirmed by our team based on availability and
        exact routing.
      </p>
    </div>
  );
}

function EstimateStat({ label, value, gold }: { label: string; value: string; gold?: boolean }) {
  return (
    <div>
      <p className="text-[11px] text-silver/60">{label}</p>
      <p className={`text-sm sm:text-base mt-1 ${gold ? "text-gold" : "text-pearl"}`}>{value}</p>
    </div>
  );
}
