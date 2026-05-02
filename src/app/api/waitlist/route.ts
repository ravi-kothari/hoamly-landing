import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)

  if (!body?.email || typeof body.email !== 'string' || !body.email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000'

  const res = await fetch(`${apiUrl}/api/v1/waitlist`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: body.email }),
  }).catch(() => null)

  if (!res || !res.ok) {
    return NextResponse.json({ error: 'Failed to join waitlist' }, { status: 500 })
  }

  return NextResponse.json({ message: "You're on the list!" })
}
