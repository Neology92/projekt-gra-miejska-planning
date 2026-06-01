# Faza 3 — Finał

**Status**: koncept jest. Scenariusz aktorski do napisania. Mechanika zliczania głosów do dopracowania.

## Cel fazy (z perspektywy gracza)

1. Rozwiązać **zagadkę 7** = sklejenie wniosków z faz 2A i 2B.
2. **Zdecydować komu dostarczyć list**: Janowi Bażyńskiemu (Tajna Rada) czy komturowi Albrechtowi (Krzyżacy).
3. Dotrzeć pod ruiny zamku krzyżackiego **na ósme bicie dzwonu (20:30)**.
4. Obejrzeć **scenkę finałową** — starcie Bażyński vs Albrecht, z wynikiem zależnym od zliczonych listów.

## Cel fazy (z perspektywy projektu)

- **Catharsis narracyjny** — zebranie wszystkich grup w jednym miejscu, wspólne doświadczenie.
- **Mechanika zbiorowa** — wynik gry zależy od decyzji *wszystkich grup razem*, nie pojedynczej.
- **Ujawnienie plot twistu** — Jordan = Bażyński. Te grupy które zostawiły list u Jordana = wiedziały lub miały szczęście; te które dostarczyły komturowi = zdrada (świadoma lub nie).
- **Aktorski element** — scenka pod zamkiem to **moment teatralny**, kulminacja kilkugodzinnego doświadczenia.

## Zagadki finałowe — Z7 (mieszczanie) i Z11 (krzyżacy)

Oba tory mają osobny finał, oba to **szyfry** rozwiązywane z elementów zebranych w 2B.

### Model szyfru finałowego [KANON 2026-06-01]

Dwa składniki: **klucz** (z zagadki obowiązkowej) + **szyfrogram** (z opcjonalnej). To **odwrócenie** wcześniejszego Modelu B (było: Z3=szyfrogram, Z4=klucz) — patrz `puzzles/z3-lista-tr-spec.md` Decyzja #1.

- **KLUCZ szyfru = ODKRYTY PRZEZ PORÓWNANIE NAGŁÓWKÓW** (oba tory). Motto `HELFEN, HILFEN UND WEHREN!` w charakterystycznym foncie łączy oba dokumenty wizualnie. **Asymetria pozyskania:**
  - **Mieszczanie** — jawne motto **wykradzione** w Z3 (lista TR z infiltracji Albrechta). Zdobywasz sekret wroga.
  - **Krzyżacy** — motto **znane** (przynależność do Zakonu = godność). Porównują swoje motto z zaszyfrowanym nagłówkiem Z11.
