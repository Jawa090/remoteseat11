import { Button } from "@/components/ui/button";
import ctaImage from "@/assets/cta-person.jpg";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Build Your{" "}
              <span className="text-gradient-coral">Remote Team?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a free consultation to explore offshore staffing tailored to your budget and deadlines.
            </p>
            <Button 
              size="lg" 
              className="gradient-coral text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Get Your Free Consultation
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <img
              src={ctaImage}
              alt="Professional team member"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
