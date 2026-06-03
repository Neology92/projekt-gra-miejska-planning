# K3-K — From Albrecht / Infiltrate Piccolo (Z3Z) — draft

> **Language:** English (player-facing, #70). Planning notes in Polish below.
> **Status:** draft [2026-06-03, v1 — model Oskara: obserwacja=klucz, jedzenie=łup, godzina ambient, single-envelope] — awaiting Oskar's review.
> **Handed over by:** Komtur Albrecht (Zosia) — handler toru KZ, end of Faza 2A (see `materials/actors/albrecht-actor-card-draft.md §PART TWO`). Handed **with the Recognition Table (Tabela 1)**, in silence (meta, like dealing a card).
> **Voice:** Albrecht's written order = **roman** (words of the world — the handler's order, like Jordan's K3); scene framing around it = *italic*, 2nd person „you" (inside the couriers' heads). *(Wzorzec = `miasto-3-Z3`; konwencja — `mechanics/koperty-mg.md`.)*
> **Typography:** narration = *italic*; Albrecht's order (title + body + „— A.") = roman.
> **Contents of physical envelope:** this note **+ both Order tables (Tabela 1 recognition grid + Tabela 2 tabula recta), enclosed inside** [decyzja 2026-06-03: all paper aids travel inside envelopes; actors hand only the sealed envelope]. *(Meal token / coupon — see PLANNING NOTES §Kupon.)*
> **Canon:** lustro `envelopes/miasto-3-Z3` (TR). Mechanika: `puzzles/zamek-krzyzacki-lista.md §Z3Z`; klucz → `puzzles/z11-szyfr-spec.md` (Tabela 1: kolor szaty × chochla).

---

## Meta — montaż

- **Frakcja:** **krzyzacy** (Zakon). **Obowiązkowa** dla wszystkich 5 grup KZ (rdzeń toru, jak Z3 dla TR).
- **Pozycja (nr otwierania):** 3.
- **ETAP Z3Z = jedna koperta** (w przeciwieństwie do dwukopertowego Z3 TR). Brak twistu „to kradzież" → brak odpowiednika `miasto-4-Z3b`. Cover = sam task (rozpoznaj człowieka + zdobądź prowiant); nic nie jest ukryte przed graczem poza tym, że obserwacja zasila finałowy szyfr (Z11).
- **Wkładki fizyczne:** ta notatka **+ Tabela 1 + Tabela 2 (włożone do koperty)** [2026-06-03: pomoce papierowe w kopertach, nie z ręki aktora]. *(Kupon na posiłek — patrz §Kupon.)*
- **Kiedy wręczyć:** Albrecht (Zosia) po Z2, jako handler KZ (`albrecht-actor-card §STEP K3`).
- **Kiedy NIE wręczać:** przed spotkaniem z Albrechtem; grupom mieszczan (mają `miasto-3-Z3`).
- **Dokąd odsyła:** do **Piccolo** (siedziba TR, gdzie urzęduje Jordan/Piotr = cel infiltracji) → po obserwacji grupa wraca do MG z „opisem człowieka" (kolor+atrybut) → MG wydaje opcjonalną (Z8/Z9/Z10).
- **APKA [ZBUDOWANE 2026-06-03]:** obserwacja jest też **bramką w aplikacji** (lustro kodu `30` z toru TR) — etap `z3z`, `puzzle.type:'observe'`: gracz zgłasza **kolor szaty (`brown`) + atrybut (`ladle`)** (accept-listy z synonimami), po czym apka kieruje na `z3zb` (handoff do MG). ⚠ **Ta koperta + obie tabele zostają FIZYCZNE** (rozkaz Albrechta niesie tabele Z11) — apka trzyma tylko skrót sceny + bramkę, nie zastępuje koperty (inaczej niż TR, gdzie K-Z3b w całości poszło do apki). `app/steps.js §z3z`, `todo/otwarte-pytania.md #77`.
- **Canon:** lustro `miasto-3-Z3`; `puzzles/zamek-krzyzacki-lista.md §Z3Z`; `puzzles/z11-szyfr-spec.md`.

## TEXT — K3-K (player reads this)

---

*Out of the Komtur's sight, his grid of colours and signs folded away in your bag, his order in your hand. Back into the carnival — and all the way across the masked, roaring city the same talk keeps catching at you, none of it kind to the master you now serve. That the Komtur himself wanted to come to terms with the townsmen, and Marienburg forbade it — that even he thinks the cause half-lost. That the Grand Master has sat silent in his castle for weeks and answered no letter, as if he had washed his hands of this place. That even the bishops are turning — the Pomesanian one sheltered the rebels' own Union under his roof, once. You push it all down. Somewhere across this din there is a cook's kitchen that is not a kitchen at all, and a part for you to play in it.*

---

# INFILTRATE PICCOLO

