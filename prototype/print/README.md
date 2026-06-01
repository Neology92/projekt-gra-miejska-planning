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

## Stan

Funkcjonalny wydruk (czysta kartka A4, font czytelny — **nie** Fraktur). Manuskryptowa
stylizacja (pergamin, kaligrafia, UnifrakturMaguntia) odłożona po dry-runie — patrz
`todo/roadmap-prototyp.md`. Szyfr zweryfikowany ręcznie (round-trip ✓) i wizualnie (render).
