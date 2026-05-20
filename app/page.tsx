import ScrollEffects from '@/components/ScrollEffects'
import UtilityBar from '@/components/UtilityBar'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import Intro from '@/components/Intro'
import SignatureServices from '@/components/SignatureServices'
import ServicesGrid from '@/components/ServicesGrid'
import WhyUs from '@/components/WhyUs'
import Gallery from '@/components/Gallery'
import Reviews from '@/components/Reviews'
import HealthFunds from '@/components/HealthFunds'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import FloatBookButton from '@/components/FloatBookButton'

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <UtilityBar />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Intro />
        <SignatureServices />
        <ServicesGrid />
        <WhyUs />
        <Gallery />
        <Reviews />
        {/* <HealthFunds /> */}
        <ContactSection />
      </main>
      <Footer />
      <FloatBookButton />
    </>
  )
}
