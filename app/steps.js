/* ============================================================================
   steps.js — etapy gry (warstwa fabularna online, mechanics/hybryda-online.md).
   Wejście = NUMER GRUPY (1-10) na starcie; dalej flow danej grupy. Bez routingu
   URL i bez kodów dostępu/recovery (wejście per grupa). Uwaga: to NIE wyklucza
   bramek-kodów WEWNĄTRZ etapu — Z3 ma bramkę `code` (gracz wpisuje liczbę
   wyciągniętą od aktora). Stan (grupa + etap + solved) w localStorage.

   Schemat etapu:
     id, label, title
     brief[]   — bloki narracji (verbatim z renderu; treść briefów bez przepisywania)
     prop      — (opcjonalne) ramka „PROP AT THIS STAGE": what/from/where
     puzzle    — null
                 | { type:'symbol-sequence', prompt }  (Z1; dane per grupa, z1PuzzleFor)
                 | { type:'code', answer, heading, prompt, placeholder?, note?, errMsg? }
                   (Z3; gracz wpisuje liczbę wyciągniętą od aktora — np. `30` od Albrechta)
                 | { type:'observe', fields:[{label,placeholder?,accept:[...]}], heading,
                     prompt, note?, errMsg? }  (Z3Z; gracz zgłasza obserwacje — np. kolor
                     szaty + atrybut kucharza; walidacja każdego pola wg accept-listy)
     success   — (opcjonalne) { seal?, title, text } — ekran po rozwiązaniu (override Z1)
     fork      — (opcjonalne) { TR:<id|null>, KZ:<id|null> } — rozejście wg frakcji (Z2)
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

    puzzle: { type: 'symbol-sequence', prompt: 'Tap the four details you found, in the order you found them.' },
    next: 'z2',
  },

  /* --- Z2 — checkpoint: kontakt odnaleziony (granica POC). --- */
  z2: {
    id: 'z2',
    label: 'Z2',
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
    fork: { TR: 'z3', KZ: 'z3z' },   // TR → infiltracja zamku (Z3); KZ → infiltracja Piccolo (Z3Z)
  },

  /* --- Z3 — infiltracja zamku: zwiad u Albrechta + BRAMKA KODU (liczba załogi). ---
     Kod = liczba obrońców wyciągnięta z komtura w rozmowie (aktor) = `30`
     (historyczne ~30 braci; karta `materials/actors/albrecht-actor-card-draft.md §STEP 1B`).
     Po wpisaniu apka odsłania rozkaz kradzieży (z3b = dawne K-Z3b). --- */
  z3: {
    id: 'z3',
    label: 'Z3',
    title: 'Before the castle walls',

    brief: [
      { reg: 'narration', html: 'You found him in the open, before the castle walls, exactly as Jordan said you would — the Komtur Albrecht, pacing as if the whole city were already his.' },
      { reg: 'narration', html: 'You wore another face and played the eager informer, and his pride did the rest. He even drew out the Order’s own list of names — to “check” your tale against it — and let it fall, boasting, how few men it takes to hold a town of weavers and fishwives.' },
      { reg: 'rule' },
      { reg: 'head', html: 'One thing he let slip.' },
      { reg: 'msg', html: 'He named the strength of the castle aloud — too proud to think it a secret. The Council needs that number before the night is out.' },
    ],

    puzzle: {
      type: 'code',
      answer: '30',
      heading: 'The number he let slip',
      prompt: 'How many men did the Komtur boast hold the castle? Enter the number he spoke.',
      placeholder: 'a number',
      note: 'It is a number he said out loud while boasting. Didn’t catch it? Go back and let his pride run on.',
      errMsg: 'That is not what he said. Flatter him again — and this time, count.',
    },

    success: {
      seal: '✔',
      title: 'His pride betrays him',
      text: 'The number is yours — and it is a small one. The Order’s wall is far thinner than its banners. Now you understand what you really saw at his side.',
    },

    next: 'z3b',
  },

  /* --- Z3b — rozkaz kradzieży (odsłaniany po kodzie 30). Treść = `envelopes/miasto-4-Z3b.md`.
     Olśnienie „to była lista — ukradnij ją"; model patrolu na karcie Albrechta. --- */
  z3b: {
    id: 'z3b',
    label: 'Z3',
    title: 'So that is the list',

    brief: [
      { reg: 'narration', html: 'So that is the list.' },
      { reg: 'narration', html: 'You saw it the moment he drew it out — that strip of parchment he keeps at his side, names inked down one beneath another. “The Order forgets nothing,” he said, almost laughing, holding it up like a man showing off his gold. He has no idea what he is showing you.' },
      { reg: 'narration', html: 'Those are the names of the Secret Council — every soul the Order has bought out of your own walls, set down and marked. <em>That</em> is what you should have come here for. Not words. That.' },
      { reg: 'narration', html: 'And now he has set it down — laid it on the ledge at his side and stepped off to walk his little circuit, pointing out his walls, gazing off to boast. He will not hand it over; but he does not truly guard it either. A man that proud never watches his own table. Each time his round carries him away and his back is to it, the parchment lies there with no eyes on it.' },
      { reg: 'narration', html: 'You could take it. Only while he is turned — never while he is looking, or he will have you by the wrist, and then you are thieves caught at the Order’s own wall with no one to call. But on the turn, when he drifts off along his path…' },
      { reg: 'narration', html: 'Watch him. He walks it the same way each time. Wait for the turn. Lift it clean. Then walk — do not run, not until you must.' },
      { reg: 'narration', html: 'Carry those names away with you. Everything after tonight turns on them.' },
      { reg: 'rule' },
      { reg: 'msg', html: '<strong>↪ To the Game Master:</strong> once the list is in your hands, bring it to the Game Master at the Rynek Staromiejski (the Old Town market square). What comes next is waiting there.' },
    ],

    puzzle: null,
    next: null,
  },

  /* --- Z3Z — tor KZ: infiltracja Piccolo + BRAMKA OBSERWACJI (rozpoznaj kucharza). ---
     Lustro Z3 (TR). Zamiast liczby od Albrechta — dwie obserwacje Jordana:
     kolor szaty (brown) + atrybut (ladle). Te dane zasilają finał Z11
     (Tabela 1: kolor szaty × chochla → symbol; `puzzles/z11-szyfr-spec.md`).
     Pełny rozkaz Albrechta + tabele = FIZYCZNA koperta `krzyzacy-3-Z3Z` (tu skrót). --- */
  z3z: {
    id: 'z3z',
    label: 'Z3',
    title: 'Inside Piccolo',

    brief: [
      { reg: 'narration', html: 'You carried the Komtur’s order into the cook’s kitchen, exactly as he bid you — Piccolo, the traitors’ nest that wears an apron. The carnival lent you a face; you passed for the Council’s own, and the cook took you for friends and fed you without a second thought.' },
      { reg: 'narration', html: 'You ate at his hearth and spent his token to the last — every bowl one the Council will not. And while you ate, you watched the man with the ladle close.' },
      { reg: 'rule' },
      { reg: 'head', html: 'Now the Order wants the man.' },
      { reg: 'msg', html: 'Not his words — his person. By two plain marks the Order will know its enemy again, wherever he runs: the colour he wears, and the one thing never out of his hand.' },
    ],

    puzzle: {
      type: 'observe',
      heading: 'Mark the cook — in two strokes',
      prompt: 'You sat at his board and watched him. Set the man down for the Order.',
      fields: [
        { label: 'The colour he wears', placeholder: 'a colour',
          accept: ['brown', 'brownish', 'dark brown', 'brazowy', 'brązowy', 'brunatny'] },
        { label: 'The one thing never out of his hand', placeholder: 'a thing he carries',
          accept: ['ladle', 'a ladle', 'the ladle', 'soup ladle', 'cooking ladle', 'spoon', 'big spoon', 'scoop', 'dipper', 'chochla'] },
      ],
      note: 'Two plain strokes — what he wore, what he held. Didn’t catch it? Slip back to his hearth and look again.',
      errMsg: 'That is not the man. Look again — the colour he wears, and the thing never out of his hand.',
    },

    success: {
      seal: '✔',
      title: 'You have him in two strokes',
      text: 'A brown robe, and a ladle that never leaves his hand. By those marks the Order will know its enemy — wherever he runs.',
    },

    next: 'z3zb',
  },

  /* --- Z3Zb — domknięcie KZ: oddanie „człowieka w dwóch kreskach" + kupon u MG. --- */
  z3zb: {
    id: 'z3zb',
    label: 'Z3',
    title: 'Slip back into the dark',

    brief: [
      { reg: 'narration', html: 'One of the Council’s people, for an hour, over a borrowed supper — and now you carry their cook away in your memory, drawn in two strokes, and they never knew whose side you came in on.' },
      { reg: 'narration', html: 'Be gone before anyone wonders. Do not be a face he remembers.' },
      { reg: 'rule' },
      { reg: 'msg', html: '<strong>↪ To the Game Master:</strong> bring the cook back to the Game Master at the Rynek Staromiejski (the Old Town market square) — in two strokes, the colour he wears and the thing he carries — with his own meal-token spent. With those, you have done what was asked; what comes next is waiting there.' },
    ],

    puzzle: null,
    next: null,
  },

};

const STEP_ORDER = ['z1', 'z2', 'z3', 'z3b', 'z3z', 'z3zb'];
