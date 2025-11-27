'use client';

import { motion } from 'framer-motion';
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get started in minutes and start recovering lost revenue today
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Connection line (hidden on last item) */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-500/50 to-primary-500/20 z-0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                  style={{ transformOrigin: 'left' }}
                ></motion.div>
              )}

              <motion.div
                className="relative bg-dark-800/50 backdrop-blur-sm rounded-xl p-8 border border-primary-500/20 transition-all duration-300 z-10"
                whileHover={{ y: -8, borderColor: 'rgba(59, 130, 246, 0.6)' }}
              >
                {/* Step number */}
                <motion.div
                  className="text-6xl font-bold text-primary-500/20 mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: 'spring' }}
                >
                  {step.number}
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="bg-primary-500/10 rounded-lg w-20 h-20 flex items-center justify-center text-primary-400 mb-6 mx-auto"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {step.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 text-center">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-center">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <ScrollButton targetId="contact" variant="primary">
            Start Recovering Revenue
          </ScrollButton>
        </motion.div>
      </div>
    </section>
  );
}
