# projekt_gra-miejska-planning — planowanie gry terenowej Toruń 1454

## Co to za projekt

To **projekt-rodzeństwo** dla `B:/Dev/projekt_gra-miejska/` (wiki *Acta Thoruniensia 1454*). Tutaj nie ma kodu wiki ani treści historycznej — tutaj jest **planowanie gry terenowej** osadzonej w buncie mieszczan toruńskich z 6 lutego 1454.

Dlaczego osobny katalog: żeby planowanie gry nie zaśmiecało wiki (ta ma być czystą bazą wiedzy historycznej + zalążkiem materiałów dla gry), a jednocześnie żeby agent pracujący nad planowaniem miał własną przestrzeń z dedykowanym kontekstem.

## Stosunek do projektu siostrzanego (wiki)

`B:/Dev/projekt_gra-miejska/` to **wiki *Acta Thoruniensia 1454*** — pojedynczy plik `index.html` (SPA, ~4830 linii) + treść rozbita na moduły w `src/pages/*.js`. To **źródło prawdy historycznej dla wszystkich faktów w grze.**

**Zasada:** zanim zaproponujesz w planning fakt, postać, datę, miejsce — najpierw sprawdź w wiki. Jeśli autor (Oskar) podaje imię/datę — zweryfikuj przed użyciem (raz już była pomyłka: "Jan Obrzyński" zamiast "Jan Bażyński"). Gdy proponujesz nowe miejsce — sprawdź czy jest na liście 45 punktów w `przewodnik-miejsc-gry.js`. Nagięcia historii są dopuszczalne, ale **świadome** — patrz `lore/fakty-vs-fabula.md`.

**Konwencja wiki**: fakty (kolor `--rubrum`, czerwień) oddzielone od legend (`--legenda`, fiolet) i kwestii spornych (`--disputed`, żółć). Linki wewnętrzne `#/<slug>`.

### Mapa plików w wiki (`B:/Dev/projekt_gra-miejska/src/pages/`)

**Postacie historyczne**:
- `jan-bazynski.js`, `tileman-vom-wege.js` — przywódcy buntu
- `albrecht-kalb.js` — komtur toruński (przeciwnik)
- `ludwig-erlichshausen.js` — Wielki Mistrz krzyżacki
- `henryk-plauen.js`, `mikolaj-rynska.js`, `kopernik-senior.js` — kontekst

**Wydarzenia**:
- `bunt-1454.js` — główne wydarzenie
- `akt-wypowiedzenia.js`, `akt-inkorporacji.js` — dokumenty
- `grunwald-1410.js`, `wojna-13letnia.js`, `bitwa-chojnice.js`, `bitwa-swiecino.js`, `bitwa-zalew.js` — bitwy
- `wyrok-wiedenski.js`, `proces-wiedenski.js`, `nieszawa-konflikt.js`, `kryzys-1430-1440.js` — kontekst polityczny
- `i-pokoj-torunski.js`, `ii-pokoj-torunski.js` — traktaty pokojowe

**Instytucje**:
- `tajna-rada.js` (lista członków — dla Z3), `zwiazek-pruski.js`, `zwiazek-jaszczurczy.js`
- `bractwo-jerzego.js`, `patrycjat-torunski.js`, `cechy-rzemieslnicze.js`

**Miejsca w Toruniu** (czytaj **najpierw** `przewodnik-miejsc-gry.js` — lista 45 punktów z dostępnością):
- `ratusz-staromiejski.js`, `dwor-artusa.js`, `dwor-bractwa-jerzego.js`
- `zamek-krzyzacki.js`, `gdanisko.js` — finał gry
- `kosciol-mariacki.js`, `kosciol-jakuba.js`, `katedra-janow.js` — świątynie
- `krzywa-wieza.js`, `kamienica-pod-gwiazda.js`, `kamienica-modry-fartuch.js`, `dom-kopernika.js`
- `brama-mostowa.js`, `brama-zeglarska.js`, `brama-klasztorna.js`, `baszty-podmurna.js`
- `aleja-gmerkow.js`, `bulwar-filadelfijski.js`

