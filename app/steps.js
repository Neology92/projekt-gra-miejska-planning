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

  /* --- Z2 — checkpoint: kontakt odnaleziony (granica POC). --- */
  /* --- Z2 — pierwsza koperta frakcyjna: zagadka logiczna → kontakt.
         Treść (scena/slip/zagadka/reveal) = Z2_DATA[frakcja] (z2-data.js).
         Z2→Z3 = scena aktora (Jordan/Albrecht) → granica POC. --- */
  z2: {
    id: 'z2',
    label: 'Z2',
    prop: {
      what: 'the sealed letter (still unopened)',
      from: 'you have carried it since the start',
      where: 'keep it on you — it is handed over only at the finale',
    },
    puzzle: { type: 'logic' },   // dane per frakcja z Z2_DATA
    next: null,                  // dalej tylko grupy z opcjonalną Z10 (patrz optionalStepFor)
  },

  /* --- Z4/Z6/Z5 (TR) i Z8/Z9 (KZ) — opcjonalne F2B, po Z2. Treść = *_DATA
         (optional-data.js); typy bramek: code-entry / pick-one / assign.
         Wszystkie terminalne = granica POC (finał Z7/Z11 poza apką). --- */
  z4: {
    id: 'z4', label: 'Z4',
    prop: {
      what: 'a small iron-tongue instrument, its tongues marked with numbers',
      from: 'the Game Master, after you brought in the stolen list',
      where: 'the tune is played to you — play it back, note for note',
    },
    puzzle: { type: 'code-entry' }, next: null, terminal: true,
  },
  z5: {
    id: 'z5', label: 'Z5',
    prop: {
      what: 'seven sealed jars lettered A–G, and Master Bogumił’s recipe',
      from: 'the Game Master sends you to the baker',
      where: 'at the baker’s bench — take their measure, but do not open them',
    },
    puzzle: { type: 'assign' }, next: null, terminal: true,
  },
  z6: {
    id: 'z6', label: 'Z6',
    prop: {
      what: 'a Council dispatch naming five envoys and the four cities that answered',
      from: 'the Game Master, from the Council’s own table',
      where: 'read it against the arms set in the cobbles of Szeroka street',
    },
    puzzle: { type: 'pick-one' }, next: null, terminal: true,
  },
  z8: {
    id: 'z8', label: 'Z8',
    prop: {
      what: 'a small iron-tongue instrument, its tongues marked with numbers',
      from: 'the Game Master, after Piccolo',
      where: 'the tune is played to you — play it back, note for note',
    },
    puzzle: { type: 'code-entry' }, next: null, terminal: true,
  },
  z9: {
    id: 'z9', label: 'Z9',
    prop: {
      what: 'seven sealed jars lettered A–G, and the brother-cook’s recipe',
      from: 'the Game Master sends you to the kitchen brother',
      where: 'at the cook’s board — take their measure, but do not open them',
    },
    puzzle: { type: 'assign' }, next: null, terminal: true,
  },

  /* --- Z10 — opcjonalna F2B (tor KZ, grupy 9/10): polichromie „Biedronka". --- */
  /* --- Karta „Bestiariusz Krzyżowca" (8 bestii A–H) → wskaż obecne na ścianie
         (Szeroka 22). Treść (scena/roman/zagadka/reveal) = Z10_DATA (z10-data.js).
         Bramka = zbiór liter (A/B/E). Terminal = granica POC (finał Z11 poza apką). --- */
  z10: {
    id: 'z10',
    label: 'Z10',
    prop: {
      what: 'the Bestiary leaf — eight beasts in roundels, lettered A–H',
      from: 'handed to you by the Game Master after Piccolo',
      where: 'read it against the painted house on the Broad Street (Szeroka 22)',
    },
    puzzle: { type: 'beast-select' },   // dane z Z10_DATA
    next: null,
    terminal: true,
  },

};

const STEP_ORDER = ['z1', 'z2', 'z4', 'z5', 'z6', 'z8', 'z9', 'z10'];

/* Po Z2 każda grupa idzie do swojej OPCJONALNEJ zagadki F2B (kanon: CLAUDE.md
   §Kanoniczny przydział grup / materials/ops/koperty-kody-lista.md):
     TR: G1->Z4 · G2/G3->Z5 · G4/G5->Z6 ；  KZ: G6/G7->Z8 · G8->Z9 · G9/G10->Z10.
   W apce pomijamy sceny aktorów (Z3/Z3Z/Z3b) — jak dotąd POC. */
const OPTIONAL_BY_GROUP = {
  1: 'z4', 2: 'z5', 3: 'z5', 4: 'z6', 5: 'z6',
  6: 'z8', 7: 'z8', 8: 'z9', 9: 'z10', 10: 'z10',
};
function optionalStepFor(group) {
  return OPTIONAL_BY_GROUP[group] || null;
}
