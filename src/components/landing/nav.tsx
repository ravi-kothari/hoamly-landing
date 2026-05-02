export function LandingNav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/5 backdrop-blur-sm bg-[#0D0D0D]/80"
      aria-label="Main navigation"
    >
      <a href="/" className="font-serif italic text-2xl tracking-tight" aria-label="Hoamly home">
        <span className="text-indigo-400 brightness-110">HOA</span>
        <span className="text-white/90">mly</span>
      </a>
    </nav>
  )
}
