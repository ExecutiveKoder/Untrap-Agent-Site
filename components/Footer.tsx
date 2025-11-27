import ScrollButton from './ScrollButton';
import { UntrapLogo } from './untrap-logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-primary-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <UntrapLogo forceLight={false} />
            </div>
            <p className="text-gray-400">
              AI-powered billing classification for MSPs. Stop losing money on out-of-scope work.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <ScrollButton targetId="features" variant="link">
                  Features
                </ScrollButton>
              </li>
              <li>
                <ScrollButton targetId="how-it-works" variant="link">
                  How It Works
                </ScrollButton>
              </li>
              <li>
                <ScrollButton targetId="benefits" variant="link">
                  Benefits
                </ScrollButton>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@untrapai.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  contact@untrapai.com
                </a>
              </li>
              <li>
                <ScrollButton targetId="contact" variant="link">
                  Book a Demo
                </ScrollButton>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-500/20 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Untrap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
