import ScrollButton from './ScrollButton';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload Your MSA Agreements",
      description: "Simply upload your Master Service Agreements. Our AI automatically extracts inclusions, exclusions, and billing rates from your contracts.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Connect Your PSA System",
      description: "Integrate with ConnectWise Manage or your PSA. Untrap reads tickets and time entries to understand what work was performed.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "AI Classifies Every Ticket",
      description: "Two-stage AI validation analyzes each ticket against your MSA. Determines if work is in-scope or billable out-of-scope work.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Review & Bill Clients",
      description: "Get comprehensive reports with billable amounts calculated. Review classifications, make corrections, and invoice clients with confidence.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/10 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get started in minutes and start recovering lost revenue today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-500/50 to-primary-500/20 z-0"></div>
              )}

              <div className="relative bg-dark-800/50 backdrop-blur-sm rounded-xl p-8 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 hover:transform hover:-translate-y-2 z-10">
                {/* Step number */}
                <div className="text-6xl font-bold text-primary-500/20 mb-4">{step.number}</div>

                {/* Icon */}
                <div className="bg-primary-500/10 rounded-lg w-20 h-20 flex items-center justify-center text-primary-400 mb-6 mx-auto">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 text-center">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <ScrollButton targetId="contact" variant="primary">
            Start Recovering Revenue
          </ScrollButton>
        </div>
      </div>
    </section>
  );
}
