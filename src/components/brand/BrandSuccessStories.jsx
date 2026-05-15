import { Check, TrendingUp, ShieldCheck, Zap } from 'lucide-react'

const cards = [
  {
    icon: TrendingUp,
    title: '340% Average ROI',
    desc: 'Brands see an average 340% return on investment within the first 90 days. Our performance-based model ensures you only pay for results that matter.',
    points: [
      'Pay only for verified conversions',
      'Real-time ROI tracking',
      'Predictable cost per acquisition',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Zero Fraud Guarantee',
    desc: 'Our military-grade verification system eliminates fake followers, bot traffic, and fraudulent conversions. Every influencer is verified through official APIs.',
    points: [
      'Official OAuth verification',
      'AI-powered fraud detection',
      'Follower authenticity scores',
    ],
  },
  {
    icon: Zap,
    title: 'Launch in 48 Hours',
    desc: 'From campaign creation to first influencer collaboration in under 48 hours. Our AI matches you with perfect creators instantly.',
    points: [
      'AI-powered matching algorithm',
      'Pre-vetted influencer pool',
      'Automated onboarding process',
    ],
  },
]

export default function BrandSuccessStories() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-xs font-medium text-gray-500 mb-6">
            Success Stories
          </div>
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-2">
            Why Top Brands Choose Trendly
          </h2>
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-4">Real Results, Real Growth</h2>
          <p className="text-gray-500 text-lg">
            Join 2,400+ brands that have transformed their influencer marketing with our platform
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {cards.map((c) => {
            const Icon = c.icon
            return (
              <div
                key={c.title}
                className="border border-gray-200 rounded-2xl p-6 lg:p-8 flex flex-col gap-5 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 border-2 border-[#009cde] rounded-xl flex items-center justify-center">
                  <Icon size={26} className="text-[#009cde]" />
                </div>
                <h3 className="text-xl font-bold text-black">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <Check size={14} className="text-[#009cde] shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
