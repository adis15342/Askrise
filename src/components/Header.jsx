import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationData } from '../data/navigationData';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNavIndex, setActiveNavIndex] = useState(null); // 1 = Industries, 2 = Services, null = none
  const [currentLevel, setCurrentLevel] = useState(""); // "", "1", "2", "3"
  const [activeLevelTwoId, setActiveLevelTwoId] = useState("");
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const location = useLocation();

  // Track window resize dynamically for responsive rendering
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isDesktop = windowWidth > 991;

  // Auto-close menu if resizing to desktop
  useEffect(() => {
    if (isDesktop) {
      setMenuOpen(false);
    }
  }, [isDesktop]);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setActiveNavIndex(null);
    setCurrentLevel("");
    setActiveLevelTwoId("");
  }, [location]);

  // Handle body scroll locking on mobile
  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add('disable-scroll-mobile');
    } else {
      document.documentElement.classList.remove('disable-scroll-mobile');
    }
    return () => {
      document.documentElement.classList.remove('disable-scroll-mobile');
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setActiveNavIndex(null);
      setCurrentLevel("");
      setActiveLevelTwoId("");
    } else {
      setCurrentLevel("1");
    }
  };

  const handleLevel1Click = (e, index) => {
    e.preventDefault();
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    if (activeNavIndex === index) {
      // Toggle off
      setActiveNavIndex(null);
      setCurrentLevel(menuOpen ? "1" : "");
      setActiveLevelTwoId("");
    } else {
      setActiveNavIndex(index);
      setCurrentLevel("2");
      setActiveLevelTwoId("");

      if (index === 1) {
        setActiveLevelTwoId("consumer_markets-subnav-1-2");
      } else if (index === 2) {
        setActiveLevelTwoId("alliances-subnav-2-2");
      }
    }
  };

  const handleLevel1Hover = (index) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    const timer = setTimeout(() => {
      setActiveNavIndex(index);
      setCurrentLevel("2");
      setActiveLevelTwoId("");
    }, 200);
    setHoverTimeout(timer);
  };

  const handleLevel1Leave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setHoverTimeout(null);
  };

  const handleCategoryClick = (e, id) => {
    e.preventDefault();
    setActiveLevelTwoId(id);
    setCurrentLevel("3");
  };

  const handleBackToLevel2 = (e) => {
    e.preventDefault();
    setCurrentLevel("2");
    setActiveLevelTwoId("");
  };

  const handleBackToLevel1 = (e) => {
    e.preventDefault();
    setCurrentLevel("1");
    setActiveNavIndex(null);
    setActiveLevelTwoId("");
  };

  const closeAll = () => {
    setMenuOpen(false);
    setActiveNavIndex(null);
    setCurrentLevel("");
    setActiveLevelTwoId("");
  };

  // Industries Level 2 IDs mapping
  const industriesIds = [
    "consumer_markets-subnav-1-2",
    "energy__utilities_and_resources-subnav-1-3",
    "financial_services-subnav-1-4",
    "government_and_public_sector-subnav-1-5",
    "health_industries-subnav-1-6",
    "industrials_and_services-subnav-1-7",
    "private_equity_and_principal_investors-subnav-1-8"
  ];

  // Services Level 2 IDs mapping
  const servicesIds = [
    "alliances-subnav-2-2",
    "artificial_intelligence-subnav-2-3",
    "audit_and_assurance_services-subnav-2-4",
    "business_model_reinvention-subnav-2-5",
    "business_transformation-subnav-2-6",
    "consulting-subnav-2-7",
    "crisis_management-subnav-2-8",
    "deals-subnav-2-9",
    "entrepreneurial_and_private_business-subnav-2-10",
    "family_business-subnav-2-11"
  ];

  // Compute CSS classes dynamically to match PHP/AEM CSS behaviour
  const containerClasses = [
    'headerv2-container',
    menuOpen ? 'nav-open' : '',
    activeNavIndex ? 'headerv2--dark' : '',
    menuOpen && !isDesktop ? 'headerv2--dark headerv2--dark--mobile' : ''
  ].filter(Boolean).join(' ');

  const hamburgerClasses = [
    'slim-hamburger-ico',
    menuOpen ? 'open' : ''
  ].filter(Boolean).join(' ');

  const sublevelSlideClasses = [
    'slimheader-sublevel-slide',
    activeNavIndex ? 'active subnav-fade' : 'subnav-fadeout'
  ].filter(Boolean).join(' ');

  const level2Classes = [
    'slimnav-level2',
    'slimheader-slide-nav',
    currentLevel === "2" ? 'is-active' : '',
    currentLevel === "3" ? 'lv2-fade' : ''
  ].filter(Boolean).join(' ');

  const level3Classes = [
    'slimnav-level3',
    currentLevel === "3" ? 'is-active' : ''
  ].filter(Boolean).join(' ');

  const activeSectionTitle = activeNavIndex === 1 ? 'Industries' : activeNavIndex === 2 ? 'Services' : '';
  const activeGroup = activeNavIndex === 1
    ? navigationData.industries.find((_, idx) => industriesIds[idx] === activeLevelTwoId) || null
    : activeNavIndex === 2
      ? navigationData.services.find((_, idx) => servicesIds[idx] === activeLevelTwoId) || null
      : null;

  return (
    <div className="ixfsection experiencefragment">
      <div className="mod-ixf-page-section"></div>

      <section id="header" style={{ height: 'auto' }} className="cmp-experiencefragment cmp-experiencefragment--gx-en fullwidth ">
        <div id="container-a8923941b5" className="cmp-container">
          <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
            <div className="slim-page-header-v2 parbase aem-GridColumn aem-GridColumn--default--12">

              <div 
                className={containerClasses}
                data-current-level={currentLevel}
              >
                <header className="slimheader-v2 mod__header-v2">
                  {/* Logo link */}
                  <Link 
                    id="logoUrl" 
                    tabIndex="3" 
                    to="/" 
                    aria-label=" homepage" 
                    className="slim-logo search-hide levelOneLink"
                    onClick={closeAll}
                  />

                  {/* Hamburger menu */}
                  <div 
                    tabIndex="0" 
                    id="slim-hamburger" 
                    className={hamburgerClasses}
                    aria-label="Menu"
                    onClick={toggleMenu}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  {/* Navigation Panel */}
                  <div 
                    className="slim-navigation" 
                    style={{ 
                      color: "black",
                      fontWeight: 600,
                      opacity: isDesktop || menuOpen ? 1 : 0, 
                      display: isDesktop || menuOpen ? 'block' : 'none', 
                      marginTop: '0px',
                      height: isDesktop ? 'auto' : (menuOpen ? 'calc(100vh - 62px)' : '0px'),
                      overflow: isDesktop ? 'visible' : 'auto'
                    }}
                  >
                    <nav className="nav-primary search-hide" aria-label="Main Navigation">
                      <Link to="/about" className={`levelOneLink ${location.pathname === '/about' ? 'is-active active' : ''}`} onClick={closeAll}>About</Link>
                      
                      <a 
                        href="#"
                        className={`levelOneLink ${activeNavIndex === 1 ? 'is-active active' : ''}`}
                        data-has-subnav="true"
                        data-nav-index="1"
                        onMouseEnter={() => handleLevel1Hover(1)}
                        onMouseLeave={handleLevel1Leave}
                        onClick={(e) => handleLevel1Click(e, 1)}
                      >
                        Industries
                      </a>

                      <a 
                        href="#"
                        className={`levelOneLink ${activeNavIndex === 2 ? 'is-active active' : ''}`}
                        data-has-subnav="true"
                        data-nav-index="2"
                        onMouseEnter={() => handleLevel1Hover(2)}
                        onMouseLeave={handleLevel1Leave}
                        onClick={(e) => handleLevel1Click(e, 2)}
                      >
                        Services
                      </a>

                      <Link to="/news" className={`levelOneLink ${location.pathname === '/news' ? 'is-active active' : ''}`} onClick={closeAll}>News & Events</Link>
                      <Link to="/contact" className={`levelOneLink ${location.pathname === '/contact' ? 'is-active active' : ''}`} onClick={closeAll}>Contact Us</Link>
                    </nav>

                    <nav className="nav-secondary search-hide" aria-label="Secondary Navigation">
                      <div className="location-options">
                        <div className="lo-backsplash"></div>
                        <span className="option-country levelOneLink"></span>
                        <span className="option-language"></span>
                      </div>
                    </nav>
                  </div>
                </header>

                {/* Sublevel slide panel */}
                <div 
                  className={sublevelSlideClasses}
                  data-nav-level={currentLevel === "3" ? "3" : "2"}
                  style={{ 
                    color: "black",
                    fontWeight: 600,
                    height: activeNavIndex ? 'auto' : '0px', 
                    display: activeNavIndex ? 'block' : 'none',
                    transition: 'height .3s ease-in-out, opacity .3s ease-in-out'
                  }}
                >
                  <div className="slide-shadow search-hide"></div>
                  <div className="slide-bg" onClick={closeAll}></div>

                  {/* ================= INDUSTRIES SUBLEVEL ================= */}
                  <div 
                    id="industries-subnav-1" 
                    className={`sublevel-container search-hide ${activeNavIndex === 1 ? 'show-subnav' : ''}`}
                    style={{ display: activeNavIndex === 1 ? 'block' : 'none' }}
                  >
                       <button className="slimheader-close search-hide" aria-label="Menu Close" onClick={closeAll}></button>

                    <div className="sublevel-navs">
                      {currentLevel !== "3" ? (
                        <div className={level2Classes}>
                          <div className="slide-nav-contain">
                            {/* <div className="sublevel-title-container search-hide">
                              <div className="slimnav-mobile-header" onClick={handleBackToLevel1}>
                                <p> Menu</p>
                              </div>
                              <div className="slimheader-breadcrumb is-hidden">
                                <a href="#" onClick={handleBackToLevel1}>Industries</a>
                              </div>
                              <a href="#" className="lv2-label" onClick={(e) => e.preventDefault()}>Industries</a>
                            </div>
                             */}
                            <nav>
                              {navigationData.industries.map((group, idx) => {
                                const groupID = industriesIds[idx] || `ind-group-${idx}`;
                                return (
                                  <button
                                    type="button"
                                    key={idx}
                                    className={`levelTwoLink has-lv3 ${activeLevelTwoId === groupID ? 'is-active selected' : ''}`} 
                                    data-breadcrumb="Industries"
                                    aria-controls={groupID}
                                    onClick={(e) => handleCategoryClick(e, groupID)}
                                  >
                                    <span>{group.category}</span>
                                    <span className="nav-arrow" aria-hidden="true">›</span>
                                  </button>
                                );
                              })}
                            </nav>
                          </div>
                        </div>
                      ) : (
                        <div className={level3Classes}>
                          <div className="slide-nav-contain">
                            <div className="sublevel-title-container search-hide">
                              <button className="nav-back-button" type="button" onClick={handleBackToLevel2} aria-label={`Back to ${activeSectionTitle}`}>
                                ←
                              </button>
                              <div className="slimheader-breadcrumb">
                                <a href="#" onClick={handleBackToLevel2}>{activeGroup?.category || 'Industries'}</a>
                              </div>
                            </div>
                            <nav>
                              {activeGroup?.items.map((item, i) => (
                                <Link 
                                  key={i} 
                                  className={`levelThreeLink ${location.pathname === item.path ? 'is-active' : ''}`} 
                                  to={item.path}
                                  onClick={closeAll}
                                >
                                  <span>{item.name}</span>
                                  <span className="nav-arrow" aria-hidden="true">›</span>
                                </Link>
                              ))}
                            </nav>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ================= SERVICES SUBLEVEL ================= */}
                  <div 
                    id="services-subnav-2" 
                    className={`sublevel-container search-hide ${activeNavIndex === 2 ? 'show-subnav' : ''}`}
                    style={{ display: activeNavIndex === 2 ? 'block' : 'none' }}
                  >
                                        <button className="slimheader-close search-hide" aria-label="Menu Close" onClick={closeAll}></button>

                    <div className="sublevel-navs">
                      {currentLevel !== "3" ? (
                        <div className={level2Classes}>
                          <div className="slide-nav-contain">
                            {/* <div className="sublevel-title-container search-hide">
                              <div className="slimnav-mobile-header" onClick={handleBackToLevel1}>
                                <p> Menu</p>
                              </div>
                              <div className="slimheader-breadcrumb is-hidden">
                                <a href="#" onClick={handleBackToLevel1}>Services</a>
                              </div>
                              <a href="#" className="lv2-label" onClick={(e) => e.preventDefault()}>Services</a>
                            </div>
                             */}
                            <nav>
                              {navigationData.services.map((group, idx) => {
                                const groupID = servicesIds[idx] || `svc-group-${idx}`;
                                return (
                                  <button
                                    type="button"
                                    key={idx}
                                    className={`levelTwoLink has-lv3 ${activeLevelTwoId === groupID ? 'is-active selected' : ''}`} 
                                    data-breadcrumb="Services"
                                    aria-controls={groupID}
                                    onClick={(e) => handleCategoryClick(e, groupID)}
                                  >
                                    <span>{group.category}</span>
                                    <span className="nav-arrow" aria-hidden="true">›</span>
                                  </button>
                                );
                              })}
                            </nav>
                          </div>
                        </div>
                      ) : (
                        <div className={level3Classes}>

                          <div className="slide-nav-contain">
                            <div className="sublevel-title-container search-hide">
                              <button className="nav-back-button" type="button" onClick={handleBackToLevel2} aria-label={`Back to ${activeSectionTitle}`}>
                                ←
                              </button>
                              <div className="slimheader-breadcrumb">
                                <a href="#" onClick={handleBackToLevel2}>{activeGroup?.category || 'Services'}</a>
                              </div>
                            </div>
                            <nav>
                              {activeGroup?.items.map((item, i) => (
                                <Link 
                                  key={i} 
                                  className={`levelThreeLink ${location.pathname === item.path ? 'is-active' : ''}`} 
                                  to={item.path}
                                  onClick={closeAll}
                                >
                                  <span>{item.name}</span>
                                  <span className="nav-arrow" aria-hidden="true">›</span>
                                </Link>
                              ))}
                            </nav>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
