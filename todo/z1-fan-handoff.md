# HANDOFF — Z1 dyspersja do 10 grup (START TUTAJ)

> **Dla nowej sesji.** Stan: **2026-06-01, po dry-run runda 1 + REBALANS v2**. Zadanie ciągłe: 10 ścieżek Z1 („szlak symboli"), spójnych i przechodnich, z zamrożonego rejestru. Etap rejestr + 3 wzorce + fan ×10 + montaż = **zrobiony**; dry-run runda 1 wymusił **rebalans 7 z 10 łańcuchów (v2)**. Następna sesja: **wczytać wyniki dry-run R2 (Oskar uzupełni) → domknąć macierz v2 → zregenerować 10 kart → zbudować mapy.**

## Przeczytaj w tej kolejności
1. `puzzles/map.md` — **rejestr** (zaktualizowany: `N04`/`N05` pewne; `N03`/`S06` wypadły z łańcuchów; `S01` Brama Mostowa = **ostrołuk**, nie „zaokr. narożniki").
2. `puzzles/z1-10-sciezek.md` — **§REBALANS v2 = OBOWIĄZUJĄCA macierz** 10 łańcuchów. §Ścieżki niżej = **STALE (v1), do regeneracji**.
3. `puzzles/z1-dry-run-sheet.md` — **§RUNDA 2** (co Oskar weryfikuje w terenie: 6 par sightline + `S02` kaszownik + nogi).
4. `puzzles/z1-glify-globalne.md` — 20 kodów → glif + pozycje x/y na bazowej mapie 900×620 (⚠ pula kodów do przeliczenia — patrz TODO #3).
5. `prototype/icons-contact-sheet.html` — wszystkie 23 ikony (ocena wzrokowa). `puzzles/z1-szkielety-10.md` — szkielety v1 (referencja).

## Zamrożone decyzje (NIE renegocjuj bez Oskara)
- Briefing = **Rynek Nowomiejski**; **sweep NE→SW**; P4 (KONIEC) u **MG na Rynku Staromiejskim**.
- **Budżet poluzowany [Oskar 2026-06-01]:** odległości znośne, rozsuw powrotu do MG „nawet pasuje" → **głębokie starty od Wisły (`S01`, `S02`) wróciły do gry**.
- **Reguła wzroku [Oskar 2026-06-01]:** dwa kolejne przystanki NIE w zasięgu wzroku bez podchodzenia — **tylko śródłańcuchowo** (P1→P2, P2→P3); ostatnia noga **P3→P4 (zbieg u MG) zwolniona**.
- Rozłączność pozycyjna P1–P3 **twarda**; P4 zbieg (zwolniony). **1 miejsce = 1 glif = 1 detal** globalnie.
- Render glifu = **placeholder geometryczny**; gmerki zarezerwowane dla **Z6** (nie zaciągać do Z1). Alfabet glifów **rozłączny z ikonami detali**.
- **Subagenty: `model: "sonnet"`.** Język: planowanie .md = PL; artefakty gracza = EN.

## ✅ ZROBIONE (ta sesja, 2026-06-01)
- **Dry-run runda 1** (Oskar w terenie): `N04` lew ✓ (nad drzwiami, godziny apteki nieistotne), `N05` bazylika/łuki ✓ — **pewne**. `N03` fartuch ✗ (brak godła), `S06` Ulica Ciasna ✗ (łuki nieczytelne) — **wypadły z łańcuchów**. `S01` Brama Mostowa = **ostrołuk** wypatrzalny. Budżety G4/G10 OK. Reguła wzroku = śródłańcuchowo.
- **Rejestr `map.md`** zaktualizowany (`N03`/`N04`/`N05`/`S01`/`S06`).
- **Ikony (prototype/icons/, 23 SVG):** 9 nowych z tej sesji (`waga` `lew` `fartuch` `bazylika-luki` `szafa` `wieza-bez-helmu` `kotwica` `waska-uliczka-luki` `flisak`) + `brama-ostroluk` (zamiast nieczytelnej `waska-uliczka-luki`). Arkusz kontaktowy `icons-contact-sheet.html`. **Wycofane z użycia:** `fartuch` (N03✗), `waska-uliczka-luki` (S06✗).
- **Globalna tabela glifów** `z1-glify-globalne.md` (20 kodów, pozycje x/y, alfabet geometryczny rozłączny z detalami).
- **Arkusz dry-runu** `z1-dry-run-sheet.md` (R1 rozstrzygnięte + R2 do zrobienia).
- **REBALANS v2** — macierz 10 łańcuchów (disjoint 10/10 w każdej kolumnie, wszystkie detale pewne, 3 ciasne pary poza środkiem łańcucha). **PROPOZYCJA — czeka na sightline z dry-run R2.**

### Macierz REBALANS v2 (kopia robocza — kanon w `z1-10-sciezek.md`)
| | P1 | P2 | P3 | P4→MG |
|---|---|---|---|---|
| G1 | N01 | N02 | N06 | C04 |
| G2 | N06 | N04 | N05 | C01 |
| G3 | N02 | N01 | C03 | C06 |
| G4 | N04 | N06 | C09 | C02 |
| G5 | N05 | C04 | C08 | C07 |
| G6 | S02 | C08 | C04 | C06 |
| G7 | S01 | C09 | C06 | C07 |
| G8 | C09 | C01 | C07 | C06 |
| G9 | C02 | C06 | C01 | C07 |
| G10 | C03 | C07 | C02 | C08 |

## 🔴 DO ZROBIENIA (następna sesja — po uzupełnieniu R2 przez Oskara)
1. **Wczytać wyniki dry-run R2** (`z1-dry-run-sheet.md §RUNDA 2`) — Oskar uzupełni tabele.
2. **Domknąć macierz v2:** dla par `R2.1` oznaczonych „za ciasne" — rozbić (wstawić przystanek pośredni z zapasu), **ponownie sprawdzić rozłączność P1–P3**. Jeśli `S02` kaszownik ✗ (R2.2) → `G6` dostaje inny głęboki start (kandydat `S04` kotwica/Bulwar).
3. **Przeliczyć `z1-glify-globalne.md`:** pula użytych kodów się zmienia — **`S02` wchodzi do łańcucha (G6), `S06` wypada, `N03` tylko dystraktor**; `S04`/`W01` mogą dojść jako dystraktory. Zaktualizować listę 20→? kodów + pozycje.
4. **Regeneracja 10 kart** (§Ścieżki) na łańcuchach v2 — **fan subagenty (sonnet, 1 ścieżka/agent):** pętla 5 dystraktorów (zamknięta, rozłączna z łańcuchem), deszyfrownik 9 wierszy (detal→kod, bez ślepych zaułków), klucz MG, budżet od briefingu. **AUDYT: stare pętle dystraktorów (v1) odwołują się do `N03`/`S06` — `N03` może zostać jako martwy dystraktor (nieszkodliwy), `S06` ikona wycofana → zastąpić.**
5. **Bazowa mapa SVG** (glify wg `z1-glify-globalne.md`) → **10 widoków per ścieżka** (wzór `prototype/mapa-z1-podglad.html`). Na mapie domknąć wzrokowo pary `R2.1`. Mapa = wejście kolejnego dry-runu.
6. **Decyzje wiszące:** `flisak` ikona = skrzypce (alt: żaba — swap trywialny); render glifu placeholder vs gmerk (gmerki = Z6).

## Stan ikon (prototype/icons/) — 23 SVG
**Łańcuchowe pewne:** `piernik`(N01) `waga`(N02) `lew`(N04) `bazylika-luki`(N05) `szafa`(N06) `astrolabium`(C01) `osiol`(C02) `melonik`(C03) `wieza-bez-helmu`(C04) `gwiazda`(C06) `herb-tarcza`(C07) `kosciol-bez-wiezy`(C08) `zegar-jedna-wskazowka`(C09) `brama-ostroluk`(S01) `kaszownik`(S02) `kotwica`(S04) `trabka`(W01).
**Dystraktor/zapas:** `delfin`(zapas C01) `worek-zboza`(W02, nieużyty Z1) `flisak`(D01) `brama-zaokraglona`(stary S01 — zastąpiony ostrołukiem).
**Wycofane z użycia:** `fartuch`(N03✗) `waska-uliczka-luki`(S06✗).
