export default function OfferPage() {
  return (
    <div className="min-h-screen bg-slate-900 px-4 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            LIMITED TIME OFFER
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Risk-Free Billing Recovery
          </h1>
        </div>

        {/* Content */}
        <div className="bg-slate-800/50 rounded-2xl p-8 md:p-12 border border-blue-500/20 space-y-8">
          <div className="bg-slate-900/50 rounded-xl p-6 border border-blue-500/20">
            <p className="text-gray-300 text-lg leading-relaxed">
              Our Billing Agent is generating so much cash for our MSP clients, we just had to share it for the holidays.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Risk-Free Guarantee:</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We're so confident our AI Billing Agent will uncover missed billables that we'll let you try it risk-free.
            </p>
          </div>

          <div>
            <p className="text-gray-300 text-lg leading-relaxed">
              It reads every ticket, understands your managed service agreements with all the nuances, and flags work that should have been billed but wasn't.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 rounded-xl p-6 border border-blue-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">What We're Seeing In the Wild:</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Most MSPs are finding at least <span className="text-blue-400 font-semibold">a few thousand dollars a month</span> in missed billables. Even the very best operators uncover hundreds they weren't capturing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">We'd like to run a simple test for you:</h2>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>We review your last 7 days of tickets.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Within the first 14 days, we show you exactly how much recoverable billing is sitting in your PSA.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>If you don't think it's valuable, you owe us nothing.</span>
              </li>
            </ul>
          </div>

          <div className="text-center pt-4">
            <p className="text-xl text-white font-semibold mb-6">
              Interested in seeing how much money you are leaving on the table each week?
            </p>
            <a
              href="https://calendly.com/dave-untrap/15-minute-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-blue-500/50"
            >
              Book a 15-minute 'Find My Money' Call
            </a>
          </div>

          <div className="text-center pt-6 border-t border-slate-700">
            <p className="text-red-400 font-semibold text-lg mb-3">
              Act now before we lose the holiday spirit and come to our senses!!
            </p>
            <p className="text-gray-500 text-sm italic">
              Offer applies to a one-time analysis of up to 7 days of tickets for a single PSA instance. "Free" means no subscription charge if you cancel within 14 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
