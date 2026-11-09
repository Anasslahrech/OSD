import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'
import PageShell from './PageShell'
import { site } from '../data/site'
import { openCookieSettings } from '../lib/consent'
import { tList } from '../lib/i18nHelpers'

export default function Privacy() {
  const { t } = useTranslation()
  const vars = { name: site.name, email: site.email }
  const cookieList = tList(t, 'privacy.cookieList', [])
  const deleteHref = `mailto:${site.email}?subject=${encodeURIComponent(t('privacy.deleteSubject'))}&body=${encodeURIComponent(t('privacy.deleteBody'))}`
  const btn = 'eyebrow mt-4 inline-block rounded-full border border-charcoal px-6 py-3 transition hover:bg-charcoal hover:text-bone'

  return (
    <>
      <Seo title={t('privacy.seoTitle')} description={t('privacy.seoDesc', vars)} path="/confidentialite" />
      <PageShell eyebrow={t('privacy.eyebrow')} title={t('privacy.title')} narrow>
        <div className="space-y-10 leading-relaxed text-charcoal/80">
          <section>
            <h2 className="mb-3 font-display text-3xl text-charcoal">{t('privacy.controllerTitle')}</h2>
            <p>{t('privacy.controllerText', vars)}</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-3xl text-charcoal">{t('privacy.dataTitle')}</h2>
            <p>{t('privacy.dataText')}</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-3xl text-charcoal">{t('privacy.purposeTitle')}</h2>
            <p>{t('privacy.purposeText')}</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-3xl text-charcoal">{t('privacy.retentionTitle')}</h2>
            <p>{t('privacy.retentionText')}</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-3xl text-charcoal">{t('privacy.thirdTitle')}</h2>
            <p>{t('privacy.thirdText')}</p>
          </section>

          <section id="cookies" className="scroll-mt-24">
            <h2 className="mb-3 font-display text-3xl text-charcoal">{t('privacy.cookiesTitle')}</h2>
            <p>{t('privacy.cookiesText')}</p>
            {cookieList.length > 0 && (
              <ul className="mt-4 list-disc space-y-2 ps-6">
                {cookieList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            <button type="button" onClick={openCookieSettings} className={btn}>
              {t('privacy.cookiesButton')}
            </button>
          </section>

          <section>
            <h2 className="mb-3 font-display text-3xl text-charcoal">{t('privacy.rightsTitle')}</h2>
            <p>{t('privacy.rightsText', vars)}</p>
          </section>

          <section id="suppression" className="scroll-mt-24">
            <h2 className="mb-3 font-display text-3xl text-charcoal">{t('privacy.deleteTitle')}</h2>
            <p>{t('privacy.deleteText', vars)}</p>
            <a href={deleteHref} className={btn}>
              {t('privacy.deleteButton')}
            </a>
          </section>
        </div>
      </PageShell>
    </>
  )
}