# tools/z11-cipher — Z11 finale cipher tables (KZ track)

Generates two player-facing props for the Z11 finale of the Krzyżacy track.
Spec: `puzzles/z11-szyfr-spec.md`. Layout = 4×4 [decyzja Oskara 2026-06-02].

## Output

| File | Page | Content |
|------|------|---------|
| `public/z11-tabela-1-symbole.pdf` | A4 portrait | Table 1: 4×4 colour × object lookup → gmerk symbol |
| `public/z11-tabela-2-tabula-recta.pdf` | A4 landscape | Table 2: 16-row tabula recta (one row per symbol) |

## How to render

```powershell
pwsh -File tools/z11-cipher/render-z11.ps1
```

Requires Chrome or Edge. Node.js validation runs first; render is aborted on failure.

## Files

| File | Purpose |
|------|---------|
| `cipher-data.js` | Data engine: 16 gmerk generators (mulberry32), T1/T2 data, cipher helpers, validation |
| `tabela-1.html` | Table 1 HTML (A4 portrait, parchment.css) |
| `tabela-2.html` | Table 2 HTML (A4 landscape, parchment.css) |
| `render-z11.ps1` | PowerShell render script (headless Chrome, no --user-data-dir) |

## What is working / provisional (prototype status)

- **Grid 4×4**: rows = Red/Green/Brown/Black; columns (drawn icons) = Gingerbread/Sword/Ladle/Candle.
  KEY cell = `Brown × Ladle = S11`, placed CENTRALLY (not last row/col). Cloth removed (too close to
  Z2 sukno) → Candle; bread dropped to fit 4×4.
- **Rule text on Table 1 is GENERIC** (no "robe"/"ladle") — player infers.
- **Gmerk shapes**: algorithmically generated (mulberry32, seed=symbol index). 16 distinct paths,
  visually different from map glyphs (△○□) and place pictograms. Subject to Oskar's art direction
  (gmerki / heraldry / astro — spec §8.6).
- **Plaintext / ciphertext**: `ONE CROSS ONE OATH` / `KJE RPKQQ KJE KMSU` — working values (spec §2).
  Swappable (spec §8.5).
- **Keyword**: MARIENBURG (S11 row). Swappable independently of plaintext.
- **Decoy rows (15)**: deterministic permutations. Validated: no decoy decodes ciphertext to plaintext.

## Validation (cipher-data.js)

```
node tools/z11-cipher/cipher-data.js
```

1. Round-trip: decode `KJE RPKQQ KJE KMSU` with S11 → `ONE CROSS ONE OATH`
2. All 16 rows are full A–Z permutations
3. No decoy row decodes ciphertext to plaintext
4. All 16 gmerk paths are distinct
