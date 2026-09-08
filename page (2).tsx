import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import MembershipTiers from "@/components/MembershipTiers";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Membership — SKYVORA",
  description: "SKYVORA membership tiers for frequent and priority private aviation access.",
};

const membershipFaqs = [
  {
    id: "m1",
    question: "What does a SKYVORA membership add on top of charter booking?",
    answer:
      "Membership tiers add priority access to the fleet, faster confirmation times, and a dedicated concierge line — on top of standard on-demand charter booking, which remains open to everyone.",
  },
  {
    id: "m2",
    question: "Can I change tiers later?",
    answer: "Yes. Membership can be upgraded or downgraded at your next billing cycle by contacting your concierge desk.",
  },
  {
    id: "m3",
    question: "Is there a minimum commitment?",
    answer: "Monthly billing has no minimum term. Yearly billing is discounted and billed annually in advance.",
  },
];

export default function MembershipPage() {
  return (
    <div className="pt-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Membership"
          title="Priority access, built around how often you fly."
          description="Every tier includes the full SKYVORA fleet. Membership adds priority, speed, and a dedicated line to our concierge desk."
          align="center"
          className="!max-w-2xl mx-auto"
        />
      </div>

      <MembershipTiers />

      <div className="max-w-3xl mx-auto px-6 pb-28">
        <SectionHeading eyebrow="FAQ" title="Membership questions." align="center" className="!max-w-2xl" />
        <div className="mt-10">
          <FAQAccordion faqs={membershipFaqs} />
        </div>
      </div>
    </div>
  );
}
