# Zagadka 1 - Szlak symboli

**Status** [2026-05-31]: **mechanika docelowa ustalona** (łańcuch + abstrakcyjne glify na mapie + dekodowanie = rozpoznanie realnego obiektu + szyfrownik obiekt→następny glif + legenda do autouzupełnienia). **Mapa: 9 glifów** (4 z łańcucha + 5 dystraktorów) [decyzja 2026-05-31], żeby trasy nie dało się odczytać z samej mapy bez chodzenia. **Odpowiedź dla MG: (a) 4 rozpoznane obiekty w kolejności** [decyzja 2026-05-31]. **Trasa prototypu** (4 kroki, tor TR) + **funkcjonalny mock mapy** (`mapa-z1-podglad.html`) — niżej.

## Mechanika (docelowa)

**Kluczowa zasada:** na mapie są **wyłącznie abstrakcyjne glify** (np. słońce, drzewo, świnka — arbitralne znaki, które **NIE zdradzają**, co jest w terenie). Grupa nawiguje po pozycji glifu i nie wie z góry, co tam zastanie. „Zdekodowanie" miejsca = **rozpoznanie realnego obiektu** (osiołek to po prostu osiołek).

**Więcej glifów niż kroków** [decyzja 2026-05-31]: mapa pokazuje **9 glifów** — 4 należące do łańcucha + **5 glifów-dystraktorów** w miejscach poza trasą. Glify-dystraktory wyglądają identycznie jak prawidłowe (żadnego oznaczenia). Dzięki temu z samej mapy **nie da się odgadnąć trasy** — trzeba iść, rozpoznać obiekt i sprawdzić w szyfrowniku, który glif jest następny. (Uwaga o pozostałym, mniejszym przecieku — w szyfrowniku, nie na mapie — patrz Otwarte pytania #8.)

1. Każda grupa dostaje: **mapę z 9 abstrakcyjnymi glifami** (4 z łańcucha + 5 dystraktorów) + pustą **legendę do autouzupełnienia** (glif → ____) + **szyfrownik**.
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
   **punkt startu → przyst. 1 → 2 → 3 → 4 → MG na Rynku Staromiejskim**.
   Wliczone: dotarcie na pierwszy przystanek **oraz** dojście do MG (gdzie grupa raportuje wynik Z1 i dostaje K2).
3. **Punkt startu (do obliczeń): Rynek Nowomiejski** (przybliżenie wystarczające do kalkulacji).
4. **Koniec łańcucha = Rynek Staromiejski**, bo tam **kręci się MG** (przyjmuje raport Z1, wydaje K2). Przystanek 4 powinien być na/przy Rynku Staromiejskim. **Piccolo NIE wlicza się do budżetu Z1** — dojście do Jordana jest częścią Z2/F2A (już po K2).
5. **Tempo do kalkulacji:** ~80 m/min (spacer z rozglądaniem) + narzut na zakręty ~1,3×. Stąd: ~3 min ≈ ~240 m w terenie; **12 min ≈ ~900-960 m** całego łańcucha (5 legów).
6. **Bez dużych zawrotek** — łańcuch ma płynąć w jedną stronę / zwartą pętlą; żadnych powrotów przez ten sam punkt (inaczej budżet pęka).
7. **Omijać miejsca zarezerwowane** pod inne zagadki: Biedronka/polichromie (Z10), anioły (Z6), zamek/Gdanisko (Z3/finał); Fontanna Flisaka tylko jako dystraktor (motyw Z4).
8. **Dyspersja:** różne grupy = różne łańcuchy (różny pierwszy glif / inne przystanki), by się nie tłoczyły.

## Trasa prototypu (propozycja — tor TR, 4 kroki)

Jednokierunkowy sweep **Nowe Miasto → centrum**, kończący na **Rynku Staromiejskim — tam kręci się MG** (przyjmuje raport Z1, wydaje K2). Wszystkie punkty 24/7 z ulicy. Dystanse orientacyjne — zweryfikuj w terenie.

| Krok | Glif (mapa) | Teren — rozpoznany obiekt | Marsz do nast. | Szyfrownik: obiekt → następny glif |
|---|---|---|---|---|
| start (calc) | — | *Rynek Nowomiejski* (punkt odniesienia) | ~2,5 min → | — |
| 1 (z K1: słońce) | słońce | **Pomnik Piernikarki** (kosz pierników, piesek szarpie suknię) | ~3,5 min → | → drzewo |
| 2 | drzewo | **Kamienica Pod Gwiazdą**, Rynek 35 (złota gwiazda, 1697) | ~1,5 min → | → świnka |
| 3 | świnka | **osiołek** (żelazny grzbiet pręgierza, Rynek/Żeglarska) | ~1,5 min → | → księżyc |
| 4 (koniec) | księżyc | **Pomnik Kopernika**, Rynek (wąsik 2003, delfin w studzience) | ~0 (MG tu) | → KONIEC → MG |

**Sprawdzenie reguły #2 ✓:** start → P1 → P2 → P3 → P4(=MG) ≈ 2,5 + 3,5 + 1,5 + 1,5 ≈ **~9-10 min** (w budżecie 12 ±2). Legi 2-4 są krótkie, bo trzy ostatnie przystanki leżą na Rynku Staromiejskim — grupa „zbiega się" na MG. Brak zawrotek; jednokierunkowy sweep E → centrum.

> Chcesz równiejsze ~3-min legi? Można dorzucić zachodni przystanek (np. **Łuk Cezara**, Piekary 37 — Michał Archanioł z trąbką) między Pod Gwiazdą a Kopernikiem, kosztem drobnego „bouncu" na zachód (~+3 min, wciąż w budżecie). *(W prototypie Łuk Cezara jest już użyty jako glif-dystraktor — patrz niżej.)*

### Glify na mapie — referencja autora/MG (NIE na mapie gracza)

9 glifów: **4 z łańcucha** + **5 dystraktorów**. Na mapie gracza widać tylko symbole (bez tej tabeli) — gracz nie wie, które są „prawdziwe". Glify są **arbitralne/kosmetyczne** — Oskar może podmienić symbole dowolnie; tu propozycja.

| Glif | Pozycja na mapie | Obiekt w terenie | Rola |
|---|---|---|---|
| ☀ słońce | Rynek Nowomiejski | **Pomnik Piernikarki** | łańcuch — **start (z K1)** |
| 🌳 drzewo | Rynek Staromiejski 35 | **Kamienica Pod Gwiazdą** | łańcuch — krok 2 |
| 🐷 świnka | Rynek / zbieg z Żeglarską | **osiołek** (pręgierz) | łańcuch — krok 3 |
| 🌙 księżyc | Rynek Staromiejski (przy Ratuszu) | **Pomnik Kopernika** | łańcuch — krok 4 → KONIEC |
| 🔑 klucz | ul. Pod Krzywą Wieżą (SW, mury) | **Krzywa Wieża** | dystraktor |
| ⚓ kotwica | wylot ul. Chełmińskiej (NW Rynku) | **pies Filuś** | dystraktor |
| 👑 korona | ul. Piekary 37 (W) | **Łuk Cezara** | dystraktor |
| 🏺 dzban | Rynek Nowomiejski (przy Modrym Fartuchu) | **Pomnik Przekupki** | dystraktor |
| 🔨 młot | Rynek Staromiejski 6 (naprzeciw Ratusza) | **Dwór Artusa** | dystraktor |

**Dobór dystraktorów = propozycja do podmiany** (to Twój wybór — `Co autor może zrobić sam`). Wszystkie 24/7 z ulicy, rozpoznawalne, **świadomie pominięto Fontannę Flisaka** (motyw flisaka rezerwujemy dla Z4 — żeby nie primować gracza przed czasem).

### Szyfrownik — szkic struktury

Każdy wiersz: **realny obiekt — opis/haczyk do rozpoznania — następny glif**. 4 trafne + dystraktory (bez „następnego glifu" = ślepy zaułek).

9 wierszy = 9 glifów na mapie (4 łańcuch + 5 dystraktorów). Kolejność wierszy w karcie warto **wymieszać** (nie grupować łańcucha na górze).

| Obiekt | Opis (haczyk) | Następny glif |
|---|---|---|
| Pomnik Piernikarki | brązowa kobieta z koszem pierników, mały piesek szarpie suknię | drzewo |
| Kamienica Pod Gwiazdą | pozłacana gwiazda na żółtej barokowej fasadzie, data 1697 | świnka |
| osiołek | żelazny grzbiet dawnego pręgierza, sadzano na nim karnych żołnierzy | księżyc |
| Pomnik Kopernika | uczony z brązu; wąsik dostrzeżony w renowacji 2003; delfin w studzience cokołu | KONIEC |
| Krzywa Wieża | pochylona baszta, „test sumienia" (dystraktor) | — |
| Pomnik Przekupki | kobieta z gęsią, kosz jaj, waga u stóp (dystraktor) | — |
| pies Filuś | kundel z melonikiem prof. Filutka, pilnuje parasola (dystraktor) | — |
| Łuk Cezara | szczątek torów tramwajowych pod sklepieniem, Michał Archanioł z trąbką na attyce (dystraktor) | — |
| Dwór Artusa | czerwona neorenesansowa fasada, złote daty 1311 i 1891 na wieżyczkach (dystraktor) | — |

### Legenda mapy (do autouzupełnienia przez grupę)

Wszystkie **9 glifów** — grupa wpisuje obiekt po rozpoznaniu w terenie. Na swojej trasie wypełni 4 (łańcuch); resztę zostawi pustą lub wypełni, jeśli zabłądzi do dystraktora. To, że glifów jest 9 a kroków 4, jest **celowe** — gracz nie wie, które 4 są jego.

```
☀ słońce  = __________     🔑 klucz   = __________
🌳 drzewo  = __________     ⚓ kotwica = __________
🐷 świnka  = __________     👑 korona  = __________
🌙 księżyc = __________     🏺 dzban   = __________
                            🔨 młot    = __________
```

(grupa wpisuje rozpoznany obiekt; start łańcucha = ☀ słońce, z K1)

## Treść startu w K1 — segment Z1 (draft)

To **fragment koperty K1 dotyczący szlaku** (pierwszy glif + zasada łańcucha + co raportować MG). Pełna K1 (brief fabularny + groźba/motywacja) powstaje osobno — blok 1C roadmapy. Stylizacja językowa do dopracowania (Twoje pióro); poniżej wersja funkcjonalna w tonie.

> Pośrednik nie ufa nikomu, kto trafia do niego prosto. Pójdziecie **po znakach**.
>
> Macie **mapę** i **szyfrownik**. Na mapie naniesiono znaki — ale znak nie zdradza, co przy nim stoi. To trzeba **zobaczyć na własne oczy**.
>
> Zaczynacie od znaku **☀ słońca**. Znajdźcie go na mapie i idźcie tam.
> - Na miejscu rozpoznajcie, **co naprawdę** stoi przy tym znaku, i odszukajcie ten obiekt w szyfrowniku.
> - Szyfrownik przy właściwym obiekcie wskaże **następny znak**. Idźcie do niego — i tak krok po kroku.
> - Jeśli obiekt nie wskazuje dalej (ślepy zaułek), pomyliliście miejsce — wróćcie do ostatniego pewnego znaku.
> - Rozpoznane obiekty wpisujcie do **legendy** na mapie.
>
> Po **czterech** znakach traficie tam, gdzie kręci się nasz człowiek. Zamelduje­cie mu **cztery rozpoznane miejsca — w kolejności, w jakiej je odkryliście**. To wasza przepustka dalej.

**Co raportuje grupa do MG:** 4 rozpoznane obiekty w kolejności (np. *„Piernikarka — Pod Gwiazdą — osiołek — Kopernik"*). MG weryfikuje wg wzorca w `mechanics/koperty-mg.md` i wydaje K2.

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
2. ~~Co jest odpowiedzią dla MG?~~ ROZSTRZYGNIĘTE [2026-05-31]: **(a) 4 rozpoznane obiekty w kolejności** (dowodzi przejścia w terenie — same glify da się odczytać z mapy, obiekty nie).
3. ~~Mapa: ikony czy abstrakcja?~~ ROZSTRZYGNIĘTE [2026-05-31]: **abstrakcyjne glify** + legenda do autouzupełnienia; rozpoznawane są realne obiekty.
4. **Ostateczny dobór 4 miejsc** — propozycja wyżej, do akceptacji/podmiany.
5. **Dyspersja per grupa w pełnej grze** — model różnych łańcuchów, do MVP.
6. **Mapa fizyczna**: na prototyp funkcjonalny mock (rzut starówki + glify + legenda); finalna stylizacja manuskryptowa → po dry-runie.
7. ~~Przeprojektowanie trasy pod regułę #2~~ ROZSTRZYGNIĘTE [2026-05-31]: trasa kończy **na Rynku Staromiejskim (MG)**, nie przy Piccolo — sweep Nowe Miasto → centrum, ~9-10 min, w budżecie. Piccolo to dopiero Z2/F2A (po K2). Napięcie „start+koniec na NE" zniknęło.
8. **Przeciek w szyfrowniku — Twoja decyzja** [2026-05-31]. Dodanie glifów-dystraktorów na mapie domyka odczyt **z mapy**, ale zostaje mniejszy przeciek: w szyfrowniku wiersze łańcucha **mają** „następny glif", a dystraktory **nie mają** — więc grupa czytająca całą kartę może wytypować **zbiór** 4 obiektów łańcucha bez chodzenia. **Kolejności i tak nie da się z tego odczytać** (szyfrownik jest „obiekt→glif", nie „glif→obiekt"; bez chodzenia nie wiesz, który obiekt stoi przy którym glifie), a MG i tak weryfikuje raport — więc w praktyce exploit jest słaby. To **trade-off**, nie błąd: brak „następnego glifu" u dystraktorów to właśnie to, co daje **samokorektę w terenie** (ślepy zaułek demaskuje pomyłkę).
   - **Opcja A (obecna, domyślna):** zostaw jak jest — pełna samokorekta, drobny przeciek zbioru, niwelowany przez kolejność + weryfikację MG.
   - **Opcja B (fałszywe tropy):** dystraktory też dostają „następny glif", ale prowadzą w **pętlę/ślepy zaułek po dojściu** → karta wygląda jednolicie, zbioru nie da się wytypować. Koszt: samokorekta przesuwa się o jeden krok (poznajesz pomyłkę dopiero na miejscu następnego glifu) + więcej szumu w terenie. **To zmiana mechaniki — Twój wybór.**

## Co autor może zrobić sam vs gdzie pomocy

- **Sam**: ostateczny dobór miejsc, dobór dystraktorów, projekt graficzny mapy/szyfrownika, jakie glify (kosmetyka).
- **Z pomocą agenta**: weryfikacja istnienia obiektu (wiki), opisy/haczyki do szyfrownika, alternatywy miejsc, redakcja, kalkulacja czasu trasy.
