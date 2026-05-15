import { ArrowRight, Play } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-5">
          Start Free — No Card Required
        </h2>
        <p className="text-gray-400 text-base lg:text-lg mb-8 lg:mb-10 max-w-2xl mx-auto">
          Join 8,932 creators and 1,247 brands already using Trendly for transparent performance marketing
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-5">
          <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 bg-[#009cde] text-white font-semibold rounded-xl hover:bg-[#0089c4] transition-colors text-sm lg:text-base">
            Start Free <ArrowRight size={18} />
          </a>
          <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm lg:text-base">
            See How It Works <Play size={16} className="fill-white" />
          </a>
        </div>
      </div>
    </section>
  )
}
