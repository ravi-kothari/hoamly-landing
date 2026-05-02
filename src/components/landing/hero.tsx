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
      {/* Amber radial glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-3xl" />
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

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        <h1
          className="font-serif text-5xl md:text-7xl text-white leading-tight tracking-tight"
          aria-label="HOA management built for this decade. And the one after it."
        >
          HOA management built for this{' '}
          <s className="text-white/30" aria-hidden="true">decade</s>
          {'. '}
          And the one after it.
        </h1>

        <p className="text-lg text-neutral-500 max-w-xl mx-auto leading-relaxed">
          Built for HOAs tired of paying enterprise prices for software that looks like 2009.
        </p>

        <p className="text-base text-neutral-500">
          Your management company deserves better. So do your residents.
        </p>

        <p className="text-xs text-amber-400 tracking-[0.2em] uppercase">
          It&apos;s HOA. But make it homely.
        </p>

        {/* Keyword chips */}
        <div className="flex flex-wrap justify-center gap-2" aria-label="Key features">
          {CHIPS.map((chip) => (
            <span
              key={chip}
              className="text-xs border border-amber-500/40 text-amber-400/80 px-3 py-1 rounded-full"
            >
              {chip}
            </span>
          ))}
        </div>

        <WaitlistForm />

        <p className="text-xs text-neutral-600">No spam. No HOA fees.</p>
      </div>
    </section>
  )
}
