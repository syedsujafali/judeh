import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Judeh & Associates | Real Estate Valuation, Realty & Motivational Advisory',
  description: 'The Judeh Group has over 30 years of experience with valuation, realty, and helping you succeed.',
};

export default function HomePage() {
  return (
    <>
      {/* High-End Editorial Luxury Hero */}
      <section className="lux-hero-section">
        <div 
          className="lux-hero-bg" 
          style={{ backgroundImage: `url('/images/hero-building-bg.jpg')` }}
        />
        <div className="lux-hero-overlay" />
        
        <div className="container" style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ 
                fontSize: '2.5rem', 
                fontWeight: 900, 
                letterSpacing: '0.04em', 
                color: '#ffffff',
                textTransform: 'uppercase',
                display: 'block',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}>
                WELCOME TO
              </span>
              <h1 style={{ 
                fontSize: '5rem', 
                fontWeight: 900, 
                letterSpacing: '-0.02em', 
                lineHeight: 1.05, 
                margin: '0.25rem 0 1.5rem',
                textShadow: '0 4px 15px rgba(0,0,0,0.5)'
              }}>
                <span style={{ color: '#810014' }}>The </span>
                <span style={{ color: '#e09900', fontStyle: 'italic' }}>Judeh</span>
                <span style={{ color: '#810014' }}> Group</span>
              </h1>
            </div>

            <p style={{
              fontSize: '1.35rem',
              color: '#ffffff',
              fontWeight: 600,
              lineHeight: 1.6,
              maxWidth: '740px',
              margin: '0 auto 2.75rem',
              textShadow: '0 2px 8px rgba(0,0,0,0.6)'
            }}>
              The Judeh Group has over 30 years of experience with valuation, realty, and helping you succeed.
            </p>

            <div className="lux-hero-buttons" style={{ justifyContent: 'center' }}>
              <Link href="/valuation" className="lux-btn-crimson">
                Explore Valuation Team &rarr;
              </Link>
              <Link href="#practices" className="lux-btn-outline">
                View Our Practices
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Pillars Section */}
      <section className="lux-pillars-section" id="practices">
        <div className="container">
          <div className="lux-section-header">
            <span className="lux-eyebrow">Disciplined Practices</span>
            <h2 className="lux-section-title">Three Pillars of Professional Excellence</h2>
            <p className="lux-section-subtitle">
              Delivering authoritative advisory across property valuation, commercial transactions, and high-impact motivational consulting.
            </p>
          </div>

          <div className="lux-pillars-grid">
            {/* Pillar 1: Valuation */}
            <div className="lux-card">
              <div className="lux-card-icon-wrap">
                <div style={{ position: 'relative', width: '52px', height: '52px' }}>
                  <Image 
                    src="/images/valuation-icon.png" 
                    alt="Valuation Icon" 
                    fill 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <span className="lux-card-meta">Real Estate Appraisal &amp; Advisory</span>
              <h3 className="lux-card-title">Valuation Team</h3>
              <p className="lux-card-text">
                We understand what creates property value, how such value is influenced and how the characteristics of a property are affected by market conditions.
              </p>
              <Link href="/valuation" className="lux-card-action">
                Access Valuation Practice &rarr;
              </Link>
            </div>

            {/* Pillar 2: Realtors */}
            <div className="lux-card">
              <div className="lux-card-icon-wrap">
                <div style={{ position: 'relative', width: '52px', height: '52px' }}>
                  <Image 
                    src="/images/realestate-icon.png" 
                    alt="Realtor Icon" 
                    fill 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <span className="lux-card-meta">Brokerage &amp; Asset Management</span>
              <h3 className="lux-card-title">Realtors Team</h3>
              <p className="lux-card-text">
                Work with a professional team with experience in commercial, industrial, office, vacant land, and retail property across Michigan markets.
              </p>
              <Link href="/realtors" className="lux-card-action">
                Access Realtors Team &rarr;
              </Link>
            </div>

            {/* Pillar 3: Motivational */}
            <div className="lux-card">
              <div className="lux-card-icon-wrap">
                <div style={{ position: 'relative', width: '52px', height: '52px' }}>
                  <Image 
                    src="/images/motivational-icon.png" 
                    alt="Motivational Icon" 
                    fill 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <span className="lux-card-meta">Leadership, Speaking &amp; Success</span>
              <h3 className="lux-card-title">Motivational Team</h3>
              <p className="lux-card-text">
                Build a successful business and team with a speaker and coach on leadership, success and entrepreneurial skills.
              </p>
              <Link href="/motivational" className="lux-card-action">
                Access Motivational Team &rarr;
              </Link>
            </div>
          </div>

          {/* Statement Banner: Service You Can Trust */}
          <div className="lux-statement-banner">
            <div className="lux-statement-content">
              <h2>Service You Can Trust</h2>
              <p>Judeh &amp; Associates has over 30 years of client success.</p>
            </div>
            <div>
              <Link href="/valuation" className="lux-btn-primary">
                Contact a Value Expert &rarr;
              </Link>
            </div>
          </div>

          {/* Private Consultation & Contact Split */}
          <div id="contact-section" className="lux-contact-split">
            <div className="lux-contact-info-panel">
              <span style={{ color: 'var(--lux-gold)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.14em', display: 'block', marginBottom: '0.4rem' }}>
                Senior Partner Access
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--lux-dark)', margin: 0, lineHeight: 1.1 }}>
                Get In Touch With Judeh &amp; Associates
              </h3>
              <p style={{ color: 'var(--lux-text-body)', fontSize: '1.05rem', margin: '1rem 0 2.5rem', lineHeight: 1.8 }}>
                Connect directly with our principals regarding complex property appraisals, high-stakes court testimony, portfolio advisory, or keynote engagements.
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <h5 style={{ fontSize: '0.85rem', color: 'var(--lux-gold)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.35rem' }}>
                  Corporate Office
                </h5>
                <p style={{ color: 'var(--lux-dark)', fontSize: '1.1rem', lineHeight: 1.5 }}>
                  22952 Outer Drive<br />Dearborn, Michigan 48124
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h5 style={{ fontSize: '0.85rem', color: 'var(--lux-gold)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.35rem' }}>
                  Telephone &amp; Facsimile
                </h5>
                <p style={{ color: 'var(--lux-dark)', fontSize: '1.1rem' }}>
                  Office: <a href="tel:3132771986" style={{ color: 'var(--lux-crimson)', fontWeight: 700 }}>(313) 277-1986</a><br />
                  Fax: (313) 277-8634
                </p>
              </div>

              <div>
                <h5 style={{ fontSize: '0.85rem', color: 'var(--lux-gold)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.35rem' }}>
                  Electronic Inquiries
                </h5>
                <p style={{ color: 'var(--lux-dark)', fontSize: '1.1rem' }}>
                  <a href="mailto:JumanaJ@JudehOnLine.com" style={{ color: 'var(--lux-crimson)', fontWeight: 600 }}>JumanaJ@JudehOnLine.com</a><br />
                  <a href="mailto:Admin@JudehOnLine.com" style={{ color: 'var(--lux-crimson)', fontWeight: 600 }}>Admin@JudehOnLine.com</a>
                </p>
              </div>
            </div>

            <ContactForm subtitle="Please provide your contact information to consult with our expert team" />
          </div>
        </div>
      </section>
    </>
  );
}
