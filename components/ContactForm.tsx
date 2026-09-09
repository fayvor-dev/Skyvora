"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General inquiry");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const { error: insertError } = await supabase.from("contact_messages").insert({
      name,
      email,
      subject,
      message,
    });

    setSubmitting(false);

    if (insertError) {
      setError("Something went wrong sending your message. Please try again.");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="glass-2 glass-edge rounded-3xl p-10 text-center">
        <div className="h-12 w-12 rounded-full glass-2 flex items-center justify-center text-gold mx-auto">
          <Check size={18} strokeWidth={1.5} />
        </div>
        <h2 className="font-display text-2xl text-pearl mt-5">Message received.</h2>
        <p className="text-silver-light/70 mt-3">
          Thank you{name ? `, ${name}` : ""}. A member of our team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-2 glass-edge rounded-3xl p-6 sm:p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs text-silver/60">Full name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="glass-1 rounded-xl px-4 py-2.5 text-sm text-pearl outline-none focus:border-gold/40 w-full"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs text-silver/60">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="glass-1 rounded-xl px-4 py-2.5 text-sm text-pearl outline-none focus:border-gold/40 w-full"
          />
        </label>
      </div>
      <label className="flex flex-col gap-1.5">
        <span className="text-xs text-silver/60">Subject</span>
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="glass-1 rounded-xl px-4 py-2.5 text-sm text-pearl outline-none focus:border-gold/40 w-full bg-transparent"
        >
          <option className="bg-charcoal">General inquiry</option>
          <option className="bg-charcoal">Charter request</option>
          <option className="bg-charcoal">Corporate travel</option>
          <option className="bg-charcoal">Press</option>
          <option className="bg-charcoal">Careers</option>
        </select>
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-xs text-silver/60">Message</span>
        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="glass-1 rounded-xl px-4 py-3 text-sm text-pearl outline-none focus:border-gold/40 w-full"
        />
      </label>
      <div className="flex flex-col items-start gap-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-2 rounded-full bg-gold hover:bg-gold-light disabled:opacity-60 text-obsidian text-sm font-medium px-6 py-3 transition-colors"
        >
          {submitting ? "Sending..." : "Send Message"}
          {!submitting && <ArrowRight size={15} strokeWidth={1.5} />}
        </button>
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    </form>
  );
}
