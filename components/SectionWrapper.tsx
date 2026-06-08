interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
  dataSection?: string
  wide?: boolean
}

export default function SectionWrapper({
  children,
  id,
  className = '',
  dataSection,
  wide = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`section${className ? ` ${className}` : ''}`}
      {...(dataSection ? { 'data-section': dataSection } : {})}
    >
      <div className={wide ? 'container-wide' : 'container'}>{children}</div>
    </section>
  )
}
