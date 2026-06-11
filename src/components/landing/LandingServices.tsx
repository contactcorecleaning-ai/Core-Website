import { SERVICES, LANDING } from '@/content/content'

const RESIDENTIAL = [...SERVICES.slice(0, 3), LANDING.recurringService]

export default function LandingServices() {
  return (
    <section className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-8">
        <div style={{ marginBottom: 56 }}>
          <p className="slabel mb-3 fu">Services</p>
          <h2 className="text-[34px] sm:text-[42px] font-light tracking-tight fu d1" style={{ color: 'var(--ink-900)' }}>
            Residential cleaning, done right
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {RESIDENTIAL.map((s, i) => (
            <div
              key={s.num}
              className={`svc-card fu d${(i % 4) + 1}`}
              style={s.highlight ? { borderColor: 'var(--acc-m)' } : undefined}
            >
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
