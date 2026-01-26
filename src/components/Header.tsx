import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [hireResourcesOpen, setHireResourcesOpen] = useState(false);
  const [desktopSolutionsOpen, setDesktopSolutionsOpen] = useState(false);
  const [desktopHireResourcesOpen, setDesktopHireResourcesOpen] = useState(false);
  const desktopSolutionsCloseTimer = useRef<number | null>(null);
  const desktopHireResourcesCloseTimer = useRef<number | null>(null);
  const smId = useId().replace(/:/g, "");
  const location = useLocation();

  useEffect(() => {
    const closeDesktopMenus = () => {
      if (desktopSolutionsCloseTimer.current) {
        window.clearTimeout(desktopSolutionsCloseTimer.current);
        desktopSolutionsCloseTimer.current = null;
      }
      if (desktopHireResourcesCloseTimer.current) {
        window.clearTimeout(desktopHireResourcesCloseTimer.current);
        desktopHireResourcesCloseTimer.current = null;
      }
      setDesktopSolutionsOpen(false);
      setDesktopHireResourcesOpen(false);
    };

    document.addEventListener("click", closeDesktopMenus);
    return () => {
      document.removeEventListener("click", closeDesktopMenus);
    };
  }, []);

  const openDesktopSolutions = () => {
    if (desktopSolutionsCloseTimer.current) {
      window.clearTimeout(desktopSolutionsCloseTimer.current);
      desktopSolutionsCloseTimer.current = null;
    }
    setDesktopSolutionsOpen(true);
  };

  const scheduleCloseDesktopSolutions = () => {
    if (desktopSolutionsCloseTimer.current) {
      window.clearTimeout(desktopSolutionsCloseTimer.current);
    }
    desktopSolutionsCloseTimer.current = window.setTimeout(() => {
      setDesktopSolutionsOpen(false);
      desktopSolutionsCloseTimer.current = null;
    }, 500);
  };

  // Helper for active link classes
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `elementor-item transition-colors text-sm font-medium ${
      isActive ? "!text-[#f2572b]" : "!text-white hover:!text-[#f2572b]"
    }`;

  const subNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `elementor-sub-item block px-4 py-2 transition-colors ${
      isActive ? "!text-[#f2572b] bg-white/5" : "!text-white hover:!text-[#f2572b]"
    }`;

  // Check if a parent route is active based on sub-routes
  const isSolutionsActive = 
    location.pathname.includes("/outsource-architecture-construction-staffing") || 
    location.pathname.includes("/outsource-3d-architectural-rendering-bim-cad") ||
    location.pathname.includes("/outsource-construction-services");

  return (
    <header className="ezy-header fixed top-0 left-0 right-0 z-50 bg-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          <Link to="/" className="flex items-center min-w-[200px]">
            <img
              src="/logo.png"
              alt="remoteseat"
              className="h-16 w-auto lg:h-20"
            />
          </Link>

          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div className="elementor-widget-container rounded-[60px] bg-[#171717] px-6 py-3">
              <nav
                aria-label="Menu"
                className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal"
              >
                <ul id={`menu-1-${smId}`} className="elementor-nav-menu flex items-center gap-6">
                  <li className="menu-item">
                    <NavLink
                      to="/"
                      className={navLinkClasses}
                      end
                    >
                      Home
                    </NavLink>
                  </li>

                  <li
                    className="menu-item menu-item-has-children relative"
                    onMouseEnter={openDesktopSolutions}
                    onMouseLeave={scheduleCloseDesktopSolutions}
                  >
                    <button
                      className={`elementor-item has-submenu transition-colors text-sm font-medium flex items-center gap-1 ${
                        isSolutionsActive ? "!text-[#f2572b]" : "!text-white hover:!text-[#f2572b]"
                      }`}
                    >
                      Solutions
                      <span className="sub-arrow">
                        <svg
                          aria-hidden="true"
                          className="e-font-icon-svg e-fas-caret-down w-3 h-3"
                          viewBox="0 0 320 512"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                        >
                          <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                        </svg>
                      </span>
                    </button>
                    <ul
                      className={`sub-menu absolute left-0 top-full mt-0 min-w-[220px] rounded-[12px] bg-[#171717] py-2 shadow-[0px_0px_28px_0px_rgba(0,0,0,0.18)] ${desktopSolutionsOpen ? "!block" : "!hidden"}`}
                    >
                      <li>
                        <NavLink
                          to="/outsource-architecture-construction-staffing/"
                          className={subNavLinkClasses}
                        >
                          Extend Your Team
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/outsource-3d-architectural-rendering-bim-cad/"
                          className={subNavLinkClasses}
                        >
                          Get Your Projects Done
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/outsource-construction-services/"
                          className={subNavLinkClasses}
                        >
                          Outsource Projects
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item">
                    <NavLink
                      to="/about-us"
                      className={navLinkClasses}
                    >
                      About Us
                    </NavLink>
                  </li>

                  <li className="menu-item">
                    <NavLink
                      to="/contact-us/"
                      className={navLinkClasses}
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4 min-w-[240px] justify-end">
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/profile.php?id=61586804408004" className="w-10 h-10 rounded-full bg-[#171717] flex items-center justify-center hover:bg-[#1f1f1f] transition-colors">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/remote-seat/about/?viewAsMember=true" className="w-10 h-10 rounded-full bg-[#171717] flex items-center justify-center hover:bg-[#1f1f1f] transition-colors">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
              </a>
            </div>

            <Link
              to="/contact-us/"
              className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-[#f2572b] text-white font-medium hover:bg-[#e04a1f] transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              className="elementor-menu-toggle"
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              {mobileMenuOpen ? (
                <svg className="w-8 h-8 fill-white" viewBox="0 0 1000 1000"><path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z" /></svg>
              ) : (
                <svg className="w-8 h-8 fill-white" viewBox="0 0 1000 1000"><path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z" /></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-6">
            <ul className="flex flex-col gap-4">
              <li><NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={navLinkClasses}>Home</NavLink></li>
              <li>
                <button onClick={() => setSolutionsOpen(!solutionsOpen)} className={`flex items-center gap-2 ${isSolutionsActive ? "text-[#f2572b]" : "text-white"}`}>
                  Solutions <svg className={`w-3 h-3 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} viewBox="0 0 320 512" fill="currentColor"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" /></svg>
                </button>
                {solutionsOpen && (
                  <ul className="pl-4 mt-2 flex flex-col gap-2 border-l border-white/10">
                    <li><NavLink to="/outsource-architecture-construction-staffing/" onClick={() => setMobileMenuOpen(false)} className={subNavLinkClasses}>Extend Your Team</NavLink></li>
                    <li><NavLink to="/outsource-3d-architectural-rendering-bim-cad/" onClick={() => setMobileMenuOpen(false)} className={subNavLinkClasses}>Get Your Projects Done</NavLink></li>
                    <li><NavLink to="/outsource-construction-services/" onClick={() => setMobileMenuOpen(false)} className={subNavLinkClasses}>Outsource Projects</NavLink></li>
                  </ul>
                )}
              </li>
              <li><NavLink to="/about-us" onClick={() => setMobileMenuOpen(false)} className={navLinkClasses}>About Us</NavLink></li>
              <li><NavLink to="/contact-us/" onClick={() => setMobileMenuOpen(false)} className={navLinkClasses}>Contact Us</NavLink></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;