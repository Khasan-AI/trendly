import { Check } from 'lucide-react'

const steps = [
  {
    num: '1',
    title: 'Connect & Verify',
    desc: 'Brands verify via tax authority. Creators connect social profiles via official OAuth. No fake accounts, no bots.',
    points: ['ЭЦП verification for brands', 'Official API integrations only', 'Follower authenticity scores'],
  },
  {
    num: '2',
    title: 'Launch & Collaborate',
    desc: 'Create campaigns with clear briefs. Creators apply from marketplace. Max 3 content iterations to prevent endless revisions.',
    points: ['CPA, CPC, CPL, or CPO models', 'AI-powered creator matching', 'Fixed brief with 3 revisions max'],
  },
  {
    num: '3',
    title: 'Track & Get Paid',
    desc: 'Real-time conversion tracking via promo codes, UTM links, or webhooks. Automated payouts from pre-funded budgets.',
    points: ['Official API tracking only', 'Pre-funded campaign budgets', 'Complete audit trail'],
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-white py-14 lg:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2">How Trendly Works</h2>
          <p className="text-gray-500 text-base lg:text-lg">Three simple steps to transparent performance marketing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-white rounded-2xl overflow-hidden flex flex-col"
              style={{ border: '2px solid #f3f4f6' }}
            >
              <div
                className="flex items-center justify-center"
                style={{ background: '#009cde', height: 48, width: 55 }}
              >
                <span className="text-xl font-bold text-white">{s.num}</span>
              </div>
              <div className="p-5 lg:p-7 flex flex-col gap-3 lg:gap-4">
                <h3 className="text-lg lg:text-xl font-bold text-black">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                <div className="flex flex-col gap-2 mt-1">
                  {s.points.map((p) => (
                    <div key={p} className="flex items-center gap-2.5">
                      <Check size={14} className="text-[#009cde] shrink-0" />
                      <span className="text-sm text-gray-500">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
