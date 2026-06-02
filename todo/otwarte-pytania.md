# Otwarte pytania - decyzje czekające na input

**Konwencja**: rozstrzygnięcia oznaczaj jako **temat** — `ROZSTRZYGNIĘTE [data]: ...` z krótkim uzasadnieniem. Bez przekreśleń i not „wcześniej/było→jest" — historia jest w `git log` i `todo/archive/`.

Pytania pogrupowane wg pliku, w którym są dyskutowane szerzej.

## STRATEGICZNE (wpływają na wszystko - najpierw rozstrzygnij te)

1. **Tytuł gry** - finalna nazwa.
2. **Skala** — ROZSTRZYGNIĘTE [2026-05-29]: **10 grup × 4 osoby (~40 osób), podział 5+5** (5 TR + 5 krzyżackich); ostateczna liczba ustalana **w dniu gry**. Jordan (1 aktor) obsługuje oba tory — wymaga rozłożenia grup w czasie. Produkcja skalowana do 10 grup.
3. **Data rozgrywki** - kiedy (deadline planowania)?
4. **Klasy — kiedy się ujawniają** — ROZSTRZYGNIĘTE [2026-05-29]: **po Z2** (gracz poznaje stronę odbiorcy listu); plotki F1 sygnalizują spór Zakon vs TR; spotkanie Albrechta/Jordana domyka (Jordan wciąż incognito; Albrecht żąda dowodu godności → F2B = weryfikacja). Patrz `mechanics/grupy-i-klasy.md`.
5. **Tor krzyżacki** — ROZSTRZYGNIĘTE [2026-05-29]: **symetria TREŚCI** — osobny zestaw zagadek F2B (Z3Z, Z8-Z11) + osobne rekwizyty. Zastrzeżenie obsadowe: symetria dotyczy treści, nie aktorów — krzyżacy NIE mają żywego NPC (poza Albrechtem/Zosią), kontakt gra przez papier. Plot twist krzyżaków ROZSTRZYGNIĘTE [2026-05-29]: **BRAK twistu** — żaden nie pełni funkcji bramkującej (jak Jordan=Bażyński u mieszczan). Brama krzyżaków = **duma Albrechta + weryfikacja F2B**. Patrz `concept/05-tor-krzyzakow.md`.
6. **Mapa + szyfrownik** - wspólne czy osobne per klasa?
7. **Ilu MG** — ROZSTRZYGNIĘTE [2026-05-29]: **1 MG = Oskar**.

## STRUKTURALNE (kształtują strukturę gry)

