/**
 * Every suburb we publish a local landing page for.
 *
 * This array is the single source of truth for three things at once:
 *   1. the page itself, rendered from <SuburbPage> at /dentist-<slug>
 *   2. the "Wherever you are" grid on the home page and /areas-we-serve
 *   3. the sitemap
 *
 * Add an entry here and create the matching app/dentist-<slug>/page.tsx, and the
 * page is linked and listed everywhere automatically. Nothing else to remember.
 *
 * The shape below follows the suburb-page build spec: the entries here are the
 * PER-SUBURB half of the page, and nothing else. Everything shared — the
 * services, the $297 visit, the team, the funds, the map, the CTAs — lives in
 * <SuburbPage> and is deliberately identical on all twenty pages, because
 * repeated furniture is boilerplate to a search engine while duplicated main
 * content is not.
 *
 * Copy rules for anything added here, because these pages advertise a
 * registered health service under the AHPRA guidelines:
 *   - no superlatives ("best", "leading"), no outcome or testimonial claims
 *   - no rating numbers or review counts, and no Review/aggregateRating markup
 *   - only facts about geography, transport and what we offer
 *   - opening hours are deliberately not restated here; they live on /contact
 *     and in lib/business.ts, so a change never has to be chased across 20 pages
 *
 * And the rule that keeps these pages out of doorway-page territory: no
 * sentence written below should be able to sit unchanged on another suburb's
 * page. One angle, one education topic, one route per suburb.
 */

export interface SuburbFaq {
  q: string
  a: string
}

/**
 * A heading plus the run of words inside it set in italic clay.
 *
 * `em` must appear verbatim in `text`; the page splits on it rather than
 * carrying markup in the data.
 */
export interface SuburbHeading {
  text: string
  em: string
}

/** A headed block of prose: the About, Getting here and Good to know sections. */
export interface SuburbSection {
  heading: SuburbHeading
  body: string
}

export interface SuburbData {
  /** URL slug. The page lives at /dentist-<slug>. */
  slug: string
  /** Suburb name exactly as it should appear in the H1 and in copy. */
  name: string
  /** Used to pin the "get directions" origin, e.g. "Windsor VIC 3181". */
  postcode: string
  /** Hero eyebrow, e.g. "Areas we serve — South Yarra". */
  eyebrow: string
  /** The one H1 on the page. Carries the search term. */
  h1: SuburbHeading
  /** Hero paragraph: this suburb's angle, in two or three sentences. */
  lead: string
  /**
   * The quick-facts drive row, e.g. "About 8 minutes off-peak, via Punt Road".
   * Verified against Google Maps; off-peak, and described as approximate.
   */
  drive: { time: string; via: string }
  /** "About [suburb]": the strip, the landmarks, the community. */
  about: SuburbSection
  /** "Getting to us from [suburb]": the route, in the reader's own geography. */
  route: SuburbSection
  /** The education piece. A different topic on every page. */
  goodToKnow: SuburbSection
  /** Four questions someone in this suburb actually asks. */
  faqs: [SuburbFaq, SuburbFaq, SuburbFaq, SuburbFaq]
  /**
   * Treatment and first-visit pages this suburb's angle points at.
   *
   * Currently held but not rendered: the "Where to next" link block was removed
   * so the questions run straight into the enquiry form. Kept because it is the
   * per-suburb half of the spec's internal-linking, and cheap to put back.
   */
  links: { label: string; href: string }[]
  /** Search title and description. Unique per page — never templated wholesale. */
  meta: { title: string; description: string }
}

/**
 * In the order they appear in the home page's areas grid, which runs roughly
 * outward from the clinic. St Kilda East is deliberately absent: it is the home
 * page, not a landing page.
 */
