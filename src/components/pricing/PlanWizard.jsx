import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

/* ─── Wizard config per tab ─────────────────────────────────────────────── */
const wizardConfig = {
  'For Brands': {
    sectionBg: '#f9fafb',
    cardBg: '#ffffff',
    heading: 'Not Sure Which Plan to Choose?',
    sub: 'Answer 3 quick questions to find your perfect fit',
    q1: {
      label: '1. What\'s your monthly campaign volume?',
      type: 'pills',
      options: ['1-5 campaigns', '6-15 campaigns', '16-50 campaigns', '50+ campaigns'],
    },
    q2: {
      label: '2. Which tracking methods do you need?',
      type: 'checkboxes',
      options: ['Promo codes only', 'UTM link tracking', 'Webhook integrations', 'Custom API tracking'],
    },
    q3: {
      label: '3. What level of support do you require?',
      type: 'radio-cards',
      options: [
        { title: 'Email support (48h response)',     sub: 'Standard support for basic needs' },
        { title: 'Priority email (24h response)',    sub: 'Faster support for growing teams' },
        { title: 'Dedicated manager (4h response)',  sub: 'Personal support for serious marketers' },
        { title: '24/7 phone support (1h response)', sub: 'Enterprise-grade support' },
      ],
    },
    results: [
      { plan: 'Starter',    price: '$0/mo',    desc: 'Perfect for small campaigns just getting started.' },
      { plan: 'Standard',   price: '$49/mo',   desc: 'For growing brands running regular campaigns.' },
      { plan: 'Premium',    price: '$149/mo',  desc: 'The full suite for serious marketing teams.' },
      { plan: 'Enterprise', price: 'Custom',   desc: 'Custom solutions for high-volume brands.' },
    ],
  },

  'For Creators': {
    sectionBg: '#ffffff',
    cardBg: '#f9fafb',
    heading: 'Which Plan Is Right for You?',
    sub: 'Answer 3 quick questions to find your perfect plan',
    q1: {
      label: '1. How many brand collaborations do you do monthly?',
      type: 'pills',
      options: ['1-2', '3-5', '6-10', '10+'],
    },
    q2: {
      label: '2. What features matter most to you?',
      type: 'checkboxes',
      options: ['Fast payouts', 'Professional portfolio', 'Premium brand access', 'Advanced analytics'],
    },
    q3: {
      label: '3. What\'s your creator status?',
      type: 'radio-cards',
      options: [
        { title: 'Just starting out',    sub: 'Building my audience and portfolio' },
        { title: 'Active creator',       sub: 'Regular collaborations with brands' },
        { title: 'Professional creator', sub: 'This is my full-time career' },
        { title: 'Agency/Management',    sub: 'Managing multiple creators' },
      ],
    },
    results: [
      { plan: 'Free',    price: '$0/mo',   desc: 'Start building your creator profile at no cost.' },
      { plan: 'Creator', price: '$19/mo',  desc: 'Unlock analytics and media kit for more deals.' },
      { plan: 'Pro',     price: '$49/mo',  desc: 'Everything you need to run your creator business.' },
      { plan: 'Agency',  price: '$199/mo', desc: 'For creators managing a team of talent.' },
    ],
  },

  'For Agencies': {
    sectionBg: '#f9fafb',
    cardBg: '#ffffff',
    heading: 'Find the Right Plan for Your Agency',
    sub: 'Answer 3 quick questions to find your perfect fit',
    q1: {
      label: '1. How many creators does your agency manage?',
      type: 'pills',
      options: ['Up to 5', '6-15', '16-30', '30+'],
    },
    q2: {
      label: '2. Which agency tools do you need?',
      type: 'checkboxes',
      options: ['Centralized dashboard', 'Analytics & bulk payments', 'White-label options', 'Full API access'],
    },
    q3: {
      label: '3. What support level does your agency require?',
      type: 'radio-cards',
      options: [
        { title: 'Email support (48h response)',     sub: 'Standard support for basic agencies' },
        { title: 'Priority email (24h response)',    sub: 'Faster support for growing agencies' },
        { title: 'Dedicated manager (4h response)',  sub: 'Personal support for professional agencies' },
        { title: '24/7 phone support (1h response)', sub: 'Enterprise-grade support' },
      ],
    },
    results: [
      { plan: 'Starter',      price: '$99/mo',  desc: 'Manage up to 5 creators with core agency tools.' },
      { plan: 'Growth',       price: '$199/mo', desc: 'Scale your roster with advanced analytics.' },
      { plan: 'Professional', price: '$399/mo', desc: 'The complete platform for serious agencies.' },
      { plan: 'Enterprise',   price: 'Custom',  desc: 'Unlimited scale with dedicated infrastructure.' },
    ],
  },
}

