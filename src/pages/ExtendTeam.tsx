import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

// FAQ Accordion Component
const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Which AEC roles can we offshore?",
      answer: "Offshore roles include architects, civil/structural engineers, BIM specialists, draftsmen, project managers, cost estimators, 3D visualizers, procurement officers, and AutoCAD experts. We support all project phases, from design to construction documentation."
    },
    {
      question: "How do offshore teams communicate with us?",
      answer: "Teams use your preferred platforms (e.g., Slack, Teams) for daily updates, progress tracking, and meetings. Real-time collaboration ensures alignment with your workflows."
    },
    {
      question: "Does offshoring save money for AEC firms?",
      answer: "Absolutely. Offshore talent cuts operational expenses by up to 60% versus local hires. You pay a fixed hourly rate—no benefits, taxes, or recruitment fees."
    },
    {
      question: "Will offshore teams replace our in-house staff?",
      answer: "No. Offshore teams complement your existing workforce, handling overflow tasks or specialized projects to boost productivity without disrupting your core team."
    },
    {
      question: "How do we begin offshoring AEC roles?",
      answer: "Schedule a discovery call to outline your needs. We'll propose pre-vetted candidates, and once approved, handle onboarding for immediate integration."
    },
    {
      question: "How do you ensure quality with offshore talent?",
      answer: "All hires are rigorously tested for technical skills, English fluency, and familiarity with US standards. Regular audits ensure output matches local quality benchmarks."
    },
    {
      question: "What about data security with offshore teams?",
      answer: "We enforce strict NDAs and secure protocols (encrypted tools, access controls) to protect project data. Compliance with global standards like GDPR is guaranteed."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-xl border-2 border-[#f2572b]/20 hover:border-[#f2572b]/40 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
          <button
            className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#f2572b]/5 transition-colors"
            onClick={() => toggleAccordion(index)}
            style={{ color: "inherit" }}
          >
            <h3 
              className="text-lg font-semibold pr-4"
              style={{ 
                fontFamily: "trap, Poppins, system-ui, sans-serif",
                color: "#171717",
                textDecoration: "none"
              }}
            >
              {faq.question}
            </h3>
            <div className="flex-shrink-0">
              {openIndex === index ? (
                <svg className="w-6 h-6 text-[#f2572b] transition-transform duration-300 rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-400 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </button>
          
            {openIndex === index && (
              <div className="px-6 pb-5 border-t border-[#f2572b]/10">
                <p 
                  className="leading-relaxed pt-4"
                  style={{ 
                    fontFamily: "Poppins, system-ui, sans-serif",
                    fontSize: "15px",
                    lineHeight: "24px",
                    color: "#171717",
                    textDecoration: "none"
                  }}
                >
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Expanding Cards Component
const ExpandingCardsComponent = () => {
  const [activeCard, setActiveCard] = useState(1); // Cost Estimators expanded by default

  const cards = [
    {
      id: 0,
      title: 'Experienced<br/>Architects',
      image: 'https://ezybuilds.com/wp-content/uploads/2025/03/cheerful-african-american-architect-holding-bluepr-2024-11-17-17-04-27-utc-2.webp',
      offshore: '$13/hour',
      local: '$70/hour',
      savings: '~$115,000'
    },
    {
      id: 1,
      title: 'Experienced<br/>Cost Estimators',
      image: 'https://ezybuilds.com/wp-content/uploads/2025/03/weds.webp',
      offshore: '$13/hour',
      local: '$40/hour',
      savings: '~$57,000'
    },
    {
      id: 2,
      title: 'Experienced<br/>Project Managers',
      image: 'https://ezybuilds.com/wp-content/uploads/2025/03/experience-arhitect.webp',
      offshore: '$15/hour',
      local: '$40/hour',
      savings: '~$74,000'
    },
    {
      id: 3,
      title: 'Experienced<br/>Civil Engineers',
      image: 'https://ezybuilds.com/wp-content/uploads/2025/03/civil-engr-768x432.webp',
      offshore: '$13/hour',
      local: '$36/hour',
      savings: '~$63,000'
    }
  ];

  return (
    <div className="relative">
      <div className="flex h-[350px] gap-2">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
              activeCard === card.id ? 'flex-[3]' : 'flex-1'
            }`}
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            onMouseEnter={() => setActiveCard(card.id)}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
            
            {/* Content */}
            <div className="relative z-10 p-6 text-white flex flex-col justify-end h-full">
              {/* Title - Always visible */}
              <div 
                className={`font-semibold mb-4 transition-all duration-300 ${
                  activeCard === card.id ? 'text-xl text-center' : 'text-lg'
                }`}
                dangerouslySetInnerHTML={{ __html: card.title }}
              />
              
              {/* Expanded Content - Only visible when active */}
              <div className={`transition-all duration-300 ${
                activeCard === card.id ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
              }`}>
                {activeCard === card.id && (
                  <div className="text-center space-y-1 text-sm">
                    <div>Offshore Hiring</div>
                    <div className="text-lg font-bold">
                      <span className="text-xs text-white/80">From</span> {card.offshore}
                    </div>
                    <div className="text-[#f2572b] font-semibold text-base">Vs.</div>
                    <div>Local Hiring</div>
                    <div className="text-lg font-bold">{card.local}</div>
                    <div className="mt-3 text-xs">Annual Avg. Saving</div>
                    <div className="text-xl font-bold">{card.savings}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <div className="flex justify-start mt-6 gap-2">
        <button className="w-10 h-10 rounded-full bg-[#f2572b] text-white flex items-center justify-center hover:bg-[#e04a1f] transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <button className="w-10 h-10 rounded-full bg-[#f2572b] text-white flex items-center justify-center hover:bg-[#e04a1f] transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const ExtendTeam = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#171717] py-16 lg:py-28 relative overflow-hidden">
        {/* Decorative background elements */}
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
                Outsource Architecture and Construction Talent with{" "}
                <span className="text-[#f2572b]">Offshore Staffing</span>
              </h1>
              <p 
                className="text-white/90 text-base lg:text-lg leading-relaxed mb-8"
                style={{ fontFamily: "Poppins, system-ui, sans-serif" }}
              >
                Hire pre-vetted architecture, engineering, and construction talent offshore. Cut labor costs by 70%, scale teams on demand, and work with US-experienced professionals.
              </p>
              
              {/* Mobile Button - Hidden on Desktop */}
              <div className="lg:hidden">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center w-full gap-2 rounded-full bg-[#f2572b] px-6 py-3 text-white font-medium hover:bg-[#e04a1f] transition-colors"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                  </svg>
                  Get Started Today
                </Link>
              </div>
            </div>

              {/* Right Content - Calendly Widget (Hidden on Mobile) */}
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
                How would you like to schedule your consultation with us?
              </h2>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2F80ED] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#256bd0] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="15" viewBox="0 0 25 15" fill="none" aria-hidden="true">
                    <path d="M23.0156 13.6152C23.5156 13.7363 23.9531 13.4941 24.2031 13.1309C24.3281 12.9492 24.3281 12.6465 24.3281 11.9805V2.83789C24.3281 2.17188 24.3281 1.92969 24.2031 1.6875C24.0156 1.20312 23.5156 1.02148 23.0156 1.20312C21.7031 2.05078 18.8281 4.5332 18.7656 5.5625C18.7156 5.74414 18.7156 6.04688 18.7156 6.4707V8.77148C18.7156 9.25586 18.7156 9.4375 18.7656 9.67969C18.8281 10.1641 19.0156 10.5879 19.2656 10.8301C20.0156 11.375 22.5156 13.5547 23.0781 13.5547L23.0156 13.6152ZM0.265625 3.32227C0.265625 2.41406 0.265625 1.92969 0.453125 1.6875C0.578125 1.44531 0.953125 1.20312 1.14062 1.02148C1.39062 0.839844 1.82812 0.839844 2.82812 0.839844H10.8906C13.2656 0.839844 14.4531 0.839844 15.3906 1.32422C16.0781 1.80859 16.8281 2.23242 17.2656 3.14062C17.7656 4.04883 17.7656 5.19922 17.7656 7.5V11.6172C17.7656 12.5254 17.7656 13.0098 17.5781 13.252C17.4531 13.4941 17.0781 13.7363 16.8906 13.918C16.6406 14.0996 16.2031 14.0996 15.2031 14.0996H7.14062C4.76562 14.0996 3.57812 14.0996 2.64062 13.6152C1.95312 13.1309 1.20312 12.707 0.765625 11.7988C0.265625 10.8906 0.265625 9.74023 0.265625 7.43945V3.32227Z" fill="white" />
                  </svg>
                  Schedule a Zoom Meeting
                </Link>

                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#2F80ED] shadow-sm ring-1 ring-black/5 hover:bg-[#f7f7f7] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 23 25" fill="none" aria-hidden="true">
                    <path d="M15.8408 14.6097C15.1294 15.2445 14.2409 16.0345 12.6299 16.0345H11.6666C10.5009 16.0345 9.4406 15.6084 8.68166 14.8362C7.9403 14.0816 7.53219 13.0488 7.53219 11.9278V10.6025C7.53219 9.48144 7.9403 8.44872 8.68166 7.69414C9.4406 6.92189 10.5009 6.49649 11.6666 6.49649H12.6299C14.2428 6.49649 15.1294 7.28576 15.8408 7.92058C16.5795 8.57503 17.2167 9.14702 18.9162 9.14702C19.1754 9.14695 19.4342 9.12616 19.6901 9.08484L19.6843 9.06979C19.5825 8.81562 19.4631 8.56894 19.3269 8.33157L18.1911 6.35317C17.6789 5.4613 16.9423 4.72071 16.0552 4.20582C15.1681 3.69092 14.1619 3.41988 13.1376 3.41992H10.8654C9.84112 3.41988 8.83488 3.69092 7.94781 4.20582C7.06074 4.72071 6.32409 5.4613 5.8119 6.35317L4.6761 8.33157C4.16408 9.22353 3.89453 10.2353 3.89453 11.2651C3.89453 12.295 4.16408 13.3068 4.6761 14.1987L5.8119 16.1771C6.32409 17.069 7.06074 17.8096 7.94781 18.3245C8.83488 18.8394 9.84112 19.1104 10.8654 19.1104H13.1376C14.1619 19.1104 15.1681 18.8394 16.0552 18.3245C16.9423 17.8096 17.6789 17.069 18.1911 16.1771L19.3269 14.202C19.4631 13.9646 19.5825 13.7179 19.6843 13.4638L19.6901 13.4494C19.4343 13.4066 19.1755 13.3848 18.9162 13.3839C17.2167 13.3839 16.5795 13.9526 15.8408 14.6104" fill="#006BFF" />
                    <path d="M12.6299 7.69727H11.6666C9.8923 7.69727 8.72656 8.97148 8.72656 10.6024V11.9276C8.72656 13.5585 9.8923 14.8327 11.6666 14.8327H12.6299C15.2153 14.8327 15.0122 12.1822 18.9162 12.1822C19.2861 12.1818 19.6552 12.216 20.0188 12.2843C20.1373 11.61 20.1373 10.92 20.0188 10.2457C19.6552 10.3137 19.2861 10.3479 18.9162 10.3478C15.0109 10.3478 15.2153 7.69727 12.6299 7.69727Z" fill="#006BFF" />
                    <path d="M22.2611 13.253C21.5963 12.7634 20.8296 12.432 20.0188 12.2837C20.8296 12.0978 21.5963 11.7666 22.2611 11.2772" fill="#006BFF" opacity="0" />
                  </svg>
                  Schedule a Call
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

      {/* Services Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Expanding Cards (Hidden on Mobile) */}
            <div className="hidden lg:flex gap-2 h-[500px]">
              {/* Cost Estimator Card */}
              <div 
                className="relative flex-1 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:flex-[3] group"
                style={{
                  backgroundImage: 'url(https://ezybuilds.com/wp-content/uploads/2025/03/bb921cc248fe9331f3863cefb9d9dc29-768x512.webp)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 p-6 text-white flex flex-col justify-center items-center h-full">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-8 h-8">
                      <rect width="256" height="256" fill="none"></rect>
                      <ellipse cx="96" cy="84" rx="80" ry="36" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></ellipse>
                      <path d="M16,84v40c0,19.88,35.82,36,80,36s80-16.12,80-36V84" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                      <line x1="64" y1="117" x2="64" y2="157" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                      <path d="M176,96.72c36.52,3.34,64,17.86,64,35.28,0,19.88-35.82,36-80,36-19.6,0-37.56-3.17-51.47-8.44" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                      <path d="M80,159.28V172c0,19.88,35.82,36,80,36s80-16.12,80-36V132" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                      <line x1="192" y1="165" x2="192" y2="205" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                      <line x1="128" y1="117" x2="128" y2="205" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-sm mb-2">3+ years of experience</div>
                    <div className="font-semibold">Cost Estimator</div>
                    <div className="mt-4 text-xs space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div>PlanSwift</div>
                      <div>Buildertrend</div>
                      <div>Bluebeam</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Revit Modeler Card */}
              <div 
                className="relative flex-1 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:flex-[3] group"
                style={{
                  backgroundImage: 'url(https://ezybuilds.com/wp-content/uploads/2025/03/0e38bf9405431c0efdffe0c8623158c4-768x946.webp)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 p-6 text-white flex flex-col justify-center items-center h-full">
                  <div className="mb-4">
                    <img src="http://ezybuilds.com/wp-content/uploads/2025/03/chr.svg" className="w-8 h-8" alt="Revit" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm mb-2">5+ years of experience</div>
                    <div className="font-semibold">Revit Modeler</div>
                    <div className="mt-4 text-xs space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div>Revit</div>
                      <div>AutoCAD</div>
                      <div>SketchUp</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AutoCAD Drafter Card - Active by default */}
              <div 
                className="relative flex-[3] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:flex-[3] group"
                style={{
                  backgroundImage: 'url(https://ezybuilds.com/wp-content/uploads/2025/03/238eb48f14730c589c8ff67a0d4b5841-768x1156.webp)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 p-6 text-white flex flex-col justify-center items-center h-full">
                  <div className="mb-4">
                    <img src="http://ezybuilds.com/wp-content/uploads/2025/03/Factory.svg" className="w-8 h-8" alt="AutoCAD" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm mb-2">6+ years of experience</div>
                    <div className="font-semibold">AutoCAD Drafter</div>
                    <div className="mt-4 text-xs space-y-1">
                      <div>AutoCAD</div>
                      <div>VRay</div>
                      <div>Lumion</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Cards (Visible on Mobile) */}
            <div className="lg:hidden space-y-4">
              <div className="relative h-32 rounded-lg overflow-hidden" style={{backgroundImage: 'url(https://ezybuilds.com/wp-content/uploads/2025/03/bb921cc248fe9331f3863cefb9d9dc29-768x512.webp)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-sm">3+ years of experience</div>
                    <div className="font-semibold">Cost Estimator</div>
                  </div>
                </div>
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden" style={{backgroundImage: 'url(https://ezybuilds.com/wp-content/uploads/2025/03/0e38bf9405431c0efdffe0c8623158c4-768x946.webp)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-sm">5+ years of experience</div>
                    <div className="font-semibold">Revit Modeler</div>
                  </div>
                </div>
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden" style={{backgroundImage: 'url(https://ezybuilds.com/wp-content/uploads/2025/03/238eb48f14730c589c8ff67a0d4b5841-768x1156.webp)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-sm">6+ years of experience</div>
                    <div className="font-semibold">AutoCAD Drafter</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="lg:w-96">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#171717] mb-6">
                Talk to Our AEC Offshore Staffing Consultants
              </h2>
              <p className="text-[#6b6b6b] text-base mb-8 leading-relaxed">
                68% of top US construction and architecture firms now leverage offshore talent to reduce costs and meet deadlines. At remoteseat, access the top 1% of AEC professionals with direct US project experience. Your competitors are already scaling smarter; don't get left behind.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f2572b] px-8 py-4 text-white font-medium hover:bg-[#e04a1f] transition-colors"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                </svg>
                Get Your Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section 
        className="bg-[#f2572b] py-20 relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://ezybuilds.com/wp-content/uploads/2025/03/plan-2.webp)',
          backgroundPosition: 'bottom left',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                Our Clients
              </h2>
              <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                Our primary customers are from the AEC industry and include:
              </p>
            </div>

            {/* Right Content - Client Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Architecture Firms */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-white hover:bg-white/20 transition-colors">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
                    <path d="M43.5 10.5H13.5V7.5C13.5 7.10218 13.342 6.72064 13.0607 6.43934C12.7794 6.15804 12.3978 6 12 6H9C7.4087 6 5.88258 6.63214 4.75736 7.75736C3.63214 8.88258 3 10.4087 3 12V33C3 34.5913 3.63214 36.1174 4.75736 37.2426C5.88258 38.3679 7.4087 39 9 39H43.5C43.8978 39 44.2794 38.842 44.5607 38.5607C44.842 38.2794 45 37.8978 45 37.5V12C45 11.6022 44.842 11.2206 44.5607 10.9393C44.2794 10.658 43.8978 10.5 43.5 10.5Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Architecture Firms</h3>
              </div>

              {/* Engineering Companies */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-white hover:bg-white/20 transition-colors">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
                    <path d="M24 16.5C19.8645 16.5 16.5 19.8645 16.5 24C16.5 28.1355 19.8645 31.5 24 31.5C28.1355 31.5 31.5 28.1355 31.5 24C31.5 19.8645 28.1355 16.5 24 16.5ZM24 28.5C21.519 28.5 19.5 26.481 19.5 24C19.5 21.519 21.519 19.5 24 19.5C26.481 19.5 28.5 21.519 28.5 24C28.5 26.481 26.481 28.5 24 28.5Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Engineering Companies</h3>
              </div>

              {/* Construction Companies */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-white hover:bg-white/20 transition-colors">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="36" viewBox="0 0 42 36" fill="none" className="w-12 h-12">
                    <path d="M16.5 13.5C16.5 13.1022 16.658 12.7206 16.9393 12.4393C17.2206 12.158 17.6022 12 18 12H30C30.3978 12 30.7794 12.158 31.0607 12.4393C31.342 12.7206 31.5 13.1022 31.5 13.5C31.5 13.8978 31.342 14.2794 31.0607 14.5607C30.7794 14.842 30.3978 15 30 15H18C17.6022 15 17.2206 14.842 16.9393 14.5607C16.658 14.2794 16.5 13.8978 16.5 13.5Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Construction Companies</h3>
              </div>

              {/* Project Managers */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-white hover:bg-white/20 transition-colors">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
                    <path d="M40.5 7.5H7.5C6.70435 7.5 5.94129 7.81607 5.37868 8.37868C4.81607 8.94129 4.5 9.70435 4.5 10.5V37.5C4.5 38.2956 4.81607 39.0587 5.37868 39.6213C5.94129 40.1839 6.70435 40.5 7.5 40.5H40.5C41.2957 40.5 42.0587 40.1839 42.6213 39.6213C43.1839 39.0587 43.5 38.2956 43.5 37.5V10.5C43.5 9.70435 43.1839 8.94129 42.6213 8.37868C42.0587 7.81607 41.2957 7.5 40.5 7.5Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Project Managers</h3>
              </div>

              {/* General Contractors */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-white hover:bg-white/20 transition-colors">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
                    <path d="M42 28.5V25.5C41.9899 21.7801 40.832 18.1539 38.6843 15.1166C36.5366 12.0793 33.5038 9.77886 30 8.52938V7.5C30 6.70435 29.6839 5.94129 29.1213 5.37868C28.5587 4.81607 27.7956 4.5 27 4.5H21C20.2044 4.5 19.4413 4.81607 18.8787 5.37868C18.3161 5.94129 18 6.70435 18 7.5V8.52938C14.4962 9.77886 11.4634 12.0793 9.31571 15.1166C7.16801 18.1539 6.01008 21.7801 6 25.5V28.5C5.20435 28.5 4.44129 28.8161 3.87868 29.3787C3.31607 29.9413 3 30.7044 3 31.5V36C3 36.7957 3.31607 37.5587 3.87868 38.1213C4.44129 38.6839 5.20435 39 6 39H42C42.7957 39 43.5587 38.6839 44.1213 38.1213C44.6839 37.5587 45 36.7957 45 36V31.5C45 30.7044 44.6839 29.9413 44.1213 29.3787C43.5587 28.8161 42.7957 28.5 42 28.5Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">General Contractors</h3>
              </div>

              {/* Sub-contractors */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-white hover:bg-white/20 transition-colors">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none" className="w-12 h-12">
                    <g clipPath="url(#clip0_1234_13200)">
                      <path d="M36.6976 11.2292C34.9614 9.49295 32.1363 9.49295 30.3999 11.2292L19.2679 22.3612C17.427 24.2021 16.2802 26.5521 15.9582 29.0936H14.5914C13.9787 27.3657 12.3278 26.1249 10.3926 26.1249C7.93713 26.1249 5.93945 28.1225 5.93945 30.578C5.93945 31.3978 6.60401 32.0624 7.42383 32.0624C8.24365 32.0624 8.9082 31.3978 8.9082 30.578C8.9082 29.7595 9.57409 29.0936 10.3926 29.0936C11.2111 29.0936 11.877 29.7595 11.877 30.578C11.877 31.3978 12.5415 32.0624 13.3613 32.0624H17.3488C20.4527 32.0624 23.3709 30.8536 25.5656 28.6588C26.2055 28.0189 36.0612 18.1633 36.6977 17.5268C38.4339 15.7906 38.4339 12.9654 36.6976 11.2292Z" fill="currentColor"/>
                    </g>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Sub-contractors</h3>
              </div>

              {/* Real Estate Developers */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-white hover:bg-white/20 transition-colors">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
                    <path d="M45 39H42V25.5L42.4388 25.9387C42.7207 26.2202 43.1029 26.3781 43.5013 26.3778C43.8997 26.3774 44.2817 26.2188 44.5631 25.9369C44.8446 25.6549 45.0025 25.2727 45.0022 24.8743C45.0018 24.4759 44.8432 24.094 44.5612 23.8125L26.1206 5.3775C25.5581 4.81531 24.7953 4.49951 24 4.49951C23.2047 4.49951 22.4419 4.81531 21.8794 5.3775L3.43875 23.8125C3.15754 24.094 2.99965 24.4756 2.99983 24.8735C3 25.2713 3.15823 25.6528 3.43969 25.9341C3.72115 26.2153 4.10279 26.3732 4.50066 26.373C4.89853 26.3728 5.28004 26.2146 5.56125 25.9331L6 25.5V39H3C2.60218 39 2.22064 39.158 1.93934 39.4393C1.65804 39.7206 1.5 40.1022 1.5 40.5C1.5 40.8978 1.65804 41.2794 1.93934 41.5607C2.22064 41.842 2.60218 42 3 42H45C45.3978 42 45.7794 41.842 46.0607 41.5607C46.342 41.2794 46.5 40.8978 46.5 40.5C46.5 40.1022 46.342 39.7206 46.0607 39.4393C45.7794 39.158 45.3978 39 45 39Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Real Estate Developers</h3>
              </div>

              {/* Surveying Companies */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-white hover:bg-white/20 transition-colors">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
                    <g clipPath="url(#clip0_1234_13179)">
                      <path d="M43.7812 0H26.7188C24.3925 0 22.5 1.89253 22.5 4.21875V15.5625C22.5 17.8887 24.3925 19.7812 26.7188 19.7812H28.2188V24C28.2188 24.5688 28.5614 25.0815 29.0869 25.2992C29.6123 25.5169 30.2172 25.3965 30.6194 24.9944L35.8325 19.7812H43.7812C46.1075 19.7812 48 17.8887 48 15.5625V4.21875C48 1.89253 46.1075 0 43.7812 0Z" fill="currentColor"/>
                    </g>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Surveying Companies</h3>
              </div>
            </div>
          </div>

          {/* Mobile CTA Button */}
          <div className="mt-12 lg:hidden flex justify-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[#f2572b] font-medium hover:bg-[#dbd4ce] transition-colors"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
              </svg>
              Get Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Key Roles Section */}
      <section 
        className="relative py-20 lg:py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(https://ezybuilds.com/wp-content/uploads/2025/03/top-view-measuring-tools-still-life-1.webp)',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
              Key Roles the AEC Industry Can Offshore
            </h2>
            <p className="text-white/90 text-base lg:text-lg">
              Explore key architecture, engineering, and construction positions available for offshoring.
            </p>
          </div>

          {/* Desktop Grid - Hidden on Mobile */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-8">
            {/* Row 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-[0px_0px_28px_0px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0px_0px_28px_0px_rgba(0,0,0,0.15)] transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none" className="w-12 h-12">
                    <path d="M45.5 39H42.5V25.5L42.9388 25.9387C43.2207 26.2202 43.6029 26.3781 44.0013 26.3778C44.3997 26.3774 44.7817 26.2188 45.0631 25.9369C45.3446 25.6549 45.5025 25.2727 45.5022 24.8743C45.5018 24.4759 45.3432 24.094 45.0612 23.8125L26.6206 5.3775C26.0581 4.81531 25.2953 4.49951 24.5 4.49951C23.7047 4.49951 22.9419 4.81531 22.3794 5.3775L3.93875 23.8125C3.65754 24.094 3.49965 24.4756 3.49983 24.8735C3.5 25.2713 3.65823 25.6528 3.93969 25.9341C4.22115 26.2153 4.60279 26.3732 5.00066 26.373C5.39853 26.3728 5.78004 26.2146 6.06125 25.9331L6.5 25.5V39H3.5C3.10218 39 2.72064 39.158 2.43934 39.4393C2.15804 39.7206 2 40.1022 2 40.5C2 40.8978 2.15804 41.2794 2.43934 41.5607C2.72064 41.842 3.10218 42 3.5 42H45.5C45.8978 42 46.2794 41.842 46.5607 41.5607C46.842 41.2794 47 40.8978 47 40.5C47 40.1022 46.842 39.7206 46.5607 39.4393C46.2794 39.158 45.8978 39 45.5 39ZM9.5 22.5L24.5 7.5L39.5 22.5V39H30.5V28.5C30.5 28.1022 30.342 27.7206 30.0607 27.4393C29.7794 27.158 29.3978 27 29 27H20C19.6022 27 19.2206 27.158 18.9393 27.4393C18.658 27.7206 18.5 28.1022 18.5 28.5V39H9.5V22.5ZM27.5 39H21.5V30H27.5V39Z" fill="#f2572b"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#171717]">Residential Architect</h3>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0px_0px_28px_0px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0px_0px_28px_0px_rgba(0,0,0,0.15)] transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none" className="w-12 h-12">
                    <path d="M42.5 28.5V25.5C42.4899 21.7801 41.332 18.1539 39.1843 15.1166C37.0366 12.0793 34.0038 9.77886 30.5 8.52938V7.5C30.5 6.70435 30.1839 5.94129 29.6213 5.37868C29.0587 4.81607 28.2956 4.5 27.5 4.5H21.5C20.7044 4.5 19.9413 4.81607 19.3787 5.37868C18.8161 5.94129 18.5 6.70435 18.5 7.5V8.52938C14.9962 9.77886 11.9634 12.0793 9.81571 15.1166C7.66801 18.1539 6.51008 21.7801 6.5 25.5V28.5C5.70435 28.5 4.94129 28.8161 4.37868 29.3787C3.81607 29.9413 3.5 30.7044 3.5 31.5V36C3.5 36.7957 3.81607 37.5587 4.37868 38.1213C4.94129 38.6839 5.70435 39 6.5 39H42.5C43.2957 39 44.0587 38.6839 44.6213 38.1213C45.1839 37.5587 45.5 36.7957 45.5 36V31.5C45.5 30.7044 45.1839 29.9413 44.6213 29.3787C44.0587 28.8161 43.2957 28.5 42.5 28.5ZM39.5 25.5V28.5H30.5V11.7506C33.1701 12.9253 35.4418 14.8497 37.0394 17.2904C38.637 19.731 39.4918 22.583 39.5 25.5ZM27.5 7.5V28.5H21.5V7.5H27.5ZM9.5 25.5C9.50823 22.583 10.363 19.731 11.9606 17.2904C13.5582 14.8497 15.8299 12.9253 18.5 11.7506V28.5H9.5V25.5ZM42.5 36H6.5V31.5H42.5V36Z" fill="#f2572b"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#171717]">Construction Designer</h3>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0px_0px_28px_0px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0px_0px_28px_0px_rgba(0,0,0,0.15)] transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none" className="w-12 h-12">
                    <path d="M43.7454 4.75491C43.1882 4.19762 42.5267 3.75554 41.7987 3.45392C41.0706 3.15231 40.2903 2.99707 39.5023 2.99707C38.7142 2.99707 37.9339 3.15231 37.2059 3.45392C36.4778 3.75554 35.8163 4.19762 35.2591 4.75491C35.2329 4.78116 35.2066 4.80929 35.1804 4.83929L25.166 16.5412L23.1879 14.5574C22.77 14.1393 22.2738 13.8076 21.7277 13.5813C21.1816 13.355 20.5962 13.2386 20.0051 13.2386C19.4139 13.2386 18.8286 13.355 18.2825 13.5813C17.7363 13.8076 17.2402 14.1393 16.8223 14.5574L2.4429 28.9387C2.16181 29.2199 2.00391 29.6013 2.00391 29.999C2.00391 30.3966 2.16181 30.778 2.4429 31.0593L17.4429 46.0593C17.7242 46.3404 18.1056 46.4983 18.5032 46.4983C18.9009 46.4983 19.2822 46.3404 19.5635 46.0593L33.9429 31.6874C34.361 31.2695 34.6927 30.7733 34.919 30.2272C35.1453 29.6811 35.2617 29.0957 35.2617 28.5046C35.2617 27.9135 35.1453 27.3281 34.919 26.782C34.6927 26.2359 34.361 25.7397 33.9429 25.3218L31.9591 23.3399L43.661 13.3124C43.6891 13.2862 43.7191 13.2599 43.7454 13.2318C44.868 12.1069 45.4986 10.5826 45.4986 8.99335C45.4986 7.40411 44.868 5.87979 43.7454 4.75491ZM18.5004 42.8793L15.3729 39.7499L19.5616 35.5593C19.8311 35.2757 19.9791 34.8981 19.9741 34.5069C19.9691 34.1158 19.8114 33.7421 19.5348 33.4655C19.2582 33.1889 18.8845 33.0313 18.4934 33.0263C18.1022 33.0212 17.7246 33.1692 17.441 33.4387L13.2504 37.6274L10.8729 35.2499L15.0616 31.0593C15.3311 30.7757 15.4791 30.3981 15.4741 30.0069C15.4691 29.6158 15.3114 29.2421 15.0348 28.9655C14.7582 28.6889 14.3845 28.5313 13.9934 28.5263C13.6022 28.5212 13.2246 28.6692 12.941 28.9387L8.7504 33.1274L5.62102 29.9999L14.0004 21.6205L26.8798 34.4999L18.5004 42.8793ZM41.6604 11.0812L28.7773 22.108C28.62 22.2424 28.4922 22.4079 28.4019 22.5941C28.3116 22.7802 28.2608 22.9831 28.2527 23.1898C28.2446 23.3965 28.2794 23.6027 28.3548 23.7954C28.4302 23.988 28.5447 24.163 28.691 24.3093L31.8129 27.4387C32.094 27.7199 32.2519 28.1013 32.2519 28.499C32.2519 28.8966 32.094 29.278 31.8129 29.5593L29.0004 32.3718L16.1229 19.4999L18.9354 16.6874C19.2167 16.4063 19.5981 16.2484 19.9957 16.2484C20.3934 16.2484 20.7747 16.4063 21.056 16.6874L24.1854 19.8168C24.3317 19.9631 24.5067 20.0776 24.6993 20.153C24.892 20.2284 25.0981 20.2632 25.3049 20.2551C25.5116 20.247 25.7145 20.1962 25.9006 20.1059C26.0868 20.0157 26.2523 19.8878 26.3866 19.7305L37.4191 6.83991C37.9863 6.30105 38.7416 6.00508 39.5239 6.0151C40.3062 6.02511 41.0536 6.34032 41.6068 6.89353C42.16 7.44673 42.4752 8.19416 42.4852 8.97644C42.4952 9.75873 42.1993 10.514 41.6604 11.0812Z" fill="#f2572b"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#171717]">Interior<br/>Designer</h3>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0px_0px_28px_0px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0px_0px_28px_0px_rgba(0,0,0,0.15)] transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none" className="w-12 h-12">
                    <g clipPath="url(#clip0_1239_13558)">
                      <path d="M47 37.5H45.5C45.1022 37.5 44.7206 37.342 44.4393 37.0607C44.158 36.7794 44 36.3978 44 36V30C44 29.6022 44.158 29.2206 44.4393 28.9393C44.7206 28.658 45.1022 28.5 45.5 28.5H47C47.3978 28.5 47.7794 28.342 48.0607 28.0607C48.342 27.7794 48.5 27.3978 48.5 27C48.5 26.6022 48.342 26.2206 48.0607 25.9393C47.7794 25.658 47.3978 25.5 47 25.5H45.5C44.3065 25.5 43.1619 25.9741 42.318 26.818C41.4741 27.6619 41 28.8065 41 30V31.5H37.85C37.5368 29.9806 36.7612 28.5954 35.6296 27.5342C34.498 26.4731 33.0657 25.7881 31.5294 25.5731L24.77 9.34687C24.5423 8.8 24.1578 8.33278 23.665 8.00411C23.1721 7.67544 22.593 7.50003 22.0006 7.5H5C4.20435 7.5 3.44129 7.81607 2.87868 8.37868C2.31607 8.94129 2 9.70435 2 10.5V28.5C1.1643 29.6143 0.655393 30.9392 0.530309 32.3265C0.405224 33.7137 0.668903 35.1083 1.2918 36.3541C1.9147 37.5999 2.8722 38.6476 4.05702 39.3799C5.24184 40.1121 6.60716 40.5 8 40.5H30.5C32.2283 40.4979 33.9031 39.9 35.2419 38.807C36.5808 37.7141 37.5019 36.1929 37.85 34.5H41V36C41 37.1935 41.4741 38.3381 42.318 39.182C43.1619 40.0259 44.3065 40.5 45.5 40.5H47C47.3978 40.5 47.7794 40.342 48.0607 40.0607C48.342 39.7794 48.5 39.3978 48.5 39C48.5 38.6022 48.342 38.2206 48.0607 37.9393C47.7794 37.658 47.3978 37.5 47 37.5ZM28.25 25.5H12.5V10.5H22.0006L28.25 25.5ZM9.5 10.5V25.5H8C6.96727 25.4991 5.94564 25.713 5 26.1281V10.5H9.5ZM30.5 37.5H8C6.80653 37.5 5.66194 37.0259 4.81802 36.182C3.97411 35.3381 3.5 34.1935 3.5 33C3.5 31.8065 3.97411 30.6619 4.81802 29.818C5.66194 28.9741 6.80653 28.5 8 28.5H30.5C31.6935 28.5 32.8381 28.9741 33.682 29.818C34.5259 30.6619 35 31.8065 35 33C35 34.1935 34.5259 35.3381 33.682 36.182C32.8381 37.0259 31.6935 37.5 30.5 37.5ZM32 33C32 33.3978 31.842 33.7794 31.5607 34.0607C31.2794 34.342 30.8978 34.5 30.5 34.5H8C7.60218 34.5 7.22065 34.342 6.93934 34.0607C6.65804 33.7794 6.5 33.3978 6.5 33C6.5 32.6022 6.65804 32.2206 6.93934 31.9393C7.22065 31.658 7.60218 31.5 8 31.5H30.5C30.8978 31.5 31.2794 31.658 31.5607 31.9393C31.842 32.2206 32 32.6022 32 33Z" fill="#f2572b"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_1239_13558">
                        <rect width="48" height="48" fill="white" transform="translate(0.5)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#171717]">Civil<br/>Engineer</h3>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-[0px_0px_28px_0px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0px_0px_28px_0px_rgba(0,0,0,0.15)] transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none" className="w-12 h-12">
                    <path d="M45.3932 24.9375L39.3932 9.9375C39.261 9.6071 39.0158 9.33442 38.7011 9.16819C38.3865 9.00195 38.0231 8.95297 37.6757 9.03L26 11.625V7.5C26 7.10218 25.842 6.72064 25.5607 6.43934C25.2794 6.15804 24.8979 6 24.5 6C24.1022 6 23.7207 6.15804 23.4394 6.43934C23.1581 6.72064 23 7.10218 23 7.5V12.2963L10.6738 15.0356C10.4361 15.0881 10.2148 15.1977 10.0289 15.3548C9.84307 15.5119 9.69822 15.7119 9.6069 15.9375V15.9487L3.6069 30.9375C3.53513 31.1163 3.49883 31.3073 3.50003 31.5C3.50003 35.8706 8.10128 37.5 11 37.5C13.8988 37.5 18.5 35.8706 18.5 31.5C18.5012 31.3073 18.4649 31.1163 18.3932 30.9375L13.0475 17.5819L23 15.375V39H20C19.6022 39 19.2207 39.158 18.9394 39.4393C18.6581 39.7206 18.5 40.1022 18.5 40.5C18.5 40.8978 18.6581 41.2794 18.9394 41.5607C19.2207 41.842 19.6022 42 20 42H29C29.3979 42 29.7794 41.842 30.0607 41.5607C30.342 41.2794 30.5 40.8978 30.5 40.5C30.5 40.1022 30.342 39.7206 30.0607 39.4393C29.7794 39.158 29.3979 39 29 39H26V14.7037L35.5625 12.5812L30.6069 24.9375C30.5351 25.1163 30.4988 25.3073 30.5 25.5C30.5 29.8706 35.1013 31.5 38 31.5C40.8988 31.5 45.5 29.8706 45.5 25.5C45.5012 25.3073 45.4649 25.1163 45.3932 24.9375ZM11 34.5C9.58815 34.5 6.73253 33.8231 6.51315 31.755L11 20.5387L15.4869 31.755C15.2675 33.8231 12.4119 34.5 11 34.5ZM38 28.5C36.5882 28.5 33.7325 27.8231 33.5132 25.755L38 14.5387L42.4869 25.755C42.2675 27.8231 39.4119 28.5 38 28.5Z" fill="#f2572b"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#171717]">Quantity<br/>Surveyor</h3>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0px_0px_28px_0px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0px_0px_28px_0px_rgba(0,0,0,0.15)] transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20" fill="none" className="w-12 h-12">
                    <path d="M20.5333 5.63295V5C20.5333 2.15 16.1198 0 10.2667 0C4.4135 0 0 2.15 0 5L0 9.54545C0 11.9193 3.0625 13.8057 7.46667 14.3705V15C7.46667 17.85 11.8802 20 17.7333 20C23.5865 20 28 17.85 28 15L28 10.4545C28 8.10227 25.0343 6.21364 20.5333 5.63295ZM26.1333 10.4545C26.1333 11.9568 22.5412 13.6364 17.7333 13.6364C17.2982 13.6364 16.8665 13.6216 16.4407 13.5943C18.9572 12.7011 20.5333 11.25 20.5333 9.54545V7.47045C24.0182 7.97614 26.1333 9.34886 26.1333 10.4545ZM7.46667 12.5284V9.825C8.39507 9.94283 9.33041 10.0013 10.2667 10C11.2029 10.0013 12.1383 9.94283 13.0667 9.825V12.5284C12.1396 12.6618 11.2038 12.7283 10.2667 12.7273C9.32958 12.7283 8.39369 12.6618 7.46667 12.5284ZM18.6667 7.94659V9.54545C18.6667 10.4989 17.2188 11.5227 14.9333 12.1443V9.48864C16.4395 9.13295 17.7147 8.60341 18.6667 7.94659ZM10.2667 1.81818C15.0745 1.81818 18.6667 3.49773 18.6667 5C18.6667 6.50227 15.0745 8.18182 10.2667 8.18182C5.45883 8.18182 1.86667 6.50227 1.86667 5C1.86667 3.49773 5.45883 1.81818 10.2667 1.81818ZM1.86667 9.54545L1.86667 7.94659C2.81867 8.60341 4.09383 9.13295 5.6 9.48864V12.1443C3.3145 11.5227 1.86667 10.4989 1.86667 9.54545ZM9.33333 15V14.5261C9.64017 14.5375 9.9505 14.5455 10.2667 14.5455C10.7193 14.5455 11.1615 14.5307 11.5955 14.5057C12.0776 14.6738 12.5687 14.8164 13.0667 14.933L13.0667 17.5989C10.7812 16.9773 9.33333 15.9534 9.33333 15ZM14.9333 17.983L14.9333 15.2727C15.8614 15.3942 16.7969 15.455 17.7333 15.4545C18.6696 15.4558 19.6049 15.3974 20.5333 15.2795V17.983C18.6766 18.2481 16.7901 18.2481 14.9333 17.983ZM22.4 17.5989V14.9432C23.9062 14.5875 25.1813 14.058 26.1333 13.4011V15C26.1333 15.9534 24.6855 16.9773 22.4 17.5989Z" fill="#f2572b"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#171717]">Cost<br/>Estimator</h3>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0px_0px_28px_0px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0px_0px_28px_0px_rgba(0,0,0,0.15)] transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none" className="w-12 h-12">
                    <path d="M42.0612 16.9388L31.5613 6.43875C31.4218 6.2995 31.2564 6.18908 31.0743 6.1138C30.8922 6.03851 30.697 5.99985 30.5 6H8C7.60218 6 7.22064 6.15804 6.93934 6.43934C6.65804 6.72065 6.5 7.10218 6.5 7.5V30C6.50017 30.3936 6.65505 30.7714 6.93125 31.0519L17.4313 41.5519C17.5708 41.6937 17.7371 41.8064 17.9206 41.8833C18.1041 41.9603 18.301 41.9999 18.5 42H41C41.3978 42 41.7794 41.842 42.0607 41.5607C42.342 41.2794 42.5 40.8978 42.5 40.5V18C42.5002 17.803 42.4615 17.6078 42.3862 17.4257C42.3109 17.2436 42.2005 17.0782 42.0612 16.9388ZM32 11.1206L37.3794 16.5H32V11.1206ZM17 36.8794L11.6206 31.5H17V36.8794ZM17 28.5H9.5V11.1206L17 18.6206V28.5ZM11.6206 9H29V16.5H19.1206L11.6206 9ZM29 19.5V28.5H20V19.5H29ZM20 39V31.5H29.8794L37.3794 39H20ZM39.5 36.8794L32 29.3794V19.5H39.5V36.8794Z" fill="#f2572b"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#171717]">AutoCAD/CAD Operators</h3>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0px_0px_28px_0px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0px_0px_28px_0px_rgba(0,0,0,0.15)] transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-12 h-12" fill="#f2572b">
                    <rect width="256" height="256" fill="none"/>
                    <line x1="96" y1="184" x2="96" y2="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                    <line x1="160" y1="72" x2="160" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                    <polygon points="96 184 32 200 32 56 96 40 160 72 224 56 224 200 160 216 96 184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#171717]">Project Accountant</h3>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-[0px_0px_28px_0px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0px_0px_28px_0px_rgba(0,0,0,0.15)] transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-12 h-12" fill="#f2572b">
                    <rect width="256" height="256" fill="none"/>
                    <line x1="108" y1="116" x2="140" y2="148" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                    <line x1="228.06" y1="99.94" x2="188" y2="140" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                    <path d="M40,64,53.77,49.77a88,88,0,0,1,124.46,0l67.43,67.89a8,8,0,0,1,0,11.31L217,157.66a8,8,0,0,1-11.31,0L168,120,66.34,221.66a8,8,0,0,1-11.31,0L34.34,201a8,8,0,0,1,0-11.31L136,88,79.78,31.78" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#171717]">BIM<br/>Specialist</h3>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0px_0px_28px_0px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0px_0px_28px_0px_rgba(0,0,0,0.15)] transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" className="w-12 h-12">
                    <path d="M21.9998 11.6875C21.9998 11.8699 21.9273 12.0447 21.7984 12.1737C21.6695 12.3026 21.4946 12.375 21.3123 12.375H19.9373V13.75C19.9373 13.9324 19.8648 14.1072 19.7359 14.2362C19.607 14.3651 19.4321 14.4375 19.2498 14.4375C19.0674 14.4375 18.8926 14.3651 18.7636 14.2362C18.6347 14.1072 18.5623 13.9324 18.5623 13.75V12.375H17.1873C17.0049 12.375 16.8301 12.3026 16.7011 12.1737C16.5722 12.0447 16.4998 11.8699 16.4998 11.6875C16.4998 11.5052 16.5722 11.3303 16.7011 11.2014C16.8301 11.0725 17.0049 11 17.1873 11H18.5623V9.62502C18.5623 9.44268 18.6347 9.26782 18.7636 9.13888C18.8926 9.00995 19.0674 8.93752 19.2498 8.93752C19.4321 8.93752 19.607 9.00995 19.7359 9.13888C19.8648 9.26782 19.9373 9.44268 19.9373 9.62502V11H21.3123C21.4946 11 21.6695 11.0725 21.7984 11.2014C21.9273 11.3303 21.9998 11.5052 21.9998 11.6875ZM17.0266 16.7449C17.144 16.8847 17.201 17.0653 17.1852 17.2471C17.1694 17.4289 17.0821 17.5969 16.9424 17.7143C16.8026 17.8317 16.622 17.8888 16.4402 17.873C16.2584 17.8572 16.0904 17.7698 15.973 17.6301C14.2439 15.571 11.8669 14.4375 9.28103 14.4375C6.69517 14.4375 4.31814 15.571 2.58907 17.6301C2.47169 17.7697 2.30367 17.857 2.12195 17.8727C1.94024 17.8884 1.75973 17.8313 1.62013 17.7139C1.48053 17.5965 1.39327 17.4285 1.37756 17.2468C1.36185 17.0651 1.41896 16.8845 1.53634 16.7449C2.82025 15.217 4.41696 14.1316 6.19157 13.5506C5.11383 12.8794 4.28404 11.8754 3.82772 10.6905C3.3714 9.50568 3.3134 8.20445 3.66248 6.98369C4.01155 5.76294 4.74873 4.68908 5.76246 3.92459C6.7762 3.16011 8.01134 2.74658 9.28103 2.74658C10.5507 2.74658 11.7859 3.16011 12.7996 3.92459C13.8133 4.68908 14.5505 5.76294 14.8996 6.98369C15.2487 8.20445 15.1907 9.50568 14.7343 10.6905C14.278 11.8754 13.4482 12.8794 12.3705 13.5506C14.1451 14.1316 15.7418 15.217 17.0266 16.7449ZM9.28103 13.0625C10.1649 13.0625 11.0288 12.8004 11.7637 12.3094C12.4986 11.8184 13.0714 11.1204 13.4096 10.3039C13.7478 9.48733 13.8363 8.58881 13.6639 7.72196C13.4915 6.85511 13.0659 6.05885 12.4409 5.43389C11.8159 4.80892 11.0197 4.38331 10.1528 4.21088C9.28598 4.03846 8.38747 4.12695 7.57091 4.46518C6.75435 4.80341 6.05643 5.37618 5.5654 6.11107C5.07436 6.84595 4.81228 7.70993 4.81228 8.59377C4.81364 9.77854 5.28489 10.9144 6.12265 11.7521C6.96041 12.5899 8.09626 13.0612 9.28103 13.0625Z" fill="#f2572b"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#171717]">Draftsperson</h3>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0px_0px_28px_0px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0px_0px_28px_0px_rgba(0,0,0,0.15)] transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none" className="w-12 h-12">
                    <path d="M42.5 28.5V25.5C42.4899 21.7801 41.332 18.1539 39.1843 15.1166C37.0366 12.0793 34.0038 9.77886 30.5 8.52938V7.5C30.5 6.70435 30.1839 5.94129 29.6213 5.37868C29.0587 4.81607 28.2956 4.5 27.5 4.5H21.5C20.7044 4.5 19.9413 4.81607 19.3787 5.37868C18.8161 5.94129 18.5 6.70435 18.5 7.5V8.52938C14.9962 9.77886 11.9634 12.0793 9.81571 15.1166C7.66801 18.1539 6.51008 21.7801 6.5 25.5V28.5C5.70435 28.5 4.94129 28.8161 4.37868 29.3787C3.81607 29.9413 3.5 30.7044 3.5 31.5V36C3.5 36.7957 3.81607 37.5587 4.37868 38.1213C4.94129 38.6839 5.70435 39 6.5 39H42.5C43.2957 39 44.0587 38.6839 44.6213 38.1213C45.1839 37.5587 45.5 36.7957 45.5 36V31.5C45.5 30.7044 45.1839 29.9413 44.6213 29.3787C44.0587 28.8161 43.2957 28.5 42.5 28.5ZM39.5 25.5V28.5H30.5V11.7506C33.1701 12.9253 35.4418 14.8497 37.0394 17.2904C38.637 19.731 39.4918 22.583 39.5 25.5ZM27.5 7.5V28.5H21.5V7.5H27.5ZM9.5 25.5C9.50823 22.583 10.363 19.731 11.9606 17.2904C13.5582 14.8497 15.8299 12.9253 18.5 11.7506V28.5H9.5V25.5ZM42.5 36H6.5V31.5H42.5V36Z" fill="#f2572b"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#171717]">Project<br/>Manager</h3>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0px_0px_28px_0px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0px_0px_28px_0px_rgba(0,0,0,0.15)] transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-12 h-12" fill="#f2572b">
                    <rect width="256" height="256" fill="none"/>
                    <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                    <path d="M128,32c17.67,0,32,43,32,96s-14.33,96-32,96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                    <path d="M224,128c0,17.67-43,32-96,32s-96-14.33-96-32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#171717]">3D<br/>Visualizer</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Section - Visible on Mobile Only */}
          <div className="lg:hidden">
            {/* Mobile Header */}
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-xl font-semibold text-white">Key Roles</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" className="w-6 h-6">
                <path d="M19.25 5.5H2.75C2.38533 5.5 2.03559 5.64487 1.77773 5.90273C1.51987 6.16059 1.375 6.51033 1.375 6.875V13.0625C1.375 13.4272 1.51987 13.7769 1.77773 14.0348C2.03559 14.2926 2.38533 14.4375 2.75 14.4375H4.8125V17.1875C4.8125 17.3698 4.88493 17.5447 5.01386 17.6736C5.1428 17.8026 5.31766 17.875 5.5 17.875C5.68234 17.875 5.8572 17.8026 5.98614 17.6736C6.11507 17.5447 6.1875 17.3698 6.1875 17.1875V14.4375H15.8125V17.1875C15.8125 17.3698 15.8849 17.5447 16.0139 17.6736C16.1428 17.8026 16.3177 17.875 16.5 17.875C16.6823 17.875 16.8572 17.8026 16.9861 17.6736C17.1151 17.5447 17.1875 17.3698 17.1875 17.1875V14.4375H19.25C19.6147 14.4375 19.9644 14.2926 20.2223 14.0348C20.4801 13.7769 20.625 13.4272 20.625 13.0625V6.875C20.625 6.51033 20.4801 6.16059 20.2223 5.90273C19.9644 5.64487 19.6147 5.5 19.25 5.5ZM19.25 11.0593L15.0657 6.875H19.25V11.0593ZM6.9343 6.875L13.1218 13.0625H8.8782L2.75 6.9343V6.875H6.9343ZM2.75 8.8782L6.9343 13.0625H2.75V8.8782ZM19.25 13.0625H15.0657L8.8782 6.875H13.1218L19.25 13.0041V13.0625Z" fill="white"/>
              </svg>
            </div>

            {/* Mobile Image */}
            <div className="mb-6">
              <img 
                src="https://ezybuilds.com/wp-content/uploads/2025/03/Frame-1321316516.webp" 
                alt="Key Roles" 
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Mobile Description */}
            <div className="mb-8">
              <p className="text-white/90 text-base leading-relaxed">
                Building strong, cohesive teams is paramount to our success. Our team-based hiring approach focuses on identifying individuals who not only possess the necessary technical skills but also demonstrate strong collaborative abilities.
              </p>
            </div>

            {/* Mobile Expandable List */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none" className="w-8 h-8 flex-shrink-0">
                  <path d="M45.5 39H42.5V25.5L42.9388 25.9387C43.2207 26.2202 43.6029 26.3781 44.0013 26.3778C44.3997 26.3774 44.7817 26.2188 45.0631 25.9369C45.3446 25.6549 45.5025 25.2727 45.5022 24.8743C45.5018 24.4759 45.3432 24.094 45.0612 23.8125L26.6206 5.3775C26.0581 4.81531 25.2953 4.49951 24.5 4.49951C23.7047 4.49951 22.9419 4.81531 22.3794 5.3775L3.93875 23.8125C3.65754 24.094 3.49965 24.4756 3.49983 24.8735C3.5 25.2713 3.65823 25.6528 3.93969 25.9341C4.22115 26.2153 4.60279 26.3732 5.00066 26.373C5.39853 26.3728 5.78004 26.2146 6.06125 25.9331L6.5 25.5V39H3.5C3.10218 39 2.72064 39.158 2.43934 39.4393C2.15804 39.7206 2 40.1022 2 40.5C2 40.8978 2.15804 41.2794 2.43934 41.5607C2.72064 41.842 3.10218 42 3.5 42H45.5C45.8978 42 46.2794 41.842 46.5607 41.5607C46.842 41.2794 47 40.8978 47 40.5C47 40.1022 46.842 39.7206 46.5607 39.4393C46.2794 39.158 45.8978 39 45.5 39ZM9.5 22.5L24.5 7.5L39.5 22.5V39H30.5V28.5C30.5 28.1022 30.342 27.7206 30.0607 27.4393C29.7794 27.158 29.3978 27 29 27H20C19.6022 27 19.2206 27.158 18.9393 27.4393C18.658 27.7206 18.5 28.1022 18.5 28.5V39H9.5V22.5ZM27.5 39H21.5V30H27.5V39Z" fill="#f2572b"/>
                </svg>
                <span className="text-white font-medium">Residential Architect</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none" className="w-8 h-8 flex-shrink-0">
                  <path d="M20 12.25V10.75C19.995 8.89004 19.416 7.07696 18.3421 5.55831C17.2683 4.03965 15.7519 2.88943 14 2.26469V1.75C14 1.35218 13.842 0.970644 13.5607 0.68934C13.2794 0.408035 12.8978 0.25 12.5 0.25H9.5C9.10218 0.25 8.72064 0.408035 8.43934 0.68934C8.15804 0.970644 8 1.35218 8 1.75V2.26469C6.2481 2.88943 4.7317 4.03965 3.65785 5.55831C2.584 7.07696 2.00504 8.89004 2 10.75V12.25C1.60218 12.25 1.22064 12.408 0.93934 12.6893C0.658035 12.9706 0.5 13.3522 0.5 13.75V16C0.5 16.3978 0.658035 16.7794 0.93934 17.0607C1.22064 17.342 1.60218 17.5 2 17.5H20C20.3978 17.5 20.7794 17.342 21.0607 17.0607C21.342 16.7794 21.5 16.3978 21.5 16V13.75C21.5 13.3522 21.342 12.9706 21.0607 12.6893C20.7794 12.408 20.3978 12.25 20 12.25ZM18.5 10.75V12.25H14V3.87531C15.335 4.46264 16.4709 5.42486 17.2697 6.64519C18.0685 7.86552 18.4959 9.29148 18.5 10.75ZM12.5 1.75V12.25H9.5V1.75H12.5ZM3.5 10.75C3.50411 9.29148 3.93151 7.86552 4.73031 6.64519C5.5291 5.42486 6.66496 4.46264 8 3.87531V12.25H3.5V10.75ZM20 16H2V13.75H20V16Z" fill="white"/>
                </svg>
                <span className="text-white font-medium">Construction Designer</span>
              </div>

              {/* Add more mobile items here - truncated for brevity */}
            </div>

            {/* Mobile CTA Button */}
            <div className="mt-8">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center w-full gap-2 rounded-full bg-[#f2572b] px-6 py-3 text-white font-medium hover:bg-[#e04a1f] transition-colors"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                </svg>
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Save Up To 70% Section */}
      <section className="bg-[#171717] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
            {/* Left Content */}
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                Save <span className="text-[#f2572b]">Up To 70%</span> with Zero Compromise on Quality.
              </h2>
            </div>
            
            {/* Right Content */}
            <div className="lg:w-1/2 lg:text-right">
              <p className="text-lg max-w-lg lg:ml-auto leading-relaxed text-white/90">
                Offshore engineers/architects with US experience, fluent English, time zone alignment, and expertise in Revit, Dynamo, or your chosen platform.
              </p>
            </div>
          </div>

          {/* Desktop Expanding Cards */}
          <div className="hidden lg:block">
            <ExpandingCardsComponent />
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-semibold text-white mb-4">
                Experienced<br/>Architects
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/80">Offshore Hiring</span>
                  <span className="font-semibold">From $13/hour</span>
                </div>
                <div className="text-center text-[#f2572b] font-semibold">Vs.</div>
                <div className="flex justify-between">
                  <span className="text-white/80">Local Hiring</span>
                  <span className="font-semibold">$70/hour</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/20">
                  <span className="text-white/80">Annual Avg. Saving</span>
                  <span className="font-bold text-[#f2572b]">~$115,000</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-semibold text-white mb-4">
                Experienced<br/>Cost Estimators
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/80">Offshore Hiring</span>
                  <span className="font-semibold">From $13/hour</span>
                </div>
                <div className="text-center text-[#f2572b] font-semibold">Vs.</div>
                <div className="flex justify-between">
                  <span className="text-white/80">Local Hiring</span>
                  <span className="font-semibold">$40/hour</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/20">
                  <span className="text-white/80">Annual Avg. Saving</span>
                  <span className="font-bold text-[#f2572b]">~$57,000</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-semibold text-white mb-4">
                Experienced<br/>Project Managers
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/80">Offshore Hiring</span>
                  <span className="font-semibold">From $15/hour</span>
                </div>
                <div className="text-center text-[#f2572b] font-semibold">Vs.</div>
                <div className="flex justify-between">
                  <span className="text-white/80">Local Hiring</span>
                  <span className="font-semibold">$40/hour</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/20">
                  <span className="text-white/80">Annual Avg. Saving</span>
                  <span className="font-bold text-[#f2572b]">~$74,000</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-semibold text-white mb-4">
                Experienced<br/>Civil Engineers
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/80">Offshore Hiring</span>
                  <span className="font-semibold">From $13/hour</span>
                </div>
                <div className="text-center text-[#f2572b] font-semibold">Vs.</div>
                <div className="flex justify-between">
                  <span className="text-white/80">Local Hiring</span>
                  <span className="font-semibold">$36/hour</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/20">
                  <span className="text-white/80">Annual Avg. Saving</span>
                  <span className="font-bold text-[#f2572b]">~$63,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build Your Offshore AEC Team in 4 STEPS Section */}
      <section className="bg-[#dbd4ce] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Steps */}
            <div>
              {/* Header */}
              <div className="mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#171717] mb-4">
                  Build Your Offshore AEC Team in <span className="text-[#f2572b]">4 STEPS</span>
                </h2>
                <p className="text-[#6b6b6b] text-lg">
                  Hire pre-vetted architects, engineers, and designers in weeks, not months.
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#f2572b] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#171717] mb-2">
                      Share Your Requirements
                    </h3>
                    <p className="text-[#6b6b6b] leading-relaxed">
                      Outline your needs, project goals, and technical needs. We'll tailor our search to your specifications.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#f2572b] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#171717] mb-2">
                      Review Vetted Professionals
                    </h3>
                    <p className="text-[#6b6b6b] leading-relaxed">
                      Receive pre-assessed resumes of AEC experts screened for technical skills, English fluency, and US experience.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#f2572b] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#171717] mb-2">
                      Select Your Talent
                    </h3>
                    <p className="text-[#6b6b6b] leading-relaxed">
                      Interview candidates and choose professionals who align with your project and company culture.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#171717] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#171717] mb-2">
                      We Manage the Rest
                    </h3>
                    <p className="text-[#6b6b6b] leading-relaxed">
                      We handle contracts, payroll, and onboarding for immediate productivity. Your new team works in your time zone.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image and CTA */}
            <div className="flex flex-col items-center">
              <div className="mb-8">
                <img 
                  src="https://ezybuilds.com/wp-content/uploads/2025/03/4bg.webp" 
                  alt="Build Your Offshore AEC Team" 
                  className="w-full max-w-lg h-auto rounded-lg"
                />
              </div>
              <div className="text-center">
                <p className="text-2xl lg:text-3xl font-semibold text-[#171717]">
                  Build your dream team faster with <span className="text-[#f2572b]">remoteseat</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need Support CTA Section */}
      <section 
        className="relative py-20 lg:py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(/assets/cta-blueprint.webp)',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - 3D House Image */}
            <div className="flex justify-center lg:justify-start">
              <img 
                src="https://ezybuilds.com/wp-content/uploads/2025/03/3d-rendering-isometric-house-model-1.webp" 
                alt="3D Architectural Model" 
                className="w-full max-w-md h-auto"
              />
            </div>

            {/* Right Content - Text and CTA */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
                Need support for your architectural or construction projects?
              </h2>
              
              <p className="text-white/80 text-lg lg:text-xl mb-8 leading-relaxed">
                Book Your Free Consultation Call Today to Get Started!
              </p>
              
              {/* Desktop CTA Button - Hidden on mobile */}
              <div className="hidden lg:block">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f2572b] px-8 py-4 text-white font-medium hover:bg-[#e04a1f] transition-colors text-lg"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                  </svg>
                  Get Your Free Consultation
                </Link>
              </div>

              {/* Mobile CTA Button - Only visible on mobile */}
              <div className="lg:hidden">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center w-full gap-2 rounded-full bg-[#f2572b] px-6 py-3 text-white font-medium hover:bg-[#e04a1f] transition-colors"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                  </svg>
                  Contact Us Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#dbd4ce] py-20 lg:py-24 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Title */}
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
            <div className="space-y-4">
              <FAQAccordion />
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
                {/* Name Fields */}
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

                {/* Email */}
                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2572b] focus:border-transparent outline-none"
                  required
                />

                {/* Phone */}
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2572b] focus:border-transparent outline-none"
                  required
                />

                {/* State Dropdown */}
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

                {/* Company Name */}
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2572b] focus:border-transparent outline-none"
                  required
                />

                {/* What are you looking for */}
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2572b] focus:border-transparent outline-none"
                  required
                />

                {/* Submit Button */}
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

export default ExtendTeam;