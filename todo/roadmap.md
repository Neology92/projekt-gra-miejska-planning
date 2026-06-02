# Roadmap - co dalej w jakiej kolejności

**Cel**: doprowadzić grę do stanu gotowości do rozegrania. Nie wiemy jeszcze na kiedy - data rozgrywki TBD.

## Faza A - decyzje strategiczne (TY, ~2-3h skupionej pracy)

**Pełny rejestr decyzji (otwarte + rozstrzygnięte) → `todo/otwarte-pytania.md`.** Tu tylko skrót dla orientacji.

Zamknięte i pozwalające ruszyć: 1 MG = Oskar · 10 grup × 4 (5+5) · obsada (Piotr/Zosia/Oskar) · pełna symetria torów · klasy ujawniane po Z2 · finał = prosta zliczanka (1 grupa = 1 głos) · lokal Jordana = Piccolo.

Wciąż otwarte i strategiczne: **#3 data rozgrywki** (deadline) · **#6 mapa+szyfrownik wspólne czy per klasa** · **#15 co gdy grupa nie dostarczy** · **#59 budżet**.

**Decyzje zapisuj** w `otwarte-pytania.md` jako „**temat** — ROZSTRZYGNIĘTE [data]: ..." (bez przekreśleń).

## Faza B - dopracowanie zagadek (TY + agent, ~10-20h)

Kolejność prac na zagadkach (priorytetowa):

### Krok 1: Z1 Szlak symboli (mechanika centralna)

- [ ] Wybór 5-7 miejsc terenowych z 45 kandydatów (`puzzles/szlak-symboli.md`)
- [ ] Stworzenie mapowania obiekt → symbol (kreatywna, autor)
- [ ] Projekt mapy graficznej (autor / grafik)
- [ ] Projekt szyfrownika (autor / grafik)
- [ ] Testowe przejście trasy (osobiście, sprawdzenie czasów)

**Bez tego nie ma gry.** Najwyższy priorytet.

### Krok 2: Z3 (infiltracja zamku) + Z3Z (infiltracja Piccolo) — obowiązkowe w F2B

- [ ] Wariant mechaniki Z3 (A/B/C/D) - `puzzles/zamek-krzyzacki-lista.md`
- [ ] Treść listy (autentyczne nazwiska z wiki `tajna-rada.js`)
- [ ] Mechanika "kradzieży" listy komturowi Albrechtowi (Z3)
- [ ] Mechanika Z3Z (kradzież zaopatrzenia + przeciek godziny 20:30 + ew. koło deszyfrujące)
- [ ] Zdefiniowanie „klucza" wyjściowego z Z3 i Z3Z do finału

**Bez Z3/Z3Z finał nie ma sensu.**

### Krok 3: Z2 Droga do Jordana + Z2b Test zaufania (przejście F1→F2A)

- [ ] Forma "trzech rzeczy do zestawienia" - `puzzles/droga-do-jordana.md`
- [ ] Wybór formy testu Jordana - `puzzles/test-jordana.md`
- [ ] Napisanie konkretu testu

### Krok 4: Z7 + Z11 Finałowe (szyfry)

- [ ] Mechanika szyfru Z7 (mieszczanie) zasilanego kluczami z Z3 + 1 opcjonalnej → "Jordan = Bażyński"
- [ ] Mechanika szyfru Z11 (krzyżacy) + plot twist krzyżaków (otwarty)
- [ ] Zapewnienie, że klucze opcjonalne są **wymienialne** (każda dopuszczona para rozwiązuje szyfr)
- [ ] Treść koperty finałowej

### Krok 5: Plotki i forshadowing

- [ ] Stworzenie ~10-15 plotek (z propozycji w `lore/plotki-i-pogloski.md`)
- [ ] Przypisanie do kopert K1-K7
- [ ] Tagging (NCM/F2A/F2B/F3)

### Krok 6: Zagadki opcjonalne F2B (mieszczanie i lustra krzyżackie)

- [ ] Z4 melodia flisaka + Z8 melodia zakonu (kalimba) - treść melodii, mechanika kodu
- [ ] Z5 + Z9 sensoryczna z piernikiem - mechanika sensoryczna, miejsce
- [ ] Z6 herby hanzeatyckie (ul. Królowej Jadwigi) - wizyta + spis herbów w bruku i na latarniach; dobór 5 dystraktorów
- [ ] Z10 polichromie + Bestiariusz Krzyżowca - research treści (osobista wizyta)
- [ ] Każda zagadka: zdefiniować wymienialny „klucz" do finału

### Krok 7: Tor krzyżacki — domknięcie

- [x] Decyzja: **symetria treści** (2026-05-29)
- [x] **Plot twist krzyżaków: BRAK** (2026-05-29) — brama = duma Albrechta + weryfikacja F2B
- [ ] Treść Z3Z, Z8, Z9, Z10, Z11
- [ ] Decyzja o instrumencie (kalimba vs XV-wieczny)
- [ ] Bonus „Opowieść skazanego" (niski priorytet)

## Brama spójności meta ↔ treść (MUST-HAVE przed zatwierdzeniem projektu)

> ⚠️ **Wymagane przed produkcją/drukiem i ostatecznym zatwierdzeniem.** Gdy MVP jest gotowe i **wszystkie koperty** mają finalną treść — puścić agenta **weryfikującego spójność** całej gotowej-do-rozgrywki treści (koperty, skrypty NPC, rekwizyty, mapy, szyfrownik) z **meta-kartkami** (`prototype/meta-cards/` + surowiec `lore/meta-kartki/`).

