/* ============================================================================
   optional-data.js — KANON opcjonalnych zagadek F2B w apce (poza Z10, które ma
   własny z10-data.js). Bramki cyfrowe wiernie oddają mechanikę terenową:
     • Z4 / Z8  — kalimba (lamellofon): zagraj melodię → 6 liczb → kod 621454
                  Źródło: puzzles/kalimba.md · envelopes/{miasto-5-Z4,krzyzacy-4-Z8}.md
     • Z6       — herby hanzeatyckie: sparuj 4 odbiorców z nadawcami → wskaż
                  nadawcę bez pary = Chełmno
                  Źródło: puzzles/herby-aleja.md · envelopes/miasto-5-Z6.md
     • Z5 / Z9  — sensoryczna piernik: rozpisz 7 słojów (A–G) litera→składnik
                  Klucz MG: A=wheat F=rye B=cardamom C=ginger D=cloves E=honey G=cinnamon
                  Źródło: puzzles/zagadka-sensoryczna.md §klucz MG · envelopes/{miasto-5-Z5,krzyzacy-4-Z9}.md

   ⚠ Klucze Z6/Z5/Z9 = research/decyzje autorskie (Oskar/Piotr), część do spot-checku
     in loco (herby Szeroka, czytelność). Z4/Z8 kod = kanon (data buntu 6.2.1454).
   Player-facing = EN. Nazwy własne (miasta, instrument, składniki) w oryginale.
   ============================================================================ */

/* wspólny klucz rozpiski piernika (Z5 = Z9) — patrz zagadka-sensoryczna.md */
const GINGERBREAD_OPTIONS = ['wheat flour', 'rye flour', 'cardamom', 'ginger', 'cloves', 'honey', 'cinnamon'];
const GINGERBREAD_SOLUTION = { A: 'wheat flour', B: 'cardamom', C: 'ginger', D: 'cloves', E: 'honey', F: 'rye flour', G: 'cinnamon' };

/* ---------- Z4 — melodia flisaka (TR; grupa 1 czerwony) ---------- */
const Z4_DATA = {
  title: 'The boatman by the river',
  successTitle: 'The number holds',
  scene: [
    { reg: 'narration', html: 'The list is safe in your hands. And then word reaches you of the river — of a body the watermen pulled from the shallows in the night and left lying, because no one came to claim it. You do not need to be told twice whose body it is. The worn coat. The ink still on the fingers. <strong>R.</strong> — the contact who was never where he should have been. He did not flee the city. He never had the chance.' },
    { reg: 'narration', html: 'They found something on him: a small instrument of iron tongues, the kind a river man keeps for the long hours on the water; and folded with it, a scrap in the same hand as the note he left you. Not a message, this time. A tune, set down note by note. And — the strange of it — the tune is somehow already in the air, drifting in off the cold water with no player in sight, as the old tale tells of a raftsman whose playing once drew the town’s frogs down under the Vistula. The whole city is piping and drumming itself hoarse tonight; one more tune off the water is nothing at all.' },
  ],
  noteLabel: 'A scrap in R.’s hand',
  note: [
    'They took the dispatch off me. I could not keep it — so I hid it where only our own would think to look. Play my tune true and you will have the number that opens the way to it. Play it as I played it to the river, note for note.',
  ],
  puzzle: {
    type: 'code-entry',
    lead: 'Play it true',
    intro: 'Take up his instrument and follow the tune note for note, reading off each number as it sounds. <strong>Six numbers</strong> — the number R. died keeping.',
    code: '621454',
    confirm: 'Set down the six numbers',
    hint: 'Play the marked tongues in order and read the numbers off the iron.',
    err: 'That is not the number. Play the tune again, note for note.',
  },
  reveal: {
    head: 'You played the boatman’s tune true, and the six numbers came up out of the iron.',
    body: 'Bring the six numbers to the Game Master, who keeps to the Rynek Staromiejski. What R. hid will be given back into your hands — and with it, your way onward.',
  },
};