export const suburbs: SuburbData[] = [
  {
    slug: 'st-kilda',
    name: 'St Kilda',
    postcode: '3182',
    eyebrow: 'Areas we serve — St Kilda',
    h1: { text: 'A dentist for St Kilda, whenever you’re ready', em: 'whenever you’re ready' },
    lead:
      'Between work, the beach and everything else, the dentist slides down the St Kilda to-do list, sometimes for years. When you’re ready, we’re an easy trip east, and we’re used to being someone’s first visit back after a long time away.',
    drive: { time: 'About 7 minutes', via: 'via Carlisle or Inkerman Street' },
    about: {
      heading: { text: 'An unhurried dentist, minutes from the foreshore', em: 'minutes from the foreshore' },
      body:
        'St Kilda is Melbourne’s seaside playground, Acland Street’s cake shops, Fitzroy Street’s cafes, the Esplanade market and Luna Park’s grin over the foreshore. It draws a lively mix of young renters, professionals and long-time locals, and life here tends to move fast. That pace is exactly why a nearby, unhurried dentist a few minutes inland suits so many St Kilda residents who’ve been meaning to get back in the chair.',
    },
    route: {
      heading: { text: 'East along Carlisle Street', em: 'Carlisle Street' },
      body:
        'From St Kilda, head east along Carlisle or Inkerman Street to where Dandenong Road meets Orrong Road, roughly seven minutes when the traffic’s kind.',
    },
    goodToKnow: {
      heading: { text: 'What a return visit is really like', em: 'a return visit' },
      body:
        'Coming back after a long gap is more common than you’d think, and it’s rarely as bad as people fear. A first visit back is mostly talking and looking: your history, what’s been bothering you, then a careful, no-rush examination. There’s no scraping and shaming. You leave with a clear, prioritised plan, and you decide what happens next and when. Most people wish they’d come in sooner.',
    },
    faqs: [
      {
        q: 'It’s genuinely been years. Will you make me feel bad?',
        a: 'No. We see it constantly, and it changes nothing about how we treat you.',
      },
      {
        q: 'I rent and might move, is it worth registering?',
        a:
          'Definitely. We hold your records and history, and even if you move within the area you’re only ever a few minutes away.',
      },
      {
        q: 'Do you see many St Kilda locals?',
        a: 'Yes, we’ve cared for St Kilda residents for years, including many who come to us after a long time away.',
      },
      { q: 'How long from St Kilda?', a: 'About seven minutes, straight east along Carlisle Street.' },
    ],
    links: [
      { label: 'Your first visit', href: '/your-first-visit' },
      { label: 'Nervous patients', href: '/nervous-patients' },
    ],
    meta: {
      title: 'Dentist in St Kilda | East St Kilda Dental',
      description:
        'A gentle dentist about seven minutes east of St Kilda, and a warm first visit back if it has been years. Onsite parking, all health funds, same-day care.',
    },
  },
  {
    slug: 'st-kilda-west',
    name: 'St Kilda West',
    postcode: '3182',
    eyebrow: 'Areas we serve — St Kilda West',
    h1: { text: 'A convenient dentist for St Kilda West', em: 'St Kilda West' },
    lead:
      'St Kilda West is apartments, the foreshore and people who are out more than they’re in. We’re a straightforward trip inland and easy to slot into a full week.',
    drive: { time: 'About 9 minutes', via: 'via Fitzroy Street' },
    about: {
      heading: { text: 'A dentist that fits a full calendar', em: 'a full calendar' },
      body:
        'St Kilda West is the quieter, apartment-lined edge of St Kilda, tucked between the foreshore and the top of Fitzroy Street, bordering Albert Park’s lake and gardens. It draws professionals and downsizers who like being near the bay but off the main drag. For residents who are out more than they’re in, a straightforward dentist a short trip inland, with a check-up rhythm that fits a full calendar, tends to suit.',
    },
    route: {
      heading: { text: 'Inland via Fitzroy Street', em: 'via Fitzroy Street' },
      body:
        'From St Kilda West, come in along Fitzroy Street and Inkerman Street toward Orrong Road, about nine minutes.',
    },
    goodToKnow: {
      heading: { text: 'How often you really need a check-up', em: 'really need' },
      body:
        'The old “every six months” rule isn’t one-size-fits-all. If your teeth and gums are healthy and stable, some people are fine at longer intervals; if you’re prone to decay or gum issues, more often is wiser. The point of a check-up isn’t the calendar, it’s catching change while it’s small. We’ll set a rhythm that suits your mouth rather than a default, so you’re neither over-visiting nor leaving it too long.',
    },
    faqs: [
      {
        q: 'I’ve got healthy teeth. Do I really need to come every six months?',
        a: 'Maybe not. We’ll set an interval that fits your mouth honestly.',
      },
      {
        q: 'Can you work around a busy schedule?',
        a: 'Yes, we’ll set a check-up rhythm that suits your calendar rather than a default six months.',
      },
      { q: 'Is it easy to reach from the bay side?', a: 'Yes, a straightforward run inland via Inkerman Street.' },
      { q: 'Is it an easy trip from St Kilda West?', a: 'Yes, roughly nine minutes via Inkerman Street.' },
    ],
    links: [
      { label: 'Check-ups and cleans', href: '/services/check-ups' },
      { label: 'Your first visit', href: '/your-first-visit' },
      { label: 'Fees', href: '/fees' },
    ],
    meta: {
      title: 'Dentist in St Kilda West | East St Kilda Dental',
      description:
        'A convenient dentist about nine minutes from St Kilda West, with check-up timing set to suit your teeth. Onsite parking, all health funds, same-day care.',
    },
  },
  {
    slug: 'balaclava',
    name: 'Balaclava',
    postcode: '3183',
    eyebrow: 'Areas we serve — Balaclava',
    h1: { text: 'A dentist a few minutes from Balaclava', em: 'a few minutes from Balaclava' },
    lead:
      'If you live around Carlisle Street, we’re practically the next street over, close enough that a check-up doesn’t eat your whole morning. It makes Balaclava one of the easiest suburbs to keep a regular dental routine going from.',
    drive: { time: 'About 4 minutes', via: 'via Carlisle Street' },
    about: {
      heading: { text: 'Round the corner from Carlisle Street', em: 'Carlisle Street' },
      body:
        'Balaclava is all about Carlisle Street, the delis, kosher bakeries, cafes and grocers that give the strip its village character, anchored by Balaclava station on the Sandringham line. It’s a tight, walkable pocket of period homes and apartments where a lot of households have stayed for years. Being barely up the road from that strip makes us an easy habit for Balaclava locals who’d rather not make a project of a check-up.',
    },
    route: {
      heading: { text: 'A four-minute hop along Carlisle Street', em: 'along Carlisle Street' },
      body:
        'From Balaclava it’s a quick hop, four minutes or so, along Carlisle Street and across to the Orrong Road corner.',
    },
    goodToKnow: {
      heading: { text: 'Why regular cleans matter more than people think', em: 'regular cleans' },
      body:
        'A professional clean isn’t just polishing. It removes the hardened plaque a toothbrush can’t shift, the stuff that quietly causes gum problems and bad breath long before it hurts. Skipping cleans is how small, cheap-to-fix issues turn into big ones. Coming in on a regular rhythm means most problems get caught while they’re still nothing, which is easier on your teeth and your wallet.',
    },
    faqs: [
      {
        q: 'How often should I come in?',
        a:
          'For most people every six months, but we’ll tell you honestly if you can stretch it or need to come sooner.',
      },
      {
        q: 'Can I fit a visit around a Carlisle Street trip?',
        a: 'Easily, we’re minutes from the strip, so a check-up slots around your shopping or coffee run.',
      },
      {
        q: 'Do you have long-standing patients from Balaclava?',
        a: 'Many, we’ve cared for households across Balaclava for years.',
      },
      { q: 'Quick to reach from Balaclava?', a: 'Very, roughly four minutes, one of our closest suburbs.' },
    ],
    links: [
      { label: 'Check-ups and cleans', href: '/services/check-ups' },
      { label: 'Your first visit', href: '/your-first-visit' },
      { label: 'Fees', href: '/fees' },
    ],
    meta: {
      title: 'Dentist in Balaclava | East St Kilda Dental',
      description:
        'Balaclava’s dentist is four minutes away, past Carlisle Street. Comprehensive check-ups and cleans, onsite parking, all major health funds, easy to pop into.',
    },
  },
  {
    slug: 'elwood',
    name: 'Elwood',
    postcode: '3184',
    eyebrow: 'Areas we serve — Elwood',
    h1: { text: 'A dentist for Elwood’s families', em: 'Elwood’s families' },
    lead:
      'Elwood is prams, playgrounds and young families, and we see a lot of them. We’re an easy drive up from the bay, and happy hosts to small people and first-time dental visits.',
    drive: { time: 'About 9 minutes', via: 'via Glen Huntly Road' },
    about: {
      heading: { text: 'Dentistry that fits bayside family life', em: 'bayside family life' },
      body:
        'Elwood is bayside family life, Elwood Beach and the foreshore, the Ormond Road cafe strip, and the canal and parklands that make it a magnet for young families and dog walkers. Prams outnumber almost everything on a weekend morning. Those young Elwood families are exactly who we see most, first visits for little ones, and parents finally getting their own check-up sorted between school runs and the beach.',
    },
    route: {
      heading: { text: 'Up Glen Huntly Road from the bay', em: 'from the bay' },
      body: 'From Elwood, head up Glen Huntly Road and across toward Orrong Road, roughly nine minutes.',
    },
    goodToKnow: {
      heading: { text: 'Looking after baby and toddler teeth', em: 'baby and toddler teeth' },
      body:
        'Baby teeth matter more than their short life suggests, they hold space for the adult teeth and shape how a child eats and speaks. Start cleaning as soon as the first tooth appears, with a smear of toothpaste and a soft brush. Skip sugary drinks in bottles, especially at bedtime, which is the main cause of early decay. And bring them in early, so their first proper visit is a happy one rather than a rescue.',
    },
    faqs: [
      {
        q: 'My toddler won’t sit still. Can you still see them?',
        a: 'Yes. Early visits are short and low-key, we go at their pace.',
      },
      {
        q: 'Is the clinic okay for young children?',
        a: 'Very, early visits are short and relaxed, and we go at your child’s pace.',
      },
      {
        q: 'Can I bring the pram in?',
        a: 'Of course, and there’s onsite parking so you’re not juggling a pram and a park.',
      },
      {
        q: 'Is it far from Elwood with kids in tow?',
        a: 'Around nine minutes, with parking waiting when you arrive.',
      },
    ],
    links: [
      { label: 'Children’s dentistry', href: '/services/childrens-dentistry' },
      { label: 'Your first visit', href: '/your-first-visit' },
      { label: 'Fees', href: '/fees' },
    ],
    meta: {
      title: 'Dentist in Elwood | East St Kilda Dental',
      description:
        'A gentle dentist for Elwood’s young bayside families, about nine minutes away. Good with little ones, onsite parking, all health funds, same-day emergency care.',
    },
  },
  {
    slug: 'elsternwick',
    name: 'Elsternwick',
    postcode: '3185',
    eyebrow: 'Areas we serve — Elsternwick',
    h1: { text: 'One dentist for the whole family in Elsternwick', em: 'the whole family' },
    lead:
      'Plenty of Elsternwick households like the idea of one dentist for everyone, the same familiar place for the kids, the parents and the grandparents. We’re a few minutes away and set up for exactly that.',
    drive: { time: 'About 7 minutes', via: 'via Orrong Road' },
    about: {
      heading: { text: 'A steady local habit for Elsternwick', em: 'Elsternwick' },
      body:
        'Elsternwick centres on the Glen Huntly Road shops and the beloved Classic Cinema, with the historic Rippon Lea Estate and its gardens on its doorstep. It’s a leafy, settled suburb of period homes and established families, many of whom have used the same local services for a generation. That preference for a steady, familiar routine is exactly what a whole-family dental home offers.',
    },
    route: {
      heading: { text: 'A short trip up Orrong Road', em: 'up Orrong Road' },
      body: 'From Elsternwick it’s a short trip up Orrong Road or along Glen Huntly Road, about seven minutes.',
    },
    goodToKnow: {
      heading: { text: 'When to book a child’s first visit', em: 'a child’s first visit' },
      body:
        'Parents often ask when to bring a child in for the first time. The general guidance is around their first birthday, or within six months of the first tooth appearing, earlier than most expect. Early visits aren’t about drilling. They’re about spotting anything developing, getting your child comfortable in the chair, and giving you simple advice on brushing and diet. Starting young is how children grow up without dental fear.',
    },
    faqs: [
      {
        q: 'Can the whole family come the same day?',
        a: 'Often yes, we’ll try to group your appointments so it’s one trip.',
      },
      {
        q: 'Can everyone see the same dentist?',
        a: 'Yes, that’s how many Elsternwick families use us, one familiar practice for every age.',
      },
      {
        q: 'When should I bring my child in first?',
        a: 'Around their first birthday, or when the first tooth appears, earlier than most people expect.',
      },
      { q: 'How young is too young for a first visit?', a: 'Not too young, around age one is ideal.' },
    ],
    links: [
      { label: 'Children’s dentistry', href: '/services/childrens-dentistry' },
      { label: 'Your first visit', href: '/your-first-visit' },
      { label: 'Check-ups and cleans', href: '/services/check-ups' },
    ],
    meta: {
      title: 'Dentist in Elsternwick | East St Kilda Dental',
      description:
        'One dentist for the whole Elsternwick family, about seven minutes via Glen Huntly Road. Children welcome, onsite parking, all health funds, same-day care.',
    },
  },
  {
    slug: 'ripponlea',
    name: 'Ripponlea',
    postcode: '3185',
    eyebrow: 'Areas we serve — Ripponlea',
    h1: { text: 'Ripponlea’s dentist, just up the road', em: 'just up the road' },
    lead:
      'Ripponlea is quiet, leafy and close, and so is the trip to us. For a suburb this near, there’s little excuse to let a check-up slide, which is rather the point.',
    drive: { time: 'About 5 minutes', via: 'via Glen Huntly Road' },
    about: {
      heading: { text: 'Practically next door to Rippon Lea', em: 'next door' },
      body:
        'Ripponlea is one of Melbourne’s smallest and most genteel pockets, defined by the National Trust’s Rippon Lea Estate, its grand house and heritage gardens, and a handful of cafes near the station. It’s quiet, leafy and close-knit, and practically next door to us. For a suburb this near, keeping up a regular check-up is effortless, which is rather the whole point of having a local dentist.',
    },
    route: {
      heading: { text: 'Five minutes along Glen Huntly Road', em: 'Five minutes' },
      body: 'From Ripponlea it’s a five-minute run along Glen Huntly Road and across to Orrong Road.',
    },
    goodToKnow: {
      heading: { text: 'The quiet signs it’s time for a check-up', em: 'The quiet signs' },
      body:
        'Teeth rarely shout before they whisper. Worth a visit: gums that bleed when you brush, a tooth that twinges with hot or cold, a rough edge your tongue keeps finding, an ache that comes and goes, or breath that won’t freshen up. None of these are emergencies, but each is your mouth telling you something small is starting. Caught now, they’re usually simple. Left alone, they tend not to stay that way.',
    },
    faqs: [
      {
        q: 'It’s not painful, just niggling. Should I come in?',
        a: 'Yes. Niggles are the ideal time, before they become problems.',
      },
      {
        q: 'It’s so close, can I get in easily?',
        a: 'Usually yes, being one of our nearest suburbs, Ripponlea patients tend to get quick appointments.',
      },
      {
        q: 'Should I come in even without pain?',
        a: 'Yes, the quiet niggles are the ideal time to sort things, before they become problems.',
      },
      { q: 'How close is Ripponlea?', a: 'Just five minutes, one of the nearest suburbs to us.' },
    ],
    links: [
      { label: 'Check-ups and cleans', href: '/services/check-ups' },
      { label: 'Your first visit', href: '/your-first-visit' },
      { label: 'Emergency dentist', href: '/emergency-dentist' },
    ],
    meta: {
      title: 'Dentist in Ripponlea | East St Kilda Dental',
      description:
        'Ripponlea’s local dentist, five minutes up the road. Calm, comprehensive check-ups and cleans, onsite parking, all health funds, and same-day emergency care.',
    },
  },
  {
    slug: 'caulfield',
    name: 'Caulfield',
    postcode: '3162',
    eyebrow: 'Areas we serve — Caulfield',
    h1: { text: 'A family dentist near Caulfield', em: 'family dentist' },
    lead:
      'Caulfield runs on family life: school runs, weekend sport, three generations at one table. We fit into that, a straight trip along Dandenong Road, and we’re used to seeing the whole household, from a toddler’s first visit to grandparents.',
    drive: { time: 'About 7 minutes', via: 'via Dandenong Road' },
    about: {
      heading: { text: 'Dental care that fits Caulfield family life', em: 'Caulfield family life' },
      body:
        'Caulfield is family territory, wrapped around the racecourse, Caulfield Park and the Glen Huntly Road shops, and home to one of Melbourne’s largest and most established communities. Monash University’s Caulfield campus brings students into the mix, but it’s the multi-generation families that define the area. That family-first character is why so much of our Caulfield care is children’s check-ups, school-age visits and the whole household coming through together.',
    },
    route: {
      heading: { text: 'A direct run west along Dandenong Road', em: 'west along Dandenong Road' },
      body:
        'From Caulfield it’s a direct run west along Dandenong Road to the Orrong Road corner, usually around seven minutes.',
    },
    goodToKnow: {
      heading: { text: 'The Child Dental Benefits Schedule, explained', em: 'Child Dental Benefits Schedule' },
      body:
        'Many Caulfield families don’t realise their children may be eligible for the Child Dental Benefits Schedule, a Medicare program that covers a set amount of dental care over two calendar years for eligible children aged 0 to 17, including check-ups, cleans and fillings. If your family receives certain government payments, your child likely qualifies. We can check eligibility and bulk-bill straight to Medicare, so covered care costs nothing on the day.',
    },
    faqs: [
      {
        q: 'Are you good with young kids?',
        a: 'Yes. We keep it calm and friendly so first visits aren’t scary and kids actually come back.',
      },
      {
        q: 'Do you see school-age children from Caulfield?',
        a: 'Plenty, and we keep their visits calm and friendly so they’re happy to come back.',
      },
      {
        q: 'Can the family book together?',
        a: 'We’ll try to group your family’s appointments so it’s a single trip from Caulfield.',
      },
      {
        q: 'Can you bulk-bill my child under Medicare?',
        a: 'If they’re eligible for the Child Dental Benefits Schedule, yes, we claim it directly.',
      },
    ],
    links: [
      { label: 'Children’s dentistry', href: '/services/childrens-dentistry' },
      { label: 'Your first visit', href: '/your-first-visit' },
      { label: 'Fees', href: '/fees' },
    ],
    meta: {
      title: 'Dentist in Caulfield | East St Kilda Dental',
      description:
        'A gentle family dentist about seven minutes from Caulfield along Dandenong Road. Great with kids, bulk-billing eligible kids, onsite parking, all health funds.',
    },
  },
  {
    slug: 'caulfield-north',
    name: 'Caulfield North',
    postcode: '3161',
    eyebrow: 'Areas we serve — Caulfield North',
    h1: { text: 'A dentist on Caulfield North’s doorstep', em: 'Caulfield North’s doorstep' },
    lead:
      'We sit right where Caulfield North meets Dandenong Road, so for students, commuters and anyone living nearby, we’re about as convenient as a dentist gets, on the way to almost everywhere.',
    drive: { time: 'About 5 minutes', via: 'via Dandenong Road' },
    about: {
      heading: { text: 'On your stretch of Dandenong Road', em: 'your stretch' },
      body:
        'Caulfield North runs along Dandenong Road right up to our corner, taking in the edge of Caulfield Park and the Monash Caulfield campus. It’s a busy blend of students, professionals commuting into the city, and families in the quieter streets behind the main road. Sitting on its doorstep, we’re the easy option for anyone in Caulfield North who wants dental care on the way to, or back from, everywhere else.',
    },
    route: {
      heading: { text: 'Barely a trip along Dandenong Road', em: 'Barely a trip' },
      body: 'From Caulfield North it’s barely a trip, a few minutes along Dandenong Road, around five.',
    },
    goodToKnow: {
      heading: { text: 'Caring for your teeth on a busy schedule', em: 'a busy schedule' },
      body:
        'When life’s flat out, dental care is the first thing to slip and the first to bite back. Two minutes of proper brushing twice a day, floss once, and water instead of a third coffee or energy drink covers most of the basics. If you grind your teeth under stress, and plenty of busy people do, tell us, because a simple night guard saves a lot of damage. Small habits held consistently beat heroic clean-ups later.',
    },
    faqs: [
      {
        q: 'Can I get an on-the-way appointment?',
        a: 'We’re right on Dandenong Road, easy to reach before or between things. Ask for a time that suits.',
      },
      {
        q: 'Can I book around uni or work?',
        a: 'We’re right on Dandenong Road, so it’s easy to fit a visit before or between things.',
      },
      {
        q: 'Is there parking if I drive over?',
        a: 'Yes, onsite parking, though most Caulfield North locals are only a couple of minutes away.',
      },
      { q: 'How near is Caulfield North?', a: 'Only a few minutes, we sit on your edge of Dandenong Road.' },
    ],
    links: [
      { label: 'Check-ups and cleans', href: '/services/check-ups' },
      { label: 'Your first visit', href: '/your-first-visit' },
      { label: 'Fees', href: '/fees' },
    ],
    meta: {
      title: 'Dentist in Caulfield North | East St Kilda Dental',
      description:
        'A dentist right on Caulfield North’s edge on Dandenong Road, minutes away. Quick and easy for students and commuters, onsite parking, all major health funds.',
    },
  },
  {
    slug: 'windsor',
    name: 'Windsor',
    postcode: '3181',
    eyebrow: 'Areas we serve — Windsor',
    h1: { text: 'Finding a regular dentist in Windsor', em: 'a regular dentist' },
    lead:
      'Windsor is renters, share houses and people between one stage of life and the next, which often means no regular dentist. If that’s you, we’re a straight run east and a good place to finally have a dental home.',
    drive: { time: 'About 5 minutes', via: 'via Dandenong Road' },
    about: {
      heading: { text: 'A dental home for Windsor’s in-between years', em: 'in-between years' },
      body:
        'Windsor is the more relaxed, characterful end of Chapel Street, where the boutiques give way to wine bars, brunch spots and the odd op shop, anchored by Windsor station. It’s young, rented and in-between, share houses, first apartments, people early in careers. That’s exactly the crowd who often haven’t had a regular dentist since leaving home, and who we help settle into one, a short run east.',
    },
    route: {
      heading: { text: 'A straight run east on Dandenong Road', em: 'A straight run east' },
      body: 'From Windsor, follow Dandenong Road east to the Orrong Road corner, about five minutes.',
    },
    goodToKnow: {
      heading: { text: 'Why the first visit back is worth it', em: 'the first visit back' },
      body:
        'If you haven’t had a dentist since you left home, one visit resets everything. We build a full picture, teeth, gums, bite, X-rays, so you know your actual starting point instead of guessing. Most young adults have one or two small things worth handling early and a lot that’s fine. From there you’ve got a plan and a practice that knows your history, which turns dental care from a panicked emergency into something routine and cheap.',
    },
    faqs: [
      {
        q: 'I haven’t had a dentist since I moved out. Where do I start?',
        a: 'Right here, with a first visit that maps everything out. No lectures.',
      },
      {
        q: 'I haven’t been to a dentist in ages, where do I start?',
        a: 'With a first visit that maps everything out, calmly and without lectures.',
      },
      {
        q: 'Are you used to younger patients?',
        a: 'Very, a lot of Windsor patients are young locals finding their first regular dentist.',
      },
      { q: 'How long from Windsor?', a: 'Around five minutes, east along Dandenong Road.' },
    ],
    links: [
      { label: 'Your first visit', href: '/your-first-visit' },
      { label: 'Nervous patients', href: '/nervous-patients' },
    ],
    meta: {
      title: 'Dentist in Windsor | East St Kilda Dental',
      description:
        'A gentle dentist about five minutes from Windsor, a good first regular practice if you have been away. Onsite parking, all health funds, same-day emergencies.',
    },
  },
  {
    slug: 'prahran',
    name: 'Prahran',
    postcode: '3181',
    eyebrow: 'Areas we serve — Prahran',
    h1: { text: 'A dentist near Prahran for a smile you’re happy with', em: 'a smile you’re happy with' },
    lead:
      'Prahran and Chapel Street are about looking and feeling good, and plenty of locals want their smile to keep up. We’re close by and easy with the cosmetic side, done so it still looks like you.',
    drive: { time: 'About 5 minutes', via: 'via High Street' },
    about: {
      heading: { text: 'Keeping up with Chapel Street', em: 'Chapel Street' },
      body:
        'Prahran is Chapel Street at full tilt, the Prahran Market, the laneways off Greville Street, and a fashion-and-food scene that keeps its residents looking sharp. It draws style-conscious young professionals who care how they present, smile included. That appearance-aware crowd is why cosmetic questions, whitening and evening out a smile, come up so often with our Prahran patients, always weighed honestly against what’s actually worth doing.',
    },
    route: {
      heading: { text: 'Down High Street to Dandenong Road', em: 'Down High Street' },
      body: 'From Prahran, come down High Street or Chapel Street to Dandenong Road, roughly five minutes.',
    },
    goodToKnow: {
      heading: { text: 'What teeth whitening involves, and what’s safe', em: 'teeth whitening' },
      body:
        'Whitening works, but the internet is full of ways to wreck your enamel doing it. Charcoal pastes and acidic DIY hacks can strip the surface and leave teeth more stained and sensitive. Professionally, whitening uses controlled peroxide gels that lift stains while your enamel and gums are protected. Some temporary sensitivity for a day or two is normal and settles. It isn’t for everyone, existing fillings and crowns won’t change colour, so it’s worth a quick check first. Done under supervision, it’s a controlled, predictable result.',
    },
    faqs: [
      {
        q: 'Do those whitening kits online work?',
        a: 'Some do little, some harm your enamel. We’ll tell you what’s actually safe.',
      },
      {
        q: 'Can you help with the look of my smile?',
        a: 'Yes, from whitening to evening things out, always with honest advice on what’s worth doing.',
      },
      {
        q: 'Is whitening safe for my teeth?',
        a:
          'Done professionally, yes, with some temporary sensitivity that settles. The DIY acid and charcoal hacks are the risky ones.',
      },
      { q: 'Is it a quick run from Prahran?', a: 'Yes, roughly five minutes down to Dandenong Road.' },
    ],
    links: [
      { label: 'Teeth whitening', href: '/services/teeth-whitening' },
      { label: 'Cosmetic dentistry', href: '/services/smile-design' },
      { label: 'Your first visit', href: '/your-first-visit' },
    ],
    meta: {
      title: 'Dentist in Prahran | East St Kilda Dental',
      description:
        'A dentist about five minutes from Prahran for natural cosmetic care and safe, supervised teeth whitening. Onsite parking, all health funds, same-day care.',
    },
  },
  {
    slug: 'armadale',
    name: 'Armadale',
    postcode: '3143',
    eyebrow: 'Areas we serve — Armadale',
    h1: { text: 'Considered dental care near Armadale', em: 'Considered dental care' },
    lead:
      'Armadale tends to value things done properly and made to last, and dentistry is no different. We’re nearby for people who’d rather understand their options and choose well than rush a decision.',
    drive: { time: 'About 5 minutes', via: 'via Orrong Road' },
    about: {
      heading: { text: 'Dentistry made to last, for Armadale', em: 'made to last' },
      body:
        'Armadale is High Street, its antique dealers, galleries and considered boutiques setting a tone of quality and permanence, in a suburb of grand period homes and long-settled residents. People here tend to value things done properly and made to last. That mindset carries into dentistry: our Armadale patients often want to understand their options and invest in restorative work that holds up, rather than rush a quick fix.',
    },
    route: {
      heading: { text: 'Down Orrong Road from High Street', em: 'Down Orrong Road' },
      body: 'From Armadale, head down Orrong Road or High Street toward Dandenong Road, about five minutes.',
    },
    goodToKnow: {
      heading: { text: 'Crown, veneer and bonding, explained plainly', em: 'explained plainly' },
      body:
        'These three get muddled. A veneer is a thin facing on the front of a tooth, mostly for looks. Bonding is tooth-coloured material shaped onto a tooth to repair a chip or gap, quick and less costly. A crown caps a whole tooth and is used when a tooth is heavily broken or root-treated and needs real strength. Cosmetic-first situations often suit veneers or bonding; structurally weak teeth usually need a crown. The right choice depends on the tooth, not fashion.',
    },
    faqs: [
      {
        q: 'Do I need a crown, or would a veneer do?',
        a: 'It depends on whether the tooth needs strength or just a nicer face. We’ll show you.',
      },
      {
        q: 'I want quality work that lasts, is that your approach?',
        a: 'Yes, we take time to plan restorative work properly rather than rush a quick fix.',
      },
      {
        q: 'What’s the difference between a crown and a veneer?',
        a:
          'A veneer is a thin facing for looks; a crown caps and strengthens a whole tooth. We’ll show you which fits.',
      },
      { q: 'How close is Armadale?', a: 'About five minutes, via Orrong Road or High Street.' },
    ],
    links: [
      { label: 'Crowns and bridges', href: '/services/crowns-and-bridges' },
      { label: 'Cosmetic dentistry', href: '/services/smile-design' },
      { label: 'Your first visit', href: '/your-first-visit' },
    ],
    meta: {
      title: 'Dentist in Armadale | East St Kilda Dental',
      description:
        'Considered, quality dental care about five minutes from Armadale, cosmetic and restorative. Crowns, veneers, onsite parking, all health funds, same-day care.',
    },
  },
  {
    slug: 'glen-huntly',
    name: 'Glen Huntly',
    postcode: '3163',
    eyebrow: 'Areas we serve — Glen Huntly',
    h1: { text: 'Straightforward dental care near Glen Huntly', em: 'Straightforward dental care' },
    lead:
      'Glen Huntly is a busy, mixed strip where value matters and nobody likes a surprise bill. We sit a little further along Glen Huntly Road, and we keep costs clear and claiming simple.',
    drive: { time: 'About 11 minutes', via: 'via Glen Huntly Road' },
    about: {
      heading: { text: 'Clear pricing for Glen Huntly', em: 'Clear pricing' },
      body:
        'Glen Huntly is a busy, down-to-earth strip along Glen Huntly Road, a genuinely multicultural pocket of grocers, cafes and family businesses around the level crossing and station. It’s practical, diverse and value-minded, the kind of place where people appreciate a straight answer and no surprise bills. That’s how we work with Glen Huntly families: clear pricing, on-the-spot claiming, and honest advice about what actually needs doing.',
    },
    route: {
      heading: { text: 'West along Glen Huntly Road', em: 'along Glen Huntly Road' },
      body: 'From Glen Huntly, follow Glen Huntly Road west toward Orrong Road, about eleven minutes.',
    },
    goodToKnow: {
      heading: { text: 'How health-fund claiming works on the day', em: 'health-fund claiming' },
      body:
        'Health-fund dental can be confusing, so here’s how it works with us. We claim on the spot through the terminal, you tap your fund card and pay only the gap, the part your policy doesn’t cover, then and there. How much is covered depends on your level of extras and how much of your yearly limit you’ve used. For bigger treatment you’ll always get a written estimate first, and we can pre-check with your fund so there are no surprises.',
    },
    faqs: [
      {
        q: 'Do you take my health fund?',
        a: 'We accept all the major funds and claim instantly, you just pay any gap.',
      },
      {
        q: 'Will I get a surprise bill?',
        a: 'No, we give clear, upfront pricing and a written estimate before any larger treatment.',
      },
      {
        q: 'Do you claim my health fund on the spot?',
        a: 'Yes, all the major funds, you just tap your card and pay any gap.',
      },
      { q: 'How far along is Glen Huntly?', a: 'Around eleven minutes, straight along Glen Huntly Road.' },
    ],
    links: [
      { label: 'Fees', href: '/fees' },
      { label: 'Your first visit', href: '/your-first-visit' },
      { label: 'Check-ups and cleans', href: '/services/check-ups' },
    ],
    meta: {
      title: 'Dentist in Glen Huntly | East St Kilda Dental',
      description:
        'A dentist about eleven minutes from Glen Huntly with on-the-spot health fund claiming and clear, upfront pricing. Onsite parking and same-day emergency care.',
    },
  },
  {
    slug: 'carnegie',
    name: 'Carnegie',
    postcode: '3163',
    eyebrow: 'Areas we serve — Carnegie',
    h1: { text: 'A family dentist for Carnegie', em: 'Carnegie' },
    lead:
      'Carnegie families often reach us just as the kids hit the teenage years, braces coming off, wisdom teeth stirring, and independence meaning they need their own dentist. We’re set up for that stretch of family life.',
    drive: { time: 'About 13 minutes', via: 'via Dandenong Road' },
    about: {
      heading: { text: 'Through the school and teenage years', em: 'the school and teenage years' },
      body:
        'Carnegie has grown into one of the south-east’s busiest village strips, the Koornang Road shops, a thriving food scene and the station at its heart, drawing a young, diverse, family-heavy population. Many households arrive with school-age kids who become teenagers fast. That’s the stretch of family life we’re set up for in Carnegie: children’s visits, the teenage years, and keeping an eye on wisdom teeth before they cause trouble.',
    },
    route: {
      heading: { text: 'Thirteen minutes from Koornang Road', em: 'from Koornang Road' },
      body: 'From Carnegie, take Dandenong Road or Koornang Road west, roughly thirteen minutes.',
    },
    goodToKnow: {
      heading: { text: 'Teens, wisdom teeth, and when to check them', em: 'wisdom teeth' },
      body:
        'Wisdom teeth usually make themselves known between about seventeen and twenty-five. They don’t all cause trouble, plenty sit fine and stay, but when there isn’t room they can push, partly erupt, or trap food and get infected. The trick is watching, not waiting for pain. A simple X-ray in the late teens shows whether they’re likely to behave, so any decision to remove them is planned and calm rather than a rushed, painful weekend.',
    },
    faqs: [
      {
        q: 'When should my teenager’s wisdom teeth be checked?',
        a: 'Late teens is ideal, an X-ray tells us whether they’ll be a problem.',
      },
      {
        q: 'Are teenagers comfortable coming in?',
        a: 'Yes, we keep it low-key, and plenty of Carnegie teens see us for check-ups and cleans.',
      },
      {
        q: 'Do you see the whole family?',
        a: 'Yes, from young children through the teenage years and the adults too.',
      },
      { q: 'Is Carnegie far?', a: 'Not really, roughly thirteen minutes west on Dandenong Road.' },
    ],
    links: [
      { label: 'Children’s dentistry', href: '/services/childrens-dentistry' },
      { label: 'Emergency dentist', href: '/emergency-dentist' },
      { label: 'Your first visit', href: '/your-first-visit' },
    ],
    meta: {
      title: 'Dentist in Carnegie | East St Kilda Dental',
      description:
        'A family dentist about thirteen minutes from Carnegie, good with teenagers and wisdom teeth. Onsite parking, all health funds, and same-day emergency care.',
    },
  },
  {
    slug: 'gardenvale',
    name: 'Gardenvale',
    postcode: '3185',
    eyebrow: 'Areas we serve — Gardenvale',
    h1: { text: 'A calm dentist near Gardenvale', em: 'A calm dentist' },
    lead:
      'Gardenvale is a small, settled pocket, and its residents tend to want a dentist who’s steady and close rather than flashy. That suits us, we’re nearby and in no hurry.',
    drive: { time: 'About 11 minutes', via: 'via the Nepean Highway' },
    about: {
      heading: { text: 'The local basics, done well, for Gardenvale', em: 'done well' },
      body:
        'Gardenvale is a small, easily-missed pocket straddling the line near the Nepean Highway, sitting quietly between Elsternwick and Brighton with its own little station and a settled, unshowy character. Residents here tend to want the local basics done well and close by. A steady, calm dentist a short drive up the highway, unhurried and reliable, is exactly the kind of local service that suits Gardenvale.',
    },
    route: {
      heading: { text: 'Up the Nepean Highway', em: 'the Nepean Highway' },
      body: 'From Gardenvale, head up Nepean Highway and Glen Huntly Road, about eleven minutes.',
    },
    goodToKnow: {
      heading: { text: 'What actually causes sensitive teeth', em: 'sensitive teeth' },
      body:
        'That wince at cold water or ice cream usually means the tooth’s inner layer is exposed, often from enamel worn thin by hard brushing, from receding gums, or from grinding. Sometimes it’s a small crack or a bit of decay. A sensitive-teeth toothpaste helps mild cases by calming the nerve over a few weeks. But persistent or sharp sensitivity is worth checking, because the fixable causes are easy to miss and easy to treat once we find them.',
    },
    faqs: [
      {
        q: 'My teeth twinge with cold. Is that serious?',
        a: 'Often not, but worth a look to rule out a crack or decay.',
      },
      {
        q: 'My teeth are sensitive to cold, is that a problem?',
        a: 'Often it’s minor, but worth a look to rule out a crack or decay.',
      },
      {
        q: 'Is it an easy drive from Gardenvale?',
        a: 'Yes, a short run up the highway, with parking when you arrive.',
      },
      { q: 'How far is Gardenvale?', a: 'Around eleven minutes, up through Nepean Highway.' },
    ],
    links: [
      { label: 'Check-ups and cleans', href: '/services/check-ups' },
      { label: 'Your first visit', href: '/your-first-visit' },
      { label: 'Emergency dentist', href: '/emergency-dentist' },
    ],
    meta: {
      title: 'Dentist in Gardenvale | East St Kilda Dental',
      description:
        'A calm dentist about eleven minutes from Gardenvale for everyday problems like sensitive teeth, plus routine care. Onsite parking, all major health funds.',
    },
  },
  {
    slug: 'albert-park',
    name: 'Albert Park',
    postcode: '3206',
    eyebrow: 'Areas we serve — Albert Park',
    h1: { text: 'A dentist for active Albert Park', em: 'active Albert Park' },
    lead:
      'Albert Park lives outdoors, the lake, the beach, weekend sport for the whole family. We see plenty of that active crowd, and we’re a straightforward trip across for them.',
    drive: { time: 'About 14 minutes', via: 'via St Kilda Road' },
    about: {
      heading: { text: 'Dentistry for a life spent outdoors', em: 'a life spent outdoors' },
      body:
        'Albert Park lives outdoors, the lake and its running track, the Grand Prix circuit, the beach, and the Bridport Street and Victoria Avenue village greens. It’s an active, affluent suburb of professionals and sporty families who spend their weekends moving. That active life is where the dental link sits for Albert Park: protecting teeth on the field and court with properly fitted mouthguards, for the adults and the kids.',
    },
    route: {
      heading: { text: 'Across from the lake', em: 'from the lake' },
      body:
        'From Albert Park, come along Fitzroy Street and the St Kilda Road area toward Orrong Road, about fourteen minutes.',
    },
    goodToKnow: {
      heading: { text: 'Protecting teeth if you play sport', em: 'if you play sport' },
      body:
        'If you or your kids play contact or ball sport, a knocked-out or broken front tooth is a real risk, and a chipped adult tooth stays with you for life. A custom-fitted mouthguard, moulded to your teeth, protects far better than the boil-and-bite ones from the shop, which are bulky and easy to spit out. It’s a small, one-off job that prevents a lot of grief, and for kids it’s worth remaking as the jaw grows.',
    },
    faqs: [
      {
        q: 'Do the shop mouthguards work?',
        a: 'Not nearly as well as a custom one, which stays put and actually protects.',
      },
      {
        q: 'Do you make sports mouthguards?',
        a: 'Yes, custom-fitted ones that protect far better than the shop versions, for adults and kids.',
      },
      {
        q: 'Can you fit us in around weekend sport?',
        a: 'We’ll find a time that works, and a mouthguard is a quick, one-off job.',
      },
      { q: 'Is Albert Park a long trip?', a: 'About fourteen minutes across from the bay.' },
    ],
    links: [
      { label: 'Children’s dentistry', href: '/services/childrens-dentistry' },
      { label: 'Emergency dentist', href: '/emergency-dentist' },
      { label: 'Your first visit', href: '/your-first-visit' },
    ],
    meta: {
      title: 'Dentist in Albert Park | East St Kilda Dental',
      description:
        'A dentist for active Albert Park families, about fourteen minutes away, with custom sports mouthguards. Onsite parking, all health funds, same-day emergencies.',
    },
  },
  {
    slug: 'middle-park',
    name: 'Middle Park',
    postcode: '3206',
    eyebrow: 'Areas we serve — Middle Park',
    h1: { text: 'A dentist to stay with, near Middle Park', em: 'to stay with' },
    lead:
      'Middle Park has a village feel, the sort of place where people keep the same butcher for twenty years. Dentistry works the same way, and we’re an easy trip across for locals who’d rather have one practice than a new one every couple of years.',
    drive: { time: 'About 12 minutes', via: 'via St Kilda Road' },
    about: {
      heading: { text: 'A practice worth settling into', em: 'settling into' },
      body:
        'Middle Park is one of the bay’s quiet secrets, a compact grid of heritage terraces and wide streets between Albert Park Lake and the beach, with the Armstrong Street village at its centre. It’s a place people put down roots and stay, keeping the same local haunts for decades. That loyalty is the heart of how we serve Middle Park: a practice you can settle with for the long run.',
    },
    route: {
      heading: { text: 'Inland from Armstrong Street', em: 'from Armstrong Street' },
      body: 'From Middle Park, follow the bay and cut inland via St Kilda Road, roughly twelve minutes.',
    },
    goodToKnow: {
      heading: { text: 'Why seeing the same dentist over time helps', em: 'the same dentist' },
      body:
        'Seeing the same dentist over years isn’t just nice, it’s better care. We hold your history, your old X-rays, the tooth we’ve been watching, the way your gums respond. That means we spot change early because we know your normal, and we can plan treatment across time instead of reacting to whatever’s in front of us today. Dentistry rewards the long view, and a practice that remembers you is worth more than a cheaper one-off.',
    },
    faqs: [
      {
        q: 'I’ve bounced between dentists. Does that matter?',
        a: 'It does. Staying put lets us catch changes early. We’ll gather your records and settle you in.',
      },
      {
        q: 'I’ve moved between dentists, does that matter?',
        a:
          'It does, staying with one practice lets us catch changes early. We’ll gather your records and settle you in.',
      },
      {
        q: 'Do you have long-term patients from Middle Park?',
        a: 'Many, some families have been with us across decades.',
      },
      { q: 'How far is Middle Park?', a: 'Roughly twelve minutes, cutting inland via St Kilda Road.' },
    ],
    links: [
      { label: 'Check-ups and cleans', href: '/services/check-ups' },
      { label: 'Your first visit', href: '/your-first-visit' },
      { label: 'Fees', href: '/fees' },
    ],
    meta: {
      title: 'Dentist in Middle Park | East St Kilda Dental',
      description:
        'A dentist about twelve minutes from Middle Park for people who want one practice to stay with. Onsite parking, all health funds, and same-day emergency care.',
    },
  },
  {
    slug: 'port-melbourne',
    name: 'Port Melbourne',
    postcode: '3207',
    eyebrow: 'Areas we serve — Port Melbourne',
    h1: { text: 'A comprehensive dentist for Port Melbourne', em: 'Port Melbourne' },
    lead:
      'Port Melbourne is waterfront apartments, young professionals and families who tend to choose things deliberately. We’re a clean run round the bay, and worth it for people who’d rather find one practice and stay than keep starting over.',
    drive: { time: 'About 20 minutes', via: 'via Kings Way' },
    about: {
      heading: { text: 'Worth the run round the bay', em: 'the run round the bay' },
      body:
        'Port Melbourne pairs its working-waterfront history, Station Pier, the Spirit of Tasmania, the terminals, with the smart Beacon Cove apartments and the Bay Street shops. It’s become a suburb of young professionals and families who chose the water and the city on their doorstep. For that deliberate crowd, a comprehensive dentist worth the clear run round the bay, a practice to settle with rather than start over, makes sense.',
    },
    route: {
      heading: { text: 'Across via Kings Way', em: 'via Kings Way' },
      body: 'From Port Melbourne, follow Kings Way and St Kilda Road across, about twenty minutes.',
    },
    goodToKnow: {
      heading: { text: 'Gum health, the problem most adults miss', em: 'most adults miss' },
      body:
        'Gum disease is the most common dental problem in adults, and the sneakiest, because early on it doesn’t hurt. It starts as bleeding when you brush and can quietly reach the bone that holds your teeth, which is the leading cause of tooth loss in adults. The good news: caught early it’s very manageable, often with a proper clean and better home care. A check-up looks for it specifically, so it’s found while it’s still easy to turn around.',
    },
    faqs: [
      {
        q: 'Is it worth coming that far?',
        a:
          'For a practice you can settle with long-term, plenty of Port Melbourne patients think so, and there’s parking when you arrive.',
      },
      {
        q: 'Do you see Beacon Cove and waterfront residents?',
        a: 'Yes, we care for households right across Port Melbourne who want a comprehensive local practice.',
      },
      {
        q: 'What should I watch for between visits?',
        a:
          'Bleeding gums when you brush is the common early sign worth getting checked, it’s very manageable caught early.',
      },
      { q: 'How far is Port Melbourne?', a: 'About twenty minutes, a clean run via Kings Way.' },
    ],
    links: [
      { label: 'Your first visit', href: '/your-first-visit' },
      { label: 'Check-ups and cleans', href: '/services/check-ups' },
      { label: 'Fees', href: '/fees' },
    ],
    meta: {
      title: 'Dentist in Port Melbourne | East St Kilda Dental',
      description:
        'A comprehensive dentist about twenty minutes from Port Melbourne, worth the run for a practice you settle with. Onsite parking, all health funds, same-day care.',
    },
  },
  {
    slug: 'south-yarra',
    name: 'South Yarra',
    postcode: '3141',
    eyebrow: 'Areas we serve — South Yarra',
    h1: { text: 'A dentist near South Yarra for a smile that suits you', em: 'smile that suits you' },
    lead:
      'South Yarra keeps an eye on appearances, and a good smile is part of that. We’re a quick run away and give straight, unhurried advice on the cosmetic side, the kind that improves a smile without making it look done.',
    drive: { time: 'About 8 minutes', via: 'via Punt Road' },
    about: {
      heading: { text: 'Dental care that fits South Yarra', em: 'South Yarra' },
      body:
        'South Yarra is polished inner-Melbourne at its most style-aware, the Chapel Street and Toorak Road boutiques, the cafes, and a young, professional population that keeps an eye on how it presents. Appearances matter here, and a good smile is part of the picture. That’s why cosmetic conversations, natural-looking whitening and evening out a smile, come up so often with our South Yarra patients, always with honest advice on what’s worth doing.',
    },
    route: {
      heading: { text: 'A quick run down Punt Road', em: 'down Punt Road' },
      body: 'From South Yarra, take Punt Road down to Dandenong Road, about eight minutes.',
    },
    goodToKnow: {
      heading: { text: 'What a smile assessment involves', em: 'smile assessment' },
      body:
        'A smile assessment is simply a proper conversation about what you’d change, backed by an honest look at what’s realistic. We photograph your smile, check the health underneath, because there’s no point dressing up a tooth that’s unwell, and talk through the options, from a quick whitening to reshaping or veneers. Crucially, we’ll tell you when the simplest option is the right one, and when something isn’t worth doing. No pressure, just a clear picture.',
    },
    faqs: [
      {
        q: 'I want a nicer smile but don’t know where to start.',
        a: 'A smile assessment. We photograph, discuss, and give you honest options.',
      },
      {
        q: 'Do you do whitening as well as veneers?',
        a: 'Yes, from simple whitening through to reshaping, matched to what actually suits you.',
      },
      {
        q: 'Will cosmetic work look natural?',
        a: 'That’s the aim, we’re known for improving a smile without making it look done.',
      },
      { q: 'How quick from South Yarra?', a: 'Around eight minutes down Punt Road.' },
    ],
    links: [
      { label: 'Cosmetic dentistry', href: '/services/smile-design' },
      { label: 'Teeth whitening', href: '/services/teeth-whitening' },
      { label: 'Your first visit', href: '/your-first-visit' },
    ],
    meta: {
      title: 'Dentist in South Yarra | East St Kilda Dental',
      description:
        'Honest, natural-looking cosmetic dentistry about eight minutes from South Yarra via Punt Road. Onsite parking, all health funds, same-day emergency care.',
    },
  },
  {
    slug: 'toorak',
    name: 'Toorak',
    postcode: '3142',
    eyebrow: 'Areas we serve — Toorak',
    h1: { text: 'Comprehensive dental care near Toorak', em: 'Comprehensive dental care' },
    lead:
      'Toorak connects to us almost in a straight line down Orrong Road, which is fitting, plenty of local patients have had significant dental work over the years and want a practice that will look after it properly rather than start again.',
    drive: { time: 'About 6 minutes', via: 'via Orrong Road' },
    about: {
      heading: { text: 'Discreet care for Toorak', em: 'Discreet care' },
      body:
        'Toorak is Melbourne’s most prestigious address, tree-lined streets of grand homes gathered around the Toorak Village shops on Toorak Road, and a straight run for us up Orrong Road. Residents here often have significant dental work behind them and want it looked after properly and discreetly, rather than redone. Maintaining crowns, veneers and implants, protecting the investment already made, is the kind of care our Toorak patients tend to value most.',
    },
    route: {
      heading: { text: 'Straight south down Orrong Road', em: 'down Orrong Road' },
      body: 'From Toorak it’s a straight run south down Orrong Road to Dandenong Road, about six minutes.',
    },
    goodToKnow: {
      heading: { text: 'Looking after existing dental work', em: 'existing dental work' },
      body:
        'Crowns, veneers, implants and quality fillings can serve you for many years, but only if the foundations stay healthy. The tooth under a crown can still decay at its edge; the gum around an implant can still get inflamed. Looking after existing work means regular checks of those margins, a clean that reaches where you can’t, and catching a loose edge or small problem before it undoes an expensive piece of dentistry. Good maintenance protects what you’ve already invested.',
    },
    faqs: [
      {
        q: 'I’ve had a lot of work done elsewhere. Will you look after it?',
        a: 'Absolutely. We’ll assess what you have and keep it in good order.',
      },
      {
        q: 'I’ve had a lot of work done, will you look after it?',
        a: 'Absolutely, we assess what you have and maintain it properly, edges, gums and all.',
      },
      {
        q: 'Is your care discreet?',
        a: 'Yes, calm, private and unhurried, which is how our Toorak patients tend to prefer it.',
      },
      { q: 'Is it a quick trip from Toorak?', a: 'Yes, about six minutes straight down Orrong Road.' },
    ],
    links: [
      { label: 'Crowns and bridges', href: '/services/crowns-and-bridges' },
      { label: 'Check-ups and cleans', href: '/services/check-ups' },
      { label: 'Your first visit', href: '/your-first-visit' },
    ],
    meta: {
      title: 'Dentist in Toorak | East St Kilda Dental',
      description:
        'Comprehensive, discreet dental care a straight run down Orrong Road from Toorak, about six minutes. Onsite parking, all health funds, existing work maintained.',
    },
  },
  {
    slug: 'malvern',
    name: 'Malvern',
    postcode: '3144',
    eyebrow: 'Areas we serve — Malvern',
    h1: { text: 'A reliable family dentist near Malvern', em: 'reliable family dentist' },
    lead:
      'Malvern households tend to want things that just work, no drama, no chasing. We’re a little way east and good at the unglamorous thing that keeps teeth healthy: a steady, simple routine the whole family can keep.',
    drive: { time: 'About 7 minutes', via: 'via Wattletree Road' },
    about: {
      heading: { text: 'A routine that just works', em: 'just works' },
      body:
        'Malvern is leafy, established and family-minded, built around the Glenferrie Road and Malvern Central shops and the wide, tree-lined streets that draw settled professionals and multi-generation households. It’s a suburb that values things that simply work, without fuss. That’s the appeal of a reliable family dental routine for Malvern households: everyone booked together, reminders handled, and a practice they don’t have to think about.',
    },
    route: {
      heading: { text: 'Down Wattletree Road', em: 'Wattletree Road' },
      body: 'From Malvern, come down Wattletree Road and Dandenong Road, roughly seven minutes.',
    },
    goodToKnow: {
      heading: { text: 'Building a simple family check-up routine', em: 'family check-up routine' },
      body:
        'A workable family dental routine is simpler than it sounds. Book everyone’s check-ups on the same day, twice a year, so it’s one trip you don’t have to think about again. Between visits, the basics do the heavy lifting: brush twice, floss once, go easy on sugary drinks, and mouthguards for the sporty ones. Consistency beats intensity, and a routine you actually keep is worth more than a perfect one you abandon by March. We’ll send the reminders.',
    },
    faqs: [
      { q: 'Can you just remind us when we’re due?', a: 'Yes, we’ll send reminders so you never have to track it.' },
      { q: 'Can you remind us when we’re due?', a: 'Yes, we send reminders so you never have to track it.' },
      {
        q: 'Can the whole family come on one day?',
        a: 'We’ll group everyone’s check-ups into a single trip from Malvern.',
      },
      { q: 'Is Malvern a long drive?', a: 'No, roughly seven minutes via Wattletree Road.' },
    ],
    links: [
      { label: 'Check-ups and cleans', href: '/services/check-ups' },
      { label: 'Children’s dentistry', href: '/services/childrens-dentistry' },
      { label: 'Your first visit', href: '/your-first-visit' },
    ],
    meta: {
      title: 'Dentist in Malvern | East St Kilda Dental',
      description:
        'A reliable family dentist about seven minutes from Malvern for a simple check-up routine. Onsite parking, all health funds, and same-day emergency care.',
    },
  },
]

