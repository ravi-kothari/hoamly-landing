import { LandingNav } from '@/components/landing/nav'
import { LandingHero } from '@/components/landing/hero'
import { LandingFooter } from '@/components/landing/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hoamly — HOA management built for this decade.',
  description:
    'Built for HOAs tired of paying enterprise prices for software that looks like 2009. Request early access.',
  openGraph: {
    title: 'Hoamly — HOA management built for this decade.',
    description:
      'Built for HOAs tired of paying enterprise prices for software that looks like 2009.',
    url: 'https://hoamly.ai',
    siteName: 'Hoamly',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hoamly — HOA management built for this decade.',
    description:
      'Built for HOAs tired of paying enterprise prices for software that looks like 2009.',
    site: '@hoamly',
  },
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] flex flex-col">
<LandingNav />
      <main className="flex-1">
        <LandingHero />
      </main>
      <LandingFooter />
    </div>
  )
}
