// Enveloppe commune aux pages intérieures (compense la barre de navigation fixe).
export default function PageShell({ eyebrow, title, children, narrow = false }) {
  return (
    <div className="bg-bone px-5 pb-24 pt-36 md:px-8 md:pb-32 md:pt-44">
      <div className={`mx-auto ${narrow ? 'max-w-3xl' : 'max-w-7xl'}`}>
        {eyebrow && <p className="eyebrow mb-4 text-accent">{eyebrow}</p>}
        <h1 className="mb-12 font-display text-5xl leading-none tracking-tight md:text-7xl">{title}</h1>
        {children}
      </div>
    </div>
  )
}
