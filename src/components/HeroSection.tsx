import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const slides = [
    {
      line1: "Hire Offshore BIM",
      line2: "Technicians & 3D",
      line3: "Modelers",
      description:
        "Bring BIM & 3D modeling expertise on board through our offshore staffing agency. Highly skilled remote professionals at a fraction of local cost to support your project delivery and also help you attract more high-ticket clients.",
      image: "/2.png",
    },
    {
      line1: "Hire Offshore Estimators &",
      line2: "Project Support Staff",
      line3: "",
      description:
        "Scale your AEC team with estimators and project support specialists. Our offshore staffing agency delivers vetted talent who understand US construction standards.",
      image: "/3.png",
    },
    {
      line1: "Hire Top 1% of Offshore",
      line2: "Architects, Estimators &",
      line3: "Structural Engineers",
      description:
        "Access pre-vetted AEC talent – architects, estimators, and structural engineers trained to meet US standards with our offshore staffing solutions. Save costs, scale quickly, and build your remote team.",
      image: "/0.png",
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
        <div className="relative py-8 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <div className="relative z-10 lg:pr-12">
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
            <div className={`relative hidden lg:flex justify-end items-start h-full -mt-4 lg:pl-8 ${activeIndex === 1 || activeIndex === 2 ? '-mb-12 lg:-mb-16' : ''}`}>
              <img
                key={activeIndex}
                src={slides[activeIndex].image}
                alt="Hero"
                className={`w-full h-auto object-contain object-right transition-opacity duration-500 ${activeIndex === 2 ? 'max-w-[600px]' : 'max-w-[500px]'}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
