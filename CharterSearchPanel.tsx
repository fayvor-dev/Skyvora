"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";

export default function CharterSearchPanel() {
  const router = useRouter();
  const [from, setFrom] = useState("Lagos");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams({ from, to, date, passengers: String(passengers) });
    router.push(`/charter?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-3 glass-edge rounded-3xl p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto_auto] gap-4 lg:items-end"
    >
      <Field label="From" icon={<MapPin size={14} strokeWidth={1.5} />}>
        <input
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="Departure city"
          className="bg-transparent outline-none text-pearl placeholder:text-silver/40 text-sm w-full"
        />
      </Field>

      <Field label="To" icon={<MapPin size={14} strokeWidth={1.5} />}>
        <input
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="Destination city"
          className="bg-transparent outline-none text-pearl placeholder:text-silver/40 text-sm w-full"
        />
      </Field>

      <Field label="Departure" icon={<Calendar size={14} strokeWidth={1.5} />}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-transparent outline-none text-pearl text-sm w-full [color-scheme:dark]"
        />
      </Field>

      <Field label="Passengers" icon={<Users size={14} strokeWidth={1.5} />}>
        <input
          type="number"
          min={1}
          max={40}
          value={passengers}
          onChange={(e) => setPassengers(Number(e.target.value))}
          className="bg-transparent outline-none text-pearl text-sm w-16"
        />
      </Field>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gold hover:bg-gold-light text-obsidian text-sm font-medium px-6 py-3.5 transition-colors whitespace-nowrap"
      >
        Request Your Flight
        <ArrowRight size={15} strokeWidth={1.5} />
      </button>
    </form>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="eyebrow text-silver/60">{label}</span>
      <div className="flex items-center gap-2 text-silver/70">
        {icon}
        {children}
      </div>
    </div>
  );
}
