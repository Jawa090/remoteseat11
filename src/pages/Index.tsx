import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import CompetitiveAdvantageSection from "@/components/CompetitiveAdvantageSection";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
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
        <CompetitiveAdvantageSection />
        <DiscoverSection />
        <PricingSection />
        <OffshoreHero />
        <ArchitecturalVisualizationSection />
        <ProcessSection />
        <TestimonialsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;