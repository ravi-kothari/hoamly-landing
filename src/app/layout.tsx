import type { Metadata } from 'next'
import { Geist, Fraunces } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hoamly.ai'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${fraunces.variable} font-sans bg-[#0D0D0D] antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
