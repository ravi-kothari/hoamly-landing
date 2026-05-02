'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p className="text-indigo-400 text-sm py-3" role="status">
        You&apos;re on the list. We&apos;ll be in touch.
      </p>
    )
  }

  return (
    <form
      id="waitlist"
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 max-w-md mx-auto"
      aria-label="Early access request form"
    >
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          aria-label="Email address"
          className="flex-1 bg-white/5 border border-white/10 focus:border-indigo-500 rounded-lg px-4 py-2.5 text-white placeholder:text-neutral-600 outline-none transition-colors text-sm"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-5 py-2.5 rounded-lg transition-colors text-sm disabled:opacity-60 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#0D0D0D]"
        >
          {status === 'loading' ? 'Sending…' : 'Request early access'}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-red-400 text-xs text-center" role="alert">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  )
}
