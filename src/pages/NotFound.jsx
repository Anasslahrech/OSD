import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'
import PageShell from './PageShell'

export default function NotFound() {
  const { t } = useTranslation()
  return (
    <>
      <Seo title={t('notFound.seoTitle')} description={t('notFound.seoDesc')} path="/404" />
      <PageShell eyebrow={t('notFound.eyebrow')} title={t('notFound.title')}>
        <p className="mb-8 text-lg text-charcoal/70">{t('notFound.text')}</p>
        <Link to="/" className="eyebrow inline-block rounded-full bg-charcoal px-8 py-4 text-bone transition hover:bg-bronze">
          {t('notFound.home')}
        </Link>
      </PageShell>
    </>
  )
}