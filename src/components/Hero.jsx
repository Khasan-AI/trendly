import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRight, TrendingUp } from 'lucide-react'

const roles = [
  { label: "I'm a Brand",   key: 'brand',   path: '/brands' },
  { label: "I'm a Creator", key: 'creator', path: '/influencers' },
  { label: "I'm an Agency", key: 'agency',  path: '/agencies' },
]

export default function Hero() {
  const [activeRole, setActiveRole] = useState('brand')
  const navigate = useNavigate()

  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left */}
          <div className="flex-1 flex flex-col gap-5 lg:gap-7 text-center lg:text-left">
            <div className="inline-flex w-fit mx-auto lg:mx-0 items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full">
              <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">
                Performance Marketing Marketplace
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
              Pay only for<br />real results
            </h1>

            <p className="text-base lg:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Connect brands, creators, and agencies in a transparent marketplace.
              Track conversions via official APIs. No screenshots, no guesswork.
            </p>

            {/* Role selector */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {roles.map((r) => (
                <button
                  key={r.key}
                  onClick={() => { setActiveRole(r.key); navigate(r.path) }}
                  className={`flex items-center gap-2 px-4 py-2.5 lg:px-5 lg:py-3 border rounded-lg text-sm font-medium transition-all ${
                    activeRole === r.key
                      ? 'border-[#009cde] bg-[#009cde]/5 text-black'
                      : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {r.label}
                  <ChevronRight size={14} className="text-[#009cde]" />
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-6 lg:gap-10 pt-2">
              {[
                { value: '8,932', label: 'Active Creators' },
                { value: '$2.4M', label: 'Paid Out' },
                { value: '100%', label: 'On-time Payments' },
              ].map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-xl lg:text-2xl font-bold text-[#009cde]">{s.value}</div>
                  <div className="text-xs lg:text-sm text-gray-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Dashboard card */}
          <div className="w-full lg:flex-1 lg:max-w-[560px]">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-5 lg:p-6 flex flex-col gap-4 lg:gap-5">
              <div className="flex items-center justify-between">
                <h3 className="text-base lg:text-lg font-semibold text-black">Campaign Dashboard</h3>
                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span> Live
                </span>
              </div>

              <div className="bg-[#009cde]/5 border border-[#009cde] rounded-xl p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">Revenue Tracked</span>
                  <TrendingUp size={16} className="text-[#009cde]" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-black">$127,430</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-semibold text-green-600">+23%</span>
                  <span className="text-sm text-gray-500">vs last month</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 lg:gap-3">
                {[
                  { value: '342', label: 'Conversions' },
                  { value: '4.2x', label: 'Avg ROI' },
                  { value: '89', label: 'Active' },
                ].map((s) => (
                  <div key={s.label} className="bg-gray-50 rounded-lg p-2.5 lg:p-3">
                    <div className="text-lg lg:text-xl font-bold text-black">{s.value}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                {[
                  { label: 'Instagram CPA', value: '$8,430', icon: '📸' },
                  { label: 'TikTok CPL',    value: '$5,210', icon: '🎵' },
                ].map((ch) => (
                  <div key={ch.label} className="flex items-center justify-between px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-100 rounded-lg">
                    <div className="flex items-center gap-2.5 lg:gap-3">
                      <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-lg bg-[#009cde]/10 flex items-center justify-center text-sm">
                        {ch.icon}
                      </div>
                      <span className="text-xs lg:text-sm font-medium text-black">{ch.label}</span>
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-[#009cde]">{ch.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
