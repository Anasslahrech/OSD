import Seo from '../components/Seo'
import PageShell from './PageShell'
import { legal, site } from '../data/site'

const todo = (v) => v || <span className="text-red-700">[à compléter]</span>

export default function Legal() {
  return (
    <>
      <Seo title="Mentions légales" description={`Mentions légales du site de ${site.name}.`} path="/mentions-legales" />
      <PageShell eyebrow="Informations légales" title="Mentions légales" narrow>
        <div className="space-y-10 leading-relaxed text-charcoal/80">
          <section>
            <h2 className="mb-3 font-display text-3xl text-charcoal">Éditeur du site</h2>
            <ul className="space-y-1">
              <li>Raison sociale : {todo(legal.companyName)}</li>
              <li>Forme juridique : {todo(legal.legalForm)}</li>
              <li>Capital : {todo(legal.capital)}</li>
              <li>ICE : {todo(legal.ice)}</li>
              <li>Registre du commerce : {todo(legal.rc)}</li>
              <li>Identifiant fiscal : {todo(legal.if)}</li>
              <li>Siège social : {todo(legal.address)}</li>
              <li>Téléphone : {site.phone}</li>
              <li>E-mail : {site.email}</li>
              <li>Directeur de la publication : {todo(legal.publicationDirector)}</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-display text-3xl text-charcoal">Hébergement</h2>
            <p>{legal.host}</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-3xl text-charcoal">Propriété intellectuelle</h2>
            <p>
              Les textes, photos, vidéos, logos et éléments graphiques de ce site appartiennent à {site.name} ou sont
              utilisés avec l'accord de leurs auteurs. Toute reproduction sans autorisation écrite est interdite.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-3xl text-charcoal">Responsabilité</h2>
            <p>
              {site.name} s'efforce de fournir des informations exactes et à jour, sans pouvoir garantir l'absence
              d'erreur. Les photos de réalisations sont présentées à titre d'illustration. Les devis font foi pour
              toute prestation.
            </p>
          </section>
        </div>
      </PageShell>
    </>
  )
}
