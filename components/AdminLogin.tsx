"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function AdminLogin({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });

    setSubmitting(false);

    if (authError) {
      setError("Incorrect email or password.");
      return;
    }

    onSuccess();
  }

  return (
    <div className="min-h-[80svh] flex items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="glass-2 glass-edge rounded-3xl p-8 w-full max-w-sm">
        <div className="h-11 w-11 rounded-full glass-2 flex items-center justify-center text-gold mx-auto">
          <Lock size={16} strokeWidth={1.5} />
        </div>
        <h1 className="font-display text-xl text-pearl text-center mt-5">SKYVORA Admin</h1>
        <p className="text-xs text-silver/60 text-center mt-1.5">Sign in to view submissions.</p>

        <div className="mt-7 space-y-4">
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
          <label className="flex flex-col gap-1.5">
            <span className="text-xs text-silver/60">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="glass-1 rounded-xl px-4 py-2.5 text-sm text-pearl outline-none focus:border-gold/40 w-full"
            />
          </label>
        </div>

        {error && <p className="text-xs text-red-400 mt-4">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="mt-6 w-full rounded-full bg-gold hover:bg-gold-light disabled:opacity-60 text-obsidian text-sm font-medium px-6 py-3 transition-colors"
        >
          {submitting ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
