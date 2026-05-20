export default function ServicesGrid() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow center">Our Dental Services</span>
          <h2>Complete dental care, right here in St&nbsp;Kilda</h2>
          <p className="lede">From same-day relief to long-term cosmetic plans, explore the treatments we provide every day — delivered with skill, care, and the warmth of a clinic that's been part of your community since 1984.</p>
        </div>

        <div className="services-grid" data-stagger>
          <article className="service-card reveal">
            <div
              className="img"
              style={{backgroundImage:"url('https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80&auto=format&fit=crop')"}}
              role="img"
              aria-label="Dental check-up"
            >
              <span className="tag">Preventive</span>
            </div>
            <div className="body">
              <h3>Check-Up &amp; Clean</h3>
              <p>Gentle six-monthly visits to prevent cavities, remove plaque, and maintain a bright, healthy smile.</p>
              <a href="#contact" className="more">
                Book a Clean{' '}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </article>

          <article className="service-card reveal">
            <div
              className="img"
              style={{backgroundImage:"url('/assets/extraction.JPG')"}}
              role="img"
              aria-label="Fillings and extractions"
            >
              <span className="tag">Restorative</span>
            </div>
            <div className="body">
              <h3>Fillings &amp; Extractions</h3>
              <p>Tooth-coloured fillings restore strength and stop decay; gentle extractions when removal is needed.</p>
              <a href="#contact" className="more">
                Learn More{' '}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </article>

          <article className="service-card reveal">
            <div
              className="img"
              style={{backgroundImage:"url('/assets/emergency.JPG')"}}
              role="img"
              aria-label="Emergency dental care"
            >
              <span className="tag">Urgent</span>
            </div>
            <div className="body">
              <h3>Emergency Dental Care</h3>
              <p>Same-day appointments for toothache, broken teeth, and other urgent concerns. Pain relief, fast.</p>
              <a href="#contact" className="more">
                Get Help Today{' '}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </article>

          <article className="service-card reveal">
            <div
              className="img"
              style={{backgroundImage:"url('/assets/Wisdom_Teeth.JPG')"}}
              role="img"
              aria-label="Wisdom teeth removal"
            >
              <span className="tag">Surgical</span>
            </div>
            <div className="body">
              <h3>Wisdom Teeth Removal</h3>
              <p>Gentle, advanced extractions to reduce recovery time and prevent crowding or future complications.</p>
              <a href="#contact" className="more">
                Learn More{' '}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </article>

          <article className="service-card reveal">
            <div
              className="img"
              style={{backgroundImage:"url('/assets/veneers.JPG')"}}
              role="img"
              aria-label="Porcelain veneers"
            >
              <span className="tag">Cosmetic</span>
            </div>
            <div className="body">
              <h3>Porcelain &amp; Composite Veneers</h3>
              <p>Custom veneers for chips, stains, or uneven teeth — natural, durable, beautifully designed for you.</p>
              <a href="#contact" className="more">
                See Veneers{' '}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </article>

          <article className="service-card reveal">
            <div
              className="img"
              style={{backgroundImage:"url('https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80&auto=format&fit=crop')"}}
              role="img"
              aria-label="Invisalign clear aligners"
            >
              <span className="tag">Orthodontics</span>
            </div>
            <div className="body">
              <h3>Invisalign Clear Aligners</h3>
              <p>Discreet, removable aligners that fit your lifestyle — straighten teeth without traditional braces.</p>
              <a href="#contact" className="more">
                Start Invisalign{' '}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </article>

          <article className="service-card reveal">
            <div
              className="img"
              style={{backgroundImage:"url(https://images.unsplash.com/photo-1593022356769-11f762e25ed9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
              role="img"
              aria-label="Dental implants"
            >
              <span className="tag">Implants</span>
            </div>
            <div className="body">
              <h3>Dental Implants</h3>
              <p>Strong, natural-looking replacements that restore function, prevent bone loss, and rebuild confidence.</p>
              <a href="#contact" className="more">
                Implant Consult{' '}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </article>

          <article className="service-card reveal">
            <div
              className="img"
              style={{backgroundImage:"url(https://plus.unsplash.com/premium_photo-1661436629100-ba3c5ea70514?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
              role="img"
              aria-label="Crowns and bridges"
            >
              <span className="tag">Restorative</span>
            </div>
            <div className="body">
              <h3>Crowns &amp; Bridges</h3>
              <p>Custom restorations designed for durability and a natural finish — repair, replace, and rebalance smiles.</p>
              <a href="#contact" className="more">
                Learn More{' '}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </article>

          <article className="service-card reveal">
            <div
              className="img"
              style={{backgroundImage: "url('/assets/whitening.JPG')"}}
              role="img"
              aria-label="Teeth whitening"
            >
              <span className="tag">Cosmetic</span>
            </div>
            <div className="body">
              <h3>Professional Teeth Whitening</h3>
              <p>Safe, supervised whitening for a noticeably brighter smile — in-chair or take-home options.</p>
              <a href="#contact" className="more">
                Whiten Safely{' '}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </article>
        </div>

        <div className="services-cta reveal">
          <a href="#contact" className="btn btn-outline">
            View All Treatments
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
