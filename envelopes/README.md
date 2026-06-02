# Koperty (envelopes/)

Jedno źródło prawdy o **fizycznych kopertach** wręczanych graczom: co ma być w środku, gotowy tekst (EN), kiedy wręczyć, kiedy NIE wręczyć. Ten folder jest **spec + manifest montażowy** — z niego agent mechanicznie składa wydruk i agreguje go w koperty.

> Koperty to **warstwa montażowa** nad zagadkami. Treść merytoryczna mieszka w `puzzles/<zagadka>.md`, `concept/*`, `mechanics/*`. Tutaj składamy ją w to, co gracz fizycznie dostaje do ręki.
>
> **Indeks całego projektu:** `/index.md` (root). **Manifest ścieżki prototypu:** `prototype/envelope-map.md`.

---

## Model koperty: BRIEF + WKŁADKI + REKWIZYTY

Każda fizyczna koperta = trzy warstwy, które różnicują się na **różnych osiach**:

| Warstwa | Co to | Na jakiej osi się różni |
|---|---|---|
| **BRIEF** | tekst narracyjny (to, co gracz czyta) | **frakcja** (od pozycji 2) — patrz oś 2 |
| **WKŁADKI** | mapa, deszyfrownik, glify nawigacyjne | **kolor grupy** (pozycja 1; nawigacja w 2) — patrz oś 1 |
| **REKWIZYTY** | zapieczętowany list, instrument, słoje, opaska… | per zadanie (stałe dla wszystkich grup robiących to zadanie) |

## Trzy osie rozbieżności (FUNDAMENT — czytaj przed edycją)

```
OŚ 1 — KOLOR (10 grup):  różnicuje WKŁADKĘ (mapa + deszyfrownik), NIE brief.
                          Dotyczy pozycji 1 (Z1) + nawigacji w pozycji 2 (glify §D).
OŚ 2 — FRAKCJA (2):      różnicuje BRIEF od pozycji 2 (Z2) wzwyż. miasto / krzyzacy.
OŚ 3 — ZESTAW OPC. (A/B/C): różnicuje zagadkę opcjonalną (Z4/Z5/Z6 miasto · Z8/Z9/Z10 krzyzacy).
```

**Konsekwencja dla Z1:** brief Z1 jest **globalny** (celowo identyczny — ukrywa klasę, `mechanics/grupy-i-klasy.md §34`). Mapa = **jedna wspólna** (`public/maps/map.png`). Deszyfrownik różni się per kolor/ścieżka — 10 wariantów w `puzzles/z1-10-sciezek.md`. Plik `wspolne-1-Z1.md` tylko je **wskazuje**.

## Systematyka nazw

```
[frakcja]-[nr]-[Zx]                 ← gdy koperta identyczna dla wszystkich kolorów frakcji
[frakcja]-[kolor]-[nr]-[Zx]         ← gdy na danym etapie WKŁADKA/treść różni się per kolor
```

- **frakcja** — `wspolne` (tylko Z1, klasa niejawna) · `miasto` (Tajna Rada) · `krzyzacy` (Zakon).
- **kolor** — identyfikator grupy (10 kolorów, `mechanics/grupy-i-klasy.md`). **Pomijany**, gdy koperta jest taka sama dla wszystkich grup frakcji. Dodawany (osobne pliki per kolor) **dopiero gdy treść/wkładka różni się na tym etapie**.
- **nr** — **KOLEJNOŚĆ OTWIERANIA koperty** na ścieżce frakcji (NIE etap MG, NIE numer zadania). Liczona od 1.
- **Zx** — numer zadania w tej kopercie (Z1, Z2…). Może się rozjeżdżać z `nr`.

> **`nr` = kolejność otwierania, nie etap MG.** Przykład: na torze miasta `miasto-4-Z3b` jest otwierana **4.**, ale należy do **etapu Z3** (raport u MG wspólny z `miasto-3-Z3`). „Pozycja 4" ≠ „czwarty checkpoint MG".

## Struktura ścieżek (skąd biorą się nr)

Każda grupa: **Z1 → Z2 → (Z3/Z3Z obowiązkowa) → opcjonalna → finał**. ⚠ **Tory mają RÓŻNĄ długość** (asymetria — patrz nota niżej):

| nr (otwieranie) | miasto (TR) — **6 pozycji** | krzyzacy (Zakon) — **5 pozycji** |
|---|---|---|
| 1 | Z1 szlak symboli | Z1 szlak symboli |
| 2 | Z2 droga do Jordana | Z2 (→ Albrecht) |
| 3 | Z3 infiltracja zamku (zlecenie zwiadu) | Z3Z infiltracja Piccolo |
| 4 | **Z3b** rozkaz kradzieży (2. koperta etapu Z3) | **opcjonalna**: Z8 / Z9 / Z10 |
| 5 | **opcjonalna**: Z4 / Z5 / Z6 | Z11 finał |
| 6 | Z7 finał | — |

## ⚠ Dwie noty obowiązkowe (NIE „naprawiać")

1. **Z3b to druga koperta etapu Z3, nie osobny checkpoint MG.** Etap Z3 produkuje 2 koperty: `miasto-3-Z3` (zlecenie zwiadu, wręcza Jordan) + `miasto-4-Z3b` (rozkaz kradzieży, wręcza Albrecht w trakcie spotkania). Raport u MG wspólny.
2. **Asymetria torów jest zamierzona.** miasto = 6 pozycji (ze wstawką Z3b), krzyzacy = 5 (brak lustra Z3b). Agent NIE ma „wyrównywać" krzyżaków do 6. Czy MVP krzyżaków dostanie analog Z3b = osobna decyzja (otwarta).

