import { ArrowRight } from "lucide-react";

const OffshoreHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#171717] pt-16 md:pt-20">
      {/* Blueprint overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[#5f5f5f] bg-no-repeat bg-[position:92%_center] bg-cover opacity-75 mix-blend-screen filter brightness-125 contrast-110" aria-hidden="true" />
      {/* Top/Bottom bands to mimic reference framing */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-8 md:h-10 bg-[#171717] -z-10" />


      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        {/* Two-column layout with explicit split on desktop, vertically centered */}
        <div className="grid min-h-[400px] grid-cols-1 items-stretch gap-10 pt-0 md:pt-0 lg:pt-0 pb-0 lg:grid-cols-[55%_45%]">
          {/* Left column (text) */}
          <div className="flex flex-col items-center justify-center text-center max-w-[560px]">
            <h2
              className="text-white font-bold leading-[1.15] tracking-tight mb-4"
              style={{
                fontFamily: "trap, Poppins, system-ui, sans-serif",
                fontSize: "48px",
                lineHeight: "56px",
              }}
            >
              Ready to Hire Remote
              <br />
              <span style={{ color: "#f2572b" }}>Construction Estimators?</span>
            </h2>
            <p className="mt-4 max-w-[520px] text-[#E6E6E6] text-[15px] leading-[1.6]">
              Book a free consultation to discover offshore estimating teams, BIM services, and project support customized to your budget, timelines, and US construction needs.
            </p>
            <div className="mt-6">
              <a
                href="/contact-us/"
                className="inline-flex items-center gap-2 rounded-full bg-[#f2572b] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#e04a1f]"
              >
                Get Your Free Consultation!
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right column (image) */}
          <div className="relative z-20 mt-2 md:mt-4 flex w-full self-stretch h-full items-end justify-center pr-0 md:pr-4 lg:pr-6 xl:pr-8">
            <img
              src="/11.png"
              alt="Construction professional holding rolled blueprints"
              className="h-full w-full object-contain object-bottom"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffshoreHero;
