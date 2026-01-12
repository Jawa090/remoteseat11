import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Calendar, ChevronDown, ChevronUp, CheckCircle, DollarSign, Clock, Users, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ConstructionEstimator = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      title: "Quantity Takeoff",
      description: "Accurate material and labor quantity calculations for all construction phases."
    },
    {
      title: "Cost Estimation",
      description: "Detailed cost breakdowns including materials, labor, equipment, and overhead."
    },
    {
      title: "Bid Preparation",
      description: "Professional bid packages that help you win more projects competitively."
    },
    {
      title: "Change Order Management",
      description: "Track and estimate costs for project modifications and scope changes."
    },
    {
      title: "Value Engineering",
      description: "Identify cost-saving opportunities without compromising quality or functionality."
    },
    {
      title: "Project Cost Control",
      description: "Ongoing cost monitoring and reporting to keep projects on budget."
    }
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: "US Standards Trained",
      description: "All estimators are trained in US construction standards, codes, and measurement systems."
    },
    {
      icon: DollarSign,
      title: "Save Up to 70%",
      description: "Reduce costs significantly compared to hiring local estimators while maintaining quality."
    },
    {
      icon: Clock,
      title: "Your Time Zone",
      description: "Work in your time zone with seamless communication and real-time collaboration."
    },
    {
      icon: Users,
      title: "Top 1% Talent",
      description: "Rigorous screening ensures only the best estimators join your team."
    },
    {
      icon: Shield,
      title: "100% Managed",
      description: "We handle recruitment, payroll, compliance, and all administrative tasks."
    }
  ];

  const faqs = [
    {
      question: "What types of construction projects can your estimators handle?",
      answer: "Our offshore construction estimators are experienced in residential, commercial, industrial, infrastructure, and institutional projects. They handle everything from small renovations to large-scale developments, including multi-family housing, office buildings, warehouses, hospitals, schools, and more."
    },
    {
      question: "Are your estimators familiar with US construction codes and standards?",
      answer: "Yes, all our estimators are trained in US construction standards including IBC, IRC, and local building codes. They're familiar with imperial measurements, US material specifications, and regional pricing variations across different states."
    },
    {
      question: "What software do your estimators use?",
      answer: "Our estimators are proficient in industry-standard software including PlanSwift, On-Screen Takeoff, Bluebeam, Excel, and various estimating platforms. They can adapt to your preferred tools and workflows."
    },
    {
      question: "How do you ensure accuracy in cost estimates?",
      answer: "We use a multi-layered quality assurance process including peer reviews, historical data validation, market rate comparisons, and regular accuracy audits. All estimates go through thorough verification before delivery."
    },
    {
      question: "What's the typical turnaround time for estimates?",
      answer: "Turnaround time depends on project complexity and scope. Simple projects can be estimated within 24-48 hours, while complex projects may take 3-5 business days. We work with you to meet your deadlines."
    },
    {
      question: "Can estimators work on multiple projects simultaneously?",
      answer: "Yes, our estimators can handle multiple projects efficiently. We can scale your team based on workload, ensuring all projects receive proper attention and meet deadlines."
    },
    {
      question: "How do you handle communication and project updates?",
      answer: "We use your preferred communication tools (Slack, Teams, email, etc.) for daily updates, progress reports, and meetings. Regular check-ins ensure transparency and alignment with your expectations."
    },
    {
      question: "What's included in the hourly rate?",
      answer: "The hourly rate includes the estimator's time, all administrative support, project management, quality assurance, and ongoing support. There are no hidden fees, benefits, or additional costs."
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 bg-[#212121] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
                style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
              >
                Hire Offshore <span style={{ color: "#C95B4A" }}>Construction Estimators</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Access top-tier construction cost estimators trained in US standards. Get accurate quantity takeoffs, detailed cost estimates, and professional bid preparation at a fraction of local costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C95B4A] px-8 py-4 text-white font-medium hover:bg-[#b34e3f] transition-colors"
                  style={{ fontFamily: "Poppins, system-ui, sans-serif", fontSize: "14px" }}
                >
                  Get Started Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+15108617074"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2a2a2a] px-8 py-4 text-white font-medium hover:bg-[#373737] transition-colors border border-gray-600"
                  style={{ fontFamily: "Poppins, system-ui, sans-serif", fontSize: "14px" }}
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#2a2a2a] rounded-2xl p-8 border border-gray-700">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#C95B4A] mb-2">$13/hour</div>
                    <div className="text-gray-400">Offshore Rate</div>
                  </div>
                  <div className="border-t border-gray-700 pt-6">
                    <div className="text-center text-gray-400 mb-2">vs. Local Hiring</div>
                    <div className="text-3xl font-bold text-white">$40/hour</div>
                  </div>
                  <div className="bg-[#C95B4A]/10 rounded-lg p-4 text-center border border-[#C95B4A]/30">
                    <div className="text-sm text-gray-300 mb-1">Annual Savings</div>
                    <div className="text-2xl font-bold text-[#C95B4A]">~$57,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Comprehensive <span style={{ color: "#C95B4A" }}>Estimation Services</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our offshore construction estimators deliver end-to-end estimation services to support your projects from conception to completion.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-[#373737] p-6 rounded-xl hover:bg-[#404040] transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Choose Our <span style={{ color: "#C95B4A" }}>Offshore Estimators</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-[#2a2a2a] p-6 rounded-xl border border-gray-700">
                  <div className="w-12 h-12 bg-[#C95B4A] rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              How It <span style={{ color: "#C95B4A" }}>Works</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Share Your Needs", desc: "Tell us about your estimation requirements and project scope." },
              { step: "2", title: "Get Matched", desc: "We match you with pre-vetted estimators who fit your needs." },
              { step: "3", title: "Interview & Select", desc: "Review candidates and choose the best fit for your team." },
              { step: "4", title: "Start Estimating", desc: "Begin working immediately with full support and management." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#C95B4A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Frequently Asked <span style={{ color: "#C95B4A" }}>Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#2a2a2a] rounded-lg overflow-hidden border border-gray-700">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#373737] transition-colors"
                >
                  <span className="font-medium text-white pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#C95B4A] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#C95B4A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Hire Offshore Construction Estimators?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Start saving costs and scaling your estimation capacity today. Get matched with top-tier estimators in days, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[#C95B4A] font-medium hover:bg-gray-100 transition-colors"
              style={{ fontFamily: "Poppins, system-ui, sans-serif", fontSize: "14px" }}
            >
              Get Your Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+15108617074"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-8 py-4 text-white font-medium hover:bg-white/20 transition-colors border border-white/30"
              style={{ fontFamily: "Poppins, system-ui, sans-serif", fontSize: "14px" }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConstructionEstimator;

