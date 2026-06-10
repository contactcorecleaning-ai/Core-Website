import { LANDING } from '@/content/content'

export default function HowItWorks() {
  return (
    <section className="py-16" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid sm:grid-cols-3 gap-5">
          {LANDING.steps.map((step) => (
            <div key={step.num} className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <span
                style={{
                  flexShrink: 0,
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'var(--acc)',
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {step.num}
              </span>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink-900)', marginBottom: 4 }}>{step.title}</p>
                <p style={{ fontSize: 13, color: 'var(--ink-500)', lineHeight: 1.6 }}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
