'use client'

import { useState } from 'react'
import GuideGrid, { type GuideCard } from '@/components/GuideGrid'

export interface LibraryTopic {
  slug: string
  label: string
}

type SortOrder = 'latest' | 'oldest' | 'az'

const sortOptions: { value: SortOrder; label: string }[] = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'az', label: 'Alphabetical (A–Z)' },
]

/**
 * The Learn hub's library: the topic chips and the grid they filter.
 *
 * The two live in one component because the chips filter the grid in place
 * rather than navigating — pick "Gum health" and the cards below narrow, with
 * no page load and no scroll position lost. Both sections are rendered here so
 * the selection can be shared between them.
 *
 * Only topics that already have a published guide are passed in, so no chip
 * can ever filter the grid down to nothing.
 */
export default function GuideLibrary({
  guides,
  topics,
  upcoming = [],
}: {
  guides: GuideCard[]
  topics: LibraryTopic[]
  /** Titles we intend to write. Plain text under the grid, never links. */
  upcoming?: string[]
}) {
  /** null = no filter, show the whole library. */
  const [active, setActive] = useState<string | null>(null)
  const [sort, setSort] = useState<SortOrder>('latest')

  const filtered = active ? guides.filter((guide) => guide.topics?.includes(active)) : guides
  // Dates are ISO strings, so they sort as text. A copy, because sort mutates
  // and the prop array is shared with every other order.
  const shown = [...filtered].sort((a, b) => {
    if (sort === 'az') return a.title.localeCompare(b.title)
    const oldestFirst = a.date.localeCompare(b.date)
    return sort === 'oldest' ? oldestFirst : -oldestFirst
  })

  return (
    <>
      {/* ── TOPICS ───────────────────────────────────────── */}
      <section className="sec sage-bg">
        <div className="container reveal" style={{ textAlign: 'center' }}>
          <div className="eyebrow">Browse by topic</div>
          <h2>What would you like to understand?</h2>
          {/* Chips left, sort right — one control row under the heading. */}
          <div className="library-controls">
            <div className="topic-tags" role="group" aria-label="Filter guides by topic">
              <button
                type="button"
                className={active === null ? 'topic-tag on' : 'topic-tag'}
                aria-pressed={active === null}
                onClick={() => setActive(null)}
              >
                All guides
              </button>
              {topics.map((topic) => (
                <button
                  key={topic.slug}
                  type="button"
                  className={active === topic.slug ? 'topic-tag on' : 'topic-tag'}
                  aria-pressed={active === topic.slug}
                  onClick={() => setActive(topic.slug)}
                >
                  {topic.label}
                </button>
              ))}
            </div>

            <div className="library-sort">
              <label htmlFor="guide-sort">Sort by</label>
              <select
                id="guide-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOrder)}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLES ─────────────────────────────────────── */}
      <section className="sec">
        <div className="container">
          {/* <div className="sec-head center reveal">
            <div className="eyebrow">The library</div>
            <h2>Guides &amp; articles</h2>
            <p style={{ marginTop: '14px', fontSize: '17px' }}>
              Every guide we&apos;ve published, newest first. Read one, read none, or just bring the question in with you.
            </p>
          </div> */}

          {/* One grid, not one per topic: the chips above narrow it in place. */}
          <GuideGrid guides={shown} />

          {/* Plain text, never links: these guides do not exist yet. */}
          {upcoming.length > 0 && (
            <p className="publishing-soon reveal">
              Publishing soon: {upcoming.join(' · ')}
            </p>
          )}
        </div>
      </section>
    </>
  )
}
