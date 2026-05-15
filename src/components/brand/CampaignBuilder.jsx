import { Check, TrendingUp, BarChart3, Zap } from 'lucide-react'

const steps = [
  {
    num: '1',
    title: 'Set Campaign Goals',
    desc: 'Choose from CPA, CPC, CPL, CPO, or content-only campaigns',
  },
  {
    num: '2',
    title: 'AI-Powered Matching',
    desc: 'Get matched with influencers based on 15+ data points',
  },
  {
    num: '3',
    title: 'Launch & Track',
    desc: 'Real-time analytics and conversion tracking',
  },
]

function MiniDashboard() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#009cde]/10 flex items-center justify-center">
            <BarChart3 size={16} className="text-[#009cde]" />
          </div>
          <span className="font-semibold text-black">Campaign Builder</span>
        </div>
        <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full">Step 2 of 3</span>
      </div>

      {/* Goal type selector */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Campaign Type</span>
        <div className="grid grid-cols-3 gap-2">
          {['CPA', 'CPC', 'CPL'].map((t, i) => (
            <div
              key={t}
              className={`text-center py-2.5 rounded-lg text-sm font-semibold cursor-pointer ${
                i === 0
                  ? 'bg-[#009cde] text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* Budget */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Budget</span>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="w-2/3 h-full bg-[#009cde] rounded-full" />
          </div>
          <span className="text-sm font-bold text-[#009cde]">$5,000</span>
        </div>
      </div>

      {/* AI Matching */}
      <div className="bg-[#009cde]/5 border border-[#009cde]/20 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <Zap size={14} className="text-[#009cde]" />
          <span className="text-xs font-semibold text-[#009cde]">AI Matching Active</span>
        </div>
        <div className="flex items-center gap-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white shadow" />
          ))}
          <span className="text-xs text-gray-500 ml-1">+47 matched</span>
        </div>
      </div>

      {/* Metrics preview */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Est. Reach', value: '245K' },
          { label: 'Est. CTR', value: '4.2%' },
          { label: 'Est. CPA', value: '$12' },
        ].map((m) => (
          <div key={m.label} className="bg-gray-50 rounded-lg p-3 text-center">
            <div className="text-base font-bold text-[#009cde]">{m.value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Action */}
      <button className="w-full py-3 bg-[#009cde] text-white font-semibold rounded-xl hover:bg-[#0089c4] transition-colors text-sm">
        Launch Campaign →
      </button>
    </div>
  )
}

export default function CampaignBuilder() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left */}
          <div className="flex-1 flex flex-col gap-7">
            <h2 className="text-2xl lg:text-4xl font-bold text-black leading-tight">
              Create Campaigns in<br />
              <span className="text-black">Minutes, Not Days</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our intelligent campaign builder guides you through every step. Set your goals,
              define your audience, and let our AI match you with the perfect influencers.
            </p>

            {/* Steps */}
            <div className="flex flex-col gap-5">
              {steps.map((s) => (
                <div key={s.num} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-sm">{s.num}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-0.5">{s.title}</h4>
                    <p className="text-sm text-gray-500">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – dashboard mockup */}
          <div className="w-full lg:max-w-[520px]">
            <MiniDashboard />
          </div>
        </div>
      </div>
    </section>
  )
}
