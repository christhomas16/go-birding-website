import React from 'react';
import { 
  MicrophoneIcon, 
  CpuChipIcon, 
  MapPinIcon, 
  CloudIcon,
  HeartIcon,
  DevicePhoneMobileIcon,
  SpeakerWaveIcon,
  ShieldCheckIcon,
  MagnifyingGlassIcon,
  MapIcon
} from '@heroicons/react/24/outline';

const Features = () => {
  const coreFeatures = [
    {
      icon: MicrophoneIcon,
      title: 'Voice-Powered Search',
      description: 'Natural voice commands make finding birding spots effortless',
      details: [
        'Simply speak your birding needs in natural language',
        'Real-time transcription shows your words as you speak',
        'Hands-free operation perfect for field use',
        'Works with phrases like "Find lighthouse spots" or "Ocean County locations"'
      ]
    },
    {
      icon: CpuChipIcon,
      title: 'Advanced AI Intelligence',
      description: 'MLX-optimized AI running entirely on your device',
      details: [
        'MLX-optimized on-device AI model',
        'Complete privacy - no data sent to external servers',
        'Smart recommendations based on your search criteria',
        'AI explains why each location matches your needs',
        'Response Style presets: Accurate or Creative'
      ]
    },
    {
      icon: MapPinIcon,
      title: 'Comprehensive Location Database',
      description: 'Over 19,200 carefully curated birding hotspots',
      details: [
        'Covers all 50 US states and 7 Canadian provinces with comprehensive birding locations',
        'Rich details including species counts and habitat info',
        'Direct eBird integration for recent data',
        'Smart state/province detection based on your location',
        'GeoJSON-based region detection for precise state/province mapping'
      ]
    }
  ];

  const smartFeatures = [
    {
      icon: MagnifyingGlassIcon,
      title: 'Intelligent Search & Ranking',
      description: 'Multi-factor scoring finds the perfect spots',
      details: [
        'Proximity detection for nearby locations',
        'County-aware filtering for specific regions',
        'Combines relevance, distance, and species diversity',
        'Handles specialized queries like wetlands or migration spots'
      ]
    },
    {
      icon: CloudIcon,
      title: 'Weather & Conditions',
      description: 'Real-time data for optimal birding timing',
      details: [
        'Current weather conditions and hourly forecasts',
        'Wind speed and direction crucial for birding',
        'Sunrise and sunset times for perfect timing',
        'Tide predictions for coastal locations',
        'Coastal proximity awareness with low-tide prioritization',
        'Weather-aware AI recommendations'
      ]
    },
    {
      icon: HeartIcon,
      title: 'Personal Favorites System',
      description: 'Save and organize your favorite spots',
      details: [
        'Heart icon to instantly save locations',
        'Quick access without searching',
        'Complete location information preserved',
        'Easy management with swipe-to-delete'
      ]
    },
    {
      icon: MapPinIcon,
      title: 'Smart Location Detection',
      description: 'Automatic state/province detection with GPS and GeoJSON boundaries',
      details: [
        'Auto-detects your state/province using GPS and precise polygon boundaries',
        'Uses accurate GeoJSON data instead of simple bounding boxes',
        'Manual override option for your preferred region',
        'Continuously monitors location changes for automatic switching'
      ]
    }
  ];

  const experienceFeatures = [
    {
      icon: DevicePhoneMobileIcon,
      title: 'Beautiful Modern Interface',
      description: 'Intuitive SwiftUI design optimized for iOS 18+',
      details: [
        'Clean, modern interface that\'s easy to navigate',
        'Dynamic results with personalized query titles',
        'Beautiful location cards with key information',
        'Expandable details for comprehensive data'
      ]
    },
    {
      icon: SpeakerWaveIcon,
      title: 'Enhanced Voice Experience',
      description: 'Natural-sounding text-to-speech capabilities',
      details: [
        'Listen to AI explanations with quality voices',
        'Choose between male and female voice options',
        'Adjustable speech rate and pitch settings',
        'Premium voice support for enhanced quality'
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: 'Privacy-First Design',
      description: 'Your data stays completely on your device with full offline capability',
      details: [
        'No data sharing or external server communication',
        'All AI processing happens locally on your device',
        'No tracking or analytics collection',
        'Complete control over your birding data'
      ]
    }
  ];

  const workflow = [
    {
      step: 1,
      title: 'Speak Your Need',
      description: 'Tap the microphone and describe what you\'re looking for in natural language'
    },
    {
      step: 2,
      title: 'AI Analysis',
      description: 'The app intelligently searches over 19,200 locations using your criteria'
    },
    {
      step: 3,
      title: 'Smart Ranking',
      description: 'Results are ranked by relevance, distance, and species diversity'
    },
    {
      step: 4,
      title: 'Voice Explanation',
      description: 'Listen to why the top location is perfect for your query'
    },
    {
      step: 5,
      title: 'Explore & Save',
      description: 'Tap for details, get directions, and save favorites'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="text-primary-600 block">Modern Birders</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why GoBirding AI is the most advanced birding companion available, 
            with cutting-edge AI technology and intuitive design.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Core Features</h2>
          <div className="space-y-16">
            {coreFeatures.map((feature, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-100 p-4 rounded-xl">
                      <feature.icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 mt-1">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-gray-100 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img 
                    src={index === 0 ? "/voice-search.jpg" : index === 1 ? "/advanced-ai.jpg" : "/location-database.jpg"}
                    alt={feature.title}
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Hotspot Map Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Interactive Hotspot Map</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore birding locations visually with our comprehensive interactive map featuring real-time location tracking and intelligent filtering.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-4 rounded-xl">
                  <MapIcon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold text-gray-900">Visual Location Discovery</h3>
                  <p className="text-gray-600 mt-1">Browse all 19,200+ birding hotspots on an interactive map</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Real-Time Location Tracking</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Shows your current position with automatic map centering</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Continuously updates as you move to new areas</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Automatically zooms to fit nearby hotspots</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Interactive Hotspot Selection</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Tap any hotspot pin to view detailed information</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Map automatically centers on selected locations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Bidirectional sync between map pins and location list</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Smart Filtering & Sorting</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Filter hotspots by specific counties</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Show only your favorite locations on the map</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Sort locations by distance from your current position</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-8">
              <img 
                src="/location-database.jpg"
                alt="Interactive Hotspot Map - Browse birding locations visually"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Smart Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Smart Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {smartFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="bg-primary-100 p-4 rounded-xl w-fit mb-6">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">User Experience</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {experienceFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 p-6 rounded-full w-fit mx-auto mb-6">
                  <feature.icon className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2 text-left">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-primary-100">
              Five simple steps to discover your perfect birding location
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {workflow.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white text-primary-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-primary-100 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Technical Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">System Requirements</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• iOS 18.0 or later</li>
                <li>• iPhone 11 or newer for optimal on-device AI performance</li>
                <li>• Location Services enabled</li>
                <li>• Microphone access for voice commands</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Over 19,200 curated birding locations</li>
                <li>• Complete privacy protection</li>
                <li>• All 50 US states and 7 Canadian provinces coverage</li>
                <li>• Real-time weather integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features; 