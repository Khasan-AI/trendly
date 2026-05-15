import { Check, ShieldCheck } from 'lucide-react'

const kpis = [
  { value: '1,247', label: 'Impressions', delta: '+12% today' },
  { value: '342', label: 'Clicks', delta: '+8% today' },
  { value: '89', label: 'Conversions', delta: '+15% today' },
  { value: '$2,225', label: 'Revenue', delta: '+22% today' },
]

const funnelRows = [
  { label: 'Impressions', count: '8,934', pct: 100 },
  { label: 'Clicks', count: '2,447', pct: 27 },
  { label: 'Conversions', count: '634', pct: 7 },
]

const fraudItems = [
  { label: 'Click Validation', ok: true },
  { label: 'Bot Detection', ok: true },
  { label: 'Geo Filtering', ok: true },
]

const attributionModels = ['First-Click', 'Last-Click', 'Multi-Touch']

const trackingMethods = [
  { label: 'Promo Codes', status: 'Active' },
  { label: 'UTM Parameters', status: 'Active' },
  { label: 'Pixel Tracking', status: 'Active' },
]

export default function PerformanceTracking() {
  return (
    <section className="bg-[#f5f7fa] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-14">
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-3">
            Track Every Conversion{' '}
            <span className="text-black">Down to the Last Click</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            No more guesswork. Our advanced tracking system gives you complete visibility
            into your campaign performance.
          </p>
        </div>

        {/* Main dashboard */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="p-6 flex flex-col gap-6">
            {/* Dashboard header */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-black">Real-Time Dashboard</h3>
              <span className="flex items-center gap-1.5 text-sm text-gray-500">
                <span className="w-2.5 h-2.5 rounded-full bg-[#009cde] animate-pulse"></span>
                Live
              </span>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
              {kpis.map((k) => (
                <div key={k.label} className="px-4 lg:px-6 py-4 text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-[#009cde]">{k.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{k.label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{k.delta}</div>
                </div>
              ))}
            </div>

            {/* Bottom two panels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Conversion Funnel */}
              <div className="border border-gray-100 rounded-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-black">Conversion Funnel</span>
                  <span className="text-xs text-gray-400">Last 7 days</span>
                </div>
                <div className="flex flex-col gap-3">
                  {funnelRows.map((r) => (
                    <div key={r.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-600">{r.label}</span>
                        <span className="text-sm font-semibold text-black">{r.count}</span>
                      </div>
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#009cde] rounded-full transition-all"
                          style={{ width: `${r.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right panel — 3 small cards stacked */}
              <div className="flex flex-col gap-3">
                {/* Anti-Fraud */}
                <div className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck size={18} className="text-[#009cde]" />
                    <span className="font-semibold text-sm text-black">Anti-Fraud Protection</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {fraudItems.map((f) => (
                      <div key={f.label} className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">{f.label}</span>
                        <Check size={13} className="text-[#009cde]" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Attribution Models */}
                <div className="border border-gray-100 rounded-xl p-4">
                  <span className="font-semibold text-sm text-black block mb-2">Attribution Models</span>
                  <div className="flex flex-col gap-1.5">
                    {attributionModels.map((m) => (
                      <div key={m} className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#009cde]" />
                        <span className="text-xs text-gray-600">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tracking Methods */}
                <div className="border border-gray-100 rounded-xl p-4">
                  <span className="font-semibold text-sm text-black block mb-2">Tracking Methods</span>
                  <div className="flex flex-col gap-1.5">
                    {trackingMethods.map((t) => (
                      <div key={t.label} className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">{t.label}</span>
                        <span className="text-xs px-2 py-0.5 bg-[#009cde] text-white rounded-full">
                          {t.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
