import { SITE } from '@/content/content'

export default function CTABanner() {
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
      <div className="max-w-6xl mx-auto px-8" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-xl fu">
          <p
            className="mb-3"
            style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--acc-m)' }}
          >
            Book now
          </p>
          <h2
            className="text-[34px] sm:text-[42px] font-light tracking-tight mb-5"
            style={{ color: 'rgba(255,255,255,.92)' }}
          >
            Ready to book?
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,.65)', lineHeight: 1.75, marginBottom: 32 }}>
            Join hundreds of Toronto homeowners who trust Core Cleaning Services. Book in minutes — we handle the rest.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#pricing" className="btn-p">
              Calculate Price
            </a>
            <a
              href={SITE.booking}
              target="_blank"
              rel="noopener"
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
              Book Online
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
