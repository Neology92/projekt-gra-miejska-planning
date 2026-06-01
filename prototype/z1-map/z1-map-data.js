// Z1 map data — 19 places, 10 groups, glyph SVGs
// Coords verified against tools/places-manifest.json (projekt_gra-miejska)
// Glyph shapes: viewBox 0 0 32 32, fill=none stroke=#2a1f0e stroke-width≈2.4 round
// Exception: D01 (3 dots) uses fill=#2a1f0e

const Z1_PLACES = {
  N01: { coords: [53.0112, 18.6095], name: 'Piernikarka'    },
  N02: { coords: [53.0118, 18.6110], name: 'Przekupka'      },
  N03: { coords: [53.0112, 18.6110], name: 'Modry Fartuch'  },
  N04: { coords: [53.0115, 18.6103], name: 'Apteka Lew'     },
  N05: { coords: [53.0119, 18.6126], name: 'Kościół Jakuba' },
  N06: { coords: [53.0104, 18.6122], name: 'Baj Pomorski'   },
  C01: { coords: [53.0103, 18.6050], name: 'Kopernik'       },
  C02: { coords: [53.0102, 18.6053], name: 'Osiołek'        },
  C03: { coords: [53.0111, 18.6045], name: 'Filuś'          },
  C04: { coords: [53.0103, 18.6044], name: 'Ratusz'         },
  C06: { coords: [53.0107, 18.6052], name: 'Pod Gwiazdą'    },
  C07: { coords: [53.0101, 18.6042], name: 'Dwór Artusa'    },
  C08: { coords: [53.0110, 18.6024], name: 'Kościół NMP'    },
  C09: { coords: [53.0094, 18.6063], name: 'Katedra Janów'  },
  S01: { coords: [53.0086, 18.6089], name: 'Brama Mostowa'  },
  S02: { coords: [53.0083, 18.6036], name: 'Brama Klasztorna' },
  S04: { coords: [53.0076, 18.6039], name: 'Kotwica'        },
  W01: { coords: [53.0098, 18.6020], name: 'Łuk Cezara'     },
  D01: { coords: [53.0101, 18.6040], name: 'Fontanna Flisaka' },
};

// Glyph SVG bodies (no <svg> wrapper; will be embedded at x=4 y=4 width=24 height=24 viewBox="0 0 32 32")
const Z1_GLYPHS = {
  // N-zone: directional triangles
  N01: '<polygon points="16,4 28,27 4,27" fill="none" stroke="#2a1f0e" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>',
  N02: '<polygon points="16,28 28,5 4,5" fill="none" stroke="#2a1f0e" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>',
  N03: '<polygon points="5,16 27,4 27,28" fill="none" stroke="#2a1f0e" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>',
  N04: '<polygon points="27,16 5,4 5,28" fill="none" stroke="#2a1f0e" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>',
  N05: '<polygon points="16,4 27.4,12.3 23.1,25.7 8.9,25.7 4.6,12.3" fill="none" stroke="#2a1f0e" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>',
  N06: '<polygon points="28,16 22,5.6 10,5.6 4,16 10,26.4 22,26.4" fill="none" stroke="#2a1f0e" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>',
  // C-zone: geometric/grid marks
  C01: '<polygon points="16,3 29,16 16,29 3,16" fill="none" stroke="#2a1f0e" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>',
  C02: '<rect x="4" y="4" width="24" height="24" fill="none" stroke="#2a1f0e" stroke-width="2.4" stroke-linejoin="round"/>',
  C03: '<polyline points="4,26 16,6 28,26" fill="none" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  C04: '<rect x="4" y="4" width="24" height="24" fill="none" stroke="#2a1f0e" stroke-width="2.4" stroke-linejoin="round"/><line x1="16" y1="4" x2="16" y2="28" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round"/><line x1="4" y1="16" x2="28" y2="16" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round"/>',
  C06: '<path d="M4,16 C8,8 12,8 16,16 C20,24 24,24 28,16" fill="none" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round"/>',
  C07: '<line x1="11" y1="3" x2="11" y2="29" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round"/><line x1="21" y1="3" x2="21" y2="29" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round"/><line x1="3" y1="11" x2="29" y2="11" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round"/><line x1="3" y1="21" x2="29" y2="21" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round"/>',
  C08: '<rect x="4" y="4" width="24" height="24" fill="none" stroke="#2a1f0e" stroke-width="2.4" stroke-linejoin="round"/><line x1="16" y1="4" x2="16" y2="28" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round"/><line x1="4" y1="28" x2="16" y2="16" stroke="#2a1f0e" stroke-width="1.4" stroke-linecap="round"/><line x1="4" y1="20" x2="12" y2="12" stroke="#2a1f0e" stroke-width="1.4" stroke-linecap="round"/><line x1="8" y1="28" x2="16" y2="20" stroke="#2a1f0e" stroke-width="1.4" stroke-linecap="round"/>',
  C09: '<rect x="4" y="4" width="24" height="24" fill="none" stroke="#2a1f0e" stroke-width="2.4" stroke-linejoin="round"/><line x1="4" y1="16" x2="28" y2="16" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round"/>',
  // S-zone: cross marks
  S01: '<line x1="5" y1="5" x2="27" y2="27" stroke="#2a1f0e" stroke-width="2.8" stroke-linecap="round"/><line x1="27" y1="5" x2="5" y2="27" stroke="#2a1f0e" stroke-width="2.8" stroke-linecap="round"/>',
  S02: '<line x1="16" y1="28" x2="16" y2="14" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round"/><line x1="16" y1="14" x2="8" y2="4" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round"/><line x1="16" y1="14" x2="16" y2="4" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round"/><line x1="16" y1="14" x2="24" y2="4" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round"/>',
  S04: '<line x1="11" y1="5" x2="11" y2="27" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round"/><line x1="21" y1="5" x2="21" y2="27" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round"/>',
  // W-zone / D-zone
  W01: '<polyline points="20,4 12,12 20,20 12,28" fill="none" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  D01: '<circle cx="16" cy="9" r="2.8" fill="#2a1f0e"/><circle cx="9" cy="23" r="2.8" fill="#2a1f0e"/><circle cx="23" cy="23" r="2.8" fill="#2a1f0e"/>',
};

