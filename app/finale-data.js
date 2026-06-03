/* ============================================================================
   finale-data.js — KANON finału (Z7 mieszczanie / Z11 krzyżacy).
   Źródło: puzzles/z7-szyfr-spec.md · z11-szyfr-spec.md · envelopes/miasto-6-Z7
   · krzyzacy-5-Z11.

   Apka = nośnik briefu + szyfrogram + walidacja odszyfrowanego tekstu (PREV).
   Klucz fizyczny (Z7: wykradziona lista; Z11: Tabele 1+2) zostaje w ręku gracza.
   Finał rozdzielony: intro+szyfr (pre-solve) → reveal (post-solve: twist/motto +
   wybór strony + dziewiąte bicie). Po nim KF = oddanie listu aktorowi (poza apką).

   Z7 (TR): Cezar +7. Nagłówek = zaszyfrowane motto (= klucz przez porównanie z
            jawnym mottem wykradzionej listy). Plaintext = twist „Jordan=Bażyński".
   Z11 (KZ): tabula recta. Plaintext = motto Zakonu (hasło dla Albrechta).

   Player-facing = EN.
   ============================================================================ */

const FINALE = {

  /* ---------- Z7 — przechwycony list (TR) ---------- */
  TR: {
    label: 'Z7',
    title: 'The intercepted letter',
    prop: {
      what: 'the stolen list of names (its header is the Order’s motto, in plain) + the sealed letter',
      from: 'the list you lifted from Albrecht; the cipher from the Game Master',
      where: 'lay the two headers side by side — the key is the shift between them',
    },
    intro: [
      { reg: 'narration', html: 'What the Game Master gave you for your trouble was no reward at all — a strip of the Order’s own dispatch, intercepted: Komtur Albrecht’s word to Marienburg, in cipher.' },
      { reg: 'msg', html: 'Its head bears the Order’s motto — the very same words that head the list you stole from him, there in plain sight. Lay the two side by side: the punctuation falls in the same places, so each word answers to its twin. Count the shift from one to the other, then turn the message back by the same step, letter for letter.' },
    ],
    cipher: {
      header: 'OLSMLU, OLPSLU BUK DLOYLU!',
      body: 'OHUZ CVU IHFZLU PZ QVYKHU AOL JVVR',
    },
    prompt: 'Read the message and enter it below.',
    answer: 'HANSVONBAYSENISJORDANTHECOOK',
    reveal: [
      { reg: 'narration', html: '<strong>You know now.</strong>' },
      { reg: 'narration', html: 'The cook with the ladle — the man who tested you, who trusted you, who sent you into the castle. <strong>Jordan is Hans von Baysen:</strong> the chairman of the Council, the man this letter was meant for from the very first hour.' },
      { reg: 'narration', html: 'Outside, the carnival is burning itself out. The pipes have gone quiet, the masks coming off all over Toruń — and yours with them. No more faces to wear.' },
      { reg: 'narration', html: 'The letter has ridden in your bag since morning. Sealed, unread, unbroken — and so it stays. You were only ever the hands that carried it.' },
      { reg: 'narration', html: 'It ends at the castle. At Przedzamcze, where the Order’s fortress stands in ruin, the ninth bell will bring two men into the dark — and you are bound to neither. One is the chairman, who was Jordan. The other is Albrecht, the Komtur — you stood before him once, close enough to lift the list from beneath his hand. The letter was meant for the chairman. That is not the same as saying it must go to him.' },
      { reg: 'narration', html: 'Everything you have heard tonight comes back at once — that this rising is a quarrel of rich men, and you its hands; that the small are spent like coin while the great walk off with the whole of Prussia in their pocket. Perhaps the man this letter was meant to raise up is the one who has earned it least.' },
      { reg: 'narration', html: 'And should you think of crossing to the Komtur — the Order opens its hand to no one who cannot name it. But you have already held its watchword in your own: those same words at the head of the list you stole — <strong>HELFEN, HEILEN UND WEHREN!</strong> — the key that broke the cipher tonight. Speak them to Albrecht, and the Order would take you for its own.' },
      { reg: 'narration', html: 'The ninth bell. The ruins. You walk.' },
    ],
    endNote: 'Carry the sealed letter to Przedzamcze at the ninth bell (9 PM) and put it into the hand you choose — the chairman’s, or the Komtur’s. (This is the boundary of the proof-of-concept: the final scene is played live.)',
  },

  /* ---------- Z11 — przechwycona dyspozycja (KZ) ---------- */
  KZ: {
    label: 'Z11',
    title: 'The Order’s watchword',
    prop: {
      what: 'Recognition Table 1 + Table 2 (the Komtur’s grid) + the coded line + the sealed letter',
      from: 'the tables from Albrecht; the coded line from the Game Master',
      where: 'a colour and a thing, both belonging to the man you watched at Piccolo — read your sign, then its row',
    },
    intro: [
      { reg: 'narration', html: 'The night you served has come. Across Toruń the carnival gutters out, the masks come down — and the Order’s quiet work shows its face at last. You did what was asked: you sat at the rebels’ cook’s table, and marked the man and the hour.' },
      { reg: 'msg', html: 'Now one thing remains: to prove, to the Komtur’s own face, that you are the Order’s. The Order does not take a courier on trust. You already carry the proof, if you can read it — that coded line, a scrap of the Order’s own dispatch, the watchword folded into it that every true son of the Order can draw out and no stranger can.' },
      { reg: 'msg', html: 'Read your sign from the first table — a colour and a thing, both belonging to the man you watched. Find its row in the second. Let the marks give up their word.' },
    ],
    cipher: {
      header: null,
      body: 'UEFNEJ, UEGFEJ TJI WEUPEJ!',
    },
    prompt: 'Draw out the word and enter it below.',
    answer: 'HELFENHEILENUNDWEHREN',
    reveal: [
      { reg: 'narration', html: 'The word you read is the Order’s own — <strong>HELFEN, HEILEN UND WEHREN!</strong> — Help, Heal, Defend. Carry it to the walls.' },
      { reg: 'narration', html: 'At Przedzamcze, where the fortress stands in ruin, the ninth bell will bring the Komtur into the dark — and across from him, the rebels’ chairman. Between them, a single choice: into whose hands your sealed letter goes.' },
      { reg: 'narration', html: 'Speak the watchword to the Komtur, and he will take what you carry. Withhold it — or carry the letter to the other man — and that is your choice to make.' },
      { reg: 'narration', html: 'The ninth bell. The ruins. You walk.' },
    ],
    endNote: 'Carry the sealed letter to Przedzamcze at the ninth bell (9 PM). Speak the watchword to Albrecht and he takes it — or give it to the chairman instead. (This is the boundary of the proof-of-concept: the final scene is played live.)',
  },

};
