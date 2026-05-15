import InfluencerHero from '../components/influencer/InfluencerHero'
import PainStory from '../components/influencer/PainStory'
import HowYouEarn from '../components/influencer/HowYouEarn'
import ValueLadder from '../components/influencer/ValueLadder'
import CreatorTestimonials from '../components/influencer/CreatorTestimonials'
import PlatformBenefits from '../components/influencer/PlatformBenefits'
import InfluencerFAQ from '../components/influencer/InfluencerFAQ'
import InfluencerCTA from '../components/influencer/InfluencerCTA'
import Footer from '../components/Footer'

export default function InfluencerPage() {
  return (
    <>
      <InfluencerHero />
      <PainStory />
      <HowYouEarn />
      <ValueLadder />
      <CreatorTestimonials />
      <PlatformBenefits />
      <InfluencerFAQ />
      <InfluencerCTA />
      <Footer />
    </>
  )
}
