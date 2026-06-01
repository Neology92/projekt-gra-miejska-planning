# Z1 — 10 szkieletów ścieżek (krok 1 procedury fanu)

> **Status:** szkielety ułożone inline przez orkiestratora 2026-06-01 (decyzja Oskara: **opcja (c) — dłuższe pierwsze legi**; sanity-check zewnętrznego recenzenta uwzględniony). To **4 kody/ścieżkę z zamrożonego rejestru `map.md`** — KODY SĄ ZAMROŻONE. Dystraktory (5/ścieżka), deszyfrowniki, budżety i ⚠ flagi dokładają subagenci w kroku 2 (fan, `model: "sonnet"`, 1 ścieżka/agent), bez pisania plików — zwracają strukturę do montażu.
>
> **Model:** briefing = Rynek Nowomiejski; sweep NE→SW; P4 = zbieg u MG na Rynku Staromiejskim; rozłączność P1–P3 **twarda**; P4 zwolniony (zbieg). **Budżet każdej grupy liczony od briefingu na Rynku Nowomiejskim — z długą pierwszą nogą grup głębokich włącznie** (`map.md §5.3`). Zero wejść w strefę W (Piekary/Rabiańska) i nadwiślańską jako kroki łańcucha — tylko jako dystraktory.

## Macierz 10 łańcuchów (ZAMROŻONA)

| Grupa | P1 (K1 / start) | P2 | P3 | P4 (KONIEC→MG) | typ |
|---|---|---|---|---|---|
| **G1** | `N01` Piernikarka | `N02` Przekupka | `S06` Ulica Ciasna | `C04` Ratusz | N-start, nie-C P3 |
| **G2** | `N03` Modry Fartuch | `N04` Apteka Lew | `N05` Kościół Jakuba | `C01` Kopernik | N-start, długa noga finałowa |
| **G3** | `N02` Przekupka | `N01` Piernikarka | `C03` Filuś | `C06` Pod Gwiazdą | N-start, tani |
| **G4** | `N04` Apteka Lew | `N06` Baj Pomorski | `C09` Katedra Janów | `C02` Osiołek | N-start, tani |
| **G5** | `N05` Kościół Jakuba | `N03` Modry Fartuch | `C08` Kościół NMP | `C07` Dwór Artusa | N-start, tani |
| **G6** | `N06` Baj Pomorski | `N05` Kościół Jakuba | `C06` Pod Gwiazdą | `C08` Kościół NMP | N-start, tani |
| **G7** | `S06` Ulica Ciasna | `C04` Ratusz | `C07` Dwór Artusa | `C03` Filuś | głęboki (E, Podmurna) |
| **G8** | `C09` Katedra Janów | `C02` Osiołek | `C01` Kopernik | `C06` Pod Gwiazdą | głęboki (SE, Żeglarska) |
| **G9** | `C02` Osiołek | `C06` Pod Gwiazdą | `C04` Ratusz | `C07` Dwór Artusa | głęboki (NE Rynek) |
| **G10** | `C03` Filuś | `C07` Dwór Artusa | `C02` Osiołek | `C08` Kościół NMP | głęboki (NW Rynek) |

## Pass rozłączności pozycyjnej (orkiestrator) — ✓

- **P1** {`N01`·`N03`·`N02`·`N04`·`N05`·`N06`·`S06`·`C09`·`C02`·`C03`} — 10 parami różnych ✓
- **P2** {`N02`·`N04`·`N01`·`N06`·`N03`·`N05`·`C04`·`C02`·`C06`·`C07`} — 10 parami różnych ✓
- **P3** {`S06`·`N05`·`C03`·`C09`·`C08`·`C06`·`C07`·`C01`·`C04`·`C02`} — 10 parami różnych ✓ (nie-C: `S06`, `N05`; wszystkie 8 C obecne)
- **P4** {`C04`·`C01`·`C06`·`C02`·`C07`·`C08`·`C03`·`C06`·`C07`·`C08`} — **zbieg u MG, rozłączność zwolniona** (`map.md §5.1`: twardo tylko kroki 1–3). 7 różnych spotów Rynku; 3 dzielone pary: `C06`(G3+G8) · `C07`(G5+G9) · `C08`(G6+G10). **Każda dzielona para = jedna grupa tania + jedna głęboka → różna długość łańcucha → naturalny rozsuw czasu dojścia do MG.** `C01` Kopernik (must-have) obecny: P4 u G2, P3 u G8.

## Reguła „2 nie-C P3" (wymuszona: 8 C-miejsc < 10 grup)

