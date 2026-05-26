const subtitles = {
  'For Brands':    'All plans include official API tracking, escrow payouts, and flat platform commission',
  'For Creators':  'Secure escrow payments • Portfolio builder • Performance analytics',
  'For Agencies':  'Centralized dashboard • Bulk payments • Team collaboration tools',
}

export default function PricingHero({ activeTab, setActiveTab, billing, setBilling }) {
  const tabs = ['For Brands', 'For Creators', 'For Agencies']

  return (
    <section className="bg-white pt-12 lg:pt-20 pb-8 lg:pb-10 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-5 lg:gap-6">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#009cde]/10 text-[#009cde] text-xs lg:text-sm font-semibold px-3 lg:px-4 py-1.5 lg:py-2 rounded-full">
          Simple, Transparent Pricing
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
          Choose the Plan That<br className="hidden sm:block" /> Fits Your Goals
        </h1>

        {/* Tab-specific subtitle */}
        <p className="text-gray-500 text-base lg:text-lg max-w-2xl transition-all">
          {subtitles[activeTab]}
        </p>

        {/* Category tabs */}
        <div className="flex gap-1.5 lg:gap-2 p-1 lg:p-1.5 rounded-xl lg:rounded-2xl overflow-x-auto w-full sm:w-auto no-scrollbar"
          style={{ background: '#f3f4f6' }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg lg:rounded-xl text-xs lg:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-[#009cde] text-white shadow-sm'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Billing toggle — segmented pill */}
        <div
          className="flex items-center gap-1 p-1 rounded-xl"
          style={{ background: '#f3f4f6' }}
        >
          <button
            onClick={() => setBilling('monthly')}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
              billing === 'monthly'
                ? 'bg-white text-black shadow-sm'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling('annual')}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
              billing === 'annual'
                ? 'bg-white text-black shadow-sm'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            Annual
            <span
              className="text-white text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ background: '#009cde', fontSize: 11 }}
            >
              Save 20%
            </span>
          </button>
        </div>

      </div>
    </section>
  )
}
