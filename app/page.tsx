import Hero from "@/components/Hero";
import FlightDeckBar from "@/components/FlightDeckBar";
import ConciergeDashboard from "@/components/ConciergeDashboard";
import FleetShowcase from "@/components/FleetShowcase";
import CategoryGrid from "@/components/CategoryGrid";
import ExperienceJourney from "@/components/ExperienceJourney";
import WhySkyvora from "@/components/WhySkyvora";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <FlightDeckBar />
      <ConciergeDashboard />
      <FleetShowcase />
      <CategoryGrid />
      <ExperienceJourney />
      <WhySkyvora />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
