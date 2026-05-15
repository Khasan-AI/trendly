import { useState } from 'react'
import { ChevronDown, MessageCircle, BookOpen } from 'lucide-react'

const faqs = [
  {
    q: 'How does performance-based pricing work?',
    a: 'You only pay when influencers deliver verified results — whether that\'s sales (CPA), clicks (CPC), leads (CPL), or orders (CPO). Set your target cost per action, and our platform tracks every conversion through official APIs, promo codes, or UTM parameters. No results = no payment.',
  },
  {
    q: "What's the minimum budget to start?",
    a: 'The minimum campaign budget starts at $500. You can scale up or down based on your goals. Our 2% platform fee applies per transaction with a minimum of 10,000 UZS.',
  },
  {
    q: 'How long does it take to launch a campaign?',
    a: 'From registration to first influencer collaboration takes under 48 hours. Campaign setup takes 15-30 minutes. AI matching happens instantly. Content goes live within 24-48 hours of brief acceptance.',
  },
  {
    q: 'How do you verify influencer authenticity?',
    a: 'Every influencer connects via official OAuth (Instagram, TikTok, YouTube APIs). We analyze follower authenticity scores, engagement rates, and historical performance. No manual submissions — all data comes directly from official APIs.',
  },
  {
    q: "What happens if an influencer doesn't deliver?",
    a: 'Your campaign budget is pre-funded in escrow. If an influencer misses deadlines or delivers non-compliant content, funds are automatically returned. Our 3-iteration policy and documented approval process protects your investment.',
  },
  {
    q: 'Can I work with influencers from multiple countries?',
    a: 'Yes! We have verified influencers across Uzbekistan, Kazakhstan, Russia, and other CIS countries. Our platform handles multi-currency campaigns with localized tracking and reporting.',
  },
  {
    q: "What's included in the 2% platform fee?",
    a: 'The 2% fee covers: verified influencer matching, fraud protection, contract management, payment escrow, conversion tracking infrastructure, dispute resolution, and 24/7 platform support.',
  },
  {
    q: 'Do you offer API access for agencies?',
    a: 'Yes, we offer a full REST API for agencies managing multiple brand accounts. White-label dashboard options are available for enterprise clients. Contact our sales team for agency pricing.',
  },
]

export default function BrandFAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="bg-white py-12 lg:py-20 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-black mb-2 text-center">Frequently Asked Questions</h2>
        <p className="text-gray-500 text-center mb-10">
          Get answers to common questions about launching campaigns on Trendly
        </p>

        <div className="flex flex-col gap-3 mb-10">
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

        {/* Still have questions? */}
        <div className="bg-[#f5f7fa] border border-gray-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-black mb-2">Still Have Questions?</h3>
          <p className="text-gray-500 mb-6">Our team is here to help you succeed</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2.5 px-7 py-3 bg-[#009cde] text-white font-semibold rounded-xl hover:bg-[#0089c4] transition-colors text-sm w-full sm:w-auto justify-center"
            >
              <MessageCircle size={16} />
              Chat with Sales
            </a>
            <a
              href="#"
              className="flex items-center gap-2.5 px-7 py-3 border-2 border-black text-black font-semibold rounded-xl hover:bg-gray-50 transition-colors text-sm w-full sm:w-auto justify-center"
            >
              <BookOpen size={16} />
              Browse Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
