# Zagadka 1 - Szlak symboli

**Status** [2026-05-31]: **mechanika docelowa ustalona** — **dwie warstwy znaków**: (1) abstrakcyjne **glify na mapie** (gdzie iść, nie zdradzają obiektu); (2) **piktogramy detali w deszyfrowniku** (co wypatrzeć w terenie) → wskazują następny glif; + legenda do autouzupełnienia. **Mapa: 9 glifów** (4 z łańcucha + 5 dystraktorów) [decyzja 2026-05-31], żeby trasy nie dało się odczytać z samej mapy bez chodzenia. **Deszyfrownik bez nazw miejsc** [decyzja 2026-05-31] — sam piktogram detalu (więcej główkowania). **Odpowiedź dla MG: (a) 4 rozpoznane miejsca w kolejności** [decyzja 2026-05-31].

> ⚙️ **Dane kanoniczne do generowania** (glify, pozycje, miejsca, detale, haczyki, deszyfrownik, legenda, klucz MG) → **`puzzles/z1-szlak-spec.md`**. Ten plik = **rationale projektowy, reguły tras, kalkulacja czasu**. Funkcjonalny mock: **`prototype/mapa-z1-podglad.html`** (mapa + deszyfrownik + klucz MG).

## Mechanika (docelowa)

**Dwie warstwy znaków:**
- **Glify (mapa)** — wyłącznie **abstrakcyjne** znaki (△ ○ □ ◇ …), które mówią TYLKO *gdzie iść* i **NIE zdradzają**, co tam jest. Grupa nawiguje po pozycji glifu, nie wie z góry, co zastanie.
- **Piktogramy detali (deszyfrownik)** — **obrazkowe** symbole *co wypatrzeć* w terenie (np. 🎩 melonik, ⭐ gwiazda, 🌐 astrolabium). Deszyfrownik **nie podaje nazw miejsc** [decyzja 2026-05-31] — grupa sama łączy piktogram z tym, co widzi (więcej główkowania). Format wiersza: **piktogram detalu → następny glif**. Cechy/piktogramy → `ikonografia-miejsc.md`.

