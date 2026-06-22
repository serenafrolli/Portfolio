// --- Lightweight UI primitives ---
export function Card({ className = '', children }) {
  return <div className={`rounded-2xl border border-navy-100 shadow-sm bg-white lift ${className}`}>{children}</div>
}

export function CardContent({ className = '', children }) {
  return <div className={`p-4 ${className}`}>{children}</div>
}

export function Button({ variant='default', asChild=false, className='', children, ...props }) {
  const base = variant === 'outline'
    ? 'border border-navy-700 bg-transparent text-navy-700 hover:bg-navy-700 hover:text-paper'
    : 'bg-navy-800 text-paper hover:bg-navy-900'
  const el = (
    <button className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${base} ${className}`} {...props}>
      {children}
    </button>
  )
  if (asChild) return children
  return el
}

export function Badge({ children }) {
  return (
    <span className="tech-label rounded-full px-3 py-1 border border-navy-200 bg-navy-50 text-navy-700">{children}</span>
  )
}

export function Section({ id, label, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10 flex items-center gap-3 text-navy-900">
          <span className="inline-block w-10 h-[3px] rounded bg-accent" />
          {label}
        </h2>
        {children}
      </div>
    </section>
  )
}
