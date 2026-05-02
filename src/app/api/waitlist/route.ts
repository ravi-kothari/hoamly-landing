import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)

  if (!body?.email || typeof body.email !== 'string' || !body.email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
  }

  const siteUrl = process.env.URL ?? 'https://hoamly.ai'

  const formData = new URLSearchParams({
    'form-name': 'waitlist',
    email: body.email,
  })

  try {
    const res = await fetch(siteUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
      redirect: 'follow',
    })

    if (!res.ok) {
      console.error(`Netlify Forms returned ${res.status} for ${siteUrl}`)
      return NextResponse.json({ error: 'Failed to join waitlist' }, { status: 500 })
    }

    return NextResponse.json({ message: "You're on the list!" })
  } catch (err) {
    console.error('Waitlist submission error:', err)
    return NextResponse.json({ error: 'Failed to join waitlist' }, { status: 500 })
  }
}
