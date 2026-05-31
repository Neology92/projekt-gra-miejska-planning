# Zagadka 5 / 9 — Sensoryczna z piernikiem (przyprawy)

**Status**: szkicowe. Z5 = opcjonalna dla TR (mieszczanie). **Z9** = lustro dla krzyżaków (ta sama mechanika, inny framing koperty). Mechanika zatwierdzona przez Oskara [2026-05-31].

## Pomysł

Gracze dostają zestaw **ponumerowanych/oznaczonych literami słoiczków** z przyprawami do piernika i muszą — węchem (ew. smakiem/dotykiem) — **przypisać do każdego słoiczka właściwą nazwę przyprawy**. Wynik zapisują na karcie rozpiski (np. „A — cynamon, B — goździki, C — miód…") i przynoszą MG.

MG zabiera słoiczki, odchodzi na bok („idzie upiec"), po chwili wraca:
- **źle** → *„pierniki nie wyszły, coś jest nie tak"* — grupa poprawia i próbuje ponownie;
- **dobrze** → MG **przynosi pierniki** (realna nagroda do zjedzenia) **i kolejną kopertę**.

## Mechanika

1. **Słoiczki**: N nieprzezroczystych/zaklejonych pojemników oznaczonych **literami** (A, B, C…). W środku przyprawa rozpoznawalna węchem.
2. **Etykiety (nazwy)**: zestaw kartoników z nazwami przypraw — **więcej nazw niż słoiczków** (utrudnienie). Gracz nie może przypisać „każda nazwa raz po kolei"; część nazw to dystraktory bez pokrycia w słoiczkach.
3. **Karta rozpiski**: gracze wpisują mapowanie litera→nazwa i oddają MG.
4. **Sprawdzenie u MG**: binarne (wyszło / nie wyszło). Przy „nie wyszło" MG **nie mówi które**, tylko że „smak nie ten" → presja na ponowne wąchanie, nie zgadywanie.
5. **Nagroda**: pierniki + koperta (klucz/fragment do finału — patrz „Klucz do finału" niżej).

## Dobór przypraw (zweryfikowane z wiki)

Zawartość słoiczków = **kanoniczny skład piernika toruńskiego XV w.** wg wiki `kuchnia-pierniki.js` (zweryfikowane [2026-05-31]). Wiki podaje wprost: **miód** (z lasów pruskich, główny słodzik) + korzenie sprowadzane z Italii przez Hanzę:

- **miód** (baza — silny, słodki, łatwy → dobry „rozgrzewający" pierwszy słoiczek)
- **cynamon**
- **gałka muszkatołowa**
- **goździki**
- **kardamon**
- **imbir**
- **pieprz (czarny)**

To **7 pozycji** = naturalne 6–7 słoiczków bez naciągania historii. (Wiki wymienia jako dodatki też skórki pomarańczowe/cytrynowe, migdały, orzechy — nie „przyprawy korzenne", ale można dorzucić jako trudniejsze słoiczki, jeśli chcesz N>7.)

**Dystraktory (nazwy bez słoiczka)** — dwie strategie, do wyboru:
- *Trudność sensoryczna*: przyprawy **myląco podobne** zapachowo do obecnych (np. „ziele angielskie" przy goździkach, „kolendra"/„anyż" przy kardamonie) — gracz musi naprawdę rozróżnić, nie tylko skojarzyć. (Uwaga: ziele angielskie i anyż **nie są** w kanonie piernika z wiki → świadomie używane tylko jako fałszywe nazwy.)
- *Trudność historyczna (bonus)*: nazwy **anachroniczne / nowoświatowe** — wiki wprost listuje jako **niemożliwe w 1454**: papryka, kakao/czekolada, kawa, herbata (oraz ziemniaki, pomidory). Dodaj wanilię. Kto zna historię, od razu je odrzuci jako „niemożliwe w 1454"; reszta odrzuci węchem. Spina się z `lore/fakty-vs-fabula.md` i sekcją „Co NIE było jeszcze w 1454" w wiki — ale **nie może być wymagane** (gracz nie musi znać dat, żeby wygrać węchem).

> Rekomendacja: miks — większość dystraktorów „myląca zapachowo", 1–2 anachroniczne (papryka/kakao) jako smaczek dla uważnych.

## Klucz do finału (otwarte — wymaga decyzji)

Każda opcjonalna zagadka 2B musi wypluwać **wymienialny klucz** do finału (`mechanics/finalowe-glosowanie.md`, model jak w Z4 kalimbie: szyfrogram + klucz). Tu są dwa modele:

- **(A) Koperta = nagroda.** Poprawne rozpisanie tylko **bramkuje** wydanie koperty, a klucz/fragment jest *w* kopercie. Prosto, zgodne z opisanym przez Oskara loopem. Bramkowanie = sama dyskryminacja sensoryczna.
- **(B) Rozpiska = klucz.** Każda przyprawa ma przypisaną liczbę/literę; **poprawne mapowanie czytane po kolei tworzy sekwencję**, która JEST kluczem (np. krótki klucz Vigenère do Z7, jak sekwencja pręcików w kalimbie). Element pracuje podwójnie, ale trudniejszy do zaprojektowania i mniej wybaczający.

> Domyślnie **(A)** (zgodne z opisem). **(B)** jako ewentualny upgrade — decyzja Oskara.

## Lustro krzyżackie (Z9)

Ta sama mechanika i rekwizyty (1 grupa krzyżacka — patrz `concept/03-faza-2b-asynchroniczne.md`). Różni się **tylko framing w kopercie** (np. „zaopatrzenie kuchni zamkowej" zamiast „piekarni miejskiej"). Jeden zestaw słoiczków obsługuje Z5 (2 grupy) + Z9 (1 grupa) → 1–2 komplety wystarczą.

## Rekwizyty

- N słoiczków nieprzezroczystych, oznaczonych literami, z przyprawami.
- Komplet kartoników z nazwami (więcej niż słoiczków).
- Karta rozpiski do wypełnienia.
- **Pierniki** jako nagroda (kup gotowe / katarzynki).
- Koperta z kluczem/fragmentem do finału.

## Otwarte pytania

1. **Ile słoiczków, ile nazw** (N i ile dystraktorów)? Sugestia: 6 słoiczków + 9–10 nazw.
2. **Tylko węch, czy też smak/dotyk?** Smak = wyższa wierność, ale higiena/logistyka w terenie (łyżeczki jednorazowe). Dotyk słabo różnicuje proszki.
3. **Strategia dystraktorów** (myląca zapachowo vs anachroniczna vs miks) — patrz wyżej.
4. **Model klucza (A) czy (B)** — patrz „Klucz do finału".
5. **Czy MG zdradza liczbę błędów?** Sugestia: nie (tylko „nie wyszło") — utrzymuje napięcie.
6. ~~Zgodność przypraw z wiki~~ ZWERYFIKOWANE [2026-05-31] vs `kuchnia-pierniki.js`: miód + cynamon, gałka muszkatołowa, goździki, kardamon, imbir, pieprz.

## Tło fabularne do koperty (opcjonalnie)

- Legenda `legenda-piernikarz.js` (Piernikarz Bogumił) — gotowy haczyk narracyjny dla framing koperty Z5 (piekarnia miejska).
- Pomnik Piernikarki jest już przystankiem w `szlak-symboli.md` (symbol „świnka") — można domknąć motyw piernika klamrą fabularną między Z1 a Z5.

## Podział pracy

- **Oskar**: ostateczny dobór dystraktorów, model klucza (A/B), treść/framing koperty (Z5 vs Z9), kwestia MG („pierniki nie wyszły…").
- **Agent** (zrobione): weryfikacja przypraw vs wiki. **Do zrobienia gdy Oskar zdecyduje kierunek**: propozycje par „mylących" dystraktorów, draft karty rozpiski i tekstu koperty.
