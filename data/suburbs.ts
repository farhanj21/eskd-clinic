export interface SuburbData {
  slug: string
  name: string
  state: string
  postcode: string
  distance: string
  intro: string
  body: string[]
  services: string[]
  meta: { title: string; description: string }
}

export const suburbs: SuburbData[] = [
  {
    slug: 'st-kilda',
    name: 'St Kilda',
    state: 'VIC',
    postcode: '3182',
    distance: '10 minutes',
    intro:
      'East St Kilda Dental is your closest full-service dental clinic to St Kilda, just a short trip along Dandenong Road. We welcome St Kilda residents for everything from routine check-ups to complete smile transformations.',
    body: [
      'St Kilda residents have been trusting East St Kilda Dental for over 40 years. Our clinic at 364 Dandenong Rd is easily accessible by tram (Route 67) and has on-street parking available on Dandenong Road and surrounding streets.',
      'We offer the full range of dental services — from general and preventive care to cosmetic dentistry, Invisalign, dental implants, and emergency appointments. Same-day emergency care is available for urgent dental situations.',
      'Our new patient offer — a comprehensive exam, digital x-rays and scale & clean for $297 (valued at $499) — is available to all new St Kilda patients.',
    ],
    services: ['General Dentistry', 'Cosmetic Dentistry', 'Invisalign', 'Dental Implants', 'Teeth Whitening', 'Emergency Care'],
    meta: {
      title: 'Dentist St Kilda | East St Kilda Dental',
      description:
        'Your local dentist near St Kilda — comprehensive dental care just 10 minutes from St Kilda. New patient offer $297 (valued at $499). Book online today.',
    },
  },
  {
    slug: 'balaclava',
    name: 'Balaclava',
    state: 'VIC',
    postcode: '3183',
    distance: '5 minutes',
    intro:
      'East St Kilda Dental is your neighbourhood dental clinic for Balaclava, just minutes away on Dandenong Road. We provide comprehensive dental care for families, couples and individuals across the Balaclava community.',
    body: [
      'Balaclava residents are among our closest neighbours and some of our most loyal patients. From our clinic at 364 Dandenong Rd, we\'re just a short walk or drive from Balaclava station and the Chapel Street shopping precinct.',
      'We take the time to understand each patient\'s unique needs, making our practice the choice for families who want a dentist who knows their name and history. Children are always welcome.',
      'Take advantage of our new patient offer — comprehensive exam, x-rays and clean for $297 (valued at $499) — to start your relationship with us on the best foot.',
    ],
    services: ['Family Dentistry', 'Children\'s Dentistry', 'General Care', 'Cosmetic Dentistry', 'Orthodontics'],
    meta: {
      title: 'Dentist Balaclava | East St Kilda Dental',
      description:
        'Local dentist serving Balaclava — just minutes from Balaclava station. Family-friendly dental care. New patient offer $297 (valued at $499). Book online.',
    },
  },
  {
    slug: 'prahran',
    name: 'Prahran',
    state: 'VIC',
    postcode: '3181',
    distance: '8 minutes',
    intro:
      'Prahran locals choose East St Kilda Dental for our gentle approach, experienced team, and convenient location on Dandenong Road — easily reached by tram from Chapel Street or South Yarra.',
    body: [
      'Our clinic is a popular choice for Prahran residents seeking high-quality dental care without the wait times or impersonal feel of a dental chain. We see patients of all ages and cater to nervous patients with a calm, reassuring environment.',
      'Prahran is just a short ride down Dandenong Road. Route 67 tram stops nearby, and there\'s convenient parking on surrounding streets. We\'re open Monday to Saturday with early morning appointments available.',
      'Whether you need a routine clean or are considering Invisalign or teeth whitening, our team will give you honest, personalised advice with no pressure.',
    ],
    services: ['General Dentistry', 'Teeth Whitening', 'Invisalign', 'Veneers', 'Emergency Dentistry'],
    meta: {
      title: 'Dentist Prahran | East St Kilda Dental',
      description:
        'Quality dental care near Prahran — gentle, experienced team on Dandenong Road. Open Mon–Sat. New patient offer $297 (valued at $499). Book online.',
    },
  },
  {
    slug: 'south-yarra',
    name: 'South Yarra',
    state: 'VIC',
    postcode: '3141',
    distance: '10 minutes',
    intro:
      'South Yarra residents trust East St Kilda Dental for our exceptional standard of care, modern facilities, and experienced dental team. We\'re just a short trip along Dandenong Road from the South Yarra shopping and dining precinct.',
    body: [
      'East St Kilda Dental serves the South Yarra community with comprehensive dental services in a comfortable, modern clinic. Our experienced dentists and hygienists have been caring for local families since 1984.',
      'We specialise in cosmetic dentistry and smile design — popular with South Yarra patients who want to look and feel their best. Our Invisalign, veneers, whitening and implants services are all available in one convenient location.',
      'Our new patient check-up offer ($297 valued at $499) includes a comprehensive exam, digital x-rays and a professional clean — everything you need to start your dental journey with us.',
    ],
    services: ['Cosmetic Dentistry', 'Smile Design', 'Invisalign', 'Dental Implants', 'Porcelain Veneers', 'Teeth Whitening'],
    meta: {
      title: 'Dentist South Yarra | East St Kilda Dental',
      description:
        'Premium dental care near South Yarra — smile design, Invisalign, veneers and implants. New patient offer $297 (valued at $499). Book online today.',
    },
  },
  {
    slug: 'caulfield',
    name: 'Caulfield',
    state: 'VIC',
    postcode: '3162',
    distance: '12 minutes',
    intro:
      'East St Kilda Dental is the preferred dental clinic for many Caulfield residents, offering expert dental care in a friendly, unhurried environment with convenient Dandenong Road access.',
    body: [
      'Caulfield patients appreciate our personalised, patient-first philosophy. We believe good dentistry begins with listening, and we take the time to understand your concerns and goals before recommending any treatment.',
      'We see patients across the Caulfield area including Caulfield North, Caulfield South and Caulfield East. The clinic is easily accessible by car or public transport along Dandenong Road.',
      'For Caulfield families wanting to make the switch, our new patient offer — comprehensive exam, x-rays and clean for $297 (valued at $499) — is a great way to experience our standard of care.',
    ],
    services: ['General Dentistry', 'Family Care', 'Preventive Dentistry', 'Restorative Care', 'Orthodontics'],
    meta: {
      title: 'Dentist Caulfield | East St Kilda Dental',
      description:
        'Your local dentist near Caulfield. Patient-first, family-friendly dental care on Dandenong Road. New patient offer $297 (valued at $499). Book online.',
    },
  },
  {
    slug: 'elwood',
    name: 'Elwood',
    state: 'VIC',
    postcode: '3184',
    distance: '10 minutes',
    intro:
      'Elwood residents rely on East St Kilda Dental for consistent, high-quality dental care close to home. We\'re just a short trip along Dandenong Road and welcome both new and returning patients throughout the week.',
    body: [
      'Our Elwood patients love the fact that we\'re locally owned and have served the area for over 40 years. You won\'t be passed between different dentists — we focus on building long-term relationships where your dentist knows you and your history.',
      'We offer comprehensive care for Elwood families — from children\'s first dental visits to complex adult restorations. Emergency appointments are available for urgent situations including broken teeth, toothache, and lost fillings.',
      'Open Monday to Saturday, we make it easy for busy Elwood residents to fit dental care into their schedule.',
    ],
    services: ['General Dentistry', 'Children\'s Dentistry', 'Emergency Care', 'Preventive Care', 'Cosmetic Dentistry'],
    meta: {
      title: 'Dentist Elwood | East St Kilda Dental',
      description:
        'Family dentist near Elwood — locally owned since 1984. Emergency appointments available. New patient offer $297 (valued at $499). Book online.',
    },
  },
  {
    slug: 'windsor',
    name: 'Windsor',
    state: 'VIC',
    postcode: '3181',
    distance: '8 minutes',
    intro:
      'Windsor locals choose East St Kilda Dental for our warm, welcoming approach and the full range of dental services available at our clinic just minutes away on Dandenong Road.',
    body: [
      'Our clinic is a short drive or tram ride from Windsor, servicing patients throughout the Windsor and South Yarra area. We\'re known for our gentle dentists, attentive team, and modern, comfortable facilities.',
      'Windsor patients frequently visit us for cosmetic treatments including teeth whitening, Invisalign and veneers. We offer free consultations for cosmetic procedures so you can explore your options without any commitment.',
      'We also offer flexible appointment times including early mornings and Saturdays to accommodate Windsor\'s busy professionals and young families.',
    ],
    services: ['General Dentistry', 'Cosmetic Dentistry', 'Teeth Whitening', 'Invisalign', 'Veneers', 'Emergency Care'],
    meta: {
      title: 'Dentist Windsor | East St Kilda Dental',
      description:
        'Your local dentist near Windsor — cosmetic and general dental care just minutes from Windsor. New patient offer $297 (valued at $499). Book online.',
    },
  },
  {
    slug: 'glen-huntly',
    name: 'Glen Huntly',
    state: 'VIC',
    postcode: '3163',
    distance: '15 minutes',
    intro:
      'Glen Huntly residents travel to East St Kilda Dental for the quality and consistency of our care, our experienced team, and the comprehensive range of services we offer at our Dandenong Road clinic.',
    body: [
      'While there are closer options, Glen Huntly patients tell us they choose East St Kilda Dental because of the personal relationship they\'ve built with our team. We\'ve been serving the inner-south for over 40 years and have several multi-generational family patients.',
      'We offer the complete spectrum of dental care under one roof — from preventive check-ups and fillings to implants, Invisalign and smile makeovers. You won\'t need referrals to multiple practices for most procedures.',
      'Our new patient offer makes it easy to try us out — comprehensive exam, digital x-rays and professional clean for $297 (valued at $499).',
    ],
    services: ['General Dentistry', 'Comprehensive Care', 'Dental Implants', 'Orthodontics', 'Cosmetic Dentistry'],
    meta: {
      title: 'Dentist Glen Huntly | East St Kilda Dental',
      description:
        'Comprehensive dental care serving Glen Huntly — experienced team, full-service clinic on Dandenong Road. New patient offer $297 (valued at $499). Book online.',
    },
  },
  {
    slug: 'elsternwick',
    name: 'Elsternwick',
    state: 'VIC',
    postcode: '3185',
    distance: '10 minutes',
    intro:
      'East St Kilda Dental is a trusted choice for Elsternwick residents seeking experienced, caring dental professionals with a genuine commitment to patient comfort and long-term oral health.',
    body: [
      'Elsternwick patients have been part of our community for decades. Located along Dandenong Road, we\'re easily accessible from Elsternwick, Ripponlea and surrounding suburbs — by car, tram or a short cycle.',
      'We offer preventive, restorative and cosmetic dental services, and our team includes dentists with special interests in implants, Invisalign and smile design. All major health funds are accepted.',
      'For Elsternwick patients considering a change of dentist, our new patient offer — comprehensive exam, x-rays and clean for $297 (valued at $499) — is an ideal low-risk introduction to our standard of care.',
    ],
    services: ['General Dentistry', 'Dental Implants', 'Smile Design', 'Invisalign', 'Health Fund Accepted'],
    meta: {
      title: 'Dentist Elsternwick | East St Kilda Dental',
      description:
        'Your local dentist near Elsternwick — implants, Invisalign, smile design and general care. All major health funds accepted. New patient offer $297 (valued at $499).',
    },
  },
  {
    slug: 'malvern',
    name: 'Malvern',
    state: 'VIC',
    postcode: '3144',
    distance: '15 minutes',
    intro:
      'East St Kilda Dental welcomes Malvern patients to our full-service dental clinic on Dandenong Road, where exceptional care and a genuine patient-first philosophy have been our hallmarks since 1984.',
    body: [
      'Malvern families and professionals choose East St Kilda Dental for the quality of our clinical work and the warmth of our team. We take unhurried appointments, answer every question, and never recommend treatment you don\'t need.',
      'Our cosmetic dental services — including porcelain veneers, Invisalign and ZOOM! whitening — are popular with Malvern patients looking to enhance their appearance. We use digital smile design technology so you can see the expected result before committing.',
      'We accept all major health funds and offer flexible payment options. Saturday appointments are available for Malvern patients who can\'t make it during the week.',
    ],
    services: ['General Dentistry', 'Cosmetic Dentistry', 'Veneers', 'Invisalign', 'Teeth Whitening', 'Smile Design'],
    meta: {
      title: 'Dentist Malvern | East St Kilda Dental',
      description:
        'Quality dental care near Malvern — veneers, Invisalign, whitening and smile design. Saturday appointments available. New patient offer $297 (valued at $499).',
    },
  },
  {
    slug: 'armadale',
    name: 'Armadale',
    state: 'VIC',
    postcode: '3143',
    distance: '12 minutes',
    intro:
      'Armadale residents seeking high-quality, personalised dental care choose East St Kilda Dental for our experienced team, full-service offering, and convenient Dandenong Road location.',
    body: [
      'East St Kilda Dental is a popular choice for Armadale patients who want boutique-quality dental care without the boutique price tag. We offer a full range of general and cosmetic treatments in a comfortable, modern clinic.',
      'Our dentists have particular expertise in smile design, dental implants and Invisalign — services that Armadale patients frequently enquire about. Consultations for these treatments are available at no cost.',
      'We\'re easily accessible from Armadale by tram along High Street or Dandenong Road, or by car with on-street parking available near the clinic.',
    ],
    services: ['General Dentistry', 'Smile Design', 'Dental Implants', 'Invisalign', 'Cosmetic Dentistry'],
    meta: {
      title: 'Dentist Armadale | East St Kilda Dental',
      description:
        'Experienced dentist near Armadale — implants, Invisalign and smile design in East St Kilda. Free cosmetic consultations. New patient offer $297 (valued at $499).',
    },
  },
  {
    slug: 'port-melbourne',
    name: 'Port Melbourne',
    state: 'VIC',
    postcode: '3207',
    distance: '15 minutes',
    intro:
      'Port Melbourne residents make the short trip to East St Kilda Dental for our reputation as one of the most trusted dental practices in Melbourne\'s inner south, backed by over 40 years of community care.',
    body: [
      'While Port Melbourne has local dentists, patients who have found us frequently comment on the difference in care quality and the genuine personal attention they receive. Our team takes the time to explain everything in plain language and ensure you\'re comfortable with every step.',
      'We offer flexible Monday to Saturday hours and same-day emergency appointments for Port Melbourne patients dealing with dental pain, broken teeth or other urgent issues.',
      'All major health funds are accepted and we offer our new patient comprehensive offer — exam, x-rays and clean for $297 (valued at $499) — to make it easy to get started.',
    ],
    services: ['General Dentistry', 'Emergency Care', 'Preventive Dentistry', 'Restorative Care', 'Cosmetic Dentistry'],
    meta: {
      title: 'Dentist Port Melbourne | East St Kilda Dental',
      description:
        'Trusted dental clinic serving Port Melbourne — emergency appointments available, Monday to Saturday. New patient offer $297 (valued at $499). Book online.',
    },
  },
]

export function getSuburb(slug: string): SuburbData | undefined {
  return suburbs.find(s => s.slug === slug)
}
