# Tor krzyżaków — placeholder

**Status**: 🔴 **Kompletnie nierozpisany**. Tylko zalążki w głowie autora. Wymaga warsztatu twórczego.

## Co wiemy

- **Klasa krzyżaków** = połowa grup (~6 grup × 4 osoby).
- Działają (nieświadomie) dla Zakonu.
- **Faza 1 jest wspólna** — wszyscy myślą że są tym samym (kurierami).
- W którymś momencie tor się **rozdziela** od TR.
- **Punkty wspólne** z torem TR (mijają się w terenie, mają niektóre wspólne elementy).
- **Zagadka polichromii w "Biedronce"** (kamienica Rynek Staromiejski) — przewidziana dla krzyżaków, jako weryfikacja "czy są godni dla Zakonu". Patrz `puzzles/polichromie-biedronka.md`.
- **Zagadka kalimby** (placeholder w `puzzles/kalimba.md`) — niejasne, czy dla krzyżaków czy uniwersalna.
- **Finał wspólny** pod zamkiem — krzyżacy dostarczają listy do Albrechta (domyślnie) lub mają opcję dezinformacji TR.

## Co trzeba rozpisać

### 1. Punkt rozdzielenia

- Kiedy krzyżacy dowiadują się że pracują dla Zakonu, nie dla TR?
- **Czy w ogóle się dowiadują?** Może do końca myślą że są "kurierami związku" a w finale okaże się że ich list trafia do komtura?
- Wariant alternatywny: krzyżacy mają **swojego "Jordana"** — innego NPC w fazie 2A, który ujawnia (lub nie) że ich strona to Zakon.

### 2. Postać kontaktowa krzyżaków (analog Jordana)

- Kto pełni rolę "kucharza Jordana" dla krzyżaków?
- Propozycje:
  - **Brat zakonny** w terenie (np. przy kościele Św. Jakuba na Nowym Mieście — historycznie Nowe Miasto bardziej prokrzyżackie).
  - **Donosiciel** (z donosicieli 1454 — wiki `donosiciele-1454.js`, **Peter Sleszer / Jacob Scolim / Hans Bischoff**).
  - Sam **komtur Albrecht** (ale wtedy odkrywają tożsamość za szybko).

### 3. Cztery zagadki asynchroniczne dla krzyżaków

- Czy te same co dla TR (różne wnioski)?
- Czy oddzielny zestaw (więcej do przygotowania, ale dramaturgicznie czystsze)?
- Każda zagadka powinna leakować coś o **TR / mieszczanach** — analogicznie do tego jak TR leakuje o Krzyżakach.

### 4. Plot twist krzyżaków

- TR ma plot twist Jordan = Bażyński.
- Co jest plot twistem dla krzyżaków?
- Propozycje:
  - **Spisek wewnątrz Zakonu** — komtur Albrecht nie jest jednak posłuszny Erlichshausenowi? Lub odwrotnie — informator w szeregach krzyżaków.
  - **Donosiciel-podwójny agent** — ich kontakt to ktoś z TR.
  - **Wiadomość jest pułapką** — list który dostarczają zawiera dezinformację (zaplanowaną przez TR).

### 5. Mapa wspólna czy osobna?

- Wszyscy dostają **tę samą mapę** na start, ale **różne szyfrowniki**? → różne ścieżki w tej samej przestrzeni.
- Lub: ta sama mapa + ten sam szyfrownik, ale **różne klucze startowe** w kopercie (różne pierwsze symbole).

### 6. Wpływ na finał

- Krzyżacy dostarczają listy do Albrechta = punkt dla Krzyżaków.
- **Czy krzyżacy mogą wybrać dostarczyć TR-owi?** (sabotaż własnej strony)
- **Czy mogą "udawać" TR** i przekazać list jako dezinformacja?
- W jaki sposób ich decyzja waży się z decyzją TR?

## Materiały z wiki przydatne dla krzyżaków

- `src/pages/albrecht-kalb.js` — postać komtura Albrechta Kalba.
- `src/pages/ludwig-erlichshausen.js` — Wielki Mistrz.
- `src/pages/zamek-krzyzacki.js` — siedziba.
- `src/pages/donosiciele-1454.js` — siatka informatorów Zakonu, autentyczne nazwiska.
- `src/pages/gsta-berlin.js` — źródła krzyżackie (Geheimes Staatsarchiv).
- `src/pages/henryk-plauen.js` — kontekst wcześniejszy.

## Otwarte pytania (do rozstrzygnięcia przed rozpisaniem)

1. **Czy krzyżacy są "źli" narracyjnie?** Czy gra ma symetrię (obie strony mają racje)? To wpływa na charakter NPC i ton ich zagadek.
2. **Czy gracze (krzyżacy) wiedzą że są klasą krzyżacką**, czy ujawnia się to dopiero w finale (jak TR)?
3. **Jak duża symetria** między torami? 1:1 (jeśli TR ma X, krzyżacy też mają X)? Czy asymetryczna z innym rytmem?
4. **Ilu NPC trzeba dodatkowo** (poza Jordanem, MG, Albrechtem)?

## Rekomendacja procesu

Tor krzyżacki to **prawdopodobnie 50% pracy która została do zrobienia**. Sugestia:

1. **Najpierw zamknąć tor TR** — rozpisać wszystkie zagadki TR, mieć działający scenariusz.
2. **Dopiero potem siadać do krzyżaków** — przez analogię, bo wiele decyzji mechaniki będzie się powtarzać.
3. Jeśli czasowo nie wyrobimy → **uprościć tor krzyżaków do "lustra TR"** (te same zagadki, inny NPC, inne instrukcje).

→ patrz `todo/roadmap.md`
