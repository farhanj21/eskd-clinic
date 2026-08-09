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
 * Copy rules for anything added here, because these pages are advertising a
 * registered health service under the AHPRA guidelines:
 *   - no superlatives ("best", "leading"), no outcome or testimonial claims
 *   - only facts about geography, transport and what we offer
 *   - opening hours are deliberately not restated here; they live on /contact
 *     and in lib/business.ts, so a change never has to be chased across 20 pages
 */

export interface SuburbFaq {
  q: string
  a: string
}

export interface SuburbData {
  /** URL slug. The page lives at /dentist-<slug>. */
  slug: string
  /** Suburb name exactly as it should appear in the H1 and in copy. */
  name: string
  /** Used to disambiguate the "get directions" origin, e.g. "Windsor VIC 3181". */
  postcode: string
  /** Hero paragraph. One sentence, specific to this suburb. */
  lead: string
  /** The H2 of the "your local dentist" section. */
  localHeading: string
  /** The paragraph beneath it. Two or three sentences of genuine local detail. */
  localBody: string
  /** Three nearby landmarks, shown as chips. */
  pills: [string, string, string]
  /** The three "getting to us" cards. */
  gettingHere: { car: string; transport: string; parking: string }
  /** Three questions someone travelling from this suburb actually asks. */
  faqs: [SuburbFaq, SuburbFaq, SuburbFaq]
  /** Search title and description. Unique per page — never templated wholesale. */
  meta: { title: string; description: string }
}

/**
 * In the order they appear in the home page's areas grid, which runs roughly
 * outward from the clinic. East St Kilda is deliberately absent: it is the home
 * page, not a landing page.
 */
