import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Stats from '@/components/Stats'
import Features from '@/components/Features'
import Security from '@/components/Security'
import Liquidity from '@/components/Liquidity'
import WhyChoose from '@/components/WhyChoose'
import Steps from '@/components/Steps'
import OTCDesk from '@/components/OTCDesk'
import Convert from '@/components/Convert'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Stats />
        <Features />
        <Security />
        <Liquidity />
        <WhyChoose />
        <Steps />
        <OTCDesk />
        <Convert />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
