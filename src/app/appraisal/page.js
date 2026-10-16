import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Appraisal Services | Judeh & Associates',
  description: 'Judeh & Associates provides complete commercial and residential appraisal and consulting for real property. Over 30 years of client success.',
};

export default function AppraisalPage() {
  const appraisalProcess = [
    {
      step: '01',
      title: 'Property Inspection',
      icon: '/images/fb-commercial-building.jpg',
      tag: 'On-Site Verification',
      desc: 'Comprehensive inspection of the subject property verifying physical construction elements, square footage, building mechanicals, deferred maintenance, and condition in an objective, unbiased assessment.',
    },
    {
      step: '02',
      title: 'Cost Approach',
      icon: '/images/office-building.jpg',
      tag: 'Replacement & Depreciated Value',
      desc: 'Development of current replacement cost of existing improvements minus physical, functional, and external obsolescence, combined with vacant land value based on comparable sales.',
    },
    {
      step: '03',
      title: 'Sales Comparison',
      icon: '/images/fb-tax-assessment.jpg',
      tag: 'Market Transactions',
      desc: 'Analysis of closed comparable property transactions across the local Michigan submarket with precise adjustments for size, location, zoning, age, and economic conditions.',
    },
    {
      step: '04',
      title: 'Income Approach',
      icon: '/images/fb-market-chart.jpg',
      tag: 'DCF & Capitalization Rates',
      desc: 'Analysis of existing and market income streams, operating expenses, capitalization rate extraction (Cap Rate), market rent absorption, and optional Discounted Cash Flow (DCF / ARGUS).',
    },
  ];

  const assignmentPurposes = [
    'Debt Financing & Mortgages',
    'Litigation & Court Proceedings',
    'Eminent Domain Takings',
    'Partial or Full Takings',
    'Utility & Access Easements',
    'Probate & Estate Administration',
    'Useful Life Determination',
    'Retrospective Valuation',
    'Corporate Tax Planning',
    'Proposed Construction Review',
    'Acquisition & Disposition',
    'Estate Planning & Trusts',
    'Partnership Dissolution & Dispute',
    'Charitable Donations (IRS)',
    'Tax Preparation & Accounting',
    'Divorce & Marital Dissolution',
    'Market Feasibility Study',
    'Bankruptcy Proceedings',
    'Foreclosure & Distressed Assets',
    'Lease & Market Rent Studies',
    'Corporate Expansion / Downsizing',
    'Assessment & Tax Appeal',
    'Life Estate Appraisals',
  ];

  const stakeholderServices = [
    {
      stakeholder: 'Attorneys',
      badge: 'Legal & Courtroom',
      points: [
        'Credible, court-tested expert witness testimony',
        'Demonstrated ability to withstand intense cross-examination',
        'Independent appraisal reviews & rebuttal analysis',
      ],
    },
    {
      stakeholder: 'Bail Bonds',
      badge: 'Collateral Assessment',
      points: [
        'Fast turnaround appraisals for collateral security verification',
        'Defensible fair market valuation for bail underwriting',
      ],
    },
    {
      stakeholder: 'Bankruptcy',
      badge: 'Federal Court',
      points: [
        'Court-compliant appraisals for Chapter 7, 11, and 13 filings',
        'Liquidation and orderly disposal value calculations',
      ],
    },
    {
      stakeholder: 'Buyers and Sellers',
      badge: 'Transaction Advisory',
      points: [
        'Unbiased assistance in establishing realistic fair market value',
        'Due diligence support prior to contract execution',
      ],
    },
    {
      stakeholder: 'Contributions & Donations',
      badge: 'IRS Compliance',
      points: [
        'IRS Form 8283 guideline compliant non-cash contribution appraisals',
        'Historical property and land conservation easements',
      ],
    },
    {
      stakeholder: 'Divorce & Family Law',
      badge: 'Equitable Distribution',
      points: [
        'Neutral, credible property valuation for marital dissolution',
        'Separate versus marital asset evaluation',
      ],
    },
    {
      stakeholder: 'Estate Planners & Probate',
      badge: 'Estate Settlement',
      points: [
        'Credible valuation as of the date of passing (step-up basis)',
        'Estate tax returns and trust asset allocation',
      ],
    },
    {
      stakeholder: 'Government & Municipalities',
      badge: 'MDOT & MDNR Approved',
      points: [
        'MDOT and MDNR approved certified appraiser credentials',
        'Condemnation, right-of-way, and full or partial takings',
        'Gordie Howe International Bridge parcel valuations',
      ],
    },
    {
      stakeholder: 'Homeowners',
      badge: 'Private Valuation',
      points: [
        'PMI (Private Mortgage Insurance) removal reappraisals',
        'Casualty loss and disaster appraisal support',
      ],
    },
    {
      stakeholder: 'Insurance Companies',
      badge: 'Claims & Underwriting',
      points: [
        'Pre-disaster underwriting and insurable value estimates',
        'Post-casualty loss and structural damage assessments',
      ],
    },
    {
      stakeholder: 'Lenders & Financial Institutions',
      badge: 'Institutional Banking',
      points: [
        'Fully USPAP compliant and FIRREA compliant appraisal reports',
        'Rigorous secondary market reviews and underwriting compliance',
      ],
    },
    {
      stakeholder: 'Real Estate Agents & Brokers',
      badge: 'Pricing Intelligence',
      points: [
        'Objective support establishing list price for complex properties',
        'Square footage and building measurement verification',
      ],
    },
    {
      stakeholder: 'Relocation Companies',
      badge: 'Corporate Relocation',
      points: [
        'ERC standardized appraisals for corporate transfers and home buyouts',
        'Anticipated sales price forecasting within standard marketing periods',
      ],
    },
    {
      stakeholder: 'Tax Appeals',
      badge: 'Tax Tribunal',
      points: [
        'Adherence to Michigan Tax Tribunal (MTT) evidence standards',
        'Representation at Board of Review and formal tribunal hearings',
      ],
    },
    {
      stakeholder: 'Title Companies',
      badge: 'Diminution in Value',
      points: [
        'Easement encroachment and defect impact valuations',
        'Actual loss calculation up to title insurance policy limits',
      ],
    },
  ];

  const propertyTypes = [
    'Apartment Buildings', 'Banquet Halls', 'Bowling Alleys', 'Car Washes',
    'Churches', 'Collision Shops / Garages', 'Commercial Buildings', 'Community Centers / Union Halls',
    'Easements', 'Eminent Domains', 'Gasoline Stations', 'Hotels / Motels',
    'Light & Heavy Industrial', 'Big Box Retail', 'Mixed Use', 'Liquor & Grocery Stores',
    'Marinas', 'Medical Buildings', 'Office Buildings', 'Parking Structures',
    'Proposed Constructions', 'Residential Properties', 'Restaurants & Lounges', 'Schools',
    'Strip Centers', 'Truck Stops', 'Truck Terminals', 'Vacant Land', 'Veterinary Clinics'
  ];

  return (
    <div>
      {/* ==========================================================================
          SUBPAGE HERO: APPRAISAL SERVICES
          ========================================================================== */}
      <section className="subpage-bento-hero">
        <div className="container">
          <div className="subpage-bento-hero-grid">
            <div>
              <span className="bento-badge-tag">Judeh &amp; Associates Appraisal Practice</span>
              <h1 className="subpage-hero-title">
                Appraisal Services
              </h1>
              <p className="subpage-hero-sub">
                Judeh &amp; Associates provides complete commercial and residential appraisal and consulting for real property. Our appraisal experts can assist you in making decisions that can better position your company for critical financial decisions.
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
                  <span>Status: </span>
                  <span style={{ fontWeight: 700, color: 'var(--bento-crimson)' }}>MAI, CCIM &amp; Certified General</span>
                </div>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="#contact-form" className="btn-bento-primary">
                  Contact Our Value Experts &rarr;
                </Link>
                <Link href="#process" className="btn-bento-gold">
                  Explore The Appraisal Process
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative', width: '150px', height: '150px', flexShrink: 0 }}>
              <Image 
                src="/images/the-judeh-group-logo.png" 
                alt="Judeh & Associates Appraisal Practice" 
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

        {/* 4-Step Commercial Appraisal Process */}
        <div id="process" style={{ marginBottom: '4.5rem', scrollMarginTop: '110px' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.75rem' }}>
            <span className="bento-badge-tag">Methodology &amp; Standards</span>
            <h2 className="bento-title-large">Commercial Real Estate Appraisal Process</h2>
            <p className="bento-desc">
              Every appraisal assignment adheres strictly to the Uniform Standards of Professional Appraisal Practice (USPAP) and federal FIRREA guidelines.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {appraisalProcess.map((proc, i) => (
              <div key={i} className="bento-card" style={{ padding: '0', overflow: 'hidden', background: '#ffffff' }}>
                <div style={{ position: 'relative', width: '100%', height: '180px' }}>
                  <Image 
                    src={proc.icon} 
                    alt={proc.title} 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(9,14,23,0.2) 0%, rgba(9,14,23,0.85) 100%)' }} />
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--bento-gold)', color: '#ffffff', fontWeight: 900, fontSize: '0.85rem', padding: '0.2rem 0.65rem', borderRadius: 'var(--radius-sm)' }}>
                    {proc.step}
                  </div>
                  <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem', right: '1.25rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--bento-gold)' }}>
                      {proc.tag}
                    </span>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                      {proc.title}
                    </h3>
                  </div>
                </div>

                <div style={{ padding: '1.75rem 1.5rem' }}>
                  <p className="bento-desc" style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.7' }}>
                    {proc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================================================
            TWO-COLUMN BALANCED TOP ROW: Scope of Work & Property Types
            ========================================================================== */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
            
            {/* Box 1: Purpose of the Appraisal Assignment */}
            <div className="bento-card" style={{ background: '#ffffff', padding: '2.5rem', borderTop: '5px solid var(--bento-crimson)' }}>
              <span className="bento-badge-tag">Scope of Work</span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--bento-obsidian)', marginBottom: '1rem' }}>
                Purpose of the Appraisal Assignment
              </h3>
              <p className="bento-desc" style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Our certified appraisals are commissioned across a broad spectrum of commercial, municipal, and legal applications:
              </p>
              
              <ul className="bento-bullet-list" style={{ columns: 2, columnGap: '2rem' }}>
                {assignmentPurposes.map((p, idx) => (
                  <li key={idx} style={{ fontSize: '0.9rem', marginBottom: '0.6rem', breakInside: 'avoid' }}>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 2: Property Types & Visual Showcase */}
            <div className="bento-card" style={{ background: '#ffffff', padding: '2.5rem', borderTop: '5px solid var(--bento-gold)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="bento-badge-tag">Asset Portfolio</span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--bento-obsidian)', marginBottom: '1rem' }}>
                  Property Types
                </h3>
                <p className="bento-desc" style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                  Over 30 years of experience appraising diverse commercial, industrial, and residential asset classes throughout Michigan:
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                  {propertyTypes.map((t, idx) => (
                    <span key={idx} className="bento-tag-item" style={{ fontSize: '0.85rem', padding: '0.35rem 0.8rem' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Showcase Image */}
              <div style={{ position: 'relative', height: '180px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
                <Image 
                  src="/images/fb-cover-building.jpg" 
                  alt="Michigan Commercial and Special Use Real Estate" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* ==========================================================================
            CLIENT CATEGORIES (Appraisal Services by Stakeholder - Multi-Column Bento)
            ========================================================================== */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 2.75rem' }}>
            <span className="bento-badge-tag">Industry Stakeholders</span>
            <h2 className="bento-title-large">Appraisal Services by Client Category</h2>
            <p className="bento-desc">
              Specialized valuation advisory and compliance designed for key corporate, legal, and institutional partners across Michigan.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {stakeholderServices.map((s, idx) => (
              <div key={idx} className="bento-card" style={{ background: '#ffffff', padding: '1.75rem 1.5rem', borderLeft: '4px solid var(--bento-gold)', transition: 'var(--transition)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <h4 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: 'var(--bento-crimson)' }}>
                    {s.stakeholder}
                  </h4>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, background: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.2rem 0.6rem', borderRadius: '9999px', color: '#64748b' }}>
                    {s.badge}
                  </span>
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
                  {s.points.map((pt, pIdx) => (
                    <li key={pIdx} style={{ marginBottom: '0.35rem' }}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================================================
            TRUST & LEADERSHIP STATEMENT BANNER (From judehonline.com)
            ========================================================================== */}
        <div className="bento-statement-banner" style={{ marginBottom: '4.5rem', borderRadius: 'var(--radius-xl)' }}>
          <div className="container" style={{ textAlign: 'center', padding: '3.5rem 2rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--bento-gold)', display: 'block', marginBottom: '0.5rem' }}>
              Undisputed Authority
            </span>
            <h2 style={{ fontSize: '2.75rem', fontWeight: 900, color: '#ffffff', marginBottom: '1rem', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
              SERVICE YOU CAN TRUST
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#fce7eb', maxWidth: '720px', margin: '0 auto 2rem' }}>
              Judeh &amp; Associates has over 30 years of client success with real estate valuation, appraisal, and litigation advisory.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <Link href="#contact-form" className="btn-bento-gold" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem', fontWeight: 800 }}>
                CONTACT A VALUE EXPERT &rarr;
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
          <ContactForm subtitle="Request a certified commercial or residential appraisal consultation with Jumana Judeh and our valuation team" />
        </div>

      </div>
    </div>
  );
}
