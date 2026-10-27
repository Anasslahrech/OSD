import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Projects from '../components/Projects'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import QuoteForm from '../components/QuoteForm'

export default function Home() {
  const { t } = useTranslation()
  return (
    <>
      <Seo description={t('seo.homeDescription')} path="/" />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Testimonials />
      <QuoteForm />
    </>
  )
}