**Życie codzienne / kontekst kulturowy**:
- `karnawal-1454.js` — **kluczowe**, gra dzieje się w czasie karnawału
- `kuchnia-pierniki.js` — dla F2A (posiłek u Jordana)
- `zycie-religijne.js`, `kobiety-torun.js`, `handel-hanza.js`
- `cytaty-korespondencji.js`, `donosiciele-1454.js` (autentyczne nazwiska szpiegów Zakonu)

**Legendy** (oddzielone od faktów):
- `legenda-jordan.js` — **kluczowe dla F2A** (Jordan z chochlą)
- `legenda-krzywa-wieza.js`, `legenda-flisak.js`

**Anachronizmy** (oznaczone osobno — uwaga przy stylizacji):
- `fontanna-flisaka.js` (1914), `fontanna-cosmopolis.js`, `pomnik-kopernika` (1853), `aniol-jonasz.js`

**Scenariusze do adaptacji**:
- `scenariusze-questow.js` — **10 gotowych wątków questowych z osią czasu 3-8 II 1454** (duża pomoc przy projektowaniu zagadek)
- `przewodnik-miejsc-gry.js` — 45 miejsc z "haczykami" (charakterystycznymi detalami do zagadek)

**Źródła naukowe**:
- `gsta-berlin.js`, `archiwum-torun.js`, `dlugosz.js`, `historiografia.js`

## Tablica Whimsical (źródło wizualne)

Autor (Oskar) prowadzi **tablicę Whimsical** z dodatkowymi materiałami — podpięta przez MCP `whimsical-desktop`.

- **Gdy Oskar mówi "whimsical" w tym projekcie → chodzi o board „Gra Miejska"** (ID `KjUtrb`, workspace „Oskar's Workspace", sekcja „Everyone at Oskar's Workspace"). To diagram flow toru Tajnej Rady ("Tajna Rada flowchart").
- Inne boardy w tym workspace (Samochody, Gang Dzieciaków z Gliwic, foldery Ogólne/RPG) **nie** dotyczą tego projektu.
- MCP to wersja desktopowa — działa tylko gdy aplikacja Whimsical jest otwarta i zalogowana. Snapshot (`board_snapshot`) wymaga, by board był aktywnym/otwartym plikiem; odczyt treści (`board_read`) działa bez tego.
- Board bywa **wcześniejszy/aktualniejszy** niż pliki .md w niektórych miejscach (numeracja zagadek 2B) — patrz `todo/otwarte-pytania.md` przy rozbieżnościach.

## Struktura katalogu

> Szczegółowa „mapa — gdzie czego szukać" + głęboki detal kopert → **`index.md`** (root). Tu tylko szkielet.

```
projekt_gra-miejska-planning/
├── CLAUDE.md          ← kontekst + zasady + faktografia (auto-ładowany co sesję)
├── index.md           ← mapa „gdzie czego szukać" + głęboki detal kopert (3 osie / join-key)
├── concept/           ← co się dzieje: fazy (00–05), klasy, finał, tor krzyżaków
├── puzzles/           ← jak gracze rozwiązują: zagadki Z1–Z11, ścieżki/mapy Z1, specy
├── envelopes/         ← SPEC + MANIFEST + tekst kopert gracza (nazwa = [frakcja]-[nr]-[Zx])
├── mechanics/         ← jak gra działa logistycznie: koperty(MG), grupy/klasy, mapy/szyfrownik, finał
├── lore/              ← co opowiadamy: postacie, miejsca, plotki, fakty-vs-fabuła, meta-kartki/
├── materials/         ← materiały do gry/produkcji (promowane z prototype/ w MVP)
│   ├── actors/        ← skrypty aktorów — PL (Jordan/Piotr, Albrecht/Zosia)
│   ├── ops/           ← dokumenty MG — PL (runsheet, tracking, group-cards, master-board, quick-hints, shopping-list)
│   └── props/         ← rekwizyty player-facing — EN (pergamin Z3, szyfrogram Z7)
├── prototype/         ← artefakty + generatory ścieżki prototypu: print/, icons/, meta-cards/, podglądy HTML
├── tools/             ← generatory: map-gen/ (mapa), z1-decoder/ (deszyfrowniki)
├── public/            ← GOTOWE pliki do druku (wynik renderów): koperty PDF, maps/, decoders/
├── resources/         ← materiały źródłowe (zdjęcia, zrzuty referencyjne)
└── todo/              ← dashboard (status) · roadmap (kolejność faz) · otwarte-pytania (decyzje) · archive/
```

