# z1-decoder — Z1 decoder card generator

Renders the **per-group decoder card** for Z1 ("szlak symboli"): a single A4 sheet that maps each
**detail icon** a group spots in the field to the **next glyph** on the shared map. One card per
group (G1–G10); the map itself is shared (`tools/map-gen` → `public/maps/map.*`).

Sibling of `tools/map-gen` (both are generators), kept separate by scope: the map is a
game-wide tool, the decoder is Z1-only. They share the glyph alphabet via `map-data.js`.

## How it works — derivation, not transcription

The decoder does **not** store its own prose. It derives all 9 rows from `Z1_GROUPS` in
`../map-gen/map-data.js`:

- Each group entry is `[4 chain codes + 5 distractor codes]`.
- **Chain** rows: `chain[0]→chain[1]→chain[2]→chain[3]→KONIEC` (sequential).
- **Distractor** rows: `d[0]→d[1]→d[2]→d[3]→d[4]→d[0]` (closed loop).
- Each row = `icon(source code) → glyph(next code)`. Glyph = `Z1_GLYPHS[next]`, i.e. the **same
  mark as on the map** (consistency by construction).
- Rows are **deterministically shuffled** (seed = group number) so the card never reveals which 4
  rows are the chain. The END row (no glyph, "return to MG") is the only tell — by design.

### ⚠ Invariant: `Z1_GROUPS` element order is load-bearing here

Order is irrelevant to the map (it lights 9 glyphs as a set) but **defines the decoder edges**.
A reorder in `map-data.js` silently breaks the decoder while the map still renders. There is a
loud comment over `Z1_GROUPS` in `map-data.js`. `decoder.html` runs a structural assert (9 distinct
codes, all present in `Z1_GLYPHS` + `icon-map.js`) — but that does **not** catch a semantic reorder
of the 4 chain codes. Only the one-time prose cross-check vs `puzzles/z1-10-sciezek.md` does
(see the validation pass). `gm-key.html` derives from the same `Z1_GROUPS`, so it is not an
independent witness.

## Files

| File | Role |
|------|------|
| `decoder.html` | Card template. `?group=G1..G10`. Loads `../map-gen/map-data.js` + the two data files below. |
| `icon-map.js` | code → detail-icon path (`../../prototype/icons/`). The only new datum vs the map. |
| `group-colors.js` | group → band colour + Polish name (corner tag; B&W-print fallback). Canon: `mechanics/grupy-i-klasy.md`. |
| `render-decoder.ps1` | Headless-Chrome batch render → `public/decoders/decoder-G1.pdf … G10.pdf`. |

## Render

```powershell
pwsh -File render-decoder.ps1            # all groups G1..G10
pwsh -File render-decoder.ps1 -Group G1  # one group (prototype / review)
```

Requires Chrome or Edge. No network (glyphs inline, icons local). `--disable-web-security`
+ `--allow-file-access-from-files` so the `<img>` SVG icons load over `file://`.

## Spoiler boundary (player card)

Shows only: detail icons, next-glyphs, the group colour + Polish colour name, the rule text, and
the 4-slot answer field. **No place names, no codes, no chain marking.** The answer key (4 chain
places in order) lives only with the MG (`gm-key.html`, `puzzles/z1-szlak-spec.md`).

## Sources

- Glyphs / group edges: `tools/map-gen/map-data.js` (`Z1_GLYPHS`, `Z1_GROUPS`).
- Detail icons: `prototype/icons/*.svg`.
- Decoder prose (cross-check): `puzzles/z1-10-sciezek.md` §Ścieżki v3.2.
- Styling: `prototype/print/src/parchment.css` (IM Fell English + parchment).
- Group colours: `mechanics/grupy-i-klasy.md`.
