'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type DropKey = 'services' | 'newpatients' | 'about' | 'costs' | null

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDrop, setOpenDrop] = useState<DropKey>(null)
  const [openMob, setOpenMob] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  function toggleDrop(k: DropKey) {
    setOpenDrop(prev => prev === k ? null : k)
  }

  useEffect(() => {
    function onOut(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenDrop(null)
    }
    document.addEventListener('mousedown', onOut)
    return () => document.removeEventListener('mousedown', onOut)
  }, [])

  const chev = (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ opacity: .55 }}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )

  return (
    <header className="site-header">
      <div className="header-inner" ref={navRef}>
        <Link href="/" className="brand" aria-label="East St Kilda Dental — home">
          <Image
            src="/assets/logo-compact.png"
            alt="East St Kilda Dental"
            width={120}
            height={56}
            style={{ height: '56px', width: 'auto' }}
            priority
          />
        </Link>

        <nav className="primary" aria-label="Main">
          <Link href="/" className="menu-link">Home</Link>

          {/* Services mega-menu */}
          <div className={`nav-item has-mega${openDrop === 'services' ? ' open' : ''}`}>
            <button className="menu-link" onClick={() => toggleDrop('services')} aria-expanded={openDrop === 'services'}>
              Services {chev}
            </button>
            <div className="dd mega">
              <div className="mega-start">
                <span className="col-title">Start here</span>
                <Link href="/first-visit">New patients</Link>
                <Link href="/gentle">Nervous patients</Link>
                <Link href="/emergency">Emergency</Link>
                <Link href="/services/svc-checkups">Check-up</Link>
              </div>
              <div>
                <div className="col-title">General &amp; Preventive</div>
                <Link href="/services/svc-checkups">Check-ups &amp; Exams</Link>
                <Link href="/services/svc-cleans">Cleans &amp; Hygiene</Link>
                <Link href="/services/svc-kids">Children&apos;s Dentistry</Link>
                <Link href="/services/svc-mouthguards">Mouthguards</Link>
                <Link href="/services/svc-tmj">TMJ &amp; Jaw Pain</Link>
                <Link href="/gentle">Anxiety &amp; Gentle Care</Link>
                <Link href="/services/svc-myofunctional">Myofunctional Therapy</Link>
              </div>
              <div>
                <div className="col-title">Restorative</div>
                <Link href="/services/svc-fillings">Fillings &amp; Restorations</Link>
                <Link href="/services/svc-crowns">Crowns &amp; Bridges</Link>
                <Link href="/services/svc-rootcanal">Root Canal Therapy</Link>
                <Link href="/services/svc-onlays">Onlays &amp; Inlays</Link>
                <Link href="/services/svc-dentures">Dentures</Link>
                <Link href="/services/svc-extractions">Extractions &amp; Wisdom Teeth</Link>
              </div>
              <div>
                <div className="col-title">Cosmetic</div>
                <Link href="/services/svc-smiledesign">Smile Design</Link>
                <Link href="/services/svc-veneers">Veneers</Link>
                <Link href="/services/svc-whitening">Teeth Whitening</Link>
                <div className="col-title">Orthodontics</div>
                <Link href="/services/svc-invisalign">Invisalign / Clear Aligners</Link>
                <Link href="/services/svc-braces">Braces</Link>
                <div className="col-title">Implants</div>
                <Link href="/services/svc-implant-single">Single Implants</Link>
                <Link href="/services/svc-implant-allon4">All-on-4 / Full Arch</Link>
                <Link href="/services/svc-bonegraft">Bone Grafting</Link>
                <div className="col-title">Emergency</div>
                <Link href="/emergency">Emergency Dentistry</Link>
              </div>
              <div className="mega-concern">
                <span className="col-title">By concern</span>
                <Link href="/learn/article-bleeding-gums">Bleeding gums</Link>
                <Link href="/services/svc-checkups">Sensitive teeth</Link>
                <Link href="/emergency">Toothache</Link>
                <Link href="/services/svc-cleans">Bad breath</Link>
                <Link href="/emergency">Chipped or broken tooth</Link>
              </div>
            </div>
          </div>

          {/* New Patients */}
          <div className={`nav-item${openDrop === 'newpatients' ? ' open' : ''}`}>
            <button className="menu-link" onClick={() => toggleDrop('newpatients')} aria-expanded={openDrop === 'newpatients'}>
              New Patients {chev}
            </button>
            <div className="dd">
              <Link href="/first-visit">Your First Visit</Link>
              <Link href="/offer">The Comprehensive Care Visit</Link>
              <Link href="/#faq">FAQ</Link>
            </div>
          </div>

          <Link href="/gentle" className="menu-link">Gentle Dentistry</Link>
          <Link href="/learn" className="menu-link">Dental Education</Link>

          {/* About */}
          <div className={`nav-item${openDrop === 'about' ? ' open' : ''}`}>
            <button className="menu-link" onClick={() => toggleDrop('about')} aria-expanded={openDrop === 'about'}>
              About {chev}
            </button>
            <div className="dd">
              <Link href="/about#story">Our Story (40 years)</Link>
              <Link href="/about#different">Why We&apos;re Different</Link>
              <Link href="/about#team">Meet the Team</Link>
              <Link href="/ourwork">Our Work / Smile Gallery</Link>
            </div>
          </div>

          {/* Costs & Support */}
          <div className={`nav-item${openDrop === 'costs' ? ' open' : ''}`}>
            <button className="menu-link" onClick={() => toggleDrop('costs')} aria-expanded={openDrop === 'costs'}>
              Costs &amp; Support {chev}
            </button>
            <div className="dd">
              <Link href="/fees">Fees Guide</Link>
              <Link href="/fees#payment">Payment Options</Link>
              <Link href="/fees#funds">Health Funds We Accept</Link>
              <Link href="/super">Using Your Super</Link>
            </div>
          </div>

          <Link href="/contact" className="menu-link">Contact</Link>
        </nav>

        {/* Right CTAs */}
        <div className="nav-right">
          <Link href="/emergency" className="btn-emergency-nav">
            <span className="ed-dot" />
            Emergency
          </Link>
          <a href="tel:+61395273678" className="nav-phone">(03) 9527 3678</a>
          <Link href="/booking" className="btn" style={{ padding: '12px 22px', fontSize: '14px' }}>
            Book your visit
          </Link>
          <button
            className={`menu-toggle${menuOpen ? ' active' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(p => !p)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>

        <button className="mob-parent" onClick={() => setOpenMob(p => p === 'svc' ? null : 'svc')}>
          Services
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            style={{ transform: openMob === 'svc' ? 'rotate(180deg)' : undefined, transition: 'transform .2s' }}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        <div className={`mob-sub${openMob === 'svc' ? ' open' : ''}`}>
          <Link href="/services/svc-checkups" onClick={() => setMenuOpen(false)}>Check-ups &amp; Exams</Link>
          <Link href="/services/svc-cleans" onClick={() => setMenuOpen(false)}>Cleans &amp; Hygiene</Link>
          <Link href="/services/svc-fillings" onClick={() => setMenuOpen(false)}>Fillings &amp; Restorations</Link>
          <Link href="/services/svc-crowns" onClick={() => setMenuOpen(false)}>Crowns &amp; Bridges</Link>
          <Link href="/services/svc-implant-single" onClick={() => setMenuOpen(false)}>Dental Implants</Link>
          <Link href="/services/svc-invisalign" onClick={() => setMenuOpen(false)}>Invisalign</Link>
          <Link href="/services/svc-veneers" onClick={() => setMenuOpen(false)}>Veneers</Link>
          <Link href="/services/svc-whitening" onClick={() => setMenuOpen(false)}>Whitening</Link>
          <Link href="/emergency" onClick={() => setMenuOpen(false)}>Emergency</Link>
        </div>

        <Link href="/first-visit" onClick={() => setMenuOpen(false)}>New Patients</Link>
        <Link href="/gentle" onClick={() => setMenuOpen(false)}>Gentle Dentistry</Link>
        <Link href="/learn" onClick={() => setMenuOpen(false)}>Dental Education</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/fees" onClick={() => setMenuOpen(false)}>Costs &amp; Support</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px', padding: '0 6px' }}>
          <Link href="/emergency" className="btn" style={{ background: 'var(--clay)', textAlign: 'center' }} onClick={() => setMenuOpen(false)}>
            Emergency
          </Link>
          <Link href="/booking" className="btn" style={{ textAlign: 'center' }} onClick={() => setMenuOpen(false)}>
            Book your visit
          </Link>
        </div>
      </div>
    </header>
  )
}