/* ─── Result index logic ─────────────────────────────────────────────────── */
function getResultIndex(q1, q3) {
  // q1 index 0→0, 1→1, 2→2, 3→3; q3 index 0→0, 1→1, 2→2, 3→3
  // Weight q3 (support) more heavily for higher plans
  const score = Math.max(q1 ?? 0, q3 ?? 0)
  return Math.min(score, 3)
}

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function PlanWizard({ activeTab }) {
  const cfg = wizardConfig[activeTab] || wizardConfig['For Brands']

  const [q1, setQ1] = useState(null)           // pill index
  const [q2, setQ2] = useState([])             // checkbox indices (multi)
  const [q3, setQ3] = useState(null)           // radio-card index
  const [result, setResult] = useState(null)

  function handleSubmit() {
    if (q1 === null || q3 === null) return
    const idx = getResultIndex(q1, q3)
    setResult(cfg.results[idx])
  }

  function handleReset() {
    setQ1(null)
    setQ2([])
    setQ3(null)
    setResult(null)
  }

  const canSubmit = q1 !== null && q3 !== null

  return (
    <section className="py-12 lg:py-20 border-t border-gray-100" style={{ background: cfg.sectionBg }}>
      <div className="max-w-[896px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2">{cfg.heading}</h2>
          <p className="text-gray-500">{cfg.sub}</p>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl border border-gray-200 p-5 lg:p-8 flex flex-col gap-8"
          style={{ background: cfg.cardBg }}
        >
          {result ? (
            /* ── Result ── */
            <div className="flex flex-col items-center gap-5 text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#009cde]/10 flex items-center justify-center text-3xl">🎯</div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">Your Recommended Plan</p>
              <div>
                <div className="text-4xl font-bold text-black">{result.plan}</div>
                <div className="text-2xl font-bold text-[#009cde] mt-1">{result.price}</div>
              </div>
              <p className="text-gray-500 text-sm max-w-xs">{result.desc}</p>
              <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto">
                <button className="px-6 py-3 bg-[#009cde] text-white font-semibold rounded-xl hover:bg-[#0089c4] transition-colors text-sm flex items-center gap-2">
                  Get Started <ArrowRight size={14} />
                </button>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 border border-gray-200 text-gray-600 font-semibold rounded-xl hover:border-gray-400 transition-colors text-sm"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* ── Q1: pills ── */}
              <div className="flex flex-col gap-3">
                <label className="text-base font-semibold text-black">{cfg.q1.label}</label>
                <div className="flex gap-2 lg:gap-3 flex-wrap">
                  {cfg.q1.options.map((opt, i) => (
                    <button
                      key={opt}
                      onClick={() => setQ1(i)}
                      className="px-5 py-3 rounded-lg border-2 text-sm font-medium transition-all"
                      style={
                        q1 === i
                          ? { borderColor: '#009cde', background: '#009cde10', color: '#009cde' }
                          : { borderColor: '#e5e7eb', background: 'transparent', color: '#111' }
                      }
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* ── Q2: checkboxes ── */}
              <div className="flex flex-col gap-3">
                <label className="text-base font-semibold text-black">{cfg.q2.label}</label>
                <div className="flex flex-col gap-2.5">
                  {cfg.q2.options.map((opt, i) => {
                    const checked = q2.includes(i)
                    return (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <span
                          onClick={() => setQ2(checked ? q2.filter(x => x !== i) : [...q2, i])}
                          className="w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-all"
                          style={
                            checked
                              ? { borderColor: '#009cde', background: '#009cde' }
                              : { borderColor: '#111', background: '#fff' }
                          }
                        >
                          {checked && (
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                        <span
                          className="text-sm font-medium text-black cursor-pointer"
                          onClick={() => setQ2(checked ? q2.filter(x => x !== i) : [...q2, i])}
                        >
                          {opt}
                        </span>
                      </label>
                    )
                  })}
                </div>
              </div>

              {/* ── Q3: radio cards ── */}
              <div className="flex flex-col gap-3">
                <label className="text-base font-semibold text-black">{cfg.q3.label}</label>
                <div className="flex flex-col gap-2.5">
                  {cfg.q3.options.map((opt, i) => (
                    <label
                      key={opt.title}
                      onClick={() => setQ3(i)}
                      className="flex items-center gap-4 px-5 py-4 rounded-xl border-2 cursor-pointer transition-all"
                      style={
                        q3 === i
                          ? { borderColor: '#009cde', background: '#009cde08' }
                          : { borderColor: '#e5e7eb', background: 'transparent' }
                      }
                    >
                      {/* Radio circle */}
                      <span
                        className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all"
                        style={{ borderColor: q3 === i ? '#009cde' : '#d1d5db' }}
                      >
                        {q3 === i && (
                          <span className="w-2.5 h-2.5 rounded-full bg-[#009cde]" />
                        )}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-black">{opt.title}</div>
                        <div className="text-sm text-gray-500">{opt.sub}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="w-full py-4 rounded-xl font-semibold text-sm transition-colors"
                style={
                  canSubmit
                    ? { background: '#009cde', color: 'white' }
                    : { background: '#e5e7eb', color: '#9ca3af', cursor: 'not-allowed' }
                }
              >
                Show My Recommended Plan
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
