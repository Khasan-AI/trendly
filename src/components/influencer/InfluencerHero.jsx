import { ArrowRight, Play } from 'lucide-react'

const stats = [
  { value: '$3.2K', label: 'Average monthly earnings' },
  { value: '24h', label: 'First payment timeline' },
  { value: '100%', label: 'Campaigns pre-funded' },
]

export default function InfluencerHero() {
  return (
    <section className="bg-white py-14 lg:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-7">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-black rounded-lg">
            <span className="text-sm font-medium text-black">Trusted by 8,932+ Content Creators</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Get Paid for What<br />You Already Do Best
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Connect with verified brands, create authentic content, and earn
            guaranteed payments. No chasing, no delays, no drama.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#"
              className="flex items-center gap-2.5 px-8 py-4 bg-[#009cde] text-white font-semibold rounded-xl hover:bg-[#0089c4] transition-colors text-base w-full sm:w-auto justify-center"
            >
              Join free as a creator
              <ArrowRight size={18} />
            </a>
            <a
              href="#"
              className="flex items-center gap-2.5 px-8 py-4 border-2 border-black text-black font-semibold rounded-xl hover:bg-gray-50 transition-colors text-base w-full sm:w-auto justify-center"
            >
              <Play size={16} className="fill-black" />
              Watch 90-second demo
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 lg:gap-16 pt-4 border-t border-[#009cde]/20 w-full justify-center">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl lg:text-4xl font-bold text-[#009cde]">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
