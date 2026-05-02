import { WaitlistForm } from './waitlist-form'

const CHIPS = [
  'AI-native',
  'Real-time Payments',
  'Resident Portal',
  'Board Meetings',
  'No legacy baggage',
] as const

export function LandingHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-12">
      {/* Indigo radial glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-[700px] h-[700px] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto space-y-8">
        <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.1] tracking-tight text-balance">
          HOA management built for this{' '}
          <span className="text-white/25 italic">decade</span>
          {'. '}
          And the one after it.
        </h1>

        <div className="space-y-2 max-w-2xl mx-auto">
          <p className="text-lg text-neutral-400 leading-relaxed">
            Built for HOAs tired of paying enterprise prices for software that looks like 2009.
          </p>
          <p className="text-base text-neutral-500">
            Your management company deserves better. So do your residents.
          </p>
        </div>

        {/* CTA card */}
        <div className="relative rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm px-8 py-8 space-y-6 shadow-[0_0_60px_-10px_rgba(99,102,241,0.15)]">
          <p className="text-xs text-indigo-400 tracking-[0.2em] uppercase">
            It&apos;s HOA. But make it homely.
          </p>

          {/* Keyword chips */}
          <div className="flex flex-wrap justify-center gap-3" aria-label="Key features">
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className="text-xs border border-indigo-400/30 text-indigo-300/70 px-4 py-1.5 rounded-full tracking-wide"
              >
                {chip}
              </span>
            ))}
          </div>

          <WaitlistForm />

          <p className="text-xs text-neutral-600">No spam. No HOA fees.</p>
        </div>
      </div>
    </section>
  )
}
