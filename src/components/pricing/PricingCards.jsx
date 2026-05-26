import tickIcon from '../../assets/icons/tick.svg'

const CheckIcon = () => (
  <img src={tickIcon} alt="" width={14} style={{ flexShrink: 0, marginTop: 2 }} />
)

const plans = {
  'For Brands': [
    {
      name: 'Starter',
      desc: 'Perfect for testing the platform',
      price: { monthly: 0, annual: 0 },
      priceLabel: { monthly: 'Forever free', annual: 'Forever free' },
      cta: 'Start Free',
      highlight: false,
      features: [
        'Up to 3 active campaigns',
        'Basic analytics dashboard',
        'Promo code tracking',
        'Email support',
        '2% platform fee',
      ],
    },
    {
      name: 'Standard',
      desc: 'For growing campaigns',
      price: { monthly: 49, annual: 39 },
      priceLabel: { monthly: 'Billed monthly', annual: 'Billed annually' },
      cta: 'Start Standard',
      highlight: false,
      features: [
        'Up to 15 active campaigns',
        'Advanced analytics & reports',
        'UTM link tracking',
        'Priority email support',
        '2% platform fee',
        'API access',
      ],
    },
    {
      name: 'Premium',
      desc: 'For serious marketers',
      price: { monthly: 149, annual: 119 },
      priceLabel: { monthly: 'Billed monthly', annual: 'Billed annually' },
      cta: 'Start Premium',
      highlight: true,
      badge: 'Most Popular',
      features: [
        'Unlimited active campaigns',
        'Full analytics suite',
        'Webhook integrations',
        'Dedicated account manager',
        '1.5% platform fee',
        'White-label reports',
        'Priority API support',
      ],
    },
    {
      name: 'Enterprise',
      desc: 'Custom solutions',
      price: { monthly: null, annual: null },
      priceLabel: { monthly: 'Volume pricing', annual: 'Volume pricing' },
      cta: 'Contact Sales',
      highlight: false,
      features: [
        'Everything in Premium',
        'Custom integrations',
        'Multi-brand management',
        '24/7 phone support',
        'Custom platform fee',
        'SLA guarantee',
        'Dedicated infrastructure',
      ],
    },
  ],
  'For Creators': [
    {
      name: 'Free',
      desc: 'Start your creator journey',
      price: { monthly: 0, annual: 0 },
      priceLabel: { monthly: 'Forever free', annual: 'Forever free' },
      cta: 'Get Started',
      highlight: false,
      features: [
        'Up to 5 active collaborations',
        'Basic portfolio page',
        'Performance tracking',
        'Secure escrow payments',
        'Email support',
      ],
    },
    {
      name: 'Creator',
      desc: 'For active creators',
      price: { monthly: 19, annual: 15 },
      priceLabel: { monthly: 'Billed monthly', annual: 'Billed annually' },
      cta: 'Upgrade Now',
      highlight: false,
      features: [
        'Unlimited collaborations',
        'Custom portfolio page',
        'Advanced analytics',
        'Priority brand matching',
        'Instant payouts available',
        'Priority support',
      ],
    },
    {
      name: 'Pro',
      desc: 'For professional creators',
      price: { monthly: 49, annual: 39 },
      priceLabel: { monthly: 'Billed monthly', annual: 'Billed annually' },
      cta: 'Go Pro',
      highlight: true,
      badge: 'Most Popular',
      features: [
        'Everything in Creator',
        'Verified creator badge',
        'Premium brand access',
        'Media kit generator',
        'Rate negotiation tools',
        'Same-day payouts',
        'Dedicated support',
      ],
    },
    {
      name: 'Agency',
      desc: 'Manage multiple creators',
      price: { monthly: 199, annual: 159 },
      priceLabel: { monthly: 'For talent agencies', annual: 'Billed annually' },
      cta: 'Contact Us',
      highlight: false,
      features: [
        'Everything in Pro',
        'Manage up to 10 creators',
        'Centralized dashboard',
        'Team collaboration tools',
        'Bulk payment processing',
        'API access',
        'White-label options',
      ],
    },
  ],
  'For Agencies': [
    {
      name: 'Starter',
      desc: 'Launch your talent agency',
      price: { monthly: 99, annual: 79 },
      priceLabel: { monthly: 'Up to 5 creators', annual: 'Billed annually' },
      cta: 'Get Started',
      highlight: false,
      features: [
        'Manage up to 5 creators',
        'Centralized dashboard',
        'Unlimited campaigns',
        'Performance tracking',
        'Bulk payment processing',
        'Email support',
      ],
    },
    {
      name: 'Growth',
      desc: 'Scale your roster',
      price: { monthly: 199, annual: 159 },
      priceLabel: { monthly: 'Up to 15 creators', annual: 'Billed annually' },
      cta: 'Upgrade Now',
      highlight: false,
      features: [
        'Manage up to 15 creators',
        'Advanced analytics',
        'Team collaboration tools',
        'Custom reporting',
        'Priority brand matching',
        'Priority support',
      ],
    },
    {
      name: 'Professional',
      desc: 'Full-service agency',
      price: { monthly: 399, annual: 319 },
      priceLabel: { monthly: 'Up to 30 creators', annual: 'Billed annually' },
      cta: 'Go Pro',
      highlight: true,
      badge: 'Most Popular',
      features: [
        'Manage up to 30 creators',
        'White-label options',
        'API access',
        'Custom integrations',
        'Dedicated account manager',
        'Same-day payouts',
        '24/7 priority support',
      ],
    },
    {
      name: 'Enterprise',
      desc: 'Unlimited scale',
      price: { monthly: null, annual: null },
      priceLabel: { monthly: 'Unlimited creators', annual: 'Unlimited creators' },
      cta: 'Contact Sales',
      highlight: false,
      features: [
        'Unlimited creators',
        'Custom infrastructure',
        'Advanced security',
        'SLA guarantees',
        'Dedicated infrastructure',
        'Custom contracts',
        'White-glove onboarding',
      ],
    },
  ],
}

