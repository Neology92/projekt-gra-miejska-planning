# Zagadka 1 - Szlak symboli

**Status** [2026-05-31]: **mechanika docelowa ustalona** (łańcuch + abstrakcyjne glify na mapie + dekodowanie = rozpoznanie realnego obiektu + szyfrownik obiekt→następny glif + legenda do autouzupełnienia). **Trasa prototypu** (4 kroki, tor TR) — propozycja niżej. Format „wyniku dla MG" — do potwierdzenia (patrz Otwarte pytania #2).

## Mechanika (docelowa)

**Kluczowa zasada:** na mapie są **wyłącznie abstrakcyjne glify** (np. słońce, drzewo, świnka — arbitralne znaki, które **NIE zdradzają**, co jest w terenie). Grupa nawiguje po pozycji glifu i nie wie z góry, co tam zastanie. „Zdekodowanie" miejsca = **rozpoznanie realnego obiektu** (osiołek to po prostu osiołek).

1. Każda grupa dostaje: **mapę z abstrakcyjnymi glifami** + pustą **legendę do autouzupełnienia** (glif → ____) + **szyfrownik**.
2. **K1** podaje **pierwszy glif**.
3. Cykl — **łańcuch, odkrywanie po kolei** [decyzja 2026-05-31]:
   - Grupa idzie do pozycji glifu na mapie.
   - W terenie **rozpoznaje realny obiekt** i potwierdza go w szyfrowniku (szyfrownik ma **więcej obiektów niż 4** — z dystraktorami — więc trzeba rozpoznać właściwy, a nie tylko odczytać).
   - Wpisuje rozpoznany obiekt do **legendy** przy danym glifie.
   - Szyfrownik przy tym obiekcie wskazuje **następny glif** → grupa tam idzie. Powtarza.
4. Po **4 krokach** [decyzja 2026-05-31] grupa ma sekwencję = odpowiedź dla MG.

**Self-correction:** dystraktory w szyfrowniku **nie mają „następnego glifu"** (ślepy zaułek) → błędne rozpoznanie samo się demaskuje.
**Awaryjnie** (łańcuch zablokowany): MG daje hint telefoniczny / potwierdza glif — patrz `mechanics/koperty-mg.md`.

> Glify są **arbitralne/kosmetyczne** — można użyć dowolnych znaków; ważne tylko, że nie zdradzają obiektu. Nie ma „logiki pairingu symbol↔miejsce" do wymyślania.

## Reguły generowania tras (Z1) [2026-05-31]

Reguły dla **każdej** trasy (per grupa). Każda nowa trasa musi je spełniać.

1. **4 przystanki** (4 kroki) z rozpoznawalnym obiektem-haczykiem.
2. **Budżet marszu: 12 ±2 min**, liczony jako PEŁNY łańcuch:
   **punkt startu → przyst. 1 → 2 → 3 → 4 → Piccolo**.
   Wliczone: dotarcie na pierwszy przystanek **oraz** dotarcie do Piccolo (wejście w F2A).
3. **Punkt startu (do obliczeń): Rynek Nowomiejski** (przybliżenie wystarczające do kalkulacji).
4. **Koniec łańcucha prowadzi do Piccolo** (ul. Prosta 20). Przystanek 4 nie musi być blisko Piccolo, ale leg „4 → Piccolo" wlicza się w budżet.
5. **Tempo do kalkulacji:** ~80 m/min (spacer z rozglądaniem) + narzut na zakręty ~1,3×. Stąd: ~3 min ≈ ~240 m w terenie; **12 min ≈ ~900-960 m** całego łańcucha (5 legów).
6. **Bez dużych zawrotek** — łańcuch ma płynąć w jedną stronę / zwartą pętlą; żadnych powrotów przez ten sam punkt (inaczej budżet pęka).
7. **Omijać miejsca zarezerwowane** pod inne zagadki: Biedronka/polichromie (Z10), anioły (Z6), zamek/Gdanisko (Z3/finał); Fontanna Flisaka tylko jako dystraktor (motyw Z4).
8. **Dyspersja:** różne grupy = różne łańcuchy (różny pierwszy glif / inne przystanki), by się nie tłoczyły.

## Trasa prototypu (propozycja — tor TR, 4 kroki, rozsiana ~12 min)

Rozsiana po Starym i Nowym Mieście; dryf **SW → centrum → NE** (ku Piccolo). Wszystkie punkty 24/7 z ulicy. **Dystanse orientacyjne — zweryfikuj w terenie.**

> ⚠ **NIE spełnia reguły #2** (sprawdzenie 2026-05-31). Szacunek pełnego łańcucha (start Rynek Nowomiejski → 4 przyst. → Piccolo): **~28 min** wobec budżetu 12 ±2. Przyczyny strukturalne: (1) **Krzywa Wieża to daleki SW** — leg `start → Krzywa Wieża` sam ~11 min; (2) **Przekupka wraca na Rynek Nowomiejski = punkt startu** (zawrotka, łamie regułę #6). **Do przeprojektowania** — patrz „otwarte pytania" #7.
>
> Szac. legów (tempo 80 m/min, ×1,3): start→KrzywaWieża ~11 · →Kopernik ~4,5 · →Piernikarka ~5,5 · →Przekupka ~2,5 · →Piccolo ~4,5.

