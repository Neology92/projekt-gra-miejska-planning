/* ============================================================================
   steps.js — etapy gry (warstwa fabularna online, mechanics/hybryda-online.md).
   Wejście = NUMER GRUPY (1-10) na starcie; dalej flow danej grupy. Bez routingu
   URL, bez kodów dostępu. Stan (grupa + etap + solved) w localStorage.

   Schemat etapu:
     id, label, title
     brief[]   — bloki narracji (verbatim z renderu; treść briefów bez przepisywania)
     prop      — ramka „PROP AT THIS STAGE": what/from/where
     puzzle    — null | { type:'symbol-sequence', prompt } — dane Z1 budowane per
                 grupa w app.js (z1PuzzleFor)
     next, terminal
   Player-facing = EN. Nazwy własne toruńskie w oryginale.
   ============================================================================ */

const STEPS = {

  /* --- Z1 — szlak symboli (wspólny brief; deszyfrownik per grupa). --- */
  z1: {
    id: 'z1',
    label: 'Z1',
    title: 'The road begins',

    brief: [
      { reg: 'narration', html: 'The wax gives under your thumb — a seal none of you knows. Inside: a single sheet of instructions, and folded beneath it, heavier, the thing itself — the letter you are paid to carry, and forbidden to read.' },
      { reg: 'narration', html: 'Outside, the city does not yet know to be afraid. It is Saint Dorothy’s day, the last gasp of carnival before the fast — pipes and drums down every street, masks on half the faces you pass, a child pressing paper roses into your hands as if roses grew in February. Good cover, a day like this: you can wear another face, and no one looks at you twice.' },
      { reg: 'rule' },
      { reg: 'dateline', html: 'Toruń, the 6th of February, the Year of Our Lord 1454' },
      { reg: 'head', html: 'Messengers,' },
      { reg: 'msg', html: 'The sealed letter enclosed with this note is not yours to read. Carry it. Protect it. Deliver it before the ninth bell strikes tonight.' },
      { reg: 'msg', html: 'You were paid to do a simple thing. The city has made it complicated. Your contact is not where he was meant to be, and you will have to find your own way to the one who must receive this.' },
      { reg: 'msg', html: 'Know this: whoever reads that letter, loses it, or puts it in the wrong hands will answer for it. Not with coin. <em>With their hands.</em> You are warned once. You will not be warned again.' },
      { reg: 'rule' },
      { reg: 'head', html: 'Your road begins here.' },
      { reg: 'msg', html: 'Enclosed: a <em>map</em> of marks and a <em>cipher sheet</em>.' },
      { reg: 'msg', html: 'Each mark on the map tells you only <em>where</em> to go — never what you will find. That you must see for yourselves.' },
      { reg: 'msg', html: '<strong>Begin at △.</strong> Find it on the map and go.' },
      { reg: 'msg', html: 'At each mark:' },
      { reg: 'list', items: [
        'Look for a <em>detail</em> that matches one of the pictures on your cipher sheet.',
        'That picture points you to the <em>next mark</em>. Go there. Do it again.',
        'Write each place you name into the <em>legend</em> on your map.',
      ] },
      { reg: 'msg', html: 'Your chain is <strong>exactly four steps</strong> long, and it ends where you are to make contact.' },
      { reg: 'msg', html: 'Beware false trails: if you find yourselves going in circles, or returning to a mark you have already named, you have strayed — go back to the last mark you were sure of.' },
      { reg: 'narration', html: 'Tell no one.' },
    ],

    prop: {
      what: 'a map, a cipher sheet, and a sealed letter',
      from: 'the Game Master',
      where: 'handed to you in the starting pack',
    },

    puzzle: { type: 'symbol-sequence', prompt: 'Tap the four details you found, in the order you found them.' },
    next: 'z2',
  },

  /* --- Z2 — pierwsza koperta frakcyjna: zagadka logiczna → kontakt.
         Treść (scena/slip/zagadka/reveal) = Z2_DATA[frakcja] (z2-data.js). --- */
  z2: {
    id: 'z2',
    label: 'Z2',
    prop: {
      what: 'the sealed letter (still unopened)',
      from: 'you have carried it since the start',
      where: 'keep it on you — it is handed over only at the finale',
    },
    puzzle: { type: 'logic' },   // dane per frakcja z Z2_DATA
    next: 'z3',
  },

  /* --- Z3 — scena handlera (Jordan/Albrecht). Apka = nośnik briefu (bez walidacji).
         Treść = Z3_DATA[frakcja] (z3-data.js). Z3 → opcjonalna = kolejna faza. --- */
  z3: {
    id: 'z3',
    label: 'Z3',
    type: 'actor-brief',   // dane per frakcja z Z3_DATA
    next: 'opt',
  },

  /* --- Opcjonalna (F2B) — jedna zagadka per grupa (Z4–Z10). Treść = OPTIONAL
         (optional-data.js) wg GROUP_OPTIONAL. Apka waliduje odpowiedź.
         Po niej → finał = kolejna faza (granica POC). --- */
  opt: {
    id: 'opt',
    label: 'F2B',
    type: 'optional',
    next: 'fin',
  },

  /* --- Finał (Z7 mieszczanie / Z11 krzyżacy) — szyfr. Treść = FINALE[frakcja]
         (finale-data.js). Apka = brief + szyfrogram + walidacja odszyfrowanego
         tekstu; klucz fizyczny w ręku gracza. Po nim KF = scena na żywo. --- */
  fin: {
    id: 'fin',
    label: 'Finale',
    type: 'finale',
    next: null,
  },

};

