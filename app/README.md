# Toruń 1454 — aplikacja gry hybrydowej (`app/`)

> 🌐 **LIVE:** **https://torun-1454-gra.netlify.app** (osobna strona Netlify, projekt `torun-1454-gra`).
> **Co to:** samodzielna aplikacja webowa realizująca warstwę fabularną gry online za kodami dostępu (`mechanics/hybryda-online.md`, #77). **Osobna strona Netlify** (własna domena), niezależna od galerii materiałów (`public/` → `torun-1454-materialy`).
> **Stan:** POC — **Z1 (pełna zagadka)** → **Z2 (checkpoint + rozejście frakcji)** → **Z3 (tor TR: bramka kodu `30` = liczba załogi od Albrechta → rozkaz kradzieży)**. KZ kończy POC na Z2 (Z3Z = next phase).
> **Język:** gracz = EN. Komentarze/README = PL (warstwa planistyczna).

## Co realizuje (na życzenie Oskara)

1. **Wierne oddanie zagadki Z1** — zamiast wpisywania tekstu gracz **wybiera 4 z 9 symboli** deszyfrownika w kolejności, w jakiej je wypatrzył. To **te same ikony**, które ma na drukowanej karcie (źródło: `tools/z1-decoder/` + `tools/map-gen/map-data.js §Z1_GROUPS`). Apka bramkuje — poprawna sekwencja odblokowuje następny krok.
   - Grupa **G1 (Red)**, łańcuch kanon `v3.2`: **N01 piernik → N02 gęś → N06 szafa → C04 wieża-bez-hełmu**. Dystraktory: lew · bazylika · fartuch · kotwica · łuk.
2. **Każdy etap = osobna podstrona** (`/z1`, `/z2`) — **odświeżalna** (routing kliencki + `_redirects`/`netlify.toml` SPA-fallback + Service Worker navigation-fallback).
3. **Kod dostępu per etap = wejście + recovery.** Gdy apka się wysypie / strona się odświeży / inne urządzenie → wpisz kod etapu i wracasz dokładnie tam. Po rozwiązaniu Z1 apka **odsłania kod Z2** i przenosi dalej (typ **PREV** — bez udziału MG, spec §B).
4. **Osobna domena Netlify** — deploy `app/` na własną stronę (patrz niżej).

5. **Z3 — tor TR (infiltracja zamku) z BRAMKĄ KODU.** Po rozmowie z Albrechtem (aktor) gracz **wpisuje liczbę obrońców zamku = `30`** (puzzle `type:'code'`). Poprawny kod odsłania **rozkaz kradzieży** (etap `z3b` = dawna koperta K-Z3b, `envelopes/miasto-4-Z3b.md`) — **zamiast fizycznej koperty od komtura** (decyzja Oskara 2026-06-03, `todo/otwarte-pytania.md #77`). Rozejście frakcji następuje na Z2: **TR → Z3**, **KZ → granica POC** (Z3Z = next phase).

Dodatkowo (z poprzednich iteracji): brief **verbatim** z renderu koperty (spec: treść briefów bez przepisywania), ramka **„PROP AT THIS STAGE"** (§C), PWA/offline (§D), stan w `localStorage`.

## Uruchomienie lokalne

```bash
cd app
python3 -m http.server 8000   # → http://localhost:8000
```
> Uwaga: deep-linki (`/z1` po odświeżeniu) wymagają SPA-fallbacku — lokalnie `http.server` go nie ma (404 przy odświeżeniu podstrony), ale **na Netlify działa** (`_redirects` + SW). Wejście od `/` działa wszędzie.

**Przejście demo (tor TR):** wybierz **grupę 1 (Red)** → brief Z1 → w siatce stuknij **piernik · gęś · szafa · wieża** (w tej kolejności) → „Confirm" → Z2 (checkpoint) → „Continue to Z3" → brief Z3 → w polu wpisz **`30`** (liczba od Albrechta) → „Confirm" → apka odsłania **rozkaz kradzieży** (Z3b). *(Grupa 6–10 = KZ kończy na Z2 — granica POC.)*

## ⚠ DEMO / stub (NIE kanon ostateczny)

- **Wejście = numer grupy** (1–10), bez kodów dostępu/recovery (poprzednie placeholdery `START-1454`/`RAVEN-2613` nieaktualne).
- **Z1 = wszystkie 10 grup** (`z1-data.js §Z1_GROUPS`) — apka buduje deszyfrownik per grupa (`z1PuzzleFor`).
- **Z2** = checkpoint + rozejście frakcji (`fork`). **Z3 (TR)** zaimplementowany (bramka kodu `30` → Z3b). **KZ kończy POC na Z2**; **Z3Z** (infiltracja Piccolo) + dalszy flow = kolejna faza.
- **Kod Z3 = `30`** dosłownie (liczba do wpisania). Wartość w `steps.js` (`z3.puzzle.answer`); ⚠ to liczba jawnie podawana przez aktora — nie tajny token (recovery nie dotyczy).
- Ikony PWA puste w manifeście.

## Architektura / jak dołożyć etap

- `z1-data.js` — kanon zagadki Z1/G1 (9 ikon + łańcuch). Dla innych grup: analogiczny obiekt z `Z1_GROUPS`.
- `steps.js` — rejestr etapów (`STEPS`): kod, brief, ramka rekwizytu, `puzzle`, `next`. Dołożenie etapu = nowy obiekt + wpis w `STEP_ORDER`.
- `app.js` — router ścieżkowy (History API), bramki kodów + recovery, komponent zagadki `symbol-sequence`, persystencja.
- `styles.css` — paleta/krój z `prototype/print/src/parchment.css`.
- Typy bramek: `puzzle.type:'symbol-sequence'` (Z1, apka waliduje sekwencję ikon) · **`puzzle.type:'code'`** (Z3 — gracz wpisuje liczbę/kod wyciągnięty od aktora; `{answer, heading, prompt, placeholder?, note?, errMsg?}`, walidacja po trim+lower). Kolejne typy dokłada się analogicznie (`codePuzzle`/`symbolPuzzle` w `app.js`).
- Rozejście frakcji: pole `fork:{TR,KZ}` na etapie (Z2) → `forkPanel` kieruje TR/KZ na różne `id` (lub `null` = granica POC). Ekran sukcesu można nadpisać polem `success:{seal?,title,text}`.

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
