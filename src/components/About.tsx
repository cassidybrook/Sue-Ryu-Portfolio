import { profile } from '../data/profile'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section aria-labelledby="about-heading" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          id="about"
          eyebrow="Introduction"
          title="About"
        />
        <div className="max-w-3xl rounded-xl border border-border bg-white p-8 leading-relaxed text-muted">
          <p>{profile.about}</p>
        </div>
      </div>
    </section>
  )
}
