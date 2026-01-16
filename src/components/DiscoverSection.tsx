import { Link } from "react-router-dom";
import { ArrowRight, Users, Briefcase, MessageSquare } from "lucide-react";

const DiscoverSection = () => {
  return (
    <section className="bg-[#dbd4ce] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 
            className="font-semibold tracking-[-1px] mb-6"
            style={{ 
              fontFamily: "trap, Poppins, system-ui, sans-serif", 
              fontSize: "48px", 
              lineHeight: "56px", 
              color: "#171717" 
            }}
          >
            Discover How <span style={{ color: "#f2572b" }}>RemoteSeat</span> Powers Your Construction Success
          </h2>
          <p 
            className="mx-auto max-w-3xl"
            style={{ 
              fontFamily: "Poppins, system-ui, sans-serif",
              color: "#171717", 
              fontSize: "18px", 
              lineHeight: "28px" 
            }}
          >
            Partner with our remote construction experts in cost estimation, BIM services, drafting, and project support. Trained to US standards, English-fluent, and available at 30% lower costs than local hires.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 lg:gap-10 mb-12">
          {/* Card 1 - Hire Remote Construction Estimators & Teams */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-[#f2572b]/20 hover:border-[#f2572b]/40 hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="grid md:grid-cols-[1fr_280px] items-stretch">
              <div className="p-8 lg:p-10">
                <Link to="/outsource-architecture-construction-staffing" className="no-underline group">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-[#f2572b] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="font-semibold mb-2 group-hover:text-[#f2572b] transition-colors"
                        style={{ 
                          fontFamily: "trap, Poppins, system-ui, sans-serif",
                          fontSize: "24px", 
                          lineHeight: "30px",
                          color: "#171717" 
                        }}
                      >
                        Hire Remote Construction Estimators & Teams
                      </h3>
                    </div>
                  </div>
                </Link>
                <p 
                  className="leading-relaxed"
                  style={{ 
                    fontFamily: "Poppins, system-ui, sans-serif",
                    color: "#171717", 
                    fontSize: "16px", 
                    lineHeight: "24px" 
                  }}
                >
                  Access dedicated offshore estimators, BIM technicians, 3D modelers, and project staff. Scale your team flexibly for construction estimating outsourcing without long-term contracts or overhead.
                </p>
              </div>
              <div className="flex items-center justify-center p-8 bg-gradient-to-br from-[#f2572b]/5 to-transparent">
                <img src="/5.png" alt="Hire Remote Estimators" className="w-full max-w-[240px] h-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Card 2 - Outsource Full Construction Projects */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-[#f2572b]/20 hover:border-[#f2572b]/40 hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="grid md:grid-cols-[1fr_280px] items-stretch">
              <div className="p-8 lg:p-10">
                <a href="https://ezybuilds.com/project-intake-form/" className="no-underline group">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-[#f2572b] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="font-semibold mb-2 group-hover:text-[#f2572b] transition-colors"
                        style={{ 
                          fontFamily: "trap, Poppins, system-ui, sans-serif",
                          fontSize: "24px", 
                          lineHeight: "30px",
                          color: "#171717" 
                        }}
                      >
                        Outsource Full Construction Projects
                      </h3>
                    </div>
                  </div>
                </a>
                <p 
                  className="leading-relaxed"
                  style={{ 
                    fontFamily: "Poppins, system-ui, sans-serif",
                    color: "#171717", 
                    fontSize: "16px", 
                    lineHeight: "24px" 
                  }}
                >
                  Delegate complete workflows—cost estimating, BIM modeling, takeoffs, and project coordination—to our remote specialists. We manage quality, timelines, and delivery end-to-end.
                </p>
              </div>
              <div className="flex items-center justify-center p-8 bg-gradient-to-br from-[#f2572b]/5 to-transparent">
                <img src="/6.png" alt="Outsource Projects" className="w-full max-w-[240px] h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            to="/contact-us#contact"
            className="inline-flex items-center justify-center gap-2 rounded-[60px] bg-[#f2572b] px-8 py-4 text-white hover:bg-[#e04a1f] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            style={{ 
              fontFamily: "Poppins, system-ui, sans-serif", 
              fontSize: "16px", 
              fontWeight: 600 
            }}
          >
            Get Free Consultation Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
