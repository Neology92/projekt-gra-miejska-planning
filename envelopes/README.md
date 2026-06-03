# Koperty (envelopes/)

Jedno źródło prawdy o **fizycznych kopertach** wręczanych graczom: co ma być w środku, gotowy tekst (EN), kiedy wręczyć, kiedy NIE wręczyć. Ten folder jest **spec + manifest montażowy** — z niego agent mechanicznie składa wydruk i agreguje go w koperty.

> Koperty to **warstwa montażowa** nad zagadkami. Treść merytoryczna mieszka w `puzzles/<zagadka>.md`, `concept/*`, `mechanics/*`. Tutaj składamy ją w to, co gracz fizycznie dostaje do ręki.
>
> **Indeks całego projektu:** `/index.md` (root). **Manifest ścieżki prototypu:** `todo/archive/envelope-map.md`.

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

### Dwie warstwy — źródło autorskie vs deliverable `public/`

System nazw żyje na **dwóch warstwach** (ROZSTRZYGNIĘTE 2026-06-03, decyzja Oskara):

| Warstwa | Co to | Klucz | Kolor w nazwie? |
|---|---|---|---|
| **Źródło autorskie** | `envelopes/*.md`, `prototype/print/src/*.html`, drafty meta | `[frakcja]-[nr][slot]-[Zx][-typ]` | **NIE** — jedno źródło per logiczna koperta (kolor identyczny w treści) |
| **Deliverable `public/*.pdf`** | gotowe wydruki do oprawienia w koperty | `[frakcja]-[kolor]-[nr][slot]-[Zx][-typ]` | **TAK — zawsze** — osobny plik per grupa = 1 plik ↔ 1 fizyczna koperta |

