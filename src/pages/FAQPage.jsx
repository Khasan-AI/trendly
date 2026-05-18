import { useState } from 'react'
import { Search, Plus, Minus } from 'lucide-react'
import Footer from '../components/Footer'
import SendEmailIcon from '../assets/icons/Send Email.svg'
import OpenChatIcon from '../assets/icons/Open Chat.svg'
import JoinCommunityIcon from '../assets/icons/Join Community.svg'

// ─── DATA ────────────────────────────────────────────────────────────────────

const popularQuestions = [
  'How does payment verification work?',
  'What tracking methods are supported?',
  'How long does account verification take?',
  "What's the minimum campaign budget?",
  'How are disputes handled?',
  'Can I integrate with my existing tools?',
  'How do I connect my social media accounts?',
  'What happens if a campaign underperforms?',
]

const sidebarCategories = [
  { id: 'getting-started',      label: 'Getting Started',      count: 12 },
  { id: 'account-verification', label: 'Account & Verification', count: 8 },
  { id: 'campaigns',            label: 'Campaigns',             count: 15 },
  { id: 'payments',             label: 'Payments & Billing',    count: 10 },
  { id: 'tracking',             label: 'Tracking & Analytics',  count: 9 },
  { id: 'creator-tools',        label: 'Creator Tools',         count: 11 },
  { id: 'brand-tools',          label: 'Brand Tools',           count: 13 },
  { id: 'agency-features',      label: 'Agency Features',       count: 7 },
  { id: 'security',             label: 'Security & Privacy',    count: 6 },
  { id: 'troubleshooting',      label: 'Troubleshooting',       count: 14 },
]

