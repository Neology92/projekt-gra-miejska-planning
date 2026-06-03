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
      'KZ: cel = obserwacja (kolor szaty + chochla); godzina buntu = 20:30',
      'KZ: Tabela 1 do Z11 — Brown×Ladle = klucz centralny; Albrecht wręcza po Z3Z',
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
      '"Ósme bicie" = 20:30; NIE "Tuba Dei"; miejsce = Przedzamcze',
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
    tytul: 'Finał aktorski: 20:30 pod zamkiem',
    typ: 'wspolny',
    opis: 'Wszystkie 10 grup zbiera się pod ruinami zamku krzyżackiego. MG ogłasza wynik. Scenka aktorska: Bażyński (Piotr) vs Albrecht (Zosia). Callback: Bażyński wyciąga miecz z Z2. Dwie drogi zakończenia (triumf TR / kompromitacja TR).',
    doSprawdzenia: [
      'Scenka: miecz Bażyńskiego = callback parolu z Z2 ("kupiłeś dziś rano miecz")',
      'Aktorzy zajmują strony osobno; grupy wręczają listy bezpośrednio wybranej osobie (Wariant B)',
      'Brak rekwizytu dzwonu (porzucone #49); "ósme bicie" = słowny znacznik czasu',
      'MG-runsheet: skalowanie na 2 tory i 10 grup; protokół awaryjny gdy aktor niedostępny',
    ],
    plikiWspolne: [],
  },

  // ─── Etap 8: Kartki autorskie (meta-kartki) ────────────────────────────────
  // Osobny zakres review. Piotr: potwierdź czy wchodzą do gry, kiedy je dać,
  // i czy zaznaczone spoilery faktycznie trzeba usunąć.
  {
    id: 'META',
    nr: 8,
    tytul: 'Kartki autorskie — zakres do decyzji',
    typ: 'wspolny',
    opis: 'Każda koperta w grze ma swoją kartkę autorską, która rozdziela: co w tej zagadce jest prawdziwą historią, co legendą, co wymysłem Oskara, a co świadomym anachronizmem. Piotr: przejrzyj PDFy i odpowiedz na pytania poniżej — szczególnie jedno jest pilne (spoilery).',
    notaPiotra: `
<h3>Czym są te kartki i po co Oskar je chce?</h3>
<p>
  Gra toczy się w prawdziwym Toruniu, wśród autentycznych miejsc i z postaciami historycznymi.
  Ale żeby gra działała, Oskar musiał trochę naginać historię — łączyć legendy z faktami,
  używać nowożytnych pomników jako punktów orientacyjnych, wymyślać sceny, które nigdy się nie wydarzyły.
  Te kartki to <strong>komentarz autora</strong>: dla każdej koperty wyjaśniają, co w tej zagadce jest prawdziwą
  historią, a co wymysłem lub anachronizmem.
</p>
<p>
  Pomyśl o tym jak o <em>komentarzu reżysera na DVD</em> — „ta scena jest z dokumentów historycznych,
  tamtą wymyśliłem, a ten pomnik jest z 2011 roku ale pasował do trasy".
</p>
<p>
  <strong>Nowy format:</strong> Każda kartka to teraz dwa zdania — jeden fakt i jedna ciekawostka.
  Projekt zakłada wydruk z jednej A4 (ok. 6–7 kartek na stronę, do wycięcia).
</p>
<p>
  <strong>Kiedy gracz by to dostał?</strong> Oskar jeszcze nie zdecydował — razem z kopertą,
  po rozwiązaniu, albo jako debrief po grze. Mogą też nie wejść do gry — stąd to review.
</p>

<h3>Dlaczego Oskar chce twojej opinii?</h3>
<p>
  <strong>Pytanie nr 1:</strong> Czy kartki wchodzą do gry i kiedy? Czy ten format (2 zdania) ma sens,
  czy gracze w ogóle chcieliby to czytać?
</p>
<p>
  <strong>Pytanie nr 2:</strong> <span class="warn-inline">⚠ Trzy kartki zawierają spoilery</span>
  (oznaczone poniżej). Danie ich przed finałem niszczy plot twist. Czy je wyrzucić, czy tylko odłożyć na po-finale?
</p>`,
    doSprawdzenia: [
      '─── PYTANIE GŁÓWNE ────────────────────────────────────────',
      'Czy kartki wchodzą do gry? (Opcje: razem z kopertą / po rozwiązaniu / debrief po grze / nigdy)',
      '─── SPOILERY — DECYZJA WYMAGANA ──────────────────────────',
      '⚠ miasto-2-Z2: ujawnia Jordan = Bażyński (twist finału Z7). Dać PO Z7, nigdy przed.',
      '⚠ miasto-6-Z7: zawiera twist Jordan = Bażyński + wymowę moralną. Dać razem z Z7 lub po.',
      '⚠ krzyzacy-5-Z11: finał KZ. Dać razem z Z11 lub po.',
      '─── POZOSTAŁE (bezpieczne przed/po) ───────────────────────',
      'wspolne-1-Z1: Kopernik 1853, Piernikarka 2011, pręgierz-replika 2007 — na trasie nic z 1454.',
      'miasto-3-Z3: zamek, Kalb, Gdanisko ocalało jako latryna → prochownia.',
      'krzyzacy-3-Z3Z: Zakon wiedział o buncie od XI 1453, ale miał 300 braci w całych Prusach.',
      'miasto-5-Z4 / krzyzacy-4-Z8: kalimba z XIX w. (nie padała nazwa), fontanna Flisaka 1914.',
      'miasto-5-Z5 / krzyzacy-4-Z9: katarzynki to XIX w.; papryka i kakao — Nowy Świat (XVI w.).',
      'miasto-5-Z6: Aleja Gmerków to instalacja z ostatniego remontu, nie z 1454.',
      'krzyzacy-4-Z10: Biedronka na Szerokiej 22 — polichromie z ok. 1370 r., 84 lata przed buntem.',
    ],
    plikiWspolne: [
      'wspolne-1-Z1-meta.pdf',
      'miasto-2-Z2-meta.pdf',
      'miasto-3-Z3-meta.pdf',
      'krzyzacy-3-Z3Z-meta.pdf',
      'miasto-5-Z4-meta.pdf',
      'krzyzacy-4-Z8-meta.pdf',
      'miasto-5-Z5-meta.pdf',
      'krzyzacy-4-Z9-meta.pdf',
      'miasto-5-Z6-meta.pdf',
      'krzyzacy-4-Z10-meta.pdf',
      'miasto-6-Z7-meta.pdf',
      'krzyzacy-5-Z11-meta.pdf',
    ],
  },
];
