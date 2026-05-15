import { Check } from 'lucide-react'

const steps = [
  {
    num: '1',
    title: 'Client Onboarding',
    desc: 'Add new clients in minutes. Set up their workspace, define budgets, and grant appropriate access levels.',
    points: ['Quick setup wizard', 'Automated welcome emails', 'Custom branding setup'],
  },
  {
    num: '2',
    title: 'Campaign Management',
    desc: 'Create and manage campaigns across all platforms. Match with the best influencers from our marketplace.',
    points: ['Multi-platform campaigns', 'AI-powered influencer matching', 'Content approval workflows'],
  },
  {
    num: '3',
    title: 'Performance & Billing',
    desc: 'Track real-time performance, generate reports, and automate client billing with transparent pricing.',
    points: ['Real-time analytics', 'Automated invoicing', 'Client payment tracking'],
  },
]

export default function AgencyWorkflow() {
  return (
    <section className="bg-white py-12 lg:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-14">
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-3">Streamlined Agency Workflow</h2>
          <p className="text-gray-500 text-lg">From client onboarding to campaign delivery, everything in one place</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="border border-gray-200 rounded-2xl p-5 lg:p-7 flex flex-col gap-5 hover:border-[#009cde]/40 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-xl border-2 border-[#009cde] flex items-center justify-center">
                <span className="text-2xl font-bold text-[#009cde]">{s.num}</span>
              </div>
              <h3 className="text-xl font-bold text-black">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              <ul className="flex flex-col gap-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-gray-500">
                    <div className="w-4 h-4 rounded bg-[#009cde]/10 flex items-center justify-center">
                      <Check size={10} className="text-[#009cde]" />
                    </div>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
