'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Judeh Group', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Valuation', href: '/valuation' },
    { label: 'Appraisal', href: '/valuation#appraisal' },
    { label: 'Consulting', href: '/valuation#consulting' },
    { label: 'Market Data', href: '/valuation#market-data', highlight: true },
    { label: 'Contact Us', href: '/#contact-section' },
  ];

  return (
    <>
      {/* Desktop Top Contact Bar (Strictly Hidden on Mobile) */}
      <div className="bento-topbar">
        <div className="container bento-topbar-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span>📍 22952 OUTER DRIVE, DEARBORN, MI 48124</span>
            <span style={{ opacity: 0.35 }}>|</span>
            <span style={{ color: 'var(--bento-gold)', fontWeight: 700 }}>30+ YEARS OF CLIENT EXCELLENCE</span>
          </div>
          <div className="bento-topbar-links">
            <a href="tel:3132771986">TEL: (313) 277-1986</a>
            <a href="mailto:JumanaJ@JudehOnLine.com">EMAIL: JumanaJ@JudehOnLine.com</a>
          </div>
        </div>
      </div>

      {/* Modern Bento Sticky Header */}
      <header className="bento-header">
        <div className="container bento-header-inner">
          <Link href="/" className="bento-brand-wrap" style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '185px', height: '62px' }}>
              <Image 
                src="/images/the-judeh-group-logo.png" 
                alt="The Judeh Group" 
                fill 
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </Link>

          <button 
            className="bento-mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          <nav>
            <ul className={`bento-nav-list ${menuOpen ? 'open' : ''}`}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className={`bento-nav-link ${isActive ? 'active' : ''} ${link.highlight ? 'bento-nav-highlight' : ''}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

