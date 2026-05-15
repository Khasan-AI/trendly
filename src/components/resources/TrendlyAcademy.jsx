import { Award, Clock, Users, ArrowRight } from 'lucide-react'

const courses = [
  {
    badge: 'CERTIFICATE INCLUDED',
    title: 'Performance Marketing Fundamentals',
    desc: 'Learn CPA, CPL, and CPO models. Understand tracking, attribution, and ROI optimization.',
    duration: '2.5 hours',
    level: 'Beginner',
    students: '3,241',
    progress: 0,
  },
  {
    badge: 'CERTIFICATE INCLUDED',
    title: 'Creator Vetting & Selection',
    desc: 'Master authenticity scoring, audience analysis, and creator matching for maximum campaign ROI.',
    duration: '1.5 hours',
    level: 'Intermediate',
    students: '2,187',
    progress: 0,
  },
  {
    badge: 'CERTIFICATE INCLUDED',
    title: 'Campaign Optimization Tactics',
    desc: 'Advanced strategies for A/B testing, budget allocation, and performance scaling across platforms.',
    duration: '3 hours',
    level: 'Advanced',
    students: '1,542',
    progress: 0,
  },
]

const levelColor = { Beginner: 'text-green-600 bg-green-50', Intermediate: 'text-yellow-600 bg-yellow-50', Advanced: 'text-red-600 bg-red-50' }

export default function TrendlyAcademy() {
  return (
    <section className="bg-white py-12 lg:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold text-black mb-2">Trendly Academy</h2>
            <p className="text-gray-500">Free courses to master performance influencer marketing</p>
          </div>
          <a href="#" className="flex items-center gap-1.5 text-[#009cde] font-semibold text-sm hover:underline whitespace-nowrap">
            View All Courses <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <div key={c.title} className="border-2 border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#009cde]/40 transition-colors">
              {/* Badge */}
              <div className="flex items-center gap-2 text-[#009cde]">
                <Award size={14} />
                <span className="text-xs font-bold tracking-wider text-[#009cde]">{c.badge}</span>
              </div>

              <h3 className="text-lg font-bold text-black leading-snug">{c.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{c.desc}</p>

              {/* Meta */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock size={12} /> {c.duration}
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${levelColor[c.level]}`}>
                  {c.level}
                </span>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Users size={12} /> {c.students}
                </div>
              </div>

              {/* Progress */}
              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Course Progress</span>
                  <span>0%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full" />
              </div>

              {/* CTA */}
              <a href="#" className="flex items-center gap-1.5 text-[#009cde] font-semibold text-sm hover:underline">
                Enroll Free <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
