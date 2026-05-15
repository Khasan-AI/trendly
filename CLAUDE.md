# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server (localhost:5173)
npm run build     # Production build → dist/
npm run preview   # Serve the dist/ build locally
npm run lint      # ESLint across all .js/.jsx files
```

No test suite is configured.

## Stack

- **React 19** + **Vite 5** + **Tailwind CSS 3** + **react-router-dom 7**
- **lucide-react** for icons (import named icons: `import { ArrowRight, Check } from 'lucide-react'`)
- No TypeScript — all files are `.jsx` / `.js`
- No CSS modules — all styling via Tailwind utility classes + inline `style={{}}` for dynamic values

## Routing

All routes are defined in `src/App.jsx`. The `Header` is rendered outside `<Routes>` so it is global. The catch-all `*` route renders `HomePage`.

| Path | Page |
|---|---|
| `/` | HomePage |
| `/brands` | BrandPage |
| `/influencers` | InfluencerPage |
| `/agencies` | AgencyPage |
| `/pricing` | PricingPage |
| `/resources` | ResourcesPage |
| `/faq` | FAQPage |

## Component Architecture

Pages live in `src/pages/`. Each page is a composition of section components from `src/components/`. Shared components (Header, Footer) live directly in `src/components/`. Page-specific components are grouped into subdirectories:

```
src/components/
  brand/          → BrandPage sections
  influencer/     → InfluencerPage sections
  agency/         → AgencyPage sections
  pricing/        → PricingPage sections
  resources/      → ResourcesPage sections
  *.jsx           → Shared: Header, Footer, and HomePage sections
```

**Footer** is imported and rendered individually at the bottom of each page component — it is not part of a layout wrapper.

## Pricing Page (most complex)

`PricingPage.jsx` owns two pieces of state: `activeTab` (`'For Brands' | 'For Creators' | 'For Agencies'`) and `billing` (`'monthly' | 'annual'`). These are passed down as props.

Section render order:
1. **Shared always**: `PricingHero` (tabs + billing toggle) → `PricingTrustBar` → `PricingCards` → `ComparisonTable`
2. **Tab-conditional** (mutually exclusive):
   - Brands: `UsageFees` → `EnterpriseInquiry`
   - Creators: `CreatorEarnings` → `CreatorBenefits`
   - Agencies: `AgencyCommission` → `AgencyBenefits` → `AgencyCalculator` → `AgencyTestimonials`
3. **Shared always**: `PlanWizard` → `PricingFAQ` → `PricingCTA` → `Footer`

`PricingCards` and `PricingFAQ` contain all three tabs' data internally as plain JS objects keyed by tab name. `PlanWizard` and `PricingCTA` accept `activeTab` and render different content per tab.

**Billing toggle**: The toggle thumb uses inline `style={{ left: billing === 'annual' ? 25 : 3 }}` — do **not** use Tailwind translate classes for this; they get purged and the thumb won't move.

## Design System

- **Primary color**: `#009cde` (blue)
- **Container**: `max-w-[1280px] mx-auto px-8` (wide sections) or `max-w-7xl mx-auto px-8` (header)
- **Section padding**: `py-20`
- **Cards**: `rounded-2xl`, `border border-gray-200`, `bg-white`
- **Highlighted card** (pricing): `border: '2px solid #009cde'` via inline style (not Tailwind border class, to avoid purge issues with dynamic values)
- **Buttons**: primary = `bg-[#009cde] text-white hover:bg-[#0089c4]`, outline = `border-2 border-black bg-white text-black`
- **Accordion pattern** (FAQ components): single `open` state at parent level (`useState(null)`), items close when another opens. Answer has `border-t border-gray-100 pt-4`. Uses `ChevronDown` from lucide-react with `rotate-180` when open.

## Tailwind Gotcha

Dynamically constructed class names (e.g. `translate-x-7` built at runtime) are purged in production. Use inline `style={{}}` for any CSS value that depends on runtime state.
