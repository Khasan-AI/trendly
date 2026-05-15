import { useState } from 'react'
import { Search } from 'lucide-react'

const filters = ['All', 'For Brands', 'For Creators', 'For Agencies']

export default function ResourcesHero() {
  const [active, setActive] = useState('All')

  return (
    <section className="bg-white py-12 lg:py-20 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
          Learn Performance Marketing
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl">
          Guides, courses, templates, and insights to help brands, creators,
          and agencies succeed with influencer marketing
        </p>

        {/* Search */}
        <div className="relative w-full max-w-xl">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full border-2 border-black rounded-xl pl-12 pr-5 py-4 text-black placeholder-gray-400 focus:outline-none focus:border-[#009cde] transition-colors"
          />
        </div>

        {/* Filter pills */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1 w-full justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`flex-none px-5 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all ${
                active === f
                  ? 'bg-[#009cde] border-[#009cde] text-white'
                  : 'border-black bg-white text-black hover:border-[#009cde] hover:text-[#009cde]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
