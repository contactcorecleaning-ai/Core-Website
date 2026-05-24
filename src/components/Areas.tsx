import { AREAS, AREA_TABLE, SITE } from '@/content/content'

export default function Areas() {
  return (
    <section id="areas" className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="fu">
            <p className="slabel mb-3">Coverage</p>
            <h2 className="text-[34px] sm:text-[42px] font-light tracking-tight mb-5" style={{ color: 'var(--ink-900)' }}>
              Toronto and the entire GTA
            </h2>
            <p style={{ fontSize: 14, color: 'var(--ink-500)', lineHeight: 1.75, marginBottom: 32 }}>
              We cover all major Toronto neighbourhoods and surrounding GTA cities. Same-week availability in most areas.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
              {AREAS.map((area) => (
                <span
                  key={area}
                  style={{ border: '1px solid var(--ink-100)', background: '#fff', color: 'var(--ink-700)', fontSize: 12, fontWeight: 500, padding: '6px 14px', borderRadius: 4 }}
                >
                  {area}
                </span>
              ))}
            </div>
            <a href="#quote" className="btn-p">Check My Area</a>
          </div>

          {/* Right: table */}
          <div className="fu d1 bg-white border rounded-xl overflow-hidden" style={{ borderColor: 'var(--ink-100)', boxShadow: '0 2px 12px rgba(58,130,180,.07)' }}>
            <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--ink-100)' }}>
              <p className="slabel">Available by area</p>
            </div>
            {AREA_TABLE.map((row, i) => (
              <div
                key={row.city}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '14px 24px',
                  borderBottom: i < AREA_TABLE.length - 1 ? '1px solid var(--ink-100)' : undefined,
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink-900)' }}>{row.city}</span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: row.services === 'All services' ? 'var(--acc)' : 'var(--ink-300)',
                    background: row.services === 'All services' ? 'var(--acc-l)' : 'transparent',
                    padding: row.services === 'All services' ? '3px 10px' : undefined,
                    borderRadius: 4,
                  }}
                >
                  {row.services}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
