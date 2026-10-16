import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bento-footer">
      <div className="container">
        <div className="bento-footer-grid">
          {/* Brand Intro */}
          <div>
            <div style={{ position: 'relative', width: '200px', height: '60px', marginBottom: '1.25rem' }}>
              <Image 
                src="/images/jg-logo-white.png" 
                alt="The Judeh Group" 
                fill 
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p style={{ maxWidth: '440px', lineHeight: 1.8, color: '#cbd5e1' }}>
              The Judeh Group has over 30 years of client success with valuation, realty, and helping you succeed throughout the State of Michigan and beyond.
            </p>
            <div style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '2', marginTop: '1.5rem' }}>
              <div>📍 22952 Outer Drive, Dearborn, Michigan 48124</div>
              <div>📞 Phone: 313-277-1986 | Fax: 313-277-8634</div>
              <div>✉️ JumanaJ@JudehOnLine.com | Admin@JudehOnLine.com</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bento-footer-col">
            <h4>Quick Links</h4>
            <ul className="bento-footer-links">
              <li><Link href="/about">About Us &amp; Leadership</Link></li>
              <li><Link href="/valuation">Valuation &amp; Appraisal</Link></li>
              <li><Link href="/realtors">Realtors Team</Link></li>
              <li><Link href="/motivational">Motivational Team</Link></li>
              <li><Link href="/valuation#coverage">Michigan Service Map</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="bento-footer-col">
            <h4>Direct Relations</h4>
            <ul className="bento-footer-links">
              <li><a href="/#contact-section">Schedule a Consultation</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn Official</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook Group</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
            </ul>
          </div>
        </div>

        <div className="bento-footer-bottom">
          <div>
            &copy; 2025 Judeh &amp; Associates, All Rights Reserved.
          </div>
          <div style={{ color: 'var(--bento-gold)', fontWeight: 700, letterSpacing: '0.04em' }}>
            Service You Can Trust • 30+ Years of Undisputed Client Success
          </div>
        </div>
      </div>
    </footer>
  );
}

