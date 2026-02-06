import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MicrophoneIcon,
  MapPinIcon,
  TrophyIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

const Home = () => {
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
    <div className="bg-white">
      {/* Sound wave ripple animation */}
      <style>{`
        @keyframes ripple {
          0% { transform: scale(0.3); opacity: 0.35; }
          100% { transform: scale(1); opacity: 0; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {/* Sound wave ripples */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Left ripple source */}
          <div className="absolute" style={{ left: '10%', top: '30%' }}>
            <div className="absolute rounded-full border border-primary-400" style={{ width: 200, height: 200, marginLeft: -100, marginTop: -100, animation: 'ripple 4s 0s ease-out infinite' }} />
            <div className="absolute rounded-full border border-primary-400" style={{ width: 200, height: 200, marginLeft: -100, marginTop: -100, animation: 'ripple 4s 1s ease-out infinite' }} />
            <div className="absolute rounded-full border border-primary-400" style={{ width: 200, height: 200, marginLeft: -100, marginTop: -100, animation: 'ripple 4s 2s ease-out infinite' }} />
          </div>
          {/* Right ripple source */}
          <div className="absolute" style={{ right: '8%', top: '50%' }}>
            <div className="absolute rounded-full border border-green-400" style={{ width: 260, height: 260, marginLeft: -130, marginTop: -130, animation: 'ripple 5s 0.5s ease-out infinite' }} />
            <div className="absolute rounded-full border border-green-400" style={{ width: 260, height: 260, marginLeft: -130, marginTop: -130, animation: 'ripple 5s 2s ease-out infinite' }} />
            <div className="absolute rounded-full border border-green-400" style={{ width: 260, height: 260, marginLeft: -130, marginTop: -130, animation: 'ripple 5s 3.5s ease-out infinite' }} />
          </div>
          {/* Center-top ripple source */}
          <div className="absolute" style={{ left: '55%', top: '15%' }}>
            <div className="absolute rounded-full border border-primary-300" style={{ width: 160, height: 160, marginLeft: -80, marginTop: -80, animation: 'ripple 3.5s 1.5s ease-out infinite' }} />
            <div className="absolute rounded-full border border-primary-300" style={{ width: 160, height: 160, marginLeft: -80, marginTop: -80, animation: 'ripple 3.5s 3s ease-out infinite' }} />
          </div>
          {/* Bottom-left ripple source */}
          <div className="absolute" style={{ left: '30%', bottom: '10%' }}>
            <div className="absolute rounded-full border border-green-300" style={{ width: 180, height: 180, marginLeft: -90, marginTop: -90, animation: 'ripple 4.5s 0.8s ease-out infinite' }} />
            <div className="absolute rounded-full border border-green-300" style={{ width: 180, height: 180, marginLeft: -90, marginTop: -90, animation: 'ripple 4.5s 2.8s ease-out infinite' }} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="relative z-10 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered Apps for
              <span className="text-primary-600 block">Birding Enthusiasts</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Two powerful iOS apps built by birders, for birders. Discover locations with voice-powered AI or identify birds by sound and compete on leaderboards.
            </p>
            <button
              onClick={() => handleNavigation('/download')}
              className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Our Apps
            </button>
          </div>
        </div>
      </section>

      {/* Two App Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Apps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two ways to enhance your birding experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Go Birding AI Card */}
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-8 lg:p-10 rounded-3xl border border-primary-100 hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center mb-6">
                <img
                  src="/logo.png"
                  alt="Go Birding AI"
                  className="w-16 h-16 rounded-2xl shadow-md mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Go Birding AI</h3>
                  <p className="text-primary-600 font-medium">Location Discovery</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Voice-powered AI search for 19,200+ birding hotspots across all 50 US states and 7 Canadian provinces. Interactive map, real-time weather, and complete on-device privacy.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-700">
                  <MicrophoneIcon className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                  <span>Voice-powered location search</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <MapPinIcon className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                  <span>19,200+ interactive map hotspots</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CpuChipIcon className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                  <span>100% on-device AI, works offline</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <DevicePhoneMobileIcon className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                  <span>iPhone 11+ | iOS 18+ | $1.99</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleNavigation('/go-birding-ai')}
                  className="bg-primary-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary-700 transition-colors duration-200 text-center"
                >
                  Learn More
                </button>
                <button
                  onClick={() => handleNavigation('/download')}
                  className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary-50 transition-colors duration-200 text-center"
                >
                  Download — $1.99
                </button>
              </div>
            </div>

            {/* Bird Chatter Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 lg:p-10 rounded-3xl border border-green-100 hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center mb-6">
                <img
                  src="/birdchatter/AppIcon.png"
                  alt="Bird Chatter"
                  className="w-16 h-16 rounded-2xl shadow-md mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Bird Chatter</h3>
                  <p className="text-green-600 font-medium">Competitive Bird ID</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Real-time bird identification powered by on-device AI. Earn points for every species detected, climb leaderboards at county, state, country, and world levels.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-700">
                  <CpuChipIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span>6,500+ species, on-device AI</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <TrophyIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span>Leaderboards, badges, and points</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <ShieldCheckIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span>Audio stays on device, stats sync for leaderboards</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <DevicePhoneMobileIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span>iPhone 14 Plus+ | iOS 18+ | Free</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleNavigation('/bird-chatter')}
                  className="bg-green-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors duration-200 text-center"
                >
                  Learn More
                </button>
                <button
                  onClick={() => handleNavigation('/download')}
                  className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-full text-sm font-semibold hover:bg-green-50 transition-colors duration-200 text-center"
                >
                  Download — Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Built by Birders, for Birders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Privacy-first design, on-device AI, and apps that enhance the birding experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-gray-100 p-4 rounded-full w-fit mx-auto mb-6">
                <ShieldCheckIcon className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy First</h3>
              <p className="text-gray-600 leading-relaxed">
                Both apps use on-device AI. Your audio and searches never leave your iPhone. We believe your birding data is your business.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-gray-100 p-4 rounded-full w-fit mx-auto mb-6">
                <CpuChipIcon className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">On-Device AI</h3>
              <p className="text-gray-600 leading-relaxed">
                No internet required for core features. AI models run locally on your iPhone for instant results anywhere in the field.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-gray-100 p-4 rounded-full w-fit mx-auto mb-6">
                <DevicePhoneMobileIcon className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Native iOS</h3>
              <p className="text-gray-600 leading-relaxed">
                Built with SwiftUI for iOS 18+. Optimized for iPhone performance with beautiful, intuitive interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Start Your Birding Adventure
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're searching for the perfect birding spot or competing to identify the most species, we've got an app for you.
          </p>
          <button
            onClick={() => handleNavigation('/download')}
            className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
          >
            Get Our Apps
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
