const logos = ['Shopify', 'Meta', 'TikTok', 'YouTube', 'Stripe', 'Google']

const testimonials = [
  {
    name: 'Elena Martinez',
    role: 'Marketing Director',
    initials: 'EM',
    color: 'bg-purple-100 text-purple-700',
    quote: '"Trendly transformed our influencer strategy. The transparency and real-time tracking gave us confidence to scale campaigns. We achieved 340% ROI in Q1."',
    stars: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'Content Creator',
    initials: 'MC',
    color: 'bg-blue-100 text-blue-700',
    quote: '"Finally, a platform where I get paid on time, every time. The 3-revision limit means no endless changes. I\'ve doubled my monthly income since joining."',
    stars: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'Agency Owner',
    initials: 'SJ',
    color: 'bg-green-100 text-green-700',
    quote: '"Managing 15+ brands was a nightmare before Trendly. The white-label dashboard and exportable reports save us 40+ hours monthly. The API integration is flawless."',
    stars: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#009cde] fill-[#009cde]" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function SocialProof() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2 lg:mb-3">Trusted by Leading Brands</h2>
          <p className="text-gray-500 text-base lg:text-lg">Join thousands of successful campaigns</p>
        </div>

        {/* Logo strip — scrollable on mobile */}
        <div className="flex items-center gap-6 lg:gap-10 mb-10 lg:mb-14 pb-8 lg:pb-10 border-b border-gray-100 overflow-x-auto no-scrollbar">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-xl lg:text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors cursor-default shrink-0"
            >
              {logo}
            </span>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="border border-gray-200 rounded-2xl p-5 lg:p-7 flex flex-col gap-4 lg:gap-5">
              <div className="flex items-center gap-3 lg:gap-4">
                <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center font-semibold text-sm lg:text-base shrink-0 ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-black text-sm lg:text-base">{t.name}</div>
                  <div className="text-xs lg:text-sm text-gray-500">{t.role}</div>
                  <Stars count={t.stars} />
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
