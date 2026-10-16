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
      subtitle: 'Litigation & Expert Witness Support',
      image: '/images/office-building.jpg',
      items: [
        'Proven expert testimony in circuit & federal court',
        'Condemnation & Eminent domain dispute analysis',
        'Cross-examination advisory and trial consultation',
        'Probate, marital dissolution, and bankruptcy valuations',
      ],
    },
    {
      title: 'Lenders',
      subtitle: 'Underwriting & Appraisal Reviews',
      image: '/images/fb-commercial-building.jpg',
      items: [
        'Liquidation and orderly disposal value determinations',
        'Fee assignments and institutional underwriting support',
        'Secondary market appraisal reviews and audit compliance',
        'Leased fee analysis and discounted cash flow models (ARGUS)',
      ],
    },
    {
      title: 'Accountants',
      subtitle: 'Tax Planning & Asset Valuation',
      image: '/images/fb-tax-assessment.jpg',
      items: [
        'Lease and market rent determinations for GAAP accounting',
        'Useful life determination for accelerated depreciation',
        'Retrospective asset valuation for estate tax filings',
        'Corporate tax planning, restructuring, and cost segregation',
      ],
    },
    {
      title: 'Investors',
      subtitle: 'Feasibility & Portfolio Advisory',
      image: '/images/office-building-square.jpg',
      items: [
        'Analysis of commercial portfolio for potential tax savings',
        'Lease and market rent absorption studies',
        'Comprehensive feasibility and financial market studies',
        'Proposed construction cost review and highest & best use analysis',
      ],
    },
  ];

  const propertyTypes = [
    'Commercial / Retail', 'Industrial', 'Apartments', 'Hotels / Motels',
    'Office', 'Special Use', 'Easements', 'Right-of-Ways',
    'Schools', 'Religious Institutions', 'Residential', 'Marinas',
    'Medical Facilities', 'Gas Stations / Truck Stops'
  ];

  const testimonials = [
    {
      quote: 'I appreciate that they always meet the agreed-upon deadline without compromising on analytical rigor.',
      author: 'Client, Investor',
      role: 'Commercial Portfolio Owner'
    },
    {
      quote: 'Simply the best valuation and consulting firm in Michigan.',
      author: 'Client, Accountant',
      role: 'Managing Senior CPA'
    },
    {
      quote: 'Excellent, knowledgeable, and an exceptionally powerful expert witness.',
      author: 'Client, Attorney',
      role: 'Lead Trial Counsel'
    },
  ];

  return (
    <div>
      {/* ==========================================================================
          MODERN CLEAN SUBPAGE HERO
          ========================================================================== */}
      <section className="subpage-bento-hero">
        <div className="container">
          <div className="subpage-bento-hero-grid">
            <div>
              <span className="bento-badge-tag">Valuation &amp; Consulting Practice</span>
              <h1 className="subpage-hero-title">
                Real Estate Valuation and Consulting
              </h1>
              <p className="subpage-hero-sub">
                We understand what creates property value, how such value is influenced, and how the characteristics of a property are affected by market conditions.
              </p>
              
              <div className="subpage-pills-row">
                <div className="subpage-pill">
                  <span>Call: </span>
                  <a href="tel:3132771986">(313) 277-1986</a>
                </div>
                <div className="subpage-pill">
                  <span>Email: </span>
                  <a href="mailto:JumanaJ@JudehOnLine.com">JumanaJ@JudehOnLine.com</a>
                </div>
                <div className="subpage-pill">
                  <span>Fax: </span>
                  <span style={{ fontWeight: 600 }}>(313) 277-8634</span>
                </div>
                <div className="subpage-pill">
                  <span>Coverage: </span>
                  <span style={{ fontWeight: 700, color: 'var(--bento-crimson)' }}>Entire State of Michigan</span>
                </div>
              </div>

              <div style={{ marginTop: '1.75rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="#contact-form" className="btn-bento-primary">
                  Contact Our Value Experts &rarr;
                </Link>
                <Link href="#property-types" className="btn-bento-gold">
                  Explore Property Types
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative', width: '150px', height: '150px', flexShrink: 0 }}>
              <Image 
                src="/images/jjlogo-valuation.png" 
                alt="Valuation Seal" 
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
        
        {/* Core Philosophy Banner with Authentic Building Background & Leader Badge */}
        <div className="bento-card" id="appraisal" style={{ marginBottom: '4rem', background: '#ffffff', padding: '3.5rem 3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="bento-badge-tag">Service You Can Trust</span>
              <h2 className="bento-title-large">Over 30 Years of Client Success</h2>
              <p className="bento-desc" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                At Judeh &amp; Associates, we work directly with you to analyze, summarize, and communicate valuation conclusions in an effective, defensible, and understandable manner. Because every property and legal proceeding is unique, our analytical methodologies are custom-tailored to provide the highest level of scrutiny in boardrooms and courtrooms alike.
              </p>
              
              <div style={{ display: 'flex', gap: '1.25rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--bento-obsidian)', fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--bento-gold)', fontSize: '1.2rem' }}>✓</span> MAI &amp; CCIM Designated
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--bento-obsidian)', fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--bento-gold)', fontSize: '1.2rem' }}>✓</span> Certified General Appraisers
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--bento-obsidian)', fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--bento-gold)', fontSize: '1.2rem' }}>✓</span> 100% Certified Woman-Owned
                </div>
              </div>
            </div>

            {/* Official Certification Banner */}
            <div style={{ position: 'relative', height: '220px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '2px solid var(--bento-gold)', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
              <Image 
                src="/images/fb-valuation-expert-banner.jpg" 
                alt="Jumana Judeh, MAI, CCIM, MCAO Certified General Appraiser" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* ==========================================================================
            VALUATION AND CONSULTING FOR (The 4 Primary Stakeholders)
            ========================================================================== */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.75rem' }}>
            <span className="bento-badge-tag">Client Practice Areas</span>
            <h2 className="bento-title-large">Valuation and Consulting For</h2>
            <p className="bento-desc">
              Tailored valuation analyses designed to withstand intense scrutiny from lending underwriters, state regulators, and courts of law.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '2rem' }}>
            {clientTypes.map((c, idx) => (
              <div key={idx} className="bento-card" style={{ padding: '0', overflow: 'hidden', background: '#ffffff' }}>
                <div style={{ position: 'relative', width: '100%', height: '180px' }}>
                  <Image 
                    src={c.image} 
                    alt={c.title} 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(9,14,23,0.15) 0%, rgba(9,14,23,0.75) 100%)' }} />
                  <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem', right: '1.25rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--bento-gold)' }}>
                      {c.subtitle}
                    </span>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                      {c.title}
                    </h3>
                  </div>
                </div>

                <div style={{ padding: '1.75rem 1.5rem' }}>
                  <ul className="bento-bullet-list">
                    {c.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================================================
            FORENSIC CONSULTING & SPECIALIZED DAMAGE VALUATIONS (Consulting Anchor)
            ========================================================================== */}
        <div id="consulting" style={{ marginBottom: '4.5rem', scrollMarginTop: '110px' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.75rem' }}>
            <span className="bento-badge-tag">Specialized Valuation Practice</span>
            <h2 className="bento-title-large">Forensic Valuation &amp; Damage Consulting</h2>
            <p className="bento-desc">
              Establishing diminished property value resulting from defects, takings, and physical or environmental damages.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            
            {/* Title Claims Card */}
            <div className="bento-card" style={{ background: '#ffffff', padding: '2.5rem', borderLeft: '6px solid var(--bento-gold)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ position: 'relative', width: '56px', height: '56px', flexShrink: 0 }}>
                  <Image src="/images/title-claims.png" alt="Title Claims" fill style={{ objectFit: 'contain' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--bento-obsidian)', margin: 0 }}>Title Claims</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--bento-gold)', fontWeight: 800, textTransform: 'uppercase' }}>
                    Establishment of Diminution in Value
                  </span>
                </div>
              </div>

              <p className="bento-desc" style={{ marginBottom: '1.25rem' }}>
                Evaluate reduction in market value due to title defects, boundary overlaps, encumbrances, or external factors like access impairments, nuisances, and easements.
              </p>

              <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
                <p style={{ margin: '0 0 0.5rem', fontSize: '0.92rem', color: 'var(--bento-obsidian)', fontWeight: 700 }}>
                  Defect Valuation vs. Clean Title:
                </p>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6' }}>
                  We calculate historical and present actual losses to support policy claims up to the coverage amount under Michigan title insurance guidelines.
                </p>
              </div>

              <div style={{ position: 'relative', height: '170px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                <Image 
                  src="/images/fb-property-taxes.jpg" 
                  alt="Title and Tax Analysis" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Insurance Damage Card */}
            <div className="bento-card" style={{ background: '#ffffff', padding: '2.5rem', borderLeft: '6px solid var(--bento-crimson)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ position: 'relative', width: '56px', height: '56px', flexShrink: 0 }}>
                  <Image src="/images/insurance-damage.png" alt="Insurance Damage" fill style={{ objectFit: 'contain' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--bento-obsidian)', margin: 0 }}>Insurance Damage</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--bento-crimson)', fontWeight: 800, textTransform: 'uppercase' }}>
                    Total Loss &amp; Diminished Value
                  </span>
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--bento-crimson)', marginBottom: '0.35rem' }}>
                  Total Loss Valuations
                </h4>
                <p className="bento-desc" style={{ fontSize: '0.92rem', margin: 0 }}>
                  Determine the true market value of property damaged beyond repair using verified replacement cost sheets, salvage metrics, and comparable historic sales.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--bento-crimson)', marginBottom: '0.35rem' }}>
                  Diminished Value Appraisals
                </h4>
                <p className="bento-desc" style={{ fontSize: '0.92rem', margin: 0 }}>
                  Assess the permanent loss in market value due to structural, water, or casualty damages, helping clients recover full owed compensation from insurers.
                </p>
              </div>

              <div style={{ position: 'relative', height: '170px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                <Image 
                  src="/images/fb-detroit-research.jpg" 
                  alt="Forensic Research and Damage Analysis" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* ==========================================================================
            MARKET DATA SECTION (Market Trends & Transaction Analytics)
            ========================================================================== */}
        <div id="market-data" style={{ marginBottom: '4.5rem', scrollMarginTop: '110px' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.75rem' }}>
            <span className="bento-badge-tag">Market Intelligence</span>
            <h2 className="bento-title-large">Real Estate Market Trends &amp; Data</h2>
            <p className="bento-desc">
              Accurate valuation requires rigorous tracking of commercial transaction volume, rent absorption, and property tax assessments across Michigan markets.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            {/* Chart Card */}
            <div className="bento-card" style={{ padding: '2rem', background: '#ffffff' }}>
              <div style={{ position: 'relative', height: '280px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.25rem', border: '1px solid #e2e8f0' }}>
                <Image 
                  src="/images/fb-market-chart.jpg" 
                  alt="Commercial Real Estate Transaction Volume" 
                  fill 
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--bento-crimson)', marginBottom: '0.5rem' }}>
                Transaction Volume &amp; Submarket Trends
              </h3>
              <p className="bento-desc" style={{ margin: 0, fontSize: '0.95rem' }}>
                Ongoing analysis of annual transaction activity across retail, industrial, office, multi-family, and special purpose assets.
              </p>
            </div>

            {/* Assessment Trends */}
            <div className="bento-card" style={{ padding: '2rem', background: '#ffffff' }}>
              <div style={{ position: 'relative', height: '280px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.25rem', border: '1px solid #e2e8f0' }}>
                <Image 
                  src="/images/fb-market-trends.jpg" 
                  alt="Real Estate Market Trends" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--bento-crimson)', marginBottom: '0.5rem' }}>
                Quarterly Market Reports &amp; Price Indexes
              </h3>
              <p className="bento-desc" style={{ margin: 0, fontSize: '0.95rem' }}>
                Empirical evidence tracking capital rates, net absorption, and market rent shifts for tax tribunals, lenders, and litigation.
              </p>
            </div>

          </div>
        </div>

        {/* ==========================================================================
            EXPERIENCE IN ALL PROPERTY TYPES & TESTIMONIALS (Exact Copy from judehonline.com)
            ========================================================================== */}
        <div id="property-types" className="bento-card" style={{ background: '#ffffff', marginBottom: '4.5rem', padding: '3.5rem 3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3.5rem', alignItems: 'start' }}>
            <div>
              <span className="bento-badge-tag">Asset Versatility</span>
              <h2 className="bento-title-large">Experience in All Property Types</h2>
              <p className="bento-desc">
                Our team of senior appraisers has proven historical experience analyzing every class of commercial, industrial, and residential real estate:
              </p>
              
              <div className="bento-tags-cloud">
                {propertyTypes.map((type, i) => (
                  <span key={i} className="bento-tag-item">{type}</span>
                ))}
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--bento-text-muted)', fontStyle: 'italic', marginTop: '1.25rem' }}>
                * List not inclusive, contact our value experts about your specific property portfolio.
              </p>

              <div style={{ marginTop: '2rem' }}>
                <Link href="#contact-form" className="btn-bento-primary">
                  Inquire About Your Property &rarr;
                </Link>
              </div>
            </div>

            <div>
              <span className="bento-badge-tag">Client Validation</span>
              <h2 className="bento-title-large">Client Testimonials</h2>
              {testimonials.map((t, idx) => (
                <div key={idx} className="bento-quote-item">
                  <p>“{t.quote}”</p>
                  <span>— {t.author} <small style={{ opacity: 0.75 }}>({t.role})</small></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==========================================================================
            AREAS WE SERVE (Statewide Non-Residential + 4 Counties Residential)
            ========================================================================== */}
        <div id="coverage" style={{ marginBottom: '4.5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.75rem' }}>
            <span className="bento-badge-tag">Territorial Coverage</span>
            <h2 className="bento-title-large">Areas We Serve</h2>
            <p className="bento-desc">
              Providing statewide appraisal coverage across Michigan with concentrated residential expertise in southeastern counties.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            {/* Non-Residential Coverage */}
            <div className="bento-card" style={{ background: '#ffffff', padding: '2rem' }}>
              <div style={{ position: 'relative', width: '100%', height: '260px', marginBottom: '1.5rem', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <Image 
                  src="/images/michigan-map.jpg" 
                  alt="Michigan Non-Residential Service Area Map" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <span className="bento-badge-tag">Commercial &amp; Industrial</span>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--bento-crimson)', marginBottom: '0.75rem', fontWeight: 800 }}>
                Non-Residential Appraisal Services
              </h3>
              <p className="bento-desc" style={{ margin: 0, lineHeight: '1.7' }}>
                Our coverage area is the <strong>entire State of Michigan</strong> including the Upper Peninsula. We are on the road most of our time traveling the highways and byways of the State.
              </p>
            </div>

            {/* Residential Coverage */}
            <div className="bento-card" style={{ background: '#ffffff', padding: '2rem' }}>
              <div style={{ position: 'relative', width: '100%', height: '260px', marginBottom: '1.5rem', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <Image 
                  src="/images/four-counties-map.jpg" 
                  alt="Wayne, Oakland, Macomb, Washtenaw County Map" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <span className="bento-badge-tag">Residential &amp; Estates</span>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--bento-crimson)', marginBottom: '0.75rem', fontWeight: 800 }}>
                Residential Appraisal Services
              </h3>
              <p className="bento-desc" style={{ margin: 0, lineHeight: '1.7' }}>
                Our coverage area includes <strong>Wayne, Oakland, Macomb, and Washtenaw</strong> counties.
              </p>
            </div>

          </div>
        </div>

        {/* ==========================================================================
            CONTACT FORM SECTION
            ========================================================================== */}
        <div id="contact-form" className="bento-contact-card" style={{ maxWidth: '840px', margin: '0 auto', scrollMarginTop: '110px' }}>
          <ContactForm subtitle="Connect with our valuation experts for appraisal assignments, probate, and expert witness testimony" />
        </div>

      </div>
    </div>
  );
}
