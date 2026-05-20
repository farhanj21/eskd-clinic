export default function Intro() {
  return (
    <section className="section intro" id="about">
      <div className="container">
        <div className="intro-grid">
          <div className="intro-art reveal">
            <div className="badge">
              <div className="n">40+</div>
              <div className="l">Years caring for St&nbsp;Kilda families</div>
            </div>
          </div>
          <div className="intro-body reveal" style={{transitionDelay:'.1s'}}>
            <div className="intro-art-mobile" aria-hidden="true"></div>
            <span className="eyebrow">A Different Kind of Dental Experience</span>
            <h2 style={{marginTop:'18px'}}>A clinic that feels <br />personal, because&nbsp;it&nbsp;is.</h2>
            <p className="lede">At East St Kilda Dental, we don't just treat teeth — we care for people. For more than forty years our experienced, warm-hearted team has provided comprehensive dental services built around your comfort, long-term wellness, and confidence.</p>
            <p style={{marginTop:'14px'}}>Whether you're here for a routine clean, dental implants, or a complete cosmetic transformation, you're in expert hands. Modern technology, a calming atmosphere, and a gentle, patient-first approach — that's how we've earned the trust of generations of local families.</p>

            <div className="intro-features">
              <div className="intro-feature">
                <div className="ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div>
                  <h4>Personalised, patient-first care</h4>
                  <p>We get to know your story — not just your smile. Every treatment is tailored to your goals and comfort.</p>
                </div>
              </div>
              <div className="intro-feature">
                <div className="ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <h4>Advanced technology, holistic touch</h4>
                  <p>Modern dentistry blended with a calming, holistic environment to ease anxiety and support whole-body wellbeing.</p>
                </div>
              </div>
              <div className="intro-feature">
                <div className="ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div>
                  <h4>Comprehensive care, one trusted home</h4>
                  <p>From general cleans to emergency care and full smile makeovers — quality dentistry under one roof.</p>
                </div>
              </div>
            </div>

            <div className="intro-cta">
              <a href="#services" className="btn btn-primary">
                Explore Services
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#team" className="btn btn-outline">Meet Our Team</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
