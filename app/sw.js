/* sw.js — KILL-SWITCH. Poprzednie wersje rejestrowały Service Workera, który
   cache'ował stare pliki i powodował blank-screeny. Ta wersja NIE cache'uje —
   przy najbliższym sprawdzeniu aktualizacji przeglądarka pobierze ten plik,
   a on sam się wyrejestruje, skasuje cache i przeładuje otwarte karty.
   Nowe wersje aplikacji NIE rejestrują już SW w ogóle. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    try {
      const ks = await caches.keys();
      await Promise.all(ks.map((k) => caches.delete(k)));
    } catch (err) {}
    try { await self.registration.unregister(); } catch (err) {}
    try {
      const cs = await self.clients.matchAll({ type: 'window' });
      cs.forEach((c) => c.navigate(c.url));
    } catch (err) {}
  })());
});
/* brak fetch handlera → wszystkie żądania idą wprost do sieci (passthrough) */
