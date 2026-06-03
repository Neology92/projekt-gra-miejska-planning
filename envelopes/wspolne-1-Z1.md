# K1 — Starting Envelope (draft)

> **Language:** English (player-facing). Planning notes in Polish below.
> **Status:** draft [2026-06-02, v2 — rewizja narracji WPROWADZONA] — awaiting Oskar's review.
> **Contents of physical envelope:** this note + sealed letter (rekwizyt) + map + cipher sheet.
> ⚠ **Glif startowy △ = placeholder** — konkretny pierwszy glif zależy od mapy Z1 (jeszcze nieprzypisanej, `#66`/`puzzles/z1-szlak-spec.md`). △ jak w mocku; potwierdzić przy renderze mapy.

---

> **Migracja → `envelopes/` (root)** z `prototype/k1-envelope-draft.md` — treść kanoniczna v2/v3 (@ ac9901d^) [2026-06-02].

## Meta — montaż

- **Frakcja:** WSPÓLNA dla obu torów (miasto + krzyzacy). Brief **celowo identyczny** dla wszystkich 10 grup — nie zdradza klasy (`mechanics/grupy-i-klasy.md §34`). Podział frakcji następuje dopiero w pozycji 2 (Z2).
- **Pozycja (nr otwierania):** 1.
- **Mapa — WSPÓLNA dla wszystkich grup:** jeden plik (`public/maps/map.png/.pdf`), wszystkie glify widoczne. Grupy nawigują po wspólnej mapie, różnią się tylko **pierwszym glifem** (różne łańcuchy przez tę samą mapę). Patrz `puzzles/z1-10-sciezek.md` + `mechanics/mapy-i-szyfrownik.md`.
- **Wkładki fizyczne w kopercie:** (a) **mapa** (wspólna, identyczna dla wszystkich) · (b) **karta deszyfrownika** danej grupy (detal → następny glif, per kolor/ścieżka) · (c) **zapieczętowany list** (rekwizyt niesiony całą grę → grafika: `prototype/sealed-letter/`, 3 warianty, wybór Oskara) · (d) **opaska koloru** grupy (pasek papieru, nosi lider — `grupy-i-klasy.md`).
- **Kiedy wręczyć:** na starcie, briefing na Rynku Nowomiejskim.
- **Kiedy NIE wręczać:** —
- **Dokąd odsyła:** łańcuch 4 miejsc → raport u MG (Rynek Staromiejski) → koperta pozycji 2 (`miasto-2-Z2` / `krzyzacy-2-Z2`).


## TEXT — K1 (player reads this)

---

*The wax gives under your thumb — a seal none of you knows. Inside: a single sheet of instructions, and folded beneath it, heavier, the thing itself — the letter you are paid to carry, and forbidden to read.*

*Outside, the city does not yet know to be afraid. It is Saint Dorothy's day, the last gasp of carnival before the fast — pipes and drums down every street, masks on half the faces you pass, a child pressing paper roses into your hands as if roses grew in February. Good cover, a day like this: you can wear another face, and no one looks at you twice.*

---

**Toruń, the 6th of February, the Year of Our Lord 1454**

**Messengers,**

The sealed letter enclosed with this note is not yours to read. Carry it. Protect it. Deliver it before the eighth bell strikes tonight.

You were paid to do a simple thing. The city has made it complicated. Your contact is not where he was meant to be, and you will have to find your own way to the one who must receive this.

**Know this:** whoever reads that letter, loses it, or puts it in the wrong hands will answer for it. Not with coin. **With their hands.** You are warned once. You will not be warned again.

---

**Your road begins here.**

Enclosed: a **map** of marks and a **cipher sheet**.

Each mark on the map tells you only *where* to go — never what you will find. That you must see for yourselves.

**Begin at △.** Find it on the map and go.

At each mark:
1. Look for a **detail** that matches one of the pictures on your cipher sheet.
2. That picture points you to the **next mark**. Go there. Do it again.
3. Write each place you name into the **legend** on your map.

Your chain is **exactly four steps** long, and it ends where you are to make contact.

Beware false trails: if you find yourselves going in circles, or returning to a mark you have already named, you have strayed — go back to the last mark you were sure of.

---

> **↪ TO THE GAME MASTER** — *game instruction, not part of the world*
> When your chain is complete, bring your **four places, in the order you found them**, to the Game Master, who keeps to the Rynek Staromiejski (the Old Town market square). That is your way onward.

---

*Tell no one.*

---

