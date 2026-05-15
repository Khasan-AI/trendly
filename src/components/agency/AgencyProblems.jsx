import { Monitor, FileText, DollarSign, MessageSquare, Check } from 'lucide-react'

const problems = [
  {
    icon: Monitor,
    title: 'Multiple Platform Chaos',
    desc: 'Managing campaigns across Instagram, TikTok, YouTube with different dashboards, reporting formats, and payment systems.',
    quote: '"We spend 20+ hours weekly just collecting data from different platforms"',
  },
  {
    icon: FileText,
    title: 'Manual Reporting Hell',
    desc: 'Creating client reports manually, chasing influencers for screenshots, and calculating ROI across different campaign types.',
    quote: '"Our team spends 2 days monthly just preparing client reports"',
  },
  {
    icon: DollarSign,
    title: 'Payment & Budget Tracking',
    desc: 'Tracking payments to hundreds of influencers, managing client budgets, and ensuring compliance across different currencies.',
    quote: '"We lost $15K last quarter due to payment tracking errors"',
  },
  {
    icon: MessageSquare,
    title: 'Influencer Communication Breakdown',
    desc: 'Managing communication with hundreds of creators across email, WhatsApp, Telegram, and Instagram DMs with no central system.',
    quote: '"We missed 3 campaign deadlines because messages got lost in different channels"',
  },
]

const solutions = [
  { title: 'Unified Dashboard', desc: 'Manage all platforms, brands, and campaigns from one central hub with real-time sync.' },
  { title: 'Automated Reporting', desc: 'White-label reports generated automatically with your branding, delivered to clients instantly.' },
  { title: 'Financial Control', desc: 'Automated payments, budget tracking, and full audit trail with client billing integration.' },
  { title: 'Centralized Communication', desc: 'Built-in messaging system with all influencer conversations, briefs, and approvals in one place.' },
]

export default function AgencyProblems() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-14">
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-3">Agency Challenges We Solve</h2>
          <p className="text-gray-500 text-lg">Stop juggling multiple tools and spreadsheets</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problems column */}
          <div className="flex flex-col gap-4">
            {problems.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.title} className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl border-2 border-[#009cde] flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-[#009cde]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-1">{p.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                  <div className="bg-[#f5f7fa] border border-[#009cde]/20 rounded-xl px-4 py-2">
                    <p className="text-xs text-gray-600 italic">{p.quote}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Solution column – black bg */}
          <div className="bg-black rounded-2xl p-6 lg:p-8 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-white">The Trendly Solution</h3>
            <div className="flex flex-col gap-5">
              {solutions.map((s) => (
                <div key={s.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl border-2 border-[#009cde] flex items-center justify-center shrink-0">
                    <Check size={16} className="text-[#009cde]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-0.5">{s.title}</div>
                    <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Big stat */}
            <div className="border border-gray-700 rounded-xl p-5 mt-auto text-center">
              <div className="text-4xl font-bold text-[#009cde]">40hrs</div>
              <div className="text-white text-sm mt-1">Saved monthly per agency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
