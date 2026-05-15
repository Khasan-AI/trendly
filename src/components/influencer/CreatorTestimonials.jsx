function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#009cde] fill-[#009cde]" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const creators = [
  {
    handle: '@lifestyle_anna',
    platform: '125K followers • Instagram',
    earnings: '$4,200',
    quote: '"I\'ve tripled my income since joining Trendly. The payment reliability and clear briefs make working with brands stress-free."',
    initials: 'LA',
    color: 'bg-pink-400',
  },
  {
    handle: '@tech_reviews_mike',
    platform: '340K subscribers • YouTube',
    earnings: '$8,500',
    quote: '"CPA campaigns work perfectly for tech reviews. My audience trusts my recommendations, and I earn based on actual conversions."',
    initials: 'TM',
    color: 'bg-blue-500',
  },
  {
    handle: '@beauty_sarah',
    platform: '580K followers • TikTok',
    earnings: '$6,800',
    quote: '"Love the mix of performance and fixed campaigns. I can balance quick content posts with deeper affiliate partnerships."',
    initials: 'BS',
    color: 'bg-purple-500',
  },
]

export default function CreatorTestimonials() {
  return (
    <section className="bg-[#f5f7fa] py-12 lg:py-20 border-y border-[#009cde]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-3">Real Creators, Real Results</h2>
          <p className="text-gray-500 text-lg">
            Join thousands of creators earning predictable income
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creators.map((c) => (
            <div key={c.handle} className="bg-white border border-gray-200 rounded-2xl p-5 lg:p-7 flex flex-col gap-5">
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-full ${c.color} flex items-center justify-center text-white font-bold text-lg shrink-0`}>
                  {c.initials}
                </div>
                <div>
                  <div className="font-bold text-black">{c.handle}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{c.platform}</div>
                </div>
              </div>

              {/* Earnings */}
              <div>
                <div className="text-3xl font-bold text-[#009cde]">{c.earnings}</div>
                <div className="text-sm text-gray-400 mt-0.5">Monthly earnings</div>
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-600 leading-relaxed italic flex-1">{c.quote}</p>

              {/* Stars */}
              <Stars />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
