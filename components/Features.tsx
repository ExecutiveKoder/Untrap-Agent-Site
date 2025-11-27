'use client';

import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      title: 'AI Classification',
      description: 'Two-stage AI validation with 95%+ accuracy. Automatically determines if work is in-scope or billable.',
      icon: '🤖',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'MSA Parsing',
      description: 'Upload agreements and AI extracts inclusions, exclusions, and billing rates automatically.',
      icon: '📄',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'PSA Integration',
      description: 'Connects with ConnectWise Manage and other PSA systems to classify tickets in real-time.',
      icon: '🔌',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Auto Billing',
      description: 'Calculates billable amounts based on time spent and rates. Export to Excel, CSV, or JSON.',
      icon: '💰',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Multi-Client',
      description: 'Manage multiple MSP clients with complete data isolation. Each client stays separate.',
      icon: '👥',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Learning System',
      description: 'Client corrections become training examples, improving accuracy over time.',
      icon: '🧠',
      color: 'from-red-500 to-rose-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="features" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-400">
            Intelligent automation for MSP billing
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.5)' }}
              className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 transition-all duration-200 group"
            >
              <motion.div
                className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl mb-4`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
