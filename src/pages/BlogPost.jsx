import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'
import PageShell from './PageShell'
import { posts } from '../data/blog'
import { catLabel, formatDate, langOf, tData } from '../lib/i18nHelpers'

export default function BlogPost() {
  const { t, i18n } = useTranslation()
  const lang = langOf(i18n)
  const { slug } = useParams()
  const base = posts.find((p) => p.slug === slug)
  if (!base) return <Navigate to="/404" replace />
  const post = tData(t, `data.posts.${base.slug}`, base)

  return (
    <>
      <Seo title={post.title} description={post.excerpt} path={`/blog/${base.slug}`} />
      <PageShell eyebrow={`${catLabel(t, base.category)} · ${formatDate(base.date, lang)}`} title={post.title} narrow>
        <Link to="/blog" className="eyebrow mb-10 inline-flex items-center gap-2 text-accent">
          <ArrowLeft size={14} className="rtl:rotate-180" /> {t('blog.all')}
        </Link>
        <div className="space-y-6 text-lg leading-relaxed text-charcoal/80">
          {post.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <div className="mt-14 rounded-2xl bg-charcoal p-8 text-bone">
          <p className="font-display text-3xl">{t('blog.ctaTitle')}</p>
          <p className="mt-2 text-bone/70">{t('blog.ctaText')}</p>
          <Link
            to="/#contact"
            className="eyebrow mt-6 inline-block rounded-full bg-bronze px-8 py-4 text-white transition hover:bg-bronze-light"
          >
            {t('blog.ctaButton')}
          </Link>
        </div>
      </PageShell>
    </>
  )
}