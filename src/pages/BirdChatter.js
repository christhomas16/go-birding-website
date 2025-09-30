import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MicrophoneIcon,
  CpuChipIcon,
  MapPinIcon,
  SparklesIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  TrophyIcon,
  ClockIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const BirdChatter = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const screenshots = [
    '/birdchatter/IMG_0826.PNG',
    '/birdchatter/IMG_0827.PNG',
    '/birdchatter/IMG_0828.PNG',
    '/birdchatter/IMG_0829.PNG',
    '/birdchatter/IMG_0830.PNG',
    '/birdchatter/IMG_0831.PNG'
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
      icon: MicrophoneIcon,
      title: 'Real-Time Bird Detection',
      description: 'One-tap recording with live species identification. See detections appear in real-time as you record with visual feedback and confidence scoring.'
    },
    {
      icon: CpuChipIcon,
      title: 'BirdNET AI Technology',
      description: 'Powered by Cornell Lab\'s BirdNET v2.4 AI with 6,521 species database. All processing happens on-device for complete privacy.'
    },
    {
      icon: MapPinIcon,
      title: 'Location Intelligence',
      description: 'GPS-aware detection uses eBird data to improve accuracy based on your location and time. Track unique birding spots with interactive maps.'
    },
    {
      icon: TrophyIcon,
      title: 'Gamification System',
      description: 'Earn points for species detections, rare finds, and location exploration. Level up with achievements and celebrate milestones with visual effects.'
    },
    {
      icon: ChartBarIcon,
      title: 'Statistics & Analytics',
      description: 'Track lifetime species count, recording history, and rarity statistics. View detection timelines and confidence tracking for every recording.'
    },
    {
      icon: ClockIcon,
      title: 'Recording Management',
      description: 'Complete history with metadata, playback, search, and filtering. Organize by date, species count, or location with bulk management options.'
    },
    {
      icon: SparklesIcon,
      title: '11-Language Support',
      description: 'Species names displayed in English, German, French, Spanish, Portuguese, Dutch, Italian, Japanese, Korean, or Chinese with scientific names.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Privacy First',
      description: 'On-device AI processing means recordings stay private. No internet required for core functionality, optional location services.'
    }
  ];

  const highlights = [
    {
      stat: '6,521',
      label: 'Bird Species Database'
    },
    {
      stat: '48kHz',
      label: 'High-Quality Audio'
    },
    {
      stat: '11',
      label: 'Languages Supported'
    },
    {
      stat: '100%',
      label: 'Privacy Protected'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Identify Birds
                <span className="text-green-600 block">In Real Time</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Bird Chatter uses Cornell Lab's BirdNET AI to identify bird species from their sounds in real-time.
                Record, detect, and track over 6,500 species worldwide with on-device processing for complete privacy.
                Gamified experience with points, levels, and achievements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleNavigation('/download')}
                  className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl text-center"
                >
                  Download for iOS
                </button>
                <button
                  onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors duration-200 text-center"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                {/* Carousel Container */}
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                  {/* Screenshots */}
                  <div className="relative aspect-[9/19.5]">
                    {screenshots.map((screenshot, index) => (
                      <img
                        key={index}
                        src={screenshot}
                        alt={`Bird Chatter Screenshot ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
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
                            ? 'bg-green-600 w-8'
                            : 'bg-white/60 hover:bg-white/80'
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
                <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">{item.stat}</div>
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
              How Bird Chatter Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to start identifying birds by sound
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tap to Record</h3>
              <p className="text-gray-600">
                Open the app and tap the record button. Bird Chatter begins capturing high-quality 48kHz audio and displays a live waveform.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Watch Live Detections</h3>
              <p className="text-gray-600">
                Species appear in real-time as Bird Chatter analyzes 3-second audio chunks. Orange icons show preliminary detections, green checkmarks confirm species.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Review & Track</h3>
              <p className="text-gray-600">
                View complete recording history, earn points for discoveries, level up, unlock achievements, and build your personal birding statistics.
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
              Powerful Features for Bird Enthusiasts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to identify, track, and learn about birds through their sounds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-200">
                <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gamification Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Level Up Your Birding Experience
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Bird Chatter transforms bird identification into an engaging adventure. Earn points for every species detected,
                with bonus points for rare finds and location exploration. Watch your level rise as you discover more species,
                unlock achievements, and become a birding master.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4 flex-shrink-0">
                    <TrophyIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Progressive Leveling System</h4>
                    <p className="text-gray-600">Level up as you earn points, with clear progress bars showing your advancement</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4 flex-shrink-0">
                    <SparklesIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Visual Celebrations</h4>
                    <p className="text-gray-600">Floating points animations and particle effects celebrate your discoveries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4 flex-shrink-0">
                    <ChartBarIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Achievement System</h4>
                    <p className="text-gray-600">Unlock 9+ achievements from First Bird to Master birder status</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Point System</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-gray-700">Species Detection</span>
                  <span className="text-green-600 font-semibold">+50 points</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-gray-700">Ultra-Rare Find (90%+)</span>
                  <span className="text-yellow-600 font-semibold">+45 points</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-gray-700">Very Rare Find (80-90%)</span>
                  <span className="text-orange-600 font-semibold">+35 points</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-gray-700">Rare Find (70-80%)</span>
                  <span className="text-red-600 font-semibold">+25 points</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-gray-700">New Location Explorer</span>
                  <span className="text-blue-600 font-semibold">+100 points</span>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <span className="text-gray-700">Confirmation Bonus</span>
                  <span className="text-green-600 font-semibold">+10 points</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Powered by Cornell Lab Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bird Chatter uses BirdNET v2.4, the state-of-the-art AI model developed by the Cornell Lab of Ornithology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Advanced AI Processing</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>48kHz professional-grade audio recording</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>FP32 TensorFlow Lite model for high precision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Real-time processing with 3-second audio chunks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Temporal smoothing for enhanced accuracy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Confidence scoring for every detection</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Location Intelligence</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>eBird data integration for regional accuracy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Location-based species filtering removes unlikely matches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>GPS tracking with distance traveled calculations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Interactive map view of recording locations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Adaptive filtering optimized for rare species discovery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Start Identifying Birds Today
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join the community of birders discovering and tracking species with Bird Chatter's real-time AI identification.
          </p>
          <button
            onClick={() => handleNavigation('/download')}
            className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
          >
            Download Now
          </button>
          <p className="text-green-200 mt-4 text-sm">
            Free download. Coming soon to the App Store. Requires iOS device with microphone access.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BirdChatter;