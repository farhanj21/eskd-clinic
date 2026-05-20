export default function WhyUs() {
  return (
    <section className="section why">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow center">Why East St Kilda Families Choose Us</span>
          <h2>A dental experience that feels <br></br>different — because it&nbsp;<em style={{fontStyle:'italic',color:'var(--gold-soft)'}}>is</em>.</h2>
          <p className="lede">For four decades we've earned the trust of generations of local families. Here's what makes our care worth the visit.</p>
        </div>

        <div className="why-grid">
          <div className="pillar reveal">
            <div className="num">01</div>
            <h3>Heritage you can feel</h3>
            <p>Since 1984, we've grown alongside the East St Kilda community — caring for parents, then their children, then their grandchildren. Real continuity, real trust.</p>
          </div>
          <div className="pillar reveal" style={{transitionDelay:'.1s'}}>
            <div className="num">02</div>
            <h3>Gentle, holistic approach</h3>
            <p>We blend modern technique with a calming, holistic environment. Anxiety-aware, no judgement, never rushed — dentistry that respects your whole wellbeing.</p>
          </div>
          <div className="pillar reveal" style={{transitionDelay:'.2s'}}>
            <div className="num">03</div>
            <h3>Everything under one roof</h3>
            <p>From routine cleans to implants, emergencies, and full smile makeovers — comprehensive expertise so you don't need to be referred elsewhere.</p>
          </div>
        </div>

        <div className="why-foot reveal">
          <div className="stats">
            <div className="stat"><b>40+</b><span>Years serving St&nbsp;Kilda</span></div>
            <div className="stat"><b>10,000+</b><span>Patients cared for</span></div>
            <div className="stat"><b>15</b><span>Suburbs served</span></div>
            {/* <div className="stat"><b>9</b><span>Health funds, gap-free</span></div> */}
          </div>
          <a href="#contact" className="btn btn-gold">
            Book Your Visit
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
