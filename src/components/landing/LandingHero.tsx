'use client'
import { useEffect, useRef } from 'react'
import { useScrollFade } from '@/hooks/useScrollFade'
import { LANDING } from '@/content/content'
import { trackConversion, CONV_BOOK } from '@/lib/gtag'

export default function LandingHero() {
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
          <p
            style={{
              display: 'inline-block',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '.06em',
              color: 'var(--ink-900)',
              background: 'var(--acc-m)',
              borderRadius: 99,
              padding: '6px 16px',
              marginBottom: 16,
            }}
          >
            {LANDING.offerBadge}
          </p>

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
            {LANDING.hero.headline}
          </h1>

          <p style={{ fontSize: 15, color: 'rgba(255,255,255,.8)', lineHeight: 1.6, marginBottom: 24, maxWidth: 460 }}>
            {LANDING.hero.subheadline}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
            <a
              href="#pricing"
              className="btn-p"
              style={{ fontSize: 16, fontWeight: 700, padding: '17px 34px', boxShadow: '0 6px 24px rgba(58,130,180,.4)' }}
            >
              {LANDING.hero.ctaPrimary}
            </a>
            <a
              href="#book"
              onClick={() => trackConversion(CONV_BOOK)}
              style={{
                display: 'inline-block',
                border: '1px solid rgba(255,255,255,.25)',
                color: 'rgba(255,255,255,.65)',
                fontSize: 13,
                fontWeight: 500,
                padding: '10px 20px',
                borderRadius: 6,
                textDecoration: 'none',
              }}
            >
              {LANDING.hero.ctaSecondary}
            </a>
          </div>

          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {LANDING.hero.trust.map((badge) => (
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
