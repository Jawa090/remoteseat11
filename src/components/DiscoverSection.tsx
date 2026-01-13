import { Link } from "react-router-dom";
import { ArrowRight, Users, Briefcase } from "lucide-react";
import img1 from "@/assets/images/img1.png";
import img2 from "@/assets/images/img2.png";

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
            Discover How <span style={{ color: "#f2572b" }}>remoteseat</span> Can Help You
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
            Partner with 100+ AEC specialists in design, drafting, BIM, cost estimation, and project management. Trained in US standards,
            fluent in English, and available at 70% lower costs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 lg:gap-10 mb-12">
          {/* Card 1 */}
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
                        Offshore Staffing for Any AEC Talent
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
                  Hire remote AEC professionals from estimators and architects to BIM, drafting, engineering, and project support. Build and
                  grow your team flexibly, without long-term commitments.
                </p>
              </div>
              <div className="flex items-center justify-center p-8 bg-gradient-to-br from-[#f2572b]/5 to-transparent">
                <img src={img1} alt="Offshore Staffing" className="w-full max-w-[240px] h-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
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
                        Outsource AEC Projects End to End
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
                  Delegate entire projects, design, drafting, BIM, MEP coordination, modeling, estimation, or more to our offshore experts.
                  We handle delivery, quality, and deadlines.
                </p>
              </div>
              <div className="flex items-center justify-center p-8 bg-gradient-to-br from-[#f2572b]/5 to-transparent">
                <img src={img2} alt="Outsource Projects" className="w-full max-w-[240px] h-auto object-contain" />
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
            Get Your Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
