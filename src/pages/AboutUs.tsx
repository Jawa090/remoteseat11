import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Users, 
  Target, 
  ShieldCheck, 
  TrendingUp, 
  Globe2, 
  Clock, 
  FileCheck, 
  BarChart3, 
  ArrowRight,
  Handshake,
  DollarSign
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  const values = [
    {
      title: "American Standards",
      desc: "Every estimator is trained in US building codes (IBC/IRC), ADA requirements, and regional pricing nuances from California to New York.",
      icon: ShieldCheck,
    },
    {
      title: "Workflow Integration",
      desc: "We don't just send files; we slot into your Procore, Bluebeam, or PlanSwift workflows as a seamless remote extension.",
      icon: Target,
    },
    {
      title: "Cost Efficiency",
      desc: "Achieve 60-70% savings on overhead, allowing you to reallocate capital toward winning more bids and scaling operations.",
      icon: DollarSign,
    },
    {
      title: "Rapid Turnaround",
      desc: "Our 24-48 hour project coverage ensures you never miss a bid deadline, regardless of project complexity.",
      icon: Clock,
    },
  ];

  const stats = [
    { label: "Cost Savings", value: "60-70%" },
    { label: "Faster Bidding", value: "75%" },
    { label: "Win Rate Increase", value: "25%" },
    { label: "Hourly Rate", value: "$13-18" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-[#171717] overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://ezybuilds.com/wp-content/uploads/2025/03/hero-blueprint.webp)',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
            >
              The Remote Backbone of <span className="text-[#f2572b]">US Construction</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              RemoteSeat connects US contractors with dedicated cost estimators and BIM experts trained to American standards, delivering RSMeans-based precision nationwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact-us/" 
                className="bg-[#f2572b] text-white px-8 py-4 rounded-full font-bold hover:bg-[#e04a1f] transition-all flex items-center gap-2"
              >
                Get a Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#f2572b]/10 rounded-full z-0"></div>
              <img 
                src="/25.png" 
                alt="US Construction Planning" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-[#f2572b] p-3 rounded-lg">
                    <TrendingUp className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#171717]">25% Higher</div>
                    <div className="text-sm text-[#6b6b6b]">Average Win Rate</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 
                className="text-3xl lg:text-4xl font-bold text-[#171717]"
                style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
              >
                Why Contractors Trust <span className="text-[#f2572b]">RemoteSeat</span>
              </h2>
              <p className="text-lg text-[#6b6b6b] leading-relaxed">
                From California pricing to New York union rates, our English-fluent estimators handle the regional complexities of US projects flawlessly. We bridge the gap between offshore cost-efficiency and local expertise.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <FileCheck className="w-6 h-6 text-[#f2572b] mt-1" />
                  <div>
                    <h4 className="font-bold text-[#171717]">Precise Takeoffs</h4>
                    <p className="text-[#6b6b6b]">RSMeans-based data ensuring your bids are competitive and profitable.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe2 className="w-6 h-6 text-[#f2572b] mt-1" />
                  <div>
                    <h4 className="font-bold text-[#171717]">Nationwide Coverage</h4>
                    <p className="text-[#6b6b6b]">Commercial, Residential, and Industrial expertise across all 50 states.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#f2572b] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm lg:text-base opacity-90 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 
              className="text-3xl lg:text-4xl font-bold text-[#171717] mb-4"
              style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
            >
              The RemoteSeat Advantage
            </h2>
            <p className="text-[#6b6b6b]">Mastering the tools you use daily to deliver estimates that slot directly into your existing systems.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-[#f2572b]/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#f2572b]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#171717] mb-3">{value.title}</h3>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-[#171717]">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://ezybuilds.com/wp-content/uploads/2025/03/plan-2.webp)',
            backgroundPosition: 'bottom right',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Ready to scale your estimating capacity?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Upload your plans today for a free 24-hour construction cost estimating quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact-us/" 
              className="w-full sm:w-auto bg-[#f2572b] text-white px-10 py-4 rounded-full font-bold hover:bg-[#e04a1f] transition-all"
            >
              Contact Now
            </Link>
            <div className="flex items-center gap-2 text-white/80">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Estimators available now
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;