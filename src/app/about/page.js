import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'About Us | Judeh & Associates',
  description: 'Jumana Judeh, PhD, MAI, CCIM, MCAO has led Judeh & Associates from a start-up to a thriving appraisal and consulting firm for over 30 years.',
};

export default function AboutPage() {
  const majorClients = [
    'Detroit Public Schools',
    'Numerous cities in southeast and western Michigan',
    'Detroit Building Authority',
    'Detroit Transportation Corporation (People Mover)',
    'Army Corps of Engineers',
    'Southeast Michigan Transportation Authority',
    'US Department of Treasury',
    'State of Michigan & MDOT',
  ];

  const specialties = [
    'Real property valuation',
    'Special purpose properties',
    'Going concern valuation',
    'Eminent domain / Full & Partial takings',
    'Tax appeals / Probate / Estate planning',
    'Gordie Howe International Bridge parcel valuations',
  ];

  const leadershipCredentials = [
    { title: 'Appraisal Institute', desc: 'Designated Member (MAI)' },
    { title: 'National Association of Realtors', desc: 'Designated Member (CCIM)' },
    { title: 'Board of Real Estate Appraisers', desc: 'Former Chair, Appointed by Governor of Michigan' },
    { title: 'Michigan Women’s Hall of Fame', desc: 'Inducted Honoree' },
    { title: 'Distinguished Alumni WMHS & Purdue', desc: 'BS General Management' },
    { title: 'Wayne State University', desc: 'Ph.D. Industrial Engineering (Global Executive Track) & MA Industrial Relations' },
  ];

  return (
    <div>
      {/* Modern Subpage Hero */}
      <section className="subpage-bento-hero">
        <div className="container">
          <div className="subpage-bento-hero-grid">
            <div>
              <span className="bento-badge-tag">Firm Leadership &amp; Heritage</span>
              <h1 className="subpage-hero-title">
                About Judeh &amp; Associates
              </h1>
              <p className="subpage-hero-sub">
                Small means special attention to client concerns and always answering the phone. Over 30 years of undisputed leadership across valuation, litigation consulting, and executive success.
              </p>
              <div className="subpage-pills-row">
                <div className="subpage-pill">
                  <span>Direct Line: </span>
                  <a href="tel:3132771986">(313) 277-1986</a>
                </div>
                <div className="subpage-pill">
                  <span>Direct Email: </span>
                  <a href="mailto:JumanaJ@JudehOnLine.com">JumanaJ@JudehOnLine.com</a>
                </div>
                <div className="subpage-pill">
                  <span>Firm Status: </span>
                  <span style={{ fontWeight: 700, color: 'var(--bento-crimson)' }}>100% Certified Woman-Owned</span>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative', width: '140px', height: '140px', flexShrink: 0 }}>
              <Image 
                src="/images/the-judeh-group-logo.png" 
                alt="Judeh & Associates" 
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

        {/* President & CEO Spotlight Bento Card */}
        <div className="bento-card" style={{ background: '#ffffff', marginBottom: '4rem', padding: '3.5rem 3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '3.5rem', alignItems: 'start' }}>
            
            {/* Medium, High-Resolution President Portrait */}
            <div>
              <div className="bento-img-medium" style={{ height: '360px', marginBottom: '1.25rem', border: '3px solid var(--bento-gold)' }}>
                <Image 
                  src="/images/jumana-about-jj.jpg" 
                  alt="Jumana Judeh, PhD, MAI, CCIM, MCAO" 
                  fill 
                  priority
                />
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--bento-crimson)', margin: '0 0 0.25rem' }}>
                  Jumana Judeh
                </h3>
                <p style={{ color: 'var(--bento-gold)', fontWeight: 800, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>
                  PhD, MAI, CCIM, MCAO
                </p>
                <p style={{ color: 'var(--bento-text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                  President &amp; Chief Appraiser
                </p>
              </div>
            </div>

            {/* Biography & Track Record */}
            <div>
              <span className="bento-badge-tag">Executive Profile</span>
              <h2 className="bento-title-large" style={{ fontSize: '2.35rem', marginBottom: '1.25rem' }}>
                President and CEO
              </h2>
              
              <p className="bento-desc" style={{ marginBottom: '1.2rem' }}>
                Jumana Judeh has led Judeh &amp; Associates from a start-up to a thriving appraisal and advisory firm. Starting from appraising small commercial properties to multi-million square feet industrial buildings, luxury hotels, ports, schools, multi-tenant investment properties, churches, proposed construction, as well as retroactive valuations.
              </p>

              <p className="bento-desc" style={{ marginBottom: '1.2rem' }}>
                During the Great Recession, Ms. Judeh served on an advising team assisting the State Legislature in rewriting the compliance policies in Michigan for loan underwriting. During this time, she testified in front of the Senate Banking Committee. In addition, she served on the Detroit Housing Task Force to provide consulting on housing values, foreclosures, and abandonment.
              </p>

              <p className="bento-desc" style={{ marginBottom: '1.2rem' }}>
                Her specialty also centers around litigation as a professional witness as well as providing assistance in the development of cross examinations. Ms. Judeh testifies on a regular basis at the Michigan Tax Tribunal, Circuit Court, District Court, and the American Arbitration Association.
              </p>

              <p className="bento-desc" style={{ marginBottom: '1.2rem' }}>
                Ms. Judeh has also developed strong skills in the valuation of partial and full takings and regularly performs such assignments for MDOT, DNR, and county road commissions. She led the team that performed the review appraising on residential parcels for the $2.0 billion Gordie Howe International Bridge acquisition project.
              </p>
            </div>
          </div>
        </div>

        {/* Official Certifications Grid (Woman-Owned, DBE, SBE) */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
            <span className="bento-badge-tag">State &amp; Federal Credentials</span>
            <h2 className="bento-title-large">Official Certifications</h2>
            <p className="bento-desc">
              Accredited and certified to participate in major commercial, municipal, state, and federally funded contracts.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            {/* Cert 1: Certified Woman-Owned */}
            <div className="bento-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div className="bento-img-contain" style={{ height: '170px', marginBottom: '1.5rem' }}>
                <Image 
                  src="/images/woman-owned-cert.jpg" 
                  alt="Certified Woman-Owned Business" 
                  fill 
                />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--bento-crimson)', marginBottom: '0.5rem' }}>
                Certified Woman-Owned Business
              </h3>
              <p className="bento-desc" style={{ fontSize: '0.95rem', margin: 0 }}>
                Judeh &amp; Associates is 100% woman-owned, providing world-class independent valuation with diversity leadership in corporate and municipal partnerships.
              </p>
            </div>

            {/* Cert 2: Disadvantaged Business Enterprise */}
            <div className="bento-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div className="bento-img-contain" style={{ height: '170px', marginBottom: '1.5rem' }}>
                <Image 
                  src="/images/dbe-cert.jpg" 
                  alt="Disadvantaged Business Enterprise DBE" 
                  fill 
                />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--bento-crimson)', marginBottom: '0.5rem' }}>
                Disadvantaged Business Enterprise (DBE)
              </h3>
              <p className="bento-desc" style={{ fontSize: '0.95rem', margin: 0 }}>
                The Michigan Department of Transportation (MDOT) DBE Program ensures certified firms have full opportunity to grow and participate in federally funded infrastructure and transportation contracts.
              </p>
            </div>

            {/* Cert 3: Small Business Enterprise */}
            <div className="bento-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div className="bento-img-contain" style={{ height: '170px', marginBottom: '1.5rem' }}>
                <Image 
                  src="/images/sbe-cert.png" 
                  alt="Small Business Enterprise SBE" 
                  fill 
                />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--bento-crimson)', marginBottom: '0.5rem' }}>
                Small Business Enterprise (SBE)
              </h3>
              <p className="bento-desc" style={{ fontSize: '0.95rem', margin: 0 }}>
                Small means special attention to client concerns and always answering the phone with senior principal engagement on every single appraisal assignment.
              </p>
            </div>

          </div>
        </div>

        {/* Institutional Client Base & Core Practice Areas Split */}
        <div className="bento-card" style={{ background: '#ffffff', marginBottom: '5rem', padding: '3.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem' }}>
            
            {/* Major Clients */}
            <div>
              <span className="bento-badge-tag">Proven Track Record</span>
              <h2 className="bento-title-large" style={{ fontSize: '2rem' }}>
                Major Institutional Clients
              </h2>
              <p className="bento-desc" style={{ marginBottom: '1.5rem' }}>
                Ms. Judeh’s client base includes private lenders, banks, credit unions, property managers, attorneys, developers, and public sector authorities:
              </p>
              
              <ul className="bento-bullet-list">
                {majorClients.map((client, i) => (
                  <li key={i}>{client}</li>
                ))}
              </ul>
            </div>

            {/* Core Practice Areas & Education */}
            <div>
              <span className="bento-badge-tag">Areas of Practice</span>
              <h2 className="bento-title-large" style={{ fontSize: '2rem' }}>
                Core Practice Specialties
              </h2>
              
              <ul className="bento-bullet-list" style={{ marginBottom: '2rem' }}>
                {specialties.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>

              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--bento-crimson)', marginBottom: '0.75rem' }}>
                Academic &amp; Professional Distinctions
              </h4>
              <p className="bento-desc" style={{ fontSize: '0.95rem' }}>
                Ph.D. in Industrial Engineering (Wayne State University), Master of Arts in Industrial Relations, BS in General Management (Purdue University). Uniform Standards for Federal Land Acquisition (Yellow Book) certified.
              </p>
            </div>

          </div>
        </div>

        {/* Community & Mentorship Spotlight */}
        <div className="bento-statement-banner" style={{ marginBottom: '5rem' }}>
          <div style={{ maxWidth: '820px' }}>
            <span style={{ color: 'var(--bento-gold)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem' }}>
              Philanthropy &amp; Community Empowerment
            </span>
            <h2 style={{ fontSize: '2.1rem', marginBottom: '0.85rem' }}>Dedicated to Mentoring &amp; Service</h2>
            <p style={{ lineHeight: 1.7, fontSize: '1.05rem', margin: 0 }}>
              In her spare time, Jumana is dedicated to volunteering to help young disadvantaged girls advance themselves by going back to school and seeking professional employment. She regularly mentors young college women in better positioning themselves to enter the corporate world.
            </p>
          </div>
          <div>
            <Link href="/motivational" className="btn-bento-gold" style={{ whiteSpace: 'nowrap' }}>
              Explore Motivational Team &rarr;
            </Link>
          </div>
        </div>

        {/* Contact Split */}
        <div id="contact-section" className="bento-contact-grid">
          <div className="bento-contact-card">
            <span className="bento-badge-tag">Corporate Headquarters</span>
            <h2 className="bento-title-large" style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>
              Connect Directly
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
            <ContactForm subtitle="Please provide your contact information to consult with our leadership team" />
          </div>
        </div>

      </div>
    </div>
  );
}
