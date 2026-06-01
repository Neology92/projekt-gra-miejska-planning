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
| `N02` | waga | **Pomnik Przekupki** (Rynek Nowomiejski, przy Modrym Fartuchu) | waga u stóp; gęś; kosz jaj | ✓#34 | Ł |
| `N03` | fartuch (modry) | **Gospoda Pod Modrym Fartuchem** (Rynek Nowomiejski 8) | nazwa-godło „modry fartuch"; gotyk+barok | ✓#12 (⚠ teren: czy fizyczny szyld/fartuch widoczny) | Ł |
| `N04` | lew (złoty) | **Apteka Pod Złotym Lwem** (Rynek Nowomiejski 13) | pozłacana rzeźba lwa we wnęce muru przy wejściu | ✓#13 | Ł |
| `N05` | bazylika (łuki przyporowe) | **Kościół św. Jakuba** (Rynek Nowomiejski) | gotyk bazylikowy; łuki przyporowe; nawa główna wyższa | ✓#36 | Ł |
| `N06` | szafa (z szufladami) | **Teatr Baj Pomorski** (Piernikarska 9) | fasada jak drewniana szafa z szufladami + duży zegar | ✓#43 | Ł |

### Strefa C — Rynek Staromiejski i serce (kandydaci na STOP-4 u MG)

| Kod | Detal | Miejsce | Haczyk | Źródło | Rola |
|---|---|---|---|---|---|
| `C01` | **delfin** (głowa w studzience cokołu) | **Pomnik Kopernika** (SE róg Ratusza) | głowa delfina w studzience; wąsik (2003) | ✓#1 (delfin ✓). **Instrument/astrolabium w dłoni = ⚠ niepotwierdzone — NIE używać jako detalu** | Ł · S4 |
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
| `S01` | brama (zaokrąglone narożniki) | **Brama Mostowa** (ul. Mostowa, od Wisły) | zaokrąglone narożniki; tablice powodziowe w przejeździe | ✓#18 | Ł |
| `S02` | kaszownik (otwór w łuku) | **Brama Klasztorna** (ul. Ducha Świętego) | trzy ostrołuki; kaszownik (otwór na wrzątek) | ✓#19 | Ł |
| `S03` | brama-łuk (Via Regia) | **Brama Żeglarska** (ul. Żeglarska, od Wisły) | początek Via Regia / Droga Królewska | ✓#20 (⚠ mało wyróżniający detal) | D |
| `S04` | kotwica | **Kotwica na Bulwarze** (Bulwar Filadelfijski) | duża kotwica (Szkoła Marynarki Wojennej) | ✓#30 | Ł |
| `S05` | baszta | **Baszty** (Monstrancja / Koci Łeb / Gołębnik) | nazwane baszty murów wzdłuż Podmurnej | ✓#21 (wiele obiektów) | D |
| `S06` | wąska uliczka z łukami | **Ulica Ciasna** (Podmurna–Mostowa) | 3 m szer.; łuki odporowe między spichlerzami | ✓#45 | Ł |

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
   - **Krok 4 = zbieg u MG:** wszystkie łańcuchy kończą przy Rynku Staromiejskim (tam kręci się MG). Kandydatów S4 jest **9** (`C01–C09`) — dla 10 grup to napięcie: część grup może dzielić obiekt stop-4. **Łagodzone startem falami co 5 min** (`grupy-i-klasy.md`) → zbieg rozłożony w czasie. Do domknięcia przy fanie do 10.
2. **Skrajne strefy startu:** rozsiewać pierwsze przystanki po N/E/S/W, by grupy nie ruszały z jednego punktu.
3. **Budżet 12±2 min** liczony jako pełny łańcuch start → P1→P2→P3→P4(=MG); bez zawrotek; jednokierunkowy sweep ku Rynkowi Staromiejskiemu.
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
- **Gotowe:** `piernik.svg` (`N01`), `astrolabium.svg` (rezerwa: strefa kosmiczna `F01`). Reszta — do wygenerowania dla unii użytych miejsc.

## 8. Checklista spójności (per ścieżka, przed złożeniem)

- [ ] Mapa pokazuje **9 glifów** (4 łańcuch + 5 dystraktorów), markery nieodróżnialne, bez nazw.
- [ ] Każdy „następny glif" w deszyfrowniku **istnieje na mapie tej ścieżki**.
- [ ] Pętla dystraktorów **zamknięta i rozłączna** z łańcuchem (nie wpada na żaden glif łańcucha).
- [ ] Łańcuch = 4 kroki, kończy się przy Rynku Staromiejskim (KONIEC → MG).
- [ ] Każdy detal = realnie wypatrzalny; `⚠ teren` zostaje `⚠` (nie asertujemy faktu).
- [ ] Glif/detal zgodne z rejestrem (kod ↔ glif ↔ detal niezmienne).
- [ ] Rozłączność pozycyjna kroków 1–3 z innymi ścieżkami zachowana.
- [ ] Ikony reużyte z biblioteki; nowe w kontrakcie stylu §7.
