# map-gen — navigation map generator

General, print-ready map generator (Leaflet + CARTO `light_nolabels` basemap,
headless-Chrome render to PNG + PDF). The **engine** (`map.html`, `map.css`,
`render-map.ps1`) is puzzle-agnostic; the **data** it renders lives in
`map-data.js`, which currently holds the **Z1 prototype** (places, glyphs,
groups). Swap `map-data.js` to drive a different map.

Layout: narrow map on the left + a right **rail** with the **Rynek Staromiejski
inset** (top) and a fill-in **KEY** (bottom) — one `glyph = ______` row per mark
on the sheet, blank for players to complete in the field. No place labels on the
map (no spoilers); CARTO `light_nolabels` keeps tiles name-free too.

## Files

| File | Purpose |
|------|---------|
| `map-data.js` | Coordinates, glyph SVGs, group definitions (Z1 data) |
| `map.html` | Print view — `?group=all` `&style=clean\|parchment` (always all glyphs) |
| `map.css` | Layout (sheet/rail are CSS vars), pin styles, parchment toggle |
| `map-tune.html` | Interactive calibration — set `FROZEN_CENTER`/`FROZEN_ZOOM` |
| `gm-key.html` | GM reference: code → glyph → place (full answer key) |
| `render-map.ps1` | Headless-Chrome batch renderer → `../../public/maps/` |

Output (PNG + PDF) lands in **`public/maps/`** (root-level, committed to git), not here.

## Requirements

- **Network** for render: Leaflet 1.9.4 (CDN) + CARTO tiles.
- Chrome or Edge (auto-detected). PowerShell 7+ (`pwsh`).

## Workflow

### 1 — Calibrate the frozen view

Open `map-tune.html` in Chrome. Pan/zoom until all pins fit with ~5% margin.
Keep zoom near an integer for sharp CARTO tiles. Copy `center`/`zoom` from the
readout into `map-data.js`:

```js
const FROZEN_CENTER = [lat, lng];
const FROZEN_ZOOM   = zoom;
```

### 2 — Render

```powershell
pwsh -File render-map.ps1                      # clean style → public/maps/map.png + .pdf
pwsh -File render-map.ps1 -Style parchment
pwsh -File render-map.ps1 -Compare            # clean + parchment side-by-side
```

Output (each run, both stay in sync):
- `public/maps/map.png` + `map.pdf` — **player** sheet: blank fill-in KEY (`glyph = ____`).
- `public/maps/map-mg.png` + `map-mg.pdf` — **MG** sheet: filled KEY (`glyph = place name`), doubles as the symbol→place reference. Header reads "KEY · MG — do not give to players".

Add `key=filled` to the `map.html` URL to preview the MG variant in a browser.

Check at 100% zoom: building edges sharp; all glyphs on the map match KEY rows;
Rynek inset shows the Old-Town cluster with pins separated.

## Render reliability (Chrome 147)

`render-map.ps1` polls for the screenshot file to appear and stabilise instead of
trusting an immediate check — Chrome flushes `--screenshot` asynchronously and the
launched process can return early. **Do not add `--user-data-dir`**: a fresh
profile breaks `--screenshot` on Chrome 147. If renders pile up orphaned headless
Chrome processes, sweep them:

```powershell
Get-CimInstance Win32_Process -Filter "Name='chrome.exe'" |
  Where-Object { $_.CommandLine -match '--headless' } |
  ForEach-Object { Stop-Process -Id $_.ProcessId -Force }
```

## Data sources

- Coordinates: `B:\Dev\projekt_gra-miejska\tools\places-manifest.json` (sibling wiki).
- Glyph alphabet / group assignments: `puzzles/z1-glify-globalne.md`, `puzzles/z1-10-sciezek.md`.
- Spoiler boundary (what players vs GM see): `puzzles/z1-szlak-spec.md`.
