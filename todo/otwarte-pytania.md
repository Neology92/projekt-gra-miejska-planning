# Otwarte pytania - decyzje czekające na input

**Konwencja**: rozstrzygnięcia oznaczaj jako **temat** — `ROZSTRZYGNIĘTE [data]: ...` z krótkim uzasadnieniem. Bez przekreśleń i not „wcześniej/było→jest" — historia jest w `git log` i `todo/archive/`.

Pytania pogrupowane wg pliku, w którym są dyskutowane szerzej.

## STRATEGICZNE (wpływają na wszystko - najpierw rozstrzygnij te)

1. **Tytuł gry** — ROZSTRZYGNIĘTE [2026-06-03, Oskar]: **„Gra Miejska"**.
2. **Skala** — ROZSTRZYGNIĘTE [2026-05-29]: **10 grup × 4 osoby (~40 osób), podział 5+5** (5 TR + 5 krzyżackich); ostateczna liczba ustalana **w dniu gry**. Jordan (1 aktor) obsługuje oba tory — wymaga rozłożenia grup w czasie. Produkcja skalowana do 10 grup.
3. **Data rozgrywki** — ROZSTRZYGNIĘTE [2026-06-03, Oskar]: gra odbywa się **dzisiaj (2026-06-03)**. Deadline planowania = dziś; cały stos drukowany na miejscu (patrz #59).
4. **Klasy — kiedy się ujawniają** — ROZSTRZYGNIĘTE [2026-05-29]: **po Z2** (gracz poznaje stronę odbiorcy listu); plotki F1 sygnalizują spór Zakon vs TR; spotkanie Albrechta/Jordana domyka (Jordan wciąż incognito; Albrecht żąda dowodu godności → F2B = weryfikacja). Patrz `mechanics/grupy-i-klasy.md`.
5. **Tor krzyżacki** — ROZSTRZYGNIĘTE [2026-05-29]: **symetria TREŚCI** — osobny zestaw zagadek F2B (Z3Z, Z8-Z11) + osobne rekwizyty. Zastrzeżenie obsadowe: symetria dotyczy treści, nie aktorów — krzyżacy NIE mają żywego NPC (poza Albrechtem/Zosią), kontakt gra przez papier. Plot twist krzyżaków ROZSTRZYGNIĘTE [2026-05-29]: **BRAK twistu** — żaden nie pełni funkcji bramkującej (jak Jordan=Bażyński u mieszczan). Brama krzyżaków = **duma Albrechta + weryfikacja F2B**. Patrz `concept/05-tor-krzyzakow.md`.
6. **Mapa + szyfrownik** — ROZSTRZYGNIĘTE [2026-06-03, Oskar]: **mapa wspólna** — każda drużyna dostaje identyczną mapę (jeden wzór dla wszystkich, niezależnie od frakcji). **Deszyfrownik per drużyna** — każda z 10 drużyn ma inny (rozdział **per grupa**, nie per frakcja). Potwierdza istniejący stan: 1 mapa wspólna + 10 deszyfrowników (`public/decoders/`, generator `tools/z1-decoder/`).
7. **Ilu MG** — ROZSTRZYGNIĘTE [2026-05-29]: **1 MG = Oskar**.

## STRUKTURALNE (kształtują strukturę gry)

8. **F1 trasa Z1** — AKTUALIZACJA [2026-05-31]: **mechanika docelowa ustalona** (łańcuch + abstrakcyjne glify na mapie + szyfrownik obiekt→następny glif + legenda do autouzupełnienia; **4 kroki**). **Prototyp:** 1 łańcuch (tor TR), propozycja 4 miejsc w `puzzles/szlak-symboli.md`. **Pełna gra:** różne trasy per grupa (dyspersja) — model różnych pierwszych glifów, do MVP.
9. **F2B — które obowiązkowe / wybierz 2 z 4** — ROZSTRZYGNIĘTE [2026-05-29]: **model dywersyfikacji**, nie „wybierz 2 z 4". Obowiązkowa: **Z3 (TR) / Z3Z (krzyżacy)** + **1 opcjonalna** per grupa (5+5; tabele w `concept/03-faza-2b-asynchroniczne.md`). Bramkowanie finału: Z3/Z3Z + 1 opcjonalna (klucz wymienialny).
10. **Forma „trzy rzeczy do zestawienia" w Z2** — ROZSTRZYGNIĘTE [2026-06-01, Oskar; zakup-parol zmieniony 2026-06-02]: **zagadka logiczna Einsteina** (3 osoby × miejsce pracy × zakup). Wersja themingowa: Jordan=Piccolo=**miecz** (zakup-parol; chochla zostaje jako przykrywka kucharza, miecz wraca w finale jako broń Bażyńskiego). Wpisana do K2. Patrz `puzzles/droga-do-jordana.md` (baner „ZMIANA ATRYBUTU").
11. **Forma testu Jordana** — ROZSTRZYGNIĘTE [2026-05-31]: **hasło (imię „Jordan" w K2 wersja TR) + weryfikacja koloru opaski (5 kolorów TR)**. Jordan pasywnie weryfikuje frakcję, nie testuje charakteru. Krzyżacy nie znają imienia → nie dostają K3. Patrz `puzzles/test-jordana.md`.
12. **Wariant mechaniki Z3 (A/B/C/D)** — ROZSTRZYGNIĘTE [2026-06-01]: **rozmowa-zwiad + kradzież fizyczna**, dwuetapowa koperta (K3 zwiad → K-Z3b ujawnienie kradzieży). Pretekst zwiadu = **fałszywi donosiciele** (wariant A; Albrecht sam wyciąga listę). Bez zagadki na murach. Patrz `puzzles/zamek-krzyzacki-lista.md` „Struktura Z3".
13. **Mechanika „kradzieży listy" - fizyczna czy abstrakcyjna?** — ROZSTRZYGNIĘTE [2026-06-01]: **fizyczna** — Albrecht chodzi przewidywalnym schematem, lista leży fizycznie, powtarzalne okno + reset/loop. Zwiad NIE bramkuje (bramką jest kradzież). Karta choreografii Albrechta → `materials/actors/albrecht-actor-card-draft.md`.
14. **Finałowa zliczanka** — ROZSTRZYGNIĘTE [2026-05-29]: **prosta, 1 grupa = 1 głos** (`mechanics/finalowe-glosowanie.md`).
15. **Co jeśli grupa nie dostarczy** — ROZSTRZYGNIĘTE [2026-06-03, Oskar]: **niedostarczony list = nie liczony, neutralnie, bez kary** (NIE wariant 3 „zdrada"). Spójne mechanicznie z #50 — aktorzy liczą tylko fizycznie wręczone listy, więc brak dostawy automatycznie wypada z liczenia. `mechanics/finalowe-glosowanie.md`.
16. **Zakończenie gry** — ROZSTRZYGNIĘTE [2026-05-29]: **hybryda** — fakty historyczne stałe, scenka przesuwa ciężar emocjonalny wg wyniku; **wymowa moralna: TR/kupcy „źli", bunt = świat na gorsze** (`concept/04-faza-3-final.md`).
17. **Krzyżacy w finale** — ROZSTRZYGNIĘTE [2026-05-29]: **wolny wybór** — każda grupa może dostarczyć dowolnej stronie.

## ZAGADKI - treść

18. **Z1: konkretne mapowanie symboli ↔ obiekty** (autorska kreatywka).
19. **Z2: trzy rzeczy do zestawienia — jakie konkretnie?** — ROZSTRZYGNIĘTE [2026-06-01, Oskar; zakup zmieniony 2026-06-02]: **zagadka logiczna** (Kordian/Lambert/Jordan × Młyn/Piccolo/Kuźnia × jedzenie/**miecz**/sukno). Miecz = ironwork z Kuźni (izomorfizm zachowany) = parol + broń finału. Patrz `puzzles/droga-do-jordana.md`, `envelopes/miasto-2-Z2.md`.
20. **Z2b: treść testu Jordana (formuła + konkret)** — ROZSTRZYGNIĘTE [2026-06-01]: **dwustopniowy pasywny**: hasło = imię „Jordan" (z K2) + weryfikacja koloru opaski lidera. Skrypt Jordana zdraftowany → `materials/actors/jordan-actor-script-draft.md`.
21. **Z3: mechanika infiltracji zamku** — ROZSTRZYGNIĘTE [2026-06-01]: **dwuetapowa** (K3 zwiad → K-Z3b kradzież fizyczna); klucz = kradzież listy TR (pergamin). Drafty: K3, K-Z3b, karta Albrechta. Patrz `puzzles/zamek-krzyzacki-lista.md`. **Z3Z (tor krzyżaków):** do MVP.
22. **Z4 / Z8: melodia (kalimba)** — treść melodii i mechanika rozpoznania/odtworzenia; co jest kluczem do finału.
23. **Z5 / Z9: sensoryczna z piernikiem** — mechanika sensoryczna; jaki klucz wypluwa.
24. **Z6: herby hanzeatyckie** — CZĘŚCIOWO ROZSTRZYGNIĘTE researchem [2026-06-02]: miejsce to **Aleja Herbów** (herby w bruku **ul. Szerokiej** — 22 herby — + **Królowej Jadwigi** — 8 herbów), **NIE „Aleja Gmerków"** (to ul. Żeglarska, 25 gmerków, osobne miejsce; wiki zlepiło). Listy miast + współrzędne ustalone (`puzzles/herby-aleja.md §Research`). **Zostaje decyzja Oskara:** (a) który odcinek gracze przechodzą (Szeroka / Kr. Jadwigi / oba) — determinuje dobór 5 dystraktorów; (b) czy rozwiązać kolizję z Z10 (Biedronka = Szeroka 22, ten sam ciąg herbów); (c) ⚠ rename „Aleja Gmerków"→„Aleja Herbów" w dokumentach kanonicznych/narracyjnych (lista plików w commicie/raporcie). Wizyta w terenie nadal warta dla spot-checku ubytków. **AKTUALIZACJA [2026-06-03, Oskar]:** projekt zagadki Z6 = **w gestii Piotra (w toku)** — agent nie projektuje. ⚠ **Niezależnie zostaje otwarty rename „Aleja Gmerków"→„Aleja Herbów"** (poprawność faktograficzna, nie zależy od Piotra) — do wykonania w dokumentach kanonicznych.
25. **Z7 / Z11: finałowe szyfry** — **Z7 (TR)** ROZSTRZYGNIĘTE [2026-06-01]: Cezar +7, klucz przez porównanie nagłówków, sklejenie Jordan=Bażyński (`z7-szyfr-spec.md`). **Z11 (KZ)** ROZSTRZYGNIĘTE co do mechaniki [2026-06-02, patrz #72]: dwie tabele (symbol-klucz → tabula recta → parol). Otwarte dla Z11: parol, styl symboli, liczba wierszy, miejsce wydania Tabeli 2 (`z11-szyfr-spec.md §8`).
26. **Z10 / Polichromie Biedronka** - jakie konkretne potwory, treść „Bestiariusza Krzyżowca" (wymaga researchu osobistego).
27. **Kalimba: używamy?** — ROZSTRZYGNIĘTE [2026-05-29]: **tak** — Z4 (melodia flisaka) + Z8 (melodia zakonu). Decyzja o instrumencie (anachronizm) — patrz `lore/fakty-vs-fabula.md`, `puzzles/kalimba.md`.
27a. **„Opowieść skazanego" (bonus)** — mechanika trójkątnych puzzli (dwustronne), treść dwóch wersji informacji; niski priorytet.
27b. **Mechanika „klucza" 2B→finał** — ROZSTRZYGNIĘTE [2026-06-03, Oskar]: **brak osobnego klucza/itemu/hasła.** Wszystkie opcjonalne (Z4/Z5/Z6 → TR; Z8/Z9/Z10 → KZ) kończą się identycznie mechanicznie: gracz podaje odpowiedź do MG → MG wydaje kopertę finałową (Z7 dla TR / Z11 dla KZ). Koperta jest samodzielna — nie wymaga tokenu z zagadki opcjonalnej. Różnice między opcjonalnymi = wyłącznie fabularne/rekwizytowe; flow MG identyczny we wszystkich przypadkach. Wymienialność 1:1 = tak.

## NPCs i aktorzy

> ROZSTRZYGNIĘTE [2026-05-29]: **tylko 2 aktorów + MG, obsada zamknięta** — Jordan/Bażyński = **Piotr**, Albrecht = **Zosia**, MG = **Oskar**. Reszta postaci (rzemieślnik (piekarz), Tileman, pośrednik, brat zakonny, obserwatorzy) = **na papierze**. Pytania 28-31 (casting) i 32 (stylizacja MG) — nieaktualne.

33. **Kostiumy 2 aktorów** — ROZSTRZYGNIĘTE [2026-06-03, Oskar]: **przygotowane przez Piotra** na dzień gry. Zamknięte.

## Lokalizacje

34. **Lokal Jordana** — ROZSTRZYGNIĘTE [2026-05-31]: **Piccolo** (realny lokal, północno-wschodnia część Starego Miasta od Rynku; tam wydawane posiłki dla graczy). Formalna zgoda/sloty — logistyka równolegle, poza zegarem sprintu. Stylizacja nazwy w fikcji (Piccolo vs nazwa historyczna) — wciąż otwarte (#51).
35. **Miejsce startowe** (brief wspólny, dla wszystkich grup).
36. **Lokalizacje MG** — ROZSTRZYGNIĘTE [2026-06-03, Oskar]: **MG (Oskar) krąży wokół Rynku Staromiejskiego** przez całą grę (F1–F3) — brak stałego stanowiska per faza, mobilny w obrębie Starego Rynku.
37. **Komtur Albrecht** - stały punkt czy wędruje?
38. **Punkty Z4, Z5, Z6** - konkretne adresy.

## Logistyka i komunikacja

39. **Sposób zapisu graczy** — ROZSTRZYGNIĘTE [2026-06-03, Oskar]: **bez znaczenia** — gra dla znajomych, brak formalnej rejestracji.
40. **Identyfikator grupy** — ROZSTRZYGNIĘTE [2026-05-31]: **kolor** (10 kolorów, opaska/szarfa; przydział losowy, nie zdradza klasy). Patrz `mechanics/grupy-i-klasy.md`.
41. **Komunikacja awaryjna** — ROZSTRZYGNIĘTE [2026-06-03, Oskar]: **bez znaczenia** — mała, lokalna grupa; MG mobilny na Rynku (#36), brak dedykowanego kanału awaryjnego.
42. **Plotki: 3 vs 5** w jednej kopercie?
43. **Plotki: różne per klasa** — ROZSTRZYGNIĘTE [2026-05-29]: **odwrócone wg klasy** — kurierzy TR dostają krytykę TR, kurierzy Zakonu krytykę Zakonu (Pule A/B w `lore/plotki-i-pogloski.md`). Neutralne/forshadow wspólne.
44. **Plotki: wszystkie prawdziwe** czy są dezinformacje? (Pule A/B ugruntowane faktami; osobne fałszywe tropy — otwarte.)

## Rekwizyty i produkcja

45. **Format mapy** (A4 vs A3).
46. **Mapa per gracz czy per grupa** (12 vs 48 kopii)?
47. **Szyfrownik per gracz czy per grupa**?
48. **Stylizacja kopert** - jaki wygląd, jaki wosk, jaka pieczęć?
49. **Dźwięk dzwonu** — ROZSTRZYGNIĘTE [2026-06-03, Oskar]: **bez dedykowanego rekwizytu dźwiękowego.** „Dziewiąte bicie" zostaje wyłącznie jako **narracyjny** znacznik czasu finału (koperta Z7 + scenka) — nie produkujemy efektu dźwiękowego. (Anachronizm Tuba Dei pozostaje rozwiązany kanonem: dzwonu nie nazywamy — `lore/fakty-vs-fabula.md` bez zmian.)
50. **Mechanika zliczania głosów** — ROZSTRZYGNIĘTE [2026-06-03, Oskar]: **Jordan i Albrecht liczą fizycznie odebrane listy tuż przed finałową sceną** i znają wynik (doprecyzowanie Wariantu B z `finalowe-glosowanie.md`). Bez pudełek/QR.
64. **Retrofit K1/K2/K3 na konwencję głosu** — ROZSTRZYGNIĘTE [2026-06-01, Oskar]: **hybryda, nie przepisywanie** — do K1/K2/K3 **dorzucona oprawa narracyjna** (otwarcie + zamknięcie, *kursywa*), wiadomości z nadawcą zostają roman. Konwencja typograficzna: **kursywa = głos z głów, roman = słowa świata** (wiadomość/cytat NPC). Zastosowane do K1, K2, K3, K-Z3b.
    - **AKTUALIZACJA KIERUNKU [2026-06-02, Oskar]:** pierwszy retrofit poszedł *extend* (dorzucona oprawa); Oskar chce teraz głębszej przebudowy pierwszych listów: **(a)** narracja z głów = **2. osoba „you/your"** (K1–K3), nie 1. os. mn.; **(b)** plotki **wplecione w narrację-podróż**, nie wyliczone cytaty (zastępuje notkę „plotki docelowo roman"); **(c)** rama **K2 przestaje być głosem zleceniodawcy** → scena-odkrycie (kurierzy sami orientują się, że R. zniknął), slip „— R." = jedyny dokument-nadawca; **(d)** Zasada #3 — koperta opisuje świat wyobrażony, **nie komentuje realnych czynności gracza** ani meta-mechaniki (precz „open once clear", „you tear it open", „he will put something in your hand"). Notatki rewizji w draftach K1/K2/K3/K-Z3b; kanon → `mechanics/koperty-mg.md` §Osoba narracji + Zasada #3. **Status: do wprowadzenia (drafty), czeka na review Oskara, potem re-render od zera.**

## Naginki historyczne - decyzje

> **ZAMKNIĘTE [2026-06-03, Oskar]:** #51–54 nie są otwartymi decyzjami — pokrywa je istniejący kanon, Oskar nie zgłasza zmian. #55 = bieżące, uzupełniane w trakcie.

51. **Czy używamy nazwy "Picollo"** — ROZSTRZYGNIĘTE: **tak, używamy Piccolo** (kanon #34). Stylizacja nazwy w fikcji = kosmetyka, bez znaczenia dla mechaniki.
52. **Czy zachowujemy kalimbę** — ROZSTRZYGNIĘTE: **tak** (kanon #27/#62) — Z4/Z8.
53. **Czy mówimy o Tuba Dei** — ROZSTRZYGNIĘTE: **nie** — dzwonu nie nazywamy (kanon, `lore/fakty-vs-fabula.md`). Powiązane z #49 (brak rekwizytu dźwiękowego).
54. **Czy zakończenie ma być alt-history** — ROZSTRZYGNIĘTE: **hybryda** — fakty historyczne stałe, scenka przesuwa ciężar emocjonalny (kanon #16, `concept/04-faza-3-final.md`).
55. **Inne anachronizmy** które autor planuje (do uzupełnienia w trakcie).

## Meta-pytania (jak pracujemy)

56. **Częstotliwość pracy** - codziennie godzina, czy weekendowo dłużej?
57. **Z kim konsultujemy** - tylko autor, czy ktoś jeszcze (znajomi, animatorzy)?
58. **Kiedy playtest** - tydzień przed, miesiąc przed, dwa tygodnie?
59. **Budżet** — ROZSTRZYGNIĘTE [2026-06-03, Oskar]: **druk domowy w dniu gry** — cały stos drukowany na własnej drukarce; brak osobnego budżetu / zewnętrznej produkcji. Aktorzy = znajomi (Piotr/Zosia), kostiumy własne (#33).
68. **Kiedy review prototypu (koperty + skrypty)** — ROZSTRZYGNIĘTE [2026-06-02, Oskar]: **w MVP, nie na zamknięcie prototypu.** Prototyp = zamknięty (cały stos wyrenderowany, dane Z1 spójne, R2 zrobione). Review stosu (Oskar + Piotr) i dry-run R3 wchodzą jako zadania MVP — **nie blokują** startu Fazy A. Przechodzimy do MVP.
69. **Reorganizacja repo na wejściu w MVP** — ROZSTRZYGNIĘTE [2026-06-02, Oskar], 4 wybory:
    - **(a) Brak osobnego `mvp/`** — folder był pusty, usunięty. Od MVP **działamy w roocie** (puzzles/, mechanics/, envelopes/, prototype/ dla artefaktów).
    - **(b) CLAUDE.md ↔ index.md = podział ról** — CLAUDE.md (auto-ładowany) trzyma lean+AKTUALNĄ strukturę + wszystkie zasady; index.md = tylko głęboki detal kopert (3 osie/join-key). „Konwencja utrzymania" żyje w 1 miejscu (CLAUDE.md §Workflow), index linkuje. Każdy fakt = jeden dom.
    - **(c) roadmap.md = tylko kolejność faz** — checkboxy `[ ]/[x]` ze STANEM usunięte; status żyje wyłącznie w `dashboard.md`. roadmap trzyma kolejność/zakres A–E.
    - **(d) prototype/ — promocja baz operacyjnych** — żywe bazy MVP (skrypty aktorów, pergamin, z7-szyfrogram, shopping-list) wychodzą z `prototype/` do folderów docelowych + aktualizacja wszystkich refs; snapshoty prototype-only (pass-spojnosci, envelope-map) → `todo/archive/`; generatory/podglądy (icons/, print/, meta-cards/, HTML) zostają. Mapping docelowy ustalany przed przenosinami.

## Rozbieżności board (Whimsical) vs pliki .md

60. **Numeracja zagadek F2B — board ≠ pliki** — ROZSTRZYGNIĘTE [2026-05-29, v2]: **kanon ustalony**. TR: **Z3** infiltracja zamku, **Z4** melodia flisaka (kalimba), **Z5** sensoryczna z piernikiem, **Z6** herby hanzeatyckie (Aleja Gmerków, ul. Królowej Jadwigi). Krzyżacy (lustra): **Z3Z** infiltracja Piccolo, **Z8** melodia zakonu, **Z9** sensoryczna, **Z10** polichromie/Bestiariusz. Finały: **Z7** (TR), **Z11** (krzyżacy). „TR w Piccolo / Związek Pruski / pogłębienie TR" = **tylko tło fabularne do kopert**, nie mechanika. Patrz `puzzles/00-master-list.md`.
61. **„Zagadka nr 5" dubluje się** — ROZSTRZYGNIĘTE [2026-05-29]: Z5 = **sensoryczna z piernikiem** (mechanika); „Związek Pruski / piekarz" = opcjonalne tło do koperty.
62. **„melodia flisaka" = kalimba?** — ROZSTRZYGNIĘTE [2026-05-29]: **tak** — Z4 melodia flisaka i Z8 melodia zakonu używają **kalimby**. Patrz `puzzles/kalimba.md`.
63. **Które zagadki bramkują finał** — ROZSTRZYGNIĘTE [2026-05-29]: **Z3/Z3Z (obowiązkowa) + 1 opcjonalna**, klucz wymienialny przez MG. Patrz `concept/03-faza-2b-asynchroniczne.md`.

65. **Z3 — sekwencja kradzieży vs wręczenie K-Z3b** — ROZSTRZYGNIĘTE [2026-06-02, Oskar]: **model patrolu — Modele A i B się ŁĄCZĄ, nie wykluczają.** Komtur **wręcza K-Z3b (milcząco, meta) → odchodzi kawałek → odkłada listę w konkretnym miejscu → patroluje** w jej zasięgu. Lista cały czas na widoku, ale patrol ma momenty, gdy na nią nie patrzy = okno kradzieży. K-Z3b = **olśnienie wyprzedzające** kradzież (Model A); „wręczy i odejdzie" = odejdzie kawałek, nie zniknie (Model B). **Do przepisania:** STEP 3 karty Albrechta z „obrotu w miejscu" na **patrol** (telegraf/powtarzalność/reset zostają), STEP 2 „nie odpędzaj" → „wręcz→odejdź kawałek→patroluj". Pełny opis: `envelopes/miasto-4-Z3b.md §Rewizja (SEKWENCJA)`, `materials/actors/albrecht-actor-card-draft.md` (flaga góry + PLANNING NOTES).
66. **Z2 — warstwa glifów** — ROZSTRZYGNIĘTE [2026-06-02, Oskar]: po rozwiązaniu zagadki gracze mają **3 ścieżki `[glif]–[miejsce]–[osoba]–[atrybut]`, tylko jeden glif istnieje na mapie** (Piccolo); sami ustalają cel, porównując glify z mapą. **Cel NIE jest wyłożony** w zagadce (redundancja zdjęta). ⚠ **Zostaje zależność techniczna (otwarta):** glif Piccolo musi realnie istnieć na wygenerowanej mapie/deszyfrowniku (`public/maps/`) — zarezerwować przy generacji + dobrać 2 wiarygodne, ale nieobecne glify. Patrz `puzzles/droga-do-jordana.md §D`, `envelopes/miasto-2-Z2.md §Rewizja D`.
67. **Zakres 2. osoby narracji** — ROZSTRZYGNIĘTE [2026-06-02, Oskar]: **ujednolicić do 2. os. „you" we WSZYSTKICH kopertach** (K1, K2, K3, K-Z3b, K-Z4, KF) — bez różnicowania, głos zbiorowy „we" wycofany także z finałowych. Notatki rewizji w draftach; kanon → `mechanics/koperty-mg.md §Osoba narracji`.
70. **Język materiałów — adresat decyduje** — ROZSTRZYGNIĘTE [2026-06-02, Oskar]: **dwa adresaty.** (a) **GRACZ → EN** (koperty `envelopes/`, rekwizyty player-facing `materials/props/`, mapy, karty deszyfrujące — gracze nie mówią po polsku). (b) **AKTORZY + MG → PL** (`materials/actors/`, `materials/ops/`: instrukcje, podpowiedzi, tracking, choreografia — Piotr/Zosia/Oskar to Polacy, PL ułatwia). **Wyjątek:** materiał aktora/MG cytujący konkretną treść zagadki / odpowiedź gracza (hasło, ciphertext, kwestię z koperty) zachowuje oryginał (EN). Nazwy własne toruńskie zawsze w oryginale. **⚠ Dług:** obecne drafty w `materials/actors/` i `materials/ops/` są EN → do przetłumaczenia na PL (zadanie MVP). Kanon → `CLAUDE.md §Workflow → Język materiałów`.

71. **Handler toru KZ — żywy NPC** — ROZSTRZYGNIĘTE [2026-06-02, Oskar]: **Albrecht (Zosia) jest żywym handlerem KZ** — po Z2 kurierzy KZ trafiają do niego (zamiast do Jordana) i dostają od niego zadanie Z3Z (infiltracja Piccolo) + Tabelę 1. **Odwraca** decyzję ramową #5 [2026-05-29] „Krzyżacy NIE mają żywego NPC". Symetria obsadowa: każdy aktor = sojusznik jednej frakcji + cel infiltracji drugiej (Jordan: handler TR / cel KZ; Albrecht: handler KZ / cel TR). ⚠ Do aktualizacji: `CLAUDE.md` (nota „Jordan obsługuje oba tory"), karta Albrechta (rola handlera KZ + framing K3-K), `droga-do-jordana.md` (theming Z2 KZ → cel = Albrecht). Patrz `concept/05-tor-krzyzakow.md §REWIZJA`.

72. **Z11 — mechanika finału krzyżaków** — ROZSTRZYGNIĘTE co do modelu [2026-06-02, Oskar]: **dwie tabele, KZ-only** (TR/Z7 zostaje Cezar). Tabela 1 (**4×4**: wiersze=kolory EN Red/Green/Brown/Black, kolumny=**rysunki** Gingerbread/Sword/Ladle/Candle; komórki=16 symboli-gmerków) → przecięcie `kolor szaty Jordana (brązowy) × chochla` = **symbol-klucz S11 (centralny)** → wiersz Tabeli 2 (tabula recta 16×A–Z, podstawienie MARIENBURG) → parol dla Albrechta. **Klucz wspólny dla frakcji KZ** (nie per grupa). Tekst-reguła Tab.1 OGÓLNY (bez „szaty/chochli"). **Wyrenderowane** [2026-06-02]: `public/z11-tabela-1-symbole.pdf` (A4), `public/z11-tabela-2-tabula-recta.pdf` (A4 landscape); generator `tools/z11-cipher/`. **Parol = MOTTO ZAKONU** `HELFEN, HEILEN UND WEHREN!` [ROZSTRZYGNIĘTE 2026-06-03] — to samo co klucz Z7 (symetria finałów); ciphertext `UEFNEJ UEGFEJ TJI WEUPEJ`. **Podanie motta Albrechtowi w finale odblokowuje oddanie mu listu** (obie frakcje); szyfrogram wydawany **po opcjonalnej Z8/9/10 (pozycja 4, przedostatnia koperta, wymienialny)** [Oskar 2026-06-03] — NIE w finałowej kopercie; finałowa `krzyzacy-5-Z11` tylko każe go odszyfrować. Brama w `albrecht-actor-card §FINALE`, wzmianka TR w `miasto-6-Z7`. **Otwarte:** styl symboli (gmerki robocze / heraldyka / astro), miejsce wydania Tab.2. Spec: `puzzles/z11-szyfr-spec.md`; drafty: `materials/props/z11-tabela-symboli-draft.md`, `z11-tabula-recta-draft.md`.

73. **Z2 KZ — parol Albrechta** — ROZSTRZYGNIĘTE [2026-06-03, Oskar]: **„the Komtur's seal"** (wariant „zostaw pieczęć"). Gracz dedukuje z zagadki logicznej 3×3, że Albrecht niósł rano pieczęć, i nazywa to przy weryfikacji. Świadomie prosty (bez klamry finałowej jak miecz TR) — priorytet: szybki render. Zsynchronizowane: `envelopes/krzyzacy-2-Z2.md`, `materials/actors/albrecht-actor-card-draft.md §STEP K1`.

74. **Z11 KZ — dystrybucja Tabeli 2** — ROZSTRZYGNIĘTE [2026-06-03, Oskar]: **obie tabele (Tabela 1 + Tabela 2) włożone do koperty `krzyzacy-3-Z3Z`** (Albrecht wręcza tę kopertę; tabele w środku — nie z ręki). Wynika z zasady #76. Gracz nosi komplet przez drugą połowę gry; koperta finałowa Z11 nie dokłada rekwizytu. Zsynchronizowane: `envelopes/krzyzacy-3-Z3Z.md`, `krzyzacy-5-Z11.md`, `albrecht-actor-card §STEP K3` + flow strip. Domyka „miejsce wydania Tab.2" z #72.

76. **Nośnik treści — wszystko w kopertach** — ROZSTRZYGNIĘTE [2026-06-03, Oskar]: **wszystkie pomoce papierowe (tabele, szyfrogram, mapa, deszyfrownik, pergamin, listy) są fizycznie w kopertach** razem z briefem etapu. Aktorzy/MG **nie wręczają luźnych kartek** — tylko koperty. Poza kopertami krążą wyłącznie **przedmioty-rekwizyty** (kalimba, słoiczki, miecz). Konsekwencje: Tab.1+Tab.2 → koperta Z3Z (#74); szyfrogram Z11 → koperta opcjonalnej Z8/9/10 (nie wydawany luzem przez MG). Kanon: `mechanics/koperty-mg.md §Zasada nadrzędna #2b`.

75. **Z10 KZ — klucz A/B/E (spot-check)** — ROZSTRZYGNIĘTE [2026-06-03, Oskar]: **ufamy researchowi A/B/E** — render bez wizji lokalnej. Ryzyko przyjęte; opcjonalny spot-check Szeroka 22 w dniu gry nie blokuje renderu. Zsynchronizowane: `envelopes/krzyzacy-4-Z10.md`.

77. **KZ — jak trafiają do Piccolo (symbol nawigacyjny)** — ROZSTRZYGNIĘTE [2026-06-03, Oskar]: rozkaz Albrechta **K3-K niesie symbol Piccolo** = glif mapy **≡** (L01). Luka: TR uczą się „≡ = Piccolo" rozwiązując **swoje** Z2 (porównanie glifów z mapą), ale KZ tej zagadki nie robią — ich Z2 prowadzi do **Albrechta** (glif zamku), nie do Piccolo. Glif ≡ jest always-on landmark na **wszystkich 10 mapach** (mapa = wspólny Z1), więc KZ mieli Piccolo na mapie, brakowało tylko **klucza, który znak to jest**. Handler (Albrecht) podaje go wprost w treści rozkazu — spójne z bramą KZ *społeczną*, nie *epistemiczną* (nawigacja nie jest tu zagadką). Zsynchronizowane: `envelopes/krzyzacy-3-Z3Z.md` (treść rozkazu + §Symbol Piccolo), `prototype/print/src/krzyzacy-3-Z3Z.html` (inline-SVG ≡), `materials/actors/albrecht-actor-card-draft.md §STEP K2`, `concept/05`, `puzzles/zamek-krzyzacki-lista.md §Z3Z`. ⚠ `public/krzyzacy-*-3-Z3Z.pdf` do re-renderu.

---

## Sugestia kolejności rozstrzygania

1. **Najpierw "STRATEGICZNE" (1-7)** - bez nich nic nie ruszy.
2. **Potem "STRUKTURALNE" (8-17)** - kształtują dalszą pracę.
3. **Treść zagadek (18-27)** - praca twórcza, na spokojnie.
4. **NPCs i logistyka (28-50)** - wymagają realnych konsultacji (lokale, ludzie).
5. **Naginki (51-55)** - korekty w trakcie.

## Jak dodawać nowe pytania

Gdy podczas pracy pojawia się nowa kwestia do rozstrzygnięcia - dopisz tu pod numerem ciągłym. Łatwiej śledzić co pozostało.
