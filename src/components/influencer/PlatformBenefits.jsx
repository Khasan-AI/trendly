import { BarChart2, Zap, CalendarDays, MessageCircle } from 'lucide-react'

const features = [
  {
    icon: BarChart2,
    title: 'Real-Time Analytics',
    desc: 'Track your performance across all campaigns. See clicks, conversions, and earnings update in real-time with detailed breakdowns by platform and campaign type.',
  },
  {
    icon: Zap,
    title: 'Smart Campaign Matching',
    desc: 'Our AI matches you with campaigns that fit your audience demographics, engagement rate, and content style — so you only see relevant opportunities.',
  },
  {
    icon: CalendarDays,
    title: 'Content Calendar',
    desc: 'Manage all your campaigns in one place. See upcoming deadlines, revision requests, and posting schedules with automated reminders.',
  },
  {
    icon: MessageCircle,
    title: 'Direct Brand Communication',
    desc: 'Chat directly with brands, ask questions about briefs, and receive feedback on revisions — all within the platform without email threads.',
  },
]

export default function PlatformBenefits() {
  return (
    <section className="bg-white py-12 lg:py-20 border-b border-[#009cde]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-14">
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-3">Everything You Need to Succeed</h2>
          <p className="text-gray-500 text-lg">Tools and features designed for creators</p>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="border-2 border-gray-200 rounded-2xl p-6 lg:p-8 flex gap-5 hover:border-[#009cde]/40 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-[#009cde]/10 flex items-center justify-center shrink-0">
                  <Icon size={26} className="text-[#009cde]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
