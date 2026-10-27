import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { site } from '../data/site'

const SITE_URL = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '')

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta')
    const [, key, val] = selector.match(/\[(.+?)="(.+?)"\]/)
    el.setAttribute(key, val)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

// Met à jour titre, description et balises sociales pour chaque page.
export default function Seo({ title, description, path = '/' }) {
  const { t, i18n } = useTranslation()
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : t('seo.defaultTitle', { name: site.name })
    document.title = fullTitle
    if (description) {
      setMeta('meta[name="description"]', 'content', description)
      setMeta('meta[property="og:description"]', 'content', description)
    }
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    if (SITE_URL) {
      setMeta('link[rel="canonical"]', 'href', `${SITE_URL}${path}`)
      setMeta('meta[property="og:url"]', 'content', `${SITE_URL}${path}`)
    }
  }, [title, description, path, i18n.language])
  return null
}