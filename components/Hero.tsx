export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-badges" aria-hidden="true">
        <div className="hero-badge" style={{background:'rgba(246,239,227)'}}><span style={{color:'var(--teal-800)', fontWeight:700}}>EST.</span><span className="n">1984</span></div>
        {/* <div className="hero-badge"><span className="n">40+</span><span>YEARS</span></div> */}
      </div>
      <div className="container container-wide hero-grid">
        <div>
          <span className="eyebrow reveal" style={{transitionDelay:'.05s' , color:'var(--gold)'}}>Your Local Dental Home · Since 1984</span>
          <h1 className="reveal" style={{transitionDelay:'.18s', color:'#0E3A3D'}}>Forty years of <em style={{color:'var(--gold)'}}>heartfelt</em>, skilled dentistry in&nbsp;East&nbsp;St&nbsp;Kilda.</h1>
          <p className="sub reveal" style={{transitionDelay:'.32s', color:'#0E3A3D'}}>From family check-ups to complete smile makeovers, our experienced team delivers gentle, comprehensive care trusted by generations of local families.</p>
          <div className="hero-ctas reveal" style={{transitionDelay:'.44s'}}>
            <a href="#contact" className="btn btn-gold">
              Book An Appointment
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="tel:+61395273678" className="btn btn-light">
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
              </svg>
              (03) 9527 3678
            </a>
          </div>
        </div>
        {/* <aside className="hero-meta reveal" style={{transitionDelay:'.28s'}}>
          <h4>Welcoming new patients</h4>
          <p>Comprehensive dental care for the whole family. Gap-free check-ups available with most major health funds.</p>
          <div className="hours">
            <span className="d">Mon — Thu</span><span>8:30am – 4:00pm</span>
            <span className="d">Friday</span><span>8:30am – 4:30pm</span>
            <span className="d">Saturday</span><span>8:00am – 4:00pm</span>
          </div>
        </aside> */}
      </div>
    </section>
  )
}
