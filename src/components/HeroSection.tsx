import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const slides = [
    {
      line1: "Hire Top 1% of Offshore",
      line2: "Architects, Estimators &",
      line3: "Structural Engineers",
      description:
        "Access pre-vetted AEC talent – architects, estimators, and structural engineers trained to meet US standards with our offshore staffing solutions. Save costs, scale quickly, and build your remote team.",
      image: "/1.webp",
    },
    {
      line1: "Hire Top 1% of Offshore",
      line2: "BIM Technicians & 3D",
      line3: "Modelers",
      description:
        "Bring BIM & 3D modeling expertise on board through our offshore staffing agency. Highly skilled remote professionals at a fraction of local cost to support your project delivery and also help you attract more high-ticket clients.",
      image: "/2.webp",
    },
    {
      line1: "Hire Top 1% of Offshore",
      line2: "Estimators & Project",
      line3: "Support Staff",
      description:
        "Scale your AEC team with estimators and project support specialists. Our offshore staffing agency delivers vetted talent who understand US construction standards.",
      image: "/3.webp",
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
        <div className="relative py-24 lg:py-32">
          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-[680px] text-center lg:mx-0 lg:text-left">
              <h1
                className="font-semibold tracking-[-2px] text-white"
                style={{
                  fontFamily: "trap, Poppins, system-ui, sans-serif",
                  fontSize: "63px",
                  lineHeight: "70px",
                }}
              >
                <div>{slides[activeIndex].line1}</div>
                <div>
                  <span style={{ color: "#f2572b" }}>{slides[activeIndex].line2}</span>
                </div>
                <div>
                  <span style={{ color: "#f2572b" }}>{slides[activeIndex].line3}</span>
                </div>
              </h1>

              <p
                className="mt-6 text-white"
                style={{ fontFamily: "Poppins, system-ui, sans-serif", fontSize: "16px", lineHeight: "24px" }}
              >
                {slides[activeIndex].description}
              </p>

              <div className="mt-10 flex justify-center lg:justify-start">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center rounded-[60px] bg-[#f2572b] px-[30px] py-[16px] text-white hover:bg-[#e04a1f] transition-colors"
                  style={{ fontFamily: "Poppins, system-ui, sans-serif", fontSize: "14px", fontWeight: 500 }}
                >
                  Start Hiring Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative hidden min-h-[520px] items-center justify-center lg:flex">
              <img
                src={slides[activeIndex].image}
                alt={`Slide ${activeIndex + 1}`}
                className="pointer-events-none select-none w-full max-w-[620px] object-contain transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Pagination dots */}
          <div className="mt-10 flex justify-center gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "w-12 bg-[#f2572b]"
                    : "w-2 bg-[#f2572b]/40 hover:bg-[#f2572b]/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;