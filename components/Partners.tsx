'use client';

import { motion } from 'framer-motion';

export default function Partners() {
  const cloudPartners = [
    {
      name: 'AWS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png',
    },
    {
      name: 'Microsoft Azure',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png',
    },
    {
      name: 'Google Cloud',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png',
    },
  ];

  const affiliates = [
    {
      name: 'Mars Discovery Company',
      logo: '/mars.jpg',
      description: 'Technology Innovation Partner',
    },
    {
      name: 'Innovation Factory',
      logo: '/IF.png',
      description: 'Startup Accelerator Partner',
    },
  ];

  return (
    <section id="partners" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Cloud Partners */}
        <div className="mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cloud Partners
            </h2>
            <p className="text-lg text-gray-400">
              Built on enterprise-grade infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {cloudPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 20px 60px rgba(59, 130, 246, 0.15)' }}
                className="p-8 rounded-xl bg-white transition-all duration-300 flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-16 max-w-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Affiliates */}
        <div>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partners & Affiliates
            </h2>
            <p className="text-lg text-gray-400">
              Supported by leading innovation organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {affiliates.map((affiliate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                className="p-8 rounded-xl bg-slate-800/50 border border-slate-700/50 transition-all duration-300"
              >
                <motion.div
                  className="flex items-center justify-center mb-6 h-20 bg-white rounded-lg p-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={affiliate.logo}
                    alt={`${affiliate.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </motion.div>
                <p className="text-gray-400 text-center text-sm">
                  {affiliate.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
