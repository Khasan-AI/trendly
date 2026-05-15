import { ArrowRight } from 'lucide-react'

const ctaContent = {
  'For Brands': {
    bg: 'bg-[#f9fafb]',
    heading: 'Ready to Start Your Campaign?',
    sub: 'Join thousands of brands already running high-performing influencer campaigns on Trendly.',
    primary: { label: 'Start Free Today', style: { background: '#009cde', color: 'white' } },
    secondary: { label: 'Talk to Sales', style: { border: '2px solid black', background: 'white', color: 'black' } },
    note: 'No credit card required · 14-day free trial · Cancel anytime',
  },
  'For Creators': {
    bg: 'bg-white',
    heading: 'Start Your Creator Journey Today',
    sub: 'Get discovered by top brands, grow your income, and manage your entire creator business in one place.',
    primary: { label: 'Join Free', style: { background: '#009cde', color: 'white' } },
    secondary: { label: 'View Pro Features', style: { border: '2px solid black', background: 'white', color: 'black' } },
    note: 'Free forever · No credit card needed · Upgrade anytime',
  },
  'For Agencies': {
    bg: 'bg-white',
    heading: 'Scale Your Agency Today',
    sub: 'Manage more creators, close more deals, and deliver better results — all from one powerful platform.',
    primary: { label: 'Start Free Trial', style: { background: '#009cde', color: 'white' } },
    secondary: { label: 'Schedule Demo', style: { border: '2px solid black', background: 'white', color: 'black' } },
    note: '14-day free trial · No credit card required · Cancel anytime',
  },
}

export default function PricingCTA({ activeTab = 'For Brands' }) {
  const c = ctaContent[activeTab] || ctaContent['For Brands']

  return (
    <section className={`${c.bg} py-12 lg:py-20 border-t border-gray-100`}>
      <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight">{c.heading}</h2>
        <p className="text-gray-500 text-base lg:text-lg">{c.sub}</p>
        <div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center w-full sm:w-auto">
          <a
            href="#"
            className="flex items-center gap-2 px-7 py-4 font-semibold rounded-xl transition-opacity hover:opacity-90 text-sm"
            style={c.primary.style}
          >
            {c.primary.label} <ArrowRight size={16} />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-7 py-4 font-semibold rounded-xl transition-opacity hover:opacity-80 text-sm"
            style={c.secondary.style}
          >
            {c.secondary.label}
          </a>
        </div>
        <p className="text-gray-400 text-sm">{c.note}</p>
      </div>
    </section>
  )
}
