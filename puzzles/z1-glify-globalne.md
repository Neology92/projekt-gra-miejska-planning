# Z1 — globalna tabela glifów nawigacyjnych (1 kod = 1 znak = 1 pozycja)

> **Co to jest.** Glif to **abstrakcyjny znak na mapie** — mówi *gdzie iść*, nie zdradza *co tam jest* (`map.md §1`). Realizuje regułę „1 kod = 1 glif globalnie": ten sam kod ma **identyczny znak i identyczną pozycję x/y na każdej z 10 map**. Tylko *które 9 glifów się świeci* i *dokąd prowadzi deszyfrownik* różni się per grupa.
>
> **Render = placeholder geometryczny.** Zgodnie z `map.md §2.5` znaki są teraz geometryczne; „kod→gmerk" Oskara czytam jako **wymienny slot renderu** — gmerki (toruńskie znaki kupieckie) są zarezerwowane dla **Z6** (`map.md §6`), więc nie zaciągam ich tutaj. Gdy zechcesz, podmieniamy 20 placeholderów na 20 gmerków bez zmiany pozycji/przypisań. **Flaga do review.**
>
> **Alfabet rozłączny z ikonami detali.** Detale (piernik=serce, gwiazda, herb=tarcza, astrolabium=okrąg z pierścieniami, kotwica, lew, osioł…) **nie mogą** być echem glifu — inaczej powstaje fałszywe skojarzenie „znak = ten detal". Dlatego glify to **czyste figury geometryczne / kreskowe**: trójkąty, wieloboki, kreski, siatki. Żaden nie przypomina detalu z `prototype/icons/`.

---

## 1. Pula użytych kodów (unia 10 ścieżek `z1-10-sciezek.md`) — 20

Łańcuchy + dystraktory razem dotykają **20 z 28** miejsc rejestru:

`N01 N02 N03 N04 N05 N06` · `C01 C02 C03 C04 C06 C07 C08 C09` · `S01 S02 S04` · `W01` · `D01`

> **Zmiana v3 [2026-06-01]:** `S06` usunięte z puli (ikona `s06-ulica-ciasna.svg` wycofana; detal nieczytelny w terenie). `N03` pozostaje w puli jako **martwy dystraktor** (ikona `n03-modry-fartuch.svg` narysowana, ale detal niewypatrzalny → wiersze dystraktora nieszkodliwe). Pula: 19 kodów (było 20).

**Nieużyte (NIE renderować na bazowej mapie):** `C05` anioł, `S03` Żeglarska, `S05` baszty, `S06` Ulica Ciasna (wycofana), `W02 W03 W04`, `D02`, `F01 F02 F03`.

## 2. Tabela kanoniczna: kod → glif → pozycja → strefa

> ⚠️ **Kolumny `x`/`y` (viewBox 900×620) — ZDEPRECJONOWANE [2026-06-01].** Były artefaktem odrzuconego schematycznego mocka `prototype/mapa-z1-podglad.html`. Produkcyjne pozycje geograficzne origin z `tools/places-manifest.json` w projekcie siostrzanym (kolumna `coords [lat, lng]`); implementacja w `prototype/z1-map/z1-map-data.js`. Wiersze tabeli poniżej **zostają** jako referencja kod→glif→miejsce — nie kasujemy (zasada backupów wariantów).
>
> Pozycje w układzie bazowej mapy **viewBox 900×620** (zgodnym z `prototype/mapa-z1-podglad.html`: Stare Miasto x70–500 / y120–540, Rynek Staromiejski ~330,335; Nowe Miasto x570–850 / y150–470, Rynek Nowomiejski ~725,305; Wisła y548–620; Piekary/zachód x<150). Markery r≈21, min. odstęp ~45 px. Pozycje **schematyczne, plausible** — przypisanie kod→glif **zamrożone**; pozycje x/y nieaktualne.

