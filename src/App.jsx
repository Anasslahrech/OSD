import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'
import CookieBanner from './components/CookieBanner'
import ScrollManager from './components/ScrollManager'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import ProjectPage from './pages/ProjectPage'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Legal from './pages/Legal'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'
import { initConsent } from './lib/consent'
import useCanonical from './hooks/useCanonical'

export default function App() {
  const { t } = useTranslation()
  useCanonical()

  useEffect(() => {
    initConsent()
  }, [])

  return (
    <>
      {/* Lien d'évitement : visible uniquement au focus clavier */}
      <a
        href="#main"
        className="eyebrow sr-only focus:not-sr-only focus:fixed focus:start-3 focus:top-3 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-white"
      >
        {t('nav.skip')}
      </a>
      <ScrollManager />
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/realisations/:id" element={<ProjectPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/mentions-legales" element={<Legal />} />
          <Route path="/confidentialite" element={<Privacy />} />
          <Route path="/conditions-utilisation" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
      <CookieBanner />
    </>
  )
}