**Reguła generacji:** jedno źródło (`.html`) → generator pętli po kolorach frakcji → N plików `public/` (każdy ze swoim stemplem). Briefy współdzielone (np. `miasto-3-Z3`) renderują się 5× (5 grup TR) z identyczną treścią, różnym kolorem w nazwie i stemplu. To **świadomy** wybór: zero dwuznaczności przy pakowaniu („chwytam *zolty* do koperty G3"), kosztem near-duplikatów (patrz `public/_INSTRUKCJA-DRUKU.md`).

> **NIE rozbijać `.md`/`.html` na per-kolor.** Plik źródłowy zostaje jeden (join-key do meta-kartek; trio opc. Z4/Z5/Z6 dzieli pozycję 5). Mnożymy **tylko** output PDF.

### Klucz nazwy pliku `public/`

```
GRACZ (per grupa):  [frakcja]-[kolor]-[nr][slot]-[Zx][-typ]
                    np. miasto-zolty-3-Z3, wspolne-czerwony-1-Z1-mapa, miasto-czerwony-04b-Z3-pergamin
MG / aktor:         [adresat]-[Zx?]-[typ]   (BEZ koloru, BEZ stempla)
                    np. mg-Z3Z7-klucz, mg-karty-grup, aktor-jordan-quick-ref
```

- **frakcja / adresat (PREFIKS — zamknięty słownik).** Pierwszy token = adresat. Po samej nazwie wiadomo, dla kogo plik:
  | Prefiks | Adresat | Stempel? |
  |---|---|---|
  | `wspolne-` | gracz, Z1, wszystkie 10 grup (klasa niejawna) | tak |
  | `miasto-` | gracz, Tajna Rada (G1–G5) | tak |
  | `krzyzacy-` | gracz, Zakon (G6–G10) | tak |
  | `mg-` | Mistrz Gry (klucze, tracking, tablica) | nie |
  | `aktor-jordan-` | aktor Jordan / Piotr (handler TR) | nie |
  | `aktor-albrecht-` | aktor Albrecht / Zosia (handler KZ) | nie |
- **kolor** — identyfikator grupy, **zawsze ASCII bez diakrytyków** (filename-safe, cross-platform): `czerwony` `pomaranczowy` `zolty` `zielony` `turkusowy` (TR, G1–G5) · `niebieski` `fioletowy` `bialy` `brazowy` `czarny` (KZ, G6–G10). Mapa G→kolor: `mechanics/grupy-i-klasy.md` (G1 czerwony … G10 czarny).
- **nr** — **KOLEJNOŚĆ OTWIERANIA koperty** na ścieżce frakcji (NIE etap MG, NIE numer zadania). Liczona od 1. **Klucz łączący** brief, jego rekwizyty i stempel. W rekwizytach/stemplu 2-cyfrowo (`04`, `06`); briefy 1-cyfrowo (`nr ≤ 6`).
- **slot** — `a`/`b`/`c`: kilka kart w obrębie tej samej pozycji, w kolejności wręczania. `a` = pierwsze. Pomijany, gdy pozycja ma 1 kartę. Przykłady: `04a` koperta Z3b + `04b` pergamin-łup; `06a` szyfrogram + `06b` notatka finałowa.
- **Zx** — numer zadania (Z1, Z2…). Może się rozjeżdżać z `nr`.
- **typ (= opcjonalny „co to jest" na końcu — zatwierdzony przez Oskara 2026-06-03).** Brief nie ma typu (sam jest kopertą). Pozostałe niosą opis na końcu: `mapa` · `deszyfrownik` · `slip` · `pergamin` · `list` (szyfrogram) · `przepis` · `rozpiska` · `tabela-symbole` · `tabela-recta` · `audio` · `bestiariusz`. **Cały kod (frakcja-kolor-nr-Zx) musi wystąpić PRZED** opisem.

> **`nr` = kolejność otwierania, nie etap MG.** Przykład: na torze miasta `miasto-4-Z3b` jest otwierana **4.**, ale należy do **etapu Z3** (raport u MG wspólny z `miasto-3-Z3`). „Pozycja 4" ≠ „czwarty checkpoint MG".

### Co w nazwie kluczowe, co do pominięcia

| Token | Status | Czemu |
|---|---|---|
| `nr` (pozycja) | **KLUCZOWY** | klucz łączący kartę ↔ koperta ↔ stempel; bez niego nie wiadomo, gdzie karta trafia |
| `slot` (a/b/c) | **KLUCZOWY** (gdy >1 karta) | mówi, co leży razem w jednej pozycji i w jakiej kolejności |
| `frakcja` | **KLUCZOWY** | rozdziela tory miasto/krzyzacy (MVP) |
| `typ` | **KLUCZOWY** | co fizycznie drukować (papier pergaminowy? mapa A3?) |
| `kolor` | **KLUCZOWY** (w stemplu) | która drużyna; w nazwie pliku pomijany, gdy karta wspólna |
| `Zx` | warstwa autorska; **pomijany na warstwie gracza** | spoiler-neutralny montaż używa `nr`, nie `Zx` |
| opisy fabularne (`jordan`, `flisak`, `lista-tr`, `przechwycony`) | **DO POMINIĘCIA** | spoilują rozwiązanie; w montażu gracza nazwa neutralna |
| markery wersji/draftu (`-v2`, `-draft`) | **DO POMINIĘCIA** | wersja = git, nie nazwa pliku |

### Stempel produkcyjny (na każdym rekwizycie gracza)

Każda drukowana karta gracza nosi na prawym brzegu **pionowy, blady, drobny stempel** — `[litera-frakcji][NN]-[kolor]`, np. **`m06-czerwony`** (`w`=wspólne, `m`=miasto, `k`=krzyzacy). Mówi, **do której koperty (nr) i jakiego koloru drużyny** karta należy → szybkie sortowanie luźnych wydruków. Celowo trudno-odczytywalny (nie konkuruje z treścią, nie pomaga graczowi).

- Stempel = warstwa renderu: HTML nosi placeholder `__STAMP__`, `render.ps1 -Color <kolor>` podmienia przy druku (`prototype/print/parchment.css §edge-stamp`). Pozycja+frakcja są stałe per plik (mapa `$stampPrefix` w `render.ps1`); kolor to parametr.
- Stały dla wariantów opcjonalnych: koperta 05 = `m05` niezależnie czy w środku Z4/Z5/Z6.
- **Dokumenty MG nie mają stempla** (`mg-Z3Z7-klucz` — nie trafia do koperty gracza).
- 10 kolorów (`mechanics/grupy-i-klasy.md`): G1 czerwony · G2 pomaranczowy · G3 zolty · G4 zielony · G5 turkusowy · G6 niebieski · G7 fioletowy · G8 bialy · G9 brazowy · G10 czarny.

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
| 4 | `krzyzacy-4-Z8.md` / `krzyzacy-4-Z9.md` / `krzyzacy-4-Z10.md` *(wszystkie wypełnione)* | Z8/Z9/Z10 draft |
| 5 | `krzyzacy-5-Z11.md` | **draft [2026-06-03]** (szyfrogram=motto + brama Albrechta) |

## Montaż fizyczny — karta → koperta → etykieta (prototyp, tor miasta, 1 kolor)

> **Szybka weryfikacja przy pakowaniu:** co włożyć do której zaklejonej koperty (z czym razem) i jak ją podpisać z zewnątrz. **Źródło wykonawcze = `prototype/print/assemble-prototype-bundle.ps1` `$playerMap`** (kod, nie ta tabela — tabela ją lustrzy; przy rozbieżności wygrywa `$playerMap`). Pliki `public/<nazwa>.pdf`; folder montażowy `public/prototyp-druk/gracz/` nadaje nazwy neutralne (bez spoilerów).

| Koperta (etykieta z zewnątrz) | Karty w środku — `public/…pdf` | Nazwa w `gracz/` | Stempel | Kiedy/uwaga |
|---|---|---|---|---|
| **❶ wspólna** | `wspolne-1-Z1.pdf` + `maps/map.pdf` + `decoders/decoder-G1.pdf` | `01a_koperta`, `01b_mapa`, `01c_deszyfrownik` | `w01-czerwony` | start; + opaska koloru + zapieczętowany list |
| **❷ miasto** | `miasto-2-Z2.pdf` + `miasto-2-Z2-slip.pdf` | `02a_koperta`, `02b_kartka` | `m02-czerwony` | po Z1 (slip „— R.") |
| **❸ miasto** | `miasto-3-Z3.pdf` | `03_koperta` | `m03-czerwony` | wręcza Jordan (zlecenie zwiadu) |
| **❹ miasto** | `miasto-4-Z3b.pdf` + `miasto-04b-Z3-pergamin.pdf` | `04a_koperta`, `04b_pergamin` | `m04-czerwony` | Z3b: Albrecht wręcza kopertę, pergamin = łup kradzieży |
| **❺ miasto** | `miasto-5-Z4.pdf` *(opc.; lub Z5/Z6)* | `05_koperta` | `m05-czerwony` | opcjonalna; w MVP wymienna na Z5/Z6 |
| **❻ miasto** | `miasto-06a-Z7-list.pdf` → potem `miasto-6-Z7.pdf` | `06a_list`, `06b_koperta` | `m06-czerwony` | 06a rozwiązują (szyfr), 06b po weryfikacji u MG |
| *(MG, NIE koperta gracza)* | `mg-Z3Z7-klucz.pdf` | `mg-tylko/klucz-Z3-Z7` | *(brak)* | klucz odpowiedzi — torba MG |

> **Etykieta koperty** = duży `nr` (np. „❻") + nazwa frakcji + kolor drużyny (np. „miasto · czerwony"). Spoiler-neutralna: nie pisz `Zx` ani treści fabularnej na zewnątrz. Pozycja ❻ = dwie koperty fizyczne (06a, 06b) wręczane w dwóch momentach jednego etapu Z7.

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
| `miasto-5-Z6.md` | draft [2026-06-03] | `puzzles/herby-aleja.md` (mechanika Piotra: dopasowanie herbów + eliminacja) |
| `miasto-6-Z7.md` | draft (migr. z `prototype/kF`) | `concept/04-faza-3-final.md`, `z7-szyfr-spec.md` |
| `krzyzacy-2-Z2.md` | pending | — |
| `krzyzacy-3-Z3Z.md` | placeholder | `zamek-krzyzacki-lista.md §Z3Z` |
| `krzyzacy-4-Z8.md` | placeholder | `puzzles/kalimba.md` |
| `krzyzacy-4-Z9.md` | draft | `puzzles/zagadka-sensoryczna.md` |
| `krzyzacy-4-Z10.md` | draft [2026-06-03] | `puzzles/polichromie-biedronka.md` |
| `krzyzacy-5-Z11.md` | draft [2026-06-03] | `concept/04-faza-3-final.md`, `puzzles/z11-szyfr-spec.md` (szyfrogram=motto + brama Albrechta) |

## Co zawiera plik koperty

- **`> Migracja z:`** (jeśli dotyczy) — skąd przeniesiony.
- **`## Meta — montaż`** — frakcja, pozycja (nr otwierania), zadanie, wkładki, rekwizyty, wyzwalacz, kiedy NIE wręczać, co MG mówi, dokąd odsyła.
- **`## Gotowy tekst (EN)`** — finalny tekst do druku (player-facing, angielski).
- **`## Notatki planistyczne`** — decyzje, klamry, pokrycie w wiki.
- **`## Rewizja`** — niewprowadzone uwagi Oskara (materiał porównawczy; tekst wyżej nietknięty do akceptacji).

Wzorzec wypełnienia: `miasto-5-Z5.md`, `krzyzacy-4-Z9.md` (oraz świeże migracje `miasto-2-Z2.md` … `miasto-6-Z7.md`).

## Lustra (kartki autorskie)

Każda koperta ma lustrzaną **kartkę meta** (historyczna ciekawostka „od autora") w `prototype/meta-cards/` (player-facing EN) + surowiec w `lore/meta-kartki/`. **Join-key = ta sama nazwa** `[frakcja]-[nr]-[Zx]` w trzech folderach. Reguła bramkowania spoilerów: kartkę pozycji N otwiera się, gdy gracz ma już kopertę N+1 (`prototype/meta-cards/README.md`).
