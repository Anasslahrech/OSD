import Seo from '../components/Seo'
import PageShell from './PageShell'
import { site } from '../data/site'
import { openCookieSettings } from '../lib/consent'

export default function Privacy() {
  return (
    <>
      <Seo
        title="Politique de confidentialité"
        description={`Comment ${site.name} protège vos données personnelles (loi 09-08).`}
        path="/confidentialite"
      />
      <PageShell eyebrow="Données personnelles" title="Politique de confidentialité" narrow>
        <div className="space-y-10 leading-relaxed text-charcoal/80">
          <section>
            <h2 className="mb-3 font-display text-3xl text-charcoal">Responsable du traitement</h2>
            <p>
              {site.name}, joignable à {site.email}. Cette politique est établie conformément à la loi marocaine
              n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à
              caractère personnel.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-3xl text-charcoal">Données collectées</h2>
            <p>
              Via le formulaire de devis : nom, téléphone, e-mail, ville, type de projet, budget, description des
              travaux et, si vous le souhaitez, une pièce jointe. Ces informations sont fournies volontairement par vos
              soins.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-3xl text-charcoal">Finalités</h2>
            <p>
              Vos données servent uniquement à répondre à votre demande, établir un devis et vous recontacter à ce
              sujet. Elles ne sont ni vendues ni cédées à des tiers à des fins commerciales.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-3xl text-charcoal">Durée de conservation</h2>
            <p>
              Les demandes de devis sont conservées le temps nécessaire au traitement de votre projet, puis supprimées
              au plus tard 3 ans après le dernier échange.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-3xl text-charcoal">Cookies et mesure d'audience</h2>
            <p>
              Avec votre accord, nous pouvons utiliser des outils de mesure d'audience (Google Analytics, Meta Pixel)
              pour comprendre l'usage du site. Vous pouvez accepter ou refuser, et modifier votre choix à tout moment.
            </p>
            <button onClick={openCookieSettings} className="eyebrow mt-4 rounded-full border border-charcoal px-6 py-3 transition hover:bg-charcoal hover:text-bone">
              Modifier mon choix
            </button>
          </section>

          <section>
            <h2 className="mb-3 font-display text-3xl text-charcoal">Vos droits</h2>
            <p>
              Conformément à la loi 09-08, vous disposez d'un droit d'accès, de rectification et d'opposition sur vos
              données. Pour l'exercer, écrivez-nous à {site.email}. Vous pouvez également vous adresser à la Commission
              Nationale de contrôle de la protection des Données à caractère Personnel (CNDP).
            </p>
          </section>
        </div>
      </PageShell>
    </>
  )
}