Dziesięć rozłącznych P3 z ośmiu miejsc C jest niemożliwe → dokładnie **2 grupy mają nie-C P3**. Muszą leżeć **NE/E od Rynku**, żeby ostatnia noga szła *w* Rynek (bez zawrotki — reguła „jednokierunkowy sweep", `map.md §5.3`):
- **G1: P3 = `S06` Ulica Ciasna** (wsch. krawędź, dojście Podmurną). Poprzednie kroki w Nowym Mieście (NE) → S06 (E) → `C04` Ratusz (W w Rynek). Monotonicznie ✓.
- **G2: P3 = `N05` Kościół Jakuba** (Nowe Miasto). Cały łańcuch w Nowym Mieście (`N03`→`N04`→`N05`), potem **jedna długa noga finałowa** SW do `C01` Kopernik (~500 m). To głęboka noga (c), ale na KOŃCU, nie na starcie. Monotonicznie ✓.
- **Strefa W (Piekary/Rabiańska) i nadwiślańska NIE wchodzą do żadnego łańcucha** — z Rynku do Piekar i z powrotem = zawrotka. Tam tylko dystraktory.

## Typy startów (realizacja opcji c)

- **Tani N (G3–G6):** P1 w zasięgu 1–3 min od briefingu; łańcuch ~11–14 min.
- **N-start z długą nogą (G1, G2):** start tani, ale jedna długa noga (G1 środek: briefing→Nowe Miasto→S06; G2 koniec: Nowe Miasto→Kopernik). ~13–15 min.
- **Głęboki (G7–G10):** P1 = wejściowe miejsce Starego Miasta od NE/E (`S06` Podmurna, `C09` Katedra/Żeglarska, `C02` Osiołek/Żeglarska, `C03` Filuś); pierwsza noga ~5–6 min od briefingu, dalsze krótkie. ~13–15 min.

## ⚠ Do weryfikacji na dry-runie (orkiestrator domyka w kroku 3 — NIE subagent)

- **G2 długa noga `N05`→`C01`** (~500 m, ~6 min) — jeśli pełny łańcuch > 15 min, kandydat do skrócenia (np. P3 bliżej korytarza). Subagent **zgłasza zmierzone metry**, nie podmienia.
- **G10 `C03`(NW)→…→`C08`(NW)`** przez SE (`C07`,`C02`) — lateralna pętla wewnątrz centrum (~200 m wahnięcia, bez wyjścia poza Rynek). Zmierzyć; jeśli > ~4 min nadmiaru, orkiestrator rozważy zamianę endpointu `C08`↔inny w kroku 3.
- Mikro-wahnięcia w obrębie Nowego Miasta (np. G1 `N01`→`N02`, G6 `N06`→`N05`) — < ~100 m; zmierzyć, ale akceptowalne.

## ⚠ Flagi z rejestru (subagenci przepisują, NIE asertują jako fakt)

- `N03` Modry Fartuch — wiki potwierdza tylko nazwę; detal „fartuch" → teren.
- `N05` Kościół Jakuba — „bazylika" eksperckie → piktogram = sylwetka **łuków przyporowych**; teren.
- `N04` Apteka Lew — rzeźba lwa we wnęce, **godziny pracy apteki, nie 24/7**.
- `S03` Brama Żeglarska, `S05` Baszty, `C05` Anioł, `D01`/`D02` flisak — **tylko dystraktory**, nigdy w łańcuchu.

## Brief dla subagentów (krok 2 — fan ×10, sonnet, 1 ścieżka/agent)

Każdy agent dostaje JEDEN łańcuch (4 ZAMROŻONE kody powyżej) i z zamrożonego `map.md` produkuje:
1. **Walidacja budżetu OD BRIEFINGU na Rynku Nowomiejskim** — pełny łańcuch briefing→P1→P2→P3→P4(=MG), z długą pierwszą nogą włącznie. Metry/min per noga. Cel: tani ~11–14, głęboki/długi do ~15. **Jeśli przekracza — ZGŁOŚ flagą + zmierzone metry; NIE podmieniaj kodów** (rozłączność globalną domyka orkiestrator, agent nie widzi pozostałych 9 ścieżek).
2. **5 dystraktorów** = zamknięta pętla **rozłączna** z 4 glifami łańcucha tej ścieżki (pętla nie wpada na żaden glif łańcucha; każdy „następny glif" istnieje na mapie ścieżki). Dystraktory dobierane z rejestru `map.md` (w tym dozwolone tu motywy W/S/flisak — to ich jedyne miejsce w Z1).
3. **Deszyfrownik 9 wierszy** (detal → następny glif; 4 łańcuchowe + 5 dystraktorowych; ostatni łańcuchowy → KONIEC; bez ślepych zaułków).
4. **Legenda + klucz MG** (lista 4 miejsc w kolejności) + **⚠ flagi** przepisane z rejestru (bez asercji faktu, gdy wiki milczy → zostaje `⚠ teren`).
5. Zwraca **strukturę** (nie pisze plików). Glify/detale ściśle z rejestru — agent niczego nie wymyśla.
