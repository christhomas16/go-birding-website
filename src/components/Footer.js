import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.png"
                alt="gobirding.ai"
                className="h-8 w-8 rounded-lg"
              />
              <div>
                <h3 className="text-lg font-bold">gobirding.ai</h3>
                <p className="text-sm text-gray-400">AI-Powered Birding Apps</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Two powerful iOS apps for birding enthusiasts. Find locations with voice-powered AI or identify birds by sound and compete on leaderboards.
            </p>
            <p className="text-sm text-gray-400">
              © 2026 gobirding.ai. All rights reserved.
            </p>
          </div>

          {/* Our Apps */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Apps</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation('/go-birding-ai')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  Go Birding AI
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/bird-chatter')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  Bird Chatter
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/download')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  Download
                </button>
              </li>
            </ul>
          </div>

          {/* Support & About */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation('/go-birding-ai/support')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  Go Birding AI Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/bird-chatter/support')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  Bird Chatter Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/about')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation('/terms')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/privacy')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Built with passion for birding enthusiasts everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
