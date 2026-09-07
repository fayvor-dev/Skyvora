import { Suspense } from "react";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import AircraftFleetGrid from "@/components/AircraftFleetGrid";

export const metadata: Metadata = {
  title: "The Fleet — SKYVORA",
  description: "Browse the complete SKYVORA fleet, from light jets to VIP airliners.",
};

export default function AircraftPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-36 pb-24">
      <SectionHeading
        eyebrow="The Fleet"
        title="Exceptional aircraft selected for exceptional journeys."
        description="Filter by category, or explore the complete fleet available for your route."
      />

      <div className="mt-12">
        <Suspense fallback={null}>
          <AircraftFleetGrid />
        </Suspense>
      </div>
    </div>
  );
}
