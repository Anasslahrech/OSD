import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PageShell from './PageShell'
import { blogCategories, posts } from '../data/blog'

const fmt = (d) => new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

export default function Blog() {
  const [active, setActive] = useState('Tous')
  const list = active === 'Tous' ? posts : posts.filter((p) => p.category === active)

  return (
    <>
      <Seo
        title="Blog et conseils"
        description="Conseils pour réussir vos travaux de construction, de rénovation et d'aménagement de cabinets au Maroc."
        path="/blog"
      />
      <PageShell eyebrow="Blog" title="Conseils en rénovation et construction.">
        <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Catégories d'articles">
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
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="flex flex-col rounded-2xl border border-charcoal/10 bg-white p-8 transition hover:border-bronze"
            >
              <span className="eyebrow text-accent">{p.category}</span>
              <h2 className="mt-3 font-display text-3xl leading-tight">{p.title}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-charcoal/70">{p.excerpt}</p>
              <span className="mt-6 text-sm text-charcoal/50">{fmt(p.date)}</span>
            </Link>
          ))}
        </div>
      </PageShell>
    </>
  )
}
