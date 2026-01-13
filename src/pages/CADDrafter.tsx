import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, ChevronDown, ChevronUp, Percent, Star, Shield, Clock, Layers, Box, Building2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CADDrafter = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whyHireUs = [
    {
      icon: Percent,
      value: "70%",
      title: "Savings compared to hiring a US-based professional.",
      description: "Cut your drafting costs significantly while maintaining the same quality standards."
    },
    {
      icon: Star,
      value: "Top 1%",
      title: "Every drafter is rigorously vetted, US-trained, and quality tested.",
      description: "Only the best CAD professionals join your team."
    },
    {
      icon: Shield,
      value: "100% Managed",
      title: "Recruitment, payroll, and compliance handled.",
      description: "We take care of all administrative tasks so you can focus on your projects."
    },
    {
      icon: Clock,
      value: "30+ Years",
      title: "Combined experience and work on your time.",
      description: "Decades of combined expertise working in your time zone."
    }
  ];

  const softwareTools = [
    { name: "AutoCAD", logo: "AutoCAD" },
    { name: "Enscape", logo: "Enscape" },
    { name: "SolidWorks", logo: "SolidWorks" },
    { name: "Revit", logo: "Revit" },
    { name: "Rhinoceros", logo: "Rhinoceros" },
    { name: "V-Ray", logo: "V-Ray" },
    { name: "ArchiCAD", logo: "ArchiCAD" },
    { name: "SketchUp", logo: "SketchUp" },
    { name: "Lumion", logo: "Lumion" },
    { name: "Chief Architect", logo: "Chief Architect" },
    { name: "Blender", logo: "Blender" },
    { name: "3ds Max", logo: "3ds Max" },
    { name: "DraftSight", logo: "DraftSight" }
  ];

  const disciplines = [
    {
      title: "2D & 3D Drafting",
      image: "https://ezybuilds.com/wp-content/uploads/2025/03/2d-3d-drafting.webp",
      description: "Precise architectural and engineering drawings for all project phases."
    },
    {
      title: "Furniture & Product Drafting",
      image: "https://ezybuilds.com/wp-content/uploads/2025/03/furniture-drafting.webp",
      description: "Detailed product and furniture design documentation."
    },
    {
      title: "BIM Support",
      image: "https://ezybuilds.com/wp-content/uploads/2025/03/bim-support.webp",
      description: "Building Information Modeling for complex construction projects."
    }
  ];

  const faqs = [
    {
      question: "What does hiring an offshore CAD drafter mean?",
      answer: "Hiring an offshore CAD drafter means working with a skilled drafting professional located outside your country, typically in a region with lower labor costs. Our drafters work full-time or part-time for your company, integrated into your team and workflows, while we handle all administrative, payroll, and compliance matters."
    },
    {
      question: "Why should I hire a CAD drafter offshore?",
      answer: "Hiring offshore CAD drafters allows you to save up to 70% on labor costs compared to local hiring, access top-tier talent with US project experience, scale your team quickly without lengthy recruitment processes, and work with professionals who are trained in US standards and building codes."
    },
    {
      question: "What software do your CAD drafters use?",
      answer: "Our CAD drafters are proficient in all major industry software including AutoCAD, Revit, SketchUp, SolidWorks, ArchiCAD, Enscape, V-Ray, Lumion, Rhinoceros, Chief Architect, Blender, 3ds Max, and DraftSight. They can adapt to your preferred software and standards."
    },
    {
      question: "Are your drafters familiar with US building codes?",
      answer: "Yes, all our drafters are trained in US building codes including IBC, IRC, ADA requirements, and local building codes. They understand US drafting standards, layer conventions, dimensioning practices, and architectural/engineering drawing requirements."
    },
    {
      question: "How quickly can I get started?",
      answer: "You can get started within days. After sharing your requirements, we'll match you with pre-vetted CAD drafters. Once selected, onboarding takes just a few days and your drafter can begin working immediately."
    },
    {
      question: "Will the drafter work in my time zone?",
      answer: "Yes, all our drafters work in your time zone to ensure seamless communication and real-time collaboration. We align schedules to match your business hours for optimal productivity."
    },
    {
      question: "What's included in the hourly rate?",
      answer: "The hourly rate includes the drafter's time, all administrative support, project management, quality assurance, and ongoing support. There are no hidden fees, benefits, or additional costs."
    },
    {
      question: "Can drafters work with our existing templates and standards?",
      answer: "Absolutely. Our drafters can adapt to your company's templates, layer standards, text styles, dimension styles, and drawing conventions. We ensure consistency with your existing documentation standards."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Calendar */}
      <section className="bg-[#171717] py-16 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#f2572b] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div className="flex flex-col">
              <h1 
                className="text-3xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight mb-6"
                style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
              >
                Hire Offshore <span className="text-[#f2572b]">CAD Drafters</span> to Scale Your Design & Construction Teams
              </h1>
              <p 
                className="text-white/90 text-base lg:text-lg leading-relaxed mb-8"
                style={{ fontFamily: "Poppins, system-ui, sans-serif" }}
              >
                Cut hiring costs by up to 70% while working with dedicated, US-experienced CAD drafters who provide accurate drafting and modeling support full-time/part-time.
              </p>
              
              {/* Consultation Prompt */}
              <div className="mb-6">
                <p className="text-white/80 text-base mb-4">
                  How would you like to schedule your consultation with us?
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2F80ED] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#256bd0] transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="15" viewBox="0 0 25 15" fill="none" aria-hidden="true">
                      <path d="M23.0156 13.6152C23.5156 13.7363 23.9531 13.4941 24.2031 13.1309C24.3281 12.9492 24.3281 12.6465 24.3281 11.9805V2.83789C24.3281 2.17188 24.3281 1.92969 24.2031 1.6875C24.0156 1.20312 23.5156 1.02148 23.0156 1.20312C21.7031 2.05078 18.8281 4.5332 18.7656 5.5625C18.7156 5.74414 18.7156 6.04688 18.7156 6.4707V8.77148C18.7156 9.25586 18.7156 9.4375 18.7656 9.67969C18.8281 10.1641 19.0156 10.5879 19.2656 10.8301C20.0156 11.375 22.5156 13.5547 23.0781 13.5547L23.0156 13.6152ZM0.265625 3.32227C0.265625 2.41406 0.265625 1.92969 0.453125 1.6875C0.578125 1.44531 0.953125 1.20312 1.14062 1.02148C1.39062 0.839844 1.82812 0.839844 2.82812 0.839844H10.8906C13.2656 0.839844 14.4531 0.839844 15.3906 1.32422C16.0781 1.80859 16.8281 2.23242 17.2656 3.14062C17.7656 4.04883 17.7656 5.19922 17.7656 7.5V11.6172C17.7656 12.5254 17.7656 13.0098 17.5781 13.252C17.4531 13.4941 17.0781 13.7363 16.8906 13.918C16.6406 14.0996 16.2031 14.0996 15.2031 14.0996H7.14062C4.76562 14.0996 3.57812 14.0996 2.64062 13.6152C1.95312 13.1309 1.20312 12.707 0.765625 11.7988C0.265625 10.8906 0.265625 9.74023 0.265625 7.43945V3.32227Z" fill="white" />
                    </svg>
                    Schedule a Zoom Meeting
                  </Link>

                  <a
                    href="tel:+15108617074"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f7e7e4] px-5 py-2.5 text-sm font-medium text-[#f2572b] shadow-sm ring-1 ring-black/5 hover:bg-[#f2dad6] transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true">
                      <rect width="256" height="256" fill="none" />
                      <path d="M156.39,153.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88A48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                    </svg>
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Calendly Widget */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-[#f2572b]/20 min-w-[320px] h-[500px]">
                <iframe
                  src="https://calendly.com/ezy-teams/ezybuilds-project-discussion-meeting-clone?embed_domain=ezybuilds.com&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1"
                  width="100%"
                  height="100%"
                  title="Select a Date & Time - Calendly"
                  className="rounded-[12px] border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Construction & Design Firms Hire Offshore CAD Drafters Section */}
      <section className="bg-[#171717] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <h2 
                className="text-3xl lg:text-4xl font-semibold text-white mb-4"
                style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
              >
                Why Construction & Design Firms Hire Offshore CAD Drafters with Us
              </h2>
            </div>
            <div>
              <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                Access pre-vetted CAD professionals with proven US project experience, local support, and cost savings compared to hiring locally.
              </p>
            </div>
          </div>

          {/* Benefit Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whyHireUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#f2572b] rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white">{item.value}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="text-center mb-12">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f2572b] px-8 py-4 text-white font-medium hover:bg-[#e04a1f] transition-colors"
            >
              Get Your Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Image Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
              <div className="aspect-[4/3] bg-gray-800 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">2D & 3D Drafting</h3>
                  <p className="text-white/80 text-sm">Precise architectural and engineering drawings</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
              <div className="aspect-[4/3] bg-gray-800 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">3D Renders</h3>
                  <p className="text-white/80 text-sm">Photorealistic visualizations and presentations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software & Tools Section */}
      <section className="bg-[#f2572b] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 
                className="text-3xl lg:text-4xl font-semibold text-white mb-4"
                style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
              >
                Software & Tools We Expertly Utilize
              </h2>
              <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                Our CAD drafters are proficient in all major industry-standard software platforms.
              </p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {softwareTools.map((tool, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                  <div className="text-white font-medium text-sm">{tool.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated CAD Drafters Section */}
      <section className="bg-[#171717] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <h2 
                className="text-3xl lg:text-4xl font-semibold text-white mb-4"
                style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
              >
                Dedicated CAD Drafters Skilled in Multiple Disciplines
              </h2>
            </div>
            <div>
              <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                Hired by construction and design firms for precision drafting, modeling, and visualization.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {disciplines.map((discipline, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:bg-white/20 transition-colors">
                <div className="aspect-[4/3] bg-gray-800 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white">{discipline.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-white/80 text-sm leading-relaxed">{discipline.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talk to Our AEC Offshore Staffing Consultants Section */}
      <section className="bg-[#171717] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://ezybuilds.com/wp-content/uploads/2025/03/3d-rendering-isometric-house-model-1.webp"
                alt="3D isometric building rendering"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div>
              <h2 
                className="text-3xl lg:text-4xl font-semibold text-white mb-6"
                style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
              >
                Talk to Our AEC Offshore Staffing Consultants
              </h2>
              <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-8">
                68% of top US construction and architecture firms now leverage offshore talent to reduce costs and meet deadlines. At remoteseat, access the top 1% of AEC professionals with direct US project experience. Your competitors are already scaling smarter; don't get left behind.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f2572b] px-8 py-4 text-white font-medium hover:bg-[#e04a1f] transition-colors"
              >
                Get Your Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hire Offshore CAD Drafters in 4 Steps Section */}
      <section className="bg-[#dbd4ce] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Steps */}
            <div>
              <h2 
                className="text-3xl lg:text-4xl font-semibold text-[#171717] mb-8"
                style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
              >
                Hire Offshore CAD Drafters in <span className="text-[#f2572b]">4 Steps</span>
              </h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Share Your Requirements", desc: "Outline your drafting needs and project goals. We'll tailor our search to your specifications." },
                  { step: "2", title: "Review Vetted Professionals", desc: "Browse resumes of CAD drafters screened for technical skills, English fluency, and US experience." },
                  { step: "3", title: "Select Your Drafter", desc: "Interview and hire professionals who fit your project and company culture." },
                  { step: "4", title: "We Manage the Rest", desc: "We handle contracts, payroll, and onboarding. Your drafter works full-time on your time zone." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#f2572b] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#171717] mb-2">{item.title}</h3>
                      <p className="text-[#6b6b6b] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="flex flex-col items-center">
              <div className="mb-8">
                <div className="bg-gray-800 rounded-2xl p-8 aspect-square flex items-center justify-center">
                  <div className="text-white/50 text-center">
                    <Layers className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-sm">3D Architectural Model</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-2xl lg:text-3xl font-semibold text-[#171717]">
                  Build your drafting team faster with <span className="text-[#f2572b]">remoteseat</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need a Dedicated CAD Drafter Section */}
      <section className="bg-[#171717] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                className="text-3xl lg:text-4xl font-semibold text-white mb-6"
                style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
              >
                Need a Dedicated CAD Drafter for Your Team?
              </h2>
              <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-8">
                Book Your Free Consultation Call Today to Get Started!
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f2572b] px-8 py-4 text-white font-medium hover:bg-[#e04a1f] transition-colors"
              >
                Get Your Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://ezybuilds.com/wp-content/uploads/2025/03/cheerful-african-american-architect-holding-bluepr-2024-11-17-17-04-27-utc-1-1.webp"
                alt="Professional holding blueprints"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#dbd4ce] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl lg:text-4xl font-bold"
              style={{ 
                fontFamily: "trap, Poppins, system-ui, sans-serif",
                color: "#171717" 
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - FAQ Accordion */}
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border-2 border-[#f2572b]/20 hover:border-[#f2572b]/40 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#f2572b]/5 transition-colors"
                  >
                    <h3 
                      className="text-lg font-semibold pr-4"
                      style={{ 
                        fontFamily: "trap, Poppins, system-ui, sans-serif",
                        color: "#171717"
                      }}
                    >
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openFaq === index ? (
                        <ChevronUp className="w-6 h-6 text-[#f2572b]" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
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

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#f2572b]/20">
              <div className="mb-6">
                <h3 
                  className="text-2xl font-bold mb-2"
                  style={{ 
                    fontFamily: "trap, Poppins, system-ui, sans-serif",
                    color: "#171717" 
                  }}
                >
                  Call Us <span className="text-[#f2572b]">Right Now</span>
                </h3>
                <p 
                  style={{ 
                    fontFamily: "Poppins, system-ui, sans-serif",
                    color: "#171717" 
                  }}
                >
                  Get instant consultation without any cost.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2572b] focus:border-transparent outline-none"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2572b] focus:border-transparent outline-none"
                    required
                  />
                </div>

                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2572b] focus:border-transparent outline-none"
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2572b] focus:border-transparent outline-none"
                  required
                />

                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2572b] focus:border-transparent outline-none text-gray-500">
                  <option value="">- Your State -</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Indiana</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana">Montana</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Hampshire">New Hampshire</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="New York">New York</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Pennsylvania">Pennsylvania</option>
                  <option value="Rhode Island">Rhode Island</option>
                  <option value="South Carolina">South Carolina</option>
                  <option value="South Dakota">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Washington">Washington</option>
                  <option value="West Virginia">West Virginia</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>
                </select>

                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2572b] focus:border-transparent outline-none"
                  required
                />

                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2572b] focus:border-transparent outline-none"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-[#f2572b] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#e04a1f] transition-colors"
                >
                  Next Step
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CADDrafter;
