// --- Lightweight UI primitives ---
export function Card({ className = '', children }) {
  return <div className={`rounded-2xl border shadow-sm bg-white ${className}`}>{children}</div>
}

export function CardContent({ className = '', children }) {
  return <div className={`p-4 ${className}`}>{children}</div>
}

export function Button({ variant='default', asChild=false, className='', children, ...props }) {
  const base = variant === 'outline'
    ? 'border border-blue-600 bg-white text-blue-600 hover:bg-blue-50'
    : 'bg-blue-600 text-white hover:bg-blue-700'
  const el = (
    <button className={`px-4 py-2 rounded-xl text-sm transition ${base} ${className}`} {...props}>
      {children}
    </button>
  )
  if (asChild) return children
  return el
}

export function Badge({ children }) {
  return (
    <span className="text-xs rounded-full px-2 py-1 border border-slate-200 bg-slate-50 text-slate-800">{children}</span>
  )
}

export function Section({ id, label, children, accentClass = 'bg-gradient-to-b from-blue-600 to-blue-700' }) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
          {label}
        </h2>
        {children}
      </div>
    </section>
  )
}
