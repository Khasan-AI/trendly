import { ArrowRight, Calendar, Check } from 'lucide-react'

const badges = [
  'No credit card required',
  'Setup in 5 minutes',
  'Cancel anytime',
]

export default function AgencyCTA() {
  return (
    <section className="bg-black py-14 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-7">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Ready to Scale Your Agency?
        </h2>
        <p className="text-white/70 text-lg max-w-xl">
          Join 250+ agencies already managing $50M+ in influencer campaigns on Trendly.
          Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a href="#" className="flex items-center gap-2.5 px-8 py-4 bg-[#009cde] text-white font-semibold rounded-xl hover:bg-[#0089c4] transition-colors w-full sm:w-auto justify-center">
            Start 14-Day Free Trial <ArrowRight size={18} />
          </a>
          <a href="#" className="flex items-center gap-2.5 px-8 py-4 border border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors w-full sm:w-auto justify-center">
            <Calendar size={16} /> Schedule Demo Call
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          {badges.map((b) => (
            <div key={b} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#009cde] flex items-center justify-center">
                <Check size={9} className="text-white" />
              </div>
              <span className="text-sm text-white/60">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
