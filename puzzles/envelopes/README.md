# Koperty (envelopes/)

Jedno źródło prawdy o **fizycznych kopertach** wręczanych graczom: co ma być w środku, gotowy tekst (generowany na końcu, na bazie reszty dokumentów), kiedy wręczyć, kiedy NIE wręczyć.

> Koperty to **warstwa montażowa** nad zagadkami. Treść merytoryczna mieszka w `puzzles/<zagadka>.md`, `concept/*`, `mechanics/*`. Tutaj składamy ją w to, co gracz fizycznie dostaje do ręki. Gotowy tekst briefu powstaje **na końcu**, gdy reszta jest ustalona.

## Systematyka nazw

```
[frakcja]-[nr]-[nr_zad]                 ← gdy koperta identyczna dla wszystkich kolorów
[frakcja]-[kolor]-[nr]-[nr_zad]         ← gdy na danym etapie ścieżki się różnią
```

- **frakcja** — `miasto` (Tajna Rada / mieszczanie) lub `krzyzacy` (Zakon).
- **kolor** — identyfikator grupy (10 kolorów, `mechanics/grupy-i-klasy.md`). **Pomijany**, gdy koperta jest taka sama dla wszystkich grup danej frakcji. Dodawany (osobne pliki per kolor) **dopiero gdy pojawi się realna przesłanka, że ścieżki/treść różnią się na tym etapie**.
- **nr** — liczony od 1: numer kolejności koperty na ścieżce danej frakcji (+ koloru, jeśli rozdzielone).
- **nr_zad** — numer zadania przedstawionego w tej kopercie do wykonania (Z1, Z2, …). Może się rozjeżdżać z `nr`, bo ścieżki opcjonalne przeskakują numery zadań.

**Przykład (z polecenia):** `miasto-niebieski-4-Z5` = koperta czwarta na niebieskiej ścieżce, a zadanie w niej to Z5 (bo niebieska ścieżka biegnie Z3 → Z5 → Z7). Gdy ta sama koperta jest wspólna dla wszystkich kolorów mieszczan z zestawem Z5 → zapisujemy ją jako `miasto-4-Z5` (bez koloru).

## Struktura ścieżek (skąd biorą się nr i nr_zad)

Każda grupa: **Z1 → Z2 → (Z3/Z3Z obowiązkowa) → jedna opcjonalna → finał (Z7/Z11)**. Pozycje kopert:

| nr (pozycja) | miasto (TR) | krzyzacy (Zakon) |
|---|---|---|
| 1 | Z1 szlak symboli | Z1 szlak symboli |
| 2 | Z2 droga do Jordana | Z2 droga do Jordana |
| 3 | Z3 infiltracja zamku (obow.) | Z3Z infiltracja Piccolo (obow.) |
| 4 | **opcjonalna**: Z4 / Z5 / Z6 | **opcjonalna**: Z8 / Z9 / Z10 |
| 5 | Z7 finał | Z11 finał |

> Koperta pozycji 4 zależy od zestawu grupy (dywersyfikacja 5+5, `concept/03-faza-2b-asynchroniczne.md`). Dlatego na pozycji 4 `nr_zad` bywa różny (Z4/Z5/Z6 itd.), choć `nr`=4 dla wszystkich. Jeśli któryś etap **rozdzieli** treść między kolory → wtedy dopiero wchodzi `[kolor]`.
>
> Numeracja kopert wcześniej szkicowana w `mechanics/koperty-mg.md` (K1–KF) — ten folder ją **uszczegóławia i zastępuje** dla potrzeb produkcji.

## Mapa kopert

Legenda statusu: **wypełniona** (gotowy draft + meta) · **placeholder** (tylko wiersz, treść TBD).

### Wspólne (przed rozdziałem torów — pozycje 1–2)
| Plik | nr_zad | Status | Źródło treści |
|---|---|---|---|
| `wspolne-1-Z1.md` | Z1 | placeholder | `puzzles/szlak-symboli.md` |
| `wspolne-2-Z2.md` | Z2 | placeholder | `puzzles/droga-do-jordana.md` |

> Pozycje 1–2 są wspólne dla obu frakcji (klasa niejawna do Z2). Token frakcji `wspolne` do czasu rozdziału; jeśli starty się różnią per kolor (różne symbole startowe w mapie — `grupy-i-klasy.md`) → wtedy podział na kolory.

### Tor miasta (Tajna Rada)
| Plik | nr_zad | Status | Źródło treści |
|---|---|---|---|
| `miasto-3-Z3.md` | Z3 | placeholder | `puzzles/zamek-krzyzacki-lista.md` |
| `miasto-4-Z4.md` | Z4 | placeholder | `puzzles/kalimba.md` |
| **`miasto-4-Z5.md`** | Z5 | **wypełniona** | `puzzles/zagadka-sensoryczna.md` |
| `miasto-4-Z6.md` | Z6 | placeholder | `puzzles/zagadka-anioly.md` (do utworzenia) |
| `miasto-5-Z7.md` | Z7 | placeholder | `puzzles/zagadka-finalowa.md` (do utworzenia) |

### Tor krzyzacy (Zakon)
| Plik | nr_zad | Status | Źródło treści |
|---|---|---|---|
| `krzyzacy-3-Z3Z.md` | Z3Z | placeholder | `puzzles/zamek-krzyzacki-lista.md` (sekcja Z3Z) |
| `krzyzacy-4-Z8.md` | Z8 | placeholder | `puzzles/kalimba.md` |
| **`krzyzacy-4-Z9.md`** | Z9 | **wypełniona** | `puzzles/zagadka-sensoryczna.md` |
| `krzyzacy-4-Z10.md` | Z10 | placeholder | `puzzles/polichromie-biedronka.md` |
| `krzyzacy-5-Z11.md` | Z11 | placeholder | `puzzles/zagadka-finalowa.md` (do utworzenia) |

## Co zawiera plik koperty

Każdy plik trzyma **meta** (montaż) + **treść** (to, co fizycznie w środku):

- **Meta:** nazwa wg systematyki, frakcja, pozycja (nr), zadanie (nr_zad), zestawy/kolory których dotyczy, kiedy wręczyć (wyzwalacz), kiedy NIE wręczyć, co MG mówi przy wydaniu, dokąd odsyła.
- **Zawartość fizyczna:** brief narracyjny, cel, wskazówka, foreshadowing, „co po rozwiązaniu" — plus rekwizyty dołączane do koperty.
- **Gotowy tekst:** finalny tekst do druku (generowany na końcu z reszty). Dopóki TBD — odnośnik do źródła.

Wzorzec wypełnienia: `miasto-4-Z5.md`, `krzyzacy-4-Z9.md`.
