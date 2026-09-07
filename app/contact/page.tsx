import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — SKYVORA",
  description: "Get in touch with the SKYVORA team.",
};

const details = [
  { icon: Mail, label: "Email", value: "concierge@skyvora.example" },
  { icon: Phone, label: "Phone", value: "+234 1 234 5678" },
  { icon: MapPin, label: "Headquarters", value: "Lagos, Nigeria" },
];

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-36 pb-24">
      <SectionHeading
        eyebrow="Contact"
        title="We're available whenever your journey requires us."
        description="Reach our concierge team directly, or send a message and we'll respond promptly."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 mt-12">
        <div className="space-y-4">
          {details.map((d) => (
            <div key={d.label} className="glass-1 glass-edge rounded-2xl p-6 flex items-center gap-4">
              <span className="h-10 w-10 rounded-full glass-2 flex items-center justify-center text-gold shrink-0">
                <d.icon size={16} strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-[11px] text-silver/60">{d.label}</p>
                <p className="text-sm text-pearl mt-0.5">{d.value}</p>
              </div>
            </div>
          ))}
          <div className="glass-1 glass-edge rounded-2xl p-6">
            <p className="text-[11px] text-silver/60">Concierge availability</p>
            <p className="text-sm text-gold mt-0.5">24 hours, 7 days a week</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
