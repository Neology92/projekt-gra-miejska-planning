# Faza 2B — Zagadki asynchroniczne (dywersyfikowane)

**Status**: struktura przebudowana [2026-05-29] wg boardu Whimsical + ustaleń autora. Numeracja, dywersyfikacja i mechanika „klucza do finału" ustalone. Treści większości zagadek do rozpisania (kreatywka Oskara).

## Cel fazy

- **Asynchroniczność** — grupy nie tłoczą się w jednym miejscu; rozproszone po mieście.
- **Dywersyfikacja** — różne grupy rozwiązują różne zagadki → wymiana doświadczeń po grze + odciążenie współdzielonych rekwizytów.
- **Weryfikacja** — gracze udowadniają kompetencję/lojalność rozwiązywaniem zagadek (przez papier + MG).

## Model dywersyfikacji (10 grup = 5+5)

Każda grupa: **zagadka obowiązkowa (Z3 / Z3Z) → jedna zagadka opcjonalna → finał (Z7 / Z11)**.

### Tor mieszczan (5 grup)
| Zestaw | Zagadki | Liczba grup |
|---|---|---|
| A | Z3 + Z4 | 1 |
| B | Z3 + Z5 | 2 |
| C | Z3 + Z6 | 2 |

### Tor krzyżaków (5 grup)
| Zestaw | Zagadki | Liczba grup |
|---|---|---|
| A | Z3Z + Z8 | 2 |
| B | Z3Z + Z9 | 1 |
| C | Z3Z + Z10 | 2 |

*(Łącznie 10 grup; ostateczny przydział w dniu gry wg liczby zapisanych — patrz `mechanics/grupy-i-klasy.md`.)*

## Zagadki obowiązkowe — infiltracja siedziby przeciwnika

Rozdział torów następuje **zaraz po Z2**. Każda klasa infiltruje siedzibę strony przeciwnej.

### Z3 (mieszczanie) — Infiltracja zamku krzyżackiego
- Po spotkaniu z Jordanem (F2A, sojusznik) mieszczanie dostają zadanie: zdobyć **listę nazwisk TR**, którą ma Zakon.
- Lista jest przy **komturze Albrechcie** (aktor: **Zosia**) na mieście → odwrócenie uwagi + podebranie.
- Output: **klucz do finału Z7** + wiedza, że celem może być Albrecht.
- Plik: `puzzles/zamek-krzyzacki-lista.md`.

### Z3Z (krzyżacy) — Infiltracja Piccolo (siedziby TR)
- Lustrzany analog Z3: krzyżacy infiltrują **Piccolo** (siedziba TR, gdzie urzęduje Jordan/Piotr).
- Zadania: ukraść „zaopatrzenie" (w praktyce: odebrać kupony na obiad i je zjeść), **wyciągnąć od Jordana godzinę buntu (20:30)**, ew. ukraść rekwizyt (koło deszyfrujące? — do decyzji).
- Output: **klucz do finału Z11** + godzina finału.
- **Uwaga obsadowa**: ten sam Jordan/Piotr obsługuje oba tory; różnica to **framing w kopercie** (sojusznik ↔ cel infiltracji), nie osobny aktor.

## Zagadki opcjonalne (po jednej na grupę)

Mechaniki w większości do rozpisania (kreatywka Oskara). Tu zarys + rekwizyt + status.

### Tor mieszczan
- **Z4 — melodia flisaka** — rekwizyt: **kalimba** (odtworzenie/rozpoznanie melodii). Patrz `puzzles/kalimba.md`.
- **Z5 — sensoryczna z piernikiem** — rekwizyt: **pomoce sensoryczne** (zapach/smak/dotyk piernika). Opcjonalne tło do koperty: Związek Pruski wbrew rzemieślnikom / kontr-perspektywa piekarza (seed inwersji moralnej — patrz `lore/fakty-vs-fabula.md`).
- **Z6 — herby hanzeatyckie** — ul. Królowej Jadwigi (Aleja Gmerków Hanzeatyckich). Karta z 8 herbami/miastami → idź na aleję → znajdź 3, które faktycznie są w bruku/na latarniach → te 3 = klucz. Reszta to dystraktory (wiarygodne miasta Hanzy nieobecne na tej alei). Analogia mechaniczna: Z6 : herby = Z10 : polichromie. Patrz `puzzles/herby-aleja.md`.

### Tor krzyżaków (lustra)
- **Z8 — melodia zakonu** — rekwizyt: **kalimba** (lustro Z4).
- **Z9 — sensoryczna z piernikiem** — rekwizyt: **sensoryczne** (lustro Z5).
- **Z10 — polichromie w „Biedronce"** — znalezienie sylwetek potworów na polichromiach i wskazanie prawdziwych w **„Bestiariuszu Krzyżowca"** (lustro Z6). Patrz `puzzles/polichromie-biedronka.md`.

