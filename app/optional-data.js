/* ============================================================================
   optional-data.js — KANON warstwy opcjonalnej (F2B, Z4–Z10). Jedno zadanie
   per grupa, między Z3 a finałem. Źródło: envelopes/miasto-5-Z4 · krzyzacy-4-Z8
   · zagadka-sensoryczna.md (Z5/Z9) · miasto-5-Z6 · krzyzacy-4-Z10 ·
   puzzles/kalimba.md · herby-aleja.md · polichromie-biedronka.md.

   Apka = nośnik briefu + walidacja odpowiedzi (PREV). Cztery mechaniki:
   - code      (kalimba Z4/Z8): odtwórz melodię z apki → zagraj → wpisz 6 cyfr (621454)
   - assign    (sensoryczna Z5/Z9): 7 słojów A–G → nazwa z przepisu
   - choose-one(herby Z6): który nadawca bez pary → Chełmno
   - choose-many(polichromie Z10): które 3 z 8 bestii na ścianie → A,B,E

   Przydział per grupa: CLAUDE.md §Kanoniczny przydział.
   Player-facing = EN. Nazwy własne toruńskie/herbowe w oryginale (z bruku).
   ============================================================================ */

const GROUP_OPTIONAL = {
  1: 'kalimba_tr', 2: 'sensory_tr', 3: 'sensory_tr', 4: 'herby', 5: 'herby',
  6: 'kalimba_kz', 7: 'kalimba_kz', 8: 'sensory_kz', 9: 'polichromie', 10: 'polichromie',
};

