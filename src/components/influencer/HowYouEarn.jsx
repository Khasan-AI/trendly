const models = [
  {
    num: '01',
    title: 'Performance-Based',
    desc: 'Earn commissions based on actions your audience takes — sales, clicks, or sign-ups. The better you perform, the more you make.',
    rates: [
      { label: 'CPA (Cost Per Action)', value: '5–15%' },
      { label: 'CPC (Cost Per Click)', value: '$0.50–$2' },
      { label: 'CPL (Cost Per Lead)', value: '$5–$25' },
    ],
  },
  {
    num: '02',
    title: 'Fixed-Price Content',
    desc: 'Get paid a guaranteed fee for creating sponsored posts, stories, or videos. Know your earnings upfront before you start.',
    rates: [
      { label: 'Instagram Post', value: '$200–$1K' },
      { label: 'TikTok Video', value: '$300–$1.5K' },
      { label: 'YouTube Integration', value: '$500–$5K' },
    ],
  },
  {
    num: '03',
    title: 'Hybrid Campaigns',
    desc: 'Mix both models for maximum earnings. Get a base fee for content creation plus performance bonuses for results.',
    rates: [
      { label: 'Base Content Fee', value: '$400' },
      { label: 'Performance Bonus', value: '+10%' },
      { label: 'Total Potential', value: '$800+' },
    ],
  },
]

export default function HowYouEarn() {
  return (
    <section className="bg-[#f5f7fa] py-12 lg:py-20 border-y border-[#009cde]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-14 max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-3">How You Earn</h2>
          <p className="text-gray-500 text-lg">
            Choose the earning model that works best for your content and audience
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {models.map((m) => (
            <div
              key={m.num}
              className="bg-white border-2 border-gray-200 rounded-2xl p-5 lg:p-7 flex flex-col gap-5 hover:border-[#009cde]/40 hover:shadow-md transition-all"
            >
              {/* Number */}
              <div className="text-4xl font-bold text-[#009cde]">{m.num}</div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">{m.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{m.desc}</p>
              </div>

              {/* Rates table */}
              <div className="border border-[#009cde]/30 rounded-xl p-4 flex flex-col gap-3 mt-auto">
                {m.rates.map((r) => (
                  <div key={r.label} className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">{r.label}</span>
                    <span className="text-sm font-bold text-[#009cde]">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
