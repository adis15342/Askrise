import React from 'react';
import { blogsData } from '../data/newsData';
import '../styles/NewsPage.css';

const NewsPage = () => {
  return (
    <div className="news-page">
      {/* Hero Section */}
      <section className="news-hero">
        <img
          src=".\images\testing.jpg"
          alt="News & Events"
          className="news-hero__image"
        />
        <div className="news-hero__overlay">
          <h1 className="news-hero__title">News & Events</h1>
        </div>
      </section>

      {/* Blog Grid */}
      <main className="news-main">
        <div className="news-container">
          <h2 className="news-section-title">Latest Articles</h2>
          <div className="news-grid">
            {blogsData.map((blog, index) => (
              <article key={index} className="news-card">
                <div className="news-card__image-container">
                  <img src={blog.image} alt={blog.title} className="news-card__image" />
                </div>
                <div className="news-card__body">
                  <h4 className="news-card__title">{blog.title}</h4>
                  <p className="news-card__description">{blog.description}</p>
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="news-card__link"
                  >
                    Read more <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewsPage;
