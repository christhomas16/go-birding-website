import React from 'react';
import {
  DevicePhoneMobileIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
  CpuChipIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const BirdChatterDownload = () => {
  const requirements = [
    { requirement: 'iOS 18.0 or later', status: 'required' },
    { requirement: 'iPhone 14 Plus or newer', status: 'recommended' },
    { requirement: 'Location Services', status: 'required' },
    { requirement: 'Microphone Access', status: 'required' },
    { requirement: '500MB Available Storage', status: 'recommended' }
  ];

  const features = [
    'Real-time bird species detection',
    'Points system with lifer bonuses',
    'County, State, Country & World leaderboards',
    'Top 10 badges and achievements',
    'Life list tracking with filters',
    '6,500+ bird species recognition',
    '11 language support',
    '100% on-device privacy'
  ];

  const systemInfo = [
    {
      icon: CpuChipIcon,
      title: 'AI Performance',
      description: 'Best experience on iPhone 14 Plus or newer for optimal on-device AI performance and real-time detection'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Privacy Protection',
      description: 'All processing happens on your device. No audio recording, no uploads, no tracking, complete privacy'
    },
    {
      icon: SparklesIcon,
      title: 'Latest Features',
      description: 'Requires iOS 18+ to access the newest features including leaderboards, badges, and advanced AI capabilities'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <img
              src="/birdchatter/AppIcon.png"
              alt="Bird Chatter"
              className="w-24 h-24 rounded-2xl shadow-lg mx-auto mb-6"
            />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Download Bird Chatter
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turn your iPhone into a real-time bird identification machine. Tap. Listen. Compete.
            </p>
          </div>

          {/* App Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Bird Chatter</h2>
                <p className="text-lg text-green-600 font-semibold mb-6">Free on the App Store</p>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                Identify 6,500+ birds. Earn points for every detection. Climb the leaderboard.
                Can you be #1 in your county this year?
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Live species detection with points scoring</span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Compete on county, state, country & world leaderboards</span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Top 10 badges, life list tracking & profile stats</span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">100% on-device — no internet, no uploads, total privacy</span>
                </div>
              </div>

              <div className="bg-gray-100 text-gray-600 px-8 py-4 rounded-2xl text-center w-full mb-4">
                <div className="flex items-center justify-center space-x-3">
                  <DevicePhoneMobileIcon className="h-7 w-7" />
                  <div className="text-left">
                    <div className="text-xs">Coming Soon to the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 text-center">
                Free • Coming Soon • iOS 18.0+
              </p>
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
              Make sure your device meets these requirements for the best Bird Chatter experience.
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

            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Get</h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
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
              Understanding the technology behind Bird Chatter and why certain requirements exist.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {systemInfo.map((info, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md text-center">
                <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <info.icon className="h-8 w-8 text-green-600" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h2>
            <p className="text-xl text-gray-600">
              Follow these simple steps to start detecting birds and earning points
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Download from App Store</h3>
                <p className="text-gray-600">Search for "Bird Chatter" in the iOS App Store and download for free.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Grant Permissions</h3>
                <p className="text-gray-600">Allow microphone access for bird detection and location access for improved accuracy.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Listening</h3>
                <p className="text-gray-600">Tap the big green mic button and hold your phone up to detect birds. Watch species and points roll in live!</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How much does Bird Chatter cost?</h3>
              <p className="text-gray-600">Bird Chatter is completely free to download and use. No in-app purchases, no subscriptions, no hidden fees.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Why is iPhone 14 Plus or newer recommended?</h3>
              <p className="text-gray-600">While the app works on iOS 18+ devices, newer iPhones deliver smoother real-time detection and faster on-device AI performance for the best experience.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you collect my birding data?</h3>
              <p className="text-gray-600">Audio stays on your device and is never uploaded. To enable leaderboards, we store your stats (points, species counts, regional location like county/state) and life list in Firebase. You can delete all your data anytime from the Profile page.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Does it work offline?</h3>
              <p className="text-gray-600">Yes! Once downloaded, Bird Chatter works completely offline for bird detection, points, and life list tracking. Leaderboards require internet to sync.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How do leaderboards work?</h3>
              <p className="text-gray-600">Compete against other birders at county, state, country, and world levels. Rankings reset every January 1st. Reach Top 10 to earn badges!</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What's the point system?</h3>
              <p className="text-gray-600">World Lifer = 150 pts, Country Lifer = 100 pts, State Lifer = 75 pts, County Lifer = 50 pts, and even repeat detections earn 10 points each.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Competing?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Download Bird Chatter and turn every birding moment into a competition.
          </p>
          <div className="bg-gray-100 text-gray-600 px-10 py-5 rounded-2xl text-center mx-auto inline-block w-full max-w-md">
            <div className="flex items-center justify-center space-x-3">
              <DevicePhoneMobileIcon className="h-8 w-8" />
              <div className="text-left">
                <div className="text-sm">Coming Soon to the</div>
                <div className="text-xl font-semibold">App Store</div>
              </div>
            </div>
          </div>
          <p className="text-green-200 mt-4 text-sm">
            Free. Download soon from the App Store.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BirdChatterDownload;
