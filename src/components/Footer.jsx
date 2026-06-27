import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* Social Top Bar */}
      <div className="site-footer__social-bar">
        <span>Get connected with us on social networks:</span>
        <div className="site-footer__social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://x.com/askrise2005?t=NLGjJO6I3NIyMP2nk1zJBQ&s=08" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://askriseconsultants.in/" target="_blank" rel="noopener noreferrer" aria-label="Google">
            <i className="bx bxl-google"></i>
          </a>
          <a href="https://www.instagram.com/askrise_consultants?igsh=bWYyeWhmY2tnanlp" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/askrise-consultants-41aa22374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="site-footer__content">
        <div className="site-footer__column">
          <h6>Askrise Consultants</h6>
          <hr />
          <p>Is a trusted partner in strategic, financial, and compliance solutions for startups and enterprises across India.</p>
        </div>

        <div className="site-footer__column">
          <h6>Industries</h6>
          <hr />
          <Link to="/industry/Food_Processing">Food Processing</Link>
          <Link to="/industry/Defence">Defence</Link>
          <Link to="/industry/Education_Technology">Education Technology</Link>
          <Link to="/industry/Automobile">Automobile</Link>
        </div>

        <div className="site-footer__column">
          <h6>Services</h6>
          <hr />
          <Link to="/service/Outsourcing_Model">Outsourcing Model</Link>
          <Link to="/service/International_Taxation">International Taxation</Link>
          <Link to="/service/Regulatory_Services">Regulatory Services</Link>
          <Link to="/service/Merger_Acquisitions">Merger Acquisitions</Link>
        </div>

        <div className="site-footer__column">
          <h6>Contact</h6>
          <hr />
          <p><i className="bx bx-home"></i> C-38A, UGF, Sewak Park, Uttam Nagar, New Delhi – 110059</p>
          <p><i className="bx bx-envelope"></i> ASKRISECONSULTANTS@GMAIL.COM</p>
          <p><i className="bx bx-phone"></i> +91 9466773327</p>
          <p><i className="bx bx-printer"></i> +91 9718550508</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="site-footer__bottom">
        <p>© 2025 All Rights Reserved. Website designed by Techno Items</p>
      </div>
    </footer>
  );
};

export default Footer;
