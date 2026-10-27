import { MessageCircle, Phone } from 'lucide-react'
import { site } from '../data/site'

export default function FloatingContact() {
  const msg = encodeURIComponent(`Bonjour ${site.name}, je souhaite un devis pour un projet.`)
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`tel:${site.phoneRaw}`}
        aria-label="Appeler"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-charcoal text-bone shadow-xl transition hover:bg-bronze md:hidden"
      >
        <Phone size={22} />
      </a>
      <a
        href={`https://wa.me/${site.whatsapp}?text=${msg}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Écrire sur WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl transition hover:scale-105"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  )
}
