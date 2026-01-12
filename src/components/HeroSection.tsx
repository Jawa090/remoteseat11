import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import planBg from "../assets/images/plan-1.webp";
import chairImg from "../assets/images/chair.webp";
import buildingImg from "../assets/images/building-1.webp";
import modelerImg from "../assets/images/48-1-scaled-1.webp";

const HeroSection = () => {
  const slides = [
    {
      title: "Hire Top 1% of Offshore",
      highlight: "Architects, Estimators & Structural",
      subtitle: "Engineers",
      description:
        "Access pre-vetted AEC talent – architects, estimators, and structural engineers trained to meet US standards with our offshore staffing solutions. Save costs, scale quickly, and build your remote team.",
      image: buildingImg,
      imageAlt: "",
    },
    {
      title: "Hire Offshore",
      highlight: "BIM Technicians & 3D",
      subtitle: "Modelers",
      description:
        "Bring BIM & 3D modeling expertise on board through our offshore staffing agency. Highly skilled remote professionals at a fraction of local cost to support your project delivery and also help you attract more high-ticket clients.",
      image: modelerImg,
      imageAlt: "",
    },
    {
      title: "Hire Offshore",
      highlight: "Estimators & Project",
      subtitle: "Support Staff",
      description:
        "Scale your AEC team with estimators and project support specialists. Our offshore staffing agency delivers vetted talent who understand US construction standards.",
      image: chairImg,
      imageAlt: "",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((v) => (v + 1) % slides.length);
    }, 2500);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <section
      className="ezy-hero relative overflow-hidden bg-[#212121]"
      style={{
        backgroundImage: `url("${planBg}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative py-24 lg:py-28">
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
                {slides[activeIndex].title}{" "}
                <span style={{ color: "#C95B4A" }}>{slides[activeIndex].highlight}</span>{" "}
                {slides[activeIndex].subtitle}
              </h1>

              <p
                className="mt-6 text-[#F0F0F0]"
                style={{ fontFamily: "Poppins, system-ui, sans-serif", fontSize: "16px", lineHeight: "24px" }}
              >
                {slides[activeIndex].description}
              </p>

              <div className="mt-10 flex justify-center lg:justify-start">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center rounded-[60px] bg-[#C95B4A] px-[30px] py-[16px] text-white"
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
                alt={slides[activeIndex].imageAlt}
                className="pointer-events-none select-none w-full max-w-[620px]"
              />
            </div>
          </div>

          <div className="ezy-hero-pagination mt-10 flex justify-center gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setActiveIndex(idx)}
                className={idx === activeIndex ? "ezy-bullet ezy-bullet-active" : "ezy-bullet"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;