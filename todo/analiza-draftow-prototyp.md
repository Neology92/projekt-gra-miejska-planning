# Analiza draftów prototypu — do adjudykacji Oskara

> **Cel:** krytyczny przegląd całego łańcucha prototypu (tor TR) pod kątem Twoich założeń: immersja/scena, uzasadnienie fabularne, element musi bramkować, wymowa moralna (TR=źli), anty-prowadzenie-za-rączkę, każda grupa przechodzi, plot twist.
> **Jak używać:** każdy punkt ma `[ ]` — zaznacz `[x]` co wprowadzić, `[-]` co odrzucić, dopisz uwagi. To analiza, nie zmiany w draftach (poza defektem #0, który zgłaszam osobno).
> **Data:** 2026-06-02.

---

## STATUS DECYZJI OSKARA [2026-06-02]

- **0.1 (defekt PDF):** ✅ naprawione — re-render z poprawionego motta (OLPSLU=HEILEN+7), zweryfikowane.
- **1.1 (ton/inwersja):** ✅ WPROWADZIĆ wariant (b) — śmierć R. „za grę wielkich" jako nośnik goryczy. Mechanizm: tor TR → TR/narada źli; tor krzyżacki → Zakon zły.
- **1.2 (lokalizacja K-Z4):** ✅ scena **czysto opisowa/narracyjna** — bez MG nad Wisłą, gracze czytają opis (nie fizyczne miejsce).
- **1.3 (melodia):** 🔄 kierunek = **metafizyczny/abstrakcyjny** (melodia słyszalna „niedaleko flisaka", bez fizycznego grajka) + próba spięcia z **Fontanną Flisaka**. Warianty do wyboru → sekcja na końcu pliku „§ Spięcie melodii z fontanną".
- **1.4 (trudność finału):** ✅ ZOSTAW, testujemy (a). Korekta założenia: gra ~2h (18:15→20:30) z posiłkiem, nie 4h. Z7 bez odchudzania.
- **1.5 / 1.6 / 3.x:** do rozpatrzenia przez Oskara (jeszcze nie adresowane).

---

## 0. DEFEKT TECHNICZNY (nie design — do naprawy)

**0.1 — PDF z7 nieaktualny względem poprawionego motta.**
- Źródło (`prototype/print/src/z7-przechwycony-list.html:13`) = `OLSMLU, OLPSLU…` (HEILEN+7) — **poprawne**, spójne z pergaminem (`pergamin-lista-tr-draft.md:17`).
- Ale **zacommitowany PDF** (`prototype/print/z7-przechwycony-list.pdf`) renderowałem PRZED Twoją poprawką — nosi `OLSMLU, OPSMLU…` (stare HILFEN+7). Słowo 2 nie zgadza się z pergaminem → zagadka porównania nagłówków by pękła.
- **Rozwiązanie:** re-render (`pwsh -File render.ps1`). Czysto mechaniczne. *(Zrobię od razu po tej analizie — to regeneracja z już-poprawionego źródła, nie zmiana treści.)*
- [ ] OK na re-render

---

## 1. CO MOŻE CI SIĘ NIE SPODOBAĆ (z propozycjami)

### 1.1 — ⚠️ NAJWAŻNIEJSZE: wymowa moralna NIEOBECNA na ścieżce prototypu
- **Gdzie:** filar tonalny „TR/kupcy = źli, gorzki twist" żyje w `concept/00-overview.md:110` i `concept/04`. Jego nośnikiem jest **głos piekarza w Z5** (`zagadka-sensoryczna.md` §inwersja). **Ale prototyp testuje ścieżkę Z4 (kalimba), nie Z5.**
- **Problem względem Twoich założeń:** na testowanej ścieżce jedyne, co niesie „strona, której służysz, jest podejrzana", to **plotki w K2** (`k2-envelope-draft.md:30-49`) — łatwe do przeoczenia w biegu. Plot twist (Jordan=Bażyński) może wtedy wylądować jako „fajny zwrot", a nie „gorzki". Tracisz filar, który sam nazwałeś najważniejszym tonalnie.
- **Pytanie do Ciebie:** prototyp ma walidować **ton** czy tylko **mechanikę**?
- **Rozwiązania:**
  - (a) Jeśli tylko mechanika — świadomie odpuść ton w prototypie, ton testujemy w MVP z Z5. Najtańsze. Zapisać jako świadomą decyzję.
  - (b) Jeśli ton — dorzuć gorzki akcent na ścieżce Z4: np. w K-Z4 narracja może wybrzmieć, że R. (mały człowiek) zginął za grę wielkich — cena, którą płacą nie ci, co zyskają. Jeden akapit, bez nowej mechaniki.
  - (c) Wzmocnić 1-2 plotki K2 jako mocniej gorzkie (nie do przeoczenia).
- [ ] Wybór: a / b / c / inne

### 1.2 — „Koperta = scena" kontra logistyka MG; najostrzej przy K-Z4
- **Gdzie:** `kZ4-envelope-draft.md` — proza sceny (martwy flisak nad Wisłą) jest najbardziej filmowa z całego stosu. Ale koperta jest **wręczana przez MG w punkcie raportu**, a lokalizacja sceny jest jawnie **nierozwiązana** (planning notes: „gdzie grupa znajduje scenę — do potwierdzenia").
- **Problem:** soczysta proza („in the cold mud at the river's edge, we find him") wypisuje czek, który staging może nie pokryć — jeśli grupa dostaje to przy MG stojącym np. na Rynku, immersja „znaleźliśmy ciało" zgrzyta z miejscem.
- **Rozwiązania:**
  - (a) Uczynić **punkt odbioru MG = nabrzeże Wisły / Bulwar** w fazie 2B — wtedy proza pasuje do miejsca. (Wymaga, by MG tam stał — pozycja MG w F2B i tak otwarta.)
  - (b) Jeśli MG nie może być nad Wisłą — złagodzić prozę (mniej dosłowna lokalizacja „at the river's edge", bardziej „word reaches you of a body by the water").
- [ ] Wybór: a / b / inne

### 1.3 — K-Z4: kto gra melodię, skoro R. nie żyje? (źródło audio in-fiction)
- **Gdzie:** `kZ4-envelope-draft.md` (mechanika: usłysz → zagraj → spisz) + planning note „MG gra melodię… w fikcji «melodia, którą R. grywał»".
- **Problem:** R. jest martwy. Mechanicznie ktoś musi zagrać melodię, by grupa ją odtworzyła. MG gra ją „jako przechodzień/kontakt" — to **miększa meta** niż czyste „rozdanie karty" z K-Z3b. Pod Twój próg immersji to najsłabszy szew tej koperty (sama kalimba **bramkuje** dobrze — nie jest ozdobą).
- **Rozwiązania:**
  - (a) MG = **kontakt z sieci R.** (nie anonimowy przechodzień): „człowiek R. zna jego melodię i gra ci ją, byś mógł powtórzyć". Daje nadawcę meta-gestu.
  - (b) Melodia **z nagrania znalezionego przy ciele** (odtwarzacz jako rekwizyt) — ale to anachronizm/meta, ryzykowne.
  - (c) **Zapis nutowy** przy ciele + ktoś z grupy/MG umie zagrać z zapisu (zakłada umiejętność).
- [ ] Wybór: a / b / c / inne

### 1.4 — Z7 bramkuje twist za najtrudniejszym zadaniem, a finał i tak go ujawnia
- **Gdzie:** `z7-szyfrogram-draft.md` (Cezar +7, porównanie nagłówków Fraktur, 28-liter dekod) + `concept/04` (finał: Piotr=Jordan ujawnia teatralnie).
- **Problem:** to najtrudniejsze zadanie w grze, robione w 4. godzinie przez zmęczoną grupę, przed 20:30. **Wielu nie skończy.** A skoro finał ujawnia twist teatralnie tak czy siak — realnym zyskiem z Z7 jest **poinformowana dostawa** (wiesz, do kogo niesiesz, ZANIM zdecydujesz), nie sam reveal. Czyli najtrudniejsze zadanie nagradza „wiedz 20 minut wcześniej".
- **Pytanie:** czy ciężar Z7 jest proporcjonalny do nagrody?
- **Rozwiązania:**
  - (a) Zostaw trudne — twist = nagroda dla najlepszych, reszta dowiaduje się w finale (świadomie). Drabinka hintów MG (`mg-runsheet.md §Z7`) już łagodzi.
  - (b) Ułatw Z7 (krótszy plaintext / mocniejszy hint w nagłówku).
  - (c) Daj Z7 dodatkową wagę: rozwiązanie = nie tylko wiedza, ale realny atut w finale (np. głos liczony podwójnie / przywilej). **UWAGA:** kłóci się z „1 grupa = 1 głos" (`concept/04`). Tylko jeśli świadomie.
- [ ] Wybór: a / b / c / inne

### 1.5 — Splice „anty-prowadzenie-za-rączkę" może być za subtelny (powiązane z 1.4)
- **Gdzie:** `z7-szyfrogram-draft.md:68-72` — sens twistu gracz skleja sam z TRZECH wątków: trop „chairman" z K2 + wpis #1 pergaminu („they call him chairman") + odszyfrowane zdanie.
- **Problem:** to elegancki, „dorosły" design — ale zmęczona grupa terenowa może **nie połączyć trzech rozproszonych wątków**. Wtedy odszyfrują zdanie „HANS VON BAYSEN IS JORDAN THE COOK" i… nie poczują ciężaru, bo nie pamiętają, że to do „chairmana" mieli nieść list. Ryzyko: twist spłaszczony.
- **Rozwiązania:**
  - (a) Zostaw — to świadomy wybór „nie prowadzić za rączkę"; finał (scenka) i tak spina.
  - (b) Lekkie wzmocnienie jednego ogniwa: np. wpis #1 pergaminu mocniej akcentuje „chairman" (już jest), albo KF jednym zdaniem przypomina trop z K2.
  - (c) Drabinka hintów MG dostaje krok „przypomnij sobie, kogo szukaliście od początku" (do `mg-runsheet.md`).
- [ ] Wybór: a / b / c / inne

### 1.6 — (drobne) Ton ścieżki prototypu może być zbyt jednostajnie mroczny
- **Gdzie:** K1 (groźba ucięcia rąk), K-Z3b (kradzież, „thieves caught"), K-Z4 (martwy człowiek, „died keeping it"), Z7 („read it, then burn it").
- **Problem:** dużo ciężaru/śmierci pod rząd. Karnawał miał dać **kontrast** (zabawa nad grozą), ale w treści kopert dominuje mrok. Może przytłoczyć zamiast budować napięcie.
- **Rozwiązanie:** świadomie wpleść 1-2 lżejsze, karnawałowe akcenty (błazen, absurd zabawy obok grozy) — masz je w palecie klamer (B-smaczki). Albo zostaw — jeśli mrok to zamierzony rejestr.
- [ ] Wybór: wpleść lekkość / zostaw mrok

---

## 2. CO MOŻE CI SIĘ BARDZO SPODOBAĆ

- **2.1 — Klamra masek (A2).** Karnawał **uzasadnia** mechanikę przebrania (K3 „wear another face" — bo i tak wszyscy w maskach) **i** płaci się w finale, gdy „maski spadają" = ujawnienie Jordan=Bażyński. Setup→payoff przez całą grę, z pokryciem historycznym (`karnawal-1454.js`). To najsilniejsza klamra stosu.
- **2.2 — Choreografia Albrechta** (`albrecht-actor-card-draft.md` STEP 3). Telegrafowany, powtarzalny cykl okna kradzieży czysto rozwiązuje sprzeczność „kradzież MUSI się udać każdej grupie" vs „ma być napięciem". Geometria sceny (lista po lewej, obrót w prawo) + reset egzemplarza = produkcyjnie przemyślane.
- **2.3 — Diegetyczny szyfr przez porównanie nagłówków** (Z7 + pergamin). Brak koła deszyfrującego; klucz odkrywany przez zestawienie dwóch dokumentów, które gracz już ma. Font + interpunkcja jako jedyny hint = elegancko, bez rekwizytu-protezy.
- **2.4 — Plant #1 Bażyński** (`pergamin-lista-tr-draft.md:25,40`). Imię na szczycie listy gończej Zakonu, niewinne przy pierwszym czytaniu (znają go jako „Jordan"), retroaktywny payoff po Z7. „Where he lodges by day, we have not learned" = Zakon nie skojarzył kucharza. Mistrzowski detal.
- **2.5 — Klamra flisak = R.** (K-Z4). Domyka zniknięcie pośrednika z K2 („was taken" → zginął strzegąc listu), zamiast zostawić wątek wiszący. Echo legendy flisaka znad Wisły.
- **2.6 — Kalimba bramkuje czysto.** Mapowanie pręcik→liczba to jedyna droga do `621454` — zadanie ma funkcję, nie jest ozdobą. Zgodne z „element musi bramkować".

---

## 3. WNIOSKI: za proste / niespójne / przekomplikowane (jako pytania, nie wyroki)

### 3.1 — Możliwe ZA PROSTE
- **Kalimba (Z4):** hear → play → transcribe, niemal zero dedukcji. Dla zmęczonej grupy terenowej w 4. godzinie to może być **właściwy** poziom (oddech po Z3) — ale nazwij to świadomie.
- **Z2 (3 osoby × {miejsce, zakup}):** logika 3×3, krótka. Jako „brama do Jordana" wystarcza, ale czy nie za błaha jak na jedyną zagadkę logiczną przed rozdziałem torów?
- [ ] Kalimba: zostaw prosta / dołóż warstwę
- [ ] Z2: zostaw / wzmocnij

### 3.2 — Możliwe PRZEKOMPLIKOWANE
- **Z3 = dwie koperty (K3 + K-Z3b) + dwóch aktorów (Jordan wysyła, Albrecht okradany) + meta hand-over** żeby ustawić „złap kartkę z półki". Elegancki reframe (zwiad→kradzież) czy ciężka maszyneria na proste zadanie? Działa, ale to najbardziej rozbudowane ogniwo prototypu.
- **Łańcuch finału:** Z3 daje klucz (nagłówek), Z4 daje szyfrogram (przez przechwycony list), finał = porównaj nagłówki → znajdź shift → odszyfruj → sklej z trzema wątkami. To **4-5 warstw** spinanych pod presją czasu w 4. godzinie. Czy nie za dużo na jeden finał?
- [ ] Z3: zostaw / uprość (jak?)
- [ ] Łańcuch finału: zostaw / odchudź (które warstwy?)

### 3.3 — Niespójności (poza defektem #0)
- **Brak** twardych niespójności fabularnych w łańcuchu — daty (6 II), nazwiska (Bażyński/Albrecht/Tileman), godzina (20:30/8. bicie), motto (HEILEN, po Twojej poprawce) są spójne między kopertami. To dobry znak. *(Jedyny był defekt #0 — artefakt PDF, nie treść.)*

---

## 4. META-WNIOSEK

Łańcuch jest **mechanicznie spójny i fabularnie domknięty** — mocne klamry, czyste bramkowanie, dobry twist. Dwa realne ryzyka, oba do Twojej decyzji:
1. **Ton** (1.1) — prototyp może nie oddać „gorzkiego" filaru, bo ten siedzi w Z5, a testujemy Z4.
2. **Krzywa trudności końcówki** (1.4 + 1.5 + 3.2) — finał piętrzy najtrudniejsze + najsubtelniejsze (szyfr + 3-wątkowy splice) na 4. godzinie. Warto świadomie zdecydować, czy to nagroda dla najlepszych (reszta łapie twist w scence), czy odchudzić.

Reszta to dostrajanie, nie przebudowa.

---

## § SPIĘCIE MELODII Z FONTANNĄ FLISAKA (1.3 — propozycje do wyboru)

**Research (wiki):** `Fontanna Flisaka` — figura flisaka grającego na **skrzypcach** + **8 żab** (brąz, 1914, Georg Wolf, dziś przy SW narożniku Ratusza, Rynek Staromiejski). Inspirowana `legenda-flisak.js`: flisak grą zwabił żaby do Wisły (zapis XIX w., motyw ludowy „muzyk znad rzeki, którego gra prowadzi").

**Trzy napięcia do obejścia:**
1. **Anachronizm** — fontanna 1914, gra 1454. W fikcji NIE może istnieć jako „fontanna".
2. **Lokalizacja** — fontanna na Rynku; R. (flisak) ginie nad Wisłą. Dwa różne miejsca.
3. **Instrument** — legenda/figura = skrzypce; nasz rekwizyt = lamellofon. Rozwiązanie: melodia „ta sama" niezależnie od instrumentu (flisak grał ją na swoim, wy odtwarzacie na swoim) — nie akcentować instrumentu flisaka.

**Mocna zbieżność tematyczna (czemu to w ogóle działa):** flisak-grajek znad Wisły, którego MUZYKA prowadzi/zwabia (legenda) ↔ R.-flisak, którego melodia jest kluczem. Plus: **8 żab ↔ 8. bicie dzwonu** (finał 20:30) — potencjalna klamra liczbowa.

### Warianty (do wyboru — różnią się tym, czy fontanna jest TERENOWA czy META)

**A — Mit znad wody (fontanna = meta-echo, NIE w fikcji).** Melodia R. to stara pieśń rzeczna, „którą znają wszyscy flisacy". Gracze słyszą ją **metafizycznie** — niesioną znad Wisły, jakby sama rzeka/legenda grała (brak fizycznego grajka — R. martwy). Fontanna NIE pojawia się w fikcji; gra świadomie nawiązuje (to ten flisak, którego miasto później uczci) → most w kartce autorskiej po grze.
  - ✅ Najczystsze historycznie, w pełni metafizyczne/abstrakcyjne (zgodne z Twoim „abstrakcyjne, słyszalne niedaleko"). ❌ Fontanna tylko jako meta — jeśli chcesz mocniejszego, namacalnego połączenia, to za mało.

**B — Figura flisaka jako terenowy punkt (gracze idą pod fontannę).** Z4 dzieje się przy figurze flisaka na Rynku. Tam gracze „słyszą"/odtwarzają melodię. Fikcja nie nazywa „fontanny" — mówi o „miejscu flisaka / figurze grajka znad wody". Most metafizyczny: R. zginął nad Wisłą, ale jego melodia „wraca" przy wizerunku flisaka.
  - ✅ Namacalne, 8 żab widoczne (→ klamra 8. bicie), silne połączenie z fontanną. ❌ Anachronizm w kadrze (choć nienazwany), miesza Wisłę z Rynkiem, **kłóci się z Twoją decyzją 1.2** („scena opisowa, bez fizycznej lokalizacji") — chyba że Z4 świadomie dostaje punkt terenowy.

**C — Hybryda: melodia metafizyczna (jak A) + klamra 8 żab → 8. bicie.** Melodia abstrakcyjna znad wody (A), ale flisak staje się **motywem spinającym całą grę**: jego melodia daje datę (`621454`), a jego legenda (8 żab) cicho zapowiada godzinę finału (8. bicie, 20:30). Fontanna = meta + smaczek liczbowy.
  - ✅ Flisak jako klamra początek↔koniec, metafizyczne, fontanna obecna przez 8 żab. ❌ „8 żab → 8 bicie" subtelne/ezoteryczne — może umknąć albo wyglądać przypadkowo.

**Rekomendacja:** **A lub C** (zgodne z Twoim „metafizyczne/abstrakcyjne" + decyzją 1.2 o opisowości). B tylko jeśli świadomie dajesz Z4 punkt terenowy na Rynku (łamie 1.2). Instrument flisaka (skrzypce) — nie akcentować, melodia jest ponad instrumentem.

- [x] **WYBRANO: A** (mit znad wody, fontanna = meta + kartka autorska) [Oskar 2026-06-02]. Klamra 8 żab→8 bicie: **nie**. Wdrożone w `prototype/kZ4-envelope-draft.md` (TEXT v3 + planning notes) i `mg-runsheet.md §Z4`.
