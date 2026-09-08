"use client";

import { useState } from "react";
import { Check } from "lucide-react";

interface Tier {
  name: string;
  monthly: string;
  yearly: string;
  description: string;
  features: string[];
  featured?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Explorer",
    monthly: "$0/mo",
    yearly: "$0/yr",
    description: "For occasional flyers arranging charters a few times a year.",
    features: [
      "On-demand charter booking",
      "Access to the full fleet",
      "Standard concierge support",
      "Charter history & receipts",
    ],
  },
  {
    name: "Voyager",
    monthly: "$2,500/mo",
    yearly: "$27,000/yr",
    description: "For frequent flyers who want priority access and dedicated support.",
    features: [
      "Priority aircraft availability",
      "Dedicated concierge line",
      "Guaranteed rate lock on 6 routes",
      "Complimentary ground transfers",
      "Flexible cancellation window",
    ],
    featured: true,
  },
  {
    name: "Sovereign",
    monthly: "$8,000/mo",
    yearly: "$86,000/yr",
    description: "For principals and family offices operating on a global schedule.",
    features: [
      "Unlimited priority booking",
      "24/7 dedicated flight desk",
      "Guaranteed rate lock, any route",
      "Full VIP concierge suite included",
      "Dedicated aircraft on standby",
    ],
  },
];

export default function MembershipTiers() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="sv-pricing-section">
      <div className="sv-watermark-container">
        <div className="sv-watermark-main">
          <span className="sv-watermark-line-1">Beyond the</span>
          <span className="sv-watermark-line-2">Ordinary.</span>
        </div>
      </div>

      <div className="sv-grid">
        {tiers.map((tier) => (
          <div key={tier.name} className={`sv-card ${tier.featured ? "sv-card-featured" : ""}`}>
            <p className="sv-tier-small">{tier.name}</p>
            <p className="sv-tier-large">{yearly ? tier.yearly : tier.monthly}</p>
            <p className="sv-desc">{tier.description}</p>
            <ul className="sv-list">
              {tier.features.map((f) => (
                <li key={f}>
                  <span className="sv-check">
                    <Check size={13} strokeWidth={2.5} color="#c9a768" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="sv-btn">Choose {tier.name}</button>
          </div>
        ))}
      </div>

      <div className="sv-toggle-wrap">
        <span className="text-sm text-silver-light/70">Yearly billing</span>
        <button
          type="button"
          onClick={() => setYearly((v) => !v)}
          className={`sv-toggle ${yearly ? "active" : ""}`}
          aria-pressed={yearly}
          aria-label="Toggle yearly billing"
        >
          <span className="sv-toggle-knob" />
        </button>
      </div>
    </section>
  );
}
