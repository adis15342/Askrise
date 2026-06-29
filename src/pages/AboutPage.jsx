import React from 'react';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__image-container">
          <div className="about-hero__text-wrapper">
             <p className="about-hero__eyebrow">Askrise Consultants</p>
             <h1 className="about-hero__title">Reporting on our impact</h1>
          </div>
          <img
            src="https://i.postimg.cc/ZKCdqgJS/about.jpg"
            alt="About ASKrise"
            className="about-hero__image"
          />
        </div>
        <div className="about-hero__summary">
          <h3>Empowering businesses with integrated consulting solutions to drive growth, ensure compliance, and navigate complex regulatory landscapes.</h3>
        </div>
      </section>

      {/* Content Section */}
      <section className="about-content">
        <div className="about-content__inner">
          <img src="/images/company_logo.png" alt="Company Logo" className="about-content__logo" />
          <p>
            ASKrise Consultants is a premier consulting firm delivering end-to-end solutions across India's most dynamic and high-impact industries—including e-commerce, tourism & hospitality, information technology & BPM, manufacturing, healthcare, renewable energy, and infrastructure. With a forward-thinking approach and deep domain expertise, we empower businesses to navigate complexity, drive innovation, and achieve sustained growth.
          </p>
          <p>
            We offer a comprehensive suite of services that covers the full spectrum of strategic advisory, financial consultancy, and legal compliance. Our seasoned professionals bring in-depth knowledge across both direct and indirect taxation, including GST advisory, international taxation, transfer pricing, tax planning, and statutory audits.
          </p>
          <h3>Why ASKrise Consultants?</h3>
          <ul>
            <li><strong>Integrated Expertise –</strong> One-stop solutions combining tax, legal, financial, and business advisory services under one roof.</li>
            <li><strong>Client-Centric Approach –</strong> Customized strategies tailored to your industry, size, and long-term objectives.</li>
            <li><strong>Proven Results –</strong> A track record of enabling organizations to scale faster, operate compliantly, and compete globally.</li>
          </ul>
          <p>
            On the legal front, ASKrise Consultants offers robust support in areas such as regulatory compliance, corporate structuring, commercial contracts, joint ventures, cross-border collaborations, and sector-specific legal frameworks.
          </p>
          <p>
            In addition, our consulting capabilities extend to market research and feasibility studies, mergers & acquisitions, business process transformation, and functional outsourcing—delivering insight-driven, execution-ready solutions.
          </p>
          <p>
            We work with startups, SMEs, and large enterprises alike—bringing clarity to decision-making, precision to execution, and agility to change management.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