You would serve the Order? Here is how you earn the right.

There is a cook in this town. **Jordan.** He keeps a place they call **Piccolo** — and it is no kitchen. It is the traitors' own nest, where their Secret Council is fed and sheltered and lays its plans.

Tonight you walk in as one of *them.* The Council's couriers come and go from that kitchen all night, and the carnival lends you a face for free — **pass yourself as the Council's own, and the cook will take you for friends.** He feeds his people without a second thought. Let him feed you.

**Your task is to know the man.** Not his words — his *person.* Sit at his board, take what he puts in your hand, and while you eat at his hearth, watch him close. Mark what no friend would trouble to mark: **the colour he wears, and the one thing never out of his hand.** Fix them in your memory and carry them back to me — by such marks the Order knows its enemy, and will know him again, wherever he runs. Bring me the man, drawn in those two strokes.

And let the meal be no waste. The castle bars its gates against the siege to come, and the Order's men must be fed; what fills traitors' bellies may as well fill ours. **Take the token he hands you and spend it to the last** — every bowl you empty at their hearth is one the Council will not. Let the traitors feed the Order's own, and never know whom they fed.

Eat, take his measure, and slip back into the dark. Do not be a face he remembers.

— A.

---

*One of the Council's people, then — for an hour, over a borrowed supper, with a careful eye on the man with the ladle. Eat their bread, learn his face, and be gone before anyone wonders whose side you came in on.*

---

> **↪ TO THE GAME MASTER** — *game instruction, not part of the world*
> Bring the cook back to the Game Master — he keeps to the Rynek Staromiejski (the Old Town market square) — in two strokes — **the colour he wears and the thing he carries.** With those — and the cook's own meal-token spent at his board — you have done what was asked; what comes next is waiting there.

---

## PLANNING NOTES (nie dla gracza)

**Model Z3Z [decyzja Oskora 2026-06-03] — co bramkuje, co jest ambient:**
- **GŁÓWNY cel = OBSERWACJA (kolor szaty + atrybut/chochla).** To realny klucz → Z11 (Tabela 1: `kolor szaty Jordana × chochla → symbol`, `z11-szyfr-spec.md`). Cover dla gracza: „Zakon musi *rozpoznać/potwierdzić* tego człowieka — zapamiętaj jego znaki". Gracz NIE wie, że to zasila szyfr (anti-hand-holding; reguła Tabeli 1 też ogólna).
- **Tekst-reguła OGÓLNY [jak Tabela 1, z11-spec]:** order NIE nazywa „brown"/„ladle" wprost — „the colour he wears, and the one thing never out of his hand". Gracz sam obserwuje brąz + chochlę i sam je kojarzy przy Tabeli 1. Brak prowadzenia za rączkę.
- **DRUGI cel = prowiant = ZJEDZENIE go.** Fabuła [Oskar]: zamek szykuje się na oblężenie/zamknięcie bram → wysyła „głodnych lojalistów" po pożywienie; „kradzież zaopatrzenia" = **zjedzenie posiłku** wroga (pozbawienie ich + przykrywka). Pokrycie: `scenariusze-questow.js` (3 II blokada bram), `concept/05`.
- **Godzina 20:30 = AMBIENT, nie bramka [Oskar 2026-06-03].** Jordan o niej mówi swoim ludziom TR — KZ mogą ją usłyszeć w tle (ładny obraz: obie strony znają godzinę), ale **nie muszą jej „wyciągać"**. KZ dostają 20:30 od **Albrechta** (handler, `albrecht-actor-card §STEP K3` — „come at the eighth bell"). Z3Z jej nie gatekeeper'uje. *(Wcześniejsze „wyciągnięcie godziny od Jordana" z meta-kartki/zamek-lista = ZDEZAKTUALIZOWANE — patrz §Do zaktualizowania.)*
- **Loop/reset = trywialny [Oskar 2026-06-03].** 5 grup KZ infiltruje Piccolo niezależnie; każda osobno zdobywa swój klucz (kolor+atrybut) przez obserwację. **Brak maszynerii patrolu/resetu** (inaczej niż kradzież listy w Z3 — bo tu nie ma fizycznego pojedynczego łupu do podebrania, tylko obserwacja + zjedzenie). Piotr lekki: jest sobą (kucharz przy palenisku, obsługuje swoich TR), KZ go obserwują z boku.