## Manifest montażowy (rdzeń seryjnej generacji)

Wiersz = pozycja otwierania · kolumny = `plik-briefu | wkładki | rekwizyty`. **Prototyp = jedna instancja** (1 kolor, frakcja miasto, opcja Z4). MVP rozwija każdą komórkę do 10 kolorów × 2 frakcje × zestawy A/B/C.

### Tor miasta (prototyp — instancja: 1 kolor, opcja Z4)
| nr | Brief (plik) | Wkładki | Rekwizyty |
|---|---|---|---|
| 1 | `wspolne-1-Z1.md` | mapa+deszyfrownik per kolor (`z1-10-sciezek.md`) | zapieczętowany list, opaska koloru |
| 2 | `miasto-2-Z2.md` | slip „— R."; glify nawigacyjne (§D) | — |
| 3 | `miasto-3-Z3.md` | — | — |
| 4 | `miasto-4-Z3b.md` | — | (lista TR jako łup — `z3-lista-tr-spec.md`) |
| 5 | `miasto-5-Z4.md` *(opc. A)* / `miasto-5-Z5.md` *(B)* / `miasto-5-Z6.md` *(C)* | — | instrument/kalimba (Z4); słoje+pierniki (Z5); karta herbów (Z6) |
| 6 | `miasto-6-Z7.md` | — | zapieczętowany list (oddawany w finale) |

### Tor krzyzacy (MVP — większość pending)
| nr | Brief (plik) | Status |
|---|---|---|
| 1 | `wspolne-1-Z1.md` | wspólny z miastem |
| 2 | `krzyzacy-2-Z2.md` | **pending** (→ Albrecht, Pula B) |
| 3 | `krzyzacy-3-Z3Z.md` | pending |
| 4 | `krzyzacy-4-Z8.md` / `krzyzacy-4-Z9.md` *(wypełniona)* / `krzyzacy-4-Z10.md` | Z9 draft, reszta pending |
| 5 | `krzyzacy-5-Z11.md` | pending |

## Mapa plików (stan)

Legenda: **draft** (pełny tekst EN + meta) · **placeholder** (tylko wiersz, treść TBD) · **pending** (do napisania na MVP).

| Plik | Status | Źródło treści |
|---|---|---|
| `wspolne-1-Z1.md` | draft (migr. z `prototype/k1`) | `puzzles/szlak-symboli.md`, `z1-10-sciezek.md` |
| `miasto-2-Z2.md` | draft (migr. z `prototype/k2`) | `puzzles/droga-do-jordana.md` |
| `miasto-3-Z3.md` | draft (migr. z `prototype/k3`) | `puzzles/zamek-krzyzacki-lista.md` |
| `miasto-4-Z3b.md` | draft (migr. z `prototype/kZ3b`) | `puzzles/zamek-krzyzacki-lista.md` (Z3 pkt 3–4) |
| `miasto-5-Z4.md` | draft (migr. z `prototype/kZ4`) | `puzzles/kalimba.md` |
| `miasto-5-Z5.md` | draft | `puzzles/zagadka-sensoryczna.md` |
| `miasto-5-Z6.md` | placeholder | `puzzles/herby-aleja.md` |
| `miasto-6-Z7.md` | draft (migr. z `prototype/kF`) | `concept/04-faza-3-final.md`, `z7-szyfr-spec.md` |
| `krzyzacy-2-Z2.md` | pending | — |
| `krzyzacy-3-Z3Z.md` | placeholder | `zamek-krzyzacki-lista.md §Z3Z` |
| `krzyzacy-4-Z8.md` | placeholder | `puzzles/kalimba.md` |
| `krzyzacy-4-Z9.md` | draft | `puzzles/zagadka-sensoryczna.md` |
| `krzyzacy-4-Z10.md` | placeholder | `puzzles/polichromie-biedronka.md` |
| `krzyzacy-5-Z11.md` | placeholder | `concept/04-faza-3-final.md` |

## Co zawiera plik koperty

- **`> Migracja z:`** (jeśli dotyczy) — skąd przeniesiony.
- **`## Meta — montaż`** — frakcja, pozycja (nr otwierania), zadanie, wkładki, rekwizyty, wyzwalacz, kiedy NIE wręczać, co MG mówi, dokąd odsyła.
- **`## Gotowy tekst (EN)`** — finalny tekst do druku (player-facing, angielski).
- **`## Notatki planistyczne`** — decyzje, klamry, pokrycie w wiki.
- **`## Rewizja`** — niewprowadzone uwagi Oskara (materiał porównawczy; tekst wyżej nietknięty do akceptacji).

Wzorzec wypełnienia: `miasto-5-Z5.md`, `krzyzacy-4-Z9.md` (oraz świeże migracje `miasto-2-Z2.md` … `miasto-6-Z7.md`).

## Lustra (kartki autorskie)

Każda koperta ma lustrzaną **kartkę meta** (historyczna ciekawostka „od autora") w `prototype/meta-cards/` (player-facing EN) + surowiec w `lore/meta-kartki/`. **Join-key = ta sama nazwa** `[frakcja]-[nr]-[Zx]` w trzech folderach. Reguła bramkowania spoilerów: kartkę pozycji N otwiera się, gdy gracz ma już kopertę N+1 (`prototype/meta-cards/README.md`).
