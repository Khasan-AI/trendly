import { Check } from 'lucide-react'

const cases = [
  {
    initials: 'E',
    company: 'E-commerce Fashion Brand',
    location: 'Tashkent, Uzbekistan',
    stats: [
      { value: '425%', label: 'ROI Increase' },
      { value: '$94K', label: 'Revenue' },
      { value: '2,847', label: 'Conversions' },
    ],
    quote:
      '"We switched from traditional agency model to Trendly and saw immediate results. The transparency in tracking and payment protection gave us confidence to scale our influencer budget by 5x."',
    name: 'Malika Rahimova',
    role: 'Marketing Director',
    duration: '90-day campaign',
  },
  {
    initials: 'T',
    company: 'Tech Startup',
    location: 'Almaty, Kazakhstan',
    stats: [
      { value: '12K', label: 'New Users' },
      { value: '$18', label: 'CPA' },
      { value: '8.2%', label: 'Conv. Rate' },
    ],
    quote:
      '"The fraud protection alone saved us thousands. Previous campaigns had 40% fake traffic. With Trendly\'s verification, every click was real. The 3-iteration content policy also saved our team weeks of revision time."',
    name: 'Arman Bekmuratov',
    role: 'Growth Lead',
    duration: '60-day campaign',
  },
]

export default function CaseStudies() {
  return (
    <section className="bg-[#f5f7fa] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-2">Real Brands, Real Results</h2>
          <h2 className="text-2xl lg:text-4xl font-bold text-black">Success Stories from Our Clients</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div key={c.company} className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 flex flex-col gap-5">
              {/* Company header */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-black flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{c.initials}</span>
                </div>
                <div>
                  <div className="font-bold text-black">{c.company}</div>
                  <div className="text-sm text-gray-500">{c.location}</div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 divide-x divide-gray-100">
                {c.stats.map((s) => (
                  <div key={s.label} className="text-center px-4">
                    <div className="text-2xl font-bold text-[#009cde]">{s.value}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-600 leading-relaxed italic">{c.quote}</p>

              {/* Author */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-600">
                      {c.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-black">{c.name}</div>
                    <div className="text-xs text-gray-500">{c.role}</div>
                  </div>
                </div>
                <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                  {c.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
