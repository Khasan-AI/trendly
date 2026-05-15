import { useState } from 'react'

const plans = [
  { name: 'Starter',      max: 5,        price: 99,  annual: 79  },
  { name: 'Growth',       max: 15,       price: 199, annual: 159 },
  { name: 'Professional', max: 30,       price: 399, annual: 319 },
  { name: 'Enterprise',   max: Infinity, price: null, annual: null },
]

function getRecommended(count) {
  return plans.find(p => count <= p.max) || plans[plans.length - 1]
}

export default function AgencyCalculator() {
  const [count, setCount] = useState(10)
  const plan = getRecommended(count)
  const annualSavings = plan.price ? (plan.price - plan.annual) * 12 : null

  return (
    <section className="bg-white py-12 lg:py-20 border-t border-gray-100">
      <div className="max-w-[896px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2">Calculate Your Agency Cost</h2>
          <p className="text-gray-500">See exactly what you'll pay based on your roster size</p>
        </div>

        {/* Main card */}
        <div className="bg-[#f9fafb] border border-gray-200 rounded-2xl p-5 lg:p-8 flex flex-col gap-6">

          {/* Slider section */}
          <div className="flex flex-col gap-3">
            <label className="text-base font-semibold text-black">
              How many creators do you manage?
            </label>

            {/* Track + thumb */}
            <div className="relative">
              <input
                type="range"
                min={1}
                max={50}
                value={count}
                onChange={e => setCount(Number(e.target.value))}
                className="w-full h-3 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #009cde ${(count - 1) / 49 * 100}%, #e5e5e5 ${(count - 1) / 49 * 100}%)`,
                  accentColor: '#009cde',
                }}
              />
            </div>

            {/* Labels */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">1 creator</span>
              <span className="text-2xl font-bold text-[#009cde]">{count} creators</span>
              <span className="text-gray-500">50+ creators</span>
            </div>
          </div>

          {/* Recommendation card */}
          <div className="bg-white rounded-2xl p-5 lg:p-7 flex flex-col gap-4" style={{ border: '2px solid #009cde' }}>
            {/* Plan name + price */}
            <div className="flex flex-col items-center text-center gap-1 pb-4 border-b border-gray-100">
              <p className="text-sm text-gray-500">Recommended Plan</p>
              <div className="text-3xl font-bold text-black">{plan.name}</div>
              {plan.price ? (
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl font-bold text-[#009cde]">${plan.price}</span>
                  <span className="text-sm text-gray-500">/month</span>
                </div>
              ) : (
                <div className="text-4xl font-bold text-black mt-1">Custom</div>
              )}
            </div>

            {/* Stats rows */}
            {plan.price && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Monthly subscription</span>
                  <span className="font-semibold text-black">${plan.price}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Cost per creator</span>
                  <span className="font-semibold text-black">${(plan.price / count).toFixed(2)}</span>
                </div>
                {annualSavings && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Annual savings (if paid yearly)</span>
                    <span className="font-semibold text-[#009cde]">Save ${annualSavings}</span>
                  </div>
                )}
              </div>
            )}

            {/* CTA */}
            <button className="w-full py-4 bg-[#009cde] text-white font-semibold rounded-xl hover:bg-[#0089c4] transition-colors text-sm">
              Start Free Trial
            </button>
          </div>

          <p className="text-center text-xs text-gray-400">
            All plans include unlimited campaigns, bulk payments, and full analytics
          </p>
        </div>
      </div>
    </section>
  )
}
