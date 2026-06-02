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

## ⚠ Staleness guard — przeczytaj zanim renderujesz koperty

**Proza graczy żyje w draftach `.md`, nie w tych HTML-ach.** HTML w `src/` to ręcznie
przepisana warstwa renderu — **nic nie synchronizuje draft → HTML automatycznie**. Gdy
draft dostaje nową prozę (np. rewizja v2: 2. osoba + ramka `.mg-note`), a HTML jej nie
dostaje, `render.ps1` wyprodukowałby cicho **nieaktualny** PDF.

Dlatego każdy HTML z **starą** prozą nosi w treści linię-marker `RENDER-BLOCK`.
`render.ps1` skanuje markery **przed** odpaleniem przeglądarki i **przerywa** (exit 1),
wypisując listę nieaktualnych źródeł. To znaczy, że render się nie uda dopóki proza nie
zostanie przeniesiona do HTML.

**Jak odblokować plik:** przenieś bieżącą prozę draftu do HTML → **usuń** linię
`RENDER-BLOCK` z tego pliku. Markery **dodaj z powrotem**, jeśli później zrewidujesz prozę
draftu, a jeszcze jej nie przeniosłeś (guard to jednorazowe potwierdzenie, nie żywy detektor
dryfu — dyscyplina jest po stronie autora).

**Świadomy override:** `pwsh -File render.ps1 -Force` renderuje mimo markerów (głośny banner +
lista). Używaj tylko gdy naprawdę chcesz PDF ze starym tekstem.

Stan [2026-06-02]: **port prozy v2 wykonany** — wszystkie 7 kopert kurierskich (`wspolne-1-Z1,
miasto-2-Z2, miasto-2-Z2-slip, miasto-3-Z3, miasto-4-Z3b, miasto-5-Z4, miasto-6-Z7` — nazwy
zgodne z `envelopes/<frakcja>-<poz>-<zadanie>.md`) mają prozę v2 w HTML, markery RENDER-BLOCK
usunięte. `z7-przechwycony-list`
(= koperta K8) dostał ramę narracyjną v2 + ramkę `.mg-note` (sam dispatch + motto + cipher-body
nietknięte — load-bearing monospace). **Bez markerów:** `z3-pergamin-lista-tr`, `z3-z7-klucz-mg`
— dokumenty in-world (lista Zakonu / klucz MG), własne spece, render-zweryfikowane, bez ramy v2.

### Dom draftów (założenie — przenosiny w toku)

Kanoniczne drafty kopert **przenoszą się** z `prototype/*-envelope-draft.md` do
**`envelopes/`** (nazwy Z-numerowane). Przenosin **dokonuje osobny agent**. Guard tego
nie psuje: kluczuje po markerze w HTML (który przeżywa przenosiny), **nie** po ścieżkach draftów.
Po przenosinach traktuj `envelopes/` jako źródło prawdy przy porcie prozy. Spięte też w
`mechanics/koperty-mg.md` (blok założeń).

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
