import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight, Building2, Hammer, Stethoscope, PaintRoller, Wrench, Trees, Layers, Package } from 'lucide-react'
import { services } from '../data/site'
import { tData } from '../lib/i18nHelpers'

export const serviceIcons = { Building2, Hammer, Stethoscope, PaintRoller, Wrench, Trees, Layers, Package }

const DEFAULT_PARTNER_LOGO = '/images/smh-le-designeur.png'

// Fichier attendu : public/images/smh-le-designeur.png
export function Partner({ partner }) {
  const [failed, setFailed] = useState(false)
  if (!partner) return null
  const logo = partner.logo || DEFAULT_PARTNER_LOGO

  return (
    <div className="mt-5 flex flex-wrap items-center gap-3">
      {partner.label && (
        <span className="text-xs uppercase tracking-wider opacity-70">{partner.label}</span>
      )}
      <span
        dir="ltr"
        className="inline-flex h-14 items-center justify-center overflow-hidden rounded-lg bg-white px-4 shadow-sm"
      >
        {failed ? (
          <span className="font-display text-lg font-semibold text-charcoal">{partner.name}</span>
        ) : (
          <img
            src={logo}
            alt={partner.name}
            loading="lazy"
            className="h-full w-auto max-w-[200px] scale-125 object-contain"
            onError={() => setFailed(true)}
          />
        )}
      </span>
    </div>
  )
}

export default function Services() {
  const { t } = useTranslation()
  return (
    <section id="services" className="bg-bone px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4 text-accent">{t('servicesSection.eyebrow')}</p>
          <h2 className="font-display text-5xl leading-none tracking-tight md:text-6xl rtl:leading-tight">
            {t('servicesSection.heading')}
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon]
            const tr = tData(t, `data.services.${s.slug}`, s)
            const partner = s.partner ? { ...s.partner, ...(tr.partner || {}) } : null
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="bg-bone"
              >
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex h-full flex-col p-8 transition hover:bg-charcoal md:p-10"
                >
                  <Icon className="mb-8 text-bronze" size={34} strokeWidth={1.4} />
                  <h3 className="mb-3 font-display text-3xl leading-tight transition group-hover:text-bone">
                    {tr.title}
                  </h3>
                  <p className="leading-relaxed text-charcoal/70 transition group-hover:text-bone/70">{tr.text}</p>
                  <Partner partner={partner} />
                  <span className="eyebrow mt-auto inline-flex items-center gap-2 pt-6 text-accent transition group-hover:text-bronze-light">
                    {t('servicesSection.more')} <ArrowUpRight size={14} className="rtl:-scale-x-100" />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}