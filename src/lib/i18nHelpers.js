// Petits utilitaires pour traduire les données (services, projets, articles…).
const DATE_LOCALES = { fr: 'fr-FR', en: 'en-GB', ar: 'ar-MA' }

export const langOf = (i18n) => (i18n.resolvedLanguage || i18n.language || 'fr').slice(0, 2)

export const formatDate = (d, lang) =>
  new Date(d).toLocaleDateString(DATE_LOCALES[lang] || 'fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

// Renvoie la liste traduite (tableau) ou, à défaut, la liste de secours.
export const tList = (t, key, fallback = []) => {
  const v = t(key, { returnObjects: true })
  return Array.isArray(v) ? v : fallback
}

// Renvoie l'objet traduit fusionné avec l'objet d'origine (secours si la clé n'existe pas).
export const tData = (t, key, base) => {
  const v = t(key, { returnObjects: true })
  return v && typeof v === 'object' ? { ...base, ...v } : base
}

export const cityLabel = (t, city) => t(`cities.${city}`, { defaultValue: city })
export const catLabel = (t, cat) => t(`categories.${cat}`, { defaultValue: cat })