// icon-map.js — Z1 decoder: code → detail-icon file (the ONE new datum the decoder needs).
// Glyphs and group edges come from ../map-gen/map-data.js (Z1_GLYPHS / Z1_GROUPS); this table
// only resolves which SVG in prototype/icons/ draws the *detail* a group spots at each code.
// N02 / C01 have spare variants on disk — the explicit choice (non-spare) lives here.
//
// Paths are relative to decoder.html (tools/z1-decoder/) → ../../prototype/icons/.
// Keep this set in sync with the codes used by Z1_GROUPS in map-data.js.

const Z1_ICON_DIR = '../../prototype/icons/';

const Z1_ICONS = {
  N01: 'n01-piernikarka.svg',
  N02: 'n02-przekupka.svg',        // not n02-przekupka-zapas-waga (spare)
  N03: 'n03-modry-fartuch.svg',
  N04: 'n04-apteka-lew.svg',
  N05: 'n05-kosciol-jakuba.svg',
  N06: 'n06-baj-pomorski.svg',
  C01: 'c01-kopernik.svg',         // not c01-kopernik-zapas-delfin (spare)
  C02: 'c02-osiolek.svg',
  C03: 'c03-pies-filus.svg',
  C04: 'c04-ratusz.svg',
  C06: 'c06-pod-gwiazda.svg',
  C07: 'c07-dwor-artusa.svg',
  C08: 'c08-kosciol-nmp.svg',
  C09: 'c09-katedra-janow.svg',
  S01: 's01-brama-mostowa.svg',
  S02: 's02-brama-klasztorna.svg',
  S04: 's04-kotwica-bulwar.svg',
  W01: 'w01-luk-cezara.svg',
  D01: 'd01-fontanna-flisaka.svg',
};

// Resolve a code to its icon URL (relative to decoder.html).
function z1IconUrl(code) {
  const file = Z1_ICONS[code];
  return file ? Z1_ICON_DIR + file : null;
}
