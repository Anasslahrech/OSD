import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Remonte en haut à chaque changement de page, ou défile vers l'ancre (#services…).
export default function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 60)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
