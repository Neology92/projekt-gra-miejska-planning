/* sw.js — minimalny offline cache (spec §D: łączność/offline w terenie, ~3h gry).
   Cache-first dla powłoki POC. Bump CACHE przy zmianie plików. */
const CACHE = 'hybryda-poc-v1';
const SHELL = [
  '.', 'index.html', 'styles.css', 'app.js', 'stage-data.js', 'manifest.webmanifest',
  'fonts/IMFellEnglish-Regular.woff2',
  'fonts/IMFellEnglish-Italic.woff2',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).catch(()=>{}));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks =>
    Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(()=>{});
      return res;
    }).catch(() => hit))
  );
});
