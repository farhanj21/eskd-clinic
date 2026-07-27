'use client'

import { useState, type CSSProperties } from 'react'

interface MapEmbedProps {
  /** Google Maps embed URL. */
  src: string
  /** Accessible title for the iframe, and the sub-label on the facade. */
  title: string
  /** Button text before the map is loaded. */
  label?: string
  className?: string
  style?: CSSProperties
}

/**
 * Click-to-load Google Map.
 *
 * A Maps embed pulls well over a megabyte of third-party JavaScript. Even with
 * loading="lazy" that lands the moment the frame scrolls into view, competing
 * with the rest of the page for bandwidth and main thread. Rendering a cheap
 * facade first and only mounting the iframe on click keeps it off the critical
 * path entirely — nothing third-party loads unless a visitor asks for the map.
 */
export default function MapEmbed({ src, title, label = 'Show map', className, style }: MapEmbedProps) {
  const [loaded, setLoaded] = useState(false)

  const fill: CSSProperties = { position: 'absolute', inset: 0, width: '100%', height: '100%' }

  return (
    <div className={className} style={{ position: 'relative', overflow: 'hidden', ...style }}>
      {loaded ? (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          style={{ ...fill, border: 0 }}
        />
      ) : (
        <button type="button" className="map-facade" style={fill} onClick={() => setLoaded(true)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="map-facade-label">{label}</span>
          <span className="map-facade-sub">{title}</span>
        </button>
      )}
    </div>
  )
}