**Więcej glifów niż kroków** [decyzja 2026-05-31]: mapa pokazuje **9 glifów** — 4 z łańcucha + **5 dystraktorów** poza trasą, wizualnie identycznych. Z samej mapy **nie da się odgadnąć trasy** — trzeba iść, wypatrzeć detal i z deszyfrownika odczytać następny glif. (Deszyfrownik też nie zdradza łańcucha, bo dystraktory prowadzą w fałszywe tropy zamiast „ślepych zaułków" — patrz Otwarte pytania #8.)

1. Każda grupa dostaje: **mapę z 9 abstrakcyjnymi glifami** + pustą **legendę** (glif → ____) + **deszyfrownik** (9 piktogramów detali → następny glif; **każdy wskazuje glif z mapy**, bez „ślepych zaułków").
2. **K1** podaje **pierwszy glif** (△).
3. Cykl — **łańcuch, odkrywanie po kolei**:
   - Grupa idzie do pozycji glifu na mapie.
   - W terenie **wypatruje detal** pasujący do jednego z piktogramów w deszyfrowniku (9 piktogramów, w tym dystraktory — trzeba dopasować właściwy, a nie tylko odczytać).
   - Wpisuje rozpoznane miejsce do **legendy** przy danym glifie.
   - Piktogram tego detalu wskazuje **następny glif** → grupa tam idzie. Powtarza.
4. Po **4 krokach** grupa ma sekwencję 4 miejsc = odpowiedź dla MG.

**Self-correction (fałszywe tropy)** [decyzja 2026-05-31]: dystraktory NIE mają „ślepych zaułków" — ich detale też wskazują prawdziwy glif, ale prowadzą w **zamkniętą pętlę** (`⬡→☆→✕→∿→⊙→⬡`, rozłączną z łańcuchem `△→○→□→◇`). Dzięki temu deszyfrownik jest jednolity i nie zdradza łańcucha. **Błąd demaskuje się pośrednio:** łańcuch ma **dokładnie 4 kroki** i kończy się przy kontakcie (KONIEC) → brak KONIEC / krążenie / powrót do już odwiedzonego (wpisanego w legendzie) znaku = zboczyłeś, wróć do ostatniego pewnego glifu.
**Awaryjnie** (zbłąkanie / blokada): MG daje hint telefoniczny / potwierdza glif — patrz `mechanics/koperty-mg.md`.

> Glify są **arbitralne/kosmetyczne** (geometryczne lub gmerki) — ważne tylko, że nie zdradzają miejsca. Piktogramy detali są **obrazkowe** — mają naprowadzać na realny detal. Pełne mapowanie (glif↔detal↔miejsce) w `z1-szlak-spec.md`.

## Reguły generowania tras (Z1) [2026-05-31]

Reguły dla **każdej** trasy (per grupa). Każda nowa trasa musi je spełniać.

1. **4 przystanki** (4 kroki) z rozpoznawalnym obiektem-haczykiem.
2. **Budżet marszu: 12 ±2 min**, liczony jako PEŁNY łańcuch:
   **punkt startu → przyst. 1 → 2 → 3 → 4 → MG na Rynku Staromiejskim**.
   Wliczone: dotarcie na pierwszy przystanek **oraz** dojście do MG (gdzie grupa raportuje wynik Z1 i dostaje K2).
3. **Punkt startu (do obliczeń): Rynek Nowomiejski** (przybliżenie wystarczające do kalkulacji).
4. **Koniec łańcucha = Rynek Staromiejski**, bo tam **kręci się MG** (przyjmuje raport Z1, wydaje K2). Przystanek 4 powinien być na/przy Rynku Staromiejskim. **Piccolo NIE wlicza się do budżetu Z1** — dojście do Jordana jest częścią Z2/F2A (już po K2).
5. **Tempo do kalkulacji:** ~80 m/min (spacer z rozglądaniem) + narzut na zakręty ~1,3×. Stąd: ~3 min ≈ ~240 m w terenie; **12 min ≈ ~900-960 m** całego łańcucha (5 legów).
6. **Bez dużych zawrotek** — łańcuch ma płynąć w jedną stronę / zwartą pętlą; żadnych powrotów przez ten sam punkt (inaczej budżet pęka).
7. **Omijać miejsca zarezerwowane** pod inne zagadki: Biedronka/polichromie (Z10), herby/Aleja Gmerków (Z6), zamek/Gdanisko (Z3/finał); Fontanna Flisaka tylko jako dystraktor (motyw Z4).
8. **Dyspersja:** różne grupy = różne łańcuchy (różny pierwszy glif / inne przystanki), by się nie tłoczyły.

## Trasa prototypu (propozycja — tor TR, 4 kroki)

Jednokierunkowy sweep **Nowe Miasto → centrum**, kończący na **Rynku Staromiejskim — tam kręci się MG** (przyjmuje raport Z1, wydaje K2). Wszystkie punkty 24/7 z ulicy. Dystanse orientacyjne — zweryfikuj w terenie.

| Krok | Glif (mapa) | Teren — miejsce | Detal (deszyfrownik) | Marsz do nast. | → następny glif |
|---|---|---|---|---|---|
| start (calc) | — | *Rynek Nowomiejski* (punkt odniesienia) | — | ~2,5 min → | — |
| 1 (z K1) | △ trójkąt | **Pomnik Piernikarki** | 🍪 piernik | ~3,5 min → | → ○ okrąg |
| 2 | ○ okrąg | **Kamienica Pod Gwiazdą**, Rynek 35 | ⭐ gwiazda (1697) | ~1,5 min → | → □ kwadrat |
| 3 | □ kwadrat | **osiołek**, Rynek/Żeglarska | 🫏 osioł (grzbiet pręgierza) | ~1,5 min → | → ◇ romb |
| 4 (koniec) | ◇ romb | **Pomnik Kopernika**, Rynek | 🌐 astrolabium (sfera w dłoni — ⚠ zweryfikuj) | ~0 (MG tu) | → KONIEC → MG |

**Sprawdzenie reguły #2 ✓:** start → P1 → P2 → P3 → P4(=MG) ≈ 2,5 + 3,5 + 1,5 + 1,5 ≈ **~9-10 min** (w budżecie 12 ±2). Legi 2-4 są krótkie, bo trzy ostatnie przystanki leżą na Rynku Staromiejskim — grupa „zbiega się" na MG. Brak zawrotek; jednokierunkowy sweep E → centrum.

> Chcesz równiejsze ~3-min legi? Można dorzucić zachodni przystanek (np. **Łuk Cezara**, Piekary 37 — Michał Archanioł z trąbką) między Pod Gwiazdą a Kopernikiem, kosztem drobnego „bouncu" na zachód (~+3 min, wciąż w budżecie). *(W prototypie Łuk Cezara jest już użyty jako glif-dystraktor — patrz niżej.)*

### Glify, detale, deszyfrownik, legenda → dane kanoniczne w spec

Pełna tabela 9 znaków (glif ↔ detal ↔ miejsce ↔ haczyk ↔ następny glif ↔ rola), zawartość deszyfrownika gracza, legenda i klucz MG: **`puzzles/z1-szlak-spec.md`**. Tam też granica spoilera (kto co widzi) i checklista spójności. Cechy/piktogramy miejsc (rosnący katalog) → **`puzzles/ikonografia-miejsc.md`**.

Skrót łańcucha (4 kroki): **△ Piernikarka [🍪] → ○ Pod Gwiazdą [⭐] → □ osiołek [🫏] → ◇ Kopernik [🌐] → KONIEC (MG)**. Pozostałe 5 glifów = dystraktory, których detale prowadzą w **fałszywe tropy = zamkniętą pętlę** `⬡→☆→✕→∿→⊙→⬡` (rozłączną z łańcuchem). **Dobór miejsc/dystraktorów/detali = propozycja do podmiany** (Twój wybór); świadomie pominięto Fontannę Flisaka (motyw → Z4).

## Treść startu w K1 — segment Z1 (draft)

To **fragment koperty K1 dotyczący szlaku** (pierwszy glif + zasada łańcucha + co raportować MG). Pełna K1 (brief fabularny + groźba/motywacja) powstaje osobno — blok 1C roadmapy. Stylizacja językowa do dopracowania (Twoje pióro); poniżej wersja funkcjonalna w tonie.

> Pośrednik nie ufa nikomu, kto trafia do niego prosto. Pójdziecie **po znakach**.
>
> Macie **mapę** ze znakami i **deszyfrownik**. Znak na mapie mówi tylko *gdzie* — nie zdradza, co tam zastaniecie. To trzeba **zobaczyć na własne oczy**.
>
> Zaczynacie od znaku **△ trójkąta**. Znajdźcie go na mapie i idźcie tam.
> - Na miejscu **wypatrzcie detal** pasujący do jednego z obrazków w deszyfrowniku (melonik? gwiazda? astrolabium?).
> - Ten obrazek wskaże **następny znak** na mapie. Idźcie do niego — i tak krok po kroku.
> - **Strzeżcie się fałszywych tropów.** Wasz łańcuch ma **dokładnie cztery kroki** i kończy się tam, gdzie czeka nasz człowiek. Jeśli błądzicie w kółko albo wracacie do znaku już odwiedzonego — zboczyliście; wróćcie do ostatniego pewnego znaku.
> - Rozpoznane miejsca wpisujcie do **legendy** na mapie.
>
> Po **czterech** znakach traficie tam, gdzie kręci się nasz człowiek. Zamelduje­cie mu **cztery rozpoznane miejsca — w kolejności, w jakiej je odkryliście**. To wasza przepustka dalej.

**Co raportuje grupa do MG:** 4 rozpoznane miejsca w kolejności (np. *„Piernikarka — Pod Gwiazdą — osiołek — Kopernik"*). MG weryfikuje wg wzorca w `mechanics/koperty-mg.md` i wydaje K2.

## Dobór miejsc - pełna pula kandydatów z wiki

Z listy 45 miejsc (`przewodnik-miejsc-gry.js`); świadomie **omijamy** miejsca zarezerwowane pod inne zagadki: Biedronka/polichromie (Z10), herby/Aleja Gmerków (Z6), zamek/Gdanisko (Z3/finał). Fontanna Flisaka tylko jako dystraktor (motyw flisaka wykorzysta Z4).

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
2. ~~Co jest odpowiedzią dla MG?~~ ROZSTRZYGNIĘTE [2026-05-31]: **(a) 4 rozpoznane miejsca w kolejności** (dowodzi przejścia w terenie — same glify da się odczytać z mapy, miejsc nie).
3. ~~Mapa: ikony czy abstrakcja?~~ ROZSTRZYGNIĘTE [2026-05-31]: **abstrakcyjne glify** na mapie + **piktogramy detali** w deszyfrowniku (bez nazw); legenda do autouzupełnienia.
4. **Ostateczny dobór 4 miejsc + 5 dystraktorów** — propozycja w `z1-szlak-spec.md`, do akceptacji/podmiany (Twój wybór).
5. **Dyspersja per grupa w pełnej grze** — model różnych łańcuchów, do MVP.
6. **Mapa fizyczna**: na prototyp funkcjonalny mock (rzut starówki + glify + legenda); finalna stylizacja manuskryptowa → po dry-runie.
7. ~~Przeprojektowanie trasy pod regułę #2~~ ROZSTRZYGNIĘTE [2026-05-31]: trasa kończy **na Rynku Staromiejskim (MG)**, nie przy Piccolo — sweep Nowe Miasto → centrum, ~9-10 min, w budżecie. Piccolo to dopiero Z2/F2A (po K2). Napięcie „start+koniec na NE" zniknęło.
8. ~~Przeciek w deszyfrowniku~~ ROZSTRZYGNIĘTE [2026-05-31]: **opcja B (fałszywe tropy)**. Dystraktory NIE mają „ślepych zaułków" — ich detale też wskazują prawdziwy glif z mapy, tworząc **zamkniętą pętlę** `⬡→☆→✕→∿→⊙→⬡` (rozłączną z łańcuchem). Karta jest jednolita → **zbiór 4 nie wycieka**, trasy nie da się odczytać bez chodzenia. Koszt: brak natychmiastowej samokorekty — błąd wpuszcza w pętlę; demaskuje się przez „4 kroki / powrót do odwiedzonego znaku / hint MG". (Opcja A — ślepe zaułki — dawała natychmiastową samokorektę, ale karta zdradzała zbiór; Oskar wybrał B.) Pełne uzasadnienie: `z1-szlak-spec.md`.

## Co autor może zrobić sam vs gdzie pomocy

- **Sam**: ostateczny dobór miejsc/dystraktorów, dobór piktogramów detali, projekt graficzny mapy/deszyfrownika, jakie glify (kosmetyka — np. gmerki).
- **Z pomocą agenta**: weryfikacja istnienia obiektu i detalu (wiki), haczyki do deszyfrownika, alternatywy miejsc, redakcja, kalkulacja czasu trasy.
