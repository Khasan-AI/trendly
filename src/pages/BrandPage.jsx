import BrandHero from '../components/brand/BrandHero'
import CampaignBuilder from '../components/brand/CampaignBuilder'
import PerformanceTracking from '../components/brand/PerformanceTracking'
import BrandSuccessStories from '../components/brand/BrandSuccessStories'
import ContentQualityControl from '../components/brand/ContentQualityControl'
import EnterpriseFeatures from '../components/brand/EnterpriseFeatures'
import CaseStudies from '../components/brand/CaseStudies'
import InfluencerMarketplace from '../components/brand/InfluencerMarketplace'
import BrandFAQ from '../components/brand/BrandFAQ'
import BrandFinalCTA from '../components/brand/BrandFinalCTA'
import Footer from '../components/Footer'

export default function BrandPage() {
  return (
    <>
      <BrandHero />
      <CampaignBuilder />
      <PerformanceTracking />
      <BrandSuccessStories />
      <ContentQualityControl />
      <EnterpriseFeatures />
      <CaseStudies />
      <InfluencerMarketplace />
      <BrandFAQ />
      <BrandFinalCTA />
      <Footer />
    </>
  )
}
