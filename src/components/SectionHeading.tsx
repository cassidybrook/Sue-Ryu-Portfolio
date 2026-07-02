type SectionHeadingProps = {
  id: string
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="mb-10 scroll-mt-28" id={id}>
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
      <div className="mt-6 h-px w-16 bg-accent" aria-hidden="true" />
    </header>
  )
}
