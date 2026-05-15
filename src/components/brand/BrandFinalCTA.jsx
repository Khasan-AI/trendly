import { ArrowRight, Calendar } from 'lucide-react'

export default function BrandFinalCTA() {
  return (
    <section className="bg-black py-14 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-7">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to Launch Your First Campaign?
          </h2>
          <p className="text-white/70 text-lg max-w-xl">
            Join 2,400+ brands using Trendly to scale their influencer
            marketing with zero risk
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-5 pt-2 w-full sm:w-auto">
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
              <Calendar size={16} />
              Book a 15-min Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
