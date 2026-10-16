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
              Explore Valuation Team </Link>
            <Link href="#architecture" className="btn-bento-gold">
              Explore Our Practices
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          ABOUT US SPOTLIGHT SECTION (Immediately After Hero)
          ========================================================================== */}
      <section className="home-about-section">
        <div className="container">
          <div className="home-about-card">
            <div className="home-about-grid">

              {/* President & Leader Portrait */}
              <div className="home-about-portrait-wrap">
                <div className="home-about-img-box">
                  <Image
                    src="/images/jumana-about-jj.jpg"
                    alt="Jumana Judeh, PhD, MAI, CCIM, MCAO"
                    fill
                    priority
                    style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                  />
                  <div className="home-about-badge-overlay">
                    <span>30+ Years Authority</span>
                  </div>
                </div>

                <div className="home-about-author-meta">
                  <h4>Jumana Judeh</h4>
                  <p>PhD, MAI, CCIM, MCAO &bull; President &amp; Founder</p>
                  <p className="home-about-role-note">Appointed Chair by Governor of Michigan</p>
                </div>
              </div>

              {/* Story & Value Content */}
              <div className="home-about-content">
                <div className="home-about-tag-row">
                  <span className="bento-badge-tag">About The Judeh Group</span>
                  <span className="badge-cert-pill">100% Certified Woman-Owned</span>
                </div>

                <h2 className="home-about-title">
                  Small Means Special Attention &amp; Always Answering The Phone
                </h2>

                <p className="home-about-p">
                  For over three decades, <strong>Judeh &amp; Associates</strong> has delivered trusted real estate valuation, expert witness testimony, and consulting across southeast and western Michigan. Founded by Jumana Judeh, our firm combines deep analytical rigor with unmatched local market intelligence.
                </p>

                <p className="home-about-p">
                  Whether performing multi-parcel eminent domain valuations for major public works like the Gordie Howe International Bridge and Detroit Transportation Corporation, or advising private investors and real estate clients, our boutique approach guarantees principal-level attention on every engagement.
                </p>

                {/* Highlights Grid */}
                <div className="home-about-highlights">
                  <div className="home-about-highlight-item">
                    <span className="highlight-num">30+</span>
                    <span className="highlight-label">Years of Michigan Valuation Leadership</span>
                  </div>
                  <div className="home-about-highlight-item">
                    <span className="highlight-num">MAI &amp; CCIM</span>
                    <span className="highlight-label">Dual Elite Industry Designations</span>
                  </div>
                  <div className="home-about-highlight-item">
                    <span className="highlight-num">10,000+</span>
                    <span className="highlight-label">Properties Valued &amp; Assessed</span>
                  </div>
                  <div className="home-about-highlight-item">
                    <span className="highlight-num">State &amp; Fed</span>
                    <span className="highlight-label">Trusted Court &amp; Municipal Experts</span>
                  </div>
                </div>

                {/* Badges & Actions */}
                <div className="home-about-footer-row">
                  <div className="home-about-certs-row">
                    <div className="home-about-cert-mini" title="Certified Woman-Owned Business Enterprise">
                      <Image
                        src="/images/woman-owned-cert.jpg"
                        alt="Woman Owned Business Certification"
                        width={64}
                        height={64}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <div className="home-about-cert-mini" title="Disadvantaged Business Enterprise (DBE)">
                      <Image
                        src="/images/dbe-cert.jpg"
                        alt="Disadvantaged Business Enterprise DBE"
                        width={64}
                        height={64}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <div className="home-about-cert-mini" title="Small Business Enterprise (SBE)">
                      <Image
                        src="/images/sbe-cert.png"
                        alt="Small Business Enterprise SBE"
                        width={64}
                        height={64}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </div>

                  <div className="home-about-btns">
                    <Link href="/about" className="btn-bento-primary">
                      Read Full Story &amp; Bio &rarr;
                    </Link>
                    <Link href="#contact" className="btn-bento-gold">
                      Contact Jumana Directly
                    </Link>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          VALUATION PRACTICE SHOWCASE WITH BIG IMAGERY (Directly After About Us)
          ========================================================================== */}
      <section className="home-valuation-showcase-section" id="valuation-practice">
        <div className="container">
          
          <div className="valuation-showcase-header">
            <div className="valuation-showcase-title-wrap">
              <span className="bento-badge-tag">Flagship Valuation Practice</span>
              <h2 className="valuation-showcase-heading">
                Real Estate Valuation &amp; Expert Advisory
              </h2>
              <p className="valuation-showcase-sub">
                We understand what creates property value, how such value is influenced, and how the characteristics of a property are affected by dynamic market conditions across Michigan.
              </p>
            </div>

            <div className="valuation-showcase-actions">
              <Link href="/valuation" className="btn-bento-primary">
                Explore Full Valuation Page &rarr;
              </Link>
              <Link href="/appraisal" className="btn-bento-gold">
                View Appraisal Services
              </Link>
            </div>
          </div>

          {/* Big Featured Images Gallery Grid */}
          <div className="valuation-big-images-grid">
            
            {/* Big Feature 1: Commercial & Special Purpose Properties (Large Left 7 cols) */}
            <div className="valuation-big-card valuation-big-featured">
              <div className="valuation-big-img-wrap">
                <Image 
                  src="/images/fb-cover-building.jpg" 
                  alt="Michigan Commercial and Mixed-Use Valuation" 
                  fill 
                  priority
                  style={{ objectFit: 'cover' }}
                />
                <div className="valuation-big-gradient-overlay" />
                <div className="valuation-big-card-badge">
                  <span>Major Public &amp; Private Portfolios</span>
                </div>
              </div>

              <div className="valuation-big-card-body">
                <div>
                  <span className="bento-badge-tag">Commercial &amp; Industrial</span>
                  <h3>Commercial Real Estate Valuation</h3>
                  <p>
                    Comprehensive certified valuation reports for multi-tenant office complexes, industrial manufacturing facilities, retail centers, medical suites, and eminent domain parcels throughout the State of Michigan.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem 1.25rem', margin: '1rem 0 1.5rem', padding: '1rem 0', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--bento-obsidian)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ color: 'var(--bento-gold)', fontWeight: 800 }}>▸</span> Going Concern Valuations
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--bento-obsidian)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ color: 'var(--bento-gold)', fontWeight: 800 }}>▸</span> Eminent Domain / Takings
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--bento-obsidian)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ color: 'var(--bento-gold)', fontWeight: 800 }}>▸</span> Special Purpose Facilities
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--bento-obsidian)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ color: 'var(--bento-gold)', fontWeight: 800 }}>▸</span> Tax Tribunal &amp; Appeals
                    </div>
                  </div>
                </div>

                <div className="valuation-big-card-footer">
                  <div className="valuation-pill-tags">
                    <span>ARGUS DCF</span>
                    <span>Cap Rates</span>
                    <span>USPAP &amp; FIRREA</span>
                  </div>
                  <Link href="/valuation" className="valuation-inline-link">
                    Valuation Services &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Big Feature 2: Market Analytics & CoStar Research (Top Right 5 cols) */}
            <div className="valuation-big-card">
              <div className="valuation-big-img-wrap" style={{ height: '240px' }}>
                <Image 
                  src="/images/fb-market-chart.jpg" 
                  alt="Commercial Real Estate Transaction Volume and Market Trends" 
                  fill 
                  style={{ objectFit: 'contain', background: '#f8fafc', padding: '12px' }}
                />
                <div className="valuation-big-card-badge" style={{ background: 'var(--bento-crimson)' }}>
                  <span>Verified Market Data</span>
                </div>
              </div>

              <div className="valuation-big-card-body">
                <span className="bento-badge-tag">Market Intelligence</span>
                <h3>Transaction Volume &amp; Trend Studies</h3>
                <p>
                  Accurate appraisals require continuous empirical tracking of commercial transaction volumes, capitalization shifts, and rent absorption.
                </p>
                <div className="valuation-big-card-footer">
                  <span style={{ fontSize: '0.85rem', color: 'var(--bento-crimson)', fontWeight: 700 }}>
                    18+ Years Historical Data
                  </span>
                  <Link href="/newsletter" className="valuation-inline-link">
                    Market News &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Big Feature 3: Forensic & Damage Appraisals (Bottom Right 5 cols) */}
            <div className="valuation-big-card">
              <div className="valuation-big-img-wrap" style={{ height: '240px' }}>
                <Image 
                  src="/images/fb-property-taxes.jpg" 
                  alt="Property Tax Appeals and Assessments" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
                <div className="valuation-big-gradient-overlay" />
                <div className="valuation-big-card-badge" style={{ background: 'var(--bento-gold)', color: '#090e17' }}>
                  <span>Forensic Analysis</span>
                </div>
              </div>

              <div className="valuation-big-card-body">
                <span className="bento-badge-tag">Litigation &amp; Claims</span>
                <h3>Tax Appeals, Title Claims &amp; Casualty Loss</h3>
                <p>
                  Specialized litigation support, diminished market value determinations, boundary defect analysis, and Michigan Tax Tribunal defense.
                </p>
                <div className="valuation-big-card-footer">
                  <span style={{ fontSize: '0.85rem', color: 'var(--bento-gold)', fontWeight: 800 }}>
                    Court-Tested Expert Witness
                  </span>
                  <Link href="/consulting" className="valuation-inline-link">
                    Consulting &rarr;
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================================================
          MODERN ARCHITECTURAL BENTO GRID (Remaining Practice Areas)
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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div className="bento-img-medium" style={{ height: '200px' }}>
                  <Image
                    src="/images/fb-property-taxes.jpg"
                    alt="Property Tax Valuation"
                    fill
                  />
                  <div style={{ position: 'absolute', bottom: 0, insetInline: 0, padding: '8px 12px', background: 'linear-gradient(transparent, rgba(9,14,23,0.85))', color: '#fff', fontSize: '0.85rem', fontWeight: 700 }}>
                    Tax Appeals &amp; Assessments
                  </div>
                </div>
                <div className="bento-img-medium" style={{ height: '200px' }}>
                  <Image
                    src="/images/fb-market-trends.jpg"
                    alt="Market Trends Analysis"
                    fill
                  />
                  <div style={{ position: 'absolute', bottom: 0, insetInline: 0, padding: '8px 12px', background: 'linear-gradient(transparent, rgba(9,14,23,0.85))', color: '#fff', fontSize: '0.85rem', fontWeight: 700 }}>
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
                <div style={{ position: 'relative', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', border: '2.5px solid var(--bento-gold)', flexShrink: 0 }}>
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
              <div className="bento-img-medium" style={{ height: '220px', marginBottom: '1.5rem' }}>
                <Image
                  src="/images/fb-cover-building.jpg"
                  alt="Michigan Commercial and Residential Properties"
                  fill
                />
                <div style={{ position: 'absolute', bottom: 0, insetInline: 0, padding: '8px 14px', background: 'linear-gradient(transparent, rgba(9,14,23,0.85))', color: '#fff', fontSize: '0.875rem', fontWeight: 600 }}>
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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div className="bento-img-contain" style={{ height: '220px' }}>
                  <Image
                    src="/images/jumana-speaker1.png"
                    alt="Jumana Judeh Keynote"
                    fill
                  />
                </div>
                <div className="bento-img-contain" style={{ height: '220px' }}>
                  <Image
                    src="/images/jumana-speaker2.png"
                    alt="Jumana Judeh Leadership"
                    fill
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
