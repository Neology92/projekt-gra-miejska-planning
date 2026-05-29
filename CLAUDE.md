# projekt_gra-miejska-planning — planowanie gry terenowej Toruń 1454

## Co to za projekt

To **projekt-rodzeństwo** dla `B:/Dev/projekt_gra-miejska/` (wiki *Acta Thoruniensia 1454*). Tutaj nie ma kodu wiki ani treści historycznej — tutaj jest **planowanie gry terenowej** osadzonej w buncie mieszczan toruńskich z 6 lutego 1454.

Dlaczego osobny katalog: żeby planowanie gry nie zaśmiecało wiki (ta ma być czystą bazą wiedzy historycznej + zalążkiem materiałów dla gry), a jednocześnie żeby agent pracujący nad planowaniem miał własną przestrzeń z dedykowanym kontekstem.

## Stosunek do projektu siostrzanego

`B:/Dev/projekt_gra-miejska/` to **źródło prawdy historycznej** — kiedy potrzebujesz:

- weryfikacji imion, dat, miejsc → tam
- listy 45 miejsc na grę → `src/pages/przewodnik-miejsc-gry.js`
- 10 gotowych scenariuszy questowych (do adaptacji) → `src/pages/scenariusze-questow.js`
- postaci historycznych (Bażyński, Tileman vom Wege, Albrecht Kalb, Erlichshausen) → osobne strony w `src/pages/`
- legend (Jordan z chochlą, Krzywa Wieża, flisak) → `src/pages/legenda-*.js`
- kontekst donosicieli / korespondencji → `src/pages/donosiciele-1454.js`, `cytaty-korespondencji.js`
- karnawał i dzień św. Doroty → `src/pages/karnawal-1454.js`

**Zasada:** zanim zaproponujesz historyczny fakt, sprawdź w wiki czy się zgadza. Zanim zaproponujesz miejsce, sprawdź na liście 45 punktów. Naginanie rzeczywistości pod fabułę jest OK, ale autor (Oskar) musi świadomie zdecydować *gdzie* naginamy — patrz `lore/fakty-vs-fabula.md`.

## Tablica Whimsical (źródło wizualne)

Autor (Oskar) prowadzi **tablicę Whimsical** z dodatkowymi materiałami — podpięta przez MCP `whimsical-desktop`.

- **Gdy Oskar mówi "whimsical" w tym projekcie → chodzi o board „Gra Miejska"** (ID `KjUtrb`, workspace „Oskar's Workspace", sekcja „Everyone at Oskar's Workspace"). To diagram flow toru Tajnej Rady ("Tajna Rada flowchart").
- Inne boardy w tym workspace (Samochody, Gang Dzieciaków z Gliwic, foldery Ogólne/RPG) **nie** dotyczą tego projektu.
- MCP to wersja desktopowa — działa tylko gdy aplikacja Whimsical jest otwarta i zalogowana. Snapshot (`board_snapshot`) wymaga, by board był aktywnym/otwartym plikiem; odczyt treści (`board_read`) działa bez tego.
- Board bywa **wcześniejszy/aktualniejszy** niż pliki .md w niektórych miejscach (numeracja zagadek 2B) — patrz `todo/otwarte-pytania.md` przy rozbieżnościach.

> Historycznie była mowa o tablicy Miro — projekt przeszedł na Whimsical.

## Struktura katalogu

```
projekt_gra-miejska-planning/
├── CLAUDE.md                  ← ten plik (indeks + kontekst)
├── concept/                   ← struktura gry: fazy, klasy, finał
│   ├── 00-overview.md
│   ├── 01-faza-1-kurierzy.md
│   ├── 02-faza-2a-jordan.md
│   ├── 03-faza-2b-asynchroniczne.md
│   ├── 04-faza-3-final.md
│   └── 05-tor-krzyzakow.md    ← placeholder, do rozpisania
├── puzzles/                   ← zagadki (jedna na plik gdy gotowa, master-list dla orientacji)
│   ├── 00-master-list.md
│   ├── szlak-symboli.md
│   ├── droga-do-jordana.md
│   ├── zamek-krzyzacki-lista.md
│   ├── test-jordana.md
│   ├── kalimba.md
│   └── polichromie-biedronka.md
├── mechanics/                 ← jak gra działa od strony operacyjnej
│   ├── koperty-mg.md
│   ├── mapy-i-szyfrownik.md
│   ├── grupy-i-klasy.md
│   ├── motywacja-kurierow.md
│   └── finalowe-glosowanie.md
├── lore/                      ← treść narracyjna
│   ├── postaci.md
│   ├── miejsca.md
│   ├── plotki-i-pogloski.md
│   └── fakty-vs-fabula.md
└── todo/
    ├── roadmap.md             ← co dalej, w jakiej kolejności
    └── otwarte-pytania.md     ← decyzje czekające na input
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
- **Język i diakrytyka**: pełna polszczyzna z diakrytykami.

## Status na start (2026-05-29)

- ✅ Faza 1 — szkielet ma sens, szlak symboli wymaga konkretnego doboru miejsc i przygotowania szyfrownika
- ✅ Faza 2A (Jordan) — szkielet jest, treść spotkania do dopisania
- ⚠️ Faza 2B — wiadomo że 4 zagadki asynchroniczne (3, 4, 5, 6; dwie obowiązkowe, dwie opcjonalne), ale konkretne treści głównie do rozpisania
- ⚠️ Faza 3 (finał) — koncept jest, scenariusz aktorski do napisania
- 🔴 **Tor krzyżaków** — kompletnie nierozpisany, tylko zalążki
- 🔴 **Mechanika liczenia listów** — jeszcze nie wiadomo jak grupy krzyżackie też dostarczają wiadomości
