import Link from 'next/link'
import { business, emailHref, localityLine, streetAddress, telHref } from '@/lib/business'

export default function Footer() {
  return (
    <footer className="footer-v2" id="footer">
      <div className="container">
        <div className="foot-grid">

          {/* ── Col 1: Brand + newsletter ─────────────────── */}
          <div>
            <div className="foot-logo">East St Kilda Dental</div>
            <p style={{ fontSize: '14px' }}>
              Gentle, no-judgement dental care for the East St Kilda community since 1980.
            </p>
            {/* <div className="news">
              <input type="email" placeholder="Your email" />
              <button type="button">Sign up</button>
            </div>
            <p style={{ fontSize: '12.5px', marginTop: '10px' }}>Dental tips and clinic news. No spam.</p> */}
          </div>

          {/* ── Col 2: Care ───────────────────────────────── */}
          <div>
            <h4>Care</h4>
            <ul>
              <li><Link href="/services/check-ups">Check-ups &amp; cleans</Link></li>
              <li><Link href="/emergency-dentist">Emergency</Link></li>
              <li><Link href="/nervous-patients">Nervous patients</Link></li>
              <li><Link href="/services/dental-implants">Implants</Link></li>
              <li><Link href="/services/smile-design">Cosmetic</Link></li>
              <li><Link href="/services">All services</Link></li>
              <li><Link href="/using-your-super">Using your super</Link></li>
            </ul>
          </div>

          {/* ── Col 3: Areas ─────────────────────────────── */}
          <div>
            <h4>Areas we serve</h4>
            <ul>
              <li><Link href="/">East St Kilda</Link></li>
              <li><Link href="/dentist-st-kilda">St Kilda</Link></li>
              <li><Link href="/dentist-balaclava">Balaclava</Link></li>
              <li><Link href="/dentist-caulfield">Caulfield</Link></li>
              <li><Link href="/dentist-elwood">Elwood</Link></li>
              <li><Link href="/dentist-elsternwick">Elsternwick</Link></li>
              <li><Link href="/areas-we-serve">Windsor</Link></li>
              <li><Link href="/areas-we-serve">Prahran</Link></li>
              <li><Link href="/areas-we-serve">All areas we serve</Link></li>
            </ul>
          </div>

          {/* ── Col 4: Contact ───────────────────────────── */}
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li>
                {streetAddress}<br />
                {localityLine}
              </li>
              <li><a href={telHref}>{business.telephoneDisplay}</a></li>
              <li><a href={emailHref}>{business.email}</a></li>
            </ul>
          </div>

        </div>

        <div className="foot-bottom">
          <span>© 2026 East St Kilda Dental. All rights reserved.</span>
          <span>
            <Link href="/privacy">Privacy</Link>
            {' · '}
            <Link href="/terms">Terms</Link>
            {' · '}
            <Link href="/book">Book online</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
