import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'
import PageShell from './PageShell'
import { serviceIcons, Partner } from '../components/Services'
import { services } from '../data/site'
import { projects } from '../data/projects'
import { cityLabel, tData } from '../lib/i18nHelpers'

export default function ServicePage() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const base = services.find((s) => s.slug === slug)
  if (!base) return <Navigate to="/404" replace />
  const service = tData(t, `data.services.${base.slug}`, base)
  const partner = base.partner ? { ...base.partner, ...(service.partner || {}) } : null

  const Icon = serviceIcons[base.icon]
  const related = projects
    .filter(
      (p) =>
        p.category === base.category ||
        (base.category === 'Rénovation' && ['Rénovation intérieure', 'Appartements', 'Maisons'].includes(p.category))
    )
    .slice(0, 3)

  return (
    <>
      <Seo title={service.title} description={service.text} path={`/services/${base.slug}`} />
      <PageShell eyebrow={t('servicePage.eyebrow')} title={service.title}>
        <Link to="/#services" className="eyebrow mb-10 inline-flex items-center gap-2 text-accent">
          <ArrowLeft size={14} className="rtl:rotate-180" /> {t('servicePage.back')}
        </Link>

        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Icon className="mb-6 text-bronze" size={38} strokeWidth={1.4} />
            <p className="text-xl leading-relaxed text-charcoal/80">{service.intro}</p>
            <Partner partner={partner} />

            <h2 className="mb-6 mt-14 font-display text-4xl">{t('servicePage.how')}</h2>
            <ol className="space-y-6">
              {service.steps.map((s, i) => (
                <li key={s.title} className="flex gap-5">
                  <span className="font-display text-4xl leading-none text-accent">{i + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl">{s.title}</h3>
                    <p className="mt-1 leading-relaxed text-charcoal/70">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-2xl bg-charcoal p-8 text-bone">
              <h2 className="mb-5 font-display text-3xl">{t('servicePage.benefits')}</h2>
              <ul className="space-y-4">
                {service.benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-bone/80">
                    <Check size={20} className="mt-0.5 shrink-0 text-bronze-light" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                to="/#contact"
                className="eyebrow mt-8 block rounded-full bg-bronze px-6 py-4 text-center text-white transition hover:bg-bronze-light"
              >
                {t('servicePage.quote')}
              </Link>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="mb-8 font-display text-4xl">{t('servicePage.projects')}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((proj) => {
                const p = tData(t, `data.projects.${proj.id}`, proj)
                return (
                  <Link
                    key={proj.id}
                    to={`/realisations/${proj.id}`}
                    className="rounded-xl border border-charcoal/10 bg-white p-6 transition hover:border-bronze"
                  >
                    <p className="text-sm text-charcoal/60">{p.service} · {cityLabel(t, proj.city)}</p>
                    <h3 className="mt-1 font-display text-3xl">{p.title}</h3>
                    <span className="eyebrow mt-4 block text-accent">{t('servicePage.seeBA')}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </PageShell>
    </>
  )
}