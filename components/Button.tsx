import Link from 'next/link'

export type ButtonVariant =
  | 'primary'
  | 'outline'
  | 'gold'
  | 'light'
  | 'ghost'
  | 'gt-btn'
  | 'emergency'
  | 'super'
  | 'alt'
  | 'teal'

interface BaseProps {
  variant?: ButtonVariant
  rect?: boolean
  className?: string
  children: React.ReactNode
}

interface ButtonAsButton extends BaseProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  href?: undefined
}

interface ButtonAsLink extends BaseProps {
  href: string
  target?: string
  rel?: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

export default function Button({ variant = 'primary', rect = false, className = '', children, ...rest }: ButtonProps) {
  const cls = [
    'btn',
    variant === 'gt-btn' ? 'gt-btn' : `btn-${variant}`,
    rect ? 'btn-rect' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if ('href' in rest && rest.href !== undefined) {
    const { href, target, rel, ...linkRest } = rest as ButtonAsLink
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')
    if (isExternal) {
      return (
        <a href={href} className={cls} target={target} rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={cls} target={target}>
        {children}
      </Link>
    )
  }

  const { ...buttonRest } = rest as ButtonAsButton
  return (
    <button className={cls} {...buttonRest}>
      {children}
    </button>
  )
}
