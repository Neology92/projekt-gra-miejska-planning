/* ============================================================================
   stage-data.js — dane jednego etapu hybrydy (POC: Z1)
   ----------------------------------------------------------------------------
   Generyczny SCHEMAT etapu hybrydy (mechanics/hybryda-online.md). Dołożenie
   kolejnego etapu = dopisanie obiektu o tym samym kształcie do STAGES[].
   Cały tekst player-facing = EN (CLAUDE.md §Język materiałów). Nazwy własne
   toruńskie zostają w oryginale.

   Pola etapu:
     id            — kod zagadki ('Z1', 'Z2', …)
     faction       — 'wspolne' | 'miasto' | 'krzyzacy'
     title         — nagłówek na ekranie briefu
     enter         — jak wejść na etap: { type:'MG'|'AKTOR'|'PREV', codes:[…] }
                     (typ tylko opisowy — łańcuch kodów z tabeli B spec)
     brief         — bloki narracji (registers: 'narration' kursywa / 'msg' roman
                     / 'list' / 'rule'); migracja 1:1 z envelopes/wspolne-1-Z1.md
     prop          — ramka „PROP AT THIS STAGE" (spec §C): what / from / where
     exit          — jak odblokować następny krok:
                       { type:'PREV', kind:'sequence', steps:[…aliasy…] }  → apka waliduje
                       { type:'AKTOR'|'MG', code:'…' }                     → kod z zewnątrz
     metaCard      — kartka „from the author"; bramkowana spoilerowo
                     (spec §D / prototype/meta-cards/README.md): otwiera się
                     dopiero PO ukończeniu tego etapu (= przy etapie N+1).
   ============================================================================ */

/* ⚠ DEMO DATA — łańcuch szlaku Z1.
   Źródło: puzzles/z1-sciezki-wzorcowe.md §EX-1 (ścieżka „Piernikarka", glify
   N01→N03→C03→C06). UWAGA: todo/dashboard.md §Decyzje notuje „Wariant A"
   (Piernikarka→osiołek→Krzywa Wieża→Kopernik) — rozbieżność board↔md, decyzja
   trasy wciąż otwarta. Tu użyto EX-1 jako PRZYKŁADU do pokazania mechaniki.
   Prawdziwe per-grupowe łańcuchy (10 kart) → z1-sciezki-wzorcowe.md / decoders. */
const STAGE_Z1 = {
  id: 'Z1',
  faction: 'wspolne',
  title: 'The road begins',

  // START → Z1 = kod MG (pakiet startowy). Format kodów = otwarte (spec §D);
  // tu przykładowy kod-MG. Akceptujemy kilka wariantów zapisu.
  enter: {
    type: 'MG',
    label: 'Enter the code the Game Master gave you',
    codes: ['START-1454', 'start1454', '1454'],
  },

  brief: [
    { reg: 'narration', html: 'The wax gives under your thumb — a seal none of you knows. Inside: a single sheet of instructions, and folded beneath it, heavier, the thing itself — the letter you are paid to carry, and forbidden to read.' },
    { reg: 'narration', html: 'Outside, the city does not yet know to be afraid. It is Saint Dorothy’s day, the last gasp of carnival before the fast — pipes and drums down every street, masks on half the faces you pass, a child pressing paper roses into your hands as if roses grew in February. Good cover, a day like this: you can wear another face, and no one looks at you twice.' },
    { reg: 'rule' },
    { reg: 'dateline', html: 'Toruń, the 6th of February, the Year of Our Lord 1454' },
    { reg: 'head', html: 'Messengers,' },
    { reg: 'msg', html: 'The sealed letter enclosed with this note is not yours to read. Carry it. Protect it. Deliver it before the eighth bell strikes tonight.' },
    { reg: 'msg', html: 'You were paid to do a simple thing. The city has made it complicated. Your contact is not where he was meant to be, and you will have to find your own way to the one who must receive this.' },
    { reg: 'msg', html: 'Know this: whoever reads that letter, loses it, or puts it in the wrong hands will answer for it. Not with coin. <em>With their hands.</em> You are warned once. You will not be warned again.' },
    { reg: 'rule' },
    { reg: 'head', html: 'Your road begins here.' },
    { reg: 'msg', html: 'You hold a <em>map</em> of marks and a <em>cipher sheet</em>.' },
    { reg: 'msg', html: 'Each mark on the map tells you only <em>where</em> to go — never what you will find. That you must see for yourselves.' },
    { reg: 'msg', html: '<strong>Begin at △.</strong> Find it on the map and go.' },
    { reg: 'list', items: [
      'Look for a <em>detail</em> that matches one of the pictures on your cipher sheet.',
      'That picture points you to the <em>next mark</em>. Go there. Do it again.',
      'Write each place you name into the <em>legend</em> on your map.',
    ] },
    { reg: 'msg', html: 'Your chain is <strong>exactly four steps</strong> long, and it ends where you are to make contact.' },
    { reg: 'msg', html: 'Beware false trails: if you find yourselves going in circles, or returning to a mark you have already named, you have strayed — go back to the last mark you were sure of.' },
  ],

  // Ramka fail-safe rekwizytu (spec §C, wiersz Z1). EN (player-facing).
  prop: {
    what: 'a map, a cipher sheet, and a sealed letter',
    from: 'the Game Master',
    where: 'handed to you in the starting pack',
  },

  // Z1 → Z2 = PREV: apka sama waliduje 4 nazwane miejsca w kolejności.
  // (Migracja meta-noty „bring four places to the GM" → walidacja w apce.)
  exit: {
    type: 'PREV',
    kind: 'sequence',
    prompt: 'Name the four places of your chain, in the order you found them.',
    steps: [
      { canonical: 'Pomnik Piernikarki',            aliases: ['piernikarka', 'pomnik piernikarki', 'gingerbread woman', 'gingerbread maker'] },
      { canonical: 'Gospoda Pod Modrym Fartuchem',  aliases: ['modry fartuch', 'pod modrym fartuchem', 'gospoda pod modrym fartuchem', 'blue apron'] },
      { canonical: 'Pies Filuś',                    aliases: ['filus', 'pies filus', 'dog filus'] },
      { canonical: 'Kamienica Pod Gwiazdą',         aliases: ['pod gwiazda', 'kamienica pod gwiazda', 'house under the star', 'star house', 'gwiazda'] },
    ],
  },

  // Kartka „od autora" — bramkowana: otwiera się dopiero PO ukończeniu Z1.
  // ⚠ PLACEHOLDER — finalna treść = praca Oskara (lore/meta-kartki/).
  metaCard: {
    title: 'From the author',
    locked: true, // odblokowuje się po rozwiązaniu etapu (spec §D: kartka N @ etap N+1)
    body: 'Almost nothing on your trail was really there in 1454. The corner you just stood on remembers a different city. — placeholder; final text is Oskar’s (see lore/meta-kartki/).',
  },

  // Co następuje po ukończeniu (dla POC tylko informacyjnie — kolejny etap = Z2).
  next: {
    id: 'Z2',
    note: 'Z2 unlocks. In the field your road forks here into the two factions (Mieszczanie / Krzyżacy).',
  },
};

// Rejestr etapów. POC ma jeden; kolejne dokłada się tu.
const STAGES = [STAGE_Z1];
