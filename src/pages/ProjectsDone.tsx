import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProjectsDone = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroSlides = [
    {
      title: "3D Architectural Rendering Services",
      description: "Create stunning visuals to impress clients and win more projects easily.",
      image: "/assets/hero-blueprint.webp"
    },
    {
      title: "Outsource Architectural BIM Modeling Services",
      description: "Build better projects with clear, detailed models for smooth teamwork.",
      image: "/assets/cta-blueprint.webp"
    },
    {
      title: "Outsource CAD Drafting Services",
      description: "Get accurate drafts that save time and reduce costly mistakes.",
      image: "/assets/hero-blueprint.webp"
    }
  ];

  const services = [
    { title: "BIM Modeling", icon: "🏗️" },
    { title: "CAD Drafting", icon: "📐" },
    { title: "Project Management", icon: "📊" },
    { title: "Cost Estimation", icon: "💰" },
    { title: "3D Rendering", icon: "🎨" },
    { title: "Interior Designing", icon: "🏠" }
  ];

  const visualizationServices = [
    {
      title: "3D Interior Rendering",
      description: "Transform spaces with lifelike interior visuals for client approvals."
    },
    {
      title: "3D Furniture Rendering", 
      description: "Showcase designs with detailed, manufacturable 3D furniture models."
    },
    {
      title: "3D Exterior Rendering",
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
      quote: "EZYBUILDS' team is hardworking and dependable. They always deliver great work, even when we're up against tight deadlines. Highly recommend them!",
      name: "Robert H.",
      role: "Project Manager"
    },
    {
      quote: "EZYBUILDS never misses a deadline. They're quick, efficient, and always keep us updated on progress. A pleasure to work with!",
      name: "James L.",
      role: "Principal Architect"
    },
    {
      quote: "The EZYBUILDS team is professional and easy to work with. They listen carefully, communicate well, and always deliver top-quality results.",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Header />
      
      {/* Hero Carousel Section */}
      <section className="relative pt-28 pb-20 bg-[#212121] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                {heroSlides[activeSlide].title}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                {heroSlides[activeSlide].description}
              </p>
            </div>
            <div className="relative">
              <img
                src={heroSlides[activeSlide].image}
                alt={heroSlides[activeSlide].title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          
          {/* Slide indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeSlide ? 'bg-[#C95B4A]' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <section className="py-16 bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-12 text-white">
            What's the best way for you to receive your quote?
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-[#C95B4A] text-white rounded-lg font-medium hover:bg-[#b34e3f] transition-colors"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule a Zoom Meeting
            </Link>
            <Link
              to="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-[#C95B4A] text-white rounded-lg font-medium hover:bg-[#b34e3f] transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" />
              Schedule a Call
            </Link>
            <a
              href="tel:+15108617074"
              className="inline-flex items-center px-8 py-4 bg-[#C95B4A] text-white rounded-lg font-medium hover:bg-[#b34e3f] transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* AEC Outsourcing Consultants Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/assets/cheerful-african-american-architect-holding-bluepr-2024-11-17-17-04-27-utc-1-1.webp"
                alt="AEC Professional"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Talk to Our AEC Outsourcing Consultants
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                65% of US architecture and engineering firms outsource to cut costs and meet deadlines. 
                At EZYBUILDS, hire the top 1% of AEC professionals with US project experience. 
                Your competitors are already outsourcing smarter; don't get left behind.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center px-8 py-3 bg-[#C95B4A] text-white rounded-lg font-medium hover:bg-[#b34e3f] transition-colors"
              >
                Get Your Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Software Tools Marquee */}
      <section className="py-12 bg-[#C95B4A] overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {['AutoCAD', 'Revit', '3ds Max', 'SketchUp', 'V-Ray', 'Lumion', 'ArchiCAD', 'Blender', 'AutoCAD', 'Revit', '3ds Max', 'SketchUp'].map((tool, index) => (
            <div key={index} className="flex-shrink-0 mx-8">
              <span className="text-white text-2xl font-bold">{tool}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Preconstruction Services Grid */}
      <section className="py-20 bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Outsource Preconstruction Services
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-[#373737] p-6 rounded-lg text-center hover:bg-[#404040] transition-colors">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-[#C95B4A] text-white rounded-lg font-medium hover:bg-[#b34e3f] transition-colors"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Want to Hire Dedicated AEC Talent at a Fraction of the Cost?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Book Your Free Consultation Call Today to Get Started!
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center px-8 py-4 bg-[#C95B4A] text-white rounded-lg font-medium hover:bg-[#b34e3f] transition-colors"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>

      {/* Architectural Visualization Section */}
      <section className="py-20 bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Architectural Visualization and 3D Rendering Services
            </h2>
            <p className="text-gray-300 text-lg">
              Trusted by AEC firms for high-quality 3D models and photorealistic renders.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {visualizationServices.map((service, index) => (
              <div key={index} className="bg-[#373737] p-8 rounded-lg text-center hover:bg-[#404040] transition-colors">
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Why Choose Us for Outsourcing?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown Section */}
      <section className="py-20 bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Overheads and Burdens of Traditional Local Hiring
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-[#C95B4A] mb-4">25%</div>
              <h3 className="text-xl font-bold mb-4 text-white">Overhead Costs</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Office space</li>
                <li>Equipment</li>
                <li>Technology</li>
                <li>Utilities</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="text-6xl font-bold text-[#C95B4A] mb-4">30%</div>
              <h3 className="text-xl font-bold mb-4 text-white">Operational Costs</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Recruitment</li>
                <li>Payroll</li>
                <li>HR</li>
                <li>Onboarding</li>
                <li>IT</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="text-6xl font-bold text-[#C95B4A] mb-4">25%</div>
              <h3 className="text-xl font-bold mb-4 text-white">Employee Benefits</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Health Insurance</li>
                <li>Retirement</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="text-6xl font-bold text-[#C95B4A] mb-4">20%</div>
              <h3 className="text-xl font-bold mb-4 text-white">Contingency Costs</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Unexpected expenses</li>
                <li>Emergencies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#2a2a2a] p-8 rounded-lg">
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="text-white font-bold">{testimonial.name}</div>
                  <div className="text-[#C95B4A]">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Other Services You Can Outsource
            </h2>
            <p className="text-gray-300 text-lg">
              Free up your team to focus on what they do best. Outsource non-core tasks to experts and save up to 70% on operational costs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((service, index) => (
              <div key={index} className="bg-[#373737] p-6 rounded-lg text-center hover:bg-[#404040] transition-colors">
                <h3 className="text-lg font-bold text-white">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#2a2a2a] rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#373737] transition-colors"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#C95B4A]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#C95B4A]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-[#2a2a2a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Call Us Right Now
            </h2>
            <p className="text-gray-300 text-lg">
              Get instant consultation without any cost.
            </p>
          </div>
          
          <form className="bg-[#373737] p-8 rounded-lg space-y-6">
            <div>
              <label htmlFor="looking-for" className="block text-white font-medium mb-2">What are you looking for?</label>
              <select 
                id="looking-for"
                name="looking-for"
                className="w-full px-4 py-3 bg-[#2a2a2a] text-white rounded-lg border border-gray-600 focus:border-[#C95B4A] focus:outline-none"
              >
                <option>3D Rendering Services</option>
                <option>BIM Modeling Services</option>
                <option>CAD Drafting Services</option>
                <option>Cost Estimation Services</option>
                <option>Offshore Staffing</option>
                <option>Other</option>
              </select>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-[#2a2a2a] text-white rounded-lg border border-gray-600 focus:border-[#C95B4A] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-[#2a2a2a] text-white rounded-lg border border-gray-600 focus:border-[#C95B4A] focus:outline-none"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-2">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-3 bg-[#2a2a2a] text-white rounded-lg border border-gray-600 focus:border-[#C95B4A] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-white font-medium mb-2">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full px-4 py-3 bg-[#2a2a2a] text-white rounded-lg border border-gray-600 focus:border-[#C95B4A] focus:outline-none"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-[#2a2a2a] text-white rounded-lg border border-gray-600 focus:border-[#C95B4A] focus:outline-none"
                placeholder="Tell us about your project requirements..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-4 bg-[#C95B4A] text-white rounded-lg font-medium hover:bg-[#b34e3f] transition-colors"
              >
                Send Message <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              CASE STUDIES
            </h2>
            <p className="text-gray-300 text-lg">
              Here are some testimonials from our user after using Spend.In to manage their business expenses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="bg-[#2a2a2a] rounded-lg overflow-hidden hover:bg-[#373737] transition-colors">
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#C95B4A] text-white text-sm rounded-full">AEC Industry</span>
                    <span className="px-3 py-1 bg-[#C95B4A] text-white text-sm rounded-full">Technology</span>
                    <span className="px-3 py-1 bg-[#C95B4A] text-white text-sm rounded-full">Utilities</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#C95B4A] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">EA</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">Ezybuilds Admin</div>
                      <div className="text-gray-400 text-sm">10 min Read</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Revolutionizing Document Processing Using NLP
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsDone;