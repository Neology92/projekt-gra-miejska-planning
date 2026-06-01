# Z1 — 10 ścieżek złożonych (montaż po fanie)

> **Status:** złożone przez orkiestratora 2026-06-01 z 10 subagentów (sonnet, 1 ścieżka/agent) na bazie zamrożonych szkieletów `z1-szkielety-10.md`. Pass spójności przeszedł. To **draft do dry-runu** — budżety i detale `⚠ teren` wymagają weryfikacji w terenie przed produkcją.
>
> **Kanon = KOD miejsca** (`map.md`). Deszyfrowniki niżej zapisane jako **detal → następny KOD**. Renderowany glif (placeholder geometryczny → docelowo **gmerk**) przypisywany jest **globalnie** na etapie generacji map, NIE per ścieżka — subagenci dorzucali własne kształty (△○□…) niespójnie; te kształty **odrzucone**, liczy się kod. Mapowanie „detal → następny kod" jest **per grupa** i jest poprawne (karty grup nieporównywalne — `map.md §4`).

## Pass spójności (orkiestrator) — ✓

- **Rozłączność pozycyjna P1–P3:** P1 {N01·N03·N02·N04·N05·N06·S06·C09·C02·C03} · P2 {N02·N04·N01·N06·N03·N05·C04·C02·C06·C07} · P3 {**N06**·N05·C03·C09·C08·C06·C07·C01·C04·C02} — wszystkie 3 kolumny 10/10 parami różne ✓. (G1 P3 = `N06` po korekcie; `N06` jest też P1 G6 / P2 G4 — inne kolumny, OK.)
- **Fałszywy alarm oddalony:** agent G3 zgłosił kolizję P3 `C03` z G10 — błąd, G10 ma `C03` na **P1**, P3 G10 = `C02`. Brak kolizji.
- **P4 = zbieg u MG** (rozłączność zwolniona): 7 spotów Rynku; 3 pary dzielone, każda = 1 tania + 1 głęboka → naturalny rozsuw czasu: `C06`(G3 tania + G8 głęboka) · `C07`(G5 tania + G9 głęboka) · `C08`(G6 tania + G10 głęboka). `C09` nie jest endpointem (P1 G8, P3 G4). `C01` Kopernik (must-have) = P4 G2, P3 G8.
- **Pętle dystraktorów:** wszystkie 10 zamknięte i rozłączne z łańcuchem swojej ścieżki (weryfikacja subagentów + spot-check orkiestratora). Brak ślepych zaułków (9/9 wierszy → glif z mapy ścieżki).

## Budżety (od briefingu na Rynku Nowomiejskim, ~80 m/min)

| Grupa | Łańcuch | Budżet | Status |
|---|---|---|---|
| G1 | N01→N02→N06→C04 | ~12,5 min | ✓ (2× korekta — patrz niżej) |
| G2 | N03→N04→N05→C01 | ~13,1 min | ✓ długa noga finałowa N05→C01 ~500 m |
| G3 | N02→N01→C03→C06 | ~11,8 min | ✓ |
| G4 | N04→N06→C09→C02 | ~14,6 min | ⚠ granica — noga N06→C09 ~620 m; dry-run |
| G5 | N05→N03→C08→C07 | ~11,1 min | ✓ |
| G6 | N06→N05→C06→C08 | ~13,2 min | ✓ |
| G7 | S06→C04→C07→C03 | ~13,1 min | ✓ głęboki E; noga C04→C07 ~50 m (b. krótka) |
| G8 | C09→C02→C01→C06 | ~12,0 min | ✓ głęboki SE |
| G9 | C02→C06→C04→C07 | ~11,0 min | ✓ głęboki NE |
| G10 | C03→C07→C02→C08 | ~15,0 min | ⚠ granica — noga briefing→C03 ~700 m / ~8,5 min (nie ~5); dry-run zmierzyć Chełmińską |

