const slateShades = [
  { name: '50', className: 'bg-slate-50', hex: '#f8fafc' },
  { name: '100', className: 'bg-slate-100', hex: '#f1f5f9' },
  { name: '200', className: 'bg-slate-200', hex: '#e2e8f0' },
  { name: '300', className: 'bg-slate-300', hex: '#cbd5e1' },
  { name: '400', className: 'bg-slate-400', hex: '#94a3b8' },
  { name: '500', className: 'bg-slate-500', hex: '#64748b' },
  { name: '600', className: 'bg-slate-600', hex: '#475569' },
  { name: '700', className: 'bg-slate-700', hex: '#334155' },
  { name: '800', className: 'bg-slate-800', hex: '#1e293b' },
  { name: '900', className: 'bg-slate-900', hex: '#0f172a' },
]

export function ColorPaletteSection() {
  return (
    <section className="rounded-2xl bg-slate-50 p-6 text-slate-900">
      <div className="flex items-center gap-4">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {slateShades.map((shade) => (
            <div key={shade.name} className="flex w-14 flex-col gap-2">
              <div className={`h-10 rounded-[3px] ${shade.className}`} />
              <div className="text-xs">
                <p className="font-medium text-slate-900">{shade.name}</p>
                <p className="text-slate-400">{shade.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

