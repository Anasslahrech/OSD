import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getConsent, setConsent } from '../lib/consent'

export default function CookieBanner() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(getConsent() === null)
    const reopen = () => setVisible(true)
    window.addEventListener('open-cookie-settings', reopen)
    return () => window.removeEventListener('open-cookie-settings', reopen)
  }, [])

  if (!visible) return null

  const choose = (value) => {
    setConsent(value)
    setVisible(false)
    navigate('/')
    window.scrollTo(0, 0)
  }

  return (
    <div
      role="dialog"
      aria-label={t('cookie.label')}
      className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-3xl rounded-2xl bg-charcoal p-5 text-bone shadow-2xl md:bottom-5 md:p-6"
    >
      <p className="text-sm leading-relaxed text-bone/80">
        {t('cookie.text')}{' '}
        <Link to="/confidentialite" className="underline hover:text-bronze-light">
          {t('cookie.policy')}
        </Link>
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={() => choose('granted')}
          className="eyebrow rounded-full bg-bronze px-6 py-3.5 text-white transition hover:bg-bronze-light"
        >
          {t('cookie.accept')}
        </button>
        <button
          onClick={() => choose('denied')}
          className="eyebrow rounded-full border border-bone/50 px-6 py-3.5 text-bone transition hover:border-bronze"
        >
          {t('cookie.refuse')}
        </button>
      </div>
    </div>
  )
}