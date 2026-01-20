import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OutperformSection from "@/components/OutperformSection";
import LogoMarquee from "@/components/LogoMarquee";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";

import DiscoverSection from "@/components/DiscoverSection";
import OffshoreHero from "@/components/OffshoreHero";
import ArchitecturalVisualizationSection from "@/components/ArchitecturalVisualizationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <LogoMarquee />
        <OutperformSection />
        <DiscoverSection />
        <PricingSection />
        <OffshoreHero />
        <ArchitecturalVisualizationSection />
        <ProcessSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;