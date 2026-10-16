import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Quarterly Market News | Judeh & Associates',
  description: 'Statistics and quarterly real estate market reports for Southeast Michigan real estate market segments by Judeh & Associates.',
};

export default function NewsletterPage() {
  const archives = [
    {
      year: '2026',
      badge: 'Current Year',
      reports: [
        { quarter: '2026 First Quarter Market News', pdfUrl: 'https://judehonline.com/wp-content/uploads/2026/04/2026_Q1.pdf' },
        { quarter: '2026 Second Quarter Market News', pdfUrl: 'https://judehonline.com/wp-content/uploads/2026/07/2026_Q2.pdf' },
      ],
    },
    {
      year: '2025',
      badge: 'Annual Archive',
      reports: [
        { quarter: '2025 First Quarter Market News', pdfUrl: 'https://judehonline.com/wp-content/uploads/2025/04/2025_Q1.pdf' },
        { quarter: '2025 Second Quarter Market News', pdfUrl: 'https://judehonline.com/wp-content/uploads/2025/07/2025_Q2.pdf' },
        { quarter: '2025 Third Quarter Market News', pdfUrl: 'https://judehonline.com/wp-content/uploads/2025/10/2025_Q3.pdf' },
        { quarter: '2025 Fourth Quarter Market News', pdfUrl: 'https://judehonline.com/wp-content/uploads/2026/01/2025_Q4.pdf' },
      ],
    },
    {
      year: '2024',
      badge: 'Annual Archive',
      reports: [
        { quarter: '2024 First Quarter Market News', pdfUrl: 'https://judehonline.com/wp-content/uploads/2024/04/2024_Q1.pdf' },
        { quarter: '2024 Second Quarter Market News', pdfUrl: 'https://judehonline.com/wp-content/uploads/2024/07/2024_Q2.pdf' },
        { quarter: '2024 Third Quarter Market News', pdfUrl: 'https://judehonline.com/wp-content/uploads/2024/10/2024_Q3.pdf' },
        { quarter: '2024 Fourth Quarter Market News', pdfUrl: 'https://judehonline.com/wp-content/uploads/2025/01/2024_Q4.pdf' },
      ],
    },
    {
      year: '2023',
      badge: 'Annual Archive',
      reports: [
        { quarter: '2023 Third Quarter Market News', pdfUrl: 'https://judehonline.com/wp-content/uploads/2023/10/2023_Q3.pdf' },
        { quarter: '2023 Fourth Quarter Market News', pdfUrl: 'https://judehonline.com/wp-content/uploads/2024/01/2023_Q4.pdf' },
      ],
    },
    {
      year: '2020 / 2021',
      badge: 'Historical Baseline',
      reports: [
        { quarter: '2021 First Quarter Market News', pdfUrl: 'https://judehonline.com/wp-content/uploads/2021/04/2021_Q1.pdf' },
        { quarter: '2020 Third Quarter Market News', pdfUrl: 'https://judehonline.com/wp-content/uploads/2020/10/2020_Q3.pdf' },
        { quarter: '2020 Fourth Quarter Market News', pdfUrl: 'https://judehonline.com/wp-content/uploads/2021/01/2020_Q4.pdf' },
      ],
    },
    {
      year: '2019',
      badge: 'Pre-Pandemic Baseline',
      reports: [
        { quarter: '2019 First Quarter Market News', pdfUrl: 'https://judehonline.com/wp-content/uploads/2019/04/2019_Q1.pdf' },
        { quarter: '2019 Second Quarter Market News', pdfUrl: 'https://judehonline.com/wp-content/uploads/2019/07/2019_Q2.pdf' },
        { quarter: '2019 Third Quarter Market News', pdfUrl: 'https://judehonline.com/wp-content/uploads/2019/10/2019_Q3.pdf' },
      ],
    },
    {
      year: '2017 & Prior Archive',
      badge: '15+ Years Historical Proof',
      reports: [
        { quarter: '2017 Full Year Archives (Q1 - Q4)', pdfUrl: 'https://judehonline.com/newsletter/' },
        { quarter: '2016 Full Year Archives (Q1 - Q4)', pdfUrl: 'https://judehonline.com/newsletter/' },
        { quarter: '2015 Full Year Archives (Q1 - Q4)', pdfUrl: 'https://judehonline.com/newsletter/' },
        { quarter: '2014 Full Year Archives (Q1 - Q4)', pdfUrl: 'https://judehonline.com/newsletter/' },
        { quarter: '2013 Full Year Archives (Q1 - Q4)', pdfUrl: 'https://judehonline.com/newsletter/' },
        { quarter: '2012 Full Year Archives (Q1 - Q4)', pdfUrl: 'https://judehonline.com/newsletter/' },
        { quarter: '2011 Full Year Archives (Q1 - Q4)', pdfUrl: 'https://judehonline.com/newsletter/' },
        { quarter: '2010 Full Year Archives (Q1 - Q4)', pdfUrl: 'https://judehonline.com/newsletter/' },
        { quarter: '2009 Full Year Archives (Q1 - Q4)', pdfUrl: 'https://judehonline.com/newsletter/' },
        { quarter: '2008 Great Recession Archives', pdfUrl: 'https://judehonline.com/newsletter/' },
      ],
    },
  ];

  return (
    <div>
      {/* ==========================================================================
          SUBPAGE HERO: QUARTERLY MARKET NEWS
          ========================================================================== */}
      <section className="subpage-bento-hero">
        <div className="container">
          <div className="subpage-bento-hero-grid">
            <div>
              <span className="bento-badge-tag">Southeast Michigan Market Analytics</span>
              <h1 className="subpage-hero-title">
                Quarterly Market News
              </h1>
              <p className="subpage-hero-sub">
                Statistics for Southeast Michigan Real Estate Market Segments. Providing historical and current analytical benchmarks across office, retail, industrial, and multi-family sectors.
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
                  <span>Coverage: </span>
                  <span style={{ fontWeight: 700, color: 'var(--bento-crimson)' }}>Wayne, Oakland, Macomb &amp; Washtenaw</span>
                </div>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="#reports" className="btn-bento-primary">
                  Browse Downloadable Reports &darr;
                </Link>
                <Link href="#contact-form" className="btn-bento-gold">
                  Request Custom Market Study
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative', width: '150px', height: '150px', flexShrink: 0 }}>
              <Image 
                src="/images/the-judeh-group-logo.png" 
                alt="Judeh & Associates Market Data" 
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

        {/* Visual Analytics Showcase Banner */}
        <div className="bento-card" style={{ background: '#ffffff', marginBottom: '4rem', padding: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="bento-badge-tag">Empirical Data</span>
              <h2 className="bento-title-large">Quarterly Real Estate Market Intelligence</h2>
              <p className="bento-desc" style={{ fontSize: '1.05rem', lineHeight: '1.75' }}>
                Since 2008, Judeh &amp; Associates has tracked and published quarterly market reports detailing vacancy rates, net absorption, asking rent shifts, and transaction volume trends across Metro Detroit and Southeast Michigan. Our data is cited by attorneys, lenders, courts, and corporate real estate directors.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--bento-obsidian)' }}>
                  <span style={{ color: 'var(--bento-gold)', fontSize: '1.2rem' }}>✓</span> 18+ Years Historical Data
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--bento-obsidian)' }}>
                  <span style={{ color: 'var(--bento-gold)', fontSize: '1.2rem' }}>✓</span> Verified CoStar Analytics
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--bento-obsidian)' }}>
                  <span style={{ color: 'var(--bento-gold)', fontSize: '1.2rem' }}>✓</span> Direct Downloadable PDFs
                </div>
              </div>
            </div>

            <div style={{ position: 'relative', height: '240px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '2px solid var(--bento-gold)', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
              <Image 
                src="/images/fb-market-chart.jpg" 
                alt="Commercial Real Estate Transaction Volume" 
                fill 
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>

        {/* ==========================================================================
            PDF ARCHIVE SECTION (Authentic List from judehonline.com/newsletter/)
            ========================================================================== */}
        <div id="reports" style={{ marginBottom: '4.5rem', scrollMarginTop: '110px' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.75rem' }}>
            <span className="bento-badge-tag">Downloadable Reports</span>
            <h2 className="bento-title-large">Click a link to open the PDF file</h2>
            <p className="bento-desc">
              Select any quarterly report below to inspect complete absorption tables, asking rent distributions, and commercial sales metrics.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {archives.map((group, idx) => (
              <div key={idx} className="bento-card" style={{ background: '#ffffff', padding: '2rem 2.25rem', borderTop: '4px solid var(--bento-crimson)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.85rem', borderBottom: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--bento-obsidian)', margin: 0 }}>
                    {group.year} Market Reports
                  </h3>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--bento-gold)', background: 'var(--bento-gold-light)', padding: '0.3rem 0.8rem', borderRadius: '9999px' }}>
                    {group.badge}
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                  {group.reports.map((r, rIdx) => (
                    <a 
                      key={rIdx} 
                      href={r.pdfUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bento-card"
                      style={{ 
                        padding: '1.15rem 1.25rem', 
                        background: '#f8fafc', 
                        border: '1px solid #e2e8f0', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        gap: '0.75rem',
                        transition: 'var(--transition)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontSize: '1.3rem' }}>📄</span>
                        <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--bento-crimson)' }}>
                          {r.quarter}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--bento-gold)' }}>
                        PDF &rarr;
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================================================
            STATEMENT BANNER
            ========================================================================== */}
        <div className="bento-statement-banner" style={{ marginBottom: '4.5rem', borderRadius: 'var(--radius-xl)' }}>
          <div className="container" style={{ textAlign: 'center', padding: '3.5rem 2rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--bento-gold)', display: 'block', marginBottom: '0.5rem' }}>
              Custom Analytical Studies
            </span>
            <h2 style={{ fontSize: '2.75rem', fontWeight: 900, color: '#ffffff', marginBottom: '1rem', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
              NEED TAILORED SUBMARKET RESEARCH?
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#fce7eb', maxWidth: '720px', margin: '0 auto 2rem' }}>
              We construct custom market feasibility, rent absorption, and property tax equalization studies for institutional portfolios across Michigan.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <Link href="#contact-form" className="btn-bento-gold" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem', fontWeight: 800 }}>
                REQUEST CUSTOM REPORT &rarr;
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
          <ContactForm subtitle="Inquire about our quarterly market publications or request a specialized submarket analysis" />
        </div>

      </div>
    </div>
  );
}
