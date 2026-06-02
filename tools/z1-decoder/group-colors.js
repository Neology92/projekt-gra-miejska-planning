// group-colors.js — Z1 decoder: group → band colour (corner tag).
// WORKING COPY. Canon = mechanics/grupy-i-klasy.md §Identyfikatory grup (10 colours + hex)
// and §Deterministyczne przypisanie (colour n ↔ path Gn). Keep hex in sync with that table.

// pl = Polish colour name printed small inside the corner tag — a fallback for black-and-white
// printing (the colour fill disappears in B&W; the word survives, and guides "cut from coloured
// paper, paste here"). Player still reads the real colour off the wristband.
const Z1_GROUP_COLORS = {
  G1:  { name: 'Red',     pl: 'czerwony',     hex: '#E6194B' },
  G2:  { name: 'Orange',  pl: 'pomarańczowy', hex: '#F58231' },
  G3:  { name: 'Yellow',  pl: 'żółty',        hex: '#FFE119' },
  G4:  { name: 'Green',   pl: 'zielony',      hex: '#3CB44B' },
  G5:  { name: 'Cyan',    pl: 'turkusowy',    hex: '#42D4F4' },
  G6:  { name: 'Blue',    pl: 'niebieski',    hex: '#4363D8' },
  G7:  { name: 'Purple',  pl: 'fioletowy',    hex: '#911EB4' },
  G8:  { name: 'White',   pl: 'biały',        hex: '#FFFFFF' },
  G9:  { name: 'Brown',   pl: 'brązowy',      hex: '#9A6324' },
  G10: { name: 'Black',   pl: 'czarny',       hex: '#2B2B2B' },
};
