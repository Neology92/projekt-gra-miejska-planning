# map.md — Rejestr glifów i detali miejsc Z1 (GLOBALNY KONTRAKT)

> **To jest zamrożony rejestr.** Realizuje regułę autora: **1 miejsce == 1 stały glif == 1 stały detal/piktogram — niezależnie od grupy.** Każda ścieżka Z1 (per grupa kolorowa) jest *instancją* wzorca prototypu rysowaną **z tego rejestru** — nie wymyśla własnych przypisań.
>
> **Relacja do innych plików:**
> - `puzzles/z1-szlak-spec.md` — kanon **mechaniki** Z1 (dwie warstwy, łańcuch 4 + pętla dystraktorów, granica spoilera, klucz MG). Ten plik go NIE zastępuje — dokłada **globalny rejestr miejsc** i reguły przydziału dla 10 grup.
> - `puzzles/szlak-symboli.md` — rationale tras + **reguły generowania** (4 przystanki, budżet 12±2 min, koniec u MG na Rynku Staromiejskim).
> - `puzzles/ikonografia-miejsc.md` — katalog cech → źródło detali; tu są przypisania kanoniczne.
> - `prototype/icons/*.svg` — biblioteka ikon (kontrakt stylu niżej).
>
> **Zasada zmiany:** podmiana glifu/detalu/miejsca → zmieniasz **tutaj**, potem propagujesz do map, deszyfrowników, legend, K1, kluczy MG.

---

## 1. Dwie warstwy (przypomnienie)

- **Glif (mapa)** — abstrakcyjny znak nawigacyjny: mówi *gdzie iść*, **nie zdradza**, co tam jest. Klucz kanoniczny glifu = **kod miejsca** (np. `C06`). Renderowany znak (kształt / docelowo **gmerk**) jest **kosmetyczny i wymienny**, ale **1 kod = 1 znak na zawsze**.
- **Detal / piktogram (deszyfrownik)** — obrazkowy symbol *co wypatrzeć* w terenie. **1 miejsce = 1 detal** (ikona reużywana w każdej grupie).

Deszyfrownik (detal → następny glif) jest **per grupa** — patrz §4. Rejestr glif↔detal↔miejsce jest **globalny**.

## 2. Reguły globalne

1. **1 miejsce = 1 kod glifu = 1 detal.** Bez wyjątków, niezależnie od grupy.
2. **Reużycie ikon:** to samo miejsce → ta sama ikona SVG w każdej ścieżce. Ikony generujemy dla **unii miejsc faktycznie użytych**, nie dla całej puli.
3. **Zgodność z rzeczywistością (twarda):** detal musi być **realnie wypatrzalny z ulicy 24/7**. Status weryfikacji w kolumnie „Źródło":
   - `✓#n` — haczyk potwierdzony w wiki `przewodnik-miejsc-gry.js` (punkt n).
   - `⚠ teren` — **wiki milczy lub detal niepewny → NIE asertować jako faktu**; oznaczyć do sprawdzenia na zdjęciu/w terenie. Subagent, który nie ma potwierdzenia w wiki, **zostawia ⚠**, nie zmyśla.
4. **Miejsca zarezerwowane** (Z3/Z6/Z10/finał/F2A) — **poza pulą Z1** (lista §6). Motyw flisaka tylko jako **dystraktor** (należy do Z4).
5. **Glify abstrakcyjne** — placeholder geometryczny teraz; **finał = gmerki** (jeden gmerk na kod). Estetyka jest downstream, nie blokuje generacji tras.

---

## 3. REJESTR MIEJSC (pula Z1)

Kolumny: **Kod** (= glif, stały) · **Detal** (piktogram, stały) · **Miejsce** · **Strefa** · **Haczyk** (co wypatrzeć) · **Źródło** · **Rola** (Ł=chain-eligible · D=dystraktor · S4=stop-4-eligible przy Rynku Staromiejskim · START=tylko start · DYS-only=tylko dystraktor).

### Strefa NE — Nowe Miasto (typowe starty / podejście od wschodu)

