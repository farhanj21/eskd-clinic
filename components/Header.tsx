'use client'

import { useState, useEffect, useRef } from 'react'

const aboutLinks = [
  { label: 'How We Work', href: '#about' },
  { label: 'Languages', href: '#contact' },
  { label: 'Blogs', href: '#blog' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms and Conditions', href: '#' },
]

const serviceLinks = [
  { label: 'Invisalign', href: '#services' },
  { label: 'Veneers', href: '#services' },
  { label: 'Gentle Dentistry', href: '#gentle' },
  { label: 'Emergency', href: '#services' },
  { label: 'Dental Surgery', href: '#services' },
  { label: 'Wisdom Tooth Extraction', href: '#services' },
  { label: 'Teeth Whitening', href: '#services' },
  { label: 'Crowns and Bridges', href: '#services' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<'about' | 'services' | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  function toggleMenu() {
    setMenuOpen((prev) => !prev)
  }

  function closeMenu() {
    setMenuOpen(false)
    setOpenDropdown(null)
  }

  function toggleDropdown(name: 'about' | 'services') {
    setOpenDropdown((prev) => (prev === name ? null : name))
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const chevron = (
    <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="site-header">
      <div className="container header-inner">
        <a href="#" className="brand">
          <img src="/assets/eskd-no-bg.png" alt="East St Kilda Dental — Since 1984" />
        </a>

        <nav className="primary" aria-label="Primary navigation" ref={navRef}>
          {/* About dropdown */}
          <div className={`nav-item${openDropdown === 'about' ? ' open' : ''}`}>
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); toggleDropdown('about') }}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'about'}
            >
              About {chevron}
            </a>
            <div className="dropdown" role="menu">
              {aboutLinks.map(({ label, href }) => (
                <a key={label} href={href} role="menuitem" onClick={() => setOpenDropdown(null)}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Services dropdown */}
          <div className={`nav-item${openDropdown === 'services' ? ' open' : ''}`}>
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); toggleDropdown('services') }}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'services'}
            >
              Services {chevron}
            </a>
            <div className="dropdown" role="menu">
              {serviceLinks.map(({ label, href }) => (
                <a key={label} href={href} role="menuitem" onClick={() => setOpenDropdown(null)}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <a href="#team">Our Team</a>
          <a href="#patients">Patients</a>
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

      {/* Mobile nav */}
      <nav
        className={`mobile-nav${menuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
      >
        {/* About accordion */}
        <button
          className={`mob-parent${openDropdown === 'about' ? ' open' : ''}`}
          onClick={() => toggleDropdown('about')}
        >
          About {chevron}
        </button>
        <div className={`mob-dropdown${openDropdown === 'about' ? ' open' : ''}`}>
          {aboutLinks.map(({ label, href }) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </div>

        {/* Services accordion */}
        <button
          className={`mob-parent${openDropdown === 'services' ? ' open' : ''}`}
          onClick={() => toggleDropdown('services')}
        >
          Services {chevron}
        </button>
        <div className={`mob-dropdown${openDropdown === 'services' ? ' open' : ''}`}>
          {serviceLinks.map(({ label, href }) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </div>

        <a href="#team" onClick={closeMenu}>Our Team</a>
        <a href="#patients" onClick={closeMenu}>Patients</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  )
}
