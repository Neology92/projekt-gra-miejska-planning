# 🤖 Auto-checki wydruku — zasady sprawdzalne maszynowo

> **Co to:** zebrane z całego projektu **twarde reguły**, które da się sprawdzić **automatycznie** (grep/rg) na finalnych plikach do druku — bez oceny człowieka. Każda reguła: treść · źródło · komenda · oczekiwany wynik. Na końcu **log uruchomienia** (stan 2026-06-03) z wynikami i sugestiami.
>
> **Czeki ręczne** (rozwiązywalność, ton, czytelność) → `todo/wydruk-inwentarz.md`.
> **Uruchomienie:** komendy `rg` (ripgrep) z roota repo. Można je obudować w skrypt (`tools/check-druk.ps1`) — patrz koniec.

## Zakres plików

- **Gracz EN:** `envelopes/*.md`, `materials/props/*.md`, `prototype/print/src/*.html` (bez `_backup-clean/`, `variants/`), `public/*` (źródła).
- **Pomijaj:** `todo/archive/`, `_backup-clean/`, `variants/`, sekcje `## PLANNING NOTES` / `## Notatki` / `## Rewizja` (to nie tekst gracza — częsta przyczyna false-positive).

> ⚠ **Lekcja z uruchomienia:** wiele reguł „zakazany string" daje **false-positive w notatkach planistycznych** (np. nota „Nie nazywamy Tuba Dei"). Prawdziwy check = string w **sekcji tekstu gracza**, nie w całym pliku. Gdzie to istotne — komenda zawęża zakres lub trzeba zweryfikować kontekst ręcznie.

---

## Reguły — fakty kanoniczne (MUSZĄ się zgadzać)

| # | Reguła | Źródło | Komenda (rg z roota) | Oczekiwane |
|---|---|---|---|---|
| A1 | Data buntu = **6 II 1454** | `CLAUDE.md`, `lore/fakty-vs-fabula.md` | `rg -i "of February" envelopes materials/props` | tylko „6th of February" |
| A2 | Przywódca = **Jan Bażyński**, NIE „Obrzyński" | `CLAUDE.md` | `rg -i "obrzy" envelopes materials puzzles concept mechanics lore/meta-kartki` | 0 trafień |
| A3 | Komtur = **Albrecht Kalb** | `CLAUDE.md` | `rg -i "komtur" envelopes materials/props` (sprawdź kontekst) | tylko Albrecht/Kalb |
| A4 | Wielki Mistrz = **Ludwig von Erlichshausen** | `CLAUDE.md` | `rg -i "erlichshausen\|grand master" envelopes materials/props` | spójne |
| A5 | **Tuba Dei** NIE w tekście gracza (anachronizm, od 1500) | `CLAUDE.md`, `lore/fakty-vs-fabula.md` | `rg -i "tuba dei" envelopes materials/props prototype/print/src` | tylko w notatkach planistycznych (ręcznie potwierdź) |
| A6 | Kod kalimby = **621454** (Z4 i Z8 ta sama melodia) | `puzzles/kalimba.md` | `rg "621454" envelopes/miasto-5-Z4.md envelopes/krzyzacy-4-Z8.md puzzles/kalimba.md` | obecne we wszystkich |
| A7 | Shift Z7 = **+7** | `puzzles/z7-szyfr-spec.md` | `rg -i "shift|\+7|\+3" materials/props/z7-szyfrogram-draft.md prototype/print/src/miasto-06a-Z7-list.html` | „+7" kanon; „+3" tylko w backup |
| A8 | Ciphertext Z7 = `OLSMLU, OLPSLU BUK DLOYLU!` | `puzzles/z7-szyfr-spec.md` | `rg "OLSMLU" materials/props prototype/print/src` | obecne w szyfrogramie |
| A9 | Plaintext Z7 = `HANS VON BAYSEN IS JORDAN THE COOK` (28 liter) | `puzzles/z7-szyfr-spec.md` | `rg "HANS VON BAYSEN IS JORDAN THE COOK"` | obecne; odwrócona wersja tylko w backup |
| A10 | Klucz Z11 tabula recta = **MARIENBURG** | `puzzles/z11-szyfr-spec.md` | `rg "MARIENBURG" tools/z11-cipher materials/props/z11-tabula-recta-draft.md` | obecne jako klucz |
| A11 | Klucz Z11 = **Brown × Ladle → S11** (centralny) | `puzzles/z11-szyfr-spec.md` | `rg -i "brown.*ladle\|ladle.*brown\|S11" tools/z11-cipher puzzles/z11-szyfr-spec.md` | wskazuje S11 |
| A12 | Finał obu torów = **20:30** (nie 20:00) | `puzzles/kalimba.md`, `concept/04` | `rg "20:00" envelopes materials/props` | 0 trafień |
| A13 | Jordan = postać LEGENDARNA / w grze pseudonim Bażyńskiego — nie „historyczny fakt" | `CLAUDE.md`, `lore/fakty-vs-fabula.md` | `rg -i "jordan.*historical\|historical.*jordan" envelopes materials/props` | 0 trafień |

