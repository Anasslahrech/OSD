import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Projects from '../components/Projects'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import QuoteForm from '../components/QuoteForm'

export default function Home() {
  return (
    <>
      <Seo
        description="Overall Style Designer construit, rénove et aménage appartements, villas, cabinets professionnels et locaux à Kénitra, Rabat et Salé. Projets avant/après et devis gratuit."
        path="/"
      />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Testimonials />
      <QuoteForm />
    </>
  )
}