const OPTIONAL = {

  /* ---------- Z4 — melodia flisaka (TR) ---------- */
  kalimba_tr: {
    label: 'Z4',
    title: 'The boatman by the river',
    prop: { what: 'a small iron-tongue instrument (tongues marked with numbers)', from: 'the Game Master', where: 'play the tune below, then play it back on the instrument' },
    scene: [
      { reg: 'narration', html: 'The list is safe in your hands. And then word reaches you of the river — of a body the watermen pulled from the shallows in the night and left lying, because no one came to claim it.' },
      { reg: 'narration', html: 'You do not need to be told twice whose body it is. The worn coat. The ink still on the fingers. <strong>R.</strong> — the contact who was never where he should have been. He did not flee the city. He never had the chance. A boatman, face-down in the mud — while the great men whose errands he ran sleep warm behind their walls tonight. He only carried. Carrying is what killed him.' },
      { reg: 'narration', html: 'And the thought you keep pushing down all night rises again, here by the cold water: these are the men you serve. Whose cause is this, in truth, and are they the ones in the right? You push it down. It does not go far.' },
      { reg: 'narration', html: 'They found something on him — a small instrument, the kind a river man keeps for the long hours on the water; and folded with it, a scrap in his hand:' },
    ],
    scrap: [
      'They took the dispatch off me. I could not keep it — so I hid it where only our own would think to look. Play my tune true and you will have the number that opens the way to it. Play it as I played it to the river, note for note.',
    ],
    sceneAfter: [
      { reg: 'narration', html: 'And here is the strange of it: as you read his hand, the tune is somehow already in the air — drifting in off the cold water, with no player anywhere in sight. The whole city is piping and drumming itself hoarse tonight; one more tune off the water is nothing. So you listen, take up his instrument, and follow it note for note — writing down each number as it sounds.' },
    ],
    puzzle: { type: 'code', audio: 'audio/kalimba.mp3', length: 6, answer: '621454',
      prompt: 'Play the tune, then enter the six numbers you played.' },
    mg: 'Bring the six numbers to the Game Master (Rynek Staromiejski). What R. hid will be given to you in return.',
  },

  /* ---------- Z8 — melodia zakonu (KZ) ---------- */
  kalimba_kz: {
    label: 'Z8',
    title: 'A forgotten brother',
    prop: { what: 'a small iron-tongue instrument (tongues marked with numbers)', from: 'the Game Master', where: 'play the tune below, then play it back on the instrument' },
    scene: [
      { reg: 'narration', html: 'The stolen hour is yours and the enemy’s nest is behind you — and now word reaches you of one of your own. A brother of the Order, dead at the walls in the first night’s blockade, and something he carried that no one thought to claim until it was too late.' },
      { reg: 'narration', html: 'He was nobody much: a lay brother who kept the house’s books and its psalter — sent out with a thing to keep when keeping it grew dangerous, and left to keep it alone. The Order forgets nothing, they say. It forgot him by morning.' },
      { reg: 'narration', html: 'And the doubt you have carried since the gates shut stirs again. This is a master that taxes its own merchants to the bone and still spends men like this one in the dark, for secrets, and learns not a single name. You push the thought down. It does not go far. Whose errand is this, in truth — and were they ever the ones in the right?' },
      { reg: 'narration', html: 'What the watch turned up on his body, they could make nothing of: a small instrument of iron tongues; and folded against it, a scrap in a careful, cloister-trained hand:' },
    ],
    scrap: [
      'What the Order keeps, the Order does not leave in the open. I have set it where no townsman’s hand would think to reach — behind our own music, the way we have always kept what is ours. Play the tune true, brother, note for note as it is sung in our house, and the number that unseals it is yours. Only our own know this melody. Only our own will pass.',
    ],
    sceneAfter: [
      { reg: 'narration', html: 'And here is the strange of it: as you read his hand, the tune is already in the air — a thin, cold thread of it drifting down from the chapel stones, with no brother singing. It does not sound like the town’s tunes. That is the point of it. So you listen, take up his instrument, and follow it note for note — writing down each number as it sounds.' },
    ],
    puzzle: { type: 'code', audio: 'audio/kalimba.mp3', length: 6, answer: '621454',
      prompt: 'Play the tune, then enter the six numbers you played.' },
    mg: 'Bring the six numbers to the Game Master (Rynek Staromiejski). What the brother sealed away will be given to you in return.',
  },

  /* ---------- Z5 — sensoryczna piernik (TR) ---------- */
  sensory_tr: {
    label: 'Z5',
    title: 'The baker’s jars',
    prop: { what: 'seven lettered jars + the recipe card', from: 'the Game Master', where: 'weigh in the hand, shake, and smell them — do not open them' },
    scene: [
      { reg: 'narration', html: 'A baker of the Old Town sends an urgent word. Tomorrow there is a carnival feast and gingerbread was ordered for the elders — but his apprentice, the fool, wiped the labels off the jars and shuffled the spices. He will not put into the oven what he is not sure of: one wrong root spoils the whole batch.' },
      { reg: 'msg', html: '<span class="say">“Anyone from here would know these scents with their eyes shut. If you are of this town, you will have me sorted in no time.”</span>' },
    ],
    scrap: null,
    sceneAfter: [],
    puzzle: {
      type: 'assign',
      prompt: 'Name what stands in each jar. The names are all on the baker’s rule — and there are more names than jars: not every ingredient stands here tonight.',
      recipe: [
        'Rye flour — three measures (the body of the dough)',
        'Wheat flour — one measure (for a smoother crumb)',
        'Honey — as much as the dough will take',
        'Pounded spices — cinnamon, ginger, cloves, cardamom, nutmeg, pepper',
        'Candied orange peel — a little, for brightness',
      ],
      hint: 'When two powders smell of nothing alike, let the rule decide: more rye than wheat in the dough — so the heavier jar is the rye.',
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      options: ['rye flour', 'wheat flour', 'honey', 'cinnamon', 'ginger', 'cloves', 'cardamom', 'nutmeg', 'pepper', 'candied orange peel'],
      solution: { A: 'wheat flour', B: 'cardamom', C: 'ginger', D: 'cloves', E: 'honey', F: 'rye flour', G: 'cinnamon' },
    },
    mg: 'Bring the filled card to the Game Master (Rynek Staromiejski). When the gingerbread comes out right, your pay and your next orders are given in return.',
  },

  /* ---------- Z9 — sensoryczna piernik (KZ) ---------- */
  sensory_kz: {
    label: 'Z9',
    title: 'The brother-cook’s jars',
    prop: { what: 'seven lettered jars + the recipe card', from: 'the Game Master', where: 'weigh in the hand, shake, and smell them — do not open them' },
    scene: [
      { reg: 'narration', html: 'A brother who cooks for the commandery needs a sure hand. The spices came up from a merchant’s store without labels, and the Komtur’s table will not touch a dish the master cannot name.' },
      { reg: 'msg', html: '<span class="say">“Gingerbread is our own, German art — it has flourished here, in Prussia, ever since the Order has held these lands. He who is of our spirit knows the spices. Show me, then, that you are no stranger.”</span>' },
    ],
    scrap: null,
    sceneAfter: [],
    puzzle: {
      type: 'assign',
      prompt: 'Name what stands in each jar. The names are all on the rule — and there are more names than jars: not every ingredient stands here tonight.',
      recipe: [
        'Rye flour — three measures (the body of the dough)',
        'Wheat flour — one measure (for a smoother crumb)',
        'Honey — as much as the dough will take',
        'Pounded spices — cinnamon, ginger, cloves, cardamom, nutmeg, pepper',
        'Candied orange peel — a little, for brightness',
      ],
      hint: 'When two powders smell of nothing alike, let the rule decide: more rye than wheat in the dough — so the heavier jar is the rye.',
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      options: ['rye flour', 'wheat flour', 'honey', 'cinnamon', 'ginger', 'cloves', 'cardamom', 'nutmeg', 'pepper', 'candied orange peel'],
      solution: { A: 'wheat flour', B: 'cardamom', C: 'ginger', D: 'cloves', E: 'honey', F: 'rye flour', G: 'cinnamon' },
    },
    mg: 'Bring the filled card to the Game Master (Rynek Staromiejski). When the master judges the gingerbread good, food and further orders are yours.',
  },

  /* ---------- Z6 — herby hanzeatyckie (TR) ---------- */
  herby: {
    label: 'Z6',
    title: 'The shields in the street',
    prop: { what: 'the Council clerk’s dispatch (the five envoys named)', from: 'the Game Master', where: 'read the shields set into the pavement of the Broad Street (ul. Szeroka)' },
    scene: [
      { reg: 'narration', html: 'The Council’s own table sends for you — not an errand into the dark, but a reckoning of errands already gone. In the days before the bells, five towns of the Prussian league each sent word across the water, every one begging the same thing: stand with us when it comes. Four friends have answered. The fifth envoy has not been heard of since the day he rode out — and no one at that table can name which of the five roads has swallowed him.' },
      { reg: 'narration', html: 'They send you down the Broad Street to find his name. What drifts off the doorsteps does not sit easy: that the great houses have the painters in already, quartering shields — for they mean to come out of this rising as gentlefolk, with arms above the gate. That they make every stranger lay his goods out a week in their market before he may pass on. That whatever the lords win, it will be a lord who keeps it. None of them know whose letters you carry tonight.' },
      { reg: 'narration', html: 'Folded into your orders is the hand of the Council’s clerk:' },
    ],
    scrap: [
      'Five of our league sent abroad before the rising, each to the Hansa city that has ever been its sister; for it is an old courtesy that town greets town by its arms, and each was sent to the shield that mirrors his own. Word has come back from four. Hamburg has answered. Kolonia has answered. And Lubeka, twice over. But five rode out, and one is silent on the road. Go where the brotherhood has set the arms of every friendly city into the stone of the street. Match each town that answered to its sister among our five — Gdańsk, Królewiec, Elbląg, Chełmno, and Toruń. The one of ours left standing alone is the man we have lost. Bring me that city’s name.',
    ],
    sceneAfter: [
      { reg: 'narration', html: 'You walk the painted stones one by one — they lie open underfoot for any reveller to tread on. There is Toruń’s own gate and its three towers; and far down the row, the white castle of Hamburg that is its very twin, tower for tower. So it goes for the rest, if you have the eye — like to like. Match the four that answered to their sisters among your five, and the one city left standing alone is the road that gave no answer.' },
    ],
    puzzle: {
      type: 'choose-one',
      prompt: 'Four answered (Hamburg · Kolonia · Lubeka · Lubeka). Of your five envoys, whose sister-shield stayed silent — the road you have lost?',
      options: ['Gdańsk', 'Królewiec', 'Elbląg', 'Chełmno', 'Toruń'],
      answer: 'Chełmno',
    },
    mg: 'Bring the name of the silent city to the Game Master (Rynek Staromiejski). Name the road that swallowed the envoy, and what waited on his answer is given in return.',
  },

  /* ---------- Z10 — polichromie / Biedronka (KZ) ---------- */
  polichromie: {
    label: 'Z10',
    title: 'The beasts on the wall',
    prop: { what: 'the leaf of eight beasts (lettered A–H)', from: 'the Game Master', where: 'read it against the painted house on the Broad Street (Szeroka 22)' },
    // glif Biedronki = L03 z tools/map-gen/map-data.js §Z1_LANDMARKS (biedronka: koło + 2 kropki)
    mapGlyph: '<circle cx="16" cy="16" r="12" fill="none" stroke="#2a1f0e" stroke-width="2.4"/>'
      + '<line x1="16" y1="4" x2="16" y2="28" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round"/>'
      + '<circle cx="10.5" cy="13" r="1.8" fill="#2a1f0e"/><circle cx="21.5" cy="13" r="1.8" fill="#2a1f0e"/>',
    mapGlyphCaption: 'This mark on your map is the painted house (“Biedronka”, Szeroka 22). Go there.',
    scene: [
      { reg: 'narration', html: 'The stolen hour is yours and the enemy’s nest is behind you. Now a brother’s name is put into your hands, and a thing he left half-finished — work for one of the Order’s own.' },
      { reg: 'narration', html: 'They send you down the Broad Street. What you catch on the way does not sit easy: that the Komtur himself sued for terms with the townsmen weeks ago, and the Grand Master forbade it; that the bishops are turning their faces away; that the Order keeps salt and copper and amber in its fist and lets no man trade but through the brothers’ hand. None of them know whose letters you carry tonight.' },
      { reg: 'narration', html: 'The house they bring you to is old, and its front is painted: a band of beasts under the eaves, faded to earth and moss and ox-blood. Most walk past it as you would pass a wall. But a brother of the Order did not — dead now, like the other one — and what he left was folded into the leaf put in your hand:' },
    ],
    scrap: [
      'Brother — what is ours, we have always set where only our own would think to look. There is an old house on the Broad Street with the beasts of our craft painted on its front, among a deal of common work; and of the eight I have copied here, only some were ever truly set on that wall by our hand. A townsman sees only old paint. But you are of our own, and our own know their own beasts. Mark which of these eight stand upon it in truth — no more, no fewer — and bring their names back. By that, and that alone, will you be known.',
    ],
    sceneAfter: [
      { reg: 'narration', html: 'So you stand before the painted beasts in the carnival dark, the leaf in your hand, and match them one by one: which of the eight the old wall truly bears, and which were never there at all. Only our own will tell them apart.' },
    ],
    puzzle: {
      type: 'choose-many',
      prompt: 'Mark which of the eight beasts (A–H) truly stand on the wall — no more, no fewer.',
      options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      answer: ['A', 'B', 'E'],
    },
    mg: 'Bring the letters of the beasts you found to the Game Master (Rynek Staromiejski). Read as one of the Order’s own would, and what the brother kept is given in return.',
  },

};
