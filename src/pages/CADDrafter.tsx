import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Calendar, ChevronDown, ChevronUp, CheckCircle, DollarSign, Clock, Users, Shield, FileText, Layers } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CADDrafter = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      title: "2D CAD Drafting",
      description: "Precise 2D drawings including floor plans, elevations, sections, and details."
    },
    {
      title: "3D Modeling",
      description: "Detailed 3D models for visualization, coordination, and client presentations."
    },
    {
      title: "Construction Documents",
      description: "Complete construction document sets including plans, details, and specifications."
    },
    {
      title: "As-Built Drawings",
      description: "Accurate documentation of existing conditions and completed construction."
    },
    {
      title: "MEP Coordination",
      description: "Mechanical, electrical, and plumbing system drawings and coordination."
    },
    {
      title: "Shop Drawings",
      description: "Detailed fabrication and installation drawings for contractors and manufacturers."
    }
  ];

  const software = [
    "AutoCAD",
    "Revit",
    "SketchUp",
    "SolidWorks",
    "MicroStation",
    "Archicad",
    "Vectorworks",
    "Bluebeam"
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: "US Standards Compliant",
      description: "All drafters are trained in US building codes, standards, and drafting conventions."
    },
    {
      icon: DollarSign,
      title: "Save Up to 70%",
      description: "Reduce drafting costs significantly while maintaining professional quality standards."
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick delivery times with scalable teams to meet tight project deadlines."
    },
    {
      icon: Users,
      title: "Expert Drafters",
      description: "Experienced professionals with 3-10+ years in architectural and engineering drafting."
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Multi-level quality checks ensure accuracy, completeness, and code compliance."
    },
    {
      icon: FileText,
      title: "Full Documentation",
      description: "Complete drawing sets with proper layering, annotations, and documentation standards."
    }
  ];

  const faqs = [
    {
      question: "What types of CAD drafting services do you provide?",
      answer: "We provide comprehensive CAD drafting services including architectural drawings, structural drawings, MEP (mechanical, electrical, plumbing) drawings, site plans, detail drawings, as-built drawings, and shop drawings. Our drafters handle projects across residential, commercial, industrial, and infrastructure sectors."
    },
    {
      question: "Which CAD software do your drafters use?",
      answer: "Our drafters are proficient in industry-standard software including AutoCAD, Revit, SketchUp, SolidWorks, MicroStation, Archicad, Vectorworks, and Bluebeam. They can work with your preferred software and adapt to your specific standards and templates."
    },
    {
      question: "Are your drafters familiar with US building codes and standards?",
      answer: "Yes, all our drafters are trained in US building codes including IBC, IRC, ADA requirements, and local building codes. They understand US drafting standards, layer conventions, dimensioning practices, and architectural/engineering drawing requirements."
    },
    {
      question: "What's the typical turnaround time for drafting projects?",
      answer: "Turnaround time depends on project complexity and scope. Simple drawings can be completed within 24-48 hours, while complete construction document sets may take 1-2 weeks. We work with you to establish realistic timelines and can scale teams for urgent projects."
    },
    {
      question: "How do you ensure drawing quality and accuracy?",
      answer: "We have a rigorous quality assurance process including peer reviews, technical checks, code compliance verification, and client feedback integration. All drawings go through multiple review stages before final delivery to ensure accuracy and completeness."
    },
    {
      question: "Can drafters work with our existing templates and standards?",
      answer: "Absolutely. Our drafters can adapt to your company's templates, layer standards, text styles, dimension styles, and drawing conventions. We ensure consistency with your existing documentation standards."
    },
    {
      question: "Do you provide revisions and modifications?",
      answer: "Yes, we include reasonable revisions and modifications as part of our service. We work iteratively with you to refine drawings until they meet your exact requirements and specifications."
    },
    {
      question: "What file formats do you deliver?",
      answer: "We can deliver drawings in any standard format you need including DWG, PDF, DXF, RVT, SKP, and others. We ensure compatibility with your software and workflow requirements."
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
                Hire Offshore <span style={{ color: "#C95B4A" }}>CAD Drafters</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Access skilled CAD drafters trained in US standards. Get accurate drawings, detailed construction documents, and professional drafting services at a fraction of local costs.
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
              Comprehensive <span style={{ color: "#C95B4A" }}>Drafting Services</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our offshore CAD drafters deliver professional drafting services across all project phases and disciplines.
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

      {/* Software Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Software <span style={{ color: "#C95B4A" }}>Expertise</span>
            </h2>
            <p className="text-lg text-gray-300">
              Our drafters are proficient in industry-standard CAD software
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {software.map((item, index) => (
              <div key={index} className="bg-[#2a2a2a] px-6 py-3 rounded-lg border border-gray-700 hover:border-[#C95B4A] transition-colors">
                <span className="text-white font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Choose Our <span style={{ color: "#C95B4A" }}>Offshore Drafters</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-[#373737] p-6 rounded-xl border border-gray-600">
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
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              How It <span style={{ color: "#C95B4A" }}>Works</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Share Your Project", desc: "Send us your requirements, drawings, and project details." },
              { step: "2", title: "Get Matched", desc: "We match you with skilled drafters who fit your project needs." },
              { step: "3", title: "Review & Approve", desc: "Review candidate portfolios and select your drafting team." },
              { step: "4", title: "Start Drafting", desc: "Begin working immediately with ongoing support and quality checks." }
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
      <section className="py-20 bg-[#2a2a2a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Frequently Asked <span style={{ color: "#C95B4A" }}>Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#373737] rounded-lg overflow-hidden border border-gray-600">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#404040] transition-colors"
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
            Ready to Hire Offshore CAD Drafters?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Start saving costs and scaling your drafting capacity today. Get matched with skilled drafters in days, not months.
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

export default CADDrafter;

