'use client'
import { useState } from 'react'
import { FAQS, SITE } from '@/content/content'

export default function FAQ() {
  const [open, setOpen] = useState<number[]>(
    FAQS.map((f, i) => (f.defaultOpen ? i : -1)).filter((i) => i >= 0)
  )

  function toggle(i: number) {
    setOpen((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    )
  }

  return (
    <section id="faq" className="py-20 sm:py-28" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left */}
          <div className="lg:col-span-2 fu">
            <p className="slabel mb-3">FAQ</p>
            <h2
              className="text-[34px] sm:text-[42px] font-light tracking-tight mb-5"
              style={{ color: 'var(--ink-900)' }}
            >
              Common questions
            </h2>
            <p style={{ fontSize: 14, color: 'var(--ink-500)', lineHeight: 1.75, marginBottom: 32 }}>
              Can&apos;t find your answer? We respond quickly.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <a href={SITE.phoneHref} className="btn-t" style={{ width: 'fit-content' }}>
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="btn-t" style={{ width: 'fit-content' }}>
                {SITE.email}
              </a>
            </div>
          </div>

          {/* Right: accordion */}
          <div
            className="lg:col-span-3 fu d1 bg-white border rounded-xl overflow-hidden"
            style={{ borderColor: 'var(--ink-100)', boxShadow: '0 2px 12px rgba(58,130,180,.07)' }}
          >
            {FAQS.map((faq, i) => {
              const isOpen = open.includes(i)
              return (
                <div
                  key={faq.q}
                  className="faq-item"
                  style={i < FAQS.length - 1 ? { borderBottom: '1px solid var(--ink-100)' } : undefined}
                >
                  <button
                    onClick={() => toggle(i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '20px 24px',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink-900)', paddingRight: 32 }}>
                      {faq.q}
                    </span>
                    <span style={{ fontSize: 20, color: 'var(--acc)', flexShrink: 0 }}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div className={`faq-body${isOpen ? ' open' : ''}`}>
                    <p style={{ padding: '0 24px 20px', fontSize: 13, color: 'var(--ink-500)', lineHeight: 1.75 }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
