import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  QuestionMarkCircleIcon,
  EnvelopeIcon,
  ArrowLeftIcon,
  MicrophoneIcon,
  MapPinIcon,
  TrophyIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const BirdChatterSupport = () => {
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
      title: 'Bird Chatter',
      description: 'Back to app overview',
      action: () => handleNavigation('/bird-chatter')
    }
  ];

  const faqs = {
    gettingStarted: [
      {
        question: 'How do I download Bird Chatter?',
        answer: 'Bird Chatter is available for free on the iOS App Store. Search for "Bird Chatter" or visit our Download page. The app requires iOS 18.0 or later and works best on iPhone 14 Plus or newer devices.'
      },
      {
        question: 'What are the system requirements?',
        answer: 'Bird Chatter requires iOS 18.0 or later. For the best experience, we recommend iPhone 14 Plus or newer. You\'ll need to grant microphone access for bird detection and location access for improved accuracy.'
      },
      {
        question: 'How do I start detecting birds?',
        answer: 'Tap the big green microphone button on the main screen. Hold your phone up toward the birds and wait for detections to appear. Species names and points will roll in live on screen as birds are identified.'
      },
      {
        question: 'Do I need to create an account?',
        answer: 'To participate in leaderboards, you need to sign in with Google or Apple. All bird detection works offline without an account, but signing in lets you compete on leaderboards and sync your stats across devices via Firebase.'
      },
      {
        question: 'How much does Bird Chatter cost?',
        answer: 'Bird Chatter is completely free to download and use. There are no in-app purchases, subscriptions, or hidden fees. All features are available to everyone at no cost.'
      }
    ],
    usingTheApp: [
      {
        question: 'What do the different point values mean?',
        answer: 'Points are awarded based on how rare a detection is for you: World Lifer (first time ever) = 50-100 points plus rarity bonus, Country Lifer = 25-50 points, State Lifer = 10-25 points, County Lifer = 5-10 points, Year Lifer = 10 bonus points, and Repeat detections = 1 point minimum. Rare species earn additional points based on their regional occurrence probability.'
      },
      {
        question: 'How do leaderboards work?',
        answer: 'Leaderboards rank you against other birders at four levels: County, State, Country, and World. Rankings are based on total points earned. Each level has both all-time and yearly leaderboards, with yearly boards resetting every January 1st. Your stats sync online via Firebase when you have an internet connection.'
      },
      {
        question: 'What are Top 10 badges?',
        answer: 'If you reach the Top 10 at any geographic level (county, state, country, or world), you automatically earn a badge. Badges are awarded separately for both total observations and species diversity.'
      },
      {
        question: 'How do I view my life list?',
        answer: 'Tap the Life List icon in the app. You can filter by world, country, state, or county, view by year or all time, and sort by most recent, first seen, or taxonomic order. Use the search bar to find specific species.'
      },
      {
        question: 'Can I see what birds others are detecting?',
        answer: 'No. Bird Chatter is 100% private. You can see leaderboard rankings and your own position, but you cannot see other users\' specific detections, locations, or activity. Privacy is fundamental to how we built the app.'
      },
      {
        question: 'How many species can Bird Chatter identify?',
        answer: 'Bird Chatter can identify over 6,500 bird species from around the world using advanced on-device AI. The AI model is trained to recognize bird calls and songs across a wide variety of species.'
      },
      {
        question: 'What languages are supported?',
        answer: 'Bird Chatter displays species names in 11 languages: English, German, French, Spanish, Portuguese, Dutch, Italian, Japanese, Korean, Chinese (Simplified), and Chinese (Traditional).'
      }
    ],
    technical: [
      {
        question: 'Why does Bird Chatter need microphone access?',
        answer: 'Microphone access is required to record bird sounds for identification. All audio processing happens entirely on your device using on-device AI. Audio recordings are stored locally on your device and are never uploaded to any server.'
      },
      {
        question: 'Why does Bird Chatter need location access?',
        answer: 'Location access improves accuracy by narrowing the 6,500 possible species to those actually found in your area. This dramatically increases identification accuracy. Your location is never uploaded or shared.'
      },
      {
        question: 'Is my data private?',
        answer: 'Audio processing is completely private and happens entirely on your device. Audio recordings stay on your device and are never uploaded. Your leaderboard stats (points, species counts, location region) and life list are stored in Firebase to enable online leaderboards. You can delete all your online data anytime from the Profile page in the app.'
      },
      {
        question: 'Does Bird Chatter work offline?',
        answer: 'Yes! Once you\'ve downloaded the app and the AI model, Bird Chatter works completely offline. No internet connection is required for bird detection, points, or life list tracking. Leaderboards require an internet connection to sync.'
      },
      {
        question: 'How accurate is the AI?',
        answer: 'Bird Chatter uses a state-of-the-art AI model trained on millions of bird sounds. Accuracy improves with location services enabled (narrows species to your area) and in good recording conditions (quiet environment, clear bird songs).'
      }
    ],
    troubleshooting: [
      {
        question: 'The microphone isn\'t working. What should I do?',
        answer: 'Go to iPhone Settings > Privacy & Security > Microphone, and ensure Bird Chatter is enabled. If already enabled, try restarting the app. If the issue persists, restart your iPhone.'
      },
      {
        question: 'No species are being detected. Why?',
        answer: 'Make sure you\'re in an area with bird activity and that the environment isn\'t too noisy. Enable location services for improved accuracy. Try moving closer to the birds or waiting for them to vocalize more clearly.'
      },
      {
        question: 'The detections seem inaccurate. How can I improve accuracy?',
        answer: 'Enable location services to narrow species to your region. Ensure you\'re in a quiet environment with minimal background noise. Get closer to the birds if possible. Some species have similar calls and may occasionally be confused.'
      },
      {
        question: 'My leaderboard rank isn\'t updating.',
        answer: 'Leaderboard syncing requires an internet connection. Make sure you\'re connected to Wi-Fi or cellular data. Rankings typically update within a few minutes but may take longer during high-traffic periods.'
      },
      {
        question: 'The app is crashing or freezing.',
        answer: 'Try force-quitting the app and relaunching it. Ensure your iPhone is running the latest iOS version. Restart your device if the issue persists. If problems continue, contact our support team.'
      },
      {
        question: 'My points or life list seem incorrect.',
        answer: 'If you use multiple devices with iCloud sync enabled, it may take a few moments for data to sync. Ensure you\'re signed in with the same Apple ID on all devices. Contact support if discrepancies persist.'
      }
    ]
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img
              src="/birdchatter/AppIcon.png"
              alt="Bird Chatter"
              className="w-24 h-24 rounded-2xl shadow-lg mx-auto mb-6"
            />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Bird Chatter
              <span className="text-green-600 block">Support</span>
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
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-200 text-left hover:bg-green-50 group"
              >
                <div className="bg-green-100 p-3 rounded-lg inline-block mb-4 group-hover:bg-green-200 transition-colors duration-200">
                  <link.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-gray-600">{link.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Getting Started */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
              <QuestionMarkCircleIcon className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about using Bird Chatter
            </p>
          </div>

          {/* Getting Started */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
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
              <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              Using Bird Chatter
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
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
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

          {/* Troubleshooting */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
              Troubleshooting
            </h3>
            <div className="space-y-6">
              {faqs.troubleshooting.map((faq, index) => (
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
            <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
              <WrenchScrewdriverIcon className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Issues & Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick fixes for the most common problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <MicrophoneIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Microphone Issues</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Check Settings > Privacy > Microphone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Restart the app</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Restart your iPhone</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <MapPinIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Low Accuracy</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Enable location services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Reduce background noise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Move closer to the birds</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <TrophyIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Leaderboard Sync</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Check internet connection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Wait a few minutes for sync</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Verify same Apple ID on all devices</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <ShieldCheckIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy Questions</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>All AI processing is on-device</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Audio stays on your device</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Delete data anytime from Profile</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <QuestionMarkCircleIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Detections</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Ensure birds are actively vocalizing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Reduce wind and traffic noise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Try during dawn or dusk hours</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <EnvelopeIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Still Need Help?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <button
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className="text-green-600 font-semibold hover:underline text-sm"
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
          <div className="bg-green-600 p-4 rounded-full w-fit mx-auto mb-6">
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
              className="text-green-400 text-xl font-semibold hover:text-green-300 transition-colors duration-200"
            >
              support@gobirding.ai
            </a>
            <p className="text-sm text-gray-400 max-w-2xl">
              Please include details about your issue: device model, iOS version, and steps to reproduce the problem.
              For leaderboard or account issues, include your Apple ID email.
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              Visit{' '}
              <button
                onClick={() => handleNavigation('/bird-chatter')}
                className="text-green-400 hover:text-green-300 font-semibold"
              >
                Bird Chatter
              </button>
              {' '}for app information or{' '}
              <button
                onClick={() => handleNavigation('/bird-chatter/download')}
                className="text-green-400 hover:text-green-300 font-semibold"
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

export default BirdChatterSupport;
