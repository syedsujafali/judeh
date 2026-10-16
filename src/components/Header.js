'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Overview', href: '/' },
    { label: 'Valuation & Advisory', href: '/valuation' },
    { label: 'Realtors Team', href: '/realtors' },
    { label: 'Motivational Team', href: '/motivational' },
  ];

  return (
    <>
      {/* Luxury Top Status Bar */}
      <div className="lux-topbar">
        <div className="container lux-topbar-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span>📍 22952 OUTER DRIVE, DEARBORN, MI 48124</span>
            <span style={{ opacity: 0.3 }}>|</span>
            <span style={{ color: 'var(--lux-gold-bright)', fontWeight: 700 }}>30+ YEARS OF CLIENT EXCELLENCE</span>
          </div>
          <div className="lux-topbar-links">
            <a href="tel:3132771986">TEL: (313) 277-1986</a>
            <a href="mailto:JumanaJ@JudehOnLine.com">EMAIL: JumanaJ@JudehOnLine.com</a>
          </div>
        </div>
      </div>

      {/* Luxury Navbar */}
      <header className="lux-navbar">
        <div className="container lux-nav-inner">
          <Link href="/" className="lux-brand-wrapper">
            <div style={{ position: 'relative', width: '180px', height: '64px' }}>
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
            className="lux-mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          <nav>
            <ul className={`lux-nav-menu ${menuOpen ? 'open' : ''}`}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href} className={`lux-nav-item ${isActive ? 'active' : ''}`}>
                    <Link 
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link href="/#contact-section" className="lux-btn-primary" onClick={() => setMenuOpen(false)}>
                  Inquire Directly &rarr;
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
