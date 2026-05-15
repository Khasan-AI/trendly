import { Check, X, Minus } from 'lucide-react'

const tables = {
  'For Brands': {
    plans: ['Starter', 'Standard', 'Premium', 'Enterprise'],
    sections: [
      {
        title: 'Campaign Management',
        rows: [
          { feature: 'Active campaigns', values: ['5', '20', 'Unlimited', 'Unlimited'] },
          { feature: 'Campaign templates', values: [true, true, true, true] },
          { feature: 'Custom briefs', values: [false, true, true, true] },
          { feature: 'Campaign automation', values: [false, false, true, true] },
          { feature: 'A/B testing', values: [false, false, true, true] },
        ],
      },
      {
        title: 'Creator Discovery',
        rows: [
          { feature: 'Creator connections/month', values: ['10', 'Unlimited', 'Unlimited', 'Unlimited'] },
          { feature: 'Standard creator search', values: [true, true, true, true] },
          { feature: 'AI-powered matching', values: [false, true, true, true] },
          { feature: 'Fraud detection', values: [false, false, true, true] },
          { feature: 'Brand safety filters', values: [false, true, true, true] },
        ],
      },
      {
        title: 'Analytics & Reporting',
        rows: [
          { feature: 'Basic analytics', values: [true, true, true, true] },
          { feature: 'ROI tracking', values: [false, true, true, true] },
          { feature: 'Multi-platform tracking', values: [false, false, true, true] },
          { feature: 'White-label reports', values: [false, false, true, true] },
          { feature: 'API access', values: [false, false, true, true] },
          { feature: 'Data exports (CSV/PDF)', values: [false, true, true, true] },
        ],
      },
      {
        title: 'Support',
        rows: [
          { feature: 'Email support', values: [true, true, true, true] },
          { feature: 'Priority chat support', values: [false, true, true, true] },
          { feature: 'Dedicated account manager', values: [false, false, true, true] },
          { feature: 'Custom SLA', values: [false, false, false, true] },
        ],
      },
    ],
  },
  'For Creators': {
    plans: ['Free', 'Creator', 'Pro', 'Agency'],
    sections: [
      {
        title: 'Campaign Access',
        rows: [
          { feature: 'Campaign applications/month', values: ['5', 'Unlimited', 'Unlimited', 'Unlimited'] },
          { feature: 'Early campaign access', values: [false, false, true, true] },
          { feature: 'Direct brand messaging', values: [false, true, true, true] },
          { feature: 'Invitation-only campaigns', values: [false, false, true, true] },
        ],
      },
      {
        title: 'Profile & Discovery',
        rows: [
          { feature: 'Creator profile', values: [true, true, true, true] },
          { feature: 'Standard listing', values: [true, true, true, true] },
          { feature: 'Priority placement', values: [false, true, true, true] },
          { feature: 'Featured placement', values: [false, false, true, true] },
          { feature: 'Rate card builder', values: [false, true, true, true] },
        ],
      },
      {
        title: 'Earnings & Payments',
        rows: [
          { feature: 'Payment processing', values: [true, true, true, true] },
          { feature: 'Invoice tools', values: [false, true, true, true] },
          { feature: 'Earnings dashboard', values: [false, true, true, true] },
          { feature: 'Advanced earnings analytics', values: [false, false, true, true] },
          { feature: 'Tax document templates', values: [false, false, true, true] },
          { feature: 'Manage multiple creators', values: [false, false, false, true] },
        ],
      },
      {
        title: 'Analytics',
        rows: [
          { feature: 'Basic performance stats', values: [true, true, true, true] },
          { feature: 'Detailed analytics', values: [false, true, true, true] },
          { feature: 'Multi-platform analytics', values: [false, false, true, true] },
          { feature: 'Content performance tracking', values: [false, true, true, true] },
        ],
      },
    ],
  },
  'For Agencies': {
    plans: ['Starter', 'Growth', 'Professional', 'Enterprise'],
    sections: [
      {
        title: 'Client Management',
        rows: [
          { feature: 'Client accounts', values: ['3', '10', 'Unlimited', 'Unlimited'] },
          { feature: 'Active campaigns', values: ['10', '50', 'Unlimited', 'Unlimited'] },
          { feature: 'Team seats', values: ['2', '5', 'Unlimited', 'Unlimited'] },
          { feature: 'Client portal', values: [false, true, true, true] },
          { feature: 'Custom workflows', values: [false, false, true, true] },
        ],
      },
      {
        title: 'Reporting & Branding',
        rows: [
          { feature: 'Standard reports', values: [true, true, true, true] },
          { feature: 'White-label reports', values: [false, true, true, true] },
          { feature: 'Custom branding', values: [false, false, true, true] },
          { feature: 'Scheduled report delivery', values: [false, false, true, true] },
          { feature: 'API access', values: [false, false, true, true] },
        ],
      },
      {
        title: 'Campaign Tools',
        rows: [
          { feature: 'Creator search', values: [true, true, true, true] },
          { feature: 'AI creator matching', values: [false, true, true, true] },
          { feature: 'Fraud detection', values: [false, false, true, true] },
          { feature: 'Campaign automation', values: [false, true, true, true] },
          { feature: 'Bulk management', values: [false, false, true, true] },
        ],
      },
      {
        title: 'Support',
        rows: [
          { feature: 'Email support', values: [true, true, true, true] },
          { feature: 'Priority support', values: [false, true, true, true] },
          { feature: 'Dedicated account manager', values: [false, false, true, true] },
          { feature: 'Dedicated success team', values: [false, false, false, true] },
          { feature: 'SLA guarantee', values: [false, false, true, true] },
        ],
      },
    ],
  },
}

