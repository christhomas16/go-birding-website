import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MicrophoneIcon,
  MapPinIcon,
  TrophyIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { NEXT_LIFER_APP_STORE_URL } from '../nextLifer';

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
      {/* Audio waveform animation */}
      <style>{`
        @keyframes waveBar {
          0%, 100% { transform: scaleY(var(--wave-min)); }
          50% { transform: scaleY(var(--wave-max)); }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {/* Animated audio waveform bars */}
        <div className="absolute inset-0 pointer-events-none flex items-center" aria-hidden="true">
          <div className="w-full flex items-center justify-center gap-[4px] sm:gap-[6px] px-4">
            {Array.from({ length: 80 }).map((_, i) => {
              const center = 40;
              const dist = Math.abs(i - center) / center;
              const baseHeight = Math.max(0.15, 1 - dist * dist);
              const variation = Math.sin(i * 0.7) * 0.3 + Math.sin(i * 1.3) * 0.2;
              const minScale = Math.max(0.08, (baseHeight + variation) * 0.25);
              const maxScale = Math.max(0.15, (baseHeight + variation) * 1.0);
              const duration = 1.5 + Math.sin(i * 0.5) * 0.8;
              const delay = (i * 0.06) % 2;
              const progress = i / 79;
              const r = Math.round(59 + progress * (34 - 59));
              const g = Math.round(130 + progress * (197 - 130));
              const b = Math.round(246 + progress * (94 - 246));
              return (
                <div
                  key={i}
                  className="rounded-full"
                  style={{
                    width: '8px',
                    height: '200px',
                    backgroundColor: `rgba(${r}, ${g}, ${b}, 0.18)`,
                    transform: 'scaleY(0.03)',
                    '--wave-min': minScale,
                    '--wave-max': maxScale,
                    animation: `waveBar ${duration}s ${delay}s ease-in-out infinite`,
                    animationFillMode: 'backwards',
                    transformOrigin: 'center',
                  }}
                />
              );
            })}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="relative z-10 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered Apps for
              <span className="text-primary-600 block">Birding Enthusiasts</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Three iOS apps built by birders, for birders. Discover locations with voice-powered AI, identify birds by sound and compete on leaderboards, or find lifers near you from live eBird data.
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

      {/* App Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Apps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three ways to enhance your birding experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Go Birding AI Card */}
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-8 lg:p-10 rounded-3xl border border-primary-100 hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center mb-6">
                <img
                  src="/go-birding-ai-assets/AppIcon.png?v=1"
                  alt="Go Birding AI"
                  className="w-16 h-16 rounded-2xl shadow-md mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Go Birding AI</h3>
                  <p className="text-primary-600 font-medium">Location Discovery</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Where should you go birding today? Good spots near you right now, rare bird alerts, and voice or text search across 19,200+ hotspots in the US and Canada, with an AI guide that runs on your iPhone.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-700">
                  <MicrophoneIcon className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                  <span>Good spots near you right now</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <MapPinIcon className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                  <span>19,200+ interactive map hotspots</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CpuChipIcon className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                  <span>On-device AI, no account or tracking</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <DevicePhoneMobileIcon className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                  <span>iOS 18+ | $1.99</span>
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

            {/* Next Lifer Card */}
            <div className="bg-gradient-to-br from-slate-50 to-amber-50 p-8 lg:p-10 rounded-3xl border border-amber-100 hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center mb-6">
                <img
                  src="/next-lifer-assets/AppIcon.png?v=2"
                  alt="Next Lifer"
                  className="w-16 h-16 rounded-2xl shadow-md mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Next Lifer</h3>
                  <p className="text-amber-700 font-medium">Find Your Next Lifer</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Find potential lifers, year birds, rarities, owls and the best hotspots near any place from live eBird data. Connect eBird once and every search shows the birds you still need.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-700">
                  <StarIcon className="h-5 w-5 text-amber-700 mr-3 flex-shrink-0" />
                  <span>Lifers, year birds, rarities & owls</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <MapPinIcon className="h-5 w-5 text-amber-700 mr-3 flex-shrink-0" />
                  <span>Best hotspots, list or map view</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <ShieldCheckIcon className="h-5 w-5 text-amber-700 mr-3 flex-shrink-0" />
                  <span>No ads, no tracking, delete anytime</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <DevicePhoneMobileIcon className="h-5 w-5 text-amber-700 mr-3 flex-shrink-0" />
                  <span>iPhone | iOS 17+ | Free</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleNavigation('/next-lifer')}
                  className="bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors duration-200 text-center"
                >
                  Learn More
                </button>
                {NEXT_LIFER_APP_STORE_URL ? (
                  <a
                    href={NEXT_LIFER_APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-slate-900 text-slate-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-amber-50 transition-colors duration-200 text-center"
                  >
                    Download — Free
                  </a>
                ) : (
                  <span className="border-2 border-slate-900 text-slate-900 px-6 py-3 rounded-full text-sm font-semibold text-center">
                    Coming Soon
                  </span>
                )}
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
              Privacy-first design, smart technology, and apps that enhance the birding experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-gray-100 p-4 rounded-full w-fit mx-auto mb-6">
                <ShieldCheckIcon className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy First</h3>
              <p className="text-gray-600 leading-relaxed">
                No ads, no tracking, and we never sell your data. Go Birding AI and Bird Chatter keep AI on your iPhone, and Next Lifer stores only what it needs to sync your lists.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-gray-100 p-4 rounded-full w-fit mx-auto mb-6">
                <CpuChipIcon className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">On-Device AI</h3>
              <p className="text-gray-600 leading-relaxed">
                Go Birding AI and Bird Chatter run their AI models locally on your iPhone — no internet required for core features, instant results anywhere in the field.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-gray-100 p-4 rounded-full w-fit mx-auto mb-6">
                <DevicePhoneMobileIcon className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Native iOS</h3>
              <p className="text-gray-600 leading-relaxed">
                Built with SwiftUI for modern iOS. Optimized for iPhone performance with beautiful, intuitive interfaces.
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
            Whether you're searching for the perfect birding spot, competing to identify the most species, or chasing your next lifer, we've got an app for you.
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
