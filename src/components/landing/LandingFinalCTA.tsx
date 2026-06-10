'use client'
import { SITE, LANDING } from '@/content/content'
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
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#pricing" className="btn-p">
              {LANDING.finalCta.ctaPrimary}
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
                fontSize: 13,
                fontWeight: 600,
                padding: '11px 22px',
                borderRadius: 6,
                textDecoration: 'none',
              }}
            >
              {LANDING.finalCta.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
