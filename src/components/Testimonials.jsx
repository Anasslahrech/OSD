import { Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'

// Affichée uniquement lorsque des avis réels ont été ajoutés dans src/data/testimonials.js
export default function Testimonials() {
  if (testimonials.length === 0) return null
  return (
    <section id="avis" className="bg-sand px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow mb-4 text-accent">Avis clients</p>
        <h2 className="mb-14 max-w-2xl font-display text-5xl leading-none tracking-tight md:text-6xl">
          Ils nous ont fait confiance.
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
