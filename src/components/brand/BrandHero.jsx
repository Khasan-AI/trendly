import { ArrowRight, Play } from 'lucide-react'

const stats = [
  { value: '340%', label: 'Average ROI' },
  { value: '48h', label: 'Campaign Launch' },
  { value: '98.7%', label: 'Success Rate' },
]

export default function BrandHero() {
  return (
    <section className="bg-black py-14 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-7">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 rounded-full">
            <span className="text-white/80 text-sm">🚀 Launch high-converting campaigns</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Drive Real Results with<br />
            <span className="text-[#009cde]">Performance Marketing</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
            Connect with 8,932+ verified influencers. Pay only for actual sales, leads, or clicks.
            Track every conversion with military-grade precision.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
            <a
              href="#"
              className="flex items-center gap-2.5 px-8 py-4 bg-[#009cde] text-white font-semibold rounded-xl hover:bg-[#0089c4] transition-colors text-base w-full sm:w-auto justify-center"
            >
              Launch Your First Campaign
              <ArrowRight size={18} />
            </a>
            <a
              href="#"
              className="flex items-center gap-2.5 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-base w-full sm:w-auto justify-center"
            >
              <Play size={16} className="fill-white" />
              Watch Demo
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 lg:gap-16 pt-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl lg:text-4xl font-bold text-[#009cde]">{s.value}</div>
                <div className="text-sm text-white/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
