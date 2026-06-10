import { SITE, LANDING } from '@/content/content'

export default function LandingFooter() {
  return (
    <footer style={{ background: 'var(--ink-900)', paddingTop: 32, paddingBottom: 32 }}>
      <div className="max-w-6xl mx-auto px-8">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ fontSize: 11, color: 'var(--ink-300)' }}>{LANDING.footer.copyright}</p>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <a href={SITE.phoneHref} style={{ fontSize: 11, color: 'var(--ink-300)', textDecoration: 'none' }}>{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} style={{ fontSize: 11, color: 'var(--ink-300)', textDecoration: 'none' }}>{SITE.email}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