| Krok | Glif (mapa) | Teren — rozpoznany obiekt | Marsz do nast. | Szyfrownik: obiekt → następny glif |
|---|---|---|---|---|
| 1 (start z K1) | słońce | **Krzywa Wieża** (pochylona baszta, „test sumienia") | ~3-4 min → | → drzewo |
| 2 | drzewo | **Pomnik Kopernika**, Rynek (wąsik z 2003, delfin w studzience) | ~3-4 min → | → świnka |
| 3 | świnka | **Pomnik Piernikarki** (kosz pierników, piesek szarpie suknię) | ~2-3 min → | → księżyc |
| 4 (koniec) | księżyc | **Pomnik Przekupki**, Rynek Nowomiejski (gęś, kosz jaj, waga) | — | → KONIEC → MG |

Kończy na Rynku Nowomiejskim (NE) — blisko Piccolo (ul. Prosta), więc K2/Z2 płynnie prowadzi do Jordana.

### Szyfrownik — szkic struktury

Każdy wiersz: **realny obiekt — opis/haczyk do rozpoznania — następny glif**. 4 trafne + dystraktory (bez „następnego glifu" = ślepy zaułek).

| Obiekt | Opis (haczyk) | Następny glif |
|---|---|---|
| Krzywa Wieża | baszta odchylona 146 cm od pionu; plecami do muru „utrzymają się tylko czyści sumieniem" | drzewo |
| Pomnik Kopernika | uczony z brązu; wąsik dostrzeżony w renowacji 2003; delfin w studzience cokołu | świnka |
| Pomnik Piernikarki | brązowa kobieta z koszem pierników, mały piesek szarpie suknię | księżyc |
| Pomnik Przekupki | kobieta z gęsią w ramionach, kosz jaj, waga u stóp (ławka) | KONIEC |
| osiołek | żelazny grzbiet dawnego pręgierza (dystraktor) | — |
| pies Filuś | kundel z melonikiem prof. Filutka (dystraktor) | — |
| Pomnik smoka | ceramiczny *draco volans* nad Strugą (dystraktor) | — |

### Legenda mapy (do autouzupełnienia przez grupę)

```
słońce = __________     świnka = __________
drzewo = __________     księżyc = __________
```

(grupa wpisuje rozpoznany obiekt)

## Dobór miejsc - pełna pula kandydatów z wiki

Z listy 45 miejsc (`przewodnik-miejsc-gry.js`); świadomie **omijamy** miejsca zarezerwowane pod inne zagadki: Biedronka/polichromie (Z10), anioły (Z6), zamek/Gdanisko (Z3/finał). Fontanna Flisaka tylko jako dystraktor (motyw flisaka wykorzysta Z4).

| Miejsce | Cecha do rozpoznania |
|---------|---------------------|
| Osiołek (Rynek/Żeglarska) | żelazny grzbiet pręgierza |
| Pomnik Kopernika (Rynek) | wąsik, delfin w studzience |
| Pies Filuś (wylot Chełmińskiej) | kundel z melonikiem |
| Kamienica Pod Gwiazdą (Rynek 35) | złota gwiazda + 1697 |
| Krzywa Wieża | pochylona baszta, „test sumienia" |
| Łuk Cezara (Piekary 37) | Michał Archanioł z trąbką, szczątek torów |
| Dwór Artusa (Rynek 6) | herb klęczącego anioła, daty 1311/1891 |
| Pomnik Przekupki / Piernikarki (Nowe Miasto) | gęś i kosz jaj / kosz pierników |

Podmiany dla większego „chodzenia" / dryfu ku Piccolo (NE): Krzywa Wieża, Łuk Cezara, Dwór Artusa, Przekupka/Piernikarka.

## Wariant dla obu klas / dyspersja grup

- **Prototyp:** 1 łańcuch (tor TR).
- **Pełna gra** [otwarte]: „różne trasy per grupa" dla rozproszenia (decyzja 2026-05-29). Model: wspólna mapa (wiele glifów) + wspólny szyfrownik, **różny pierwszy glif per grupa** → różne łańcuchy. Domknięcie przy skalowaniu do MVP.

## Otwarte pytania

1. ~~Ile kroków szlaku?~~ ROZSTRZYGNIĘTE [2026-05-31]: **4**.
2. **Co jest odpowiedzią dla MG?** — domyślnie **(a) 4 rozpoznane obiekty w kolejności** (dowodzi poprawnego dekodowania; same glify da się odczytać z mapy). Do potwierdzenia/zmiany: (b) 4 glify w kolejności, (c) wypełniona legenda (pary glif→obiekt).
3. ~~Mapa: ikony czy abstrakcja?~~ ROZSTRZYGNIĘTE [2026-05-31]: **abstrakcyjne glify** + legenda do autouzupełnienia; rozpoznawane są realne obiekty.
4. **Ostateczny dobór 4 miejsc** — propozycja wyżej, do akceptacji/podmiany.
5. **Dyspersja per grupa w pełnej grze** — model różnych łańcuchów, do MVP.
6. **Mapa fizyczna**: na prototyp funkcjonalny mock (rzut starówki + glify + legenda); finalna stylizacja manuskryptowa → po dry-runie.
7. **Przeprojektowanie trasy pod regułę #2** — aktualna ~28 min (nie mieści się). Napięcie: start (Rynek Nowomiejski) i Piccolo są na NE, a rozsiane ikoniczne haczyki (Kopernik, osiołek, Krzywa Wieża) są w centrum/zach. Starówki (~480 m = ~6 min w jedną stronę). Do decyzji: (A) start na Rynek Staromiejski; (B) trasa wschodnia/Nowe Miasto; (C) większy budżet.

## Co autor może zrobić sam vs gdzie pomocy

- **Sam**: ostateczny dobór miejsc, dobór dystraktorów, projekt graficzny mapy/szyfrownika, jakie glify (kosmetyka).
- **Z pomocą agenta**: weryfikacja istnienia obiektu (wiki), opisy/haczyki do szyfrownika, alternatywy miejsc, redakcja, kalkulacja czasu trasy.
