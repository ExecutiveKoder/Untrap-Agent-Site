'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollButton from './ScrollButton';
import OfferModal from './OfferModal';

export default function Hero() {
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as any
      }
    }
  };

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1 + 0.8,
        ease: [0.22, 1, 0.36, 1] as any
      }
    })
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
          ],
          opacity: 0.3
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-32 text-center relative z-10">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-block">
            <motion.span
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium"
              whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.4)' }}
              transition={{ duration: 0.2 }}
            >
              AI-Powered MSP Billing
            </motion.span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white"
          >
            Stop Losing Money on
            <br />
            <motion.span
              style={{ color: '#60a5fa' }}
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            >
              Out-of-Scope Work
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Automatically identify billable work with AI. Recover 15-25% of lost revenue
            by classifying tickets against your MSA agreements in real-time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={() => setIsOfferModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold rounded-lg transition-all duration-200 shadow-xl hover:shadow-red-500/50 border-2 border-red-400/50"
              >
                🎄 View Holiday Offer
              </button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <ScrollButton
                targetId="contact"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-200"
              >
                Book a Demo →
              </ScrollButton>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <ScrollButton
                targetId="how-it-works"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-200 border border-slate-700"
              >
                See How It Works
              </ScrollButton>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto"
          >
            {[
              { value: '15-25%', label: 'Revenue Recovery' },
              { value: '95%+', label: 'Classification Accuracy' },
              { value: '10hrs/mo', label: 'Time Saved' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                custom={index}
                variants={statVariants}
                whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                className="p-6 rounded-xl bg-slate-800 border border-slate-700 transition-all duration-300"
              >
                <motion.div
                  className="text-4xl font-bold text-blue-400 mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 1.2, type: 'spring' }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Offer Modal */}
      <OfferModal isOpen={isOfferModalOpen} onClose={() => setIsOfferModalOpen(false)} />
    </section>
  );
}
