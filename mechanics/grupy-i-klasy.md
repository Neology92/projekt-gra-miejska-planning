# Mechanika - grupy i klasy

## Skala gry — ROZSTRZYGNIĘTE [2026-05-29]

- **10 grup × ~4 osoby = ~40 graczy**, podział **5+5**. Ostateczna liczba ustalana **w dniu gry**.

## Podział na klasy

- **Tajna Rada (TR)**: 5 grup
- **Krzyżacy**: 5 grup
- **Podział losowy** lub **świadomy**?
  - Losowy: szybciej, mniej kontroli.
  - Świadomy: można zbalansować doświadczenie (mieszać "ekspertów" i "noviciuszy").

## Dywersyfikacja zestawów w F2B

W obrębie każdej klasy różne grupy dostają różne zagadki opcjonalne (rozproszenie po mieście + odciążenie rekwizytów):
- **TR (5):** wszyscy Z3 + {1×Z4, 2×Z5, 2×Z6}.
- **Krzyżacy (5):** wszyscy Z3Z + {2×Z8, 1×Z9, 2×Z10}.

Tabele i mechanika „klucza do finału" — `concept/03-faza-2b-asynchroniczne.md`.

## Klasy niejawne na starcie

- **Wszyscy myślą że są tym samym** - kurierami.
- Klasa ujawnia się **stopniowo**:
  - F1: nic (wszyscy widzą się jako kurierzy).
  - F2A: dla TR, Jordan wprowadza w fabułę mieszczan; dla krzyżaków — spotkanie z Jordanem to **infiltracja (Z3Z)**, nie sojusz (patrz `concept/05-tor-krzyzakow.md`).
  - F2B: różne zagadki, różne perspektywy → grupy zaczynają rozumieć "po której stronie są".
  - F3: ujawnione w pełni (decyzja "do kogo dostarczyć list").

## Jak grupy NIE odkrywają że klasy istnieją (w F1)?

- **Te same materiały startowe** (mapa, list, brief) wyglądają tak samo.
- **Pierwsze wskazówki różne** (różne symbole startowe w mapie), ale grupy nie wiedzą że inni mają inne.
- **Spotkania w terenie** - grupy mogą się mijać, ale nie wymieniają informacji (są w "trybie konspiracji").

## Tworzenie grup (przed grą)

- **Forma zapisu**: formularz Google? Telegram?
- **Skład**: znajomi się zapisują razem? Czy autor miesza losowo?
- **Wymagania**: wiek, kondycja (gra to kilka godzin chodzenia), telefon (komunikacja awaryjna).

## Identyfikatory grup — ROZSTRZYGNIĘTE [2026-05-31]: KOLORY

Każda grupa = **jeden kolor** (opaska/szarfa). 10 kolorów dobranych pod **maksymalną rozróżnialność z dystansu**; **przydział do klas losowy** — kolor NIE zdradza TR vs krzyżacy.

| # | Kolor | Hex |
|---|---|---|
| 1 | Czerwony | `#E6194B` |
| 2 | Pomarańczowy | `#F58231` |
| 3 | Żółty | `#FFE119` |
| 4 | Zielony | `#3CB44B` |
| 5 | Turkusowy | `#42D4F4` |
| 6 | Niebieski | `#4363D8` |
| 7 | Fioletowy | `#911EB4` |
| 8 | Biały | `#FFFFFF` |
| 9 | Brązowy | `#9A6324` |
| 10 | Czarny | `#2B2B2B` |

Hex przydatny przy druku opasek i identyfikacji u MG (arkusz śledzenia per kolor). **Prototyp:** 1 grupa = 1 kolor.

### Deterministyczne przypisanie kolor ↔ ścieżka Z1 — ROZSTRZYGNIĘTE [2026-06-02]

