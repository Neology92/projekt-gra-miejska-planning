# Zagadka 1 - Szlak symboli

**Status**: mechanika OK, miejsca + szyfrownik do doboru.

## Mechanika

1. Każdy gracz dostaje na start: **mapę z symbolami** + **szyfrownik** (tabela: obiekt terenowy → symbol).
2. **Pierwsza koperta** zawiera wskazówkę do pierwszego symbolu na mapie.
3. Cykl:
   - Grupa identyfikuje symbol na mapie → idzie na to miejsce.
   - W terenie znajduje **konkretny obiekt** (np. pomnik, detal architektoniczny, rzeźba).
   - W szyfrowniku sprawdza: obiekt → **nowy symbol** na mapie.
   - Idą do nowego symbolu na mapie. Powtarzają.
4. Po `N` krokach (3-5? do decyzji) grupa **spisała sekwencję symboli/obiektów** = odpowiedź dla MG.

## Pierwotny przykład autora (do rekonstrukcji)

> Słońce (mapa) → osiołek (teren) → szyfrownik: osiołek → drzewo → idą do drzewa → Kopernik (teren) → szyfrownik: Kopernik → astrolabium → idą do astrolabium → świnka (teren) → ...

Czyli **mapa zawiera symbol abstrakcyjny** (słońce, drzewo, świnka), a **teren zawiera obiekt konkretny** (osiołek, Kopernik), szyfrownik je łączy.

## Dobór miejsc - kandydaci z wiki

Z listy 45 miejsc na grę (wiki `przewodnik-miejsc-gry.js`), kandydaci na obiekty terenowe:

| Miejsce | Cecha do rozpoznania | Sugerowany symbol mapy |
|---------|---------------------|------------------------|
| Pomnik Kopernika (Rynek) | postać z astrolabium | gwiazda / astrolabium |
| Fontanna Flisaka (8 żab) | flisak z fletem, 8 żab | flet / żaba |
| Osiołek miejski | dawny pręgierz | słońce / promień |
| Pomnik psa Filusia | mały kundel z melonikiem | pies / melonik |
| Aniół „Jonasz" (Ratusz) | anioł na parapecie | skrzydło |
| Krzywa Wieża | pochyła wieża | wieża pochyła |
| Kamienica Pod Gwiazdą (Rynek 35) | pozłacana gwiazda + 1697 | gwiazda |
| Dwór Artusa | herb anioła klęczącego | tarcza |
| Biedronka (Rynek z polichromiami) | polichromie | biedronka |
| Dom Kopernika | dom z herbem patrycjuszowskim | księga / globus |

Wybór: ~6-10 obiektów dla 5-6 kroków szlaku.

## Szyfrownik - struktura

Lista mapowań **obiekt terenowy → kolejny symbol mapy**. Może być:

- **Lista tekstowa** (najprostsze): "osiołek → drzewo" w tabeli.
- **Schemat graficzny** (ładniejsze): ikony połączone strzałkami.
- **Stylizowane na manuskrypt** (zgodne z estetyką wiki): pergamin, kaligrafia.

## Wariant dla obu klas

Dwie opcje:
- **A: ten sam szlak** - obie klasy spotykają się na trasie. Wymaga że na końcu znajdują **tego samego pośrednika** (ale w wariancie szykowanym przez autora: pośrednika nie ma).
- **B: różne szlaki** - TR ma jeden, krzyżacy inny. Więcej miejsc do doboru, ale separacja czysta.

**Sugestia**: **B**, bo separuje klasy. Można użyć tego samego szyfrownika, ale **różny start** w pierwszej kopercie i ~3 różnych obiektów po drodze.

## Otwarte pytania

1. **Ile kroków szlaku?** 3 = za szybko, 7 = za długo. Optimum: **5**?
2. **Co jest "odpowiedzią" dla MG?** Sekwencja symboli? Pierwsze litery obiektów? Hasło ukryte w trasie?
3. **Co jeśli grupa się pomyli i pójdzie w złe miejsce?** Mają mechanizm "powrotu" - czy losowanie nowej koperty?
4. **Mapa fizyczna - kto ją projektuje?** Stylizowana na XV w. (pergamin, ręczne rysunki) wymaga grafika. Może być uproszczona (czysty rysunek + symbole) - łatwiej.
5. **Szyfrownik - jeden na grupę czy jeden na osobę?** Wygodniej osobny (każdy może patrzeć), ale kosztuje 48 kopii zamiast 12.

## Co autor może zrobić sam vs gdzie pomocy

- **Sam**: dobór symboli + miejsc, projekt graficzny mapy i szyfrownika, dobór "kreatywnego" mapowania (czemu Kopernik → astrolabium a nie księga).
- **Z pomocą agenta**: weryfikacja czy obiekt terenowy faktycznie istnieje (link do wiki), propozycje alternatyw, redakcja tekstu wskazówek.
