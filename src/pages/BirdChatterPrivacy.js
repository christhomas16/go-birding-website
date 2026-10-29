import React from 'react';
import { useNavigate } from 'react-router-dom';

const BirdChatterPrivacy = () => {
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

  const linkClass = 'text-green-700 hover:text-green-900 underline';

  const dataRows = [
    {
      data: 'Account identifiers — a user ID, your display name and profile photo from Google or Apple, and your email address (stored privately, never shown to other players; Sign in with Apple may give us a private relay address)',
      why: 'To sign you in, keep your points and birds attached to your account, and show your name on leaderboards',
      basis: 'Needed to provide the app'
    },
    {
      data: 'Sessions you save — the species detected (names and confidence), when the session started and how long it lasted, and the county, state and country it was in',
      why: 'To score your points server-side, build your life list, and place you on the right leaderboards',
      basis: 'Needed to provide the features you ask for'
    },
    {
      data: 'Game progress — points, lifer counts, yearly stats, streaks, weekly challenges, milestones and Top-10 badges',
      why: 'To run the game, rankings and badges',
      basis: 'Needed to provide the app'
    },
    {
      data: 'Friends — your friend code and the players you add',
      why: 'To show your private friends leaderboard',
      basis: 'Your choice'
    },
    {
      data: 'Basic app analytics — sign-in events and which screens are opened, with a random app-instance identifier (Google Analytics for Firebase)',
      why: 'To understand whether sign-in works and which parts of the app are used, so we can fix and improve it',
      basis: 'Our interest in improving the app; never used for ads or tracking'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-8">
            <img
              src="/birdchatter/AppIcon.png"
              alt="Bird Chatter"
              className="w-12 h-12 rounded-xl shadow-sm mr-4"
            />
            <h1 className="text-3xl font-bold text-gray-900">Bird Chatter Privacy Policy</h1>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-2">
              <strong>Effective date:</strong> October 28, 2026
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> October 28, 2026
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-green-900 mb-2">Summary</h2>
              <ul className="list-disc pl-6 text-green-900 space-y-1">
                <li><strong>Your audio never leaves your iPhone.</strong> Birds are identified on your device.</li>
                <li>You can play as a guest without an account; guest data stays on your phone.</li>
                <li>If you sign in, we store your sessions' species list, points and county so we can score them and rank you.</li>
                <li><strong>No ads, no tracking, and we never sell your data.</strong></li>
                <li>You can delete your account and all of its online data in the app at any time: <strong>Nest → Account → Delete account</strong>.</li>
              </ul>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Who We Are</h2>
              <p className="text-gray-700 mb-4">
                Bird Chatter ("the app") is an iPhone app made by the Go Birding team at gobirding.ai ("we," "our," or "us").
                It identifies birds by their songs and calls and turns birding into a game with points, life lists and leaderboards.
                We are responsible for the personal information described in this policy.
              </p>
              <p className="text-gray-700 mb-4">
                Contact: <a href="mailto:support@gobirding.ai" className={linkClass}>support@gobirding.ai</a>
              </p>
              <p className="text-gray-700 mb-4">
                This policy covers Bird Chatter only. Our other apps have their own policies — for example, the{' '}
                <button onClick={() => handleNavigation('/privacy')} className={linkClass}>Go Birding AI Privacy Policy</button> and the{' '}
                <button onClick={() => handleNavigation('/next-lifer/privacy')} className={linkClass}>Next Lifer Privacy Policy</button>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect and Why</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Audio and the microphone</h3>
              <p className="text-gray-700 mb-4">
                Bird Chatter uses your microphone only while you are listening. The sound is analyzed on your iPhone by the BirdNET
                model; <strong>audio is never uploaded to us or anyone else</strong>. The app keeps the best three seconds of each bird
                on your phone for your last 10 sessions so you can replay them. If you turn on <strong>Keep full recordings</strong>{' '}
                (Nest → Recordings), whole sessions are saved on your phone and appear in the Files app; otherwise each full recording
                is deleted as soon as the session ends. Clips and recordings leave your phone only if you share or export them yourself.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Location</h3>
              <p className="text-gray-700 mb-4">
                With your permission, the app uses your location on the device to rule out birds that are unlikely where you are,
                and to work out your county, state and country. We store only that <strong>county, state and country</strong> with your
                saved sessions — never your precise GPS coordinates.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Guest play</h3>
              <p className="text-gray-700 mb-4">
                You can use Bird Chatter as a guest without signing in. Guest sessions, points and birds are stored only on your phone.
                If you later sign in, you can choose to import them into your account, after which they are handled as described below.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.4 Information stored with your account</h3>
              <p className="text-gray-700 mb-4">
                Signing in with Google or Apple is optional and lets you appear on leaderboards, add friends and keep your progress
                across devices. When you are signed in, we store:
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 border-b border-gray-200 text-gray-900">Information</th>
                      <th className="text-left p-3 border-b border-gray-200 text-gray-900">Why</th>
                      <th className="text-left p-3 border-b border-gray-200 text-gray-900">Basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataRows.map((row, index) => (
                      <tr key={index} className="align-top">
                        <td className="p-3 border-b border-gray-200 text-gray-700">{row.data}</td>
                        <td className="p-3 border-b border-gray-200 text-gray-700">{row.why}</td>
                        <td className="p-3 border-b border-gray-200 text-gray-700">{row.basis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.5 What other players can see</h3>
              <p className="text-gray-700 mb-4">
                Leaderboards show your <strong>display name, profile photo, points and species count</strong>. Friends you add (and
                who add you) also see your streak. Other players never see your email, your individual sessions, your recordings,
                or where you were birding beyond the leaderboard you appear on.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.6 Information kept only on your device</h3>
              <p className="text-gray-700 mb-4">
                Audio clips, kept recordings, guest data, app settings, bird-name language and reminder times stay on your iPhone.
                Reminders (dawn chorus, streak at risk) are local notifications scheduled on your phone; we don't send push messages.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.7 What we don't collect</h3>
              <p className="text-gray-700 mb-4">
                We don't collect audio, precise location, contacts, photos, or advertising identifiers, and we don't track you across
                other companies' apps or websites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>To score your sessions, build your life list and year list, and run streaks, challenges and badges</li>
                <li>To show leaderboards and your friends leaderboard</li>
                <li>To keep your progress when you change or reinstall your phone</li>
                <li>To protect the game from cheating and abuse (for example, daily limits and verifying requests come from the real app)</li>
                <li>To understand app usage at a basic level so we can fix problems and improve the app</li>
              </ul>
              <p className="text-gray-700 mb-4">
                We do not use your information for advertising, and we do not sell or rent it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Where Your Data Is Stored</h2>
              <p className="text-gray-700 mb-4">
                Account and game data is stored in Google Firebase (Cloud Firestore and Cloud Functions) in the United States.
                Data is encrypted in transit (HTTPS) and at rest.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third Parties and Service Providers</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Google Firebase</strong> — sign-in (Firebase Authentication), database (Cloud Firestore), server-side scoring
                  (Cloud Functions), basic analytics (Google Analytics for Firebase) and app integrity checks (Firebase App Check).
                  See the{' '}
                  <a href="https://firebase.google.com/support/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">Firebase privacy information</a>.
                </li>
                <li>
                  <strong>Google Sign-In</strong> and <strong>Sign in with Apple</strong> — if you choose to sign in with them.
                </li>
                <li>
                  <strong>Apple</strong> — App Attest and DeviceCheck (to confirm requests come from the genuine app) and Apple's
                  place-name lookup, which turns your location into a county and state name.
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                These providers process data on our behalf to run the app. We don't share your information with anyone else unless
                required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. How Long We Keep Your Data</h2>
              <p className="text-gray-700 mb-4">
                We keep your account and game data for as long as you have an account. When you delete your account, your online data
                is deleted from our active systems right away. Analytics data is kept by Google for a limited period under our
                Firebase settings and is not linked to your name or email.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights and Choices</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Play as a guest — no account and nothing stored online</li>
                <li>Turn microphone or location access off at any time in iPhone Settings → Bird Chatter</li>
                <li>Change your display name and photo in your Google or Apple account</li>
                <li>Remove friends at any time (press and hold a friend on the Friends leaderboard)</li>
                <li>Ask us for a copy of your data, or to correct or delete it, by emailing{' '}
                  <a href="mailto:support@gobirding.ai" className={linkClass}>support@gobirding.ai</a></li>
              </ul>
              <p className="text-gray-700 mb-4">
                Depending on where you live (for example, in the EU, UK or California), you may have additional rights under local law;
                contact us and we'll help.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Deleting Your Account and Data</h2>
              <p className="text-gray-700 mb-4">
                In the app, go to <strong>Nest → Account → Delete account</strong>. This permanently deletes your profile, sessions,
                species, badges, friends and leaderboard entries from our servers, and signs you out. You may be asked to sign in again
                first to confirm it's you. Clips and recordings on your phone are removed when you delete the app.
              </p>
              <p className="text-gray-700 mb-4">
                If you can't access the app, email{' '}
                <a href="mailto:support@gobirding.ai" className={linkClass}>support@gobirding.ai</a> from the address on your account
                and we'll delete it for you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Bird Chatter is not directed to children under 13, and we don't knowingly collect personal information from them.
                If you believe a child has created an account, contact us and we'll delete it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Security</h2>
              <p className="text-gray-700 mb-4">
                Only the server can award points or change rankings; the app can't write them directly. Your email is stored in a
                private record only you can read. No system is perfectly secure, but we work to protect your information and will
                notify you as required by law if a breach affects it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Attribution</h2>
              <p className="text-gray-700 mb-4">
                Bird identification uses BirdNET, developed by the K. Lisa Yang Center for Conservation Bioacoustics at the Cornell
                Lab of Ornithology and Chemnitz University of Technology. Bird Chatter is an independent app and is not affiliated
                with or endorsed by the Cornell Lab of Ornithology or eBird.
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
                <strong>Your recordings stay yours.</strong> Bird Chatter identifies birds on your iPhone, stores only your species list,
                points and county when you sign in, has no ads or trackers, and lets you delete everything from inside the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirdChatterPrivacy;
