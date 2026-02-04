import React from 'react';
import { useNavigate } from 'react-router-dom';

const BirdChatterFooter = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* App Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/birdchatter/AppIcon.png"
                alt="Bird Chatter"
                className="h-8 w-8 rounded-lg"
              />
              <div>
                <h3 className="text-lg font-bold">Bird Chatter</h3>
                <p className="text-sm text-gray-400">Tap. Listen. Compete.</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Turn your iPhone into a real-time bird identification machine. Identify 6,500+ species,
              earn points for every detection, and climb the leaderboard.
            </p>
            <p className="text-sm text-gray-400">
              © 2026 Bird Chatter. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation('/bird-chatter')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/bird-chatter/download')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  Download
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/bird-chatter/support')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  Support
                </button>
              </li>
            </ul>
          </div>

          {/* App Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">App</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">iPhone 14 Plus or newer</span>
              </li>
              <li>
                <span className="text-gray-300">6,500+ Bird Species</span>
              </li>
              <li>
                <span className="text-gray-300">World Leaderboards</span>
              </li>
              <li>
                <span className="text-gray-300">100% Privacy</span>
              </li>
              <li>
                <span className="text-gray-300">Free on App Store</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Built for birders who love to compete
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BirdChatterFooter;
