import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

interface EstimateBody {
  service: string
  beds?: number
  baths?: number
  property?: string
  sqft?: string
  condition?: string
  frequency?: string
  hours?: number
  addons: string[]
  price: string
}

function buildBody(d: EstimateBody): string {
  const lines: string[] = [`Service: ${d.service}`]
  if (d.beds !== undefined && d.baths !== undefined) lines.push(`Bedrooms: ${d.beds} · Bathrooms: ${d.baths}`)
  if (d.property) lines.push(`Property: ${d.property}`)
  if (d.sqft) lines.push(`Sq ft: ${d.sqft}`)
  if (d.condition) lines.push(`Condition: ${d.condition}`)
  if (d.frequency) lines.push(`Frequency: ${d.frequency}`)
  if (d.hours !== undefined) lines.push(`Hours: ${d.hours}`)
  lines.push(`Add-ons: ${d.addons.length ? d.addons.join(', ') : 'None'}`)
  lines.push(`Estimated price: $${d.price}`)
  return lines.join('\n')
}

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as EstimateBody
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Calculator <estimates@corecleaningservices.ca>',
      to: 'contact.corecleaning@gmail.com',
      subject: `Calculator → Booking click — $${data.price} — ${data.service}`,
      text: buildBody(data),
    })
  } catch {
    // never block the user — always respond 200
  }
  return NextResponse.json({ ok: true })
}
