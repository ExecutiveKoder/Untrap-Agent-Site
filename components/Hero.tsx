import ScrollButton from './ScrollButton';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-32 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-block">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              AI-Powered MSP Billing
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
            Stop Losing Money on
            <br />
            <span style={{ color: '#60a5fa' }}>
              Out-of-Scope Work
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Automatically identify billable work with AI. Recover 15-25% of lost revenue
            by classifying tickets against your MSA agreements in real-time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <ScrollButton
              targetId="contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-200"
            >
              Book a Demo →
            </ScrollButton>
            <ScrollButton
              targetId="how-it-works"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-200 border border-slate-700"
            >
              See How It Works
            </ScrollButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
              <div className="text-4xl font-bold text-blue-400 mb-2">15-25%</div>
              <div className="text-sm text-gray-400">Revenue Recovery</div>
            </div>
            <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
              <div className="text-4xl font-bold text-blue-400 mb-2">95%+</div>
              <div className="text-sm text-gray-400">Classification Accuracy</div>
            </div>
            <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
              <div className="text-4xl font-bold text-blue-400 mb-2">10hrs/mo</div>
              <div className="text-sm text-gray-400">Time Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
