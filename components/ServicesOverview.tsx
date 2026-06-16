const services = [
  {
    title: 'General Dentistry',
    description: 'Preventive care to keep your smile healthy.',
    icon: (
      <img src="/assets/general_dentist_icon.png" alt="" width="34" height="34" style={{filter:'brightness(0) invert(1)'}} />
    ),
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with natural-looking results.',
    icon: (
      <img src="/assets/cosmetic_icon.png" alt="" width="34" height="34" style={{filter:'brightness(0) invert(1)'}} />
    ),
  },
  {
    title: 'Restorative Dentistry',
    description: 'Restore and rebuild with long-lasting solutions.',
    icon: (
      <img src="/assets/restorative_icon.png" alt="" width="34" height="34" style={{filter:'brightness(0) invert(1)'}} />
    ),
  },
  {
    title: 'Orthodontics',
    description: 'Straighten your smile with effective options.',
    icon: (
      <img src="/assets/ortho_icon.png" alt="" width="42" height="42" style={{filter:'brightness(0) invert(1)'}} />
    ),
  },
  {
    title: 'Emergency Dentistry',
    description: 'Prompt care when you need it most.',
    icon: (
      <img src="/assets/emergency_icon.png" alt="" width="34" height="34" style={{filter:'brightness(0) invert(1)'}} />
    ),
  },
]

const trustItems = [
  {
    icon: (
      <img src="/assets/hand-heart.png" alt="" width="30" height="30" className="svc-trust-hand-icon" />
    ),
    heading: "We're here for your smile,",
    subheading: 'whenever you need us.',
  },
  { text: 'Emergency care available', href: '#contact' },
  { text: 'New patients welcome', href: '#contact' },
  { cta: true },
]

export default function ServicesOverview() {
  return (
    <section className="svc-overview" id="services">
      <div className="svc-overview-inner">

        {/* Header */}
        <div className="svc-overview-head">
          <span className="svc-overview-eyebrow">Our Services</span>
          <h2 className="svc-overview-heading">Complete care for every smile.</h2>
          <div className="svc-overview-divider" />
        </div>

        {/* Cards */}
        <div className="svc-overview-grid">
          {services.map((s) => (
            <div key={s.title} className="svc-card">
              <div className="svc-card-icon">{s.icon}</div>
              <h3 className="svc-card-title">{s.title}</h3>
              <p className="svc-card-desc">{s.description}</p>
              <a href="#services" className="svc-card-cta">
                Learn More
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" className="svc-cta-arrow">
                  <line x1="2" y1="8" x2="13" y2="8" />
                  <polyline points="8 3 13 8 8 13" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Trust banner */}
        <div className="svc-trust">
          {trustItems.map((item, i) => (
            <div key={i} className="svc-trust-item">
              {item.icon && <div className="svc-trust-icon">{item.icon}</div>}
              {item.cta ? (
                <a href="#services" className="btn btn-gold btn-rect" style={{fontSize:'13px',padding:'10px 22px'}}>
                  View All Services
                </a>
              ) : item.heading ? (
                <p className="svc-trust-heading">
                  {item.heading}<br />{item.subheading}
                </p>
              ) : item.href ? (
                <a href={item.href} className="svc-trust-link">{item.text}</a>
              ) : (
                <p className="svc-trust-text">{item.text}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
