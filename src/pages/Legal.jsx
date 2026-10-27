import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'
import PageShell from './PageShell'
import { legal, site } from '../data/site'

export default function Legal() {
  const { t } = useTranslation()
  const todo = (v) => v || <span className="text-red-700">{t('legal.todo')}</span>

  return (
    <>
      <Seo title={t('legal.seoTitle')} description={t('legal.seoDesc', { name: site.name })} path="/mentions-legales" />
      <PageShell eyebrow={t('legal.eyebrow')} title={t('legal.title')} narrow>
        <div className="space-y-10 leading-relaxed text-charcoal/80">
          <section>
            <h2 className="mb-3 font-display text-3xl text-charcoal">{t('legal.editor')}</h2>
            <ul className="space-y-1">
              <li>{t('legal.companyName')} : {todo(legal.companyName)}</li>
              <li>{t('legal.legalForm')} : {todo(legal.legalForm)}</li>
              <li>{t('legal.capital')} : {todo(legal.capital)}</li>
              <li>{t('legal.ice')} : {todo(legal.ice)}</li>
              <li>{t('legal.rc')} : {todo(legal.rc)}</li>
              <li>{t('legal.if')} : {todo(legal.if)}</li>
              <li>{t('legal.address')} : {todo(legal.address)}</li>
              <li>{t('legal.phone')} : <span dir="ltr">{site.phone}</span></li>
              <li>{t('legal.email')} : <span dir="ltr">{site.email}</span></li>
              <li>{t('legal.director')} : {todo(legal.publicationDirector)}</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-display text-3xl text-charcoal">{t('legal.hostingTitle')}</h2>
            <p>{legal.host}</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-3xl text-charcoal">{t('legal.ipTitle')}</h2>
            <p>{t('legal.ipText', { name: site.name })}</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-3xl text-charcoal">{t('legal.liabilityTitle')}</h2>
            <p>{t('legal.liabilityText', { name: site.name })}</p>
          </section>
        </div>
      </PageShell>
    </>
  )
}