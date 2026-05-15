import { ArrowRight, Play, Check } from 'lucide-react'

const badges = [
  'Free to join',
  'No upfront costs',
  'Start earning in 24h',
]

export default function InfluencerCTA() {
  return (
    <section className="bg-white py-14 lg:py-24 border-b border-[#009cde]/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-7">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
          Ready to Start Earning?
        </h2>
        <p className="text-gray-500 text-lg max-w-xl">
          Join 8,932+ creators who are building sustainable income with verified
          brands on Trendly.
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

        {/* Trust badges */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          {badges.map((b) => (
            <div key={b} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#009cde] flex items-center justify-center">
                <Check size={9} className="text-white" />
              </div>
              <span className="text-sm text-gray-600">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