> **Korekta G1 (2 etapy) [orkiestrator]:** (1) pierwotny P3=`S06` dawał ~21 min (`S06` przy murach nie leży „po drodze" z Nowego Miasta) → `S06` zostaje wyłącznie jako P1 G7. (2) tymczasowe P3=`N03` cofnięte — `N03` ma niepewny detal (fartuch), a krok łańcucha z niewypatrzalnym detalem jest nierozwiązywalny; finalnie **P3=`N06`** (Baj Pomorski, ✓#43, 24/7), `N03` przeniesione do pętli dystraktorów G1. Reguła: **pewne→łańcuch, niepewne→dystraktor.**

---

## Ścieżki (łańcuch · pętla dystraktorów · deszyfrownik · klucz MG)

> Format deszyfrownika: `detal [kod] → następny kod`. 4 wiersze łańcucha + 5 dystraktorów (zamknięta pętla). Klucz MG = 4 miejsca po kolei.

### G1 — N-start, długa noga finałowa
- **Łańcuch:** `N01` Piernikarka → `N02` Przekupka → `N06` Baj Pomorski → `C04` Ratusz
- **Pętla dystr.:** `N04`→`N05`→`N03`→`S04`→`W01`→`N04`
- **Deszyfrownik:** piernik[N01]→N02 · waga[N02]→N06 · szafa[N06]→C04 · wieża bez hełmu[C04]→KONIEC ‖ lew[N04]→N05 · bazylika-łuki[N05]→N03 · fartuch[N03]→S04 · kotwica[S04]→W01 · trąbka[W01]→N04
- **Klucz MG:** Piernikarka → Przekupka → Baj Pomorski → Ratusz
- **Budżet:** ~12,5 min (N02→N06 krótki hop, N06→C04 dive ~500 m).
- **⚠** wszystkie niepewne detale w pętli dystraktorów (nieszkodliwe): `N03` fartuch (tylko nazwa), `N05` bazylika→łuki, `N04` lew (godziny apteki). Łańcuch oparty na pewnych: `N01` piernik ✓#35, `N02` waga ✓#34, `N06` szafa+zegar ✓#43, `C04` wieża ✓#5. **Wzorzec reguły: pewne→łańcuch, niepewne→dystraktor.**

### G2 — N-start, długa noga finałowa (Kopernik)
- **Łańcuch:** `N03` Modry Fartuch → `N04` Apteka Lew → `N05` Kościół Jakuba → `C01` Kopernik
- **Pętla dystr.:** `N01`→`C03`→`W01`→`S04`→`C07`→`N01`
- **Deszyfrownik:** fartuch[N03]→N04 · lew[N04]→N05 · bazylika-łuki[N05]→C01 · astrolabium[C01]→KONIEC ‖ piernik[N01]→C03 · melonik[C03]→W01 · trąbka[W01]→S04 · kotwica[S04]→C07 · herb[C07]→N01
- **Klucz MG:** Modry Fartuch → Apteka Lew → Kościół Jakuba → Kopernik
- **⚠** `N03` fartuch (teren, **łańcuch P1**); `N04` lew (godziny apteki, **łańcuch P2** — krytyczne, patrz ryzyko globalne); `N05` bazylika→łuki (teren, **łańcuch P3**). `C01` astrolabium = fakt (must-have).

### G3 — N-start tani
- **Łańcuch:** `N02` Przekupka → `N01` Piernikarka → `C03` Filuś → `C06` Pod Gwiazdą
- **Pętla dystr.:** `W01`→`S01`→`C07`→`D01`→`N05`→`W01`
- **Deszyfrownik:** waga[N02]→N01 · piernik[N01]→C03 · melonik[C03]→C06 · gwiazda[C06]→KONIEC ‖ trąbka[W01]→S01 · brama-zaokr[S01]→C07 · herb[C07]→D01 · flisak[D01]→N05 · bazylika-łuki[N05]→W01
- **Klucz MG:** Przekupka → Piernikarka → Filuś → Pod Gwiazdą

### G4 — N-start, P3 głęboki (Katedra) ⚠ budżet graniczny
- **Łańcuch:** `N04` Apteka Lew → `N06` Baj Pomorski → `C09` Katedra Janów → `C02` Osiołek
- **Pętla dystr.:** `C03`→`C07`→`W01`→`N02`→`D01`→`C03`
- **Deszyfrownik:** lew[N04]→N06 · szafa[N06]→C09 · zegar-1-wskazówka[C09]→C02 · osioł[C02]→KONIEC ‖ melonik[C03]→C07 · herb[C07]→W01 · trąbka[W01]→N02 · waga[N02]→D01 · flisak[D01]→C03
- **Klucz MG:** Apteka Lew → Baj Pomorski → Katedra Janów → Osiołek
- **⚠** `N04` lew (godziny apteki, **łańcuch P1**); noga `N06`→`C09` ~620 m (najdłuższa); `C09`→`C02` ~180 m w górę Żeglarskiej (lekki nawrót — K1 nie może zdradzać, że Osiołek jest na drodze powrotnej).

### G5 — N-start tani
- **Łańcuch:** `N05` Kościół Jakuba → `N03` Modry Fartuch → `C08` Kościół NMP → `C07` Dwór Artusa
- **Pętla dystr.:** `W01`→`S04`→`C06`→`D01`→`N01`→`W01`
- **Deszyfrownik:** bazylika-łuki[N05]→N03 · fartuch[N03]→C08 · kościół-bez-wieży[C08]→C07 · herb[C07]→KONIEC ‖ trąbka[W01]→S04 · kotwica[S04]→C06 · gwiazda[C06]→D01 · flisak[D01]→N01 · piernik[N01]→W01
- **Klucz MG:** Kościół Jakuba → Modry Fartuch → Kościół NMP → Dwór Artusa
- **⚠** `N05` bazylika→łuki (teren, **łańcuch P1**); `N03` fartuch (teren, **łańcuch P2**).

### G6 — N-start tani
- **Łańcuch:** `N06` Baj Pomorski → `N05` Kościół Jakuba → `C06` Pod Gwiazdą → `C08` Kościół NMP
- **Pętla dystr.:** `C03`→`W01`→`D01`→`N02`→`C07`→`C03`
- **Deszyfrownik:** szafa[N06]→N05 · bazylika-łuki[N05]→C06 · gwiazda[C06]→C08 · kościół-bez-wieży[C08]→KONIEC ‖ melonik[C03]→W01 · trąbka[W01]→D01 · flisak[D01]→N02 · waga[N02]→C07 · herb[C07]→C03
- **Klucz MG:** Baj Pomorski → Kościół Jakuba → Pod Gwiazdą → Kościół NMP
- **⚠** `N05` bazylika→łuki (teren, **łańcuch P2**).

### G7 — głęboki start E (Podmurna)
- **Łańcuch:** `S06` Ulica Ciasna → `C04` Ratusz → `C07` Dwór Artusa → `C03` Filuś
- **Pętla dystr.:** `D01`→`W01`→`S01`→`N01`→`C06`→`D01`
- **Deszyfrownik:** wąska-uliczka-łuki[S06]→C04 · wieża-bez-hełmu[C04]→C07 · herb[C07]→C03 · melonik[C03]→KONIEC ‖ flisak[D01]→W01 · trąbka[W01]→S01 · brama-zaokr[S01]→N01 · piernik[N01]→C06 · gwiazda[C06]→D01
- **Klucz MG:** Ulica Ciasna → Ratusz → Dwór Artusa → Filuś
- **⚠** `S06` łuki odporowe wypatrzalne z ulicy (teren); noga `C04`→`C07` ~50 m (ten sam obszar Rynku — ryzyko trywializacji kroku, ocena Oskara).

### G8 — głęboki start SE (Żeglarska)
- **Łańcuch:** `C09` Katedra Janów → `C02` Osiołek → `C01` Kopernik → `C06` Pod Gwiazdą
- **Pętla dystr.:** `C03`→`C07`→`C08`→`W01`→`N02`→`C03`
- **Deszyfrownik:** zegar-1-wskazówka[C09]→C02 · osioł[C02]→C01 · astrolabium[C01]→C06 · gwiazda[C06]→KONIEC ‖ melonik[C03]→C07 · herb[C07]→C08 · kościół-bez-wieży[C08]→W01 · trąbka[W01]→N02 · waga[N02]→C03
- **Klucz MG:** Katedra Janów → Osiołek → Kopernik → Pod Gwiazdą
- **⚠** brak `⚠ teren` (wszystkie 9 wiki-potwierdzone); `C01` astrolabium = fakt must-have; noga briefing→C09 ~580 m / ~7 min (najdłuższa pierwsza noga — dry-run GPS).

### G9 — głęboki start NE Rynek
- **Łańcuch:** `C02` Osiołek → `C06` Pod Gwiazdą → `C04` Ratusz → `C07` Dwór Artusa
- **Pętla dystr.:** `D01`→`W01`→`S01`→`S02`→`N02`→`D01`
- **Deszyfrownik:** osioł[C02]→C06 · gwiazda[C06]→C04 · wieża-bez-hełmu[C04]→C07 · herb[C07]→KONIEC ‖ flisak[D01]→W01 · trąbka[W01]→S01 · brama-zaokr[S01]→S02 · kaszownik[S02]→N02 · waga[N02]→D01
- **Klucz MG:** Osiołek → Pod Gwiazdą → Ratusz → Dwór Artusa
- **⚠** brak `⚠ teren`; `C04` Ratusz i `C01` Kopernik ~20 m od siebie — MG mieć neutralną odpowiedź, gdyby grupa pytała o Kopernika (C01 nie jest na mapie G9).

### G10 — głęboki start NW Rynek ⚠ budżet graniczny
- **Łańcuch:** `C03` Filuś → `C07` Dwór Artusa → `C02` Osiołek → `C08` Kościół NMP
- **Pętla dystr.:** `D01`→`W01`→`S01`→`C06`→`C04`→`D01`
- **Deszyfrownik:** melonik[C03]→C07 · herb[C07]→C02 · osioł[C02]→C08 · kościół-bez-wieży[C08]→KONIEC ‖ flisak[D01]→W01 · trąbka[W01]→S01 · brama-zaokr[S01]→C06 · gwiazda[C06]→C04 · wieża-bez-hełmu[C04]→D01
- **Klucz MG:** Filuś → Dwór Artusa → Osiołek → Kościół NMP
- **⚠** noga briefing→C03 ~700 m / ~8,5 min (zmierzyć Chełmińską na dry-runie — jeśli ~500 m, całość spada do ~13); trasa C03(NW)→C07(SE)→C02(NE)→C08(NW) = lateralna pętla wokół Rynku (~510 m, bez wyjścia poza plac).

---

## Ryzyka globalne

### 🔴 DECYZJA OSKARA: krucha grupa G2 + reguła „pewne→łańcuch"
**`G2 = N03(fartuch⚠) → N04(lew-godziny⚠) → N05(bazylika⚠) → C01` — 3 z 4 kroków łańcucha mają niepewny detal.** To najkruchszy łańcuch zestawu: jeśli dry-run obali którykolwiek z trzech, G2 pada. Krok łańcucha z niewypatrzalnym detalem = **nierozwiązywalny** (nie „trudny"); ten sam detal w pętli dystraktorów jest nieszkodliwy. Stąd reguła: **detale `⚠` → pętle dystraktorów; detale pewne → łańcuchy.** G1 już tak przerobione.

**Problem z pełnym rebalansem (czemu to Twoja decyzja, nie moja jednostronna):** pula *pewnych* miejsc łańcuchowych przy jednym briefingu NE to ~**11** (`N01`,`N02`,`N06` + 8× C), a slotów łańcuchowych jest **30** (10 grup × P1/P2/P3). 11 miejsc × 3 pozycje = 33 — teoretycznie starcza, ale ciasno i geometria NE→SW dodatkowo wiąże. Pełne wypchnięcie `N03/N04/N05` z łańcuchów do dystraktorów może się **nie domknąć w 100%** bez zmiany modelu (np. briefing między Rynkami → uwalnia więcej pewnych C jako tanie P1). Opcje dla Ciebie:
- (i) **Zostaw, zweryfikuj na dry-runie** — wszystkie 3 detale *istnieją* w wiki, `⚠` dotyczy tylko wypatrzalności piktogramu z ulicy; jeśli teren potwierdzi, problemu nie ma. Najmniej pracy, ryzyko skoncentrowane w G2.
- (ii) **Częściowy rebalans** — rozbij G2 (i ew. G5/G6), przesuwając najtwardszy z trójki (`N04` apteka-godziny) do dystraktora, akceptując że nie wszystkie 10 będzie idealnych.
- (iii) **Zmiana briefingu** (opcja (b) z poprzedniej decyzji) — uwalnia pulę pewnych P1, pełna reguła „pewne→łańcuch" wykonalna, kosztem czystego sweepu NE→SW.

### Do dry-runu (po decyzji powyżej)
1. **🔴 detale `⚠ teren` w łańcuchach:** `N03` fartuch (G2 P1, G5 P2), `N04` lew/godziny (G2 P2, G4 P1), `N05` bazylika/łuki (G2 P3, G5 P1, G6 P2). Priorytet weryfikacji.
2. **🟠 Budżety G4 (~14,6) i G10 (~15) liczone optymistycznie** (~80 m/min, **bez czasu na odczyt detali**). Z realnym czasem obserwacji prawdopodobnie **już >15 min**. Kontyngencja swapu podana przez subagentów (G4: weryfikacja `N06`→`C09`; G10: pomiar Chełmińskiej briefing→`C03`) **nie jest opcjonalna** — orkiestrator domyka po pomiarze. To nie „granica", to prawdopodobne przekroczenie.
3. **🟡 Krótkie/nawrotne nogi:** G7 `C04`→`C07` ~50 m (trywializacja kroku); G4 `C09`→`C02` ~180 m w górę Żeglarskiej (K1 nie zdradza powrotu).

## Ikony do wygenerowania (unia faktycznie użytych detali)

Gotowe (`prototype/icons/`, §7): `piernik` `astrolabium` `melonik` `gwiazda` `osioł` `brama-zaokraglona` `kaszownik` `zegar-jedna-wskazowka` `trabka` `kosciol-bez-wiezy` `herb-tarcza`.

**Do zrobienia (9, styl §7):** `waga` (N02) · `lew` (N04) · `fartuch` (N03, dopiero po potwierdzeniu detalu w terenie) · `bazylika-luki` / `luki-przyporowe` (N05) · `szafa` (N06) · `wieza-bez-helmu` (C04) · `kotwica` (S04) · `waska-uliczka-luki` (S06) · `flisak` (D01 — decyzja: skrzypce czy żaba jako sylwetka).

> Niewykorzystane jako dystraktory (z listy worst-case handoffu — NIE generować): `aniol` `baszta` `brama-luk` `dwa-szczyty` `schodkowy-szczyt` `wieza-bez-helmu`(jest), `osioł`(jest). Pula dystraktorów zbiegła się do W01/S01/S02/S04/D01 + miejsc N/C — znacznie węższa niż zakładano.

## Następne kroki
1. Review Oskara: ścieżki, ryzyka globalne (zwł. #1 `N03`, #2 `N04`).
2. Dry-run terenowy: weryfikacja `⚠ teren` (N03/N04/N05/S06) + pomiar nóg granicznych (G4, G10).
3. Globalna tabela kod→gmerk (jeden glif na kod, spójnie dla wszystkich 10 map).
4. Wektoryzacja 9 brakujących ikon.
5. Mapy HTML per ścieżka (wzór `prototype/mapa-z1-podglad.html`).
