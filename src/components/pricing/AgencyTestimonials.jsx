const testimonials = [
  {
    stars: 5,
    quote: '"Trendly transformed how we manage our 25 creators. The centralized dashboard and bulk payment features alone save us 10+ hours per week."',
    name: 'Marcus Chen',
    role: 'CEO, Influence Media',
  },
  {
    stars: 5,
    quote: '"The white-label option lets us present a seamless experience to our clients. The API integration with our CRM was straightforward."',
    name: 'Sarah Mitchell',
    role: 'Founder, Creator Collective',
  },
  {
    stars: 5,
    quote: '"Finally, a platform built for agencies. The analytics help us prove ROI to brands, and our creators love the fast, reliable payouts."',
    name: 'David Rodriguez',
    role: 'Director, Talent Hub Agency',
  },
]

export default function AgencyTestimonials() {
  return (
    <section className="bg-[#f9fafb] py-12 lg:py-20 border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2">Trusted by Leading Agencies</h2>
          <p className="text-gray-500">See what agency owners say about Trendly</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {testimonials.map(({ stars, quote, name, role }) => (
            <div key={name} className="bg-white border border-gray-200 rounded-2xl p-5 lg:p-7 flex flex-col gap-5">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-base">★</span>
                ))}
              </div>
              {/* Quote */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{quote}</p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#009cde]/20 flex items-center justify-center text-[#009cde] font-bold text-sm">
                  {name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-sm font-bold text-black">{name}</div>
                  <div className="text-xs text-gray-400">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
