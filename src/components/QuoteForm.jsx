import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'
import { CheckCircle2, Clock, Loader2, Mail, MapPin, Paperclip, Phone } from 'lucide-react'
import { projectTypes, site } from '../data/site'
import { tList } from '../lib/i18nHelpers'

// Configuration EmailJS : créer un fichier .env à la racine (voir .env.example)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const MAX_FILE = 2 * 1024 * 1024 // 2 Mo
const ALLOWED = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf']

const BUDGETS = ['Moins de 200 000 DH', '200 000 – 500 000 DH', '500 000 – 1 000 000 DH', 'Plus de 1 000 000 DH']

const empty = { name: '', phone: '', email: '', type: '', city: '', budget: '', message: '', website: '', consent: false }

const field =
  'w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3.5 text-charcoal outline-none transition focus:border-bronze focus:ring-2 focus:ring-bronze/20'

export default function QuoteForm() {
  const { t } = useTranslation()
  const typeLabels = tList(t, 'form.types', projectTypes)
  const budgetLabels = tList(t, 'form.budgets', BUDGETS)
  const formRef = useRef(null)
  const [form, setForm] = useState(empty)
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errors, setErrors] = useState({})

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onFile = (e) => {
    const f = e.target.files?.[0] || null
    if (f && (f.size > MAX_FILE || !ALLOWED.includes(f.type))) {
      setErrors((er) => ({ ...er, file: 'form.errors.file' }))
      e.target.value = ''
      setFile(null)
      return
    }
    setErrors((er) => ({ ...er, file: undefined }))
    setFile(f)
  }

  const validate = () => {
    const e = {}
    if (form.name.trim().length < 2) e.name = 'form.errors.name'
    if (!/^(\+212|0)[5-7]\d{8}$/.test(form.phone.replace(/[\s.-]/g, ''))) e.phone = 'form.errors.phone'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'form.errors.email'
    if (!form.type) e.type = 'form.errors.type'
    if (form.city.trim().length < 2) e.city = 'form.errors.city'
    if (form.message.trim().length < 15) e.message = 'form.errors.message'
    if (!form.consent) e.consent = 'form.errors.consent'
    setErrors((prev) => ({ file: prev.file, ...e }))
    return Object.keys(e).length === 0 && !errors.file
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (form.website) return // honeypot anti-spam
    if (!validate()) return
    setStatus('sending')

    // Sans configuration EmailJS : ouvre le client mail avec le message pré-rempli (sans pièce jointe)
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      const body = encodeURIComponent(
        `Nom : ${form.name}\nTéléphone : ${form.phone}\nE-mail : ${form.email}\nProjet : ${form.type}\nVille : ${form.city}\nBudget : ${form.budget || 'non précisé'}\n\n${form.message}`
      )
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Demande de devis')}&body=${body}`
      setStatus('sent')
      return
    }

    try {
      // sendForm envoie les champs nommés du formulaire, y compris la pièce jointe "attachment"
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      setStatus('sent')
      setForm(empty)
      setFile(null)
    } catch (err) {
      console.error('EmailJS error:', err?.status, err?.text)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-bone px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="eyebrow mb-4 text-accent">{t('form.eyebrow')}</p>
          <h2 className="mb-8 font-display text-5xl leading-none tracking-tight md:text-6xl rtl:leading-tight">
            {t('form.heading')}
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-charcoal/70">{t('form.intro')}</p>

          <ul className="space-y-5">
            <li className="flex items-center gap-4">
              <Phone className="text-accent" size={20} />
              <a href={`tel:${site.phoneRaw}`} dir="ltr" className="hover:text-accent">{site.phone}</a>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="text-accent" size={20} />
              <a href={`mailto:${site.email}`} dir="ltr" className="hover:text-accent">{site.email}</a>
            </li>
            <li className="flex items-center gap-4">
              <MapPin className="text-accent" size={20} /> {t('form.address')}
            </li>
            <li className="flex items-center gap-4">
              <Clock className="text-accent" size={20} /> {t('form.hours')}
            </li>
          </ul>

                    <div className="mt-10 aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
            <iframe
              title={t('form.mapTitle', { query: site.address })}
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=17&hl=fr&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
          <a
            href={site.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            <MapPin size={16} /> {t('form.openMap')}
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={onSubmit}
          noValidate
          className="relative rounded-2xl bg-sand/60 p-6 md:p-10 lg:col-span-3"
        >
          {status === 'sent' ? (
            <div className="flex flex-col items-center py-16 text-center">
              <CheckCircle2 className="mb-5 text-accent" size={56} strokeWidth={1.3} />
              <h3 className="mb-3 font-display text-4xl">{t('form.sentTitle')}</h3>
              <p className="max-w-sm text-charcoal/70">{t('form.sentText')}</p>
              <button type="button" onClick={() => setStatus('idle')} className="eyebrow mt-8 text-accent">
                {t('form.sentAgain')}
              </button>
            </div>
          ) : (
            <>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label={t('form.name')} error={errors.name}>
                  <input name="from_name" className={field} value={form.name} onChange={set('name')} autoComplete="name" />
                </Field>
                <Field label={t('form.phone')} error={errors.phone}>
                  <input name="phone" className={field} value={form.phone} onChange={set('phone')} type="tel" dir="ltr" autoComplete="tel" placeholder="06 00 00 00 00" />
                </Field>
                <Field label={t('form.email')} error={errors.email}>
                  <input name="reply_to" className={field} value={form.email} onChange={set('email')} type="email" dir="ltr" autoComplete="email" />
                </Field>
                <Field label={t('form.city')} error={errors.city}>
                  <input name="city" className={field} value={form.city} onChange={set('city')} placeholder={t('form.cityPlaceholder')} />
                </Field>
                <Field label={t('form.type')} error={errors.type}>
                  <select name="project_type" className={field} value={form.type} onChange={set('type')}>
                    <option value="">{t('form.select')}</option>
                    {projectTypes.map((type, i) => (
                      <option key={type} value={type}>
                        {typeLabels[i] || type}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label={t('form.budget')}>
                  <select name="budget" className={field} value={form.budget} onChange={set('budget')}>
                    <option value="">{t('form.budgetNone')}</option>
                    {BUDGETS.map((b, i) => (
                      <option key={b} value={b}>
                        {budgetLabels[i] || b}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <Field label={t('form.message')} error={errors.message}>
                  <textarea name="message" className={field} rows={5} value={form.message} onChange={set('message')} />
                </Field>
              </div>

              <div className="mt-5">
                <Field plain label={t('form.attachment')} error={errors.file}>
                  <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-charcoal/30 bg-white px-4 py-3.5 text-charcoal/70 transition hover:border-bronze">
                    <Paperclip size={18} className="shrink-0 text-accent" />
                    <span className="truncate">{file ? file.name : t('form.attachmentChoose')}</span>
                    <input
                      name="attachment"
                      type="file"
                      accept=".jpg,.jpeg,.png,.webp,.pdf"
                      onChange={onFile}
                      className="sr-only"
                    />
                  </label>
                </Field>
              </div>

              {/* Honeypot : invisible pour les humains */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={set('website')}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

              <div className="mt-6">
                <label className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/80">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                    className="mt-1 h-5 w-5 shrink-0 accent-[#e3561a]"
                  />
                  <span>
                    {t('form.consentBefore')}{' '}
                    <Link to="/confidentialite" className="underline hover:text-accent">
                      {t('form.consentLink')}
                    </Link>{' '}
                    {t('form.consentAfter')}
                  </span>
                </label>
                {errors.consent && <span className="mt-1.5 block text-sm text-red-700">{t(errors.consent)}</span>}
              </div>

              {status === 'error' && (
                <p className="mt-5 rounded-lg bg-red-100 px-4 py-3 text-sm text-red-800">
                  {t('form.sendError', { email: site.email })}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="eyebrow mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-charcoal px-8 py-4 text-bone transition hover:bg-bronze disabled:opacity-60 md:w-auto"
              >
                {status === 'sending' && <Loader2 className="animate-spin" size={16} />}
                {t('form.submit')}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

function Field({ label, error, plain, children }) {
  const { t } = useTranslation()
  const Wrapper = plain ? 'div' : 'label'
  return (
    <Wrapper className="block">
      <span className="mb-2 block text-sm font-medium text-charcoal/80">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-sm text-red-700">{t(error)}</span>}
    </Wrapper>
  )
}