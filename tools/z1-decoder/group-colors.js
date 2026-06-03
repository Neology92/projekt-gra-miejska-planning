// group-colors.js — Z1 decoder: group → band colour (corner tag).
// WORKING COPY. Canon = mechanics/grupy-i-klasy.md §Identyfikatory grup (10 colours + hex)
// and §Deterministyczne przypisanie (colour n ↔ path Gn). Keep hex in sync with that table.

// pl = Polish colour name printed small inside the corner tag — a fallback for black-and-white
// printing (the colour fill disappears in B&W; the word survives, and guides "cut from coloured
// paper, paste here"). Player still reads the real colour off the wristband.
// ascii = diacritic-free colour token for filenames + the edge-stamp (filename-safe, cross-platform).
// Canon ASCII list: envelopes/README.md §Systematyka nazw. Keep in sync.
const Z1_GROUP_COLORS = {
  G1:  { name: 'Red',     pl: 'czerwony',     ascii: 'czerwony',     hex: '#E6194B' },
  G2:  { name: 'Orange',  pl: 'pomarańczowy', ascii: 'pomaranczowy', hex: '#F58231' },
  G3:  { name: 'Yellow',  pl: 'żółty',        ascii: 'zolty',        hex: '#FFE119' },
  G4:  { name: 'Green',   pl: 'zielony',      ascii: 'zielony',      hex: '#3CB44B' },
  G5:  { name: 'Cyan',    pl: 'turkusowy',    ascii: 'turkusowy',    hex: '#42D4F4' },
  G6:  { name: 'Blue',    pl: 'niebieski',    ascii: 'niebieski',    hex: '#4363D8' },
  G7:  { name: 'Purple',  pl: 'fioletowy',    ascii: 'fioletowy',    hex: '#911EB4' },
  G8:  { name: 'White',   pl: 'biały',        ascii: 'bialy',        hex: '#FFFFFF' },
  G9:  { name: 'Brown',   pl: 'brązowy',      ascii: 'brazowy',      hex: '#9A6324' },
  G10: { name: 'Black',   pl: 'czarny',       ascii: 'czarny',       hex: '#2B2B2B' },
};
