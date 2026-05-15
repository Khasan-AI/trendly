import { Check } from 'lucide-react'

const benefits = [
  {
    icon: '🗂️',
    title: 'Centralized Management',
    desc: 'Manage all your creators from one powerful dashboard. Track campaigns, payments, and performance in real-time.',
    items: ['Unified dashboard', 'Real-time tracking', 'Multi-creator view'],
  },
  {
    icon: '💳',
    title: 'Streamlined Payments',
    desc: 'Process bulk payments to multiple creators at once. Automated invoicing and transparent fee structure.',
    items: ['Bulk processing', 'Auto invoicing', 'Same-day payouts'],
  },
  {
    icon: '📈',
    title: 'Advanced Analytics',
    desc: 'Comprehensive reporting across all creators and campaigns. Make data-driven decisions to grow your agency.',
    items: ['Custom reports', 'Revenue tracking', 'Performance metrics'],
  },
  {
    icon: '🤝',
    title: 'Team Collaboration',
    desc: 'Invite team members with role-based permissions. Collaborate efficiently on campaigns and creator management.',
    items: ['Role permissions', 'Team workflows', 'Activity logs'],
  },
  {
    icon: '🎨',
    title: 'White-Label Options',
    desc: 'Brand the platform as your own. Custom domain, logo, and colors for a seamless client experience.',
    items: ['Custom branding', 'Your domain', 'Agency logo'],
  },
  {
    icon: '🔌',
    title: 'API & Integrations',
    desc: 'Connect with your existing tools. Full API access for custom integrations and automation workflows.',
    items: ['REST API', 'Webhooks', 'Custom integrations'],
  },
]

export default function AgencyBenefits() {
  return (
    <section className="bg-[#f9fafb] py-12 lg:py-20 border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2">Why Agencies Choose Trendly</h2>
          <p className="text-gray-500">Everything you need to manage and scale your talent agency</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {benefits.map(({ icon, title, desc, items }) => (
            <div key={title} className="bg-white border border-gray-200 rounded-2xl p-5 lg:p-7 flex flex-col gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#009cde]/10 flex items-center justify-center text-2xl">
                {icon}
              </div>
              <h3 className="text-lg font-bold text-black">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              <div className="flex flex-col gap-2 pt-1">
                {items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check size={12} className="text-[#009cde] shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
