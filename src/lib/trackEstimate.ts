export interface EstimatePayload {
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

export function slug(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}

export function trackEstimate(payload: EstimatePayload) {
  try {
    const body = JSON.stringify(payload)
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      navigator.sendBeacon('/api/track-estimate', new Blob([body], { type: 'application/json' }))
    } else {
      fetch('/api/track-estimate', { method: 'POST', body, keepalive: true, headers: { 'Content-Type': 'application/json' } })
    }
  } catch {
    // never block navigation
  }
}

export function withBookingParams(bookingUrl: string, utmContent: string): string {
  try {
    const url = new URL(bookingUrl)
    url.searchParams.set('utm_source', 'calculator')
    url.searchParams.set('utm_content', utmContent)
    return url.toString()
  } catch {
    return bookingUrl
  }
}
