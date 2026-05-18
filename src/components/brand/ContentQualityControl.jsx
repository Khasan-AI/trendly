import { Check, ArrowRight } from 'lucide-react'
import CrystalBriefsIcon from '../../assets/icons/Crystal Clear Briefs.svg'
import IterationLimitIcon from '../../assets/icons/3-Iteration Limit.svg'
import AuditTrailConflictIcon from '../../assets/icons/audit trail.svg'
import CampaignReportShareIcon from '../../assets/icons/Campaign Report Share.svg'
import ZeroFraudConflictIcon from '../../assets/icons/zero fraud.svg'

const briefItems = [
  {
    title: 'Content Type & Format',
    desc: 'Video, image, carousel, story — specify exactly what you need',
  },
  {
    title: 'Key Messages & Hashtags',
    desc: 'Define must-have talking points and brand guidelines',
  },
  {
    title: 'Visual Requirements',
    desc: 'Upload reference images, brand assets, and examples',
  },
]

const revisionSteps = [
  { label: 'Initial Submission', badge: 'Draft 1', badgeColor: 'bg-[#009cde]', desc: 'Creator submits first version based on brief' },
  { label: 'First Revision', badge: 'Draft 2', badgeColor: 'bg-black', desc: 'Adjustments based on specific feedback' },
  { label: 'Final Revision', badge: 'Draft 3', badgeColor: 'bg-black', desc: 'Last chance for minor tweaks' },
]

const conflictItems = [
  {
    icon: AuditTrailConflictIcon,
    title: 'Documented Everything',
    desc: 'All briefs, revisions, and feedback logged with timestamps',
  },
  {
    icon: CampaignReportShareIcon,
    title: 'Fair Mediation',
    desc: 'Platform team reviews disputes with full audit trail',
  },
  {
    icon: ZeroFraudConflictIcon,
    title: 'Clear Outcomes',
    desc: 'Objective criteria for approval/rejection decisions',
  },
]

export default function ContentQualityControl() {
  return (
    <section className="bg-[#f5f7fa] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-14 max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-3">
            End Content Revision Hell
          </h2>
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-4">
            Maximum 3 Iterations, Clear Briefs
          </h2>
          <p className="text-gray-600 text-lg">
            No more endless back-and-forth. Our structured content approval process protects
            both brands and creators with clear expectations and limited revisions.
          </p>
        </div>

        {/* Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          {/* Crystal Clear Briefs */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 lg:p-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border-2 border-[#009cde] rounded-xl flex items-center justify-center p-2.5">
                <img src={CrystalBriefsIcon} className="w-full h-full object-contain" alt="" />
              </div>
              <h3 className="text-xl font-bold text-black">Crystal Clear Briefs</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Create detailed, structured briefs that leave no room for misinterpretation.
              Our template system ensures all requirements are documented upfront.
            </p>

            {/* Brief items */}
            <div className="border border-gray-100 rounded-xl p-5 flex flex-col gap-4">
              {briefItems.map((b) => (
                <div key={b.title} className="flex gap-3">
                  <Check size={15} className="text-[#009cde] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-black">{b.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3-Iteration Limit */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 lg:p-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border-2 border-[#009cde] rounded-xl flex items-center justify-center p-2.5">
                <img src={IterationLimitIcon} className="w-full h-full object-contain" alt="" />
              </div>
              <h3 className="text-xl font-bold text-black">3-Iteration Limit</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Protected workflow ensures fair treatment for both sides. Influencers can't
              be exploited with endless revisions; brands get quality content.
            </p>

            {/* Revision steps */}
            <div className="flex flex-col gap-3">
              {revisionSteps.map((r) => (
                <div key={r.label} className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-black">{r.label}</span>
                    <span className={`text-xs px-3 py-1 rounded-full text-white font-medium ${r.badgeColor}`}>
                      {r.badge}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">{r.desc}</p>
                </div>
              ))}

              {/* CTA row */}
              <div className="bg-[#009cde] rounded-xl px-4 py-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-white">Must Approve or Reject</span>
                <ArrowRight size={16} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Conflict resolution */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
            <h3 className="text-xl font-bold text-black">Conflict Resolution Built-In</h3>
            <span className="text-sm px-4 py-1.5 border border-[#009cde] text-[#009cde] rounded-full font-medium">
              Dispute Rate: 0.3%
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {conflictItems.map((c) => (
              <div key={c.title} className="border border-gray-100 rounded-xl p-5">
                <div className="w-10 h-10 rounded-xl bg-[#009cde]/10 flex items-center justify-center p-2 mb-3">
                  <img src={c.icon} className="w-full h-full object-contain" alt="" />
                </div>
                <div className="text-sm font-bold text-black mb-1">{c.title}</div>
                <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
