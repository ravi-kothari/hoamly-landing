export function LandingNav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/5 backdrop-blur-sm bg-[#0D0D0D]/80"
      aria-label="Main navigation"
    >
      <a href="/" className="font-serif italic text-xl tracking-tight" aria-label="Hoamly home">
        <span className="text-amber-400">HOA</span>
        <span className="text-white">mly</span>
      </a>
      <a
        href="#waitlist"
        className="text-sm border border-amber-500/40 text-amber-400 px-4 py-2 rounded-lg hover:border-amber-400 hover:text-amber-300 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-[#0D0D0D]"
      >
        Request early access
      </a>
    </nav>
  )
}