## Jak czytać te pliki

- **`concept/`** — *co się dzieje* w grze (fabularnie i strukturalnie). Tu zaczynaj.
- **`puzzles/`** — *jak gracze rozwiązują* poszczególne etapy. Każda zagadka ma stan: **gotowa / szkicowa / placeholder**.
- **`mechanics/`** — *jak gra działa logistycznie* (jak MG zarządza, jak liczymy wyniki, jak dzielimy grupy).
- **`lore/`** — *co opowiadamy graczom* (postaci, miejsca, plotki, gdzie naginamy historię).
- **`todo/`** — *co dalej*. Roadmap jest osobą prowadzącą, otwarte pytania to lista decyzji Oskara.

## Jak pracować z autorem (Oskar)

Oskar **chce sam tworzyć** — robi grę terenową dla znajomych i ważne dla niego jest, żeby fabularnie/zagadkowo była jego. Z tego wynikają zasady współpracy:

- **Agent pomaga w**: porządkowaniu pomysłów, weryfikacji historycznej (vs wiki), researchu (miejsca, daty, postaci), generowaniu wariantów do wyboru (nie jednej "słusznej" wersji), wskazywaniu luk i niespójności, redakcji tekstów które Oskar już napisał.
- **Agent NIE robi za Oskara**: nie wymyśla finalnej treści zagadek, fabularnych zwrotów akcji, charakterów postaci ani sensu narracyjnego — to praca twórcza, którą Oskar chce zrobić sam.
- **Wskazuj kontekstowo, co Oskar mógłby zrobić sam**, a gdzie agent realnie odciąża (np. "tę zagadkę kalimbową musisz wymyślić ty — mogę zweryfikować że pasują motywy z XV w. i podać 3 propozycje stylistyczne").

## Kanoniczny przydział grup — frakcje i zagadki (ROZSTRZYGNIĘTE)

Przydział **stały** — nie losowy w dniu gry. Źródło: G1 = jedyna testowana ścieżka prototypu (TR+Z4) → G1–G5 = TR, G6–G10 = KZ. Rozkład opcjonalnych zagadek z `concept/03-faza-2b-asynchroniczne.md` (1×Z4, 2×Z5, 2×Z6 dla TR; 2×Z8, 1×Z9, 2×Z10 dla KZ).

