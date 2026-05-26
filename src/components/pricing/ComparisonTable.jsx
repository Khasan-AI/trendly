import tickIcon from '../../assets/icons/tick.svg'

const CheckIcon = () => (
  <img src={tickIcon} alt="" width={16} style={{ flexShrink: 0 }} />
)

const DashIcon = () => (
  <span style={{ color: '#9ca3af', fontSize: 18, fontWeight: 700, lineHeight: 1 }}>—</span>
)

const Badge = ({ text, isHighlight }) => (
  <span
    style={{
      background: isHighlight ? '#009cde' : '#f3f4f6',
      color: isHighlight ? '#fff' : '#4b5563',
      padding: '2px 10px',
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      display: 'inline-block',
    }}
  >
    {text}
  </span>
)

const BADGE_TEXTS = new Set([
  'Unlimited', 'Basic', 'Advanced', 'Custom', 'Enterprise',
  'Multi-touch', 'All formats', 'All methods', 'Priority', 'Premium',
  'White-glove', 'Up to 5', 'Up to 15', 'Up to 30',
])

const subtitles = {
  'For Brands':   "Detailed breakdown of what's included in each plan",
  'For Creators': "Detailed breakdown of what's included in each creator plan",
  'For Agencies': "Detailed breakdown of what's included in each agency plan",
}

