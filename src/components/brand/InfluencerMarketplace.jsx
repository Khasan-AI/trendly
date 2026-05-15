function StarRating({ value, count }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="w-3 h-3 text-[#009cde] fill-[#009cde]" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-xs text-gray-500">{value} ({count})</span>
    </div>
  )
}

const influencers = [
  {
    handle: '@fashionista_sarah',
    niche: 'Fashion & Lifestyle',
    followers: '245K',
    engagement: '4.8%',
    rating: 5.0,
    ratingCount: 47,
    price: '$250/post',
    initials: 'FS',
    color: 'bg-pink-400',
  },
  {
    handle: '@techreview_mike',
    niche: 'Technology',
    followers: '892K',
    engagement: '3.2%',
    rating: 4.9,
    ratingCount: 32,
    price: '$180/post',
    initials: 'TM',
    color: 'bg-blue-500',
  },
  {
    handle: '@fitnessguru_alex',
    niche: 'Health & Fitness',
    followers: '1.2M',
    engagement: '5.1%',
    rating: 4.8,
    ratingCount: 29,
    price: '$320/post',
    initials: 'FA',
    color: 'bg-green-500',
  },
  {
    handle: '@travelblogger_sophia',
    niche: 'Travel & Adventure',
    followers: '987K',
    engagement: '4.3%',
    rating: 4.7,
    ratingCount: 35,
    price: '$280/post',
    initials: 'TS',
    color: 'bg-purple-500',
  },
]

function InfluencerCard({ inf }) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 flex flex-col gap-4 hover:shadow-md transition-shadow">
      {/* Avatar */}
      <div className="flex flex-col items-center gap-2">
        <div className={`w-20 h-20 rounded-full ${inf.color} flex items-center justify-center text-white text-xl font-bold`}>
          {inf.initials}
        </div>
        <div className="text-sm font-bold text-black text-center">{inf.handle}</div>
        <div className="text-xs text-gray-500">{inf.niche}</div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-2">
        <div className="text-center bg-gray-50 rounded-lg py-2">
          <div className="text-lg font-bold text-[#009cde]">{inf.followers}</div>
          <div className="text-xs text-gray-400">Followers</div>
        </div>
        <div className="text-center bg-gray-50 rounded-lg py-2">
          <div className="text-lg font-bold text-[#009cde]">{inf.engagement}</div>
          <div className="text-xs text-gray-400">Engagement</div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex justify-center">
        <StarRating value={inf.rating} count={inf.ratingCount} />
      </div>

      {/* Price */}
      <div className="border border-[#009cde] rounded-lg py-2 text-center">
        <span className="text-sm font-semibold text-[#009cde]">{inf.price}</span>
      </div>
    </div>
  )
}

export default function InfluencerMarketplace() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-14">
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-2">8,932+ Verified Influencers</h2>
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-4">Ready to Promote Your Brand</h2>
          <p className="text-gray-500 text-lg">
            Browse our curated marketplace of authentic influencers across all major platforms and niches.
          </p>
        </div>

        {/* Dashboard wrapper */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {influencers.map((inf) => (
              <InfluencerCard key={inf.handle} inf={inf} />
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <a
              href="#"
              className="px-8 py-3 bg-[#009cde] text-white font-semibold rounded-xl hover:bg-[#0089c4] transition-colors text-sm"
            >
              View All Influencers
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
