export default function Integrations() {
  const integrations = [
    {
      name: 'ConnectWise',
      logo: '/cw.png',
      description: 'Full integration with ConnectWise Manage for seamless ticket classification',
    },
    {
      name: 'Autotask',
      logo: '/autologo.png',
      description: 'Native Autotask PSA integration for automated billing workflows',
    },
  ];

  return (
    <section id="integrations" className="py-24 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            PSA Integrations
          </h2>
          <p className="text-xl text-gray-400">
            Works seamlessly with your existing tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-slate-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 border border-slate-600"
            >
              <div className="flex items-center justify-center mb-6 h-24 bg-white rounded-lg p-4">
                <img
                  src={integration.logo}
                  alt={`${integration.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                {integration.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            More integrations coming soon
          </p>
        </div>
      </div>
    </section>
  );
}