const tables = {
  'For Brands': {
    plans: ['Starter', 'Standard', 'Premium', 'Enterprise'],
    highlightIdx: 2,
    ctas: [
      { text: 'Start Free',     highlight: false },
      { text: 'Start Standard', highlight: false },
      { text: 'Start Premium',  highlight: true  },
      { text: 'Contact Sales',  highlight: false },
    ],
    sections: [
      {
        title: 'Campaign Management',
        rows: [
          { feature: 'Active campaigns',          values: ['3', '15', 'Unlimited', 'Unlimited'] },
          { feature: 'Campaign templates',         values: [true, true, true, true] },
          { feature: 'Creator matching AI',        values: [false, true, true, true] },
          { feature: 'Content approval workflow',  values: ['Basic', 'Advanced', 'Advanced', 'Custom'] },
        ],
      },
      {
        title: 'Tracking & Analytics',
        rows: [
          { feature: 'Official API tracking',   values: [true, true, true, true] },
          { feature: 'Promo code tracking',     values: [true, true, true, true] },
          { feature: 'UTM link tracking',       values: [false, true, true, true] },
          { feature: 'Webhook integrations',    values: [false, false, true, true] },
          { feature: 'Real-time dashboard',     values: [true, true, true, true] },
          { feature: 'Conversion attribution',  values: ['Basic', 'Multi-touch', 'Multi-touch', 'Custom'] },
        ],
      },
      {
        title: 'Reporting',
        rows: [
          { feature: 'Standard reports',    values: [true, true, true, true] },
          { feature: 'Custom reports',      values: [false, true, true, true] },
          { feature: 'White-label reports', values: [false, false, true, true] },
          { feature: 'Export formats',      values: ['CSV', 'CSV, PDF', 'All formats', 'All formats'] },
        ],
      },
      {
        title: 'Payment & Security',
        rows: [
          { feature: 'Escrow payouts',     values: [true, true, true, true] },
          { feature: 'Platform fee',       values: ['2%', '2%', '1.5%', 'Custom'] },
          { feature: 'Audit trail',        values: [true, true, true, true] },
          { feature: 'AES-256 encryption', values: [true, true, true, true] },
        ],
      },
      {
        title: 'Support',
        rows: [
          { feature: 'Email support',             values: [true, true, true, true] },
          { feature: 'Response time',             values: ['48h', '24h', '4h', '1h'] },
          { feature: 'Dedicated account manager', values: [false, false, true, true] },
          { feature: 'Phone support',             values: [false, false, false, '24/7'] },
        ],
      },
    ],
  },

  'For Creators': {
    plans: ['Free', 'Creator', 'Pro', 'Agency'],
    highlightIdx: 2,
    ctas: [
      { text: 'Get Started', highlight: false },
      { text: 'Upgrade Now', highlight: false },
      { text: 'Go Pro',      highlight: true  },
      { text: 'Contact Us',  highlight: false },
    ],
    sections: [
      {
        title: 'Collaboration',
        rows: [
          { feature: 'Active collaborations',   values: ['5', 'Unlimited', 'Unlimited', 'Unlimited'] },
          { feature: 'Brand discovery',         values: [true, true, true, true] },
          { feature: 'Priority brand matching', values: [false, true, true, true] },
          { feature: 'Premium brand access',    values: [false, false, true, true] },
          { feature: 'Contract templates',      values: [true, true, true, true] },
        ],
      },
      {
        title: 'Portfolio & Branding',
        rows: [
          { feature: 'Portfolio page',      values: ['Basic', 'Custom', 'Custom', 'Custom'] },
          { feature: 'Custom domain',       values: [false, false, true, true] },
          { feature: 'Verified badge',      values: [false, false, true, true] },
          { feature: 'Media kit generator', values: [false, false, true, true] },
        ],
      },
      {
        title: 'Analytics & Insights',
        rows: [
          { feature: 'Performance tracking', values: [true, true, true, true] },
          { feature: 'Analytics dashboard',  values: ['Basic', 'Advanced', 'Advanced', 'Enterprise'] },
          { feature: 'Engagement metrics',   values: [true, true, true, true] },
          { feature: 'Revenue reports',      values: [true, true, true, true] },
          { feature: 'Export data',          values: [false, true, true, true] },
        ],
      },
      {
        title: 'Payments',
        rows: [
          { feature: 'Secure escrow payments', values: [true, true, true, true] },
          { feature: 'Payout speed',           values: ['7 days', '3 days', 'Same day', 'Same day'] },
          { feature: 'Payment methods',        values: ['Bank transfer', 'All methods', 'All methods', 'All methods'] },
          { feature: 'Rate negotiation tools', values: [false, false, true, true] },
        ],
      },
      {
        title: 'Support',
        rows: [
          { feature: 'Email support',     values: [true, true, true, true] },
          { feature: 'Response time',     values: ['48h', '24h', '12h', '4h'] },
          { feature: 'Dedicated manager', values: [false, false, true, true] },
          { feature: 'Creator community', values: [true, true, true, true] },
        ],
      },
    ],
  },

  'For Agencies': {
    plans: ['Starter', 'Growth', 'Professional', 'Enterprise'],
    highlightIdx: 2,
    ctas: [
      { text: 'Get Started',   highlight: false },
      { text: 'Upgrade Now',   highlight: false },
      { text: 'Go Pro',        highlight: true  },
      { text: 'Contact Sales', highlight: false },
    ],
    sections: [
      {
        title: 'Creator Management',
        rows: [
          { feature: 'Number of creators',     values: ['Up to 5', 'Up to 15', 'Up to 30', 'Unlimited'] },
          { feature: 'Centralized dashboard',  values: [true, true, true, true] },
          { feature: 'Team collaboration',     values: [false, true, true, true] },
          { feature: 'Role-based permissions', values: [false, false, true, true] },
          { feature: 'Creator onboarding',     values: [true, true, true, true] },
        ],
      },
      {
        title: 'Campaign Management',
        rows: [
          { feature: 'Active campaigns',        values: ['Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'] },
          { feature: 'Campaign templates',      values: [true, true, true, true] },
          { feature: 'Multi-creator campaigns', values: [true, true, true, true] },
          { feature: 'Workflow automation',     values: [false, true, true, true] },
          { feature: 'Brand matching',          values: [true, 'Priority', 'Priority', 'Premium'] },
        ],
      },
      {
        title: 'Analytics & Reporting',
        rows: [
          { feature: 'Performance tracking', values: [true, true, true, true] },
          { feature: 'Analytics dashboard',  values: ['Basic', 'Advanced', 'Advanced', 'Custom'] },
          { feature: 'Custom reports',       values: [false, true, true, true] },
          { feature: 'Export data',          values: [true, true, true, true] },
          { feature: 'Revenue tracking',     values: [true, true, true, true] },
        ],
      },
      {
        title: 'Payments & Billing',
        rows: [
          { feature: 'Bulk payments',       values: [true, true, true, true] },
          { feature: 'Payout speed',        values: ['3 days', '3 days', 'Same day', 'Same day'] },
          { feature: 'Payment methods',     values: ['All methods', 'All methods', 'All methods', 'All methods'] },
          { feature: 'Automated invoicing', values: [true, true, true, true] },
        ],
      },
      {
        title: 'Customization',
        rows: [
          { feature: 'White-label',         values: [false, false, true, true] },
          { feature: 'API access',          values: [false, false, true, true] },
          { feature: 'Custom integrations', values: [false, false, true, true] },
          { feature: 'Custom branding',     values: [false, false, true, true] },
        ],
      },
      {
        title: 'Support',
        rows: [
          { feature: 'Email support',      values: [true, true, true, true] },
          { feature: 'Response time',      values: ['24h', '12h', '4h', '1h'] },
          { feature: 'Account manager',    values: [false, false, true, true] },
          { feature: 'Onboarding support', values: [true, true, 'Priority', 'White-glove'] },
        ],
      },
    ],
  },
}

