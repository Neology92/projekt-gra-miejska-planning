# POC hybrydy online — etap Z1

> **Co to:** działający proof-of-concept **jednego etapu** trybu hybrydowego z `mechanics/hybryda-online.md` (#77). Pokazuje cały cykl etapu na przykładzie **Z1 (szlak symboli)** — bez budowy całej apki (to osobna faza, spec §D).
> **Po co:** zmaterializować decyzję #77, żeby Oskar zobaczył *jak* czuje się brief-za-kodem na telefonie i zatwierdził kierunek/UX, zanim ruszy pełna budowa.
> **Status:** POC techniczny. Treść = istniejący kanon (brief Z1 z `envelopes/wspolne-1-Z1.md`). Trasa walidacji = **DEMO** (patrz niżej).

## Co demonstruje (mapowanie na spec)

| Element spec | Gdzie w POC |
|---|---|
| **BRIEF → online** (§A) | ekran „brief" renderuje narrację Z1 (migracja 1:1 z koperty) |
| **Kod wejścia** (§B, łańcuch MG/AKTOR/PREV) | ekran „brama": START→Z1 = **kod-MG** (`START-1454`) |
| **Walidacja PREV bez MG** (§B) | Z1→Z2: apka sama sprawdza 4 nazwane miejsca w kolejności → odblokowuje dalej |
| **Ramka „PROP AT THIS STAGE"** (§C) | blok nad briefem: *what / from / where* + fail-safe „nie masz? zgłoś MG" |
| **Bramkowanie spoilerowe meta-kartek** (§D) | kartka „from the author" jest **zamglona/zablokowana** do ukończenia etapu |
| **Offline w terenie** (§D) | `manifest.webmanifest` + `sw.js` (cache-first); stan w `localStorage` (odporność na odświeżenie) |
| Język: gracz = EN (§C, CLAUDE.md) | całe UI gracza po angielsku; notatki planistyczne (README, komentarze) po PL |

## Jak uruchomić

```bash
# z katalogu prototype/hybryda-poc/
python3 -m http.server 8000
# → otwórz http://localhost:8000
```

Działa też po `file://` (bez Service Workera — SW rejestruje się tylko po http/https).
Katalog jest **samowystarczalny** (fonty lokalnie w `fonts/`) → można go wdrożyć osobno
(np. jako subfolder na istniejącym Netlify, zgodnie z rekomendacją spec §D).

**Przejście demo:** kod `START-1454` → czytasz brief → w „Report your chain" wpisz po kolei:
`Piernikarka`, `Modry Fartuch`, `Filuś`, `Pod Gwiazdą` → „Confirm" → meta-kartka się odsłania, etap zaliczony.
(Akceptuje warianty PL i EN; „Reset demo" czyści stan.)

## ⚠ Co jest DEMO / stub (NIE kanon)

- **Trasa Z1 = przykład EX-1** z `puzzles/z1-sciezki-wzorcowe.md` (Piernikarka→Modry Fartuch→Filuś→Pod Gwiazdą). W pełnej grze każda z 10 grup ma własny łańcuch (deszyfrowniki). ⚠ Jest też rozbieżność: `todo/dashboard.md` notuje „Wariant A" (…→Krzywa Wieża→Kopernik) — **decyzja trasy wciąż otwarta**, dlatego tu tylko przykład mechaniki.
- **Format kodu dostępu** (`START-1454`) = placeholder. Realny format + gdzie MG trzyma listę kodów = otwarte (spec §D).
- **Treść meta-kartki** = placeholder. Finalny tekst „od autora" pisze Oskar (`lore/meta-kartki/`).
- **Ikony PWA** puste w manifeście (POC).

## Architektura (jak dołożyć kolejny etap)

`stage-data.js` definiuje **generyczny schemat etapu** (`enter` / `brief` / `prop` / `exit` / `metaCard` / `next`).
Dołożenie etapu = dopisanie obiektu o tym samym kształcie do `STAGES[]`. Typy wyjścia:
- `exit.type:'PREV'` (`kind:'sequence'`) — apka waliduje lokalnie (jak Z1).
- `exit.type:'AKTOR'|'MG'` — krok odblokowuje kod podany z zewnątrz (np. Z2→Z3 = kod aktora).

`app.js` to router 3 ekranów (gate → brief → done) + normalizacja odpowiedzi (lower, bez diakrytyków,
aliasy) + persystencja stanu. `styles.css` zapożycza paletę i krój z `prototype/print/src/parchment.css`.

## Pliki

```
index.html              powłoka + 3 ekrany (gate/brief/done)
styles.css              parchment-styl, mobile-first
stage-data.js           SCHEMAT etapu + dane Z1 (jedyne miejsce treści)
app.js                  router + walidacja + bramkowanie meta-kartki + stan
manifest.webmanifest    PWA
sw.js                   offline cache (cache-first)
fonts/                  IM Fell English (kopia z druku — samowystarczalność)
```