## Reguły — konwencje nazw i montaż

| # | Reguła | Źródło | Komenda | Oczekiwane |
|---|---|---|---|---|
| B1 | Nazwy kopert = `[frakcja]-[nr]-[Zx].md`, frakcja ∈ {wspolne,miasto,krzyzacy} | `envelopes/README.md` | `ls envelopes/*.md \| rg -v "^(envelopes/)?(wspolne\|miasto\|krzyzacy)-[0-9]+-Z[0-9]+b?\.md$\|README"` | 0 trafień |
| B2 | Rekwizyty = `[frakcja]-[NN][slot]-[Zx]-[typ]` (NN dwucyfrowy) | `envelopes/README.md` | wzrok na `public/*.pdf` (np. `miasto-04b-…`, `miasto-06a-…`) | 2-cyfrowy NN |
| B3 | Stempel = placeholder `__STAMP__` (nie hardkod) w HTML kart gracza | `prototype/print/README.md` | `rg -L "__STAMP__" prototype/print/src/*.html` (poza mg-*) | każdy plik gracza ma `__STAMP__` |
| B4 | Dokumenty MG **bez** stempla | `envelopes/README.md` | `rg "__STAMP__" prototype/print/src/mg-*.html` | 0 trafień |
| B5 | `RENDER-BLOCK` usunięty po porcie prozy | `prototype/print/README.md` | `rg -l "RENDER-BLOCK" prototype/print/src/*.html` | 0 plików |
| B6 | Kolory grup G1–G10 + hex kanoniczne | `mechanics/grupy-i-klasy.md`, `CLAUDE.md` | diff `tools/z1-decoder/*colors*.js` vs tabela CLAUDE.md | 10 hex zgodnych |

## Reguły — język wg adresata