/* ---------- Z8 — melodia zakonu (KZ; grupy 6 niebieski / 7 fioletowy) ---------- */
const Z8_DATA = {
  title: 'The Order’s own music',
  successTitle: 'The number holds',
  scene: [
    { reg: 'narration', html: 'The stolen hour is yours and the enemy’s nest behind you — and now word reaches you of one of your own. A brother of the Order, dead at the walls in the first night’s blockade: a lay brother who kept the house’s books and its psalter, sent out with a thing to keep when keeping it grew dangerous, and left to keep it alone. They left him where he fell. The Order forgets nothing, they say. It forgot him by morning.' },
    { reg: 'narration', html: 'What the watch turned up on his body they could make nothing of: a small instrument of iron tongues, the sort kept for the long offices and the colder hours; and folded against it, a scrap in a careful, cloister-trained hand. Not a prayer, this time. A tune, set down note by note. And — the strange of it — the tune is somehow already in the air, a thin cold thread of it drifting down from the chapel stones, with no brother singing. It does not sound like the town’s tunes. That is the point of it. The whole city is piping and drumming itself hoarse tonight; one more thread of music in the dark is nothing at all.' },
  ],
  noteLabel: 'A scrap in a cloister hand',
  note: [
    'What the Order keeps, the Order does not leave in the open. I have set it where no townsman’s hand would think to reach — behind our own music, the way we have always kept what is ours. Play the tune true, brother, note for note as it is sung in our house, and the number that unseals it is yours. Only our own know this melody. Only our own will pass.',
  ],
  puzzle: {
    type: 'code-entry',
    lead: 'Play it true',
    intro: 'Take up his instrument and follow the tune note for note, reading off each number as it sounds. <strong>Six numbers</strong> — the number a forgotten brother died keeping.',
    code: '621454',
    confirm: 'Set down the six numbers',
    hint: 'Play the marked tongues in order and read the numbers off the iron.',
    err: 'A townsman’s ear, not a brother’s. That is not the number — play it again, note for note.',
  },
  reveal: {
    head: 'You played the brother’s tune true, as it is sung in the house, and the six numbers came up out of the iron.',
    body: 'Bring the six numbers to the Game Master, who keeps to the Rynek Staromiejski. What the brother sealed away will be given to you in return — and with it, your next orders.',
  },
};

/* ---------- Z6 — herby hanzeatyckie (TR; grupy 4 zielony / 5 turkusowy) ---------- */
const Z6_DATA = {
  title: 'The arms in the stones',
  successTitle: 'The silent road is named',
  scene: [
    { reg: 'narration', html: 'The Council’s own table sends for you — not an errand into the dark this time, but a reckoning of errands already gone. In the days before the bells, five towns of the Prussian league each sent word across the water, every one to an old friend, begging the same thing: stand with us when it comes. Four friends have answered. The fifth envoy has not been heard of since the day he rode out — and no one at that table can name which of the five roads has swallowed him.' },
    { reg: 'narration', html: 'You walk the painted stones one by one. They are no secret — they lie open underfoot for any reveller to tread on, and the whole street is too busy dancing to wonder why you read them. There is Toruń’s own gate and its three towers; and far down the row, the white castle of Hamburg that is its very twin, tower for tower. So it goes for the rest, if you have the eye — like to like, our own to their friend across the sea.' },
  ],
  noteLabel: 'The Council clerk’s order',
  note: [
    'Friends — five of our league sent abroad before the rising, each man to the Hansa city that has ever been its sister; for it is an old courtesy that town greets town by its arms. Word has come back from four: Hamburg has answered, Kolonia has answered, and Lubeka, twice over. But five rode out, and one is silent on the road — taken, drowned, or turned, we cannot tell.',
    'Go where the brotherhood has set the arms of every friendly city into the stone of the street. Set beside each town that answered the sister-shield it mirrors among our own five — Gdańsk, Królewiec, Elbląg, Chełmno, and Toruń. Four of ours will so be matched. The fifth — the one whose sister stayed silent — is the man we have lost. Bring me that city’s name.',
  ],
  puzzle: {
    type: 'pick-one',
    lead: 'Name the silent road',
    intro: 'Match the four that answered — Hamburg, Kolonia, and Lubeka twice over — to their sister-shields among our five. The one city left standing alone is the road that gave no answer.',
    options: ['Gdańsk', 'Królewiec', 'Elbląg', 'Chełmno', 'Toruń'],
    answer: 'Chełmno',
    confirm: 'Name the city',
    hint: 'Toruń’s gate and three towers mirror Hamburg’s. Pair the rest like to like; the one left without a sister is your answer.',
    err: 'That city found its sister among the four who answered. Look again for the one left standing alone.',
  },
  reveal: {
    head: 'You read the stones as the brotherhood set them, and named the road that gave no answer.',
    body: 'Bring the silent city’s name to the Game Master, who keeps to the Rynek Staromiejski. What was waiting on that envoy’s answer will be given to you in return — and with it, your next orders.',
  },
};

