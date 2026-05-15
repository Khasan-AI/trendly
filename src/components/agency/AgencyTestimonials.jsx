function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className="w-4 h-4 fill-[#009cde]" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

const testimonials = [
  {
    quote: '"Trendly transformed how we manage influencer campaigns. We went from 20+ hours of manual work per week to just 2 hours. The white-label feature means our clients think it\'s our own platform."',
    name: 'Sarah Mitchell',
    role: 'CEO, DigitalBoost Agency',
    initials: 'SM',
    color: 'bg-purple-500',
  },
  {
    quote: '"The automated reporting alone is worth the subscription. Our clients love the real-time dashboards and we\'ve reduced report preparation time from 2 days to 10 minutes."',
    name: 'Marcus Chen',
    role: 'Director, Velocity Marketing',
    initials: 'MC',
    color: 'bg-blue-500',
  },
  {
    quote: '"We manage 25 brands now compared to 8 before Trendly. The multi-brand dashboard and automated payments made scaling so much easier. ROI tracking is crystal clear for every client."',
    name: 'Elena Rodriguez',
    role: 'Founder, InfluencerPro',
    initials: 'ER',
    color: 'bg-green-500',
  },
]

export default function AgencyTestimonials() {
  return (
    <section className="bg-white py-12 lg:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-3">Trusted by Leading Agencies</h2>
          <p className="text-gray-500 text-lg">See what agency owners and marketing directors say about Trendly</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="border border-gray-200 rounded-2xl p-5 lg:p-7 flex flex-col gap-5">
              <Stars />
              <p className="text-sm text-gray-600 leading-relaxed italic flex-1">{t.quote}</p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
                <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-black text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
