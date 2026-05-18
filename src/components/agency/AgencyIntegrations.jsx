import { ArrowRight } from 'lucide-react'
import SlackIcon from '../../assets/icons/Slack.svg'
import GoogleAnalyticsIcon from '../../assets/icons/Google Analytics.svg'
import DataStudioIcon from '../../assets/icons/Data Studio.svg'
import HubSpotIcon from '../../assets/icons/HubSpot.svg'
import ZapierIcon from '../../assets/icons/Zapier.svg'
import StripeIcon from '../../assets/icons/Stripe.svg'
import QuickBooksIcon from '../../assets/icons/QuickBooks.svg'
import CustomAPIIcon from '../../assets/icons/Custom API.svg'

const integrations = [
  { icon: SlackIcon,           name: 'Slack',            desc: 'Real-time notifications' },
  { icon: GoogleAnalyticsIcon, name: 'Google Analytics', desc: 'Advanced tracking' },
  { icon: DataStudioIcon,      name: 'Data Studio',      desc: 'Custom dashboards' },
  { icon: HubSpotIcon,         name: 'HubSpot',          desc: 'CRM sync' },
  { icon: ZapierIcon,          name: 'Zapier',           desc: '5000+ app connections' },
  { icon: StripeIcon,          name: 'Stripe',           desc: 'Payment processing' },
  { icon: QuickBooksIcon,      name: 'QuickBooks',       desc: 'Accounting sync' },
  { icon: CustomAPIIcon,       name: 'Custom API',       desc: 'Build your own' },
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
          {integrations.map((intg) => (
            <div key={intg.name} className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-[#009cde]/30 hover:shadow-md transition-all text-center">
              <div className="w-14 h-14 rounded-xl bg-[#009cde]/10 flex items-center justify-center p-3">
                <img src={intg.icon} className="w-full h-full object-contain" alt={intg.name} />
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
