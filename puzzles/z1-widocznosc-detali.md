# Z1 — arkusz weryfikacji widoczności detali (dla Oskara)

> **Cel:** przejść KAŻDE miejsce użyte w macierzy v3 i potwierdzić, że **haczyk (detal) jest realnie wypatrzalny z ulicy** w porze gry. Krok łańcucha z niewypatrzalnym detalem = **nierozwiązywalny** (nie „trudny") → musi wypaść z łańcucha do dystraktorów.
>
> **Jak zapisywać:** w kolumnie **Werdykt** wpisz `✅` / `⚠️ warunkowo` / `❌`. Przy `⚠️`/`❌` dopisz słowo czemu (np. „tylko po godzinach zamknięte", „za wysoko", „brak godła"). Niosisz draft mapy gdy będzie — ale detale można sprawdzić niezależnie.
>
> **Legenda statusu (kolumna „Dotąd"):**
> - `teren ✓` — już potwierdzone w terenie (dry-run R1, 2026-06-01).
> - `wiki #n` — haczyk z `przewodnik-miejsc-gry.js` punkt n, ale **NIE chodziłeś tam pod tym kątem** → do potwierdzenia.
> - `autor` — potwierdzone przez Ciebie wcześniej (Kopernik).

---

## A. ŁAŃCUCHOWE — krytyczne (bust = ścieżka pada) — 15 miejsc

> Te detale niosą rozwiązanie. Priorytet weryfikacji. Kolejność: grupowo po strefach.

### Strefa NE — Nowe Miasto ✅ ZATWIERDZONA [Oskar, 2026-06-01]

> Wszystkie 5 detali wypatrzalne. Pozostaje strefa C (8) + S (S02).

| Kod | Miejsce | Detal (co wypatrzeć) | Gdzie szukać | Ikona | Dotąd | Werdykt |
|---|---|---|---|---|---|---|
| `N01` | Pomnik Piernikarki (Garbary / Kr. Jadwigi) | kosz pierników w dłoni; piesek szarpie suknię | trzymany przez figurę | `n01-piernikarka.svg` | wiki #35 | ✅ (R2) |
| `N02` | Pomnik Przekupki (Rynek Nowomiejski) | gęś u stóp (chwytliwsza niż waga) | u stóp figury | `n02-przekupka.svg` | wiki #34 | ✅ (R2) |
| `N04` | Apteka Pod Złotym Lwem (Rynek Nowom. 13) | pozłacany lew **nad drzwiami** | nad wejściem | `n04-apteka-lew.svg` | **teren ✓** | ✅ (R1) |
| `N05` | Kościół św. Jakuba (Rynek Nowomiejski) | łuki przyporowe; nawa gł. wyższa | bryła z ulicy | `n05-kosciol-jakuba.svg` | **teren ✓** | ✅ (R1) |
| `N06` | Teatr Baj Pomorski (Piernikarska 9) | fasada-szafa z szufladami (drzwi + szuflady) | cała fasada | `n06-baj-pomorski.svg` | wiki #43 | ✅ (R2) |

### Strefa C — Rynek Staromiejski i serce ✅ ZATWIERDZONA z zastrzeżeniami [Oskar, 2026-06-01]

> **Zastrzeżenia (constrainty ikon — anti-pair na karcie, patrz `z1-10-sciezek.md §Constrainty ikon`):**
> - `C04` Ratusz ✕ `C09` Katedra — sylwetki wieża/zegar zbyt podobne → nie na jednej karcie.
> - `C08` NMP ✕ `N05` Jakub — sylwetki kościół/łuki zbyt podobne → nie na jednej karcie.
>
> Konsekwencja: G5 przebudowany (`C08`→`C02`); tabela wykluczeń dla dystraktorów w `z1-10-sciezek.md`.

| Kod | Miejsce | Detal (co wypatrzeć) | Gdzie szukać | Ikona | Dotąd | Werdykt |
|---|---|---|---|---|---|---|
| `C01` | Pomnik Kopernika (SE róg Ratusza) | astrolabium / sfera w dłoni posągu | w rękach figury | `c01-kopernik.svg` | autor ✓ | ✅ |
| `C02` | Osiołek (zbieg z Żeglarską) | metalowy grzbiet (pręgierz) | rzeźba osła | `c02-osiolek.svg` | wiki #3 | ✅ |
| `C03` | Pies Filuś (wylot Chełmińskiej) | melonik w pyszczku kundelka | mała rzeźba | `c03-pies-filus.svg` | wiki #4 | ✅ |
| `C04` | Ratusz Staromiejski (Rynek 1) | wieża **bez hełmu**; zegar 24-godz. | wieża | `c04-ratusz.svg` | wiki #5 | ✅ ✕`C09` |
| `C06` | Kamienica Pod Gwiazdą (Rynek 35) | pozłacana gwiazda + data 1697 | żółta fasada | `c06-pod-gwiazda.svg` | wiki #7 | ✅ |
| `C07` | Dwór Artusa (Rynek 6) | herb Torunia + daty 1311/1891 | szczyt fasady | `c07-dwor-artusa.svg` | wiki #8 | ✅ |
| `C08` | Kościół NMP / pofranciszkański (NW róg) | brak wieży; 3 ośmioboczne wieżyczki | bryła | `c08-kosciol-nmp.svg` | wiki #38 | ✅ ✕`N05` |
| `C09` | Katedra św. Janów (Żeglarska 16) | zegar z **jedną wskazówką** | wieża zegarowa | `c09-katedra-janow.svg` | wiki #39 | ✅ ✕`C04` |

### Strefa S — Wisła / bramy

| Kod | Miejsce | Detal (co wypatrzeć) | Gdzie szukać | Ikona | Dotąd | Werdykt |
|---|---|---|---|---|---|---|
| `S01` | Brama Mostowa (ul. Mostowa) | gotycki **ostrołuk** przejazdu | łuk przejazdu | `s01-brama-mostowa.svg` | **teren ✓** | ✅ (R1) |
| `S02` | Brama Klasztorna (od Bulwaru) | ostrołuk + kaszownik (otwory nad bramą) | **strona zewnętrzna (Bulwar)** | `s02-brama-klasztorna.svg` | wiki #19 + R2 ⚠️ | ⚠️ ikona zmieniona na bramę — potwierdź że od Bulwaru czytelna |

---

## B. DYSTRAKTORY ✅ ZATWIERDZONE [Oskar, 2026-06-01]

> Te miejsca pojawiają się w **pętlach dystraktorów** (zmyłki). Detal nie musi być krytycznie wypatrzalny — gracz i tak ma je odrzucić. Ikony gotowe i czytelne.

| Kod | Miejsce | Detal | Ikona | Dotąd | Werdykt |
|---|---|---|---|---|---|
| `N03` | Gospoda Pod Modrym Fartuchem | fartuch-godło | `n03-modry-fartuch.svg` | **teren ❌** (brak godła) | ✅ jako dystraktor (martwy — poza łańcuchem) |
| `S04` | Kotwica na Bulwarze | duża kotwica | `s04-kotwica-bulwar.svg` | wiki #30 | ✅ |
| `W01` | Łuk Cezara (Piekary 37) | Michał Archanioł z trąbką | `w01-luk-cezara.svg` | wiki #10 | ✅ |
| `D01` | Fontanna Flisaka (SW róg Ratusza) | flisak ze skrzypcami | `d01-fontanna-flisaka.svg` | wiki #2 | ✅ |

---

## C. Status weryfikacji [2026-06-01]

| Strefa / grupa | Status |
|---|---|
| **A. Strefa NE** (5 łańcuchowych) | ✅ zatwierdzona |
| **A. Strefa C** (8 łańcuchowych) | ✅ zatwierdzona + 2 constrainty ikon (C04✕C09, C08✕N05) |
| **A. Strefa S — `S01`** | ✅ (R1) |
| **A. Strefa S — `S02`** | ⚠️ ikona OK („idealna" wg Oskara); waypoint = od **Bulwaru** — potwierdzić w terenie przy okazji |
| **B. Dystraktory** (N03/S04/W01/D01) | ✅ zatwierdzone |

**→ 14 z 15 łańcuchowych pewnych; `S02` ikonicznie gotowe, czeka tylko teren-Bulwar (nie blokuje regeneracji).**

### Wiszące flagi (nie blokują regeneracji, domykamy na draft-mapie)
- `S02` — czytelność bramy od strony Bulwaru (waypoint zewnętrzny).
- Sightline `G5 C04→C02` (Ratusz→Osiołek) — nowa para v3.1, możliwe intervisible (`z1-10-sciezek.md`).

### Co dalej
Wszystko zatwierdzone → **regeneracja 10 kart** na macierzy v3.1 (deszyfrowniki + pętle dystraktorów respektujące tabelę wykluczeń ikon) + budowa map.
