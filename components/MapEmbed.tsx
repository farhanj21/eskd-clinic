import { type CSSProperties } from 'react'

interface MapEmbedProps {
  /** Google Maps embed URL. */
  src: string
  /** Accessible title for the iframe, and the sub-label on the facade. */
  title: string
  className?: string
  style?: CSSProperties
}

export default function MapEmbed({ src, title, className, style }: MapEmbedProps) {
  const fill: CSSProperties = { position: 'absolute', inset: 0, width: '100%', height: '100%' }

  return (
    <div className={className} style={{ position: 'relative', overflow: 'hidden', ...style }}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        style={{ ...fill, border: 0 }}
      />
    </div>
  )
}