- **SZYFROGRAM = z jednej zagadki opcjonalnej**, wydawany **przez MG** przy oddaniu rozwiązania opcjonalnej (Z4/5/6 dla TR; Z8/9/10 dla krzyżaków). **Wymienialny** — każda opcjonalna daje (równoważny) szyfrogram.
- **Typ szyfru: Cezar shift +7 — OBA tory** [decyzja 2026-06-01]. **Klucz = przesunięcie odkryte przez porównanie nagłówków**: nagłówek Z7/Z11 = to samo motto w tym samym foncie co Z3, ALE zaszyfrowane — gracz porównuje litera po literze → odkrywa shift = 7. Brak rekwizytu (koła — zbyt silna wskazówka). Szyfrogram Z7 (mieszczanie): `OHUZ CVU IHFZLU PZ QVYKHU AOL JVVR` (= „HANS VON BAYSEN IS JORDAN THE COOK"; skrócony, Jordan na końcu = zaskoczenie). Patrz `puzzles/z7-szyfr-spec.md §0`.

### Wynik odszyfrowania (per tor)

- **Z7 (mieszczanie)** → **Jordan = Hans von Baysen**. Szyfrogram to przechwycona wiadomość: Zakon wiedział, kim naprawdę jest „kucharz". Lista nazwisk z Z3 NIE zawiera „Jordana" (pseudonim) — dopiero odszyfrowanie sklei tożsamość. Po rozwiązaniu grupa wie, do kogo realnie dostarczyć list.
- **Z11 (krzyżacy)** → **HASŁO ROZPOZNAWCZE (parole)** do Albrechta. **Bez plot twistu tożsamości** [decyzja 2026-05-29] — Albrecht jawny; bramą jest **dowód godności**. Hasło to mechaniczne ucieleśnienie bramy: bez niego komtur uznaje kuriera za niegodnego. Podwójna brama: motto-klucz (tylko „swój" odszyfruje) + podanie hasła Albrechtowi.
  - **Treść hasła — KANDYDACI [2026-06-01, do wyboru Oskara; żaden nie wybrany]:**
    - A1. `THE VIRGIN GUARDS HER OWN` (maryjne; 21 liter)
    - A2. `SUB TUUM PRAESIDIUM` (łac. „pod Twoją obronę" — autentyczna antyfona maryjna; 17 liter)
    - B1. `ONE CROSS ONE OATH` (lojalność, zwięzłe; 15 liter) ⭐ typ agenta
    - B2. `OBEDIENT UNTO MARIENBURG` (posłuszeństwo Malborkowi; 21 liter)
    - C1. `THE KEEP STILL STANDS` (wojskowe, oblężenie; 18 liter)
    - C2. challenge–response `ACRE` ↔ `MARIENBURG` (4/10 liter)
    - Po wyborze: policzyć ciphertext Cezara shift+7 (jak Z7; patrz `z7-szyfr-spec.md §0`). Materiał gracza = EN.
- Po rozwiązaniu: **finalna decyzja** — komu dostarczyć list (Baysen / Albrecht). Wybór wolny dla obu klas.

Szczegóły: `puzzles/zagadka-finalowa.md` (do napisania — obejmie Z7 i Z11).

## Decyzja: Bażyński czy Albrecht?

Grupa **wybiera** i dostarcza list:
- **Do Jana Bażyńskiego** (Jordana) — może wrócić do Piccolo / lub inny punkt wymiany.
- **Do komtura Albrechta** — kontakt na mieście (zaaranżowany przez MG).

Po dostarczeniu list jest **fizycznie zliczony** przy danej stronie.

### Co napędza decyzję?

- Plotki z fazy 1 + perspektywa rzemieślnika (piekarza) z Z5 → argumenty etyczne *za* i *przeciw* TR.
- Plot twist (Jordan = Bażyński) → poczucie zdrady jeśli grupa "zorientowała się za późno" i już wcześniej decydowała przeciw TR.
- **Polityczna sympatia** gracza — czy się utożsamia z mieszczanami czy z porządkiem zakonnym.

## Tor krzyżaków — symetria

- Krzyżacy mają **wolny wybór** [decyzja 2026-05-29]: domyślnie instrukcja „do komtura Albrechta", ale mogą dostarczyć list **Bażyńskiemu** (zdrada/zmiana strony). Symetrycznie do TR. Liczenie nie rozróżnia klasy — tylko stronę odbioru.

## Zliczanie i finał

Mechanika:
1. **20:30**, wszystkie grupy zbierają się przy ruinach zamku.
2. **8. uderzenie dzwonu** (rekwizyt: dzwon ręczny lub nagranie — **nie Tuba Dei**, ten dzwon to dopiero 1500).
3. MG (Oskar) odczytuje **wynik zliczenia listów** — przewaga jednej ze stron.
4. **Scenka aktorska**:
   - **Bażyński** (Piotr) i **Albrecht** (Zosia) konfrontują się.
   - Treść scenki zależy od wyniku — różne warianty zakończenia.
   - W tle: tłum graczy jako "lud Torunia".
5. **Epilog**: krótki kontekst — jak naprawdę skończył się bunt (kapitulacja zamku 7-8 II, wojna 13-letnia 1454-1466, II pokój toruński 1466). Można wskazać że gracze "byli przy tym".

## Zakończenie — decyzja [2026-05-29]

**Model: HYBRYDA z inwersją moralną.**

- **Fakty historyczne są STAŁE** niezależnie od wyniku: zburzenie zamku krzyżackiego, ideologia stojąca za buntem, wojna 13-letnia (1454-1466), II pokój toruński (1466). Gra nie tworzy fikcji alternatywnej na poziomie faktów.
- **Scenka końcowa PRZESUWA CIĘŻAR NARRACJI** wg wyniku zliczenia listów — ten sam koniec faktograficzny, inne *kto wychodzi na swoje*:
  - **Droga A — zwycięstwo mieszczan (przewaga listów u Bażyńskiego):** krzyżacy są **pokonani** — grani jako ci, którzy czują się przegrani, ustępują, wynoszą się z miasta. Triumf TR rozegrany dosadnie.
  - **Droga B — zwycięstwo krzyżaków (przewaga listów u Albrechta):** **kompromitacja mieszczan** — krzyżacy wygrywają **oskarżeniami**: obnażają bunt jako kontrowersyjny, niszczą narrację „dobrego/moralnego" powstania, pokazują działania TR (Nieszawa, cła, egoizm patrycjatu) jako interesowne. Nie militarne zwycięstwo, lecz **dyskredytacja**.
- **OTWARTE [do decyzji Oskara]:** czy Droga B nie **wybiela** Zakonu zbytnio? Rozważana alternatywa: niezależnie od wyniku scenka **przedstawia OBIE perspektywy** (racje i winy obu stron), a wynik tylko przesuwa, której głos brzmi mocniej — zamiast czynić jedną stronę „słuszną". Do rozstrzygnięcia.
- **WYMOWA MORALNA (filar tonalny):** to **mieszczanie/kupcy (TR) są tu „źli"** — ich zwycięstwo to **„świat zmienia się na gorsze"**, nie jednoznaczny triumf. Patrz `lore/fakty-vs-fabula.md`. Seedowane wcześniej: kontr-perspektywa piekarza w Z5 („bunt szkodzi rzemiosłu"). Plot twist Jordan = Bażyński ma więc gorzki smak: „bohater", do którego prowadziliśmy graczy, jest przywódcą strony, która pcha świat w dół.
- **Reżyseria:** scenka ma być **bardzo dosadna i emocjonalna**, intensywność proporcjonalna do liczby dostarczonych listów (przewagi). Im wyraźniejszy wynik, tym mocniejsze odegranie.
- **Remis** → wciąż otwarte (sugestia: kliffhanger + meta-żart *„a jak się to potoczyło, dowiecie się z wiki"*).

## Co już wiemy / decyzje

- Finał o **20:30**, 8. bicie dzwonu — wybrane.
- Lokalizacja: **ruiny zamku krzyżackiego** (Przedzamcze 3, Gdanisko obok).
- Element aktorski — obsada zamknięta: **Bażyński = Piotr**, **Albrecht = Zosia**, MG = Oskar.
- **Nie używać nazwy "Tuba Dei"** dla dzwonu (anachronizm — Tuba Dei od 1500).

## Otwarte pytania

1. **Jaki dźwięk dzwonu?** Rekwizyt? Nagranie? Realny dzwon (kościół Jakuba ma dzwon ratuszowy?)
2. **Aktorska scenka — kto gra?** Oskar + znajomy? Animatorzy z większą wprawą?
3. ~~Czy zakończenie historyczne czy alternatywne~~ ROZSTRZYGNIĘTE [2026-05-29]: **hybryda** — fakty stałe, scenka przesuwa ciężar emocjonalny wg wyniku; wymowa moralna: TR/kupcy „źli" (patrz sekcja „Zakończenie — decyzja").
4. **Co z grupami które nie zdążą rozwiązać Z7** → dostarczają na ślepo? Mają jakiś hint od MG?
5. **Skala zliczania** — proste (liczba listów) czy ważone (np. punkty zaufania z Z2B mnożą wagę listu)?
6. **Po finale** — wspólne piwo? Ognisko? Zamknięcie gry musi mieć **rytuał pożegnalny** żeby gracze nie odpłynęli "no i koniec, idziemy".