function Cell({ val, isHighlight }) {
  if (val === true)  return <CheckIcon />
  if (val === false) return <DashIcon />
  if (BADGE_TEXTS.has(val)) return <Badge text={val} isHighlight={isHighlight} />
  return <span style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>{val}</span>
}

export default function ComparisonTable({ activeTab }) {
  const table = tables[activeTab]
  const { highlightIdx, ctas } = table

  return (
    <section className="bg-[#f5f7fa] py-12 lg:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2 text-center">
          Compare All Features
        </h2>
        <p className="text-gray-500 text-center mb-10">
          {subtitles[activeTab]}
        </p>

        <div className="overflow-x-auto">
          <div
            className="bg-white rounded-2xl overflow-hidden min-w-[640px]"
            style={{ border: '1px solid #e5e7eb' }}
          >
            {/* Header row */}
            <div
              className="grid border-b border-gray-100"
              style={{ gridTemplateColumns: '2fr repeat(4, 1fr)' }}
            >
              <div className="p-5 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Features
              </div>
              {table.plans.map((p, i) => (
                <div
                  key={p}
                  className="p-5 text-center font-bold text-sm"
                  style={{
                    background: i === highlightIdx ? '#009cde' : 'transparent',
                    color:      i === highlightIdx ? '#fff'     : '#111827',
                  }}
                >
                  {p}
                  {i === highlightIdx && (
                    <div className="text-xs font-medium mt-0.5 opacity-80">Most Popular</div>
                  )}
                </div>
              ))}
            </div>

            {/* Feature sections */}
            {table.sections.map((section) => (
              <div key={section.title}>
                {/* Section title */}
                <div
                  className="grid border-b border-gray-100"
                  style={{ gridTemplateColumns: '2fr repeat(4, 1fr)', background: '#f9fafb' }}
                >
                  <div className="px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider col-span-5">
                    {section.title}
                  </div>
                </div>

                {/* Feature rows */}
                {section.rows.map((row) => (
                  <div
                    key={row.feature}
                    className="grid border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                    style={{ gridTemplateColumns: '2fr repeat(4, 1fr)' }}
                  >
                    <div className="px-5 py-4 text-sm text-gray-700">{row.feature}</div>
                    {row.values.map((val, i) => (
                      <div
                        key={i}
                        className="px-5 py-4 flex items-center justify-center"
                        style={{ background: i === highlightIdx ? 'rgba(0,156,222,0.05)' : 'transparent' }}
                      >
                        <Cell val={val} isHighlight={i === highlightIdx} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}

            {/* Bottom CTA row */}
            <div
              className="grid border-t border-gray-100 bg-white"
              style={{ gridTemplateColumns: '2fr repeat(4, 1fr)' }}
            >
              <div className="px-5 py-5" />
              {ctas.map((cta, i) => (
                <div
                  key={i}
                  className="px-3 py-5 flex items-center justify-center"
                  style={{ background: i === highlightIdx ? 'rgba(0,156,222,0.05)' : 'transparent' }}
                >
                  <button
                    className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      cta.highlight
                        ? 'bg-[#009cde] text-white hover:bg-[#0089c4]'
                        : 'bg-white text-black hover:bg-gray-50'
                    }`}
                    style={cta.highlight ? {} : { border: '2px solid #111827' }}
                  >
                    {cta.text}
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
