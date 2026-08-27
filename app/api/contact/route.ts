import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { business } from '@/lib/business'
import {
  INTENTS,
  PATIENT_TYPES,
  TREATMENTS,
  labelFor,
  validateEnquiry,
} from '@/lib/enquiry'

/** Resend needs the Node runtime, not the edge runtime. */
export const runtime = 'nodejs'
/** Never cache a form submission. */
export const dynamic = 'force-dynamic'

/**
 * Where enquiries land, and who they come from.
 *
 * CONTACT_FROM_EMAIL must be on a domain verified in the Resend dashboard.
 * Until that domain is verified, Resend's shared onboarding@resend.dev sender
 * works but will only deliver to the Resend account owner's own address.
 */
const TO = process.env.CONTACT_TO_EMAIL || business.email
const FROM = process.env.CONTACT_FROM_EMAIL || `${business.name} <onboarding@resend.dev>`

/**
 * A crude per-IP throttle.
 *
 * In-memory, so it resets on deploy and is per serverless instance. That is
 * plenty to blunt a naive flood on a site this size; anything more determined
 * needs a shared store or a captcha.
 */
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 4
const hits = new Map<string, number[]>()

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter(t => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > MAX_PER_WINDOW
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!
  )

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set')
    return NextResponse.json(
      { error: 'The contact form is not configured. Please call the clinic.' },
      { status: 500 }
    )
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many messages just now. Please try again in a minute.' },
      { status: 429 }
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  // Honeypot: a bot filled a field no human can see. Accept and discard, so the
  // bot has nothing to learn from the response.
  if (typeof (body as Record<string, unknown>)?.company === 'string' && (body as Record<string, string>).company.trim()) {
    return NextResponse.json({ ok: true })
  }

  const result = validateEnquiry(body)
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 })
  }

  const d = result.data
  const name = `${d.firstName} ${d.lastName}`
  const patientLabel = labelFor(PATIENT_TYPES, d.patienttype)
  const intentLabel = labelFor(INTENTS, d.intent)
  const treatmentLabels = d.treatments.map(v => labelFor(TREATMENTS, v))

  const rows: [string, string][] = [
    ['Name', name],
    ['Email', d.email],
    ['Phone', d.phone || '—'],
    ['Patient', patientLabel],
    ['Wants to', intentLabel],
    ['Interested in', treatmentLabels.length ? treatmentLabels.join(', ') : '—'],
    ['Message', d.message || '—'],
    ['Sent from', d.source || '—'],
  ]

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#1c1a17;line-height:1.55">
      <h2 style="margin:0 0 4px;font-size:19px">${escapeHtml(intentLabel)} &mdash; ${escapeHtml(name)}</h2>
      <p style="margin:0 0 18px;color:#6b645c;font-size:14px">
        ${escapeHtml(patientLabel)} &middot; via ${escapeHtml(business.name)} website
      </p>
      <table style="border-collapse:collapse;width:100%;max-width:620px;font-size:14.5px">
        ${rows
          .map(
            ([k, v]) => `
        <tr>
          <td style="padding:9px 14px 9px 0;vertical-align:top;color:#6b645c;white-space:nowrap;border-bottom:1px solid #ece7df">${escapeHtml(k)}</td>
          <td style="padding:9px 0;vertical-align:top;border-bottom:1px solid #ece7df;white-space:pre-wrap">${escapeHtml(v)}</td>
        </tr>`
          )
          .join('')}
      </table>
      <p style="margin:20px 0 0;color:#6b645c;font-size:13px">
        Reply to this email to answer ${escapeHtml(d.firstName)} directly.
      </p>
    </div>`

  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n')

  try {
    const { data, error } = await new Resend(apiKey).emails.send({
      from: FROM,
      to: [TO],
      replyTo: d.email,
      subject: `${intentLabel} — ${name}${treatmentLabels.length ? ` (${treatmentLabels[0]})` : ''}`,
      html,
      text,
    })

    if (error) {
      console.error('[contact] Resend rejected the message:', error)
      return NextResponse.json(
        { error: "We couldn't send your message. Please call the clinic or try again shortly." },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true, id: data?.id })
  } catch (err) {
    console.error('[contact] Unexpected failure sending the message:', err)
    return NextResponse.json(
      { error: "We couldn't send your message. Please call the clinic or try again shortly." },
      { status: 500 }
    )
  }
}
