export default function AgencyCommission() {
  const stats = [
    { value: 'Flat Fee', desc: 'Simple monthly subscription, no surprises' },
    { value: '0%',       desc: 'No commission on creator earnings' },
    { value: 'Flexible', desc: 'Scale up or down as your roster grows' },
  ]

  return (
    <section
      className="py-12 lg:py-20"
      style={{ background: 'linear-gradient(135deg, #009cde 0%, #00c6fb 100%)' }}
    >
      <div className="max-w-[1024px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
            <span className="text-white text-xl">🏢</span>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">Transparent Commission Structure</h3>
            <p className="text-white/90 text-sm mb-6">
              We believe in fair, transparent pricing. Here's exactly how agency billing works on Trendly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map(({ value, desc }) => (
                <div key={value} className="bg-white/10 rounded-xl p-5">
                  <div className="text-3xl font-bold text-white mb-2">{value}</div>
                  <p className="text-white/80 text-sm leading-snug">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-white/60 text-xs mt-4">
              Your creators keep 100% of their negotiated rates. You pay only for platform access.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
