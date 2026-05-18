import { X } from 'lucide-react'
import PreFundedIcon from '../../assets/icons/Campaigns are pre-funded.svg'
import BriefsLockedIcon from '../../assets/icons/Briefs are locked.svg'
import PayoutsAutoIcon from '../../assets/icons/Payouts happen automatically.svg'

const oldWay = [
  { title: 'Endless email threads', desc: 'Chasing brands for payment updates, invoice confirmations, and approvals' },
  { title: 'Unclear expectations', desc: 'Vague briefs that lead to unlimited revision requests' },
  { title: 'Payment delays', desc: 'Waiting 30–90 days after delivery to see your money' },
]

const newWay = [
  { icon: PreFundedIcon,  title: 'Pre-funded campaigns', desc: 'Every brand deposits full budget before you start creating' },
  { icon: BriefsLockedIcon, title: 'Clear briefs, limited revisions', desc: 'Maximum 3 revision rounds per campaign — no scope creep' },
  { icon: PayoutsAutoIcon, title: 'Automatic payouts', desc: 'Get paid within 24 hours of campaign approval' },
]

export default function PainStory() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-14 max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-4">
            Stop Losing Money to Payment Delays
          </h2>
          <p className="text-gray-500 text-lg">
            You've worked hard to build your audience. You shouldn't have to chase brands
            for what you've already earned.
          </p>
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {/* Old Way */}
          <div className="border-2 border-gray-200 rounded-2xl p-5 lg:p-7">
            <h3 className="text-xl font-bold text-black mb-5">The Old Way</h3>
            <ul className="flex flex-col gap-5">
              {oldWay.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center shrink-0 mt-0.5">
                    <X size={12} className="text-black" />
                  </div>
                  <div>
                    <div className="font-semibold text-black text-sm">{item.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Trendly Way */}
          <div className="border-2 border-[#009cde] rounded-2xl p-5 lg:p-7">
            <h3 className="text-xl font-bold text-black mb-5">The Trendly Way</h3>
            <ul className="flex flex-col gap-5">
              {newWay.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#009cde]/10 flex items-center justify-center shrink-0 p-2">
                    <img src={item.icon} className="w-full h-full object-contain" alt="" />
                  </div>
                  <div>
                    <div className="font-semibold text-black text-sm">{item.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Big stat */}
        <div className="max-w-4xl mx-auto border-2 border-black rounded-2xl p-8 lg:p-10 text-center">
          <div className="text-5xl lg:text-6xl font-bold text-[#009cde] mb-3">98.7%</div>
          <div className="text-2xl font-bold text-black mb-3">Payment Success Rate</div>
          <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
            Industry-leading reliability. Your earnings are locked in from day one,
            held in escrow, and released automatically upon approval.
          </p>
        </div>
      </div>
    </section>
  )
}
