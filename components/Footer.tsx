export default function Footer() {
  return (
    <footer className="site-footer" id="team">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/logo-compact-light.png" alt="East St Kilda Dental" />
            <p>Your local dental home since 1984. Family, cosmetic and general dental care delivered with skill, warmth and a gentle, patient-first approach.</p>
            <div className="social">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.4a4 4 0 1 1-7.9 1.2 4 4 0 0 1 7.9-1.2zM17.5 6.5h.01" />
                </svg>
              </a>
              <a href="#" aria-label="Google Reviews">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 11v3.2h5.4a4.7 4.7 0 0 1-2 3.1 5.7 5.7 0 0 1-3.4 1.1 5.7 5.7 0 0 1-5.7-5.7A5.7 5.7 0 0 1 12 6c1.4 0 2.7.5 3.7 1.4l2.2-2.2A8.7 8.7 0 0 0 12 3a8.7 8.7 0 1 0 0 17.5c5 0 8.5-3.5 8.5-8.5 0-.6 0-1.1-.2-1.7H12z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><a href="#services">Check-Up &amp; Clean</a></li>
              <li><a href="#services">Cosmetic Veneers</a></li>
              <li><a href="#services">Invisalign</a></li>
              <li><a href="#services">Dental Implants</a></li>
              <li><a href="#services">Crowns &amp; Bridges</a></li>
              <li><a href="#services">Emergency Care</a></li>
              <li><a href="#services">Teeth Whitening</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Clinic</h5>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#gentle">Gentle Dentistry</a></li>
              <li><a href="#about">How We Work</a></li>
              <li><a href="#contact">Languages</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Visit</h5>
            <ul>
              <li>364 Dandenong Road<br />East St Kilda VIC 3183</li>
              <li><a href="tel:+61395273678">(03) 9527 3678</a></li>
              <li><a href="mailto:hello@eaststkildadental.com.au">hello@eaststkildadental.com.au</a></li>
              <li>Mon–Fri · 8:30am–4:30pm</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 East St Kilda Dental · All rights reserved</div>
          <div><a href="#">Privacy Policy</a> &nbsp;·&nbsp; <a href="#">Terms &amp; Conditions</a></div>
        </div>
      </div>
    </footer>
  )
}
