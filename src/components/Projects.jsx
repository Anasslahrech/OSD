import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { categories, projects } from '../data/projects'

export default function Projects() {
  const [active, setActive] = useState('Tous')
  const list = active === 'Tous' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projets" className="bg-sand px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-4 text-accent">Nos réalisations</p>
          <h2 className="font-display text-5xl leading-none tracking-tight md:text-6xl">
            Avant, après : les chantiers parlent d'eux-mêmes.
          </h2>
        </div>

        <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filtrer les projets">
          {categories.map((c) => (
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

        {list.length === 0 && (
          <p className="py-10 text-charcoal/60">Aucun projet dans cette catégorie pour le moment.</p>
        )}

        <motion.div layout className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
              >
                <Link to={`/realisations/${p.id}`} className="group block text-left">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-charcoal">
                    <ThumbImage src={p.after} />
                    <span className="eyebrow absolute bottom-4 left-4 rounded-full bg-charcoal/80 px-4 py-2 text-bone opacity-0 transition group-hover:opacity-100">
                      Voir avant / après
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm text-charcoal/60">
                    <span>{p.service}</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="mt-1 font-display text-3xl">{p.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-charcoal/60">
                    <MapPin size={14} /> {p.city}
                  </p>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function ThumbImage({ src }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#3d5584] to-[#24375f]">
        <span className="eyebrow text-white/50">Photo à ajouter</span>
      </div>
    )
  }
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
    />
  )
}
