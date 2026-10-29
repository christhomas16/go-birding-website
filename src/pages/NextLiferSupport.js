import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  QuestionMarkCircleIcon,
  EnvelopeIcon,
  ArrowLeftIcon,
  LinkIcon,
  ClockIcon,
  KeyIcon,
  TrashIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const NextLiferSupport = () => {
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

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const quickLinks = [
    {
      icon: QuestionMarkCircleIcon,
      title: 'Browse FAQ',
      description: 'Find answers to common questions',
      action: () => scrollToId('faq')
    },
    {
      icon: TrashIcon,
      title: 'Delete Your Data',
      description: 'Remove your account and all data',
      action: () => scrollToId('delete-account')
    },
    {
      icon: EnvelopeIcon,
      title: 'Contact Support',
      description: 'Email our support team',
      action: () => scrollToId('contact')
    }
  ];

  const faqs = {
    gettingStarted: [
      {
        question: 'What does Next Lifer do?',
        answer: 'Next Lifer finds potential lifers, year birds, rarities, owls and the best hotspots near any place, using live data from eBird. Pick your current location or type a city, park or address, choose a distance and how many days back to look, and tap "Find birds". Every result category appears as a pill at the top of the results, and you can switch to a map at any time.'
      },
      {
        question: 'What do I need to use Next Lifer?',
        answer: 'An iPhone running iOS 17.0 or later and an internet connection. Next Lifer is free. You don\'t need an eBird API key, and you don\'t need to create an account to get started. Voice search works on any iPhone; on iPhones with Apple Intelligence (iOS 26) it understands more flexible requests.'
      },
      {
        question: 'Do I need an account?',
        answer: 'No. When you first open the app you\'re signed in as a guest automatically — an anonymous account identified only by a random user ID, with no email address. Everything works as a guest, including Connect eBird, favorites and saved areas. Creating an account (email and password, or Sign in with Apple) is optional and lets you keep your life list, favorites and settings across devices.'
      },
      {
        question: 'Why does a search take a few seconds the first time in a new area?',
        answer: 'The first search in a new area gathers recent sightings, notable reports, hotspots and owl history from eBird, which can take a few seconds. Our server keeps a short-lived copy of that public eBird data, so later searches in the same area — by you or anyone else — come back much faster. Your own life list is applied on top, so results are still personal to you.'
      },
      {
        question: 'How do saved areas work?',
        answer: 'From any results screen, tap "Save area" to keep that location and distance. Saved areas and your favorite hotspots (tap the star on a hotspot page) appear on the home screen, so you can re-run a search with one tap. Your last few searches also appear under Recent searches. If you have an account, favorites and saved areas sync across your devices.'
      }
    ],
    connectEBird: [
      {
        question: 'How does Connect eBird work?',
        answer: 'Tap Connect eBird (on the home screen, during setup, or in Settings → eBird life list). eBird\'s own sign-in page opens inside the app. Once you sign in, Next Lifer downloads your life list and this year\'s list from eBird. Next Lifer never sees or stores your eBird password — you type it directly into eBird\'s page. You can refresh your lists any time from Settings → eBird life list.'
      },
      {
        question: 'Can I add my life list without connecting?',
        answer: 'Yes. You can import the life list CSV from ebird.org/lifelist (use the download/share option and open it with Next Lifer), or import the full "My eBird Data" export (.zip) that eBird emails you. You can also tap "Seen it" on a lifer or year bird card to mark a single species as seen.'
      },
      {
        question: 'The eBird sign-in page won\'t load. What should I do?',
        answer: 'Check that you have a working internet connection and try again in a minute — eBird\'s sign-in service is occasionally slow or down for maintenance. If the page stays blank, close the sign-in sheet, force-quit Next Lifer and reopen it, then try Connect eBird again. If you use a content blocker or VPN, try turning it off briefly. As a fallback, you can import your life list CSV instead (see above).'
      },
      {
        question: 'My species count is different from eBird\'s. Why?',
        answer: 'Next Lifer counts only full species, the same way eBird\'s own life list does. Subspecies groups and forms are counted as their parent species, and "spuhs" (e.g. "duck sp."), slashes (e.g. "Greater/Lesser Scaup"), hybrids and domestic types are excluded. If your total still differs, refresh your lists from Settings → eBird life list — recent checklists may not have been included yet — and remember that the year list only counts the current calendar year.'
      },
      {
        question: 'How do I disconnect eBird?',
        answer: 'Go to Settings → eBird life list → Disconnect eBird. This removes the eBird sign-in session from your iPhone. Your imported life list stays in the app until you replace it or delete your account. Your eBird account and checklists at ebird.org are never changed by Next Lifer.'
      }
    ],
    accounts: [
      {
        question: 'What\'s the difference between a guest and an account?',
        answer: 'A guest account lives on one device and has no email address — just a random user ID. If you delete the app or sign out, a guest account can\'t be recovered. A full account (email and password, or Sign in with Apple) keeps your life list, favorites, saved areas and settings safe and lets you use them on other devices.'
      },
      {
        question: 'How do I turn my guest account into a full account?',
        answer: 'Go to Settings → Account and choose Create account (email and password) or Sign in with Apple. Your existing life list, favorites and saved areas move to the new account automatically — nothing is lost. If you use email, you may be asked to confirm your address first.'
      },
      {
        question: 'I forgot my password. How do I reset it?',
        answer: 'On the sign-in screen, tap the forgot-password option and enter your account email. The app emails you a 6-digit code. Enter the code in the app, then choose a new password. If the email doesn\'t arrive within a few minutes, check your spam or junk folder. If you signed up with Sign in with Apple, you don\'t have a separate password — just use Sign in with Apple again.'
      },
      {
        question: 'Can I use Next Lifer on more than one device?',
        answer: 'Yes, with a full account. Sign in with the same email or Apple ID on each device and your life list, year list, favorites, saved areas and settings sync automatically.'
      }
    ]
  };

  const deleteSteps = [
    'Open Next Lifer and tap the gear icon to open Settings.',
    'Scroll to the Account section.',
    'Tap Delete account.',
    'Review what gets deleted, then tap Delete my account. Your account and all associated data — profile, life list, year list, favorites, saved areas and any device tokens — are permanently deleted from our servers, and the app\'s data is cleared from your iPhone.'
  ];

  const FaqGroup = ({ number, title, items, id }) => (
    <div className="mb-12" id={id}>
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <span className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">{number}</span>
        {title}
      </h3>
      <div className="space-y-6">
        {items.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-amber-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img
              src="/next-lifer-assets/AppIcon.png?v=2"
              alt="Next Lifer"
              className="w-24 h-24 rounded-2xl shadow-lg mx-auto mb-6"
            />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Next Lifer
              <span className="text-amber-700 block">Support</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get help with Connect eBird, accounts, searches and your data.
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
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-200 text-left hover:bg-amber-50 group"
              >
                <div className="bg-amber-100 p-3 rounded-lg inline-block mb-4 group-hover:bg-amber-200 transition-colors duration-200">
                  <link.icon className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-gray-600">{link.description}</p>
              </button>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={() => handleNavigation('/next-lifer')}
              className="inline-flex items-center text-amber-700 font-semibold hover:underline"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Next Lifer overview
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-6">
              <QuestionMarkCircleIcon className="h-8 w-8 text-amber-700" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about using Next Lifer
            </p>
          </div>

          <FaqGroup number="1" title="Getting Started" items={faqs.gettingStarted} />
          <FaqGroup number="2" title="Connect eBird & Your Life List" items={faqs.connectEBird} />
          <FaqGroup number="3" title="Guest & Account" items={faqs.accounts} />

          {/* Delete account */}
          <div id="delete-account">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
              Deleting Your Account & Data
            </h3>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How do I delete my account and data?</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can delete your account and all of your data directly in the app. This works for guest accounts too.
              </p>
              <ol className="space-y-3 mb-6">
                {deleteSteps.map((step, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <span className="bg-amber-100 text-amber-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">{index + 1}</span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="text-gray-600 leading-relaxed mb-4">
                Deletion is permanent and can't be undone. Your eBird account and checklists at ebird.org are separate
                and are not affected. To remove only the eBird sign-in session from your phone, use
                Settings → eBird life list → Disconnect eBird instead.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Can't open the app, or already deleted it? Email{' '}
                <a href="mailto:support@gobirding.ai?subject=Next%20Lifer%20data%20deletion%20request" className="text-amber-700 font-semibold hover:underline">
                  support@gobirding.ai
                </a>{' '}
                from the email address on your account and we'll delete your data —
                or send you a copy of it — within 30 days. See our{' '}
                <button
                  onClick={() => handleNavigation('/next-lifer/privacy')}
                  className="text-amber-700 font-semibold hover:underline"
                >
                  Privacy Policy
                </button>{' '}
                for details.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Guest accounts have no email address, so we can't look them up by email — please delete a guest
                account from inside the app (deleting the app alone does not remove the guest data stored on our servers).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues Guide */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-6">
              <WrenchScrewdriverIcon className="h-8 w-8 text-amber-700" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Issues & Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick fixes for the most common problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-amber-100 p-3 rounded-lg inline-block mb-4">
                <LinkIcon className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">eBird Sign-In Won't Load</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>Check your internet connection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>Force-quit and reopen Next Lifer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>Import your life list CSV instead</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-amber-100 p-3 rounded-lg inline-block mb-4">
                <QuestionMarkCircleIcon className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Counts Differ from eBird</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>Only full species are counted</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>Spuhs, slashes and hybrids are excluded</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>Refresh from Settings → eBird life list</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-amber-100 p-3 rounded-lg inline-block mb-4">
                <ClockIcon className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Slow First Search</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>New areas take a few seconds the first time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>Repeat searches are much faster</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>Smaller distances return sooner</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-amber-100 p-3 rounded-lg inline-block mb-4">
                <KeyIcon className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Forgot Password</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>Use "forgot password" on the sign-in screen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>Enter the 6-digit code we email you</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>Check spam if it doesn't arrive</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-amber-100 p-3 rounded-lg inline-block mb-4">
                <TrashIcon className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Delete Your Data</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>Settings → Account → Delete account</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>Works for guest accounts too</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>Or email support@gobirding.ai</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-amber-100 p-3 rounded-lg inline-block mb-4">
                <EnvelopeIcon className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Still Need Help?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <button
                onClick={() => scrollToId('contact')}
                className="text-amber-700 font-semibold hover:underline text-sm"
              >
                Contact Support →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-amber-400 p-4 rounded-full w-fit mx-auto mb-6">
            <EnvelopeIcon className="h-8 w-8 text-slate-900" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Can't find the answer you're looking for? Our support team is here to help.
            We typically respond within 24-48 hours.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <a
              href="mailto:support@gobirding.ai?subject=Next%20Lifer%20support"
              className="text-amber-400 text-xl font-semibold hover:text-amber-300 transition-colors duration-200"
            >
              support@gobirding.ai
            </a>
            <p className="text-sm text-gray-400 max-w-2xl">
              Please mention Next Lifer and include details about your issue: device model, iOS version, and steps to reproduce the problem.
              For account issues, include your account email. Never send us your eBird password.
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              Visit{' '}
              <button
                onClick={() => handleNavigation('/next-lifer')}
                className="text-amber-400 hover:text-amber-300 font-semibold"
              >
                Next Lifer
              </button>
              {' '}for app information or read the{' '}
              <button
                onClick={() => handleNavigation('/next-lifer/privacy')}
                className="text-amber-400 hover:text-amber-300 font-semibold"
              >
                Next Lifer Privacy Policy
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NextLiferSupport;
