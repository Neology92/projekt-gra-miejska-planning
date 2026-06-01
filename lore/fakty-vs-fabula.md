# Fakty vs fabuła - gdzie naginamy

**Zasada**: każde nagięcie historii powinno być **świadomą decyzją autora**, udokumentowane tutaj. Wiki (`projekt_gra-miejska/`) to **źródło prawdy historycznej**, gra dopuszcza fikcję - ale fikcja musi być rozpoznawalna.

## Wymowa moralna — decyzja interpretacyjna [2026-05-29]

To nie jest naginka faktów, lecz **świadoma decyzja tonalna** o tym, jak gra *interpretuje* prawdziwe wydarzenia:

- **TR / mieszczanie / kupcy są w grze stroną „złą".** Ich zwycięstwo (historyczne — zamek pada) jest pokazane jako **„świat zmienia się na gorsze"**, a nie jednoznaczny triumf wolności.
- **Fakty zostają twarde** (zburzenie zamku, wojna 13-letnia, II pokój toruński) — naginamy **wymowę/sympatię**, nie przebieg.
- **Konsekwencje dla treści:**
  - Plot twist Jordan = Bażyński ma **gorzki smak** — „bohater" prowadzący graczy okazuje się przywódcą strony pchającej świat w dół.
  - Kontr-perspektywa **piekarza w Z5** („bunt szkodzi rzemiosłu") to seed tej wymowy — nie poboczny wątek, lecz zapowiedź morału.
  - Plotki/forshadowing powinny **dwuznacznie** malować TR (nie czysto heroicznie).
- **Finał:** scenka dosadna, emocjonalna, ciężar przesuwany wg liczby listów — patrz `concept/04-faza-3-final.md`.

## Naginane elementy

### 1. ☆ Jordan = Jan Bażyński (pseudonim)

- **Co naginamy**: Jordan to **legenda XIX-wieczna** (kucharz miejski z chochlą, wysadzony z wieżą zamku), Bażyński to **postać historyczna** (przewodniczący TR).
- **Łączenie**: w grze Jordan jest **pseudonimem** Bażyńskiego - czysta fikcja autora.
- **Dlaczego**: tworzy plot twist w F3, łączy legendę z faktem.
- **Ryzyko**: gracze (jeśli sprawdzą wiki) zauważą że Jordan to legenda, Bażyński to fakt - mogą uznać że łączenie jest naciągane. **Naginka świadoma, fabularnie uzasadniona.**

### 2. ☆ Zagadka kalimbowa (jeśli zostanie)

- **Anachronizm**: kalimba to instrument afrykański, znany w Europie od XIX w. W 1454 w Toruniu - **niemożliwe**.
- **Naginka**: użycie współczesnego instrumentu w grze "historycznej".
- **Mitigacja**: zmienić na instrument XV-wieczny (fletnia Pana, gęśle, dzwonki). Patrz `puzzles/kalimba.md` wariant B.

### 3. ☆ Nazwa lokalu "Picollo" (jeśli używamy)

- **Anachronizm**: nazwa współczesna, włoska. W XV w. - **niemożliwe**.
- **Mitigacja**: stylizować na "Gospoda Pod Chochlą" / "U Jordana".

### 4. ☆ Dzwon o 20:00

- **Sytuacja**: dzwon **Tuba Dei** z katedry Św. Janów to **dopiero 1500** (46 lat po buncie). W 1454 inny dzwon ratuszowy.
- **Mitigacja**: można odtworzyć dźwięk dzwonu (rekwizyt, nagranie, ręczny dzwon), ale **NIE używać nazwy "Tuba Dei"** w narracji. Mówić "dzwon ratuszowy", "ósme bicie".
- Patrz wiki Quest #8 (`scenariusze-questow.js`).

### 5. ☆ Lista nazwisk TR u komtura Albrechta

- **Sytuacja**: brak źródeł że Zakon miał konkretną fizyczną listę. Wiadomo że mieli donosicieli (`donosiciele-1454.js`), korespondencję anonimową.
- **Naginka**: zakładamy że istniała fizyczna lista.
- **Uzasadnienie**: scena dramatyczna, gracze mają cel.

### 6. ☆ Karnawał + bunt - tła zlewanie

- **Fakt**: 6 II 1454 to środa, dzień św. Doroty. Karnawał (zapusty) trwa do Środy Popielcowej.
- **Naginka (dramatyczna)**: w grze "miasto się bawi" jednocześnie ze spiskiem. W rzeczywistości - karnawał był, ale po 3 II (blokada bram) atmosfera mogła być już napięta.
- **Uzasadnienie**: kontrast karnawału i spisku to dobre tło narracyjne.

### 7. ☆ Szyfr Vigenère w Z7 (finałowy szyfrogram)

- **Anachronizm**: szyfr Vigenère spopularyzowany ~1553 (Bellaso / Vigenère) — ~100 lat po 1454. W praktyce krzyżackiej XV w. — niemożliwe.
- **Naginka**: przechwycony „list krzyżacki" (Z7) zaszyfrowany szyfrem Vigenère; klucz = motto Zakonu „Helfen, Hilfen und Wehren" z nagłówka listy nazwisk Z3.
- **Uzasadnienie**: spójna, satysfakcjonująca mechanika finału (godło wroga jako klucz do obu zakończeń — TR: Vigenère→twist, Krzyżacy: Cezara→parole) + pokrycie fabularne (Zakon realnie szyfrował i przechwytywał korespondencję — donosy OBA, `donosiciele-1454.js`). Mechanika > ścisłość epoki, jak kalimba.
- **Świadoma decyzja [2026-06-01]** (potwierdzona przez Oskara). Szczegóły: `puzzles/z7-szyfr-spec.md`.

## NIE naginamy (twarda historia)

- **Data buntu**: 6 II 1454 - twardo.
- **Główni gracze**: Bażyński, Tileman vom Wege, Albrecht Kalb, Erlichshausen - twarde imiona.
- **Lokalizacje** historyczne: Ratusz, Rynek, zamek krzyżacki, Dwór Artusa - twarde (lub gracze ich szukają).
- **Akt wypowiedzenia (Absagebrief)**: zredagowany 4 II 1454 - twarde.
- **Kapitulacja zamku**: 7-8 II 1454 - twarde.
- **Wojna 13-letnia**: 1454-1466, II pokój toruński 1466 - twarde.
- **Donosiciele autentyczni**: Peter Sleszer, Jacob Scolim, Hans Bischoff - twarde.

## Zasada dla zagadek

**Każda zagadka powinna mieć fundament w faktach** (postać, miejsce, data, dokument), nawet jeśli mechanika jest grą.

Przykład dobry: Z3 (lista nazwisk u Albrechta) → fakty: Albrecht istniał, donosiciele istnieli, lista jako element jest naciągana ale prawdopodobna.

Przykład zły (gdyby był): "Bażyński miał magiczny pierścień" → totalna fantastyka, łamie kontrakt z graczem.

## Naginki, których NIE robimy

- **Nie zmieniamy wyniku buntu** - kapitulacja zamku 7-8 II była, wojna 13-letnia nastąpiła, miasto wygrało.
- **Nie zmieniamy postaci** (Bażyński nie staje się "Janem Obrzyńskim" - błąd autora poprawiony).
- **Nie wprowadzamy postaci nieistniejących** jako głównych (NPC mogą być fikcyjni, ale **nie kluczowi** - kluczowi są historyczni).
- **Nie używamy anachronizmów bez świadomości** (Tuba Dei, kalimba, Picollo, szyfr Vigenère - oznaczone tu jako świadome decyzje lub do zmiany).

## Otwarte pytania

1. ~~Czy gra ma "alternative history" w finale~~ ROZSTRZYGNIĘTE [2026-05-29]: **nie na poziomie faktów** — fakty stałe, zmienia się tylko ciężar emocjonalny scenki wg wyniku (hybryda). Patrz „Wymowa moralna" wyżej i `concept/04-faza-3-final.md`.
2. **Czy są inne naginki które autor planuje?** (lista do uzupełnienia w trakcie pracy).

## Co autor może zrobić sam vs gdzie pomocy

- **Sam**: decyzje strategiczne (gdzie naginamy), kontrola tonu.
- **Z pomocą agenta**: weryfikacja faktów (porównanie z wiki), wykrywanie nieświadomych anachronizmów w propozycjach autora.
