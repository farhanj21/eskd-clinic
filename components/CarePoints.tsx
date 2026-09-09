'use client'

/**
 * "Dentistry that feels safe" — the four care points on the home page.
 *
 * Two presentations from one piece of markup:
 *
 * - Above 600px, exactly what this section has always been: four cards, each a
 *   single run-in line of text with the point's name in clay followed by the
 *   sentence. The button, the icon and the chevron are all neutralised in CSS
 *   there, so the desktop rendering is unchanged.
 * - At phone width, the reference's resource pills: an icon, the name, and a
 *   chevron, with the sentence collapsed until the row is tapped.
 *
 * The button is rendered at every width rather than swapped in after mount, so
 * the server and the client agree and nothing reflows on hydration. `open` is
 * the only state, and only the phone styling acts on it — a row left open on a
 * phone that is then rotated into a wide layout simply shows the sentence,
 * which is what the wide layout does anyway.
 */

import { useState, type ReactNode } from 'react'

const ICONS: Record<string, ReactNode> = {
  /* An eye — the whole picture, not one tooth. */
  eye: (
    <>
      <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.6" />
    </>
  ),
  heart: <path d="M12 20.5s-7.5-4.7-7.5-10a4.2 4.2 0 0 1 7.5-2.6A4.2 4.2 0 0 1 19.5 10.5c0 5.3-7.5 10-7.5 10Z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.2l3.2 2" />
    </>
  ),
  /* A leaf — comfort, and the same visual family as the sage the page runs on. */
  leaf: (
    <>
      <path d="M20 4c0 9-5.2 13-10 13a5.2 5.2 0 0 1-5-5C5 6.6 12.4 4 20 4Z" />
      <path d="M4.5 19.5C7 15 10.5 12.4 15 10.8" />
    </>
  ),
}

const POINTS = [
  { title: 'The Full Picture', body: 'We look beyond one tooth to your overall dental health.', icon: 'eye' },
  { title: 'No Shame, No Judgement', body: 'Whatever state things are in, we’ll help you move forward.', icon: 'heart' },
  { title: 'At Your Pace', body: 'We explain your options clearly and never rush you.', icon: 'clock' },
  { title: 'Comfort Matters', body: 'Gentle care for nervous or anxious patients.', icon: 'leaf' },
]

export default function CarePoints() {
  /** The open row on a phone. One at a time, as the reference draws it. */
  const [open, setOpen] = useState<string | null>(null)

  return (
    <ul className="care-points">
      {POINTS.map(({ title, body, icon }) => {
        const isOpen = open === title
        return (
          <li className="reveal" key={title} data-open={isOpen ? 'true' : undefined}>
            <button
              type="button"
              className="care-head"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : title)}
            >
              <span className="care-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {ICONS[icon]}
                </svg>
              </span>
              <h3>{title}</h3>
              <svg className="care-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>{' '}
            <p>{body}</p>
          </li>
        )
      })}
    </ul>
  )
}
