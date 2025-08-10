import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// Custom hook for smooth scrolling to top
const useScrollToTop = () => {
  const navigate = useNavigate();
  
  const navigateWithScroll = (path) => {
    navigate(path);
    // Use setTimeout to ensure navigation completes before scrolling
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };
  
  return navigateWithScroll;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigateWithScroll = useScrollToTop();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'About', href: '/about' },
    { name: 'Download', href: '/download' },
  ];

  const isActive = (path) => location.pathname === path;

  // Handle navigation with smooth scroll
  const handleNavigation = (path) => {
    setIsMenuOpen(false);
    navigateWithScroll(path);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigation('/')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
            >
              <img 
                src="/logo.png" 
                alt="Go Birding AI" 
                className="h-10 w-10 rounded-lg shadow-sm"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Go Birding AI</h1>
                <p className="text-xs text-gray-600">Your AI-Powered Birding Companion</p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Download Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavigation('/download')}
              className="bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Download App
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => handleNavigation('/download')}
                className="block w-full text-center bg-primary-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-primary-700 transition-colors duration-200 mt-4"
              >
                Download App
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 