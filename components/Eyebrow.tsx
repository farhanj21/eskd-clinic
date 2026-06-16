interface EyebrowProps {
  children: React.ReactNode
  center?: boolean
  light?: boolean
  className?: string
}

export default function Eyebrow({ children, center = false, light = false, className = '' }: EyebrowProps) {
  const cls = [
    'eyebrow',
    center ? 'center' : '',
    light ? 'light' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <span className={cls}>{children}</span>
}