8. **F1 trasa Z1** — AKTUALIZACJA [2026-05-31]: **mechanika docelowa ustalona** (łańcuch + abstrakcyjne glify na mapie + szyfrownik obiekt→następny glif + legenda do autouzupełnienia; **4 kroki**). **Prototyp:** 1 łańcuch (tor TR), propozycja 4 miejsc w `puzzles/szlak-symboli.md`. **Pełna gra:** różne trasy per grupa (dyspersja) — model różnych pierwszych glifów, do MVP.
9. **F2B — które obowiązkowe / wybierz 2 z 4** — ROZSTRZYGNIĘTE [2026-05-29]: **model dywersyfikacji**, nie „wybierz 2 z 4". Obowiązkowa: **Z3 (TR) / Z3Z (krzyżacy)** + **1 opcjonalna** per grupa (5+5; tabele w `concept/03-faza-2b-asynchroniczne.md`). Bramkowanie finału: Z3/Z3Z + 1 opcjonalna (klucz wymienialny).
10. **Forma „trzy rzeczy do zestawienia" w Z2** — ROZSTRZYGNIĘTE [2026-06-01, Oskar]: **zagadka logiczna Einsteina** (3 osoby × miejsce pracy × zakup). Wersja themingowa: Jordan=Piccolo=chochla. Wpisana do K2. Patrz `puzzles/droga-do-jordana.md`.
11. **Forma testu Jordana** — ROZSTRZYGNIĘTE [2026-05-31]: **hasło (imię „Jordan" w K2 wersja TR) + weryfikacja koloru opaski (5 kolorów TR)**. Jordan pasywnie weryfikuje frakcję, nie testuje charakteru. Krzyżacy nie znają imienia → nie dostają K3. Patrz `puzzles/test-jordana.md`.
12. **Wariant mechaniki Z3 (A/B/C/D)** — ROZSTRZYGNIĘTE [2026-06-01]: **rozmowa-zwiad + kradzież fizyczna**, dwuetapowa koperta (K3 zwiad → K-Z3b ujawnienie kradzieży). Pretekst zwiadu = **fałszywi donosiciele** (wariant A; Albrecht sam wyciąga listę). Bez zagadki na murach. Patrz `puzzles/zamek-krzyzacki-lista.md` „Struktura Z3".
13. **Mechanika „kradzieży listy" - fizyczna czy abstrakcyjna?** — ROZSTRZYGNIĘTE [2026-06-01]: **fizyczna** — Albrecht chodzi przewidywalnym schematem, lista leży fizycznie, powtarzalne okno + reset/loop. Zwiad NIE bramkuje (bramką jest kradzież). Karta choreografii Albrechta → `prototype/albrecht-actor-card-draft.md`.
14. **Finałowa zliczanka** — ROZSTRZYGNIĘTE [2026-05-29]: **prosta, 1 grupa = 1 głos** (`mechanics/finalowe-glosowanie.md`).
15. **Co jeśli grupa nie dostarczy** - warianty 1/2/3 (`mechanics/finalowe-glosowanie.md`). — wciąż otwarte.
16. **Zakończenie gry** — ROZSTRZYGNIĘTE [2026-05-29]: **hybryda** — fakty historyczne stałe, scenka przesuwa ciężar emocjonalny wg wyniku; **wymowa moralna: TR/kupcy „źli", bunt = świat na gorsze** (`concept/04-faza-3-final.md`).
17. **Krzyżacy w finale** — ROZSTRZYGNIĘTE [2026-05-29]: **wolny wybór** — każda grupa może dostarczyć dowolnej stronie.

## ZAGADKI - treść

18. **Z1: konkretne mapowanie symboli ↔ obiekty** (autorska kreatywka).
19. **Z2: trzy rzeczy do zestawienia — jakie konkretnie?** — ROZSTRZYGNIĘTE [2026-06-01, Oskar]: **zagadka logiczna** (Kordian/Lambert/Jordan × Młyn/Piccolo/Kuźnia × jedzenie/chochla/sukno). Patrz `puzzles/droga-do-jordana.md`, `prototype/k2-envelope-draft.md`.
20. **Z2b: treść testu Jordana (formuła + konkret)** — ROZSTRZYGNIĘTE [2026-06-01]: **dwustopniowy pasywny**: hasło = imię „Jordan" (z K2) + weryfikacja koloru opaski lidera. Skrypt Jordana zdraftowany → `prototype/jordan-actor-script-draft.md`.
21. **Z3: mechanika infiltracji zamku** — ROZSTRZYGNIĘTE [2026-06-01]: **dwuetapowa** (K3 zwiad → K-Z3b kradzież fizyczna); klucz = kradzież listy TR (pergamin). Drafty: K3, K-Z3b, karta Albrechta. Patrz `puzzles/zamek-krzyzacki-lista.md`. **Z3Z (tor krzyżaków):** do MVP.
22. **Z4 / Z8: melodia (kalimba)** — treść melodii i mechanika rozpoznania/odtworzenia; co jest kluczem do finału.
23. **Z5 / Z9: sensoryczna z piernikiem** — mechanika sensoryczna; jaki klucz wypluwa.
24. **Z6: herby hanzeatyckie** — które herby faktycznie są na Aleji Gmerków (ul. Królowej Jadwigi), ile łącznie (bruk + latarnie), dobór 5 dystraktorów. **WYMAGA WIZYTY** + spisu herbów. Patrz `puzzles/herby-aleja.md`.
25. **Z7 / Z11: finałowe szyfry** — konkretny szyfr; jak klucze z 2B wchodzą; sklejenie Jordan=Bażyński (Z7) i plot twist krzyżaków (Z11, otwarty).
26. **Z10 / Polichromie Biedronka** - jakie konkretne potwory, treść „Bestiariusza Krzyżowca" (wymaga researchu osobistego).
27. **Kalimba: używamy?** — ROZSTRZYGNIĘTE [2026-05-29]: **tak** — Z4 (melodia flisaka) + Z8 (melodia zakonu). Decyzja o instrumencie (anachronizm) — patrz `lore/fakty-vs-fabula.md`, `puzzles/kalimba.md`.
27a. **„Opowieść skazanego" (bonus)** — mechanika trójkątnych puzzli (dwustronne), treść dwóch wersji informacji; niski priorytet.
27b. **Mechanika „klucza" 2B→finał** — czy klucz to item fizyczny / hasło / fragment szyfru? Czy wszystkie wymienialne 1:1?

## NPCs i aktorzy

> ROZSTRZYGNIĘTE [2026-05-29]: **tylko 2 aktorów + MG, obsada zamknięta** — Jordan/Bażyński = **Piotr**, Albrecht = **Zosia**, MG = **Oskar**. Reszta postaci (rzemieślnik (piekarz), Tileman, pośrednik, brat zakonny, obserwatorzy) = **na papierze**. Pytania 28-31 (casting) i 32 (stylizacja MG) — nieaktualne.

33. **Kostiumy 2 aktorów** - autentyczne XV-wieczne (drogie) czy "sugestywne" (chochla = Jordan; płaszcz + krzyż = Albrecht)?

## Lokalizacje

34. **Lokal Jordana** — ROZSTRZYGNIĘTE [2026-05-31]: **Piccolo** (realny lokal, północno-wschodnia część Starego Miasta od Rynku; tam wydawane posiłki dla graczy). Formalna zgoda/sloty — logistyka równolegle, poza zegarem sprintu. Stylizacja nazwy w fikcji (Piccolo vs nazwa historyczna) — wciąż otwarte (#51).
35. **Miejsce startowe** (brief wspólny, dla wszystkich grup).
36. **Lokalizacje MG** w fazach 1, 2A, 2B, 3.
37. **Komtur Albrecht** - stały punkt czy wędruje?
38. **Punkty Z4, Z5, Z6** - konkretne adresy.

## Logistyka i komunikacja

39. **Sposób zapisu graczy** - formularz, Telegram, FB?
40. **Identyfikator grupy** — ROZSTRZYGNIĘTE [2026-05-31]: **kolor** (10 kolorów, opaska/szarfa; przydział losowy, nie zdradza klasy). Patrz `mechanics/grupy-i-klasy.md`.
41. **Komunikacja awaryjna** - SMS, telefon, aplikacja?
42. **Plotki: 3 vs 5** w jednej kopercie?
43. **Plotki: różne per klasa** — ROZSTRZYGNIĘTE [2026-05-29]: **odwrócone wg klasy** — kurierzy TR dostają krytykę TR, kurierzy Zakonu krytykę Zakonu (Pule A/B w `lore/plotki-i-pogloski.md`). Neutralne/forshadow wspólne.
44. **Plotki: wszystkie prawdziwe** czy są dezinformacje? (Pule A/B ugruntowane faktami; osobne fałszywe tropy — otwarte.)

## Rekwizyty i produkcja

45. **Format mapy** (A4 vs A3).
46. **Mapa per gracz czy per grupa** (12 vs 48 kopii)?
47. **Szyfrownik per gracz czy per grupa**?
48. **Stylizacja kopert** - jaki wygląd, jaki wosk, jaka pieczęć?
49. **Dźwięk dzwonu** w finale - co konkretnie?
50. **Mechanika zliczania głosów** - pudełka / NPC / cyfrowo?
64. **Retrofit K1/K2/K3 na konwencję głosu** — ROZSTRZYGNIĘTE [2026-06-01, Oskar]: **hybryda, nie przepisywanie** — do K1/K2/K3 **dorzucona oprawa narracyjna** (otwarcie + zamknięcie, *kursywa*), wiadomości z nadawcą zostają roman. Konwencja typograficzna: **kursywa = głos z głów, roman = słowa świata** (wiadomość/cytat NPC). Zastosowane do K1, K2, K3, K-Z3b.
    - **AKTUALIZACJA KIERUNKU [2026-06-02, Oskar]:** pierwszy retrofit poszedł *extend* (dorzucona oprawa); Oskar chce teraz głębszej przebudowy pierwszych listów: **(a)** narracja z głów = **2. osoba „you/your"** (K1–K3), nie 1. os. mn.; **(b)** plotki **wplecione w narrację-podróż**, nie wyliczone cytaty (zastępuje notkę „plotki docelowo roman"); **(c)** rama **K2 przestaje być głosem zleceniodawcy** → scena-odkrycie (kurierzy sami orientują się, że R. zniknął), slip „— R." = jedyny dokument-nadawca; **(d)** Zasada #3 — koperta opisuje świat wyobrażony, **nie komentuje realnych czynności gracza** ani meta-mechaniki (precz „open once clear", „you tear it open", „he will put something in your hand"). Notatki rewizji w draftach K1/K2/K3/K-Z3b; kanon → `mechanics/koperty-mg.md` §Osoba narracji + Zasada #3. **Status: do wprowadzenia (drafty), czeka na review Oskara, potem re-render od zera.**

