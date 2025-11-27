'use client';

import { motion } from 'framer-motion';

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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            PSA Integrations
          </h2>
          <p className="text-xl text-gray-400">
            Works seamlessly with your existing tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)' }}
              className="p-8 rounded-2xl bg-slate-700 border border-slate-600 transition-all duration-300"
            >
              <motion.div
                className="flex items-center justify-center mb-6 h-24 bg-white rounded-lg p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={integration.logo}
                  alt={`${integration.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </motion.div>
              <p className="text-gray-300 leading-relaxed text-center">
                {integration.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400">
            More integrations coming soon
          </p>
        </motion.div>
      </div>
    </section>
  );
}
