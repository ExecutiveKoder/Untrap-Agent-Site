'use client';

import { useState } from 'react';

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OfferModal({ isOpen, onClose }: OfferModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative bg-dark-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-primary-500/30 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-block bg-primary-500/10 text-primary-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              LIMITED TIME OFFER
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Risk-Free Billing Recovery
            </h2>
          </div>

          <div className="bg-dark-900/50 rounded-xl p-6 mb-6 border border-primary-500/20">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Our Billing Agent is generating so much cash for our MSP clients, we just had to share it for the holidays.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Risk-Free Guarantee:</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              We're so confident our AI Billing Agent will uncover missed billables that we'll let you try it risk-free.
            </p>
          </div>

          <div className="mb-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              It reads every ticket, understands your managed service agreements with all the nuances, and flags work that should have been billed but wasn't.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary-900/30 to-primary-800/30 rounded-xl p-6 mb-8 border border-primary-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">What We're Seeing In the Wild:</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Most MSPs are finding at least <span className="text-primary-400 font-semibold">a few thousand dollars a month</span> in missed billables. Even the very best operators uncover hundreds they weren't capturing.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">I'd like to run a simple test for you:</h3>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>We review your last 7 days of tickets.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>Within 14 days, we show you exactly how much recoverable billing is sitting in your PSA.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>If you don't think it's valuable, you owe us nothing.</span>
              </li>
            </ul>
          </div>

          <div className="text-center mb-6">
            <p className="text-xl text-white font-semibold mb-6">
              Interested in seeing how much money you are leaving on the table each week?
            </p>
            <a
              href="https://calendly.com/dave-untrap/15-minute-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-primary-500/50"
            >
              Book a 15-minute 'Find My Money' Call
            </a>
          </div>

          <div className="text-center">
            <p className="text-red-400 font-semibold text-lg mb-3">
              Act now before we lose the holiday spirit and come to our senses!!
            </p>
            <p className="text-gray-500 text-sm italic">
              Offer applies to a one-time analysis of up to 7 days of tickets for a single PSA instance. "Free" means no subscription charge if you cancel within 14 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