export const suburbs: SuburbData[] = [
  {
    slug: 'st-kilda',
    name: 'St Kilda',
    postcode: '3182',
    lead:
      "Just inland from the bay, we've cared for St Kilda families for over 40 years — calm, comprehensive dentistry a short trip up Carlisle Street.",
    localHeading: 'Your local dentist, a few minutes from the bay',
    localBody:
      "St Kilda life runs between Acland Street, Fitzroy Street and the Esplanade. We're a short way inland on Dandenong Road, close enough to be your regular dentist, far enough to park easily and skip the foreshore traffic. Many of our long-standing patients are St Kilda locals who've been coming for years.",
    pills: ['Acland Street', 'Fitzroy Street', 'Balaclava Station'],
    gettingHere: {
      car: "From St Kilda it's a short drive inland, up Carlisle or Inkerman Street to Dandenong Road, then to our door on the corner of Orrong Road.",
      transport:
        'Trams 16 and 3a run along Carlisle Street through to Balaclava, and trams 5 and 64 run along Dandenong Road. Balaclava Station on the Sandringham line is the nearest train.',
      parking: "Free off-street parking off Orrong Road, so you're not circling for a spot near the beach.",
    },
    faqs: [
      { q: 'How far is the clinic from St Kilda beach?', a: "Only a few minutes' drive inland, an easy regular trip." },
      { q: 'Can I get there by tram?', a: 'Yes. Trams along Carlisle Street and Dandenong Road bring you close, and Balaclava Station is nearby.' },
      { q: 'Is there parking?', a: 'Yes, free off-street parking off Orrong Road.' },
    ],
    meta: {
      title: 'Dentist St Kilda | East St Kilda Dental',
      description:
        'Your local dentist near St Kilda — gentle, judgement-free dental care just a short trip up Carlisle Street. 40+ years on Dandenong Road. Book online today.',
    },
  },
  {
    slug: 'st-kilda-west',
    name: 'St Kilda West',
    postcode: '3182',
    lead:
      'Between Fitzroy Street and the foreshore, St Kilda West is a straight run inland to us — gentle dentistry, minus the beachside parking hunt.',
    localHeading: 'A straight run inland from the foreshore',
    localBody:
      "St Kilda West is the quiet pocket between Beaconsfield Parade, Albert Park and the top of Fitzroy Street. There isn't a dentist on every corner here, so plenty of locals come to us on Dandenong Road — close enough to be genuinely local, far enough inland that you're not circling the esplanade looking for a space.",
    pills: ['Fitzroy Street', 'Beaconsfield Parade', 'Albert Park Lake'],
    gettingHere: {
      car: 'Along Fitzroy Street to St Kilda Junction, then east on Dandenong Road to our door on the corner of Orrong Road.',
      transport:
        'Trams along Fitzroy Street run to St Kilda Junction, where trams 5 and 64 continue along Dandenong Road to our corner.',
      parking: "Free off-street parking off Orrong Road — no hunting for a beachside spot.",
    },
    faqs: [
      { q: 'How long does it take from St Kilda West?', a: "A few minutes' drive inland via Fitzroy Street and St Kilda Junction." },
      { q: 'Is it easier to drive or take a tram?', a: 'Either works. Trams run from Fitzroy Street to St Kilda Junction and along Dandenong Road, and we have off-street parking if you drive.' },
      { q: 'Do you see families from St Kilda West?', a: 'Yes, we care for adults and children right across the St Kilda area.' },
    ],
    meta: {
      title: 'Dentist St Kilda West | East St Kilda Dental',
      description:
        'A gentle local dentist for St Kilda West — a straight run inland from Fitzroy Street, with off-street parking on arrival. Book your visit online today.',
    },
  },
  {
    slug: 'balaclava',
    name: 'Balaclava',
    postcode: '3183',
    lead:
      "Balaclava is right next door. For many locals we're close enough to walk — gentle, comprehensive care just south on Dandenong Road.",
    localHeading: 'One of our closest neighbourhoods',
    localBody:
      "Balaclava centres on the Carlisle Street shops and cafes and the busy little station. We're a short hop south, which makes us a genuinely local dentist for Balaclava residents — easy to reach on foot, by tram or by car.",
    pills: ['Carlisle Street', 'Balaclava Station', 'Hotham Street'],
    gettingHere: {
      car: "A few minutes south down Hotham Street or Orrong Road to Dandenong Road, and we're on the corner of Orrong Road.",
      transport: 'Balaclava Station on the Sandringham line is minutes away, and trams 3, 16 and 78 serve the Carlisle Street area.',
      parking: "Free off-street parking off Orrong Road if you'd rather drive.",
    },
    faqs: [
      { q: 'Is the clinic walkable from Balaclava?', a: "For many Balaclava residents, yes — we're one of the closest practices." },
      { q: "What's the nearest station?", a: 'Balaclava Station on the Sandringham line is just up the road.' },
      { q: 'Where do I park?', a: 'Free off-street parking off Orrong Road.' },
    ],
    meta: {
      title: 'Dentist Balaclava | East St Kilda Dental',
      description:
        'Your neighbourhood dentist in Balaclava — gentle, comprehensive care just south on Dandenong Road. 40+ years on Dandenong Road. Book online today.',
    },
  },
  {
    slug: 'elwood',
    name: 'Elwood',
    postcode: '3184',
    lead:
      'Elwood has no train of its own, so locals drive or bus the short distance to us — gentle, comprehensive care near the bay.',
    localHeading: 'A short trip from the Elwood village and beach',
    localBody:
      "Elwood life sits around Ormond Road, the beach and the Glen Huntly Road strip. With no train station of its own, most Elwood locals drive or bus the short distance to us, and we're an easy, familiar choice for a regular family dentist.",
    pills: ['Ormond Road', 'Elwood Beach', 'Glen Huntly Road'],
    gettingHere: {
      car: 'A short drive via Glen Huntly Road or through St Kilda to Dandenong Road, then to the corner of Orrong Road.',
      transport: 'Buses connect Elwood to the St Kilda East area, or take a tram via St Kilda and along Carlisle Street.',
      parking: 'Free off-street parking off Orrong Road — no beachside parking hunt.',
    },
    faqs: [
      { q: 'How do I get there without a train?', a: 'Most Elwood locals drive the short distance, or take a connecting bus or tram.' },
      { q: 'How long does it take?', a: 'Just a short drive from the Elwood village.' },
      { q: 'Where do I park?', a: 'Free off-street parking off Orrong Road.' },
    ],
    meta: {
      title: 'Dentist Elwood | East St Kilda Dental',
      description:
        'A trusted local dentist for Elwood — gentle, comprehensive care near the bay. Locals drive or bus the short distance to us. Book online today.',
    },
  },
  {
    slug: 'elsternwick',
    name: 'Elsternwick',
    postcode: '3185',
    lead:
      'A short trip north from the Glen Huntly Road shops — comprehensive, unhurried care for Elsternwick families.',
    localHeading: 'Just north of the Glen Huntly Road village',
    localBody:
      "Elsternwick has its own lovely village feel — the Glen Huntly Road shops, the Classic Cinemas and the station. We're a short drive north, an easy regular trip for Elsternwick families looking for a calm, thorough dentist.",
    pills: ['Glen Huntly Road', 'Elsternwick Station', 'Classic Cinemas'],
    gettingHere: {
      car: 'A short drive north via Hotham Street or Orrong Road to Dandenong Road, then to the corner of Orrong Road.',
      transport: 'Elsternwick Station on the Sandringham line connects easily, with buses along Glen Huntly Road.',
      parking: 'Free off-street parking off Orrong Road.',
    },
    faqs: [
      { q: 'How far is it from Elsternwick?', a: 'A short drive north, easy to fit around work or school.' },
      { q: 'Can I come by train?', a: 'Yes. Elsternwick Station is on the Sandringham line, a short trip away.' },
      { q: 'Is parking available?', a: 'Yes, free off-street parking off Orrong Road.' },
    ],
    meta: {
      title: 'Dentist Elsternwick | East St Kilda Dental',
      description:
        'Gentle family dentistry for Elsternwick — a short trip north from the Glen Huntly Road shops. Comprehensive, unhurried care. Book online today.',
    },
  },
  {
    slug: 'ripponlea',
    name: 'Ripponlea',
    postcode: '3185',
    lead:
      'Ripponlea is one of our closest neighbours — a few minutes up Hotham Street for gentle, comprehensive family dentistry.',
    localHeading: 'Minutes from the station and the estate',
    localBody:
      "Ripponlea is the quiet pocket between Elsternwick and Balaclava, known for Rippon Lea Estate and its small station on the Sandringham line. We're a few minutes north on Dandenong Road, which makes us a genuinely local dentist for Ripponlea families rather than a trip across town.",
    pills: ['Rippon Lea Estate', 'Ripponlea Station', 'Glen Eira Road'],
    gettingHere: {
      car: 'North up Hotham Street or Orrong Road to Dandenong Road, then to our door on the corner of Orrong Road.',
      transport: 'Ripponlea Station is on the Sandringham line, one stop from Balaclava, with a short connection across to Dandenong Road.',
      parking: 'Free off-street parking off Orrong Road.',
    },
    faqs: [
      { q: 'How close is the clinic to Ripponlea?', a: "Only a few minutes — it's one of the closest suburbs to us." },
      { q: 'Can I come by train?', a: 'Yes. Ripponlea is on the Sandringham line, one stop from Balaclava.' },
      { q: 'Do you see children?', a: 'Yes, we look after the whole family, from first visits through to adult care.' },
    ],
    meta: {
      title: 'Dentist Ripponlea | East St Kilda Dental',
      description:
        'Your local dentist for Ripponlea — a few minutes up Hotham Street from the station and Rippon Lea Estate. Gentle care for the whole family. Book online.',
    },
  },
  {
    slug: 'caulfield',
    name: 'Caulfield',
    postcode: '3162',
    lead:
      'A straight run west along Dandenong Road brings Caulfield families to us — gentle, no-judgement care that fits into the week.',
    localHeading: 'An easy trip west along Dandenong Road',
    localBody:
      "Caulfield is known for the Racecourse, the Monash Caulfield campus and the Glen Eira Road shops. We're a short drive west along Dandenong Road, a simple and familiar route. We also care for many families from Caulfield North and Caulfield South.",
    pills: ['Caulfield Racecourse', 'Monash Caulfield', 'Glen Eira Road'],
    gettingHere: {
      car: 'A few minutes west along Dandenong Road from Caulfield brings you straight to our door on the corner of Orrong Road.',
      transport:
        'Caulfield Station (Frankston, Cranbourne and Pakenham lines) is a short ride away, and trams run along the Dandenong Road corridor.',
      parking: 'Free off-street parking off Orrong Road.',
    },
    faqs: [
      { q: 'How long does it take from Caulfield?', a: "Only a few minutes' drive west along Dandenong Road." },
      { q: 'Do you see patients from Caulfield North and South?', a: 'Yes, we care for families right across the Caulfield area.' },
      { q: 'Is there parking or train access?', a: 'Free off-street parking off Orrong Road, and Caulfield Station is close by.' },
    ],
    meta: {
      title: 'Dentist Caulfield | East St Kilda Dental',
      description:
        'A calm, comprehensive dentist for Caulfield — a straight run west along Dandenong Road. Gentle, no-judgement care for the whole family. Book online.',
    },
  },
  {
    slug: 'caulfield-north',
    name: 'Caulfield North',
    postcode: '3161',
    lead:
      'Caulfield North sits right on our doorstep along Dandenong Road — calm, comprehensive care that is easy to fit into the week.',
    localHeading: 'Just along Dandenong Road from Caulfield Park',
    localBody:
      "Caulfield North runs from Kooyong Road across to Caulfield Park and the Racecourse, with Dandenong Road forming its northern edge. That road runs straight to our door, so for many Caulfield North families we're one of the closest practices — no cross-town trip and no unfamiliar route.",
    pills: ['Caulfield Park', 'Kooyong Road', 'Glen Eira Road'],
    gettingHere: {
      car: 'A few minutes west along Dandenong Road, or north up Kooyong Road, brings you to the corner of Orrong Road.',
      transport: 'Trams 5 and 64 run the length of Dandenong Road, and Caulfield Station is a short ride away.',
      parking: 'Free off-street parking off Orrong Road.',
    },
    faqs: [
      { q: 'How close is the clinic to Caulfield North?', a: "Very close — Dandenong Road runs along the top of the suburb straight to our corner." },
      { q: 'Can I walk or cycle?', a: 'From the northern end of Caulfield North, many patients do.' },
      { q: 'Where do I park?', a: 'Free off-street parking off Orrong Road.' },
    ],
    meta: {
      title: 'Dentist Caulfield North | East St Kilda Dental',
      description:
        'Your local dentist for Caulfield North — minutes along Dandenong Road from Caulfield Park. Gentle, unhurried care for the whole family. Book online.',
    },
  },
  {
    slug: 'windsor',
    name: 'Windsor',
    postcode: '3181',
    lead:
      'Windsor is barely up the road — a few minutes from the Chapel Street end for gentle, no-judgement dentistry.',
    localHeading: 'A few minutes from the Chapel Street end',
    localBody:
      "Windsor sits at the southern end of Chapel Street, around the station and the Union Street cafes. Dandenong Road forms its southern boundary and runs straight to our corner, so we're a genuinely local dentist for Windsor — close enough that plenty of patients walk or cycle.",
    pills: ['Chapel Street', 'Windsor Station', 'Union Street'],
    gettingHere: {
      car: 'South down Chapel Street or Punt Road to Dandenong Road, then a short run east to the corner of Orrong Road.',
      transport: 'Windsor Station is on the Sandringham line, and trams run down Chapel Street to meet the Dandenong Road routes.',
      parking: 'Free off-street parking off Orrong Road.',
    },
    faqs: [
      { q: 'Can I walk from Windsor?', a: 'From the southern end of Windsor, many patients walk or cycle.' },
      { q: "What's the nearest station?", a: 'Windsor Station on the Sandringham line, with Balaclava one stop further south.' },
      { q: 'Do you take my health fund?', a: 'We accept all major Australian health funds and claim on the spot.' },
    ],
    meta: {
      title: 'Dentist Windsor | East St Kilda Dental',
      description:
        'A gentle local dentist for Windsor — minutes from the Chapel Street end, straight along Dandenong Road. All major health funds accepted. Book online.',
    },
  },
  {
    slug: 'prahran',
    name: 'Prahran',
    postcode: '3181',
    lead:
      'A short run south from the Market and Chapel Street brings Prahran locals to a calm, thorough dentist on Dandenong Road.',
    localHeading: 'South from the Market and Chapel Street',
    localBody:
      "Prahran life runs along Chapel Street, Commercial Road and around the Market. We're a short trip south, where Chapel Street meets Dandenong Road — far enough from the strip to park easily, close enough to be your regular dentist rather than an occasional trek.",
    pills: ['Prahran Market', 'Chapel Street', 'Greville Street'],
    gettingHere: {
      car: 'Straight down Chapel Street or Punt Road to Dandenong Road, then east to the corner of Orrong Road.',
      transport: 'Trams run the length of Chapel Street to Dandenong Road, and Prahran Station is on the Sandringham line.',
      parking: 'Free off-street parking off Orrong Road, rather than hunting for a space near the Market.',
    },
    faqs: [
      { q: 'How long does it take from Prahran?', a: "A few minutes' drive south down Chapel Street or Punt Road." },
      { q: 'Can I get there by tram?', a: 'Yes. Chapel Street trams run down to Dandenong Road, where the Dandenong Road routes continue to our corner.' },
      { q: 'Do you offer evening or weekend appointments?', a: 'We have appointments across the week, including Saturdays. Call us and we will find a time that fits.' },
    ],
    meta: {
      title: 'Dentist Prahran | East St Kilda Dental',
      description:
        'A calm, thorough dentist for Prahran — a short run south from the Market and Chapel Street, with off-street parking on arrival. Book your visit online.',
    },
  },
  {
    slug: 'armadale',
    name: 'Armadale',
    postcode: '3143',
    lead:
      'Armadale is our nearest neighbour to the north — for many locals, the station is a 10 to 15 minute walk from our door.',
    localHeading: 'Walking distance for much of Armadale',
    localBody:
      "Armadale centres on the High Street shops and cafes, with Orrong Road running south from it straight to our corner. Armadale Station is a 10 to 15 minute walk away, which makes us one of the easiest practices in the area to reach on foot — and a simple trip by car.",
    pills: ['High Street', 'Armadale Station', 'Orrong Road'],
    gettingHere: {
      car: "Straight south down Orrong Road to Dandenong Road — we're right on the corner.",
      transport: 'Armadale Station is a 10 to 15 minute walk, and trams run along both High Street and Dandenong Road.',
      parking: 'Free off-street parking off Orrong Road.',
    },
    faqs: [
      { q: 'Can I walk from Armadale Station?', a: 'Yes, it is roughly a 10 to 15 minute walk.' },
      { q: "What's the simplest drive?", a: 'Straight down Orrong Road until it meets Dandenong Road. We are on the corner.' },
      { q: 'Is the clinic wheelchair accessible?', a: 'Yes, the practice is wheelchair accessible.' },
    ],
    meta: {
      title: 'Dentist Armadale | East St Kilda Dental',
      description:
        'Your local dentist for Armadale — straight down Orrong Road, and a 10 to 15 minute walk from Armadale Station. Gentle, unhurried care. Book online.',
    },
  },
  {
    slug: 'glen-huntly',
    name: 'Glen Huntly',
    postcode: '3163',
    lead:
      'A familiar run along Glen Huntly Road and up to Dandenong Road brings Glen Huntly families to gentle, comprehensive care.',
    localHeading: 'A familiar run along Glen Huntly Road',
    localBody:
      "Glen Huntly is built around the Glen Huntly Road shops and its station on the Frankston line. We're a straightforward trip north-west, and we see plenty of Glen Huntly families who would rather have one practice look after everyone than split visits between several.",
    pills: ['Glen Huntly Road', 'Glenhuntly Station', 'Neerim Road'],
    gettingHere: {
      car: 'North to Dandenong Road, then a straight run west to our door on the corner of Orrong Road.',
      transport: 'Glenhuntly Station is on the Frankston line, and trams along Glen Huntly Road connect through to the Dandenong Road routes.',
      parking: 'Free off-street parking off Orrong Road.',
    },
    faqs: [
      { q: 'How long is the trip from Glen Huntly?', a: 'A short drive north-west, mostly along Dandenong Road.' },
      { q: 'Do you see whole families in one visit?', a: 'Wherever we can, yes. Tell reception who is coming and we will try to book you together.' },
      { q: 'Is there parking?', a: 'Yes, free off-street parking off Orrong Road.' },
    ],
    meta: {
      title: 'Dentist Glen Huntly | East St Kilda Dental',
      description:
        'Comprehensive family dentistry for Glen Huntly — a straightforward run north-west along Dandenong Road. Gentle, unhurried care. Book online today.',
    },
  },
  {
    slug: 'carnegie',
    name: 'Carnegie',
    postcode: '3163',
    lead:
      'Carnegie sits on the same road we do — a straight, easy run west along Dandenong Road.',
    localHeading: 'The same road, a straight run west',
    localBody:
      "Carnegie centres on Koornang Road and its station, with Dandenong Road running along the northern edge of the suburb. That's the same road we're on, so the trip is about as simple as it gets: no back streets and no navigating, just west until Orrong Road.",
    pills: ['Koornang Road', 'Carnegie Station', 'Dandenong Road'],
    gettingHere: {
      car: 'Straight west along Dandenong Road until you reach the corner of Orrong Road.',
      transport: 'Carnegie Station connects through Caulfield, and trams run along the Dandenong Road corridor to our corner.',
      parking: 'Free off-street parking off Orrong Road.',
    },
    faqs: [
      { q: 'Is it a complicated drive?', a: 'Not at all — Dandenong Road runs from Carnegie straight to our corner at Orrong Road.' },
      { q: 'Do you take new patients from further out?', a: 'Yes. We welcome new patients from right across the inner south-east.' },
      { q: 'What happens at a first visit?', a: 'A relaxed chat about your history and concerns, a gentle comprehensive check, then a clear written care plan.' },
    ],
    meta: {
      title: 'Dentist Carnegie | East St Kilda Dental',
      description:
        'A gentle, comprehensive dentist for Carnegie — a straight run west along Dandenong Road with off-street parking on arrival. Book your visit online.',
    },
  },
  {
    slug: 'gardenvale',
    name: 'Gardenvale',
    postcode: '3185',
    lead:
      'A short run up Nepean Highway and Hotham Street brings Gardenvale locals to a calm, unhurried dentist.',
    localHeading: 'A short run north from the highway',
    localBody:
      "Gardenvale is a small pocket on the Elsternwick and Brighton border, with its own station on the Sandringham line and the Nepean Highway running through it. We're a short trip north, and we look after families right across this stretch, from Gardenvale through Elsternwick and Ripponlea.",
    pills: ['Gardenvale Station', 'Nepean Highway', 'Martin Street'],
    gettingHere: {
      car: 'North up Nepean Highway or Hotham Street to Dandenong Road, then to the corner of Orrong Road.',
      transport: 'Gardenvale Station is on the Sandringham line, a few stops from Balaclava.',
      parking: 'Free off-street parking off Orrong Road.',
    },
    faqs: [
      { q: 'How far is it from Gardenvale?', a: 'A short drive north, or a few stops on the Sandringham line to Balaclava.' },
      { q: 'Do you see children?', a: 'Yes, we care for the whole family, and children are always welcome.' },
      { q: 'Will I get a quote before treatment?', a: 'Always. You get a clear written estimate before any treatment begins, and time to think it over.' },
    ],
    meta: {
      title: 'Dentist Gardenvale | East St Kilda Dental',
      description:
        'A calm, unhurried dentist for Gardenvale — a short run north up Nepean Highway, or a few stops on the Sandringham line. Book your visit online today.',
    },
  },
  {
    slug: 'albert-park',
    name: 'Albert Park',
    postcode: '3206',
    lead:
      'Around the lake and along Bridport Street, Albert Park locals find us an easy run inland on Dandenong Road.',
    localHeading: 'An easy run inland from the lake',
    localBody:
      "Albert Park sits between the lake and the bay, around the Bridport Street shops and the old terraces. We're a straightforward trip east through St Kilda Junction — a little further than the local strip, but an easy one, with somewhere to park when you arrive.",
    pills: ['Bridport Street', 'Albert Park Lake', 'Beaconsfield Parade'],
    gettingHere: {
      car: 'Around the lake to Queens Road or St Kilda Junction, then east along Dandenong Road to the corner of Orrong Road.',
      transport: 'Trams through Albert Park connect to St Kilda Junction, where the Dandenong Road routes continue east to our corner.',
      parking: 'Free off-street parking off Orrong Road.',
    },
    faqs: [
      { q: 'Is it worth the trip from Albert Park?', a: 'That is your call, but many patients travel to us because they want one practice that knows them. The drive is a straightforward run east.' },
      { q: 'How do I get there without a car?', a: 'Trams through Albert Park connect to St Kilda Junction, where the Dandenong Road routes continue to our corner.' },
      { q: 'Is there parking on site?', a: 'Yes, free off-street parking off Orrong Road.' },
    ],
    meta: {
      title: 'Dentist Albert Park | East St Kilda Dental',
      description:
        'Gentle, comprehensive dentistry for Albert Park — an easy run inland via St Kilda Junction, with off-street parking on arrival. Book online today.',
    },
  },
  {
    slug: 'middle-park',
    name: 'Middle Park',
    postcode: '3206',
    lead:
      'Middle Park is a straight run inland — gentle, comprehensive dentistry a few minutes from the Armstrong Street shops.',
    localHeading: 'A few minutes inland from the beach',
    localBody:
      "Middle Park sits in the quiet stretch between the lake and the bay, around the Armstrong Street shops and the light rail. We're a short trip east through St Kilda, and plenty of Middle Park families make us their regular practice for exactly that reason: close, calm, and easy to park at.",
    pills: ['Armstrong Street', 'Middle Park Beach', 'Albert Park Lake'],
    gettingHere: {
      car: 'East along Canterbury Road or Fitzroy Street to St Kilda Junction, then along Dandenong Road to the corner of Orrong Road.',
      transport: 'The 96 light rail runs through Middle Park to St Kilda, connecting to the Dandenong Road trams.',
      parking: 'Free off-street parking off Orrong Road.',
    },
    faqs: [
      { q: 'How long does it take from Middle Park?', a: 'A short drive east through St Kilda, traffic depending.' },
      { q: 'Can I come by tram?', a: 'Yes. The 96 light rail runs through Middle Park to St Kilda, connecting to the Dandenong Road trams.' },
      { q: 'Do you look after nervous patients?', a: 'Yes. Tell us you are anxious and we slow right down, explain everything, and offer happy gas and other comfort options.' },
    ],
    meta: {
      title: 'Dentist Middle Park | East St Kilda Dental',
      description:
        'A calm, gentle dentist for Middle Park — a short run inland through St Kilda, with off-street parking on arrival. Nervous patients welcome. Book online.',
    },
  },
  {
    slug: 'port-melbourne',
    name: 'Port Melbourne',
    postcode: '3207',
    lead:
      'A straightforward run around the bay brings Port Melbourne patients to a calm, thorough dentist on Dandenong Road.',
    localHeading: 'Around the bay, then straight inland',
    localBody:
      "Port Melbourne runs from Bay Street down to Station Pier and the beach. It's a little further out than our closest suburbs, but the route is simple — around the foreshore or along the highway, then inland at St Kilda Junction. Patients who make the trip tend to do so because they want one practice that knows them.",
    pills: ['Bay Street', 'Station Pier', 'Beacon Cove'],
    gettingHere: {
      car: 'Along Beaconsfield Parade or the highway to St Kilda Junction, then east on Dandenong Road to the corner of Orrong Road.',
      transport: 'The 109 light rail runs along Bay Street and connects to the St Kilda Road tram routes that continue along Dandenong Road.',
      parking: 'Free off-street parking off Orrong Road.',
    },
    faqs: [
      { q: 'How long is the drive from Port Melbourne?', a: 'Around 15 to 20 minutes, traffic depending, mostly along the foreshore and Dandenong Road.' },
      { q: 'Is it worth travelling that far for a dentist?', a: 'Many of our patients think so, usually because they want the same familiar team each visit. It is entirely your decision.' },
      { q: 'Can I book a longer first appointment?', a: 'Yes. Our Comprehensive Care Visit runs 60 to 75 minutes so nothing is rushed.' },
    ],
    meta: {
      title: 'Dentist Port Melbourne | East St Kilda Dental',
      description:
        'A thorough, gentle dentist for Port Melbourne — a simple run around the bay and inland at St Kilda Junction. Off-street parking on arrival. Book online.',
    },
  },
  {
    slug: 'south-yarra',
    name: 'South Yarra',
    postcode: '3141',
    lead:
      'A short run south down Chapel Street or Punt Road brings South Yarra locals to gentle, unhurried dentistry.',
    localHeading: 'Straight south from Toorak Road',
    localBody:
      "South Yarra runs from the Botanic Gardens down Chapel Street to Toorak Road, and both Chapel Street and Punt Road lead straight to Dandenong Road. That makes us an easy, familiar trip rather than a cross-town one — with parking on site when you arrive.",
    pills: ['Toorak Road', 'Chapel Street', 'South Yarra Station'],
    gettingHere: {
      car: 'South down Chapel Street or Punt Road to Dandenong Road, then east to the corner of Orrong Road.',
      transport: 'South Yarra Station is a short ride to Armadale or Balaclava, and trams run down Chapel Street to Dandenong Road.',
      parking: 'Free off-street parking off Orrong Road.',
    },
    faqs: [
      { q: 'How long does it take from South Yarra?', a: 'Roughly 10 minutes by car, traffic depending.' },
      { q: 'Can I come by train?', a: 'Yes. South Yarra Station is a short ride to Armadale, which is a 10 to 15 minute walk from us.' },
      { q: 'Do you offer payment plans?', a: 'Yes, we offer payment plan options to spread the cost of larger treatment.' },
    ],
    meta: {
      title: 'Dentist South Yarra | East St Kilda Dental',
      description:
        'Gentle, unhurried dentistry for South Yarra — a short run south down Chapel Street or Punt Road. Payment plans available. Book your visit online.',
    },
  },
  {
    slug: 'toorak',
    name: 'Toorak',
    postcode: '3142',
    lead:
      'Orrong Road runs from Toorak straight to our corner — a simple trip for a calm, comprehensive dentist.',
    localHeading: 'Straight down Orrong Road',
    localBody:
      "Toorak centres on the Toorak Road village, with Orrong Road running the length of the suburb from north to south. Follow it down and it meets Dandenong Road at our corner, which makes the trip about as simple as a drive across Melbourne's inner south-east gets.",
    pills: ['Toorak Village', 'Toorak Road', 'Orrong Road'],
    gettingHere: {
      car: "Straight down Orrong Road to Dandenong Road — we're on the corner.",
      transport: 'Toorak Station is a short ride away, and trams run along both Toorak Road and Dandenong Road.',
      parking: 'Free off-street parking off Orrong Road.',
    },
    faqs: [
      { q: 'What is the simplest route from Toorak?', a: 'Orrong Road, all the way south until it meets Dandenong Road. We are on the corner.' },
      { q: 'How long does it take?', a: 'Under 10 minutes for most of Toorak, traffic depending.' },
      { q: 'Do you offer cosmetic treatment?', a: 'Yes, including veneers, whitening, Invisalign and smile design — always discussed, never pushed.' },
    ],
    meta: {
      title: 'Dentist Toorak | East St Kilda Dental',
      description:
        'A calm, comprehensive dentist for Toorak — straight down Orrong Road to our corner. General, family and cosmetic dentistry. Book your visit online.',
    },
  },
  {
    slug: 'malvern',
    name: 'Malvern',
    postcode: '3144',
    lead:
      'A straight run down Orrong Road, or along Dandenong Road, brings Malvern families to unhurried, comprehensive care.',
    localHeading: 'A straight run down Orrong Road',
    localBody:
      "Malvern sits around the Glenferrie Road shops and Malvern Central, with Wattletree and Dandenong Roads leading south-west toward us. It's an easy trip, and we look after a number of Malvern families who have stayed with us through moves, children and grandchildren.",
    pills: ['Glenferrie Road', 'Malvern Station', 'Wattletree Road'],
    gettingHere: {
      car: 'Down Orrong Road, or south-west along Dandenong Road, to our door on the corner of Orrong Road.',
      transport: 'Malvern Station is a short ride away, and tram 5 runs along Wattletree Road and Dandenong Road.',
      parking: 'Free off-street parking off Orrong Road.',
    },
    faqs: [
      { q: 'How long is the trip from Malvern?', a: 'Around 10 to 15 minutes by car, traffic depending.' },
      { q: 'Can I get there by tram?', a: 'Yes. Tram 5 runs from Malvern along Wattletree Road and Dandenong Road to our corner.' },
      { q: 'Do you see three generations of the same family?', a: 'Often. A number of our families have been with us across three generations.' },
    ],
    meta: {
      title: 'Dentist Malvern | East St Kilda Dental',
      description:
        'Unhurried, comprehensive dentistry for Malvern — a straight run down Orrong Road, or tram 5 along Wattletree Road. Book your visit online today.',
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
