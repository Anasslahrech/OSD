import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { ShieldCheck, Clock, Eye } from 'lucide-react'
import { method, site, targets, values } from '../data/site'

const valueIcons = [ShieldCheck, Clock, Eye]

function Counter({ to, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      setN(Math.round(to * (1 - Math.pow(1 - t, 3))))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="apropos" className="bg-charcoal px-5 py-24 text-bone md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-4 text-bronze-light">À propos</p>
          <h2 className="mb-8 font-display text-5xl leading-none tracking-tight md:text-6xl">
            Une jeune entreprise, une équipe, une exigence.
          </h2>
          <p className="mb-5 text-lg leading-relaxed text-bone/75">
            {site.name} est une entreprise récente de construction et de rénovation. Nous intervenons à{' '}
            {site.zone.join(', ')} pour construire, rénover et aménager appartements, villas, cabinets
            professionnels et autres locaux.
          </p>
          <p className="text-lg leading-relaxed text-bone/75">
            Vous savez qui répond au téléphone, qui supervise le chantier et qui vous remet les clés.
          </p>

          <ul className="mt-8 space-y-2 text-bone/70">
            {targets.map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-2.5 h-px w-5 shrink-0 bg-bronze" />
                {t}
              </li>
            ))}
          </ul>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/15 pt-10">
            {site.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-5xl text-bronze-light md:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </dd>
                <p className="mt-2 text-sm text-bone/60">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col gap-4">
          {values.map((v, i) => {
            const Icon = valueIcons[i]
            return (
              <div key={v.title} className="flex gap-6 rounded-2xl border border-white/10 bg-ink p-8">
                <Icon className="mt-1 shrink-0 text-bronze" size={30} strokeWidth={1.4} />
                <div>
                  <h3 className="mb-2 font-display text-3xl">{v.title}</h3>
                  <p className="leading-relaxed text-bone/65">{v.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl border-t border-white/15 pt-16">
        <p className="eyebrow mb-4 text-bronze-light">Notre méthode</p>
        <h3 className="mb-10 font-display text-4xl leading-none tracking-tight md:text-5xl">
          Quatre étapes, du premier échange à la remise des clés.
        </h3>
        <ol className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {method.map((m, i) => (
            <li key={m.title} className="bg-ink p-8">
              <span className="font-display text-5xl text-bronze">{String(i + 1).padStart(2, '0')}</span>
              <h4 className="mb-2 mt-4 font-display text-2xl">{m.title}</h4>
              <p className="leading-relaxed text-bone/65">{m.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
