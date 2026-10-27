import { site } from '../data/site'

// Logo OSD (repris de la charte graphique).
// tone="dark"  : à poser sur un fond sombre (bleu nuit) ; tone="light" : sur un fond clair.
export function LogoMark({ tone = 'dark', size = 34 }) {
  const shapes = tone === 'dark' ? '#e3561a' : '#24375f'
  return (
    <svg width={size} height={size * (272 / 253)} viewBox="0 0 253 272" aria-hidden="true">
      <path d="M0 164 L55 128 V244 H0 Z" fill={shapes} />
      <path d="M55 78 L176 0 V244 H121 V150 H55 Z" fill={shapes} />
      <path d="M198 114 L253 144 V244 H198 Z" fill={shapes} />
      <rect x="0" y="254" width="55" height="18" fill="#9fbacb" />
      <rect x="121" y="254" width="55" height="18" fill="#9fbacb" />
      <rect x="198" y="254" width="55" height="18" fill="#9fbacb" />
    </svg>
  )
}

export default function Brand({ className = '', tone = 'dark' }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark tone={tone} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-4xl font-bold leading-none tracking-tight text-bronze">
          {site.shortName}
        </span>
        <span className="mt-1 font-display text-[0.78rem] font-medium tracking-wide opacity-90">{site.name}</span>
      </span>
    </span>
  )
}
