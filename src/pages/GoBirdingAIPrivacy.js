import React from 'react';

const GoBirdingAIPrivacy = () => {
  const linkClass = 'text-gb-forest hover:text-gb-deep underline';

  const serviceRows = [
    {
      service: 'eBird API (Cornell Lab of Ornithology)',
      sent: 'Approximate coordinates, your state or county code, or a hotspot ID',
      why: 'Rare bird reports near you and recent sightings at a hotspot'
    },
    {
      service: 'Open-Meteo',
      sent: 'Approximate coordinates',
      why: 'Current weather and hourly forecast'
    },
    {
      service: 'Sunrise-Sunset.org',
      sent: 'Approximate coordinates',
      why: 'Sunrise and sunset times'
    },
    {
      service: 'NOAA Tides & Currents and OpenStreetMap (Overpass)',
      sent: 'Approximate coordinates',
      why: 'Whether you are near the coast, and tide predictions for the nearest station'
    },
    {
      service: 'Apple',
      sent: 'Coordinates (place names); your spoken words while you use voice search',
      why: 'Turning your location into a town or county name, and speech recognition (Apple may process speech on its servers under Apple\'s privacy policy)'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-8">
            <img
              src="/go-birding-ai-assets/AppIcon.png?v=1"
              alt="Go Birding AI"
              className="w-12 h-12 rounded-xl shadow-sm mr-4"
            />
            <h1 className="text-3xl font-bold text-gray-900">Go Birding AI Privacy Policy</h1>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> October 30, 2026
            </p>

            <div className="bg-gb-mist border border-gb-sage rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Summary</h2>
              <ul className="list-disc pl-6 text-gray-900 space-y-1">
                <li><strong>We don't collect your data.</strong> There's no account, and nothing you do in the app is sent to us.</li>
                <li><strong>No ads, no tracking, no analytics or crash-reporting SDKs</strong>, and we never sell data.</li>
                <li>The AI guide runs entirely on your iPhone. Your searches and saved spots stay on your device.</li>
                <li>To show live sightings, weather and tides, the app asks a few public services for data about your area (listed below).</li>
              </ul>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Who We Are</h2>
              <p className="text-gray-700 mb-4">
                Go Birding AI is an iPhone app from the Go Birding team ("we," "us"). This policy explains what happens to your
                information when you use the app. Our other apps, Bird Chatter and Next Lifer, have their own privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. What Stays on Your iPhone</h2>
              <p className="text-gray-700 mb-4">
                These are stored or processed only on your device. We have no server that receives them and no way to see them:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Your searches, and the AI guide's answers (the AI model is built into the app)</li>
                <li>Your saved hotspots</li>
                <li>Your settings, such as voice and region preferences</li>
                <li>Cached rare-bird reports, weather and tides, kept briefly so the app works offline</li>
              </ul>
              <p className="text-gray-700 mb-4">
                If you delete the app, all of this is deleted with it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Location</h2>
              <p className="text-gray-700 mb-4">
                With your permission, the app uses your location while you're using it to rank nearby hotspots, show distances,
                and find rare birds, weather and tides near you. It is never used in the background, never sent to us, and never
                stored after you close the app. You can turn location off in iOS Settings and choose a region instead.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Voice Search</h2>
              <p className="text-gray-700 mb-4">
                The microphone is used only while you're doing a voice search, after you tap the mic. Speech is converted to text
                by Apple's speech recognition, which may process it on Apple's servers under{' '}
                <a href="https://www.apple.com/legal/privacy/" className={linkClass} target="_blank" rel="noopener noreferrer">Apple's privacy policy</a>.
                We never receive or store your audio or transcripts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Services the App Contacts</h2>
              <p className="text-gray-700 mb-4">
                To show live data, the app sends requests directly from your iPhone to these services. They receive the details
                below plus what any web request includes, such as your IP address. We don't send them any identifier, and they
                don't send anything to us.
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full text-sm text-left text-gray-700 border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Service</th>
                      <th className="px-4 py-3 font-semibold">What it receives</th>
                      <th className="px-4 py-3 font-semibold">Why</th>
                    </tr>
                  </thead>
                  <tbody>
                    {serviceRows.map((row, index) => (
                      <tr key={index} className="border-t border-gray-200 align-top">
                        <td className="px-4 py-3">{row.service}</td>
                        <td className="px-4 py-3">{row.sent}</td>
                        <td className="px-4 py-3">{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mb-4">
                Links to eBird, maps and other websites open in Safari or Apple Maps and are covered by those sites' own policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. What We Collect</h2>
              <p className="text-gray-700 mb-4">
                Nothing. Go Birding AI has no accounts, no analytics, no advertising, and no crash reporting of its own. If you
                choose to share crash reports with developers in iOS Settings, Apple may pass anonymous crash logs to us; you can
                turn that off at any time in iOS Settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Children</h2>
              <p className="text-gray-700 mb-4">
                The app is suitable for all ages and collects no personal information from anyone, including children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Sighting Data</h2>
              <p className="text-gray-700 mb-4">
                Hotspot and sighting data come from eBird, a project of the Cornell Lab of Ornithology, used under the{' '}
                <a href="https://www.birds.cornell.edu/home/ebird-api-terms-of-use/" className={linkClass} target="_blank" rel="noopener noreferrer">eBird API Terms of Use</a>.
                Go Birding AI is an independent app and is not affiliated with or endorsed by the Cornell Lab or eBird.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this policy from time to time. We'll post the new version on this page and update the "Last updated"
                date. If we ever start collecting a new kind of information, we'll tell you in the app first.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                Questions about this policy:{' '}
                <a href="mailto:support@gobirding.ai" className={linkClass}>support@gobirding.ai</a>
                {' '}— the Go Birding team, gobirding.ai.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoBirdingAIPrivacy;