## Naginki historyczne - decyzje

51. **Czy używamy nazwy "Picollo"** (anachronizm) czy stylizujemy?
52. **Czy zachowujemy kalimbę** (anachronizm) czy zmieniamy?
53. **Czy mówimy o Tuba Dei** (anachronizm) czy "dzwon ratuszowy"?
54. **Czy zakończenie ma być alt-history** lub historyczne?
55. **Inne anachronizmy** które autor planuje (do uzupełnienia w trakcie).

## Meta-pytania (jak pracujemy)

56. **Częstotliwość pracy** - codziennie godzina, czy weekendowo dłużej?
57. **Z kim konsultujemy** - tylko autor, czy ktoś jeszcze (znajomi, animatorzy)?
58. **Kiedy playtest** - tydzień przed, miesiąc przed, dwa tygodnie?
59. **Budżet** - ile autor inwestuje w rekwizyty/druk/aktorów?

## Rozbieżności board (Whimsical) vs pliki .md

60. **Numeracja zagadek F2B — board ≠ pliki** — ROZSTRZYGNIĘTE [2026-05-29, v2]: **kanon ustalony**. TR: **Z3** infiltracja zamku, **Z4** melodia flisaka (kalimba), **Z5** sensoryczna z piernikiem, **Z6** herby hanzeatyckie (Aleja Gmerków, ul. Królowej Jadwigi). Krzyżacy (lustra): **Z3Z** infiltracja Piccolo, **Z8** melodia zakonu, **Z9** sensoryczna, **Z10** polichromie/Bestiariusz. Finały: **Z7** (TR), **Z11** (krzyżacy). „TR w Piccolo / Związek Pruski / pogłębienie TR" = **tylko tło fabularne do kopert**, nie mechanika. Patrz `puzzles/00-master-list.md`.
61. **„Zagadka nr 5" dubluje się** — ROZSTRZYGNIĘTE [2026-05-29]: Z5 = **sensoryczna z piernikiem** (mechanika); „Związek Pruski / piekarz" = opcjonalne tło do koperty.
62. **„melodia flisaka" = kalimba?** — ROZSTRZYGNIĘTE [2026-05-29]: **tak** — Z4 melodia flisaka i Z8 melodia zakonu używają **kalimby**. Patrz `puzzles/kalimba.md`.
63. **Które zagadki bramkują finał** — ROZSTRZYGNIĘTE [2026-05-29]: **Z3/Z3Z (obowiązkowa) + 1 opcjonalna**, klucz wymienialny przez MG. Patrz `concept/03-faza-2b-asynchroniczne.md`.

