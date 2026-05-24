import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import Calculator from '@/components/Calculator'
import Reviews from '@/components/Reviews'
import Areas from '@/components/Areas'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Calculator />
        <Reviews />
        <Areas />
        <FAQ />
        <CTABanner />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
