import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'
import PageShell from './PageShell'
import { site } from '../data/site'
import { tList } from '../lib/i18nHelpers'

export default function Terms() {
  const { t } = useTranslation()
  const vars = { name: site.name, email: site.email }
  const sections = tList(t, 'terms.sections', [])

  return (
    <>
      <Seo title={t('terms.seoTitle')} description={t('terms.seoDesc', vars)} path="/conditions-utilisation" />
      <PageShell eyebrow={t('terms.eyebrow')} title={t('terms.title')} narrow>
        <p className="mb-10 text-sm text-charcoal/75">{t('terms.updated')}</p>
        <div className="space-y-10 leading-relaxed text-charcoal/80">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="mb-3 font-display text-3xl text-charcoal">{s.title}</h2>
              <p>{s.text}</p>
            </section>
          ))}
          <p>
            <Link to="/confidentialite" className="underline hover:text-accent">
              {t('footer.privacy')}
            </Link>
            {' · '}
            <Link to="/mentions-legales" className="underline hover:text-accent">
              {t('footer.legal')}
            </Link>
          </p>
        </div>
      </PageShell>
    </>
  )
}