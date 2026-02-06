import React from 'react';
import {
  DevicePhoneMobileIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Download = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Download Our Apps
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two powerful birding apps for your iPhone. Find locations or identify birds by sound.
            </p>
          </div>

          {/* Two App Cards Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Go Birding AI Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border-t-4 border-primary-600">
              <div className="flex flex-col items-center text-center mb-6">
                <img
                  src="/logo.png"
                  alt="Go Birding AI"
                  className="w-20 h-20 rounded-2xl shadow-lg mb-4"
                />
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Go Birding AI</h2>
                <p className="text-primary-600 font-semibold mb-4">AI-Powered Location Discovery</p>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                Voice-powered search for birding locations across 19,200+ hotspots. Interactive map,
                real-time weather, and complete privacy with on-device AI.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Voice-powered location search</span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">19,200+ curated hotspots on interactive map</span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Real-time weather & tide conditions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">100% on-device AI, complete privacy</span>
                </div>
              </div>

              <a
                href="https://apps.apple.com/us/app/go-birding-ai/id6747407940"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Go Birding AI on the App Store"
                className="bg-black text-white px-8 py-4 rounded-2xl text-center w-full inline-block hover:bg-gray-800 transition-colors duration-200"
              >
                <div className="flex items-center justify-center space-x-3">
                  <DevicePhoneMobileIcon className="h-7 w-7" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </div>
              </a>

              <p className="text-sm text-gray-500 text-center mt-4">
                $1.99 • iPhone 11+ • iOS 18.0+
              </p>
            </div>

            {/* Bird Chatter Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border-t-4 border-green-600">
              <div className="flex flex-col items-center text-center mb-6">
                <img
                  src="/birdchatter/AppIcon.png"
                  alt="Bird Chatter"
                  className="w-20 h-20 rounded-2xl shadow-lg mb-4"
                />
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Bird Chatter</h2>
                <p className="text-green-600 font-semibold mb-4">Competitive Bird ID</p>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                Real-time bird identification with on-device AI. Earn points for every species,
                climb leaderboards, and compete with birders worldwide.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Identify 6,500+ bird species by sound</span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Points, leaderboards & Top 10 badges</span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Life list with year, location & species filters</span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Audio stays on device, stats sync for leaderboards</span>
                </div>
              </div>

              <a
                href="https://apps.apple.com/us/app/bird-chatter/id6749836729"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Bird Chatter on the App Store"
                className="bg-black text-white px-8 py-4 rounded-2xl text-center w-full inline-block hover:bg-gray-800 transition-colors duration-200"
              >
                <div className="flex items-center justify-center space-x-3">
                  <DevicePhoneMobileIcon className="h-7 w-7" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </div>
              </a>

              <p className="text-sm text-gray-500 text-center mt-4">
                Free • iPhone 14 Plus+ • iOS 18.0+
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Compare Our Apps</h2>
            <p className="text-xl text-gray-600">
              Different tools for different birding needs
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary-600">Go Birding AI</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">Bird Chatter</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Price</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-900 font-medium">$1.99</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-900 font-medium">Free</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">Focus</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-900">Find birding locations</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-900">Identify birds by sound</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Device</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-900">iPhone 11+</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-900">iPhone 14 Plus+</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">On-Device AI</td>
                  <td className="px-6 py-4 text-sm text-center text-green-600">Yes</td>
                  <td className="px-6 py-4 text-sm text-center text-green-600">Yes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Works Offline</td>
                  <td className="px-6 py-4 text-sm text-center text-green-600">Yes</td>
                  <td className="px-6 py-4 text-sm text-center text-green-600">Yes (detection)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">Leaderboards</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-400">No</td>
                  <td className="px-6 py-4 text-sm text-center text-green-600">Yes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Voice Search</td>
                  <td className="px-6 py-4 text-sm text-center text-green-600">Yes</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-400">No</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">Key Stat</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-900">19,200+ locations</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-900">6,500+ species</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Start Your Birding Adventure
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Download both apps and get the complete birding experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/us/app/go-birding-ai/id6747407940"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Go Birding AI on the App Store"
              className="bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg"
            >
              Go Birding AI — $1.99
            </a>
            <a
              href="https://apps.apple.com/us/app/bird-chatter/id6749836729"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Bird Chatter on the App Store"
              className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg"
            >
              Bird Chatter — Free
            </a>
          </div>
          <p className="text-gray-400 mt-6 text-sm">
            Both apps require iOS 18.0+ and are available on the App Store.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Download;
