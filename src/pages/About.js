import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  HeartIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const values = [
    {
      icon: ShieldCheckIcon,
      title: 'Privacy First',
      description: 'We prioritize your privacy across both apps. Go Birding AI runs entirely on-device, and Bird Chatter keeps all audio processing local with only minimal leaderboard data stored online.'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'From voice-powered location search to real-time bird sound identification, we push the boundaries of what AI can do for birders.'
    },
    {
      icon: HeartIcon,
      title: 'Passion for Birding',
      description: 'Built by birders, for birders. We understand the joy of discovering new species and perfect locations.'
    },
    {
      icon: UserGroupIcon,
      title: 'Community',
      description: 'Whether you\'re competing on Bird Chatter leaderboards or exploring new locations with Go Birding AI, we\'re connecting birders through technology.'
    }
  ];

  const stats = [
    { number: '19,200+', label: 'Birding Locations' },
    { number: '50', label: 'US States Covered' },
    { number: '2', label: 'AI-Powered Apps' },
    { number: '1,000+', label: 'Bird Species Detected' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About
                <span className="text-gray-700 block">gobirding.ai</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're building AI-powered apps that make birding more accessible, enjoyable, and rewarding.
                From finding the perfect birding spot to identifying birds by sound, our apps harness the
                latest in artificial intelligence.
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src="/logo.png"
                  alt="gobirding.ai"
                  className="h-16 w-16 rounded-xl shadow-md"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">gobirding.ai</h3>
                  <p className="text-gray-600">AI-Powered Birding Apps</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-500 rounded-3xl transform -rotate-6 opacity-20"></div>
                <img
                  src="/about.jpg"
                  alt="About gobirding.ai"
                  className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-3xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Apps Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Apps</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two powerful iOS apps, each designed to enhance a different aspect of the birding experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Go Birding AI */}
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-8 rounded-2xl border border-primary-100">
              <div className="flex items-center space-x-4 mb-6">
                <img src="/logo.png" alt="Go Birding AI" className="h-14 w-14 rounded-xl shadow-sm" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Go Birding AI</h3>
                  <p className="text-primary-600 font-medium">Voice-Powered Location Discovery</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Find the perfect birding spot by simply talking to your phone. With over 19,200 locations
                across the US and Canada, real-time weather data, and on-device AI processing, Go Birding AI
                is your intelligent birding companion.
              </p>
              <button
                onClick={() => handleNavigation('/go-birding-ai')}
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                Learn more &rarr;
              </button>
            </div>

            {/* Bird Chatter */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <div className="flex items-center space-x-4 mb-6">
                <img src="/birdchatter/AppIcon.png" alt="Bird Chatter" className="h-14 w-14 rounded-xl shadow-sm" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Bird Chatter</h3>
                  <p className="text-green-600 font-medium">Competitive Bird Identification</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Identify birds by their sounds using on-device AI and compete on leaderboards.
                Build your life list, earn points for new discoveries, and see how you rank against
                birders in your county, state, country, and worldwide.
              </p>
              <button
                onClick={() => handleNavigation('/bird-chatter')}
                className="text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Learn more &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To make birding more accessible, enjoyable, and rewarding by combining cutting-edge AI technology
              with deep respect for nature and privacy. Whether you're searching for the perfect birding spot
              or identifying a bird by its song, we believe technology should enhance the experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="text-center lg:text-left">
              <SparklesIcon className="h-16 w-16 text-primary-600 mx-auto lg:mx-0 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We harness the latest AI technologies to create intuitive experiences
                that feel natural and enhance your birding adventures.
              </p>
            </div>
            <div className="text-center">
              <HeartIcon className="h-16 w-16 text-primary-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Passion</h3>
              <p className="text-gray-600">
                Built by birders who understand the thrill of discovering new species and the perfect
                lighting conditions at sunrise over a pristine wetland.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <ShieldCheckIcon className="h-16 w-16 text-primary-600 mx-auto lg:mx-0 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Privacy</h3>
              <p className="text-gray-600">
                Both our apps prioritize your privacy with on-device AI processing. Your birding
                data stays under your control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we build is guided by these core principles that ensure our apps
              serve the birding community with integrity and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-4 rounded-xl">
                    <value.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          </div>

          <div className="prose prose-xl mx-auto text-gray-600">
            <p className="mb-6">
              gobirding.ai started with a simple frustration: finding good birding locations required
              hours of research, scrolling through websites, and often ending up at crowded or
              disappointing spots. As passionate birders ourselves, we knew there had to be a better way.
            </p>

            <p className="mb-6">
              Our first app, Go Birding AI, was born when we realized that modern AI could understand natural language
              queries about birding needs. Instead of searching through lists and maps, what if you
              could simply say "find me a quiet wetland spot in Ocean County" and get intelligent,
              personalized recommendations? We spent months curating over 19,200 birding locations across
              the US and Canada, integrating real-time weather data, and training our AI to understand
              birding terminology and preferences.
            </p>

            <p className="mb-6">
              Then came Bird Chatter - our answer to a different challenge. We wanted to bring the
              excitement of competition to bird identification. Using on-device AI that recognizes bird
              sounds in real time, Bird Chatter turns every birding outing into an adventure where you
              can build your life list, earn points for new discoveries, and compete with birders around
              the world.
            </p>

            <p>
              Today, gobirding.ai represents the future of birding technology: intelligent, private,
              and designed by birders who understand that the best technology enhances rather than
              replaces the natural experience of watching birds in their habitat.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Questions or Feedback?</h2>
          <p className="text-gray-300 mb-6">
            We'd love to hear from fellow birders about their experiences and suggestions.
          </p>
          <div className="flex justify-center">
            <span className="text-gray-400">
              Visit us at{' '}
              <span className="text-primary-400 font-semibold">gobirding.ai</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
