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
    { src: '/images/jumana-avatar-hd.jpg', alt: 'Jumana Judeh Executive Leader Portrait' },
    { src: '/images/fb-detroit-research.jpg', alt: 'Detroit Ph.D. Urban Development Research' },
  ];

  return (
    <div>
      {/* Modern Subpage Hero */}
      <section className="subpage-bento-hero">
        <div className="container">
          <div className="subpage-bento-hero-grid">
            <div>
              <span className="bento-badge-tag">Keynote Speaking &amp; Executive Coaching</span>
              <h1 className="subpage-hero-title">
                Judeh Motivational Team
              </h1>
              <p className="subpage-hero-sub">
                Entrepreneur, Business Leader, Community Servant, Success Coach and Motivational Speaker.
              </p>
              <div className="subpage-pills-row">
                <div className="subpage-pill">
                  <span>Executive Office: </span>
                  <a href="tel:3132771986">313-277-1986</a>
                </div>
                <div className="subpage-pill">
                  <span>Speaking Inquiries: </span>
                  <a href="mailto:JumanaJ@JudehOnLine.com">JumanaJ@JudehOnLine.com</a>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative', width: '180px', height: '110px', flexShrink: 0 }}>
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
      <div className="container" style={{ padding: '4rem 2rem 5rem' }}>
        
        {/* Editorial Philosophy Quote 1 Bento Card with Leader Portrait */}
        <div 
          className="bento-card" 
          style={{ 
            maxWidth: '1000px', 
            margin: '0 auto 4rem',
            background: '#ffffff',
            borderTop: '5px solid var(--bento-gold)',
            padding: '3rem'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2.5rem', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '110px', height: '110px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--bento-gold)', flexShrink: 0, boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <Image 
                src="/images/jumana-avatar-hd.jpg" 
                alt="Jumana Judeh, Success Coach & Keynote Speaker" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <span className="bento-badge-tag">Guiding Philosophy</span>
              <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--bento-text-main)', margin: '0.35rem 0', lineHeight: 1.25 }}>
                “Master the tools you need to persuade, inspire and connect.”
              </h2>
              <p style={{ color: 'var(--bento-crimson)', fontWeight: 700, margin: '0.5rem 0 0', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.9rem' }}>
                Jumana Judeh — Founder, Speaker &amp; Executive Coach
              </p>
            </div>
          </div>
        </div>

        {/* 3 Step High-Impact Framework */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {highlights.map((h, idx) => (
              <div 
                key={idx} 
                className="bento-card"
                style={{ position: 'relative', padding: '2.5rem' }}
              >
                <span style={{ fontSize: '2.75rem', fontWeight: 900, color: 'var(--bento-gold)', display: 'block', marginBottom: '0.4rem', lineHeight: 1 }}>
                  {h.step}
                </span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--bento-crimson)', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                  {h.title}
                </h3>
                <p className="bento-desc" style={{ margin: 0 }}>
                  {h.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Exclusive Statement Quote Banner */}
        <div 
          className="bento-card bento-card-dark" 
          style={{ 
            padding: '4rem 3rem', 
            textAlign: 'center', 
            marginBottom: '5rem'
          }}
        >
          <h3 style={{ fontSize: '2.2rem', fontStyle: 'italic', fontWeight: 700, maxWidth: '950px', margin: '0 auto', lineHeight: 1.45, color: '#ffffff' }}>
            “Overcoming any challenge life throws your way is the easy part. The hard part is convincing yourself that you can succeed and that you deserve success.”
          </h3>
          <div style={{ marginTop: '1.75rem', color: 'var(--bento-gold)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.95rem' }}>
            — Jumana Judeh
          </div>
        </div>

        {/* Expanded Speaker & Community Photo Gallery Bento */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
            <span className="bento-badge-tag">Live Engagements &amp; Community</span>
            <h2 className="bento-title-large">Speaking, Research &amp; Coaching In Action</h2>
            <p className="bento-desc">Empowering corporate boards, industry conferences, urban development initiatives, and entrepreneurs nationwide.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {galleryImages.map((img, idx) => (
              <div key={idx} className="bento-card" style={{ padding: '0.75rem', height: '340px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff' }}>
                <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                  <Image 
                    src={img.src} 
                    alt={img.alt} 
                    fill 
                    style={{ objectFit: 'contain' }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Your Success Today Form */}
        <div id="contact-section" className="bento-contact-grid">
          <div className="bento-contact-card">
            <span className="bento-badge-tag">Event Booking</span>
            <h2 className="bento-title-large" style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>
              Schedule Your Success Today!
            </h2>
            <p className="bento-desc">
              Reach out to schedule Jumana Judeh for your upcoming keynote, executive workshop, or organization retreat.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
              <div>
                <h5 style={{ fontSize: '0.85rem', color: 'var(--bento-gold)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.35rem' }}>
                  Speaker Office
                </h5>
                <p style={{ color: 'var(--bento-text-main)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  22952 Outer Drive<br />Dearborn, Michigan 48124
                </p>
              </div>

              <div>
                <h5 style={{ fontSize: '0.85rem', color: 'var(--bento-gold)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.35rem' }}>
                  Telephone &amp; Facsimile
                </h5>
                <p style={{ color: 'var(--bento-text-main)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  Office: <a href="tel:3132771986" style={{ color: 'var(--bento-crimson)', fontWeight: 700 }}>313-277-1986</a><br />
                  Fax: 313-277-8634
                </p>
              </div>

              <div>
                <h5 style={{ fontSize: '0.85rem', color: 'var(--bento-gold)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.35rem' }}>
                  Electronic Inquiries
                </h5>
                <p style={{ color: 'var(--bento-text-main)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  <a href="mailto:JumanaJ@JudehOnLine.com" style={{ color: 'var(--bento-crimson)', fontWeight: 700 }}>JumanaJ@JudehOnLine.com</a><br />
                  <a href="mailto:Admin@JudehOnLine.com" style={{ color: 'var(--bento-crimson)', fontWeight: 700 }}>Admin@JudehOnLine.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className="bento-contact-card">
            <ContactForm subtitle="Provide details regarding your upcoming event, audience, and requested dates" />
          </div>
        </div>

      </div>
    </div>
  );
}
