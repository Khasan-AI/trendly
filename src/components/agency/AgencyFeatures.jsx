import { Check } from 'lucide-react'

export default function AgencyFeatures() {
  return (
    <section className="bg-[#f5f7fa] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-14">
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-3">Built for Agency Scale</h2>
          <p className="text-gray-500 text-lg">Everything you need to manage multiple brands and creators efficiently</p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Feature 1 – White Label */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 flex flex-col gap-5">
              <div className="inline-flex w-fit px-3 py-1.5 bg-black rounded-lg">
                <span className="text-white text-xs font-semibold tracking-wider">WHITE-LABEL SOLUTION</span>
              </div>
              <h3 className="text-3xl font-bold text-black">Your Brand, Your Rules</h3>
              <p className="text-gray-600 leading-relaxed">Complete white-label solution with your logo, colors, and domain. Clients never see Trendly branding.</p>
              <ul className="flex flex-col gap-2">
                {['Custom domain and SSL certificate','Your logo and brand colors throughout','Custom email notifications and reports','Branded mobile apps (iOS & Android)','Custom onboarding flows and tutorials'].map(p => (
                  <li key={p} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-6 h-6 rounded-lg bg-[#009cde] flex items-center justify-center shrink-0"><Check size={12} className="text-white" /></div>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:max-w-md">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-300" />
                      <span className="text-sm font-semibold text-black">YourAgency.com</span>
                    </div>
                    <div className="flex gap-1">{[1,2,3].map(i=><div key={i} className="w-2.5 h-2.5 rounded-full bg-gray-300"/>)}</div>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-3">
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-medium text-gray-600">Campaign Performance</span>
                      <span className="text-xs font-bold text-[#009cde]">+23%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full"><div className="w-4/5 h-full bg-[#009cde] rounded-full" /></div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 text-center">Complete white-label experience</p>
              </div>
            </div>
          </div>

          {/* Feature 2 – Multi Brand */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
            <div className="flex-1 flex flex-col gap-5">
              <div className="inline-flex w-fit px-3 py-1.5 bg-black rounded-lg">
                <span className="text-white text-xs font-semibold tracking-wider">MULTI-BRAND CONTROL</span>
              </div>
              <h3 className="text-3xl font-bold text-black">Manage All Your Clients</h3>
              <p className="text-gray-600 leading-relaxed">Switch between client accounts seamlessly. Each brand gets isolated workspace with dedicated budgets, campaigns, and reporting.</p>
              <ul className="flex flex-col gap-2">
                {['Unlimited brand accounts','Role-based access control per brand','Separate billing and invoicing','Cross-brand performance analytics'].map(p => (
                  <li key={p} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-6 h-6 rounded-lg bg-[#009cde] flex items-center justify-center shrink-0"><Check size={12} className="text-white" /></div>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:max-w-md">
              <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-black">Multi-Brand Management</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-lg">15 Brands</span>
                </div>
                {[{n:'FashionCorp',c:'12 campaigns'},{n:'TechStartup',c:'8 campaigns'},{n:'BeautyBrand',c:'15 campaigns'},{n:'FitnessHub',c:'6 campaigns'}].map(b => (
                  <div key={b.n} className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-gray-200" />
                      <span className="text-xs font-semibold text-black">{b.n}</span>
                    </div>
                    <span className="text-xs text-gray-400">{b.c}</span>
                  </div>
                ))}
                <div className="flex justify-between border-t border-gray-100 pt-2">
                  <span className="text-xs text-gray-400">Total monthly budget</span>
                  <span className="text-sm font-bold text-[#009cde]">$487,500</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 – Reporting */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 flex flex-col gap-5">
              <div className="inline-flex w-fit px-3 py-1.5 bg-black rounded-lg">
                <span className="text-white text-xs font-semibold tracking-wider">AUTOMATED REPORTING</span>
              </div>
              <h3 className="text-3xl font-bold text-black">Reports That Wow Clients</h3>
              <p className="text-gray-600 leading-relaxed">Generate beautiful, branded reports in seconds. Schedule automatic delivery or download on-demand in PDF, Excel, or PowerPoint format.</p>
              <ul className="flex flex-col gap-2">
                {['50+ pre-built report templates','Custom report builder with drag-n-drop','Automated scheduling (daily, weekly, monthly)','Export to PDF, Excel, PowerPoint, CSV','Client portal with real-time access'].map(p => (
                  <li key={p} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-6 h-6 rounded-lg bg-[#009cde] flex items-center justify-center shrink-0"><Check size={12} className="text-white" /></div>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:max-w-md">
              <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-black">Campaign Report</span>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 text-xs">↓</div>
                    <div className="w-8 h-8 rounded-lg bg-[#009cde] flex items-center justify-center text-white text-xs">↑</div>
                  </div>
                </div>
                {[{l:'Total Reach',v:'2.4M'},{l:'Engagement Rate',v:'8.7%'},{l:'Conversions',v:'1,234'},{l:'ROI',v:'340%'}].map(r => (
                  <div key={r.l} className="flex justify-between border-b border-gray-50 py-2.5 last:border-0">
                    <span className="text-sm text-gray-500">{r.l}</span>
                    <span className="text-sm font-bold text-[#009cde]">{r.v}</span>
                  </div>
                ))}
                <p className="text-xs text-gray-400 text-center pt-1">Multiple export formats</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