const sections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    items: [
      { q: 'What is Trendly and how does it work?', a: 'Trendly is a performance marketing marketplace that connects brands, creators, and agencies through verified tracking and pre-funded campaigns. Brands set target costs per action (CPA, CPC, CPL), creators apply and produce content, and payments are automatically released when conversions are verified.' },
      { q: 'How do I create an account?', a: 'Click "Start Free" in the top navigation and choose your account type (Brand, Creator, or Agency). Complete the verification process, connect your social media accounts via OAuth, and your account will be active within 24 hours.' },
      { q: 'Is there a free trial?', a: 'Yes! Brands and agencies get a 14-day free trial on Standard and above plans. Creators can join completely free and start applying to campaigns immediately.' },
      { q: 'What platforms do you support?', a: 'We support Instagram, TikTok, YouTube, and Twitter/X. All connections are made via official OAuth APIs to ensure data accuracy and security.' },
    ],
  },
  {
    id: 'account-verification',
    title: 'Account & Verification',
    items: [
      { q: 'How does payment verification work?', a: 'Brands pre-fund campaigns before any content is published. Payments are held in escrow and automatically released to creators when conversions are verified via official API tracking. No manual invoices needed.' },
      { q: 'How long does account verification take?', a: 'Brand verification via tax authority typically takes 1–2 business days. Creator OAuth verification is instant. Most accounts are fully active within 24 hours.' },
      { q: 'Can I verify multiple social accounts?', a: 'Yes! You can connect Instagram, TikTok, YouTube, and Twitter/X accounts to your profile. All analytics are aggregated in a single dashboard.' },
    ],
  },
  {
    id: 'campaigns',
    title: 'Campaigns',
    items: [
      { q: "What's the minimum campaign budget?", a: 'The minimum campaign budget is 500,000 UZS (approximately $40). Our 2% platform fee applies, with a minimum of 10,000 UZS per transaction.' },
      { q: 'What pricing models are available?', a: 'We support CPA (cost per action), CPC (cost per click), CPL (cost per lead), CPO (cost per order), and fixed-price campaigns. You can mix models within a single campaign.' },
      { q: 'How many content revisions are allowed?', a: 'Our platform enforces a maximum of 3 revision rounds per campaign. If a brand needs more changes beyond that, they must either approve the content as-is or create a new campaign with updated requirements.' },
      { q: 'What happens if a campaign underperforms?', a: 'Your campaign budget is pre-funded in escrow. If targets are not met, unspent funds are automatically returned. Our 3-iteration policy and documented approval process protects your investment.' },
    ],
  },
  {
    id: 'payments',
    title: 'Payments & Billing',
    items: [
      { q: 'When do creators get paid?', a: 'Payments are processed 7 days after campaign completion and approval. We support bank transfers, PayPal, and Stripe payouts in 30+ currencies.' },
      { q: 'What payment methods are accepted?', a: 'We accept all major credit cards (Visa, Mastercard, Amex), ACH bank transfers for annual plans, and local payment methods in supported regions. Enterprise invoicing is also available.' },
      { q: 'Are there any hidden fees?', a: 'No hidden fees. We charge a transparent 2% platform fee on all transactions (1.5% for Premium plans). This covers fraud protection, payment escrow, tracking infrastructure, and 24/7 support.' },
    ],
  },
  {
    id: 'tracking',
    title: 'Tracking & Analytics',
    items: [
      { q: 'What tracking methods are supported?', a: 'We support promo codes, UTM links, pixel-based tracking, and direct API integrations with Shopify, WooCommerce, and custom webhooks. All tracking is via official APIs — no screenshot-based reporting.' },
      { q: 'How accurate is the conversion tracking?', a: 'Our tracking is 99.7% accurate thanks to official API integrations. We cross-reference multiple data sources and provide real-time discrepancy alerts if numbers don\'t match.' },
      { q: 'Can I export analytics reports?', a: 'Yes. Standard plans and above can export reports in CSV and PDF formats. Premium plans include scheduled automated reports sent directly to your email or Slack.' },
    ],
  },
  {
    id: 'creator-tools',
    title: 'Creator Tools',
    items: [
      { q: 'How do I connect my social media accounts?', a: 'Go to your Creator Dashboard → Settings → Connected Accounts. Click the platform you want to connect and authorize via OAuth. Your analytics will sync automatically within a few minutes.' },
      { q: 'How are creator ratings calculated?', a: 'Ratings are based on: on-time delivery (40%), content quality scores from brands (30%), engagement rate authenticity (20%), and revision efficiency (10%). Ratings update after each completed campaign.' },
      { q: 'Can I decline a campaign offer?', a: 'Yes, you can decline any campaign offer without penalty. Simply click "Decline" and optionally provide a reason. Declining too many offers may affect your placement in search results.' },
    ],
  },
  {
    id: 'brand-tools',
    title: 'Brand Tools',
    items: [
      { q: 'How do I find the right creators?', a: 'Use our AI-powered search to filter by niche, follower count, engagement rate, location, audience demographics, and past campaign performance. Our matching algorithm suggests creators based on your campaign goals.' },
      { q: 'What is a follower authenticity score?', a: 'Our authenticity score (0–100) measures the percentage of real, engaged followers vs. bots or inactive accounts. Scores above 80 are considered excellent. We scan all connected accounts weekly.' },
      { q: 'Can I pause or cancel a campaign?', a: 'Yes. You can pause a campaign at any time from your dashboard. Any unspent budget is held in escrow and can be reactivated or refunded within 30 days.' },
    ],
  },
  {
    id: 'agency-features',
    title: 'Agency Features',
    items: [
      { q: 'What is white-label access?', a: 'White-label access lets you replace Trendly branding with your own agency logo and colors on all client-facing reports, dashboards, and email communications. Available on Growth and Professional plans.' },
      { q: 'How many clients can I manage?', a: 'Starter: 3 clients, Growth: 10 clients, Professional: unlimited. Each client gets their own isolated dashboard with separate campaign budgets and reporting.' },
    ],
  },
  {
    id: 'security',
    title: 'Security & Privacy',
    items: [
      { q: 'How is my financial data protected?', a: 'All financial data is encrypted with AES-256 at rest and TLS 1.3 in transit. We are PCI DSS Level 1 compliant and undergo quarterly third-party security audits.' },
      { q: 'Can I integrate with my existing tools?', a: 'Yes. We offer native integrations with HubSpot, Salesforce, Slack, and major ad platforms. Professional and Enterprise plans include full API access for custom integrations.' },
    ],
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    items: [
      { q: 'How are disputes handled?', a: 'Our platform provides a full audit trail of every action. If a dispute arises, our team reviews the timestamped logs and API data. Most disputes are resolved within 48 hours.' },
      { q: "What if tracking isn't working?", a: 'First, verify your UTM parameters are correctly formatted and your pixel is firing. Check our Tracking Debug tool in Settings. If issues persist, our technical support team responds within 4 hours.' },
      { q: "I can't login. What should I do?", a: 'Try resetting your password via "Forgot Password". If you use social OAuth login, ensure your connected account is active. For persistent issues, contact support@trendly.com with your account email.' },
    ],
  },
]

const contactCards = [
  {
    icon: <img src={SendEmailIcon} className="w-6 h-6 object-contain" alt="" />,
    title: 'Send Email',
    desc: 'Get a response within 4 hours',
    link: 'support@trendly.com',
  },
  {
    icon: <img src={OpenChatIcon} className="w-6 h-6 object-contain" alt="" />,
    title: 'Open Chat',
    desc: 'Chat with our support team',
    link: 'Start conversation',
  },
  {
    icon: <img src={JoinCommunityIcon} className="w-6 h-6 object-contain" alt="" />,
    title: 'Join Community',
    desc: '4,200+ brands, creators, agencies',
    link: 'Join forum',
  },
]

