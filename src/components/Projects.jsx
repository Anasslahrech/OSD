import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { categories, otherVideos, projects } from '../data/projects'
import { catLabel, tData } from '../lib/i18nHelpers'

export default function Projects() {
  const { t } = useTranslation()
  const [active, setActive] = useState('Tous')
  const showVideos = active === 'Vidéos'
  const list = showVideos ? [] : active === 'Tous' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projets" className="bg-sand px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-4 text-accent">{t('projectsSection.eyebrow')}</p>
          <h2 className="font-display text-5xl leading-none tracking-tight md:text-6xl rtl:leading-tight">
            {t('projectsSection.heading')}
          </h2>
        </div>

        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label={t('projectsSection.filter')}>
          {categories.map((c) => (
            <button
              key={c}
              aria-pressed={active === c}
              onClick={() => setActive(c)}
              className={`eyebrow rounded-full border px-5 py-3 transition ${
                active === c
                  ? 'border-charcoal bg-charcoal text-bone'
                  : 'border-charcoal/25 text-charcoal/80 hover:border-charcoal'
              }`}
            >
              {catLabel(t, c)}
            </button>
          ))}
        </div>

        {!showVideos && list.length === 0 && (
          <p className="py-10 text-charcoal/80">{t('projectsSection.empty')}</p>
        )}

        <motion.div layout className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {showVideos &&
              otherVideos.map((v) => {
                const tr = tData(t, `data.otherVideos.${v.id}`, v)
                return (
                  <motion.div
                    layout
                    key={v.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35 }}
                  >
                    <VideoCard video={v} title={tr.title} service={tr.service} description={tr.description} />
                  </motion.div>
                )
              })}
            {list.map((p) => {
              const tr = tData(t, `data.projects.${p.id}`, p)
              return (
                <motion.div
                  layout
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                >
                  <Link to={`/realisations/${p.id}`} className="group block text-start">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-charcoal">
                      <ThumbImage src={p.gallery?.[0] || p.after} alt={tr.title} />
                      <span className="eyebrow absolute bottom-4 start-4 rounded-full bg-charcoal/80 px-4 py-2 text-bone opacity-0 transition group-hover:opacity-100">
                        {t('projectsSection.viewPhotos')}
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-charcoal/80">{tr.service}</p>
                    <h3 className="mt-1 font-display text-3xl">{tr.title}</h3>
                  </Link>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

// Carte vidéo, même présentation que les projets photo. La vidéo ne se charge qu'au clic.
function VideoCard({ video, title, service, description }) {
  const { t } = useTranslation()
  const [playing, setPlaying] = useState(false)

  return (
    <div className="text-start">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-charcoal">
        {playing ? (
          <video
            src={video.src}
            poster={video.poster}
            controls
            autoPlay
            playsInline
            preload="auto"
            className="h-full w-full object-contain"
          >
            {t('projectPage.video')}
          </video>
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`${t('projectsSection.playVideo')} : ${title}`}
            className="group absolute inset-0 block h-full w-full"
          >
            {video.poster && (
              <img
                src={video.poster}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            )}
            <span className="absolute inset-0 bg-charcoal/25 transition group-hover:bg-charcoal/10" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-bone/90 text-charcoal shadow-lg transition group-hover:scale-110">
                <Play size={24} className="translate-x-0.5 rtl:-translate-x-0.5 rtl:rotate-180" fill="currentColor" />
              </span>
            </span>
            <span className="eyebrow absolute bottom-4 start-4 flex items-center gap-2 rounded-full bg-charcoal/85 px-4 py-2 text-bone transition group-hover:bg-bronze">
              <Play size={12} fill="currentColor" className="rtl:rotate-180" />
              {t('projectsSection.viewVideo')}
            </span>
          </button>
        )}
      </div>
      <p className="mt-4 text-sm text-charcoal/80">{service}</p>
      <h3 className="mt-1 font-display text-3xl">{title}</h3>
      {description && <p className="mt-2 text-charcoal/80">{description}</p>}
    </div>
  )
}

function ThumbImage({ src, alt = '' }) {
  const { t } = useTranslation()
  const [failed, setFailed] = useState(false)
  if (failed || !src) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#3d5584] to-[#24375f]">
        <span className="eyebrow text-white/50">{t('projectsSection.photoToAdd')}</span>
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
    />
  )
}