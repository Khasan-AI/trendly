import { ShieldCheck, ArrowRight, Clock } from 'lucide-react'

const cases = [
  {
    company: 'Meta', industry: 'Social Media',
    title: "Meta's Multi-Platform Approach to Business Suite Adoption",
    desc: 'Cross-platform campaign targeting small business owners with CPA model for Meta Business Suite signups.',
    stats: [{ v:'6.2x', l:'ROI' }, { v:'2,341', l:'Signups' }, { v:'$124k', l:'Revenue' }],
    read: '10 min read',
  },
  {
    company: 'Stripe', industry: 'FinTech',
    title: "Stripe's CPL Strategy for Developer Acquisition",
    desc: 'Targeted YouTube tech creators to drive qualified leads for Stripe API documentation and developer tools.',
    stats: [{ v:'$12', l:'Cost per Lead' }, { v:'892', l:'Qualified Leads' }, { v:'34%', l:'Conv. Rate' }],
    read: '6 min read',
  },
  {
    company: 'TikTok', industry: 'Social Media',
    title: "TikTok Shop's Creator-Led Commerce Strategy",
    desc: 'Performance-based campaigns driving product purchases through native TikTok Shop integration with verified tracking.',
    stats: [{ v:'8.1x', l:'ROI' }, { v:'4,892', l:'Orders' }, { v:'$287k', l:'Revenue' }],
    read: '7 min read',
  },
  {
    company: 'Shopify', industry: 'E-commerce',
    title: 'How Shopify Achieved 4.8x ROI with Micro-Influencers',
    desc: 'A 90-day CPA campaign targeting e-commerce store owners across Instagram and TikTok resulted in 1,247 qualified signups.',
    stats: [{ v:'4.8x', l:'ROI' }, { v:'1,247', l:'Conversions' }, { v:'$87k', l:'Revenue' }],
    read: '8 min read',
  },
]

export default function ResourcesCaseStudies() {
  return (
    <section className="bg-gray-100 py-12 lg:py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-2">Case Studies</h2>
          <p className="text-gray-500">Real campaigns, real results, real data</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div key={c.company} className="bg-white border border-gray-200 rounded-2xl p-5 lg:p-7 flex flex-col gap-5">
              {/* Header */}
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-black">{c.company}</span>
                <div className="w-1 h-5 bg-gray-200 rounded-full" />
                <span className="text-sm text-gray-500">{c.industry}</span>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2 leading-snug">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              </div>

              {/* Stats */}
              <div className="flex gap-6">
                {c.stats.map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-bold text-[#009cde]">{s.v}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-gray-50 pt-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <ShieldCheck size={12} className="text-[#009cde]" /> Verified by Trendly
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock size={12} /> {c.read}
                  </div>
                </div>
                <a href="#" className="flex items-center gap-1.5 text-[#009cde] font-semibold text-sm hover:underline">
                  Read Full Case Study <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
