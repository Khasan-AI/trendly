export default function NewsletterBand() {
  return (
    <section className="bg-black py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
        <h2 className="text-2xl lg:text-4xl font-bold text-white">
          Get Weekly Performance Marketing Insights
        </h2>
        <p className="text-gray-400 text-lg">
          Join 12,400+ marketers receiving exclusive case studies, platform updates, and ROI tactics
        </p>

        {/* Email form */}
        <div className="flex flex-col sm:flex-row w-full max-w-xl gap-0">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 border-2 border-white bg-white text-black sm:rounded-l-xl sm:rounded-r-none rounded-xl sm:rounded-none px-5 py-4 focus:outline-none placeholder-gray-400 text-sm mb-2 sm:mb-0"
          />
          <button className="px-6 py-4 bg-[#009cde] text-white font-semibold sm:rounded-r-xl sm:rounded-l-none rounded-xl hover:bg-[#0089c4] transition-colors text-sm whitespace-nowrap">
            Subscribe
          </button>
        </div>

        <p className="text-gray-500 text-sm">
          No spam. Unsubscribe anytime. Read by 12,400+ marketers weekly.
        </p>
      </div>
    </section>
  )
}
