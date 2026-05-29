# Faza 2B — Cztery zagadki asynchroniczne

**Status**: szkielet jest. Treści konkretnych zagadek 4-6 do rozpisania.

## Cel fazy (z perspektywy gracza)

Rozwiązać przynajmniej 2 z 4 zagadek (3, 4, 5, 6). Każda dorzuca fragment układanki o tym **kto rządzi miastem**, **kto stoi za buntem**, **jaką stronę warto wesprzeć**.

## Cel fazy (z perspektywy projektu)

- **Asynchroniczność** = grupy nie muszą się tłoczyć w jednym miejscu w tym samym czasie. Łatwiejsza logistyka.
- **Wielość ścieżek** = grupy mogą iść różną kolejnością → wymiana doświadczeń po grze + każda gra inaczej.
- **Decyzja gracza** które są obowiązkowe a które opcjonalne wpływa na **tempo gry** i **gęstość ujawnianych informacji**.
- **Etap weryfikacji**: gracze udowadniają lojalność/kompetencję poprzez rozwiązywanie zagadek.

## Lista zagadek

### Zagadka 3 — Zamek krzyżacki: lista nazwisk Tajnej Rady

- **Miejsce**: zewnątrz ruin zamku krzyżackiego (Przedzamcze, Gdanisko).
- **Mechanika**: zagadka terenowa (do rozpisania) → odpowiedź = wiedza że Zakon ma listę nazwisk członków TR.
- **Konsekwencja narracyjna**: gracz dowiaduje się, że można tę listę zdobyć (kradzież komturowi Albrechtowi, który jest na mieście jako NPC). Jeśli ją zdobędą — wiedzą do kogo dostarczyć list w finale.
- **NPC na mieście**: **komtur Albrecht** (postać aktorska) z listą przy sobie. Wymaga **odwrócenia uwagi** + **podebrania**.

Szczegóły: `puzzles/zamek-krzyzacki-lista.md`.

### Zagadka 4 — Perspektywa rzemieślnika (piekarza)

- **Miejsce**: do wyboru (gdzieś przy cechu piekarskim — wiki `cechy-rzemieslnicze.js`).
- **Mechanika (PAPIER, bez aktora)**: karta/świadectwo piekarza (skarga, cennik, notatka) + zagadka logiczna o cenach/wadze/towarach.
- **Konsekwencja narracyjna**: piekarz (jako rzemieślnik) daje **kontr-perspektywę** — bunt jest dla niego niesprzyjający (np. burzy handel, blokuje dostawy z zamku). Ujawnia że **nie wszyscy mieszczanie kibicują TR**.
- **Rola w finałowej decyzji**: gracz może uznać że TR działa nie zawsze "w interesie miasta" → opcja oddania listu krzyżakom staje się obronna.

### Zagadka 5 — Tajna Rada w siedzibach kupieckich

- **Miejsce**: powiązane z Piccolo / Dworem Artusa / kamienicą Bażyńskiego (Rynek Staromiejski 16).
- **Mechanika**: do rozpisania (znalezienie znaku, dekodowanie korespondencji).
- **Konsekwencja narracyjna**: gracz dowiaduje się że TR obraduje w lokalach kupieckich → wskazówka że w Piccolo jest członek TR (czyli Jordan!). Gracz może (ale nie musi) skleić Jordan = TR.

### Zagadka 6 — Związek Pruski działa w cieniu

- **Miejsce**: do wyboru — może powiązane z Aktem Wypowiedzenia / Ratuszem.
- **Mechanika**: do rozpisania.
- **Konsekwencja narracyjna**: gracz dowiaduje się o **szerszym kontekście politycznym** — Związek Pruski (nie tylko TR) stoi za buntem; jest sojusz z Polską. To uzasadnia akcję.

## 2 obowiązkowe + 2 opcjonalne — które?

**Decyzja Oskara**. Sugestia logiczna:

- **Obowiązkowe** (przy obu wymagana finałowa wiedza): **Z3** (lista nazwisk - prowadzi do Albrechta jako celu) i **Z5** (Jordan = TR - prowadzi do Bażyńskiego jako celu). Bez nich nie wiadomo do kogo dostarczyć list.
- **Opcjonalne** (poszerzają obraz, ale nie blokują): **Z4** (perspektywa rzemieślnika (piekarza)) i **Z6** (Związek Pruski) — dorzucają motyw etyczny i kontekst polityczny.

Alternatywa: obowiązkowe Z3 i Z6 (informacje o obu stronach), opcjonalne Z4 i Z5 (smaczki).

**Otwarte**: można też zrobić **wybór 2 z 4** zamiast "te są obowiązkowe" → wtedy każda grupa rozwiązuje inne, w finale wymieniają się wiedzą. Ryzyko: niektóre grupy mogą skończyć z luką informacyjną i nie wiedzieć do kogo dostarczyć.

## Mechanika "weryfikacji"

Faza 2B = etap obserwacji czy kurierzy są godni zaufania.
- Brak żywych obserwatorów (limit obsady) — weryfikacja idzie przez **papier + MG**: poprawność/dyskrecja rozwiązania raportowana do MG przy oddawaniu koperty (ew. obserwacja przez jednego z 2 aktorów tam, gdzie i tak są: Jordan/Piotr, Albrecht/Zosia).
- Jeśli grupa **wykonuje zagadkę dobrze + dyskretnie** = punkty zaufania.
- W finale punkty zaufania mogą wpływać na to czy list jest **przyjmowany** (przeciwnik wie że to przekręt).

**Otwarte**: czy punkty zaufania to **realna mechanika** (z liczbami) czy **fabularna** (MG decyduje na koniec)?

## Co już wiemy / decyzje

- Z3 wymaga **aktora grającego komtura Albrechta** na mieście — to **Zosia** (jeden z 2 dostępnych aktorów).
- Z3 i polichromie w Biedronce (patrz `puzzles/polichromie-biedronka.md`) - osobne czy powiązane?
  - Z opisu autora: polichromie to **weryfikacja krzyżaków** (zagadka dla **toru krzyżackiego**), nie dla TR. Czyli wchodzi w `concept/05-tor-krzyzakow.md`.

## Otwarte pytania

1. **Lista 4 zagadek dla TR jest finalna?** Czy może być więcej / inne tematy?
2. **Czy zagadki są wspólne dla obu klas, czy każda klasa ma swój zestaw 4?**
   - Wariant A: te same 4 zagadki, oba tory na nich pracują (różne wnioski).
   - Wariant B: każda klasa ma swój zestaw 4 (8 zagadek total) — więcej pracy do przygotowania.
3. ~~Komtur Albrecht jako NPC na mieście — kto go gra?~~ ROZSTRZYGNIĘTE: **Zosia**.
4. **Mechanika "podebrania listy"** — fizyczne czy abstrakcyjne (np. odgadnięcie hasła)? Komtur się broni? Co jeśli grupa zostanie złapana?
5. **Kolejność zagadek** — losowa, czy MG kieruje grupy żeby się nie tłoczyły?
6. **Czas trwania fazy 2B** — ~60-90 min na grupę?
