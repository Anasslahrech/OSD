import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import Brand from './Brand'
import { site } from '../data/site'
import { openCookieSettings } from '../lib/consent'

function TikTok({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 2h-3.2v13.2a2.8 2.8 0 1 1-2.8-2.8c.3 0 .5 0 .8.1V9.2a6 6 0 1 0 5.2 5.9V8.6a7.6 7.6 0 0 0 4.4 1.4V6.8a4.4 4.4 0 0 1-4.4-4.8z" />
    </svg>
  )
}

const socials = [
  { key: 'instagram', label: 'Instagram', Icon: Instagram },
  { key: 'facebook', label: 'Facebook', Icon: Facebook },
  { key: 'tiktok', label: 'TikTok', Icon: TikTok },
  { key: 'linkedin', label: 'LinkedIn', Icon: Linkedin },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal px-5 py-14 text-bone/70 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <Brand className="text-bone" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Construction, rénovation et aménagement d'appartements, villas, cabinets et autres locaux à{' '}
            {site.zone.join(', ')}.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-3 text-sm" aria-label="Pied de page">
          <Link to="/#services" className="hover:text-bronze-light">Services</Link>
          <Link to="/#projets" className="hover:text-bronze-light">Réalisations</Link>
          <Link to="/#apropos" className="hover:text-bronze-light">À propos</Link>
          <Link to="/blog" className="hover:text-bronze-light">Blog</Link>
          <Link to="/#contact" className="hover:text-bronze-light">Contact</Link>
          <Link to="/mentions-legales" className="hover:text-bronze-light">Mentions légales</Link>
          <Link to="/confidentialite" className="hover:text-bronze-light">Confidentialité</Link>
          <button onClick={openCookieSettings} className="text-left hover:text-bronze-light">
            Gérer les cookies
          </button>
        </nav>

        <div>
          <p className="eyebrow mb-4 text-bone">Suivez-nous</p>
          <ul className="flex gap-3">
            {socials.map(({ key, label, Icon }) => (
              <li key={key}>
                <a
                  href={site.social[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:border-bronze hover:text-bronze-light"
                >
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-sm">
        © {new Date().getFullYear()} {site.name}. Tous droits réservés.
      </p>
    </footer>
  )
}
