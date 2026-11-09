import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getConsent, setConsent } from '../lib/consent'

// « Accepter » et « Refuser » ont exactement le même style (pas de « dark pattern »).
const btn =
  'eyebrow rounded-full border border-bone bg-bone px-6 py-3.5 text-charcoal transition hover:bg-sand focus-visible:outline-bronze'

export default function CookieBanner() {
  const { t } = useTranslation()
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
  }

  return (
    <div
      role="dialog"
      aria-label={t('cookie.label')}
      className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-3xl rounded-2xl bg-charcoal p-5 text-bone shadow-2xl md:bottom-5 md:p-6"
    >
      <p className="text-sm leading-relaxed text-bone/85">
        {t('cookie.text')}{' '}
        <Link to="/confidentialite#cookies" className="underline hover:text-bronze-light">
          {t('cookie.policy')}
        </Link>
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={() => choose('granted')} className={btn}>
          {t('cookie.accept')}
        </button>
        <button type="button" onClick={() => choose('denied')} className={btn}>
          {t('cookie.refuse')}
        </button>
      </div>
    </div>
  )
}