| Kod | Detal | Miejsce | Haczyk | Źródło | Rola |
|---|---|---|---|---|---|
| `N01` | piernik (serce) | **Pomnik Piernikarki** (zbieg M. Garbarów / Kr. Jadwigi) | kosz pierników; piesek szarpie suknię | ✓#35 | Ł · ikona ✓ `piernik.svg` |
| `N02` | gęś | **Pomnik Przekupki** (Rynek Nowomiejski, przy Modrym Fartuchu) | gęś u stóp (chwytliwsza niż waga); waga; kosz jaj | ✓#34 | Ł · ikona `ges.svg` (było `waga.svg` — zapas) |
| `N03` | fartuch (modry) | **Gospoda Pod Modrym Fartuchem** (Rynek Nowomiejski 8) | nazwa-godło „modry fartuch"; gotyk+barok | ✗ **teren 2026-06-01: BRAK widocznego fartucha/szyldu** — detal niewypatrzalny | **DYS-only** (martwy wiersz; NIE w łańcuchu) |
| `N04` | lew (złoty) | **Apteka Pod Złotym Lwem** (Rynek Nowomiejski 13) | pozłacana rzeźba lwa **nad wejściem (drzwiami)** | ✓#13 + ✓ **teren 2026-06-01** (widoczny; godziny apteki nieistotne) | Ł |
| `N05` | bazylika (łuki przyporowe) | **Kościół św. Jakuba** (Rynek Nowomiejski) | gotyk bazylikowy; łuki przyporowe; nawa główna wyższa | ✓#36 + ✓ **teren 2026-06-01** (łuki + bryła kościoła rozpoznawalne) | Ł |
| `N06` | szafa (z szufladami) | **Teatr Baj Pomorski** (Piernikarska 9) | fasada jak drewniana szafa: drzwi + szuflady + falisty gzyms (zegar wycofany z ikony 2026-06-01) | ✓#43 | Ł |

### Strefa C — Rynek Staromiejski i serce (kandydaci na STOP-4 u MG)

