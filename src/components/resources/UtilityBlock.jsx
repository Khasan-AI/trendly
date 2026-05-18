import { ArrowRight } from 'lucide-react'
import HelpCenterIcon from '../../assets/icons/Help Center.svg'
import APIDocIcon from '../../assets/icons/API Documentation.svg'
import GlossaryIcon from '../../assets/icons/Marketing Glossary.svg'

const utilities = [
  {
    icon: HelpCenterIcon,
    title: 'Help Center',
    desc: 'Search 200+ articles covering setup, troubleshooting, and best practices',
    cta: 'Browse Articles',
  },
  {
    icon: APIDocIcon,
    title: 'API Documentation',
    desc: 'Complete technical reference with code examples and integration guides',
    cta: 'View Docs',
  },
  {
    icon: GlossaryIcon,
    title: 'Marketing Glossary',
    desc: 'Definitions for CPA, CPL, CPO, attribution, and other performance marketing terms',
    cta: 'Explore Terms',
  },
]

export default function UtilityBlock() {
  return (
    <section className="bg-white py-12 lg:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {utilities.map((u) => (
            <div key={u.title} className="bg-gray-100 rounded-2xl p-6 lg:p-8 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-xl bg-[#009cde]/10 flex items-center justify-center p-4">
                <img src={u.icon} className="w-full h-full object-contain" alt="" />
              </div>
              <h3 className="text-xl font-bold text-black">{u.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{u.desc}</p>
              <a href="#" className="flex items-center gap-1.5 text-[#009cde] font-semibold text-sm hover:underline">
                {u.cta} <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
