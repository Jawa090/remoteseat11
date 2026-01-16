import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const slides = [
    {
      line1: "Hire Top 1% Offshore",
      line2: "Construction Estimators & Project Support Staff",
      line3: "",
      description:
        "Get pre-approved remote construction cost estimators, BIM estimating services, and construction estimating outsourcing solutions. Save money, grow quickly, and easily develop a remote staff.",
      image: "/1.png",
    },
    {
      line1: "Hire Top Offshore BIM",
      line2: "Technicians & 3D",
      line3: "Modelers",
      description:
        "For accurate 3D modeling, project support, and on-site delivery, get in touch with qualified remote BIM experts. Increase bid wins, simplify processes, and easily engage in high-value clients.",
      image: "/3.png",
    },
    {
      line1: "Hire Top 1% of Offshore",
      line2: "Architects, Estimators &",
      line3: "Structural Engineers",
      description:
        "Scale your AEC projects effortlessly with pre-vetted remote estimators, BIM specialists, and dedicated support teams. Our offshore staffing solutions deliver US-standard experts in construction cost estimating, BIM services, and outsourcing—saving up to 70% on costs while ensuring bid-winning accuracy.",
      image: "/2.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((v) => (v + 1) % slides.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden bg-[#171717]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative py-8 lg:py-12 lg:pb-0">
          <div className="grid lg:grid-cols-2 gap-8 items-end min-h-[400px] lg:min-h-[480px]">
            {/* Left side - Text content */}
            <div className="relative z-10 lg:pr-12 pb-8 lg:pb-12">
              <div className="w-full text-center lg:text-left">
                <h1
                  className="font-semibold tracking-[-2px] text-white"
                  style={{
                    fontFamily: "trap, Poppins, system-ui, sans-serif",
                    fontSize: "48px",
                    lineHeight: "56px",
                  }}
                >
                  <div>{slides[activeIndex].line1}</div>
                  <div style={{ color: "#f2572b" }}>
                    {slides[activeIndex].line2}
                  </div>
                  {slides[activeIndex].line3 && (
                    <div style={{ color: "#f2572b" }}>
                      {slides[activeIndex].line3}
                    </div>
                  )}
                </h1>

                <p
                  className="mt-6 text-white max-w-[600px]"
                  style={{ fontFamily: "Poppins, system-ui, sans-serif", fontSize: "16px", lineHeight: "24px" }}
                >
                  {slides[activeIndex].description}
                </p>

                <div className="mt-10 flex justify-center lg:justify-start">
                  <Link
                    to="/contact-us"
                    className="relative inline-flex items-center justify-center rounded-full bg-[#f2572b] px-[30px] py-[16px] text-white hover:bg-[#e04a1f] transition-colors overflow-hidden shadow-lg"
                    style={{ fontFamily: "Poppins, system-ui, sans-serif", fontSize: "14px", fontWeight: 500 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/50 via-white/20 to-transparent" style={{ height: '60%' }}></div>
                    <div className="absolute inset-0 rounded-full" style={{ 
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 40%, transparent 60%)',
                      boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.5)'
                    }}></div>
                    <span className="relative z-10">Start Hiring Now</span>
                    <ArrowRight className="relative z-10 ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative hidden lg:flex justify-end items-end h-full">
              <img
                key={activeIndex}
                src={slides[activeIndex].image}
                alt="Hero"
                className="w-full max-w-[520px] h-auto object-contain object-bottom transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
