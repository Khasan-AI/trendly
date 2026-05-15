import { Check, Server, Lock, FileCheck } from 'lucide-react'

const cards = [
  {
    icon: Server,
    title: 'Separated Infrastructure',
    desc: 'Financial and content data stored on separate servers with independent security protocols and access controls.',
    points: [
      'Isolated payment processing',
      'Encrypted data transmission',
      'Regular security audits',
    ],
  },
  {
    icon: Lock,
    title: 'AES-256 Encryption',
    desc: 'All API tokens, payment data, and sensitive information encrypted with military-grade AES-256 standard.',
    points: ['End-to-end encryption', 'Secure token storage', 'PCI DSS compliant'],
  },
  {
    icon: FileCheck,
    title: 'Tax Authority Integration',
    desc: 'Direct integration with tax authorities for instant business verification and compliance documentation.',
    points: ['ЭЦП verification', 'Automated tax reporting', 'Legal entity validation'],
  },
]

export default function EnterpriseFeatures() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-14">
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-2">Enterprise-Grade Security</h2>
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-4">Built for Scale, Secured by Design</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Bank-level security infrastructure trusted by Fortune 500 brands and government agencies
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => {
            const Icon = c.icon
            return (
              <div
                key={c.title}
                className="border border-gray-200 rounded-2xl p-6 lg:p-8 flex flex-col gap-5"
              >
                <div className="w-16 h-16 border-2 border-[#009cde] rounded-xl flex items-center justify-center">
                  <Icon size={26} className="text-[#009cde]" />
                </div>
                <h3 className="text-xl font-bold text-black">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <Check size={13} className="text-[#009cde] shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
