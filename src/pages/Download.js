import React from 'react';
import { 
  DevicePhoneMobileIcon, 
  CheckCircleIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
  CpuChipIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const Download = () => {
  const requirements = [
    { requirement: 'iOS 18.0 or later', status: 'required' },
    { requirement: 'iPhone 11 or newer', status: 'recommended' },
    { requirement: 'Location Services', status: 'required' },
    { requirement: 'Microphone Access', status: 'required' },
    { requirement: '2GB Available Storage', status: 'recommended' }
  ];

  const features = [
    'Voice-powered birding location search',
    'Interactive hotspot map with 19,200+ locations',
    'Real-time location tracking and filtering',
    'Complete privacy - all AI runs on device',
    'Offline operation for instant access in the field',
    'Real-time weather and tide conditions',
    'Personal favorites system',
    'eBird integration for species data'
  ];

  const systemInfo = [
    {
      icon: CpuChipIcon,
      title: 'AI Performance',
      description: 'Best experience on iPhone 11 or newer for optimal MLX on-device AI performance'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Privacy Protection',
      description: 'All processing happens on your device. No data sent to servers, no tracking, complete privacy'
    },
    {
      icon: SparklesIcon,
      title: 'Latest Features',
      description: 'Requires iOS 18+ to access the newest SwiftUI features and AI capabilities'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Download
                <span className="text-primary-600 block">GoBirding AI</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get the most advanced birding companion available for iOS. Voice-powered search, 
                AI recommendations, and complete privacy protection.
              </p>
              
              {/* App Store Button */}
              <a
                href="https://apps.apple.com/us/app/go-birding-ai/id6747407940"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download GoBirding AI on the App Store"
                className="bg-black text-white px-10 py-5 rounded-2xl text-center mb-6 inline-block w-full max-w-md"
              >
                <div className="flex items-center justify-center space-x-3">
                  <DevicePhoneMobileIcon className="h-8 w-8" />
                  <div className="text-left">
                    <div className="text-sm">Download on the</div>
                    <div className="text-xl font-semibold">App Store</div>
                  </div>
                </div>
              </a>
              
              <p className="text-sm text-gray-500">
                Available in the iOS App Store for $4.99.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-500 rounded-3xl transform rotate-6 opacity-20"></div>
                <img 
                  src="/logo.png" 
                  alt="GoBirding AI App" 
                  className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">System Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make sure your device meets these requirements for the best GoBirding AI experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Device Requirements</h3>
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700">{req.requirement}</span>
                    <div className="flex items-center">
                      {req.status === 'required' ? (
                        <>
                          <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                          <span className="text-sm font-medium text-green-600">Required</span>
                        </>
                      ) : (
                        <>
                          <ExclamationTriangleIcon className="h-5 w-5 text-amber-600 mr-2" />
                          <span className="text-sm font-medium text-amber-600">Recommended</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-primary-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Get</h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Information */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Details</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the technology behind GoBirding AI and why certain requirements exist.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {systemInfo.map((info, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md text-center">
                <div className="bg-primary-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <info.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <p className="text-gray-600 leading-relaxed">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Instructions */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Installation Guide</h2>
            <p className="text-xl text-gray-600">
              Follow these simple steps to get started with GoBirding AI
            </p>
          </div>
          
            <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Download from App Store</h3>
                <p className="text-gray-600">Search for "GoBirding AI" in the iOS App Store and purchase for $4.99 to download.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Grant Permissions</h3>
                <p className="text-gray-600">Allow location and microphone access for voice search and location-based recommendations.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Exploring</h3>
                <p className="text-gray-600">Tap the microphone and speak your first birding query to discover amazing locations!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
                              <h3 className="text-lg font-semibold text-gray-900 mb-3">How much does GoBirding AI cost?</h3>
                <p className="text-gray-600">GoBirding AI is available for a one-time fee of $4.99 in the App Store. No subscription fees or in-app purchases required.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Why is iPhone 11 or newer recommended?</h3>
              <p className="text-gray-600">While the app works on iOS 18+ devices, newer iPhones deliver the smoothest voice recognition and fastest on-device AI responses.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How big is the AI model download?</h3>
              <p className="text-gray-600">Approximately 332 MB. The download begins only with your explicit consent.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Does it work on older devices?</h3>
              <p className="text-gray-600">Yes. Older devices automatically use a lighter fallback for explanations to maintain stability.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you collect my birding data?</h3>
              <p className="text-gray-600">No. All AI processing happens entirely on your device. We don't collect, store, or transmit any of your searches, locations, or usage data.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Which areas are covered?</h3>
              <p className="text-gray-600">We cover over 19,200 birding locations across all 50 US states and 7 Canadian provinces, with continuous updates and additions based on user feedback and eBird data.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How does the interactive map work?</h3>
              <p className="text-gray-600">The interactive map shows all 19,200+ birding hotspots with your current location. You can tap any hotspot pin to view details, filter by county, show only favorites, and sort by distance. The map automatically centers on your location and updates as you move.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Revolutionize Your Birding?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join the future of birding with AI-powered location discovery and voice search.
          </p>
          <a
            href="https://apps.apple.com/us/app/go-birding-ai/id6747407940"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GoBirding AI on the App Store"
            className="bg-black text-white px-10 py-5 rounded-2xl text-center mx-auto inline-block w-full max-w-md"
          >
            <div className="flex items-center justify-center space-x-3">
              <DevicePhoneMobileIcon className="h-8 w-8" />
              <div className="text-left">
                <div className="text-sm">Available in the</div>
                <div className="text-xl font-semibold">App Store</div>
              </div>
            </div>
          </a>
          <p className="text-primary-200 mt-4 text-sm">
            $4.99. Download now at the App Store.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Download; 