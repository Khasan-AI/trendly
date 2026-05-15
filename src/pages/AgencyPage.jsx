import AgencyHero from '../components/agency/AgencyHero'
import AgencyProblems from '../components/agency/AgencyProblems'
import AgencyFeatures from '../components/agency/AgencyFeatures'
import AgencyWorkflow from '../components/agency/AgencyWorkflow'
import AgencyIntegrations from '../components/agency/AgencyIntegrations'
import AgencyTestimonials from '../components/agency/AgencyTestimonials'
import AgencyCTA from '../components/agency/AgencyCTA'
import Footer from '../components/Footer'

export default function AgencyPage() {
  return (
    <>
      <AgencyHero />
      <AgencyProblems />
      <AgencyFeatures />
      <AgencyWorkflow />
      <AgencyIntegrations />
      <AgencyTestimonials />
      <AgencyCTA />
      <Footer />
    </>
  )
}
