# envelope-map — manifest kopert ścieżki prototypu

> **Co to:** mapa, na których plikach operować przy kopertach prototypu. Prototyp testuje **JEDNĄ ścieżkę z wielu** w MVP: **frakcja miasto (Tajna Rada), 1 kolor grupy, zagadka opcjonalna = Z4 (melodia flisaka).**
>
> **Źródło prawdy spec/montażu:** `envelopes/`. Ten plik jest skrótem nawigacyjnym + zapisem migracji.

## Migracja [2026-06-02]: stare `prototype/k*.md` → `envelopes/*`

Drafty kopert **przeniesione** z `prototype/k*.md` do kanonicznego `envelopes/`. Stare pliki usunięte (treść w git history). Numeracja `nr` = **kolejność otwierania** (wstawka Z3b przesunęła opcjonalną na 5 i finał na 6).

| Stara nazwa (`prototype/`) | Nowa nazwa (`envelopes/`) | nr | Zadanie |
|---|---|---|---|
| `k1-envelope-draft.md` | `wspolne-1-Z1.md` | 1 | Z1 — szlak symboli |
| `k2-envelope-draft.md` | `miasto-2-Z2.md` | 2 | Z2 — droga do Jordana |
| `k3-envelope-draft.md` | `miasto-3-Z3.md` | 3 | Z3 — infiltracja (zlecenie zwiadu) |
| `kZ3b-envelope-draft.md` | `miasto-4-Z3b.md` | 4 | Z3 — rozkaz kradzieży (2. koperta etapu Z3) |
| `kZ4-envelope-draft.md` | `miasto-5-Z4.md` | 5 | Z4 — melodia flisaka (opcjonalna) |
| `kF-envelope-draft.md` | `miasto-6-Z7.md` | 6 | Z7 — finał |

## Ścieżka prototypu (kolejność otwierania)

```
1  wspolne-1-Z1   (brief globalny; wkładka mapa+szyfr per kolor)
2  miasto-2-Z2    (brief frakcyjny miasto; slip „— R.")
3  miasto-3-Z3    (Jordan zleca zwiad)        ┐ etap Z3
4  miasto-4-Z3b   (Albrecht — rozkaz kradzieży)┘ (jeden raport u MG)
5  miasto-5-Z4    (opcjonalna: melodia flisaka → szyfrogram)
6  miasto-6-Z7    (finał: Przedzamcze, oddanie listu)
```

## Lustra tej ścieżki (kartki autorskie)

Te same nazwy w:
- `prototype/meta-cards/` — kartka „od autora" (player-facing EN), dołączana do koperty.
- `lore/meta-kartki/` — surowiec (źródła, cytaty wiki).

Stan po renumeracji: `wspolne-1-Z1`, `miasto-2-Z2`, `miasto-3-Z3`, `miasto-5-Z4`, `miasto-5-Z5`, `miasto-5-Z6`, `miasto-6-Z7` (+ krzyżackie bez zmian). Uwaga: brak kartki dla `miasto-4-Z3b` (pozycja 4) — kartka etapu Z3 obejmuje `miasto-3-Z3`; osobna kartka Z3b = ewentualnie później.

## Inne artefakty prototypu (nie-koperty)

| Plik | Co to |
|---|---|
| `prototype/jordan-actor-script-draft.md` | skrypt aktora Jordan (Piotr), F2A |
| `prototype/albrecht-actor-card-draft.md` | karta aktora Albrecht (Zosia), Z3 |
| `prototype/z7-szyfrogram-draft.md` | przechwycony list / szyfrogram finałowy |
| `prototype/pergamin-lista-tr-draft.md` | lista TR (łup Z3) |
| `prototype/mg-runsheet.md`, `mg-tracking-sheet.md` | arkusze MG |
| `public/maps/` | rendery map nawigacyjnych (główne narzędzie gry) |
| `prototype/icons/` | ikony detali Z1 (SVG) |
