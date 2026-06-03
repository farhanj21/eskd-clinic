const services = [
  {
    title: 'General Dentistry',
    description: 'Preventive care to keep your smile healthy.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="38" height="38">
        <path d="M24 6C18 6 12 10 12 17c0 4 1.5 7 3 10l2 9c.5 2 1.5 3 3 3s2-1 2-3v-5c0-1 .5-2 2-2s2 1 2 2v5c0 2 .5 3 2 3s2.5-1 3-3l2-9c1.5-3 3-6 3-10 0-7-6-11-12-11z" />
      </svg>
    ),
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with natural-looking results.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="38" height="38">
        <path d="M24 6C18 6 12 10 12 17c0 4 1.5 7 3 10l2 9c.5 2 1.5 3 3 3s2-1 2-3v-5c0-1 .5-2 2-2s2 1 2 2v5c0 2 .5 3 2 3s2.5-1 3-3l2-9c1.5-3 3-6 3-10 0-7-6-11-12-11z" />
        <path d="M30 10l2-3M34 14l3-1M32 18l3 1" />
      </svg>
    ),
  },
  {
    title: 'Restorative Dentistry',
    description: 'Restore and rebuild with long-lasting solutions.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="38" height="38">
        <path d="M24 6C18 6 12 10 12 17c0 4 1.5 7 3 10l2 9c.5 2 1.5 3 3 3s2-1 2-3v-5c0-1 .5-2 2-2s2 1 2 2v5c0 2 .5 3 2 3s2.5-1 3-3l2-9c1.5-3 3-6 3-10 0-7-6-11-12-11z" />
        <path d="M18 16h12M18 21h8" />
      </svg>
    ),
  },
  {
    title: 'Orthodontics',
    description: 'Straighten your smile with effective options.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="45" height="45">
        <path d="M10 28c0 6 6 10 14 10s14-4 14-10" />
        <rect x="14" y="20" width="20" height="8" rx="2" />
        <line x1="20" y1="20" x2="20" y2="28" />
        <line x1="28" y1="20" x2="28" y2="28" />
        <line x1="14" y1="24" x2="34" y2="24" />
        <circle cx="17" cy="24" r="1.5" fill="white" stroke="none" />
        <circle cx="24" cy="24" r="1.5" fill="white" stroke="none" />
        <circle cx="31" cy="24" r="1.5" fill="white" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Emergency Dentistry',
    description: 'Prompt care when you need it most.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="38" height="38">
        <path d="M24 6C18 6 12 10 12 17c0 4 1.5 7 3 10l2 9c.5 2 1.5 3 3 3s2-1 2-3v-5c0-1 .5-2 2-2s2 1 2 2v5c0 2 .5 3 2 3s2.5-1 3-3l2-9c1.5-3 3-6 3-10 0-7-6-11-12-11z" />
        <line x1="24" y1="13" x2="24" y2="21" />
        <circle cx="24" cy="25" r="1.2" fill="white" stroke="none" />
      </svg>
    ),
  },
]

const trustItems = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="#B79B63" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <path d="M16 28s-12-7-12-16a6 6 0 0 1 12 0 6 6 0 0 1 12 0c0 9-12 16-12 16z" />
        <path d="M12 14c0-2.2 1.8-4 4-4" />
      </svg>
    ),
    heading: "We're here for your smile,",
    subheading: 'whenever you need us.',
  },
  { text: 'Emergency care available' },
  { text: 'New patients welcome' },
  { text: 'Health fund preferred provider' },
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
              {item.heading ? (
                <p className="svc-trust-heading">
                  {item.heading}<br />{item.subheading}
                </p>
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
