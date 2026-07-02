import { leadership } from '../data/profile'
import { SectionHeading } from './SectionHeading'

export function Extracurricular() {
  return (
    <section aria-labelledby="leadership-heading" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          id="leadership"
          eyebrow="Beyond the role"
          title="Leadership & Community"
          description="Volunteer leadership roles that strengthened collaboration, event planning, and colleague advocacy."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {leadership.map((item) => (
            <article
              key={item.id}
              className="group rounded-xl border border-border bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-sm sm:p-8"
            >
              <p className="text-sm font-medium text-accent">{item.organization}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{item.role}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
