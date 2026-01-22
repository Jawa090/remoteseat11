import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Calendar, ChevronDown, ChevronUp, Clock, Users, CheckCircle, Building2, Home, Wrench, FileText, Calculator, Layers, Box, Handshake, Settings, HomeIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OutsourceConstruction = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const roles = [
    { title: "Residential Architect", icon: Home },
    { title: "Construction Designer", icon: Building2 },
    { title: "Interior Designer", icon: HomeIcon },
    { title: "Civil Engineer", icon: Wrench },
    { title: "Quantity Surveyor", icon: Calculator },
    { title: "Cost Estimator", icon: Calculator },
    { title: "AutoCAD/CAD Operators", icon: Layers },
    { title: "Project Accountant", icon: FileText },
    { title: "BIM Specialist", icon: Box },
    { title: "Draftsperson", icon: FileText },
    { title: "Project Manager", icon: Users },
    { title: "3D Visualizer", icon: Layers }
  ];

  const softwareTools = [
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

  const clients = [
    { title: "Architecture Firms", icon: Building2 },
    { title: "Engineering Companies", icon: Wrench },
    { title: "Construction Companies", icon: Building2 },
    { title: "Project Managers", icon: Users },
    { title: "General Contractors", icon: Building2 },
    { title: "Sub-contractors", icon: Wrench },
    { title: "Real Estate Developers", icon: Home },
    { title: "Surveying Companies", icon: FileText }
  ];

  const testimonials = [
    {
      quote: "We saved 40% on drafting costs during peak season and hit every deadline.",
      name: "Cori T.",
      role: "General Contractor"
    },
    {
      quote: "Quality and speed are unmatched. Our BIM models were delivered in 3 days.",
      name: "Sarah P.",
      role: "Principal Architect"
    }
  ];

  const faqs = [
    {
      question: "Can I use this for just one project?",
      answer: "Yes, absolutely! Our flexible model allows you to use our services for a single project without any long-term commitments. You can scale up or down as needed, and there are no minimum contract terms."
    },
    {
      question: "Do your experts understand U.S. building codes?",
      answer: "Yes, all our experts are trained in U.S. building codes including IBC, IRC, ADA requirements, and local building codes. They understand U.S. drafting standards, layer conventions, dimensioning practices, and architectural/engineering drawing requirements."
    },
    {
      question: "What software do you support?",
      answer: "We support all major industry-standard software including AutoCAD, Revit, SketchUp, SolidWorks, Enscape, V-Ray, ArchiCAD, Lumion, Rhinoceros, Chief Architect, Blender, 3ds Max, DraftSight, and many others. Our professionals can adapt to your preferred software and standards."
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer: "We have a rigorous quality assurance process and stand behind our work. If you're not satisfied, we'll work with you to make revisions and corrections until the work meets your expectations. Your satisfaction is our priority."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-16 lg:py-28 overflow-hidden"
        style={{
          backgroundImage: 'url(https://ezybuilds.com/wp-content/uploads/2025/03/hero-blueprint.webp)',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}
      >
        <div className="absolute inset-0 bg-[#dbd4ce] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ fontFamily: "trap, Poppins, system-ui, sans-serif", color: "#171717" }}
              >
                Need Extra Hands for Your <span className="text-[#f2572b]">Construction Project?</span>
              </h1>
              <p className="text-lg text-[#6b6b6b] leading-relaxed">
                Trusted by general contractors, architects, and developers to meet urgent deadlines without hiring full-time.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#f2572b] flex-shrink-0" />
                  <span className="text-[#f2572b] font-medium">Book a Free 15-Minute Call</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#6b6b6b] flex-shrink-0" />
                  <span className="text-[#6b6b6b]">No long-term contracts. Just reliable experts when you need them.</span>
                </div>
              </div>
            </div>

            {/* Right Content - Calendar Widget */}
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#f2572b]/20 min-w-[320px] h-[480px]">
                <img
                  src="/27.png"
                  width="100%"
                  height="100%"
                  className="rounded-[12px] border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Deadlines Don't Wait Section */}
      <section className="py-16 lg:py-20 relative overflow-hidden bg-white">
        {/* Background Image with low opacity */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'url(https://ezybuilds.com/wp-content/uploads/2025/03/hero-blueprint.webp)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-6"
            style={{ fontFamily: "trap, Poppins, system-ui, sans-serif", color: "#171717" }}
          >
            Construction Deadlines Don't Wait!
          </h2>
          <p className="text-lg text-[#6b6b6b] leading-relaxed mb-12 max-w-4xl">
            Whether you're rushing submittals, need site-ready models, or handling last-minute change orders - bottlenecks in documentation, design, or quantity takeoffs slow everything down.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#f2572b] rounded-full flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <p className="text-lg text-[#171717] font-medium leading-relaxed pt-2">
                Tap into a vetted pool of construction support professionals - fast.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#f2572b] rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <p className="text-lg text-[#171717] font-medium leading-relaxed pt-2">
                We're Your Remote Extension Team.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#f2572b] rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <p className="text-lg text-[#171717] font-medium leading-relaxed pt-2">
                Save time and money on every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Software & Tools Section */}
      <section
        className="bg-[#f2572b] py-16 lg:py-20 relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://ezybuilds.com/wp-content/uploads/2025/03/plan-2.webp)',
          backgroundPosition: 'bottom left',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-3xl lg:text-4xl font-semibold text-white mb-4"
                style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
              >
                Software & Tools We Expertly Utilize
              </h2>
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

      {/* Get What You Need Section */}
      <section className="py-16 lg:py-20 relative overflow-hidden bg-white">
        {/* Background Image with low opacity */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'url(https://ezybuilds.com/wp-content/uploads/2025/03/hero-blueprint.webp)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <h2
            className="text-3xl lg:text-4xl font-bold text-center"
            style={{ fontFamily: "trap, Poppins, system-ui, sans-serif", color: "#171717" }}
          >
            Get what you need. <span className="text-[#f2572b]">Only when you need it.</span>
          </h2>

          <div className="mb-10 mt-8">
            <img
              src='/25.png'
              alt="Modern building rendering"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>

          {/* Roles Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#f2572b]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#f2572b]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#171717]">{role.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Simple 3-Step Process Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-6"
                style={{ fontFamily: "trap, Poppins, system-ui, sans-serif", color: "#171717" }}
              >
                Simple <span className="text-[#f2572b]">3-Step Process</span>
              </h2>
              <p className="text-lg text-[#6b6b6b] leading-relaxed mb-8">
                Submit Your Scope to Get Started.
              </p>
              <Link
                to="/contact-us/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f2572b] px-8 py-4 text-white font-medium hover:bg-[#e04a1f] transition-colors"
              >
                Start Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Content - Steps */}
            <div className="space-y-6">
              {[
                { step: "1", title: "Tell Us Your Scope", desc: "Share your project requirements and the skills you need.", icon: FileText },
                { step: "2", title: "Get Matched with Experts", desc: "We match you with pre-vetted professionals in 24-48 hours.", icon: Handshake },
                { step: "3", title: "Kick Off & Collaborate", desc: "Begin immediately with full support and quality assurance.", icon: Settings }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#f2572b] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-5 h-5 text-[#f2572b]" />
                        <h3 className="text-lg font-semibold text-[#171717]">{item.title}</h3>
                      </div>
                      <p className="text-[#6b6b6b] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section
        className="bg-[#f2572b] py-16 lg:py-20 relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://ezybuilds.com/wp-content/uploads/2025/03/plan-2.webp)',
          backgroundPosition: 'bottom left',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="flex items-center justify-center">
              <img
                src="/11.png"
                alt="Construction Professional"
                className="w-full h-auto object-contain max-h-[400px]"
              />
            </div>
            <div>
              <h2
                className="text-3xl lg:text-4xl font-semibold text-white mb-4"
                style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
              >
                Our Clients
              </h2>
              <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                Our primary customers are from the AEC industry and include:
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {clients.map((client, index) => {
                const Icon = client.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-medium text-sm">{client.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#171717] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center"
            style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
          >
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-[#171717] text-6xl leading-none mb-4 font-bold opacity-20">"</div>
                <p className="text-[#171717] text-lg mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-[#171717] font-semibold text-sm">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#171717]">{testimonial.name}</div>
                    <div className="text-[#f2572b] text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-12 text-center"
            style={{
              fontFamily: "trap, Poppins, system-ui, sans-serif",
              color: "#171717"
            }}
          >
            Frequently Asked Questions
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border-2 border-gray-200 hover:border-[#f2572b] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
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
                    <div className="px-6 pb-5 border-t border-gray-200">
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

export default OutsourceConstruction;
