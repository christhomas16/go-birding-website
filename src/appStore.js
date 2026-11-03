import { useEffect } from 'react';

// App Store links for our three apps. Every link carries the "website"
// campaign (pt = our provider token, ct = campaign name), so App Store Connect
// (Analytics > Campaigns) counts the installs that came from this site.
const PROVIDER_TOKEN = '127268262';
const CAMPAIGN = 'website';

export const APP_IDS = {
  goBirdingAI: '6747407940',
  birdChatter: '6749836729',
  nextLifer: '6777703986',
};

export const appStoreUrl = (app) =>
  `https://apps.apple.com/us/app/id${APP_IDS[app]}?pt=${PROVIDER_TOKEN}&ct=${CAMPAIGN}&mt=8`;

// Safari on iPhone shows a native "Get" banner for the app while this page is
// open. The tag is removed again when the page unmounts, so each app page
// advertises only its own app.
export const useSmartAppBanner = (app) => {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'apple-itunes-app';
    meta.content = `app-id=${APP_IDS[app]}`;
    document.head.appendChild(meta);
    return () => meta.remove();
  }, [app]);
};
