import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How do I get paid?',
    a: 'Payments are processed weekly or monthly, depending on your preference. You can receive funds via bank transfer, PayPal, or local e-wallets. All campaign budgets are pre-funded, so you\'re guaranteed to get paid once you complete the work.',
  },
  {
    q: 'What if a brand requests more than 3 revisions?',
    a: 'Our platform enforces a maximum of 3 revision rounds per campaign. If a brand needs more changes beyond that, they must either approve the content as-is or create a new campaign with updated requirements. This protects creators from endless revision cycles.',
  },
  {
    q: 'Can I work with multiple brands at once?',
    a: "Absolutely! There's no limit to how many campaigns you can participate in simultaneously. Many creators run 8–15 campaigns at once to maximize their earnings. Our content calendar helps you manage all deadlines in one place.",
  },
  {
    q: 'Do I need a certain number of followers to join?',
    a: 'We welcome creators of all sizes! While some campaigns have minimum follower requirements, many brands specifically look for micro-influencers (5K–50K followers) because of their high engagement rates. Focus on building an authentic, engaged audience rather than just follower count.',
  },
  {
    q: 'Can I set my own rates for fixed-price campaigns?',
    a: 'Yes! For fixed-price campaigns, you can set your own rates based on your follower count, engagement rate, and content type. Brands browse creator profiles and reach out with offers, or you can directly apply to campaigns that fit your pricing.',
  },
  {
    q: 'Is the platform free for creators?',
    a: "Yes, joining Trendly as a creator is completely free. We charge a small 2% platform fee only when you earn — so there's no upfront cost and no risk. You keep 98% of everything you earn.",
  },
]

export default function InfluencerFAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="bg-white py-12 lg:py-20 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-black mb-2 text-center">Common Questions</h2>
        <p className="text-gray-500 text-center mb-10">Everything you need to know about creating on Trendly</p>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-semibold text-black pr-4">{item.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-gray-400 shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
