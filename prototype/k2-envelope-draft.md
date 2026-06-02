# K2 — After Z1 Envelope (draft)

> **Language:** English (player-facing). Planning notes in Polish below.
> **Status:** draft [2026-06-01] — awaiting Oskar's review.
> **Contents of physical envelope:** main note (this) + intermediary's note (separate slip).
> **Triggers:** MG hands this to group after they correctly report 4 locations in order.

---

## MAIN NOTE — K2 (player reads this)

---

*Four marks walked, four names given — and in return, this. We had hoped to find our contact waiting. Instead: an envelope, and a scrap of paper folded inside it.*

*The carnival is louder here, and stranger. Carts roll toward the square that the men swear are loaded with fireworks "for the feast" — but the crates ride heavy, and the men guarding them are not laughing. Under the masks and the music, the whole city feels wound tight, like a string before it snaps.*

---

**Messengers,**

Your contact is gone.

He left this note *(enclosed)* and nothing more. We do not know if he fled, was taken, or simply decided the risk was too great — though a contact who vanishes the same night the city arms itself is rarely a contact who chose to leave. What we know is that the letter still needs to reach its recipient before tonight.

You will have to find the way yourselves.

Before you do — you were on the streets of this city today. So were other people. Here is what they were saying.

---

*Overheard near the Old Town Square:*

> *"The Council meets after dark, tells no one, decides for everyone. Secret — because it fears the light."*

*A craftsman near the city wall:*

> *"We give the men and the weapons. When it's all over, the Council will still rule — not us."*

*Two merchants, arguing by a cart:*

> *"War comes — bread doubles in price. This is a lords' quarrel and the baker pays for it."*

*Whispered at the inn:*

> *"They say Bażyński is handing Prussia to the king in Kraków. Swapping one master for another."*

*An old woman, shaking her head:*

> *"Bażyński? His leg's gone stiff on him again — the great man can barely cross a room. And that's who means to bring down armoured knights."*

*An old man at the gate:*

> *"When it's done, some knight will walk away with all of Prussia in his pocket. The cities did the work. Someone else will take the prize."*

---

Now. Find your next contact.

**[Z2 — THE MORNING ERRANDS]**

Three people went into town this morning, and each bought one thing. Work out who bought what — and where each of them works.

*Where they work, and what is made there:*
- The Old Mill — bread
- Piccolo — hot food *(a kitchen — ladled out)*
- The Smithy — horseshoes

*The three:* Kordian · Lambert · Jordan
*What was bought:* food · a horseshoe · cloth

*Overheard this morning — all of it true:*
1. Lambert could have eaten at his own place, yet he went to buy his food elsewhere.
2. Jordan bought from the one who bought cloth.
3. The miller swears he bought nothing from Kordian.

Once you have placed Jordan, you will know where he works. Go there — and ask for him by name.

---

## INTERMEDIARY'S NOTE — separate slip (player reads this)

---

I cannot be there. Too dangerous now.

And it was never mine to keep — I was only ever to pass it on.

This letter is for the head of their Council. Their chairman. Into his own hand, and no other's.

Find the way. — R.

---

*So we are on our own. A riddle to point us at a man, a man to point us onward, and the letter still heavy in the bag. Whoever R. was, he is gone — we are not. Three people, three errands. Let us work it out.*

---

## PLANNING NOTES (nie dla gracza)

**Plotki dobrane z Puli A** (krytyka TR dla kurierów TR):
- A3 — Tajna Rada opaque, unelected (forshadow F2A)
- A5 — craftsmen shoulder the risk, Rada gets power (F3)
- A6 — bread prices, bunt costs the poor (accessible, F3)
- A7 — Bażyński giving Prussia to Poland (F3, inkorporacja)
- A8 — Bażyński will walk away with all of Prussia (strong F3 forshadow; spoilery? tak, celowo)
- **NOWA [2026-06-02] — kulawy Bażyński (klamra C2):** „his leg's gone stiff… can barely cross a room." Podwójna funkcja: (a) Pula A — słaby/dwuznaczny przywódca; (b) **forshadow tożsamości** — Jordan też kuleje (skrypt Piotra). Uważny gracz łączy w finale (Jordan=Bażyński). Świadomie **bez** wzmianki o tavernie/lokalu — żeby NIE spalić twistu przed wizytą u Jordana (kulającego w Piccolo). Pokrycie: Bażyński „kulawy bazyliszek", reumatyzm (`jan-bazynski.js`).

**Wiadomość pośrednika:** lakoniczna, tylko inicjał (nie wiadomo kto to R. — niepotrzebna wiedza). Mechanika: gracze dostają ją jako „dowód" że pośrednik istniał, ale uciekł.

