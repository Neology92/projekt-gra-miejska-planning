# Toruń 1454 — aplikacja gry hybrydowej (`app/`)

> 🌐 **LIVE:** **https://torun-1454-gra.netlify.app** (osobna strona Netlify, projekt `torun-1454-gra`).
> **Co to:** samodzielna aplikacja webowa realizująca warstwę fabularną gry online (`mechanics/hybryda-online.md`, #77). **Osobna strona Netlify** (własna domena), niezależna od galerii materiałów (`public/` → `torun-1454-materialy`).
> **Stan:** **pełny łuk gry end-to-end** dla obu frakcji i wszystkich 10 grup — Z1 → Z2 → Z3/Z3Z → opcjonalna (Z4–Z10) → finał (Z7/Z11). Granica = scena finałowa na żywo (KF, poza apką).
> **Język:** gracz = EN. Komentarze/README = PL (warstwa planistyczna).

## Model interakcji (aktualny)

**Najprostszy z możliwych: bez routingu URL, bez kodów dostępu, bez Service Workera.** Start = **wybór NUMERU GRUPY (1-10)**; dalej flow danej grupy. Ekrany przełączane przez podmianę `#app`. Stan (`grupa + etap + solved`) w `localStorage` → odświeżenie wraca na właściwy ekran. (Wcześniejszy model z kodami dostępu / routingiem ścieżkowym / PWA został porzucony — `index.html` aktywnie wyrejestrowuje stare Service Workery i czyści cache, bo były źródłem pustych ekranów.)

Frakcja wynika z numeru grupy (CLAUDE.md §Kanoniczny przydział): **G1–G5 = Mieszczanie (TR)**, **G6–G10 = Krzyżacy (KZ)**. W Z1 frakcja jest jeszcze ukryta fabularnie (rozjazd treści następuje w Z2).

## Etapy (co realizuje)

Rejestr w `steps.js` (`STEPS` + `STEP_ORDER = ['z1','z2','z3','opt','fin']`). Treść per etap/frakcja w osobnych plikach `*-data.js`. Briefy = **verbatim** z renderów kopert (spec: treść briefów bez przepisywania). Każdy etap pokazuje ramkę **„PROP AT THIS STAGE"**.

| Etap | Typ | Walidacja w apce | Dane |
|---|---|---|---|
| **Z1** szlak symboli | `symbol-sequence` | tak — wybór 4 z 9 ikon deszyfrownika w kolejności; te same ikony co na drukowanej karcie | `z1-data.js` (`Z1_GROUPS` × 10 grup, `Z1_ICONS`) |
| **Z2** droga do kontaktu | `logic` (3 osoby × miejsce/przedmiot) | tak — przypisania + reveal glifu celu na mapie | `z2-data.js` (`Z2_DATA[TR\|KZ]`) |
| **Z3 / Z3Z** scena handlera | `actor-brief` | nie — apka = nośnik briefu (zwiad/obserwacja nie bramkują); TR ma twist kradzieży za przyciskiem | `z3-data.js` (`Z3_DATA[TR\|KZ]`) |
| **opcjonalna** (Z4–Z10) | `code` / `assign` / `choose-one` / `choose-many` | tak — jedna zagadka per grupa wg `GROUP_OPTIONAL` | `optional-data.js` (`OPTIONAL`) |
| **finał** (Z7 / Z11) | `finale` — szyfr | tak — walidacja odszyfrowanego tekstu (klucz fizyczny w ręku gracza) | `finale-data.js` (`FINALE[TR\|KZ]`) |

Przydział opcjonalnej per grupa (`optional-data.js §GROUP_OPTIONAL`): kalimba (Z4 TR / Z8 KZ), sensoryczna-piernik (Z5 TR / Z9 KZ), herby (Z6 TR), polichromie (Z10 KZ).

## Uruchomienie lokalne

```bash
cd app
python3 -m http.server 8000   # → http://localhost:8000
```
> Wejście zawsze od `/` (jeden plik, ekrany w JS). Bez deep-linków — odświeżenie wraca na ekran zapisany w `localStorage`.

**Szybkie przejście:** wybierz grupę → Z1 (stuknij 4 ikony łańcucha w kolejności) → Z2 (logiczna) → Z3 (scena) → opcjonalna → finał (wpisz odszyfrowany tekst). Kanon łańcuchów/odpowiedzi: `z1-data.js`, `optional-data.js`, `finale-data.js`.

## ⚠ Granice / otwarte

- **Granica POC = scena finałowa (KF)** — oddanie zapieczętowanego listu aktorowi grane na żywo, poza apką.
- **Klucze fizyczne** zostają w ręku gracza: Z7 = wykradziona lista (jawne motto), Z11 = Tabele 1+2; apka tylko waliduje wynik.
- Ikony PWA puste w manifeście (PWA nieaktywne — manifest/sw zostają jako artefakt, nie ścieżka krytyczna).

## Architektura / jak dołożyć etap

- `*-data.js` — KANON treści (per etap, rozdzielone TR/KZ tam, gdzie tory się różnią). Źródła wskazane w nagłówku każdego pliku (`envelopes/…`, `puzzles/…`, `tools/…`).
- `steps.js` — rejestr etapów: `id`, `label`, `brief`/`type`, `prop`, `puzzle`, `next`. Dołożenie etapu = nowy obiekt + wpis w `STEP_ORDER`.
- `app.js` — wybór grupy → `showStage(id)` rozgałęzia po `step.type`/`puzzle.type`; komponenty zagadek (`symbolPuzzle`, `logicPuzzle`, `optCode`/`optAssign`/`optChooseOne`/`optChooseMany`, `finaleStage`); persystencja w `localStorage`.
- `styles.css` — paleta/krój z `prototype/print/src/parchment.css`.
- Nowy typ zagadki = nowy renderer + wpis w mapie typów (`optionalStage §byType` lub gałąź w `showStage`).

## Deploy — osobna strona Netlify

Aplikacja jest **niezależna** od strony materiałów. Deploy ciągły:
`.github/workflows/deploy-app-netlify.yml` — push na `master` dotykający `app/**`
→ `netlify deploy --prod --dir app --site <SITE_ID>` (token: istniejący sekret `NETLIFY_AUTH_TOKEN`; site-ID jawne, nie jest poufne).

## Pliki

```
index.html              powłoka (#app) + ładowanie skryptów (kill starego SW/cache)
styles.css              parchment, mobile-first, siatka symboli + komponenty etapów
z1-data.js              KANON Z1 (10 grup: łańcuch + dystraktory, 9 ikon, GROUP_META)
z2-data.js              KANON Z2 (logiczna, TR + KZ)
z3-data.js              KANON Z3/Z3Z (scena handlera, TR + KZ)
optional-data.js        KANON warstwy opcjonalnej Z4–Z10 (4 mechaniki) + GROUP_OPTIONAL
finale-data.js          KANON finału Z7/Z11 (szyfr + reveal)
steps.js                rejestr etapów (STEPS + STEP_ORDER)
app.js                  wybór grupy + showStage + komponenty zagadek + stan (localStorage)
manifest.webmanifest    PWA (nieaktywne)
sw.js                   stary Service Worker (wyrejestrowywany przez index.html)
_redirects · netlify.toml  fallback + nagłówki (relikt routingu — nieszkodliwe)
audio/                  kalimba.mp3 (Z4/Z8)
icons/                  19 ikon detali Z1 (wierność drukowanej karcie deszyfrownika)
fonts/                  IM Fell English
```
