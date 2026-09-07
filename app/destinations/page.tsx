import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/lib/destinations";

export const metadata: Metadata = {
  title: "Destinations — SKYVORA",
  description: "Premium destinations reachable directly, on your schedule.",
};

export default function DestinationsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-36 pb-24">
      <SectionHeading
        eyebrow="Destinations"
        title="Direct access to the places that matter."
        description="A selection of the destinations our clients request most — each reachable without a commercial connection."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {destinations.map((d) => (
          <DestinationCard key={d.id} destination={d} />
        ))}
      </div>
    </div>
  );
}