| Kod | Detal | Miejsce | Haczyk | Źródło | Rola |
|---|---|---|---|---|---|
| `C01` | **astrolabium** (instrument w dłoni posągu) | **Pomnik Kopernika** (SE róg Ratusza) | astrolabium / sfera armilarna trzymane przez posąg | ✓ **MUST-HAVE [autor, 2026-06-01]** — posąg trzyma instrument; fakt potwierdzony przez autora (wiki #1 go nie wymienia, ale jest). Ikona: `astrolabium.svg`. Zapas: `delfin.svg` (delfin w studzience) | Ł · S4 |
| `C02` | osioł | **Osiołek** (zbieg z ul. Żeglarską) | ostra metalowa krawędź grzbietu (pręgierz) | ✓#3 | Ł · S4 |
| `C03` | melonik | **Pies Filuś** (wylot ul. Chełmińskiej) | melonik prof. Filutka w pyszczku kundelka | ✓#4 | Ł · S4 |
| `C04` | wieża bez hełmu | **Ratusz Staromiejski** (Rynek 1) | brak hełmu/korony wieży (Szwedzi 1703); zegar 24-kt cyfry | ✓#5 | Ł · S4 |
| `C05` | anioł (figurka) | **Anioł „Jonasz"** (parapet Ratusza od str. Kopernika) | brązowa figurka anioła; szlak 11 aniołów | ✓#6 | D · S4 (⚠ blisko C01/C04 — ten sam Ratusz; ostrożnie w dyspersji) |
| `C06` | gwiazda | **Kamienica Pod Gwiazdą** (Rynek 35) | pozłacana gwiazda + data 1697 na żółtej fasadzie | ✓#7 | Ł · S4 |
| `C07` | herb/tarcza (daty 1311·1891) | **Dwór Artusa** (Rynek 6) | herb Torunia na szczycie; złote daty 1311/1891 | ✓#8 | Ł · S4 |
| `C08` | kościół bez wieży (3 wieżyczki) | **Kościół NMP / pofranciszkański** (NW róg Rynku) | brak wieży; trzy ośmioboczne wieżyczki + sterczyny | ✓#38 | Ł · S4 |
| `C09` | zegar z jedną wskazówką | **Katedra św. Janów** (Żeglarska 16) | zegar „Flisak"/Digitus Dei ~5 m, **jedna wskazówka** | ✓#39 | Ł · S4 (tuż za rogiem Rynku) |

### Strefa S/SE — Wisła, bramy, mury (typowe podejście od południa)

| Kod | Detal | Miejsce | Haczyk | Źródło | Rola |
|---|---|---|---|---|---|
| `S01` | brama (**ostrołuk ze szpicem**) | **Brama Mostowa** (ul. Mostowa, od Wisły) | gotycki **ostrołuk przejazdu** (+ tablice powodziowe na ościeżu); narożniki zaokrąglone z zewnątrz | ✓#18 + ✓ **teren 2026-06-01** (ostrołuk wypatrzalny; „zaokrąglone narożniki" za subtelne) — ikona `brama-ostroluk.svg` | Ł |
| `S02` | kaszownik (otwory nad bramą) | **Brama Klasztorna** (ul. Ducha Świętego) | gotycki ostrołuk + machikuła z otworami ponad przejazdem — **od zewnątrz (Bulwar Filadelfijski)**; kaszownik widoczny z dołu ale trudny do ikonizacji → ikona = brama trapezowa + dwa łuki + 5 otworów nad przejazdem [ikon przebudowana 2026-06-01] | ✓#19 + ⚠ waypoint = strona zewnętrzna (Bulwar), nie ul. Ducha Świętego | Ł |
| `S03` | brama-łuk (Via Regia) | **Brama Żeglarska** (ul. Żeglarska, od Wisły) | początek Via Regia / Droga Królewska | ✓#20 (⚠ mało wyróżniający detal) | D |
| `S04` | kotwica | **Kotwica na Bulwarze** (Bulwar Filadelfijski) | duża kotwica (Szkoła Marynarki Wojennej) | ✓#30 | Ł |
| `S05` | baszta | **Baszty** (Monstrancja / Koci Łeb / Gołębnik) | nazwane baszty murów wzdłuż Podmurnej | ✓#21 (wiele obiektów) | D |
| `S06` | wąska uliczka z łukami | **Ulica Ciasna** (Podmurna–Mostowa) | 3 m szer.; łuki odporowe między spichlerzami | ✗ **teren 2026-06-01: łuki odporowe NIECZYTELNE dla gracza** (detal filmowy, nie nawigacyjny) | **poza łańcuchem** (ikona `waska-uliczka-luki.svg` wycofana z użycia) |

### Strefa W — Piekary / Rabiańska (typowe podejście od zachodu)

| Kod | Detal | Miejsce | Haczyk | Źródło | Rola |
|---|---|---|---|---|---|
| `W01` | trąbka | **Łuk Cezara** (Piekary 37) | Michał Archanioł z trąbką na attyce; szczątek torów pod sklepieniem | ✓#10 | Ł |
| `W02` | worek zboża | **Spichlerz manierystyczny** (Piekary 4 / Rabiańska 23) | opaski okienne stylizowane na workach zboża | ✓#15 | Ł |
| `W03` | dwa szczyty (trójkątny + półkolisty) | **Posthalternia — spichlerze** (Rabiańska 1 i 3) | różnica zwieńczeń szczytów; głowa Rubinkowskiego przy nr 1 | ✓#14 | Ł |
| `W04` | schodkowy szczyt / tablica | **Dom Kopernika — fasada** (Kopernika 15/17) | maswerkowe polichromie fasady; schodkowy szczyt; tablica 1923 | ✓#11 (⚠ lekki overlap „polichromie" z Z10 — inny obiekt, OK) | Ł |

### Strefa W-far — Skwer Broniewicza / Rapackiego (TYLKO START — ⚠ budżet)

| Kod | Detal | Miejsce | Haczyk | Źródło | Rola |
|---|---|---|---|---|---|
| `F01` | orbity (układ heliocentryczny) | **Fontanna Cosmopolis** (Skwer Broniewicza) | dysze na orbitach 6 planet; tekst De revolutionibus | ✓#40 | START-only (⚠ zweryfikować 12±2) · ikona: rezerwa `astrolabium.svg` |
| `F02` | orbita planetoidy | **Pomnik planetoidy Toruń** (Skwer Broniewicza) | aluminiowa orbita + bryła | ✓#41 | START-only |
| `F03` | kopuła / zbiornik gazu | **Planetarium** (Franciszkańska) | dawny XIX-w. zbiornik gazu | ✓#42 | START-only |

### DYSTRAKTOR-ONLY (motyw zarezerwowany dla Z4 — nigdy w łańcuchu)

| Kod | Detal | Miejsce | Haczyk | Źródło | Rola |
|---|---|---|---|---|---|
| `D01` | flisak ze skrzypcami / żaba | **Fontanna Flisaka** (SW róg Ratusza) | flisak Iwo; osiem żab | ✓#2 | DYS-only (flisak → Z4) |
| `D02` | tratwa flisacka | **Przystań białej floty** (Bulwar) | dawne tratwy flisaków | ✓#33 | DYS-only (flisak → Z4) |

---

## 4. Deszyfrownik jest PER GRUPA (a nie wspólny)

> **Świadome odejście od nieaktualnej notki „wspólny szyfrownik"** w `szlak-symboli.md` §„Wariant dla obu klas". Powód: wspólny deszyfrownik = jedna funkcja następnika (każdy glif → zawsze ten sam następny glif). Wtedy dwie grupy, które dotkną wspólnego glifu, **zlewają się w jedną trasę i tłoczą** — co zabija dyspersję. Dlatego:

- **Globalne (rejestr):** kod↔glif↔detal↔miejsce↔haczyk↔ikona.
- **Per grupa (karta deszyfrownika):** które 4 miejsca tworzą łańcuch i w jakiej kolejności; które 5 to dystraktory; a więc także **wiersze deszyfrownika** (detal → następny glif) i **zamknięta pętla** dystraktorów.
- Ten sam piktogram (np. `melonik` z `C03`) może w karcie grupy A wskazywać inny „następny glif" niż w karcie grupy B — karty są per grupa, gracze ich nie porównują. To jest spójne.

## 5. Reguła przydziału dla 10 grup (DYSPERSJA)

1. **Rozłączność pozycyjna [decyzja Oskara 2026-06-01]:** żadne miejsce nie może wystąpić **na tej samej pozycji kroku** u dwóch grup. (To samo miejsce jako krok 2 u jednej i krok 3 u drugiej — OK; jako krok 3 u obu — NIE.) Egzekwowane **twardo dla kroków 1–3** przez orkiestratora na poziomie szkieletów.
   - **ROZSTRZYGNIĘCIE blokady P1 [decyzja Oskara 2026-06-01: opcja (c)]:** briefing zostaje na **Rynku Nowomiejskim**, twarda rozłączność P1–P3 **zostaje** (NIE poluzowana). Pula tanich P1 (6× `N01–N06`) jest za mała na 10 rozłącznych P1 — więc **część grup dostaje dłuższe pierwsze legi**: P1 głębiej w korytarzu (wejściowe miejsca Starego Miasta od strony NE — `C09` Katedra/Żeglarska, `C02` Osiołek/Żeglarska, `C03` Filuś — oraz `S06` Ulica Ciasna na wsch. krawędzi). Budżet tych grup rośnie do **~14–15 min** (akceptowane). Far-W (`W01–W04`) i nadwiślańskie (`S01–S04`) **nie** są startami przy jednym briefingu NE (traverz >15 min — patrz aneks `z1-sciezki-wzorcowe.md`); wchodzą najwyżej jako P3 „pętli korytarzowej" lub dystraktory.
   - **Krok 4 = zbieg u MG:** wszystkie łańcuchy kończą przy Rynku Staromiejskim (tam kręci się MG). Kandydatów S4 jest **9** (`C01–C09`) — dla 10 grup napięcie: jedna para grup musi dzielić obiekt stop-4. **BEZ startu falami [decyzja Oskara 2026-06-01: wszyscy ruszają równolegle, każdy w swoim tempie]** — zbieg przy MG NIE jest rozkładany czasowo odgórnie; rozprasza go tylko **zróżnicowana długość tras + własne tempo grup**. Do domknięcia przy fanie do 10: albo rozszerzyć pulę S4 (np. `C09` Katedra jako 10. endpoint), albo świadomie dopuścić jedną dzieloną parę stop-4 (to i tak strefa raportu u MG → najmniej kolizyjne miejsce).
2. **Skrajne strefy startu:** rozsiewać pierwsze przystanki po N/E/S/W, by grupy nie ruszały z jednego punktu.
3. **Budżet 12±2 min** liczony jako pełny łańcuch start → P1→P2→P3→P4(=MG); bez zawrotek; jednokierunkowy sweep ku Rynkowi Staromiejskiemu.
   - **[ROZSTRZYGNIĘTE 2026-06-01 — opcja (c), jeden briefing]** Budżet każdej grupy liczymy **od wspólnego briefingu na Rynku Nowomiejskim — dla WSZYSTKICH grup, łącznie z długą pierwszą nogą grup głębokich** (briefing → P1 → P2 → P3 → P4=MG). To NIE jest „od zdyspergowanego fizycznego startu" — ten model (starty rozproszone, liczenie od pierwszego glifu) został **odrzucony** (patrz aneks `z1-sciezki-wzorcowe.md`); nie liczymy budżetu od głębokiego P1, bo wtedy zniknęłaby noga briefing→P1, która właśnie definiuje ryzyko (c). Grupy tanie ~11–14 min; grupy głębokie do ~15 min (akceptowane). Far-S/W jako start dają ~19–24 min → wykluczone jako start.
4. **Strefa W-far (F01–F03)** tylko jako pierwszy glif i **z weryfikacją budżetu** (skraj zachodni — ryzyko przekroczenia 12±2).

## 5a. Szkielety 3 ścieżek wzorcowych (ten etap — skraje E / S / W)

Rozłączność pozycyjna sprawdzona (P1–P4 parami różne). Każda kończy na **innym** obiekcie Rynku Staromiejskiego.

| Ścieżka | Strefa | P1 | P2 | P3 | P4 (S4, koniec u MG) |
|---|---|---|---|---|---|
| **EX-1 (wschód)** | NE → centrum | `N01` Piernikarka | `N03` Modry Fartuch | `C03` Filuś | `C06` Pod Gwiazdą |
| **EX-2 (południe)** | Wisła/bramy → Rynek | `S01` Brama Mostowa | `S02` Brama Klasztorna | `C09` Katedra Janów | `C02` Osiołek |
| **EX-3 (zachód)** | Piekary → Rynek | `W01` Łuk Cezara | `W02` Spichlerz manier. | `C08` Kościół NMP | `C07` Dwór Artusa |

Rozłączność: P1 {N01,S01,W01} · P2 {N03,S02,W02} · P3 {C03,C09,C08} · P4 {C06,C02,C07} — wszystkie różne ✓.

Dystraktory (5/ścieżka, zamknięta pętla rozłączna z łańcuchem) — dobierają subagenty z rejestru przy generacji.

## 6. WYKLUCZONE z puli Z1 (rezerwacje innych zagadek)

- **Biedronka z polichromiami** (Szeroka 22) → **Z10**; godziny sklepu.
- **Aleja gmerków / herby hanzeatyckie** (Kr. Jadwigi) → **Z6**.
- **Zamek krzyżacki, Gdanisko, młyn zamkowy, tama, pomnik smoka, Hit Casino** (Przedzamcze) → **Z3 / finał**.
- **Pizzeria Piccolo** (Prosta 20) → **F2A / Jordan** (cel Z2, nie Z1).
- **Kępa Bazarowa** (za Wisłą) → poza obszarem pieszym Z1.
- Motyw **flisaka** (`D01`,`D02`) → należy do **Z4**; w Z1 tylko jako dystraktor.

## 7. Kontrakt stylu ikon (wektor)

Wszystkie ikony detali = SVG w stylu `prototype/icons/piernik.svg` + `astrolabium.svg`:

- `viewBox="0 0 64 64"`, `role="img"`, `aria-label`, `<title>`.
- Paleta brąz/beż: wypełnienia `#a86c38` / `#efe0b8`; obrysy `#6e4824` / `#8a6516` / `#5c4310`; podświetlenie `#c08a52`; jasny akcent `#fdf3e3`.
- `stroke-width` ~2.4–3; `stroke-linejoin`/`linecap="round"`; `stroke-dasharray` na ornament (jak lukier/graduacja).
- Jeden czytelny obiekt, sylwetkowy, bez tekstu. Plik: `prototype/icons/<detal>.svg`.
- **Gotowe (13 SVG):** `piernik.svg` (`N01`), `astrolabium.svg` (`C01` Kopernik — instrument w dłoni), `delfin.svg` (zapas dla `C01`), oraz 10 detali łańcuchowych wzorców: `melonik` `gwiazda` `osiol` `brama-zaokraglona` `kaszownik` `zegar-jedna-wskazowka` `trabka` `worek-zboza` `kosciol-bez-wiezy` `herb-tarcza`. Reszta (detale tylko-dystraktorowe) — do wygenerowania dla unii użytych miejsc po zamrożeniu tras.

## 8. Checklista spójności (per ścieżka, przed złożeniem)

- [ ] Mapa pokazuje **9 glifów** (4 łańcuch + 5 dystraktorów), markery nieodróżnialne, bez nazw.
- [ ] Każdy „następny glif" w deszyfrowniku **istnieje na mapie tej ścieżki**.
- [ ] Pętla dystraktorów **zamknięta i rozłączna** z łańcuchem (nie wpada na żaden glif łańcucha).
- [ ] Łańcuch = 4 kroki, kończy się przy Rynku Staromiejskim (KONIEC → MG).
- [ ] Każdy detal = realnie wypatrzalny; `⚠ teren` zostaje `⚠` (nie asertujemy faktu).
- [ ] Glif/detal zgodne z rejestrem (kod ↔ glif ↔ detal niezmienne).
- [ ] Rozłączność pozycyjna kroków 1–3 z innymi ścieżkami zachowana.
- [ ] Ikony reużyte z biblioteki; nowe w kontrakcie stylu §7.
