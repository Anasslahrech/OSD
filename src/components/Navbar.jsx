import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Brand from './Brand'

const links = [
  { to: '/#services', label: 'Services' },
  { to: '/#projets', label: 'Réalisations' },
  { to: '/#apropos', label: 'À propos' },
  { to: '/blog', label: 'Blog' },
  { to: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-charcoal/95 backdrop-blur border-b border-white/10' : 'bg-charcoal/40 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="text-bone" aria-label="Overall Style Designer, accueil">
          <Brand />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="eyebrow text-bone/80 transition hover:text-bronze-light">
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/#contact"
          className="eyebrow hidden rounded-full border border-bone/70 px-6 py-3 text-bone transition hover:border-bronze hover:bg-bronze lg:inline-block"
        >
          Demander un devis
        </Link>

        <button
          className="flex h-11 w-11 items-center justify-center text-bone lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 px-5 pb-6 lg:hidden" aria-label="Navigation mobile">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 font-display text-2xl text-bone"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={() => setOpen(false)}
            className="eyebrow mt-5 rounded-full bg-bronze px-6 py-4 text-center text-white"
          >
            Demander un devis
          </Link>
        </nav>
      )}
    </header>
  )
}
