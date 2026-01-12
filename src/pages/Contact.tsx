import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (510) 861-7074",
      link: "tel:+15108617074",
      color: "text-[#C95B4A]",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@ezybuilds.com",
      link: "mailto:info@ezybuilds.com",
      color: "text-[#C95B4A]",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "2603 Camino Ramon, San Ramon, CA 94583",
      link: null,
      color: "text-[#C95B4A]",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM PST",
      link: null,
      color: "text-[#C95B4A]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-[#212121] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
            >
              Get in <span style={{ color: "#C95B4A" }}>Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Have questions? We're here to help. Reach out to our team for any inquiries about our services, pricing, or how we can support your AEC projects.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#2a2a2a] rounded-2xl p-8 lg:p-10 shadow-xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-3">Send us a Message</h2>
                <p className="text-gray-400">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 text-sm">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-white font-medium mb-2 text-sm">
                      First Name <span className="text-[#C95B4A]">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1a1a1a] text-white rounded-lg border border-gray-600 focus:border-[#C95B4A] focus:outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white font-medium mb-2 text-sm">
                      Last Name <span className="text-[#C95B4A]">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1a1a1a] text-white rounded-lg border border-gray-600 focus:border-[#C95B4A] focus:outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2 text-sm">
                      Email <span className="text-[#C95B4A]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1a1a1a] text-white rounded-lg border border-gray-600 focus:border-[#C95B4A] focus:outline-none transition-colors"
                      placeholder="john.doe@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2 text-sm">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1a1a1a] text-white rounded-lg border border-gray-600 focus:border-[#C95B4A] focus:outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-white font-medium mb-2 text-sm">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1a1a1a] text-white rounded-lg border border-gray-600 focus:border-[#C95B4A] focus:outline-none transition-colors"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2 text-sm">
                    Subject <span className="text-[#C95B4A]">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1a1a1a] text-white rounded-lg border border-gray-600 focus:border-[#C95B4A] focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="offshore-staffing">Offshore Staffing</option>
                    <option value="project-outsourcing">Project Outsourcing</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2 text-sm">
                    Message <span className="text-[#C95B4A]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1a1a1a] text-white rounded-lg border border-gray-600 focus:border-[#C95B4A] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#C95B4A] px-8 py-4 text-white font-medium hover:bg-[#b34e3f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: "Poppins, system-ui, sans-serif", fontSize: "14px" }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-3">Contact Information</h2>
                <p className="text-gray-400 mb-8">
                  Choose the best way to reach us. We're available during business hours and always happy to help.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = info.link ? (
                    <a
                      href={info.link}
                      className="hover:text-[#C95B4A] transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <span>{info.content}</span>
                  );

                  return (
                    <div
                      key={index}
                      className="bg-[#2a2a2a] rounded-xl p-6 hover:bg-[#373737] transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`${info.color} flex-shrink-0`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                          <p className="text-gray-300 text-sm">{content}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Additional Info Card */}
              <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl p-8 border border-gray-700">
                <div className="flex items-start gap-4">
                  <MessageSquare className="w-6 h-6 text-[#C95B4A] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Quick Response</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-[#2a2a2a] rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/ezybuilds.aec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#C95B4A] transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/ezy.builds/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#C95B4A] transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/ezybuilds/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#C95B4A] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
