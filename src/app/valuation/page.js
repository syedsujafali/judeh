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
      {/* Luxury Subpage Header */}
      <section className="lux-subpage-hero">
        <div className="container lux-subpage-grid">
          <div>
            <span className="lux-eyebrow">Practice Area Overview</span>
            <h1 className="lux-subpage-title">
              Real Estate Valuation and Consulting
            </h1>
            <p className="lux-subpage-desc">
              We understand what creates property value, how such value is influenced, and how the characteristics of a property are affected by market conditions.
            </p>
            <div className="lux-contact-meta-row">
              <div className="lux-meta-pill">
                <span>Direct Line: </span>
                <a href="tel:3132771986">(313) 277-1986</a>
              </div>
              <div className="lux-meta-pill">
                <span>Executive Email: </span>
                <a href="mailto:JumanaJ@JudehOnLine.com">JumanaJ@JudehOnLine.com</a>
              </div>
            </div>
          </div>

          <div className="lux-logo-emblem">
            <div style={{ position: 'relative', width: '230px', height: '135px' }}>
              <Image 
                src="/images/jjlogo-valuation.png" 
                alt="Judeh Valuation Emblem" 
                fill 
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Body Content */}
      <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        
        {/* Practice Areas / Client Sectors */}
        <section>
          <div className="lux-section-header">
            <span className="lux-eyebrow">Industry Practice Sectors</span>
            <h2 className="lux-section-title">Valuation and Consulting For:</h2>
            <p className="lux-section-subtitle">
              Delivering authoritative, court-defensible valuations for leading legal, financial, and accounting institutions.
            </p>
          </div>

          <div className="lux-grid-cards">
            {clientTypes.map((client, idx) => (
              <div key={idx} className="lux-feature-card">
                <h4>{client.title}</h4>
                <ul className="lux-feature-list">
                  {client.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Specialized Appraisals: Title Claims & Insurance Damage */}
        <section style={{ margin: '5rem 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: '2.5rem' }}>
            {/* Title Claims */}
            <div className="lux-feature-card" style={{ borderLeft: '6px solid var(--lux-gold)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ position: 'relative', width: '56px', height: '56px', flexShrink: 0 }}>
                  <Image src="/images/title-claims.png" alt="Title Claims" fill style={{ objectFit: 'contain' }} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.6rem' }}>Title Claims</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--lux-gold)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Establishment of Diminution in Value
                  </span>
                </div>
              </div>
              <p style={{ color: 'var(--lux-text-body)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                Evaluate reduction in market value due to title defects, liens, encumbrances, or external factors like nuisances, subsidence, or access impairments.
              </p>
            </div>

            {/* Insurance Damage */}
            <div className="lux-feature-card" style={{ borderLeft: '6px solid var(--lux-crimson)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ position: 'relative', width: '56px', height: '56px', flexShrink: 0 }}>
                  <Image src="/images/insurance-damage.png" alt="Insurance Damage" fill style={{ objectFit: 'contain' }} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.6rem' }}>Insurance Damage</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--lux-crimson)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Total Loss &amp; Diminished Value
                  </span>
                </div>
              </div>
              <p style={{ color: 'var(--lux-text-body)', marginBottom: '1rem', lineHeight: 1.8, fontSize: '1.05rem' }}>
                <strong>Total Loss Valuations:</strong> Determine the value of property that is beyond repair using market data, build sheets, and comparable sales.
              </p>
              <p style={{ color: 'var(--lux-text-body)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                <strong>Diminished Value Appraisals:</strong> Assess loss in market value due to damage, helping you recover owed compensation from insurers.
              </p>
            </div>
          </div>
        </section>

        {/* Experience in All Property Types & Testimonials */}
        <section style={{ 
          background: '#ffffff', 
          border: '1px solid var(--lux-gold-border)', 
          borderRadius: 'var(--radius-lg)', 
          padding: '4rem',
          boxShadow: 'var(--shadow-lux-card)',
          margin: '5rem 0'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <span className="lux-eyebrow">Asset Versatility</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--lux-dark)', margin: '0.5rem 0 1.25rem' }}>
                Experience in All Property Types
              </h3>
              <p style={{ color: 'var(--lux-text-body)', marginBottom: '1.75rem', lineHeight: 1.8, fontSize: '1.1rem' }}>
                Our team of senior appraisers has proven historical experience analyzing every class of commercial and residential property:
              </p>
              
              <div className="lux-badge-cloud">
                {propertyTypes.map((type, i) => (
                  <span key={i} className="lux-tag">{type}</span>
                ))}
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--lux-text-muted)', fontStyle: 'italic', marginTop: '1.5rem' }}>
                * List not inclusive, contact our value experts about your specific property portfolio.
              </p>
            </div>

            <div>
              <span className="lux-eyebrow">Client Validation</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 600, color: 'var(--lux-dark)', margin: '0.5rem 0 1.5rem' }}>
                Client Testimonials
              </h3>
              {testimonials.map((t, idx) => (
                <div key={idx} className="lux-quote-card">
                  <p>“{t.quote}”</p>
                  <span>— {t.author}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas We Serve with Visuals */}
        <section id="coverage" style={{ margin: '5rem 0' }}>
          <div className="lux-section-header">
            <span className="lux-eyebrow">Territorial Coverage</span>
            <h2 className="lux-section-title">Areas We Serve</h2>
            <p className="lux-section-subtitle">Providing statewide appraisal services across Michigan with focused residential expertise.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: '3rem' }}>
            <div className="lux-feature-card" style={{ padding: '2.5rem' }}>
              <div style={{ position: 'relative', width: '100%', height: '260px', marginBottom: '1.75rem', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <Image 
                  src="/images/michigan-map.jpg" 
                  alt="Michigan Non-Residential Service Area Map" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h4 style={{ fontSize: '1.8rem', color: 'var(--lux-dark)', marginBottom: '0.75rem' }}>Non-Residential Appraisal Services</h4>
              <p style={{ color: 'var(--lux-text-body)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                Our coverage area is the <strong>entire State of Michigan</strong> including the Upper Peninsula. We are on the road most of our time traveling the highways and byways of the State.
              </p>
            </div>

            <div className="lux-feature-card" style={{ padding: '2.5rem' }}>
              <div style={{ position: 'relative', width: '100%', height: '260px', marginBottom: '1.75rem', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <Image 
                  src="/images/office-building.jpg" 
                  alt="Residential & Commercial Service Area" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h4 style={{ fontSize: '1.8rem', color: 'var(--lux-dark)', marginBottom: '0.75rem' }}>Residential Appraisal Services</h4>
              <p style={{ color: 'var(--lux-text-body)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                Our coverage area includes <strong>Wayne, Oakland, Macomb, and Washtenaw</strong> counties.
              </p>
            </div>
          </div>
        </section>

        {/* Form */}
        <div style={{ marginTop: '6rem' }}>
          <ContactForm subtitle="Connect with our valuation experts for appraisal assignments, probate, and expert witness testimony" />
        </div>
      </div>
    </div>
  );
}
