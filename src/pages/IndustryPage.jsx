import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { industryData } from '../data/industryData';
import '../styles/IndustryPage.css';

const IndustryPage = () => {
  const { page } = useParams();
  const data = industryData[page];
  const [activeTab, setActiveTab] = useState(0);

  if (!data) return <Navigate to="/" replace />;

  return (
    <div className="industry-page">
      {/* Hero Section */}
      <section className="industry-hero">
        <div className="industry-hero__content">
          <p className="industry-hero__subtitle">
            Innovative solutions to help you drive the future of {data.title}.
          </p>
          <h1 className="industry-hero__title">{data.title}</h1>
        </div>
        <div className="industry-hero__image-wrapper">
          <img src={data.images[0]} alt={data.title} className="industry-hero__image" />
        </div>
      </section>

      {/* Overview Section */}
      <section className="industry-overview">
        <div className="industry-overview__text">
          <p style={{ textAlign: "justify", fontSize: "1.2rem" }}>
            {data.paragraphs[0]}
          </p>
          <p style={{ textAlign: "justify", fontSize: "1.2rem" }}>
            {data.paragraphs[1]}
          </p>
          {/* <p style={{ textAlign: "justify", fontSize: "1.2rem" }}>
            {data.paragraphs[2]}
          </p> */}
        </div>
        <div className="industry-overview__image">
          <img src={data.images[1]} alt={data.title} />
        </div>
      </section>

      {/* Trends Section with Tabs */}
      <section className="industry-trends">
        <h2>{data.headings[1]}</h2>
        <p style={{ textAlign: "justify", fontSize: "1.2rem" }}>
          {data.paragraphs[3]}
        </p>

        <div className="industry-tabs">
          <div className="industry-tabs__nav">
            {data.summaries.map((summary, index) => (
              <button
                key={index}
                className={`industry-tabs__tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {summary.heading}
              </button>
            ))}
          </div>
          <div className="industry-tabs__content">
            <h3>{data.summaries[activeTab].heading}</h3>
            <p style={{ textAlign: "justify", fontSize: "1.2rem" }}>
              {data.summaries[activeTab].paragraph}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryPage;
