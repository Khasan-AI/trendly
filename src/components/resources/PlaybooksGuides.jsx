import { FileText, Download, Users } from 'lucide-react'

const playbooks = [
  { type: 'PDF', title: 'CPA Campaign Launch Checklist', desc: 'Complete 47-point checklist to avoid common mistakes and ensure tracking accuracy from day one.', pages: '12 pages', downloads: '5,234' },
  { type: 'GOOGLE DOCS', title: 'Creator Brief Template', desc: 'Professional brief format that sets clear expectations and limits revisions to 3 iterations maximum.', pages: '8 pages', downloads: '4,891' },
  { type: 'PDF', title: 'ROI Calculation Framework', desc: 'Calculate true campaign ROI including hidden costs, attribution windows, and lifetime value metrics.', pages: '15 pages', downloads: '3,672' },
  { type: 'DOCX', title: 'Platform Selection Guide', desc: 'Compare Instagram, TikTok, and YouTube for different verticals, demographics, and campaign objectives.', pages: '20 pages', downloads: '4,123' },
  { type: 'PDF', title: 'Fraud Detection Playbook', desc: 'Identify fake followers, bot engagement, and suspicious traffic patterns before they impact your budget.', pages: '18 pages', downloads: '3,891' },
  { type: 'PDF', title: 'Agency Client Reporting Template', desc: 'Professional monthly report format with data visualization and executive summary sections.', pages: '10 pages', downloads: '2,756' },
]

const typeColor = {
  'PDF': 'bg-gray-100 text-gray-600',
  'GOOGLE DOCS': 'bg-gray-100 text-gray-600',
  'DOCX': 'bg-gray-100 text-gray-600',
}

export default function PlaybooksGuides() {
  return (
    <section className="bg-[#f5f7fa] py-12 lg:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-2">Playbooks & Guides</h2>
          <p className="text-gray-500">Step-by-step frameworks for campaign success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {playbooks.map((p) => (
            <div key={p.title} className="bg-white border-2 border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#009cde]/30 hover:shadow-md transition-all">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#009cde]/10 flex items-center justify-center">
                  <FileText size={22} className="text-[#009cde]" />
                </div>
                <span className={`text-xs px-2 py-1 rounded-lg font-semibold ${typeColor[p.type]}`}>{p.type}</span>
              </div>

              <div>
                <h3 className="font-bold text-black mb-1.5">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>

              <div className="flex items-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1"><FileText size={11} /> {p.pages}</div>
                <div className="flex items-center gap-1"><Users size={11} /> {p.downloads}</div>
              </div>

              <a href="#" className="flex items-center gap-1.5 text-[#009cde] font-semibold text-sm hover:underline mt-auto">
                <Download size={13} /> Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
