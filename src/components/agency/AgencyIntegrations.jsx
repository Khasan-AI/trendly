import { ArrowRight } from 'lucide-react'

const integrations = [
  { name: 'Slack', desc: 'Real-time notifications' },
  { name: 'Google Analytics', desc: 'Advanced tracking' },
  { name: 'Data Studio', desc: 'Custom dashboards' },
  { name: 'HubSpot', desc: 'CRM sync' },
  { name: 'Zapier', desc: '5000+ app connections' },
  { name: 'Stripe', desc: 'Payment processing' },
  { name: 'QuickBooks', desc: 'Accounting sync' },
  { name: 'Custom API', desc: 'Build your own' },
]

const colors = [
  'bg-purple-100 text-purple-600',
  'bg-blue-100 text-blue-600',
  'bg-green-100 text-green-600',
  'bg-orange-100 text-orange-600',
  'bg-red-100 text-red-600',
  'bg-indigo-100 text-indigo-600',
  'bg-yellow-100 text-yellow-600',
  'bg-gray-100 text-gray-600',
]

export default function AgencyIntegrations() {
  return (
    <section className="bg-[#f5f7fa] py-12 lg:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-14">
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-3">Powerful Integrations</h2>
          <p className="text-gray-500 text-lg">Connect with the tools you already use to supercharge your workflow</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {integrations.map((intg, i) => (
            <div key={intg.name} className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-[#009cde]/30 hover:shadow-md transition-all text-center">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold ${colors[i]}`}>
                {intg.name[0]}
              </div>
              <h4 className="font-bold text-black">{intg.name}</h4>
              <p className="text-xs text-gray-500">{intg.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a href="#" className="flex items-center gap-2 px-7 py-3 border-2 border-black text-black font-semibold rounded-xl hover:bg-gray-50 transition-colors text-sm">
            View All Integrations
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
