import Hero from "@/components/Hero";
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
      <FleetShowcase />
      <CategoryGrid />
      <ExperienceJourney />
      <WhySkyvora />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
