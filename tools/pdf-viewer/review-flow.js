// Dane flow przygody — Toruń 1454.
// Importowane przez build-review.mjs.

export const GROUPS = {
  G1:  { kolor: 'czerwony',     hex: '#E6194B', frakcja: 'miasto',   opcjonalna: 'Z4'  },
  G2:  { kolor: 'pomaranczowy', hex: '#F58231', frakcja: 'miasto',   opcjonalna: 'Z5'  },
  G3:  { kolor: 'zolty',        hex: '#FFE119', frakcja: 'miasto',   opcjonalna: 'Z5'  },
  G4:  { kolor: 'zielony',      hex: '#3CB44B', frakcja: 'miasto',   opcjonalna: 'Z6'  },
  G5:  { kolor: 'turkusowy',    hex: '#42D4F4', frakcja: 'miasto',   opcjonalna: 'Z6'  },
  G6:  { kolor: 'niebieski',    hex: '#4363D8', frakcja: 'krzyzacy', opcjonalna: 'Z8'  },
  G7:  { kolor: 'fioletowy',    hex: '#911EB4', frakcja: 'krzyzacy', opcjonalna: 'Z8'  },
  G8:  { kolor: 'bialy',        hex: '#FFFFFF', frakcja: 'krzyzacy', opcjonalna: 'Z9'  },
  G9:  { kolor: 'brazowy',      hex: '#9A6324', frakcja: 'krzyzacy', opcjonalna: 'Z10' },
  G10: { kolor: 'czarny',       hex: '#2B2B2B', frakcja: 'krzyzacy', opcjonalna: 'Z10' },
};

