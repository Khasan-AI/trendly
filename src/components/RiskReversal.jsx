import UsageFeesIcon from '../assets/icons/Usage-Based Fees.svg'
import RevisionsIcon from '../assets/icons/revisions.svg'
import AuditTrailIcon from '../assets/icons/audit trail.svg'

const items = [
  { icon: UsageFeesIcon,  stat: '2%',   title: 'Platform Fee',  sub: 'or minimum 10,000 UZS per transaction',  note: 'Simple, transparent pricing with no hidden costs' },
  { icon: RevisionsIcon,  stat: '3',    title: 'Max Revisions', sub: 'Fixed brief prevents endless changes',    note: 'Clear expectations protect both sides' },
  { icon: AuditTrailIcon, stat: '100%', title: 'Audit Trail',   sub: 'Every action logged and timestamped',     note: 'Complete transparency for all parties' },
]

export default function RiskReversal() {
  return (
    <section className="bg-gray-50 py-14 lg:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2 lg:mb-3">No Risk. All Transparency.</h2>
          <p className="text-gray-500 text-base lg:text-lg">Built-in protections for every stakeholder</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {items.map((item) => (
            <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 flex flex-col items-center text-center gap-3 lg:gap-4">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#009cde]/10 flex items-center justify-center p-3">
                <img src={item.icon} className="w-8 h-8 lg:w-9 lg:h-9 object-contain" alt="" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-[#009cde]">{item.stat}</div>
              <div className="text-xl lg:text-2xl font-bold text-black">{item.title}</div>
              <p className="text-sm text-gray-500">{item.sub}</p>
              <div className="bg-gray-50 rounded-xl px-4 py-3 mt-auto w-full">
                <p className="text-xs text-gray-500">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
