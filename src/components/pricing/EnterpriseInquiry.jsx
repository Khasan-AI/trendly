import { Check } from 'lucide-react'

const perks = [
  'Volume-based pricing discounts',
  'Custom API integrations and webhooks',
  'Dedicated account manager and 24/7 support',
  'SLA guarantees and priority infrastructure',
]

export default function EnterpriseInquiry() {
  return (
    <section className="bg-black py-12 lg:py-20">
      <div className="max-w-[1024px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
              <span className="text-[#009cde] text-2xl">$</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">Need a Custom Solution?</h2>
            <p className="text-[#d1d5db] text-sm leading-relaxed">
              Our Enterprise plan offers tailored solutions for large-scale operations, custom integrations, and dedicated infrastructure.
            </p>
            <div className="flex flex-col gap-3">
              {perks.map((p) => (
                <div key={p} className="flex items-start gap-2.5">
                  <Check size={14} className="text-[#009cde] mt-0.5 shrink-0" />
                  <span className="text-[#d1d5db] text-sm">{p}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs">We typically respond within 2 business hours</p>
          </div>

          {/* Right — Form */}
          <div className="w-full lg:w-[420px] shrink-0 bg-white rounded-2xl p-5 lg:p-8 flex flex-col gap-5">
            <h3 className="text-xl font-bold text-black">Request Enterprise Demo</h3>
            <div className="flex flex-col gap-4">
              {[
                { label: 'Name', placeholder: 'John Doe', type: 'text' },
                { label: 'Work Email', placeholder: 'john@company.com', type: 'email' },
                { label: 'Company', placeholder: 'Company Name', type: 'text' },
              ].map(({ label, placeholder, type }) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-black">{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#009cde]/30"
                  />
                </div>
              ))}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-black">Team Size</label>
                <select className="border border-gray-200 rounded-lg px-4 py-3 text-sm bg-gray-50 focus:outline-none">
                  <option>1–10</option>
                  <option>11–50</option>
                  <option>51–200</option>
                  <option>200+</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-black">Message</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your needs..."
                  className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#009cde]/30 resize-none"
                />
              </div>
              <button className="w-full py-3.5 bg-[#009cde] text-white font-semibold rounded-xl hover:bg-[#0089c4] transition-colors text-sm">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
