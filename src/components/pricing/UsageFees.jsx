export default function UsageFees() {
  return (
    <section className="bg-white py-12 lg:py-20 border-t border-gray-100">
      <div className="max-w-[1024px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f9fafb] border border-gray-200 rounded-2xl p-5 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            <div className="w-12 h-12 rounded-xl bg-[#009cde]/10 flex items-center justify-center shrink-0">
              <span className="text-[#009cde] text-xl font-bold">i</span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-black mb-2">Usage-Based Fees</h3>
              <p className="text-gray-600 text-sm mb-6 max-w-2xl">
                In addition to your monthly subscription, Trendly charges a small platform fee on each transaction to maintain our secure infrastructure and payment processing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-black">Platform Fee</span>
                    <span className="text-2xl font-bold text-[#009cde]">2%</span>
                  </div>
                  <p className="text-xs text-gray-400">Starter & Standard plans</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-black">Platform Fee</span>
                    <span className="text-2xl font-bold text-[#009cde]">1.5%</span>
                  </div>
                  <p className="text-xs text-gray-400">Premium & Enterprise plans</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                Minimum fee: 10,000 UZS per transaction. All fees are transparently displayed before campaign launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
