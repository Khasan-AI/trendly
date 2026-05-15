import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = {
  'For Brands': [
    {
      q: 'Can I switch plans at any time?',
      a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated for the remainder of your current period.',
    },
    {
      q: 'Is there a free trial available?',
      a: 'Yes! Standard and Premium plans come with a 14-day free trial — no credit card required. You can explore all features before committing.',
    },
    {
      q: 'What counts as a "creator connection"?',
      a: 'A creator connection is initiated when you send a collaboration invite or message to a creator. Accepted connections don\'t expire and remain active for your account.',
    },
    {
      q: 'Do unused campaign slots roll over?',
      a: 'Campaign slots are reset at the start of each billing cycle and do not roll over. However, you can upgrade anytime if you need more capacity.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept all major credit cards (Visa, Mastercard, Amex), as well as ACH bank transfers for annual plans. Enterprise invoicing is also available.',
    },
    {
      q: 'Is there a discount for annual billing?',
      a: 'Yes — annual billing saves you 20% compared to monthly. The discount is applied automatically when you select annual billing at checkout.',
    },
  ],
  'For Creators': [
    {
      q: 'How do I get paid on Trendly?',
      a: 'Payments are processed 7 days after campaign completion and approval. We support bank transfers, PayPal, and Stripe payouts in 30+ currencies.',
    },
    {
      q: 'Does Trendly take a commission?',
      a: 'On the Free plan, Trendly takes a 10% platform fee. Creator and Pro plans reduce this to 5%, and Agency plan creators enjoy a 3% rate.',
    },
    {
      q: 'Can I manage multiple social accounts?',
      a: 'Yes — you can connect Instagram, TikTok, YouTube, and Twitter/X accounts to your profile. All analytics are aggregated in a single dashboard.',
    },
    {
      q: 'What is "early campaign access"?',
      a: 'Pro and Agency plan creators get 48-hour early access to new brand campaigns before they open to all creators, giving you a competitive edge.',
    },
    {
      q: 'Is the Creator plan right for part-time creators?',
      a: 'Absolutely. The Creator plan is designed for anyone doing 2-10 brand deals per month. If you\'re just starting out, the Free plan is a great way to get your first collaborations.',
    },
  ],
  'For Agencies': [
    {
      q: 'Can I add team members to my account?',
      a: 'Yes. Starter includes 2 seats, Growth includes 5 seats, and Professional includes unlimited seats. You can manage permissions and roles for each team member.',
    },
    {
      q: 'How does white-label reporting work?',
      a: 'Growth and Professional plans let you replace Trendly branding with your agency\'s logo and colors on all client-facing reports and dashboards.',
    },
    {
      q: 'Can clients log into their own portal?',
      a: 'Yes — Growth and higher plans include a client portal where your clients can view live campaign performance without needing a full Trendly account.',
    },
    {
      q: 'What integrations are available?',
      a: 'Professional and Enterprise plans include API access for custom integrations. We also have native integrations with HubSpot, Salesforce, Slack, and major ad platforms.',
    },
    {
      q: 'Is there volume pricing for large agencies?',
      a: 'Yes — Enterprise plan pricing is fully custom. Contact our sales team to discuss volume discounts, dedicated infrastructure, and custom SLA terms.',
    },
  ],
}

export default function PricingFAQ({ activeTab }) {
  const [open, setOpen] = useState(null)
  const items = faqs[activeTab]

  return (
    <section className="bg-white py-12 lg:py-20 border-t border-gray-100">
      <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2 text-center">Frequently Asked Questions</h2>
        <p className="text-gray-500 text-center mb-8 lg:mb-10">Everything you need to know about Trendly pricing</p>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
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