| # | Reguła | Źródło | Komenda | Oczekiwane |
|---|---|---|---|---|
| C1 | Tekst gracza = EN (narracja 2. os. „you") | `CLAUDE.md`, `mechanics/koperty-mg.md` | przegląd sekcji `## TEXT` / `## MAIN NOTE` w `envelopes/*.md` | EN, 2. os. |
| C2 | Aktorzy/MG = PL (wyjątek: cytaty treści zagadek/odpowiedzi = EN) | `CLAUDE.md` | `rg -i "Language: English" materials/actors materials/ops` | docelowo 0 (dług EN→PL) |
| C3 | Nazwy własne toruńskie zawsze w oryginale | `CLAUDE.md` | wzrok | — |
| C4 | Nazwa miasta = **wyłącznie „Toruń"**, NIGDY „Thorn" (decyzja 2026-06-03) | rozmowa Oskar 2026-06-03 | `rg "Thorn" envelopes materials prototype/print/src --glob '!**/_backup-clean/**' --glob '!**/variants/**'` | **0 trafień** |

---

## 📋 LOG URUCHOMIENIA — 2026-06-03

> Uruchomione kluczowe reguły. `✅ PASS` · `⚠ UWAGA` (false-positive lub do oceny) · `❌ FAIL`.

| # | Wynik | Szczegóły |
|---|---|---|
| **A2** Obrzyński | ✅ PASS | „Obrzyński" tylko w `CLAUDE.md` (instrukcja), `lore/fakty-vs-fabula.md` (nota „błąd poprawiony"), `todo/archive/`. **Zero w tekście gracza.** |
| **A5** Tuba Dei | ✅ PASS (z uwagą) | 3 trafienia w `envelopes/` (`wspolne-1-Z1`, `miasto-6-Z7`, `krzyzacy-5-Z11`) — **wszystkie w notatkach planistycznych** „Nie nazywamy Tuba Dei". Tekst gracza: „eighth bell". False-positive naiwnego grepa. |
| **A6** Kod 621454 | ✅ PASS | Obecny w `miasto-5-Z4`, `krzyzacy-4-Z8`, `kalimba.md` + dokumentach MG. Spójny. |
| **A9** Plaintext Z7 | ✅ PASS | `HANS VON BAYSEN IS JORDAN THE COOK` w `z7-szyfrogram-draft.md`. Odwrócona/dłuższa wersja **tylko w backupach** (`z7-szyfr-spec §0`, oznaczone „deep-archive"). Reveal „Jordan is Hans von Baysen" w `miasto-6-Z7` = narracja finału (poprawne, nie ciphertext). |
| **A10** MARIENBURG | ✅ PASS | Obecne w `cipher-data.js`, `z11-tabula-recta-draft.md`, `z11-szyfr-spec.md`, `krzyzacy-5-Z11.md`. |
| **A12** 20:00 | ✅ PASS | Zero „20:00" w `envelopes/`/`props`. Finał = „eighth bell" / 20:30 wszędzie. |
| **Toruń/Thorn** | ✅ ROZSTRZYGNIĘTE + WDROŻONE [2026-06-03] | Decyzja Oskara: **wyłącznie „Toruń", nigdy „Thorn"** (player-facing EN i MG). Zamiana wykonana (`Thorn→Toruń`) w: `z7-szyfrogram`, `pergamin`, `miasto-06a/04b/6-Z7.html`, `mg-runsheet`, `miasto-6-Z7.md`, `krzyzacy-5-Z11.md`. Grep `Thorn` w produkcji = **0**. Nowa stała reguła → **C4** niżej. |
| **B1** nazwy kopert | ✅ PASS | Wszystkie `envelopes/*.md` zgodne z `[frakcja]-[nr]-[Zx]`. |

### Wnioski z uruchomienia → sugestie

1. **Brak realnych FAIL-i** w sprawdzonych regułach faktograficznych. Kanon trzyma się w plikach gracza.
2. **Reguły „zakazany string" wymagają zawężenia do sekcji tekstu gracza** — inaczej notatki planistyczne (które *cytują regułę*) wyglądają jak naruszenie. Rekomendacja: w skrypcie ciąć plik do bloku między `## TEXT`/`## MAIN NOTE`/`## Gotowy tekst` a `## PLANNING`/`## Notatki`/`## Rewizja`.
3. **Toruń/Thorn** — ROZSTRZYGNIĘTE 2026-06-03: wyłącznie „Toruń". Zamiana wdrożona, reguła **C4** stała (grep `Thorn`=0). Pozostaje **re-render** dotkniętych PDF-ów.
4. **Reguły jeszcze nie uruchomione maszynowo** (A7, A8, A11, B3–B6, C-*): warto domknąć w skrypcie przy następnym przejściu — szczególnie **B3/B4 (stempel)** i **B5 (RENDER-BLOCK)** jako tanie bramki przed drukiem.

---

## Opcja: skrypt `tools/check-druk.ps1`

Reguły powyżej da się spiąć w jeden skrypt PowerShell, który przy każdym uruchomieniu zwraca tabelę PASS/FAIL + linie naruszeń (z zawężeniem do sekcji tekstu gracza). **Nie zbudowany** — do zrobienia, jeśli Oskar chce powtarzalnej bramki przed-drukowej (zamiast ręcznego odpalania `rg`). Wejście: lista plików z `wydruk-inwentarz.md §A/B`; wyjście: raport + exit-code (≠0 gdy FAIL) do podpięcia jako hook.
