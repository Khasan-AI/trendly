import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How does payment verification work?',
    a: 'Brands pre-fund campaigns before any content is published. Payments are held in escrow and automatically released to creators when conversions are verified via official API tracking. No manual invoices needed.',
  },
  {
    q: 'What tracking methods are supported?',
    a: 'We support promo codes, UTM links, pixel-based tracking, and direct API integrations with Shopify, WooCommerce, and custom webhooks. All tracking is via official APIs — no screenshot-based reporting.',
  },
  {
    q: 'How are disputes handled?',
    a: 'Our platform provides a full audit trail of every action. If a dispute arises, our team reviews the timestamped logs and API data. Most disputes are resolved within 48 hours.',
  },
  {
    q: "What's the minimum campaign budget?",
    a: 'The minimum campaign budget is 500,000 UZS (approximately $40). Our 2% platform fee applies, with a minimum of 10,000 UZS per transaction.',
  },
  {
    q: 'How long does verification take?',
    a: 'Brand verification via tax authority typically takes 1–2 business days. Creator OAuth verification is instant. Most accounts are fully active within 24 hours.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="bg-white py-12 lg:py-20 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-black mb-2 text-center">Common Questions</h2>
        <p className="text-gray-500 text-center mb-10">Everything you need to know</p>

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
