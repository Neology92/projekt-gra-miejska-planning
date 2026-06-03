# Toruń 1454 — aplikacja gry hybrydowej (`app/`)

> 🌐 **LIVE:** **https://torun-1454-gra.netlify.app** (osobna strona Netlify, projekt `torun-1454-gra`).
> **Co to:** samodzielna aplikacja webowa realizująca warstwę fabularną gry online za kodami dostępu (`mechanics/hybryda-online.md`, #77). **Osobna strona Netlify** (własna domena), niezależna od galerii materiałów (`public/` → `torun-1454-materialy`).
> **Stan:** POC — **Z1** (szlak symboli) → **Z2** (zagadka logiczna, rozjazd TR/KZ) → **opcjonalna F2B per grupa** (granica POC). Wszystkie 10 grup mają komplet: Z4/Z5/Z6 (TR) i Z8/Z9/Z10 (KZ). Sceny aktorów (Z3/Z3Z/Z3b) i finał (Z7/Z11) — poza apką.
> **Język:** gracz = EN. Komentarze/README = PL (warstwa planistyczna).

## Co realizuje (na życzenie Oskara)

1. **Wierne oddanie zagadki Z1** — zamiast wpisywania tekstu gracz **wybiera 4 z 9 symboli** deszyfrownika w kolejności, w jakiej je wypatrzył. To **te same ikony**, które ma na drukowanej karcie (źródło: `tools/z1-decoder/` + `tools/map-gen/map-data.js §Z1_GROUPS`). Apka bramkuje — poprawna sekwencja odblokowuje następny krok.
   - Grupa **G1 (Red)**, łańcuch kanon `v3.2`: **N01 piernik → N02 gęś → N06 szafa → C04 wieża-bez-hełmu**. Dystraktory: lew · bazylika · fartuch · kotwica · łuk.
2. **Każdy etap = osobna podstrona** (`/z1`, `/z2`) — **odświeżalna** (routing kliencki + `_redirects`/`netlify.toml` SPA-fallback + Service Worker navigation-fallback).
3. **Kod dostępu per etap = wejście + recovery.** Gdy apka się wysypie / strona się odświeży / inne urządzenie → wpisz kod etapu i wracasz dokładnie tam. Po rozwiązaniu Z1 apka **odsłania kod Z2** i przenosi dalej (typ **PREV** — bez udziału MG, spec §B).
4. **Osobna domena Netlify** — deploy `app/` na własną stronę (patrz niżej).

Dodatkowo (z poprzednich iteracji): brief **verbatim** z renderu koperty (spec: treść briefów bez przepisywania), ramka **„PROP AT THIS STAGE"** (§C), PWA/offline (§D), stan w `localStorage`.

## Uruchomienie lokalne

```bash
cd app
python3 -m http.server 8000   # → http://localhost:8000
```
> Uwaga: deep-linki (`/z1` po odświeżeniu) wymagają SPA-fallbacku — lokalnie `http.server` go nie ma (404 przy odświeżeniu podstrony), ale **na Netlify działa** (`_redirects` + SW). Wejście od `/` działa wszędzie.

**Przejście demo:** kod `START-1454` → czytasz brief Z1 → w siatce stuknij **piernik · gęś · szafa · wieża** (w tej kolejności) → „Confirm" → apka pokazuje kod Z2 (`RAVEN-2613`) → „Continue".

## ⚠ DEMO / stub (NIE kanon ostateczny)

- **Kody dostępu** (`START-1454`, `RAVEN-2613`) = placeholdery; finalny format + per-grupowość (10 grup ≠ wspólny kod) = otwarte (spec §D).
- **Z1 = wszystkie 10 grup** (każda swój łańcuch/kartę, `z1-data.js §Z1_GROUPS`; źródło `puzzles/z1-10-sciezek.md`). Wybór grupy na starcie ładuje właściwy deszyfrownik.
- **Z2** = zagadka logiczna (3 osoby × {miejsce, przedmiot}), rozjazd treści TR/KZ (`z2-data.js`). Po Z2 `optionalStepFor(grupa)` prowadzi do opcjonalnej F2B tej grupy.
- **Opcjonalne F2B** (po Z2, każda grupa swoją; routing `OPTIONAL_BY_GROUP` w `steps.js`; dane `optional-data.js` + `z10-data.js`):

  | Grupy | Zagadka | Typ bramki | Poprawna odpowiedź |
  |---|---|---|---|
  | G1 | Z4 — melodia flisaka (kalimba) | `code-entry` | `621454` |
  | G2, G3 | Z5 — piernik (rozpiska słojów A–G) | `assign` | A=wheat B=cardamom C=ginger D=cloves E=honey F=rye G=cinnamon |
  | G4, G5 | Z6 — herby hanzeatyckie | `pick-one` | `Chełmno` (nadawca bez pary) |
  | G6, G7 | Z8 — melodia zakonu (kalimba) | `code-entry` | `621454` |
  | G8 | Z9 — piernik (rozpiska słojów A–G) | `assign` | jak Z5 |
  | G9, G10 | Z10 — polichromie „Biedronka" (8 bestii A–H) | `beast-select` | zbiór `A/B/E` |

  Wszystkie **terminalne = granica POC** (finał Z7/Z11 poza apką). Sensoryczne Z5/Z9: gracz **fizycznie** wącha słoje, w apce wpisuje rozpiskę litera→składnik (loop „karta → MG sprawdza"). Kalimba Z4/Z8: gracz fizycznie odgrywa melodię, w apce wpisuje 6 liczb.

  ⚠ **Klucze do spot-checku in loco** (research/decyzje autorskie, część niezweryfikowana w terenie): Z10 `A/B/E` (`polichromie-biedronka.md §Klucz`), Z6 `Chełmno` + czytelność herbów Szeroka (`herby-aleja.md`), Z5/Z9 klucz słojów (`zagadka-sensoryczna.md §klucz MG`). Z4/Z8 kod `621454` = kanon (data buntu 6.2.1454). Wbudowane świadomie na życzenie Oskara [2026-06-03].
- Ikony PWA puste w manifeście.

## Architektura / jak dołożyć etap

- `z1-data.js` — kanon Z1 dla **wszystkich 10 grup** (`Z1_GROUPS`, `GROUP_META`, `z1PuzzleFor`).
- `z2-data.js` — Z2 per frakcja (`Z2_DATA.TR` / `.KZ`).
- `optional-data.js` + `z10-data.js` — opcjonalne F2B (`Z4_DATA`…`Z10_DATA`), mapowane w `app.js` przez `OPTIONAL_DATA`.
- `steps.js` — rejestr etapów (`STEPS`) + `STEP_ORDER` + `OPTIONAL_BY_GROUP`/`optionalStepFor` (która grupa → która opcjonalna po Z2). Dołożenie etapu = nowy obiekt + wpis.
- `app.js` — wybór grupy, render etapu, recovery (localStorage), bramki zagadek, persystencja.
- `styles.css` — paleta/krój z `prototype/print/src/parchment.css`.
- **Typy bramek** (`puzzle.type`, walidacja w `app.js`): `symbol-sequence` (Z1, kolejność), `logic` (Z2, dopasowanie), `code-entry` (Z4/Z8, kod), `pick-one` (Z6, jeden wybór), `assign` (Z5/Z9, rozpiska), `beast-select` (Z10, zbiór). Nowy typ = funkcja widżetu + gałąź w `optionalPuzzle`/`showStage`.

## Deploy — osobna strona Netlify

Aplikacja jest **niezależna** od strony materiałów. Deploy ciągły:
`.github/workflows/deploy-app-netlify.yml` — push na `master` dotykający `app/**`
→ `netlify deploy --prod --dir app --site <SITE_ID>` (token: istniejący sekret `NETLIFY_AUTH_TOKEN`; site-ID jawne, nie jest poufne).

Pliki deployowe: `netlify.toml` (publish=`.`, SPA redirect, cache assetów) + `_redirects` (dubel SPA-fallback).

## Pliki

```
index.html              powłoka (#app) + ładowanie skryptów
styles.css              parchment, mobile-first, siatki symboli/liter, lista wyboru
z1-data.js              KANON Z1 — 10 grup (9 ikon deszyfrownika + łańcuch each)
z2-data.js              KANON Z2 — zagadka logiczna per frakcja (TR/KZ)
optional-data.js        KANON opcjonalnych F2B: Z4/Z8 (kalimba), Z6 (herby), Z5/Z9 (piernik)
z10-data.js             KANON Z10 — polichromie „Biedronka" (8 bestii A–H)
steps.js                rejestr etapów + STEP_ORDER + OPTIONAL_BY_GROUP/optionalStepFor
app.js                  wybór grupy + render etapu + recovery + wszystkie bramki + stan
manifest.webmanifest    PWA
sw.js                   offline cache + navigation fallback
_redirects · netlify.toml  SPA fallback + nagłówki
icons/                  19 ikon detali Z1 (kopia z prototype/icons — wierność karcie)
fonts/                  IM Fell English
```