// ─── ACCORDION ITEM ──────────────────────────────────────────────────────────

function AccordionItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#f3f4f6]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-0 py-5 text-left hover:opacity-80 transition-opacity"
      >
        <span className="text-base font-medium text-black pr-8 leading-snug">{q}</span>
        {isOpen
          ? <Minus size={15} className="text-[#009cde] shrink-0" />
          : <Plus  size={15} className="text-[#009cde] shrink-0" />
        }
      </button>
      {isOpen && (
        <div className="pb-5 text-sm text-gray-600 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────

export default function FAQPage() {
  const [search, setSearch]       = useState('')
  const [persona, setPersona]     = useState('All')
  const [activeSection, setActiveSection] = useState('getting-started')
  const [openItems, setOpenItems] = useState({})

  const personas = ['All', 'Brands', 'Creators', 'Agencies']
  const popularTags = ['Payment methods', 'API integration', 'Campaign setup', 'Verification']

  const toggleItem = (sectionId, idx) => {
    const key = `${sectionId}-${idx}`
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const scrollToSection = (id) => {
    setActiveSection(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-white py-12 lg:py-16 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-5 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">How can we help you?</h1>
          <p className="text-gray-600 text-lg">Search our knowledge base or browse categories below</p>

          {/* Search */}
          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search for answers..."
              className="w-full border border-black rounded-xl px-5 py-4 pr-12 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#009cde]/30"
            />
            <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Popular tags */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="text-sm text-gray-500">Popular:</span>
            {popularTags.map(tag => (
              <button
                key={tag}
                className="px-3 py-1.5 bg-[#f3f4f6] text-black text-sm rounded-lg hover:bg-gray-200 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERSONA FILTER ── */}
      <section className="bg-white border-b border-[#f3f4f6]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-2 py-4">
            {personas.map(p => (
              <button
                key={p}
                onClick={() => setPersona(p)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  persona === p
                    ? 'bg-black text-white'
                    : 'bg-white text-black border border-gray-200 hover:border-gray-400'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="bg-white py-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">

          {/* Mobile category chips (shown only below lg) */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 lg:hidden mb-6">
            {sidebarCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className={`flex-none px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-colors border ${
                  activeSection === cat.id
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex gap-12">
            {/* Sidebar – hidden on mobile, visible lg+ */}
            <div className="w-64 shrink-0 hidden lg:block">
              <div className="sticky top-24">
                <a href="#" className="text-[#009cde] text-sm font-semibold block mb-4">
                  Contact Support
                </a>
                <nav className="flex flex-col">
                  {sidebarCategories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => scrollToSection(cat.id)}
                      className={`flex items-center justify-between py-3 text-left text-sm transition-colors border-l-2 pl-3 ${
                        activeSection === cat.id
                          ? 'border-[#009cde] text-black font-semibold'
                          : 'border-transparent text-gray-500 hover:text-black'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span className="text-gray-400 text-xs">{cat.count}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main */}
            <div className="flex-1 min-w-0 flex flex-col gap-10">

              {/* Popular Questions */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-5">Popular Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {popularQuestions.map((q, i) => (
                    <button
                      key={i}
                      className="bg-[#f9fafb] border border-[#f3f4f6] rounded-xl px-5 py-4 text-left text-sm font-medium text-black hover:border-gray-300 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Accordion sections */}
              {sections.map(section => (
                <div key={section.id} id={section.id} className="scroll-mt-24 lg:scroll-mt-[110px]">
                  <h2 className="text-2xl font-bold text-black pb-4 border-b border-[#f3f4f6] mb-1">
                    {section.title}
                  </h2>
                  {section.items.map((item, idx) => (
                    <AccordionItem
                      key={idx}
                      q={item.q}
                      a={item.a}
                      isOpen={!!openItems[`${section.id}-${idx}`]}
                      onToggle={() => toggleItem(section.id, idx)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT BAND ── */}
      <section className="bg-black py-12 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-2">Still have questions?</h2>
            <p className="text-[#d1d5db]">Our team replies in under 4 business hours</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {contactCards.map((card, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 text-center p-6 lg:p-8 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,156,222,0.2)' }}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                <p className="text-sm text-[#9ca3af]">{card.desc}</p>
                <a href="#" className="text-[#009cde] text-sm font-semibold hover:underline">
                  {card.link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
