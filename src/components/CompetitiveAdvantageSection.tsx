import { Link } from "react-router-dom";

const CompetitiveAdvantageSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Outperform Your Competitors with{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Offshore AEC Experts</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="w-full h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">E</span>
                </div>
                <p className="text-white text-lg">Expert Team Collaboration</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <p className="text-gray-300 text-lg leading-relaxed">
              Think of us as a flexible extension of your team, ensuring your project's success from blueprint to reality. Access US-standard talent without hiring locally and save thousands on salaries, benefits, and training.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl lg:text-4xl font-bold text-orange-400">
                    Up to 70%
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">Savings compared to hiring a US-based professional.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl lg:text-4xl font-bold text-orange-400">
                    Top 1%
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">Every resource is college-educated, US-trained, rigorously tested.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl lg:text-4xl font-bold text-orange-400">
                    100%
                  </span>
                  <span className="text-xl font-semibold text-white">
                    Managed
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">Recruitment, payroll, and compliance handled.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl lg:text-4xl font-bold text-orange-400">
                    30+
                  </span>
                  <span className="text-xl font-semibold text-white">
                    Years
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">Combined experience and work in your time zone.</p>
              </div>
            </div>

            <Link to="/contact-us/">
              <button
                className="inline-flex items-center justify-center rounded-[60px] bg-[#C95B4A] px-[30px] py-[16px] text-white hover:bg-[#B84A3A] transition-colors"
                style={{ fontFamily: "Poppins, system-ui, sans-serif", fontSize: "14px", fontWeight: 500 }}
              >
                Get Your Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantageSection;