export default function Features() {
  const features = [
    {
      title: 'AI Classification',
      description: 'Two-stage AI validation with 95%+ accuracy. Automatically determines if work is in-scope or billable.',
    },
    {
      title: 'MSA Parsing',
      description: 'Upload agreements and AI extracts inclusions, exclusions, and billing rates automatically.',
    },
    {
      title: 'PSA Integration',
      description: 'Connects with ConnectWise Manage and other PSA systems to classify tickets in real-time.',
    },
    {
      title: 'Auto Billing',
      description: 'Calculates billable amounts based on time spent and rates. Export to Excel, CSV, or JSON.',
    },
    {
      title: 'Multi-Client',
      description: 'Manage multiple MSP clients with complete data isolation. Each client stays separate.',
    },
    {
      title: 'Learning System',
      description: 'Client corrections become training examples, improving accuracy over time.',
    },
  ];

  return (
    <section id="features" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-400">
            Intelligent automation for MSP billing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-200"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
