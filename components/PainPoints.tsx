export default function PainPoints() {
  const painPoints = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Revenue Leakage",
      description: "MSPs lose 15-25% of potential revenue by not billing for out-of-scope work. Every untracked ticket is money left on the table.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Manual Review Time",
      description: "Spending hours each month manually reviewing tickets, comparing against MSA agreements, and tracking billable work.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Contract Complexity",
      description: "Managing different MSA agreements across multiple clients, each with unique inclusions and exclusions that are hard to track.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Unbilled Out-of-Scope Work",
      description: "Technicians complete work that's outside the MSA scope, but it never gets tracked or billed because no one catches it in time.",
    },
  ];

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            The Hidden Cost of Manual Billing
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            MSPs face constant challenges in identifying and billing for out-of-scope work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-8 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-primary-400 mb-4">{point.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{point.title}</h3>
              <p className="text-gray-400 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