| G# | Kolor | Hex | Frakcja | Zagadka F2B obowiązkowa | Zagadka F2B opcjonalna | Finał |
|---|---|---|---|---|---|---|
| G1 | Czerwony | `#E6194B` | **TR (Mieszczanie)** | Z3 — infiltracja zamku (Albrecht/Zosia) | **Z4 kalimba** — kod `621454` | Z7 szyfr |
| G2 | Pomarańczowy | `#F58231` | **TR (Mieszczanie)** | Z3 — infiltracja zamku (Albrecht/Zosia) | Z5 sensoryczna piernik | Z7 szyfr |
| G3 | Żółty | `#FFE119` | **TR (Mieszczanie)** | Z3 — infiltracja zamku (Albrecht/Zosia) | Z5 sensoryczna piernik | Z7 szyfr |
| G4 | Zielony | `#3CB44B` | **TR (Mieszczanie)** | Z3 — infiltracja zamku (Albrecht/Zosia) | Z6 herby hanzeatyckie | Z7 szyfr |
| G5 | Turkusowy | `#42D4F4` | **TR (Mieszczanie)** | Z3 — infiltracja zamku (Albrecht/Zosia) | Z6 herby hanzeatyckie | Z7 szyfr |
| G6 | Niebieski | `#4363D8` | **KZ (Krzyżacy)** | Z3Z — infiltracja Piccolo (Jordan/Piotr) | Z8 melodia zakonu (kalimba) | Z11 szyfr |
| G7 | Fioletowy | `#911EB4` | **KZ (Krzyżacy)** | Z3Z — infiltracja Piccolo (Jordan/Piotr) | Z8 melodia zakonu (kalimba) | Z11 szyfr |
| G8 | Biały | `#FFFFFF` | **KZ (Krzyżacy)** | Z3Z — infiltracja Piccolo (Jordan/Piotr) | Z9 sensoryczna piernik | Z11 szyfr |
| G9 | Brązowy | `#9A6324` | **KZ (Krzyżacy)** | Z3Z — infiltracja Piccolo (Jordan/Piotr) | Z10 polichromie Biedronka | Z11 szyfr |
| G10 | Czarny | `#2B2B2B` | **KZ (Krzyżacy)** | Z3Z — infiltracja Piccolo (Jordan/Piotr) | Z10 polichromie Biedronka | Z11 szyfr |

> **Dla MG/aktorów:** TR = G1–G5 (Red/Orange/Yellow/Green/Cyan). KZ = G6–G10 (Blue/Purple/White/Brown/Black). Jordan obsługuje oba tory (różny framing koperty K2-K). Albrecht obsługuje wyłącznie TR w F2B Z3.

Szczegóły Z1 per ścieżka → `puzzles/z1-10-sciezek.md` §Ścieżki v3.2. Pełne dane kolory + hex → `mechanics/grupy-i-klasy.md`.

## Faktografia — twarde fakty (z wiki)

Te punkty są **niezmienne** i mają pokrycie w wiki:

- **Bunt**: 6 lutego 1454 (środa, dzień św. Doroty)
- **Oś czasu narracji** (wg `scenariusze-questow.js`): 3-8 lutego 1454
  - 3 II — blokada bram zamkowych, cicha mobilizacja
  - 4 II (pn) — redakcja Absagebriefu w Ratuszu
  - 5 II (wt) — wysłanie posłańca do Malborka
  - 6 II (śr, św. Doroty) — żądanie kapitulacji + atak + reakcja Erlichshausena
  - 7-8 II — oblężenie i kapitulacja zamku krzyżackiego
- **Przywódca Tajnej Rady**: **Jan Bażyński** (Hans von Baysen) — *nie "Obrzyński"*. Z kamienicy Rynek Staromiejski 16. Przezwisko: "kulawy bazyliszek" (reumatyzm).
- **Drugi kluczowy przywódca buntu**: **Tileman vom Wege**
- **Komtur toruński**: **Albrecht Kalb**
- **Wielki Mistrz krzyżacki**: **Ludwig von Erlichshausen** (w Malborku)
- **Jordan z chochlą**: postać LEGENDARNA (legenda XIX-wieczna, najwcześniejsza wzmianka: rachunek budowlany 1520 wzmiankujący kucharza miejskiego w Bramie Chełmińskiej). Wysadzony z wieżą zamku krzyżackiego.
  - **Decyzja Oskara**: w grze Jordan = pseudonim Jana Bażyńskiego. To plot twist w finale. Wymyślona przez Oskara plot warstwa, nie ma w niej źródła.
- **Dzwon**: Tuba Dei z katedry Św. Janów **dopiero od 1500** (46 lat po buncie). W 1454 inny, wcześniejszy dzwon ratuszowy. Dla gry: jeśli używasz dźwięku, **nie nazywaj** go Tuba Dei.

## Workflow