**Po co:** meta-kartki opisują „co naprawdę było" — jeśli rozjadą się z faktyczną treścią kopert, kartka kłamie o własnej grze. Drafty meta powstały, **zanim** część kopert była finalna → ryzyko stałych odwołań do porzuconych decyzji.

**Przykład realnego byka [złapany 2026-06-02]:** karty Z4/Z8 mówiły o „raftsman's pipe / cloister psaltery", a `puzzles/kalimba.md` pkt 5 **rozstrzygnął [2026-06-01]**, że instrument **nie ma nazwy własnej** — w tekście tylko opis ogólny („a small iron-tongue instrument" / lamellofon). To dokładnie typ rozjazdu, który ta brama ma wyłapywać systemowo.

**Zakres skanu (checklist dla agenta):**
- [ ] Każda meta-kartka vs finalna treść swojej koperty: nazwy instrumentów, miejsc, postaci, dat, rekwizytów — czy zgodne?
- [ ] Czy meta-kartka nie odwołuje się do **porzuconych** wariantów (sprawdź „otwarte pytania → ROZSTRZYGNIĘTE" w `puzzles/*`, `mechanics/*`, `concept/*` i `lore/fakty-vs-fabula.md`).
- [ ] **Re-audyt bramkowania spoilerów** na finalnych kopertach: czy kartka N nie zdradza treści koperty N+1 ani finału (model w `prototype/meta-cards/README.md`).
- [ ] Spójność EN: terminologia, nazwy własne toruńskie zachowane w oryginale.
- [ ] Lista rozbieżności → poprawki w meta-kartkach (źródło prawdy = finalna treść gry, nie odwrotnie).

**Kiedy:** po Fazie B (treść kompletna), przed Fazą C (druk) — żeby nie drukować kartek z nieaktualną treścią.

## Faza C - produkcja rekwizytów (TY + ewentualnie pomoc, ~5-15h)

- [ ] **Drukowanie kopert** (~96 sztuk, posortowane)
- [ ] **Pieczętowanie** wosk + pieczęć
- [ ] **Listy zapieczętowane** (~10 sztuk, jeden per grupa)
- [ ] **Mapy** (12-48 sztuk zależnie od decyzji)
- [ ] **Szyfrowniki** (12-48 sztuk)
- [ ] **Karta polichromii** (dla krzyżaków, jeśli tor jest)
- [ ] **Rekwizyt chochli** Jordana
- [ ] **Pergamin z listą TR** (Z3 - jeden)
- [ ] **Kostiumy 2 aktorów** (Jordan/Piotr — chochla; Albrecht/Zosia — płaszcz + krzyż)
- [ ] **Dzwon / nagranie** na finał
- [ ] **Pudełka / NPCs do zliczania głosów**

## Faza D - testy (TY + 4-6 znajomych, ~2-3h)

- [ ] **Playtest minimum 1 zagadki** z 4 nowymi osobami - F1 + F2A
- [ ] **Iteracja** - co nie zadziałało
- [ ] **Playtest pełnej trasy** (przynajmniej F1+F2A+1xF2B+F3) z 1 grupą
- [ ] **Wyciągnięcie wniosków** - corrigenda przed dniem rozgrywki

## Faza E - dzień rozgrywki

- [ ] Brief animatorów / MG (rano)
- [ ] Setup punktów - rekwizyty na miejscach
- [ ] Rozdanie kopert startowych
- [ ] **Gra** (~kilka godzin)
- [ ] Debriefing po finale (piwo / ognisko / co tam)

## Priorytety czasowe - na czym najpierw

1. **Faza A (decyzje)** - bez tego nic nie ruszy. Daj sobie weekend.
2. **Z1 (szlak symboli)** - bez tego nie ma gry. Zacznij ASAP po Fazie A.
3. **Z3 + Z4** - kolejny krytyczny pakiet.
4. **Pozostałe zagadki TR + plotki** - rozpisz w spokoju.
5. **Tor krzyżacki** - dopiero gdy tor TR jest **kompletny i przetestowany**.
6. **Produkcja** - dopiero gdy treść finalna.
7. **Testy** - obowiązkowe przed dniem rozgrywki, nawet jeśli "wszystko jest pewne".

## Realistyczna estymacja

**Minimum aby ruszyło**: ~30-40h pracy autora + 5-10h pomocy zewnętrznej (grafika, druk, aktorzy).

**Z buforem na powtórki, iteracje, change requests**: ~60-80h pracy autora.

**Czas kalendarzowy** (przy 5h/tyg): 3-4 miesiące.
**Czas kalendarzowy** (przy 15h/tyg): 4-6 tygodni.

## W co agent może realnie pomóc (a w co nie)

### Może (i to znacznie odciąży):
- Research historyczny - sprawdzenie postaci, dat, miejsc z wiki.
- Wybór miejsc terenowych spośród 45 kandydatów.
- Generowanie wariantów do wyboru (3-5 opcji dla każdego elementu).
- Redakcja tekstów które już napiszesz.
- Wykrywanie nieświadomych anachronizmów.
- Kalkulacje (czasów, liczb).
- Spisanie decyzji w plikach (zastępowanie "otwarte pytania" rozstrzygnięciami).

### Nie powinien (zostaw sobie):
- Kreatywne wymyślanie zagadek (treść mechaniki, plot twisty).
- Charakterystyka NPC (głos, gesty, motywacje).
- Stylizacja językowa (twoje pióro).
- Decyzje strategiczne (one są twoje).
- Negocjacje z lokalami, logistyka praktyczna (casting już zamknięty).
