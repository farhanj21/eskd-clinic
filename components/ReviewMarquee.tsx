/**
 * The home page's review row: six cards drifting slowly from right to left,
 * looping forever.
 *
 * The motion is pure CSS — the track holds the six cards twice over and slides
 * by exactly half its width, so the second copy is under the reader's eye at
 * the moment the first wraps and the seam never shows. That means no client
 * component, no requestAnimationFrame and nothing to hydrate; hover and
 * keyboard focus pause it through animation-play-state, and a reader who has
 * asked for reduced motion gets a scrollable row instead of a moving one.
 *
 * The duplicate set is aria-hidden, so assistive tech reads six reviews rather
 * than twelve.
 *
 * On the reviews being here at all: four other places in this repo say
 * testimonials are off limits under AHPRA's advertising guidelines, and that is
 * why this block spent a while commented out. Showing them was an explicit
 * product decision by the practice, who own that call. Every quote below is a
 * real Google review — do not add, reword or invent one. The structured data
 * stays clean either way: there is still no Review or aggregateRating node
 * anywhere on the site.
 */

interface Review {
  quote: string
  name: string
  /** Drawn from the Google listing. Absent where we do not have the date. */
  when?: string
}

const REVIEWS: Review[] = [
  {
    quote:
      'Dr Anbar was fantastic and extremely knowledgeable. Very comfortable experience as well, from my perspective there was no pain or discomfort. Would highly recommend to anyone looking for a new dentist.',
    name: 'Emily Wooton',
    when: '3 months ago',
  },
  {
    quote:
      'I’ve had years of care under this team. They are friendly, do not over charge, offer options of treatments that consider your circumstances. A clinic that has never failed to care and give me the most personalised treatment.',
    name: 'Bronwen Drinnan',
    when: '4 months ago',
  },
  {
    quote:
      'Dr Dean is caring, calm, patient, empathic, professional, warm and open to having a laugh. He and the team at St Kilda East Dental are amazing group who to me practice ‘dentistry as an art form’.',
    name: 'Gülşen Özer',
    when: '1 month ago',
  },
  {
    quote:
      'First up - precision and brilliant quality! Plus my dentist Anbar is so kind, gentle and careful. So I have got a dentist who I can absolutely trust, and also I get to have a friendly and nurturing, very personalized experience when I am in there.',
    name: 'Andrea Buck',
    when: '3 months ago',
  },
  {
    quote:
      'I’ve been going to Eddy for over 20 years and couldn’t recommend him more highly. He is always professional, gentle, and extremely knowledgeable. Eddy takes the time to explain everything clearly and makes every visit comfortable and stress-free.',
    name: 'Jackie Perkins',
    when: '2 months ago',
  },
  {
    quote:
      "Writing a review after a dentist visit is not something i'm normally compelled to do, however I have been really impressed with Dr Dean and his kind, gentle and informative service that I thought I should! This is my second visit amd I highly recommend.",
    name: 'Camille Thurnherr',
    when: '3 months ago',
  },
]

function ReviewCard({ quote, name, when }: Review) {
  return (
    <figure className="rmq-card">
      {/* The faint mark in the corner. Decorative — the <blockquote> below is
          what tells a screen reader this is a quotation. */}
      <span className="rmq-mark" aria-hidden="true">
        &ldquo;
      </span>
      <div className="rmq-stars" aria-label="Rated 5 out of 5">
        <span aria-hidden="true">★★★★★</span>
      </div>
      <blockquote className="rmq-quote">{quote}</blockquote>
      <span className="rmq-badge">Google review</span>
      <figcaption className="rmq-person">
        <span className="rmq-avatar" aria-hidden="true">
          {name.charAt(0)}
        </span>
        <span>
          <b className="rmq-name">{name}</b>
          {when && <span className="rmq-when">{when}</span>}
        </span>
      </figcaption>
    </figure>
  )
}

export default function ReviewMarquee() {
  return (
    <div className="rmq" role="region" aria-label="Reviews from our patients">
      <div className="rmq-track">
        {REVIEWS.map(r => (
          <ReviewCard key={r.name} {...r} />
        ))}
        {/* The second lap. Hidden from assistive tech so the six reviews are
            announced once, not twice. */}
        <div className="rmq-loop" aria-hidden="true">
          {REVIEWS.map(r => (
            <ReviewCard key={`${r.name}-loop`} {...r} />
          ))}
        </div>
      </div>
    </div>
  )
}
