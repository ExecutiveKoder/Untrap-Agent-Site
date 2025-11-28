'use client';

import { motion } from 'framer-motion';

export default function Benefits() {
  const benefits = [
    {
      title: "Recover Lost Revenue",
      description: "Identify and bill for 15-25% more work that was previously unbilled. Turn hidden costs into recovered revenue.",
      stat: "$50K+",
      statLabel: "Average Annual Recovery",
    },
    {
      title: "Save Time",
      description: "Eliminate 10+ hours per month of manual ticket review. Let AI do the heavy lifting while you focus on growth.",
      stat: "95%",
      statLabel: "Reduction in Review Time",
    },
    {
      title: "Improve Accuracy",
      description: "Two-stage AI validation ensures consistent, accurate classifications. No more subjective judgment calls.",
      stat: "95%+",
      statLabel: "Classification Accuracy",
    },
    {
      title: "Scale Effortlessly",
      description: "Handle unlimited clients and tickets. Our system grows with your MSP without adding overhead.",
      stat: "∞",
      statLabel: "Scalability",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Tangible Business Impact
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results that improve your bottom line
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(59, 130, 246, 0.6)' }}
              className="bg-gradient-to-br from-dark-900/80 to-primary-900/20 backdrop-blur-sm rounded-xl p-8 border border-primary-500/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                <motion.div
                  className="text-right ml-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: 'spring' }}
                >
                  <div className="text-3xl font-bold text-primary-400">{benefit.stat}</div>
                  <div className="text-sm text-gray-400">{benefit.statLabel}</div>
                </motion.div>
              </div>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* ROI Calculator Teaser */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary-500/30"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Calculate Your ROI
              </h3>
              <p className="text-gray-300 mb-6">
                Most MSPs recover their investment in the first month. See how much revenue you could be missing.
              </p>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Average 18% revenue recovery rate
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Typical payback period: &lt;30 days
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  12+ hours saved monthly
                </div>
              </div>
            </div>
            <div className="bg-dark-900/50 rounded-xl p-6 border border-primary-500/30">
              <div className="text-center mb-4">
                <div className="text-sm text-gray-400 mb-2">MSP Example</div>
                <div className="text-4xl font-bold text-white mb-1">$2M</div>
                <div className="text-gray-400">Annual Revenue</div>
              </div>
              <div className="border-t border-primary-500/20 pt-4 space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span>Unbilled Work (18%)</span>
                  <span className="font-semibold text-orange-400">$74K</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Time Saved Value</span>
                  <span className="font-semibold text-orange-400">$12K</span>
                </div>
                <div className="border-t border-primary-500/20 pt-2 mt-2 flex flex-col items-center">
                  <span className="text-white font-bold text-lg mb-1">Potential Recovery</span>
                  <span className="text-primary-400 font-bold text-2xl">$86K/yr straight to the bottom line</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
