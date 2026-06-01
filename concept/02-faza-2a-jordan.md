# Faza 2A — Jordan

**Status**: szkielet jest. Spotkanie z Jordanem i test zaufania do rozpisania w detalu.

## Cel fazy (z perspektywy gracza)

Znaleźć kucharza Jordana, dowiedzieć się od niego co tak naprawdę dzieje się w mieście, zdobyć następne wskazówki.

## Cel fazy (z perspektywy projektu)

- **Reset narracyjny**: po szoku że pośrednika nie ma, gracze dostają nowy kierunek.
- **Pogłębienie immersji**: realna postać NPC + posiłek (zmysłowe doświadczenie).
- **Test zaufania**: Jordan nie ufa kurierom — sprawdza ich, zanim cokolwiek przekaże. Daje to **drugi powód** dlaczego graczy spotykają zagadki w fazie 2B (= weryfikacja).
- **Forshadowing finału**: gracze dowiadują się że jest bunt + dowiadują się o godzinie finału (20:00 = ósme bicie dzwonu).
- **Plot twist w grze** (Jordan = Bażyński) — *nie ujawnia się tu*, dopiero w fazie 3.

## Zagadka 2 — Droga do Jordana

Mechanika:
- Druga koperta (po opuszczeniu MG na końcu fazy 1) zawiera zestaw **3 rzeczy** do zestawienia (np. ikonografia, daty, miejsca).
- Po zestawieniu: wskazówka *"udajcie się do [lokal] i znajdźcie osobę z [atrybut] o imieniu [imię]"*.
  - **Atrybut**: chochla (kontekst — Jordan to legendarny kucharz miejski z chochlą; patrz wiki `legenda-jordan.js` / Quest #5 w `scenariusze-questow.js`).
  - **Lokal**: do decyzji — Picollo? inna gospoda? (Picollo padło w pierwotnym opisie autora, ale to nazwa współczesna; do potwierdzenia czy używamy współczesnej nazwy czy "gospoda przy Rynku Staromiejskim" w stylu historycznym.)
- Po podaniu hasła ("przyszliśmy do Jordana") osoba ich przyjmuje.

Szczegóły: `puzzles/droga-do-jordana.md`.

## Spotkanie z Jordanem

Skrypt szkicowy (do rozpisania przez Oskara):

1. **Posiłek** — Jordan wydaje graczom prosty posiłek (kawałek chleba, kiełbasy, piwo? — coś zgodnego z karczmą z XV w., realistyczna wskazówka kuchni). Patrz wiki `kuchnia-pierniki.js` i `karnawal-1454.js`.
2. **Dialog wstępny** — Jordan nie ufa, dopytuje skąd są, kto ich przysłał, co mają przekazać.
3. **Informacja o buncie wprost**: Jordan mówi że w mieście wisi w powietrzu konfrontacja z Zakonem. Wymienia konkrety: blokada bram zamkowych, redakcja Absagebriefu, plany na wieczór 6 lutego.
4. **Godzina finału**: "Pod zamkiem, gdy zegar wybije ósmą — wszystko się rozstrzygnie."
5. **Test zaufania** (zagadka w spotkaniu): Jordan zadaje pytanie/zagadkę żeby sprawdzić czy są godni zaufania. Treść do wymyślenia.
6. **Pożegnanie**: Jordan wręcza **kopertę z fazą 2B** — listę 4 zagadek (z których 2 obowiązkowe, 2 opcjonalne).

## Test zaufania — ROZSTRZYGNIĘTE [2026-05-31]

**Mechanizm dwustopniowy (pasywny):**
1. Hasło = imię „Jordan" — tylko K2 wersja TR je zawiera; krzyżacy nie znają.
2. Weryfikacja koloru opaski lidera (5 kolorów TR vs 5 krzyżackich).

Jordan **nie zadaje aktywnego testu** — samo pojawienie się z imieniem + właściwym kolorem wystarczy. Następnie wyraża prośbę o dowiedzenie wiarygodności w czynie → szczegóły w K3. Krzyżacy nigdy tu nie trafiają — mają Albrechta/Zosię.

Szczegóły: `puzzles/test-jordana.md`.

## Co już wiemy / decyzje

- Jordan **nie ujawnia** że jest Bażyńskim — ten plot twist czeka na fazę 3.
- Jordan **już testuje** graczy (test zaufania w spotkaniu) — to się łączy z fazą 2B (która jest dalszym etapem weryfikacji).
- **Posiłek** to świadomy element doświadczenia — autor chce zmysłowego elementu.

## Otwarte pytania

1. ~~Jak Jordan rozróżnia TR od krzyżaków?~~ ROZSTRZYGNIĘTE [2026-05-31]: **hasło (imię „Jordan") + kolor opaski**. TR ma imię w K2; krzyżacy nie — trafiają do Albrechta/Zosi. Piotr gra tylko Jordana (TR).
2. **Lokalizacja Jordana**: konkretny lokal w Toruniu (Picollo? Hochla? Pierogarnia?). Wymaga researchu i konsultacji z właścicielem lokalu (czy zgodzi się gościć grupy).
3. **Język spotkania**: Jordan mówi współczesną polszczyzną czy stylizowaną?
4. **Posiłek**: gracze go zjedzą = czas trwania spotkania ~15-20 min (nie 5). Zaplanować logistykę MG — kolejne grupy mogą czekać.
5. **Co jeśli grupa nie zda testu zaufania?** Drugi shot? Krótka kara fabularna? Po prostu i tak idą dalej? (Test ma być **dramaturgiczny** a nie blokujący.)
