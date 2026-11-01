// Minimálny service worker – len kvôli inštalácii aplikácie na plochu.
// Zámerne NEcachuje nič, aby sa vždy načítala aktuálna verzia pokladne.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
