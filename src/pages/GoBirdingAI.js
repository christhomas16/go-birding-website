import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MicrophoneIcon,
  CpuChipIcon,
  MapPinIcon,
  CloudIcon,
  HeartIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

const GoBirdingAI = () => {
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

  const features = [
    {
      icon: MicrophoneIcon,
      title: 'Voice-Powered Search',
      description: 'Simply speak your birding needs - "Find me spots with a lighthouse" or "Show me locations in Ocean County"'
    },
    {
      icon: CpuChipIcon,
      title: 'AI Intelligence',
      description: 'MLX-optimized on-device AI model for complete privacy, with Response Style presets (Accurate or Creative)'
    },
    {
      icon: MapPinIcon,
      title: 'Interactive Hotspot Map',
      description: 'Browse 19,200+ birding locations on an interactive map with real-time location tracking and filtering'
    },
    {
      icon: CloudIcon,
      title: 'Weather Integration',
      description: 'Real-time weather conditions, wind data, and tide predictions for optimal birding'
    },
    {
      icon: HeartIcon,
      title: 'Personal Favorites',
      description: 'Save your favorite spots and access them anytime without searching'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Modern Interface',
      description: 'Beautiful SwiftUI design optimized for iOS 18+ with intuitive navigation'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-blue-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Your AI-Powered
                <span className="text-primary-600 block">Birding Companion</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover amazing birding locations across all 50 US states and 7 Canadian provinces with voice-powered AI search and interactive mapping.
                Browse over 19,200 curated hotspots on an interactive map, complete privacy with offline-capable AI running locally on your device, and intelligent recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleNavigation('/download')}
                  className="bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl text-center"
                >
                  Download for iOS
                </button>
                <button
                  onClick={() => handleNavigation('/features')}
                  className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-50 transition-colors duration-200 text-center"
                >
                  Explore Features
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-500 rounded-3xl transform rotate-6 opacity-20"></div>
                <img
                  src="/hero-banner.jpg"
                  alt="Go Birding AI - Discover Amazing Birding Locations"
                  className="relative w-full max-w-xs sm:max-w-sm h-auto rounded-3xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Birders Love Go Birding AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of birding with AI-powered location discovery,
              voice commands, and complete privacy protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Birding Experience?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of birders who've discovered their new favorite spots with Go Birding AI.
          </p>
          <button
            onClick={() => handleNavigation('/download')}
            className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
          >
            Download Now
          </button>
          <p className="text-primary-200 mt-4 text-sm">
            Starting at $1.99 in the App Store. Requires iOS 18.0+. iPhone 11 or newer recommended.
          </p>
          <p className="text-primary-200 mt-6 text-base">
            Need help? Visit our{' '}
            <button
              onClick={() => handleNavigation('/go-birding-ai/support')}
              className="text-white font-semibold hover:underline"
            >
              Support Page
            </button>
          </p>
        </div>
      </section>
    </div>
  );
};

export default GoBirdingAI;