export const ETAPY = [
  {
    id: 'E0',
    nr: 0,
    tytul: 'Brief startowy',
    typ: 'wspolny',
    opis: 'Wszyscy uczestnicy zbierają się na Rynku Nowomiejskim. MG rozdaje zapieczętowany list, mapę z symbolami, deszyfrownik (per kolor grupy) i opaskę identyfikacyjną.',
    doSprawdzenia: [
      'Zapieczętowany list: brak czytelnej treści (grafika "sealed" v1-mute)',
      'Ton listu — medievalny, groźba bez anachronizmów',
      'Fizyczna zawartość K1: list + mapa + deszyfrownik + opaska (per kolor)',
    ],
    plikiWspolne: ['wspolne-1-Z1-list.pdf'],
  },
  {
    id: 'E1',
    nr: 1,
    tytul: 'Z1: Szlak symboli',
    typ: 'wspolny-warianty',
    opis: 'Każda z 10 grup dostaje inny łańcuch 4 miejsc (różne deszyfrowniki), ale mechanika identyczna. Raport do MG po 4 krokach.',
    doSprawdzenia: [
      'Koperta Z1: glif startowy (△) = pierwszy glif łańcucha konkretnej grupy (z1-10-sciezek.md)',
      '"exactly four steps" = poprawna długość łańcucha',
      'Mapa: 19 miejsc + 4 landmarki, Piccolo ≡ czytelny, brak nazw (zero spoilerów)',
      'Deszyfrownik: 4 właściwe + 5 dystraktorów, kolor grupy widoczny',
      'Koperta opisuje scenę (kursywa 2. os. "you"), nie list od nadawcy',
    ],
    // Podpowiedzi player-facing (EN) — draft do akceptacji Oskara. Drabinka 1→3 (delikatna → dosadna).
    hints: [
      { label: null, tiers: [
        'The symbols on the map only tell you WHERE to stand — not what you will find there. Go to the starting glyph (the triangle), then look around for a real-world detail that matches one of the little pictures on your decoder.',
        'Each detail you spot matches a picture on the decoder, and that picture points you to the NEXT glyph on the map. Follow the chain one stop at a time, writing each place into the legend as you recognise it.',
        'Your chain is exactly four stops long and ends where our man is waiting. If you start going in circles, or come back to a glyph you have already visited, you have taken a false trail — return to the last glyph you were sure of.',
      ] },
    ],
    plikiPerKolor: [
      'wspolne-{kolor}-1-Z1.pdf',
      'wspolne-{kolor}-1-Z1-mapa.pdf',
      'wspolne-{kolor}-1-Z1-deszyfrownik.pdf',
    ],
  },
  {
    id: 'E2',
    nr: 2,
    tytul: 'Z2: Droga do kontaktu',
    typ: 'fork-frakcja',
    opis: 'Pierwsze rozwidlenie per frakcja. TR szuka Jordana (Piccolo), KZ szuka Albrechta. Zagadka logiczna: kto co kupił i gdzie pracuje — tylko jeden glif jest na mapie.',
    doSprawdzenia: [
      'Zagadka logiczna ma jednoznaczne rozwiązanie (Jordan=Piccolo=miecz)',
      'Trzy glify miejsc: jeden realny na mapie (≡ Piccolo), dwa dystraktory',
      'Hasło "kupiłeś dziś rano miecz" — spięte ze skryptem Jordana 1:1',
      'Brak ramki MG (celowe — gracz idzie do Jordana, nie do MG)',
      'Slip "— R." (pośrednik) osobno w kopercie',
    ],
    doSprawdzeniaKZ: [
      'Lustro Z2 TR, ale cel = Albrecht; Pula B plotek (krytyka Zakonu)',
      'Zagadka logiczna: własna trójka (NIE kopia TR)',
      'Trop celu: parol do komtura (nie "chairman Rady")',
      'Pośrednik "N." (nie "R.") — spójność z torem KZ',
      'Jeden glif realny (Albrecht) + dwa dystraktory',
    ],
    // Podpowiedzi player-facing (EN) — draft do akceptacji Oskara.
    hints: [
      { label: 'Tor TR — mieszczanie (Jordan / Piccolo)', tiers: [
        'Three people each bought something in town this morning. Start with the one purchase that none of the three workplaces actually makes — it came from outside, and it pins down who really sold it.',
        'Once you know who bought what and where each of them works, you have a glyph for all three. Only ONE of those glyphs actually appears on your map — that is where you go.',
        'At the place, do not judge by appearances. Greet your contact by name and tell him what he bought this morning. The obvious guess for a cook is wrong on purpose — only the right deduction opens the door.',
      ] },
      { label: 'Tor KZ — krzyżacy (Albrecht)', tiers: [
        'The same kind of puzzle: three people, three purchases. Begin with the single item that is not made at any of the three workplaces.',
        'Work out who works where, then check your three glyphs against the map — only one is really there. Follow it to your contact.',
        'Your contact serves the commander; address him with the right title (he is no "chairman of any council"). Use the password exactly as your handler gave it to you.',
      ] },
    ],
    plikiPerFrakcja: {
      miasto: ['miasto-{kolor}-2-Z2.pdf', 'miasto-{kolor}-2-Z2-slip.pdf'],
      krzyzacy: ['krzyzacy-{kolor}-2-Z2.pdf'],
    },
  },
  {
    id: 'E3',
    nr: 3,
    tytul: 'Z3/Z3Z: Infiltracja (obowiązkowa)',
    typ: 'fork-frakcja',
    opis: 'Każda frakcja infiltruje siedzibę przeciwnika. TR kradnie listę komturowi Albrechtowi (zamek). KZ obserwuje Jordana w Piccolo i wyciąga godzinę buntu. Kluczowe: obaj aktorzy są tu "celem" przeciwnej frakcji.',
    doSprawdzenia: [
      'TR: instrukcja infiltracji zamku czytelna; brak checkpointu MG po Z3 (raport dopiero po Z3b)',
      'TR: pergamin (łup Z3b) — wpis #1 "chairman" zasiewa finał Z7',
      'TR: klucz do Z7 = motto HELFEN HEILEN UND WEHREN (zaszyfrowane +7 w szyfrgramie)',
      'KZ: cel = obserwacja (kolor szaty + chochla); godzina buntu = 21:00',
      'KZ: Tabela 1 do Z11 — Brown×Ladle = klucz centralny; Albrecht wręcza po Z3Z',
    ],
    // Podpowiedzi player-facing (EN) — draft do akceptacji Oskara.
    hints: [
      { label: 'Tor TR — mieszczanie (kradzież listy)', tiers: [
        'You are posing as informers eager to win the Order\'s favour. Do NOT let on that you are with the Secret Council — flatter the commander and let him do the talking.',
        'A commander who loves a good denunciation will bring out his own list of names to check it against. That parchment is the real prize. Read your second envelope once you have seen it.',
        'Watch how the commander moves — he turns away on a regular, repeating pattern. Wait for the moment his eyes leave the list, then take it. There is always another window; never rush a bad one.',
      ] },
      { label: 'Tor KZ — krzyżacy (infiltracja Piccolo)', tiers: [
        'Your task at Piccolo is to WATCH, not to act. The Order wants to be certain of this man — fix his marks in your memory.',
        'Two things about him matter: a colour he is wearing and a thing he carries in his hand. Note them both exactly — you will need them at the very end of the game.',
        'The "theft of supplies" is simpler than it sounds: use your coupon and take the enemy\'s meal. The hour of the rising will reach you from your own handler, not from this man.',
      ] },
    ],
    plikiPerFrakcja: {
      miasto: [
        'miasto-{kolor}-3-Z3.pdf',
        'miasto-{kolor}-4-Z3b.pdf',
        'miasto-{kolor}-04b-Z3-pergamin.pdf',
      ],
      krzyzacy: ['krzyzacy-{kolor}-3-Z3Z.pdf'],
    },
  },
  {
    id: 'E4',
    nr: 4,
    tytul: 'F2B: Zagadka opcjonalna',
    typ: 'fork-frakcja-grupa',
    opis: 'Każda z 10 grup dostaje INNĄ zagadkę opcjonalną po Z3/Z3Z. TR: Z4 (kalimba, G1), Z5 (piernik, G2+G3), Z6 (herby, G4+G5). KZ: Z8 (kalimba, G6+G7), Z9 (piernik, G8), Z10 (polichromie, G9+G10). Każda wydaje klucz do szyfru finałowego.',
    doSprawdzenia: [
      'Kod 621454 round-trip z zapisem melodii (pręciki numerowane) — Z4/Z8 kalimba',
      '7 słojów + przepis + zmyłkowe nazwy spójne ze stacją i kluczem MG — Z5/Z9 piernik',
      'Karta herbów hanzeatyckich (grafiki u Piotra) — potwierdzić zanim renderować — Z6',
      'Grafiki Biedronki (u Piotra, poza repo) — potwierdzić; Bestiariusz Krzyżowca A/B/E — Z10',
      'Ramka MG obecna w każdej zagadce — gracz wraca do MG z kodem/wynikiem',
    ],
    // Podpowiedzi player-facing (EN) — draft do akceptacji Oskara. Per typ zagadki opcjonalnej.
    hints: [
      { label: 'Z4 / Z8 — kalimba (melodia)', tiers: [
        'This is just a melody, not a cipher — there is no wheel or code table here. Listen to the tune and play it back on the instrument by ear. The first note is marked for you.',
        'Every tine of the instrument carries a number. As you play the right notes in order, read off the number under each one.',
        'Write the numbers down in the order you played them. That string of digits is your whole answer — hand it to the Game Master.',
      ] },
      { label: 'Z5 / Z9 — pierniki (sensoryczna)', tiers: [
        'Do not open the jars — smell them, shake them, weigh them in your hand. The recipe is your list of possible names, and not every name has a jar.',
        'Whole spices rattle, powders stay silent, honey sloshes. Place the obvious ones first using sound and smell.',
        'Two jars look and smell the same — those are the two flours. The recipe tells you which flour it uses MORE of, so the heavier jar must be that one.',
      ] },
      { label: 'Z6 — herby hanzeatyckie', tiers: [
        'The shields you need are all set into the paving of ul. Szeroka — walk it and look down. Each messenger was sent to an ally whose arms RESEMBLE his own city\'s.',
        'Pair each city that answered (Hamburg, Cologne, and Lübeck — twice) with the Prussian sender whose shield looks most like it. Toruń\'s three-towered castle, for instance, matches Hamburg.',
        'Four of the five senders find a look-alike partner. The one Prussian shield that matches none of them is the messenger who never arrived — name that city.',
      ] },
      { label: 'Z10 — polichromie (Biedronka)', tiers: [
        'Take your Bestiary card to the painted house on ul. Szeroka and study the medieval murals on its wall.',
        'Only some of the eight beasts on your card are really painted there — the rest are decoys. Compare each medallion against the wall.',
        'Find the three beasts that genuinely appear on the façade and report their three letters.',
      ] },
    ],
    plikiPerGrupa: {
      G1:  ['miasto-czerwony-5-Z4.pdf',      'miasto-czerwony-5-Z4-audio.mp3'],
      G2:  ['miasto-pomaranczowy-5-Z5.pdf',  'miasto-pomaranczowy-5-Z5-przepis.pdf', 'miasto-pomaranczowy-5-Z5-rozpiska.pdf'],
      G3:  ['miasto-zolty-5-Z5.pdf',         'miasto-zolty-5-Z5-przepis.pdf',        'miasto-zolty-5-Z5-rozpiska.pdf'],
      G4:  ['miasto-zielony-5-Z6.pdf'],
      G5:  ['miasto-turkusowy-5-Z6.pdf'],
      G6:  ['krzyzacy-niebieski-4-Z8.pdf'],
      G7:  ['krzyzacy-fioletowy-4-Z8.pdf'],
      G8:  ['krzyzacy-bialy-4-Z9.pdf',       'krzyzacy-bialy-4-Z9-przepis.pdf',      'krzyzacy-bialy-4-Z9-rozpiska.pdf'],
      G9:  ['krzyzacy-brazowy-4-Z10.pdf'],
      G10: ['krzyzacy-czarny-4-Z10.pdf'],
    },
  },
  {
    id: 'E5',
    nr: 5,
    tytul: 'Z7/Z11: Szyfr finałowy',
    typ: 'fork-frakcja',
    opis: 'TR odszyfrowuje szyfrogram Cezar +7 używając motta z Z3 → odkrywa Jordan = Hans von Baysen. KZ używa Tabeli 1 (kolor×przedmiot→symbol) + tabula recta (klucz MARIENBURG) → dostaje hasło do Albrechta.',
    doSprawdzenia: [
      'Ciphertext = +7 z "HANS VON BAYSEN IS JORDAN THE COOK" (round-trip ręczny)',
      'Dwa nagłówki TYM SAMYM fontem: motto w Z3 (jawne) i w szyfrgramie (zaszyfrowane)',
      'Brak koła/rekwizytu — czysty Cezar; shift odkrywany przez porównanie',
      'Tabula recta: klucz MARIENBURG; round-trip parolu PASS — Z11',
      '"Dziewiąte bicie" = 21:00; NIE "Tuba Dei"; miejsce = Przedzamcze',
    ],
    // Podpowiedzi player-facing (EN) — draft do akceptacji Oskara. Nie zdradzają finałowego twistu/parolu.
    hints: [
      { label: 'Z7 — mieszczanie (szyfr Cezara)', tiers: [
        'Lay the list you stole from the castle beside the intercepted letter. Both carry the same motto in the same script across the top — one plain, one scrambled.',
        'Line the two mottos up letter for letter: the comma and the exclamation mark sit in the same places. Compare the first letters to see how far the alphabet has shifted — every letter moves by that same amount.',
        'Once you know the shift, walk each letter of the message back by it (the alphabet wraps around: before A comes Z). The sentence will tell you who your contact in Piccolo truly is.',
      ] },
      { label: 'Z11 — krzyżacy (dwie tabele)', tiers: [
        'Your key comes from the man you watched at Piccolo: a colour he wore and a thing he held. Cross that row with that column on Table 1 to get a single symbol.',
        'Find that symbol\'s row on Table 2 (the large grid). To decode a letter, locate the ciphertext letter INSIDE that row and read the letter printed at the top of its column.',
        'If the message comes out as gibberish, you took the wrong cell on Table 1 — recheck the colour and the object. The correct row spells a phrase you must speak aloud to the commander.',
      ] },
    ],
    plikiPerFrakcja: {
      miasto: ['miasto-{kolor}-6-Z7.pdf', 'miasto-{kolor}-06a-Z7-list.pdf'],
      krzyzacy: ['krzyzacy-{kolor}-5-Z11-tabela-symbole.pdf', 'krzyzacy-{kolor}-5-Z11-tabela-recta.pdf'],
    },
  },
  {
    id: 'E6',
    nr: 6,
    tytul: 'Decyzja: komu dostarczyć list',
    typ: 'wspolny',
    opis: 'Każda z 10 grup podejmuje wolny wybór: dostarczyć list Janowi Bażyńskiemu (Jordan) lub komturowi Albrechtowi. TR wie już że Jordan = Bażyński (reveal Z7). KZ zna Albrechta od początku.',
    doSprawdzenia: [
      'Koperta finałowa (KF) — neutralna (nie sugeruje strony)',
      'Wolna decyzja graczy nie jest oceniana w treści koperty',
      'Brak osobnych PDF dla tego etapu — decyzja ustna',
    ],
    plikiWspolne: [],
  },
  {
    id: 'E7',
    nr: 7,
    tytul: 'Finał aktorski: 21:00 pod zamkiem',
    typ: 'wspolny',
    opis: 'Wszystkie 10 grup zbiera się pod ruinami zamku krzyżackiego. MG ogłasza wynik. Scenka aktorska: Bażyński (Piotr) vs Albrecht (Zosia). Callback: Bażyński wyciąga miecz z Z2. Dwie drogi zakończenia (triumf TR / kompromitacja TR).',
    doSprawdzenia: [
      'Scenka: miecz Bażyńskiego = callback parolu z Z2 ("kupiłeś dziś rano miecz")',
      'Aktorzy zajmują strony osobno; grupy wręczają listy bezpośrednio wybranej osobie (Wariant B)',
      'Brak rekwizytu dzwonu (porzucone #49); "dziewiąte bicie" = słowny znacznik czasu',
      'MG-runsheet: skalowanie na 2 tory i 10 grup; protokół awaryjny gdy aktor niedostępny',
    ],
    plikiWspolne: [],
  },

];
