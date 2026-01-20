import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const OutperformSection = () => {
  const stats = [
    {
      value: "Up to 30%",
      label: "Savings compared to US-based construction estimators and project staff.",
    },
    {
      value: "Top 1%",
      label: "Every expert is college-educated, trained to US standards, rigorously tested for accuracy in cost estimating and BIM services.",
    },
    {
      value: "100%",
      subValue: "Managed",
      label: "Recruitment, payroll, compliance, and time-zone alignment fully handled.",
    },
    {
      value: "20+",
      subValue: "Years",
      label: "Combined experience delivering remote construction estimating outsourcing on your schedule.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#dbd4ce] py-6 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side - Image */}
          <div className="relative hidden lg:flex justify-start items-stretch h-full">
            <img
              src="/4.png"
              alt="Team Collaboration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div>
              <h2
                className="font-semibold tracking-[-1px] text-[#171717]"
                style={{
                  fontFamily: "trap, Poppins, system-ui, sans-serif",
                  fontSize: "48px",
                  lineHeight: "56px",
                }}
              >
                Outperform Your Competitors with{" "}
                <span style={{ color: "#f2572b" }}>Remote Construction Experts</span>
              </h2>
            </div>

            <div>
              <h3
                className="font-semibold text-[#171717] mb-4"
                style={{
                  fontFamily: "trap, Poppins, system-ui, sans-serif",
                  fontSize: "28px",
                  lineHeight: "34px",
                }}
              >
                Expert Team Collaboration
              </h3>
            </div>

            <p
              className="text-[#171717]"
              style={{
                fontFamily: "Poppins, system-ui, sans-serif",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Think of RemoteSeat as your flexible remote extension—ensuring construction success from blueprint bids to project completion. Hire US-standard estimators, BIM teams, and support staff without local overhead, saving thousands on salaries, benefits, and training costs.
            </p>

            {/* Stats Boxes */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border-2 border-[#f2572b] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="space-y-2">
                    <div className="flex flex-col">
                      <span
                        className="font-bold text-[#171717]"
                        style={{
                          fontFamily: "trap, Poppins, system-ui, sans-serif",
                          fontSize: "36px",
                          lineHeight: "42px",
                        }}
                      >
                        {stat.value}
                      </span>
                      {stat.subValue && (
                        <span
                          className="font-semibold text-[#f2572b] mt-1"
                          style={{
                            fontFamily: "trap, Poppins, system-ui, sans-serif",
                            fontSize: "20px",
                            lineHeight: "24px",
                          }}
                        >
                          {stat.subValue}
                        </span>
                      )}
                    </div>
                    <p
                      className="text-[#171717] text-sm leading-relaxed"
                      style={{
                        fontFamily: "Poppins, system-ui, sans-serif",
                        fontSize: "14px",
                        lineHeight: "20px",
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link
                to="/contact-us/"
                className="relative inline-flex items-center justify-center rounded-full bg-[#f2572b] px-[30px] py-[16px] text-white hover:bg-[#e04a1f] transition-colors overflow-hidden shadow-lg"
                style={{ fontFamily: "Poppins, system-ui, sans-serif", fontSize: "14px", fontWeight: 500 }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/50 via-white/20 to-transparent" style={{ height: '60%' }}></div>
                <div className="absolute inset-0 rounded-full" style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 40%, transparent 60%)',
                  boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.5)'
                }}></div>
                <span className="relative z-10">Get Your Free Consult</span>
                <ArrowRight className="relative z-10 ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutperformSection;
