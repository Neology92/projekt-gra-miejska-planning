# prototype/print — PDF-y gotowe do druku (Z3 + Z7)

Wydruki dla prototypu pojedynczej ścieżki. Generowane z HTML w `src/` przez `render.ps1`.

## Pliki

| PDF | Co to | Dla kogo |
|---|---|---|
| `z3-pergamin-lista-tr.pdf` | Lista nazwisk Tajnej Rady (wywiad Zakonu), motto = klucz | **gracz** (Z3, niesiony do finału) |
| `z7-przechwycony-list.pdf` | Przechwycony list krzyżacki, szyfrogram Cezara +7 | **gracz** (Z7, koperta K8) |
| `z3-z7-klucz-mg.pdf` | Klucz: +7, wyrównanie nagłówków, odszyfrowanie, hint awaryjny | **MG — NIE dla gracza** |

> ⚠ `z3-z7-klucz-mg.pdf` zawiera rozwiązanie. Drukuj osobno, nie dawaj graczom.

## Regeneracja

```powershell
pwsh -File render.ps1
```

Wymaga Chrome lub Edge (Win11 ma Edge). Renderuje A4, honoruje `@page`/`@media print`.
Treść kanoniczna: `puzzles/z3-lista-tr-spec.md`, `puzzles/z7-szyfr-spec.md §0`.
Podgląd ekranowy z notkami projektowymi: `prototype/z3-z7-podglad.html`.

## Stylistyka

Manuskryptowa, pod druk **czarno-biały** (`src/parchment.css`):

- **Krój prozy:** IM Fell English (self-hosted woff2 w `src/fonts/`, latin) — średniowieczny „zużyty druk", ale czytelny. Nazwiska na liście Z3 → kapitaliki (IM Fell nie ma boldu).
- **Motto + szyfrogram:** zostają **monospace** i wyróżnione „piórem" (większy tekst, traktowanie `h-plain`, bez ramek). To celowe i **load-bearing**: mechanika to porównanie obu nagłówków litera-po-literze (Cezar +7), więc glify muszą się zgrywać — nie zmieniać na pismo proporcjonalne/Fraktur.
- **Tło:** pergamin jako arkusz rozpływający się w biel **nieregularną maską alfa** (`feTurbulence`+`feDisplacementMap`+blur w SVG) — krawędzie widoczne na kartce, bez ramki, bezpieczne dla domowej drukarki. Tekstura: włókno (bezszwowe kafle) + ziarno. Wariant `bg-soft`.

`render-variants.ps1` renderuje warianty porównawcze (kroje/nagłówki/tła) do `variants/` — narzędzie do dostrajania, nie część produkcji. Odrzucone „czyste" wersje: `src/_backup-clean/`.

## Stan

Wydruk funkcjonalny **i** ostylowany (IM Fell + pergamin, `bg-soft`, `h-plain`). Szyfr
zweryfikowany ręcznie (round-trip ✓) i wizualnie (render). Stylistyka zweryfikowana na renderach
PDF (kroje, krawędź→biel, wyrównanie monospace motta).
