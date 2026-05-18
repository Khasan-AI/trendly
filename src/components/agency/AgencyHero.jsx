import { ArrowRight, Calendar } from 'lucide-react'
import AgenciesIcon from '../../assets/icons/250+ Agencies.svg'

const brandRows = [
  { name: 'FashionCorp', campaigns: '12 active campaigns', revenue: '$125K' },
  { name: 'TechStartup', campaigns: '8 active campaigns',  revenue: '$89K'  },
]

/* Blue star SVG (Figma vector) */
const StarIcon = () => (
  <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
    <path
      d="M8.5 1l1.9 3.8 4.2.6-3 2.9.7 4.2-3.8-2-3.8 2 .7-4.2-3-2.9 4.2-.6z"
      fill="#009cde"
    />
  </svg>
)

export default function AgencyHero() {
  return (
    <section className="bg-black py-14 lg:py-0 lg:min-h-[720px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 py-12 lg:py-20">

          {/* ── Left ── */}
          <div className="flex-1 flex flex-col gap-6 lg:gap-7">
            {/* Badge */}
            <div
              className="inline-flex w-fit items-center px-5 py-2.5 rounded-full"
              style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}
            >
              <span className="text-sm font-medium text-black">White-Label Solution</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Scale Your<br />Agency Empire
            </h1>

            {/* Subtitle */}
            <p className="text-white text-base lg:text-lg leading-relaxed max-w-lg">
              Manage unlimited brands and creators from one powerful dashboard.
              White-label everything, export detailed reports, and scale without limits.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#"
                className="flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#009cde] text-white font-semibold rounded-xl hover:bg-[#0089c4] transition-colors text-sm lg:text-base"
              >
                Start Free Trial <ArrowRight size={16} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2.5 px-8 py-3.5 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm lg:text-base"
                style={{ border: '1px solid #ffffff' }}
              >
                Book Demo <Calendar size={15} />
              </a>
            </div>

            {/* Social proof badges */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-white text-sm">
                <img src={AgenciesIcon} className="w-5 h-4 object-contain" alt="" style={{ filter: 'brightness(0) saturate(100%) invert(40%) sepia(100%) saturate(700%) hue-rotate(175deg)' }} />
                250+ Agencies
              </div>
              <div className="flex items-center gap-2 text-white text-sm">
                <StarIcon />
                4.9/5 Rating
              </div>
            </div>
          </div>

          {/* ── Right – Dashboard card ── */}
          <div className="w-full lg:flex-1 lg:max-w-[584px]">
            <div
              className="bg-white rounded-2xl overflow-hidden"
              style={{ border: '1px solid #f3f4f6' }}
            >
              {/* Card header */}
              <div
                className="flex items-center justify-between px-6 py-4"
                style={{ background: '#f9fafb' }}
              >
                <span className="font-bold text-black text-base">Agency Dashboard</span>
                <div className="flex items-center gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-3 h-3 rounded-full" style={{ background: '#d1d5db' }} />
                  ))}
                </div>
              </div>

              <div className="p-5 lg:p-6 flex flex-col gap-4" style={{ background: '#f9fafb' }}>
                {/* 3-stat row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { v: '15',    l: 'Active Brands' },
                    { v: '342',   l: 'Campaigns' },
                    { v: '$2.4M', l: 'Managed Budget' },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="bg-white rounded-xl p-3 lg:p-4"
                      style={{ border: '1px solid #f3f4f6' }}
                    >
                      <div className="text-xl lg:text-2xl font-bold text-[#009cde]">{s.v}</div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-snug">{s.l}</div>
                    </div>
                  ))}
                </div>

                {/* Brand rows */}
                <div className="flex flex-col gap-2">
                  {brandRows.map((b) => (
                    <div
                      key={b.name}
                      className="flex items-center justify-between bg-white rounded-xl px-4 py-3"
                      style={{ border: '1px solid #f3f4f6' }}
                    >
                      <div className="flex items-center gap-3">
                        {/* Avatar placeholder */}
                        <div className="w-10 h-10 rounded-lg shrink-0" style={{ background: '#e5e7eb' }} />
                        <div>
                          <div className="text-sm font-semibold text-black">{b.name}</div>
                          <div className="text-xs text-gray-500">{b.campaigns}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-black">{b.revenue}</div>
                        <div className="text-xs text-gray-400">This month</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