> **Uwaga:** dopiski z boardu („TR obraduje w Piccolo", „pogłębienie info o Radzie", „Związek Pruski wbrew rzemieślnikom") to **tylko sugestie tła fabularnego do kopert** po rozwiązaniu zagadek — nie mechanika. Realne mechaniki: Z4=melodia, Z5=sensoryczna, Z6=herby hanzeatyckie.

## Kluczowa mechanika: 2B → finał [zaktualizowane 2026-06-01]

Finałowy szyfr (Z7/Z11) = **klucz (motto Zakonu) + szyfrogram**. Rozdział źródeł:

- **Klucz = MOTTO Zakonu**, z zagadki **obowiązkowej** (Z3: wykradzione wraz z listą; Z3Z/krzyżacy: znane z przynależności). Wspólny dla wszystkich grup danego toru.
- **Szyfrogram = z jednej zagadki opcjonalnej** (Z4/Z5/Z6, Z8/Z9/Z10), **wydawany przez MG** przy oddaniu rozwiązania opcjonalnej. **Wymienialny** — każda opcjonalna daje (równoważny) szyfrogram.
  - **Framing fabularny [decyzja Oskara 2026-06-02]:** każda opcjonalna to **inna droga PRZECHWYCENIA tego samego krzyżackiego listu** (= szyfrogram Z7/Z11). Nie „nagroda za zagadkę z nikąd", lecz scena, w której grupa zdobywa przechwyconą dyspozycję. Po rozwiązaniu MG wydaje **uniwersalny** przechwycony list (K8) — treść method-agnostic, działa niezależnie którą opcjonalną grupa zrobiła. Z4 (prototyp): R.-flisak przejął dyspozycję na Wiśle i ukrył ją za melodią-kluczem → kod `621454` otwiera dostęp → MG wydaje list. Patrz `envelopes/miasto-5-Z4.md`, `prototype/z7-szyfrogram-draft.md`, `mechanics/koperty-mg.md §Zasada nadrzędna #2`.
- Finał rozwiązywalny z: **motto z Z3/Z3Z + szyfrogram z dowolnej 1 opcjonalnej** → różne zestawy per grupa działają.

> **Model:** Z3/Z3Z = klucz/nagłówek, opcjonalne = szyfrogram. Wymienialność zachowana, bo klucz jest wspólny. Pełny model + typ szyfru (**Cezar shift+7**, oba tory; porównanie nagłówków) → `concept/04-faza-3-final.md`, `puzzles/z7-szyfr-spec.md §0`.

To rozstrzyga wcześniejsze pytanie „które zagadki bramkują finał" (#9/#63): **Z3/Z3Z + 1 opcjonalna**.

## Ograniczenie rekwizytów (uzasadnienie dywersyfikacji)
- **Kalimba**: Z4 (1 grupa) + Z8 (2 grupy) = 3 grupy → wystarczy 1-2 egz.
- **Sensoryczne (pierniki)**: Z5 (2 grupy) + Z9 (1 grupa) = 3 grupy → 1-2 zestawy.
- Asynchroniczność rozkłada grupy w czasie → brak kolejek do współdzielonych rekwizytów (bottleneck rozwiązany przez dobór zestawów).

## Bonus opcjonalny — „Opowieść skazanego"
- Dla obu klas, **gdy grupa świetnie sobie radzi**. **Nie jest priorytetem** produkcyjnym (chcielibyśmy, ale nie musi być).
- Forma: puzzle z **trójkątów zapisanych dwustronnie**; dwa różne ułożenia tych samych elementów → dwie różne informacje do połączenia w całość.
- Charakter: **rozkminka moralno-etyczno-filozoficzna**, pogłębia historię. **Nie** daje kluczowych informacji do gry.

## Mechanika „weryfikacji"

Faza 2B = etap obserwacji czy kurierzy są godni zaufania.
- Brak żywych obserwatorów (limit obsady) — weryfikacja idzie przez **papier + MG**: poprawność/dyskrecja rozwiązania raportowana do MG przy oddawaniu koperty (ew. obserwacja przez jednego z 2 aktorów tam, gdzie i tak są: Jordan/Piotr, Albrecht/Zosia).
- Dobre + dyskretne rozwiązanie = punkty zaufania.
- **Otwarte**: czy punkty zaufania to realna mechanika (liczby) czy fabularna (MG decyduje na koniec)? Uwaga: finałowe liczenie jest **proste** (1 grupa = 1 głos), więc punkty zaufania nie ważą głosu — mogą najwyżej wpływać fabularnie na to, czy list jest „przyjmowany".

## Otwarte pytania
1. Mechaniki **Z4, Z5, Z6, Z8, Z9, Z10** — do rozpisania (kreatywka Oskara).
2. Co dokładnie jest „kluczem" wyjściowym z każdej zagadki (item fizyczny / hasło / fragment szyfru)? Czy wszystkie wymienialne 1:1?
3. Mechanika „podebrania listy" Albrechtowi (Z3) — fizyczna vs abstrakcyjna; co jeśli grupa zostanie złapana?
4. Czas trwania 2B na grupę (~60-90 min?).
5. **Z6 = herby hanzeatyckie** na Aleji Gmerków (ul. Królowej Jadwigi) — wymaga wizyty i spisu herbów w bruku/na latarniach. Patrz `puzzles/herby-aleja.md`.
