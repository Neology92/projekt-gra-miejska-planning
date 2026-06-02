/**
 * cipher-data.js — Z11 cipher data engine.
 *
 * Contains:
 *  - 16 gmerk symbols (S01..S16), deterministic SVG paths (mulberry32, seed=index)
 *  - Tabela 1 layout (4 colours × 4 objects); KEY cell = Brown × Ladle (interior, not last row/col)
 *  - Tabela 2 layout (16 substitution rows; KEY row = MARIENBURG keyword)
 *  - Validation: round-trip, permutation check, uniqueness, no decoy collision
 *
 * Dual-environment: browser <script> + Node.js CLI (node cipher-data.js).
 * Node exits 1 on validation failure.
 *
 * Layout decyzje Oskara [2026-06-02]: 4×4; chochla + symbol-klucz w ŚRODKU (nie ostatnie); cloth usunięte
 * (za blisko sukna z Z2) → zastąpione świecą; rule-text gracza OGÓLNY (bez „szaty"/„chochli").
 */

/* =================== MULBERRY32 PRNG (seeded, deterministic) =================== */
function mulberry32(seed) {
  let s = (seed * 2654435761) >>> 0;
  return function () {
    s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* =================== GMERK GENERATOR =================== */
// Each gmerk: vertical staff + 2–4 seeded elements (crossbars, diagonal, hook/fork, tick).
// Reads as an asymmetric merchant mark, distinct from map glyphs (△○□) and pictograms.

function generateGmerkPath(idx) {
  // idx is 0-based (0..15)
  const rng = mulberry32(idx + 1);

  const parts = [];

  const staffX  = 8 + Math.floor(rng() * 6);
  const staffY1 = 3 + Math.floor(rng() * 4);
  const staffY2 = 24 + Math.floor(rng() * 5);
  parts.push(`M${staffX},${staffY1} L${staffX},${staffY2}`);

  const barY  = staffY1 + 4 + Math.floor(rng() * (staffY2 - staffY1 - 8));
  const barDir = rng() > 0.5 ? 1 : -1;
  const barLen = 5 + Math.floor(rng() * 9);
  const barX2 = staffX + barDir * barLen;
  parts.push(`M${staffX},${barY} L${barX2},${barY}`);

  const bar2Y = staffY1 + 3 + Math.floor(rng() * (staffY2 - staffY1 - 6));
  const bar2YFinal = Math.abs(bar2Y - barY) < 4
    ? (bar2Y + 5 > staffY2 ? bar2Y - 5 : bar2Y + 5)
    : bar2Y;
  const bar2Dir = rng() > 0.5 ? 1 : -1;
  const bar2Len = 4 + Math.floor(rng() * 8);
  const bar2X2 = staffX + bar2Dir * bar2Len;
  parts.push(`M${staffX},${bar2YFinal} L${bar2X2},${bar2YFinal}`);

  if (rng() > 0.5) {
    const diagY1 = staffY1 + 5 + Math.floor(rng() * 8);
    const diagDx = (rng() > 0.5 ? 1 : -1) * (4 + Math.floor(rng() * 7));
    const diagDy = 4 + Math.floor(rng() * 6);
    parts.push(`M${staffX},${diagY1} L${staffX + diagDx},${diagY1 + diagDy}`);
  }

  if (rng() > 0.5) {
    if (rng() > 0.5) {
      const hDir = rng() > 0.5 ? 1 : -1;
      const hx2 = staffX + hDir * (3 + Math.floor(rng() * 5));
      parts.push(`M${staffX},${staffY1} Q${staffX + hDir * 3},${staffY1 - 3} ${hx2},${staffY1 - 2}`);
    } else {
      const forkLen = 3 + Math.floor(rng() * 4);
      parts.push(`M${staffX},${staffY2} L${staffX - forkLen},${staffY2 + forkLen}`);
      parts.push(`M${staffX},${staffY2} L${staffX + forkLen},${staffY2 + forkLen}`);
    }
  }

  if (rng() > 0.67) {
    const tickY = barY + (rng() > 0.5 ? -2 : 2);
    parts.push(`M${barX2},${barY} L${barX2 + (rng() > 0.5 ? 2 : -2)},${tickY}`);
  }

  return parts.join(' ');
}

function makeGmerkSvg(idx, size) {
  const sz = size || 32;
  const d  = generateGmerkPath(idx);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${sz}" height="${sz}">`
       + `<path d="${d}" fill="none" stroke="var(--ink,#16110c)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
       + `</svg>`;
}

/* =================== TABELA 1 DATA (4×4) =================== */

// Row colours (English labels + hex swatch). Brown = KEY row, placed CENTRALLY (index 2 of 4).
const T1_ROWS = [
  { id: 'Red',   hex: '#b3242b' },
  { id: 'Green', hex: '#2f6d3a' },
  { id: 'Brown', hex: '#6b4423' },   // KEY row (Jordan's robe) — central, not last
  { id: 'Black', hex: '#1a1a1a' },
];

// Column objects (drawn as SVG icons). Ladle = KEY col, placed CENTRALLY (index 2 of 4).
// Cloth removed (too close to Z2 sukno) → replaced by Candle. Bread dropped to fit 4×4.
const T1_COLS = ['Gingerbread', 'Sword', 'Ladle', 'Candle'];

// 16 symbols S01..S16, row-major. KEY = Brown × Ladle = row 2, col 2 → idx 2*4+2 = 10 = S11.
const KEY_IDX = 10;
const SYMBOLS = Array.from({ length: 16 }, (_, i) => ({
  id:    `S${String(i + 1).padStart(2, '0')}`,
  idx:   i,
  isKey: i === KEY_IDX,   // S11 = Brown×Ladle (no visual highlight on the player prop)
}));

/* =================== OBJECT COLUMN ICONS (inline SVG) =================== */
// Warm parchment tones (#6e4824 / #c08a52), stroke ~2.4px, viewBox 0 0 32 32.

const COL_ICONS = {
  Gingerbread: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img" aria-label="Gingerbread">
    <path d="M16,27 C6,19 3,13 3,9 C3,5 6,3 10,3 C12.5,3 14.5,4.5 16,7 C17.5,4.5 19.5,3 22,3 C26,3 29,5 29,9 C29,13 26,19 16,27 Z"
          fill="#c08a52" stroke="#6e4824" stroke-width="2.4" stroke-linejoin="round"/>
    <circle cx="12" cy="11" r="1.5" fill="#efe0b8"/>
    <circle cx="20" cy="11" r="1.5" fill="#efe0b8"/>
    <circle cx="16" cy="17" r="1.5" fill="#efe0b8"/>
  </svg>`,

  Sword: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img" aria-label="Sword">
    <line x1="16" y1="3" x2="16" y2="26" stroke="#6e4824" stroke-width="2.4" stroke-linecap="round"/>
    <line x1="9" y1="22" x2="23" y2="22" stroke="#6e4824" stroke-width="2.4" stroke-linecap="round"/>
    <circle cx="16" cy="29" r="3" fill="#c08a52" stroke="#6e4824" stroke-width="2"/>
    <line x1="15" y1="5" x2="15" y2="21" stroke="#efe0b8" stroke-width="1" stroke-linecap="round" opacity="0.6"/>
  </svg>`,

  Ladle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img" aria-label="Ladle">
    <circle cx="10" cy="11" r="7" fill="#c08a52" stroke="#6e4824" stroke-width="2.4"/>
    <ellipse cx="10" cy="13" rx="5" ry="3" fill="#a86c38" opacity="0.5"/>
    <path d="M16,16 Q22,20 28,27" fill="none" stroke="#6e4824" stroke-width="2.8" stroke-linecap="round"/>
  </svg>`,

  Candle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img" aria-label="Candle">
    <!-- Candle body -->
    <rect x="12" y="10" width="8" height="16" rx="1.5" fill="#c08a52" stroke="#6e4824" stroke-width="2.4"/>
    <!-- Holder base -->
    <path d="M8,26 L24,26 L21,29 L11,29 Z" fill="#c08a52" stroke="#6e4824" stroke-width="2.2" stroke-linejoin="round"/>
    <!-- Wick -->
    <line x1="16" y1="10" x2="16" y2="7" stroke="#6e4824" stroke-width="1.6" stroke-linecap="round"/>
    <!-- Flame -->
    <path d="M16,7 C18,4.5 18,2.5 16,1 C14,2.5 14,4.5 16,7 Z" fill="#efe0b8" stroke="#6e4824" stroke-width="1.4" stroke-linejoin="round"/>
  </svg>`,
};

/* =================== TABELA 2 DATA (16 rows) =================== */

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// KEY row = MARIENBURG keyword substitution (canonical, from spec)
const KEY_ROW = 'MARIENBUGCDFHJKLOPQSTVWXYZ'.split('');

// Generate a seeded permutation of A-Z for a decoy row
function makeDecoyRow(symbolIdx) {
  const row = [...ALPHABET];
  const rng = mulberry32((symbolIdx + 1) * 97 + 13);
  for (let i = row.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [row[i], row[j]] = [row[j], row[i]];
  }
  return row;
}

// Build all 16 rows: KEY_IDX = MARIENBURG, the rest = decoy
const T2_ROWS = SYMBOLS.map((sym, i) => (i === KEY_IDX ? KEY_ROW : makeDecoyRow(i)));

/* =================== CIPHER HELPERS =================== */

function decodeWithRow(ciphertext, row) {
  return ciphertext.split('').map(ch => {
    if (ch === ' ') return ' ';
    const pos = row.indexOf(ch);
    return pos >= 0 ? ALPHABET[pos] : '?';
  }).join('');
}

function encodeWithRow(plaintext, row) {
  return plaintext.split('').map(ch => {
    if (ch === ' ') return ' ';
    const pos = ALPHABET.indexOf(ch);
    return pos >= 0 ? row[pos] : '?';
  }).join('');
}

/* =================== VALIDATION =================== */

// Plaintext = the Order's motto (same motto that is the Z7 KEY for the mieszczanie).
// Decoding Z11 yields it; spoken to Albrecht it unlocks delivering the letter. [decyzja Oskara 2026-06-03]
// Punctuation (comma/!) is cosmetic on the prop only — validation uses letters + word spaces.
const PLAINTEXT   = 'HELFEN HEILEN UND WEHREN';
const CIPHERTEXT  = 'UEFNEJ UEGFEJ TJI WEUPEJ';        // letters + word spaces — used for round-trip validation
// Player-facing form on the prop [Oskar 2026-06-03]: punctuation passes through 1:1 (comma/!
// in the same positions as the motto, anchoring the words — same device as Z7).
const CIPHERTEXT_DISPLAY = 'UEFNEJ, UEGFEJ TJI WEUPEJ!';
const N           = SYMBOLS.length;   // 16

function runValidation(loud) {
  const log = loud ? console.log   : () => {};
  const err = loud ? console.error : () => {};
  let ok = true;

  const decoded = decodeWithRow(CIPHERTEXT, KEY_ROW);
  if (decoded !== PLAINTEXT) { err(`FAIL 1: decode KEY → "${decoded}", expected "${PLAINTEXT}"`); ok = false; }
  else log(`PASS 1: decode KEY (S${KEY_IDX + 1}) → "${decoded}"`);

  const encoded = encodeWithRow(PLAINTEXT, KEY_ROW);
  if (encoded !== CIPHERTEXT) { err(`FAIL 1b: encode KEY → "${encoded}", expected "${CIPHERTEXT}"`); ok = false; }
  else log(`PASS 1b: encode KEY → "${encoded}"`);

  let v2 = true;
  T2_ROWS.forEach((row, i) => {
    if ([...row].sort().join('') !== 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
      err(`FAIL 2: row S${String(i+1).padStart(2,'0')} not a full permutation: ${row.join('')}`);
      v2 = false; ok = false;
    }
  });
  if (v2) log(`PASS 2: all ${N} rows are full A–Z permutations`);

  let v3 = true;
  for (let i = 0; i < N; i++) {
    if (i === KEY_IDX) continue;
    if (decodeWithRow(CIPHERTEXT, T2_ROWS[i]) === PLAINTEXT) {
      err(`FAIL 3: decoy S${String(i+1).padStart(2,'0')} also decodes to "${PLAINTEXT}"`);
      v3 = false; ok = false;
    }
  }
  if (v3) log('PASS 3: no decoy row decodes ciphertext to plaintext');

  const paths = SYMBOLS.map(sym => generateGmerkPath(sym.idx));
  if (new Set(paths).size !== N) { err(`FAIL 4: only ${new Set(paths).size} unique gmerk paths (need ${N})`); ok = false; }
  else log(`PASS 4: ${N} unique gmerk paths`);

  log(ok ? '\n=== ALL VALIDATIONS PASSED ===' : '\n=== VALIDATION FAILED ===');
  return ok;
}

/* =================== EXPORTS =================== */

const Z11_DATA = {
  SYMBOLS, T1_ROWS, T1_COLS, COL_ICONS, T2_ROWS, ALPHABET,
  KEY_ROW, KEY_IDX, CIPHERTEXT, CIPHERTEXT_DISPLAY, PLAINTEXT,
  makeGmerkSvg, generateGmerkPath, decodeWithRow, encodeWithRow, runValidation,
};

if (typeof window !== 'undefined') { window.Z11_DATA = Z11_DATA; }

if (typeof module !== 'undefined' && require.main === module) {
  process.exit(runValidation(true) ? 0 : 1);
}
