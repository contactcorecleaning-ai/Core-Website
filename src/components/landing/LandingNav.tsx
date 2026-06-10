'use client'
import Image from 'next/image'
import { useNavScroll } from '@/hooks/useNavScroll'
import { SITE } from '@/content/content'
import { trackConversion, CONV_BOOK } from '@/lib/gtag'

export default function LandingNav() {
  const navRef = useNavScroll()

  return (
    <nav
      id="nav"
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(250,253,255,.78)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,.55)',
      }}
    >
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between" style={{ height: 72 }}>
        {/* Logo */}
        <span style={{ display: 'flex', alignItems: 'center', gap: 11, flexShrink: 0 }}>
          <Image src="/logo.png" alt="Core Cleaning Services logo" width={52} height={52} style={{ objectFit: 'contain', display: 'block' }} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.18, gap: 2 }}>
            <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink-700)', letterSpacing: '.10em', textTransform: 'uppercase' }}>CORE</span>
            <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink-700)', letterSpacing: '.10em', textTransform: 'uppercase' }}>CLEANING SERVICES</span>
          </span>
        </span>

        {/* Phone + Book Now */}
        <div className="flex items-center gap-4">
          <a
            href={SITE.phoneHref}
            onClick={() => trackConversion(CONV_BOOK)}
            style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink-500)', textDecoration: 'none' }}
            className="hidden sm:inline"
          >
            {SITE.phone}
          </a>
          <a
            href={SITE.booking}
            target="_blank"
            rel="noopener"
            onClick={() => trackConversion(CONV_BOOK)}
            className="btn-p"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  )
}
