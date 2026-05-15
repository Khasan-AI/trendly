export default function PricingHero({ activeTab, setActiveTab, billing, setBilling }) {
  const tabs = ['For Brands', 'For Creators', 'For Agencies']

  return (
    <section className="bg-white pt-12 lg:pt-20 pb-8 lg:pb-10 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-5 lg:gap-6">
        <div className="inline-flex items-center gap-2 bg-[#009cde]/10 text-[#009cde] text-xs lg:text-sm font-semibold px-3 lg:px-4 py-1.5 lg:py-2 rounded-full">
          Simple, Transparent Pricing
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
          Choose the Plan That<br className="hidden sm:block" /> Fits Your Goals
        </h1>

        <p className="text-gray-500 text-base lg:text-lg max-w-2xl">
          Whether you're a brand, creator, or agency — Trendly has flexible pricing to match your scale and ambition.
        </p>

        {/* Billing toggle */}
        <div className="flex items-center gap-3">
          <span className={`text-sm font-semibold ${billing === 'monthly' ? 'text-black' : 'text-gray-400'}`}>Monthly</span>
          <button
            onClick={() => setBilling(billing === 'monthly' ? 'annual' : 'monthly')}
            style={{ position: 'relative', width: 48, height: 26, borderRadius: 999, background: billing === 'annual' ? '#009cde' : '#d1d5db', border: 'none', cursor: 'pointer', transition: 'background 0.2s', flexShrink: 0 }}
          >
            <span style={{ position: 'absolute', top: 3, left: billing === 'annual' ? 25 : 3, width: 20, height: 20, background: '#fff', borderRadius: '50%', boxShadow: '0 1px 3px rgba(0,0,0,0.2)', transition: 'left 0.2s' }} />
          </button>
          <span className={`text-sm font-semibold ${billing === 'annual' ? 'text-black' : 'text-gray-400'}`}>
            Annual
            <span className="ml-1.5 bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">Save 20%</span>
          </span>
        </div>

        {/* Category tabs — scrollable on mobile */}
        <div className="flex gap-1.5 lg:gap-2 bg-gray-100 p-1 lg:p-1.5 rounded-xl lg:rounded-2xl overflow-x-auto w-full sm:w-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg lg:rounded-xl text-xs lg:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === tab ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
