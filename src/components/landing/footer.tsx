export function LandingFooter() {
  return (
    <footer className="border-t border-white/5 px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs text-neutral-600">© 2026 Hoamly</p>
      <a
        href="mailto:hello@hoamly.ai"
        className="text-xs text-neutral-500 hover:text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#0D0D0D] rounded-sm"
      >
        hello@hoamly.ai
      </a>
    </footer>
  )
}
