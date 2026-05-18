import { ArrowRight } from 'lucide-react'

const courses = [
  {
    title: 'Performance Marketing Fundamentals',
    desc: 'Learn CPA, CPL, and CPO models. Understand tracking, attribution, and ROI optimization.',
    duration: '2.5 hours',
    level: 'Beginner',
    students: '3,241',
  },
  {
    title: 'Creator Vetting & Selection',
    desc: 'Master authenticity scoring, audience analysis, and creator matching for maximum campaign ROI.',
    duration: '1.5 hours',
    level: 'Intermediate',
    students: '2,187',
  },
  {
    title: 'Campaign Optimization Tactics',
    desc: 'Advanced strategies for A/B testing, budget allocation, and performance scaling across platforms.',
    duration: '3 hours',
    level: 'Advanced',
    students: '1,542',
  },
]

/* tiny inline SVG icons matching Figma vectors */
const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6" stroke="#111" strokeWidth="1.2"/>
    <path d="M7 4V7L9 9" stroke="#111" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)
const SignalIcon = () => (
  <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
    <rect x="0" y="9" width="4" height="5" rx="1" fill="#111"/>
    <rect x="6" y="5" width="4" height="9" rx="1" fill="#111"/>
    <rect x="12" y="0" width="4" height="14" rx="1" fill="#111"/>
  </svg>
)
const PeopleIcon = () => (
  <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
    <circle cx="6.5" cy="4" r="3" stroke="#111" strokeWidth="1.2"/>
    <path d="M1 13c0-3.038 2.462-5.5 5.5-5.5" stroke="#111" strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="13" cy="4" r="2.5" stroke="#111" strokeWidth="1.2"/>
    <path d="M17 13c0-2.485-1.791-4.5-4-4.5" stroke="#111" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)
const CertIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <circle cx="6" cy="6" r="5.5" stroke="#009cde" strokeWidth="1"/>
    <path d="M3.5 6L5.5 8L8.5 4" stroke="#009cde" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function TrendlyAcademy() {
  return (
    <section className="bg-white py-12 lg:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-8 lg:mb-10">
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold text-black mb-1">Trendly Academy</h2>
            <p className="text-sm lg:text-base" style={{ color: '#111111' }}>Free courses to master performance influencer marketing</p>
          </div>
          <a href="#" className="flex items-center gap-1.5 text-[#009cde] font-semibold text-sm hover:underline whitespace-nowrap shrink-0">
            View All Courses <ArrowRight size={14} />
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {courses.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-2xl flex flex-col"
              style={{ border: '2px solid #eeeeee' }}
            >
              <div className="p-5 lg:p-6 flex flex-col gap-4 flex-1">
                {/* Certificate badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg w-fit"
                  style={{ background: 'rgba(0,156,222,0.1)' }}
                >
                  <CertIcon />
                  <span className="text-xs font-bold tracking-wider text-[#009cde]">
                    CERTIFICATE INCLUDED
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base lg:text-lg font-bold text-black leading-snug">{c.title}</h3>

                {/* Description */}
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#111111' }}>{c.desc}</p>

                {/* Meta: duration · level · students */}
                <div className="flex items-center gap-4 lg:gap-5">
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: '#111111' }}>
                    <ClockIcon />
                    {c.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: '#111111' }}>
                    <SignalIcon />
                    {c.level}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: '#111111' }}>
                    <PeopleIcon />
                    {c.students}
                  </div>
                </div>

                {/* Progress */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: '#111111' }}>Course Progress</span>
                    <span className="text-xs" style={{ color: '#111111' }}>0%</span>
                  </div>
                  <div className="w-full rounded-full overflow-hidden" style={{ height: 8, background: '#eeeeee' }}>
                    <div className="h-full rounded-full bg-[#009cde]" style={{ width: '1px' }} />
                  </div>
                </div>

                {/* CTA */}
                <a href="#" className="flex items-center gap-1.5 text-[#009cde] font-semibold text-sm hover:underline">
                  Enroll Free <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
