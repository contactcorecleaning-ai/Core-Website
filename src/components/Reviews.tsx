import { REVIEWS } from '@/content/content'

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-28" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-6xl mx-auto px-8">
        <div style={{ marginBottom: 56 }}>
          <p className="slabel mb-3 fu">Reviews</p>
          <h2 className="text-[34px] sm:text-[42px] font-light tracking-tight fu d1" style={{ color: 'var(--ink-900)' }}>
            5.0 on Google.<br />Every time.
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={r.name} className={`rev-card fu d${i + 1}`}>
              <p style={{ fontSize: 11, letterSpacing: '.08em', color: 'var(--acc-m)', marginBottom: 20, position: 'relative', zIndex: 1 }}>★★★★★</p>
              <p style={{ fontSize: 13, color: 'var(--ink-700)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 24, position: 'relative', zIndex: 1 }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-900)' }}>{r.name}</p>
                <p style={{ fontSize: 11, color: 'var(--ink-300)', marginTop: 2 }}>{r.date} · Google</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
