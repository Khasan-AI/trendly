import { Check, Building2, Mic2, Briefcase } from 'lucide-react'

const personas = [
  {
    Icon: Building2,
    title: 'For Brands',
    benefits: [
      { title: 'Pay Only for Results', desc: 'CPA, CPC, CPL, or CPO — you choose the pricing model that fits your goals' },
      { title: 'Full Funnel Analytics', desc: 'Track every touchpoint from influencer post to checkout completion' },
      { title: 'Anti-Fraud Protection', desc: 'Follower authenticity scores, ratings, and verified tracking' },
    ],
    stat: { label: 'Average ROI', value: '4.2x', bar: true, barPct: 84, trend: null },
  },
  {
    Icon: Mic2,
    title: 'For Creators',
    benefits: [
      { title: 'Guaranteed Payments', desc: 'All campaigns pre-funded. No "ghost" brands or payment delays' },
      { title: 'Clear Briefs', desc: 'Maximum 3 content iterations. No endless revision requests' },
      { title: 'Transparent Ratings', desc: 'Build your reputation with verified campaign performance data' },
    ],
    stat: { label: 'Avg. Monthly Earnings', value: '$3,200', bar: false, trendIcon: 'arrow', trend: '+28% vs last quarter' },
  },
  {
    Icon: Briefcase,
    title: 'For Agencies',
    benefits: [
      { title: 'White-Label Control', desc: 'Manage multiple brands and creators from one dashboard' },
      { title: 'Exportable Reports', desc: 'Complete audit logs and case archives for client reporting' },
      { title: 'Secure API', desc: 'AES-256 encryption with separated financial infrastructure' },
    ],
    stat: { label: 'Time Saved', value: '40hrs', bar: false, trendIcon: 'clock', trend: 'per month on average' },
  },
]

export default function PersonaBenefits() {
  return (
    <section className="bg-white py-14 lg:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2">Built for Every Stakeholder</h2>
          <p className="text-gray-500 text-base lg:text-lg">Transparent benefits for brands, creators, and agencies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {personas.map(({ Icon, title, benefits, stat }) => (
            <div key={title} className="bg-white rounded-2xl flex flex-col" style={{ border: '1px solid #f3f4f6' }}>
              <div className="p-5 lg:p-7 flex flex-col gap-4 lg:gap-5 flex-1">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-[#009cde]/10 flex items-center justify-center">
                  <Icon size={22} className="text-[#009cde] lg:hidden" />
                  <Icon size={26} className="text-[#009cde] hidden lg:block" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-black">{title}</h3>
                <div className="flex flex-col gap-4">
                  {benefits.map((b) => (
                    <div key={b.title} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded bg-[#009cde]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={11} className="text-[#009cde]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-black">{b.title}</div>
                        <div className="text-sm text-gray-500 mt-0.5 leading-relaxed">{b.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#f9fafb] rounded-b-2xl px-5 lg:px-7 py-4 lg:py-5 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{stat.label}</span>
                  <span className="text-xl lg:text-2xl font-bold text-[#009cde]">{stat.value}</span>
                </div>
                {stat.bar && (
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#009cde] rounded-full" style={{ width: `${stat.barPct}%` }} />
                  </div>
                )}
                {stat.trend && (
                  <div className="flex items-center gap-1.5">
                    {stat.trendIcon === 'arrow' && (
                      <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                        <path d="M1 13L6 6L10 9L15 1" stroke="#009cde" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {stat.trendIcon === 'clock' && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="6" stroke="#009cde" strokeWidth="1.5" />
                        <path d="M7 4V7L9 9" stroke="#009cde" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    )}
                    <span className="text-sm text-gray-500">{stat.trend}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
