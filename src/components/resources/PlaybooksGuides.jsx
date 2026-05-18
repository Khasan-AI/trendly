import playbookIcon from '../../assets/icons/Playbooks & Guides.svg'

const playbooks = [
  { type: 'PDF',         title: 'CPA Campaign Launch Checklist',    desc: 'Complete 47-point checklist to avoid common mistakes and ensure tracking accuracy from day one.',                         pages: '12 pages', downloads: '5,234' },
  { type: 'GOOGLE DOCS', title: 'Creator Brief Template',           desc: 'Professional brief format that sets clear expectations and limits revisions to 3 iterations maximum.',                    pages: '8 pages',  downloads: '4,891' },
  { type: 'PDF',         title: 'ROI Calculation Framework',        desc: 'Calculate true campaign ROI including hidden costs, attribution windows, and lifetime value metrics.',                    pages: '15 pages', downloads: '3,672' },
  { type: 'DOCX',        title: 'Platform Selection Guide',         desc: 'Compare Instagram, TikTok, and YouTube for different verticals, demographics, and campaign objectives.',                  pages: '20 pages', downloads: '4,123' },
  { type: 'PDF',         title: 'Fraud Detection Playbook',         desc: 'Identify fake followers, bot engagement, and suspicious traffic patterns before they impact your budget.',                pages: '18 pages', downloads: '3,891' },
  { type: 'PDF',         title: 'Agency Client Reporting Template', desc: 'Professional monthly report format with data visualization and executive summary sections.',                              pages: '10 pages', downloads: '2,756' },
]

/* Figma-matching inline icons */
const PageIcon = () => (
  <svg width="11" height="14" viewBox="0 0 11 14" fill="none">
    <path d="M1 2a1 1 0 011-1h5.5L10 4V13a1 1 0 01-1 1H2a1 1 0 01-1-1V2z" stroke="#111" strokeWidth="1"/>
    <path d="M6.5 1v3H10" stroke="#111" strokeWidth="1" strokeLinejoin="round"/>
  </svg>
)
const DownloadCountIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 1v8M4 6l3 3 3-3" stroke="#111" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1 11h12" stroke="#111" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)
const DownloadArrow = () => (
  <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
    <path d="M6 1v9M3 7l3 3 3-3" stroke="#009cde" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1 12.5h10" stroke="#009cde" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
)

export default function PlaybooksGuides() {
  return (
    <section className="bg-white py-12 lg:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 lg:mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-1">Playbooks & Guides</h2>
          <p className="text-sm lg:text-base" style={{ color: '#111111' }}>Step-by-step frameworks for campaign success</p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {playbooks.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl flex flex-col"
              style={{ border: '2px solid #eeeeee' }}
            >
              <div className="p-5 lg:p-6 flex flex-col gap-4 flex-1">
                {/* Icon + format badge */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center p-3"
                    style={{ background: 'rgba(0,156,222,0.1)' }}
                  >
                    <img src={playbookIcon} className="w-full h-full object-contain" alt="" />
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg"
                    style={{ background: '#eeeeee', color: '#111111' }}
                  >
                    {p.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-black text-sm lg:text-base leading-snug">{p.title}</h3>

                {/* Description */}
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#111111' }}>{p.desc}</p>

                {/* Stats */}
                <div className="flex items-center gap-5 text-xs" style={{ color: '#111111' }}>
                  <div className="flex items-center gap-1.5">
                    <PageIcon />
                    {p.pages}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <DownloadCountIcon />
                    {p.downloads}
                  </div>
                </div>

                {/* Download CTA */}
                <a href="#" className="flex items-center gap-2 text-[#009cde] font-semibold text-sm hover:underline mt-auto">
                  Download <DownloadArrow />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
