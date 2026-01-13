import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171717] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src="/logo.png"
                alt="remoteseat" 
                className="h-16 w-auto lg:h-20"
              />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We're a leading pre-construction service provider, offering high-quality, accurate services and dedicated remote resources to the AEC industry.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/ezybuilds.aec" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-[#171717] rounded-full flex items-center justify-center hover:bg-[#f2572b] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/ezy.builds/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-[#171717] rounded-full flex items-center justify-center hover:bg-[#f2572b] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/ezybuilds/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-[#171717] rounded-full flex items-center justify-center hover:bg-[#f2572b] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Contact Details</h4>
            <div className="space-y-4">
              <a 
                href="tel:+15108617074" 
                className="flex items-center gap-3 text-gray-300 hover:text-[#f2572b] transition-colors"
              >
                <Phone className="w-5 h-5 text-orange-500" />
                <span>+1 (510) 861-7074</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                <span>2603 Camino Ramon, San Ramon, CA 94583</span>
              </div>
              <a 
                href="mailto:info@ezybuilds.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-[#f2572b] transition-colors"
              >
                <Mail className="w-5 h-5 text-orange-500" />
                <span>info@ezybuilds.com</span>
              </a>
            </div>
          </div>

          {/* Site Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Site Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/outsource-architecture-construction-staffing" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Extend Your AEC Team
                </Link>
              </li>
              <li>
                <Link to="/outsource-3d-architectural-rendering-bim-cad" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Get Your Projects Done
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="/privacy-policy" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 remoteseat. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <a href="/privacy-policy" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Privacy Policy
              </a>
              
              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-[#171717] rounded-full flex items-center justify-center hover:bg-[#f2572b] transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
