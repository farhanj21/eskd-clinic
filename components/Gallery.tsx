export default function Gallery() {
  return (
    <section className="section gallery" id="patients">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow center">Smile Gallery</span>
          <h2>Real patients. Real results.</h2>
          <p className="lede">Every smile we craft is a partnership. Here are a few recent transformations from our East St Kilda chair.</p>
        </div>

        <div className="gallery-grid">
          <div
            className="smile-card reveal"
            style={{backgroundImage:"url('https://images.unsplash.com/photo-1581585099522-f6ac2efe6a37?w=900&q=80&auto=format&fit=crop')"}}
          >
            <div className="label"><b>Porcelain Veneers</b><span>4–6 week transformation</span></div>
          </div>
          <div
            className="smile-card reveal"
            style={{backgroundImage:"url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80&auto=format&fit=crop')",transitionDelay:'.07s'}}
          >
            <div className="label"><b>Invisalign Treatment</b><span>9–12 month plan</span></div>
          </div>
          <div
            className="smile-card reveal"
            style={{backgroundImage:"url('https://images.unsplash.com/photo-1542596594-649edbc13630?w=900&q=80&auto=format&fit=crop')",transitionDelay:'.14s'}}
          >
            <div className="label"><b>Implant &amp; Crown</b><span>Restored bite &amp; balance</span></div>
          </div>
          <div
            className="smile-card reveal"
            style={{backgroundImage:"url('https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=900&q=80&auto=format&fit=crop')",transitionDelay:'.21s'}}
          >
            <div className="label"><b>Whitening &amp; Bonding</b><span>Same-day refresh</span></div>
          </div>
        </div>

        <div className="services-cta reveal">
          <a href="#contact" className="btn btn-outline">
            See All Transformations
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
