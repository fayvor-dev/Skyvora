import { Suspense } from "react";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CharterForm from "@/components/CharterForm";
import FlightEstimator from "@/components/FlightEstimator";

export const metadata: Metadata = {
  title: "Request a Charter — SKYVORA",
  description: "Request your private charter with SKYVORA in a few simple steps.",
};

export default function CharterPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-36 pb-24">
      <SectionHeading
        eyebrow="Charter Request"
        title="Tell us about your journey."
        description="Five short steps. Our team confirms availability and a firm quote directly with you."
      />

      <div className="mt-12">
        <Suspense fallback={null}>
          <CharterForm />
        </Suspense>
      </div>

      <div className="mt-16">
        <Suspense fallback={null}>
          <FlightEstimator />
        </Suspense>
      </div>
    </div>
  );
}
