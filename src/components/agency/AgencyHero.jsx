import { ArrowRight, Calendar } from 'lucide-react'

const heroStats = [
  { value: '250+', label: 'Agencies Using Trendly', sub: 'Growing 40% monthly' },
  { value: '$50M+', label: 'Budget Managed', sub: 'Across all platforms' },
  { value: '40hrs', label: 'Saved Per Month', sub: 'Average per agency' },
  { value: '98.9%', label: 'Client Retention', sub: 'Industry leading' },
]

const brandRows = [
  { name: 'FashionCorp', campaigns: '12 active campaigns', revenue: '$125K' },
  { name: 'TechStartup', campaigns: '8 active campaigns', revenue: '$89K' },
  { name: 'BeautyBrand', campaigns: '15 active campaigns', revenue: '$74K' },
]

export default function AgencyHero() {
  return (
    <section className="bg-black py-14 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main hero row */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left */}
          <div className="flex-1 flex flex-col gap-7">
            <div className="inline-flex w-fit items-center px-4 py-2 border border-white/20 rounded-lg">
              <span className="text-sm text-white/80">White-Label Solution</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Scale Your<br />Agency Empire
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              Manage unlimited brands and creators from one powerful dashboard.
              White-label everything, export detailed reports, and scale without limits.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#" className="flex items-center gap-2.5 px-8 py-4 bg-[#009cde] text-white font-semibold rounded-xl hover:bg-[#0089c4] transition-colors w-full sm:w-auto justify-center">
                Start Free Trial <ArrowRight size={18} />
              </a>
              <a href="#" className="flex items-center gap-2.5 px-8 py-4 border border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors w-full sm:w-auto justify-center">
                <Calendar size={16} /> Book Demo
              </a>
            </div>
            <div className="flex items-center gap-8">
              {['250+ Agencies', '4.9 / 5 Rating'].map((b) => (
                <div key={b} className="flex items-center gap-2 text-white/60 text-sm">
                  <div className="w-4 h-4 rounded-full bg-[#009cde]" />
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Right – dashboard card */}
          <div className="w-full lg:max-w-[520px]">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-black">Agency Dashboard</span>
                <div className="flex gap-1.5">
                  {[1, 2, 3].map((i) => <div key={i} className="w-3 h-3 rounded-full bg-gray-300" />)}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[{ v: '15', l: 'Active Brands' }, { v: '342', l: 'Campaigns' }, { v: '$2.4M', l: 'Managed' }].map(s => (
                  <div key={s.l} className="bg-gray-50 rounded-xl p-3 text-center">
                    <div className="text-xl font-bold text-[#009cde]">{s.v}</div>
                    <div className="text-xs text-gray-500">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {brandRows.map((b) => (
                  <div key={b.name} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-200" />
                      <div>
                        <div className="text-sm font-semibold text-black">{b.name}</div>
                        <div className="text-xs text-gray-400">{b.campaigns}</div>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-black">{b.revenue}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between border-t border-gray-100 pt-3">
                <span className="text-xs text-gray-400">Total monthly budget</span>
                <span className="text-base font-bold text-[#009cde]">$487,500</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 border-t border-white/10 mt-12 lg:mt-16 pt-8 lg:pt-10">
          {heroStats.map((s) => (
            <div key={s.label} className="text-center px-4 lg:px-8 py-4 lg:py-0">
              <div className="text-2xl lg:text-4xl font-bold text-[#009cde]">{s.value}</div>
              <div className="text-white text-sm font-semibold mt-1">{s.label}</div>
              <div className="text-white/40 text-xs mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