**TROP CELU — „dostarcz chairmanowi" [2026-06-01, decyzja Oskara]:** slip R. zasiewa **silny trop**, że list ma trafić do **głowy Rady / chairmana**, w jego własne ręce. To ustawia cel kuriera na początku gry — **bez zdradzania, kim chairman jest**. Funkcja: w finale, gdy Z7 odszyfruje „HANS VON BAYSEN IS JORDAN THE COOK", gracz sam spina wątki: chairman z K2 = Hans von Baysen z listy Z3 (wpis #1 „they call him chairman") = Jordan-kucharz, którego poznali. Splice player-derived, anty-prowadzenie-za-rączkę. Dlatego list Z7 **został odchudzony** (nie zapowiada już rodzaju informacji) — ciężar znaczenia niosą trzy wątki: ten trop + „chairman" przy wpisie #1 Z3 + sam szyfr. Patrz `prototype/z7-szyfrogram-draft.md` (nota „List ODCHUDZONY") i `puzzles/z7-szyfr-spec.md`.

> ⚠ **Wersja Krzyżacy:** ich K2 prowadzi do Albrechta (nie chairmana TR) — trop celu musi być inny (parole/hasło do komtura, nie „chairman Rady"). Do napisania przy MVP. NIE kopiować tropu TR 1:1.

**Z2 — wpisana wersja themingowa [2026-06-01]:** zagadka logiczna 3 osoby × {miejsce pracy, zakup}, rdzeń Oskara z nałożoną trójką **Jordan / Piccolo / chochla**. Rozwiązanie jednoznaczne (dowód: `puzzles/droga-do-jordana.md`). Wynik = **Jordan pracuje w Piccolo** → gracz idzie tam, pyta o Jordana (imię = jednocześnie hasło-test wejścia, patrz `concept/02-faza-2a-jordan.md`), rozpoznaje go po **chochli**. „ladled out / ask for him by name" niesie atrybut + hasło bez meta-gadania.
- **Imiona prowizoryczne** (Kordian/Lambert/Jordan): „Kordian" anachroniczny (XIX w.); do podmiany przy period-themingu. Tylko **Jordan** jest kanoniczny (kontakt TR).
- **Wersja krzyżacka:** inne K2 — Z2 prowadzi do **Albrechta**, nie Jordana/Piccolo; ta sama struktura logiczna, inny cel (imię/miejsce). Do napisania przy MVP. NIE kopiować 1:1.

**Wersja Krzyżacy:** inne K2 (Pula B zamiast A; Z2 prowadzi do Albrechta, nie Jordana). Do napisania przy skalowaniu do MVP.

**Ton:** plot twist (pośrednik zniknął) podany sucho, bez dramatyzmu — bardziej straszny tak niż z fanfarami.

**Pass atmosferyczny [2026-06-02]:**
- **Klamra A1 (R. → martwy flisak w Z4):** wzmocniono cień „was taken" („a contact who vanishes the same night the city arms itself is rarely a contact who chose to leave"). Payoff w K-Z4: R. = martwy boatman nad Wisłą, zginął strzegąc przechwyconej dyspozycji. Nie zdradzać tu — tylko zasiać.
- **Klamra B3 (broń „na fajerwerki"):** „carts… loaded with fireworks 'for the feast' — but the crates ride heavy" → proch do dział wnoszony pod osłoną zapustów. Forshadow szturmu/finału. Pokrycie: `karnawal-1454.js` (broń/proch „na turniej/fajerwerki").
- **Eskalacja napięcia:** K1 = „miasto nie wie, że ma się bać"; K2 = „wound tight, like a string before it snaps" — napięcie rośnie w godzinach (oś 6 II, jeden wieczór).
- **Maski (kontynuacja A2):** „under the masks and the music" — utrzymuje motyw przebrania zasiany w K1, wiodący do K3.

**Dwa rejestry [2026-06-01]:** dorzucone *otwarcie* i *zamknięcie* = kursywa (narracja z głów); main note + slip R. = roman (wiadomości z nadawcą — slip przeniesiony z kursywy na roman dla spójności klucza). Wiadomości **nieruszone treściowo**, tylko oprawa + format. ⚠ **Plotki (overheard)** = przytoczone słowa świata → docelowo roman; zostawione kursywą do passu stylizacyjnego (nie rozszerzam scope). Klucz: kursywa=głowa, roman=słowa świata (`mechanics/koperty-mg.md`).

---

## REWIZJA [2026-06-02] — uwagi Oskara (DO WPROWADZENIA, jeszcze nie wprowadzone)

> Notatki kierunkowe. Tekst wyżej **nietknięty** — materiał porównawczy. Przepisanie + render po akceptacji.
> To **największa przebudowa** ze wszystkich kopert — K2 zmienia status i dochodzi nowa warstwa mechaniki (glify).

### A. Rama przestaje być głosem zleceniodawcy → SCENA-ODKRYCIE (2. osoba)
- Obecna rama „**Messengers, your contact is gone. We do not know if he fled…**" = zewnętrzny zleceniodawca relacjonuje grupie, co się stało. **To wycinamy.** Oskar: nikt z zewnątrz im tego nie mówi — **kurierzy sami to rozkminiają**: docierają na miejsce, zamiast kontaktu znajdują kopertę z notatką, i z niej (oraz z tego, co widzą wokół) **sami orientują się**, że R. zniknął.
- Nowa rama = **narracja-odkrycie z głów, 2. osoba** („*you reach the mark… no one waits; instead, folded paper in his place…*"). Patrz `mechanics/koperty-mg.md §Osoba narracji`.
- **Skutek statusu:** K2 przesuwa się z „wiadomość + slip" ku **scenie**. Jedynym realnym dokumentem-nadawcą zostaje **slip „— R."** (roman). Zaktualizowane w `koperty-mg.md` Zasada #2.

### B. Plotki → wplecione w narrację-podróż, nie wyliczone cytaty
- Obecny blok „*Overheard near the square / A craftsman / Two merchants / Whispered at the inn…*" (osobne cytaty) → **rozpuścić w opis drogi**: co grupa mija, słyszy w przejściu, wyłapuje z tłumu karnawału. Mowa zależna / strzępy w narracji 2. os., nie lista źródeł.
- **Treść/funkcja plotek zostaje** (Pula A: A3/A5/A6/A7/A8 + kulawy Bażyński C2) — zmienia się tylko **forma podania**. ⚠ To zastępuje wcześniejszą notę „plotki docelowo roman" (akapit wyżej): w narracji 2. os. idą kursywą jako część opisu.

### C. NIE zdradzać, że szukają Jordana / że pójdą tam, gdzie pracuje
- Obecne zdanie (sekcja Z2): „**Once you have placed Jordan, you will know where he works. Go there — and ask for him by name.**" → **USUNĄĆ.** Oskar: na tym etapie gracze **nie mogą wiedzieć, że szukają Jordana**.
- **Trzy rzeczy do samodzielnego połączenia:** *Piccolo* (miejsce) · *Jordan* (imię) · *chochla* (atrybut). Dopiero gdy zepną wszystkie trzy — wiedzą, dokąd iść i kogo szukać. „Jordan" ma być **odkryciem**, nie zdaniem odczytanym i skwitowanym „aha, Jordan, to idziemy".

### D. NOWA WARSTWA — glify miejsc (pomysł Oskara) → nawigacja zamiast „idź tam, gdzie pracuje"
- Każde z 3 miejsc zagadki dostaje **glif** wypisany obok jego nazwy. Glify = te z **wygenerowanej mapy Z1** (`prototype/maps/`).
- **Haczyk:** glif **Piccolo = PRAWDZIWY** (realnie oznacza punkt na mapie). Glify **Starego Młyna i Kuźni = ZMYŚLONE** — nigdy nie występują na mapie.
- Skutek: gracze mogą udać się **tylko w jedno miejsce** (to z istniejącym glifem). Domknięcie zagadki = sprawdzić, który z trzech glifów faktycznie jest na mapie. To zastępuje wykładanie „Jordan pracuje w Piccolo, idźcie tam".
- ⚠ **Zależność:** wymaga, by glif Piccolo **realnie istniał** na mapie Z1 — sprzęga z pendingiem mapy/deszyfrownika. Pełna mechanika → `puzzles/droga-do-jordana.md`.

### E. Hasło dnia — przekazuje je R. (w slipie)
- Slip R. ma poinstruować: **po dotarciu na miejsce zwrócić się do osoby PO IMIENIU i wskazać, co kupiła dziś rano (chochlę)** — wtedy będzie wiedziała, że są „od nas". To **hasło ustalone na dziś**.
- Trigger rozpoznania (imię „Jordan" + „kupiłeś dziś rano chochlę") → **musi rozpoznawać Jordan-aktor**: cross-ref do `prototype/jordan-actor-script-draft.md` (do zsynchronizowania).

### F. Slip „— R." — rewrite na jasne skierowanie do kuriera
- Obecny slip („*This letter is for the head of their Council. Their chairman. Into his own hand…*") **nie jest jasny, że chodzi o list niesiony przez kuriera.** Przeredagować jako wprost skierowane do znalazcy:
  - sens: *„jeśli miałeś mi coś dostarczyć — to, co miałeś przekazać mnie, masz teraz zanieść do **głowy ich Rady, ich chairmana**, w jego własne ręce. Znajdź drogę."*
  - dołożyć **hasło dnia (E)** do slipu.
- Trop celu (chairman, bez zdradzania kim jest) **zostaje** — to klucz do finałowego splice'u (patrz nota „TROP CELU" wyżej).

### Flaga do decyzji Oskara
- **Redundancja:** czy po dodaniu nawigacji glifowej (D) wynik zagadki logicznej dalej musi jawnie nazwać „Jordan → Piccolo", czy logika ma dawać tylko trójkę {imię, atrybut, miejsce-jako-glif} bez wykładania celu? To decyzja projektowa Oskara — `puzzles/droga-do-jordana.md` ma to oznaczone.
