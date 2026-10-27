import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Brand from './Brand'
import LanguageSwitcher from './LanguageSwitcher'

const links = [
  { to: '/#services', key: 'services' },
  { to: '/#projets', key: 'projects' },
  { to: '/#apropos', key: 'about' },
  { to: '/blog', key: 'blog' },
  { to: '/#contact', key: 'contact' },
]

export default function Navbar() {
  const { t } = useTranslation()
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
        <Link to="/" className="text-bone" aria-label={t('nav.brandLabel')}>
          <Brand />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label={t('nav.mainNav')}>
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="eyebrow text-bone/80 transition hover:text-bronze-light">
              {t(`nav.${l.key}`)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <LanguageSwitcher />
          <Link
            to="/#contact"
            className="eyebrow rounded-full border border-bone/70 px-6 py-3 text-bone transition hover:border-bronze hover:bg-bronze"
          >
            {t('nav.quote')}
          </Link>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center text-bone lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 px-5 pb-6 lg:hidden" aria-label={t('nav.mobileNav')}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 font-display text-2xl text-bone"
            >
              {t(`nav.${l.key}`)}
            </Link>
          ))}
          <LanguageSwitcher className="mt-5 justify-center" />
          <Link
            to="/#contact"
            onClick={() => setOpen(false)}
            className="eyebrow mt-5 rounded-full bg-bronze px-6 py-4 text-center text-white"
          >
            {t('nav.quote')}
          </Link>
        </nav>
      )}
    </header>
  )
}