// 10 groups: each holds exactly 9 active codes (4 chain + 5 distractors, visually indistinct)
const Z1_GROUPS = {
  G1:  ['N01','N02','N06','C04','N04','N05','N03','S04','W01'],
  G2:  ['N06','N04','N05','C01','N01','C02','C06','S01','W01'],
  G3:  ['C02','N01','C03','C06','N04','S01','W01','C07','C04'],
  G4:  ['N04','N06','C09','C02','N01','C01','C06','S01','S04'],
  G5:  ['N05','C04','S04','C07','N02','N04','C03','C06','S01'],
  G6:  ['S02','C08','C04','C06','S01','S04','C01','C07','N01'],
  G7:  ['S01','C09','C06','C07','N01','C03','D01','S02','W01'],
  G8:  ['C09','C01','N01','C06','C02','N02','S01','S04','W01'],
  G9:  ['N02','C06','S02','C07','N04','C01','C09','S04','W01'],
  G10: ['C03','C07','N04','C08','D01','W01','S01','C06','C04'],
};

// Rynek Staromiejski cluster → rendered in inset only
const Z1_INSET_CODES = ['C01','C02','C03','C04','C06','C07','D01'];

// Inset bounding box (SW, NE) — Rynek cluster + margin
const Z1_INSET_SW = [53.0098, 18.6036];
const Z1_INSET_NE = [53.0114, 18.6058];

// FROZEN view — calibrate via z1-map-tune.html, then paste values here
// Target: whole Stare + Nowe Miasto with ~5% margin; zoom as high as fits
// Keep zoom near an integer for sharp CARTO tiles
const FROZEN_CENTER = [53.010501, 18.608244];
const FROZEN_ZOOM   = 16.80;

// START marker (Rynek Nowomiejski briefing point)
const START_COORDS = [53.0114, 18.6107];

// Fixed landmarks — always rendered on all 10 maps (option A: same pin style, own glyph)
// Players learn their meaning from envelope info, not map labels
const Z1_LANDMARKS = {
  L01: {
    coords: [53.0127, 18.6081],
    name: 'Piccolo',
    // ≡ three horizontal parallels (distinct from S04's two verticals)
    glyph: '<line x1="4" y1="11" x2="28" y2="11" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round"/>'
         + '<line x1="4" y1="16" x2="28" y2="16" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round"/>'
         + '<line x1="4" y1="21" x2="28" y2="21" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round"/>',
  },
  L02: {
    coords: [53.0095, 18.6101],
    name: 'Zamek Krzyżacki',
    // ∞ lemniscate/infinity — no overlap with existing alphabet or detail icons
    glyph: '<path d="M16,16 C13,10 4,10 4,16 C4,22 13,22 16,16 C19,10 28,10 28,16 C28,22 19,22 16,16Z"'
         + ' fill="none" stroke="#2a1f0e" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  },
};

// Tile URL (CARTO light — no labels = no place name leaks)
const TILE_URL = 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png';
const TILE_ATTR = '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> · © <a href="https://carto.com/attributions">CARTO</a>';
