import { Quote } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { testimonials } from '../data/testimonials'

// Affichée uniquement lorsque des avis réels ont été ajoutés dans src/data/testimonials.js
export default function Testimonials() {
  const { t: tr } = useTranslation()
  if (testimonials.length === 0) return null
  return (
    <section id="avis" className="bg-sand px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow mb-4 text-accent">{tr('testimonials.eyebrow')}</p>
        <h2 className="mb-14 max-w-2xl font-display text-5xl leading-none tracking-tight md:text-6xl rtl:leading-tight">
          {tr('testimonials.heading')}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name + t.project} className="rounded-2xl bg-bone p-8">
              <Quote className="mb-5 text-accent" size={28} strokeWidth={1.4} />
              <blockquote className="leading-relaxed text-charcoal/80">{t.text}</blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-medium">{t.name}</span>
                <span className="block text-charcoal/60">{t.project}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}