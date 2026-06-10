'use client'
import { useEffect, useRef, useState } from 'react'

const CLIENT_HUB_ID = 'ef64eda2-0407-4230-9fbb-acb064aec427-2110113'
const FORM_URL = 'https://clienthub.getjobber.com/client_hubs/ef64eda2-0407-4230-9fbb-acb064aec427/public/work_request/embedded_work_request_form?form_id=2110113'
const CSS_URL = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css'
const SCRIPT_URL = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js'

export default function JobberEmbed() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return

    let link: HTMLLinkElement | null = null
    if (!document.querySelector(`link[href="${CSS_URL}"]`)) {
      link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = CSS_URL
      document.head.appendChild(link)
    }

    const script = document.createElement('script')
    script.src = SCRIPT_URL
    script.async = true
    script.setAttribute('clienthub_id', CLIENT_HUB_ID)
    script.setAttribute('form_url', FORM_URL)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
      if (link) document.head.removeChild(link)
    }
  }, [visible])

  return <div ref={containerRef} id={CLIENT_HUB_ID} />
}