65. **⚠ Z3 — sekwencja kradzieży vs wręczenie K-Z3b (Model A / Model B)** — OTWARTE [2026-06-02], **blokuje finalną treść K-Z3b i STEP 2/3 karty Albrechta**. Uwaga Oskara „komtur **wręcza kopertę i odchodzi**" zderza się z mechaniką kradzieży (lista musi zostać na widoku, komtur obecny).
    - **Model A (koperta wyzwala kradzież):** K-Z3b wręczona **w trakcie** → grupa czyta (olśnienie + jak ukraść) → kradnie przy obecnym Albrechcie; „wręcz i odejdź" = milcząco, bez dyskusji o kopercie; STEP 2 zostaje. K-Z3b = olśnienie **wyprzedzające** kradzież.
    - **Model B (kradzież live, koperta = wyjście):** kradzież dzieje się na żywo (aktorsko, telegrafowane okno) → Albrecht wręcza K-Z3b **na koniec** i odchodzi → grupa czyta retrospektywnie; STEP 2 do przepisania, K-Z3b przestaje być instrukcją kradzieży.
    - Pełny opis: `prototype/kZ3b-envelope-draft.md §KONFLIKT SEKWENCJI`; `prototype/albrecht-actor-card-draft.md` (flaga na górze). **Decyzja Oskara** (model autorstwa — to jego mechanika).
