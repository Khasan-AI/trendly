import Hero from '../components/Hero'
import TrustMetrics from '../components/TrustMetrics'
import SocialProof from '../components/SocialProof'
import HowItWorks from '../components/HowItWorks'
import PersonaBenefits from '../components/PersonaBenefits'
import RiskReversal from '../components/RiskReversal'
import PathSelector from '../components/PathSelector'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <SocialProof />
      <HowItWorks />
      <PersonaBenefits />
      <RiskReversal />
      <PathSelector />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  )
}
