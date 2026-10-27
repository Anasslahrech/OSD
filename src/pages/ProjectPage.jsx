import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'
import BeforeAfter from '../components/BeforeAfter'
import PageShell from './PageShell'
import { projects } from '../data/projects'
import { catLabel, cityLabel, tData } from '../lib/i18nHelpers'

export default function ProjectPage() {
  const { t } = useTranslation()
  const { id } = useParams()
  const base = projects.find((p) => p.id === id)
  if (!base) return <Navigate to="/404" replace />
  const project = tData(t, `data.projects.${base.id}`, base)
  const city = cityLabel(t, base.city)

  const others = projects.filter((p) => p.id !== base.id).slice(0, 3)

  return (
    <>
      <Seo
        title={`${project.title} · ${city}`}
        description={t('projectPage.seoDesc', { service: project.service, city, description: project.description })}
        path={`/realisations/${base.id}`}
      />
      <PageShell eyebrow={catLabel(t, base.category)} title={project.title}>
        <Link to="/#projets" className="eyebrow mb-10 inline-flex items-center gap-2 text-accent">
          <ArrowLeft size={14} className="rtl:rotate-180" /> {t('projectPage.back')}
        </Link>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <BeforeAfter before={base.before} after={base.after} />
            <p className="mt-3 text-sm text-charcoal/60">{t('projectPage.slide')}</p>

            {base.video && (
              <video
                src={base.video}
                controls
                preload="metadata"
                className="mt-8 aspect-video w-full rounded-xl bg-charcoal"
              >
                {t('projectPage.video')}
              </video>
            )}
          </div>

          <aside className="lg:col-span-2">
            <dl className="space-y-4 border-t border-charcoal/15 pt-6">
              <Row label={t('projectPage.service')} value={project.service} />
              <Row label={t('projectPage.city')} value={<span className="inline-flex items-center gap-1.5"><MapPin size={14} />{city}</span>} />
              <Row label={t('projectPage.year')} value={base.year} />
            </dl>
            <p className="mt-8 text-lg leading-relaxed text-charcoal/75">{project.description}</p>
            <Link
              to="/#contact"
              className="eyebrow mt-8 inline-block rounded-full bg-charcoal px-8 py-4 text-bone transition hover:bg-bronze"
            >
              {t('projectPage.similar')}
            </Link>
          </aside>
        </div>

        <div className="mt-20">
          <h2 className="mb-8 font-display text-4xl">{t('projectPage.others')}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((other) => {
              const p = tData(t, `data.projects.${other.id}`, other)
              return (
                <Link
                  key={other.id}
                  to={`/realisations/${other.id}`}
                  className="rounded-xl border border-charcoal/10 bg-white p-6 transition hover:border-bronze"
                >
                  <p className="text-sm text-charcoal/60">{p.service} · {cityLabel(t, other.city)}</p>
                  <h3 className="mt-1 font-display text-3xl">{p.title}</h3>
                </Link>
              )
            })}
          </div>
        </div>
      </PageShell>
    </>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-4 border-b border-charcoal/10 pb-4">
      <dt className="text-charcoal/60">{label}</dt>
      <dd className="text-right font-medium">{value}</dd>
    </div>
  )
}