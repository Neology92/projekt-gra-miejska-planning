/* ============================================================================
   z1-data.js — KANONICZNE dane zagadki Z1 dla grupy G1 (Red / czerwony).
   ----------------------------------------------------------------------------
   Źródło prawdy = drukowana karta deszyfrownika G1 (tools/z1-decoder/ +
   tools/map-gen/map-data.js §Z1_GROUPS). W aplikacji renderujemy DOKŁADNIE te
   same 9 ikon, które gracz trzyma na karcie — wybiera 4 wypatrzone w kolejności.

   Łańcuch G1 (kanon puzzles/z1-10-sciezek.md §v3.2):
     N01 piernik → N02 gęś → N06 szafa → C04 wieża-bez-hełmu → KONIEC(MG)
   Dystraktory G1: N04 lew · N05 bazylika · N03 fartuch · S04 kotwica · W01 łuk.

   ⚠ Bez podpisów pod ikonami — karta druku też ich nie ma (ikona→glif). Gracz
   rozpoznaje detale, bo przeszedł szlak. Kolejność wyświetlania = alfabetycznie
   po kodzie (NIE kolejność łańcucha — nie zdradza rozwiązania).
   ============================================================================ */

const Z1_G1 = {
  group: 'G1',
  color: 'Red',

  // poprawna sekwencja (kody miejsc), w kolejności wypatrywania na szlaku
  chain: ['N01', 'N02', 'N06', 'C04'],

  // 9 kodów karty w kolejności WYŚWIETLANIA (alfabetycznie — nie zdradza łańcucha)
  display: ['C04', 'N01', 'N02', 'N03', 'N04', 'N05', 'N06', 'S04', 'W01'],

  // kod → plik ikony detalu (= icon-map.js; render 1:1 z kartą druku)
  icons: {
    N01: 'n01-piernikarka.svg',   // piernik
    N02: 'n02-przekupka.svg',     // gęś
    N03: 'n03-modry-fartuch.svg', // fartuch (dystraktor)
    N04: 'n04-apteka-lew.svg',    // lew (dystraktor)
    N05: 'n05-kosciol-jakuba.svg',// bazylika (dystraktor)
    N06: 'n06-baj-pomorski.svg',  // szafa
    C04: 'c04-ratusz.svg',        // wieża bez hełmu
    S04: 's04-kotwica-bulwar.svg',// kotwica (dystraktor)
    W01: 'w01-luk-cezara.svg',    // łuk (dystraktor)
  },
};
