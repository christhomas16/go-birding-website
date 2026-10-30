import React from 'react';
import { useNavigate } from 'react-router-dom';

const NextLiferPrivacy = () => {
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

  const linkClass = 'text-amber-800 hover:text-amber-900 underline';

  const dataRows = [
    {
      data: 'Account identifiers — a random user ID; your email address if you create an account (or Apple\'s private relay address if you use Sign in with Apple and choose to hide your email)',
      why: 'To sign you in and keep your data attached to your account',
      basis: 'Needed to provide the app'
    },
    {
      data: 'Life list and year list — the eBird species codes you\'ve seen, the year of your year list, and how the list was imported',
      why: 'To highlight birds that would be new for you, and to sync your lists across your devices',
      basis: 'Needed to provide the features you ask for'
    },
    {
      data: 'eBird username, if you provide one',
      why: 'Associated with your imported life list',
      basis: 'Your choice; needed to provide the app'
    },
    {
      data: 'Favorite hotspots and saved search areas (name, coordinates, distance)',
      why: 'So you can re-run searches with one tap, on any of your devices',
      basis: 'Your choice; needed to provide the features you ask for'
    },
    {
      data: 'Settings — distance units, preferred maps app, setup status',
      why: 'So the app works the way you set it up',
      basis: 'Needed to provide the app'
    },
    {
      data: 'A personal eBird API key, only if you saved one in an earlier version or under Settings → Advanced',
      why: 'Lets searches run directly from your phone if our server is unavailable',
      basis: 'Your choice'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-8">
            <img
              src="/next-lifer-assets/AppIcon.png?v=2"
              alt="Next Lifer"
              className="w-12 h-12 rounded-xl shadow-sm mr-4"
            />
            <h1 className="text-3xl font-bold text-gray-900">Next Lifer Privacy Policy</h1>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-2">
              <strong>Effective date:</strong> October 18, 2026
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> October 28, 2026
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-2">Summary</h2>
              <ul className="list-disc pl-6 text-slate-900 space-y-1">
                <li>We collect only what's needed to run your account, find birds near you, and sync your setup between devices.</li>
                <li><strong>No ads, no tracking, no analytics SDKs</strong>, and we never sell your data.</li>
                <li>Next Lifer never sees your eBird password.</li>
                <li>You can delete your account and all of its data in the app at any time: <strong>Settings → Account → Delete account</strong>.</li>
              </ul>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Who We Are</h2>
              <p className="text-gray-700 mb-4">
                Next Lifer ("the app") is an iPhone app made by the Go Birding team at gobirding.ai ("we," "our," or "us").
                It helps birders find potential lifers, year birds, rarities, owls and hotspots near any place using data from eBird.
                We are responsible for the personal information described in this policy.
              </p>
              <p className="text-gray-700 mb-4">
                Contact: <a href="mailto:support@gobirding.ai" className={linkClass}>support@gobirding.ai</a>
              </p>
              <p className="text-gray-700 mb-4">
                This policy covers Next Lifer only. Our other apps have their own policies — for example, the{' '}
                <button onClick={() => handleNavigation('/go-birding-ai/privacy')} className={linkClass}>Go Birding AI Privacy Policy</button>.
                Next Lifer is an independent app and is not affiliated with or endorsed by the Cornell Lab of Ornithology or eBird.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect and Why</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Information stored with your account</h3>
              <p className="text-gray-700 mb-4">
                You can use Next Lifer as a <strong>guest</strong> without giving us an email address. A guest account is an
                anonymous account identified only by a random user ID. If you choose to create an account (email and password)
                or use Sign in with Apple, you can keep your data across devices. In either case, we store:
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Data</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Why we use it</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {dataRows.map((row, index) => (
                      <tr key={index} className={index % 2 === 1 ? 'bg-gray-50' : ''}>
                        <td className="px-4 py-3 text-gray-700 align-top">{row.data}</td>
                        <td className="px-4 py-3 text-gray-700 align-top">{row.why}</td>
                        <td className="px-4 py-3 text-gray-700 align-top">{row.basis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mb-4">
                Your profile record is protected by row-level security, so only your signed-in account can read or change it.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Location</h3>
              <p className="text-gray-700 mb-4">
                If you allow it, Next Lifer uses your iPhone's location on your device to search near you. When you run a search,
                the coordinates of the search center (your location, or a place you typed) are sent to our server, and from there
                to eBird, to find nearby sightings and hotspots. We use those coordinates only to answer that search and do
                <strong> not</strong> store your location with your account — except for the favorite hotspots and saved areas
                you choose to create. Place names you type are converted to coordinates by Apple. You can turn location access
                off at any time in iOS Settings and still search by place name.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Connect eBird and your eBird password</h3>
              <p className="text-gray-700 mb-4">
                When you use <strong>Connect eBird</strong>, you sign in on eBird's (the Cornell Lab's) own sign-in page shown
                inside the app. <strong>Next Lifer never sees or stores your eBird password.</strong> The resulting eBird sign-in
                cookies stay only on your iPhone, in the app's web data store, and are used to download your life list and year
                list from ebird.org. They are never sent to us. They are removed when you choose Disconnect eBird, sign out, or
                delete your account.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.4 Information kept only on your device</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Your recent searches</li>
                <li>Your eBird sign-in session (see 2.3)</li>
                <li>Voice search audio and transcripts — your voice is turned into text by Apple's speech recognition (on your device when supported), and the request is interpreted on your device (by Apple Intelligence where available, otherwise by the app itself); we don't receive or store the audio or the transcript</li>
                <li>Cached data such as the eBird species list and bird photos</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.5 Notifications (if offered)</h3>
              <p className="text-gray-700 mb-4">
                Rare bird alerts are not available yet. If we add them and you turn them on, we will store your device's push
                notification token with your account so we can send the alerts you asked for. You can remove it at any time by
                turning alerts off or deleting your account.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.6 What we don't collect</h3>
              <p className="text-gray-700 mb-4">
                We don't use advertising, analytics or tracking SDKs; we don't track you across other companies' apps or websites;
                and we don't build advertising profiles. We don't collect your contacts, photos, or precise location history.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the information above only to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide the app: sign you in, run searches, and show which birds are new for you</li>
                <li>Sync your life list, favorites, saved areas and settings across your devices</li>
                <li>Send account emails you ask for, such as password-reset codes</li>
                <li>Answer your support requests</li>
                <li>Keep the service secure, prevent abuse, and fix problems</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Where data-protection laws require a legal basis, we rely on <strong>performance of our agreement with you</strong>
                {' '}(providing the features you use), your <strong>consent</strong> (for example, location access, Connect eBird,
                and any notifications — which you can withdraw at any time), our <strong>legitimate interests</strong> in keeping the
                service secure and working, and <strong>legal obligations</strong> where they apply.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Where Your Data Is Stored</h2>
              <p className="text-gray-700 mb-4">
                Your account and profile data are stored with our hosting provider, Supabase, in the United States (US East).
                If you use Next Lifer from outside the United States, your information will be transferred to and processed in the
                United States. Data is encrypted in transit (HTTPS) and at rest by our hosting provider.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third Parties and Service Providers</h2>
              <p className="text-gray-700 mb-4">
                We don't sell, rent, or trade your personal information. We share it only with the service providers that run
                the app for us, only as needed, and with the services you choose to use:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  <strong>Supabase</strong> — hosting, database, and authentication (accounts, guest accounts, sign-in), US East.{' '}
                  <a href="https://supabase.com/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">Privacy policy</a>
                </li>
                <li>
                  <strong>eBird / Cornell Lab of Ornithology</strong> — bird sightings, hotspots and taxonomy come from the eBird API.
                  Our server sends eBird the search area (coordinates and distance), not your name or email. When you use
                  Connect eBird, you deal with eBird directly and their terms apply.{' '}
                  <a href="https://www.birds.cornell.edu/home/privacy/" className={linkClass} target="_blank" rel="noopener noreferrer">Privacy policy</a>
                </li>
                <li>
                  <strong>Apple</strong> — Sign in with Apple (if you use it), place search and geocoding, Apple Maps, and on-device
                  speech recognition for voice search.{' '}
                  <a href="https://www.apple.com/legal/privacy/" className={linkClass} target="_blank" rel="noopener noreferrer">Privacy policy</a>
                </li>
                <li>
                  <strong>Google Maps</strong> — only if you choose Google Maps for directions; the destination is passed to Google
                  when you tap Directions.{' '}
                  <a href="https://policies.google.com/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">Privacy policy</a>
                </li>
                <li>
                  <strong>Wikimedia Commons</strong> — bird photos are sourced from Wikimedia Commons and credited in the app
                  (photographer and license). Loading a photo involves an ordinary web request and does not include your account
                  information.
                </li>
                <li>
                  <strong>Twilio SendGrid</strong> — our email provider, used to send account emails such as password-reset codes
                  to your email address.{' '}
                  <a href="https://www.twilio.com/en-us/legal/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">Privacy policy</a>
                </li>
                <li>
                  <strong>Cloudflare and Google</strong> — if you email support@gobirding.ai, Cloudflare routes your message to our
                  support inbox, which is hosted by Google (Gmail). We use your message only to answer you.{' '}
                  <a href="https://www.cloudflare.com/privacypolicy/" className={linkClass} target="_blank" rel="noopener noreferrer">Cloudflare privacy policy</a>
                  {' · '}
                  <a href="https://policies.google.com/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">Google privacy policy</a>
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                We may also disclose information if required by law, to protect the rights and safety of our users or others,
                or as part of a merger or transfer of the app (in which case this policy would continue to apply to your data).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. How Long We Keep Your Data</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Your account and profile data are kept until you delete your account, or ask us to delete it.</li>
                <li>When you delete your account, your data is removed from our active database right away.</li>
                <li>
                  Our server keeps short-lived caches of <strong>public eBird data</strong> (recent sightings, hotspots, taxonomy)
                  to make searches faster. These caches are about areas and birds, not about you, and are not linked to your account.
                </li>
                <li>
                  Our hosting provider keeps routine technical logs (such as request times and errors) for a limited period
                  for security and troubleshooting.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">
                Wherever you live, you can:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Access</strong> your data — your life list, favorites, saved areas and settings are visible in the app, or email us for a copy</li>
                <li><strong>Correct</strong> your data — edit favorites and saved areas, re-import your life list, or change your settings in the app</li>
                <li><strong>Delete</strong> your data — in the app (see section 8) or by email</li>
                <li><strong>Export</strong> your data (portability) — email us and we'll send it in a common machine-readable format</li>
                <li><strong>Withdraw consent</strong> — turn off location access in iOS Settings, or use Disconnect eBird</li>
                <li><strong>Object or complain</strong> — contact us, or your local data-protection authority</li>
              </ul>
              <p className="text-gray-700 mb-4">
                To make a request, email <a href="mailto:support@gobirding.ai" className={linkClass}>support@gobirding.ai</a> from
                the email address on your account. We'll respond within 30 days. We may need to confirm your identity before acting
                on a request. Guest accounts have no email address, so please manage guest data from inside the app.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Deleting Your Account and Data</h2>
              <p className="text-gray-700 mb-4">
                You can delete your account and all associated data at any time, directly in the app — including guest accounts:
              </p>
              <ol className="list-decimal pl-6 text-gray-700 mb-4">
                <li>Open Next Lifer and tap the gear icon to open <strong>Settings</strong>.</li>
                <li>Go to <strong>Account</strong> and tap <strong>Delete account</strong>.</li>
                <li>Review what will be deleted and tap <strong>Delete my account</strong>.</li>
              </ol>
              <p className="text-gray-700 mb-4">
                This permanently deletes your sign-in, your profile, your life list and year list, your favorites and saved areas,
                any saved eBird API key, and any device tokens from our servers, and clears Next Lifer's data (including your eBird
                sign-in session) from your iPhone. It can't be undone. Your eBird account and checklists at ebird.org are separate
                and are not affected.
              </p>
              <p className="text-gray-700 mb-4">
                To remove only the eBird sign-in session from your phone, use <strong>Disconnect eBird</strong> in Settings. Deleting
                the app from your iPhone does not by itself delete your account data from our servers. You can also email{' '}
                <a href="mailto:support@gobirding.ai" className={linkClass}>support@gobirding.ai</a> to request deletion.
                More help is on the{' '}
                <button onClick={() => handleNavigation('/next-lifer/support')} className={linkClass}>Next Lifer Support page</button>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Next Lifer is not directed to children under 13, and we do not knowingly collect personal information from children
                under 13. If you believe a child has given us personal information, please contact us and we will delete it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Security</h2>
              <p className="text-gray-700 mb-4">
                We protect your information with encryption in transit (HTTPS), row-level security on account data so each
                account can access only its own records, and by keeping sensitive items such as your eBird sign-in session on your
                device. We collect as little as we can. No system is perfectly secure, but we work to protect your data and will
                notify you as required by law if a breach affects you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Terms and Attribution</h2>
              <p className="text-gray-700 mb-4">
                Bird data in Next Lifer comes from eBird, a project of the Cornell Lab of Ornithology, and is subject to the{' '}
                <a href="https://www.birds.cornell.edu/home/ebird-api-terms-of-use/" className={linkClass} target="_blank" rel="noopener noreferrer">eBird API Terms of Use</a>.
                Place search and geocoding are provided by Apple; directions open in Apple Maps or Google Maps. Bird photos are
                from Wikimedia Commons, with credits shown in the app. Your use of the App Store version of Next Lifer is also
                subject to Apple's standard Licensed Application End User License Agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this policy from time to time. We'll post the new version on this page and update the "Last updated"
                date. If we make a significant change — for example, collecting a new kind of personal information — we'll let you
                know in advance, for example in the app.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                Questions, requests, or concerns about this policy or your data:{' '}
                <a href="mailto:support@gobirding.ai" className={linkClass}>support@gobirding.ai</a>
                {' '}— the Go Birding team, gobirding.ai.
              </p>
            </section>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Privacy Summary</h3>
              <p className="text-green-800">
                <strong>Your birding data is yours.</strong> Next Lifer stores only what it needs to find birds for you and sync your
                lists, never sees your eBird password, has no ads or trackers, and lets you delete everything from inside the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextLiferPrivacy;
