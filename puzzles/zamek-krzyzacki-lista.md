# Zagadka 3 / 3Z - Infiltracja siedziby przeciwnika

**Status**: szkicowe. Z3 = obowiązkowa dla TR (infiltracja zamku). **Z3Z** = lustro dla krzyżaków (infiltracja Piccolo) — sekcja niżej.

> **Treść listy nazwisk TR + uzasadnienie fabularne + pułapki historyczne → `z3-lista-tr-spec.md`** (research kanoniczny). Rekwizyt gracza (EN) → `prototype/pergamin-lista-tr-draft.md`.
> ✅ **Model klucza rozstrzygnięty [2026-06-01]:** lista nazwisk = **kontekst**; **klucz Vigenère = motto Zakonu w nagłówku listy** („HELFEN HILFEN UND WEHREN"); twist „Jordan=Bażyński" niesie **osobny szyfrogram Z7** (przechwycony list krzyżacki z tym samym mottem). Kalimba (Z4) nie zasila Z7. Szczegóły → `z3-lista-tr-spec.md §4` + `z7-szyfr-spec.md`.

## Cel narracyjny

Grupa dowiaduje się, że Zakon ma **listę nazwisk Tajnej Rady**. Wnioski:
- Lista jest u komtura Albrechta (na mieście).
- Jeśli ją zdobędą - wiedzą **kto jest w TR** - i znajdą faktycznego adresata listu.
- **Sztuczka**: na liście NIE MA „Jordana" (to pseudonim Bażyńskiego); może być za to „Hans von Baysen" jako jeden z członków TR — **plant pod twist** (patrz `z3-lista-tr-spec.md` Decyzja #2). Twist „Jordan = Bażyński" ujawnia **dopiero odszyfrowany szyfrogram Z7** (klucz = motto z nagłówka tej listy). ⚠ *Nieaktualne wcześniejsze założenie, że gracze poznają „człowiek z Piccolo = przywódca TR" już w F2A — F2A trzyma Jordana jako kucharza (concept/02, test-jordana, 2026-05-31).*
- **Output** [rozstrzygnięte 2026-06-01]: lista nazwisk = **kontekst** (kto jest w TR), a jej **nagłówek niesie motto Zakonu = klucz Vigenère** do finałowego szyfrogramu Z7. Twist „Jordan=Bażyński" ujawnia osobny przechwycony list (Z7), nie sama lista. Kalimba (Z4) nie zasila Z7. → `z3-lista-tr-spec.md §4`, `z7-szyfr-spec.md`.

## Miejsce - ruiny zamku krzyżackiego

- **Lokalizacja**: zewnątrz ruin (Przedzamcze, Gdanisko obok).
- **Dostępność**: 24/7 z zewnątrz (wnętrza biletowane - tylko jako kontekst, nie zagadka).
- **Atmosfera**: ruina po kapitulacji 1454 - autor może podkreślić że "to tu wszystko się skończy".

## Mechanika - propozycje

### Wariant A: szyfr na ścianach

- Na zewnętrznych murach (lub na tabliczkach informacyjnych) są elementy.
- Grupa znajduje określone symbole / liczby.
- Zestawia w hasło/szyfr → odpowiedź.

### Wariant B: zagadka z NPC — ⚠️ niedostępny

- Wymagałby żywego **brata zakonnego/strażnika** przy zamku — **nie ma na to obsady** (tylko 2 aktorzy: Piotr i Zosia, oboje zajęci gdzie indziej).
- Jeśli ktoś żywy ma być przy zamku w Z3, to **tylko Albrecht (Zosia)** — patrz sekcja "Po rozwiązaniu" niżej. Inaczej Z3 idzie wariantem A/C/D (papier/teren).

### Wariant C: znaleziony rekwizyt

- Grupa znajduje **schowany rekwizyt** (zalakowana koperta w wskazanym miejscu - np. pod kamieniem przy Gdanisku).
- W kopercie informacja + wskazówka jak znaleźć komtura Albrechta na mieście.

### Wariant D: zestawienie z mapą

- Mapa zamku XV-wiecznego (rekonstrukcja - jest w wiki `zamek-krzyzacki.js`?).
- Grupa porównuje z aktualnymi ruinami → znajduje miejsce, które "kiedyś było pomieszczeniem komtura" → tam (in real life) jest tabliczka informacyjna z hasłem.

## Po rozwiązaniu - kontakt z komturem Albrechtem

- **Komtur Albrecht** to aktor (**Zosia**) krążący po mieście (lokalizacja stała? wędrowny?).
- Grupa musi:
  - Znaleźć go.
  - **Wydobyć listę** - przez podstęp, odwrócenie uwagi, kradzież.
- Lista to **fizyczny rekwizyt**: pergaminowa kartka z nazwiskami członków TR (autentyczni patrycjusze z 1454 - patrz `lore/postaci.md` i wiki `tajna-rada.js`).

## Z3Z — wersja krzyżacka (infiltracja Piccolo)

Lustro Z3 dla toru krzyżaków (obowiązkowa, wszystkie 5 grup krzyżackich).

- **Miejsce**: Piccolo (siedziba TR, gdzie urzęduje Jordan/Piotr).
- **Zadania**: ukraść „zaopatrzenie" (w praktyce: odebrać kupony na obiad i je zjeść), **wyciągnąć od Jordana godzinę buntu (20:00)**, ew. ukraść rekwizyt (koło deszyfrujące — do decyzji).
- **Output**: **klucz do finału Z11** + godzina finału.
- **Obsada**: ten sam Jordan/Piotr co dla TR — różni się tylko **framing w kopercie** (sojusznik ↔ cel infiltracji). Jeden aktor obsługuje oba tory.
- Mechanika „kradzieży/infiltracji" — do rozpisania (analogicznie do podebrania listy Albrechtowi w Z3).

## Trudność - balans — ZAKTUALIZOWANE [2026-06-01]

Kradzież listy jest **OBLIGATORYJNA** — **każda** grupa mieszczan MUSI zdobyć listę (jej nagłówek niesie klucz Vigenère do Z7). Stary balans („zbyt łatwe → wszystkie zdobywają → brak dramaturgii") **już nie obowiązuje**: celem jest, by **wszystkie** grupy zdobyły.

- **Dramaturgia z wyniku → na przeżycie:** napięcie tkwi w samym momencie napadu (jak odwrócić uwagę Albrechta), nie w binarnym „uda się / nie uda".
- **Wymóg projektowy (karta choreografii Albrechta/Zosi):** komtur musi dawać **powtarzalne / niezawodne okno** — „odsłania się" wielokrotnie lub wystarczająco długo, by każda grupa złapała moment (ew. MG asystuje). **Nigdy jednostrzałowe okno**, które grupa może bezpowrotnie przegapić.

## Otwarte pytania

1. **Wariant mechaniki** (A/B/C/D lub mix)?
2. **Komtur Albrecht = Zosia** (obsada zamknięta). Otwarte: jak rozpoznawalna (kostium)? Wędruje czy stacjonarna?
3. **Kradzież listy** - mechanika fizyczna (np. komtur trzyma listę "luźno" i jest momentem gdzie się odwraca) czy abstrakcyjna (gracz mówi "kradnę" i MG ocenia czy się udało)?
4. ~~Co jeśli grupa nie zdobędzie listy?~~ — ✅ **ROZSTRZYGNIĘTE [2026-06-01]: kradzież listy jest OBLIGATORYJNA dla każdej grupy mieszczan.** Nie ma ścieżki „nie zdobył" — kradzież projektujemy tak, by każda grupa ją wykonała. Tym samym znika twardy stop dla Z7 (klucz = motto z nagłówka listy jest zawsze dostępny). Patrz „Trudność — balans" niżej + karta choreografii Albrechta.
5. **Z3Z**: mechanika kradzieży zaopatrzenia + czy kraść koło deszyfrujące; jak Jordan/Piotr „przecieka" godzinę 20:00 grupom infiltrującym.

## Co autor może zrobić sam vs gdzie pomocy

- **Sam**: wybór mechaniki, casting komtura Albrechta, scenariusz "kradzieży listy".
- **Z pomocą agenta**: research jakie nazwiska realnie były w TR 1454 (wiki ma `tajna-rada.js`, `donosiciele-1454.js`), generacja pergaminu z listą (treść), propozycje zagadek do wariantu A (szyfr na ścianach).
