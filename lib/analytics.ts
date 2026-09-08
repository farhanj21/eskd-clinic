/**
 * The one way anything on this site talks to analytics.
 *
 * Everything goes through Google Tag Manager's dataLayer. Nothing here knows
 * about GA4, Google Ads or any other destination — a tag in the GTM container
 * decides what to do with each event. That is the whole point: adding a
 * conversion destination later is a change in GTM, not a deploy.
 *
 * Every push is wrapped so it can never break a click. Analytics failing is an
 * inconvenience; a patient's "Call now" tap failing is a lost appointment.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

/**
 * The complete list of events this site fires. GTM triggers are configured
 * against these exact strings, so renaming one silently breaks a conversion
 * until the container is updated — treat them as a published contract.
 */
export type AnalyticsEvent =
  /** A client-side route change finished rendering. See components/AnalyticsEvents.tsx. */
  | 'spa_page_view'
  /** Any tel: link, anywhere on the site. `link_location` says which one. */
  | 'call_click'
  /** Any mailto: link. */
  | 'email_click'
  /** The booking iframe on /online-booking scrolled into view. */
  | 'booking_widget_view'
  /** The booking system was opened — the iframe's fallback link, or any link to it. */
  | 'booking_widget_open'
  /** A contact or callback form was accepted by /api/contact. The primary conversion. */
  | 'generate_lead'
  /** A form was submitted but the API rejected it — a conversion we nearly lost. */
  | 'form_error'
  /**
   * Legacy. The emergency sticky bar fired only this before there was a
   * site-wide call_click, and a live GTM trigger may still depend on it. It is
   * pushed alongside call_click so an existing container keeps working.
   */
  | 'emergency_call_click'

/**
 * Push an event to the dataLayer.
 *
 * Safe to call from anywhere: on the server, before GTM has loaded, or with
 * GTM blocked entirely. When the dataLayer array exists but GTM has not booted
 * yet the event queues in it and is replayed the moment the container loads,
 * which is why the array is created here rather than waited on.
 */
export function track(event: AnalyticsEvent, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return

  try {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event, ...params })
  } catch {
    // An analytics push must never take a click down with it.
  }
}