- **Każda większa zmiana** w tym repo → commit (`feat:`, `fix:`, `docs:`, `chore:`).
- **Nie deployujemy** tego projektu — to czysto planistyczny katalog. Wiki ma osobny deploy do Netlify.
- **Plany dalekosiężne** w `todo/roadmap.md`, decyzje czekające na input — w `todo/otwarte-pytania.md`.
- **Generowane artefakty wizualne** (obrazki, PDF-y, wydruki, mocki HTML mapy/kart/kopert) → podfolder **`prototype/`** (dla milestone'u prototypu pojedynczej ścieżki). **Od fazy MVP działamy w roocie — bez osobnego `mvp/`** (był pusty, usunięty; patrz `todo/otwarte-pytania.md` #69). Pliki planistyczne (.md) zostają w `concept/`, `puzzles/`, `mechanics/` itd.
- **Ostateczne pliki do druku** → folder **`public/`** w korzeniu repo (wersjonowany). Jedno miejsce na gotowe deliverable dla graczy — koperty (`prototype/print/render.ps1`), mapy (`tools/map-gen/render-map.ps1`), deszyfrowniki (`tools/z1-decoder/render-decoder.ps1`), inne rendery. Struktura: `public/maps/`, `public/decoders/`, `public/` (koperty PDF). Źródła renderów zostają w `prototype/print/src/`, `tools/map-gen/`, `tools/z1-decoder/`; `public/` trzyma tylko wynik.
- **`tools/`** trzyma generatory artefaktów. Mogą być **puzzle-agnostyczne** (silnik `map-gen`) lub **specyficzne dla zagadki** (`z1-decoder`); narzędzie generujące idzie do `tools/`, nie do `puzzles/` (te zostają planistyczne .md). Współdzielenie danych między narzędziami = import (np. `z1-decoder` czyta glify z `map-gen/map-data.js`), nie kopia.
- **Język planowania**: polska robocza — pliki .md, decyzje, notatki, komentarze agenta.
- **Język materiałów — dwa adresaty** (ROZSTRZYGNIĘTE [2026-06-02], #70):
  - **GRACZ → ANGIELSKI.** Wszystko, co gracz czyta/trzyma: koperty (`envelopes/`), rekwizyty player-facing (`materials/props/` — pergamin, szyfrogram), mapy, karty deszyfrujące. Gracze nie mówią po polsku.
  - **AKTORZY i MG → POLSKI.** Skrypty aktorów (`materials/actors/`), dokumenty MG (`materials/ops/` — runsheet, tracking, group-cards, master-board, quick-hints, shopping-list): **instrukcje, podpowiedzi, tracking, choreografia = po polsku** (Piotr, Zosia, Oskar są Polakami — PL ułatwia). **Wyjątek:** gdy materiał aktora/MG **cytuje konkretną treść zagadki lub odpowiedź gracza** (np. hasło, ciphertext, kwestię z koperty) — cytat zostaje w oryginale (EN).
  - **Nazwy własne toruńskie** zawsze w oryginale (Rynek Staromiejski, Piccolo itp.).
  - ⚠ **Dług:** obecne drafty w `materials/actors/` i `materials/ops/` powstały po angielsku — **do przetłumaczenia na PL** (zadanie MVP, patrz `todo/dashboard.md`).

## Status — gdzie go szukać

**Nie streszczamy statusu tutaj** (rozjeżdża się po każdej sesji). Zawsze aktualne źródła:
- **Stan / co gotowe / następny krok** → `todo/dashboard.md`
- **Decyzje (otwarte + rozstrzygnięte)** → `todo/otwarte-pytania.md`
- **Kolejność faz** → `todo/roadmap.md`

### Konwencja utrzymania (żeby tracking „się działał")

- Po ukończeniu jednostki (koperta / zagadka / rekwizyt) **zaktualizuj status w `todo/dashboard.md` w tym samym commicie**.
- **Nie pisz logów „było→jest"** w żywych plikach — `git log` jest changelogiem; `todo/archive/` trzyma odrzucone projekty i snapshoty.
- Decyzje zapisuj w `todo/otwarte-pytania.md` jako „**temat** — ROZSTRZYGNIĘTE [data]: ..." (bez przekreśleń).
