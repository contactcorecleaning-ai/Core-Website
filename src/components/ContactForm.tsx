'use client'
import { useState } from 'react'
import { SITE } from '@/content/content'

type SvcOpt  = 'Regular' | 'Deep clean' | 'Move-in/out' | 'Hourly' | 'Post-construction' | 'Commercial' | 'Other'
type PropOpt = 'Condo/Apt' | 'House' | 'Commercial'

const SVC_OPTS:  SvcOpt[]  = ['Regular','Deep clean','Move-in/out','Hourly','Post-construction','Commercial','Other']
const PROP_OPTS: PropOpt[] = ['Condo/Apt','House','Commercial']

export default function ContactForm() {
  const [name,  setName]  = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [qSvc,  setQSvc]  = useState<SvcOpt>('Regular')
  const [qProp, setQProp] = useState<PropOpt>('Condo/Apt')
  const [sqft,  setSqft]  = useState('')
  const [date,  setDate]  = useState('')
  const [notes, setNotes] = useState('')
  const [err,   setErr]   = useState(false)
  const [sent,  setSent]  = useState(false)

  function handleSubmit() {
    if (!name.trim() || !phone.trim() || !email.trim()) { setErr(true); return }
    setErr(false)
    const s = encodeURIComponent('Custom Quote — Core Cleaning Services')
    const b = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${qSvc}\nProperty: ${qProp}\nSq ft: ${sqft || 'N/A'}\nDate: ${date || 'Flexible'}\nNotes: ${notes || 'None'}`
    )
    window.location.href = `mailto:${SITE.email}?subject=${s}&body=${b}`
    setSent(true)
  }

  const fieldStyle: React.CSSProperties = {
    width: '100%',
    fontSize: 13,
    border: '1px solid var(--ink-100)',
    borderRadius: 6,
    padding: '10px 14px',
    color: 'var(--ink-900)',
    background: '#FAFCFF',
    fontFamily: 'Inter,sans-serif',
    transition: 'all .15s',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: '.12em',
    textTransform: 'uppercase',
    color: 'var(--acc)',
    display: 'block',
    marginBottom: 8,
  }

  return (
    <section id="quote" className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-2 fu">
            <p className="slabel mb-3">Contact</p>
            <h2
              className="text-[34px] sm:text-[42px] font-light tracking-tight mb-5"
              style={{ color: 'var(--ink-900)' }}
            >
              Get a custom quote
            </h2>
            <p style={{ fontSize: 14, color: 'var(--ink-500)', lineHeight: 1.75, marginBottom: 32 }}>
              For large homes, post-construction, commercial spaces, or anything unusual — we&apos;ll reply within 2 hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--acc)', marginBottom: 4 }}>Call or Text</p>
                <a href={SITE.phoneHref} style={{ fontSize: 14, color: 'var(--ink-700)', textDecoration: 'none' }}>{SITE.phone}</a>
              </div>
              <div>
                <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--acc)', marginBottom: 4 }}>WhatsApp</p>
                <a href={SITE.whatsapp} target="_blank" rel="noopener" style={{ fontSize: 14, color: 'var(--ink-700)', textDecoration: 'none' }}>Message us →</a>
              </div>
              <div>
                <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--acc)', marginBottom: 4 }}>Book Online</p>
                <a href={SITE.booking} target="_blank" rel="noopener" style={{ fontSize: 14, color: 'var(--ink-700)', textDecoration: 'none' }}>Client booking portal →</a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className="lg:col-span-3 fu d1 bg-white border rounded-xl overflow-hidden"
            style={{ borderColor: 'var(--ink-100)', boxShadow: '0 4px 24px rgba(58,130,180,.09)' }}
          >
            {sent ? (
              <div style={{ padding: '48px 32px', textAlign: 'center' }}>
                <p style={{ fontSize: 22, fontWeight: 300, color: 'var(--ink-900)', marginBottom: 12 }}>Request sent.</p>
                <p style={{ fontSize: 14, color: 'var(--ink-500)', lineHeight: 1.75 }}>
                  We&apos;ll get back to you within 2 hours. You can also reach us at{' '}
                  <a href={SITE.phoneHref} style={{ color: 'var(--acc)', textDecoration: 'none' }}>{SITE.phone}</a>.
                </p>
              </div>
            ) : (
              <div style={{ padding: '28px 32px 32px' }}>
                {/* Name + Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={labelStyle}>Name *</label>
                    <input type="text" placeholder="Jane Smith" className="field" style={fieldStyle} value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone *</label>
                    <input type="tel" placeholder="(416) 000-0000" className="field" style={fieldStyle} value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                </div>

                {/* Email */}
                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>Email *</label>
                  <input type="email" placeholder="jane@email.com" className="field" style={fieldStyle} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                {/* Service type */}
                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>Service type</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {SVC_OPTS.map((s) => (
                      <button key={s} type="button" className={`co${qSvc === s ? ' on' : ''}`} onClick={() => setQSvc(s)}>{s}</button>
                    ))}
                  </div>
                </div>

                {/* Property type */}
                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>Property type</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {PROP_OPTS.map((p) => (
                      <button key={p} type="button" className={`co${qProp === p ? ' on' : ''}`} onClick={() => setQProp(p)}>{p}</button>
                    ))}
                  </div>
                </div>

                {/* Sqft + Date */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={labelStyle}>Square footage</label>
                    <input type="text" placeholder="e.g. 2,800 sq ft" className="field" style={fieldStyle} value={sqft} onChange={(e) => setSqft(e.target.value)} />
                  </div>
                  <div>
                    <label style={labelStyle}>Preferred date</label>
                    <input type="date" className="field" style={fieldStyle} value={date} onChange={(e) => setDate(e.target.value)} />
                  </div>
                </div>

                {/* Notes */}
                <div style={{ marginBottom: 24 }}>
                  <label style={labelStyle}>Notes</label>
                  <textarea
                    placeholder="Pets, specific rooms, special requests..."
                    className="field"
                    rows={3}
                    style={{ ...fieldStyle, resize: 'vertical' }}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                {err && (
                  <p style={{ fontSize: 12, color: '#f87171', marginBottom: 12 }}>
                    Please fill in your name, phone, and email to continue.
                  </p>
                )}

                <a
                  href={SITE.booking}
                  target="_blank"
                  rel="noopener"
                  className="btn-p"
                  style={{ display: 'block', textAlign: 'center', marginBottom: 12 }}
                >
                  Book online now
                </a>
                <button
                  onClick={handleSubmit}
                  style={{
                    display: 'block',
                    width: '100%',
                    background: 'transparent',
                    border: '1.5px solid var(--acc-m)',
                    color: 'var(--ink-700)',
                    fontSize: 13,
                    fontWeight: 500,
                    padding: 12,
                    borderRadius: 6,
                    cursor: 'pointer',
                    fontFamily: 'Inter,sans-serif',
                  }}
                >
                  Send Quote Request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
