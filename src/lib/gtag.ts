export const GA_ID = 'AW-17772848067'

export const CONV_BOOK     = 'p3aLCK-4nbccEMPH4JpC'
export const CONV_WHATSAPP = 'absQCNymtLccEMPH4JpC'
export const CONV_QUOTE    = 'ryArCL2otLccEMPH4JpC'

export function trackConversion(label: string, url?: string) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', 'conversion', {
    send_to: `${GA_ID}/${label}`,
    event_callback: () => { if (url) window.location.href = url },
  })
}
