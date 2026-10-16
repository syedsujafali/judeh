import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Motivational Team | Judeh & Associates',
  description: 'Build a successful business and team with a speaker and coach on leadership, success and entrepreneurial skills.',
};

export default function MotivationalPage() {
  const highlights = [
    {
      step: '01',
      title: 'Success Consulting Services',
      text: 'Business owners and community leaders benefit from the Judeh team success consulting services.',
    },
    {
      step: '02',
      title: 'Speaking Engagements & Leadership',
      text: 'Equip yourself and your team for success with a speaking engagement to build leadership and entrepreneurial skills.',
    },
    {
      step: '03',
      title: 'Empowerment & Strength Development',
      text: 'Hear from a successful woman entrepreneur how to build yourself up and develop the strengths to take advantage of the opportunities afforded to you.',
    },
  ];

  const galleryImages = [
    { src: '/images/jumana-speaker1.png', alt: 'Jumana Judeh speaking at conference' },
    { src: '/images/jumana-speaker2.png', alt: 'Jumana Judeh inspiring audience' },
    { src: '/images/jumana-speaker3.png', alt: 'Jumana Judeh leadership coaching' },
    { src: '/images/jumana-speaker4.png', alt: 'Jumana Judeh keynote presentation' },
  ];

  return (
    <div>
      {/* Luxury Subpage Header */}
      <section className="lux-subpage-hero">
        <div className="container lux-subpage-grid">
          <div>
            <span className="lux-eyebrow">Keynote Speaking &amp; Executive Coaching</span>
            <h1 className="lux-subpage-title">
              Judeh Motivational Team
            </h1>
            <p className="lux-subpage-desc">
              Entrepreneur, Business Leader, Community Servant, Success Coach and Motivational Speaker.
            </p>
            <div className="lux-contact-meta-row">
              <div className="lux-meta-pill">
                <span>Executive Office: </span>
                <a href="tel:3132771986">313-277-1986</a>
              </div>
              <div className="lux-meta-pill">
                <span>Speaking Inquiries: </span>
                <a href="mailto:JumanaJ@JudehOnLine.com">JumanaJ@JudehOnLine.com</a>
              </div>
            </div>
          </div>

          <div className="lux-logo-emblem">
            <div style={{ position: 'relative', width: '230px', height: '135px' }}>
              <Image 
                src="/images/jjlogo-motivational.png" 
                alt="Judeh Motivational Team Emblem" 
                fill 
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        
        {/* Editorial Philosophy Quote 1 */}
        <section style={{ 
          maxWidth: '920px', 
          margin: '0 auto 5rem',
          textAlign: 'center',
          padding: '3.5rem 3rem',
          background: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lux-card)',
          borderTop: '5px solid var(--lux-gold)'
        }}>
          <span className="lux-eyebrow">Guiding Philosophy</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.75rem', fontWeight: 600, color: 'var(--lux-dark)', margin: '0.75rem 0', lineHeight: 1.25 }}>
            “Master the tools you need to persuade, inspire and connect.”
          </h2>
        </section>

        {/* 3 Step High-Impact Framework */}
        <section style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {highlights.map((h, idx) => (
              <div 
                key={idx} 
                className="lux-feature-card"
                style={{ position: 'relative', padding: '3rem 2.5rem' }}
              >
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 700, color: 'var(--lux-gold)', display: 'block', marginBottom: '0.5rem', lineHeight: 1 }}>
                  {h.step}
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 600, color: 'var(--lux-crimson)', marginBottom: '1rem', lineHeight: 1.2 }}>
                  {h.title}
                </h3>
                <p style={{ color: 'var(--lux-text-body)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  {h.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Exclusive Statement Quote Banner */}
        <section style={{ 
          background: 'linear-gradient(135deg, var(--lux-dark) 0%, #0d1927 100%)', 
          border: '1px solid var(--lux-gold-border)',
          borderRadius: 'var(--radius-lg)', 
          padding: '4.5rem 3.5rem', 
          textAlign: 'center', 
          color: '#ffffff',
          margin: '5rem 0',
          boxShadow: 'var(--shadow-lux-elevated)'
        }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontStyle: 'italic', fontWeight: 600, maxWidth: '950px', margin: '0 auto', lineHeight: 1.4, color: '#f8fafc' }}>
            “Overcoming any challenge life throws your way is the easy part. The hard part is convincing yourself that you can succeed and that you deserve success.”
          </h3>
          <div style={{ marginTop: '2rem', color: 'var(--lux-gold-bright)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.95rem' }}>
            — Jumana Judeh
          </div>
        </section>

        {/* Speaker Photo Gallery */}
        <section style={{ margin: '5rem 0' }}>
          <div className="lux-section-header">
            <span className="lux-eyebrow">Live Engagements</span>
            <h2 className="lux-section-title">Speaking &amp; Coaching In Action</h2>
            <p className="lux-section-subtitle">Empowering corporate boards, industry conferences, and entrepreneurs nationwide.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {galleryImages.map((img, idx) => (
              <div key={idx} style={{ 
                position: 'relative', 
                height: '380px', 
                borderRadius: 'var(--radius-lg)', 
                overflow: 'hidden', 
                boxShadow: 'var(--shadow-lux-card)',
                border: '1px solid var(--lux-gold-border)',
                backgroundColor: '#ffffff'
              }}>
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill 
                  style={{ objectFit: 'contain', padding: '14px' }} 
                />
              </div>
            ))}
          </div>
        </section>

        {/* Schedule Your Success Today Form */}
        <section style={{ marginTop: '6rem' }}>
          <div className="lux-contact-split">
            <div className="lux-contact-info-panel">
              <span style={{ color: 'var(--lux-gold)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.14em', display: 'block', marginBottom: '0.4rem' }}>
                Event Booking
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--lux-dark)', margin: 0, lineHeight: 1.1 }}>
                Schedule Your Success Today!
              </h3>
              <p style={{ color: 'var(--lux-text-body)', fontSize: '1.05rem', margin: '1rem 0 2.5rem', lineHeight: 1.8 }}>
                Reach out to schedule Jumana Judeh for your upcoming keynote, executive workshop, or organization retreat.
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <h5 style={{ fontSize: '0.85rem', color: 'var(--lux-gold)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.35rem' }}>
                  Speaker Office
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
                  Office: <a href="tel:3132771986" style={{ color: 'var(--lux-crimson)', fontWeight: 700 }}>313-277-1986</a><br />
                  Fax: 313-277-8634
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

            <ContactForm subtitle="Provide details regarding your upcoming event, audience, and requested dates" />
          </div>
        </section>
      </div>
    </div>
  );
}
