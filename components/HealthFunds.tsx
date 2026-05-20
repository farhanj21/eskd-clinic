export default function HealthFunds() {
  return (
    <section className="section funds">
      <div className="container funds-inner">
        <div className="reveal">
          <span className="eyebrow">No Gap. No Stress.</span>
          <h3 style={{marginTop:'18px'}}>Gap-Free Check-Ups &amp; Treatments</h3>
          <p>Your oral health should never be held back by financial barriers. We proudly offer gap-free dental services with most major health funds — depending on your level of cover, your check-up, clean, x-rays and preventative treatments may be at no out-of-pocket cost.</p>
          <div className="badge">HICAPS on-the-spot claiming</div>
          <div style={{marginTop:'24px'}}>
            <a href="#contact" className="btn btn-primary">
              Book Your Gap-Free Appointment
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
        <div className="fund-grid reveal" style={{transitionDelay:'.1s'}}>
          <div className="fund">Bupa</div>
          <div className="fund">nib</div>
          <div className="fund">ahm</div>
          <div className="fund sans">Medibank</div>
          <div className="fund sans">HCF</div>
          <div className="fund sans">HBF</div>
          <div className="fund">CBHS</div>
          <div className="fund sans">AU Unity</div>
          <div className="fund sans">Teachers Health</div>
          <div className="fund sans">+ More</div>
        </div>
      </div>
    </section>
  )
}
