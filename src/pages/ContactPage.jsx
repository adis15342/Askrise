import React, { useState } from 'react';
import '../styles/ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate form submission
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      {/* Hero Image */}
      <section className="contact-hero">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="https://static.vecteezy.com/system/resources/previews/011/705/128/large_2x/close-up-of-contact-us-word-photo.jpg"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/011/705/128/large_2x/close-up-of-contact-us-word-photo.jpg"
            alt="Contact Us"
            className="contact-hero__image"
          />
        </picture>
        <div className="contact-hero__overlay">
          <h1>Contact Us</h1>
          <p>We're here to help and answer any question you might have.</p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="contact-details">
        <div className="contact-details__container">
          <div className="contact-detail-item">
            <i className="bx bx-map"></i>
            <div>
              <h3>Our Address</h3>
              <p>C-38A, UGF, Sewak Park, Uttam Nagar, New Delhi – 110059</p>
            </div>
          </div>
          <div className="contact-detail-item">
            <i className="bx bx-phone"></i>
            <div>
              <h3>Call Us</h3>
              <p>+91 9466773327</p>
              <p>+91 9718550508</p>
            </div>
          </div>
          <div className="contact-detail-item">
            <i className="bx bx-envelope"></i>
            <div>
              <h3>Email Us</h3>
              <p>ASKRISECONSULTANTS@GMAIL.COM</p>
            </div>
          </div>
          <div className="contact-detail-item">
            <i className="bx bx-time"></i>
            <div>
              <h3>Opening Hours</h3>
              <p>Open 24*7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <h2 className="section-title">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name<span className="required">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email<span className="required">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Your Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message<span className="required">*</span></label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-submit-btn" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message'}
            </button>
            {sent && <p className="form-success">Message sent successfully!</p>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