function Cell({ val, highlight }) {
  if (val === true) return <Check size={18} className={highlight ? 'text-white mx-auto' : 'text-[#009cde] mx-auto'} />
  if (val === false) return <X size={16} className="text-gray-300 mx-auto" />
  return <span className={`text-sm font-semibold ${highlight ? 'text-white' : 'text-black'}`}>{val}</span>
}

export default function ComparisonTable({ activeTab }) {
  const table = tables[activeTab]
  const highlightIdx = activeTab === 'For Creators' ? 2 : 2 // Premium/Pro/Professional always index 2

  return (
    <section className="bg-[#f5f7fa] py-12 lg:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2 text-center">Full Feature Comparison</h2>
        <p className="text-gray-500 text-center mb-10">See exactly what's included in each plan</p>

        <div className="overflow-x-auto">
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden min-w-[640px]">
          {/* Header */}
          <div className="grid border-b border-gray-100" style={{ gridTemplateColumns: '2fr repeat(4, 1fr)' }}>
            <div className="p-5 text-sm font-semibold text-gray-400 uppercase tracking-wider">Features</div>
            {table.plans.map((p, i) => (
              <div
                key={p}
                className={`p-5 text-center font-bold text-sm ${i === highlightIdx ? 'bg-[#009cde] text-white' : 'text-black'}`}
              >
                {p}
              </div>
            ))}
          </div>

          {/* Sections */}
          {table.sections.map((section) => (
            <div key={section.title}>
              <div
                className="grid bg-gray-50 border-b border-gray-100"
                style={{ gridTemplateColumns: '2fr repeat(4, 1fr)' }}
              >
                <div className="px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider col-span-5">
                  {section.title}
                </div>
              </div>
              {section.rows.map((row, ri) => (
                <div
                  key={row.feature}
                  className={`grid border-b border-gray-50 hover:bg-gray-50/50 transition-colors`}
                  style={{ gridTemplateColumns: '2fr repeat(4, 1fr)' }}
                >
                  <div className="px-5 py-4 text-sm text-gray-700">{row.feature}</div>
                  {row.values.map((val, i) => (
                    <div
                      key={i}
                      className={`px-5 py-4 flex items-center justify-center ${i === highlightIdx ? 'bg-[#009cde]/5' : ''}`}
                    >
                      <Cell val={val} highlight={false} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