/* ---------- Z5 — sensoryczna piernik (TR; grupy 2 pomarańczowy / 3 żółty) ---------- */
const Z5_DATA = {
  title: 'The baker’s jars',
  successTitle: 'The sheet is true',
  scene: [
    { reg: 'narration', html: 'The Game Master sends you to a baker — Master Bogumił, who asked for a helping hand and was told you were trustworthy. He does not say, and you do not ask, that this is a test: that a courier who cannot tell honey from cloves by the nose is a courier who can be fed a false word and never know it. The bench is crowded with sealed jars, lettered, and his old recipe lies open beside them.' },
    { reg: 'narration', html: 'The carnival has emptied his apprentices into the street and left the work half done. He needs the jars set straight before he can bake — each lettered jar matched to the thing it holds — and his eyes are not what they were. You may take their measure however you can. But you may not open them. Trust what they tell you through the lid, and let the recipe be your guide where your nose is not enough.' },
  ],
  noteLabel: 'Master Bogumił asks',
  note: [
    'Bless you for coming. Seven jars, and my labels all in letters since the fire took the old ones — A to G, and not one of them named. Tell me which is which and I can bake; get it wrong and the batch is ruined and the day with it. Two of them are only flour and will tell your nose nothing — but the recipe knows them, if you read it close. Do not open the jars; a draught spoils the lot.',
  ],
  puzzle: {
    type: 'assign',
    lead: 'Fill the baker’s sheet',
    intro: 'Seven jars stand before you, lettered <strong>A</strong> to <strong>G</strong>, each holding one thing the recipe calls for. Set each letter against what it holds.',
    recipeLabel: 'The recipe calls for',
    rowLabel: 'Jar',
    itemLabel: 'Holds',
    options: GINGERBREAD_OPTIONS,
    rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    solution: GINGERBREAD_SOLUTION,
    hint: 'Two jars are flour and smell of nothing alike — the recipe’s three-to-one of rye to wheat, and the heavier jar in the hand, tell them apart.',
    err: 'The batch came out wrong — at least one jar is not what you wrote. Trust your nose, and read the recipe again for the two flours.',
  },
  reveal: {
    head: 'Bogumił takes your sheet, bakes, and brings the batch out whole — every jar set true.',
    body: 'With the gingerbread he hands you your pay and a sealed letter of what to do next. Bring it to the Game Master, who keeps to the Rynek Staromiejski — your way onward is folded inside.',
  },
};

/* ---------- Z9 — sensoryczna piernik (KZ; grupa 8 biały) ---------- */
const Z9_DATA = {
  title: 'The brother-cook’s jars',
  successTitle: 'The sheet is true',
  scene: [
    { reg: 'narration', html: 'You are sent to a brother of the Order who keeps the kitchen — and keeps it proudly, for all the house thins around him. He asked for hands he could trust, and he means to find out if yours are. He does not say it, but a man who cannot know his own craft’s spices by the nose is a man who was never truly of the house. The board is set with sealed jars, lettered, and an old recipe copied in a careful hand lies open beside them.' },
    { reg: 'narration', html: 'War has emptied his helpers to the walls and left the work half done. He needs the jars set straight before he can bake — each lettered jar matched to the thing it holds. You may take their measure however you can. But you may not open them. Trust what they tell you through the lid, and let the recipe be your guide where your nose is not enough.' },
  ],
  noteLabel: 'The brother-cook asks',
  note: [
    'Any man of ours knows these by heart — so let us see that you do. Seven jars, A to G, and not one of them named. Tell me which is which and I can bake; get it wrong and you are no cook of ours. Two are only flour and will tell your nose nothing — but the recipe knows them, if you read it as one of ours would. Do not open the jars; a draught spoils the lot.',
  ],
  puzzle: {
    type: 'assign',
    lead: 'Fill the cook’s sheet',
    intro: 'Seven jars stand before you, lettered <strong>A</strong> to <strong>G</strong>, each holding one thing the recipe calls for. Set each letter against what it holds.',
    recipeLabel: 'The recipe calls for',
    rowLabel: 'Jar',
    itemLabel: 'Holds',
    options: GINGERBREAD_OPTIONS,
    rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    solution: GINGERBREAD_SOLUTION,
    hint: 'Two jars are flour and smell of nothing alike — the recipe’s three-to-one of rye to wheat, and the heavier jar in the hand, tell them apart.',
    err: 'The batch came out wrong — at least one jar is not what you wrote. No cook of ours would miss it. Trust your nose, and read the recipe again.',
  },
  reveal: {
    head: 'The brother takes your sheet, bakes, and brings the batch out whole — every jar set true. You are of the house after all, his look says.',
    body: 'With the bread he hands you your fare and sealed orders. Bring them to the Game Master, who keeps to the Rynek Staromiejski — your next orders are folded inside.',
  },
};
