import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  // Handle navigation with smooth scroll
  const handleNavigation = (path) => {
    navigate(path);
    // Use setTimeout to ensure navigation completes before scrolling
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
                alt="GoBirding AI" 
                className="h-8 w-8 rounded-lg"
              />
              <div>
                <h3 className="text-lg font-bold">GoBirding AI</h3>
                <p className="text-sm text-gray-400">Your AI-Powered Birding Companion</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Discover amazing birding locations across all 50 US states and 7 Canadian provinces with the power of AI. 
              Voice-powered search, complete privacy with offline-capable AI, and over 19,200 curated birding hotspots.
            </p>
            <p className="text-sm text-gray-400">
              © 2025 GoBirding AI. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation('/')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/features')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  Features
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

          {/* Legal Links */}
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

          {/* App Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">App</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">iPhone 14 Plus+</span>
              </li>
              <li>
                <span className="text-gray-300">19,200+ Locations</span>
              </li>
              <li>
                <span className="text-gray-300">50 US States + 7 Provinces</span>
              </li>
              <li>
                <span className="text-gray-300">Complete Privacy</span>
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