import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Seo from '../components/Seo'
import PageShell from './PageShell'
import { posts } from '../data/blog'

const fmt = (d) => new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return <Navigate to="/404" replace />

  return (
    <>
      <Seo title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} />
      <PageShell eyebrow={`${post.category} · ${fmt(post.date)}`} title={post.title} narrow>
        <Link to="/blog" className="eyebrow mb-10 inline-flex items-center gap-2 text-accent">
          <ArrowLeft size={14} /> Tous les articles
        </Link>
        <div className="space-y-6 text-lg leading-relaxed text-charcoal/80">
          {post.paragraphs.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>
        <div className="mt-14 rounded-2xl bg-charcoal p-8 text-bone">
          <p className="font-display text-3xl">Un projet en tête ?</p>
          <p className="mt-2 text-bone/70">Décrivez vos travaux, nous vous répondons avec un devis détaillé gratuit.</p>
          <Link
            to="/#contact"
            className="eyebrow mt-6 inline-block rounded-full bg-bronze px-8 py-4 text-white transition hover:bg-bronze-light"
          >
            Demander un devis
          </Link>
        </div>
      </PageShell>
    </>
  )
}
