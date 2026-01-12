import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Calendar, ChevronDown, ChevronUp, Clock, Users, CheckCircle, Building2, Wrench, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OutsourceConstruction = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const deadlinePoints = [
    {
      icon: Clock,
      text: "Construction deadlines don't wait for you to find the right talent"
    },
    {
      icon: Users,
      text: "Hiring locally takes weeks, sometimes months, and costs a fortune"
    },
    {
      icon: CheckCircle,
      text: "Get instant access to pre-vetted AEC professionals ready to start immediately"
    }
  ];

  const softwareTools = [
    "AutoCAD", "Revit", "SketchUp", "3ds Max", "V-Ray", "Lumion", 
    "ArchiCAD", "Blender", "Bluebeam", "PlanSwift", "On-Screen Takeoff",
    "SolidWorks", "MicroStation", "Vectorworks"
  ];

  const roles = [
    { title: "Residential Architect", icon: Building2 },
    { title: "Civil Engineer", icon: Wrench },
    { title: "Project Manager", icon: Users },
    { title: "BIM Specialist", icon: FileText },
    { title: "Structural Engineer", icon: Building2 },
    { title: "MEP Engineer", icon: Wrench },
    { title: "Cost Estimator", icon: FileText },
    { title: "CAD Drafter", icon: FileText },
    { title: "3D Modeler", icon: Building2 }
  ];

  const clients = [
    "General Contractors",
    "Architecture Firms",
    "Engineering Companies",
    "Construction Managers",
    "Real Estate Developers",
    "Design-Build Firms",
    "Facility Management",
    "Infrastructure Companies"
  ];

  const testimonials = [
    {
      quote: "EZYBUILDS' team is hardworking and dependable. They always deliver great work, even when we're up against tight deadlines. Highly recommend them!",
      name: "Robert H.",
      role: "Project Manager"
    },
    {
      quote: "EZYBUILDS never misses a deadline. They're quick, efficient, and always keep us updated on progress. A pleasure to work with!",
      name: "James L.",
      role: "Principal Architect"
    }
  ];

  const faqs = [
    {
      question: "What construction services can we outsource?",
      answer: "You can outsource a wide range of construction services including architectural design, structural engineering, MEP design, BIM modeling, CAD drafting, cost estimation, project management, 3D rendering, and construction documentation. We handle projects from initial design through construction documentation."
    },
    {
      question: "How quickly can we get started?",
      answer: "We can match you with pre-vetted professionals within 24-48 hours. Once you approve the candidates, they can start working immediately. No lengthy hiring process or onboarding delays."
    },
    {
      question: "What's the cost difference compared to hiring locally?",
      answer: "You can save up to 70% on costs compared to hiring local professionals. Our offshore talent works at competitive hourly rates ($13-15/hour) versus local rates ($40-70/hour), with no benefits, taxes, or recruitment fees."
    },
    {
      question: "Are the professionals familiar with US construction standards?",
      answer: "Yes, all our professionals are trained in US construction standards, building codes (IBC, IRC), and imperial measurements. They understand US project requirements and work in your time zone for seamless collaboration."
    },
    {
      question: "How do we communicate with offshore teams?",
      answer: "We use your preferred communication tools (Slack, Teams, email, video calls) for daily updates, progress tracking, and meetings. Regular check-ins ensure transparency and alignment with your project goals."
    },
    {
      question: "What about quality assurance?",
      answer: "We have a rigorous quality assurance process including peer reviews, technical checks, code compliance verification, and client feedback integration. All deliverables go through multiple review stages before final delivery."
    },
    {
      question: "Can we scale the team up or down as needed?",
      answer: "Absolutely. Our flexible model allows you to scale your team based on project needs. Add more professionals during peak periods and reduce when workload decreases, all without long-term commitments."
    },
    {
      question: "What file formats and software do you support?",
      answer: "We support all industry-standard software including AutoCAD, Revit, SketchUp, 3ds Max, Bluebeam, and more. We can work with your existing templates, standards, and file formats to ensure seamless integration."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f3f2f0]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ fontFamily: "trap, Poppins, system-ui, sans-serif", color: "#212121" }}
              >
                Need Extra Hands for Your <span style={{ color: "#C95B4A" }}>Construction Project?</span>
              </h1>
              <p className="text-lg text-[#6b6b6b] leading-relaxed">
                Get instant access to pre-vetted AEC professionals. Scale your team instantly, save up to 70% on costs, and meet tight deadlines without the hassle of local hiring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C95B4A] px-8 py-4 text-white font-medium hover:bg-[#b34e3f] transition-colors"
                  style={{ fontFamily: "Poppins, system-ui, sans-serif", fontSize: "14px" }}
                >
                  Book a Free 15-Minute Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+15108617074"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[#212121] font-medium hover:bg-gray-50 transition-colors border-2 border-[#212121]"
                  style={{ fontFamily: "Poppins, system-ui, sans-serif", fontSize: "14px" }}
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <Calendar className="w-full h-auto text-[#C95B4A] opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Deadlines Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {deadlinePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#C95B4A] rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg text-[#212121] font-medium leading-relaxed pt-2">
                    {point.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Software & Tools Section */}
      <section className="py-16 bg-[#C95B4A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Software & Tools We Expertly Utilize
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {softwareTools.map((tool, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
              >
                <span className="text-white font-medium text-sm md:text-base">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get What You Need Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#212121" }}>
              Get what you need. <span style={{ color: "#C95B4A" }}>Only when you need it.</span>
            </h2>
            <p className="text-lg text-[#6b6b6b] max-w-3xl mx-auto">
              Access a wide range of AEC professionals on-demand. Scale your team instantly without long-term commitments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#C95B4A] transition-colors">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#212121]" />
                  </div>
                  <h3 className="text-lg font-semibold" style={{ color: "#212121" }}>
                    {role.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Simple 3-Step Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#212121" }}>
              Simple <span style={{ color: "#C95B4A" }}>3-Step Process</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { step: "1", title: "Tell Us Your Needs", desc: "Share your project requirements and the skills you need." },
              { step: "2", title: "Get Matched", desc: "We match you with pre-vetted professionals in 24-48 hours." },
              { step: "3", title: "Start Working", desc: "Begin immediately with full support and quality assurance." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#C95B4A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#212121" }}>{item.title}</h3>
                <p className="text-[#6b6b6b]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C95B4A] px-8 py-4 text-white font-medium hover:bg-[#b34e3f] transition-colors"
              style={{ fontFamily: "Poppins, system-ui, sans-serif", fontSize: "14px" }}
            >
              Start now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-16 bg-[#C95B4A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Clients
            </h2>
            <p className="text-white/90 text-lg">
              Trusted by leading companies across the AEC industry
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-medium text-sm">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              WHAT OUR <span style={{ color: "#C95B4A" }}>CLIENTS</span> SAY
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-[#2a2a2a] text-6xl leading-none mb-4 font-bold opacity-20">"</div>
                <p className="text-[#212121] text-lg mb-6 leading-relaxed italic">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-bold text-[#212121]">{testimonial.name}</div>
                  <div className="text-[#C95B4A] text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#212121" }}>
              Frequently Asked <span style={{ color: "#C95B4A" }}>Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden hover:border-[#C95B4A] transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-medium pr-4" style={{ color: "#212121" }}>
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#C95B4A] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-[#6b6b6b] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#212121]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Scale Your Construction Team?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get instant access to pre-vetted AEC professionals. Save up to 70% on costs and meet your deadlines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C95B4A] px-8 py-4 text-white font-medium hover:bg-[#b34e3f] transition-colors"
              style={{ fontFamily: "Poppins, system-ui, sans-serif", fontSize: "14px" }}
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+15108617074"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2a2a2a] px-8 py-4 text-white font-medium hover:bg-[#373737] transition-colors border border-gray-600"
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

export default OutsourceConstruction;

