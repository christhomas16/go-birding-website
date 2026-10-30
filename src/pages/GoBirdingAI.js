import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MapPinIcon,
  SparklesIcon,
  ClockIcon,
  MicrophoneIcon,
  MapIcon,
  CloudIcon,
  HeartIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  EyeIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const APP_STORE_URL = 'https://apps.apple.com/us/app/go-birding-ai/id6747407940';

const GoBirdingAI = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const screenshots = [
    { src: '/go-birding-ai-assets/S1.png?v=1', alt: 'Go Birding AI home: good birding spots near you right now, each with one reason' },
    { src: '/go-birding-ai-assets/S2.png?v=1', alt: 'Go Birding AI search for "beaches near me" with ranked hotspots and a guide summary' },
    { src: '/go-birding-ai-assets/S3.png?v=1', alt: 'Go Birding AI hotspot page: rare this week and birds recently reported here' },
    { src: '/go-birding-ai-assets/S4.png?v=1', alt: 'Go Birding AI rare bird alerts near you, newest first' },
    { src: '/go-birding-ai-assets/S5.png?v=1', alt: 'Go Birding AI map of birding hotspots' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const features = [
    {
      icon: MapPinIcon,
      title: 'Good Spots Right Now',
      description: 'Home opens with a short list of hotspots worth going to today, ranked by distance, species, fresh rarities and your saved spots, each with one clear reason.'
    },
    {
      icon: SparklesIcon,
      title: 'Rare Bird Alerts',
      description: 'Rare and notable sightings near you, newest first, with how long ago and how far. Unreviewed reports are marked "Unconfirmed."'
    },
    {
      icon: ClockIcon,
      title: 'What\'s Here This Week',
      description: 'Every hotspot page shows the birds reported there in the last week, its rarities, and what usually occurs each season.'
    },
    {
      icon: MicrophoneIcon,
      title: 'Just Ask',
      description: 'Speak or type the way you\'d ask a friend: "beaches near me," "warblers in May," "owls near Cape May."'
    },
    {
      icon: MapIcon,
      title: 'Every Hotspot, One Map',
      description: '19,200+ hotspots across all 50 US states and 7 Canadian provinces, built into the app. Search the map by species.'
    },
    {
      icon: CloudIcon,
      title: 'Wind and Tides',
      description: 'Weather, hourly forecast, sunrise and sunset, and 48-hour tides, with daylight lows marked as best for shorebirds.'
    },
    {
      icon: HeartIcon,
      title: 'Saved Spots',
      description: 'Save your favorite hotspots. They show on the map with one tap and get a boost in your picks for the day.'
    },
    {
      icon: CpuChipIcon,
      title: 'On-Device AI Guide',
      description: 'A guide that explains the top pick in plain language, running entirely on your iPhone. It speaks only when you ask.'
    }
  ];

  const highlights = [
    { stat: '19,200+', label: 'Birding Hotspots' },
    { stat: '57', label: 'States & Provinces' },
    { stat: 'Live', label: 'Rare Bird Reports' },
    { stat: '0', label: 'Ads, Accounts or Tracking' }
  ];

  const AppStoreButton = ({ light }) => (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Go Birding AI on the App Store"
      className={`${light ? 'bg-white text-gb-forest hover:bg-gray-100' : 'bg-gb-forest text-white hover:bg-gb-deep'} px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl text-center inline-block`}
    >
      Download on the App Store
    </a>
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gb-mist to-orange-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <img
                  src="/go-birding-ai-assets/AppIcon.png?v=1"
                  alt="Go Birding AI"
                  className="w-16 h-16 rounded-2xl shadow-md mr-4"
                />
                <span className="text-2xl font-bold text-gray-900">Go Birding AI</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Where Should You
                <span className="text-gb-rust block">Go Birding Today?</span>
              </h1>
              <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                Go Birding AI answers the moment you open it: the best hotspots near you right now, ranked by distance, species, and fresh rare-bird reports.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ask for anything else by voice or text. 19,200+ hotspots are built in, and the AI guide runs entirely on your iPhone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <AppStoreButton />
                <button
                  onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                  className="border-2 border-gb-forest text-gb-forest px-8 py-4 rounded-full text-lg font-semibold hover:bg-gb-mist transition-colors duration-200 text-center"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                {/* Carousel Container */}
                <div className="relative bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
                  {/* Screenshots */}
                  <div className="relative aspect-[9/19.5]">
                    {screenshots.map((screenshot, index) => (
                      <img
                        key={index}
                        src={screenshot.src}
                        alt={screenshot.alt}
                        className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
                          index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeftIcon className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                    aria-label="Next screenshot"
                  >
                    <ChevronRightIcon className="h-6 w-6" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {screenshots.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentSlide
                            ? 'bg-gb-orange w-8'
                            : 'bg-gray-400/70 hover:bg-gray-500/80'
                        }`}
                        aria-label={`Go to screenshot ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gb-forest mb-2">{item.stat}</div>
                <div className="text-gray-600 text-sm lg:text-base">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Go Birding AI Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From "where should I go?" to the trailhead in three steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-gb-mist w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-gb-forest">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Open the App</h3>
              <p className="text-gray-600">
                Home shows good spots near you right now, plus one line for today's conditions and rare birds nearby.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-gb-mist w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-gb-forest">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ask for More</h3>
              <p className="text-gray-600">
                Want something specific? Say or type "shorebirds near me" or "birding in Princeton" and get ranked hotspots.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-gb-mist w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-gb-forest">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Go Birding</h3>
              <p className="text-gray-600">
                Open a hotspot to see what's been reported this week, check the tide, then tap Directions and head out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Pick a Spot
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Places first, with the birds, rarities and conditions that make them worth the trip
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-200">
                <div className="bg-gb-mist p-3 rounded-lg inline-block mb-4">
                  <feature.icon className="h-6 w-6 text-gb-forest" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotspot Pages Section */}
      <section className="py-24 bg-gradient-to-br from-gb-mist to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Know What's There Before You Go
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Every hotspot page leads with the birds: what's rare there this week and what birders have reported,
                straight from eBird.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-lg mr-4 flex-shrink-0">
                    <SparklesIcon className="h-6 w-6 text-gb-rust" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Rare This Week</h4>
                    <p className="text-gray-600">Notable birds reported at the hotspot, with when and how many.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-lg mr-4 flex-shrink-0">
                    <ClockIcon className="h-6 w-6 text-gb-forest" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Recently Reported Here</h4>
                    <p className="text-gray-600">Every species seen there in the last seven days, newest first.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-lg mr-4 flex-shrink-0">
                    <EyeIcon className="h-6 w-6 text-gb-forest" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Species by Season</h4>
                    <p className="text-gray-600">What usually turns up in spring, summer, fall and winter, and how often.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">On Every Hotspot</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gb-forest mr-2 font-bold">&#10003;</span>
                  <span>Directions in Apple Maps with one tap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gb-forest mr-2 font-bold">&#10003;</span>
                  <span>Open the hotspot, checklists and bar charts in eBird</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gb-forest mr-2 font-bold">&#10003;</span>
                  <span>Habitat, access, parking and birding tips where available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gb-forest mr-2 font-bold">&#10003;</span>
                  <span>Total species recorded</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gb-forest mr-2 font-bold">&#10003;</span>
                  <span>Save it for next time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Extras Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Made for the Field
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A native iPhone app that respects your time and your privacy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-gb-mist p-4 rounded-full w-fit mx-auto mb-6">
                <MicrophoneIcon className="h-8 w-8 text-gb-forest" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hands-Free</h3>
              <p className="text-gray-600 leading-relaxed">
                Voice search for when your hands are full of binoculars, and a guide that reads results aloud only when you ask, with a big Stop button.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-gb-mist p-4 rounded-full w-fit mx-auto mb-6">
                <EyeIcon className="h-8 w-8 text-gb-forest" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Easy to Read</h3>
              <p className="text-gray-600 leading-relaxed">
                Large, high-contrast text in light or dark mode, Dynamic Type and VoiceOver support, and metric units in Canada.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-gb-mist p-4 rounded-full w-fit mx-auto mb-6">
                <ShieldCheckIcon className="h-8 w-8 text-gb-forest" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Private by Design</h3>
              <p className="text-gray-600 leading-relaxed">
                No account, no ads, no analytics. The AI runs on your iPhone, and we don't collect your data.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500 text-center mt-12 max-w-3xl mx-auto">
            Sighting data from eBird, a project of the Cornell Lab of Ornithology. Go Birding AI is an independent app and is not
            affiliated with or endorsed by the Cornell Lab of Ornithology or eBird.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gb-forest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Find Your Next Morning Out.
          </h2>
          <p className="text-xl text-gb-sage mb-8">
            Go Birding AI turns 19,200+ hotspots and live rare-bird reports into a short list of places worth going today.
          </p>
          <AppStoreButton light />
          <p className="text-gb-sage mt-4 text-sm">
            $1.99, one time, no subscription. Requires iOS 18.0 or later. iPhone 15 or newer recommended for the AI guide.
          </p>
          <p className="text-gb-sage mt-6 text-base">
            Need help? Visit our{' '}
            <button
              onClick={() => handleNavigation('/go-birding-ai/support')}
              className="text-white font-semibold hover:underline"
            >
              Support Page
            </button>
            {' '}or read the{' '}
            <button
              onClick={() => handleNavigation('/go-birding-ai/privacy')}
              className="text-white font-semibold hover:underline"
            >
              Privacy Policy
            </button>
          </p>
        </div>
      </section>
    </div>
  );
};

export default GoBirdingAI;
