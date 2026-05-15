import { DollarSign, FileText, Zap } from 'lucide-react'

const promises = [
  {
    icon: DollarSign,
    title: 'Campaigns are pre-funded before you start',
    desc: "So you never worry about whether the money is there — it's locked in escrow from day one.",
  },
  {
    icon: FileText,
    title: 'Briefs are locked after 3 revisions maximum',
    desc: "So you're protected from endless change requests and scope creep that waste your time.",
  },
  {
    icon: Zap,
    title: 'Payouts happen automatically within 24 hours',
    desc: 'So you can focus on creating great content instead of chasing invoices and payment confirmations.',
  },
]

export default function ValueLadder() {
  return (
    <section className="bg-white py-12 lg:py-20 border-b border-[#009cde]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {promises.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={i}
                className="flex items-start gap-6 border border-gray-200 rounded-2xl p-5 lg:p-7 hover:border-[#009cde]/30 hover:shadow-sm transition-all"
              >
                <div className="w-16 h-16 rounded-xl bg-[#009cde] flex items-center justify-center shrink-0">
                  <Icon size={26} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{p.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
