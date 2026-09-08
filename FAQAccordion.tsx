"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import { FAQ } from "@/lib/services";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {faqs.map((faq) => {
        const isOpen = open === faq.id;
        return (
          <div key={faq.id} className="glass-1 glass-edge rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpen(isOpen ? null : faq.id)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-sm text-pearl">{faq.question}</span>
              <ChevronDown
                size={16}
                strokeWidth={1.5}
                className={clsx("text-gold shrink-0 transition-transform duration-300", isOpen && "rotate-180")}
              />
            </button>
            <div
              className={clsx(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm text-silver-light/65 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
