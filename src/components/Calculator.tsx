'use client'
import { useState, useMemo } from 'react'
import {
  CALC_BASE, CALC_TIERS, CALC_WIN_P, FREQ_OPTIONS,
  SVC_LABELS, SIZE_LABELS, SITE, ADDON_PRICES, HOUSE_SMALL_SURCHARGE,
} from '@/content/content'
import HourlyCalculator from './HourlyCalculator'

type SvcType  = 'regular' | 'deep' | 'moveinout' | 'hourly' | 'post'
type PropType = 'condo' | 'house'
type SizeType = 'studio' | '1b1b' | '2b1b' | '2b2b' | '3b2b' | '4b' | '5b' | '6b'
type SqftType = 'base' | '1000-1499' | '1500-1999' | '2000-2499' | '2500-2999' | '3000+'
type CondType = 'normal' | 'heavy'

const DEEP_DISABLED = ['4b', '5b', '6b']

export default function Calculator() {
  const [svc, setSvc]   = useState<SvcType>('regular')
  const [prop, setProp] = useState<PropType>('condo')
  const [size, setSize] = useState<SizeType>('1b1b')
  const [sqft, setSqft] = useState<SqftType>('base')
  const [cond, setCond] = useState<CondType>('normal')
  const [freqIdx, setFreqIdx] = useState(0)

  const [pet,    setPet]    = useState(false)
  const [oven,   setOven]   = useState(false)
  const [fridge, setFridge] = useState(false)
  const [blinds, setBlinds] = useState(false)
  const [walls,  setWalls]  = useState(false)
  const [doors,  setDoors]  = useState(false)
  const [dish,   setDish]   = useState(false)
  const [win,    setWin]    = useState(false)
  const [carpet,   setCarpet]   = useState(0)
  const [sofaS,    setSofaS]    = useState(0)
  const [sofaL,    setSofaL]    = useState(0)
  const [laundry,  setLaundry]  = useState(0)
  const [dishLoad, setDishLoad] = useState(0)

  const [hrs,  setHrs]  = useState(2)
  const [petH, setPetH] = useState(false)

  const [showEst,   setShowEst]   = useState(false)
  const [estName,   setEstName]   = useState('')
  const [estPhone,  setEstPhone]  = useState('')
  const [estEmail,  setEstEmail]  = useState('')
  const [estErr,    setEstErr]    = useState(false)
  const [estOk,     setEstOk]     = useState(false)

  const freq = FREQ_OPTIONS[freqIdx]

  const sqftTiers = useMemo(() => {
    const base = { id: 'base', label: prop === 'house' ? 'Under 1,500 sq ft' : 'Under 1,000 sq ft' }
    const tiers: { id: string; label: string }[] = [base]
    if (prop === 'condo') tiers.push({ id: '1000-1499', label: '1,000–1,499 sq ft' })
    tiers.push(
      { id: '1500-1999', label: '1,500–1,999 sq ft' },
      { id: '2000-2499', label: '2,000–2,499 sq ft' },
      { id: '2500-2999', label: '2,500–2,999 sq ft' },
      { id: '3000+',     label: '3,000+ sq ft' },
    )
    return tiers
  }, [prop])

  const winPrice  = CALC_WIN_P[size] ?? 69
  const winNote   = ['studio','1b1b','2b1b','2b2b'].includes(size) ? '1–2 bedrooms'
                  : ['3b2b','4b'].includes(size)                   ? '3–4 bedrooms'
                  : '5–6 bedrooms'
  const sqftInfo  = prop === 'house'
    ? 'Flat rate covers up to 1,500 sq ft for houses. Surcharges apply beyond that.'
    : 'Flat rate covers up to 1,000 sq ft for condos. Surcharges apply beyond that.'

  const isMIO = svc === 'moveinout'

  const result = useMemo(() => {
    if (svc === 'post' || svc === 'hourly') return null
    const base = (CALC_BASE[svc] ?? {})[size]
    if (!base) return { price: 'Quote', per: 'Contact us', badge: null, html: 'Call: <strong style="color:#fff">(437) 603-8880</strong>' }

    const tier   = CALC_TIERS.find((t) => t.id === sqft) ?? CALC_TIERS[0]
    const isH    = prop === 'house'
    let hAdj = 0
    if (isH && sqft === 'base') {
      if (svc === 'regular') hAdj = 25
      if (svc === 'deep')    hAdj = 70
    }

    const sqS      = sqft === 'base' ? 0 : tier.s
    const hvS      = cond === 'heavy' ? tier.h : 0
    const discPrice = Math.round((base + hAdj) * freq.value)
    const saved    = (base + hAdj) - discPrice
    const sub      = discPrice + sqS + hvS
    const hSmall   = isH && (sqft === 'base' || sqft === '1000-1499') ? HOUSE_SMALL_SURCHARGE : 0

    let addons = 0
    const lines: string[] = []
    if (pet)   { addons += ADDON_PRICES.pet;   lines.push(`Pet hair: +$${ADDON_PRICES.pet}`) }
    if (!isMIO && oven)   { addons += ADDON_PRICES.oven;   lines.push(`Oven: +$${ADDON_PRICES.oven}`) }
    if (!isMIO && fridge) { addons += ADDON_PRICES.fridge; lines.push(`Fridge: +$${ADDON_PRICES.fridge}`) }
    if (!isMIO && blinds) { addons += ADDON_PRICES.blinds; lines.push(`Blinds: +$${ADDON_PRICES.blinds}`) }
    if (walls) { addons += ADDON_PRICES.walls; lines.push(`Walls: +$${ADDON_PRICES.walls}`) }
    if (doors) { addons += ADDON_PRICES.doors; lines.push(`Doors: +$${ADDON_PRICES.doors}`) }
    if (!isMIO && dish)   { addons += ADDON_PRICES.dish;  lines.push(`Dishwasher: +$${ADDON_PRICES.dish}`) }
    if (!isMIO && win)    { addons += winPrice; lines.push(`Windows: +$${winPrice}`) }
    if (carpet > 0)   { const c = ADDON_PRICES.carpet1 + Math.max(0, carpet - 1) * ADDON_PRICES.carpetX; addons += c; lines.push(`Carpet(${carpet}rm): +$${c}`) }
    if (sofaS > 0)    { const s = sofaS * ADDON_PRICES.sofaS;    addons += s; lines.push(`Sofa S×${sofaS}: +$${s}`) }
    if (sofaL > 0)    { const s = sofaL * ADDON_PRICES.sofaL;    addons += s; lines.push(`Sofa L×${sofaL}: +$${s}`) }
    if (laundry > 0)  { const s = laundry * ADDON_PRICES.laundry;  addons += s; lines.push(`Laundry×${laundry}: +$${s}`) }
    if (dishLoad > 0) { const s = dishLoad * ADDON_PRICES.dishLoad; addons += s; lines.push(`Dish×${dishLoad}: +$${s}`) }

    const total  = sub + addons + hSmall
    const svcLbl = SVC_LABELS[svc] ?? svc
    const szLbl  = SIZE_LABELS[size] ?? size
    let html = `${svcLbl} · ${szLbl} · ${isH ? 'House' : 'Condo'}<br>Base: $${base}${hAdj ? ` + $${hAdj}` : ''}`
    if (sqS > 0)   html += `<br>Size surcharge: +$${sqS}`
    if (hvS > 0)   html += `<br>Heavy soiling: +$${hvS}`
    if (saved > 0) html += `<br>Discount (${freq.disc}%): −$${saved}`
    if (isMIO)     html += '<br>Included: Oven · Fridge · Microwave · Cabinets'
    lines.forEach((l) => { html += `<br>${l}` })
    html += '<br>Service delivery fee: confirmed at booking'

    return {
      price: `$${total}`,
      per:   freq.label === 'One-time' ? 'flat rate' : `per visit · ${freq.label}`,
      badge: saved > 0 ? `Saving $${saved} per visit` : null,
      html,
    }
  }, [svc, prop, size, sqft, cond, freq, pet, oven, fridge, blinds, walls, doors, dish, win, winPrice, carpet, sofaS, sofaL, laundry, dishLoad, isMIO])

  function handlePropChange(p: PropType) {
    setProp(p)
    if (p === 'house' && sqft === '1000-1499') setSqft('base')
  }
  function handleSvcChange(s: SvcType) {
    setSvc(s)
    if (s === 'deep' && DEEP_DISABLED.includes(size)) setSize('3b2b')
  }

  function Opts({ items, active, onSelect, disabled = [] }: {
    items: { id: string; label: string }[]
    active: string
    onSelect: (id: string) => void
    disabled?: string[]
  }) {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {items.map((it) => (
          <button
            key={it.id}
            type="button"
            className={`co${active === it.id ? ' on' : ''}${disabled.includes(it.id) ? ' off' : ''}`}
            onClick={() => !disabled.includes(it.id) && onSelect(it.id)}
          >
            {it.label}
          </button>
        ))}
      </div>
    )
  }

  function Counter({ val, onAdj }: { val: number; onAdj: (d: number) => void }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button onClick={() => onAdj(-1)} style={{ width: 28, height: 28, border: '1px solid var(--ink-100)', borderRadius: '50%', background: '#fff', cursor: 'pointer', fontSize: 14, color: 'var(--ink-500)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
        <span style={{ fontSize: 13, fontWeight: 500, minWidth: 12, textAlign: 'center', color: 'var(--ink-900)' }}>{val}</span>
        <button onClick={() => onAdj(1)}  style={{ width: 28, height: 28, border: '1px solid var(--ink-100)', borderRadius: '50%', background: '#fff', cursor: 'pointer', fontSize: 14, color: 'var(--ink-500)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
      </div>
    )
  }

  function Toggle({ id, checked, onChange }: { id: string; checked: boolean; onChange: (v: boolean) => void }) {
    return (
      <label className="sw">
        <input id={id} type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
        <span className="sl" />
      </label>
    )
  }

  function AddonRow({ label, price, checked, onChange, included = false, note }: {
    label: string; price: string; checked: boolean; onChange: (v: boolean) => void; included?: boolean; note?: string
  }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 0', borderBottom: '1px solid var(--ink-100)' }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink-900)' }}>
            {label}{' '}
            {included && (
              <span style={{ fontSize: 10, fontWeight: 600, background: 'var(--acc-l)', color: 'var(--acc)', borderRadius: 4, padding: '1px 6px', marginLeft: 4 }}>
                INCLUDED
              </span>
            )}
          </p>
          <p style={{ fontSize: 11, color: 'var(--ink-300)', marginTop: 2 }}>{included ? '' : price}</p>
          {note && <p style={{ fontSize: 11, color: 'var(--acc)', fontStyle: 'italic', marginTop: 2 }}>{note}</p>}
        </div>
        <label className="sw">
          <input type="checkbox" checked={included ? false : checked} disabled={included} onChange={(e) => onChange(e.target.checked)} />
          <span className="sl" />
        </label>
      </div>
    )
  }

  function CounterRow({ label, price, val, onAdj }: { label: string; price: string; val: number; onAdj: (d: number) => void }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 0', borderBottom: '1px solid var(--ink-100)' }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink-900)' }}>{label}</p>
          <p style={{ fontSize: 11, color: 'var(--ink-300)', marginTop: 2 }}>{price}</p>
        </div>
        <Counter val={val} onAdj={(d) => onAdj(d)} />
      </div>
    )
  }

  function handleSendEstimate() {
    if (!estName.trim() || !estPhone.trim()) { setEstErr(true); return }
    setEstErr(false)
    if (!result) return
    const details = result.html.replace(/<br>/gi, '\n').replace(/<[^>]*>/g, '').trim()
    const s = encodeURIComponent(`Calculator Estimate — ${result.price} (${result.per}) — Core Cleaning Services`)
    const b = encodeURIComponent(`Name: ${estName}\nPhone: ${estPhone}\nEmail: ${estEmail || 'N/A'}\n\nEstimated Price: ${result.price} (${result.per})\n\nBreakdown:\n${details}`)
    window.open(`mailto:${SITE.email}?subject=${s}&body=${b}`, '_self')
    setEstOk(true)
  }

  return (
    <section id="pricing" className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">

          {/* Left info column */}
          <div className="lg:col-span-2 fu">
            <p className="slabel mb-3">Pricing</p>
            <h2 className="text-[34px] sm:text-[42px] font-light tracking-tight mb-5" style={{ color: 'var(--ink-900)' }}>
              Your exact price,<br />instantly.
            </h2>
            <p style={{ fontSize: 14, color: 'var(--ink-500)', lineHeight: 1.75, marginBottom: 32 }}>
              Select your service and size. Your flat-rate price appears immediately — no calls required for standard services.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
              {['Flat rates by home size','Recurring clients save up to 15%','All add-ons priced transparently','No hidden charges — ever'].map((line) => (
                <div key={line} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: 'var(--ink-700)' }}>
                  <div style={{ width: 20, height: 1, background: 'var(--acc-m)', flexShrink: 0 }} />
                  {line}
                </div>
              ))}
            </div>
            <div style={{ paddingTop: 28, borderTop: '1px solid var(--ink-100)' }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-900)', marginBottom: 4 }}>Large space or unusual job?</p>
              <p style={{ fontSize: 12, color: 'var(--ink-500)', marginBottom: 12 }}>We respond within 2 hours.</p>
              <a href="#quote" className="btn-t">Request custom quote →</a>
            </div>
          </div>

          {/* Calculator card */}
          <div className="lg:col-span-3 fu d2 bg-white border rounded-xl overflow-hidden" style={{ borderColor: 'var(--ink-100)', boxShadow: '0 4px 24px rgba(58,130,180,.09)' }}>
            <div style={{ background: 'var(--ink-900)', padding: '20px 28px' }}>
              <p style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>Instant Price Calculator</p>
              <p style={{ fontSize: 12, marginTop: 2, color: 'var(--acc-m)' }}>Estimate confirmed before arrival. No hidden charges.</p>
            </div>
            <div style={{ padding: 24 }}>

              {/* Service type */}
              <div className="calc-step">
                <p className="slabel mb-3">Service type</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {[
                    { id: 'regular',   label: 'Regular Clean' },
                    { id: 'deep',      label: 'Deep Clean' },
                    { id: 'moveinout', label: 'Move-In / Out' },
                    { id: 'hourly',    label: '⏱ Hourly Clean' },
                    { id: 'post',      label: 'Post-Construction' },
                  ].map((s) => (
                    <button key={s.id} type="button" className={`co${svc === s.id ? ' on' : ''}`} onClick={() => handleSvcChange(s.id as SvcType)}>{s.label}</button>
                  ))}
                </div>
              </div>

              {/* Post-construction notice */}
              {svc === 'post' && (
                <div style={{ padding: 20, borderRadius: 10, background: 'var(--acc-l)', border: '1px solid var(--acc-m)', marginBottom: 12 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-900)', marginBottom: 6 }}>Post-Construction Cleaning</p>
                  <p style={{ fontSize: 13, color: 'var(--ink-500)', lineHeight: 1.6 }}>Charged at <strong style={{ color: 'var(--ink-900)' }}>$55/hr per cleaner</strong>. Requires a free on-site pre-assessment.</p>
                  <a href="#quote" className="btn-p" style={{ display: 'inline-block', marginTop: 16 }}>Request Free Assessment →</a>
                </div>
              )}

              {/* Hourly panel */}
              {svc === 'hourly' && (
                <HourlyCalculator
                  hrs={hrs}
                  petH={petH}
                  onAdjHrs={(d) => setHrs((h) => Math.max(2, Math.min(12, h + d)))}
                  onPetH={setPetH}
                />
              )}

              {/* Main calculator */}
              {svc !== 'post' && svc !== 'hourly' && (
                <div>
                  {/* Property type */}
                  <div className="calc-step">
                    <p className="slabel mb-3">Property type</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {[
                        { id: 'condo', label: <span>Condo / Apartment <span style={{ color: 'var(--ink-300)', fontWeight: 400 }}>(base up to 1,000 sq ft)</span></span> },
                        { id: 'house', label: <span>House / Townhouse <span style={{ color: 'var(--ink-300)', fontWeight: 400 }}>(base up to 1,500 sq ft)</span></span> },
                      ].map((p) => (
                        <button key={p.id} type="button" className={`co${prop === p.id ? ' on' : ''}`} onClick={() => handlePropChange(p.id as PropType)}>{p.label}</button>
                      ))}
                    </div>
                  </div>

                  {/* Unit size */}
                  <div className="calc-step">
                    <p className="slabel mb-3">Unit size</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {['studio','1b1b','2b1b','2b2b','3b2b','4b','5b','6b'].map((s) => {
                        const disabled = svc === 'deep' && DEEP_DISABLED.includes(s)
                        return (
                          <button key={s} type="button" className={`co${size === s ? ' on' : ''}${disabled ? ' off' : ''}`} onClick={() => !disabled && setSize(s as SizeType)}>
                            {SIZE_LABELS[s]}
                          </button>
                        )
                      })}
                    </div>
                    {svc === 'deep' && (
                      <p className="mt-3" style={{ fontSize: 12, color: 'var(--ink-500)', background: 'var(--bg-alt)', border: '1px solid var(--ink-100)', borderRadius: 6, padding: '10px 14px' }}>
                        Deep clean for 4+ bedrooms — <a href="#quote" style={{ fontWeight: 600, textDecoration: 'underline', color: 'var(--acc)' }}>contact us</a> for a custom quote.
                      </p>
                    )}
                  </div>

                  {/* Square footage */}
                  <div className="calc-step">
                    <p className="slabel mb-1.5">Square footage</p>
                    <p style={{ fontSize: 12, color: 'var(--ink-500)', marginBottom: 12 }}>{sqftInfo}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {sqftTiers.map((t) => (
                        <button key={t.id} type="button" className={`co${sqft === t.id ? ' on' : ''}`} onClick={() => setSqft(t.id as SqftType)}>{t.label}</button>
                      ))}
                    </div>
                  </div>

                  {/* Condition */}
                  <div className="calc-step">
                    <p className="slabel mb-3">Condition</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {[{ id: 'normal', label: 'Normal — regular upkeep' }, { id: 'heavy', label: 'Heavy soiling — long overdue' }].map((c) => (
                        <button key={c.id} type="button" className={`co${cond === c.id ? ' on' : ''}`} onClick={() => setCond(c.id as CondType)}>{c.label}</button>
                      ))}
                    </div>
                  </div>

                  {/* Frequency */}
                  <div className="calc-step">
                    <p className="slabel mb-3">Frequency</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {FREQ_OPTIONS.map((f, idx) => (
                        <button key={f.label} type="button" className={`co${freqIdx === idx ? ' on' : ''}`} onClick={() => setFreqIdx(idx)}>
                          {f.label}{f.disc > 0 ? ` −${f.disc}%` : ''}
                        </button>
                      ))}
                    </div>
                    <p style={{ fontSize: 11, color: 'var(--ink-300)', marginTop: 10 }}>Discount applies to base price only.</p>
                  </div>

                  {/* Add-ons */}
                  <div className="calc-step">
                    <p className="slabel mb-4">Add-ons</p>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <AddonRow label="Pet hair surcharge"   price={`+$${ADDON_PRICES.pet}`}    checked={pet}    onChange={setPet} />
                      <AddonRow label="Inside oven"          price={`+$${ADDON_PRICES.oven}`}   checked={oven}   onChange={setOven}   included={isMIO} />
                      <AddonRow label="Inside fridge"        price={`+$${ADDON_PRICES.fridge}`} checked={fridge} onChange={setFridge} included={isMIO} />
                      <AddonRow label="Window blinds"        price={`+$${ADDON_PRICES.blinds}`} checked={blinds} onChange={setBlinds} included={isMIO} />
                      <AddonRow label="Spot clean walls"     price={`+$${ADDON_PRICES.walls}`}  checked={walls}  onChange={setWalls} />
                      <AddonRow label="Clean all doors"      price={`+$${ADDON_PRICES.doors}`}  checked={doors}  onChange={setDoors} />
                      <AddonRow label="Inside dishwasher"    price={`+$${ADDON_PRICES.dish}`}   checked={dish}   onChange={setDish}   included={isMIO} />
                      <AddonRow label="Interior windows"     price={`+$${winPrice}`} checked={win} onChange={setWin} included={isMIO} note={winNote} />
                      <CounterRow label="Carpet cleaning"              price={`$${ADDON_PRICES.carpet1} first room · +$${ADDON_PRICES.carpetX} each extra`} val={carpet}   onAdj={(d) => setCarpet((v)   => Math.max(0, v + d))} />
                      <CounterRow label="Sofa — small (1–2 seater)"   price={`$${ADDON_PRICES.sofaS} each`}  val={sofaS}    onAdj={(d) => setSofaS((v)    => Math.max(0, v + d))} />
                      <CounterRow label="Sofa — large (3+ seater)"    price={`$${ADDON_PRICES.sofaL} each`}  val={sofaL}    onAdj={(d) => setSofaL((v)    => Math.max(0, v + d))} />
                      <CounterRow label="Laundry loads"                price={`$${ADDON_PRICES.laundry} per load`}  val={laundry}  onAdj={(d) => setLaundry((v)  => Math.max(0, v + d))} />
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 0' }}>
                        <div>
                          <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink-900)' }}>Dishwasher loads</p>
                          <p style={{ fontSize: 11, color: 'var(--ink-300)', marginTop: 2 }}>${ADDON_PRICES.dishLoad} per load</p>
                        </div>
                        <Counter val={dishLoad} onAdj={(d) => setDishLoad((v) => Math.max(0, v + d))} />
                      </div>
                    </div>
                  </div>

                  {/* Result panel */}
                  <div style={{ background: 'var(--ink-900)', borderRadius: 10, padding: 24, marginTop: 8 }}>
                    <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--acc-m)', marginBottom: 8 }}>Estimated price</p>
                    <p style={{ fontSize: 52, fontWeight: 300, color: '#fff', lineHeight: 1, marginBottom: 4 }}>{result?.price ?? '$159'}</p>
                    <p style={{ fontSize: 12, color: 'var(--acc-m)', marginBottom: 16 }}>{result?.per ?? 'flat rate'}</p>
                    {result?.badge && (
                      <p style={{ fontSize: 12, color: 'var(--acc-m)', background: 'rgba(120,178,210,.15)', borderRadius: 99, padding: '4px 14px', display: 'inline-block', marginBottom: 16 }}>
                        {result.badge}
                      </p>
                    )}
                    <div
                      style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', lineHeight: 1.8, borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 16, marginBottom: 20 }}
                      dangerouslySetInnerHTML={{ __html: result?.html ?? '' }}
                    />
                    <a href={SITE.booking} target="_blank" rel="noopener" style={{ display: 'block', width: '100%', background: '#fff', color: 'var(--ink-900)', fontSize: 13, fontWeight: 600, textAlign: 'center', padding: 14, borderRadius: 6, textDecoration: 'none' }}>
                      Book this clean
                    </a>
                    <button
                      onClick={() => setShowEst(!showEst)}
                      style={{ display: 'block', width: '100%', background: 'transparent', border: '1.5px solid rgba(255,255,255,.22)', color: 'rgba(255,255,255,.65)', fontSize: 13, fontWeight: 500, textAlign: 'center', padding: 11, borderRadius: 6, cursor: 'pointer', marginTop: 10, fontFamily: 'Inter,sans-serif' }}
                    >
                      {showEst ? '✕ Close' : '✉ Send this estimate to us'}
                    </button>

                    {/* Estimate form */}
                    {showEst && (
                      <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,.10)' }}>
                        <p style={{ fontSize: 11, color: 'rgba(255,255,255,.45)', marginBottom: 12, lineHeight: 1.6 }}>Leave your details and we&apos;ll follow up with this quote.</p>
                        <input
                          type="text" placeholder="Your name"
                          value={estName} onChange={(e) => setEstName(e.target.value)}
                          style={{ width: '100%', fontSize: 13, border: '1px solid rgba(255,255,255,.18)', borderRadius: 6, padding: '10px 14px', background: 'rgba(255,255,255,.08)', color: '#fff', fontFamily: 'Inter,sans-serif', marginBottom: 8, boxSizing: 'border-box', outline: 'none' }}
                        />
                        <input
                          type="tel" placeholder="Phone number"
                          value={estPhone} onChange={(e) => setEstPhone(e.target.value)}
                          style={{ width: '100%', fontSize: 13, border: '1px solid rgba(255,255,255,.18)', borderRadius: 6, padding: '10px 14px', background: 'rgba(255,255,255,.08)', color: '#fff', fontFamily: 'Inter,sans-serif', marginBottom: 8, boxSizing: 'border-box', outline: 'none' }}
                        />
                        <input
                          type="email" placeholder="Email (optional)"
                          value={estEmail} onChange={(e) => setEstEmail(e.target.value)}
                          style={{ width: '100%', fontSize: 13, border: '1px solid rgba(255,255,255,.18)', borderRadius: 6, padding: '10px 14px', background: 'rgba(255,255,255,.08)', color: '#fff', fontFamily: 'Inter,sans-serif', marginBottom: 12, boxSizing: 'border-box', outline: 'none' }}
                        />
                        {!estOk && (
                          <button
                            onClick={handleSendEstimate}
                            style={{ width: '100%', background: 'var(--acc)', color: '#fff', fontSize: 13, fontWeight: 600, padding: 12, borderRadius: 6, border: 'none', cursor: 'pointer', fontFamily: 'Inter,sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                          >
                            Send Estimate
                          </button>
                        )}
                        {estOk  && <p style={{ fontSize: 12, color: 'var(--acc-m)', textAlign: 'center', marginTop: 10 }}>✓ Sent! We&apos;ll be in touch shortly.</p>}
                        {estErr && <p style={{ fontSize: 12, color: '#f87171',    textAlign: 'center', marginTop: 8  }}>Please enter your name and phone number.</p>}
                      </div>
                    )}
                    <p style={{ textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,.25)', marginTop: 12 }}>Service delivery fee confirmed at booking</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
