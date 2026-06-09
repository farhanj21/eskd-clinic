import Link from 'next/link'

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
            <div className="news">
              <input type="email" placeholder="Your email" />
              <button type="button">Sign up</button>
            </div>
            <p style={{ fontSize: '12.5px', marginTop: '10px' }}>Dental tips and clinic news. No spam.</p>
          </div>

          {/* ── Col 2: Care ───────────────────────────────── */}
          <div>
            <h4>Care</h4>
            <ul>
              <li><Link href="/services/svc-checkups">Check-ups &amp; cleans</Link></li>
              <li><Link href="/emergency">Emergency</Link></li>
              <li><Link href="/gentle">Nervous patients</Link></li>
              <li><Link href="/services/svc-implant-single">Implants</Link></li>
              <li><Link href="/services/svc-smiledesign">Cosmetic</Link></li>
              <li><Link href="/services">All services</Link></li>
              <li><Link href="/super">Using your super</Link></li>
            </ul>
          </div>

          {/* ── Col 3: Areas ─────────────────────────────── */}
          <div>
            <h4>Areas we serve</h4>
            <ul>
              <li><Link href="/">East St Kilda</Link></li>
              <li><Link href="/areas/st-kilda">St Kilda</Link></li>
              <li><Link href="/areas/balaclava">Balaclava</Link></li>
              <li><Link href="/areas/caulfield">Caulfield</Link></li>
              <li><Link href="/areas/elwood">Elwood</Link></li>
              <li><Link href="/areas/elsternwick">Elsternwick</Link></li>
              <li><Link href="/areas/windsor">Windsor</Link></li>
              <li><Link href="/areas/prahran">Prahran</Link></li>
              <li><Link href="/areas">All areas we serve</Link></li>
            </ul>
          </div>

          {/* ── Col 4: Contact ───────────────────────────── */}
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li>
                364 Dandenong Rd<br />
                East St Kilda VIC 3183
              </li>
              <li><a href="tel:+61395273678">(03) 9527 3678</a></li>
              <li><a href="mailto:hello@eaststkildadental.com.au">hello@eaststkildadental.com.au</a></li>
            </ul>
            <p style={{ marginTop: '14px', fontSize: '13px' }}>We speak 7 languages</p>
          </div>

        </div>

        <div className="foot-bottom">
          <span>© 2026 East St Kilda Dental. All rights reserved.</span>
          <span>
            <Link href="/privacy">Privacy</Link>
            {' · '}
            <Link href="/terms">Terms</Link>
            {' · '}
            <Link href="/booking">Book online</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
