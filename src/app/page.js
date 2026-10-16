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
      {/* ==========================================================================
          ARCHITECTURAL HERO (Full-Bleed Background + Exact User Typography)
          ========================================================================== */}
      <section 
        className="bento-hero-section" 
        style={{ backgroundImage: `url('/images/hero-building-bg.jpg')` }}
      >
        <div className="bento-hero-overlay" />
        
        <div className="bento-hero-content">
          <span className="bento-hero-tag">
            WELCOME TO
          </span>
          <h1 className="bento-hero-title">
            <span style={{ color: 'var(--bento-crimson)' }}>The </span>
            <span style={{ color: 'var(--bento-gold)', fontStyle: 'italic' }}>Judeh</span>
            <span style={{ color: 'var(--bento-crimson)' }}> Group</span>
          </h1>

          <p className="bento-hero-desc">
            The Judeh Group has over 30 years of experience with valuation, realty, and helping you succeed.
          </p>

          <div className="bento-hero-actions">
            <Link href="/valuation" className="btn-bento-primary">
              Explore Valuation Team &rarr;
            </Link>
            <Link href="#architecture" className="btn-bento-gold">
              Explore Our Practices
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          MODERN ARCHITECTURAL BENTO GRID
          ========================================================================== */}
      <section className="bento-grid-section" id="architecture">
        <div className="container">
          <div className="bento-layout">
            
            {/* Bento Card 1: Valuation Practice (Featured Span 7) */}
            <div className="bento-card bento-span-7">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span className="bento-badge-tag">Core Valuation Practice</span>
                <div style={{ position: 'relative', width: '48px', height: '48px' }}>
                  <Image 
                    src="/images/valuation-icon.png" 
                    alt="Valuation Icon" 
                    fill 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <h2 className="bento-title-large">Valuation Team</h2>
              <p className="bento-desc">
                We understand what creates property value, how such value is influenced and how the characteristics of a property are affected by market conditions. Over 30 years of undisputed valuation leadership and forensic consultation.
              </p>
              
              <div className="bento-tags-cloud" style={{ margin: '0.5rem 0 1.5rem' }}>
                <span className="bento-tag-item">Commercial Real Estate</span>
                <span className="bento-tag-item">Litigation &amp; Expert Witness</span>
                <span className="bento-tag-item">Insurance &amp; Title Claims</span>
                <span className="bento-tag-item">Residential &amp; Land</span>
              </div>

              {/* Photo Showcase from Facebook / Field Practice */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ position: 'relative', height: '140px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                  <Image 
                    src="/images/fb-property-taxes.jpg" 
                    alt="Property Tax Valuation" 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', bottom: 0, insetInline: 0, padding: '4px 8px', background: 'rgba(9,14,23,0.7)', color: '#fff', fontSize: '0.75rem', fontWeight: 700 }}>
                    Tax Appeals &amp; Assessments
                  </div>
                </div>
                <div style={{ position: 'relative', height: '140px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                  <Image 
                    src="/images/fb-market-trends.jpg" 
                    alt="Market Trends Analysis" 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', bottom: 0, insetInline: 0, padding: '4px 8px', background: 'rgba(9,14,23,0.7)', color: '#fff', fontSize: '0.75rem', fontWeight: 700 }}>
                    Market Intelligence
                  </div>
                </div>
              </div>

              <Link href="/valuation" className="bento-action-link">
                Learn more about Valuation Practice &rarr;
              </Link>
            </div>

            {/* Bento Card 2: 30+ Years & Key Metrics (Span 5 - Obsidian Dark Accent) */}
            <div className="bento-card bento-card-dark bento-span-5">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span className="bento-badge-tag">Firm Leadership</span>
                <div style={{ position: 'relative', width: '56px', height: '56px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--bento-gold)' }}>
                  <Image 
                    src="/images/jumana-avatar-hd.jpg" 
                    alt="Jumana Judeh, MAI, CCIM" 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>

              <h2 className="bento-title-large">30+ Years of Authority</h2>
              <p className="bento-desc">
                Founded and directed by Jumana Judeh, MAI, CCIM, MCAO Certified General Appraiser. Rooted in Dearborn and serving clients across the entire State of Michigan with independent, defensible analysis and high-impact advisory.
              </p>

              <div className="bento-stats-row">
                <div className="bento-stat-item">
                  <h3>30+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="bento-stat-item">
                  <h3>100%</h3>
                  <p>MI Coverage</p>
                </div>
                <div className="bento-stat-item">
                  <h3>3</h3>
                  <p>Core Teams</p>
                </div>
              </div>
            </div>

            {/* Bento Card 3: Realtors Team (Span 6) */}
            <div className="bento-card bento-span-6">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span className="bento-badge-tag">Commercial &amp; Residential Brokerage</span>
                <div style={{ position: 'relative', width: '48px', height: '48px' }}>
                  <Image 
                    src="/images/realestate-icon.png" 
                    alt="Real Estate Icon" 
                    fill 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <h2 className="bento-title-large">Realtors Team</h2>
              <p className="bento-desc">
                Work with a professional team with experience in commercial, industrial, office, vacant land, and retail property across Michigan markets. We offer property management, strategic leasing, and investor guidance.
              </p>

              {/* Real Estate Building Photo from Facebook */}
              <div style={{ position: 'relative', height: '160px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.25rem', border: '1px solid #e2e8f0' }}>
                <Image 
                  src="/images/fb-cover-building.jpg" 
                  alt="Michigan Commercial and Residential Properties" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: 0, insetInline: 0, padding: '6px 12px', background: 'linear-gradient(transparent, rgba(9,14,23,0.85))', color: '#fff', fontSize: '0.8rem', fontWeight: 600 }}>
                  Commercial, Multi-Family &amp; Retail Transactions
                </div>
              </div>

              <div className="bento-tags-cloud" style={{ margin: '0 0 1.5rem' }}>
                <span className="bento-tag-item">Commercial Assets</span>
                <span className="bento-tag-item">Property Management</span>
                <span className="bento-tag-item">Industrial &amp; Retail</span>
              </div>

              <Link href="/realtors" className="bento-action-link">
                Explore Realtors Practice &rarr;
              </Link>
            </div>

            {/* Bento Card 4: Motivational Team (Span 6) */}
            <div className="bento-card bento-span-6">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span className="bento-badge-tag">Executive Keynotes &amp; Leadership</span>
                <div style={{ position: 'relative', width: '48px', height: '48px' }}>
                  <Image 
                    src="/images/motivational-icon.png" 
                    alt="Motivational Icon" 
                    fill 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <h2 className="bento-title-large">Motivational Team</h2>
              <p className="bento-desc">
                Build a successful business and team with a speaker and coach on leadership, success and entrepreneurial skills. Empowering leaders, organizations, and youth across corporate and educational stages.
              </p>

              {/* Live Speaker Photo from engagements */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ position: 'relative', height: '140px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <Image 
                    src="/images/jumana-speaker1.png" 
                    alt="Jumana Judeh Keynote" 
                    fill 
                    style={{ objectFit: 'contain', padding: '6px' }}
                  />
                </div>
                <div style={{ position: 'relative', height: '140px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <Image 
                    src="/images/jumana-speaker2.png" 
                    alt="Jumana Judeh Leadership" 
                    fill 
                    style={{ objectFit: 'contain', padding: '6px' }}
                  />
                </div>
              </div>

              <div className="bento-tags-cloud" style={{ margin: '0 0 1.5rem' }}>
                <span className="bento-tag-item">Keynote Speaking</span>
                <span className="bento-tag-item">Executive Coaching</span>
                <span className="bento-tag-item">Team Success</span>
              </div>

              <Link href="/motivational" className="bento-action-link">
                Explore Motivational Practice &rarr;
              </Link>
            </div>

            {/* Bento Card 5: Service You Can Trust (Span 12 Statement Banner) */}
            <div className="bento-statement-banner bento-span-12">
              <div>
                <h2>Service You Can Trust</h2>
                <p>Judeh &amp; Associates has over 30 years of client success across valuation, brokerage, and leadership.</p>
              </div>
              <div>
                <Link href="/valuation" className="btn-bento-gold" style={{ whiteSpace: 'nowrap' }}>
                  Contact a Value Expert &rarr;
                </Link>
              </div>
            </div>

          </div>

          {/* ==========================================================================
              CONTACT SECTION (Modern Split Grid)
              ========================================================================== */}
          <div id="contact-section" className="bento-contact-grid">
            <div className="bento-contact-card">
              <span className="bento-badge-tag">Corporate Headquarters</span>
              <h2 className="bento-title-large" style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>
                Get In Touch With Judeh &amp; Associates
              </h2>
              <p className="bento-desc">
                Connect directly with our principals regarding complex property appraisals, high-stakes court testimony, portfolio advisory, or keynote engagements.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
                <div>
                  <h5 style={{ fontSize: '0.85rem', color: 'var(--bento-gold)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.35rem' }}>
                    Corporate Office
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
                    Office: <a href="tel:3132771986" style={{ color: 'var(--bento-crimson)', fontWeight: 700 }}>(313) 277-1986</a><br />
                    Fax: (313) 277-8634
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
              <ContactForm subtitle="Please provide your contact information to consult with our expert team" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
