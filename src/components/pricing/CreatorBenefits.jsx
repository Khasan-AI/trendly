import { Check } from 'lucide-react'

const benefits = [
  {
    icon: '🔒',
    title: 'Secure Payments',
    desc: 'All payments are held in escrow until campaign completion. You\'re protected from non-payment and disputes.',
    items: ['Payment guarantee', 'Dispute resolution', 'Fraud protection'],
  },
  {
    icon: '📊',
    title: 'Track Your Performance',
    desc: 'Real-time analytics show exactly how your content performs. Prove your value to brands with data.',
    items: ['Engagement metrics', 'Conversion tracking', 'Revenue reports'],
  },
  {
    icon: '🔍',
    title: 'Find Quality Brands',
    desc: 'Get matched with brands that align with your audience and values. No more cold outreach.',
    items: ['AI-powered matching', 'Verified brands', 'Transparent rates'],
  },
  {
    icon: '⚡',
    title: 'Fast Payouts',
    desc: 'Get paid quickly with flexible payout options. Pro members get same-day payouts.',
    items: ['Multiple payment methods', 'Instant payout option', 'Low fees'],
  },
  {
    icon: '🎨',
    title: 'Build Your Brand',
    desc: 'Professional portfolio pages and media kits help you stand out and win more deals.',
    items: ['Custom portfolio', 'Media kit generator', 'Verified badge'],
  },
  {
    icon: '👥',
    title: 'Creator Community',
    desc: 'Join a community of creators. Share tips, collaborate, and grow together.',
    items: ['Private community', 'Networking events', 'Educational resources'],
  },
]

export default function CreatorBenefits() {
  return (
    <section className="bg-[#f9fafb] py-12 lg:py-20 border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2">Why Creators Choose Trendly</h2>
          <p className="text-gray-500">Everything you need to build and grow your creator business</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {benefits.map(({ icon, title, desc, items }) => (
            <div key={title} className="bg-white border border-gray-200 rounded-2xl p-5 lg:p-7 flex flex-col gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#009cde]/10 flex items-center justify-center text-2xl">
                {icon}
              </div>
              <h3 className="text-lg font-bold text-black">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              <div className="flex flex-col gap-2 pt-1">
                {items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check size={12} className="text-[#009cde] shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
