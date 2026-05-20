const members = [
  {
    name: 'Dr Arik Maydelman',
    role: 'Principal Dentist',
    bio: 'With decades of experience at the helm of East St Kilda Dental, Dr Maydelman brings exceptional clinical skill and a genuinely warm, patient-first approach to every consultation — from routine care to complex restorations.',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80&auto=format&fit=crop',
    tags: ['Implants', 'Cosmetic', 'Invisalign'],
  },
  {
    name: 'Dr Sarah Chen',
    role: 'Associate Dentist',
    bio: 'Dr Chen specialises in cosmetic dentistry and smile design, with a meticulous eye for aesthetics and natural results. Patients appreciate her calm, thorough approach and her ability to ease even the most anxious visitors.',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&auto=format&fit=crop',
    tags: ['Veneers', 'Whitening', 'Smile Design'],
  },
  {
    name: 'Dr James Okafor',
    role: 'Associate Dentist',
    bio: 'Dr Okafor brings a gentle, methodical approach to general and surgical dentistry. He has particular expertise in wisdom tooth removal and complex extractions, and is known for putting nervous patients completely at ease.',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80&auto=format&fit=crop',
    tags: ['Oral Surgery', 'Wisdom Teeth', 'Emergency'],
  },
  {
    name: 'Bev Thompson',
    role: 'Senior Dental Hygienist',
    bio: 'Bev is a cornerstone of the clinic — her warmth, expert technique, and genuine care for every patient make her preventive appointments something people actually look forward to. She has been a trusted presence at ESKD for over fifteen years.',
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80&auto=format&fit=crop',
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
