# HANDOFF — Z1 dyspersja do 10 grup (start tutaj)

> **Dla nowego agenta orkiestrującego.** Stan na 2026-06-01. Zadanie ciągłe: wygenerować **10 ścieżek Z1** (po jednej na grupę kolorową) z zamrożonego rejestru, spójnych i przechodnich. Etap „rejestr + 3 wzorcowe" **zrobiony**; przed fanem ×10 jest **1 blokująca decyzja Oskara** (niżej).

## Przeczytaj w tej kolejności
1. `puzzles/map.md` — **ZAMROŻONY rejestr** (kod ↔ stały glif ↔ stały detal ↔ haczyk ↔ rola; reguła rozłączności pozycyjnej; wykluczenia; kontrakt stylu ikon). Jedyne źródło prawdy dla glifów/detali.
2. `puzzles/z1-sciezki-wzorcowe.md` — **3 zwalidowane wzorce** (EX-1, EX-2', EX-3') + pass spójności + Wnioski (#1–#4) + aneks (zarzucony model rozproszony).
3. `puzzles/z1-szlak-spec.md` — mechanika Z1 (dwie warstwy, łańcuch 4 + pętla dystraktorów, deszyfrownik detal→glif, klucz MG, granica spoilera).
4. `puzzles/szlak-symboli.md` — reguły tras + budżet. `mechanics/grupy-i-klasy.md` — 10 kolorów + **bez fal**.

## Zamrożone decyzje (NIE renegocjuj bez Oskara)
- **Model:** briefing = **Rynek Nowomiejski**; **sweep NE→SW**; P4 (KONIEC) u **MG na Rynku Staromiejskim**; budżet **12±2 min** od Rynku Nowomiejskiego.
- **Bez fal:** wszystkie grupy ruszają równolegle, własne tempo. Dyspersja stoi na różnych trasach + rozłączności pozycyjnej.
- **Rozłączność pozycyjna:** żadne miejsce na tej samej pozycji kroku u dwóch grup (twardo kroki 1–3; krok 4 = zbieg u MG).
- **`C01` Kopernik = astrolabium** (must-have fakt; ikona `astrolabium.svg`). **1 miejsce = 1 glif = 1 detal** globalnie.
- **Subagenty odpalać na `model: "sonnet"`** [decyzja 2026-06-01].
- **Język:** planowanie .md = PL; artefakty gracza = EN (nazwy toruńskie zostają).

## ✅ BLOKADA #1 ROZSTRZYGNIĘTA [Oskar 2026-06-01 → opcja (c)]
Wybór: **(c) dłuższe pierwsze legi**. Briefing zostaje na Rynku Nowomiejskim, twarda rozłączność P1–P3 **zostaje**, pula P1 rośnie przez głębsze starty (budżet do ~15 min dla grup głębokich). Zapisane w `puzzles/map.md §5.1, §5.3`.

## ✅ FAN WYKONANY → wynik: `puzzles/z1-10-sciezek.md`
10 szkieletów ułożonych inline (`puzzles/z1-szkielety-10.md`), fan ×10 (sonnet), pass spójności + montaż zrobione. Wszystkie 10 łańcuchów w budżecie (graniczne G4 ~14,6 i G10 ~15 — prawdopodobnie >15 z czasem odczytu, swap obowiązkowy po pomiarze). G1 skorygowane 2× (P3 `S06`→`N03`→finalnie `N06`; reguła „pewne detale→łańcuch, niepewne→dystraktor").

**✅ Decyzja G2 [Oskar 2026-06-01]: opcja (i) — zostaw, weryfikacja na dry-runie.** Zrobione potem: arkusz dry-runu (`puzzles/z1-dry-run-sheet.md`), globalna tabela glifów + pozycje (`puzzles/z1-glify-globalne.md`, 20 kodów), 9 ikon (22 total, `prototype/icons-contact-sheet.html`).

**Następny krok: bazowa mapa SVG → 10 widoków per ścieżka** (wzór `prototype/mapa-z1-podglad.html`), niesione w teren jako wejście dry-runu. Dry-run terenowy (Oskar) = długi tor, odblokowany arkuszem.

## Otwarte (mniejsze)
- **#2 słabe detale:** `N03` Modry Fartuch (tylko nazwa — Oskar: zostaw + teren), `N05` bazylika (→ piktogram łuków przyporowych + teren), `N04` lew (godziny apteki, nie 24/7 — OK tylko jeśli gra w godz. otwarcia).
- **#3 stop-4:** 9 obiektów (`C01–C09`) vs 10 grup → default: dorzuć `C09` Katedrę jako 10. endpoint (albo 1 dzielona para).
- **#4 EX-3' budżet** ~13–14 min: jeśli dry-run > 14, swap P2 na `W04`.

## Procedura fanu (po rozstrzygnięciu #1)
1. **Orkiestrator (inline) ustala 10 szkieletów** (4 kody/ścieżka) — gwarantuje rozłączność pozycyjną wg wybranej reguły. NIE zrównoleglać tego kroku.
2. **Fan: subagenty (sonnet), 1 ścieżka/agent** — każdy z zamrożonego rejestru buduje: walidację budżetu od Rynku Nowomiejskiego, 5 dystraktorów = zamknięta pętla rozłączna z łańcuchem, deszyfrownik 9 wierszy (detal→glif, bez ślepych zaułków), legendę, klucz MG, ⚠ flagi. Zwraca strukturę, NIE pisze plików.
3. **Orkiestrator: pass spójności** (rozłączność, „następny glif" istnieje, pętle rozłączne) + montaż.
4. **Ikony:** dowektoryzuj unię detali dystraktorowych (styl: `map.md` §7; istnieje 13 SVG). Tylko unia faktycznie użytych miejsc.
5. **Mapy HTML per ścieżka** (wzór: `prototype/mapa-z1-podglad.html`) — po zatwierdzeniu tras.

## Stan ikon
13 SVG w `prototype/icons/`: `piernik` `astrolabium`(=C01) `delfin`(zapas) + `melonik` `gwiazda` `osiol` `brama-zaokraglona` `kaszownik` `zegar-jedna-wskazowka` `trabka` `worek-zboza` `kosciol-bez-wiezy` `herb-tarcza`. Do zrobienia (dystraktory): `waga` `lew` `aniol` `kotwica` `baszta` `brama-luk` `ulica-luki` `dwa-szczyty` `schodkowy-szczyt` `flisak` `wieza-bez-helmu`.
