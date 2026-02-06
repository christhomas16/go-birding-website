import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  QuestionMarkCircleIcon,
  EnvelopeIcon,
  ArrowLeftIcon,
  MicrophoneIcon,
  MapPinIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const GoBirdingAISupport = () => {
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

  const quickLinks = [
    {
      icon: QuestionMarkCircleIcon,
      title: 'Browse FAQ',
      description: 'Find answers to common questions',
      action: () => window.scrollTo({ top: 800, behavior: 'smooth' })
    },
    {
      icon: EnvelopeIcon,
      title: 'Contact Support',
      description: 'Email our support team',
      action: () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    },
    {
      icon: ArrowLeftIcon,
      title: 'Go Birding AI',
      description: 'Back to app overview',
      action: () => handleNavigation('/go-birding-ai')
    }
  ];

  const faqs = {
    gettingStarted: [
      {
        question: 'How much does Go Birding AI cost?',
        answer: 'Go Birding AI is available for a one-time fee of $1.99 in the App Store. No subscription fees or in-app purchases required.'
      },
      {
        question: 'What are the system requirements?',
        answer: 'Go Birding AI requires iOS 18.0 or later. For the best experience, we recommend iPhone 11 or newer. You\'ll need to grant microphone access for voice search and location access for location-based recommendations.'
      },
      {
        question: 'Why is iPhone 11 or newer recommended?',
        answer: 'While the app works on iOS 18+ devices, newer iPhones deliver the smoothest voice recognition and fastest on-device AI responses.'
      },
      {
        question: 'How do I get started?',
        answer: 'Download Go Birding AI from the App Store, grant location and microphone permissions, then tap the microphone and speak your first birding query to discover amazing locations!'
      }
    ],
    usingTheApp: [
      {
        question: 'How does the interactive map work?',
        answer: 'The interactive map shows all 19,200+ birding hotspots with your current location. You can tap any hotspot pin to view details, filter by county, show only favorites, and sort by distance. The map automatically centers on your location and updates as you move.'
      },
      {
        question: 'How does voice search work?',
        answer: 'Tap the microphone button and speak naturally. You can say things like "Find me spots with a lighthouse", "Show me locations in Ocean County", or "Where can I find shorebirds nearby?" The AI understands natural language and finds relevant locations.'
      },
      {
        question: 'Which areas are covered?',
        answer: 'We cover over 19,200 birding locations across all 50 US states and 7 Canadian provinces, with continuous updates and additions based on user feedback and eBird data.'
      },
      {
        question: 'Can I save favorite locations?',
        answer: 'Yes! Tap the heart icon on any location to save it to your favorites. Access them anytime from the favorites tab without needing to search again.'
      }
    ],
    technical: [
      {
        question: 'How big is the AI model download?',
        answer: 'Approximately 332 MB. The download begins only with your explicit consent.'
      },
      {
        question: 'Does it work on older devices?',
        answer: 'Yes. Older devices automatically use a lighter fallback for explanations to maintain stability.'
      },
      {
        question: 'Do you collect my birding data?',
        answer: 'No. All AI processing happens entirely on your device. We don\'t collect, store, or transmit any of your searches, locations, or usage data.'
      },
      {
        question: 'Does it work offline?',
        answer: 'Yes! Once the AI model is downloaded, voice search and location browsing work completely offline. Weather data requires an internet connection.'
      }
    ]
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img
              src="/logo.png"
              alt="Go Birding AI"
              className="w-24 h-24 rounded-2xl shadow-lg mx-auto mb-6"
            />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Go Birding AI
              <span className="text-primary-600 block">Support</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get help with features, troubleshooting, and contact information.
              Find answers to common questions or reach out to our support team.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickLinks.map((link, index) => (
              <button
                key={index}
                onClick={link.action}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-200 text-left hover:bg-primary-50 group"
              >
                <div className="bg-primary-100 p-3 rounded-lg inline-block mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                  <link.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-gray-600">{link.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-primary-100 p-4 rounded-full w-fit mx-auto mb-6">
              <QuestionMarkCircleIcon className="h-8 w-8 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about using Go Birding AI
            </p>
          </div>

          {/* Getting Started */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              Getting Started
            </h3>
            <div className="space-y-6">
              {faqs.gettingStarted.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Using the App */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              Using Go Birding AI
            </h3>
            <div className="space-y-6">
              {faqs.usingTheApp.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical & Privacy */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
              Technical & Privacy
            </h3>
            <div className="space-y-6">
              {faqs.technical.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues Guide */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-primary-100 p-4 rounded-full w-fit mx-auto mb-6">
              <WrenchScrewdriverIcon className="h-8 w-8 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Issues & Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick fixes for the most common problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-primary-100 p-3 rounded-lg inline-block mb-4">
                <MicrophoneIcon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Voice Search Issues</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Check Settings > Privacy > Microphone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Speak clearly and naturally</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Restart the app if needed</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-primary-100 p-3 rounded-lg inline-block mb-4">
                <MapPinIcon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Map Issues</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Enable location services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Check internet connection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Zoom in to see more pins</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-primary-100 p-3 rounded-lg inline-block mb-4">
                <CpuChipIcon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Model Issues</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Ensure model download completed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Check available storage (2GB+)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Restart app after download</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-primary-100 p-3 rounded-lg inline-block mb-4">
                <ShieldCheckIcon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy Questions</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>All AI processing is on-device</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>No data collection or tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Works completely offline</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-primary-100 p-3 rounded-lg inline-block mb-4">
                <QuestionMarkCircleIcon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Results</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Try different search terms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Broaden your search area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Use natural language queries</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-primary-100 p-3 rounded-lg inline-block mb-4">
                <EnvelopeIcon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Still Need Help?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <button
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className="text-primary-600 font-semibold hover:underline text-sm"
              >
                Contact Support →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-primary-600 p-4 rounded-full w-fit mx-auto mb-6">
            <EnvelopeIcon className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Can't find the answer you're looking for? Our support team is here to help.
            We typically respond within 24-48 hours.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <a
              href="mailto:support@gobirding.ai"
              className="text-primary-400 text-xl font-semibold hover:text-primary-300 transition-colors duration-200"
            >
              support@gobirding.ai
            </a>
            <p className="text-sm text-gray-400 max-w-2xl">
              Please include details about your issue: device model, iOS version, and steps to reproduce the problem.
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              Visit{' '}
              <button
                onClick={() => handleNavigation('/go-birding-ai')}
                className="text-primary-400 hover:text-primary-300 font-semibold"
              >
                Go Birding AI
              </button>
              {' '}for app information or{' '}
              <button
                onClick={() => handleNavigation('/download')}
                className="text-primary-400 hover:text-primary-300 font-semibold"
              >
                Download
              </button>
              {' '}to get the app
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoBirdingAISupport;
