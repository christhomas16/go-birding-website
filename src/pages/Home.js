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

const BirdSilhouette1 = ({ className, style }) => (
  <svg viewBox="0 0 80 40" className={className} style={style}>
    {/* Soaring bird with spread wings, visible body and tail */}
    <path
      d="M40 22 C38 22 35 21 32 20 C28 18 20 12 12 6 C10 4 8 3 6 3 C4 3 2 4 2 5 C2 6 4 8 8 10 C14 15 22 19 30 21 L28 22 C24 22 18 23 14 25 C12 26 10 27 10 28 C10 29 12 29 14 28 C18 26 24 24 30 23 L40 22 Z M40 22 C42 22 45 21 48 20 C52 18 60 12 68 6 C70 4 72 3 74 3 C76 3 78 4 78 5 C78 6 76 8 72 10 C66 15 58 19 50 21 L52 22 C56 22 62 23 66 25 C68 26 70 27 70 28 C70 29 68 29 66 28 C62 26 56 24 50 23 L40 22 Z M40 22 L40 24 C40 26 39 28 37 30 C36 31 35 32 34 32 C33 32 34 31 35 30 C37 28 38 26 38 24 L40 22 Z"
      fill="currentColor"
    />
  </svg>
);

const BirdSilhouette2 = ({ className, style }) => (
  <svg viewBox="0 0 80 40" className={className} style={style}>
    {/* Bird with wings angled up - different flight pose */}
    <path
      d="M40 24 C37 24 33 22 28 18 C22 13 16 8 10 4 C8 2 6 2 5 3 C4 4 5 6 8 8 C14 13 24 19 34 23 L32 24 C28 25 22 27 18 29 C16 30 16 31 17 31 C18 31 20 30 24 28 C28 26 32 25 36 24 L40 24 Z M40 24 C43 24 47 22 52 18 C58 13 64 8 70 4 C72 2 74 2 75 3 C76 4 75 6 72 8 C66 13 56 19 46 23 L48 24 C52 25 58 27 62 29 C64 30 64 31 63 31 C62 31 60 30 56 28 C52 26 48 25 44 24 L40 24 Z M40 24 L41 27 C41 29 40 32 38 34 C37 35 36 36 36 35 C36 34 37 32 38 30 C39 28 40 26 40 24 Z"
      fill="currentColor"
    />
  </svg>
);

const BirdSilhouette3 = ({ className, style }) => (
  <svg viewBox="0 0 80 40" className={className} style={style}>
    {/* Hawk/eagle style - broader wings */}
    <path
      d="M40 20 C36 20 30 18 24 14 C18 10 12 6 6 3 C4 2 2 2 1 3 C0 4 1 6 4 8 C10 13 20 18 32 20 C28 21 22 23 16 26 C14 27 13 28 14 29 C15 29 17 28 20 27 C26 24 32 22 38 21 L40 20 Z M40 20 C44 20 50 18 56 14 C62 10 68 6 74 3 C76 2 78 2 79 3 C80 4 79 6 76 8 C70 13 60 18 48 20 C52 21 58 23 64 26 C66 27 67 28 66 29 C65 29 63 28 60 27 C54 24 48 22 42 21 L40 20 Z M40 20 L40 23 C40 26 39 29 37 32 C36 33 35 33 35 32 C35 31 36 28 38 25 C39 23 40 21 40 20 Z"
      fill="currentColor"
    />
  </svg>
);

const birdComponents = [BirdSilhouette1, BirdSilhouette2, BirdSilhouette3];

const birds = [
  { variant: 0, size: 'w-12', duration: '18s', delay: '0s', top: '12%', opacity: 0.15 },
  { variant: 1, size: 'w-9', duration: '22s', delay: '3s', top: '25%', opacity: 0.1 },
  { variant: 2, size: 'w-14', duration: '15s', delay: '7s', top: '45%', opacity: 0.12 },
  { variant: 0, size: 'w-8', duration: '25s', delay: '2s', top: '60%', opacity: 0.08 },
  { variant: 1, size: 'w-11', duration: '20s', delay: '10s', top: '32%', opacity: 0.11 },
  { variant: 2, size: 'w-9', duration: '24s', delay: '5s', top: '72%', opacity: 0.07 },
  { variant: 0, size: 'w-13', duration: '16s', delay: '12s', top: '18%', opacity: 0.13 },
  { variant: 1, size: 'w-8', duration: '28s', delay: '8s', top: '52%', opacity: 0.09 },
];

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
      {/* Flying birds animation */}
      <style>{`
        @keyframes flyAcross {
          0% { transform: translateX(-100px) translateY(0); }
          25% { transform: translateX(25vw) translateY(-8px); }
          50% { transform: translateX(50vw) translateY(4px); }
          75% { transform: translateX(75vw) translateY(-6px); }
          100% { transform: translateX(calc(100vw + 100px)) translateY(0); }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {/* Animated flying birds */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {birds.map((bird, i) => {
            const BirdComponent = birdComponents[bird.variant];
            return (
              <BirdComponent
                key={i}
                className={`${bird.size} absolute text-gray-900`}
                style={{
                  top: bird.top,
                  opacity: bird.opacity,
                  animation: `flyAcross ${bird.duration} ${bird.delay} linear infinite`,
                  left: '-120px',
                }}
              />
            );
          })}
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
