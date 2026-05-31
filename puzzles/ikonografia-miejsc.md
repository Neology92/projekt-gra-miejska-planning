# Ikonografia miejsc — katalog cech do piktogramów

> **Po co:** katalog **charakterystycznych cech wizualnych** konkretnych miejsc Torunia, z których generujemy **piktogramy detali** (np. do deszyfrownika Z1, później do innych zagadek). Każda cecha = realny, wypatrzalny w terenie detal → kandydat na ikonę.
>
> **To źródło piktogramów** — gdy zagadka potrzebuje „detalu miejsca", bierze go stąd. Plik **rośnie**: na razie 9 miejsc z prototypowej ścieżki Z1; później dokładamy kolejne (z wiki `przewodnik-miejsc-gry.js` + ingerencje Oskara).
>
> Powiązania: trasa/łańcuch Z1 → `z1-szlak-spec.md`; mechanika → `szlak-symboli.md`.

## Zasady

- **Cecha musi być realnie widoczna z ulicy** (24/7) i jednoznaczna — gracz ma ją wypatrzeć i dopasować do piktogramu.
- **Piktogram:** część miejsc ma już **wektor** (`prototype/icons/*.svg`) — patrz „Ikony wektorowe" niżej; reszta to **emoji-placeholdery** (finalne ikony do dorobienia). Kolumna „Piktogram" mówi, **co** ma przedstawiać.
- **Glif vs detal to dwie warstwy** (patrz `z1-szlak-spec.md`): glif = abstrakcyjny znak nawigacyjny na mapie; detal/piktogram = obrazek „co wypatrzeć". Tu opisujemy **detale**.
- **Weryfikacja:** „✓ wiki" = cecha potwierdzona w `przewodnik-miejsc-gry.js`; „⚠ teren" = wymaga sprawdzenia na miejscu/zdjęciu.

## Miejsca z prototypowej ścieżki Z1 (9)

| Miejsce | Lokalizacja | Cecha wizualna (haczyk) | Piktogram (placeholder) | Rola w Z1 | Weryfikacja |
|---|---|---|---|---|---|
| **Pomnik Piernikarki** | Rynek Nowomiejski | kosz toruńskich pierników; piesek szarpie suknię | **piernik** (serce piernikowe) — wektor `prototype/icons/piernik.svg` | łańcuch (△) | ✓ wiki #35 |
| **Kamienica Pod Gwiazdą** | Rynek Staromiejski 35 | pozłacana **gwiazda** na szczycie żółtej barokowej fasady (data 1697) | ⭐ gwiazda | łańcuch (○) | ✓ wiki #7 |
| **osiołek** (dawny pręgierz) | Rynek / zbieg z ul. Żeglarską | żelazny **grzbiet osiołka** (replika pręgierza) | 🫏 osioł | łańcuch (□) | ✓ wiki #3 |
| **Pomnik Kopernika** | Rynek Staromiejski (przy Ratuszu) | **instrument astronomiczny** (sfera armilarna / astrolabium) trzymany przez posąg astronoma | **astrolabium** — wektor `prototype/icons/astrolabium.svg` | łańcuch (◇, KONIEC) | ⚠ teren — wiki opisuje tylko wąsik (2003) i delfina w studzience; **co trzyma posąg — zweryfikuj na zdjęciu** |
| **Krzywa Wieża** | ul. Pod Krzywą Wieżą 1 | wyraźnie **przechylona baszta** murów miejskich | 🗼 wieża | dystraktor (⬡) | ✓ wiki #17 |
| **pies Filuś** | wylot ul. Chełmińskiej (Rynek Star.) | **melonik** prof. Filutka w pyszczku kundelka | 🎩 melonik | dystraktor (☆) | ✓ wiki #4 |
| **Łuk Cezara** | ul. Piekary 37 | Michał Archanioł z **trąbką** na attyce (+ szczątek torów tramwajowych pod sklepieniem) | 🎺 trąbka | dystraktor (✕) | ✓ wiki #10 |
| **Pomnik Przekupki** | Rynek Nowomiejski (przy Modrym Fartuchu) | **waga** u stóp siedzącej przekupki (gęś, kosz jaj) | ⚖️ waga | dystraktor (∿) | ✓ wiki #34 |
| **Dwór Artusa** | Rynek Staromiejski 6 | **herb Torunia** (klęczący anioł) na szczycie czerwonej fasady; złote daty 1311 / 1891 | 🛡️ herb | dystraktor (⊙) | ✓ wiki #8 |

## Ikony wektorowe (gotowe)

Pełnoprawne SVG (nie emoji), użyte w `prototype/mapa-z1-podglad.html`:

- `prototype/icons/piernik.svg` — toruńskie **serce piernikowe** (brąz + kropkowany lukier).
- `prototype/icons/astrolabium.svg` — **astrolabium** (tarcza z graduacją, ekliptyka, alidada, zawieszka).

Pozostałe 7 detali to na razie emoji (🫏 ⭐ 🗼 🎩 🎺 ⚖️ 🛡️) — do zwektoryzowania w tym samym stylu, gdy ścieżka będzie zatwierdzona.

## Cechy alternatywne (zapas — gdyby trzeba podmienić piktogram)

- **Piernikarka:** piesek u sukni (uwaga: kolizja z motywem „pies" przy Filusiu) · kobieta w czepku.
- **Pod Gwiazdą:** ornament kwiatowo-owocowy fasady · data **1697** · barokowy portal.
- **osiołek:** ołowiane ciężarki u nóg · ostra blacha grzbietu.
- **Kopernik:** **wąsik** (znaleziony w renowacji 2003) · głowa **delfina** w studzience cokołu · inskrypcja łacińska na cokole.
- **Krzywa Wieża:** brak ściany od strony miasta · „test sumienia" (stań plecami).
- **Filuś:** parasol, którego pilnuje · sam kundelek.
- **Łuk Cezara:** szczątek torów tramwajowych · przejście-tunel.
- **Przekupka:** **gęś** w ramionach · kosz jaj · ławka obok.
- **Dwór Artusa:** złote **daty 1311/1891** · czerwona neorenesansowa fasada · nawiązanie do okrągłego stołu.

> Kolizja do rozwiązania: detal **⭐ gwiazda** (Pod Gwiazdą) i glif mapy **☆ gwiazda** (miejsce Filusia) — patrz `z1-szlak-spec.md`. Jeśli mylące, podmień glif Filusia albo detal/piktogram.

## Do dorobienia (później)

- Kolejne miejsca z 45 w `przewodnik-miejsc-gry.js` (pod dyspersję tras w pełnej grze + zagadki Z6/Z10 mają własne miejsca — nie dublować).
- Dla każdego nowego: lokalizacja, cecha, piktogram (placeholder), źródło wiki, status weryfikacji.
