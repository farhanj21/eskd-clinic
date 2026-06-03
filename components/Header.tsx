'use client'

import { useState, useEffect, useRef } from 'react'

const homeLinks = [
  { label: 'Home 1', href: '/' },
  { label: 'Home 2', href: '/home' },
]

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
  const [openDropdown, setOpenDropdown] = useState<'about' | 'services' | 'home' | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  function toggleMenu() {
    setMenuOpen((prev) => !prev)
  }

  function closeMenu() {
    setMenuOpen(false)
    setOpenDropdown(null)
  }

  function toggleDropdown(name: 'about' | 'services' | 'home') {
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

          {/* Home dropdown */}
          <div className={`nav-item${openDropdown === 'home' ? ' open' : ''}`}>
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); toggleDropdown('home') }}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'home'}
            >
              Home {chevron}
            </a>
            <div className="dropdown" role="menu">
              {homeLinks.map(({ label, href }) => (
                <a key={label} href={href} role="menuitem" onClick={() => setOpenDropdown(null)}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="header-cta">
          <a className="item" href="tel:+61395273678">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
            </svg>
            (03) 9527 3678
          </a>
          <a href="#contact" className="btn btn-gold btn-rect">
            Book Appointment
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

        {/* Home accordion */}
        <button
          className={`mob-parent${openDropdown === 'home' ? ' open' : ''}`}
          onClick={() => toggleDropdown('home')}
        >
          Home {chevron}
        </button>
        <div className={`mob-dropdown${openDropdown === 'home' ? ' open' : ''}`}>
          {homeLinks.map(({ label, href }) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </div>
      </nav>
    </header>
  )
}
