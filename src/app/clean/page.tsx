import type { Metadata } from 'next'
import LandingNav from '@/components/landing/LandingNav'
import LandingHero from '@/components/landing/LandingHero'
import HowItWorks from '@/components/landing/HowItWorks'
import LandingServices from '@/components/landing/LandingServices'
import Calculator from '@/components/Calculator'
import Reviews from '@/components/Reviews'
import LandingFAQ from '@/components/landing/LandingFAQ'
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
        <Calculator firstTimeOffer={LANDING.offerNote} />
        <HowItWorks />
        <LandingServices />
        <Reviews />
        <LandingFAQ />
        <LandingFinalCTA />
      </main>
      <LandingFooter />
      <FloatingButtons />
    </>
  )
}
