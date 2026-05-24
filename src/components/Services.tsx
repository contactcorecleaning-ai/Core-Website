import { SERVICES } from '@/content/content'

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-6xl mx-auto px-8">
        <div style={{ marginBottom: 56 }}>
          <p className="slabel mb-3 fu">Services</p>
          <h2
            className="text-[34px] sm:text-[42px] font-light tracking-tight fu d1"
            style={{ color: 'var(--ink-900)' }}
          >
            What we offer
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={s.num}
              className={`svc-card fu d${(i % 3) + 1}`}
              style={s.highlight ? { borderColor: 'var(--acc-m)' } : undefined}
            >
              <p
                style={{
                  color: 'var(--acc-m)',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  marginBottom: 16,
                }}
              >
                {s.num}
              </p>
              <h3 style={{ fontSize: 15, fontWeight: 500, color: 'var(--ink-900)', marginBottom: 10 }}>
                {s.name}
              </h3>
              <p style={{ fontSize: 13, color: 'var(--ink-500)', lineHeight: 1.7, marginBottom: 20 }}>
                {s.description}
              </p>
              <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-900)' }}>{s.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
