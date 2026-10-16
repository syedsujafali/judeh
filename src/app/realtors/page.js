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

  const featuredProperties = [
    {
      title: 'Commercial Multi-Family & Mixed-Use',
      image: '/images/fb-cover-building.jpg',
      tag: 'Apartments & Multi-Family',
      desc: 'Hands-on brokerage and asset consulting for multi-tenant residential and urban mixed-use assets across Dearborn and Detroit.',
    },
    {
      title: 'Corporate Office & Medical Centers',
      image: '/images/office-building.jpg',
      tag: 'Office & Medical',
      desc: 'Strategic leasing, acquisition, and disposition of prime corporate offices and suburban medical centers.',
    },
    {
      title: 'Retail & Industrial Portfolios',
      image: '/images/office-building-square.jpg',
      tag: 'Industrial & Retail',
      desc: 'Comprehensive market absorption studies and valuation analysis for industrial warehousing and shopping centers.',
    },
  ];

  return (
    <div>
      {/* Modern Subpage Hero */}
      <section className="subpage-bento-hero">
        <div className="container">
          <div className="subpage-bento-hero-grid">
            <div>
              <span className="bento-badge-tag">Brokerage &amp; Asset Advisory</span>
              <h1 className="subpage-hero-title">
                Realtors Team
              </h1>
              <p className="subpage-hero-sub">
                Real Estate Transaction Assistance and Property Management. Work with a professional team with experience in commercial, industrial, office, vacant land, and retail property.
              </p>
              <div className="subpage-pills-row">
                <div className="subpage-pill">
                  <span>Brokerage Office: </span>
                  <a href="tel:3132771986">313-277-1986</a>
                </div>
                <div className="subpage-pill">
                  <span>Direct Inquiries: </span>
                  <a href="mailto:Admin@JudehOnLine.com">Admin@JudehOnLine.com</a>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative', width: '180px', height: '110px', flexShrink: 0 }}>
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
      <div className="container" style={{ padding: '4rem 2rem 5rem' }}>
        
        {/* Core Services Bento Grid */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
            <span className="bento-badge-tag">Transaction Solutions</span>
            <h2 className="bento-title-large">Realtors Services</h2>
            <p className="bento-desc">
              Comprehensive transaction representation and asset management tailored to your investment objectives.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {services.map((svc, idx) => (
              <div 
                key={idx} 
                className="bento-card"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'flex-start',
                  padding: '2.5rem'
                }}
              >
                <div style={{ 
                  position: 'relative', 
                  width: '64px', 
                  height: '64px', 
                  marginBottom: '1.5rem', 
                  padding: '12px',
                  backgroundColor: 'var(--bento-gold-light)',
                  borderRadius: 'var(--radius-md)'
                }}>
                  <Image src={svc.icon} alt={svc.title} fill style={{ objectFit: 'contain' }} />
                </div>
                <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--bento-crimson)', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                  {svc.title}
                </h3>
                <p className="bento-desc" style={{ margin: 0 }}>
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Commercial & Residential Property Showcase */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
            <span className="bento-badge-tag">Asset Portfolio</span>
            <h2 className="bento-title-large">Transaction &amp; Property Types</h2>
            <p className="bento-desc">
              Proven advisory across commercial, multi-family, office complexes, and industrial assets in Southeast Michigan.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {featuredProperties.map((prop, idx) => (
              <div key={idx} className="bento-card" style={{ padding: '1.5rem', overflow: 'hidden' }}>
                <div style={{ position: 'relative', width: '100%', height: '220px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.25rem', border: '1px solid #e2e8f0' }}>
                  <Image 
                    src={prop.image} 
                    alt={prop.title} 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'var(--bento-crimson)', color: '#ffffff', fontSize: '0.75rem', fontWeight: 800, padding: '4px 10px', borderRadius: 'var(--radius-full)' }}>
                    {prop.tag}
                  </div>
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--bento-text-main)', marginBottom: '0.5rem' }}>
                  {prop.title}
                </h3>
                <p className="bento-desc" style={{ fontSize: '0.95rem', margin: 0 }}>
                  {prop.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Split */}
        <div id="contact-section" className="bento-contact-grid">
          <div className="bento-contact-card">
            <span className="bento-badge-tag">Brokerage Consultation</span>
            <h2 className="bento-title-large" style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>
              Get In Touch
            </h2>
            <p className="bento-desc">
              Please provide your contact information to consult with our expert realtors team.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
              <div>
                <h5 style={{ fontSize: '0.85rem', color: 'var(--bento-gold)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.35rem' }}>
                  Dearborn Office
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
            <ContactForm subtitle="Please provide your contact information to consult with our expert realtors team" />
          </div>
        </div>
      </div>
    </div>
  );
}
