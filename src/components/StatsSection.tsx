import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { value: "Up to 70%", label: "Savings compared to hiring a US-based professional." },
  { value: "Top 1%", label: "Every resource is college-educated, US-trained, rigorously tested." },
  { value: "100%", sublabel: "Managed", label: "Recruitment, payroll, and compliance handled." },
  { value: "30+", sublabel: "Years", label: "Combined experience and work in your time zone." },
];

const StatsSection = () => {
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
          {/* Content */}
          <div className="space-y-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              Think of us as a flexible extension of your team, ensuring your project's success from blueprint to reality. Access US-standard talent without hiring locally and save thousands on salaries, benefits, and training.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl lg:text-4xl font-bold text-orange-400">
                      {stat.value}
                    </span>
                    {stat.sublabel && (
                      <span className="text-xl font-semibold text-white">
                        {stat.sublabel}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link to="/contact-us/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 transition-all px-8 py-4 text-lg font-medium rounded-full"
              >
                Get Your Free Consultation
              </Button>
            </Link>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">E</span>
                </div>
                <p className="text-white text-lg">Expert Team Collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
