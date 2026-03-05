const textSamples = [
  {
    label: 'Display / 01',
    className: 'text-4xl md:text-5xl font-semibold tracking-tight',
    example: 'The quick brown fox jumps',
    meta: 'SemiBold · 40–48px · -1% tracking',
  },
  {
    label: 'Headline / 01',
    className: 'text-3xl font-semibold tracking-tight',
    example: 'The quick brown fox jumps',
    meta: 'SemiBold · 32px · -1% tracking',
  },
  {
    label: 'Title / 01',
    className: 'text-xl font-semibold tracking-tight',
    example: 'The quick brown fox jumps',
    meta: 'SemiBold · 20px · -1% tracking',
  },
  {
    label: 'Body / 01',
    className: 'text-sm leading-6 text-slate-300',
    example: 'The quick brown fox jumps over the lazy dog.',
    meta: 'Regular · 14px · 0% tracking',
  },
  {
    label: 'Label / 01',
    className: 'text-xs font-medium tracking-[0.08em] uppercase text-slate-400',
    example: 'Label text',
    meta: 'Medium · 12px · +8% tracking',
  },
]

export function TypographySection() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
      <header className="mb-4 flex items-baseline justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold tracking-tight text-slate-50">
            Typography
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Core text styles used across the interface.
          </p>
        </div>
        <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-400">
          SF Pro / System
        </span>
      </header>

      <div className="space-y-4">
        {textSamples.map((item) => (
          <div
            key={item.label}
            className="flex flex-col gap-1 rounded-xl border border-slate-800/70 bg-slate-900/60 px-3.5 py-3"
          >
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                {item.label}
              </p>
              <p className="text-[11px] text-slate-500">{item.meta}</p>
            </div>
            <p className={item.className}>{item.example}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

