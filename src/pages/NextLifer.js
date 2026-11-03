import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StarIcon,
  CalendarDaysIcon,
  ExclamationTriangleIcon,
  MoonIcon,
  MapPinIcon,
  MapIcon,
  FunnelIcon,
  BookmarkIcon,
  MicrophoneIcon,
  LinkIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  UserCircleIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import { Reveal, ScreenshotCarousel, StarField } from '../components/Motion';
import { NEXT_LIFER_SCREENSHOTS } from '../screenshots';
import { NEXT_LIFER_APP_STORE_URL } from '../nextLifer';
import { useSmartAppBanner } from '../appStore';

const NextLifer = () => {
  useSmartAppBanner('nextLifer');
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


  const categories = [
    {
      icon: StarIcon,
      title: 'Lifers',
      description: 'Recent sightings of species that aren\'t on your life list yet — the birds worth the drive. Only birds that count on eBird, never hybrids or "sp."'
    },
    {
      icon: CalendarDaysIcon,
      title: 'Year Birds',
      description: 'Species near you that you haven\'t seen yet this year. Perfect for building a big year.'
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Rarities & Notable',
      description: 'Rare and unusual birds reported nearby, straight from eBird\'s notable sightings.'
    },
    {
      icon: MoonIcon,
      title: 'Owls',
      description: 'Recent owl sightings and the hotspots with owl history, including observers\' comments.'
    },
    {
      icon: MapPinIcon,
      title: 'Best Hotspots',
      description: 'Recommended and trending hotspots ranked by what\'s actually being seen there right now.'
    },
    {
      icon: MapIcon,
      title: 'Map View',
      description: 'Switch from list to map to see lifers, rarities, owls and hotspots inside your search radius.'
    },
    {
      icon: FunnelIcon,
      title: 'Species Filter',
      description: 'Looking for one bird? Filter every category at once and see exactly where it was reported.'
    },
    {
      icon: BookmarkIcon,
      title: 'Favorites & Saved Areas',
      description: 'Star hotspots, save search areas, and jump back into your last few searches with one tap. Your latest results stay on your phone for places with no signal.'
    }
  ];

  const highlights = [
    { stat: '7', label: 'Result Categories' },
    { stat: 'Live', label: 'eBird Data' },
    { stat: 'Any', label: 'Place, Anywhere' },
    { stat: 'Free', label: 'No Ads, No Tracking' }
  ];

  const AppStoreButton = ({ light }) => (
    NEXT_LIFER_APP_STORE_URL ? (
      <a
        href={NEXT_LIFER_APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Next Lifer on the App Store"
        className={`${light ? 'bg-white text-slate-900 hover:bg-gray-100' : 'bg-slate-900 text-white hover:bg-slate-800'} px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl text-center inline-block`}
      >
        Download on the App Store
      </a>
    ) : (
      <span
        className={`${light ? 'bg-white/90 text-slate-900' : 'bg-slate-900 text-white'} px-8 py-4 rounded-full text-lg font-semibold shadow-lg text-center inline-block cursor-default`}
      >
        Coming soon to the App Store
      </span>
    )
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-amber-50 overflow-hidden">
        <StarField />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <img
                  src="/next-lifer-assets/AppIcon.png?v=2"
                  alt="Next Lifer"
                  className="w-16 h-16 rounded-2xl shadow-md mr-4"
                />
                <span className="text-2xl font-bold text-gray-900">Next Lifer</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Your Next Lifer
                <span className="text-amber-600 block">Is Nearby.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                Next Lifer finds potential lifers, year birds, rarities, owls and the best hotspots near any place — from live eBird data.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Connect your eBird account once and every search highlights the birds you still need. Free for iPhone, with a clean dark design built for the field.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <AppStoreButton />
                <button
                  onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                  className="border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transition-colors duration-200 text-center"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <ScreenshotCarousel
                  images={NEXT_LIFER_SCREENSHOTS}
                  activeDot="bg-amber-400"
                  inactiveDot="bg-white/60 hover:bg-white/80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Reveal as="section" className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">{item.stat}</div>
                <div className="text-gray-600 text-sm lg:text-base">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* How It Works */}
      <Reveal as="section" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Next Lifer Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three steps from "where should I go?" to your next lifer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-amber-700">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect eBird</h3>
              <p className="text-gray-600">
                Sign in on eBird's own page inside the app. Next Lifer imports your life and year lists — it never sees your password.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-amber-700">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pick a Place</h3>
              <p className="text-gray-600">
                Use your location or type any city, park or address. Choose how far to look (5–30 mi) and how recent (1–30 days).
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-amber-700">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Go Birding</h3>
              <p className="text-gray-600">
                See lifers, year birds, rarities, owls and hotspots at a glance, then tap Directions and head out.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Features Section */}
      <Reveal as="section" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything Worth Chasing, in One Search
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every category is visible at once as pills — no digging through menus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-200">
                <div className="bg-amber-100 p-3 rounded-lg inline-block mb-4">
                  <feature.icon className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Life List Section */}
      <Reveal as="section" className="py-24 bg-gradient-to-br from-slate-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Built Around Your Life List
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Next Lifer knows which birds are new for you, so every search answers the question birders actually ask:
                what can I add today?
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-lg mr-4 flex-shrink-0">
                    <LinkIcon className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Connect eBird</h4>
                    <p className="text-gray-600">Sign in on eBird's own page — your life and year lists come across automatically. Next Lifer never sees your password.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-lg mr-4 flex-shrink-0">
                    <ArrowPathIcon className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Refresh Any Time</h4>
                    <p className="text-gray-600">Pull your latest lists whenever you like, or import your eBird life-list CSV or full data export instead.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-lg mr-4 flex-shrink-0">
                    <UserCircleIcon className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">No Sign-Up Required</h4>
                    <p className="text-gray-600">Start as a guest. Create an account or Sign in with Apple later to keep your lists and favorites across devices.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Hotspot Pages</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2 font-bold">&#10003;</span>
                  <span>Recent species at the hotspot, with your lifers first</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2 font-bold">&#10003;</span>
                  <span>Recent checklists and owl history</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2 font-bold">&#10003;</span>
                  <span>Directions in Apple Maps or Google Maps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2 font-bold">&#10003;</span>
                  <span>Open the hotspot in eBird with one tap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2 font-bold">&#10003;</span>
                  <span>Share it with your birding friends</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2 font-bold">&#10003;</span>
                  <span>Star it as a favorite for next time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Extras Section */}
      <Reveal as="section" className="py-24 bg-gray-50">
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
              <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-6">
                <MicrophoneIcon className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Voice Search</h3>
              <p className="text-gray-600 leading-relaxed">
                Just say "owls near Cape May this week" and Next Lifer does the rest — on any iPhone, with Apple Intelligence making it even smarter on iPhones that have it.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-6">
                <DevicePhoneMobileIcon className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dark by Design</h3>
              <p className="text-gray-600 leading-relaxed">
                One high-contrast dark look that's easy on the eyes at dawn, with Dynamic Type and VoiceOver support throughout.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-6">
                <ShieldCheckIcon className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">No Ads, No Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                No ads, no analytics SDKs, and we never sell your data. Delete your account and data from the app at any time.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500 text-center mt-12 max-w-3xl mx-auto">
            Data from eBird, a project of the Cornell Lab of Ornithology. Next Lifer is an independent app and is not
            affiliated with or endorsed by the Cornell Lab of Ornithology or eBird.
          </p>
        </div>
      </Reveal>

      {/* CTA Section */}
      <Reveal as="section" className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Stop Scrolling. Start Chasing.
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Next Lifer turns live eBird reports into a short list of birds you actually need — and where to find them.
          </p>
          <AppStoreButton light />
          <p className="text-slate-300 mt-4 text-sm">
            Free for iPhone. Requires iOS 17.0 or later.
          </p>
          <p className="text-slate-300 mt-6 text-base">
            Need help? Visit our{' '}
            <button
              onClick={() => handleNavigation('/next-lifer/support')}
              className="text-white font-semibold hover:underline"
            >
              Support Page
            </button>
            {' '}or read the{' '}
            <button
              onClick={() => handleNavigation('/next-lifer/privacy')}
              className="text-white font-semibold hover:underline"
            >
              Privacy Policy
            </button>
          </p>
        </div>
      </Reveal>
    </div>
  );
};

export default NextLifer;
