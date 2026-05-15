const stats = [
  { value: '14-day', label: 'Free Trial' },
  { value: 'No', label: 'Credit Card Required' },
  { value: '24/7', label: 'Customer Support' },
  { value: 'Cancel', label: 'Anytime' },
]

export default function PricingTrustBar() {
  return (
    <section className="bg-[#f5f7fa] border-t border-b border-gray-100 py-6 lg:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x-0 lg:divide-x divide-gray-200">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center px-4 py-3 lg:py-0 ${i % 2 === 1 ? 'border-l border-gray-200 lg:border-l-0' : ''}`}
            >
              <div className="text-xl lg:text-2xl font-bold text-[#009cde]">{s.value}</div>
              <div className="text-xs lg:text-sm text-gray-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
