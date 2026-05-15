const stats = [
  { value: '250+', label: 'Agencies Using Trendly', sub: 'Growing 40% monthly' },
  { value: '$50M+', label: 'Budget Managed', sub: 'Across all platforms' },
  { value: '40hrs', label: 'Saved Per Month', sub: 'Average per agency' },
  { value: '98.9%', label: 'Client Retention', sub: 'Industry leading' },
]

export default function AgencyStats() {
  return (
    <section className="bg-[#f5f7fa] py-14 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-4 lg:px-8 py-6 lg:py-0">
              <div className="text-2xl lg:text-4xl font-bold text-[#009cde]">{s.value}</div>
              <div className="text-sm font-semibold text-black mt-1.5">{s.label}</div>
              <div className="text-xs text-gray-400 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
