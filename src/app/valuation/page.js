import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Real Estate Valuation and Consulting | Judeh & Associates',
  description: 'We understand what creates property value, how such value is influenced and how the characteristics of a property are affected by market conditions.',
};

export default function ValuationPage() {
  const clientTypes = [
    {
      title: 'Attorneys',
      items: [
        'Proven expert testimony in circuit & federal court',
        'Condemnation & Eminent domain dispute analysis',
        'Cross-examination advisory and trial consultation',
        'Probate, marital dissolution, and bankruptcy valuations',
      ],
    },
    {
      title: 'Lenders',
      items: [
        'Liquidation and orderly disposal value determinations',
        'Fee assignments and institutional underwriting support',
        'Secondary market appraisal reviews and audit compliance',
        'Leased fee analysis and discounted cash flow models (ARGUS)',
      ],
    },
    {
      title: 'Accountants',
      items: [
        'Lease and market rent determinations for GAAP accounting',
        'Useful life determination for accelerated depreciation',
        'Retrospective asset valuation for estate tax filings',
        'Corporate tax planning, restructuring, and cost segregation',
      ],
    },
    {
      title: 'Investors',
      items: [
        'Analysis of commercial portfolio for potential tax savings',
        'Lease and market rent absorption studies',
        'Comprehensive feasibility and financial market studies',
        'Proposed construction cost review and highest & best use analysis',
      ],
    },
  ];

  const propertyTypes = [
    'Commercial / Retail Centers', 'Industrial Facilities & Warehousing', 'Multi-Family Apartments', 'Hotels & Motels',
    'Corporate Office Complexes', 'Special-Use Facilities', 'Utility Easements', 'Right-of-Ways',
    'Educational Campuses & Schools', 'Religious Institutions', 'Luxury Residential Estates', 'Marinas & Waterfront Land',
    'Medical & Surgical Centers', 'Gas Stations & Travel Plazas'
  ];

  const testimonials = [
    { quote: 'I appreciate that they always meet the agreed-upon deadline without compromising on analytical rigor.', author: 'Commercial Real Estate Investor' },
    { quote: 'Simply the best valuation and consulting firm in Michigan.', author: 'Managing Senior CPA' },
    { quote: 'Excellent, knowledgeable, and an exceptionally powerful expert witness.', author: 'Lead Corporate Trial Attorney' },
  ];

  return (
    <div>
      {/* Modern Subpage Hero */}
      <section className="subpage-bento-hero">
        <div className="container">
          <div className="subpage-bento-hero-grid">
            <div>
              <span className="bento-badge-tag">Valuation Practice</span>
              <h1 className="subpage-hero-title">
                Real Estate Valuation &amp; Consulting
              </h1>
              <p className="subpage-hero-sub">
                We understand what creates property value, how such value is influenced, and how the characteristics of a property are affected by market conditions. Over 30 years of undisputed leadership.
              </p>
              <div className="subpage-pills-row">
                <div className="subpage-pill">
                  <span>Direct Line: </span>
                  <a href="tel:3132771986">(313) 277-1986</a>
                </div>
                <div className="subpage-pill">
                  <span>Fax: </span>
                  <span style={{ fontWeight: 600 }}>(313) 277-8634</span>
                </div>
                <div className="subpage-pill">
                  <span>Coverage: </span>
                  <span style={{ fontWeight: 600 }}>State of Michigan</span>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative', width: '130px', height: '130px', flexShrink: 0 }}>
              <Image 
                src="/images/jjlogo-valuation.png" 
                alt="Valuation Seal" 
                fill 
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '3.5rem 2rem 5rem' }}>
        
        {/* Core Value Proposition Bento Card with Leader Badge */}
        <div className="bento-card" style={{ marginBottom: '3.5rem', background: '#ffffff' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="bento-badge-tag">Analytical Excellence</span>
              <h2 className="bento-title-large">Understanding Property Value in Every Market Cycle</h2>
              <p className="bento-desc" style={{ fontSize: '1.05rem' }}>
                We work with you to analyze, summarize, and communicate our conclusions in an effective and understandable manner. 
                Because each assignment is unique, so are our analytical approaches. Our staff has extensive experience and has 
                completed thousands of appraisals across the full spectrum of Michigan real property.
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <Link href="#contact-form" className="btn-bento-primary">
                  Request a Valuation Quote &rarr;
                </Link>
              </div>
            </div>

            {/* Official Facebook Certification Banner */}
            <div style={{ position: 'relative', height: '180px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
              <Image 
                src="/images/fb-valuation-expert-banner.jpg" 
                alt="Jumana Judeh, MAI, CCIM, MCAO Certified General Appraiser" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Real Estate Market Intelligence Section (From Facebook CoStar Analysis) */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
            <span className="bento-badge-tag">Market Analytics</span>
            <h2 className="bento-title-large">Following Market Trends &amp; Transaction Volumes</h2>
            <p className="bento-desc">
              Accurate valuation requires rigorous tracking of commercial transaction volume across retail, multi-family, office, and industrial submarkets.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Chart Card */}
            <div className="bento-card" style={{ padding: '2rem' }}>
              <div style={{ position: 'relative', height: '300px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.25rem', border: '1px solid #e2e8f0' }}>
                <Image 
                  src="/images/fb-market-chart.jpg" 
                  alt="Commercial Real Estate Transaction Volume" 
                  fill 
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--bento-crimson)', marginBottom: '0.5rem' }}>Transaction Volume Studies</h3>
              <p className="bento-desc" style={{ margin: 0, fontSize: '0.95rem' }}>
                Tracking historical and active annual transaction volume across 5 core property classes to provide accurate, market-proven valuations.
              </p>
            </div>

            {/* Property Tax Appeals Card */}
            <div className="bento-card" style={{ padding: '2rem' }}>
              <div style={{ position: 'relative', height: '300px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.25rem', border: '1px solid #e2e8f0' }}>
                <Image 
                  src="/images/fb-tax-assessment.jpg" 
                  alt="Detroit Property Tax Appeals" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--bento-crimson)', marginBottom: '0.5rem' }}>Property Tax Appeals &amp; Assessments</h3>
              <p className="bento-desc" style={{ margin: 0, fontSize: '0.95rem' }}>
                Guiding commercial and residential owners through municipal tax appeal windows and Board of Review hearings with defensible evidence.
              </p>
            </div>
          </div>
        </div>

        {/* Who We Serve - 4 Grid Bento */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
            <span className="bento-badge-tag">Client Categories</span>
            <h2 className="bento-title-large">Authoritative Advisory for Key Decision Makers</h2>
            <p className="bento-desc">Tailored analysis designed to withstand scrutiny from lenders, courts, and regulators.</p>
          </div>

          <div className="bento-feature-grid">
            {clientTypes.map((c, idx) => (
              <div key={idx} className="bento-feature-box">
                <h4>{c.title}</h4>
                <ul className="bento-bullet-list">
                  {c.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Legal & Damage Services - Bento 2 Columns */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
            <span className="bento-badge-tag">Forensic Appraisal Services</span>
            <h2 className="bento-title-large">Specialized Legal &amp; Damage Valuations</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Title Claims */}
            <div className="bento-feature-box" style={{ borderLeft: '5px solid var(--bento-gold)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div style={{ position: 'relative', width: '52px', height: '52px', flexShrink: 0 }}>
                  <Image src="/images/title-claims.png" alt="Title Claims" fill style={{ objectFit: 'contain' }} />
                </div>
                <div>
                  <h4 style={{ margin: 0 }}>Title Claims &amp; Defects</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--bento-gold)', fontWeight: 800, textTransform: 'uppercase' }}>
                    Title Policy &amp; Boundary Analysis
                  </span>
                </div>
              </div>
              <p className="bento-desc" style={{ marginBottom: '1rem' }}>
                <strong>Title Policy Coverage:</strong> Determine covered loss or damage up to the policy amount under Michigan title insurances.
              </p>
              <p className="bento-desc" style={{ margin: 0 }}>
                <strong>Actual Loss Valuations:</strong> Calculate difference in value with defect vs. without defect using historical market proof.
              </p>
            </div>

            {/* Insurance Damage */}
            <div className="bento-feature-box" style={{ borderLeft: '5px solid var(--bento-crimson)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div style={{ position: 'relative', width: '52px', height: '52px', flexShrink: 0 }}>
                  <Image src="/images/insurance-damage.png" alt="Insurance Damage" fill style={{ objectFit: 'contain' }} />
                </div>
                <div>
                  <h4 style={{ margin: 0 }}>Insurance Damage</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--bento-crimson)', fontWeight: 800, textTransform: 'uppercase' }}>
                    Total Loss &amp; Diminished Value
                  </span>
                </div>
              </div>
              <p className="bento-desc" style={{ marginBottom: '1rem' }}>
                <strong>Total Loss Valuations:</strong> Determine the value of property that is beyond repair using market data, build sheets, and comparable sales.
              </p>
              <p className="bento-desc" style={{ margin: 0 }}>
                <strong>Diminished Value Appraisals:</strong> Assess loss in market value due to damage, helping you recover owed compensation from insurers.
              </p>
            </div>
          </div>
        </div>

        {/* Experience in All Property Types & Testimonials */}
        <div className="bento-card" style={{ background: '#ffffff', marginBottom: '4rem', padding: '3.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3.5rem', alignItems: 'start' }}>
            <div>
              <span className="bento-badge-tag">Asset Versatility</span>
              <h2 className="bento-title-large">Experience in All Property Types</h2>
              <p className="bento-desc">
                Our team of senior appraisers has proven historical experience analyzing every class of commercial and residential property:
              </p>
              
              <div className="bento-tags-cloud">
                {propertyTypes.map((type, i) => (
                  <span key={i} className="bento-tag-item">{type}</span>
                ))}
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--bento-text-muted)', fontStyle: 'italic', marginTop: '1rem' }}>
                * List not inclusive, contact our value experts about your specific property portfolio.
              </p>
            </div>

            <div>
              <span className="bento-badge-tag">Client Validation</span>
              <h2 className="bento-title-large">Client Testimonials</h2>
              {testimonials.map((t, idx) => (
                <div key={idx} className="bento-quote-item">
                  <p>“{t.quote}”</p>
                  <span>— {t.author}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Areas We Serve with Visuals */}
        <div id="coverage" style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
            <span className="bento-badge-tag">Territorial Coverage</span>
            <h2 className="bento-title-large">Areas We Serve</h2>
            <p className="bento-desc">Providing statewide appraisal services across Michigan with focused residential expertise.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div className="bento-card">
              <div style={{ position: 'relative', width: '100%', height: '260px', marginBottom: '1.5rem', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <Image 
                  src="/images/michigan-map.jpg" 
                  alt="Michigan Non-Residential Service Area Map" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--bento-crimson)', marginBottom: '0.5rem', fontWeight: 800 }}>Non-Residential Appraisal Services</h3>
              <p className="bento-desc" style={{ margin: 0 }}>
                Our coverage area is the <strong>entire State of Michigan</strong> including the Upper Peninsula. We are on the road most of our time traveling the highways and byways of the State.
              </p>
            </div>

            <div className="bento-card">
              <div style={{ position: 'relative', width: '100%', height: '260px', marginBottom: '1.5rem', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <Image 
                  src="/images/office-building.jpg" 
                  alt="Residential & Commercial Service Area" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--bento-crimson)', marginBottom: '0.5rem', fontWeight: 800 }}>Residential Appraisal Services</h3>
              <p className="bento-desc" style={{ margin: 0 }}>
                Our coverage area includes <strong>Wayne, Oakland, Macomb, and Washtenaw</strong> counties.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bento-contact-card" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <ContactForm subtitle="Connect with our valuation experts for appraisal assignments, probate, and expert witness testimony" />
        </div>

      </div>
    </div>
  );
}
