'use client'

import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen((prev) => !prev)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header" id="site-header">
      <div className="container header-inner">
        <a href="#" className="brand">
          <img src="/assets/logo-compact.png" alt="East St Kilda Dental — Since 1984" />
        </a>
        <nav className="primary" aria-label="Primary navigation">
          <a href="#about">
            About{' '}
            <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
          <a href="#services">
            Services{' '}
            <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
          <a href="#gentle">Gentle Dentistry</a>
          <a href="#team">Our Team</a>
          <a href="#patients">
            Patients{' '}
            <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-cta">
          {/* <a href="tel:+61395273678" className="btn btn-outline">(03) 9527 3678</a> */}
          <a href="#contact" className="btn btn-primary">
            Book Now
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <button
            className="mobile-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`mobile-nav${menuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
      >
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#gentle" onClick={closeMenu}>Gentle Dentistry</a>
        <a href="#team" onClick={closeMenu}>Our Team</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="#contact" className="btn btn-primary mobile-cta" onClick={closeMenu}>Book Appointment</a>
      </nav>
    </header>
  )
}