**§Kupon — ROZSTRZYGNIĘTE [Oskar 2026-06-03]:** kupon wręcza **JORDAN — wszystkim** (karmi „swoich"). Mechanika cover: **grupa KZ udaje ludzi Tajnej Rady** → Jordan, biorąc ich za swoich, daje kupon/posiłek jak każdej grupie. Samo zdobycie kuponu = „dokonali kradzieży zaopatrzenia" (zjedli prowiant wroga, podszywając się). Symetria z Z3 (TR udają donosicieli u Albrechta ↔ KZ udają TR u Jordana). ⚠ **Konsekwencja obsadowa:** Piotr musi **grać nabranego** — wpuścić grupy KZ mimo ich koloru opaski (KZ = Blue/Purple/White/Brown/Black, NIE z 5 kolorów TR), nakarmić, dać się obejrzeć (szata+chochla), ale **NIE** dawać im K3 (to tylko dla zweryfikowanych TR). Rola dopisana → `materials/actors/jordan-actor-script-draft.md §PART TWO (cel infiltracji KZ)`. Realizacja kuponu = poczęstunek przy Piccolo (jeśli serwuje) / u MG — domknąć przy ops.

**Sender = Albrecht (roman order, „— A.") [lustro miasto-3-Z3]:** K3-K to **pisany rozkaz handlera** (wyjątek senderless, jak K3 Jordana). Głos = pyszny komtur (`albrecht-actor-card`). Albrecht wręcza milcząco (meta); treść = jego rozkaz. Inicjał „— A." spójny z „— J."/„— R."/„— N.".

**Single-envelope (brak Z3b-odpowiednika):** Z3 TR potrzebował 2. koperty, bo prawdziwy cel (kradzież) był ukryty za zwiadem → olśnienie. Z3Z **nie ukrywa celu** (rozpoznaj + zjedz podane wprost) → jedna koperta. Jeśli kiedyś dojdzie twist — dopisać, ale teraz zbędne.

**Spięcie z Z11 [twarda zależność]:** obserwacja musi dać **brąz (szata)** + **chochla** — dokładnie współrzędne Tabeli 1 (`z11-szyfr-spec.md §2`). Wymóg kostiumu Piotra: szata jednoznacznie brązowa + chochla zawsze widoczna (oflagowane w `z11-spec §7` — kolizja z opaską G9 brąz). Order kieruje uwagę na „colour + one thing" → gracz zapamięta brąz+chochlę.

**Klamra masek [A2, jak K3 TR]:** „the carnival lends you a face for free… half the city is doing the same" — przebranie (głodni obcy) naturalne dzięki karnawałowi. Pokrycie: `karnawal-1454.js`.

**Plotki [WPLECIONE 2026-06-03, decyzja Oskara „dorzuć"]:** Pula B mocniejsze (`plotki §Przypisanie` K-Z3Z) wplecione w opener italic (mowa zależna, jak K2-K): **B7** (komtur sam chciał się układać, Malbork zakazał), **B8** (Erlichshausen milczy/porzucił), **B9** (biskupi się odwracają — pomezański gościł Związek). Krytyka **Zakonu** (strona KZ) → inwersja moralna, zasila wolny wybór w finale. Pokrycie: `albrecht-kalb.js`, `donosiciele-1454.js`, `zwiazek-pruski.js`.

**Dwa rejestry:** scena (wyjście od Albrechta, powrót w karnawał, postanowienie) = *kursywa*; rozkaz Albrechta (tytuł + treść + „— A.") = roman.

## §Do zaktualizowania (spójność po tej decyzji)

- `puzzles/zamek-krzyzacki-lista.md §Z3Z` + Otwarte #5: „wyciągnięcie godziny 20:30 od Jordana" → ZDEZAKTUALIZOWANE (godzina = ambient + od Albrechta; główny klucz = obserwacja). Zaktualizować.
- `lore/meta-kartki/krzyzacy-3-Z3Z.md`: tabela „Cel kradzieży = kupony + godzina buntu" → uściślić (główny = obserwacja kolor+atrybut; jedzenie = łup; godzina = ambient). Otwarte pytania pkt 1 („jak Jordan przecieka godzinę") = bezprzedmiotowe.
- `concept/05 §Struktura`: opis Z3Z („wyciągnięcie godziny od Jordana") → zsynchronizować.

## Źródła

| Plik | Po co |
|---|---|
| `envelopes/miasto-3-Z3.md` | wzór struktury (lustro TR): rozkaz handlera roman + scena italic, nagłówek wielkimi, „do not be remembered", ramka MG |
| `puzzles/z11-szyfr-spec.md` | klucz Z11 (Tabela 1: kolor szaty × chochla); wymóg obserwacji brąz+chochla |
| `materials/actors/albrecht-actor-card-draft.md §PART TWO` | Albrecht handler: wręcza K3-K + Tabelę 1, zadanie „mark what he wears/carries", godzina od niego |
| `puzzles/zamek-krzyzacki-lista.md §Z3Z` | mechanika Z3Z (do aktualizacji wg tej decyzji) |
| `lore/plotki-i-pogloski.md` §Przypisanie | Pula B do ew. wplecenia (B7/B8/B9) |
| `concept/05-tor-krzyzakow.md` | tor KZ, oblężenie, brama godności |
