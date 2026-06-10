import type { Metadata } from 'next'
import LandingNav from '@/components/landing/LandingNav'
import LandingHero from '@/components/landing/LandingHero'
import HowItWorks from '@/components/landing/HowItWorks'
import LandingServices from '@/components/landing/LandingServices'
import Calculator from '@/components/Calculator'
import Reviews from '@/components/Reviews'
import LandingFAQ from '@/components/landing/LandingFAQ'
import JobberEmbed from '@/components/landing/JobberEmbed'
import LandingFinalCTA from '@/components/landing/LandingFinalCTA'
import LandingFooter from '@/components/landing/LandingFooter'
import FloatingButtons from '@/components/FloatingButtons'
import { LANDING } from '@/content/content'

export const metadata: Metadata = {
  title: LANDING.meta.title,
  description: LANDING.meta.description,
  robots: { index: false, follow: false },
}

export default function CleanLandingPage() {
  return (
    <>
      <LandingNav />
      <main>
        <LandingHero />
        <Calculator firstTimeOffer={LANDING.offerNote} scrollToBook />
        <HowItWorks />
        <LandingServices />
        <Reviews />
        <LandingFAQ />
        <section id="book" className="py-20 sm:py-28" style={{ background: 'var(--bg-alt)' }}>
          <div className="max-w-6xl mx-auto px-8">
            <div style={{ marginBottom: 40, textAlign: 'center' }}>
              <h2 className="text-[34px] sm:text-[42px] font-light tracking-tight fu" style={{ color: 'var(--ink-900)' }}>
                Book your cleaning
              </h2>
              <p style={{ fontSize: 14, color: 'var(--ink-500)', marginTop: 12 }}>
                Fill out the form — we&apos;ll confirm within 24 hours.
              </p>
            </div>
            <JobberEmbed />
          </div>
        </section>
        <LandingFinalCTA />
      </main>
      <LandingFooter />
      <FloatingButtons />
    </>
  )
}
