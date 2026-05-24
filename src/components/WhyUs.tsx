import { WHY_US } from '@/content/content'

export default function WhyUs() {
  return (
    <section
      id="whyus"
      className="py-20 sm:py-28"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg,rgba(20,38,56,.86),rgba(32,58,84,.80),rgba(20,38,56,.86))',
        }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,.05)' }} />
      <div
        style={{
          position: 'absolute',
          top: -160,
          left: -80,
          width: 520,
          height: 520,
          background: 'radial-gradient(circle,rgba(120,178,210,.08) 0%,transparent 70%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -160,
          right: -80,
          width: 480,
          height: 480,
          background: 'radial-gradient(circle,rgba(58,130,180,.06) 0%,transparent 70%)',
        }}
      />
      <div className="max-w-6xl mx-auto px-8" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: 56 }}>
          <p className="mb-3 fu" style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--acc-m)' }}>
            Standards
          </p>
          <h2
            className="text-[34px] sm:text-[42px] font-light tracking-tight max-w-xl fu d1"
            style={{ color: 'rgba(255,255,255,.92)' }}
          >
            We hold ourselves to a higher standard — because your home deserves it.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {WHY_US.map((item, i) => (
            <div key={item.title} className={`fu d${i + 1}`}>
              <div style={{ height: 1, background: 'rgba(255,255,255,.13)', marginBottom: 24 }} />
              <h4 style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,.88)', marginBottom: 10 }}>
                {item.title}
              </h4>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,.44)', lineHeight: 1.7 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
