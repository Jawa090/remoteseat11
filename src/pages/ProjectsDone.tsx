import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Calendar, ChevronDown, ChevronUp, Building2, DraftingCompass, Briefcase, Calculator, Box, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProjectsDone = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    { title: "BIM Modeling", icon: Building2 },
    { title: "CAD Drafting", icon: DraftingCompass },
    { title: "Project Management", icon: Briefcase },
    { title: "Cost Estimation", icon: Calculator },
    { title: "3D Rendering", icon: Box },
    { title: "Interior Designing", icon: Home }
  ];

  const visualizationServices = [
    {
      title: "3D Interior Rendering",
      image: "/22.png",
      description: "Transform spaces with lifelike interior visuals for client approvals."
    },
    {
      title: "3D Furniture Rendering",
      image: "/23.png",
      description: "Showcase designs with detailed, manufacturable 3D furniture models."
    },
    {
      title: "3D Exterior Rendering",
      image: "/24.png",
      description: "Present building exteriors with realistic lighting, textures, and environments."
    }
  ];

  const whyChooseUs = [
    {
      title: "Detailed Documentation",
      description: "Precise, well-documented construction drawings minimize errors and streamline project execution."
    },
    {
      title: "Code Compliance and Regulatory Assurance",
      description: "Projects meet local and international codes, ensuring safety and preventing delays."
    },
    {
      title: "Top 1% US-Trained Talent",
      description: "US-trained architects and engineers work in your time zone, delivering quality results."
    },
    {
      title: "Confidential",
      description: "Secure data management ensures confidentiality, reliability, and compliance for your projects."
    },
    {
      title: "Affordable",
      description: "Save up to 70% with competitive rates and no quality compromise."
    }
  ];

  const testimonials = [
    {
      quote: "remoteseat' team is hardworking and dependable. They always deliver great work, even when we're up against tight deadlines. Highly recommend them!",
      name: "Robert H.",
      role: "Project Manager"
    },
    {
      quote: "remoteseat never misses a deadline. They're quick, efficient, and always keep us updated on progress. A pleasure to work with!",
      name: "James L.",
      role: "Principal Architect"
    },
    {
      quote: "The remoteseat team is professional and easy to work with. They listen carefully, communicate well, and always deliver top-quality results.",
      name: "Emily W.",
      role: "CEO"
    }
  ];

  const otherServices = [
    "Marketing",
    "Accounting",
    "Customer & Admin Support",
    "Website Development"
  ];

  const faqs = [
    {
      question: "Are offshore professionals familiar with US codes?",
      answer: "Over 90% of our offshore professionals have 3-5 years of US project experience, ensuring expertise in US building codes and imperial measurements. All are fluent in English."
    },
    {
      question: "What are the working hours for offshore teams?",
      answer: "Our offshore teams work in your time zone, ensuring seamless collaboration and maximum efficiency for your projects."
    },
    {
      question: "What architectural services can we outsource?",
      answer: "Outsource conceptual design, 3D modeling, BIM services, construction documentation, project management, and more to our offshore experts."
    },
    {
      question: "How do you handle communication with offshore teams?",
      answer: "We use your preferred tools for communication and project management, with regular updates and progress reports for smooth execution."
    },
    {
      question: "How do we start outsourcing architectural services?",
      answer: "Contact us for a consultation. We'll match you with the best offshore resources and begin the collaboration process."
    },
    {
      question: "Is outsourcing architectural services cost-effective?",
      answer: "Yes, outsourcing saves up to 70% on costs while maintaining high-quality standards and timely delivery."
    },
    {
      question: "How do you ensure quality with offshore teams?",
      answer: "Our offshore professionals are rigorously screened for technical skills, English fluency, and US project experience to ensure top-quality results."
    }
  ];


  return (
    <div className="min-h-screen bg-[#171717] text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 bg-[#171717] overflow-hidden" style={{ backgroundImage: 'url(/assets/hero-blueprint.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#171717]/70"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Centered Hero Title */}
          <div className="text-center mb-16">
            <h1
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-6"
              style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
            >
              OUTSOURCE CAD DRAFTING SERVICES
            </h1>
            <p
              className="text-white/95 text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: "Poppins, system-ui, sans-serif" }}
            >
              Get accurate drafts that save time and reduce costly reworks.
            </p>
          </div>

          {/* White Card Overlay at Bottom of Hero */}
          <div className="relative -mb-20">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl max-w-4xl mx-auto border-2 border-[#f2572b]/20">
              <h2
                className="text-2xl lg:text-3xl font-bold mb-6 text-center"
                style={{
                  fontFamily: "trap, Poppins, system-ui, sans-serif",
                  color: "#171717"
                }}
              >
                What's the best way for you to receive your quote?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  to="/contact-us/"
                  className="px-6 py-4 bg-[#f2572b] text-white rounded-lg font-medium hover:bg-[#e04a1f] transition-colors text-center"
                >
                  Instant Quote
                </Link>
                <a
                  href="https://calendly.com/ezy-teams/ezybuilds-project-discussion-meeting-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-gray-300 text-[#171717] rounded-lg font-medium hover:bg-gray-400 transition-colors text-center"
                >
                  Schedule Call
                </a>
                <Link
                  to="/contact-us/"
                  className="px-6 py-4 bg-gray-300 text-[#171717] rounded-lg font-medium hover:bg-gray-400 transition-colors text-center"
                >
                  Custom
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AEC Consultants Section - Below Hero on Light Grey */}
      <section className="pt-32 pb-20 bg-[#dbd4ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/assets/man.png"
                alt="AEC Professional"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2
                className="text-3xl lg:text-4xl font-bold"
                style={{
                  fontFamily: "trap, Poppins, system-ui, sans-serif",
                  color: "#171717"
                }}
              >
                Talk to Our AEC Outsourcing Consultants
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: "Poppins, system-ui, sans-serif",
                  color: "#171717"
                }}
              >
                65% of US architecture and engineering firms outsource to cut costs and meet deadlines.
                At remoteseat, hire the top 1% of AEC professionals with US project experience.
                Your competitors are already outsourcing smarter; don't get left behind.
              </p>
              <Link
                to="/contact-us/"
                className="inline-flex items-center px-8 py-3 bg-[#f2572b] text-white rounded-lg font-medium hover:bg-[#e04a1f] transition-colors"
              >
                Get Your Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Software Tools Marquee */}
      <section className="py-12 bg-[#f2572b] overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {['AutoCAD', 'Revit', '3ds Max', 'SketchUp', 'V-Ray', 'Lumion', 'ArchiCAD', 'Blender', 'AutoCAD', 'Revit', '3ds Max', 'SketchUp'].map((tool, index) => (
            <div key={index} className="flex-shrink-0 mx-8">
              <span className="text-white text-2xl font-bold">{tool}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Preconstruction Services Grid */}
      <section className="py-20 bg-[#dbd4ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{
                fontFamily: "trap, Poppins, system-ui, sans-serif",
                color: "#171717"
              }}
            >
              Outsource Preconstruction Services
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl text-center border-2 border-[#f2572b]/30 hover:border-[#f2572b] hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-10 h-10 text-[#f2572b]" />
                  </div>
                  <h3
                    className="text-lg font-bold"
                    style={{ color: "#171717" }}
                  >
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact-us/"
              className="inline-flex items-center px-8 py-4 bg-[#f2572b] text-white rounded-lg font-medium hover:bg-[#e04a1f] transition-colors"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>

      {/* Architectural Visualization Section */}
      <section className="py-20 bg-[#dbd4ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{
                fontFamily: "trap, Poppins, system-ui, sans-serif",
                color: "#171717"
              }}
            >
              Architectural Visualization and 3D Rendering Services
            </h2>
            <p
              className="text-lg"
              style={{ color: "#171717" }}
            >
              Trusted by AEC firms for high-quality 3D models and photorealistic renders.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner Before Renderings */}
      <section className="py-16 bg-[#171717]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-6 text-white"
            style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
          >
            Want to Hire Dedicated AEC Talent at a Fraction of the Cost?
          </h2>
          <Link
            to="/contact-us/"
            className="inline-flex items-center px-8 py-4 bg-[#f2572b] text-white rounded-lg font-medium hover:bg-[#e04a1f] transition-colors"
          >
            Get Your Free Quote Now
          </Link>
        </div>
      </section>

      {/* Rendering Examples on Dark Background */}
      <section className="py-20 bg-[#171717]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {visualizationServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border-2 border-[#f2572b]/20 p-8 rounded-xl hover:border-[#f2572b]/40 transition-all duration-300">
                <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-4 text-white"
                  style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-white/80"
                  style={{ fontFamily: "Poppins, system-ui, sans-serif" }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#dbd4ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{
                fontFamily: "trap, Poppins, system-ui, sans-serif",
                color: "#171717"
              }}
            >
              Why Choose Us for Outsourcing?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-[#f2572b] rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
                >
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown Section */}
      <section className="py-20 bg-[#dbd4ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{
                fontFamily: "trap, Poppins, system-ui, sans-serif",
                color: "#171717"
              }}
            >
              Overheads and Burdens of Traditional Local Hiring
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between bg-white p-6 rounded-xl border-2 border-[#f2572b]/20">
              <div className="flex-1">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#171717" }}
                >
                  Overhead Costs
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-[#f2572b] h-4 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
              <div className="text-4xl font-bold text-[#f2572b] ml-6">35%</div>
            </div>

            <div className="flex items-center justify-between bg-white p-6 rounded-xl border-2 border-[#f2572b]/20">
              <div className="flex-1">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#171717" }}
                >
                  Operational Costs
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-[#f2572b] h-4 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
              <div className="text-4xl font-bold text-[#f2572b] ml-6">20%</div>
            </div>

            <div className="flex items-center justify-between bg-white p-6 rounded-xl border-2 border-[#f2572b]/20">
              <div className="flex-1">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#171717" }}
                >
                  Employee Benefits
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-[#f2572b] h-4 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
              <div className="text-4xl font-bold text-[#f2572b] ml-6">15%</div>
            </div>

            <div className="flex items-center justify-between bg-white p-6 rounded-xl border-2 border-[#f2572b]/20">
              <div className="flex-1">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#171717" }}
                >
                  Contingency Costs
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-[#f2572b] h-4 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
              <div className="text-4xl font-bold text-[#f2572b] ml-6">10%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-10 bg-[#171717]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border-2 border-[#f2572b]/20 p-8 rounded-xl hover:border-[#f2572b]/40 transition-all duration-300">
                <p className="text-white/90 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="text-white font-bold">{testimonial.name}</div>
                  <div className="text-[#f2572b]">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-[#171717]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{
                fontFamily: "trap, Poppins, system-ui, sans-serif",
                color: "white"
              }}
            >
              Other Services You Can Outsource
            </h2>
            <p
              className="text-lg"
              style={{ color: "white" }}
            >
              Free up your team to focus on what they do best. Outsource non-core tasks to experts and save up to 70% on operational costs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center border-2 border-[#f2572b]/30 hover:border-[#f2572b] hover:shadow-lg transition-all duration-300">
                <h3
                  className="text-lg font-bold"
                  style={{ color: "#171717" }}
                >
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#dbd4ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - FAQ Accordion */}
            <div>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-8"
                style={{
                  fontFamily: "trap, Poppins, system-ui, sans-serif",
                  color: "#171717"
                }}
              >
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl border-2 border-[#f2572b]/20 hover:border-[#f2572b]/40 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#f2572b]/5 transition-colors"
                      style={{ color: "inherit" }}
                    >
                      <span
                        className="font-semibold pr-4"
                        style={{
                          fontFamily: "trap, Poppins, system-ui, sans-serif",
                          color: "#171717"
                        }}
                      >
                        {faq.question}
                      </span>
                      {openFaq === index ? (
                        <ChevronUp className="w-6 h-6 text-[#f2572b] transition-transform duration-300 rotate-180" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400 transition-transform duration-300" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-5 border-t border-[#f2572b]/10">
                        <p
                          className="leading-relaxed pt-4"
                          style={{
                            fontFamily: "Poppins, system-ui, sans-serif",
                            fontSize: "15px",
                            lineHeight: "24px",
                            color: "#171717"
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4 text-white"
                style={{
                  fontFamily: "trap, Poppins, system-ui, sans-serif"
                }}
              >
                Call Us Right Now
              </h2>
              <p className="text-white/90 mb-8">
                Get instant consultation without any cost.
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#f2572b]/20">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2572b] focus:border-transparent outline-none"
                      style={{ color: "#171717" }}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2572b] focus:border-transparent outline-none"
                      style={{ color: "#171717" }}
                      required
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Work Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2572b] focus:border-transparent outline-none"
                    style={{ color: "#171717" }}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Company Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2572b] focus:border-transparent outline-none"
                    style={{ color: "#171717" }}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Your Role"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2572b] focus:border-transparent outline-none"
                    style={{ color: "#171717" }}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2572b] focus:border-transparent outline-none"
                    style={{ color: "#171717" }}
                    required
                  />
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2572b] focus:border-transparent outline-none"
                    style={{ color: "#171717" }}
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#f2572b] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#e04a1f] transition-colors"
                  >
                    Start Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsDone;