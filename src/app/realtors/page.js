import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Realtors Team | Judeh & Associates',
  description: 'Work with a professional team with experience in commercial, industrial, office, vacant land, and retail property.',
};

export default function RealtorsPage() {
  const services = [
    {
      title: 'Purchasing Property Assistance',
      icon: '/images/house-keys-icon.png',
      desc: 'Expert representation through property search, due diligence, offer negotiation, and closing to ensure you acquire the right property at fair market value.',
    },
    {
      title: 'Selling Property Assistance',
      icon: '/images/house-money-icon.png',
      desc: 'Strategic valuation-backed marketing, pricing intelligence, and buyer vetting to maximize your property sale proceeds with minimal time on market.',
    },
    {
      title: 'Property Management',
      icon: '/images/building-money-icon.png',
      desc: 'Save money with our management services. Complete oversight, lease administration, tenant communications, and proactive property maintenance.',
    },
  ];

  return (
    <div>
      {/* Luxury Subpage Header */}
      <section className="lux-subpage-hero">
        <div className="container lux-subpage-grid">
          <div>
            <span className="lux-eyebrow">Real Estate Brokerage &amp; Asset Advisory</span>
            <h1 className="lux-subpage-title">
              Realtors Team
            </h1>
            <p className="lux-subpage-desc">
              Real Estate Transaction Assistance and Property Management. Work with a professional team with experience in commercial, industrial, office, vacant land, and retail property.
            </p>
            <div className="lux-contact-meta-row">
              <div className="lux-meta-pill">
                <span>Brokerage Office: </span>
                <a href="tel:3132771986">313-277-1986</a>
              </div>
              <div className="lux-meta-pill">
                <span>Direct Inquiries: </span>
                <a href="mailto:Admin@JudehOnLine.com">Admin@JudehOnLine.com</a>
              </div>
            </div>
          </div>

          <div className="lux-logo-emblem">
            <div style={{ position: 'relative', width: '230px', height: '135px' }}>
              <Image 
                src="/images/jjlogo-realtors.png" 
                alt="Judeh Realtors Emblem" 
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
        
        {/* Core Services Section */}
        <section>
          <div className="lux-section-header">
            <span className="lux-eyebrow">Transaction Solutions</span>
            <h2 className="lux-section-title">Realtors Services</h2>
            <p className="lux-section-subtitle">
              Comprehensive transaction representation and asset management tailored to your investment objectives.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {services.map((svc, idx) => (
              <div 
                key={idx} 
                className="lux-feature-card"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'flex-start',
                  padding: '3rem 2.5rem'
                }}
              >
                <div style={{ 
                  position: 'relative', 
                  width: '72px', 
                  height: '72px', 
                  marginBottom: '1.75rem', 
                  padding: '14px',
                  backgroundColor: 'var(--lux-gold-light)',
                  border: '1px solid var(--lux-gold-border)',
                  borderRadius: 'var(--radius-md)'
                }}>
                  <Image src={svc.icon} alt={svc.title} fill style={{ objectFit: 'contain' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', fontWeight: 600, color: 'var(--lux-crimson)', marginBottom: '1rem', lineHeight: 1.2 }}>
                  {svc.title}
                </h3>
                <p style={{ color: 'var(--lux-text-body)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Split */}
        <section style={{ marginTop: '6rem' }}>
          <div className="lux-contact-split">
            <div className="lux-contact-info-panel">
              <span style={{ color: 'var(--lux-gold)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.14em', display: 'block', marginBottom: '0.4rem' }}>
                Brokerage Consultation
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--lux-dark)', margin: 0, lineHeight: 1.1 }}>
                Get In Touch
              </h3>
              <p style={{ color: 'var(--lux-text-body)', fontSize: '1.05rem', margin: '1rem 0 2.5rem', lineHeight: 1.8 }}>
                Please provide your contact information to consult with our expert realtors team.
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <h5 style={{ fontSize: '0.85rem', color: 'var(--lux-gold)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.35rem' }}>
                  Dearborn Office
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

            <ContactForm subtitle="Please provide your contact information to consult with our expert realtors team" />
          </div>
        </section>
      </div>
    </div>
  );
}
