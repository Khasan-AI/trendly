import { ArrowRight } from 'lucide-react'

const posts = [
  { cat: 'Industry Trends', date: 'Mar 15, 2025', read: '5 min', title: 'Why CPA Models Are Replacing Flat Fees in 2025', excerpt: 'Performance-based pricing is becoming the new standard as brands demand measurable ROI from influencer partnerships.', color: 'bg-blue-100' },
  { cat: 'Best Practices', date: 'Mar 12, 2025', read: '8 min', title: 'How to Spot Fake Followers in 60 Seconds', excerpt: 'Quick methods to identify bot accounts and engagement pods before committing to a creator partnership.', color: 'bg-purple-100' },
  { cat: 'Platform Updates', date: 'Mar 10, 2025', read: '4 min', title: 'TikTok Shop API Now Integrated with Trendly', excerpt: 'Track product sales directly from TikTok Shop with our new native integration for complete attribution visibility.', color: 'bg-pink-100' },
  { cat: 'Case Study', date: 'Mar 8, 2025', read: '6 min', title: 'Agency Reduces Reporting Time by 40 Hours Monthly', excerpt: 'How one performance marketing agency automated client reporting using Trendly\'s white-label dashboard.', color: 'bg-green-100' },
  { cat: 'Legal & Compliance', date: 'Mar 5, 2025', read: '7 min', title: 'The 3-Revision Rule: Why It Protects Everyone', excerpt: 'Understanding how fixed iteration limits prevent scope creep and maintain healthy brand-creator relationships.', color: 'bg-orange-100' },
  { cat: 'Data & Analytics', date: 'Mar 3, 2025', read: '9 min', title: 'Attribution Windows: What Marketers Get Wrong', excerpt: 'Common mistakes in setting attribution windows and how they impact campaign ROI calculations.', color: 'bg-cyan-100' },
]

export default function BlogStream() {
  return (
    <section className="bg-white py-12 lg:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold text-black mb-2">Latest from the Blog</h2>
            <p className="text-gray-500">Industry insights and platform updates</p>
          </div>
          <a href="#" className="flex items-center gap-1.5 text-[#009cde] font-semibold text-sm hover:underline whitespace-nowrap">
            View All Articles <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <div key={p.title} className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#009cde]/30 hover:shadow-md transition-all flex flex-col">
              {/* Image placeholder */}
              <div className={`h-48 ${p.color} flex items-center justify-center`}>
                <div className="w-16 h-16 rounded-xl bg-white/60 flex items-center justify-center text-2xl">📝</div>
              </div>
              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="text-gray-600 font-medium">{p.cat}</span>
                  <span>•</span>
                  <span>{p.read} read</span>
                  <span>•</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="font-bold text-black leading-snug">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{p.excerpt}</p>
                <a href="#" className="flex items-center gap-1.5 text-[#009cde] font-semibold text-sm mt-auto hover:underline">
                  Read Article <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
