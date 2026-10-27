import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'
import PageShell from './PageShell'
import { blogCategories, posts } from '../data/blog'
import { catLabel, formatDate, langOf, tData } from '../lib/i18nHelpers'

export default function Blog() {
  const { t, i18n } = useTranslation()
  const lang = langOf(i18n)
  const [active, setActive] = useState('Tous')
  const list = active === 'Tous' ? posts : posts.filter((p) => p.category === active)

  return (
    <>
      <Seo title={t('blog.seoTitle')} description={t('blog.seoDesc')} path="/blog" />
      <PageShell eyebrow={t('blog.eyebrow')} title={t('blog.title')}>
        <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label={t('blog.categories')}>
          {blogCategories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`eyebrow rounded-full border px-5 py-3 transition ${
                active === c
                  ? 'border-charcoal bg-charcoal text-bone'
                  : 'border-charcoal/25 text-charcoal/70 hover:border-charcoal'
              }`}
            >
              {catLabel(t, c)}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((post) => {
            const p = { ...post, ...tData(t, `data.posts.${post.slug}`, post) }
            return (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="flex flex-col rounded-2xl border border-charcoal/10 bg-white p-8 transition hover:border-bronze"
              >
                <span className="eyebrow text-accent">{catLabel(t, post.category)}</span>
                <h2 className="mt-3 font-display text-3xl leading-tight">{p.title}</h2>
                <p className="mt-3 flex-1 leading-relaxed text-charcoal/70">{p.excerpt}</p>
                <span className="mt-6 text-sm text-charcoal/50">{formatDate(post.date, lang)}</span>
              </Link>
            )
          })}
        </div>
      </PageShell>
    </>
  )
}