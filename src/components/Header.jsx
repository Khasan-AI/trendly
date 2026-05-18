import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import trendlyLogo from '../assets/icons/trendly-logo.svg'

const navItems = [
  { label: 'Home',           path: '/' },
  { label: 'For Brands',     path: '/brands' },
  { label: 'For Influencers',path: '/influencers' },
  { label: 'For Agencies',   path: '/agencies' },
  { label: 'Pricing',        path: '/pricing' },
  { label: 'Resources',      path: '/resources' },
]

export default function Header() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  // close drawer on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

  // lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className="w-full sticky top-0 z-50"
        style={{
          background: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(229, 231, 235, 0.6)',
          boxShadow: '0 1px 20px rgba(0, 0, 0, 0.04)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-[86px] flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg overflow-hidden flex items-center justify-center">
              <img src={trendlyLogo} className="w-full h-full object-contain" alt="Trendly" />
            </div>
            <span className="text-xl lg:text-2xl font-bold tracking-tight text-gray-900">Trendly</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`px-4 py-5 text-sm font-medium transition-colors border-b-2 ${
                    isActive
                      ? 'text-[#009cde] border-[#009cde]'
                      : 'text-gray-700 border-transparent hover:text-black hover:border-gray-200'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="#" className="text-sm text-gray-700 hover:text-black font-medium">
              Login
            </Link>
            <Link
              to="/brands"
              className="px-6 py-3 bg-[#009cde] text-white text-sm font-semibold rounded-lg hover:bg-[#0089c4] transition-colors"
            >
              Start Campaign
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={22} className="text-gray-700" />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-in drawer (left) */}
      <div
        className="fixed top-0 left-0 h-full w-72 sm:w-80 z-50 flex flex-col transition-transform duration-300 lg:hidden"
        style={{
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '4px 0 32px rgba(0,0,0,0.10)',
        }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
              <img src={trendlyLogo} className="w-full h-full object-contain" alt="Trendly" />
            </div>
            <span className="text-xl font-bold text-black">Trendly</span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Nav links — scrollable if many items */}
        <nav className="flex-1 overflow-y-auto py-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center px-5 py-3.5 text-sm font-medium border-l-4 transition-colors ${
                  isActive
                    ? 'border-[#009cde] text-[#009cde] bg-[#009cde]/5'
                    : 'border-transparent text-gray-700 hover:text-black hover:bg-gray-50 hover:border-gray-200'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Drawer footer */}
        <div className="px-5 pb-8 pt-4 border-t border-gray-100 flex flex-col gap-3">
          <Link
            to="#"
            className="w-full py-3 text-center text-sm font-semibold text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/brands"
            className="w-full py-3 text-center text-sm font-semibold text-white bg-[#009cde] rounded-xl hover:bg-[#0089c4] transition-colors"
          >
            Start Campaign
          </Link>
        </div>
      </div>
    </>
  )
}