const STEP_ORDER = ['z1', 'z2', 'z3', 'opt', 'fin'];

/* ----------------------------------------------------------------------------
   WAYFINDING — meta-drogowskaz per etap (rejestr „ramki meta-logistycznej",
   mechanics/koperty-mg.md §Trzeci rejestr). Widoczny OD RAZU na każdej
   podstronie (nie dopiero po rozwiązaniu): mówi graczowi (a) że etap jest
   przechodni i jak się go kończy, (b) KIEDY trzeba iść do Mistrza Gry (MG).
   Rejestr meta — NIE część świata 1454. Player-facing = EN.

   Styki z MG wg kanonu (koperty-mg §"Kandydaci: Z1→raport, Z3→lista, Z4→kod,
   Z7→odpowiedź finałowa"):
     z1  — apka sama sprawdza łańcuch; MG tylko gdy brak rekwizytu ze startera
     z2  — w całości w apce → potem dojście do celu na mapie (handler, nie MG)
     z3  — scena aktora → raport u MG (Rynek) po kolejną kopertę
     opt — rekwizyt OD MG → odpowiedź z powrotem DO MG (Rynek)
     fin — odszyfruj kluczem w ręku → scena finałowa na żywo (Przedzamcze)
   ---------------------------------------------------------------------------- */
const WAYFINDING = {
  z1: 'You can clear this step here: name your four marks in the right order and the app carries you onward — no Game Master visit needed to pass. You do need your <strong>map</strong>, <strong>cipher card</strong> and the <strong>sealed letter</strong> (from the Game Master’s starting pack). Missing one? Find the Game Master at the Rynek Staromiejski before you go on.',
  z2: 'You can solve this here — <strong>no Game Master needed for this step</strong>. When the three errands fall into place, the app points you to one mark on your map: go there in person and make contact. Stuck? The Game Master is at the Rynek Staromiejski.',
  z3: 'This part is played out face to face. Do what is asked, then <strong>bring what you gain to the Game Master at the Rynek Staromiejski</strong> — your next envelope is waiting there.',
  opt: 'The <strong>Game Master gives you the prop</strong> for this task. Solve it here, then <strong>carry your answer back to the Game Master at the Rynek Staromiejski</strong> to receive what was waiting on it. (Without this step there is no finale — it is your way through.)',
  fin: 'Read the cipher here — the key is already in your hand (from the Game Master). Once you have it, <strong>carry the sealed letter to Przedzamcze for the ninth bell (9 PM)</strong>: the last scene is played live. This is the end of the trail — every path reaches it.',
};
