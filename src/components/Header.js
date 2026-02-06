import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const useScrollToTop = () => {
  const navigate = useNavigate();

  const navigateWithScroll = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return navigateWithScroll;
};

const Dropdown = ({ label, items, isActive, accentColor, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeClass = accentColor === 'green'
    ? 'text-green-600'
    : 'text-primary-600';

  const hoverClass = accentColor === 'green'
    ? 'hover:text-green-600'
    : 'hover:text-primary-600';

  const dropdownActiveClass = accentColor === 'green'
    ? 'text-green-600 bg-green-50'
    : 'text-primary-600 bg-primary-50';

  const dropdownHoverClass = accentColor === 'green'
    ? 'hover:bg-green-50 hover:text-green-600'
    : 'hover:bg-primary-50 hover:text-primary-600';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
          isActive ? activeClass : `text-gray-700 ${hoverClass}`
        }`}
      >
        {label}
        <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          {items.map((item) => (
            <button
              key={item.href}
              onClick={() => {
                onNavigate(item.href);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                item.isActive ? dropdownActiveClass : `text-gray-700 ${dropdownHoverClass}`
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigateWithScroll = useScrollToTop();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleNavigation = (path) => {
    setIsMenuOpen(false);
    navigateWithScroll(path);
  };

  const goBirdingItems = [
    { name: 'Overview', href: '/go-birding-ai', isActive: location.pathname === '/go-birding-ai' },
    { name: 'Support', href: '/go-birding-ai/support', isActive: location.pathname === '/go-birding-ai/support' },
  ];

  const birdChatterItems = [
    { name: 'Overview', href: '/bird-chatter', isActive: location.pathname === '/bird-chatter' },
    { name: 'Support', href: '/bird-chatter/support', isActive: location.pathname === '/bird-chatter/support' },
  ];

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
                alt="gobirding.ai"
                className="h-10 w-10 rounded-lg shadow-sm"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">gobirding.ai</h1>
                <p className="text-xs text-gray-600">AI-Powered Birding Apps</p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Dropdown
              label="Go Birding AI"
              items={goBirdingItems}
              isActive={isActive('/go-birding-ai')}
              accentColor="blue"
              onNavigate={handleNavigation}
            />
            <Dropdown
              label="Bird Chatter"
              items={birdChatterItems}
              isActive={isActive('/bird-chatter')}
              accentColor="green"
              onNavigate={handleNavigation}
            />
            <button
              onClick={() => handleNavigation('/download')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/download')
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Download
            </button>
            <button
              onClick={() => handleNavigation('/about')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/about')
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              About
            </button>
          </nav>

          {/* Download CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavigation('/download')}
              className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Get Our Apps
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
              {/* Go Birding AI section */}
              <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Go Birding AI
              </div>
              <button
                onClick={() => handleNavigation('/go-birding-ai')}
                className={`block w-full text-left px-6 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === '/go-birding-ai'
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => handleNavigation('/go-birding-ai/support')}
                className={`block w-full text-left px-6 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === '/go-birding-ai/support'
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                Support
              </button>

              {/* Bird Chatter section */}
              <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mt-2">
                Bird Chatter
              </div>
              <button
                onClick={() => handleNavigation('/bird-chatter')}
                className={`block w-full text-left px-6 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === '/bird-chatter'
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => handleNavigation('/bird-chatter/support')}
                className={`block w-full text-left px-6 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === '/bird-chatter/support'
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                Support
              </button>

              {/* Other links */}
              <div className="border-t border-gray-200 mt-2 pt-2">
                <button
                  onClick={() => handleNavigation('/download')}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive('/download')
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  Download
                </button>
                <button
                  onClick={() => handleNavigation('/about')}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive('/about')
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  About
                </button>
              </div>

              <button
                onClick={() => handleNavigation('/download')}
                className="block w-full text-center bg-gray-900 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors duration-200 mt-4"
              >
                Get Our Apps
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
