import { ArrowRight } from 'lucide-react'
import ROICalcIcon         from '../../assets/icons/ROI Calculator.svg'
import BudgetPlannerIcon   from '../../assets/icons/Budget Planner.svg'
import CreatorScorecardIcon from '../../assets/icons/Creator Scorecard.svg'
import ContractGenIcon     from '../../assets/icons/Contract Generator.svg'
import CPAEstimatorIcon    from '../../assets/icons/CPA Estimator.svg'
import UTMBuilderIcon      from '../../assets/icons/UTM Builder.svg'
import CommissionCalcIcon  from '../../assets/icons/Commission Calculator.svg'
import ContentCalendarIcon from '../../assets/icons/Content Calendar.svg'

const tools = [
  { icon: ROICalcIcon,          name: 'ROI Calculator',       desc: 'Calculate campaign ROI with custom inputs' },
  { icon: BudgetPlannerIcon,    name: 'Budget Planner',        desc: 'Allocate spend across platforms' },
  { icon: CreatorScorecardIcon, name: 'Creator Scorecard',     desc: 'Evaluate creator authenticity' },
  { icon: ContractGenIcon,      name: 'Contract Generator',    desc: 'Create custom creator agreements' },
  { icon: CPAEstimatorIcon,     name: 'CPA Estimator',         desc: 'Predict cost per acquisition' },
  { icon: UTMBuilderIcon,       name: 'UTM Builder',           desc: 'Generate tracking URLs' },
  { icon: CommissionCalcIcon,   name: 'Commission Calculator', desc: 'Calculate creator payouts' },
  { icon: ContentCalendarIcon,  name: 'Content Calendar',      desc: 'Plan campaign timelines' },
]

export default function TemplatesTools() {
  return (
    <section className="bg-white py-12 lg:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-2">Templates & Tools</h2>
          <p className="text-gray-500">Interactive calculators and ready-to-use templates</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((t) => (
            <div key={t.name} className="border-2 border-gray-200 rounded-2xl p-5 flex flex-col gap-3 hover:border-[#009cde]/40 hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-xl bg-[#009cde]/10 flex items-center justify-center p-2">
                <img src={t.icon} className="w-full h-full object-contain" alt="" />
              </div>
              <h3 className="font-bold text-black">{t.name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed flex-1">{t.desc}</p>
              <a href="#" className="flex items-center gap-1 text-[#009cde] font-semibold text-xs group-hover:gap-2 transition-all">
                Use Tool <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
