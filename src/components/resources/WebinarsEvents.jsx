import { Clock, Users, Play, ArrowRight } from 'lucide-react'

const webinars = [
  {
    type: 'LIVE WEBINAR', typeBg: 'bg-[#009cde] text-white',
    date: 'Mar 22, 2025',
    title: 'Scaling Performance Campaigns Without Losing ROI',
    desc: 'Learn proven strategies to scale influencer campaigns from $10k to $100k+ monthly while maintaining profitability.',
    speaker: 'Sarah Chen', speakerRole: 'Head of Performance Marketing, Shopify',
    time: '2:00 PM EST', duration: '60 min', registered: '342 registered',
    cta: 'Register Free', ctaBg: 'bg-[#009cde] hover:bg-[#0089c4]',
  },
  {
    type: 'LIVE WEBINAR', typeBg: 'bg-[#009cde] text-white',
    date: 'Mar 29, 2025',
    title: 'Creator Vetting: Red Flags to Watch For',
    desc: 'Identify fake followers, engagement pods, and other fraud tactics before they waste your budget.',
    speaker: 'Marcus Rodriguez', speakerRole: 'Trust & Safety Lead, Trendly',
    time: '1:00 PM EST', duration: '45 min', registered: '198 registered',
    cta: 'Register Free', ctaBg: 'bg-[#009cde] hover:bg-[#0089c4]',
  },
  {
    type: 'ON-DEMAND', typeBg: 'bg-gray-100 text-gray-700',
    date: 'Recorded',
    title: 'API Integration Best Practices',
    desc: 'Technical deep-dive into Trendly\'s API with real implementation examples and troubleshooting tips.',
    speaker: 'David Kim', speakerRole: 'Lead Engineer, Trendly',
    time: '52 min', duration: '', registered: '1,842 views',
    cta: 'Watch Now', ctaBg: 'bg-[#009cde] hover:bg-[#0089c4]',
  },
  {
    type: 'ON-DEMAND', typeBg: 'bg-gray-100 text-gray-700',
    date: 'Recorded',
    title: 'Multi-Platform Campaign Strategy',
    desc: 'How to coordinate Instagram, TikTok, and YouTube campaigns for maximum reach and efficiency.',
    speaker: 'Lisa Thompson', speakerRole: 'Strategy Director, Meta',
    time: '68 min', duration: '', registered: '2,134 views',
    cta: 'Watch Now', ctaBg: 'bg-[#009cde] hover:bg-[#0089c4]',
  },
]

export default function WebinarsEvents() {
  return (
    <section className="bg-gray-100 py-12 lg:py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold text-black mb-2">Webinars & Events</h2>
            <p className="text-gray-500">Learn from industry experts and platform specialists</p>
          </div>
          <div className="flex gap-2">
            {['Upcoming', 'On-Demand'].map((tab, i) => (
              <button key={tab} className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${i === 0 ? 'bg-[#009cde] text-white' : 'bg-white text-black border border-gray-200 hover:border-[#009cde]'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {webinars.map((w) => (
            <div key={w.title} className="bg-white border border-gray-200 rounded-2xl p-5 lg:p-7 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className={`text-xs font-bold px-3 py-1 rounded-lg ${w.typeBg}`}>{w.type}</span>
                <span className="text-sm text-gray-400">{w.date}</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-2 leading-snug">{w.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{w.desc}</p>
              </div>

              {/* Speaker */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 font-bold text-sm">
                  {w.speaker.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">{w.speaker}</div>
                  <div className="text-xs text-gray-400">{w.speakerRole}</div>
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-5 text-xs text-gray-400">
                <div className="flex items-center gap-1"><Clock size={12} /> {w.time}</div>
                {w.duration && <div className="flex items-center gap-1">⏱ {w.duration}</div>}
                <div className="flex items-center gap-1"><Users size={12} /> {w.registered}</div>
              </div>

              <a href="#" className={`flex items-center gap-2 px-5 py-2.5 ${w.ctaBg} text-white font-semibold rounded-xl text-sm transition-colors w-fit`}>
                {w.type === 'ON-DEMAND' ? <Play size={14} /> : null}
                {w.cta} <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
