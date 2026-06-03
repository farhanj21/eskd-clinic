import ScrollEffects from '@/components/ScrollEffects'
import UtilityBarAlt from '@/components/UtilityBarAlt'
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
import Team from '@/components/Team'
import AboutSplitAlt from '@/components/AboutSplitAlt'
import ServicesOverview from '@/components/ServicesOverview'
import FooterAlt from '@/components/FooterAlt'
import FloatBookButton from '@/components/FloatBookButton'
import HeroAlt from '@/components/HeroAlt'
import HeaderAlt from '@/components/HeaderAlt'

export default function HomeAlt() {
  return (
    <>
      <ScrollEffects />
      {/* <UtilityBarAlt /> */}
      <HeaderAlt />
      <main>
        <HeroAlt />
        <TrustStrip />
        <AboutSplitAlt />
        <ServicesOverview />
        {/* <Intro />
        <Team />
        <SignatureServices />
        <ServicesGrid />
        <WhyUs />
        <Gallery />
        <ContactSection />
        <Reviews /> */}
        {/* <HealthFunds /> */}
      </main>
      <FooterAlt />
      <FloatBookButton />
    </>
  )
}
