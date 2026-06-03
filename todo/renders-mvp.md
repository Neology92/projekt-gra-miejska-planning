# 🖨 Task: rendery MVP — osobna sesja Sonnet

> **Utworzony [2026-06-03].** Decyzja Oskara: **skip biurkowego review** draftów (Z4 doubt-beat, Z7 przejście, Z3Z, Z8, Z9, plotki Z2, styl symboli Z11) — **Piotr robi review na gotowych renderach**. Ta sesja = tylko produkcja PDF.
>
> **Wszystkie decyzje treściowe ZAMKNIĘTE** (otwarte-pytania #72/#73/#74/#75). Drafty mają finalne wartości. Nie zmieniaj treści — renderuj.
>
> **Konwencja nazw + render:** `envelopes/README.md §Systematyka`, `prototype/print/README.md`, `reference_print-multipage-tlo` (memory). Stempel render-time per plik gracza. Pętla po kolorach frakcji.

## Stan wejściowy (co JUŻ jest)

- **TR komplet** wyrenderowany: Z1×10, Z2×5(+slip), Z3×5, Z3b×5, pergamin×5, Z7×5(+list), Z4(G1), Z5(G2+G3 +przepis/rozpiska). Mg-klucze Z3/Z7, Z5/Z9. Aktorzy quick-ref.
- **KZ częściowo:** Z9(biały, +przepis/rozpiska), Z11 Tabela 1 + Tabela 2 × 5 kolorów KZ.
- **Deszyfrowniki Z1 × 10.**

## DO ZROBIENIA — rendery brakujące

### A. Koperty KZ bez HTML → trzeba zbudować HTML + wyrenderować PDF

> Wzorce HTML (lustra TR) w `prototype/print/src/`: `miasto-2-Z2.html` (→Z2), `miasto-3-Z3.html` (→Z3Z), `miasto-5-Z4.html` (→Z8), `miasto-5-Z5.html`/`krzyzacy-4-Z9.html` (wzór props), `miasto-6-Z7.html` (→Z11). CSS: `parchment.css`.

| # | Źródło draftu | HTML do zbudowania | PDF (kolory) |
|---|---|---|---|
| 1 | `envelopes/krzyzacy-2-Z2.md` | `krzyzacy-2-Z2.html` + slip „— N." | × 5 KZ (niebieski/fioletowy/biały/brązowy/czarny) + slip × 5 |
| 2 | `envelopes/krzyzacy-3-Z3Z.md` | `krzyzacy-3-Z3Z.html` | × 5 KZ — ⚠ **do koperty wkładamy też Tabelę 1 + Tabelę 2** (już wyrenderowane per kolor KZ; zasada #76 „treści w kopertach"). Montaż: brief Z3Z + 2 tabele = 1 koperta. |
| 3 | `envelopes/krzyzacy-4-Z8.md` | `krzyzacy-4-Z8.html` | × 2 (G6 niebieski, G7 fioletowy) — ⚠ **+ szyfrogram Z11 w środku** (patrz C7) |
| 4 | `envelopes/krzyzacy-4-Z10.md` | `krzyzacy-4-Z10.html` | × 2 (G9 brązowy, G10 czarny) — ⚠ **+ szyfrogram Z11 + bestiariusz w środku** |
| 5 | `envelopes/krzyzacy-5-Z11.md` | `krzyzacy-5-Z11.html` (sam brief; tabele i szyfrogram gracz już niesie z wcześniejszych kopert) | × 5 KZ |

### B. Re-render (HTML istnieje, tekst się zmienił)

| # | Plik | Powód |
|---|---|---|
| 6 | `krzyzacy-4-Z9.html` → `krzyzacy-bialy-4-Z9.pdf` | tekst zmieniony po renderze (brief v3 — dwa kanały krytyki). Zweryfikuj zgodność HTML z `envelopes/krzyzacy-4-Z9.md`, re-render. ⚠ Z9 = opcjonalna KZ (G8 biały) → **+ szyfrogram Z11 w kopercie** (zasada #76, patrz C7). |

### C. Rekwizyty KZ brakujące

| # | Co | Uwaga |
|---|---|---|
| 7 | **Szyfrogram Z11** (slip `UEFNEJ, UEGFEJ TJI WEUPEJ!`) | ⚠ **NIE wydawany luzem** — **wkładany do koperty opcjonalnej Z8/Z9/Z10** (zasada #76). Wymienialny (ten sam slip we wszystkich trzech). **Brak w public/** — dorób render. Dane: `materials/props/z11-tabula-recta-draft.md`, walidacja `tools/z11-cipher/cipher-data.js`. Stempel per grupa KZ (4 grupy mające opcjonalną z szyfrogramem: G6/G7 Z8, G9/G10 Z10; G8 biały ma Z9 — też potrzebuje). |
| 8 | **Bestiariusz Z10** (`krzyzacy-4-Z10-bestiariusz.jpeg`) | leaf 8 bestii A–H, bez klucza. Sprawdź czy plik źródłowy istnieje; **wkładany do koperty Z10** (zasada #76). |
| 9 | **Klucz MG Z8** | kod `621454` (jak Z4). Dorób `mg-Z8-klucz` lub dopisz do istniejącego klucza melodii. (Klucz MG = u MG, nie w kopercie gracza.) |
| 10 | **Klucz MG Z10** | klucz **A/B/E** (ufamy researchowi — #75). Dorób `mg-Z10-klucz`. (Klucz MG = u MG.) |

### D. Mapa (KRYTYCZNE — bez niej brak Z1)

| # | Co | Uwaga |
|---|---|---|
| 11 | **Mapa Torunia → PDF** | `tools/map-gen/map.html` istnieje, **brak PDF w public/**. ⚠ Najpierw dodaj POI KZ do `tools/map-gen/map-data.js`: glif Albrechta/zamku (Z2 KZ cel), „Biedronka" Szeroka 22 (Z10). Glif Piccolo już jest. Potem `render-map.ps1`. Render gotcha: `reference_map-gen-render-gotcha` (memory). Mapa wspólna — 1 wzór, druk per grupa (decyzja #6). |

### E. Z6 — ZABLOKOWANE (czeka na Piotra)

| # | Co | Status |
|---|---|---|
| 12 | `miasto-5-Z6` → HTML + PDF × 2 (G4 zielony, G5 turkusowy) | ⛔ **NIE renderuj** — projekt zagadki = Piotr (w toku, #24). Draft `envelopes/miasto-5-Z6.md` istnieje, ale rdzeń mechaniki niezatwierdzony. Render dopiero po finalizacji przez Piotra. |

## Kolejność sugerowana

1. **Mapa (#11)** — krytyczna, odblokowuje Z1; wymaga edycji map-data.js przed renderem.
2. **Koperty KZ A1–A5** — główna luka toru KZ.
3. **Rekwizyty C7–C10** — szyfrogram + bestiariusz + klucze MG.
4. **Re-render Z9 (#6).**
5. Z6 (#12) — gdy Piotr odda treść.

## Po renderze

- Aktualizuj `todo/dashboard.md` (statusy → ✅).
- Push do `public/` auto-deployuje galerię (Netlify). ⚠ Sekcja MG/klucze = spoilery — pamiętaj przy udostępnianiu graczom.
- Brama spójności meta↔treść (`roadmap.md §Brama spójności`) — przed finalnym drukiem.
