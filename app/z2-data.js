/* ============================================================================
   z2-data.js — KANON zagadki Z2 (pierwsza koperta frakcyjna; rozjazd TR/KZ).
   Źródło: envelopes/miasto-2-Z2.md (TR) · envelopes/krzyzacy-2-Z2.md (KZ).
   Zagadka logiczna 3 osoby × {miejsce/post, przedmiot}, jednoznaczne rozwiązanie.
   Po rozwiązaniu: jeden z 3 znaków jest „na mapie" = cel; tam gracz idzie i podaje
   imię + parol (co dana osoba miała przy sobie rano). Z2→Z3 = scena aktora.

   Player-facing = EN. Nazwy własne toruńskie w oryginale.
   ============================================================================ */

const Z2_DATA = {

  /* ---------- TOR MIESZCZAN (TR) — grupy 1-5 → Jordan w Piccolo ---------- */
  TR: {
    title: 'You reach the mark',
    scene: [
      { reg: 'narration', html: 'Four marks walked, four places named — and at the end of the chain, where your contact should be standing, no one. Only a sealed packet, left where you could not miss it, a hand you half-recognise scrawled on the outside; and folded inside, a single scrap of paper. He is gone. Fled, or taken, or thinking better of the whole thing — but gone. A contact who vanishes the very night the city takes up arms is rarely one who simply chose to leave.' },
      { reg: 'narration', html: 'You had heard the city all the way here. Saint Dorothy’s crowds parting for carts the carters swear are loaded with fireworks “for the feast” — yet the crates ride low and heavy, and the men walking beside them are not laughing. And under the masks the same talk keeps surfacing, again and again, if you let yourselves listen: that the Council meets after dark and decides for everyone and tells no one; that it is the craftsmen who give up the men and the steel, and the Council that will still be ruling once the smoke clears; that war means bread at double the price, a lords’ quarrel paid for at the baker’s stall; that Bażyński means to hand Prussia to the king in Kraków — one master traded for another. And, from an old woman who shook her head as you passed: that this Bażyński’s own leg has gone stiff on him again, that the great man can barely cross a room — and that this is who means to bring down armoured knights.' },
      { reg: 'narration', html: 'The letter is still heavy in the bag, and it still has to reach the one it is meant for before the ninth bell. With your contact gone, the way is yours to find. You unfold his scrap — and beside it the packet has left you something to work from: three people sent into town this morning, and the errands they ran.' },
    ],
    slipBy: 'R.',
    slip: [
      'I cannot be there. It is too dangerous now — and the thing was never mine to keep. I was only ever to carry it a little of the way.',
      'So now it falls to you. Whatever you were to put into my hands, you will put into his: the head of their Council — their chairman — into his own hand, and no other’s. Find the way to him.',
      'When the marks send you to the door, you will not know our man on sight. So speak his name, and tell him what he bought this morning — that is the word we set for today, and by it he will know you came from me.',
      'Go carefully. — R.',
    ],
    puzzle: {
      lead: 'The morning errands',
      intro: 'Three people went into town this morning, and each bought one thing. Work out who bought what — and where each of them works.',
      // role labels for the two assignments
      placeLabel: 'Works at',
      itemLabel: 'Bought',
      people: ['Kordian', 'Lambert', 'Jordan'],
      places: ['The Old Mill', 'Piccolo', 'The Smithy'],
      items: ['food', 'a sword', 'cloth'],
      clues: [
        'Lambert could have eaten at his own place, yet he went to buy his food elsewhere.',
        'Jordan bought from the one who bought cloth.',
        'The miller swears he bought nothing from Kordian.',
      ],
      solution: {
        Kordian: { place: 'The Smithy', item: 'cloth' },
        Lambert: { place: 'The Old Mill', item: 'food' },
        Jordan:  { place: 'Piccolo',     item: 'a sword' },
      },
      onMap: 'Piccolo',
    },
    reveal: {
      head: 'Only one of those marks is on your map. This is it — look for it:',
      // glif Piccolo = L01 z tools/map-gen/map-data.js §Z1_LANDMARKS (≡ trzy poziome kreski)
      glyph: '<line x1="4" y1="11" x2="28" y2="11" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round"/>'
        + '<line x1="4" y1="16" x2="28" y2="16" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round"/>'
        + '<line x1="4" y1="21" x2="28" y2="21" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round"/>',
      glyphCaption: 'That mark is <strong>Piccolo</strong>. Go there.',
      body: 'You will not know your man on sight — so ask for <strong>Jordan</strong> by name, and tell him what he bought this morning: <strong>a sword</strong>. By that word he will know you came from R. He carries your way onward.',
    },
  },

  /* ---------- TOR KRZYŻAKÓW (KZ) — grupy 6-10 → Albrecht przy zamku ---------- */
  KZ: {
    title: 'You reach the mark',
    scene: [
      { reg: 'narration', html: 'Four marks walked, four places named — and at the end of the chain, where the one who was to meet you should have stood, no one. Only a sealed packet wedged where you could not miss it, a hand you half-recognise scratched on the outside; and folded within, a single scrap of paper. N. is gone. Fled, or taken, or thinking better of the whole business — but gone. A go-between who melts away on the very night the city takes up arms is rarely one who simply chose to leave.' },
      { reg: 'narration', html: 'You had heard the city all the way here. Saint Dorothy’s crowds parting for carts the carters swear are loaded with fireworks “for the feast” — yet the crates ride low and heavy, and the men beside them are not laughing. And under the masks the same talk keeps surfacing — and none of it kind to the Order whose business you carry: that the brothers lay their pound-toll on the city’s own merchants and let their own kind off light; that salt and copper and amber all sit in the Order’s fist, and a man who would trade must pay the brothers first for the right; that of a thousand knights there are three hundred left, if that — a garrison of a handful rattling about that great castle. And, from an old soldier who spat as you passed: that the Grand Master sits in Marienburg and has not answered a letter in weeks — that the Order’s own head has left this city to shift for itself.' },
      { reg: 'narration', html: 'The dispatch is still heavy in the bag, and it still has to reach the right hands before the ninth bell. With N. gone, the way is yours to find. You unfold his scrap — and beside it the packet has left you something to work from: three people sent into town this morning, and the errands they ran.' },
    ],
    slipBy: 'N.',
    slip: [
      'I cannot be there. It is too dangerous now — and the thing was never mine to keep. I was only ever to carry it a little of the way.',
      'So now it falls to you. What you were to put into my hands, you will put into his: the Komtur of the Order, Albrecht himself — into his own hand, and no other’s. He holds this city for the Order, and to him the Order’s word must go.',
      'But know this: the Komtur trusts no one on sight, least of all in days like these. When you find him, name to him what he bore through the town this morning — that is the word we set for today, and by it he will know you came from me. And be ready to prove you are the Order’s.',
      'Go carefully. — N.',
    ],
    puzzle: {
      lead: 'The morning’s men',
      intro: 'Three of the Order’s men were about the town this morning. Each was at one post, and each bore one thing. Work out who was where — and what each man carried.',
      placeLabel: 'Posted at',
      itemLabel: 'Carried',
      people: ['Heinrich', 'Konrad', 'Albrecht'],
      places: ['The Chełmno Gate', 'By the castle', 'The chapel of St. Mary'],
      items: ['a ring of keys', 'a sealed dispatch', 'the Komtur’s own seal'],
      clues: [
        'Heinrich locked the Chełmno Gate at dawn, and kept its keys on him the morning long.',
        'The man at the chapel bore the dispatch, to be read out at the Mass.',
        'Konrad has not set foot by the castle in a week.',
      ],
      solution: {
        Heinrich: { place: 'The Chełmno Gate',      item: 'a ring of keys' },
        Konrad:   { place: 'The chapel of St. Mary', item: 'a sealed dispatch' },
        Albrecht: { place: 'By the castle',          item: 'the Komtur’s own seal' },
      },
      onMap: 'By the castle',
    },
    reveal: {
      head: 'Only one of those marks is on your map. This is it — look for it:',
      // glif Zamku Krzyżackiego = L02 z tools/map-gen/map-data.js §Z1_LANDMARKS (∞ lemniskata)
      glyph: '<path d="M16,16 C13,10 4,10 4,16 C4,22 13,22 16,16 C19,10 28,10 28,16 C28,22 19,22 16,16Z"'
        + ' fill="none" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
      glyphCaption: 'That mark is the Komtur’s seat, <strong>by the castle</strong>. Go there.',
      body: 'The Komtur trusts no one on sight — so name to <strong>Albrecht</strong> what he bore this morning: <strong>the Komtur’s own seal</strong>. By that word he will know you for the Order’s. Be ready to prove it — he will ask.',
    },
  },

};
