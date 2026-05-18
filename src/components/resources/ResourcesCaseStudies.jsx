import { ArrowRight } from 'lucide-react'

const cases = [
  {
    company: 'Meta',    industry: 'Social Media',
    title: "Meta's Multi-Platform Approach to Business Suite Adoption",
    desc:  'Cross-platform campaign targeting small business owners with CPA model for Meta Business Suite signups.',
    stats: [{ v: '6.2x',  l: 'ROI' }, { v: '2,341', l: 'Signups' },        { v: '$124k', l: 'Revenue' }],
    read:  '10 min read',
  },
  {
    company: 'Stripe',  industry: 'FinTech',
    title: "Stripe's CPL Strategy for Developer Acquisition",
    desc:  "Targeted YouTube tech creators to drive qualified leads for Stripe's API documentation and developer tools.",
    stats: [{ v: '$12',  l: 'Cost per Lead' }, { v: '892',  l: 'Qualified Leads' }, { v: '34%',  l: 'Conversion Rate' }],
    read:  '6 min read',
  },
  {
    company: 'TikTok',  industry: 'Social Media',
    title: "TikTok Shop's Creator-Led Commerce Strategy",
    desc:  'Performance-based campaigns driving product purchases through native TikTok Shop integration with verified tracking.',
    stats: [{ v: '8.1x',  l: 'ROI' }, { v: '4,892', l: 'Orders' },          { v: '$287k', l: 'Revenue' }],
    read:  '7 min read',
  },
  {
    company: 'Shopify', industry: 'E-commerce',
    title: 'How Shopify Achieved 4.8x ROI with Micro-Influencers',
    desc:  'A 90-day CPA campaign targeting e-commerce store owners across Instagram and TikTok resulted in 1,247 qualified signups.',
    stats: [{ v: '4.8x',  l: 'ROI' }, { v: '1,247', l: 'Conversions' },     { v: '$87k',  l: 'Revenue' }],
    read:  '8 min read',
  },
]

/* Inline SVG icons matching Figma vectors */
const VerifiedIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7.5" stroke="#009cde" strokeWidth="1"/>
    <path d="M5 8l2.5 2.5L11 5" stroke="#009cde" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7" stroke="#111" strokeWidth="1.2"/>
    <path d="M8 5v3.5L10 10" stroke="#111" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

export default function ResourcesCaseStudies() {
  return (
    <section className="py-12 lg:py-20 border-t border-gray-200" style={{ background: '#eeeeee' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 lg:mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-1">Case Studies</h2>
          <p className="text-sm lg:text-base" style={{ color: '#111111' }}>Real campaigns, real results, real data</p>
        </div>

        {/* Cards — 2-col on desktop, 1 col on mobile, horizontal scroll on tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {cases.map((c) => (
            <div key={c.company} className="bg-white rounded-2xl flex flex-col p-5 lg:p-7 gap-4 lg:gap-5">
              {/* Company + industry */}
              <div className="flex items-center gap-3">
                <span className="text-2xl lg:text-3xl font-bold text-black">{c.company}</span>
                <div className="w-px h-5 lg:h-6 bg-black rounded-full" />
                <span className="text-sm" style={{ color: '#111111' }}>{c.industry}</span>
              </div>

              {/* Title + desc */}
              <div>
                <h3 className="font-bold text-black mb-2 leading-snug text-sm lg:text-base">{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#111111' }}>{c.desc}</p>
              </div>

              {/* Stats */}
              <div className="flex gap-6 lg:gap-8">
                {c.stats.map((s) => (
                  <div key={s.l}>
                    <div className="text-xl lg:text-2xl font-bold text-[#009cde]">{s.v}</div>
                    <div className="text-xs mt-0.5" style={{ color: '#111111' }}>{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: '#111111' }}>
                    <VerifiedIcon /> Verified by Trendly
                  </div>
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: '#111111' }}>
                    <ClockIcon /> {c.read}
                  </div>
                </div>
                <a href="#" className="flex items-center gap-1.5 text-[#009cde] font-semibold text-sm hover:underline shrink-0">
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
