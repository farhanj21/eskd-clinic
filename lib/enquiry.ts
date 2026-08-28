/**
 * The shape of a Get in touch enquiry, shared by the form and the API route.
 *
 * The form renders its options from these lists and the route validates against
 * them, so a new treatment or intent is added in exactly one place and the email
 * can never show a label the form doesn't offer.
 */

export const PATIENT_TYPES = [
  { value: 'new', label: 'New patient' },
  { value: 'returning', label: 'Returning patient' },
] as const

export const INTENTS = [
  { value: 'enquire', label: 'Make an enquiry' },
  { value: 'book', label: 'Book a visit' },
] as const

export const TREATMENTS = [
  { value: 'checkup', label: 'Check-up & clean' },
  { value: 'cosmetic', label: 'Cosmetic' },
  { value: 'whitening', label: 'Teeth whitening' },
  { value: 'implants', label: 'Implants' },
  { value: 'crowns', label: 'Crowns & root canal' },
  { value: 'ortho', label: 'Orthodontics' },
  { value: 'kids', label: "Children's dentistry" },
  { value: 'emergency', label: 'Emergency' },
  { value: 'notsure', label: 'Not sure yet' },
] as const

export interface EnquiryPayload {
  patienttype: string
  intent: string
  treatments: string[]
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  /** Which page the enquiry came from, for the clinic's context. */
  source: string
  /** Honeypot. Bots fill it in; humans never see it. */
  company?: string
}

/** Field length caps, so a bot can't post a novel through the form. */
const MAX = {
  name: 80,
  email: 160,
  phone: 40,
  message: 4000,
  source: 300,
} as const

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export type ValidationResult =
  | { ok: true; data: Required<Omit<EnquiryPayload, 'company'>> }
  | { ok: false; error: string }

/**
 * Validate an untrusted request body.
 *
 * Requires a first name plus at least one of email or phone; everything else
 * is optional, so both the full enquiry form and the shorter callback forms
 * post to the same endpoint.
 *
 * Everything reaching the email is either a label looked up from the lists above
 * or a trimmed, length-capped string — nothing is echoed back verbatim from the
 * request without passing through here first.
 */
export function validateEnquiry(body: unknown): ValidationResult {
  if (typeof body !== 'object' || body === null) {
    return { ok: false, error: 'Invalid request body.' }
  }

  const raw = body as Record<string, unknown>
  const str = (v: unknown, cap: number) =>
    typeof v === 'string' ? v.trim().slice(0, cap) : ''

  const firstName = str(raw.firstName, MAX.name)
  const lastName = str(raw.lastName, MAX.name)
  const email = str(raw.email, MAX.email)
  const phone = str(raw.phone, MAX.phone)
  const message = str(raw.message, MAX.message)
  const source = str(raw.source, MAX.source)

  if (!firstName) return { ok: false, error: 'Please enter your first name.' }

  /*
   * Only the first name and one way to reach them are truly required.
   *
   * The Get in touch form asks for a last name and an email and marks both
   * required in the markup, so it is unaffected. The callback forms deliberately
   * ask for a name and a phone number only — demanding an email on a "call me
   * back" form is the fastest way to lose the enquiry — so the rule here is one
   * contact method, not one specific field.
   */
  if (email && !EMAIL_RE.test(email)) {
    return { ok: false, error: 'Please enter a valid email address.' }
  }
  if (!email && !phone) {
    return { ok: false, error: 'Please leave an email address or a phone number so we can reply.' }
  }

  const oneOf = (v: unknown, list: readonly { value: string }[], fallback: string) =>
    typeof v === 'string' && list.some(o => o.value === v) ? v : fallback

  const treatments = Array.isArray(raw.treatments)
    ? TREATMENTS.filter(t => (raw.treatments as unknown[]).includes(t.value)).map(t => t.value)
    : []

  return {
    ok: true,
    data: {
      patienttype: oneOf(raw.patienttype, PATIENT_TYPES, 'new'),
      intent: oneOf(raw.intent, INTENTS, 'enquire'),
      treatments,
      firstName,
      lastName,
      email,
      phone,
      message,
      source,
    },
  }
}

export function labelFor(list: readonly { value: string; label: string }[], value: string) {
  return list.find(o => o.value === value)?.label ?? value
}
