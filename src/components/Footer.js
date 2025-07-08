import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
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
              Discover amazing birding locations in New York and New Jersey with the power of AI. 
              Voice-powered search, complete privacy, and 400+ curated birding hotspots.
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
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Download
                </Link>
              </li>
            </ul>
          </div>

          {/* App Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">App</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">iOS 18.0+</span>
              </li>
              <li>
                <span className="text-gray-300">400+ Locations</span>
              </li>
              <li>
                <span className="text-gray-300">NY & NJ Coverage</span>
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