import { FileText, Clock, Download as DL, ArrowRight } from 'lucide-react'

export default function FeaturedReport() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100 rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Left content */}
            <div className="flex-1 p-6 lg:p-12 flex flex-col gap-6">
              <div className="inline-flex w-fit px-3 py-1.5 bg-[#009cde] rounded-lg">
                <span className="text-white text-xs font-bold tracking-wider">FEATURED REPORT</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-black leading-snug">
                The State of Performance<br />Influencer Marketing 2025
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A comprehensive analysis of 10,000+ campaigns across Instagram, TikTok, and YouTube.
                Learn what drives real ROI in performance marketing.
              </p>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                {[
                  { icon: FileText, text: '48 pages' },
                  { icon: Clock, text: '15 min read' },
                  { icon: DL, text: '8,432 downloads' },
                ].map((m) => {
                  const Icon = m.icon
                  return (
                    <div key={m.text} className="flex items-center gap-1.5 text-sm text-gray-500">
                      <Icon size={14} className="text-[#009cde]" />
                      {m.text}
                    </div>
                  )
                })}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                <a href="#" className="flex items-center gap-2 px-6 py-3 bg-[#009cde] text-white font-semibold rounded-xl hover:bg-[#0089c4] transition-colors text-sm w-full sm:w-auto justify-center">
                  Download Free <ArrowRight size={16} />
                </a>
                <a href="#" className="px-6 py-3 border-2 border-black text-black font-semibold rounded-xl hover:bg-gray-50 transition-colors text-sm w-full sm:w-auto text-center">
                  Preview
                </a>
              </div>
            </div>

            {/* Right – visual placeholder */}
            <div className="w-full lg:w-80 h-48 lg:h-auto bg-gradient-to-br from-[#009cde]/10 to-[#009cde]/30 flex items-center justify-center">
              <div className="w-48 h-64 bg-white rounded-xl shadow-lg flex flex-col p-5 gap-4">
                <div className="h-3 bg-[#009cde] rounded-full w-3/4" />
                <div className="h-2 bg-gray-200 rounded-full w-full" />
                <div className="h-2 bg-gray-200 rounded-full w-5/6" />
                <div className="h-20 bg-[#009cde]/10 rounded-lg" />
                <div className="h-2 bg-gray-200 rounded-full w-full" />
                <div className="h-2 bg-gray-200 rounded-full w-4/5" />
                <div className="h-2 bg-gray-200 rounded-full w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
