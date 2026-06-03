# Toruń 1454 — aplikacja gry hybrydowej (`app/`)

> 🌐 **LIVE:** **https://torun-1454-gra.netlify.app** (osobna strona Netlify, projekt `torun-1454-gra`).
> **Co to:** samodzielna aplikacja webowa realizująca warstwę fabularną gry online za kodami dostępu (`mechanics/hybryda-online.md`, #77). **Osobna strona Netlify** (własna domena), niezależna od galerii materiałów (`public/` → `torun-1454-materialy`).
> **Stan:** POC — **Z1 (pełna zagadka)** + **Z2 (zagadka logiczna, rozjazd TR/KZ)** + **Z10 (opcjonalna, tor KZ — tylko grupy 9/10: polichromie „Biedronka", granica POC)**.
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
- **Z1 = ścieżka G1.** Pozostałe 9 grup mają własne łańcuchy/karty (`puzzles/z1-10-sciezek.md`). Apka ładuje na razie tylko G1 (`z1-data.js`).
- **Z2** = zagadka logiczna (3 osoby × {miejsce, przedmiot}), rozjazd treści TR/KZ (`z2-data.js`). Terminal dla grup bez opcjonalnej Z10 w apce.
- **Z10** (`z10-data.js`, typ bramki `beast-select`) = opcjonalna F2B toru KZ, **tylko grupy 9 (brązowy) i 10 (czarny)** — po Z2 prowadzi `optionalStepFor`. Karta „Bestiariusz Krzyżowca" (8 bestii A–H) → wskaż **zbiór** bestii obecnych na ścianie Biedronki (Szeroka 22); bramka = `A/B/E` (kolejność bez znaczenia). **Granica POC** (finał Z11 poza apką). ⚠ Klucz A/B/E = research autorski, niezweryfikowany on-site (`puzzles/polichromie-biedronka.md §Klucz`) — wbudowany świadomie na życzenie Oskara [2026-06-03]. Pozostałe opcjonalne KZ (Z8/Z9) oraz TR (Z4/Z5/Z6) wciąż poza apką.
- Ikony PWA puste w manifeście.

## Architektura / jak dołożyć etap

- `z1-data.js` — kanon zagadki Z1/G1 (9 ikon + łańcuch). Dla innych grup: analogiczny obiekt z `Z1_GROUPS`.
- `steps.js` — rejestr etapów (`STEPS`): kod, brief, ramka rekwizytu, `puzzle`, `next`. Dołożenie etapu = nowy obiekt + wpis w `STEP_ORDER`.
- `app.js` — router ścieżkowy (History API), bramki kodów + recovery, komponent zagadki `symbol-sequence`, persystencja.
- `styles.css` — paleta/krój z `prototype/print/src/parchment.css`.
- Typy bramek: `puzzle.type:'symbol-sequence'` (PREV, apka waliduje) — kolejne (np. `AKTOR`/`MG` na kod zewnętrzny) dokłada się analogicznie.

## Deploy — osobna strona Netlify

Aplikacja jest **niezależna** od strony materiałów. Deploy ciągły:
`.github/workflows/deploy-app-netlify.yml` — push na `master` dotykający `app/**`
→ `netlify deploy --prod --dir app --site <SITE_ID>` (token: istniejący sekret `NETLIFY_AUTH_TOKEN`; site-ID jawne, nie jest poufne).

Pliki deployowe: `netlify.toml` (publish=`.`, SPA redirect, cache assetów) + `_redirects` (dubel SPA-fallback).

## Pliki

```
index.html              powłoka (#app) + ładowanie skryptów
styles.css              parchment, mobile-first, siatka symboli
z1-data.js              KANON Z1/G1 (9 ikon deszyfrownika + łańcuch)
steps.js                rejestr etapów (Z1 puzzle + Z2 checkpoint)
app.js                  router + kody/recovery + zagadka symboli + stan
manifest.webmanifest    PWA
sw.js                   offline cache + navigation fallback
_redirects · netlify.toml  SPA fallback + nagłówki
icons/                  9 ikon detali G1 (kopia z prototype/icons — wierność karcie)
fonts/                  IM Fell English
```
