import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { site } from '../data/site'
import { tList } from '../lib/i18nHelpers'

export default function Hero() {
  const { t } = useTranslation()
  const points = tList(t, 'hero.points', [])

  return (
    <section id="accueil" className="relative flex min-h-screen items-end overflow-hidden bg-charcoal">
      {/* Photo : déposer public/images/hero.jpg (le dégradé s'affiche tant qu'elle est absente) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2f4574] via-[#24375f] to-[#162340]" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-transparent rtl:bg-gradient-to-l" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-40 md:px-8 md:pb-20 md:pt-44">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow mb-6 flex items-center gap-4 text-bone/70"
        >
          <span className="h-px w-10 shrink-0 bg-bronze" />
          <span>
            {site.zone.map((z) => t(`cities.${z}`, { defaultValue: z })).join(' · ')} · {t('hero.country')}
          </span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-[3.2rem] leading-[0.95] tracking-tight text-bone sm:text-7xl lg:text-[6.5rem] rtl:leading-[1.25] rtl:tracking-normal"
        >
          {t('hero.line1')}
          <br />
          {t('hero.line2')}
          <br />
          <em className="text-bronze not-italic">{t('hero.line3')}</em>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-xl">
            <p className="text-lg leading-relaxed text-bone/80">{t('hero.description')}</p>
            {points.length > 0 && (
              <ul className="mt-6 space-y-3">
                {points.map((p) => (
                  <li key={p} className="flex gap-3 text-bone/90">
                    <Check size={20} className="mt-0.5 shrink-0 text-bronze-light" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projets"
              className="eyebrow inline-flex items-center justify-center gap-3 rounded-full bg-bronze px-8 py-4 text-white transition hover:bg-bronze-light"
            >
              {t('hero.discover')} <ArrowRight size={16} className="rtl:rotate-180" />
            </a>
            <Link
              to="/#contact"
              className="eyebrow inline-flex items-center justify-center rounded-full border border-bone/60 px-8 py-4 text-bone transition hover:border-bronze hover:text-bronze-light"
            >
              {t('hero.quote')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}