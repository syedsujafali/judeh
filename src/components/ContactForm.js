'use client';

import { useState } from 'react';

export default function ContactForm({ subtitle = 'Please provide your contact information to consult with our expert team' }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Valuation', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact-form">
      <span style={{ color: 'var(--bento-gold)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.14em', display: 'block', marginBottom: '0.4rem' }}>
        Private Consultation
      </span>
      <h3 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--bento-text-main)', margin: 0, lineHeight: 1.15 }}>
        Initiate an Engagement
      </h3>
      <p style={{ color: 'var(--bento-text-muted)', fontSize: '0.975rem', marginTop: '0.65rem', marginBottom: '1.75rem' }}>
        {subtitle}
      </p>

      {submitted ? (
        <div style={{
          padding: '2.5rem 2rem',
          backgroundColor: 'var(--bento-gold-light)',
          borderLeft: '5px solid var(--bento-gold)',
          borderRadius: 'var(--radius-md)',
          textAlign: 'center',
          fontWeight: 700,
          color: 'var(--bento-dark)',
          lineHeight: 1.7
        }}>
          ✓ Thank you. Your inquiry has been transmitted to our senior team. We will be in contact shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="bento-form-group">
            <label className="bento-form-label" htmlFor="name">
              Full Name
            </label>
            <input 
              id="name"
              type="text" 
              required
              className="bento-form-control"
              placeholder="e.g. Eleanor Vance"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="bento-form-group">
            <label className="bento-form-label" htmlFor="email">
              Direct Email Address
            </label>
            <input 
              id="email"
              type="email" 
              required
              className="bento-form-control"
              placeholder="vance@institution.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="bento-form-group">
            <label className="bento-form-label" htmlFor="service">
              Advisory Practice Area
            </label>
            <select
              id="service"
              className="bento-form-control"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="Valuation">Real Estate Valuation &amp; Expert Consultation</option>
              <option value="Realtors">Realtors Team — Transaction Assistance</option>
              <option value="Motivational">Keynote Speaking &amp; Executive Coaching</option>
              <option value="Other">General / Comprehensive Portfolio Inquiry</option>
            </select>
          </div>

          <div className="bento-form-group" style={{ marginBottom: '1.75rem' }}>
            <label className="bento-form-label" htmlFor="message">
              Property or Engagement Overview
            </label>
            <textarea 
              id="message"
              required
              rows={4}
              className="bento-form-control"
              placeholder="Please describe property type, scope of valuation, or keynote requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{ resize: 'vertical' }}
            />
          </div>

          <button type="submit" className="btn-bento-submit">
            Submit Inquiry Directly &rarr;
          </button>
        </form>
      )}
    </div>
  );
}
