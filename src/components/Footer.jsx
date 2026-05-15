import { Link } from 'react-router-dom'

const footerLinks = {
  Product: [
    { label: 'Features',     to: null },
    { label: 'Pricing',      to: '/pricing' },
    { label: 'Integrations', to: null },
    { label: 'FAQ',          to: '/faq' },
    { label: 'API',          to: null },
  ],
  Company: [
    { label: 'About',   to: null },
    { label: 'Blog',    to: null },
    { label: 'Careers', to: null },
    { label: 'Contact', to: null },
  ],
  Legal: [
    { label: 'Privacy',    to: null },
    { label: 'Terms',      to: null },
    { label: 'Security',   to: null },
    { label: 'Compliance', to: null },
  ],
}

const socialIcons = [
  {
    label: 'Instagram',
    svg: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>,
  },
  {
    label: 'TikTok',
    svg: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>,
  },
  {
    label: 'YouTube',
    svg: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>,
  },
  {
    label: 'LinkedIn',
    svg: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
]

export default function Footer() {
  return (
    <footer className="bg-white" style={{ borderTop: '1px solid #f3f4f6' }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">

        {/* Main grid — brand col wider on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 lg:gap-12 mb-8 lg:mb-10">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col gap-4">
            <span className="text-2xl font-bold text-black">Trendly</span>
            <p className="text-sm text-[#4b5563] leading-relaxed max-w-[320px]">
              The transparent performance marketing marketplace for brands, creators, and agencies.
            </p>
            <div className="flex items-center gap-2">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg bg-[#f3f4f6] flex items-center justify-center hover:bg-gray-200 transition-colors shrink-0"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-3 lg:gap-4">
              <h4 className="text-base font-bold text-black">{category}</h4>
              <ul className="flex flex-col gap-2">
                {links.map((item) => (
                  <li key={item.label}>
                    {item.to ? (
                      <Link
                        to={item.to}
                        className="text-sm text-[#4b5563] hover:text-[#009cde] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href="#"
                        className="text-sm text-[#4b5563] hover:text-[#009cde] transition-colors"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 lg:pt-6"
          style={{ borderTop: '1px solid #f3f4f6' }}
        >
          <span className="text-sm text-[#4b5563] text-center sm:text-left order-2 sm:order-1">
            © 2025 Trendly. All rights reserved.
          </span>
          <div className="flex items-center gap-5 lg:gap-6 order-1 sm:order-2">
            {['Status', 'Documentation', 'Support'].map((l) => (
              <a
                key={l}
                href="#"
                className="text-sm text-[#4b5563] hover:text-[#009cde] transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