export default function PricingCards({ activeTab, billing }) {
  const cards = plans[activeTab]
  const isAnnual = billing === 'annual'

  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 items-start">
          {cards.map((plan) => {
            const price      = isAnnual ? plan.price.annual   : plan.price.monthly
            const yearlyTotal = isAnnual && plan.price.annual  ? plan.price.annual * 12 : null

            return (
              <div
                key={plan.name}
                className="relative bg-white rounded-xl flex flex-col"
                style={{ border: plan.highlight ? '2px solid #009cde' : '1px solid #e5e7eb' }}
              >
                {/* Most Popular badge */}
                {plan.badge && (
                  <div className="absolute left-1/2 -top-4" style={{ transform: 'translateX(-50%)' }}>
                    <span className="bg-[#009cde] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-5 lg:p-8 flex flex-col gap-5">
                  {/* Name + desc */}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-2xl font-bold text-black">{plan.name}</h3>
                    <p className="text-sm text-gray-600">{plan.desc}</p>
                  </div>

                  {/* Price block */}
                  <div className="flex flex-col gap-1">
                    {price === null ? (
                      /* Custom / Enterprise */
                      <span className="text-4xl lg:text-5xl font-bold text-black">Custom</span>
                    ) : price === 0 ? (
                      /* Free tier */
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl lg:text-5xl font-bold text-black">$0</span>
                          <span className="text-base text-gray-500 mb-0.5">/month</span>
                        </div>
                        <span className="text-xs text-gray-400">Forever free</span>
                      </>
                    ) : isAnnual ? (
                      /* Annual billing — show monthly rate + yearly total */
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl lg:text-5xl font-bold text-black">${price}</span>
                          <span className="text-base text-gray-500 mb-0.5">/month</span>
                        </div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-xs text-gray-400">Billed annually —</span>
                          <span className="text-xs font-semibold text-[#009cde]">
                            ${yearlyTotal}/year
                          </span>
                        </div>
                      </>
                    ) : (
                      /* Monthly billing */
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl lg:text-5xl font-bold text-black">${price}</span>
                          <span className="text-base text-gray-500 mb-0.5">/month</span>
                        </div>
                        <span className="text-xs text-gray-400">Billed monthly</span>
                      </>
                    )}
                  </div>

                  {/* CTA button */}
                  <button
                    className={`w-full py-3.5 rounded-lg font-semibold text-sm transition-colors ${
                      plan.highlight
                        ? 'bg-[#009cde] text-white hover:bg-[#0089c4]'
                        : 'bg-white text-black border-2 border-black hover:bg-gray-50'
                    }`}
                  >
                    {plan.cta}
                  </button>

                  {/* Features */}
                  <div className="flex flex-col gap-3 pt-1">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <CheckIcon />
                        <span className="text-sm text-black leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
