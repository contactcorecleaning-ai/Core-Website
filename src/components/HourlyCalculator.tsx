'use client'
import { SITE } from '@/content/content'

interface Props {
  hrs: number
  petH: boolean
  onAdjHrs: (delta: number) => void
  onPetH: (v: boolean) => void
}

export default function HourlyCalculator({ hrs, petH, onAdjHrs, onPetH }: Props) {
  const pet = petH ? 29 : 0
  const total = hrs * 80 + pet
  const per = `${hrs} hour${hrs > 1 ? 's' : ''} · 2-cleaner team`
  const breakdown = `Rate: $80/hr · 2 cleaners<br>Duration: ${hrs} hr${hrs > 1 ? 's' : ''} · Subtotal: $${hrs * 80}${pet ? '<br>Pet hair: +$29' : ''}<br>Delivery fee: confirmed at booking`

  return (
    <div>
      {/* Hours step */}
      <div className="calc-step" style={{ background: 'var(--acc-l)', border: '1px solid var(--acc-m)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <div>
            <p className="slabel" style={{ marginBottom: 2 }}>2-Cleaner Team · $80 / hour</p>
            <p style={{ fontSize: 11, color: 'var(--ink-500)' }}>Minimum 2 hours · Both cleaners included</p>
          </div>
          <div style={{ background: 'var(--acc)', color: '#fff', fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 4 }}>$80/hr</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink-900)' }}>Hours needed:</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginLeft: 'auto' }}>
            <button
              onClick={() => onAdjHrs(-1)}
              style={{ width: 36, height: 36, border: '1.5px solid var(--acc)', borderRadius: '50%', background: '#fff', cursor: 'pointer', fontSize: 17, color: 'var(--acc)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >−</button>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: 30, fontWeight: 300, color: 'var(--ink-900)', lineHeight: 1 }}>{hrs}</span>
              <p style={{ fontSize: 10, color: 'var(--ink-300)', marginTop: 1 }}>hours</p>
            </div>
            <button
              onClick={() => onAdjHrs(1)}
              style={{ width: 36, height: 36, border: '1.5px solid var(--acc)', borderRadius: '50%', background: '#fff', cursor: 'pointer', fontSize: 17, color: 'var(--acc)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >+</button>
          </div>
        </div>
      </div>

      {/* Pet hair add-on */}
      <div className="calc-step">
        <p className="slabel mb-3">Add-ons</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0' }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink-900)' }}>Pet hair surcharge</p>
            <p style={{ fontSize: 11, color: 'var(--ink-300)', marginTop: 2 }}>+$29</p>
          </div>
          <label className="sw">
            <input type="checkbox" checked={petH} onChange={(e) => onPetH(e.target.checked)} />
            <span className="sl" />
          </label>
        </div>
      </div>

      {/* Price result */}
      <div style={{ background: 'var(--ink-900)', borderRadius: 10, padding: 24, marginTop: 4 }}>
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--acc-m)', marginBottom: 8 }}>Estimated price</p>
        <p style={{ fontSize: 52, fontWeight: 300, color: '#fff', lineHeight: 1, marginBottom: 4 }}>${total}</p>
        <p style={{ fontSize: 12, color: 'var(--acc-m)', marginBottom: 16 }}>{per}</p>
        <div
          style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', lineHeight: 1.8, borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 14, marginBottom: 18 }}
          dangerouslySetInnerHTML={{ __html: breakdown }}
        />
        <a
          href={SITE.booking}
          target="_blank"
          rel="noopener"
          style={{ display: 'block', width: '100%', background: '#fff', color: 'var(--ink-900)', fontSize: 13, fontWeight: 600, textAlign: 'center', padding: 14, borderRadius: 6, textDecoration: 'none' }}
        >
          Book this clean
        </a>
      </div>
    </div>
  )
}
