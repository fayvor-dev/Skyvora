"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { aircraftFleet } from "@/lib/aircraft";
import { optionalServices } from "@/lib/services";

const steps = ["Journey", "Passengers", "Aircraft", "Services", "Contact"];

export default function CharterForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    from: searchParams.get("from") ?? "Lagos",
    to: searchParams.get("to") ?? "",
    departureDate: "",
    returnDate: "",
    tripType: "one-way" as "one-way" | "round-trip",
    adults: Number(searchParams.get("passengers")) || 1,
    children: 0,
    specialRequirements: "",
    aircraftChoice: searchParams.get("aircraft") ?? "",
    aircraftMode: (searchParams.get("aircraft") ? "specific" : "recommend") as
      | "specific"
      | "category"
      | "recommend",
    category: "",
    selectedServices: [] as string[],
    name: "",
    email: "",
    phone: "",
    contactMethod: "email" as "email" | "phone",
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function toggleService(id: string) {
    setForm((f) => ({
      ...f,
      selectedServices: f.selectedServices.includes(id)
        ? f.selectedServices.filter((s) => s !== id)
        : [...f.selectedServices, id],
    }));
  }

  function next() {
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }
  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="glass-2 glass-edge rounded-3xl p-10 sm:p-14 text-center">
        <div className="h-14 w-14 rounded-full glass-2 flex items-center justify-center text-gold mx-auto">
          <Check size={22} strokeWidth={1.5} />
        </div>
        <h2 className="font-display text-3xl text-pearl mt-6">Charter request received.</h2>
        <p className="text-silver-light/70 mt-3 max-w-md mx-auto leading-relaxed">
          Thank you, {form.name || "traveler"}. Our team is reviewing your route
          {form.to ? ` to ${form.to}` : ""} and will reach out by {form.contactMethod} shortly with
          aircraft options and a firm quote.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center gap-2 mb-10">
        {steps.map((label, i) => (
          <div key={label} className="flex-1">
            <div
              className={clsx(
                "h-1 rounded-full transition-colors duration-500",
                i <= step ? "bg-gold" : "bg-white/10"
              )}
            />
            <p
              className={clsx(
                "text-[10px] mt-2 tracking-wide hidden sm:block",
                i === step ? "text-gold" : "text-silver/50"
              )}
            >
              {label.toUpperCase()}
            </p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="glass-2 glass-edge rounded-3xl p-6 sm:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {step === 0 && (
              <div>
                <h2 className="font-display text-2xl text-pearl mb-6">Your journey</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <TextField label="Departure" value={form.from} onChange={(v) => update("from", v)} />
                  <TextField label="Destination" value={form.to} onChange={(v) => update("to", v)} />
                  <TextField
                    label="Departure date"
                    type="date"
                    value={form.departureDate}
                    onChange={(v) => update("departureDate", v)}
                  />
                  {form.tripType === "round-trip" && (
                    <TextField
                      label="Return date"
                      type="date"
                      value={form.returnDate}
                      onChange={(v) => update("returnDate", v)}
                    />
                  )}
                </div>
                <div className="flex gap-3 mt-6">
                  {(["one-way", "round-trip"] as const).map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => update("tripType", t)}
                      className={clsx(
                        "rounded-full px-5 py-2 text-xs transition-colors",
                        form.tripType === t ? "bg-gold text-obsidian" : "glass-1 text-silver-light/70"
                      )}
                    >
                      {t === "one-way" ? "One-way" : "Round trip"}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="font-display text-2xl text-pearl mb-6">Passengers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <NumberField label="Adults" value={form.adults} onChange={(v) => update("adults", v)} min={1} />
                  <NumberField
                    label="Children"
                    value={form.children}
                    onChange={(v) => update("children", v)}
                    min={0}
                  />
                </div>
                <div className="mt-5">
                  <span className="text-xs text-silver/60">Special requirements</span>
                  <textarea
                    value={form.specialRequirements}
                    onChange={(e) => update("specialRequirements", e.target.value)}
                    rows={3}
                    placeholder="Accessibility needs, pets, infants, etc."
                    className="glass-1 rounded-xl px-4 py-3 text-sm text-pearl outline-none focus:border-gold/40 w-full mt-1.5 placeholder:text-silver/40"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="font-display text-2xl text-pearl mb-6">Aircraft</h2>
                <div className="flex flex-wrap gap-3 mb-6">
                  {(["recommend", "category", "specific"] as const).map((mode) => (
                    <button
                      type="button"
                      key={mode}
                      onClick={() => update("aircraftMode", mode)}
                      className={clsx(
                        "rounded-full px-5 py-2 text-xs transition-colors",
                        form.aircraftMode === mode ? "bg-gold text-obsidian" : "glass-1 text-silver-light/70"
                      )}
                    >
                      {mode === "recommend"
                        ? "Recommend for me"
                        : mode === "category"
                        ? "Choose a category"
                        : "Choose a specific aircraft"}
                    </button>
                  ))}
                </div>

                {form.aircraftMode === "category" && (
                  <SelectField
                    label="Aircraft category"
                    value={form.category}
                    onChange={(v) => update("category", v)}
                    options={["Light Jet", "Midsize Jet", "Heavy Jet", "Ultra-Long-Range", "VIP Airliner"]}
                  />
                )}

                {form.aircraftMode === "specific" && (
                  <SelectField
                    label="Aircraft"
                    value={form.aircraftChoice}
                    onChange={(v) => update("aircraftChoice", v)}
                    options={aircraftFleet.map((a) => a.slug)}
                    optionLabels={aircraftFleet.map((a) => a.name)}
                  />
                )}

                {form.aircraftMode === "recommend" && (
                  <p className="text-sm text-silver-light/60">
                    Our team will match an aircraft to your route, group size and dates.
                  </p>
                )}
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="font-display text-2xl text-pearl mb-6">Additional services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {optionalServices.map((s) => {
                    const active = form.selectedServices.includes(s.id);
                    return (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => toggleService(s.id)}
                        className={clsx(
                          "text-left rounded-xl px-5 py-4 transition-colors",
                          active ? "glass-2 border border-gold/40" : "glass-1"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-pearl">{s.name}</span>
                          {active && <Check size={14} strokeWidth={2} className="text-gold" />}
                        </div>
                        <p className="text-xs text-silver/55 mt-1.5">{s.description}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="font-display text-2xl text-pearl mb-6">Contact details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <TextField label="Full name" value={form.name} onChange={(v) => update("name", v)} />
                  <TextField
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(v) => update("email", v)}
                  />
                  <TextField label="Phone" value={form.phone} onChange={(v) => update("phone", v)} />
                  <SelectField
                    label="Preferred contact method"
                    value={form.contactMethod}
                    onChange={(v) => update("contactMethod", v as "email" | "phone")}
                    options={["email", "phone"]}
                  />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
          <button
            type="button"
            onClick={back}
            disabled={step === 0}
            className={clsx(
              "inline-flex items-center gap-2 text-sm transition-colors",
              step === 0 ? "text-silver/30 cursor-not-allowed" : "text-silver-light/70 hover:text-pearl"
            )}
          >
            <ArrowLeft size={15} strokeWidth={1.5} />
            Back
          </button>

          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center gap-2 rounded-full bg-gold hover:bg-gold-light text-obsidian text-sm font-medium px-6 py-3 transition-colors"
            >
              Continue
              <ArrowRight size={15} strokeWidth={1.5} />
            </button>
          ) : (
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gold hover:bg-gold-light text-obsidian text-sm font-medium px-6 py-3 transition-colors"
            >
              Request Your Charter
              <ArrowRight size={15} strokeWidth={1.5} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs text-silver/60">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="glass-1 rounded-xl px-4 py-2.5 text-sm text-pearl outline-none focus:border-gold/40 w-full [color-scheme:dark]"
      />
    </label>
  );
}

function NumberField({
  label,
  value,
  onChange,
  min = 0,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs text-silver/60">{label}</span>
      <input
        type="number"
        min={min}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="glass-1 rounded-xl px-4 py-2.5 text-sm text-pearl outline-none focus:border-gold/40 w-full"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  optionLabels,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  optionLabels?: string[];
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs text-silver/60">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="glass-1 rounded-xl px-4 py-2.5 text-sm text-pearl outline-none focus:border-gold/40 w-full bg-transparent"
      >
        <option value="" className="bg-charcoal">
          Select
        </option>
        {options.map((opt, i) => (
          <option key={opt} value={opt} className="bg-charcoal">
            {optionLabels?.[i] ?? opt}
          </option>
        ))}
      </select>
    </label>
  );
}
