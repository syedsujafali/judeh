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
    <div className="lux-contact-form-panel" id="contact-form">
      <span style={{ color: 'var(--lux-gold)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.14em', display: 'block', marginBottom: '0.4rem' }}>
        Private Consultation
      </span>
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--lux-dark)', margin: 0, lineHeight: 1.1 }}>
        Initiate an Engagement
      </h3>
      <p style={{ color: 'var(--lux-text-muted)', fontSize: '1rem', marginTop: '0.75rem', marginBottom: '2rem' }}>
        {subtitle}
      </p>

      {submitted ? (
        <div style={{
          padding: '2.5rem 2rem',
          backgroundColor: 'var(--lux-gold-light)',
          borderLeft: '5px solid var(--lux-gold)',
          borderRadius: 'var(--radius-sm)',
          textAlign: 'center',
          fontWeight: 600,
          color: 'var(--lux-dark)',
          lineHeight: 1.7
        }}>
          ✓ Thank you. Your inquiry has been transmitted to our senior team. We will be in contact shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="lux-form-group">
            <label className="lux-form-label" htmlFor="name">
              Full Name
            </label>
            <input 
              id="name"
              type="text" 
              required
              className="lux-input"
              placeholder="e.g. Eleanor Vance"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="lux-form-group">
            <label className="lux-form-label" htmlFor="email">
              Direct Email Address
            </label>
            <input 
              id="email"
              type="email" 
              required
              className="lux-input"
              placeholder="vance@institution.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="lux-form-group">
            <label className="lux-form-label" htmlFor="service">
              Advisory Practice Area
            </label>
            <select
              id="service"
              className="lux-input"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="Valuation">Real Estate Valuation &amp; Expert Consultation</option>
              <option value="Realtors">Realtors Team — Transaction Assistance</option>
              <option value="Motivational">Keynote Speaking &amp; Executive Coaching</option>
              <option value="Other">General / Comprehensive Portfolio Inquiry</option>
            </select>
          </div>

          <div className="lux-form-group" style={{ marginBottom: '2rem' }}>
            <label className="lux-form-label" htmlFor="message">
              Property or Engagement Overview
            </label>
            <textarea 
              id="message"
              required
              rows={4}
              className="lux-input"
              placeholder="Please describe property type, scope of valuation, or keynote requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{ resize: 'vertical' }}
            />
          </div>

          <button type="submit" className="lux-btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.1rem' }}>
            Transmit Consultation Request &rarr;
          </button>
        </form>
      )}
    </div>
  );
}
