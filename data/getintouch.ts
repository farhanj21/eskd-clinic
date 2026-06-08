export type GetInTouchVariant =
  | 'default'
  | 'emergency'
  | 'cosmetic'
  | 'gentle'
  | 'offer'
  | 'implants'
  | 'invisalign'
  | 'whitening'
  | 'wisdom'
  | 'firstvisit'
  | 'fees'
  | 'super'

export interface GetInTouchCopy {
  cta: string
  sub: string
}

export const getInTouchCopy: Record<GetInTouchVariant, GetInTouchCopy> = {
  default: {
    cta: 'Ready to feel at home at your dentist?',
    sub: 'Book a consultation and we\'ll be in touch within one business day.',
  },
  emergency: {
    cta: 'Dental emergency? We\'re here for you.',
    sub: 'Call us now for same-day emergency care. Pain relief, fast.',
  },
  cosmetic: {
    cta: 'Ready to love your smile?',
    sub: 'Book a free cosmetic consultation — no obligation, just a conversation.',
  },
  gentle: {
    cta: 'Nervous about the dentist? You\'re in safe hands.',
    sub: 'We move at your pace. Let\'s start with a relaxed, no-pressure chat.',
  },
  offer: {
    cta: 'Claim your New Patient Offer',
    sub: 'Comprehensive exam, digital x-rays and scale & clean for $297 (valued at $499).',
  },
  implants: {
    cta: 'Is a dental implant right for you?',
    sub: 'Book a free implant assessment — we\'ll explain your options clearly.',
  },
  invisalign: {
    cta: 'Start your Invisalign journey today',
    sub: 'Free consultation with our certified Invisalign provider. No commitment required.',
  },
  whitening: {
    cta: 'Brighten your smile safely',
    sub: 'Book a professional whitening consultation — in-chair or take-home options available.',
  },
  wisdom: {
    cta: 'Wisdom teeth causing trouble?',
    sub: 'Book a same-week assessment. Gentle extractions with minimal downtime.',
  },
  firstvisit: {
    cta: 'Ready for your first visit?',
    sub: 'We\'d love to welcome you. Book online or call us directly.',
  },
  fees: {
    cta: 'Let\'s make dentistry accessible for you',
    sub: 'Talk to our team about health fund claims, gap-free options, and payment plans.',
  },
  super: {
    cta: 'Use your super for dental care',
    sub: 'Our team can help you navigate the early release process — book a chat today.',
  },
}
