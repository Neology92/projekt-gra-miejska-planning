/* ============================================================================
   z10-data.js — KANON zagadki Z10 (opcjonalna F2B, tor KZ; grupy 9 brązowy / 10 czarny).
   Polichromie „Biedronka" (Szeroka 22) + karta „Bestiariusz Krzyżowca" (8 bestii A–H).
   Gracz wskazuje, które bestie FAKTYCZNIE są na ścianie = A, B, E
   (ZBIÓR — kolejność bez znaczenia, „no more, no fewer").
   Źródło: envelopes/krzyzacy-4-Z10.md (tekst gracza) · puzzles/polichromie-biedronka.md §Klucz.
   ⚠ Klucz A/B/E = research autorski, NIE zweryfikowany on-site (ryzyko przyjęte 2026-06-03,
      Oskar — „wbuduj mimo ryzyka"). Spot-check Szeroka 22 wciąż otwarty.

   Player-facing = EN. Nazwy własne toruńskie w oryginale.
   ============================================================================ */

const Z10_DATA = {
  title: 'The beasts on the wall',
  successTitle: 'Known for a brother',

  // narracja drogi pod kamienicę (skrót verbatim z koperty — sekcja TEXT)
  scene: [
    { reg: 'narration', html: 'The stolen hour is yours and the enemy’s nest is behind you. Now a brother’s name is put into your hands, and a thing he left half-finished — work for one of the Order’s own, and no one else.' },
    { reg: 'narration', html: 'They send you down the Broad Street, where the great houses crowd the carnival, and you keep your heads down and your ears open the way couriers learn to. The house they bring you to is old — older than the quarrel — and its front is painted: a band of beasts under the eaves, faded to earth and moss and ox-blood, the kind of work no townsman troubles to read any more. Most walk past it as you would pass a wall. But a brother of the Order did not pass it. Dead now — and what he left was folded into the leaf they put in your hand: eight beasts drawn close and careful, and beneath them, a line meant for one of his own.' },
  ],

  // roman brata (pisany dokument; nadawca nieobecny w scenie)
  noteLabel: 'A line meant for one of his own',
  note: [
    'Brother — what is ours, we have always set where only our own would think to look. There is an old house on the Broad Street with the beasts of our craft painted on its front, among a deal of common work; and of the eight I have copied here, only some were ever truly set on that wall by our hand.',
    'A townsman sees only old paint. But you are of our own, and our own know their own beasts. Go, and read the wall as I taught it. Mark which of these eight stand upon it in truth — no more, no fewer — and bring their names back. By that, and that alone, will you be known.',
  ],

  puzzle: {
    lead: 'Read the wall',
    intro: 'Eight beasts are drawn on the leaf in your hand, lettered <strong>A</strong> through <strong>H</strong>. Stand before the painted house and match them one by one. Mark only the beasts that <em>truly stand on the wall</em> — no more, no fewer.',
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    answer: ['A', 'B', 'E'],   // klucz (zbiór) — patrz nagłówek pliku
  },

  reveal: {
    head: 'You read the wall as one of the Order’s own would — and named the beasts that truly stand on it.',
    body: 'By that, and that alone, you are known for a brother. What the dead man kept is given back into your hands, and with it, your next orders. <strong>Bring these three letters to the Game Master</strong> — they hold what comes next.',
  },
};
