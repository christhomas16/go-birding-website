import React from 'react';
import { 
  UserGroupIcon, 
  LightBulbIcon, 
  ShieldCheckIcon,
  HeartIcon,
  GlobeAltIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const values = [
    {
      icon: ShieldCheckIcon,
      title: 'Privacy First',
      description: 'Your birding data stays completely on your device. No tracking, no data collection, complete privacy.'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'Cutting-edge AI technology brings the future of birding to your pocket with voice-powered search.'
    },
    {
      icon: HeartIcon,
      title: 'Passion for Birding',
      description: 'Built by birders, for birders. We understand the joy of discovering new species and perfect locations.'
    },
    {
      icon: UserGroupIcon,
      title: 'Community',
      description: 'Connecting the birding community with technology that enhances rather than replaces the experience.'
    }
  ];

  const stats = [
    { number: '400+', label: 'Birding Locations' },
    { number: '2', label: 'States Covered' },
    { number: '100%', label: 'Privacy Protected' },
    { number: '1', label: 'Voice Command' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About
                <span className="text-primary-600 block">GoBirding AI</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're revolutionizing how birding enthusiasts discover and explore new locations 
                through the power of artificial intelligence and voice technology.
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src="/logo.png" 
                  alt="GoBirding AI" 
                  className="h-16 w-16 rounded-xl shadow-md"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">GoBirding AI</h3>
                  <p className="text-gray-600">Your AI-Powered Birding Companion</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-500 rounded-3xl transform -rotate-6 opacity-20"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                  <GlobeAltIcon className="h-32 w-32 text-primary-600 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To make birding more accessible, enjoyable, and rewarding by combining cutting-edge AI technology 
              with deep respect for nature and privacy. We believe every birder deserves to discover amazing 
              locations without the hassle of endless research.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="text-center lg:text-left">
              <SparklesIcon className="h-16 w-16 text-primary-600 mx-auto lg:mx-0 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We harness the latest AI technologies to create intuitive, voice-powered experiences 
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
                Your birding habits, locations, and data remain completely private. All AI processing 
                happens on your device - no tracking, no data collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-primary-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we build is guided by these core principles that ensure GoBirding AI 
              serves the birding community with integrity and excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200">
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
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          </div>
          
          <div className="prose prose-xl mx-auto text-gray-600">
            <p className="mb-6">
              GoBirding AI was born from a simple frustration: finding good birding locations required 
              hours of research, scrolling through websites, and often ending up at crowded or 
              disappointing spots. As passionate birders ourselves, we knew there had to be a better way.
            </p>
            
            <p className="mb-6">
              The breakthrough came when we realized that modern AI could understand natural language 
              queries about birding needs. Instead of searching through lists and maps, what if you 
              could simply say "find me a quiet wetland spot in Ocean County" and get intelligent, 
              personalized recommendations?
            </p>
            
            <p className="mb-6">
              We spent months curating over 400 birding locations across New York and New Jersey, 
              integrating real-time weather data, and training our AI to understand birding terminology 
              and preferences. Most importantly, we built everything to run entirely on your device - 
              because your birding adventures should remain private.
            </p>
            
            <p>
              Today, GoBirding AI represents the future of birding technology: intelligent, private, 
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