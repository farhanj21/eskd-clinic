'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

type DropKey = 'services' | 'newpatients' | 'about' | 'costs' | null

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDrop, setOpenDrop] = useState<DropKey>(null)
  const navRef = useRef<HTMLElement>(null)

  function toggleDrop(k: DropKey) {
    setOpenDrop(prev => prev === k ? null : k)
  }

  function close() {
    setMenuOpen(false)
    setOpenDrop(null)
  }

  useEffect(() => {
    function onOut(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenDrop(null)
    }
    document.addEventListener('mousedown', onOut)
    return () => document.removeEventListener('mousedown', onOut)
  }, [])

  return (
    <header className="site-header" ref={navRef}>
      <div className="nav">
        <Link href="/" className="logo" aria-label="East St Kilda Dental — home">
          East St Kilda Dental<small>Gentle care since 1980</small>
        </Link>

        <nav className={`mainmenu${menuOpen ? ' open' : ''}`} aria-label="Main">
          <ul>
            <li><Link href="/" className="menu-link" onClick={close}>Home</Link></li>

            {/* Services mega-menu */}
            <li className={`has-dd has-mega${openDrop === 'services' ? ' open' : ''}`}>
              <button className="menu-link" onClick={() => toggleDrop('services')} aria-expanded={openDrop === 'services'}>
                Services
              </button>
              <div className="dd mega">
                <div className="mega-start">
                  <span className="col-title">Start here</span>
                  <Link href="/first-visit" onClick={close}>New patients</Link>
                  <Link href="/gentle" onClick={close}>Nervous patients</Link>
                  <Link href="/emergency" onClick={close}>Emergency</Link>
                  <Link href="/services/svc-checkups" onClick={close}>Check-up</Link>
                </div>
                <div>
                  <div className="col-title">General &amp; Preventive</div>
                  <Link href="/services/svc-checkups" onClick={close}>Check-ups &amp; Exams</Link>
                  <Link href="/services/svc-cleans" onClick={close}>Cleans &amp; Hygiene</Link>
                  <Link href="/services/svc-kids" onClick={close}>Children&apos;s Dentistry</Link>
                  <Link href="/services/svc-mouthguards" onClick={close}>Mouthguards</Link>
                  <Link href="/services/svc-tmj" onClick={close}>TMJ &amp; Jaw Pain</Link>
                  <Link href="/gentle" onClick={close}>Anxiety &amp; Gentle Care</Link>
                  <Link href="/services/svc-myofunctional" onClick={close}>Myofunctional Therapy</Link>
                </div>
                <div>
                  <div className="col-title">Restorative</div>
                  <Link href="/services/svc-fillings" onClick={close}>Fillings &amp; Restorations</Link>
                  <Link href="/services/svc-crowns" onClick={close}>Crowns &amp; Bridges</Link>
                  <Link href="/services/svc-rootcanal" onClick={close}>Root Canal Therapy</Link>
                  <Link href="/services/svc-onlays" onClick={close}>Onlays &amp; Inlays</Link>
                  <Link href="/services/svc-dentures" onClick={close}>Dentures</Link>
                  <Link href="/services/svc-extractions" onClick={close}>Extractions &amp; Wisdom Teeth</Link>
                </div>
                <div>
                  <div className="col-title">Cosmetic</div>
                  <Link href="/services/svc-smiledesign" onClick={close}>Smile Design</Link>
                  <Link href="/services/svc-veneers" onClick={close}>Veneers</Link>
                  <Link href="/services/svc-whitening" onClick={close}>Teeth Whitening</Link>
                  <div className="col-title">Orthodontics</div>
                  <Link href="/services/svc-invisalign" onClick={close}>Invisalign / Clear Aligners</Link>
                  <Link href="/services/svc-braces" onClick={close}>Braces</Link>
                  <div className="col-title">Implants</div>
                  <Link href="/services/svc-implant-single" onClick={close}>Single Implants</Link>
                  <Link href="/services/svc-implant-allon4" onClick={close}>All-on-4 / Full Arch</Link>
                  <Link href="/services/svc-bonegraft" onClick={close}>Bone Grafting</Link>
                  <div className="col-title">Emergency</div>
                  <Link href="/emergency" onClick={close}>Emergency Dentistry</Link>
                </div>
                <div className="mega-concern">
                  <span className="col-title">By concern</span>
                  <Link href="/learn/why-are-my-gums-bleeding" onClick={close}>Bleeding gums</Link>
                  <Link href="/services/svc-checkups" onClick={close}>Sensitive teeth</Link>
                  <Link href="/emergency" onClick={close}>Toothache</Link>
                  <Link href="/services/svc-cleans" onClick={close}>Bad breath</Link>
                  <Link href="/emergency" onClick={close}>Chipped or broken tooth</Link>
                </div>
              </div>
            </li>

            {/* New Patients */}
            <li className={`has-dd${openDrop === 'newpatients' ? ' open' : ''}`}>
              <button className="menu-link" onClick={() => toggleDrop('newpatients')} aria-expanded={openDrop === 'newpatients'}>
                New Patients
              </button>
              <div className="dd">
                <Link href="/first-visit" onClick={close}>Your First Visit</Link>
                <Link href="/offer" onClick={close}>The Comprehensive Care Visit</Link>
                <Link href="/#faq" onClick={close}>FAQ</Link>
              </div>
            </li>

            <li><Link href="/gentle" className="menu-link" onClick={close}>Gentle Dentistry</Link></li>
            <li><Link href="/learn" className="menu-link" onClick={close}>Dental Education</Link></li>

            {/* About */}
            <li className={`has-dd${openDrop === 'about' ? ' open' : ''}`}>
              <button className="menu-link" onClick={() => toggleDrop('about')} aria-expanded={openDrop === 'about'}>
                About
              </button>
              <div className="dd">
                <Link href="/about/story" onClick={close}>Our Story (40 years)</Link>
                <Link href="/about/different" onClick={close}>Why We&apos;re Different</Link>
                <Link href="/about/team" onClick={close}>Meet the Team</Link>
                <Link href="/ourwork" onClick={close}>Our Work / Smile Gallery</Link>
              </div>
            </li>

            {/* Costs & Support */}
            <li className={`has-dd${openDrop === 'costs' ? ' open' : ''}`}>
              <button className="menu-link" onClick={() => toggleDrop('costs')} aria-expanded={openDrop === 'costs'}>
                Costs &amp; Support
              </button>
              <div className="dd">
                <Link href="/fees" onClick={close}>Fees Guide</Link>
                <Link href="/fees#payment" onClick={close}>Payment Options</Link>
                <Link href="/fees#funds" onClick={close}>Health Funds We Accept</Link>
                <Link href="/super" onClick={close}>Using Your Super</Link>
              </div>
            </li>

            <li><Link href="/contact" className="menu-link" onClick={close}>Contact</Link></li>
          </ul>
        </nav>

        {/* Right CTAs */}
        <div className="nav-right">
          <Link href="/emergency" className="btn-emergency-nav">
            <span className="ed-dot" />
            Emergency
          </Link>
          <a href="tel:+61395273678" className="phone">
            <span className="phone-full">(03) 9527 3678</span>
            <span className="phone-mini">Call us</span>
          </a>
          <Link href="/booking" className="btn">
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
    </header>
  )
}
