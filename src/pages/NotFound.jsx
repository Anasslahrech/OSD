import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PageShell from './PageShell'

export default function NotFound() {
  return (
    <>
      <Seo title="Page introuvable" description="Cette page n'existe pas." path="/404" />
      <PageShell eyebrow="Erreur 404" title="Page introuvable.">
        <p className="mb-8 text-lg text-charcoal/70">La page que vous cherchez n'existe pas ou a été déplacée.</p>
        <Link to="/" className="eyebrow inline-block rounded-full bg-charcoal px-8 py-4 text-bone transition hover:bg-bronze">
          Retour à l'accueil
        </Link>
      </PageShell>
    </>
  )
}
