// HomePage.jsx – Converted from Laravel Blade view (home.blade.php) to React
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import '../styles/syc-custom-hero.css';
import '../styles/syc.css';
import CombinedScrollSections  from '../components/CombinedScrollSections';


// Simple asset helper similar to Laravel's asset()
const asset = (path) => `/images/${path}`;

const HomePage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  // Track scroll to drive layer opacity / stat animation (mirrors Blade JS)
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrolled = -rect.top;
      const maxScroll = containerHeight - windowHeight;
      const progress = Math.max(0, Math.min(100, (scrolled / maxScroll) * 100));
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // The local React homepage uses the included assets directly, so external
  // Blade-only scripts are omitted here to avoid broken requests in Vite.

  // Opacity calculations (same as original Blade script)
  let layer1Opacity = 1;
  if (scrollProgress > 25) layer1Opacity = Math.max(0, 1 - (scrollProgress - 25) / 10);
  let layer2Opacity = 0;
  if (scrollProgress >= 30 && scrollProgress <= 70) {
    if (scrollProgress < 40) layer2Opacity = (scrollProgress - 30) / 10;
    else if (scrollProgress > 60) layer2Opacity = Math.max(0, 1 - (scrollProgress - 60) / 10);
    else layer2Opacity = 1;
  }
  let layer3Opacity = 0;
  if (scrollProgress > 65) layer3Opacity = Math.min(1, (scrollProgress - 65) / 10);

  // Stat count simulation (0‑6 h) used in the custom hero section
  let statValue = 0;
  if (scrollProgress >= 35 && scrollProgress <= 65) {
    const factor = (scrollProgress - 35) / 20;
    statValue = Math.min(6, Math.floor(factor * 6));
  } else if (scrollProgress > 65) {
    statValue = 6;
  }

  return (
   
    <div className="home-page" ref={containerRef}>
      {/* --------------------------------------------------- */}
      {/* Promotion – Intro video (mirrors Blade #promotion)   */}
      {/* --------------------------------------------------- */}
          <div className="page-container">
            <CombinedScrollSections />
          </div>


      
      {/* --------------------------------------------------- */}
      {/* Why You Connect With Us – Grid of cards     */}
      {/* --------------------------------------------------- */}
      <section className="home-connect-section">
        <div className="home-section-banner">Why You Connect With Us</div>
        <div className="home-connect-grid container">
          <div className="connect-card">
            <img src={asset('refresh-page-option.png')} alt="Updates Icon" />
            <h3>Latest Updates</h3>
            <p>Essential updates for your business growth</p>
          </div>
          <div className="connect-card">
            <img src={asset('file.png')} alt="RFI/RFQ/RFP Icon" />
            <h3>RFI/RFQ/RFP</h3>
            <p>Streamlined process for sourcing and vendor engagement</p>
          </div>
          <div className="connect-card">
            <img src={asset('globe.png')} alt="Global Reach Icon" />
            <h3>International Network</h3>
            <p>Engage with global organizations and markets</p>
          </div>
          <div className="connect-card">
            <img src={asset('membership.png')} alt="Membership Icon" />
            <h3>Community</h3>
            <p>Collaborate and exchange knowledge with professionals</p>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- */}
      {/* Who We Are – Text block                     */}
      {/* --------------------------------------------------- */}
      <section className="home-about-section">
        <div className="home-section-banner">Who we are</div>
        <div className="home-about-content container">
          <p>
            Askrise is a global network portal that connects public and private sector industries—including civil aviation, aerospace, defense, homeland security, and space—along with industry forums, chambers of commerce, government agencies, foreign trade councils, professionals, and students worldwide. We provide a safe and secure platform for seamless business communication between you, your customers, and your suppliers.
          </p>
          <p>
            Our goal is to help members access relevant information quickly and efficiently, empowering their business decisions. At Askrise, we believe in building strong, long‑term relationships founded on trust, collaboration, and customer satisfaction.
          </p>
          <p>
            We deliver a wide range of services, including advisory and compliance on regulations and taxation, market research, mergers and acquisitions, consulting, joint venture and foreign collaboration agreements, business process solutions, and outsourcing of functional activities.
          </p>
          <p>
            Together, we drive innovation, foster collaboration, and create opportunities across industries and borders.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------- */}
      {/* Featured Industries – Grid of images with links */}
      {/* --------------------------------------------------- */}
      <section className="home-featured-industries container">
        <div className="featured-industry-row">
          <div className="industry-row-image">
            <img src="https://i.postimg.cc/FRBG7hdV/Oil-Gas2.jpg" alt="Oil & Gas" />
          </div>
          <div className="industry-row-text">
            <h3><Link to="/industry/Oil_Gas">Oil &amp; Gas Industry</Link></h3>
            <p>Innovative solutions to help you drive the future of Oil &amp; Gas Industry.</p>
          </div>
        </div>
        <div className="featured-industry-row">
          <div className="industry-row-image">
            <img src="https://i.postimg.cc/X7y1BBgG/Information-Technology2.jpg" alt="Information Technology" />
          </div>
          <div className="industry-row-text">
            <h3><Link to="/industry/Information_Technology">Information Technology Industry</Link></h3>
            <p>Innovative solutions to help you drive the future of Information Technology Industry.</p>
          </div>
        </div>
        <div className="featured-industry-row">
          <div className="industry-row-image">
            <img src="https://i.postimg.cc/fRcHB4pM/Healthcare2.jpg" alt="Healthcare" />
          </div>
          <div className="industry-row-text">
            <h3><Link to="/industry/Healthcare">Healthcare Industry</Link></h3>
            <p>Innovative solutions to help you drive the future of Healthcare Industry.</p>
          </div>
        </div>
        <div className="featured-industry-row">
          <div className="industry-row-image">
            <img src="https://i.postimg.cc/gJQ51VDp/tourise1.jpg" alt="Tourism" />
          </div>
          <div className="industry-row-text">
            <h3><Link to="/industry/Tourism">Tourism Industry</Link></h3>
            <p>Innovative solutions to help you drive the future of Tourism Industry.</p>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- */}
      {/* Insights – Text + video (Blade #insights)   */}
      {/* --------------------------------------------------- */}
      <section className="home-insights-section">
        <div className="container insights-flex-container">
          <div className="insights-text-col">
            <h2>We anticipate what’s next so you can lead with confidence</h2>
            <p>
              From shifting markets to evolving regulations, the business landscape is being rewritten. Our consultants decode the trends that matter through 2035—so you can act decisively today, seize emerging opportunities, and shape a resilient, forward‑looking enterprise.
            </p>
            <Link to="/about" className="insights-learn-btn">Learn more</Link>
          </div>
          <div className="insights-media-col">
            <div className="insights-video-container">
              <video src={asset('frontvedio2.mp4')} autoPlay loop muted playsInline />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
