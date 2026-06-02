'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useNavScroll } from '@/hooks/useNavScroll'
import { NAV_LINKS, SITE } from '@/content/content'
import { trackConversion, CONV_BOOK, CONV_WHATSAPP } from '@/lib/gtag'

export default function Nav() {
  const navRef = useNavScroll()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

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
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 11, flexShrink: 0 }}>
          <Image src="/logo.png" alt="Core Cleaning Services logo" width={52} height={52} style={{ objectFit: 'contain', display: 'block' }} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.18, gap: 2 }}>
            <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink-700)', letterSpacing: '.10em', textTransform: 'uppercase' }}>CORE</span>
            <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink-700)', letterSpacing: '.10em', textTransform: 'uppercase' }}>CLEANING SERVICES</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink-500)', textDecoration: 'none' }} className="hover:opacity-80 transition-opacity">
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href={SITE.phoneHref} style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink-500)', textDecoration: 'none' }}>{SITE.phone}</a>
          <a href={SITE.instagram} target="_blank" rel="noopener" aria-label="Instagram" style={{ color: 'var(--ink-500)', display: 'flex', alignItems: 'center', transition: 'color .15s' }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--acc)')}
            onMouseOut={(e)  => (e.currentTarget.style.color = 'var(--ink-500)')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href={SITE.booking} target="_blank" rel="noopener" className="btn-p" onClick={() => trackConversion(CONV_BOOK)}>Book Now</a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ color: 'var(--ink-700)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t" style={{ borderColor: 'rgba(255,255,255,.4)', background: 'rgba(250,253,255,.95)' }}>
          <div className="max-w-6xl mx-auto px-8 py-5 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={close} className="py-2.5 text-sm font-medium border-b" style={{ color: 'var(--ink-700)', textDecoration: 'none', borderColor: 'var(--ink-100)' }}>
                {l.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a href={SITE.phoneHref} className="btn-s text-center">📱 {SITE.phone}</a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener" className="btn-s text-center" onClick={() => trackConversion(CONV_WHATSAPP)}>💬 WhatsApp Us</a>
              <a href={SITE.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="btn-s" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a href={SITE.booking} target="_blank" rel="noopener" className="btn-p text-center" onClick={() => trackConversion(CONV_BOOK)}>Book Now</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
