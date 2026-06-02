# Kartki autorskie — surowiec per koperta

**Status**: 🟢 w budowie [2026-06-02]. Realizacja zadania-akumulatora z `lore/meta-kartki-autorskie.md` (Oskar aktywował 2026-06-02).

## Co to jest

Jeden plik = jedna fizyczna koperta (nazwy lustrzane do `envelopes/`). Każdy plik to **draft kartki autorskiej** (meta-dodatek „od autora", czytany *obok* rozgrywki), który dla danej koperty rozdziela:

- **FAKT** — co naprawdę się wydarzyło / istniało (pokrycie w wiki, tag `--rubrum`).
- **LEGENDA** — co jest podaniem/legendą (wiki `--legenda`).
- **SPORNE** — kwestie dyskutowane przez historyków (wiki `--disputed`).
- **FABUŁA / WYMYSŁ AUTORA** — czysta fikcja gry (brak w źródłach, świadoma naginka — patrz `lore/fakty-vs-fabula.md`).
- **ANACHRONIZM** — element istnieje, ale nie w 1454 (wiki `warstwa-anachronizmy.js`); w grze użyty mimo to (np. jako haczyk nawigacyjny).
- **CIEKAWOSTKA** — kontekst poszerzający, „dlaczego to miejsce/postać jest ciekawa".

## Konwencja źródeł

Każda pozycja w miarę możliwości **cytuje wiki**: `(wiki: nazwa-strony.js)` + krótki cytat/parafraza z zachowanym tagiem. To realizuje brief „odwołania do pierwotnych założeń projektu" (`lore/meta-kartki-autorskie.md`).

## Zakres draftu (czego NIE rozstrzygamy tu)

- **Tylko treść.** Forma fizyczna kartki, kiedy uczestnik ją czyta, typografia rejestru „spoza gry", kwestia zwrotu/zabrania — to decyzje Oskara, oznaczone „PÓŹNIEJ" w `lore/meta-kartki-autorskie.md`. Nie rozwiązujemy ich.
- **Język**: draft po polsku (jak cały akumulator). Finalna forma player-facing + ew. tłumaczenie = późniejsza decyzja (player materials = ENG, ale to kartka „od autora" — status do ustalenia).
- **⚠ SPOILER**: część kart zdradza twisty (Jordan = Bażyński). Karty oznaczone, do fizycznego oddzielenia przy produkcji.

## Mapa kart (lustrzana do `envelopes/`)

> **Numeracja = kolejność otwierania koperty** (`envelopes/README.md`). ⚠ **Tory mają różną długość:** miasto = 6 pozycji (wstawka Z3b na poz. 4 — bez własnej kartki, obejmuje ją etap Z3), krzyzacy = 5. Opcjonalne: miasto poz. **5**, krzyzacy poz. **4**.

| Plik | Koperta | Zadanie | Rdzeń meta |
|---|---|---|---|
| `wspolne-1-Z1.md` | poz. 1 | Z1 szlak symboli | miejsca starówki (część anachroniczna jako haczyk) |
| `miasto-2-Z2.md` | poz. 2 | Z2 droga do Jordana | Jordan (legenda), Piccolo (anachr.), Bażyński (treść neutralna — baza dla `krzyzacy-2-Z2` na MVP) |
| `miasto-3-Z3.md` | poz. 3 TR | Z3 infiltracja zamku | zamek krzyżacki, lista TR (naginka), donosiciele |
| `krzyzacy-3-Z3Z.md` | poz. 3 Zakon | Z3Z infiltracja Piccolo | lustro Z3 od strony Zakonu |
| `miasto-5-Z4.md` | poz. 5 TR | Z4 melodia flisaka | kalimba (anachr.), flisak (legenda), kod 6·II·1454 |
| `krzyzacy-4-Z8.md` | poz. 4 Zakon | Z8 melodia zakonu | lustro Z4 (ta sama kalimba/kod) |
| `miasto-5-Z5.md` | poz. 5 TR | Z5 sensoryczna piernik | pierniki, cechy, kontr-perspektywa piekarza |
| `krzyzacy-4-Z9.md` | poz. 4 Zakon | Z9 sensoryczna | lustro Z5 |
| `miasto-5-Z6.md` | poz. 5 TR | Z6 herby Aleji Gmerków | gmerki, Hanza, patrycjat |
| `krzyzacy-4-Z10.md` | poz. 4 Zakon | Z10 polichromie | polichromie, bestiariusz |
| `miasto-6-Z7.md` | poz. 6 TR | Z7 finał — szyfr | twist Jordan=Bażyński, szyfr Cezara, dzwon |
| `krzyzacy-5-Z11.md` | poz. 5 Zakon | Z11 finał — szyfr | lustro Z7 od strony Zakonu |

## Powiązane

`lore/meta-kartki-autorskie.md` (brief + akumulator) · `lore/fakty-vs-fabula.md` (rejestr naginek) · `envelopes/` (fizyczne koperty) · wiki `projekt_gra-miejska/src/pages/`.
