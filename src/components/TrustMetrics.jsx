const metrics = [
  { value: '8,932',  label: 'Verified Creators' },
  { value: '$2.4M+', label: 'Total Payouts' },
  { value: '100%',   label: 'On-time Rate' },
  { value: '1,247',  label: 'Active Campaigns' },
]

export default function TrustMetrics() {
  return (
    <section className="bg-gray-50 py-10 lg:py-14 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x-0 lg:divide-x divide-gray-200">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`text-center px-4 py-4 lg:py-0 ${
                i % 2 === 1 ? 'border-l border-gray-200 lg:border-l-0' : ''
              }`}
            >
              <div className="text-3xl lg:text-4xl font-bold text-[#009cde]">{m.value}</div>
              <div className="text-xs lg:text-sm text-gray-500 mt-1.5">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
