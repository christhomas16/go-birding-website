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
  GlobeAltIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ListBulletIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const BirdChatter = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const screenshots = [
    '/birdchatter/S1.png',
    '/birdchatter/S2.png',
    '/birdchatter/S3.png',
    '/birdchatter/S4.png',
    '/birdchatter/S5.png'
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
      title: 'Real-Time Detection',
      description: 'Hit the big green mic and watch species names and points roll in live on screen. Every sound is a score.'
    },
    {
      icon: CpuChipIcon,
      title: 'On-Device AI',
      description: 'Identifies 6,500+ species using advanced AI. All processing happens on-device — no internet required.'
    },
    {
      icon: TrophyIcon,
      title: 'Leaderboard Rankings',
      description: 'Compete against other birders at county, state, country, and world levels. Yearly resets keep the race fresh.'
    },
    {
      icon: SparklesIcon,
      title: 'Lifer Bonuses',
      description: 'World Lifer = 150 pts. Country Lifer = 100 pts. State = 75. County = 50. Even repeats earn 10 points each.'
    },
    {
      icon: ChartBarIcon,
      title: 'Badges & Recognition',
      description: 'Break into the Top 10 at any geographic level and earn badges for species diversity and total observations.'
    },
    {
      icon: ListBulletIcon,
      title: 'Life List Tracking',
      description: 'Every species is logged with date and location. Filter by year, location, or taxonomic order. Search by name.'
    },
    {
      icon: GlobeAltIcon,
      title: '11 Languages',
      description: 'Species names in English, German, French, Spanish, Portuguese, Dutch, Italian, Japanese, Korean, Chinese, and more.'
    },
    {
      icon: ShieldCheckIcon,
      title: '100% On-Device',
      description: 'No cloud, no uploads, total privacy. GPS narrows 6,500 species to what\'s near you for better accuracy.'
    }
  ];

  const highlights = [
    {
      stat: '6,500+',
      label: 'Bird Species'
    },
    {
      stat: '4',
      label: 'Leaderboard Levels'
    },
    {
      stat: '11',
      label: 'Languages'
    },
    {
      stat: '100%',
      label: 'On-Device Privacy'
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
                Tap. Listen.
                <span className="text-green-600 block">Compete.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                Bird Chatter turns your iPhone into a real-time bird identification machine — powered by on-device AI, running entirely on your device.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Identify 6,500+ species. Earn points for every bird. Climb the leaderboard. Can you be #1 in your county this year?
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
              Three simple steps to start competing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Start Listening</h3>
              <p className="text-gray-600">
                Hit the big green mic button and hold your phone up to the world around you. Bird Chatter begins identifying species in real time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Collect Points</h3>
              <p className="text-gray-600">
                Watch species names and points roll in live. World Lifers earn 150 pts, Country Lifers 100 pts, State 75, County 50, and repeats still earn 10 each.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Climb the Leaderboard</h3>
              <p className="text-gray-600">
                Check your rank against other birders in your county, state, country, and the world. Yearly resets mean there's always a fresh race to the top.
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
              Everything You Need to Compete
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time bird ID, points, leaderboards, badges, and life lists — all in one app
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

      {/* Competition Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Compete in Your Community
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Bird Chatter ranks you against other birders at every level — your county, your state, your country, and the entire world.
                See exactly who's ahead of you and how close you are to overtaking them.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4 flex-shrink-0">
                    <UserGroupIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Leaderboards at Every Level</h4>
                    <p className="text-gray-600">County, state, country, and world rankings for points and species count</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4 flex-shrink-0">
                    <TrophyIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Top 10 Badges</h4>
                    <p className="text-gray-600">Automatically awarded for species diversity and observations at every geographic tier</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4 flex-shrink-0">
                    <ChartBarIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Yearly Resets</h4>
                    <p className="text-gray-600">Leaderboards reset every January — there's always a fresh race to the top</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Point System</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-gray-700">World Lifer</span>
                  <span className="text-green-600 font-semibold">+150 points</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-gray-700">Country Lifer</span>
                  <span className="text-green-600 font-semibold">+100 points</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-gray-700">State Lifer</span>
                  <span className="text-blue-600 font-semibold">+75 points</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-gray-700">County Lifer</span>
                  <span className="text-blue-600 font-semibold">+50 points</span>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <span className="text-gray-700">Repeat Detection</span>
                  <span className="text-gray-500 font-semibold">+10 points</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life List & Profile Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Track Your Lifers & Earn Badges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your life list builds itself as you record. Your profile showcases every badge you've earned.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Life List</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">&#10003;</span>
                  <span>Every species logged with date and location</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">&#10003;</span>
                  <span>Filter by world, country, state, or county</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">&#10003;</span>
                  <span>View by year or all time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">&#10003;</span>
                  <span>Sort by most recent, first seen, or taxonomic order</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">&#10003;</span>
                  <span>Search for any species by name</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Profile & Badges</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">&#10003;</span>
                  <span>Total points, lifers, year birds, and recent activity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">&#10003;</span>
                  <span>Badges for Top 10 at county, state, country, and world</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">&#10003;</span>
                  <span>Separate badges for observations and species diversity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">&#10003;</span>
                  <span>Dozens of achievements to chase</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">&#10003;</span>
                  <span>Statistics overview in one place</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bird Chatter uses a state-of-the-art AI model to identify bird species from sound with high accuracy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
                <CpuChipIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">On-Device AI</h3>
              <p className="text-gray-600 leading-relaxed">
                No internet required. No uploads. AI runs entirely on your iPhone for complete privacy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
                <MapPinIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">GPS-Powered Accuracy</h3>
              <p className="text-gray-600 leading-relaxed">
                Location narrows 6,500 species to what's actually near you, dramatically improving identification accuracy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
                <MicrophoneIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Live Waveform</h3>
              <p className="text-gray-600 leading-relaxed">
                Watch the waveform pulse as Bird Chatter listens. Species and points appear the moment they're detected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Your Backyard Is a Battlefield
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Bird Chatter turns every walk, hike, and quiet morning on the porch into a competition.
            The AI identifies the birds. You just need to listen — and try to beat your neighbors.
          </p>
          <button
            onClick={() => handleNavigation('/download')}
            className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
          >
            Start Listening. Start Climbing.
          </button>
          <p className="text-green-200 mt-4 text-sm">
            Free on the App Store. Requires iOS 18.0+ with microphone access.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BirdChatter;
