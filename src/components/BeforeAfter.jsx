import { useCallback, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function Photo({ src, label, tone }) {
  const { t } = useTranslation()
  const [failed, setFailed] = useState(false)
  if (failed || !src) {
    return (
      <div className={`flex h-full w-full items-center justify-center ${tone}`}>
        <span className="eyebrow text-white/60">{t('beforeAfter.photoMissing', { label })}</span>
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={t('beforeAfter.alt', { label })}
      draggable={false}
      onError={() => setFailed(true)}
      className="h-full w-full select-none object-cover"
    />
  )
}

export default function BeforeAfter({ before, after }) {
  const { t } = useTranslation()
  const ref = useRef(null)
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)

  const update = useCallback((clientX) => {
    const rect = ref.current.getBoundingClientRect()
    const p = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, p)))
  }, [])

  const onPointerDown = (e) => {
    dragging.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
    update(e.clientX)
  }
  const onPointerMove = (e) => dragging.current && update(e.clientX)
  const onPointerUp = () => (dragging.current = false)
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 4))
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 4))
  }

  return (
    <div
      ref={ref}
      dir="ltr"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-xl bg-charcoal"
      style={{ touchAction: 'pan-y' }}
    >
      <div className="absolute inset-0">
        <Photo src={after} label={t('beforeAfter.after').toLowerCase()} tone="bg-[#3d5584]" />
      </div>

      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Photo src={before} label={t('beforeAfter.before').toLowerCase()} tone="bg-[#5f7894]" />
      </div>

      <span className="eyebrow pointer-events-none absolute left-4 top-4 rounded-full bg-charcoal/80 px-3 py-1.5 text-bone">
        {t('beforeAfter.before')}
      </span>
      <span className="eyebrow pointer-events-none absolute right-4 top-4 rounded-full bg-bronze px-3 py-1.5 text-white">
        {t('beforeAfter.after')}
      </span>

      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white" style={{ left: `${pos}%` }}>
        <button
          role="slider"
          aria-label={t('beforeAfter.compare')}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={onKeyDown}
          className="pointer-events-auto absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-charcoal shadow-xl focus:outline-2 focus:outline-bronze"
        >
          <ChevronLeft size={16} />
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}