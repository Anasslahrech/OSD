import { useTranslation } from 'react-i18next'

const langs = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'عربي' },
]

export default function LanguageSwitcher({ className = '' }) {
  const { i18n } = useTranslation()
  const current = (i18n.resolvedLanguage || 'fr').slice(0, 2)

  return (
    <div className={`flex items-center gap-1 ${className}`} dir="ltr">
      {langs.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => i18n.changeLanguage(code)}
          aria-pressed={current === code}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            current === code
              ? 'bg-bronze text-white'
              : 'text-bone/70 hover:text-bronze-light'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}