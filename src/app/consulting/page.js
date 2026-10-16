import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Consulting Services | Judeh & Associates',
  description: 'Judeh & Associates provides comprehensive consulting services for financial decision making, property management, pricing, and building analysis.',
};

export default function ConsultingPage() {
  const consultingServices = [
    {
      title: 'Pricing for Buying or Selling',
      tag: 'Acquisition & Disposition',
      image: '/images/office-building-square.jpg',
      icon: '/images/house-money-icon.png',
      desc: 'We can help you establish an acquisition or sale price that is in line with the market.',
      detail: 'Avoid overpaying as a buyer or leaving capital on the table as a seller. Our team leverages extensive historical comparable sales, cap rate trends, and localized submarket absorption data to provide you with an objective, defensible fair market pricing report.',
    },
    {
      title: 'Multi-Tenant Rates',
      tag: 'Market Rent Studies',
      image: '/images/fb-cover-building.jpg',
      icon: '/images/building-money-icon.png',
      desc: 'Do you own a multi-tenant building but are not sure what rent you should charge? We can help you establish market rent.',
      detail: 'Maximize gross potential income while maintaining optimal occupancy. We evaluate comparable leased properties across Southeast Michigan, assessing expense pass-throughs (NNN vs. Gross), tenant allowances, and market-standard escalations.',
    },
    {
      title: 'Building Measurements',
      tag: 'BOMA & Square Footage Verification',
      image: '/images/fb-commercial-building.jpg',
      icon: '/images/valuation-icon.png',
      desc: 'For exact dimensions of your building we can provide on site measuring to establish actual size.',
      detail: 'Inaccurate square footage can distort lease rates, property tax assessments, and collateral underwriting. We provide laser-accurate field measurements adhering strictly to BOMA and ANSI measurement standards.',
    },
    {
      title: 'Property Inspections for Remote Owners',
      tag: 'Remote Asset Oversight',
      image: '/images/office-building.jpg',
      icon: '/images/house-keys-icon.png',
      desc: 'Do you live far away from your property and need someone to check on its condition? We are ready to inspect your property and send you a detailed report with photographs.',
      detail: 'Receive complete peace of mind with our unbiased on-site visual audits. We examine deferred maintenance, roof and facade conditions, tenant occupancy status, grounds upkeep, and neighborhood changes, accompanied by high-resolution photographic documentation.',
    },
  ];

  const additionalConsulting = [
    {
      title: 'Eminent Domain & Takings',
      tag: 'Litigation Support',
      desc: 'Advisory and valuation for partial or full government acquisitions, right-of-ways, and utility easements (including Gordie Howe Bridge parcel analyses).',
    },
    {
      title: 'Tax Appeal Strategy',
      tag: 'Municipal Assessment',
      desc: 'Strategic review of property assessments, equalization factors, and tax tribunal petition support before Board of Review deadlines.',
    },
    {
      title: 'Feasibility & Highest & Best Use',
      tag: 'Development Planning',
      desc: 'Comprehensive market feasibility studies determining whether proposed redevelopment, expansion, or repositioning is legally permissible and financially feasible.',
    },
  ];

  return (
    <div>
      {/* ==========================================================================
          SUBPAGE HERO: CONSULTING SERVICES
          ========================================================================== */}
      <section className="subpage-bento-hero">
        <div className="container">
          <div className="subpage-bento-hero-grid">
            <div>
              <span className="bento-badge-tag">Judeh &amp; Associates Advisory Practice</span>
              <h1 className="subpage-hero-title">
                Consulting Services
              </h1>
              <p className="subpage-hero-sub">
                Judeh &amp; Associates provides comprehensive consulting services for financial decision making and property management. Over 30 years of helping property owners, investors, and legal counsel succeed.
              </p>
              
              <div className="subpage-pills-row">
                <div className="subpage-pill">
                  <span>Direct Call: </span>
                  <a href="tel:3132771986">(313) 277-1986</a>
                </div>
                <div className="subpage-pill">
                  <span>Direct Email: </span>
                  <a href="mailto:JumanaJ@JudehOnLine.com">JumanaJ@JudehOnLine.com</a>
                </div>
                <div className="subpage-pill">
                  <span>Advisory: </span>
                  <span style={{ fontWeight: 700, color: 'var(--bento-crimson)' }}>Commercial, Multi-Family &amp; Industrial</span>
                </div>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="#contact-form" className="btn-bento-primary">
                  Contact Our Value Experts &rarr;
                </Link>
                <Link href="#consulting-practices" className="btn-bento-gold">
                  Explore Consulting Practices
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative', width: '150px', height: '150px', flexShrink: 0 }}>
              <Image 
                src="/images/the-judeh-group-logo.png" 
                alt="Judeh & Associates Consulting Practice" 
                fill 
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          MAIN CONTENT CONTAINER
          ========================================================================== */}
      <div className="container" style={{ padding: '3.5rem 2rem 5rem' }}>

        {/* 4 Core Consulting Services (Authentic Copy from judehonline.com/consulting/) */}
        <div id="consulting-practices" style={{ marginBottom: '4.5rem', scrollMarginTop: '110px' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.75rem' }}>
            <span className="bento-badge-tag">Core Advisory Practices</span>
            <h2 className="bento-title-large">Real Estate Consulting Services</h2>
            <p className="bento-desc">
              From individual commercial property evaluations to complex multi-tenant assets, our certified consultants provide actionable guidance you can rely on.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {consultingServices.map((svc, i) => (
              <div key={i} className="bento-card" style={{ padding: '0', overflow: 'hidden', background: '#ffffff', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                  <Image 
                    src={svc.image} 
                    alt={svc.title} 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(9,14,23,0.1) 0%, rgba(9,14,23,0.8) 100%)' }} />
                  <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.5rem', right: '1.5rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--bento-gold)' }}>
                      {svc.tag}
                    </span>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', margin: '0.2rem 0 0' }}>
                      {svc.title}
                    </h3>
                  </div>
                </div>

                <div style={{ padding: '2rem 1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--bento-crimson)', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                      “{svc.desc}”
                    </p>
                    <p className="bento-desc" style={{ fontSize: '0.92rem', lineHeight: '1.7', margin: 0 }}>
                      {svc.detail}
                    </p>
                  </div>

                  <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid #f1f5f9' }}>
                    <Link href="#contact-form" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--bento-gold)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      Request Consultation &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Forensic & Development Advisory Row */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem' }}>
            <span className="bento-badge-tag">Advanced Consulting</span>
            <h2 className="bento-title-large">Strategic &amp; Forensic Advisory</h2>
            <p className="bento-desc">
              Equipping institutional and private clients with analytical proof for high-stakes decisions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {additionalConsulting.map((item, idx) => (
              <div key={idx} className="bento-card" style={{ background: '#ffffff', padding: '2rem', borderLeft: '4px solid var(--bento-crimson)' }}>
                <span className="bento-badge-tag">{item.tag}</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--bento-obsidian)', marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p className="bento-desc" style={{ fontSize: '0.95rem', margin: 0, lineHeight: '1.65' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================================================
            STATEMENT BANNER (Exact Style from judehonline.com)
            ========================================================================== */}
        <div className="bento-statement-banner" style={{ marginBottom: '4.5rem', borderRadius: 'var(--radius-xl)' }}>
          <div className="container" style={{ textAlign: 'center', padding: '3.5rem 2rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--bento-gold)', display: 'block', marginBottom: '0.5rem' }}>
              Service You Can Trust
            </span>
            <h2 style={{ fontSize: '2.75rem', fontWeight: 900, color: '#ffffff', marginBottom: '1rem', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
              OVER 30 YEARS OF CLIENT SUCCESS
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#fce7eb', maxWidth: '720px', margin: '0 auto 2rem' }}>
              We understand what creates property value, how such value is influenced, and how the characteristics of a property are affected by market conditions.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <Link href="#contact-form" className="btn-bento-gold" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem', fontWeight: 800 }}>
                CONTACT OUR VALUE EXPERTS &rarr;
              </Link>
              <a href="tel:3132771986" className="btn-bento-primary" style={{ padding: '1rem 2.25rem', fontSize: '1.05rem', fontWeight: 800, background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}>
                CALL (313) 277-1986
              </a>
            </div>
          </div>
        </div>

        {/* ==========================================================================
            CONTACT FORM
            ========================================================================== */}
        <div id="contact-form" className="bento-contact-card" style={{ maxWidth: '840px', margin: '0 auto', scrollMarginTop: '110px' }}>
          <ContactForm subtitle="Schedule a strategic property consultation with Jumana Judeh and our consulting team" />
        </div>

      </div>
    </div>
  );
}
