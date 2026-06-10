'use client'
import { LANDING } from '@/content/content'
import { trackConversion, CONV_BOOK } from '@/lib/gtag'

export default function LandingFinalCTA() {
  return (
    <section
      className="py-20 sm:py-28"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg,rgba(20,38,56,.92),rgba(32,58,84,.88),rgba(20,38,56,.92))',
        backgroundColor: '#16293A',
      }}
    >
      <div className="max-w-6xl mx-auto px-8" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div className="fu" style={{ maxWidth: 560, margin: '0 auto' }}>
          <p
            className="mb-3"
            style={{
              display: 'inline-block',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '.06em',
              color: 'var(--ink-900)',
              background: 'var(--acc-m)',
              borderRadius: 99,
              padding: '6px 16px',
            }}
          >
            {LANDING.offerBadge}
          </p>
          <h2
            className="text-[34px] sm:text-[42px] font-light tracking-tight mb-8"
            style={{ color: 'rgba(255,255,255,.92)', marginTop: 16 }}
          >
            {LANDING.finalCta.title}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="#pricing"
              className="btn-p"
              style={{ fontSize: 16, fontWeight: 700, padding: '17px 34px', boxShadow: '0 6px 24px rgba(58,130,180,.4)' }}
            >
              {LANDING.finalCta.ctaPrimary}
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
              {LANDING.finalCta.ctaSecondary}
            </a>
          </div>
          <p style={{ marginTop: 18, fontSize: 12, color: 'rgba(255,255,255,.45)' }}>
            {LANDING.finalCta.urgencyLine}
          </p>
        </div>
      </div>
    </section>
  )
}
