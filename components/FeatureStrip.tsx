const items = [
  {
    title: 'Family Focused Care',
    desc: 'Caring for smiles at every stage of life.',
    icon: <svg width="22" height="22" fill="none" stroke="#5a5550" strokeWidth="1.6" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    title: 'Comprehensive Services',
    desc: 'From check-ups to advanced treatments.',
    icon: <svg width="22" height="22" fill="none" stroke="#5a5550" strokeWidth="1.6" viewBox="0 0 24 24"><path d="M12 2C8 2 5 5 5 8c0 4 2 6 2 10h10c0-4 2-6 2-10 0-3-3-6-7-6z"/></svg>,
  },
  {
    title: 'Convenient Appointments',
    desc: 'Flexible times to suit your busy schedule.',
    icon: <svg width="22" height="22" fill="none" stroke="#5a5550" strokeWidth="1.6" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  },
  {
    title: 'Gentle & Comfortable',
    desc: 'Modern techniques with a gentle touch.',
    icon: <svg width="22" height="22" fill="none" stroke="#5a5550" strokeWidth="1.6" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  },
]

export default function FeatureStrip() {
  return (
    <section className="feat-strip">
      <div className="feat-strip-inner">
      {items.map((item, i) => (
        <>
          <div key={item.title} className={`feat-item${i === 0 ? ' feat-item--first' : ''}${i === items.length - 1 ? ' feat-item--last' : ''}`}>
            <div className="feat-icon">{item.icon}</div>
            <div>
              <h3 className="feat-title">{item.title}</h3>
              <p className="feat-desc">{item.desc}</p>
            </div>
          </div>
          {i < items.length - 1 && <div key={`sep-${i}`} className="feat-sep" />}
        </>
      ))}
      </div>
    </section>
  )
}