66. **Z2 — warstwa glifów + zależność od mapy Z1** — OTWARTE [2026-06-02]. Pomysł Oskara: 3 miejsca zagadki dostają glify; **glif Piccolo = prawdziwy** (na mapie Z1), Stary Młyn + Kuźnia = **zmyślone** → gracze idą tylko tam, gdzie glif realnie istnieje. (a) ⚠ **zależność:** glif Piccolo musi istnieć na wygenerowanej mapie/deszyfrowniku (`prototype/maps/`) — zarezerwować przy generacji; (b) **flaga redundancji:** czy wynik zagadki logicznej dalej ma jawnie nazywać „Jordan→Piccolo", czy logika daje tylko trójkę {imię, atrybut, miejsce-jako-glif} bez wykładania celu. Patrz `puzzles/droga-do-jordana.md §D`, `prototype/k2-envelope-draft.md §D`.
67. **Zakres 2. osoby narracji — K-Z4 / KF** — OTWARTE [2026-06-02]. Zmiana na 2. os. „you" objęła K1–K3. K-Z4 i KF zostają na razie w 1. os. mn. „we" — decyzja, czy ujednolicić wszystkie koperty do 2. os., czy świadomie różnicować (np. finałowe „we" jako głos zbiorowy). **Nie konwertować po cichu.** Dotyczy też osoby narracji w K-Z3b (flaga w drafcie).

---

## Sugestia kolejności rozstrzygania

1. **Najpierw "STRATEGICZNE" (1-7)** - bez nich nic nie ruszy.
2. **Potem "STRUKTURALNE" (8-17)** - kształtują dalszą pracę.
3. **Treść zagadek (18-27)** - praca twórcza, na spokojnie.
4. **NPCs i logistyka (28-50)** - wymagają realnych konsultacji (lokale, ludzie).
5. **Naginki (51-55)** - korekty w trakcie.

## Jak dodawać nowe pytania

Gdy podczas pracy pojawia się nowa kwestia do rozstrzygnięcia - dopisz tu pod numerem ciągłym. Łatwiej śledzić co pozostało.