Numer w tabeli = numer ścieżki Z1: **kolor `n` → ścieżka `Gn`** (Czerwony→G1, Pomarańczowy→G2, … Czarny→G10). Przypisanie jest **stałe** (nie losowe) — dzięki temu karty per grupa (mapa wspólna + **deszyfrownik** w kolorze narożnika) drukuje się raz, a „grupa niebieska" zawsze idzie ścieżką G6. **Co pozostaje losowe:** przydział koloru do **klasy** (TR vs krzyżacy) — kolor/ścieżka nie zdradza strony. Deszyfrownik (`tools/z1-decoder/`) nosi ten kolor w narożniku zamiast etykiety tekstowej; źródło hex = ta tabela (kopia robocza: `tools/z1-decoder/group-colors.js`).

**Forma fizyczna opaski:** pasek papieru sklejony w bransoletkę — **nosi tylko lider grupy**. Reszta drużyny nie musi mieć identyfikatora; MG identyfikuje grupę po opasce lidera.

**Produkcja (self-made):**
- 1 arkusz A4 z 10 kolorowymi paskami → druk + wycięcie nożyczkami
- Na końcu każdego paska kawałek taśmy samoprzylepnej; **zewnętrzna strona taśmy zabezpieczona** (np. papierek silikonowy lub złożona taśma) → można wrzucić do koperty startowej bez ryzyka sklejenia
- W **K1 (kopercie startowej)** dołączona krótka instrukcja: *lider zakłada opaskę i nosi do końca gry*

## Brief klas - kiedy ujawnia się? — ROZSTRZYGNIĘTE [2026-05-29]

**Klasa ujawnia się po rozwiązaniu Z2.**

- Już z **plotek (F1)** gracze powinni wychwycić, że w mieście jest spór: **Zakon Krzyżacki vs Tajna Rada Związku Pruskiego**.
- **Po Z2** gracz dowiaduje się, po której stronie jest **odbiorca jego listu** → dla kogo pracuje (TR czy Zakon).
- **Spotkanie Albrechta / Jordana** w pełni rozjaśnia sytuację:
  - **Jordan** jest wciąż **incognito** — NIE wiadomo, że to Jan Bażyński (to plot twist Z7).
  - **Albrecht** od razu znany jako komtur, ale **nie przyjmie żadnej wiadomości bez udowodnienia, że nadawcy są godnymi krzyżakami** → stąd **F2B = weryfikacja jako napęd fabularny** (i brama do finału po stronie krzyżackiej, patrz `concept/05-tor-krzyzakow.md`).

## Synchronizacja grup — ZAKTUALIZOWANE [2026-06-01]: BEZ FAL

- **Decyzja Oskara [2026-06-01]:** brak startu falami. **Wszystkie grupy ruszają równolegle**, każda we własnym tempie.
- Rozproszenie w terenie i przy MG zapewnia więc NIE czas startu, lecz: **różne trasy Z1 per grupa** (rozłączność pozycyjna kroków 1–3 — `puzzles/map.md` §5), **zdyspergowane punkty startu** (różne strefy N/E/S/W) i naturalna zmienność tempa.
- Konsekwencja dla Z1: zbieg 10 grup na kroku 4 przy Rynku Staromiejskim (raport u MG) nie jest rozkładany odgórnie — MG obsługuje ewentualną krótką kolejkę; napięcie „9 obiektów stop-4 vs 10 grup" do domknięcia (`map.md` §5).

> (Wcześniej: start falami co 5 min — 4/4/2 grupy. Zniesione decyzją 2026-06-01.)

## Otwarte pytania

1. ~~Liczba grup~~ ROZSTRZYGNIĘTE: **10 (5+5)**, finalnie w dniu gry.
2. **Liczba osób w grupie** - 4 standard, ale jeśli ktoś chce w 3 lub 5?
3. **Skład grupy** - sami się dobierają czy losowo?
4. **Kiedy klasa się ujawnia** (wariant A/B/C powyżej)?
5. **Identyfikator grupy** - cech, kolor, czy oba?
6. **Komunikacja przed grą** - jak rekrutujemy?

## Co autor może zrobić sam vs gdzie pomocy

- **Sam**: skompletowanie grup, decyzje o składzie, komunikacja z uczestnikami.
- **Z pomocą agenta**: research cechów toruńskich (wiki), propozycje formularza zgłoszeniowego, kalkulacja harmonogramu.
