import './App.css'
import { TypographySection } from './components/TypographySection'
import { ColorPaletteSection } from './components/ColorPaletteSection'
import { Button } from './components/ui/Button'
import { Input, InputWithButton } from './components/ui/Input'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-10">
        <header className="flex items-baseline justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
              Design System
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-50">
              Foundations
            </h1>
          </div>
          <Button variant="outline" size="sm">
            Primary action
          </Button>
        </header>

        <section className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
          <TypographySection />
          <ColorPaletteSection />
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-sm">
          <header className="mb-6">
            <h2 className="text-sm font-semibold tracking-tight text-slate-50">
              Input
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              Email subscription and width input (from shadcn-style design).
            </p>
          </header>
          <div className="flex flex-col gap-6">
            <div className="rounded-xl bg-slate-800/50 p-4">
              <InputWithButton
                label="Email"
                placeholder="Email"
                helperText="Enter your email address"
                onButtonClick={() => {}}
              />
            </div>
            <div className="rounded-xl bg-slate-800/50 p-4">
              <InputWithButton
                label="Email"
                placeholder="Email"
                helperText="Enter your email address"
                size="small"
                onButtonClick={() => {}}
              />
            </div>
            <div className="rounded-xl bg-slate-800/50 p-4">
              <Input
                label="Width"
                placeholder="Add value"
                labelPosition="left"
                size="small"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
