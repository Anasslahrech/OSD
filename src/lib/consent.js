// Gestion du consentement aux cookies (loi 09-08).
// Les outils de suivi (Google Analytics, Meta Pixel) ne se chargent qu'après acceptation
// et seulement si leurs identifiants sont renseignés dans le fichier .env.
// Si le visiteur refuse (ou change d'avis), les cookies de suivi sont supprimés et la page est rechargée.
const KEY = 'osd-cookie-consent'
const GA_ID = import.meta.env.VITE_GA_ID
const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID

const TRACKER_COOKIES = ['_ga', '_gid', '_gat', '_fbp', '_fbc', '_fr']

let loaded = false

export const getConsent = () => {
  try {
    return localStorage.getItem(KEY)
  } catch {
    return null
  }
}

export const hasTrackers = () => Boolean(GA_ID || PIXEL_ID)

function clearTrackerCookies() {
  const host = window.location.hostname
  const root = host.split('.').slice(-2).join('.')
  const domains = ['', `; domain=${host}`, `; domain=.${host}`, `; domain=.${root}`]
  document.cookie.split(';').forEach((c) => {
    const name = c.split('=')[0].trim()
    if (!TRACKER_COOKIES.some((p) => name === p || name.startsWith(`${p}_`))) return
    domains.forEach((d) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d}`
    })
  })
}

function loadTrackers() {
  if (loaded) return
  loaded = true

  if (GA_ID) {
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(s)
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA_ID, { anonymize_ip: true })
  }

  if (PIXEL_ID) {
    /* eslint-disable */
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = '2.0'
      n.queue = []
      t = b.createElement(e)
      t.async = !0
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
    /* eslint-enable */
    window.fbq('init', PIXEL_ID)
    window.fbq('track', 'PageView')
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(KEY, value)
  } catch {
    /* stockage indisponible */
  }

  if (value === 'granted') {
    loadTrackers()
  } else {
    clearTrackerCookies()
    // Les scripts déjà chargés ne peuvent pas être retirés à chaud : on recharge la page.
    if (loaded) {
      window.location.reload()
      return
    }
  }
  window.dispatchEvent(new Event('consent-change'))
}

export function initConsent() {
  if (getConsent() === 'granted') loadTrackers()
}

export const openCookieSettings = () => window.dispatchEvent(new Event('open-cookie-settings'))