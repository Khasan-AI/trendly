import { ArrowRight } from 'lucide-react'
import ForBrandsIcon from '../assets/icons/for brands.svg'
import ForCreatorsIcon from '../assets/icons/for creators.svg'
import ForAgenciesIcon from '../assets/icons/for agencies.svg'

const paths = [
  { icon: ForBrandsIcon,   title: 'For Brands',   desc: 'Launch performance campaigns and pay only for verified results',    cta: 'Start Campaign' },
  { icon: ForCreatorsIcon, title: 'For Creators', desc: 'Connect your profiles and start earning from verified brands',       cta: 'Join Marketplace' },
  { icon: ForAgenciesIcon, title: 'For Agencies', desc: 'Manage multiple clients with white-label control panel',             cta: 'Request Demo' },
]

export default function PathSelector() {
  return (
    <section className="bg-white py-14 lg:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2 lg:mb-3">Choose Your Path</h2>
          <p className="text-gray-500 text-base lg:text-lg">Get started in less than 5 minutes</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {paths.map((p) => (
            <div key={p.title} className="border-2 border-gray-100 rounded-2xl p-6 lg:p-8 flex flex-col gap-3 lg:gap-4 hover:border-[#009cde]/40 hover:shadow-md transition-all group">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-[#009cde]/10 flex items-center justify-center">
                <img src={p.icon} className="w-6 h-6 lg:w-7 lg:h-7 object-contain" alt="" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-black">{p.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              <a href="#" className="flex items-center gap-1.5 text-sm font-semibold text-[#009cde] mt-auto group-hover:gap-2.5 transition-all">
                {p.cta}
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
