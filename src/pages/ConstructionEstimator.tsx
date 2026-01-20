import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, ChevronDown, ChevronUp, Calculator, List, Building, Package, Factory, Home, Star, Handshake } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ConstructionEstimator = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whoBenefits = [
    {
      icon: Building,
      title: "General Contractors",
      description: "Scale your estimating capacity without increasing overhead costs."
    },
    {
      icon: List,
      title: "Builders & Developers",
      description: "Get accurate cost estimates for faster project approvals and bidding."
    },
    {
      icon: Home,
      title: "Homeowners",
      description: "Professional cost estimates for renovation and construction projects."
    },
    {
      icon: Package,
      title: "Subcontractors",
      description: "Accurate takeoffs and estimates to win more competitive bids."
    },
    {
      icon: Calculator,
      title: "Property Claims",
      description: "Detailed damage assessments and restoration cost estimates."
    },
    {
      icon: Star,
      title: "Project Managers",
      description: "Reliable cost tracking and budget management support."
    }
  ];

  const softwareTools = [
    { name: "Xactimate", logo: "Xactimate" },
    { name: "On Center", logo: "On Center" },
    { name: "Procore", logo: "Procore" },
    { name: "FastPIPE", logo: "FastPIPE" },
    { name: "Planswift", logo: "Planswift" },
    { name: "Buildertrend", logo: "Buildertrend" },
    { name: "AutoCAD", logo: "AutoCAD" },
    { name: "FastDUCT", logo: "FastDUCT" },
    { name: "Bluebeam", logo: "Bluebeam" },
    { name: "Excel", logo: "Excel" },
    { name: "STACK", logo: "STACK" },
    { name: "Trimble", logo: "Trimble" }
  ];

  const estimatorServices = [
    {
      icon: Calculator,
      title: "Cost Estimating",
      description: "Comprehensive cost estimates for all construction phases."
    },
    {
      icon: List,
      title: "Quantity Takeoffs",
      description: "Accurate material and labor quantity calculations."
    },
    {
      icon: Building,
      title: "Commercial Estimating",
      description: "Specialized estimates for commercial construction projects."
    },
    {
      icon: Package,
      title: "Material Takeoffs",
      description: "Detailed material quantity calculations from blueprints."
    },
    {
      icon: Factory,
      title: "Industrial Estimating",
      description: "Cost estimates for industrial and manufacturing facilities."
    },
    {
      icon: Home,
      title: "Residential Estimating",
      description: "Accurate estimates for residential construction and renovations."
    },
    {
      icon: Star,
      title: "Preliminary Estimating",
      description: "Early-stage cost projections for project feasibility."
    },
    {
      icon: Handshake,
      title: "Bid Estimating",
      description: "Competitive bid preparation to win more projects."
    }
  ];

  const csiDivisions = [
    { number: "03", title: "Concrete", description: "Foundation, slabs, and structural concrete work." },
    { number: "04", title: "Masonry", description: "Brick, block, and stone construction." },
    { number: "05", title: "Metals", description: "Structural steel and metal framing." },
    { number: "06", title: "Wood, Plastics, Composites", description: "Framing, millwork, and composite materials." },
    { number: "07", title: "Thermal & Moisture Protection", description: "Insulation, roofing, and waterproofing." },
    { number: "08", title: "Openings", description: "Doors, windows, and glazing systems." },
    { number: "09", title: "Finishes", description: "Drywall, paint, flooring, and interior finishes." },
    { number: "10", title: "Specialties", description: "Signage, equipment, and specialty installations." },
    { number: "21", title: "Fire Suppression", description: "Sprinkler systems and fire protection." },
    { number: "22", title: "Plumbing", description: "Plumbing fixtures, piping, and systems." },
    { number: "23", title: "HVAC", description: "Heating, ventilation, and air conditioning." },
    { number: "26", title: "Electrical", description: "Electrical systems, lighting, and power distribution." },
    { number: "31", title: "Earthwork", description: "Excavation, grading, and site preparation." },
    { number: "32", title: "Exterior Improvements", description: "Paving, landscaping, and site utilities." }
  ];

  const whyHireUs = [
    {
      title: "Detailed Documentation",
      description: "Comprehensive reports with clear breakdowns and supporting documentation."
    },
    {
      title: "Top 1% Talent",
      description: "Rigorous screening ensures only the most skilled estimators join your team."
    },
    {
      title: "Code Compliance & Accuracy",
      description: "All estimates comply with US building codes and industry standards."
    },
    {
      title: "Confidential & Secure",
      description: "Strict NDAs and secure protocols protect your project information."
    },
    {
      title: "Time Zone Aligned",
      description: "Work in your time zone with seamless real-time collaboration."
    },
    {
      title: "Affordable",
      description: "Save up to 70% compared to local hiring with no compromise on quality."
    }
  ];

  const overheadCosts = [
    { category: "Overhead Costs", percentage: 35, items: ["Office rent", "Utilities", "Insurance", "Administrative staff"] },
    { category: "Operational Costs", percentage: 20, items: ["Equipment", "Software licenses", "Training", "Maintenance"] },
    { category: "Employee Benefits", percentage: 15, items: ["Health insurance", "Retirement plans", "Paid time off", "Bonuses"] },
    { category: "Contingency Costs", percentage: 10, items: ["Recruitment fees", "Onboarding", "Turnover", "Compliance"] }
  ];

  const otherAECRoles = [
    {
      title: "Architectural Designers",
      image: "https://ezybuilds.com/wp-content/uploads/2025/03/architectural-design.webp",
      description: "Expert designers for residential and commercial projects."
    },
    {
      title: "3D Renderers",
      image: "https://ezybuilds.com/wp-content/uploads/2025/03/3d-render.webp",
      description: "Photorealistic visualizations and renderings."
    },
    {
      title: "BIM Specialists",
      image: "https://ezybuilds.com/wp-content/uploads/2025/03/bim-specialist.webp",
      description: "Building Information Modeling experts for complex projects."
    }
  ];

  const faqs = [
    {
      question: "How much does it cost to hire an offshore estimator?",
      answer: "Our offshore construction estimators start at $13/hour, compared to $40/hour for local hiring. This translates to annual savings of approximately $57,000 per estimator."
    },
    {
      question: "Will they work in my time zone?",
      answer: "Yes, all our estimators work in your time zone to ensure seamless communication and real-time collaboration. We align schedules to match your business hours."
    },
    {
      question: "What software do your estimators use?",
      answer: "Our estimators are proficient in industry-standard software including Xactimate, PlanSwift, On Center, Bluebeam, Excel, Procore, Buildertrend, and many others. They can adapt to your preferred tools."
    },
    {
      question: "How accurate are the cost estimates?",
      answer: "We use a multi-layered quality assurance process including peer reviews, historical data validation, and market rate comparisons. All estimates go through thorough verification before delivery."
    },
    {
      question: "What types of projects can they handle?",
      answer: "Our estimators handle all types of construction projects including residential, commercial, industrial, infrastructure, and institutional projects across all CSI divisions."
    },
    {
      question: "How quickly can I get started?",
      answer: "You can get started within days. After sharing your requirements, we'll match you with pre-vetted candidates. Once selected, onboarding takes just a few days."
    },
    {
      question: "Are the estimators familiar with US codes and standards?",
      answer: "Yes, all our estimators are trained in US construction standards including IBC, IRC, and local building codes. They're familiar with imperial measurements and US material specifications."
    },
    {
      question: "What's included in the hourly rate?",
      answer: "The hourly rate includes the estimator's time, all administrative support, project management, quality assurance, and ongoing support. There are no hidden fees or additional costs."
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
                Hire Offshore <span className="text-[#f2572b]">Construction Cost Estimators</span>
              </h1>
              <p
                className="text-white/90 text-base lg:text-lg leading-relaxed mb-8"
                style={{ fontFamily: "Poppins, system-ui, sans-serif" }}
              >
                Access top-tier construction cost estimators trained in US standards. Get accurate quantity takeoffs, detailed cost estimates, and professional bid preparation at a fraction of local costs. Save up to 70% while working with pre-vetted professionals.
              </p>

              {/* Mobile Button */}
              <div className="lg:hidden">
                <Link
                  to="/contact-us/"
                  className="inline-flex items-center justify-center w-full gap-2 rounded-full bg-[#f2572b] px-6 py-3 text-white font-medium hover:bg-[#e04a1f] transition-colors"
                >
                  Get Started Today
                  <ArrowRight className="w-4 h-4" />
                </Link>
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

      {/* Consultation Bar Section */}
      <section className="bg-[#171717] pb-12 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[#dbd4ce] rounded-2xl px-8 py-6 shadow-xl border-2 border-[#f2572b]/20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <h2
                className="text-[18px] lg:text-[20px] font-semibold"
                style={{
                  fontFamily: "trap, Poppins, system-ui, sans-serif",
                  color: "#171717"
                }}
              >
                Build Your Offshore Estimating Team Today
              </h2>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <Link
                  to="/contact-us/"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2F80ED] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#256bd0] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="15" viewBox="0 0 25 15" fill="none" aria-hidden="true">
                    <path d="M23.0156 13.6152C23.5156 13.7363 23.9531 13.4941 24.2031 13.1309C24.3281 12.9492 24.3281 12.6465 24.3281 11.9805V2.83789C24.3281 2.17188 24.3281 1.92969 24.2031 1.6875C24.0156 1.20312 23.5156 1.02148 23.0156 1.20312C21.7031 2.05078 18.8281 4.5332 18.7656 5.5625C18.7156 5.74414 18.7156 6.04688 18.7156 6.4707V8.77148C18.7156 9.25586 18.7156 9.4375 18.7656 9.67969C18.8281 10.1641 19.0156 10.5879 19.2656 10.8301C20.0156 11.375 22.5156 13.5547 23.0781 13.5547L23.0156 13.6152ZM0.265625 3.32227C0.265625 2.41406 0.265625 1.92969 0.453125 1.6875C0.578125 1.44531 0.953125 1.20312 1.14062 1.02148C1.39062 0.839844 1.82812 0.839844 2.82812 0.839844H10.8906C13.2656 0.839844 14.4531 0.839844 15.3906 1.32422C16.0781 1.80859 16.8281 2.23242 17.2656 3.14062C17.7656 4.04883 17.7656 5.19922 17.7656 7.5V11.6172C17.7656 12.5254 17.7656 13.0098 17.5781 13.252C17.4531 13.4941 17.0781 13.7363 16.8906 13.918C16.6406 14.0996 16.2031 14.0996 15.2031 14.0996H7.14062C4.76562 14.0996 3.57812 14.0996 2.64062 13.6152C1.95312 13.1309 1.20312 12.707 0.765625 11.7988C0.265625 10.8906 0.265625 9.74023 0.265625 7.43945V3.32227Z" fill="white" />
                  </svg>
                  Schedule a Meeting
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
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-3xl lg:text-4xl font-semibold text-[#171717] mb-4"
                style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
              >
                Who Benefits from Hiring Our Offshore Construction Estimators?
              </h2>
              <p className="text-[#6b6b6b] text-base lg:text-lg leading-relaxed">
                Our offshore construction estimators serve a wide range of clients across the construction industry, helping them reduce costs, improve accuracy, and scale their operations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {whoBenefits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-[#f2572b]/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#f2572b]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#171717] mb-2">{item.title}</h3>
                    <p className="text-[#6b6b6b] text-sm leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Software & Tools Section */}
      <section className="bg-[#171717] py-16 lg:py-20">
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
                Our estimators are proficient in all major construction estimating and takeoff software platforms used in the industry.
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

      {/* What Your Estimators Can Handle Section */}
      <section className="bg-white py-16 lg:py-20 relative overflow-hidden">
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
            className="text-3xl lg:text-4xl font-semibold text-[#171717] mb-12 text-center"
            style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
          >
            What Your Offshore Estimators Can Handle for You
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {estimatorServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#f2572b]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#f2572b]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#171717] mb-2">{service.title}</h3>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CSI Divisions Section */}
      <section className="bg-[#f2572b] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            className="text-3xl lg:text-4xl font-semibold text-white mb-12 text-center"
            style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
          >
            Estimates Across All CSI Divisions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {csiDivisions.map((division, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{division.number}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{division.number} {division.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{division.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Hire Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl lg:text-4xl font-semibold text-[#171717] mb-6"
                style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
              >
                How to Hire Your Offshore Construction Estimator
              </h2>
              <Link
                to="/contact-us/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f2572b] px-8 py-4 text-white font-medium hover:bg-[#e04a1f] transition-colors"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-6">
              {[
                { step: "1", title: "Share Your Requirements", desc: "Tell us about your estimation needs, project types, and preferred software." },
                { step: "2", title: "Meet Pre-Vetted Candidates", desc: "Review resumes and interview pre-screened estimators who match your needs." },
                { step: "3", title: "Onboard in Days", desc: "We handle all paperwork and onboarding. Your estimator starts within days." },
                { step: "4", title: "Start Saving From Day One", desc: "Begin receiving accurate estimates immediately while saving up to 70% on costs." }
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
        </div>
      </section>

      {/* Full-Time Extension Section */}
      <section className="bg-[#171717] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl lg:text-4xl font-semibold text-white mb-6"
                style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
              >
                Hire a Full-Time Offshore Cost Estimator, An Extension of Your Team
              </h2>
              <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-8">
                Our offshore estimators work as dedicated members of your team, fully integrated into your workflows and processes. They understand your business, your standards, and your expectations, delivering consistent, high-quality estimates that help you win more projects and stay on budget.
              </p>
              <Link
                to="/contact-us/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f2572b] px-8 py-4 text-white font-medium hover:bg-[#e04a1f] transition-colors"
              >
                Schedule a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://ezybuilds.com/wp-content/uploads/2025/03/cheerful-african-american-architect-holding-bluepr-2024-11-17-17-04-27-utc-1-1.webp"
                alt="Construction estimator with blueprints"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Construction Firms Hire Us Section */}
      <section className="bg-[#f2572b] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-3xl lg:text-4xl font-semibold text-white mb-4"
                style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
              >
                Why Construction Firms Hire Our Offshore Estimators
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {whyHireUs.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overheads Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:max-w-md">
              <h2
                className="text-3xl lg:text-4xl font-semibold text-[#171717] mb-4"
                style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
              >
                Overheads and Burdens of Traditional Local Hiring
              </h2>
              <p className="text-[#6b6b6b] text-base lg:text-lg leading-relaxed">
                When you hire locally, you're not just paying the base salary. These additional costs add up quickly and significantly impact your bottom line.
              </p>
            </div>
            <div className="space-y-6 lg:flex-1">
              {overheadCosts.map((cost, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-[#171717]">{cost.category}</h3>
                    <span className="text-2xl font-bold text-[#f2572b]">{cost.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                    <div
                      className="bg-[#f2572b] h-3 rounded-full transition-all duration-500"
                      style={{ width: `${cost.percentage}%` }}
                    ></div>
                  </div>
                  <ul className="space-y-2">
                    {cost.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-[#6b6b6b] text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#f2572b] rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other AEC Roles Section */}
      <section className="bg-[#171717] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            className="text-3xl lg:text-4xl font-semibold text-white mb-12 text-center"
            style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
          >
            Other AEC Roles You Can Outsource
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherAECRoles.map((role, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:bg-white/20 transition-colors">
                <div className="h-48 bg-gray-800 relative group">
                  <img
                    src={role.image}
                    alt={role.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{role.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{role.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl lg:text-4xl font-bold"
              style={{
                fontFamily: "trap, Poppins, system-ui, sans-serif",
                color: "#171717"
              }}
            >
              FAQs About Hiring Offshore Construction Estimators
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
                  Send Now
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

export default ConstructionEstimator;
