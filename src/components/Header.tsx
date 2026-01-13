 import { useEffect, useId, useRef, useState } from "react";
 import { Link } from "react-router-dom";
 
 const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [hireResourcesOpen, setHireResourcesOpen] = useState(false);
  const [desktopSolutionsOpen, setDesktopSolutionsOpen] = useState(false);
  const [desktopHireResourcesOpen, setDesktopHireResourcesOpen] = useState(false);
  const desktopSolutionsCloseTimer = useRef<number | null>(null);
  const desktopHireResourcesCloseTimer = useRef<number | null>(null);
  const smId = useId().replace(/:/g, "");

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

  const openDesktopHireResources = () => {
    if (desktopHireResourcesCloseTimer.current) {
      window.clearTimeout(desktopHireResourcesCloseTimer.current);
      desktopHireResourcesCloseTimer.current = null;
    }
    setDesktopHireResourcesOpen(true);
  };

  const scheduleCloseDesktopHireResources = () => {
    if (desktopHireResourcesCloseTimer.current) {
      window.clearTimeout(desktopHireResourcesCloseTimer.current);
    }
    desktopHireResourcesCloseTimer.current = window.setTimeout(() => {
      setDesktopHireResourcesOpen(false);
      desktopHireResourcesCloseTimer.current = null;
    }, 500);
  };

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
                <ul id={`menu-1-${smId}`} className="elementor-nav-menu flex items-center gap-6" data-smartmenus-id={smId}>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-4089 current_page_item menu-item-4128">
                    <Link
                      to="/"
                      aria-current="page"
                      className="elementor-item elementor-item-active !text-white hover:!text-[#f2572b] transition-colors text-sm font-medium"
                    >
                      Home
                    </Link>
                  </li>

                  <li
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3825 relative"
                    onMouseEnter={openDesktopSolutions}
                    onMouseLeave={scheduleCloseDesktopSolutions}
                  >
                    <a
                      href="#"
                      className="elementor-item elementor-item-anchor has-submenu !text-white hover:!text-[#f2572b] transition-colors text-sm font-medium flex items-center gap-1"
                      id={`sm-${smId}-1`}
                      aria-haspopup="true"
                      aria-controls={`sm-${smId}-2`}
                      aria-expanded={desktopSolutionsOpen}
                      onClick={(e) => e.preventDefault()}
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
                    </a>
                    <ul
                      className={`sub-menu elementor-nav-menu--dropdown absolute left-0 top-full mt-0 min-w-[220px] rounded-[12px] bg-[#171717] py-2 shadow-[0px_0px_28px_0px_rgba(0,0,0,0.18)] ${desktopSolutionsOpen ? "!block" : "!hidden"}`}
                      id={`sm-${smId}-2`}
                      role="group"
                      aria-hidden={!desktopSolutionsOpen}
                      aria-labelledby={`sm-${smId}-1`}
                      aria-expanded={desktopSolutionsOpen}
                    >
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3826">
                        <Link
                          to="/outsource-architecture-construction-staffing"
                          className="elementor-sub-item block px-4 py-2 !text-white hover:!text-[#f2572b] transition-colors"
                        >
                          Extend Your Team
                        </Link>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3827">
                        <Link
                          to="/outsource-3d-architectural-rendering-bim-cad"
                          className="elementor-sub-item block px-4 py-2 !text-white hover:!text-[#f2572b] transition-colors"
                        >
                          Get Your Projects Done
                        </Link>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4759">
                        <Link
                          to="/outsource-construction-services"
                          className="elementor-sub-item block px-4 py-2 !text-[#f2572b] hover:!text-[#e04a1f] transition-colors text-sm font-medium"
                        >
                          Outsource Projects
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3828 relative"
                    onMouseEnter={openDesktopHireResources}
                    onMouseLeave={scheduleCloseDesktopHireResources}
                  >
                    <a
                      href="#"
                      className="elementor-item elementor-item-anchor has-submenu !text-white hover:!text-[#f2572b] transition-colors text-sm font-medium flex items-center gap-1"
                      id={`sm-${smId}-3`}
                      aria-haspopup="true"
                      aria-controls={`sm-${smId}-4`}
                      aria-expanded={desktopHireResourcesOpen}
                      onClick={(e) => e.preventDefault()}
                    >
                      Hire Resources
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
                    </a>
                    <ul
                      className={`sub-menu elementor-nav-menu--dropdown absolute left-0 top-full mt-0 min-w-[220px] rounded-[12px] bg-[#171717] py-2 shadow-[0px_0px_28px_0px_rgba(0,0,0,0.18)] ${desktopHireResourcesOpen ? "!block" : "!hidden"}`}
                      id={`sm-${smId}-4`}
                      role="group"
                      aria-hidden={!desktopHireResourcesOpen}
                      aria-labelledby={`sm-${smId}-3`}
                      aria-expanded={desktopHireResourcesOpen}
                    >
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3829">
                        <Link
                          to="/hire-offshore-construction-cost-estimators"
                          className="elementor-sub-item block px-4 py-2 !text-white hover:!text-[#f2572b] transition-colors"
                        >
                          Construction Estimator
                        </Link>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4034">
                        <Link
                          to="/hire-offshore-cad-drafters"
                          className="elementor-sub-item block px-4 py-2 !text-white hover:!text-[#f2572b] transition-colors"
                        >
                          CAD Drafter
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4 min-w-[240px] justify-end">
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/ezybuilds.aec"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#171717] flex items-center justify-center hover:bg-[#1f1f1f] transition-colors"
                aria-label="Facebook"
              >
                <svg aria-hidden="true" className="w-5 h-5 fill-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ezy.builds/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#171717] flex items-center justify-center hover:bg-[#1f1f1f] transition-colors"
                aria-label="Instagram"
              >
                <svg aria-hidden="true" className="w-5 h-5 fill-white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/ezybuilds/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#171717] flex items-center justify-center hover:bg-[#1f1f1f] transition-colors"
                aria-label="LinkedIn"
              >
                <svg aria-hidden="true" className="w-5 h-5 fill-white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
            </div>

            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-[#f2572b] text-white font-medium hover:bg-[#e04a1f] transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>

          <div className="elementor-menu-toggle lg:hidden">
            <div
              className="elementor-menu-toggle"
              role="button"
              tabIndex={0}
              aria-label="Menu Toggle"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setMobileMenuOpen((v) => !v);
                }
              }}
            >
              <svg
                aria-hidden="true"
                role="presentation"
                className="elementor-menu-toggle__icon--open e-font-icon-svg e-eicon-menu-bar"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
                style={mobileMenuOpen ? { display: "none" } : undefined}
              >
                <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z" />
              </svg>
              <svg
                aria-hidden="true"
                role="presentation"
                className="elementor-menu-toggle__icon--close e-font-icon-svg e-eicon-close"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
                style={mobileMenuOpen ? undefined : { display: "none" }}
              >
                <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z" />
              </svg>
            </div>
          </div>
        </div>

        <nav
          className="elementor-nav-menu--dropdown elementor-nav-menu__container lg:hidden"
          aria-hidden={!mobileMenuOpen}
          style={mobileMenuOpen ? undefined : { display: "none" }}
        >
          <ul id={`menu-2-${smId}`} className="elementor-nav-menu" data-smartmenus-id={`${smId}-m`}>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-4089 current_page_item menu-item-4128">
              <Link
                to="/"
                aria-current="page"
                className="elementor-item elementor-item-active"
                tabIndex={-1}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3825">
              <a
                href="#"
                className="elementor-item elementor-item-anchor has-submenu"
                tabIndex={-1}
                id={`sm-${smId}-m-1`}
                aria-haspopup="true"
                aria-controls={`sm-${smId}-m-2`}
                aria-expanded={solutionsOpen}
                onClick={(e) => {
                  e.preventDefault();
                  setSolutionsOpen((v) => !v);
                }}
              >
                Solutions
                <span className="sub-arrow">
                  <svg
                    aria-hidden="true"
                    className="e-font-icon-svg e-fas-caret-down"
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                  </svg>
                </span>
              </a>
              <ul
                className="sub-menu elementor-nav-menu--dropdown"
                id={`sm-${smId}-m-2`}
                role="group"
                aria-hidden={!solutionsOpen}
                aria-labelledby={`sm-${smId}-m-1`}
                aria-expanded={solutionsOpen}
                style={solutionsOpen ? undefined : { display: "none" }}
              >
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3826">
                  <Link
                    to="/outsource-architecture-construction-staffing"
                    className="elementor-sub-item"
                    tabIndex={-1}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Extend Your Team
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3827">
                  <Link
                    to="/outsource-3d-architectural-rendering-bim-cad"
                    className="elementor-sub-item"
                    tabIndex={-1}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Your Projects Done
                  </Link>
                </li>
              </ul>
            </li>

            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3828">
              <a
                href="#"
                className="elementor-item elementor-item-anchor has-submenu"
                tabIndex={-1}
                id={`sm-${smId}-m-3`}
                aria-haspopup="true"
                aria-controls={`sm-${smId}-m-4`}
                aria-expanded={hireResourcesOpen}
                onClick={(e) => {
                  e.preventDefault();
                  setHireResourcesOpen((v) => !v);
                }}
              >
                Hire Resources
                <span className="sub-arrow">
                  <svg
                    aria-hidden="true"
                    className="e-font-icon-svg e-fas-caret-down"
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                  </svg>
                </span>
              </a>
              <ul
                className="sub-menu elementor-nav-menu--dropdown"
                id={`sm-${smId}-m-4`}
                role="group"
                aria-hidden={!hireResourcesOpen}
                aria-labelledby={`sm-${smId}-m-3`}
                aria-expanded={hireResourcesOpen}
                style={hireResourcesOpen ? undefined : { display: "none" }}
              >
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3829">
                  <Link
                    to="/hire-offshore-construction-cost-estimators"
                    className="elementor-sub-item"
                    tabIndex={-1}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Construction Estimator
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4034">
                  <Link
                    to="/hire-offshore-cad-drafters"
                    className="elementor-sub-item"
                    tabIndex={-1}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    CAD Drafter
                  </Link>
                </li>
              </ul>
            </li>

            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4759">
              <Link
                to="/outsource-construction-services"
                className="elementor-item"
                tabIndex={-1}
                onClick={() => setMobileMenuOpen(false)}
              >
                Outsource Projects
              </Link>
            </li>

            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3841">
              <Link
                to="/contact-us"
                className="elementor-item"
                tabIndex={-1}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
 };

export default Header;
