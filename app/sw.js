/* sw.js — offline shell (spec §D: łączność/offline w terenie, ~3h gry).
   Cache-first dla powłoki; nawigacje (deep-link /zN po odświeżeniu) → fallback
   na cached index.html (routing czysto kliencki). Bump CACHE przy zmianie. */
const CACHE = 'torun1454-v1';
const SHELL = [
  '/', '/index.html', '/styles.css', '/app.js', '/steps.js', '/z1-data.js',
  '/manifest.webmanifest',
  '/fonts/IMFellEnglish-Regular.woff2', '/fonts/IMFellEnglish-Italic.woff2',
  '/icons/n01-piernikarka.svg', '/icons/n02-przekupka.svg', '/icons/n03-modry-fartuch.svg',
  '/icons/n04-apteka-lew.svg', '/icons/n05-kosciol-jakuba.svg', '/icons/n06-baj-pomorski.svg',
  '/icons/c04-ratusz.svg', '/icons/s04-kotwica-bulwar.svg', '/icons/w01-luk-cezara.svg',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).catch(() => {}));
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // nawigacje (odświeżenie /z1, /z2) → zawsze index.html z cache (SPA)
  if (req.mode === 'navigate') {
    e.respondWith(caches.match('/index.html').then((hit) => hit || fetch(req).catch(() => caches.match('/'))));
    return;
  }
  e.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
      return res;
    }).catch(() => hit))
  );
});