| Kod | Glif (placeholder) | Opis figury (do SVG) | x | y | Strefa | Miejsce |
|---|---|---|---|---|---|---|
| `N01` | △ | trójkąt ostry, wierzchołek w górę, obrys | 622 | 420 | NE | Piernikarka |
| `N02` | ▽ | trójkąt, wierzchołek w dół, obrys | 700 | 268 | NE | Przekupka |
| `N03` | ◁ | trójkąt, wierzchołek w lewo, obrys | 762 | 290 | NE | Modry Fartuch |
| `N04` | ▷ | trójkąt, wierzchołek w prawo, obrys | 792 | 332 | NE | Apteka Lew |
| `N05` | ⬠ | pięciobok foremny, obrys | 812 | 248 | NE | Kościół Jakuba |
| `N06` | ⬡ | sześciobok foremny, obrys | 700 | 195 | NE | Baj Pomorski |
| `C01` | ◇ | kwadrat obrócony 45° (romb), obrys | 368 | 375 | C | Kopernik (must-have) |
| `C02` | □ | kwadrat prosty, obrys | 375 | 420 | C | Osiołek |
| `C03` | ∧ | szewron w górę (otwarta „daszek") | 262 | 335 | C | Filuś |
| `C04` | ⊞ | kwadrat z krzyżem wewnątrz (siatka 2×2) | 330 | 335 | C | Ratusz |
| `C06` | ∿ | fala (dwa łuki sinusoidy) | 425 | 310 | C | Pod Gwiazdą |
| `C07` | ⌗ | siatka „hash" (dwie pionowe × dwie poziome) | 420 | 360 | C | Dwór Artusa |
| `C08` | ◫ | kwadrat z pionową przegrodą (lewa połowa kreskowana) | 255 | 290 | C | Kościół NMP |
| `C09` | ⊟ | kwadrat z poziomą kreską w środku | 410 | 475 | C/SE | Katedra Janów |
| `S01` | ✕ | krzyż św. Andrzeja (saltire), grube kreski | 300 | 510 | S | Brama Mostowa |
| `S02` | ⋔ | rozwidlenie / „widły" (trójząb kreskowy) | 200 | 500 | S | Brama Klasztorna |
| `S04` | ∥ | dwie równoległe pionowe kreski | 160 | 525 | S | Kotwica/Bulwar |
| ~~`S06`~~ | ~~⊿~~ | ~~trójkąt prostokątny~~ | ~~470~~ | ~~460~~ | ~~S/E~~ | ~~Ulica Ciasna~~ — **wycofana z puli v3** (detal nieczytelny; NIE renderować) |
| `W01` | ⌇ | linia falista pionowa (zygzak) | 120 | 330 | W | Łuk Cezara |
| `D01` | ∴ | trzy kropki w trójkącie | 292 | 375 | C-SW | Fontanna Flisaka (dystr.) |

### Kontrola rozłączności alfabetu (glif ↔ detal)
- Brak glifu w kształcie: serca, gwiazdy, tarczy/herbu, okręgu z pierścieniem, kotwicy, zwierzęcia, kapelusza, zegara, wagi, trąbki, bramy, worka, kościoła. ✓
- 20 figur parami rozróżnialnych w skali markera r21 (trójkąty różnią się kierunkiem; wieloboki liczbą boków; reszta to kreski/siatki/kropki). ✓
- Mock `mapa-z1-podglad.html` pierwotnie używał `☆` dla Filusia (kolizja z detalem „⭐ gwiazda"/Pod Gwiazdą) — **ujednolicono do `∧`** (jak C03 w systemie kanonicznym). `C06` = `∿` fala. Brak kolizji. ✓

## 3. Spójność pozycji na 10 mapach
Każda z 10 map renderuje **te same 20 pozycji jako tło** (lub tylko swoje 9 — decyzja na etapie mapy), ale **glif danego kodu zawsze w tym samym miejscu i tej samej figurze**. Grupa widzi 9 świecących; pozostałe albo nieobecne, albo wyszarzone — *nie wolno* by układ zdradzał, które 4 to łańcuch (markery nieodróżnialne, `map.md §8`).

## 4. Następne kroki (zależne od tej tabeli)
1. **Ikony detali** — 9 brakujących (osobny plik, `prototype/icons/`).
2. **Bazowa mapa SVG** — 20 glifów na pozycjach z §2 (jeden plik wzorcowy).
3. **10 widoków per ścieżka** — każdy świeci swoje 9 (4 łańcuch + 5 dystr.) wg `z1-10-sciezek.md`; deszyfrownik detal→glif z tabeli §2.
4. Po dry-runie: ewentualna korekta pozycji nóg granicznych nie rusza przypisań kod→glif (tylko geometrię tła).
