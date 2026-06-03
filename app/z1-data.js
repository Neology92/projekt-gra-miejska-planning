/* ============================================================================
   z1-data.js — KANON zagadki Z1 dla WSZYSTKICH 10 grup.
   Źródło: tools/map-gen/map-data.js §Z1_GROUPS · tools/z1-decoder/group-colors.js
           · tools/z1-decoder/icon-map.js. W aplikacji renderujemy DOKŁADNIE te
   same ikony, które grupa ma na drukowanej karcie deszyfrownika.

   Każda grupa = 9 kodów: pierwsze 4 = ŁAŃCUCH (w kolejności wypatrywania,
   ostatni → KONIEC u MG), kolejne 5 = pętla dystraktorów.
   ⚠ KOLEJNOŚĆ load-bearing (jak w map-data.js) — nie przestawiać.

   Frakcja (CLAUDE.md §Kanoniczny przydział): G1–G5 = Mieszczanie (TR),
   G6–G10 = Krzyżacy (KZ). W Z1 frakcja jest ukryta fabularnie (split w Z2) —
   pokazujemy graczowi numer + kolor, nie frakcję.
   ============================================================================ */

// kod miejsca → plik ikony detalu (= icon-map.js)
const Z1_ICONS = {
  N01: 'n01-piernikarka.svg',   N02: 'n02-przekupka.svg',     N03: 'n03-modry-fartuch.svg',
  N04: 'n04-apteka-lew.svg',    N05: 'n05-kosciol-jakuba.svg',N06: 'n06-baj-pomorski.svg',
  C01: 'c01-kopernik.svg',      C02: 'c02-osiolek.svg',       C03: 'c03-pies-filus.svg',
  C04: 'c04-ratusz.svg',        C06: 'c06-pod-gwiazda.svg',   C07: 'c07-dwor-artusa.svg',
  C08: 'c08-kosciol-nmp.svg',   C09: 'c09-katedra-janow.svg', S01: 's01-brama-mostowa.svg',
  S02: 's02-brama-klasztorna.svg', S04: 's04-kotwica-bulwar.svg', W01: 'w01-luk-cezara.svg',
  D01: 'd01-fontanna-flisaka.svg',
};

// 10 grup — 9 kodów (4 łańcuch + 5 dystraktorów). Kolejność = map-data.js.
const Z1_GROUPS = {
  1:  ['N01', 'N02', 'N06', 'C04', 'N04', 'N05', 'N03', 'S04', 'W01'],
  2:  ['N06', 'N04', 'N05', 'C01', 'N01', 'C02', 'C06', 'S01', 'W01'],
  3:  ['C02', 'N01', 'C03', 'C06', 'N04', 'S01', 'W01', 'C07', 'C04'],
  4:  ['N04', 'N06', 'C09', 'C02', 'N01', 'C01', 'C06', 'S01', 'S04'],
  5:  ['N05', 'C04', 'S04', 'C07', 'N02', 'N04', 'C03', 'C06', 'S01'],
  6:  ['S02', 'C08', 'C04', 'C06', 'S01', 'S04', 'C01', 'C07', 'N01'],
  7:  ['S01', 'C09', 'C06', 'C07', 'N01', 'C03', 'D01', 'S02', 'W01'],
  8:  ['C09', 'C01', 'N01', 'C06', 'C02', 'N02', 'S01', 'S04', 'W01'],
  9:  ['N02', 'C06', 'S02', 'C07', 'N04', 'C01', 'C09', 'S04', 'W01'],
  10: ['C03', 'C07', 'N04', 'C08', 'D01', 'W01', 'S01', 'C06', 'C04'],
};

// numer grupy → kolor (EN, player-facing) + hex + frakcja
const GROUP_META = {
  1:  { name: 'Red',    hex: '#E6194B', faction: 'TR' },
  2:  { name: 'Orange', hex: '#F58231', faction: 'TR' },
  3:  { name: 'Yellow', hex: '#FFE119', faction: 'TR' },
  4:  { name: 'Green',  hex: '#3CB44B', faction: 'TR' },
  5:  { name: 'Cyan',   hex: '#42D4F4', faction: 'TR' },
  6:  { name: 'Blue',   hex: '#4363D8', faction: 'KZ' },
  7:  { name: 'Purple', hex: '#911EB4', faction: 'KZ' },
  8:  { name: 'White',  hex: '#FFFFFF', faction: 'KZ' },
  9:  { name: 'Brown',  hex: '#9A6324', faction: 'KZ' },
  10: { name: 'Black',  hex: '#2B2B2B', faction: 'KZ' },
};

// buduje dane zagadki Z1 dla danej grupy
function z1PuzzleFor(group) {
  const codes = Z1_GROUPS[group];
  if (!codes) return null;
  return {
    group: group,
    chain: codes.slice(0, 4),                          // poprawna sekwencja (kolejność)
    display: codes.slice().sort(),                     // 9 ikon, alfabetycznie (nie zdradza łańcucha)
    icons: Z1_ICONS,
  };
}
