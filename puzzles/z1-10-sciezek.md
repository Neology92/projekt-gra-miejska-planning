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

## Wyniki dry-runu (Oskar, 2026-06-01)

| Check | Werdykt | Konsekwencja |
|---|---|---|
| `N04` lew | ✅ widoczny nad drzwiami; **godziny apteki nieistotne** | pewny — G2 P2 / G4 P1 odblokowane |
| `N05` bazylika/łuki | ✅ łuki + bryła kościoła rozpoznawalne | pewny — G2 P3 / G5 P1 / G6 P2 odblokowane |
| `N03` fartuch | ❌ **brak widocznego godła/fartucha** | **wypada z łańcuchów** (G2 P1, G5 P2) → DYS-only |
| `S06` Ulica Ciasna | ❌ łuki odporowe **nieczytelne** dla gracza | **wypada z łańcucha** (G7 P1); ikona wycofana |
| Brama Mostowa `S01` | ✅ **ostrołuk przejazdu** wypatrzalny (lepszy niż „zaokr. narożniki") | piktogram poprawiony → `s01-brama-mostowa.svg` |
| Budżety graniczne G4/G10 | ✅ **odległości znośne** | flagi budżetu zdjęte; rozsuw powrotu do MG = bonus |
| Nogi krótkie/nawrotne | ⚠️ **constraint**: dwa przystanki łańcucha NIE w zasięgu wzroku bez podchodzenia | dotyczy `G7 C04→C07 ~50m`; audyt par śródłańcuchowych w klastrze Rynku |

### ✅ REBALANS v3 — OBOWIĄZUJĄCA (po dry-run R2, 2026-06-01)

**Względem v2: 5 swapów** wymuszone przez dry-run R2.1 (klaster `{C01, C02, C06, C07}` — wszystkie na/przy Rynku Staromiejskim, żadna para nie może być śródłańcuchowo kolejna).

Broken w v2: G8 P2→P3 (`C01→C07` ❌) · G9 P1→P2 (`C02→C06` ❌) + P2→P3 (`C06→C01` ❌) · G10 P2→P3 (`C07→C02` ❌).

Swappy: G3.P1 `N02`→`C02` · G8.P3 `C07`→`N01` · G9.P1 `C02`→`N02` · G9.P3 `C01`→`S02` · G10.P3 `C02`→`N04` · **G5.P3 `C02`→`S04`** (sightline C04↔C02 potwierdzone w terenie 2026-06-01).

**Detal S02:** kaszownik zbyt trudny do ikonizacji → **brama prostokątna (gotycki łuk) od strony Bulwaru**; `s02-brama-klasztorna.svg` przebudowany [2026-06-01].

| Grupa | P1 | P2 | P3 | P4 (→MG) | start |
|---|---|---|---|---|---|
| G1 | N01 | N02 | N06 | C04 | NM |
| G2 | N06 | N04 | N05 | C01 | NM |
| G3 | **C02** | N01 | C03 | C06 | NM (P1 ← C02) |
| G4 | N04 | N06 | C09 | C02 | NM |
| G5 | N05 | C04 | **S04** | C07 | NM (P3 C02→S04: sightline swap, bez teren. wer.) |
| G6 | S02 | C08 | C04 | C06 | głęboki SW (Br. Klasztorna) |
| G7 | S01 | C09 | C06 | C07 | głęboki S (Br. Mostowa) |
| G8 | C09 | C01 | **N01** | C06 | głęboki SE (P3 ← N01) |
| G9 | **N02** | C06 | **S02** | C07 | NM-start (P1 ← N02, P3 ← S02) |
| G10 | C03 | C07 | **N04** | C08 | głęboki NW (P3 ← N04) |

**Pass disjointness v3.2:** P1 {N01·N06·C02·N04·N05·S02·S01·C09·N02·C03} ✓ · P2 {N02·N04·N01·N06·C04·C08·C09·C01·C06·C07} ✓ · P3 {N06·N05·C03·C09·**S04**·C04·C06·N01·S02·N04} ✓ — 10/10 parami różne w każdej kolumnie (G5 P3: C02→S04 sightline swap; Ratusz↔Osiołek intervisible potwierdzono w terenie 2026-06-01).

**Brak par klastra śródłańcuchowo** — wszystkie {C01,C02,C06,C07} sąsiadują tylko z non-klastrem w P1→P2 i P2→P3. P3→P4 zwolniony.

### 🔒 Constrainty ikon na karcie [Oskar, 2026-06-01] — anti-pair w obrębie deszyfrownika

Ikony zbyt podobne/jednoznaczne **nie mogą współwystąpić na jednej karcie** (9 glifów = 4 łańcuch + 5 dystraktorów). Dotyczy łańcucha **i** pętli dystraktorów:

| Para zakazana | Powód |
|---|---|
| `C04` (Ratusz — wieża bez hełmu) ✕ `C09` (Katedra — zegar/wieża) | obie sylwetki = wieża z zegarem; nierozróżnialne |
| `C08` (NMP — kościół bez wieży) ✕ `N05` (Jakub — bazylika/łuki) | obie sylwetki = bryła kościoła z łukami; nierozróżnialne |

**Tabela wykluczeń dla regeneracji dystraktorów** (jeśli łańcuch grupy zawiera X → pętla NIE może zawierać Y):
- łańcuch ma `C04` (G1,G5,G6) → dystraktory **bez `C09`**
- łańcuch ma `C09` (G4,G7,G8) → dystraktory **bez `C04`**
- łańcuch ma `C08` (G6,G10) → dystraktory **bez `N05`**
- łańcuch ma `N05` (G2,G5) → dystraktory **bez `C08`**

> Następny krok: regeneracja 10 kart (§Ścieżki poniżej) na łańcuchach v3.1 — pętle dystraktorów (respektują tabelę wykluczeń) + deszyfrowniki.

---

### REBALANS v2 — ARCHIWUM (zastąpiona przez v3)

**Poniżej zostawiona jako zapis historyczny** — v2 była poprawna disjointness-wise, ale miała 4 pary klastra śródłańcuchowo (obalone dry-run R2.1).

| Grupa | P1 | P2 | P3 | P4 (→MG) |
|---|---|---|---|---|
| G1 | N01 | N02 | N06 | C04 |
| G2 | N06 | N04 | N05 | C01 |
| G3 | N02 | N01 | C03 | C06 |
| G4 | N04 | N06 | C09 | C02 |
| G5 | N05 | C04 | C08 | C07 |
| G6 | S02 | C08 | C04 | C06 |
| G7 | S01 | C09 | C06 | C07 |
| G8 | C09 | C01 | ~~C07~~ | C06 |
| G9 | ~~C02~~ | C06 | ~~C01~~ | C07 |
| G10 | C03 | C07 | ~~C02~~ | C08 |

---

#### (poprzednia diagnoza — zachowana)
**🔴 REBALANS WYMUSZONY:** trzy kroki łańcucha padły — **G2 P1**, **G5 P2** (oba `N03`), **G7 P1** (`S06`) — plus **G7 P2→P3** trywialne (wzrok). Pula pewnych „tanich N" skurczyła się z 6 do **5** (`N01 N02 N04 N05 N06`), a grup NM-startowych jest 6 → przy jednym briefingu NE domyka się dopiero po przywróceniu głębokich startów od Wisły (poluzowany budżet).

---

## Ścieżki — v3.2 (regeneracja 2026-06-01)

> Format deszyfrownika: `detal[KOD]→następnyKOD`. 4 wiersze łańcucha (ostatni →KONIEC) + separator ‖ + 5 wierszy pętli dystraktorów (zamknięta). Klucz MG = 4 miejsca łańcucha po kolei.

### G1 — NM tani, sweep NE→SW
- **Łańcuch:** `N01` Pomnik Piernikarki → `N02` Pomnik Przekupki → `N06` Teatr Baj Pomorski → `C04` Ratusz Staromiejski
- **Pętla dystr.:** `N04`→`N05`→`N03`→`S04`→`W01`→`N04`
- **Deszyfrownik:** piernik[N01]→N02 · gęś[N02]→N06 · szafa[N06]→C04 · wieża[C04]→KONIEC ‖ lew[N04]→N05 · bazylika-łuki[N05]→N03 · fartuch[N03]→S04 · kotwica[S04]→W01 · trąbka[W01]→N04
- **Klucz MG:** Pomnik Piernikarki → Pomnik Przekupki → Teatr Baj Pomorski → Ratusz Staromiejski
- **Budżet:** ~12,5 min (NM tani, sweep NE→SW; długa noga finałowa N06→C04 ~500 m)

### G2 — NM tani, finał Kopernik
- **Łańcuch:** `N06` Teatr Baj Pomorski → `N04` Apteka Pod Złotym Lwem → `N05` Kościół św. Jakuba → `C01` Pomnik Kopernika
- **Pętla dystr.:** `N01`→`C02`→`C06`→`S01`→`W01`→`N01`
- **Deszyfrownik:** szafa[N06]→N04 · lew[N04]→N05 · bazylika-łuki[N05]→C01 · astrolabium[C01]→KONIEC ‖ piernik[N01]→C02 · osioł[C02]→C06 · gwiazda[C06]→S01 · brama-ostrołuk[S01]→W01 · trąbka[W01]→N01
- **Klucz MG:** Teatr Baj Pomorski → Apteka Pod Złotym Lwem → Kościół św. Jakuba → Pomnik Kopernika
- **Budżet:** ~13,5 min (NE tani, długa noga finałowa N05→C01 ~500 m)

### G3 — start Rynek SM, cofka NE, powrót SW
- **Łańcuch:** `C02` Pręgierz Osiołek → `N01` Pomnik Piernikarki → `C03` Pies Filuś → `C06` Kamienica Pod Gwiazdą
- **Pętla dystr.:** `N04`→`S01`→`W01`→`C07`→`C04`→`N04`
- **Deszyfrownik:** osioł[C02]→N01 · piernik[N01]→C03 · melonik[C03]→C06 · gwiazda[C06]→KONIEC ‖ lew[N04]→S01 · brama-ostrołuk[S01]→W01 · trąbka[W01]→C07 · herb[C07]→C04 · wieża[C04]→N04
- **Klucz MG:** Pręgierz Osiołek → Pomnik Piernikarki → Pies Filuś → Kamienica Pod Gwiazdą
- **Budżet:** ~14,5 min (start C02 ~500 m od NM + cofka NE do N01, powrót SW)

### G4 — NM tani, P3 głęboki SE (Katedra) ⚠ budżet graniczny
- **Łańcuch:** `N04` Apteka Pod Złotym Lwem → `N06` Teatr Baj Pomorski → `C09` Katedra Janów → `C02` Pręgierz Osiołek
- **Pętla dystr.:** `N01`→`C01`→`C06`→`S01`→`S04`→`N01`
- **Deszyfrownik:** lew[N04]→N06 · szafa[N06]→C09 · zegar[C09]→C02 · osioł[C02]→KONIEC ‖ piernik[N01]→C01 · astrolabium[C01]→C06 · gwiazda[C06]→S01 · brama-ostrołuk[S01]→S04 · kotwica[S04]→N01
- **Klucz MG:** Apteka Pod Złotym Lwem → Teatr Baj Pomorski → Katedra Janów → Pręgierz Osiołek
- **Budżet:** ~14–15 min (NM tani, długa noga N06→C09 ~620 m — graniczny budżet)
- **⚠** noga `N06`→`C09` ~620 m (najdłuższa w zestawie); `C09`→`C02` ~180 m w górę Żeglarskiej (lekki nawrót — K1 nie zdradza, że Osiołek na drodze powrotnej).

### G5 — NM→Ratusz→Bulwar→Rynek SM (głęboki sweep)
- **Łańcuch:** `N05` Kościół św. Jakuba → `C04` Ratusz Staromiejski → `S04` Kotwica na Bulwarze → `C07` Dwór Artusa
- **Pętla dystr.:** `N02`→`N04`→`C03`→`C06`→`S01`→`N02`
- **Deszyfrownik:** bazylika-łuki[N05]→C04 · wieża[C04]→S04 · kotwica[S04]→C07 · herb[C07]→KONIEC ‖ gęś[N02]→N04 · lew[N04]→C03 · melonik[C03]→C06 · gwiazda[C06]→S01 · brama-ostrołuk[S01]→N02
- **Klucz MG:** Kościół św. Jakuba → Ratusz Staromiejski → Kotwica na Bulwarze Filadelfijskim → Dwór Artusa
- **Budżet:** ~18–19 min (⚠ głęboki: N05→C04 ~650 m + zejście do Bulwaru i powrót na Rynek; poluzowany budżet)
- **⚠** Ratusz↔Osiołek intervisible potwierdzone w terenie 2026-06-01 → S04 zamiast C02.

### G6 — głęboki SW (Brama Klasztorna), sweep S→Rynek SM
- **Łańcuch:** `S02` Brama Klasztorna → `C08` Kościół NMP → `C04` Ratusz Staromiejski → `C06` Kamienica Pod Gwiazdą
- **Pętla dystr.:** `S01`→`S04`→`C01`→`C07`→`N01`→`S01`
- **Deszyfrownik:** kaszownik[S02]→C08 · kościół-bez-wieży[C08]→C04 · wieża[C04]→C06 · gwiazda[C06]→KONIEC ‖ brama-ostrołuk[S01]→S04 · kotwica[S04]→C01 · astrolabium[C01]→C07 · herb[C07]→N01 · piernik[N01]→S01
- **Klucz MG:** Brama Klasztorna → Kościół NMP → Ratusz Staromiejski → Kamienica Pod Gwiazdą
- **Budżet:** ~16 min (⚠ głęboki SW: start S02 Bulwar Filadelfijski, sweep S→C przez NMP, finał Rynek SM; poluzowany budżet)

### G7 — głęboki S (Brama Mostowa), sweep S→Rynek SM
- **Łańcuch:** `S01` Brama Mostowa → `C09` Katedra Janów → `C06` Kamienica Pod Gwiazdą → `C07` Dwór Artusa
- **Pętla dystr.:** `N01`→`C03`→`D01`→`S02`→`W01`→`N01`
- **Deszyfrownik:** brama-ostrołuk[S01]→C09 · zegar[C09]→C06 · gwiazda[C06]→C07 · herb[C07]→KONIEC ‖ piernik[N01]→C03 · melonik[C03]→D01 · flisak[D01]→S02 · kaszownik[S02]→W01 · trąbka[W01]→N01
- **Klucz MG:** Brama Mostowa → Katedra Janów → Kamienica Pod Gwiazdą → Dwór Artusa
- **Budżet:** ~15 min (⚠ głęboki S: start S01 ~700 m od NM; lateralna noga S01→C09 nad Wisłą; finał Żeglarska→Rynek SM)

### G8 — głęboki SE (Katedra), cofka NE, powrót SW
- **Łańcuch:** `C09` Katedra Janów → `C01` Pomnik Kopernika → `N01` Pomnik Piernikarki → `C06` Kamienica Pod Gwiazdą
- **Pętla dystr.:** `C02`→`N02`→`S01`→`S04`→`W01`→`C02`
- **Deszyfrownik:** zegar[C09]→C01 · astrolabium[C01]→N01 · piernik[N01]→C06 · gwiazda[C06]→KONIEC ‖ osioł[C02]→N02 · gęś[N02]→S01 · brama-ostrołuk[S01]→S04 · kotwica[S04]→W01 · trąbka[W01]→C02
- **Klucz MG:** Katedra Janów → Pomnik Kopernika → Pomnik Piernikarki → Kamienica Pod Gwiazdą
- **Budżet:** ~14–15 min (głęboki SE start C09 ~580 m od NM; C01→N01 cofka NE ~450 m; N01→C06 powrót SW ~550 m)

### G9 — NM tani, sweep SM→SW (Brama Klasztorna)→Rynek
- **Łańcuch:** `N02` Pomnik Przekupki → `C06` Kamienica Pod Gwiazdą → `S02` Brama Klasztorna → `C07` Dwór Artusa
- **Pętla dystr.:** `N04`→`C01`→`C09`→`S04`→`W01`→`N04`
- **Deszyfrownik:** gęś[N02]→C06 · gwiazda[C06]→S02 · kaszownik[S02]→C07 · herb[C07]→KONIEC ‖ lew[N04]→C01 · astrolabium[C01]→C09 · zegar[C09]→S04 · kotwica[S04]→W01 · trąbka[W01]→N04
- **Klucz MG:** Pomnik Przekupki → Kamienica Pod Gwiazdą → Brama Klasztorna → Dwór Artusa
- **Budżet:** ~16 min (tani start NM; głęboki sweep Rynek SM→S02 nad Wisłą + powrót na Rynek)

### G10 — głęboki NW (Filuś Chełmińska), lateralna pętla Rynek SM
- **Łańcuch:** `C03` Pies Filuś → `C07` Dwór Artusa → `N04` Apteka Pod Złotym Lwem → `C08` Kościół NMP
- **Pętla dystr.:** `D01`→`W01`→`S01`→`C06`→`C04`→`D01`
- **Deszyfrownik:** melonik[C03]→C07 · herb[C07]→N04 · lew[N04]→C08 · kościół-bez-wieży[C08]→KONIEC ‖ flisak[D01]→W01 · trąbka[W01]→S01 · brama-ostrołuk[S01]→C06 · gwiazda[C06]→C04 · wieża[C04]→D01
- **Klucz MG:** Pies Filuś → Dwór Artusa → Apteka Pod Złotym Lwem → Kościół NMP
- **Budżet:** ~16–18 min (głęboki NW: brief→C03 ~700 m Chełmińską; lateralna pętla Rynek SM; cofka NE do N04; finał NMP)
- **⚠** noga `C07`→`N04` = cofka NE ~400 m (K1 nie zdradza, że Apteka jest na drodze powrotnej przez Rynek NM).

---

## Ryzyka globalne

### ✅ DECYZJA OSKARA [2026-06-01 → opcja (i)]: G2 zostaje, weryfikacja na dry-runie
**Wybór: (i) — zostaw, zweryfikuj w terenie.** G2 bez zmian; trzy detale `⚠` (N03/N04/N05) trafiają na **priorytet 1 arkusza dry-runu** (`z1-dry-run-sheet.md`). Jeśli teren obali którykolwiek → wracamy do (ii)/(iii). Reguła „pewne→łańcuch, niepewne→dystraktor" **nie jest** stosowana do pełnego rebalansu teraz (pula pewnych ciasna ~11/30).

### 🔴 (kontekst decyzji) krucha grupa G2 + reguła „pewne→łańcuch"
**`G2 = N03(fartuch⚠) → N04(lew-godziny⚠) → N05(bazylika⚠) → C01` — 3 z 4 kroków łańcucha mają niepewny detal.** To najkruchszy łańcuch zestawu: jeśli dry-run obali którykolwiek z trzech, G2 pada. Krok łańcucha z niewypatrzalnym detalem = **nierozwiązywalny** (nie „trudny"); ten sam detal w pętli dystraktorów jest nieszkodliwy. Stąd reguła: **detale `⚠` → pętle dystraktorów; detale pewne → łańcuchy.** G1 już tak przerobione.

**Problem z pełnym rebalansem (czemu to Twoja decyzja, nie moja jednostronna):** pula *pewnych* miejsc łańcuchowych przy jednym briefingu NE to ~**11** (`N01`,`N02`,`N06` + 8× C), a slotów łańcuchowych jest **30** (10 grup × P1/P2/P3). 11 miejsc × 3 pozycje = 33 — teoretycznie starcza, ale ciasno i geometria NE→SW dodatkowo wiąże. Pełne wypchnięcie `N03/N04/N05` z łańcuchów do dystraktorów może się **nie domknąć w 100%** bez zmiany modelu (np. briefing między Rynkami → uwalnia więcej pewnych C jako tanie P1). Opcje dla Ciebie:
- (i) **Zostaw, zweryfikuj na dry-runie** — wszystkie 3 detale *istnieją* w wiki, `⚠` dotyczy tylko wypatrzalności piktogramu z ulicy; jeśli teren potwierdzi, problemu nie ma. Najmniej pracy, ryzyko skoncentrowane w G2.
- (ii) **Częściowy rebalans** — rozbij G2 (i ew. G5/G6), przesuwając najtwardszy z trójki (`N04` apteka-godziny) do dystraktora, akceptując że nie wszystkie 10 będzie idealnych.
- (iii) **Zmiana briefingu** (opcja (b) z poprzedniej decyzji) — uwalnia pulę pewnych P1, pełna reguła „pewne→łańcuch" wykonalna, kosztem czystego sweepu NE→SW.

### Do dry-runu (po decyzji powyżej)
1. **🔴 detale `⚠ teren` w łańcuchach:** `N03` fartuch (G2 P1, G5 P2), `N04` lew/godziny (G2 P2, G4 P1), `N05` bazylika/łuki (G2 P3, G5 P1, G6 P2). Priorytet weryfikacji.
2. **🟠 Budżety G4 (~14,6) i G10 (~15) liczone optymistycznie** (~80 m/min, **bez czasu na odczyt detali**). Z realnym czasem obserwacji prawdopodobnie **już >15 min**. Kontyngencja swapu podana przez subagentów (G4: weryfikacja `N06`→`C09`; G10: pomiar Chełmińskiej briefing→`C03`) **nie jest opcjonalna** — orkiestrator domyka po pomiarze. To nie „granica", to prawdopodobne przekroczenie.
3. **🟡 Krótkie/nawrotne nogi:** G7 `C04`→`C07` ~50 m (trywializacja kroku); G4 `C09`→`C02` ~180 m w górę Żeglarskiej (K1 nie zdradza powrotu).

## Ikony (unia faktycznie użytych detali)

✅ **WSZYSTKIE GOTOWE** [2026-06-01] — `prototype/icons/`, nazwa = **kod + miejsce** (`map.md §7`). Pełny przegląd: `prototype/icons-contact-sheet.html` (wg stref, podpisy miejsce-first).
- **Łańcuchowe (15):** `n01-piernikarka` `n02-przekupka` `n04-apteka-lew` `n05-kosciol-jakuba` `n06-baj-pomorski` · `c01-kopernik` `c02-osiolek` `c03-pies-filus` `c04-ratusz` `c06-pod-gwiazda` `c07-dwor-artusa` `c08-kosciol-nmp` `c09-katedra-janow` · `s01-brama-mostowa` `s02-brama-klasztorna`.
- **Dystraktory (4):** `n03-modry-fartuch` `s04-kotwica-bulwar` `w01-luk-cezara` `d01-fontanna-flisaka`.
- **Zapasy / nieużyte / wycofane:** `n02-przekupka-zapas-waga` · `c01-kopernik-zapas-delfin` · `w02-spichlerz` (nieużyty) · `s06-ulica-ciasna` (wycofana) · `brama-zaokraglona` (zmyłka bez miejsca).

> Niewykorzystane (NIE generować): `aniol` `baszta` `brama-luk` `dwa-szczyty` `schodkowy-szczyt`.

## Następne kroki
1. ✅ Decyzja G2 = opcja (i) [Oskar 2026-06-01] — v3.2 G2 zmienione (N03→N06 na P1), detale N04/N05 potwierdzone w terenie.
2. ✅ Dry-run R1 + R2 [2026-06-01] — macierz domknięta do v3.2; Ratusz↔Osiołek intervisible → G5 P3 = S04.
3. ✅ Globalna tabela kod→glif + pozycje x/y: `z1-glify-globalne.md` (19 kodów; render = placeholder geometryczny).
4. ✅ Wektoryzacja ikon — 23 SVG, arkusz kontaktowy `prototype/icons-contact-sheet.html`.
5. ✅ **10 kart v3.2** — §Ścieżki powyżej (regeneracja 2026-06-01, 10× sonnet).
6. ⏳ **Bazowa mapa SVG** (19 glifów na pozycjach z `z1-glify-globalne.md`) → **10 widoków per ścieżka** (wzór `prototype/mapa-z1-podglad.html`). Flaga sightline G5 `C04→S04` do oceny wzrokowej na mapie (nowa noga niezweryfikowana terenowo).
7. ⏳ **Playtest / dry-run R3** — całe 10 ścieżek z kartami i mapami; czas/postój per przystanek.
