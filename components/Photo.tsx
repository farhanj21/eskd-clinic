import Image from 'next/image'
import type { CSSProperties } from 'react'

interface PhotoProps {
  /** Path under /public, e.g. "/assets/heroes/home-hero.webp". Omit while the photo is pending — the hint placeholder renders instead. */
  src?: string
  alt?: string
  /** Placeholder text shown until a src is supplied. Doubles as the photography brief. */
  hint?: string
  /** Responsive sizes attr matching the layout column this photo sits in. See docs/photo-infrastructure.md. */
  sizes?: string
  /** Adds the .tall variant (min-height 420px hero frame). */
  tall?: boolean
  /** Only for the single above-the-fold hero image on a page. */
  priority?: boolean
  className?: string
  style?: CSSProperties
  objectPosition?: string
}

export default function Photo({
  src,
  alt = '',
  hint,
  sizes = '100vw',
  tall = false,
  priority = false,
  className,
  style,
  objectPosition = 'center',
}: PhotoProps) {
  const classes = ['ph', tall && 'tall', className].filter(Boolean).join(' ')

  return (
    <div className={classes} style={style}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: 'cover', objectPosition }}
        />
      ) : (
        hint && <span>{hint}</span>
      )}
    </div>
  )
}
