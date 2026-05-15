import { useState } from 'react'
import PricingHero from '../components/pricing/PricingHero'
import PricingTrustBar from '../components/pricing/PricingTrustBar'
import PricingCards from '../components/pricing/PricingCards'
import ComparisonTable from '../components/pricing/ComparisonTable'
import PricingFAQ from '../components/pricing/PricingFAQ'
import PricingCTA from '../components/pricing/PricingCTA'
import PlanWizard from '../components/pricing/PlanWizard'

// Brands-specific
import UsageFees from '../components/pricing/UsageFees'
import EnterpriseInquiry from '../components/pricing/EnterpriseInquiry'

// Creators-specific
import CreatorEarnings from '../components/pricing/CreatorEarnings'
import CreatorBenefits from '../components/pricing/CreatorBenefits'

// Agencies-specific
import AgencyCommission from '../components/pricing/AgencyCommission'
import AgencyBenefits from '../components/pricing/AgencyBenefits'
import AgencyCalculator from '../components/pricing/AgencyCalculator'
import AgencyTestimonials from '../components/pricing/AgencyTestimonials'

import Footer from '../components/Footer'

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('For Brands')
  const [billing, setBilling] = useState('monthly')

  return (
    <>
      <PricingHero
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        billing={billing}
        setBilling={setBilling}
      />
      <PricingTrustBar />
      <PricingCards activeTab={activeTab} billing={billing} />
      <ComparisonTable activeTab={activeTab} />

      {/* ── For Brands ─────────────────────────────────────── */}
      {activeTab === 'For Brands' && (
        <>
          <UsageFees />
          <EnterpriseInquiry />
          <PlanWizard activeTab={activeTab} />
        </>
      )}

      {/* ── For Creators ───────────────────────────────────── */}
      {activeTab === 'For Creators' && (
        <>
          <CreatorEarnings />
          <CreatorBenefits />
          <PlanWizard activeTab={activeTab} />
        </>
      )}

      {/* ── For Agencies ───────────────────────────────────── */}
      {activeTab === 'For Agencies' && (
        <>
          <AgencyCommission />
          <AgencyBenefits />
          <AgencyCalculator />
          <AgencyTestimonials />
        </>
      )}

      {/* ── Shared bottom sections ─────────────────────────── */}
      <PricingFAQ activeTab={activeTab} />
      <PricingCTA activeTab={activeTab} />
      <Footer />
    </>
  )
}
