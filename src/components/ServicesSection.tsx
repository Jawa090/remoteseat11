import { Link } from "react-router-dom";
import { Users, Calculator, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Hire Offshore BIM Technicians & 3D Modelers",
      description: "Bring BIM & 3D modeling expertise on board through our offshore staffing agency. Highly skilled remote professionals at a fraction of local cost to support your project delivery and also help you attract more high-ticket clients.",
      link: "/hire-offshore-bim-technicians"
    },
    {
      icon: <Calculator className="w-12 h-12" />,
      title: "Hire Offshore Estimators & Project Support Staff",
      description: "Scale your AEC team with estimators and project support specialists. Our offshore staffing agency delivers vetted talent who understand US construction standards.",
      link: "/hire-offshore-construction-cost-estimators"
    }
  ];

  const benefits = [
    {
      number: "Up to 70%",
      label: "Savings compared to hiring a US-based professional."
    },
    {
      number: "Top 1%",
      label: "Every resource is college-educated, US-trained, rigorously tested."
    },
    {
      number: "100% Managed",
      label: "Recruitment, payroll, and compliance handled."
    },
    {
      number: "30+ Years",
      label: "Combined experience and work in your time zone."
    }
  ];

  const solutions = [
    {
      title: "Offshore Staffing for Any AEC Talent",
      description: "Hire remote AEC professionals from estimators and architects to BIM, drafting, engineering, and project support. Build and grow your team flexibly, without long-term commitments.",
      link: "/outsource-architecture-construction-staffing"
    },
    {
      title: "Outsource AEC Projects End to End",
      description: "Delegate entire projects, design, drafting, BIM, MEP coordination, modeling, estimation, or more to our offshore experts. We handle delivery, quality, and deadlines.",
      link: "/outsource-3d-architectural-rendering-bim-cad"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Outperform Your Competitors with
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Offshore AEC Experts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Think of us as a flexible extension of your team, ensuring your project's success from blueprint to reality. 
            Access US-standard talent without hiring locally and save thousands on salaries, benefits, and training.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <Link 
                to={service.link}
                className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors"
              >
                Start Hiring Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-12 mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">
                  {benefit.number}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {benefit.label}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/contact-us"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Your Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Solutions Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Discover How
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> EZYBUILDS</span>
              Can Help You
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Partner with 100+ AEC specialists in design, drafting, BIM, cost estimation, and project management. 
              Trained in US standards, fluent in English, and available at 70% lower costs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all hover:border-orange-300">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <Link 
                  to={solution.link}
                  className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
