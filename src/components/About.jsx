import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { ShieldCheck, Eye, Sparkles, Handshake, Globe, Video } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { method, site, targets, values } from '../data/site'
import { cityLabel, tList } from '../lib/i18nHelpers'

const valueIcons = [ShieldCheck, Eye, Sparkles, Handshake]

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
  const { t } = useTranslation()
  const sep = t('common.listSeparator')
  const targetsT = tList(t, 'about.targets', targets)
  const statsT = tList(t, 'about.stats', [])
  const valuesT = tList(t, 'about.values', values)
  const methodT = tList(t, 'about.method', method)
  const abroadItems = tList(t, 'about.abroadItems', [])
  const zone = site.zone.map((z) => cityLabel(t, z)).join(sep)

  return (
    <section id="apropos" className="bg-charcoal px-5 py-24 text-bone md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-4 text-bronze-light">{t('about.eyebrow')}</p>

          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-bronze/50 bg-bronze/10 px-5 py-2">
            <span className="font-display text-3xl text-bronze-light" dir="ltr">
              30+
            </span>
            <span className="text-sm font-medium uppercase tracking-wider text-bone/80">
              {t('about.badge')}
            </span>
          </div>

          <h2 className="mb-8 font-display text-5xl leading-none tracking-tight md:text-6xl rtl:leading-tight">
            {t('about.heading')}
          </h2>
          <p className="mb-5 text-lg leading-relaxed text-bone/75">
            {t('about.p1', { name: site.name, zone })}
          </p>
          <p className="mb-5 text-lg leading-relaxed text-bone/75">{t('about.p2')}</p>
          <p className="text-lg leading-relaxed text-bone/90">{t('about.mission')}</p>

          <h3 className="mb-4 mt-10 font-display text-2xl">{t('about.targetsTitle')}</h3>
          <ul className="space-y-2 text-bone/70">
            {targetsT.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2.5 h-px w-5 shrink-0 bg-bronze" />
                {item}
              </li>
            ))}
          </ul>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/15 pt-10">
            {site.stats.map((s, i) => {
              const label = statsT[i]?.label ?? s.label
              const suffix = statsT[i]?.suffix ?? s.suffix
              return (
                <div key={s.label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-display text-5xl text-bronze-light md:text-6xl" dir="ltr">
                    <Counter to={s.value} suffix={suffix} />
                  </dd>
                  <p className="mt-2 text-sm text-bone/60">{label}</p>
                </div>
              )
            })}
          </dl>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-display text-3xl">{t('about.valuesTitle')}</h3>
          {valuesT.map((v, i) => {
            const Icon = valueIcons[i] || ShieldCheck
            return (
              <div key={v.title} className="flex gap-6 rounded-2xl border border-white/10 bg-ink p-8">
                <Icon className="mt-1 shrink-0 text-bronze" size={30} strokeWidth={1.4} />
                <div>
                  <h4 className="mb-2 font-display text-3xl">{v.title}</h4>
                  <p className="leading-relaxed text-bone/65">{v.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl border-t border-white/15 pt-16">
        <p className="eyebrow mb-4 text-bronze-light">{t('about.methodEyebrow')}</p>
        <h3 className="mb-10 font-display text-4xl leading-none tracking-tight md:text-5xl rtl:leading-tight">
          {t('about.methodHeading')}
        </h3>
        <ol className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {methodT.map((m, i) => (
            <li key={m.title} className="bg-ink p-8">
              <span className="font-display text-5xl text-bronze">{String(i + 1).padStart(2, '0')}</span>
              <h4 className="mb-2 mt-4 font-display text-2xl">{m.title}</h4>
              <p className="leading-relaxed text-bone/65">{m.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-6 rounded-2xl border border-bronze/40 bg-ink p-8 md:flex-row md:items-center md:gap-10 md:p-10">
        <Globe className="shrink-0 text-bronze" size={44} strokeWidth={1.3} />
        <div className="flex-1">
          <h3 className="mb-2 font-display text-3xl">{t('about.abroadTitle')}</h3>
          <p className="leading-relaxed text-bone/70">{t('about.abroadText')}</p>
        </div>
        <ul className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
          {abroadItems.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-bone/80"
            >
              <Video size={14} className="text-bronze" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}