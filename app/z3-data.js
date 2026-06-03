/* ============================================================================
   z3-data.js — KANON etapu Z3 (scena handlera; rozjazd TR/KZ).
   Źródło: envelopes/miasto-3-Z3.md + miasto-4-Z3b.md (TR) · krzyzacy-3-Z3Z.md (KZ).

   Z3 = scena aktora — apka NIE waliduje (zwiad/obserwacja nie bramkują w apce);
   pełni rolę NOŚNIKA BRIEFU (model hybrydy: brief→online, postęp→aktor/MG).
   - TR: zlecenie Jordana „Infiltrate the Castle" → twist (za przyciskiem):
     kradzież listy nazwisk (Z3b) = klucz do finału (Z7). → raport u MG.
   - KZ: rozkaz Albrechta „Infiltrate Piccolo" → obserwuj Jordana (kolor + atrybut)
     = klucz do Z11; zjedz prowiant. → raport u MG.
   Z3 → opcjonalna (Z4–Z10) = kolejna faza (granica POC).

   Player-facing = EN. Nazwy własne toruńskie w oryginale.
   ============================================================================ */

const Z3_DATA = {

  /* ---------- TOR MIESZCZAN (TR) — od Jordana → infiltracja zamku + kradzież ---------- */
  TR: {
    title: 'Infiltrate the castle',
    prop: {
      what: 'nothing new — Jordan gives only the order (you still carry the sealed letter)',
      from: 'Jordan, at Piccolo',
      where: 'you will leave the castle wall carrying the stolen list',
    },
    sceneOpen: [
      { reg: 'narration', html: 'Out of Piccolo, back into the carnival, the cook’s ladle still bright in your mind. Whatever else he is, he has chosen to trust you this far — and to ask something of you in return.' },
    ],
    orderTitle: 'Infiltrate the Castle',
    order: [
      { reg: 'head', html: 'Messengers,' },
      { reg: 'msg', html: 'You asked to be trusted. Here is how you earn it.' },
      { reg: 'msg', html: 'Before this night is over, we move against the Order — but we move half-blind. The Komtur of the castle, <strong>Albrecht</strong>, knows more about us than we would like. We need to know <em>what he knows</em> — and how much.' },
      { reg: 'msg', html: 'He is a proud man. He walks <em>outside the castle walls</em> as if the city were already his, certain no one would dare touch him. <em>(Do not go into the ruins themselves — they are watched, and barred to the likes of you. Find him in the open, before the walls.)</em>' },
      { reg: 'msg', html: '<strong>Your task:</strong> get close to him. Talk to him. But do it as someone he wants to talk to.' },
      { reg: 'msg', html: '<strong>Wear another face</strong> — the carnival lends you one for free. Half the city is masked tonight; one more set of strangers eager to talk means nothing. You are not couriers and you are <strong>never, ever of the Council</strong> — say that and you are dead. You are townsfolk who smell which way the wind blows: little people, eager to please the Order, who have <em>heard things</em> about those plotting against it. He feeds on that. Offer him a whiff of a name, a rumour, a hint that you know who schemes — and let him talk. <strong>Draw him out. See what he lets slip.</strong>' },
      { reg: 'msg', html: 'Flatter him. Let him boast. A proud man with something to hide always shows more than he means to.' },
      { reg: 'msg', html: 'Get from him what you can — a name he lets fall, a plan he has caught wind of, how much the Order has already guessed. When you have it, slip back into the crowd. Do not linger. Do not be a face he remembers.' },
      { reg: 'sign', html: 'Burn nothing. Trust no one in a Teutonic mantle. — J.' },
    ],
    sceneClose: [
      { reg: 'narration', html: 'Scouts, then. You can be scouts. Find the proud Komtur, smile, lie a little, and listen. A man that sure of himself never hides things well.' },
    ],
    theftButton: 'Get close to the Komtur →',
    theft: [
      { reg: 'narration', html: '<em>So that is the list.</em>' },
      { reg: 'narration', html: 'You saw it the moment he drew it out — that strip of parchment he keeps at his side, names inked down one beneath another. <span class="say">“The Order forgets nothing,”</span> he said, almost laughing, holding it up like a man showing off his gold. He has no idea what he is showing you.' },
      { reg: 'narration', html: 'Those are the names of the Secret Council — every soul the Order has bought out of your own walls, set down and marked. That is what you should have come here for. Not words. That.' },
      { reg: 'narration', html: 'And now he has set it down — laid it on the ledge at his side and stepped off to walk his little circuit, pointing out his walls, gazing off to boast. He will not hand it over; but he does not truly guard it either. A man that proud never watches his own table. Each time his round carries him away and his back is to it, the parchment lies there with no eyes on it.' },
      { reg: 'narration', html: 'You could take it. Only while he is turned — never while he is looking, or he will have you by the wrist, and then you are thieves caught at the Order’s own wall with no one to call. But on the turn, when he drifts off along his path…' },
      { reg: 'narration', html: 'Watch him. He walks it the same way each time. Wait for the turn. Lift it clean. Then walk — do not run, not until you must.' },
      { reg: 'narration', html: 'Carry those names away with you. Everything after tonight turns on them.' },
    ],
    mg: 'Once the list is in your hands, bring it to the Game Master, who keeps to the Rynek Staromiejski (the Old Town market square). What comes next is waiting there.',
  },

  /* ---------- TOR KRZYŻAKÓW (KZ) — od Albrechta → infiltracja Piccolo ---------- */
  KZ: {
    title: 'Infiltrate Piccolo',
    prop: {
      what: 'the Komtur’s grid of colours and signs — Recognition Table 1 + Table 2',
      from: 'Albrecht',
      where: 'keep them — you need them at the finale',
    },
    sceneOpen: [
      { reg: 'narration', html: 'Out of the Komtur’s sight, his grid of colours and signs folded away in your bag, his order in your hand. Back into the carnival — and all the way across the masked, roaring city the same talk keeps catching at you, none of it kind to the master you now serve. That the Komtur himself wanted to come to terms with the townsmen, and Marienburg forbade it. That the Grand Master has sat silent in his castle for weeks and answered no letter, as if he had washed his hands of this place. That even the bishops are turning. You push it all down. Somewhere across this din there is a cook’s kitchen that is not a kitchen at all, and a part for you to play in it.' },
    ],
    orderTitle: 'Infiltrate Piccolo',
    order: [
      { reg: 'msg', html: 'You would serve the Order? Here is how you earn the right.' },
      { reg: 'msg', html: 'There is a cook in this town. <strong>Jordan.</strong> He keeps a place they call <strong>Piccolo</strong> — and it is no kitchen. It is the traitors’ own nest, where their Secret Council is fed and sheltered and lays its plans.' },
      { reg: 'msg', html: 'Tonight you walk in as one of <em>them.</em> The Council’s couriers come and go from that kitchen all night, and the carnival lends you a face for free — <strong>pass yourself as the Council’s own, and the cook will take you for friends.</strong> He feeds his people without a second thought. Let him feed you.' },
      { reg: 'msg', html: '<strong>Your task is to know the man.</strong> Not his words — his <em>person.</em> Sit at his board, take what he puts in your hand, and while you eat at his hearth, watch him close. Mark what no friend would trouble to mark: <strong>the colour he wears, and the one thing never out of his hand.</strong> Fix them in your memory and carry them back to me — by such marks the Order knows its enemy, and will know him again, wherever he runs.' },
      { reg: 'msg', html: 'And let the meal be no waste. The castle bars its gates against the siege to come, and the Order’s men must be fed; what fills traitors’ bellies may as well fill ours. <strong>Take the token he hands you and spend it to the last</strong> — every bowl you empty at their hearth is one the Council will not.' },
      { reg: 'msg', html: 'Eat, take his measure, and slip back into the dark. Do not be a face he remembers.' },
      { reg: 'sign', html: '— A.' },
    ],
    sceneClose: [
      { reg: 'narration', html: 'One of the Council’s people, then — for an hour, over a borrowed supper, with a careful eye on the man with the ladle. Eat their bread, learn his face, and be gone before anyone wonders whose side you came in on.' },
    ],
    theftButton: null,
    theft: null,
    mg: 'Bring the cook back to the Game Master — he keeps to the Rynek Staromiejski (the Old Town market square) — in two strokes: the colour he wears and the thing he carries. With those — and the cook’s own meal-token spent at his board — you have done what was asked; what comes next is waiting there.',
  },

};
