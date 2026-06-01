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
| Brama Mostowa `S01` | ✅ **ostrołuk przejazdu** wypatrzalny (lepszy niż „zaokr. narożniki") | piktogram poprawiony → `brama-ostroluk.svg` |
| Budżety graniczne G4/G10 | ✅ **odległości znośne** | flagi budżetu zdjęte; rozsuw powrotu do MG = bonus |
| Nogi krótkie/nawrotne | ⚠️ **constraint**: dwa przystanki łańcucha NIE w zasięgu wzroku bez podchodzenia | dotyczy `G7 C04→C07 ~50m`; audyt par śródłańcuchowych w klastrze Rynku |

### ✅ REBALANS v3 — OBOWIĄZUJĄCA (po dry-run R2, 2026-06-01)

**Względem v2: 5 swapów** wymuszone przez dry-run R2.1 (klaster `{C01, C02, C06, C07}` — wszystkie na/przy Rynku Staromiejskim, żadna para nie może być śródłańcuchowo kolejna).

Broken w v2: G8 P2→P3 (`C01→C07` ❌) · G9 P1→P2 (`C02→C06` ❌) + P2→P3 (`C06→C01` ❌) · G10 P2→P3 (`C07→C02` ❌).

Swappy: G3.P1 `N02`→`C02` · G8.P3 `C07`→`N01` · G9.P1 `C02`→`N02` · G9.P3 `C01`→`S02` · G10.P3 `C02`→`N04`.

**Detal S02:** kaszownik zbyt trudny do ikonizacji → **brama prostokątna (gotycki łuk) od strony Bulwaru**; `kaszownik.svg` przebudowany [2026-06-01].

| Grupa | P1 | P2 | P3 | P4 (→MG) | start |
|---|---|---|---|---|---|
| G1 | N01 | N02 | N06 | C04 | NM |
| G2 | N06 | N04 | N05 | C01 | NM |
| G3 | **C02** | N01 | C03 | C06 | NM (P1 ← C02) |
| G4 | N04 | N06 | C09 | C02 | NM |
| G5 | N05 | C04 | **C02** | C07 | NM (P3 C08→C02: constraint ikon) |
| G6 | S02 | C08 | C04 | C06 | głęboki SW (Br. Klasztorna) |
| G7 | S01 | C09 | C06 | C07 | głęboki S (Br. Mostowa) |
| G8 | C09 | C01 | **N01** | C06 | głęboki SE (P3 ← N01) |
| G9 | **N02** | C06 | **S02** | C07 | NM-start (P1 ← N02, P3 ← S02) |
| G10 | C03 | C07 | **N04** | C08 | głęboki NW (P3 ← N04) |

**Pass disjointness v3.1:** P1 {N01·N06·C02·N04·N05·S02·S01·C09·N02·C03} ✓ · P2 {N02·N04·N01·N06·C04·C08·C09·C01·C06·C07} ✓ · P3 {N06·N05·C03·C09·**C02**·C04·C06·N01·S02·N04} ✓ — 10/10 parami różne w każdej kolumnie (G5 P3: C08→C02).

**Brak par klastra śródłańcuchowo** — wszystkie {C01,C02,C06,C07} sąsiadują tylko z non-klastrem w P1→P2 i P2→P3. P3→P4 zwolniony.

**🟡 FLAGA sightline (nowa w v3.1):** `G5 C04→C02` (Ratusz → Osiołek, P2→P3). Para niesprawdzona w R2.1 (klaster testowany był {C01,C02,C06,C07} wzajemnie; C04 poza nim). Osiołek stoi przy Ratuszu od str. Żeglarskiej → **możliwe intervisible**. Do weryfikacji na draft-mapie / przy okazji strefy C. Jeśli ciasne → G5 P3 dostaje głęboki kod (S04/W01).

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

## Ścieżki (łańcuch · pętla dystraktorów · deszyfrownik · klucz MG)

> ⚠️ **STALE (v1) — NIE UŻYWAĆ łańcuchów poniżej.** Po dry-runie runda 1 obowiązuje **macierz REBALANS v2 powyżej** (7 z 10 łańcuchów zmienione: G2/G5/G6/G7/G8/G9/G10). Karty poniżej (pętle dystraktorów + deszyfrowniki) są **do regeneracji** na łańcuchach v2 w następnej sesji. Zachowane jako referencja formatu i źródło pętli dystraktorów do recyklingu.

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

## Ikony do wygenerowania (unia faktycznie użytych detali)

✅ **WSZYSTKIE 22 GOTOWE** [2026-06-01] — `prototype/icons/`, §7. Arkusz kontaktowy: `prototype/icons-contact-sheet.html`.
- Wcześniejsze 13: `piernik` `astrolabium` `delfin` `melonik` `gwiazda` `osiol` `brama-zaokraglona` `kaszownik` `zegar-jedna-wskazowka` `trabka` `worek-zboza` `kosciol-bez-wiezy` `herb-tarcza`.
- Nowe 9 (ta sesja): `waga`(N02) · `lew`(N04) · `fartuch`(N03 — narysowana mimo `⚠`; dry-run weryfikuje *widoczność*, nie rysowalność) · `bazylika-luki`(N05) · `szafa`(N06) · `wieza-bez-helmu`(C04) · `kotwica`(S04) · `waska-uliczka-luki`(S06) · `flisak`(D01 — rysunek = skrzypce; **flaga**: żaba jako prostsza sylwetka, swap trywialny).

> Niewykorzystane (NIE generować): `aniol` `baszta` `brama-luk` `dwa-szczyty` `schodkowy-szczyt`. Pula dystraktorów zbiegła się do W01/S01/S02/S04/D01 + miejsc N/C.

## Następne kroki
1. ✅ Decyzja G2 = opcja (i) [Oskar 2026-06-01].
2. 🔴 **Dry-run terenowy (Oskar)** — arkusz: `z1-dry-run-sheet.md`. Weryfikacja `⚠` (N03/N04/N05/S06) + pomiar nóg granicznych (G4, G10) + czas/postój. **Długi tor** (godziny aptek, światło) — odblokowany.
3. ✅ Globalna tabela kod→glif + pozycje x/y: `z1-glify-globalne.md` (20 kodów; render = placeholder geometryczny, gmerki dla Z6).
4. ✅ Wektoryzacja 9 ikon — gotowe (22 total, arkusz kontaktowy).
5. ⏳ **Bazowa mapa SVG** (20 glifów na pozycjach z `z1-glify-globalne.md`) → **10 widoków per ścieżka** (wzór `prototype/mapa-z1-podglad.html`). Mapy niosone w teren jako *wejście* dry-runu; 3 kontyngentne (G2/G4/G10) domykane po pomiarze.
