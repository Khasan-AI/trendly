// Routes: / | /brands | /agencies | /influencers | /resources | /pricing | /faq
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import BrandPage from './pages/BrandPage'
import AgencyPage from './pages/AgencyPage'
import InfluencerPage from './pages/InfluencerPage'
import ResourcesPage from './pages/ResourcesPage'
import PricingPage from './pages/PricingPage'
import FAQPage from './pages/FAQPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/brands" element={<BrandPage />} />
            <Route path="/influencers" element={<InfluencerPage />} />
            <Route path="/agencies" element={<AgencyPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
