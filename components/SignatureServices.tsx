export default function SignatureServices() {
  return (
    <section className="section signature" id="gentle">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow center">What Makes Us Different</span>
          <h2>Care designed around your comfort &amp; goals</h2>
          <p className="lede">Two signature pillars of the East St Kilda Dental experience — combining gentle, anxiety-free dentistry with bespoke cosmetic transformations, all under one trusted roof.</p>
        </div>

        <div className="sig-card reveal from-left">
          <div
            className="img"
            style={{backgroundImage:"url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1400&q=85&auto=format&fit=crop')"}}
            role="img"
            aria-label="Dental consultation"
          ></div>
          <div className="body">
            <span className="eyebrow">Signature · 01</span>
            <h3>Gentle &amp; Anxiety-Free Dentistry</h3>
            <p>Nervous about the dentist? You're far from alone. Our gentle approach — including happy gas and sedation options — creates a calm, judgement-free experience for every procedure. Compassionate, trauma-informed care tailored to your comfort.</p>
            <div className="meta">
              <span>Happy gas available</span>
              <span>Sedation options</span>
              <span>Trauma-informed</span>
            </div>
            <div className="actions">
              <a href="#contact" className="btn btn-primary">
                Learn More
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="sig-card flip reveal from-right">
          <div
            className="img"
            style={{backgroundImage:"url('https://images.unsplash.com/photo-1581585099522-f6ac2efe6a37?w=1400&q=85&auto=format&fit=crop')"}}
            role="img"
            aria-label="Cosmetic smile design"
          ></div>
          <div className="body">
            <span className="eyebrow">Signature · 02</span>
            <h3>Cosmetic Smile Design</h3>
            <p>From subtle whitening to a complete smile makeover with porcelain veneers, Invisalign, and implants — we craft natural, balanced results that suit your face, age, and personality. Beautiful dentistry, the way it was meant to be.</p>
            <div className="meta">
              <span>Porcelain veneers</span>
              <span>Invisalign</span>
              <span>Implants &amp; crowns</span>
            </div>
            <div className="actions">
              <a href="#contact" className="btn btn-primary">
                Learn More
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