/** "/dentist-st-kilda" — the canonical path for a suburb landing page. */
export const suburbPath = (slug: string) => `/dentist-${slug}`

export function getSuburb(slug: string): SuburbData | undefined {
  return suburbs.find((s) => s.slug === slug)
}

/**
 * Like getSuburb, but throws instead of returning undefined.
 *
 * Suburb routes call this at module scope, so a page.tsx pointing at a slug that
 * is not in this file fails the build rather than shipping an empty page.
 */
export function requireSuburb(slug: string): SuburbData {
  const found = getSuburb(slug)
  if (!found) throw new Error(`Unknown suburb slug "${slug}" — add it to data/suburbs.ts`)
  return found
}

/**
 * The other suburb pages to link to from a suburb page.
 *
 * Walks forward through the array and wraps, so every page links out to the
 * same number of siblings and — because the walk is a closed ring — receives
 * exactly that many links back. No suburb page can end up orphaned, and none
 * hoards the internal links, whatever order the array is in.
 *
 * Deliberately not "nearby": the array runs roughly outward from the clinic,
 * which is not a true adjacency map, so the copy that renders these says
 * "other areas we serve" rather than claiming a geographic neighbour.
 */
export function otherSuburbs(slug: string, count = 5): SuburbData[] {
  const start = suburbs.findIndex((s) => s.slug === slug)
  if (start < 0) return suburbs.slice(0, count)
  const take = Math.min(count, suburbs.length - 1)
  return Array.from({ length: take }, (_, i) => suburbs[(start + 1 + i) % suburbs.length])
}
