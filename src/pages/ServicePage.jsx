import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { serviceData } from '../data/serviceData';
import '../styles/ServicePage.css';

const ServicePage = () => {
  const { page } = useParams();
  const data = serviceData[page];
  const [activeTab, setActiveTab] = useState(0);

  if (!data) return <Navigate to="/" replace />;

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero" style={{ backgroundColor: '#db843c' }}>
        <div className="service-hero__content">
          <h1 className="service-hero__heading">{data.main_heading}</h1>
          <p className="service-hero__subheading">{data.title}</p>
        </div>
      </section>

      {/* Content Section 1 */}
      <section className="service-content">
        <div className="service-content__text">
          <p>{data.paragraphs[0]}</p>
          <p>{data.paragraphs[1]}</p>
        </div>
        <div className="service-content__image">
          <img src={data.images[1]} alt={data.heading} />
        </div>
      </section>

      {/* Content Section 2 */}
      <section className="service-content service-content--reverse">
        <div className="service-content__image">
          <img src={data.images[2]} alt={data.heading} />
        </div>
        <div className="service-content__text">
          <h2>{data.heading}</h2>
          <p>{data.paragraphs[2]}</p>
          <p>{data.paragraphs[3]}</p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="service-tabs-section">
        <h2>{data.title}</h2>
        <div className="service-tabs">
          <ul className="service-tabs__nav">
            {data.summaries.map((summary, index) => (
              <li
                key={index}
                className={`service-tabs__tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {summary.heading}
              </li>
            ))}
          </ul>
          <div className="service-tabs__content">
            <div className="service-tabs__panel">
              {data.summaries[activeTab].image && (
                <img
                  src={data.summaries[activeTab].image}
                  alt={data.summaries[activeTab].heading}
                  className="service-tabs__image"
                />
              )}
              <div className="service-tabs__text">
                <h3>{data.summaries[activeTab].heading}</h3>
                <p>{data.summaries[activeTab].paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta" style={{ backgroundColor: '#47c5f2' }}>
        <Link to="/contact" className="service-cta__link">
          <p className="service-cta__title">{data.title}</p>
          <p className="service-cta__heading">👉 For more information, Please Contact us.</p>
        </Link>
      </section>
    </div>
  );
};

export default ServicePage;
