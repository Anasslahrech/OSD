import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { site } from '../data/site'

export default function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-screen items-end overflow-hidden bg-charcoal">
      {/* Photo : déposer public/images/hero.jpg (le dégradé s'affiche tant qu'elle est absente) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2f4574] via-[#24375f] to-[#162340]" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-36 md:px-8 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow mb-6 flex items-center gap-4 text-bone/70"
        >
          <span className="h-px w-10 bg-bronze" />
          {site.zone.join(' · ')} · Maroc
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-[3.4rem] leading-[0.95] tracking-tight text-bone sm:text-7xl lg:text-[7.5rem]"
        >
          Nous construisons
          <br />
          des espaces
          <br />
          <em className="text-bronze not-italic">qui durent.</em>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <p className="max-w-md text-lg leading-relaxed text-bone/80">
            Overall Style Designer construit, rénove et aménage appartements, villas, cabinets professionnels et
            autres locaux. Une seule équipe, un devis détaillé, un seul interlocuteur.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projets"
              className="eyebrow inline-flex items-center justify-center gap-3 rounded-full bg-bronze px-8 py-4 text-white transition hover:bg-bronze-light"
            >
              Découvrir nos projets <ArrowRight size={16} />
            </a>
            <Link
              to="/#contact"
              className="eyebrow inline-flex items-center justify-center rounded-full border border-bone/60 px-8 py-4 text-bone transition hover:border-bronze hover:text-bronze-light"
            >
              Demander un devis
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
