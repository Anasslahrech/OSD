import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, MapPin } from 'lucide-react'
import Seo from '../components/Seo'
import BeforeAfter from '../components/BeforeAfter'
import PageShell from './PageShell'
import { projects } from '../data/projects'

export default function ProjectPage() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)
  if (!project) return <Navigate to="/404" replace />

  const others = projects.filter((p) => p.id !== project.id).slice(0, 3)

  return (
    <>
      <Seo
        title={`${project.title} · ${project.city}`}
        description={`${project.service} à ${project.city} : ${project.description}`}
        path={`/realisations/${project.id}`}
      />
      <PageShell eyebrow={project.category} title={project.title}>
        <Link to="/#projets" className="eyebrow mb-10 inline-flex items-center gap-2 text-accent">
          <ArrowLeft size={14} /> Toutes les réalisations
        </Link>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <BeforeAfter before={project.before} after={project.after} />
            <p className="mt-3 text-sm text-charcoal/60">Faites glisser le curseur pour comparer l'avant et l'après.</p>

            {project.video && (
              <video
                src={project.video}
                controls
                preload="metadata"
                className="mt-8 aspect-video w-full rounded-xl bg-charcoal"
              >
                Votre navigateur ne lit pas cette vidéo.
              </video>
            )}
          </div>

          <aside className="lg:col-span-2">
            <dl className="space-y-4 border-t border-charcoal/15 pt-6">
              <Row label="Prestation" value={project.service} />
              <Row label="Ville" value={<span className="inline-flex items-center gap-1.5"><MapPin size={14} />{project.city}</span>} />
              <Row label="Année" value={project.year} />
            </dl>
            <p className="mt-8 text-lg leading-relaxed text-charcoal/75">{project.description}</p>
            <Link
              to="/#contact"
              className="eyebrow mt-8 inline-block rounded-full bg-charcoal px-8 py-4 text-bone transition hover:bg-bronze"
            >
              Un projet similaire ? Demander un devis
            </Link>
          </aside>
        </div>

        <div className="mt-20">
          <h2 className="mb-8 font-display text-4xl">Autres réalisations</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.id}
                to={`/realisations/${p.id}`}
                className="rounded-xl border border-charcoal/10 bg-white p-6 transition hover:border-bronze"
              >
                <p className="text-sm text-charcoal/60">{p.service} · {p.city}</p>
                <h3 className="mt-1 font-display text-3xl">{p.title}</h3>
              </Link>
            ))}
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
