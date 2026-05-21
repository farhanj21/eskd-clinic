const members = [
  {
    name: 'Dr Anbar Ganatra',
    role: 'Lead Dentist',
    bio: 'With over 15 years of experience across Kenya and Australia, Dr Ganatra brings exceptional clinical skill and a genuinely warm, patient-first approach to every consultation — from routine care to complex restorations.',
    photo: '/assets/anbar.JPG',
    tags: ['Oral Surgery', 'Veneers', 'Invisalign'],
  },
  {
    name: 'Dr Eddy Goldman',
    role: 'Dentist',
    bio: 'Dr. Goldman specialises in reconstructive and cosmetic dentistry, with particular expertise in implant-based tooth replacement, crown and bridge prosthodontics, and smile design.',
    photo: '/assets/eddy.JPG',
    tags: ['Cosmetic', 'Restorative', 'Implants'],
  },
  {
    name: 'Dr Jarrod Dean',
    role: 'Dentist',
    bio: 'Dr. Dean brings a friendly and reassuring approach to all aspects of dentistry, with a particular focus on helping nervous patients feel comfortable and confident throughout their treatment.',
    photo: '/assets/jarrod.JPG',
    tags: ['Crowns', 'Bridges', 'Emergency'],
  },
  {
    name: 'Michelle Callaghan',
    role: 'Senior Dental Hygienist',
    bio: 'Michelle is a cornerstone of the clinic — her warmth, expert technique, and genuine care for every patient make her preventive appointments something people actually look forward to.',
    photo: '/assets/michelle.JPG',
    tags: ['Hygiene', 'Periodontics', 'Prevention'],
  },
]

export default function Team() {
  return (
    <section className="section team" id="team">
      <div className="container">

        <div className="section-head reveal">
          <span className="eyebrow center">The People Behind Your Smile</span>
          <h2>Meet our team</h2>
          <p className="lede">Experienced, caring, and genuinely invested in your long-term dental health — get to know the people you'll be trusting with your smile.</p>
        </div>

        <div className="team-grid" data-stagger>
          {members.map((m) => (
            <div key={m.name} className="team-card reveal">
              <div
                className="team-photo"
                style={{ backgroundImage: `url('${m.photo}')` }}
                aria-hidden="true"
              />
              <div className="team-body">
                <div className="team-tags">
                  {m.tags.map((t) => (
                    <span key={t} className="team-tag">{t}</span>
                  ))}
                </div>
                <h3>{m.name}</h3>
                <span className="team-role">{m.role}</span>
                <p>{m.bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
