import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> January 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Go Birding AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Privacy-First Design:</strong> Our app is designed with privacy as a core principle. Most data processing occurs locally on your device, and we minimize data collection wherever possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Information Processed Locally</h3>
              <p className="text-gray-700 mb-4">
                The following information is processed entirely on your device and is not transmitted to our servers:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Voice recordings and audio input (processed locally by on-device AI)</li>
                <li>Search queries and preferences</li>
                <li>App usage patterns and navigation</li>
                <li>Favorite locations and personal notes</li>
                <li>Location data used for nearby recommendations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Information We May Collect</h3>
              <p className="text-gray-700 mb-4">
                We may collect limited information only when necessary for core app functionality:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Device information (OS version, app version) for compatibility and crash reporting</li>
                <li>Anonymous usage analytics to improve app performance</li>
                <li>Error logs and crash reports (anonymized)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the limited information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide and maintain our service</li>
                <li>Improve app performance and fix bugs</li>
                <li>Understand how users interact with our app (anonymized data only)</li>
                <li>Ensure compatibility across different devices and OS versions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Voice Data and AI Processing</h2>
              <p className="text-gray-700 mb-4">
                <strong>Complete Privacy:</strong> All voice processing happens locally on your device using on-device AI models. Your voice recordings:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Are never transmitted to our servers or third-party services</li>
                <li>Are processed entirely on your device</li>
                <li>Are not stored permanently on your device</li>
                <li>Cannot be accessed by us or any third parties</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Location Information</h2>
              <p className="text-gray-700 mb-4">
                Our app may access your location to provide nearby birding recommendations. This location data:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Is used only to show relevant nearby birding locations</li>
                <li>Is processed locally on your device</li>
                <li>Is not transmitted to our servers</li>
                <li>Is not stored beyond the current app session</li>
                <li>Can be disabled through your device's privacy settings</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties. The limited anonymized data we may collect could be shared only in these circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist in app development (under strict privacy agreements)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Local data processing minimizes exposure to security risks</li>
                <li>Industry-standard encryption for any data transmission</li>
                <li>Regular security audits and updates</li>
                <li>Minimal data collection reduces potential attack vectors</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Your Privacy Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Access information about what data we collect</li>
                <li>Request deletion of any data we may have</li>
                <li>Opt out of any optional data collection</li>
                <li>Control location permissions through your device settings</li>
                <li>Use the app with most features available offline</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our app is suitable for all ages and we do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe we have collected information from your child, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us through the app or visit our website.
              </p>
            </section>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Privacy Summary</h3>
              <p className="text-green-800">
                <strong>Your privacy is our priority.</strong> Go Birding AI processes most data locally on your device, 
                doesn't sell your information, and gives you full control over your privacy settings. 
                Enjoy birding with confidence knowing your data stays private.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 