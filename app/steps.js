/* ============================================================================
   steps.js — rejestr etapów gry (warstwa fabularna online wg
   mechanics/hybryda-online.md). Każdy etap = osobna podstrona (refresh-safe),
   z własnym KODEM DOSTĘPU (wejście + recovery, gdy apka padnie / storage zniknie).

   Schemat etapu:
     id        — slug w URL ('z1' → /z1)
     label     — kod zagadki na ekranie
     enterType — 'MG' | 'AKTOR' | 'PREV' (typ z łańcucha kodów, spec §B)
     code      — kod dostępu do TEGO etapu (gate + recovery). Format = otwarte (#D).
     title     — nagłówek
     brief[]   — bloki narracji (verbatim z renderu/draftu; spec: treść briefów
                 bez przepisywania, zmienia się tylko nośnik koperta→podstrona)
     prop      — ramka „PROP AT THIS STAGE" (spec §C): what/from/where
     puzzle    — null | { type:'symbol-sequence', data } — bramka PREV w apce
     next      — id następnego etapu (po rozwiązaniu) | null
     terminal  — true dla granicy POC

   Player-facing = EN. Nazwy własne toruńskie w oryginale. Kody DEMO — patrz #D.
   ============================================================================ */

const STEPS = {

  /* --- Z1 — szlak symboli (wspólna, ukrywa frakcję). Wejście = kod MG. --- */
  z1: {
    id: 'z1',
    label: 'Z1',
    enterType: 'MG',
    code: 'START-1454',        // ⚠ DEMO kod-MG (pakiet startowy). Format = #D.
    title: 'The road begins',

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

    // Bramka PREV: wybór 4 symboli (detali) w kolejności — apka waliduje.
    puzzle: {
      type: 'symbol-sequence',
      prompt: 'Tap the four details you found, in the order you found them.',
      data: Z1_G1,
    },

    next: 'z2',
  },

  /* --- Z2 — checkpoint: kontakt odnaleziony. Granica POC (zagadka Z2 = dalej). --- */
  z2: {
    id: 'z2',
    label: 'Z2',
    enterType: 'PREV',
    code: 'RAVEN-2613',        // ⚠ DEMO recovery-code odsłaniany po Z1. Format = #D.
    title: 'You reached your contact',

    brief: [
      { reg: 'narration', html: 'Four marks, named in order — and the last one opens. Someone has been waiting for exactly your faces, on exactly this day. The carnival noise closes over the two of you like water.' },
      { reg: 'msg', html: 'This is where your single errand becomes something larger. From here the road forks — but which way, and to whom, is the next chapter.' },
      { reg: 'rule' },
      { reg: 'narration', html: 'Keep the sealed letter close. You will be asked for it before the night is out.' },
    ],

    prop: {
      what: 'the sealed letter (still unopened)',
      from: 'you have carried it since the start',
      where: 'keep it on you — it is handed over only at the finale',
    },

    puzzle: null,
    next: null,
    terminal: true,   // POC kończy się tu; Z2 jako pełna zagadka = kolejna faza
  },

};

const STEP_ORDER = ['z1', 'z2'];