*So: a letter you cannot read, a road you must find for yourselves, and a plain promise of what failure costs. Whoever wants this carried does not mean for you to enjoy the carrying. The first mark is waiting on the map. You start walking.*

---

## PLANNING NOTES (nie dla gracza)

- **Groźba**: "With their hands" — fizyczna, medievalna, bez ozdobników. Celowo krótka.
- **Plot twist K2** (pośrednika nie ma) jest *zasiany* w K1 ("Your original contact is not where he was meant to be") — ale nie wyjaśniony. Grupa to odczuje dopiero przy MG po Z1.
- **"Eighth bell"** = godz. 20:30, ósme bicie zegara ratuszowego. Nie nazywamy Tuba Dei (anachronizm).
- **Data 6 II [decyzja Oskara 2026-06-02]:** cała gra = jeden wieczór 6 lutego (św. Doroty, karnawał). Zmieniono z „3rd of February" → „6th of February" dla spójności z finałem (noc buntu). Zgodne z `concept/00-overview.md` (data fikcji = 6 II).
- **Klamra A2 (maski → „wear another face"):** otwarcie zasiewa karnawał + maski („a man can wear another face and no one looks twice") → payoff w K3, gdzie Jordan każe „wear another face" przy Albrechcie. Pokrycie: `karnawal-1454.js` (maski = osłona konspiracji). Setup atmosferyczny + uzasadnienie mechaniki przebrania.
- **Klamra B2 (św. Dorota — róże w zimie):** „a child handing out paper roses as if roses grew in February" — legenda św. Doroty (róże/jabłka z raju zimą), jej dzień = 6 II. Smaczek atmosferyczny.
- **Rekwizyt w kopercie:** list zapieczętowany (noszą całą grę), mapa (9 glifów, bez nazw), karta deszyfrownika (9 piktogramów → następny glif).
- **Wersja TR / wersja Krzyżacy**: K1 jest WSPÓLNA dla obu torów (nie zdradza frakcji). Podział następuje dopiero w K2.
- Ton: rzeczowy, lekko zagrażający — ani epicki, ani przygodowy. Zleceniodawca nie jest wrogiem, ale nie jest przyjacielem.
- **Dwa rejestry [2026-06-01]:** otwarcie i zamknięcie = *kursywa* (narracja z głów kurierów — wprowadza motyw); środek (data + „Messengers…" + instrukcje mapy) = roman (wiadomość zleceniodawcy). Wiadomość **nieruszona** — dorzucona tylko oprawa. Klucz: kursywa=głowa, roman=słowa świata (`mechanics/koperty-mg.md`).

---

## REWIZJA [2026-06-02] — ✅ WPROWADZONA (rationale zachowane do review)

> Tekst wyżej (v2) realizuje poniższe. Zostawione jako uzasadnienie decyzji. Re-render → `public/` po akceptacji.

1. **Oprawa narracyjna → 2. osoba „you/your".** Otwarcie i zamknięcie (kursywa) przepisać z 1. os. mn. („we"/„us"/„our") na narratora mówiącego DO grupy. Cel: narrator może odmalować więcej świata dookoła. Patrz `mechanics/koperty-mg.md §Osoba narracji`.
2. **Status K1 = nadal wiadomość-wyjątek.** Rdzeń (data + „Messengers,…" + instrukcje mapy, roman) **zostaje wiadomością zleceniodawcy** — K1 to świadomy wyjątek od „koperta = scena" (ktoś realnie pisze zlecenie). Zmiana dotyczy tylko OSOBY oprawy kursywą, nie statusu listu.
3. **Linia 13 („The wax gives under your thumb…") — atmosfera fikcji, NIE meta → ZOSTAJE.** To kurier otwierający list w 1454 (świat), nie komentarz mechaniki gry. Nie tnie tego Zasada #3. Jeśli przy 2. os. zabrzmi niezręcznie — dostosować, nie usuwać. ⚠ flaga do akceptacji Oskara.
4. **Plotek tu brak** — K1 ich nie ma; wplatanie plotek w narrację dotyczy K2.
5. **Meta-ramka MG (raport Z1) [2026-06-02]:** Z1 kończy się **zaniesieniem 4 miejsc do MG**. Obecna logistyka jest w fikcji („tell our man the four places you visited, in order") — wydzielić instrukcję gracz↔MG do **osobnej ramki meta** (callout), zamiast trzymać ją wplecioną. Rozważyć, czy fikcyjne „our contact awaits" zostaje jako oprawa, a konkret (komu/gdzie raport) idzie do ramki. Konwencja → `mechanics/koperty-mg.md §Trzeci rejestr`.
