'use client'
import { useEffect, useRef } from 'react'
import { useScrollFade } from '@/hooks/useScrollFade'
import { SITE } from '@/content/content'
import { trackConversion, CONV_BOOK } from '@/lib/gtag'

export default function Hero() {
  useScrollFade()
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => bgRef.current?.classList.add('active'), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="hero" className="hero-wrap">
      <div className="hero-img-bg" ref={bgRef} />
      <div className="hero-content">
        <div className="hero-card fu">
          <h1
            style={{
              fontSize: 'clamp(32px,4vw,52px)',
              fontWeight: 300,
              color: '#fff',
              lineHeight: 1.1,
              letterSpacing: '-.01em',
              marginBottom: 16,
            }}
          >
            Professional cleaning,
            <br />
            <span style={{ fontWeight: 300, fontStyle: 'normal', color: 'rgba(210,232,248,.9)' }}>
              done with precision.
            </span>
          </h1>

          <div style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
            <a href="#pricing" className="btn-p" style={{ fontSize: 14, padding: '12px 22px' }}>
              Get Instant Price
            </a>
            <a
              href={SITE.booking}
              target="_blank"
              rel="noopener"
              onClick={() => trackConversion(CONV_BOOK)}
              style={{
                display: 'inline-block',
                border: '1.5px solid rgba(255,255,255,.35)',
                color: '#fff',
                fontSize: 14,
                fontWeight: 500,
                padding: '11px 22px',
                borderRadius: 6,
                textDecoration: 'none',
              }}
            >
              Book Online
            </a>
          </div>

          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {['5.0 Google Rating', 'Flat-rate pricing', 'No hidden fees'].map((badge) => (
              <span
                key={badge}
                style={{
                  fontSize: 11,
                  color: 'rgba(255,255,255,.55)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: 'var(--acc-m)',
                    flexShrink: 0,
                  }}
                />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
