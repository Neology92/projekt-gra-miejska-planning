# KF (krzyzacy) — Final Envelope · Z11 (draft)

> **Language:** English (player-facing). Planning notes in Polish below.
> **Status:** draft [2026-06-03] — KZ finale; explains the motto-gate to Albrecht (the Z11 szyfrogram itself comes from the optional, pos 4 — NOT this envelope). Awaiting Oskar's review.
> **Canon:** `concept/04-faza-3-final.md`, `puzzles/z11-szyfr-spec.md`. Mirror (TR finale): `envelopes/miasto-6-Z7.md`.

---

## Meta — montaż

- **Frakcja:** **krzyzacy** (Zakon). Lustro funkcjonalne `miasto-6-Z7`, ale inny finał (BRAK twistu tożsamości — Albrecht jawny; brama = dowód godności).
- **Pozycja (nr otwierania):** 5 (finał krzyżaków; tor KZ = 5 pozycji). Zadanie = **Z11** (szyfr finałowy).
- **Wkładki / co gracz ma już przy sobie:** Tabela 1 + Tabela 2 (**z koperty Z3Z** — `krzyzacy-3-Z3Z`, włożone tam, wręczone przez Albrechta), **szyfrogram Z11** (`UEFNEJ, UEGFEJ TJI WEUPEJ!` — przechwycona dyspozycja, **w kopercie opcjonalnej Z8/9/10, pozycja 4**), zapieczętowany list (noszony od pozycji 1).
- **W tej kopercie:** **tylko ten brief.** Wszystkie pomoce papierowe gracz już niesie (tabele z Z3Z, szyfrogram z opcjonalnej — zasada „treści w kopertach", `koperty-mg.md §2b`). Ta koperta spina elementy: każe odszyfrować to, co już niesie.
- **Kiedy wręczyć:** MG wręcza, gdy grupa kończy tor 2B (Z3Z + opcjonalna, z której ma już szyfrogram) i zbiera się do finału.
- **Dokąd odsyła:** ruiny Przedzamcza, ósme bicie (20:30) — wybór strony (Albrecht / Bażyński), oddanie listu. **Brama Albrechta = wypowiedzenie motta Zakonu** (odszyfrowane z Z11).
- **Canon:** `concept/04-faza-3-final.md`, `puzzles/z11-szyfr-spec.md §4/§5`.

---

## TEXT — KF krzyzacy (player reads this)

> **Rejestr:** SCENA, 2. os. „you", *kursywa* (głos z głów). Szyfrogram (przechwycona dyspozycja) gracz już ma — z opcjonalnej (pozycja 4); ta koperta każe go odszyfrować, nie podaje go. Brak twistu — to nie odkrycie tożsamości, lecz ostatni dowód godności przed komturem.

---

*The night you served has come. Across Toruń the carnival gutters out, the masks come down — and the Order's quiet work shows its face at last.*

*You did what was asked. You walked into the rebels' nest, sat at their cook's table, marked the man and the hour. Now one thing remains: to prove, to the Komtur's own face, that you are the Order's and no one else's.*

*The Order does not take a courier on trust. You already carry the proof, if you can read it: that coded line you came away with — a scrap of the Order's own dispatch, the watchword folded into it that every true son of the Order can draw out and no stranger can. Read your sign, find its row in the table, and let the marks give up their word.*

*The word you read is the Order's own. Carry it to the walls.*

*At Przedzamcze, where the fortress stands in ruin, the eighth bell will bring the Komtur into the dark — and across from him, the rebels' chairman. Between them, a single choice: into whose hands your sealed letter goes.*

*Speak the watchword to the Komtur, and he will take what you carry. Withhold it — or carry the letter to the other man — and that is your choice to make.*

*The eighth bell. The ruins. You walk.*

---

## PLANNING NOTES (nie dla gracza)

- **Brama dostawy = motto [decyzja Oskara 2026-06-03]:** odszyfrowany Z11 = motto Zakonu `HELFEN, HEILEN UND WEHREN!`. Wypowiedzenie go Albrechtowi przy Przedzamczu **odblokowuje oddanie mu listu**. Bez motta komtur odprawia. Mechanika aktora: `materials/actors/albrecht-actor-card-draft.md §FINALE`. Symetria z torem TR: to samo motto jest tam KLUCZEM do Z7 (a tu WYNIKIEM).
- **Szyfrogram = motto, nie „parol wymyślony":** `puzzles/z11-szyfr-spec.md §2`. Ciphertext liczony wierszem S11 (MARIENBURG), round-trip ✓ (`tools/z11-cipher/cipher-data.js`).
- **Prowenancja szyfrogramu [Oskar 2026-06-03]:** szyfrogram wydaje MG **po opcjonalnej Z8/9/10 (pozycja 4 — przedostatnia koperta), wymienialny** — NIE w tej finałowej kopercie. To przywraca kanon „szyfrogram z opcjonalnej" i sprawia, że opcjonalna realnie bramkuje finał (bez niej brak szyfrogramu). Ta koperta tylko spina: każe odszyfrować to, co grupa już niesie. Patrz `puzzles/z11-szyfr-spec.md §6`, `envelopes/krzyzacy-4-Z8/Z9/Z10`.
- **Po co odszyfrowywać własne motto:** brama = dowód, nie wiedza — większość graczy nie zna niemieckiego motta z głowy; deszyfracja je ujawnia i dowodzi, że grupa złożyła klucz (była u Jordana → symbol → tabula recta). Patrz spec §2.
- **Wolny wybór (jak TR):** mogą oddać list **Bażyńskiemu** (zmiana strony) zamiast Albrechtowi — `concept/04`. Tekst nie ocenia wyboru.
- **BRAK twistu tożsamości** [decyzja 2026-05-29]: finał KZ nie ujawnia „Jordan=Bażyński" jako rewelacji dla siebie — Albrecht jawny od początku. Brama = godność (motto), nie wiedza tajna.
- **Ósme bicie / Przedzamcze / nie Tuba Dei** — jak `miasto-6-Z7` (anachronizm dzwonu).
- **Interpunkcja szyfrogramu [Oskar 2026-06-03]:** pokazany **z przecinkiem i wykrzyknikiem** w tych samych pozycjach co motto (`UEFNEJ, … WEUPEJ!`) — lokuje słowa i lustruje urządzenie z Z7 (interpunkcja jako kotwica). Interpunkcja przechodzi 1:1 (nie szyfrowana). Walidacja round-trip w `cipher-data.js` operuje na samych literach + spacjach. (Dane: `materials/props/z11-tabula-recta-draft.md`.)
- **Dystrybucja Tabeli 2 [ROZSTRZYGNIĘTE 2026-06-03, Oskar]:** Albrecht wręcza **obie tabele razem** (Tabela 1 + Tabela 2) przy Z3Z, jako handler KZ. Gracz nosi je przez całą drugą połowę gry; finał (ta koperta) nie dokłada żadnego rekwizytu poza briefem. Upraszcza montaż finału (mniej kopert do wydania). Zsynchronizować: `albrecht-actor-card §PART TWO STEP K3` (dodać Tabelę 2 do wręczanego kompletu), `z11-szyfr-spec.md §6/§8`. (Szyfrogram = osobno: po opcjonalnej, pozycja 4 — patrz nota „Prowenancja szyfrogramu" wyżej.)
- **Status:** placeholder w manifescie (`envelopes/README.md`) → podniesiony do **draft** [2026-06-03].
