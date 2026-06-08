import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer-v2" id="footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-logo">
            <Image
              src="/assets/logo-compact-light.png"
              alt="East St Kilda Dental"
              width={140}
              height={56}
              style={{ height: '56px', width: 'auto' }}
            />
            <p>Gentle care since 1980</p>
            <p style={{ marginTop: '12px', fontSize: '14px' }}>
              364 Dandenong Rd<br />
              East St Kilda VIC 3183<br />
              (corner of Orrong Road)
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <a href="tel:+61395273678">(03) 9527 3678</a><br />
              <a href="mailto:hello@eaststkildadental.com.au">hello@eaststkildadental.com.au</a>
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
              <a href="#" aria-label="Facebook" style={{ opacity: .7 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" style={{ opacity: .7 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.4a4 4 0 1 1-7.9 1.2 4 4 0 0 1 7.9-1.2zM17.5 6.5h.01" />
                </svg>
              </a>
              <a href="https://share.google/M1ZtOT5z13fj2mhWf" target="_blank" rel="noopener noreferrer" aria-label="Google Reviews" style={{ opacity: .7 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 11v3.2h5.4a4.7 4.7 0 0 1-2 3.1 5.7 5.7 0 0 1-3.4 1.1 5.7 5.7 0 0 1-5.7-5.7A5.7 5.7 0 0 1 12 6c1.4 0 2.7.5 3.7 1.4l2.2-2.2A8.7 8.7 0 0 0 12 3a8.7 8.7 0 1 0 0 17.5c5 0 8.5-3.5 8.5-8.5 0-.6 0-1.1-.2-1.7H12z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4>Care</h4>
            <ul>
              <li><Link href="/services/svc-checkups">Check-ups &amp; cleans</Link></li>
              <li><Link href="/emergency">Emergency dentistry</Link></li>
              <li><Link href="/services/svc-fillings">Fillings &amp; restorations</Link></li>
              <li><Link href="/services/svc-crowns">Crowns &amp; root canals</Link></li>
              <li><Link href="/services/svc-implant-single">Dental implants</Link></li>
              <li><Link href="/services/svc-smiledesign">Cosmetic dentistry</Link></li>
              <li><Link href="/services/svc-kids">Children&apos;s dentistry</Link></li>
              <li><Link href="/services/svc-invisalign">Invisalign</Link></li>
              <li><Link href="/services/svc-veneers">Veneers</Link></li>
              <li><Link href="/services/svc-whitening">Teeth whitening</Link></li>
              <li><Link href="/gentle">Nervous patients</Link></li>
            </ul>
          </div>

          <div>
            <h4>Areas</h4>
            <ul>
              <li><Link href="/">East St Kilda</Link></li>
              <li><Link href="/areas/st-kilda">St Kilda</Link></li>
              <li><Link href="/areas/balaclava">Balaclava</Link></li>
              <li><Link href="/areas/elwood">Elwood</Link></li>
              <li><Link href="/areas/elsternwick">Elsternwick</Link></li>
              <li><Link href="/areas/caulfield">Caulfield</Link></li>
              <li><Link href="/areas/windsor">Windsor</Link></li>
              <li><Link href="/areas/prahran">Prahran</Link></li>
              <li><Link href="/areas/armadale">Armadale</Link></li>
              <li><Link href="/areas/carnegie">Carnegie</Link></li>
              <li><Link href="/areas/albert-park">Albert Park</Link></li>
              <li><Link href="/areas/south-yarra">South Yarra</Link></li>
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            <ul>
              <li>
                <b>Opening hours</b><br />
                Mon – Thu &nbsp; 8.30am – 4.00pm<br />
                Friday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8.30am – 4.30pm<br />
                Sat (monthly) &nbsp; 8.00am – 4.00pm<br />
                Sunday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Closed
              </li>
              <li style={{ marginTop: '12px' }}>
                <Link href="/first-visit">Your first visit</Link>
              </li>
              <li><Link href="/offer">The Comprehensive Care Visit</Link></li>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/fees">Fees &amp; health funds</Link></li>
              <li><Link href="/learn">Dental education</Link></li>
              <li><Link href="/super">Using your super</Link></li>
              <li><Link href="/contact">Contact &amp; location</Link></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <div>© 2026 East St Kilda Dental · All rights reserved · Gentle care since 1980</div>
          <div>
            <Link href="/privacy">Privacy Policy</Link>
            &nbsp;·&nbsp;
            <Link href="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
